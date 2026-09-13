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
**Why it matters:** Arrival claims must come from LTA while the browser communicates only with BusNow SG's own backend.

**How to test:** Inspect the browser Network panel and verify that the page calls `/api/bus` and does not call the LTA DataMall domain directly.

### B2 — Credential isolation
**Why it matters:** The LTA Account Key must remain inaccessible to visitors and absent from the public repository.

**How to test:** Search the page source, current repository files and Git history for the credential, and verify that no secret variable name begins with `VITE_`.

### B3 — Health observability
**Why it matters:** Someone who did not build the product should be able to tell whether the service is configured and whether LTA is answering.

**How to test:** Open `/api/health` and verify that it reports whether the credential is configured, the upstream status and the check time without revealing any part of the credential.

### B4 — Failure semantics
**Why it matters:** Different backend failures should remain distinguishable instead of collapsing into a blank screen or generic server error.

**How to test:** Test missing or refused credentials and an unreachable upstream and verify that the backend returns meaningful statuses and messages for each condition.

### B5 — Freshness and caching
**Why it matters:** Bus arrivals change quickly, but repeatedly requesting identical data more often than LTA updates it wastes provider capacity without improving usefulness.

**How to test:** Inspect the `/api/bus` response and verify a cache policy of `s-maxage=20, stale-while-revalidate=40`, matching LTA Bus Arrival's approximately 20-second update rhythm.

### B6 — Safe response handling
**Why it matters:** Empty arrival objects or provider refusals must not crash the backend or create fake bus information.

**How to test:** Verify that non-successful upstream responses are handled before body parsing and that empty `EstimatedArrival` values in `NextBus`, `NextBus2` or `NextBus3` are not returned as valid arrivals.

---

# Self-assessment

To be completed only after the product has been built and tested.

Each criterion will be marked:

- **Met**
- **Partly met**
- **Not met**

with one sentence of evidence.

---

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
