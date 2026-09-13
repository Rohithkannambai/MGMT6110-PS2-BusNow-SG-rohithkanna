# assessment.md — Problem Set 2

**Student:** Rohith Kanna  
**Course:** MGMT 6110 · Human-AI Collaboration  
**Product:** BusNow SG

## User and job

**User:** An SMU student leaving campus after class.

**One job:** Check current bus arrivals at a selected bus stop before deciding when to leave campus for the stop.

**Observable success:** The student can enter a bus stop code and see current arrivals sourced from LTA DataMall, or a clear explanation when live arrival data cannot be provided.

---

# Product criteria

## Front-end criteria

### F1 — Purpose clarity
**Why it matters:** A student leaving class should understand within a few seconds what BusNow SG is for.

**How to test:** Open the live URL on a phone for five seconds and ask a first-time visitor what job the page performs.

### F2 — Arrival-check completion
**Why it matters:** The core reason to use the product is to get a current arrival answer before deciding when to leave.

**How to test:** Enter bus stop code `04121` and verify that current bus services and their reported arrivals appear without requiring instructions or another page.

### F3 — Failure-state clarity
**Why it matters:** When live data cannot be shown, the student should know whether to wait, retry, change stop, or recognise that the source is unavailable instead of seeing a blank panel.

**How to test:** Observe the product in the loading, empty, provider-refused and provider-unreachable states and verify that each displays a different readable message.

### F4 — Mobile readability
**Why it matters:** The product is likely to be used while leaving campus on a phone.

**How to test:** Open the live product at approximately 390–430px width and verify that the stop input, service numbers and arrival information are usable without zooming or horizontal scrolling.

### F5 — Recovery from invalid or empty input
**Why it matters:** Mistyping a stop code should not trap the user or require a page reload.

**How to test:** Enter an invalid or no-data stop, observe the response, then replace it with `04121` and confirm the normal arrival flow can be completed without reloading the page.

### F6 — Claim discipline and source visibility
**Why it matters:** Arrival information should be clearly sourced rather than presented as an invented product value.

**How to test:** Verify that live arrival values disappear rather than being replaced by fake values when the source is unavailable, and confirm that LTA DataMall is visibly credited.

---

## Back-end criteria

### B1 — Real-source isolation
**Status:** Met

**Evidence:** In the deployed product, browser Network inspection showed that the page calls only the Vercel `/api/bus` endpoint. The browser did not call the LTA DataMall domain directly. The serverless function then contacted LTA and returned the live arrival data to the page.

### B2 — Credential isolation
**Status:** Met

**Evidence:** The real `LTA_ACCOUNT_KEY` was stored only in Vercel Environment Variables. It was not added to AI Studio, `.env.example`, README, `prompts.md`, browser code or source files. The project uses `process.env.LTA_ACCOUNT_KEY`, and no credential variable begins with `VITE_`.

### B3 — Health observability
**Status:** Met

**Evidence:** The deployed `/api/health` endpoint returned `keyConfigured: true`, `upstreamStatus: 200` and a timestamp without revealing any part of the credential.

### B4 — Failure semantics
**Status:** Met

**Evidence:** I deliberately tested two different backend failures in production. With an incorrect LTA credential, the product showed the provider-refused message. With the LTA hostname temporarily changed to a non-existent host, the product showed the separate provider-unreachable message. I restored the real key and hostname after each test and confirmed `/api/health` returned `upstreamStatus: 200`.

### B5 — Freshness and caching
**Status:** Met

**Evidence:** The serverless function sets `Cache-Control: s-maxage=20, stale-while-revalidate=40`, matching the approximately 20-second LTA Bus Arrival update rhythm. On the deployed Vercel endpoint, two immediate requests produced `x-vercel-cache: MISS` followed by `x-vercel-cache: HIT`, confirming edge caching was active.

### B6 — Safe response handling
**Status:** Met

**Evidence:** The server function checks `response.ok` before reading/parsing the upstream body, returns refusal and unreachable failures separately, and filters empty `EstimatedArrival` values from `NextBus`, `NextBus2` and `NextBus3` instead of treating them as valid buses.

---

# Self-assessment

## Front-end criteria

### F1 — Purpose clarity
**Status:** Partly met

**Evidence:** The live page clearly identifies BUSNOW SG and states that it provides live bus arrivals around the Bras Basah campus area. I verified the page in a public Incognito session and on a phone, but I have not yet tested the five-second comprehension check with a first-time user.

### F2 — Stop selection and arrival completion
**Status:** Met

**Evidence:** On the live Vercel product, I selected the displayed SMU-area bus stops and the page returned current LTA bus services and arrival times on the same page without instructions or navigation.

### F3 — Failure-state clarity
**Status:** Partly met

**Evidence:** I personally verified the Loading, Provider Refused and Provider Unreachable states on the production product, and each displayed a different readable message. The genuine Empty state has not yet been observed because all five stops still had live bus services when tested.

### F4 — Mobile readability
**Status:** Met

**Evidence:** I opened the production product on my phone. The five stop choices were usable, the layout had no obvious horizontal overflow, and the arrival information was readable without zooming.

### F5 — Change-stop recovery
**Status:** Met

**Evidence:** I selected one stop, received its live arrivals, then selected other stops. The result area updated to the newly selected stop without reloading the page.

### F6 — Claim discipline and source visibility
**Status:** Met

**Evidence:** Live bus service numbers and arrival times are returned from LTA DataMall through `/api/bus`; the product does not replace unavailable live data with invented arrival values. LTA DataMall and the Singapore Open Data Licence are visibly credited in the interface.

# Collaboration assessment

To be completed after the build using specific events from this Problem Set 2 prompt log.

## Q1 — Where did the agent make me faster, and by how much?

[Complete after build.]

## Q2 — Where did it cost me time, and whose fault was that?

[Complete after build.]

## Q3 — Did it ever hand me something that looked right and was not?

[Complete after build.]

## Q4 — What did I have to know in order to supervise it?

[Complete after build.]

## Q5 — Which decisions did I keep, and should I have kept more or fewer?

[Complete after build.]

## Q6 — Now scale it up: what does this mean for a team of thirty?

[Complete after build.]
