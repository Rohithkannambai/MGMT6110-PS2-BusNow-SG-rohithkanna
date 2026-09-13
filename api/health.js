/**
 * Bus Health Serverless Function
 * Location: /api/health.js (Project Root, beside api/bus.js)
 * Endpoint: /api/health
 */

export default async function handler(req, res) {
  const apiKey = process.env.LTA_ACCOUNT_KEY;
  const checkedAt = new Date().toISOString();

  // If the key is missing: keyConfigured must be false; do not contact LTA.
  if (!apiKey || apiKey.trim() === '') {
    return sendJson(res, 200, {
      keyConfigured: false,
      checkedAt,
    });
  }

  // Use bus stop: 04121 for the upstream health test
  const upstreamUrl = 'https://datamall2.mytransport.sg/ltaodataservice/v3/BusArrival?BusStopCode=04121';

  try {
    const upstreamResponse = await fetch(upstreamUrl, {
      method: 'GET',
      headers: {
        AccountKey: apiKey,
      },
    });

    return sendJson(res, 200, {
      keyConfigured: true,
      upstreamStatus: upstreamResponse.status,
      checkedAt,
    });
  } catch (err) {
    return sendJson(res, 200, {
      keyConfigured: true,
      upstreamStatus: 'unreachable',
      checkedAt,
    });
  }
}

function sendJson(res, statusCode, data) {
  if (typeof res.status === 'function' && typeof res.json === 'function') {
    return res.status(statusCode).json(data);
  }
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(data));
}
