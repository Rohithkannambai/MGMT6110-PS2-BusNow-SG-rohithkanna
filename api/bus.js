/**
 * Bus Arrival Serverless Function
 * Location: /api/bus.js (Project Root, sibling of package.json)
 * Endpoint: /api/bus?stop=[SELECTED_STOP_CODE]
 */

// In-memory cache for resolved bus stop descriptions
const busStopCache = new Map();
// In-memory cache for resolved service loop descriptions (null if confirmed non-loop)
const serviceLoopCache = new Map();

async function fetchTargetedBusStop(busStopCode, apiKey, signal) {
  const targetCode = String(busStopCode).trim();
  const encodedCode = encodeURIComponent(targetCode);
  const url = `https://datamall2.mytransport.sg/ltaodataservice/BusStops?BusStopCode=${encodedCode}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      AccountKey: apiKey,
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`LTA BusStops returned HTTP ${response.status}`);
  }

  const json = await response.json();
  const list = Array.isArray(json?.value) ? json.value : [];

  // Match exact BusStopCode before caching
  const match = list.find(
    (item) => String(item?.BusStopCode || '').trim() === targetCode
  );

  if (match && typeof match?.Description === 'string' && match.Description.trim().length > 0) {
    return { confirmed: true, description: match.Description.trim() };
  }

  return { confirmed: false, description: null };
}

async function resolveTargetedBusStops(stopCodes, apiKey, signal) {
  const uncached = stopCodes.filter((code) => !busStopCache.has(code));
  if (uncached.length === 0) return;

  await Promise.allSettled(
    uncached.map(async (code) => {
      if (signal?.aborted) return;
      try {
        const result = await fetchTargetedBusStop(code, apiKey, signal);
        if (result?.confirmed && result.description) {
          busStopCache.set(code, result.description);
        }
      } catch {
        // Do not cache failures, non-200 responses, or timeouts
      }
    })
  );
}

async function fetchServiceLoopDesc(serviceNo, apiKey, signal) {
  const targetSvc = String(serviceNo).trim().toUpperCase();
  const encodedSvc = encodeURIComponent(serviceNo);
  const url = `https://datamall2.mytransport.sg/ltaodataservice/BusServices?ServiceNo=${encodedSvc}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      AccountKey: apiKey,
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`LTA BusServices returned HTTP ${response.status}`);
  }

  const json = await response.json();
  const list = Array.isArray(json?.value) ? json.value : [];

  // Filter to records that exactly match the requested ServiceNo
  const matchingRecords = list.filter(
    (item) => String(item?.ServiceNo || '').trim().toUpperCase() === targetSvc
  );

  // If LTA returned no matching record for this service, do not confirm
  if (matchingRecords.length === 0) {
    return { confirmed: false, loopDesc: null };
  }

  // Look for a non-empty LoopDesc among matching records
  for (const record of matchingRecords) {
    if (typeof record?.LoopDesc === 'string' && record.LoopDesc.trim().length > 0) {
      return { confirmed: true, loopDesc: record.LoopDesc.trim() };
    }
  }

  // Confirmed: LTA successfully returned records for this service and LoopDesc is empty
  return { confirmed: true, loopDesc: null };
}

async function resolveLoopDescriptions(neededServices, apiKey, signal) {
  const uncached = neededServices.filter((s) => !serviceLoopCache.has(s));
  if (uncached.length === 0) return;

  await Promise.allSettled(
    uncached.map(async (svc) => {
      if (signal?.aborted) return;
      try {
        const result = await fetchServiceLoopDesc(svc, apiKey, signal);
        if (result?.confirmed) {
          serviceLoopCache.set(svc, result.loopDesc);
        }
      } catch {
        // Non-200, network failure, or timeout/abort: DO NOT cache
      }
    })
  );
}

