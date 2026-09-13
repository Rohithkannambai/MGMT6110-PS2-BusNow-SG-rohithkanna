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
**Status:** Met

**Evidence:** I personally verified all four required service states on the deployed production product. Loading was observed using browser network throttling. A genuine Empty state appeared during a late-night check when a selected stop had no upcoming buses. Provider Refused was tested with a deliberately incorrect LTA credential, and Provider Unreachable was tested with a deliberately invalid upstream hostname. Each condition displayed a different readable message, and production was restored after the deliberate failure tests.

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

## Q1 — Where did the agent make me faster, and by how much?

The biggest acceleration was turning my product decisions into a working React front end plus two serverless API functions. I had already decided the user, the one job, the five bus stops, the LTA source, the four service-state messages and the cache policy. AI Studio then produced the React components, `/api/bus.js`, `/api/health.js`, response parsing, relative-time formatting and the Vite preview middleware in one build.

My rough estimate is that this compressed work that would have taken me at least a full day or more to code and debug from scratch into a few hours of prompting, checking and correcting. The important point is that the agent mainly accelerated production. I still had to decide what the product should claim and verify whether the implementation was actually true.

## Q2 — Where did it cost me time, and whose fault was that?

The first BusNow version expected the user to type a raw five-digit bus-stop code such as `04121`. The agent had followed my instruction correctly, but when I looked at the rendered product as the actual user, I realised that a student should not need to know a bus-stop code before using the product.

That was mainly my fault because the original command was incomplete. I had defined the backend claim correctly but had not thought through how the user would identify a stop. I restarted the interface around five named nearby stops instead of blaming the agent for implementing what I had asked for.

The agent also cost time later when one visual-refinement prompt produced almost no visible design change and mostly repeated the existing project summary. That was more clearly an agent-execution problem. I kept the working product and used a narrower follow-up prompt instead of changing the backend again.

## Q3 — Did it ever hand me something that looked right and was not?

Yes. After the red-and-white visual redesign, AI Studio produced a confident verification report saying that the five bus stops in the product had names and codes different from the ones I had specified.

The report sounded authoritative because it was written as a completed verification checklist. However, the rendered interface still showed my intended stops. I opened `src/types.ts` manually and confirmed that the actual source code contained the correct five names and codes. The completion report was wrong even though the application itself was right.

I discovered this within a few minutes of reading the report because I compared its claims against both the preview and the source code instead of accepting the summary as evidence.

There was also an earlier example in AI Studio preview where the screen displayed the EMPTY message even though no real LTA credential had been provided. The message looked like a legitimate live-data result, but I did not treat it as proof. I waited until the Vercel deployment returned real LTA arrivals before accepting the backend as verified.

## Q4 — What did I have to know in order to supervise it?

I needed enough technical understanding to distinguish the front end from the real backend path.

For example, I had to know that a successful-looking AI Studio preview did not prove that Vercel's root-level `/api` functions had executed. I also had to understand that the LTA credential should exist only server-side as `LTA_ACCOUNT_KEY`, not in a `VITE_` variable or client file.

The manual LTA call was also important. It showed me the actual response structure and revealed that `NextBus2` and `NextBus3` can exist while `EstimatedArrival` is an empty string. Because I knew that before prompting, I could verify that the generated backend filtered blank values instead of turning them into fake arrivals.

I also needed to know how to inspect the generated files rather than trust the agent's summary. That was how I caught the incorrect bus-stop verification report and the unused Gemini/Express scaffold dependencies before committing the project.

## Q5 — Which decisions did I keep, and should I have kept more or fewer?

I deliberately kept the main product decisions on my side:

- the user and one job;
- choosing LTA DataMall as the source;
- the five nearby stops;
- the four exact user-facing service-state messages;
- the decision that blank arrival values should be removed;
- the 20-second cache policy;
- the decision to keep the product to one screen;
- the rule that the credential stays only in Vercel.

I delegated implementation decisions such as React component structure, AbortController use, local Vite middleware, exact card styling and the small refresh control.

One decision I should have kept more clearly at the beginning was how the user selects a bus stop. I initially handed that interaction over indirectly by specifying only an editable stop-code field. After seeing the result, I realised that this was a product decision rather than just a coding detail. I corrected it by explicitly deciding that the user should choose from five named nearby stops.

On the other hand, I did not need to control every implementation detail. The agent's use of AbortController and the neutral message shown before a stop is selected were sensible production choices that did not change the product's meaning.

## Q6 — Now scale it up: what does this mean for a team of thirty?

For a team using coding agents regularly, I would separate decisions into two categories before work begins.

Product and risk decisions should stay human-owned: what claim the product makes, which external source is trusted, what users see when the source fails, how fresh the data must be, what credentials exist and what must never be exposed.

Agents can take more of the production work: generating components, wiring endpoints, transforming responses and implementing approved interface behaviour.

The organisation would also need explicit verification gates. Agent completion messages should not count as proof. A reviewer should check the actual source, deployed behaviour and external claim before approving a change. For higher-risk changes, the team should keep recoverable checkpoints and require one bounded change at a time so that an agent cannot silently rewrite unrelated behaviour. The main organisational change is therefore not simply giving thirty people coding agents; it is creating a clear command boundary and a verification process around what those agents produce.
