/**
 * Bus Arrival Serverless Function
 * Location: /api/bus.js (Project Root, sibling of package.json)
 * Endpoint: /api/bus?stop=[SELECTED_STOP_CODE]
 */

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
      parsedServices.push({
        service: String(serviceNo),
        arrivals,
      });
    }
  }

  const responseBody = {
    stop: data?.BusStopCode || stop,
    services: parsedServices,
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