export default async function handler(req, res) {
  // Extract stop query parameter from Vercel req.query or standard URL
  let stop = '';
  if (req.query && typeof req.query.stop === 'string') {
    stop = req.query.stop.trim();
  } else if (req.url) {
    try {
      const parsedUrl = new URL(req.url, `http://${req.headers?.host || 'localhost'}`);
      stop = (parsedUrl.searchParams.get('stop') || '').trim();
    } catch {
      stop = '';
    }
  }

  // Validate stop query on the server: must contain exactly five digits
  if (!/^\d{5}$/.test(stop)) {
    return sendJson(res, 400, {
      errorType: 'validation',
      error: 'Invalid stop parameter. Must be exactly five digits.',
    });
  }

  // Validate LTA_ACCOUNT_KEY configuration before calling LTA
  const apiKey = process.env.LTA_ACCOUNT_KEY;
  if (!apiKey || apiKey.trim() === '') {
    return sendJson(res, 503, {
      errorType: 'configuration',
      error: 'LTA_ACCOUNT_KEY is not set. Add it in Vercel, then redeploy.',
    });
  }

  const encodedStop = encodeURIComponent(stop);
  const upstreamUrl = `https://datamall2.mytransport.sg/ltaodataservice/v3/BusArrival?BusStopCode=${encodedStop}`;

  let upstreamResponse;
  try {
    upstreamResponse = await fetch(upstreamUrl, {
      method: 'GET',
      headers: {
        AccountKey: apiKey,
      },
    });
  } catch (err) {
    // Network, DNS, or socket connection failure
    return sendJson(res, 502, {
      errorType: 'unreachable',
      error: 'Could not reach LTA.',
    });
  }

  // CHECK response.ok BEFORE reading or parsing the response body
  if (!upstreamResponse.ok) {
    return sendJson(res, upstreamResponse.status, {
      errorType: 'refused',
      error: 'LTA declined the live-data request.',
      upstreamStatus: upstreamResponse.status,
    });
  }

  let data;
  try {
    data = await upstreamResponse.json();
  } catch (err) {
    return sendJson(res, 502, {
      errorType: 'unreachable',
      error: 'Could not reach LTA.',
    });
  }

  // Success response parsing:
  // Read only: BusStopCode, Services[] (ServiceNo, NextBus, NextBus2, NextBus3)
  const rawServices = Array.isArray(data?.Services) ? data.Services : [];
  const parsedServices = [];

  for (const item of rawServices) {
    const serviceNo = item?.ServiceNo;
    if (!serviceNo) continue;

    const arrivals = [];
    const candidates = [
      item?.NextBus?.EstimatedArrival,
      item?.NextBus2?.EstimatedArrival,
      item?.NextBus3?.EstimatedArrival,
    ];

    for (const est of candidates) {
      if (typeof est === 'string' && est.trim().length > 0) {
        arrivals.push(est.trim());
      }
    }

    // If a service contains zero valid arrival timestamps, omit that service
    if (arrivals.length > 0) {
      // Extract OriginCode and DestinationCode from the same first usable arriving bus (NextBus -> NextBus2 -> NextBus3)
      let originCode = null;
      let destinationCode = null;
      const busCandidates = [item?.NextBus, item?.NextBus2, item?.NextBus3];
      for (const bus of busCandidates) {
        if (bus && typeof bus.EstimatedArrival === 'string' && bus.EstimatedArrival.trim().length > 0) {
          const dest = bus.DestinationCode ? String(bus.DestinationCode).trim() : '';
          const orig = bus.OriginCode ? String(bus.OriginCode).trim() : '';
          if (dest.length > 0) {
            destinationCode = dest;
            originCode = orig.length > 0 ? orig : null;
            break;
          }
        }
      }
      if (!destinationCode) {
        for (const bus of busCandidates) {
          if (bus && bus.DestinationCode && String(bus.DestinationCode).trim().length > 0) {
            destinationCode = String(bus.DestinationCode).trim();
            const orig = bus.OriginCode ? String(bus.OriginCode).trim() : '';
            originCode = orig.length > 0 ? orig : null;
            break;
          }
        }
      }

      // Treat a service as a loop candidate only when both codes are non-empty and exactly equal
      const isLoopCandidate = Boolean(
        originCode && destinationCode && originCode === destinationCode
      );

      parsedServices.push({
        service: String(serviceNo),
        originCode,
        destinationCode,
        isLoopCandidate,
        arrivals,
      });
    }
  }

  // Separate into normal destination codes vs. loop candidate service numbers
  const normalStopCodes = [
    ...new Set(
      parsedServices
        .filter((s) => !s.isLoopCandidate && s.destinationCode)
        .map((s) => s.destinationCode)
    ),
  ];

  const loopServiceCandidates = [
    ...new Set(
      parsedServices
        .filter((s) => s.isLoopCandidate)
        .map((s) => s.service)
    ),
  ];

  const controller = new AbortController();
  let timeoutId;
  const timeoutPromise = new Promise((resolve) => {
    timeoutId = setTimeout(() => {
      controller.abort();
      resolve();
    }, 1200);
  });

  // Run normal destination and loop lookups concurrently under the single shared ~1.2s deadline
  const enrichmentPromise = Promise.allSettled([
    resolveTargetedBusStops(normalStopCodes, apiKey, controller.signal),
    resolveLoopDescriptions(loopServiceCandidates, apiKey, controller.signal),
  ]);

  try {
    await Promise.race([
      enrichmentPromise,
      timeoutPromise,
    ]);
  } catch {
    // Enrichment timeout or error should never delay or fail arrival results
  } finally {
    clearTimeout(timeoutId);
  }

  const finalServices = parsedServices.map((s) => {
    let dest = null;
    let loopDesc = null;

    if (s.isLoopCandidate) {
      loopDesc = serviceLoopCache.get(s.service) || null;
    } else if (s.destinationCode) {
      dest = busStopCache.get(s.destinationCode) || null;
    }

    return {
      service: s.service,
      destination: dest,
      loopDescription: loopDesc,
      arrivals: s.arrivals,
    };
  });

  const responseBody = {
    stop: data?.BusStopCode || stop,
    services: finalServices,
    fetchedAt: new Date().toISOString(),
  };

  return sendJson(
    res,
    200,
    responseBody,
    {
      'Cache-Control': 's-maxage=20, stale-while-revalidate=40',
    }
  );
}

function sendJson(res, statusCode, data, headers = {}) {
  for (const [key, value] of Object.entries(headers)) {
    res.setHeader(key, value);
  }
  if (typeof res.status === 'function' && typeof res.json === 'function') {
    return res.status(statusCode).json(data);
  }
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(data));
}
