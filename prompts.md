# PROMPTS.md - Ting Ting — Safety Review

**Student:** Rohith Kanna · **Course:** MGMT 6110 · **Problem Set 1**

**User sentence:** A Content Safety Moderator opens the Case Review Workspace to assess the selected video against the system recommendation and relevant policy, then record the appropriate final moderation action, and knows it worked when the case returns to the Review Queue as completed with the exact recorded Final Action shown and the Pending / Completed counts updated.

**Live link:** https://rohitthkannaprobset1submission.vercel.app

>
>

---

## SECTION A — GOOGLE STITCH PROMPTS

### Stitch 01 — Initial Screen 1 — Review Queue design

#### Prompt

```text
ROLE
Act as a Principal Product Designer, Trust & Safety Product Designer, Design Systems Lead and Creative Director working for a fictional global short-video technology company called TING TING.
You are designing the primary desktop and mobile interface for an internal employee product:
TING TING — SAFETY REVIEW
The primary user is a Content Safety Moderator.
This is a serious professional internal product used to review short-form video moderation cases.
For this request, design ONLY:
SCREEN 1 — REVIEW QUEUE
Do NOT design the detailed Case Review screen yet.
I will request Screen 2 separately after Screen 1 is approved.
============================================================
1. PRODUCT CONTEXT
============================================================
TING TING is a completely fictional global short-video platform.
It is NOT TikTok.
Do NOT copy or use:
- TikTok logo
- TikTok musical-note symbol
- TikTok typography
- ByteDance branding
- Instagram branding
- YouTube branding
- any real company logo
- any identifiable proprietary interface
The product is inspired by the real operational concept of automated content moderation followed by human review, but this interface and all data are fictional.
The moderator’s job in the broader product is:
Review videos routed by automated moderation and assign the appropriate enforcement action.
This first screen is the moderator’s queue/home screen.
============================================================
2. DESIGN OBJECTIVE
============================================================
Design a production-quality internal moderation interface that looks like it could genuinely be used inside a major global consumer technology company.
The product must feel:
- premium
- contemporary
- highly polished
- global
- professional
- operationally credible
- youthful enough to belong to a short-video platform
- visually sophisticated
- spacious
- clear
- human-centered
DO NOT make it feel like:
- a school project
- a generic admin dashboard
- a PS5/gaming interface
- cyberpunk
- hacker software
- military command centre
- crypto dashboard
- AI concept art
- over-designed sci-fi
- an analytics dashboard full of charts
This is primarily a VIDEO REVIEW QUEUE.
The thumbnail content should visually dominate the case area.
============================================================
3. DESIGN REFERENCES
============================================================
If reference screenshots are attached:
Use the Beyond The Vines reference ONLY for the idea of:
- clean layered header/navigation
- premium spacing
- modern consumer-brand restraint
Use the short-video/news reference ONLY for the idea of:
- image-led editorial carousel
- modern internal-news presentation
- dynamic visual storytelling
DO NOT reproduce either interface.
Create an original Ting Ting design.
============================================================
4. RESPONSIVE REQUIREMENT
============================================================
This product MUST work beautifully on:
DESKTOP:
approximately 1440px-class wide screens
AND
MOBILE:
approximately 390–430px wide modern smartphones
The mobile experience must be intentionally redesigned, not simply shrink the desktop screen.
There must be:
- no horizontal overflow
- readable typography
- large touch targets
- logical vertical stacking
- usable filters
- readable case cards
- responsive news carousel
- properly stacked footer
Create both a desktop design and a mobile representation of the SAME Screen 1.
Do not treat desktop/mobile as two different product screens.
============================================================
5. TING TING VISUAL IDENTITY
============================================================
Create an original Ting Ting brand system.
VISUAL DIRECTION:
Dark premium consumer-tech interface.
BASE:
- near-black graphite
- charcoal
- deep ink
- dark neutral surfaces
TEXT:
- warm off-white primary text
- cool grey secondary text
PRIMARY ACCENT:
- refined electric aqua / cyan
SECONDARY ACCENT:
- sophisticated coral / warm red
SUCCESS / COMPLETED:
- restrained professional green
ATTENTION:
- warm amber where needed
Do NOT make everything neon.
Do NOT use excessive glow.
Do NOT create bright rainbow gradients everywhere.
Use color purposefully for state and hierarchy.
============================================================
6. TYPOGRAPHY
============================================================
Use a premium contemporary sans-serif system.
Typography must feel similar in quality to modern high-end technology products such as Linear, Raycast or Vercel, without copying their branding.
Use:
- strong but restrained headings
- very readable body text
- compact operational metadata
- excellent spacing
- clear hierarchy
Avoid:
- giant all-caps headings everywhere
- condensed gaming fonts
- futuristic techno fonts
- excessively bold interface text
All-caps may be used selectively for small operational states such as:
PENDING REVIEW
============================================================
7. TOP NAVIGATION — FIRST LAYER
============================================================
Create a full-width top navigation.
LEFT SIDE:
1. simple three-line menu icon
2. original Ting Ting symbol
3. TING TING wordmark
The Ting Ting symbol should:
- be simple
- abstract
- modern
- appropriate for a short-video company
- NOT resemble a musical note
- NOT resemble TikTok
CENTER:
SAFETY REVIEW
This text must be visually centered in the navigation bar.
Do not let it lean toward the left because of the logo.
RIGHT SIDE:
1. Search Case ID control
2. moderator profile
Moderator profile:
Use a small circular fictional Asian female profile photograph.
Name:
Maya Tan
Role:
Content Moderator
The profile should feel like an employee identity element, not a social-media creator profile.
============================================================
8. INTERNAL NEWS — SECOND LAYER
============================================================
Directly beneath the top navigation, create a premium INTERNAL NEWS carousel.
I am uploading FIVE finished Ting Ting internal-news poster assets.
USE THE PROVIDED POSTERS.
Do NOT replace them with generic stock photos.
Do NOT redesign the posters.
Do NOT add additional generated news images.
The carousel should feel like a premium editorial/news feature.
BEHAVIOR SPECIFICATION:
- exactly 5 posters
- one poster displayed prominently at a time
- automatically moves to the next item every 3.5 seconds
- current poster slides smoothly LEFT
- next poster enters smoothly from the RIGHT
- after poster 5, smoothly loop back to poster 1
- infinite looping behavior
- no abrupt jump
- subtle left arrow control
- subtle right arrow control
- small 01/05-style counter OR refined progress indicator
- manual arrow navigation supported
- manual interaction resets auto-slide timer
- desktop hover may pause auto-slide
- clicking the poster itself does NOT navigate anywhere
Do NOT put carousel controls inside the poster image.
Place them as part of the webpage UI.
Carousel should be visually impressive but not consume so much height that the moderator queue disappears below the fold.
============================================================
9. REVIEW QUEUE HEADER
============================================================
Below the carousel, create:
REVIEW QUEUE
Then display only TWO dynamic operational metrics:
10 Pending
0 Completed
These will later change in the functional app.
Do NOT add:
- Escalated count
- charts
- percentages
- moderation accuracy
- AI metrics
- fake analytics
This screen is about operational workflow, not analytics.
Use clean typographic counters with generous spacing.
============================================================
10. FILTER AREA
============================================================
Create a clean, spacious filter row.
Controls:
ALL
PRIORITY ▾
STATUS ▾
POLICY ▾
SEARCH CASE ID
Priority dropdown values:
- Top
- Medium
- Low
Status dropdown:
- Pending
- Completed
Policy dropdown should include:
- Physical Risk & Imitation
- Regulated Goods & Services
- Hate Speech & Hateful Behavior
- Harassment & Bullying
- Shocking & Graphic Content
- Body Exposure & Sexualized Behaviors
- Integrity & Authenticity
- Suicide & Self-Harm
Do NOT include a Source filter.
Do NOT make filters look like chunky gaming buttons.
Use refined professional dropdowns/chips with restrained borders or tonal fills.
============================================================
11. CASE GRID
============================================================
There are EXACTLY 10 moderation cases.
DESKTOP GRID:
Row 1:
4 cards
Row 2:
4 cards
Row 3:
2 cards
IMPORTANT:
The final two cards maintain the SAME WIDTH as all other case cards.
Do NOT stretch them to fill the final row.
Use comfortable whitespace between cards.
Each case card starts with a large 9:16 vertical VIDEO THUMBNAIL PLACEHOLDER.
We do NOT have the final 10 thumbnails yet.
Use tasteful temporary short-video-style photographic placeholders featuring fictional Asian/APAC people and everyday scenes.
Do not use copyrighted content.
Do not make the temporary placeholders look like dramatic movie posters.
They should resemble normal short-video thumbnails.
The real assets will later replace these placeholders.
============================================================
12. CARD CONTENT — EXACT HIERARCHY
============================================================
Below each thumbnail, use this hierarchy:
1. CASE ID
Example:
TT-SG-260905-018427
Case IDs should look operational and can be long.
2. CREATOR HANDLE
Example:
@reelcraft.sg
3. POLICY CATEGORY
Example:
Physical Risk & Imitation
4. OPERATIONAL METADATA
Example:
Priority: Top · Queue age: 3m
Priority values:
Top
Medium
Low
Queue age must visually support values from:
minimum 1 minute
maximum 1 day
5. CASE STATUS
Initial status:
PENDING REVIEW
PENDING REVIEW must be presented in a restrained RED treatment.
Do NOT put status on the right-hand side of the case ID.
Status belongs ABOVE the button.
6. ACTION BUTTON
READ MORE
Use a real filled/tonal button.
Do NOT put square brackets around it.
The button should have a slightly deeper shade than its surrounding surface.
It should feel like a professional internal-product action.
============================================================
13. COMPLETED CARD DESIGN STATE
============================================================
Also define visually how a completed card will look later.
When the moderator records an action, PENDING REVIEW will eventually be replaced by one of:
NO ACTION
REMOVE CONTENT
AGE-GATE 18+
RESTRICT RECOMMENDATION
ADD VIEWER WARNING
ESCALATE REVIEW
For Screen 1, a RECORDED ACTION should appear in a professional GREEN treatment.
Green means:
the moderation action has been successfully recorded.
It does NOT mean the content itself was considered good.
When completed:
READ MORE
changes to:
VIEW DECISION
Do not redesign the whole card.
The card should maintain its position and structure.
============================================================
14. TEMPORARY CASE DATA
============================================================
Use these 10 case identifiers/handles/policies as the actual card content.
CASE 01
TT-SG-260905-018427
@reelcraft.sg
Physical Risk & Imitation
Priority: Top
Queue age: 3m
CASE 02
TT-SG-260905-018463
@oddsafterdark
Regulated Goods & Services
Priority: Top
Queue age: 8m
CASE 03
TT-SG-260905-018519
@classroomcontext
Hate Speech & Hateful Behavior
Priority: Medium
Queue age: 2h 10m
CASE 04
TT-IN-260905-020174
@ringsidecut
Shocking & Graphic Content
Priority: Medium
Queue age: 4h 35m
CASE 05
TT-SG-260905-021308
@heritage.stage
Physical Risk & Imitation
Priority: Low
Queue age: 15h 05m
CASE 06
TT-SG-260905-022441
@streetwatch.sg
Shocking & Graphic Content
Priority: Top
Queue age: 21m
CASE 07
TT-IN-260905-023086
@trackline.rider
Physical Risk & Imitation
Priority: Medium
Queue age: 7h 45m
CASE 08
TT-SG-260905-024197
@afterhours.move
Body Exposure & Sexualized Behaviors
Priority: Medium
Queue age: 10h 20m
CASE 09
TT-SG-260905-025634
@medskills.lab
Shocking & Graphic Content
Priority: Low
Queue age: 22h 40m
CASE 10
TT-SG-260905-026712
@urbanstuntlab
Physical Risk & Imitation
Priority: Top
Queue age: 54m
ALL CASES START AS:
PENDING REVIEW
There are initially:
10 Pending
0 Completed
============================================================
15. FOOTER
============================================================
Create a premium global technology-company footer.
Do not make it visually cheap or generic.
Use generous spacing.
Slightly darker surface than the main page.
FIRST SECTION — TING TING
Show:
original Ting Ting symbol
TING TING
Tagline:
Short video.
Global expression.
Responsible discovery.
SECOND SECTION — COMPANY
Clickable text items:
About
Policy
Community Guidelines
Do NOT include:
Privacy
Accessibility
Terms & Conditions
These three links will later open modal overlays.
THIRD SECTION — CONTACT
Safety Operations
+65 6818 2400
safety@tingting.example
General Enquiries
+65 6818 2000
hello@tingting.example
FOURTH SECTION — GLOBAL OFFICES
Organize professionally by region.
ASIA PACIFIC
Singapore
Headquarters
Tokyo
Japan
Seoul
South Korea
Sydney
Australia
EUROPE
London
United Kingdom
Berlin
Germany
AMERICAS / MIDDLE EAST
New York
United States
Toronto
Canada
São Paulo
Brazil
Dubai
United Arab Emirates
BOTTOM LINE:
© 2026 Ting Ting Technologies
Nothing else is required.
============================================================
16. MOBILE VERSION
============================================================
Create an intentional mobile representation of Screen 1.
The mobile layout should include:
TOP NAV
Compact:
menu
Ting Ting symbol/wordmark
moderator profile or compact profile avatar
SAFETY REVIEW remains clearly visible.
SEARCH can become an icon or compact field if needed.
NEWS CAROUSEL
Full-width mobile carousel.
Preserve poster legibility through responsive cropping.
Do not distort images.
QUEUE
10 Pending
0 Completed
FILTERS
Allow filters to:
- wrap cleanly
OR
- horizontally scroll within their own filter row
without causing page-level horizontal overflow.
CASE CARDS
Single column.
Large 9:16 thumbnail.
Then:
Case ID
Creator
Policy
Priority / Queue age
PENDING REVIEW
READ MORE
All readable without zooming.
FOOTER
Stack sections vertically.
Global offices can become compact grouped lists.
============================================================
17. INTERACTION AND DESIGN PREPARATION
============================================================
Although this request is mainly UI design, structure the design so it can later support:
- clicking READ MORE to open a detailed Case Review screen
- filters
- case search
- dynamic Pending / Completed counts
- PENDING REVIEW changing into recorded actions
- VIEW DECISION for completed cases
- About modal
- Policy modal
- Community Guidelines modal
Do NOT create these additional screens yet.
Only ensure Screen 1 visually supports them.
============================================================
18. QUALITY BAR
============================================================
Before finalizing, evaluate the design against these questions:
1. Does this look like an internal product from a major global consumer-tech company?
2. Does it avoid looking like a generic dashboard?
3. Is short-form video clearly central to the interface?
4. Does the internal-news carousel feel editorial and premium?
5. Is information hierarchy immediately understandable?
6. Are the case cards professional rather than game-like?
7. Is the layout spacious rather than congested?
8. Is the original Ting Ting branding distinct from TikTok?
9. Does the desktop layout work at ~1440px?
10. Does the mobile layout work at ~390–430px?
11. Can a moderator understand the queue in seconds?
12. Are color accents restrained and purposeful?
13. Is the footer credible as a global technology-company footer?
14. Does the whole product feel finished rather than conceptual?
============================================================
19. OUTPUT INSTRUCTION
============================================================
Generate ONLY Screen 1 — Review Queue.
Provide:
1. Desktop version
2. Mobile-responsive representation of the same screen
Do NOT generate Screen 2 yet.
Do NOT invent additional product features.
Do NOT simplify the requested layout.
Do NOT remove any specified sections.
Do NOT add charts or analytics.
Use the five uploaded Ting Ting internal-news poster images in the carousel.
Prioritize premium product quality, visual hierarchy, responsive behavior and operational realism.
Begin.
```

**What came back:** Stitch failed with the “Something unexpected happened” error, so I had no design output to review.

**What I changed next and why:** I retried from the beginning because there was nothing useful to judge yet.

---

### Stitch 02 — Retry from the beginning

#### Prompt

```text
try again from the beginning.
```

**What came back:** The retry gave me a usable desktop Review Queue, but it looked too much like a dark security/operations dashboard. It also added a shield/camera-style logo, confidence/timestamp details and other information I had not asked for, and I still did not have a proper mobile result.

**What I changed next and why:** I kept the basic queue structure, but rewrote the design direction around a warm light Ting Ting brand and added stronger guardrails against invented technical features.

---

### Stitch 03 — Screen 1 warm-light design-system and content cleanup

#### Prompt

```text
ROLE
Act as a Principal Product Designer and Design Systems Lead refining an existing internal Trust & Safety product for the fictional short-video company TING TING.
You are NOT creating a new concept.
You are surgically revising the EXISTING Screen 1 — Review Queue design already generated in this Stitch project.
Preserve the parts of the current composition that are working:
- overall page hierarchy
- top navigation position
- internal-news area
- Review Queue section
- 4 + 4 + 2 case-grid structure
- footer position
- responsive foundation
But make the following changes precisely.
DO NOT invent new product features.
DO NOT add new navigation destinations.
DO NOT redesign the product from scratch.
============================================================
1. PRIMARY VISUAL DIRECTION — COMPLETE COLOR CHANGE
============================================================
The current dark navy / black / cyan visual direction is rejected.
Replace it completely with a refined LIGHT, WARM, PREMIUM corporate-tech visual system.
Use the attached JPMorganChase-style reference ONLY as inspiration for:
- warm white space
- beige / cream surfaces
- sophisticated brown accents
- restrained corporate elegance
- premium typography
- generous spacing
DO NOT copy JPMorganChase branding, logo, typography, navigation or layouts.
TING TING must remain completely original.
NEW COLOR DIRECTION:
PAGE BACKGROUND
- warm ivory
- very pale beige
- soft cream
PRIMARY SURFACES
- clean white
SECONDARY SURFACES
- subtle warm beige / stone
PRIMARY TEXT
- very dark espresso brown / warm charcoal
SECONDARY TEXT
- muted taupe / warm grey
PRIMARY BRAND ACCENT
- refined medium brown
DARK BRAND ACCENT
- deep espresso brown
BORDERS
- very subtle beige-grey
PENDING STATE
- restrained professional red
RECORDED / COMPLETED ACTION
- restrained professional green
WARNING ATTENTION
- muted amber only where genuinely required
STRICTLY REMOVE CYAN / BLUE FROM:
- logo
- navigation
- links
- active filter states
- metadata
- buttons
- footer
- counters
- decorative accents
There should be NO electric-blue or cyan interface accents.
The only stronger colors should naturally come from the five internal-news poster images.
============================================================
2. OVERALL AESTHETIC
============================================================
The revised interface should feel like:
premium global company website
+
modern consumer technology product
+
serious internal operational workspace
It should NOT feel like:
- gaming software
- cybersecurity console
- command centre
- hacker system
- AI dashboard
- military software
- PS5 interface
- crypto product
Use:
- generous white space
- elegant typography
- subtle shadows
- thin warm borders
- clean alignment
- careful editorial spacing
- restrained hover states
- soft tonal surfaces
The interface should feel confident because it is SIMPLE, not because it contains many technical elements.
============================================================
3. REMOVE THE ENTIRE LEFT SIDEBAR
============================================================
Delete the current left sidebar completely.
REMOVE all invented sidebar items including:
- Queues & Ingestion
- Live Queue
- Urgent Escalations
- Appeals
- Audit History
- Policy Matrix
- Moderator Metrics
- Policy & Logs
- any sidebar status indicators
- any sidebar counters
We are NOT building screens for these functions.
The Review Queue content should use the newly available full page width.
This removal should make the page:
- wider
- calmer
- less congested
- more premium
============================================================
4. REDESIGN THE TING TING LOGO
============================================================
The current shield/security-style symbol is rejected.
Create a more distinctive ORIGINAL Ting Ting symbol.
Creative direction:
Use the idea of:
- repetition
- echo
- two matching signals
- two frames
- TT monogram
- paired offset shapes
A refined abstract TT / echo mark would be appropriate.
It should feel:
- global
- consumer-tech
- modern
- simple
- memorable
It must NOT resemble:
- TikTok musical note
- security shield
- lock
- cybersecurity badge
- playstation/gaming emblem
Use espresso / brown brand tones.
Pair it with:
TING TING
as a clean wordmark.
============================================================
5. TOP NAVIGATION — REVISE
============================================================
Use a premium light header.
LEFT:
hamburger icon
+
new Ting Ting symbol
+
TING TING
CENTER:
SAFETY REVIEW
IMPORTANT:
SAFETY REVIEW must be visually centered across the full navigation bar.
It must NOT appear shifted toward the left.
RIGHT:
Search Case ID
+
small circular fictional profile image
Maya Tan
Content Moderator
Use dark brown/charcoal typography.
No cyan.
Do NOT add additional navigation links.
============================================================
6. INTERNAL NEWS CAROUSEL — REMOVE DUPLICATED TEXT
============================================================
The five uploaded Ting Ting news posters are already fully designed.
USE THE POSTERS EXACTLY AS PROVIDED.
The current design incorrectly overlays extra text on top of the poster, duplicating:
- category
- headline
- supporting copy
REMOVE ALL duplicated overlay text.
Do NOT write:
- GLOBAL OPERATIONS again
- poster headline again
- supporting paragraph again
- random generated labels
- “expansion heading”
- any artificial news copy
The poster itself contains the content.
Page treatment should simply be:
INTERNAL NEWS
[ PROVIDED POSTER ]
←       01 / 05       →
or an equally refined navigation treatment.
Keep carousel functionality designed for:
- exactly five posters
- auto-slide every 3.5 seconds
- current image slides smoothly left
- next image enters from right
- seamless 5 → 1 loop
- subtle previous/next arrows
- manual navigation resets timer
- desktop hover may pause
- poster itself does not navigate anywhere
Do NOT crop away important poster text.
The carousel should use a clean light/beige surrounding surface.
============================================================
7. REVIEW QUEUE HEADER — SIMPLIFY
============================================================
Keep:
REVIEW QUEUE
Display clearly:
10 Pending
0 Completed
Increase their readability slightly.
Use generous spacing.
REMOVE ALL invented telemetry including:
- latency
- LIVE ENFORCEMENT
- system health
- performance indicators
- queue throughput
- confidence averages
- technical version information
This is a workflow page, not a monitoring dashboard.
============================================================
8. SEARCH — REMOVE DUPLICATION
============================================================
Keep Search Case ID ONLY in the top navigation.
REMOVE the second Search Case ID field currently appearing beside the queue filters.
There must be only ONE search field on Screen 1.
============================================================
9. FILTER ROW
============================================================
Keep only:
ALL
PRIORITY ▾
STATUS ▾
POLICY ▾
PRIORITY OPTIONS:
- Top
- Medium
- Low
STATUS OPTIONS:
- Pending
- Completed
POLICY OPTIONS:
- Physical Risk & Imitation
- Regulated Goods & Services
- Hate Speech & Hateful Behavior
- Harassment & Bullying
- Shocking & Graphic Content
- Body Exposure & Sexualized Behaviors
- Integrity & Authenticity
- Suicide & Self-Harm
Do NOT add:
- Source
- Region
- Accuracy
- confidence filters
- system filters
- AI filters
Use sophisticated beige/white dropdown controls.
Selected filter:
deeper brown tonal fill.
Do not use bright blue.
============================================================
10. CASE GRID
============================================================
Preserve the desktop arrangement:
ROW 1:
4 cards
ROW 2:
4 cards
ROW 3:
2 cards
The final two cards must remain the SAME WIDTH as the other eight.
Do not stretch them.
Use the full width freed by removal of the sidebar.
Increase breathing room between cards.
Case thumbnails remain 9:16.
For now use clean photographic placeholders until real thumbnails are provided.
============================================================
11. REMOVE ALL INVENTED GAMING / TECHNICAL CARD DATA
============================================================
Delete all card elements that were NOT requested.
REMOVE:
- 9:16 · 1080p labels
- 720p / resolution text
- confidence scores
- 98.4K CONF
- 94.1K CONF
- any “CONF”
- CRITICAL
- UNVERIFIED SALE
- VIOLENCE REPORT
- ROOFTOP DROP
- STUNT CLIMBING ACCIDENT
- AUDIO TRANSCRIPT FLAG
- COMBAT ACCIDENT CLIPS
- SG-HUB
- IN-HUB
- play-button system decorations
- technical telemetry
- extra red labels above thumbnails
- any invented moderation-category subtitles
Do NOT invent replacement information.
============================================================
12. EXACT CASE CARD HIERARCHY
============================================================
Each card must contain ONLY:
[9:16 THUMBNAIL]
CASE ID
CREATOR HANDLE
POLICY CATEGORY
Priority: [Top/Medium/Low] · Queue age: [value]
PENDING REVIEW
READ MORE
Example:
TT-SG-260905-018427
@reelcraft.sg
Physical Risk & Imitation
Priority: Top · Queue age: 3m
PENDING REVIEW
READ MORE
DESIGN:
Case ID
small operational metadata style
Creator handle
clean normal text
Policy
strongest text below creator, but not oversized
Priority / Queue age
subtle warm-grey metadata
PENDING REVIEW
located ABOVE Read More
professional RED text/treatment
READ MORE
filled tonal button using a deeper warm beige/brown shade
Do NOT:
- place status on the right of Case ID
- use large bright badges
- put brackets around button text
- add game-like icons
============================================================
13. USE THESE EXACT TEN CASE RECORDS
============================================================
CASE 01
TT-SG-260905-018427
@reelcraft.sg
Physical Risk & Imitation
Priority: Top
Queue age: 3m
CASE 02
TT-SG-260905-018463
@oddsafterdark
Regulated Goods & Services
Priority: Top
Queue age: 8m
CASE 03
TT-SG-260905-018519
@classroomcontext
Hate Speech & Hateful Behavior
Priority: Medium
Queue age: 2h 10m
CASE 04
TT-IN-260905-020174
@ringsidecut
Shocking & Graphic Content
Priority: Medium
Queue age: 4h 35m
CASE 05
TT-SG-260905-021308
@heritage.stage
Physical Risk & Imitation
Priority: Low
Queue age: 15h 05m
CASE 06
TT-SG-260905-022441
@streetwatch.sg
Shocking & Graphic Content
Priority: Top
Queue age: 21m
CASE 07
TT-IN-260905-023086
@trackline.rider
Physical Risk & Imitation
Priority: Medium
Queue age: 7h 45m
CASE 08
TT-SG-260905-024197
@afterhours.move
Body Exposure & Sexualized Behaviors
Priority: Medium
Queue age: 10h 20m
CASE 09
TT-SG-260905-025634
@medskills.lab
Shocking & Graphic Content
Priority: Low
Queue age: 22h 40m
CASE 10
TT-SG-260905-026712
@urbanstuntlab
Physical Risk & Imitation
Priority: Top
Queue age: 54m
ALL TEN INITIAL STATUSES:
PENDING REVIEW
INITIAL COUNTERS:
10 Pending
0 Completed
============================================================
14. COMPLETED CARD STATE — KEEP PREPARED
============================================================
The functional build will later allow the moderator to record:
NO ACTION
REMOVE CONTENT
AGE-GATE 18+
RESTRICT RECOMMENDATION
ADD VIEWER WARNING
ESCALATE REVIEW
When a case is completed:
PENDING REVIEW
will be replaced by the exact selected action.
Recorded actions should appear in a restrained GREEN treatment.
Example:
REMOVE CONTENT
Green means the moderation action was successfully recorded.
Button becomes:
VIEW DECISION
Do not redesign the entire card in completed state.
============================================================
15. FOOTER — COMPLETE CLEANUP
============================================================
REMOVE all current invented footer information including:
- Trust & Safety Node
- Singapore Global Primary
- Shift Status
- Active status
- Hotkeys & Settings
- settings icon
- Internal Safety Enforcement System
- version numbers
- technical system labels
- system status
- node information
We are not building Settings.
We are not building Hotkeys.
Do not imply those screens exist.
Create ONLY this footer:
--------------------------------------------------
TING TING
[original Ting Ting symbol]
TING TING
Short video.
Global expression.
Responsible discovery.
COMPANY
About
Policy
Community Guidelines
CONTACT
Safety Operations
+65 6818 2400
safety@tingting.example
General Enquiries
+65 6818 2000
hello@tingting.example
GLOBAL OFFICES
ASIA PACIFIC
Singapore
Headquarters
Tokyo
Japan
Seoul
South Korea
Sydney
Australia
EUROPE
London
United Kingdom
Berlin
Germany
AMERICAS / MIDDLE EAST
New York
United States
Toronto
Canada
São Paulo
Brazil
Dubai
United Arab Emirates
BOTTOM:
© 2026 Ting Ting Technologies
--------------------------------------------------
No Privacy link.
No Accessibility link.
No Terms & Conditions.
No additional system information.
About, Policy and Community Guidelines will later open overlays.
Do NOT design those overlays in this revision.
============================================================
16. MOBILE REVISION
============================================================
Apply the SAME new warm ivory / beige / espresso design system to the mobile version.
There must be NO left sidebar on mobile.
MOBILE HEADER:
hamburger
Ting Ting logo/wordmark
Safety Review
compact profile treatment
Search Case ID may become a search icon/expandable control if space is limited.
NEWS:
full-width responsive poster carousel.
Do not overlay duplicated headline text.
QUEUE:
10 Pending
0 Completed
FILTERS:
All
Priority
Status
Policy
They may wrap or horizontally scroll inside their own control area.
CASE GRID:
single-column.
Each card:
large 9:16 thumbnail
Case ID
Creator
Policy
Priority / Queue age
Pending Review
Read More
FOOTER:
stack the approved footer sections vertically.
Ensure:
- no horizontal overflow
- comfortable touch targets
- readable typography
- generous spacing
============================================================
17. DO NOT ADD FEATURES
============================================================
Do NOT add any feature not explicitly requested.
Specifically do NOT add:
- sidebar
- analytics
- moderation metrics
- appeals screen
- audit history
- moderator metrics
- urgent escalation screen
- system settings
- hotkeys
- notifications
- queue latency
- system version
- technical performance indicators
- additional searches
- new filters
- new pages
- new tabs
- dashboards
- charts
If information is not in this prompt, do not invent it.
============================================================
18. FINAL QUALITY TEST
============================================================
Before finalizing this revision, verify:
1. Is the entire interface now warm light ivory/beige rather than dark blue?
2. Has every unnecessary cyan/blue accent been removed?
3. Is the left sidebar completely gone?
4. Does Ting Ting have a new original brown/espresso logo?
5. Is SAFETY REVIEW visually centered?
6. Does the news carousel show the uploaded posters without duplicated text?
7. Are only 10 Pending and 0 Completed shown?
8. Is the duplicate queue search removed?
9. Are filters limited to All, Priority, Status and Policy?
10. Are all gaming-style/technical card labels gone?
11. Do cards contain only our approved information?
12. Is Pending Review above Read More?
13. Is Pending Review red?
14. Is the footer free of invented technical features?
15. Are About, Policy and Community Guidelines the only company links?
16. Does desktop retain the 4 + 4 + 2 case layout?
17. Does mobile remain intentionally responsive?
18. Does the page now feel like a premium global consumer-tech company rather than a cybersecurity console?
============================================================
19. OUTPUT
============================================================
Revise the EXISTING Screen 1 design only.
Return:
1. updated desktop Screen 1
2. updated mobile version of the same Screen 1
Preserve the current successful structural foundation where appropriate.
Do NOT create Screen 2.
Do NOT create new pages.
Do NOT create the footer modals yet.
This is a targeted design-system and content cleanup, not a new product concept.
Execute the revision precisely.
```

**What came back:** This moved Screen 1 in the right direction: warm ivory/white/beige, no sidebar, cleaner cards and the 4 + 4 + 2 queue. But the text was still too small and crowded, the news posters were being handled incorrectly, and the mobile version felt like a different product.

**What I changed next and why:** I kept the new light direction and sent a deeper Screen 1 correction focused on typography, spacing, poster fidelity and making mobile match the same product.

---

### Stitch 04 — Screen 1 full surgical revision and responsive correction

#### Prompt

```text
ROLE
Act as a Principal Product Designer, Design Systems Lead, Responsive UX Specialist, and Trust & Safety Product Designer.
You are refining an EXISTING Screen 1 design for a fictional global short-video platform called:
TING TING
Product:
SAFETY REVIEW
Primary user:
Content Safety Moderator
This is a SURGICAL REVISION of the current Review Queue screen.
DO NOT create a new concept.
DO NOT invent additional features.
DO NOT add new screens.
DO NOT add new datasets.
DO NOT redesign the product from scratch.
Preserve the good structural foundation of the current desktop design, but fix ALL issues listed below precisely.
============================================================
1. PRIMARY GOAL OF THIS REVISION
============================================================
The current light redesign moved in the correct direction, but it still has several serious problems:
- typography is too small and congested
- card information is too tightly packed
- footer does not visually separate from the page
- the news poster is being incorrectly recreated / relabeled
- the mobile version has become a completely different product
- mobile contains invented features, cases, labels, navigation and data
- beige/brown has been overused on mobile
- responsive hierarchy is inconsistent
- some interface text is unnecessarily technical
- temporary thumbnails are visually inconsistent
Fix ALL of these issues.
The final result should feel like:
premium global consumer-tech company
+
refined internal operations tool
+
warm modern editorial web design
NOT:
cybersecurity software
gaming interface
financial terminal
military operations tool
AI dashboard
corporate bureaucracy portal
============================================================
2. COLOR SYSTEM — IMPORTANT CORRECTION
============================================================
The warm light direction is approved.
However:
DO NOT turn the entire interface brown/beige.
Brown and beige are ACCENTS, not a monochrome filter.
Use this hierarchy:
MAIN PAGE BACKGROUND:
very light warm ivory / near-white
PRIMARY CONTENT SURFACES:
clean white
SECONDARY SECTIONS:
soft cream / subtle warm beige
FOOTER:
clearly stronger warm beige / light camel surface
PRIMARY TEXT:
deep espresso / warm charcoal
SECONDARY TEXT:
muted taupe / warm grey
PRIMARY BRAND ACCENT:
refined medium brown
DEEP ACCENT:
dark espresso brown
PENDING STATUS:
restrained professional red
RECORDED ACTION:
restrained professional green
WARNING / SPECIAL ATTENTION:
muted amber only when genuinely required
STRICTLY AVOID:
- cyan
- electric blue
- neon
- excessive brown backgrounds
- brown-tinted cards everywhere
- heavy gradients
- dark dashboard styling
The interface must remain visually LIGHT, AIRY and SPACIOUS.
============================================================
3. DESKTOP HEADER — CLEAN UP AND RESCALE
============================================================
Keep the existing top navigation structure:
LEFT:
hamburger icon
original Ting Ting symbol
TING TING
CENTER:
SAFETY REVIEW
RIGHT:
Search Case ID
small circular profile image
Maya Tan
Content Moderator
FIXES:
- increase overall header breathing room
- make typography comfortably readable
- do not cram the profile name and role
- SAFETY REVIEW must remain optically centered across the full header
- search field should have enough width to be useful
- profile image should be small but clear
- use white or very pale ivory header background
- use espresso/dark brown text
- use brown only for subtle accents
Do NOT add navigation links.
============================================================
4. LOGO
============================================================
Keep or refine the current TT direction, but make it feel more premium.
Avoid:
- shield
- lock
- security badge
- gaming icon
- app-store generic square icon
Preferred concept:
an original paired-T / echo / repeated-form symbol inspired by:
TING TING
repetition
signal
two frames
echo
Use a refined espresso/brown brand treatment.
Do NOT resemble the TikTok musical-note logo.
============================================================
5. INTERNAL NEWS — CRITICAL FIX
============================================================
I am providing FIVE FINAL APPROVED NEWS POSTER IMAGES.
USE THESE EXACT IMAGE FILES.
Do NOT recreate them.
Do NOT reinterpret them.
Do NOT extract their text and rebuild the poster.
Do NOT generate alternative poster art.
Do NOT overlay additional headline copy.
The poster image itself already contains:
- category
- headline
- supporting copy
- Ting Ting branding
Therefore the webpage should contain only:
INTERNAL NEWS
[EXACT PROVIDED POSTER IMAGE]
subtle previous arrow
04 / 05 style counter
subtle next arrow
NO additional:
- CATEGORY:
- HEADLINE:
- SUPPORTING COPY:
- duplicate title
- duplicate description
- extra news category
- random generated text
- caption overlay
IMPORTANT:
Do not write literal words such as:
CATEGORY
HEADLINE
SUPPORTING COPY
anywhere in the carousel.
The supplied poster must remain visually intact.
Carousel behavior to preserve later:
- exactly five posters
- auto-slide every 3.5 seconds
- current slides left
- next enters from right
- smooth infinite loop
- 5 returns to 1 smoothly
- manual left/right navigation
- manual interaction resets timer
- hover may pause on desktop
- poster itself is not clickable
- poster should not be distorted
- preserve readable poster typography
- use responsive object fitting
The carousel should sit on a clean white/ivory page and provide the strongest visual color on the screen.
============================================================
6. REVIEW QUEUE — TYPOGRAPHY AND HIERARCHY
============================================================
Keep:
REVIEW QUEUE
10 Pending
0 Completed
But make this area MUCH easier to read.
Currently the typography is too small.
Create a clear visual hierarchy:
REVIEW QUEUE
strong heading
10 Pending
0 Completed
prominent but elegant counters
Do NOT add:
- Resolved Today
- Pending Case Load
- Live Sync
- latency
- system health
- throughput
- percentages
- technical telemetry
- institutional adjudication language
- descriptive subtitles we did not request
ONLY:
Review Queue
10 Pending
0 Completed
============================================================
7. FILTER AREA
============================================================
Keep ONLY:
ALL
PRIORITY ▾
STATUS ▾
POLICY ▾
No second search field.
Search Case ID remains ONLY in the header.
PRIORITY:
Top
Medium
Low
STATUS:
Pending
Completed
POLICY:
Physical Risk & Imitation
Regulated Goods & Services
Hate Speech & Hateful Behavior
Harassment & Bullying
Shocking & Graphic Content
Body Exposure & Sexualized Behaviors
Integrity & Authenticity
Suicide & Self-Harm
Filters should have:
- comfortable font size
- subtle warm border
- white / cream surfaces
- restrained brown selected state
- enough spacing between controls
Do NOT make them tiny.
============================================================
8. DESKTOP CASE GRID
============================================================
Preserve:
ROW 1 = 4 cards
ROW 2 = 4 cards
ROW 3 = 2 cards
All ten cards must have the SAME WIDTH.
Do not stretch the final two cards.
Increase spacing between cards.
The current cards feel compressed.
Each card needs:
- sufficient internal padding
- clear vertical rhythm
- readable type
- clear separation between metadata and status
- a proper action button
============================================================
9. CASE CARD — EXACT STRUCTURE
============================================================
Every card must contain ONLY:
[9:16 THUMBNAIL]
CASE ID
CREATOR HANDLE
POLICY CATEGORY
Priority: X · Queue age: X
PENDING REVIEW
READ MORE →
Example:
TT-SG-260905-018427
@reelcraft.sg
Physical Risk & Imitation
Priority: Top · Queue age: 3m
PENDING REVIEW
READ MORE →
Do not add any other fields.
IMPORTANT SPACING:
Do not run every line directly into the next.
Use clear breathing room between:
Case ID
Creator
Policy
Operational metadata
Status
Button
The cards should feel premium and calm.
============================================================
10. CARD TYPOGRAPHY
============================================================
CASE ID:
small operational label
readable, not microscopic
CREATOR HANDLE:
regular body size
dark espresso
POLICY:
slightly stronger font weight
do NOT exaggerate it
PRIORITY / QUEUE AGE:
secondary warm-grey metadata
PENDING REVIEW:
red
above Read More
clearly visible
READ MORE:
proper filled button
warm beige / brown tonal surface
dark readable text
right arrow
Do NOT show:
- brackets
- confidence
- hub IDs
- resolution
- video quality
- duration badges above thumbnail
- critical level badges
- incident labels
- AI percentages
- technical telemetry
============================================================
11. EXACT TEN CASE RECORDS
============================================================
Desktop AND Mobile MUST use the EXACT SAME TEN CASES.
DO NOT invent alternative mobile cases.
CASE 01
TT-SG-260905-018427
@reelcraft.sg
Physical Risk & Imitation
Priority: Top
Queue age: 3m
CASE 02
TT-SG-260905-018463
@oddsafterdark
Regulated Goods & Services
Priority: Top
Queue age: 8m
CASE 03
TT-SG-260905-018519
@classroomcontext
Hate Speech & Hateful Behavior
Priority: Medium
Queue age: 2h 10m
CASE 04
TT-IN-260905-020174
@ringsidecut
Shocking & Graphic Content
Priority: Medium
Queue age: 4h 35m
CASE 05
TT-SG-260905-021308
@heritage.stage
Physical Risk & Imitation
Priority: Low
Queue age: 15h 05m
CASE 06
TT-SG-260905-022441
@streetwatch.sg
Shocking & Graphic Content
Priority: Top
Queue age: 21m
CASE 07
TT-IN-260905-023086
@trackline.rider
Physical Risk & Imitation
Priority: Medium
Queue age: 7h 45m
CASE 08
TT-SG-260905-024197
@afterhours.move
Body Exposure & Sexualized Behaviors
Priority: Medium
Queue age: 10h 20m
CASE 09
TT-SG-260905-025634
@medskills.lab
Shocking & Graphic Content
Priority: Low
Queue age: 22h 40m
CASE 10
TT-SG-260905-026712
@urbanstuntlab
Physical Risk & Imitation
Priority: Top
Queue age: 54m
ALL INITIAL STATES:
PENDING REVIEW
INITIAL COUNTS:
10 Pending
0 Completed
============================================================
12. TEMPORARY THUMBNAILS
============================================================
We will replace all case thumbnails later.
For now:
Use simple, believable vertical photographic placeholders.
Prefer:
- Asian/APAC people
- everyday social-video scenes
- realistic environments
- 9:16 framing
Avoid:
- screenshots of other software
- phone UI screenshots
- banking screens
- random dashboards
- charts
- unrelated application screenshots
- text-heavy images
Do not spend excessive visual complexity on temporary thumbnails.
Their job is simply to preserve layout.
============================================================
13. FOOTER — MAJOR VISUAL REVISION
============================================================
The footer must become a visually distinct WARM BEIGE / LIGHT CAMEL section.
Currently it blends into the white page too much.
Use:
footer background:
warm medium-light beige
text:
deep espresso brown
secondary text:
muted warm brown/grey
links:
deeper brown
Use generous padding.
The footer should visually signal:
END OF PAGE.
============================================================
14. DESKTOP FOOTER STRUCTURE
============================================================
Use ONLY:
COLUMN 1
TING TING
original Ting Ting symbol
Short video.
Global expression.
Responsible discovery.
COLUMN 2
COMPANY
About
Policy
Community Guidelines
COLUMN 3
CONTACT
Safety Operations
+65 6818 2400
safety@tingting.example
General Enquiries
+65 6818 2000
hello@tingting.example
Then a visual divider.
GLOBAL OFFICES
ASIA PACIFIC
Singapore — Headquarters
Tokyo
Seoul
Sydney
EUROPE
London
Berlin
AMERICAS / MIDDLE EAST
New York
Toronto
São Paulo
Dubai
BOTTOM:
© 2026 Ting Ting Technologies
Do NOT add:
- Privacy
- Accessibility
- Terms
- compliance directives
- Trust & Safety Node
- system version
- shift capacity
- Start Batch
- hotkeys
- settings
- risk operations labels
- institutional system labels
- random company departments
============================================================
15. MOBILE — REBUILD RESPONSIVELY FROM DESKTOP
============================================================
The current mobile version is REJECTED.
It has invented an entirely different product.
Discard the CURRENT MOBILE CONTENT STRUCTURE.
Rebuild mobile as a RESPONSIVE VERSION OF THE APPROVED DESKTOP SCREEN.
Mobile must use:
- SAME brand
- SAME colors
- SAME ten cases
- SAME case IDs
- SAME handles
- SAME policy categories
- SAME pending/completed logic
- SAME footer information
- SAME news posters
- SAME terminology
Do NOT create a separate mobile product.
============================================================
16. MOBILE — REMOVE ALL INVENTED CONTENT
============================================================
REMOVE from mobile:
- Operational Review Queue
- Institutional trust verification & adjudication desk
- Live Sync
- Pending Case Load
- Resolved Today
- P1 Critical
- P2 High
- P3 Medium
- P4 Low
- Shift Capacity
- Nominal
- Start Batch
- Cases bottom navigation
- Timeline
- Metrics
- Policies bottom navigation
- Company & Governance
- Risk Operations & Contact
- Compliance Directives
- random phone numbers
- random email addresses
- Zurich
- any invented office
- any alternative mobile cases
- any alternative creator handles
- any alternative moderation terminology
NONE of these belong in Ting Ting.
============================================================
17. MOBILE HEADER
============================================================
Use the SAME modern sans-serif typography as desktop.
Do NOT use a large italic or serif SAFETY REVIEW treatment.
Mobile header should be:
hamburger
Ting Ting symbol / wordmark
SAFETY REVIEW
compact Maya Tan profile/avatar
Search may be:
- compact search field
OR
- search icon that expands
Keep it clean.
============================================================
18. MOBILE COLOR SYSTEM
============================================================
Mobile must NOT be all beige/brown.
Use:
PAGE:
warm ivory / near-white
CARDS:
white
HEADER:
white / pale ivory
TEXT:
espresso / charcoal
BROWN:
small accent only
BEIGE:
secondary surface and footer
PENDING:
red
RECORDED ACTION:
green
The mobile page must feel AIRY, BRIGHT and PREMIUM.
============================================================
19. MOBILE NEWS
============================================================
Use the EXACT SAME supplied news poster images.
Do not create a smaller rewritten news layout.
One responsive poster at a time.
Use:
INTERNAL NEWS
[poster]
← 04 / 05 →
Do NOT overlay duplicate poster text.
============================================================
20. MOBILE QUEUE
============================================================
Show simply:
REVIEW QUEUE
10 Pending
0 Completed
Then:
All
Priority
Status
Policy
No new subtitle.
No Live Sync.
No workload language.
============================================================
21. MOBILE CASE CARDS
============================================================
Single-column layout.
Every card uses:
[vertical thumbnail]
TT-SG-...
@handle
Policy category
Priority: X · Queue age: X
PENDING REVIEW
READ MORE →
Use the SAME ten case records as desktop.
No priority badges like P1/P2/P3.
No extra technical terminology.
No new cases.
============================================================
22. MOBILE FOOTER
============================================================
Use the same warm beige footer as desktop.
Stack vertically:
TING TING
tagline
COMPANY
About
Policy
Community Guidelines
CONTACT
approved two phone numbers and emails
GLOBAL OFFICES
same ten offices
© 2026 Ting Ting Technologies
Do NOT invent alternative mobile footer content.
============================================================
23. RESPONSIVE RULES
============================================================
Desktop target:
approximately 1440px wide
Mobile target:
390–430px wide
Ensure:
- no horizontal page overflow
- body typography readable without zoom
- buttons comfortably tappable
- thumbnail proportions preserved
- poster imagery not distorted
- filters usable on phone
- footer readable
- case IDs allowed to wrap carefully if necessary
- no crushed text
- no microscopic metadata
- no overlapping elements
============================================================
24. COMPLETED STATE PREPARATION
============================================================
The functional application will later replace:
PENDING REVIEW
with the moderator’s exact confirmed action:
NO ACTION
REMOVE CONTENT
AGE-GATE 18+
RESTRICT RECOMMENDATION
ADD VIEWER WARNING
ESCALATE REVIEW
Recorded action:
green treatment
READ MORE →
becomes:
VIEW DECISION →
Do not create fake completed cases now.
All ten currently remain Pending.
============================================================
25. NO NEW FEATURES
============================================================
STRICT RULE:
Do not invent anything not explicitly listed in this prompt.
Do not add:
- navigation tabs
- bottom navigation
- analytics
- charts
- metrics
- timelines
- settings
- hotkeys
- workload controls
- batch controls
- audit history
- appeal pages
- live sync
- latency
- queue performance
- system health
- compliance dashboards
- case severity tiers
- technical video metadata
- alternate office locations
- alternate contact details
- alternative moderation cases
SIMPLICITY IS INTENTIONAL.
============================================================
26. FINAL CHECKLIST
============================================================
Before finalizing, verify every item:
DESKTOP
1. Warm light ivory page.
2. White cards.
3. Brown only used as restrained accent.
4. Header readable and spacious.
5. Safety Review centered.
6. Five exact supplied posters used.
7. No CATEGORY/HEADLINE/SUPPORTING COPY text overlays.
8. Review Queue typography larger.
9. 10 Pending / 0 Completed only.
10. Filters readable.
11. Cards have comfortable spacing.
12. Exact ten cases.
13. No technical card clutter.
14. Pending above Read More.
15. Footer clearly beige.
16. Footer contains only approved data.
MOBILE
17. Same product as desktop.
18. Same ten cases.
19. Same terminology.
20. Same news posters.
21. Same footer.
22. No invented bottom navigation.
23. No Start Batch.
24. No Shift Capacity.
25. No Live Sync.
26. No random cases.
27. Not entirely brown/beige.
28. Same sans-serif typography.
29. No horizontal overflow.
30. Comfortable readability.
============================================================
27. OUTPUT
============================================================
Revise the CURRENT existing design.
Return:
1. corrected desktop Screen 1
2. completely corrected responsive mobile version of the SAME Screen 1
Do NOT create Screen 2.
Do NOT create About, Policy or Community Guidelines overlays yet.
Do NOT redesign the product from scratch.
This is a precise cleanup and responsive correction of the existing Ting Ting Review Queue.
Execute every requirement above exactly.
```

**What came back:** This was much closer to the Screen 1 I wanted. The main structure and responsive direction were good enough to keep, but the beige/sand surfaces were still too pale and blended into the white page.

**What I changed next and why:** I made the next prompt color-only so I could strengthen the secondary surfaces without disturbing the layout I had just approved.

---

### Stitch 05 — Color refinement

#### Prompt

```text
COLOR REFINEMENT
Preserve the approved Ting Ting warm light design system, but increase the visual strength of the beige tones.
The current beige is too pale and blends into the white page.
Use:
Main page:
very light warm ivory
Primary cards:
clean white
Secondary beige surfaces:
a noticeably richer warm beige / sand tone, approximately #E8DDCF
Footer:
use a deeper warm sand / camel-beige, approximately #D8C6B3
Primary brown:
approximately #7A5A43
Deep espresso text:
approximately #342820
Do NOT darken the entire page.
The main content area should remain bright and airy.
The darker beige should be concentrated in:
- footer
- selected/secondary surfaces
- subtle section backgrounds
- tonal buttons
The result should feel richer, warmer and more premium, not brown-heavy.
```

**What came back:** The richer beige/sand treatment worked and the page still stayed light instead of becoming brown-heavy.

**What I changed next and why:** I locked the color system and moved to final usability polish: mobile card layout, text size, spacing and footer rhythm.

---

### Stitch 06 — Final Screen 1 polish — preserve current design

#### Prompt

```text
FINAL SCREEN 1 POLISH — PRESERVE CURRENT DESIGN
Preserve the CURRENT approved Ting Ting Screen 1 design, including:
- the newly approved darker beige / sand color refinement
- warm ivory main background
- white cards
- espresso/brown typography
- current Ting Ting header structure
- current Internal News carousel
- current 4 + 4 + 2 desktop case layout
- exact 10 case records
- current footer content
DO NOT redesign the page.
DO NOT change the color system again.
DO NOT invent new features.
Apply ONLY the following final usability and spacing improvements.
============================================================
1. MOBILE CASE CARDS — MAJOR FIX
============================================================
The current mobile case cards are too compressed and look like search-result rows.
REPLACE the current horizontal mobile case-card design with LARGE VERTICAL SINGLE-COLUMN CARDS.
Each mobile card should use this structure:
[ LARGE 9:16 THUMBNAIL ]
CASE ID
CREATOR HANDLE
POLICY CATEGORY
Priority: X · Queue age: X
PENDING REVIEW
READ MORE →
The thumbnail should occupy most of the card width.
The short-video visual must remain important on mobile.
Do NOT place:
thumbnail on left + compressed text on right.
Do NOT use tiny horizontal list cards.
Each mobile card should feel like a premium short-video moderation item.
Use comfortable spacing between:
- thumbnail
- case ID
- creator
- policy
- metadata
- status
- button
Maintain white cards on the warm ivory page.
============================================================
2. MOBILE CARD TYPOGRAPHY
============================================================
Increase mobile readability.
CASE ID:
small but clearly readable operational text.
CREATOR HANDLE:
normal readable body size.
POLICY CATEGORY:
slightly stronger weight than creator metadata.
PRIORITY / QUEUE AGE:
secondary text, but still easily readable without zoom.
PENDING REVIEW:
clear restrained red text.
READ MORE →:
full-width or nearly full-width tonal action button.
All mobile content must be readable at approximately 390–430px viewport width.
No microscopic typography.
============================================================
3. DESKTOP CASE CARD TYPOGRAPHY
============================================================
The desktop cards are structurally correct but the text is still slightly too small.
Increase case-card typography approximately 10–15% while preserving the existing card dimensions and 4-column layout.
Increase line-height and vertical spacing slightly.
Do NOT make the cards bulky.
Maintain hierarchy:
CASE ID
CREATOR
POLICY CATEGORY
Priority / Queue age
PENDING REVIEW
READ MORE →
Policy category should remain the strongest descriptive line.
PENDING REVIEW stays above the button.
============================================================
4. CARD INTERNAL SPACING
============================================================
Increase internal card padding slightly.
Do not allow the text to look compressed immediately beneath the thumbnail.
Create visible breathing room:
thumbnail
↓
Case ID
small space
creator
small space
policy
medium space
priority / queue age
medium space
PENDING REVIEW
small space
READ MORE →
The interface should feel calm and premium.
============================================================
5. READ MORE BUTTON
============================================================
Maintain:
READ MORE →
Use a proper filled tonal button.
No brackets.
Use the approved beige/brown tonal design.
Ensure:
- comfortable height
- readable text
- clear right arrow
- consistent width across cards
- appropriate hover state on desktop
- large enough touch target on mobile
============================================================
6. REVIEW QUEUE COUNTERS
============================================================
Keep ONLY:
10 Pending
0 Completed
Do not create statistic cards.
But increase their visual prominence slightly.
The moderator should be able to understand the current queue state immediately.
Use:
- slightly stronger typography
- more separation between Pending and Completed
- restrained color treatment
Do NOT make them huge.
Do NOT add:
- percentages
- analytics
- charts
- system metrics
============================================================
7. FILTER ROW
============================================================
Keep exactly:
ALL
PRIORITY ▾
STATUS ▾
POLICY ▾
Do not change the available filters.
Ensure they have:
- slightly more comfortable height
- readable typography
- enough spacing
- consistent dropdown arrows
On mobile:
allow clean wrapping or controlled horizontal filter scrolling.
Do NOT cause page-level horizontal overflow.
============================================================
8. DESKTOP GRID
============================================================
Preserve EXACTLY:
Row 1 — 4 cards
Row 2 — 4 cards
Row 3 — 2 cards
The final two cards must stay the same width as the other cards.
Do not stretch them.
Maintain clean alignment with the first column positions.
============================================================
9. SPACE BEFORE FOOTER
============================================================
The current desktop page has too much empty vertical space between the final case row and the footer.
Reduce this gap substantially.
After Cases 09 and 10, use approximately one normal section-spacing interval before the footer begins.
The page should feel intentionally finished rather than unfinished.
Do NOT crowd the footer directly against the case cards.
Use balanced spacing.
============================================================
10. FOOTER TYPOGRAPHY
============================================================
Preserve the current approved footer content and the newly approved darker beige background.
Increase footer readability slightly.
Make these more readable:
- About
- Policy
- Community Guidelines
- Safety Operations
- General Enquiries
- phone numbers
- email addresses
- Global Offices
- city names
- regional headings
- copyright
Increase:
- font size slightly
- line-height
- vertical spacing
Do NOT change footer content.
Do NOT add any new footer links.
============================================================
11. MOBILE FOOTER
============================================================
Keep the same footer information as desktop.
Stack clearly:
TING TING + tagline
COMPANY
About
Policy
Community Guidelines
CONTACT
Safety Operations
phone
email
General Enquiries
phone
email
GLOBAL OFFICES
Asia Pacific
Europe
Americas / Middle East
© 2026 Ting Ting Technologies
Use the approved darker beige footer background.
Give each section enough vertical spacing.
Do not compress the office information into tiny text.
============================================================
12. INTERNAL NEWS
============================================================
The current Internal News treatment is approved.
DO NOT redesign it.
Preserve:
- exact uploaded poster images
- Internal News label
- carousel counter
- previous / next controls
- existing responsive structure
Do NOT add duplicate text over the posters.
Do NOT regenerate the posters.
============================================================
13. HEADER
============================================================
The current header structure is approved.
Preserve:
LEFT:
hamburger
Ting Ting logo
TING TING
CENTER:
SAFETY REVIEW
RIGHT:
Search Case ID
Maya Tan
Content Moderator
profile image
Only make very small spacing/readability corrections if necessary.
Do NOT add navigation links.
============================================================
14. TEMPORARY THUMBNAILS
============================================================
Do NOT spend this revision redesigning temporary thumbnails.
They will be replaced later with final case images.
Preserve the current placeholder dimensions and layout.
The purpose of this revision is typography, spacing and mobile structure.
============================================================
15. EXACT DATA CONSISTENCY
============================================================
Desktop and mobile MUST continue using the exact same ten approved case records.
Do not modify:
- Case IDs
- creator handles
- policy categories
- priorities
- queue ages
Do not invent mobile-specific cases.
All cases remain:
PENDING REVIEW
Current counters remain:
10 Pending
0 Completed
============================================================
16. RESPONSIVE QUALITY
============================================================
Desktop:
approximately 1440px-class width.
Mobile:
approximately 390–430px width.
Ensure:
- no horizontal page overflow
- no text clipping
- no overlapping controls
- readable case IDs
- readable policy names
- comfortable touch targets
- poster aspect ratio preserved
- 9:16 case thumbnails preserved
- footer readable without zooming
============================================================
17. DO NOT ADD FEATURES
============================================================
Do NOT add:
- bottom navigation
- sidebar
- settings
- metrics
- timeline
- analytics
- Start Batch
- Live Sync
- workload indicators
- shift controls
- severity tiers
- system telemetry
- alternate search
- additional filters
- extra pages
- extra navigation
Do not modify the product scope.
============================================================
18. FINAL CHECK
============================================================
Before finishing, verify:
1. Mobile cards are now vertical, large and video-led.
2. Mobile text is comfortably readable.
3. Desktop card typography is slightly larger.
4. Cards have better internal spacing.
5. Pending Review remains red above Read More.
6. Read More has a right arrow.
7. Queue counters are clearer but not dashboard cards.
8. Desktop remains 4 + 4 + 2.
9. Empty space before footer has been reduced.
10. Footer text is more readable.
11. Mobile footer is spacious.
12. News carousel remains unchanged.
13. Header remains unchanged.
14. Current approved color system remains unchanged.
15. No new functionality or content has been invented.
Revise the CURRENT Screen 1 only.
Return the polished desktop version and polished responsive mobile version.
```

**What came back:** The typography and spacing improved, and the mobile cards became the larger vertical style I wanted. However, the mobile build then had a serious regression: the 10 case cards disappeared and the page jumped from the filters straight to the footer.

**What I changed next and why:** I left desktop untouched and sent a mobile-only repair to restore all 10 cases.

---

### Stitch 07 — Mobile-only Screen 1 repair — restore all 10 cases

#### Prompt

```text
MOBILE-ONLY REPAIR — DO NOT MODIFY DESKTOP
The current DESKTOP Screen 1 is approved.
DO NOT change:
- desktop layout
- desktop colors
- desktop header
- desktop news carousel
- desktop case grid
- desktop footer
- desktop spacing
ONLY repair the MOBILE version.
==================================================
PROBLEM
==================================================
The current mobile design incorrectly jumps directly from:
Review Queue + filters
to:
Footer
The entire 10-case moderation queue has disappeared.
This is incorrect.
The mobile version MUST display ALL 10 moderation cases between the filters and the footer.
Do not hide, collapse, summarize or remove the case cards.
==================================================
CORRECT MOBILE PAGE ORDER
==================================================
The mobile page must appear in this exact order:
1. HEADER
2. INTERNAL NEWS CAROUSEL
3. REVIEW QUEUE
10 Pending
0 Completed
4. FILTERS
All
Priority
Status
Policy
5. CASE 01
6. CASE 02
7. CASE 03
8. CASE 04
9. CASE 05
10. CASE 06
11. CASE 07
12. CASE 08
13. CASE 09
14. CASE 10
15. FOOTER
The FOOTER must appear ONLY AFTER Case 10.
==================================================
MOBILE CASE CARD DESIGN
==================================================
Display the 10 cases as a SINGLE-COLUMN vertical feed.
ONE CASE PER ROW.
Each card should be visually substantial and optimized for a 390–430px phone screen.
Structure every card exactly like this:
[ LARGE 9:16 THUMBNAIL ]
CASE ID
CREATOR HANDLE
POLICY CATEGORY
Priority: X · Queue age: X
PENDING REVIEW
READ MORE →
The thumbnail should use nearly the full available card width.
Do NOT use:
- tiny thumbnails
- horizontal search-result cards
- thumbnail-left / text-right layout
- compact list rows
This is a short-video moderation product.
The VIDEO THUMBNAIL should be visually important.
==================================================
CARD SPACING
==================================================
Use generous vertical spacing.
Thumbnail
↓
Case ID
↓
Creator handle
↓
Policy category
↓
Priority / Queue age
↓
PENDING REVIEW
↓
READ MORE →
Each card should have sufficient white space and internal padding.
Cards:
white background
Page:
approved warm ivory background
Buttons:
approved beige/brown tonal style
Pending Review:
restrained red
==================================================
EXACT 10 MOBILE CASES
==================================================
Use EXACTLY the same 10 cases as desktop.
CASE 01
TT-SG-260905-018427
@reelcraft.sg
Physical Risk & Imitation
Priority: Top
Queue age: 3m
CASE 02
TT-SG-260905-018463
@oddsafterdark
Regulated Goods & Services
Priority: Top
Queue age: 8m
CASE 03
TT-SG-260905-018519
@classroomcontext
Hate Speech & Hateful Behavior
Priority: Medium
Queue age: 2h 10m
CASE 04
TT-IN-260905-020174
@ringsidecut
Shocking & Graphic Content
Priority: Medium
Queue age: 4h 35m
CASE 05
TT-SG-260905-021308
@heritage.stage
Physical Risk & Imitation
Priority: Low
Queue age: 15h 05m
CASE 06
TT-SG-260905-022441
@streetwatch.sg
Shocking & Graphic Content
Priority: Top
Queue age: 21m
CASE 07
TT-IN-260905-023086
@trackline.rider
Physical Risk & Imitation
Priority: Medium
Queue age: 7h 45m
CASE 08
TT-SG-260905-024197
@afterhours.move
Body Exposure & Sexualized Behaviors
Priority: Medium
Queue age: 10h 20m
CASE 09
TT-SG-260905-025634
@medskills.lab
Shocking & Graphic Content
Priority: Low
Queue age: 22h 40m
CASE 10
TT-SG-260905-026712
@urbanstuntlab
Physical Risk & Imitation
Priority: Top
Queue age: 54m
Every case currently shows:
PENDING REVIEW
READ MORE →
Do NOT invent new cases.
Do NOT omit any case.
Do NOT change any case data.
==================================================
MOBILE FOOTER
==================================================
Preserve the current approved darker beige footer design.
But move the footer AFTER Case 10.
Do not let the footer appear immediately after the filters.
Keep the approved content:
TING TING
tagline
COMPANY
About
Policy
Community Guidelines
CONTACT
Safety Operations
General Enquiries
GLOBAL OFFICES
same approved 10 offices
© 2026 Ting Ting Technologies
==================================================
MOBILE RESPONSIVE REQUIREMENTS
==================================================
Target:
390–430px phone width
Ensure:
- all 10 cards render
- no horizontal overflow
- case text readable without zoom
- thumbnails retain 9:16 proportion
- Read More buttons are easy to tap
- filters remain usable
- footer begins only after Case 10
- page scrolls naturally from top to bottom
==================================================
STRICT PRESERVATION RULE
==================================================
DO NOT MODIFY THE DESKTOP VERSION.
This task is ONLY to restore and correctly structure the missing mobile case queue.
Do not redesign anything else.
Execute the mobile repair only.
```

**What came back:** The mobile queue came back with all 10 cases in a single-column feed, while the approved desktop version stayed unchanged.

**What I changed next and why:** I treated Screen 1 as ready enough and moved on to the actual review job in Screen 2.

---

### Stitch 08 — Screen 2 — Case Review Workspace, first attempt

#### Prompt

```text
ROLE
Act as a Principal Product Designer, Trust & Safety Product Designer, Responsive UX Lead and Design Systems Lead.
You are designing SCREEN 2 of the existing fictional short-video platform:
TING TING — SAFETY REVIEW
The approved Screen 1 — Review Queue already exists in this Stitch project.
PRESERVE EXACTLY the approved Ting Ting visual identity from Screen 1:
- warm ivory main background
- white primary surfaces
- richer warm beige secondary surfaces
- darker beige / sand footer tone where applicable
- espresso / dark brown typography
- restrained brown accents
- restrained red for Pending
- restrained green for recorded actions
- muted amber only when genuinely useful
- clean contemporary sans-serif typography
- spacious premium consumer-tech feeling
DO NOT return to the previous dark/cyan theme.
DO NOT redesign the Ting Ting brand.
============================================================
1. SCOPE
============================================================
Design ONLY:
SCREEN 2 — CASE REVIEW WORKSPACE
Create:
1. Desktop version
2. Responsive mobile version of the SAME screen
Do NOT design:
- Review Queue again
- confirmation modal yet
- About modal
- Policy Center modal
- Community Guidelines modal
- analytics
- audit history
- appeals
- settings
- model-quality dashboard
- extra pages
This is a focused moderation case-review interface.
============================================================
2. USER AND JOB
============================================================
Primary user:
Content Safety Moderator
The moderator arrives here after selecting:
READ MORE →
on a pending case from Screen 1.
Their job is:
Review the video, assess the system recommendation against the content and relevant policy, choose the final moderation action, record the decision basis, optionally enter a moderator note, and proceed to final confirmation.
IMPORTANT HUMAN–AI PRINCIPLE:
The automated system provides a recommendation.
The moderator has full authority to choose ANY available final action.
Do not visually imply that the system recommendation is mandatory.
============================================================
3. CASE TO DESIGN
============================================================
Use CASE 01 as the complete content example for Screen 2.
CASE ID:
TT-SG-260905-018427
CREATOR:
@reelcraft.sg
CAPTION:
Weekend rehearsal 🎬 Getting the choreography right before tomorrow’s shoot.
DURATION:
00:14
LANGUAGE:
English
MARKET:
Singapore
QUEUE SOURCE:
AI Detected
QUEUE AGE:
3m
PRIORITY:
Top
CURRENT STATUS:
PENDING REVIEW
POLICY:
Physical Risk & Imitation
SYSTEM RECOMMENDED ACTION:
Remove Content
CONFIDENCE:
86%
DETECTED SIGNALS:
- Blade-like objects
- Repeated striking motion
- Close-range physical interaction
============================================================
4. DESKTOP HEADER
============================================================
Use the SAME header language as approved Screen 1.
LEFT:
hamburger icon
original Ting Ting symbol
TING TING
CENTER:
SAFETY REVIEW
SAFETY REVIEW must remain visually centered across the full page.
RIGHT:
small circular fictional profile photograph
Maya Tan
Content Moderator
Search Case ID is NOT necessary on Screen 2 unless the existing design system absolutely requires it.
Prefer a cleaner review workspace.
Do NOT add navigation tabs.
============================================================
5. CASE NAVIGATION ROW
============================================================
Directly below the main header, create a slim case-navigation row.
LEFT:
← Back to Queue
CENTER / NEAR CENTER:
TT-SG-260905-018427
RIGHT SIDE OF CASE ID:
PENDING REVIEW
PENDING REVIEW uses the same restrained red status treatment as Screen 1.
FAR RIGHT:
Previous
Next Case →
Since this is Case 01, Previous may appear disabled or visually subdued.
Do not make this row large.
It is operational navigation.
============================================================
6. CORE DESKTOP LAYOUT
============================================================
Use a sophisticated two-column desktop workspace.
Suggested proportion:
LEFT:
approximately 38–42%
RIGHT:
approximately 58–62%
The page should feel spacious and premium.
LEFT COLUMN:
video + content metadata
RIGHT COLUMN:
system assessment + policy reference + moderator action controls
Do NOT turn this into a dashboard.
Do NOT fill the page with statistics.
============================================================
7. LEFT COLUMN — VIDEO
============================================================
Place a large 9:16 vertical video player.
Use a temporary placeholder video/image for now.
The final MP4 will be added later.
The player should feel like a genuine short-video review surface.
Include only standard unobtrusive playback controls:
- play / pause
- timeline
- current time / duration
- volume
- fullscreen if appropriate
Do NOT add:
- likes
- comments
- shares
- creator follower count
- consumer TikTok-style UI
- social engagement metrics
This is an internal moderation interface.
============================================================
8. LEFT COLUMN — CONTENT METADATA
============================================================
Directly below the video, show:
@reelcraft.sg
Caption:
Weekend rehearsal 🎬 Getting the choreography right before tomorrow’s shoot.
Then a compact metadata row:
00:14 · English · Singapore
Then:
Queue source
AI Detected
Queue age
3m
Priority
Top
Do not over-label everything with large boxes.
This should feel like professional supporting metadata.
Use clean typography and subtle separators.
============================================================
9. RIGHT COLUMN — SYSTEM ASSESSMENT
============================================================
Do NOT use a giant heading such as:
AUTOMATED SIGNAL
AI ANALYSIS
WHY THIS WAS FLAGGED
Instead, create a refined assessment panel.
Use these professional fields:
Policy
Physical Risk & Imitation
Recommended action
Remove Content
Confidence
86%
Detected signals
Blade-like objects
Repeated striking motion
Close-range physical interaction
The title:
Detected signals
must use exactly that wording.
Do NOT use:
Detection signals
Why flagged
Why the AI flagged this
No gaming-style badges.
No giant bright percentages.
Confidence should be visible but restrained.
============================================================
10. VISUAL TREATMENT OF SYSTEM RECOMMENDATION
============================================================
The system recommendation must NOT dominate the human decision section.
It is supporting information.
Recommended action:
Remove Content
can use a subtle warm red/coral tonal treatment, but it should not resemble a warning alarm.
The human controls below remain visually more important.
============================================================
11. POLICY REFERENCE PANEL
============================================================
Below the system assessment, create a clean Policy Reference section.
Use:
PR-4.2
Physical Risk & Imitation
Short guidance:
Content involving conduct with substantial physical-harm potential may require enforcement. Staged, professional, educational or cultural context may alter the applicable treatment.
Then:
View full policy →
IMPORTANT:
View full policy → must look clearly clickable.
It will later open the reusable Policy Center modal already planned for Screen 1.
Do NOT create that modal in this prompt.
Only create the clickable affordance.
Use a refined right-arrow mark.
============================================================
12. FINAL ACTION SECTION
============================================================
Below the policy reference, create the main moderator decision area.
Heading:
FINAL ACTION
This is the most important interaction section.
Provide ALL SIX available actions:
NO ACTION
REMOVE CONTENT
AGE-GATE 18+
RESTRICT RECOMMENDATION
ADD VIEWER WARNING
ESCALATE REVIEW
IMPORTANT:
Do NOT put square brackets around the labels.
Do NOT use gaming-style bordered tiles.
Use modern tonal buttons / segmented action surfaces with carefully graded color differences.
Possible treatment:
NO ACTION
neutral / restrained positive tone
REMOVE CONTENT
stronger warm red/coral tone
AGE-GATE 18+
warm amber-brown tone
RESTRICT RECOMMENDATION
muted warm beige/brown tone
ADD VIEWER WARNING
muted amber tone
ESCALATE REVIEW
deeper amber / attention tone
But remain restrained.
The selected option must have an obvious active state.
============================================================
13. HUMAN AUTHORITY
============================================================
Do NOT lock or pre-select the system recommendation.
The moderator must be able to select ANY of the six final actions.
The UI must visually communicate:
system recommendation = advice
final action = human decision
No action should be disabled because it disagrees with the recommendation.
============================================================
14. DECISION BASIS
============================================================
Directly below Final Action, create:
Decision basis
Then a full-width professional dropdown:
Select decision basis        ▾
This must clearly look like a dropdown box with a down arrow.
The dropdown should be prepared to contain these options:
POLICY BASIS
Physical Risk & Imitation
Regulated Goods & Services
Hate Speech & Hateful Behavior
Harassment & Bullying
Shocking & Graphic Content
Body Exposure & Sexualized Behaviors
Integrity & Authenticity
Suicide & Self-Harm
CONTEXT / DECISION BASIS
Staged / fictional context
Educational context
Professional activity
Cultural / ceremonial context
Public-interest context
Policy threshold not met
Insufficient evidence
Viewer protection without removal
Specialist review required
Do not display all options permanently.
They appear only when the dropdown is opened.
For the initial screen state:
nothing is selected.
============================================================
15. MODERATOR NOTE
============================================================
Below Decision Basis:
Moderator note
Then a clean, reasonably large text field.
IMPORTANT:
The field is frequently used but NOT mandatory.
Do NOT put:
Optional case note
Enter optional note
Type note here
or any placeholder instruction inside the field.
Leave the text area visually empty.
Use a generous height appropriate for approximately 2–4 lines of moderator notes.
============================================================
16. REVIEW & CONFIRM
============================================================
At the bottom/right of the decision area create the primary button:
REVIEW & CONFIRM →
No brackets.
Use a filled primary brown / espresso tonal button consistent with approved Ting Ting branding.
The button should:
- be visually important
- not use bright blue
- include a right arrow
- have a clear hover state
- have enough size for touch interaction
Do NOT create the confirmation modal yet.
The button will later open the confirmation modal.
============================================================
17. DESKTOP LAYOUT EXAMPLE
============================================================
The screen should broadly feel like:
--------------------------------------------------
TING TING             SAFETY REVIEW        Maya Tan
← Back to Queue    TT-SG-260905-018427   PENDING REVIEW
Previous  Next Case →
--------------------------------------------------
LEFT                           RIGHT
[ LARGE 9:16 VIDEO ]           Policy
Physical Risk & Imitation
@reelcraft.sg                  Recommended action
Remove Content
Caption...                     Confidence
86%
00:14 · English · Singapore    Detected signals
• Blade-like objects
Queue source                   • Repeated striking motion
AI Detected                    • Close-range interaction
Queue age                      -------------------------------
3m
POLICY REFERENCE
Priority
Top                            PR-4.2
Physical Risk & Imitation
concise guidance...
View full policy →
--------------------------------------------------
FINAL ACTION
NO ACTION
REMOVE CONTENT
AGE-GATE 18+
RESTRICT RECOMMENDATION
ADD VIEWER WARNING
ESCALATE REVIEW
Decision basis
[ Select decision basis                  ▾ ]
Moderator note
[                                         ]
[                                         ]
REVIEW & CONFIRM →
--------------------------------------------------
Do NOT treat this ASCII layout as literal box styling.
Use professional modern design.
============================================================
18. SPACING / VISUAL QUALITY
============================================================
Use more breathing room than a conventional enterprise admin panel.
Avoid visual congestion.
Use:
- generous section spacing
- readable labels
- subtle separators
- white primary panels
- warm ivory page background
- richer beige secondary areas where appropriate
- restrained shadows
- minimal borders
- clean hierarchy
The interface should feel like a serious internal tool built by a company with a strong consumer-design culture.
============================================================
19. MOBILE VERSION — IMPORTANT
============================================================
Create a TRUE responsive version of the same Screen 2.
Do not invent a separate mobile product.
Target:
390–430px phone width.
Use the SAME:
- case ID
- creator
- caption
- policy
- system recommendation
- confidence
- detected signals
- policy reference
- six final actions
- decision-basis options
- moderator note
- Review & Confirm action
============================================================
20. MOBILE CONTENT ORDER
============================================================
Mobile page should stack in this exact order:
1. HEADER
2. CASE NAVIGATION
← Back
Case ID
Pending Review
3. LARGE 9:16 VIDEO
4. CREATOR + CAPTION
5. CONTENT METADATA
duration
language
market
queue source
queue age
priority
6. SYSTEM ASSESSMENT
7. POLICY REFERENCE
8. FINAL ACTION
9. DECISION BASIS DROPDOWN
10. MODERATOR NOTE
11. REVIEW & CONFIRM →
No footer is required on Screen 2.
============================================================
21. MOBILE SYSTEM ASSESSMENT
============================================================
To reduce page clutter, the mobile version may use compact expandable/accordion sections for:
System assessment
and
Policy reference
BUT:
The information must remain easy to access.
Do not hide Final Action.
Final Action should remain directly visible and usable.
============================================================
22. MOBILE FINAL ACTION
============================================================
Do not squeeze six options into tiny buttons.
Use either:
- two-column action layout
OR
- clean vertically stacked options
OR
- a well-designed action selector
Choose whichever gives the strongest 390–430px usability.
Each option must remain clearly readable and comfortably tappable.
============================================================
23. MOBILE DECISION BASIS
============================================================
Use a full-width dropdown:
Select decision basis     ▾
No horizontal clipping.
On interaction, the options may appear as:
- dropdown menu
OR
- mobile bottom sheet
Do not design a completely different interaction pattern from desktop.
============================================================
24. MOBILE MODERATOR NOTE
============================================================
Full-width text area.
No placeholder text.
Enough height for comfortable typing.
============================================================
25. MOBILE PRIMARY ACTION
============================================================
REVIEW & CONFIRM →
should be:
- full width or nearly full width
- clearly visible
- large touch target
- approved brown/espresso treatment
It may remain sticky near the bottom only if this improves usability without obscuring content.
Do not add a new mobile bottom navigation.
============================================================
26. COMPLETED-CASE STATE PREPARATION
============================================================
The functional application will later support reopening a reviewed case from Screen 1.
When a completed case is reopened:
top status:
PENDING REVIEW
will be replaced by the exact recorded action, for example:
REMOVE CONTENT
The previous:
- Final Action
- Decision Basis
- Moderator Note
will be restored.
Bottom action becomes:
DECISION RECORDED ✓
and is non-clickable.
Do NOT create a separate completed screen now.
Simply ensure the current design system can support this state.
============================================================
27. CONFIRMATION MODAL PREPARATION
============================================================
REVIEW & CONFIRM →
will later open a confirmation modal containing:
Final action
Decision basis
Moderator note if entered
Cancel
Confirm →
Do NOT create the modal in this prompt.
Only ensure the Screen 2 layout supports this next interaction.
============================================================
28. NO EXTRA FEATURES
============================================================
STRICTLY DO NOT ADD:
- dashboards
- analytics
- charts
- moderation metrics
- audit history
- appeals
- case severity score
- system latency
- model performance
- false-positive statistics
- comments
- likes
- shares
- follower counts
- creator engagement metrics
- technical video-resolution information
- additional navigation tabs
- bottom navigation
- settings
- hotkeys
- timeline page
- model-quality tools
- AI training tools
- escalation dashboards
If it is not explicitly requested here, do not invent it.
============================================================
29. FINAL QUALITY CHECK
============================================================
Before finalizing, verify:
1. Screen 2 uses the approved Ting Ting Screen 1 visual identity.
2. No dark/cyan design returns.
3. Safety Review remains centered.
4. Case ID is prominent but not oversized.
5. Pending Review is red.
6. Video is the dominant left-side content.
7. Only relevant metadata is shown.
8. Queue source says exactly “AI Detected”.
9. Heading says exactly “Detected signals”.
10. System recommendation does not dominate human controls.
11. View full policy → is present.
12. All six final actions are present.
13. Moderator can select any action.
14. Decision Basis is a proper dropdown with down arrow.
15. Moderator Note has no placeholder.
16. Review & Confirm includes right arrow.
17. Desktop is spacious and professional.
18. Mobile is the same product, not a different design.
19. Mobile remains readable at 390–430px.
20. No extra features have been invented.
============================================================
30. OUTPUT
============================================================
Create ONLY:
SCREEN 2 — CASE REVIEW WORKSPACE
Return:
1. polished desktop version
2. polished responsive mobile version
Do NOT modify approved Screen 1.
Do NOT create the confirmation modal yet.
Do NOT create Policy Center yet.
Do NOT create About or Community Guidelines.
Preserve the approved Ting Ting brand system exactly.
Begin.
```

**What came back:** Stitch failed again with the same unexpected-generation error, so no usable Screen 2 was produced.

**What I changed next and why:** I resent the same Screen 2 specification because this was a tool failure, not a reason to change the product idea.

---

### Stitch 09 — Screen 2 — Case Review Workspace, retry

#### Prompt

```text
ROLE
Act as a Principal Product Designer, Trust & Safety Product Designer, Responsive UX Lead and Design Systems Lead.
You are designing SCREEN 2 of the existing fictional short-video platform:
TING TING — SAFETY REVIEW
The approved Screen 1 — Review Queue already exists in this Stitch project.
PRESERVE EXACTLY the approved Ting Ting visual identity from Screen 1:
- warm ivory main background
- white primary surfaces
- richer warm beige secondary surfaces
- darker beige / sand footer tone where applicable
- espresso / dark brown typography
- restrained brown accents
- restrained red for Pending
- restrained green for recorded actions
- muted amber only when genuinely useful
- clean contemporary sans-serif typography
- spacious premium consumer-tech feeling
DO NOT return to the previous dark/cyan theme.
DO NOT redesign the Ting Ting brand.
============================================================
1. SCOPE
============================================================
Design ONLY:
SCREEN 2 — CASE REVIEW WORKSPACE
Create:
1. Desktop version
2. Responsive mobile version of the SAME screen
Do NOT design:
- Review Queue again
- confirmation modal yet
- About modal
- Policy Center modal
- Community Guidelines modal
- analytics
- audit history
- appeals
- settings
- model-quality dashboard
- extra pages
This is a focused moderation case-review interface.
============================================================
2. USER AND JOB
============================================================
Primary user:
Content Safety Moderator
The moderator arrives here after selecting:
READ MORE →
on a pending case from Screen 1.
Their job is:
Review the video, assess the system recommendation against the content and relevant policy, choose the final moderation action, record the decision basis, optionally enter a moderator note, and proceed to final confirmation.
IMPORTANT HUMAN–AI PRINCIPLE:
The automated system provides a recommendation.
The moderator has full authority to choose ANY available final action.
Do not visually imply that the system recommendation is mandatory.
============================================================
3. CASE TO DESIGN
============================================================
Use CASE 01 as the complete content example for Screen 2.
CASE ID:
TT-SG-260905-018427
CREATOR:
@reelcraft.sg
CAPTION:
Weekend rehearsal 🎬 Getting the choreography right before tomorrow’s shoot.
DURATION:
00:14
LANGUAGE:
English
MARKET:
Singapore
QUEUE SOURCE:
AI Detected
QUEUE AGE:
3m
PRIORITY:
Top
CURRENT STATUS:
PENDING REVIEW
POLICY:
Physical Risk & Imitation
SYSTEM RECOMMENDED ACTION:
Remove Content
CONFIDENCE:
86%
DETECTED SIGNALS:
- Blade-like objects
- Repeated striking motion
- Close-range physical interaction
============================================================
4. DESKTOP HEADER
============================================================
Use the SAME header language as approved Screen 1.
LEFT:
hamburger icon
original Ting Ting symbol
TING TING
CENTER:
SAFETY REVIEW
SAFETY REVIEW must remain visually centered across the full page.
RIGHT:
small circular fictional profile photograph
Maya Tan
Content Moderator
Search Case ID is NOT necessary on Screen 2 unless the existing design system absolutely requires it.
Prefer a cleaner review workspace.
Do NOT add navigation tabs.
============================================================
5. CASE NAVIGATION ROW
============================================================
Directly below the main header, create a slim case-navigation row.
LEFT:
← Back to Queue
CENTER / NEAR CENTER:
TT-SG-260905-018427
RIGHT SIDE OF CASE ID:
PENDING REVIEW
PENDING REVIEW uses the same restrained red status treatment as Screen 1.
FAR RIGHT:
Previous
Next Case →
Since this is Case 01, Previous may appear disabled or visually subdued.
Do not make this row large.
It is operational navigation.
============================================================
6. CORE DESKTOP LAYOUT
============================================================
Use a sophisticated two-column desktop workspace.
Suggested proportion:
LEFT:
approximately 38–42%
RIGHT:
approximately 58–62%
The page should feel spacious and premium.
LEFT COLUMN:
video + content metadata
RIGHT COLUMN:
system assessment + policy reference + moderator action controls
Do NOT turn this into a dashboard.
Do NOT fill the page with statistics.
============================================================
7. LEFT COLUMN — VIDEO
============================================================
Place a large 9:16 vertical video player.
Use a temporary placeholder video/image for now.
The final MP4 will be added later.
The player should feel like a genuine short-video review surface.
Include only standard unobtrusive playback controls:
- play / pause
- timeline
- current time / duration
- volume
- fullscreen if appropriate
Do NOT add:
- likes
- comments
- shares
- creator follower count
- consumer TikTok-style UI
- social engagement metrics
This is an internal moderation interface.
============================================================
8. LEFT COLUMN — CONTENT METADATA
============================================================
Directly below the video, show:
@reelcraft.sg
Caption:
Weekend rehearsal 🎬 Getting the choreography right before tomorrow’s shoot.
Then a compact metadata row:
00:14 · English · Singapore
Then:
Queue source
AI Detected
Queue age
3m
Priority
Top
Do not over-label everything with large boxes.
This should feel like professional supporting metadata.
Use clean typography and subtle separators.
============================================================
9. RIGHT COLUMN — SYSTEM ASSESSMENT
============================================================
Do NOT use a giant heading such as:
AUTOMATED SIGNAL
AI ANALYSIS
WHY THIS WAS FLAGGED
Instead, create a refined assessment panel.
Use these professional fields:
Policy
Physical Risk & Imitation
Recommended action
Remove Content
Confidence
86%
Detected signals
Blade-like objects
Repeated striking motion
Close-range physical interaction
The title:
Detected signals
must use exactly that wording.
Do NOT use:
Detection signals
Why flagged
Why the AI flagged this
No gaming-style badges.
No giant bright percentages.
Confidence should be visible but restrained.
============================================================
10. VISUAL TREATMENT OF SYSTEM RECOMMENDATION
============================================================
The system recommendation must NOT dominate the human decision section.
It is supporting information.
Recommended action:
Remove Content
can use a subtle warm red/coral tonal treatment, but it should not resemble a warning alarm.
The human controls below remain visually more important.
============================================================
11. POLICY REFERENCE PANEL
============================================================
Below the system assessment, create a clean Policy Reference section.
Use:
PR-4.2
Physical Risk & Imitation
Short guidance:
Content involving conduct with substantial physical-harm potential may require enforcement. Staged, professional, educational or cultural context may alter the applicable treatment.
Then:
View full policy →
IMPORTANT:
View full policy → must look clearly clickable.
It will later open the reusable Policy Center modal already planned for Screen 1.
Do NOT create that modal in this prompt.
Only create the clickable affordance.
Use a refined right-arrow mark.
============================================================
12. FINAL ACTION SECTION
============================================================
Below the policy reference, create the main moderator decision area.
Heading:
FINAL ACTION
This is the most important interaction section.
Provide ALL SIX available actions:
NO ACTION
REMOVE CONTENT
AGE-GATE 18+
RESTRICT RECOMMENDATION
ADD VIEWER WARNING
ESCALATE REVIEW
IMPORTANT:
Do NOT put square brackets around the labels.
Do NOT use gaming-style bordered tiles.
Use modern tonal buttons / segmented action surfaces with carefully graded color differences.
Possible treatment:
NO ACTION
neutral / restrained positive tone
REMOVE CONTENT
stronger warm red/coral tone
AGE-GATE 18+
warm amber-brown tone
RESTRICT RECOMMENDATION
muted warm beige/brown tone
ADD VIEWER WARNING
muted amber tone
ESCALATE REVIEW
deeper amber / attention tone
But remain restrained.
The selected option must have an obvious active state.
============================================================
13. HUMAN AUTHORITY
============================================================
Do NOT lock or pre-select the system recommendation.
The moderator must be able to select ANY of the six final actions.
The UI must visually communicate:
system recommendation = advice
final action = human decision
No action should be disabled because it disagrees with the recommendation.
============================================================
14. DECISION BASIS
============================================================
Directly below Final Action, create:
Decision basis
Then a full-width professional dropdown:
Select decision basis        ▾
This must clearly look like a dropdown box with a down arrow.
The dropdown should be prepared to contain these options:
POLICY BASIS
Physical Risk & Imitation
Regulated Goods & Services
Hate Speech & Hateful Behavior
Harassment & Bullying
Shocking & Graphic Content
Body Exposure & Sexualized Behaviors
Integrity & Authenticity
Suicide & Self-Harm
CONTEXT / DECISION BASIS
Staged / fictional context
Educational context
Professional activity
Cultural / ceremonial context
Public-interest context
Policy threshold not met
Insufficient evidence
Viewer protection without removal
Specialist review required
Do not display all options permanently.
They appear only when the dropdown is opened.
For the initial screen state:
nothing is selected.
============================================================
15. MODERATOR NOTE
============================================================
Below Decision Basis:
Moderator note
Then a clean, reasonably large text field.
IMPORTANT:
The field is frequently used but NOT mandatory.
Do NOT put:
Optional case note
Enter optional note
Type note here
or any placeholder instruction inside the field.
Leave the text area visually empty.
Use a generous height appropriate for approximately 2–4 lines of moderator notes.
============================================================
16. REVIEW & CONFIRM
============================================================
At the bottom/right of the decision area create the primary button:
REVIEW & CONFIRM →
No brackets.
Use a filled primary brown / espresso tonal button consistent with approved Ting Ting branding.
The button should:
- be visually important
- not use bright blue
- include a right arrow
- have a clear hover state
- have enough size for touch interaction
Do NOT create the confirmation modal yet.
The button will later open the confirmation modal.
============================================================
17. DESKTOP LAYOUT EXAMPLE
============================================================
The screen should broadly feel like:
--------------------------------------------------
TING TING             SAFETY REVIEW        Maya Tan
← Back to Queue    TT-SG-260905-018427   PENDING REVIEW
Previous  Next Case →
--------------------------------------------------
LEFT                           RIGHT
[ LARGE 9:16 VIDEO ]           Policy
Physical Risk & Imitation
@reelcraft.sg                  Recommended action
Remove Content
Caption...                     Confidence
86%
00:14 · English · Singapore    Detected signals
• Blade-like objects
Queue source                   • Repeated striking motion
AI Detected                    • Close-range interaction
Queue age                      -------------------------------
3m
POLICY REFERENCE
Priority
Top                            PR-4.2
Physical Risk & Imitation
concise guidance...
View full policy →
--------------------------------------------------
FINAL ACTION
NO ACTION
REMOVE CONTENT
AGE-GATE 18+
RESTRICT RECOMMENDATION
ADD VIEWER WARNING
ESCALATE REVIEW
Decision basis
[ Select decision basis                  ▾ ]
Moderator note
[                                         ]
[                                         ]
REVIEW & CONFIRM →
--------------------------------------------------
Do NOT treat this ASCII layout as literal box styling.
Use professional modern design.
============================================================
18. SPACING / VISUAL QUALITY
============================================================
Use more breathing room than a conventional enterprise admin panel.
Avoid visual congestion.
Use:
- generous section spacing
- readable labels
- subtle separators
- white primary panels
- warm ivory page background
- richer beige secondary areas where appropriate
- restrained shadows
- minimal borders
- clean hierarchy
The interface should feel like a serious internal tool built by a company with a strong consumer-design culture.
============================================================
19. MOBILE VERSION — IMPORTANT
============================================================
Create a TRUE responsive version of the same Screen 2.
Do not invent a separate mobile product.
Target:
390–430px phone width.
Use the SAME:
- case ID
- creator
- caption
- policy
- system recommendation
- confidence
- detected signals
- policy reference
- six final actions
- decision-basis options
- moderator note
- Review & Confirm action
============================================================
20. MOBILE CONTENT ORDER
============================================================
Mobile page should stack in this exact order:
1. HEADER
2. CASE NAVIGATION
← Back
Case ID
Pending Review
3. LARGE 9:16 VIDEO
4. CREATOR + CAPTION
5. CONTENT METADATA
duration
language
market
queue source
queue age
priority
6. SYSTEM ASSESSMENT
7. POLICY REFERENCE
8. FINAL ACTION
9. DECISION BASIS DROPDOWN
10. MODERATOR NOTE
11. REVIEW & CONFIRM →
No footer is required on Screen 2.
============================================================
21. MOBILE SYSTEM ASSESSMENT
============================================================
To reduce page clutter, the mobile version may use compact expandable/accordion sections for:
System assessment
and
Policy reference
BUT:
The information must remain easy to access.
Do not hide Final Action.
Final Action should remain directly visible and usable.
============================================================
22. MOBILE FINAL ACTION
============================================================
Do not squeeze six options into tiny buttons.
Use either:
- two-column action layout
OR
- clean vertically stacked options
OR
- a well-designed action selector
Choose whichever gives the strongest 390–430px usability.
Each option must remain clearly readable and comfortably tappable.
============================================================
23. MOBILE DECISION BASIS
============================================================
Use a full-width dropdown:
Select decision basis     ▾
No horizontal clipping.
On interaction, the options may appear as:
- dropdown menu
OR
- mobile bottom sheet
Do not design a completely different interaction pattern from desktop.
============================================================
24. MOBILE MODERATOR NOTE
============================================================
Full-width text area.
No placeholder text.
Enough height for comfortable typing.
============================================================
25. MOBILE PRIMARY ACTION
============================================================
REVIEW & CONFIRM →
should be:
- full width or nearly full width
- clearly visible
- large touch target
- approved brown/espresso treatment
It may remain sticky near the bottom only if this improves usability without obscuring content.
Do not add a new mobile bottom navigation.
============================================================
26. COMPLETED-CASE STATE PREPARATION
============================================================
The functional application will later support reopening a reviewed case from Screen 1.
When a completed case is reopened:
top status:
PENDING REVIEW
will be replaced by the exact recorded action, for example:
REMOVE CONTENT
The previous:
- Final Action
- Decision Basis
- Moderator Note
will be restored.
Bottom action becomes:
DECISION RECORDED ✓
and is non-clickable.
Do NOT create a separate completed screen now.
Simply ensure the current design system can support this state.
============================================================
27. CONFIRMATION MODAL PREPARATION
============================================================
REVIEW & CONFIRM →
will later open a confirmation modal containing:
Final action
Decision basis
Moderator note if entered
Cancel
Confirm →
Do NOT create the modal in this prompt.
Only ensure the Screen 2 layout supports this next interaction.
============================================================
28. NO EXTRA FEATURES
============================================================
STRICTLY DO NOT ADD:
- dashboards
- analytics
- charts
- moderation metrics
- audit history
- appeals
- case severity score
- system latency
- model performance
- false-positive statistics
- comments
- likes
- shares
- follower counts
- creator engagement metrics
- technical video-resolution information
- additional navigation tabs
- bottom navigation
- settings
- hotkeys
- timeline page
- model-quality tools
- AI training tools
- escalation dashboards
If it is not explicitly requested here, do not invent it.
============================================================
29. FINAL QUALITY CHECK
============================================================
Before finalizing, verify:
1. Screen 2 uses the approved Ting Ting Screen 1 visual identity.
2. No dark/cyan design returns.
3. Safety Review remains centered.
4. Case ID is prominent but not oversized.
5. Pending Review is red.
6. Video is the dominant left-side content.
7. Only relevant metadata is shown.
8. Queue source says exactly “AI Detected”.
9. Heading says exactly “Detected signals”.
10. System recommendation does not dominate human controls.
11. View full policy → is present.
12. All six final actions are present.
13. Moderator can select any action.
14. Decision Basis is a proper dropdown with down arrow.
15. Moderator Note has no placeholder.
16. Review & Confirm includes right arrow.
17. Desktop is spacious and professional.
18. Mobile is the same product, not a different design.
19. Mobile remains readable at 390–430px.
20. No extra features have been invented.
============================================================
30. OUTPUT
============================================================
Create ONLY:
SCREEN 2 — CASE REVIEW WORKSPACE
Return:
1. polished desktop version
2. polished responsive mobile version
Do NOT modify approved Screen 1.
Do NOT create the confirmation modal yet.
Do NOT create Policy Center yet.
Do NOT create About or Community Guidelines.
Preserve the approved Ting Ting brand system exactly.
Begin.
```

**What came back:** The retry produced both desktop and mobile Screen 2, and the basic review workspace was there. But it added several things I had not asked for, including tier/adjudication wording, creator-verification language and engineering-style video metadata.

**What I changed next and why:** I kept the layout and sent a cleanup prompt that removed the invented labels and technical clutter instead of redesigning the screen.

---

### Stitch 10 — Final Screen 2 cleanup — preserve current structure

#### Prompt

```text
FINAL SCREEN 2 CLEANUP — PRESERVE CURRENT STRUCTURE
ROLE
Act as a Principal Product Designer, Trust & Safety Product Designer, Responsive UX Lead and Design Systems Lead.
You are refining the CURRENT existing:
TING TING — SAFETY REVIEW
SCREEN 2 — CASE REVIEW WORKSPACE
The current Screen 2 structure is approved.
DO NOT redesign the page.
DO NOT change the overall layout.
DO NOT change the approved Ting Ting visual identity.
DO NOT create new features.
DO NOT create new screens.
This is a surgical cleanup of terminology, spacing and invented interface details only.
============================================================
1. STRICT PRESERVATION
============================================================
PRESERVE the current:
DESKTOP
- two-column layout
- large 9:16 video on the left
- content metadata beneath video
- system information panel on the right
- Policy Reference section
- Final Action 2-column / grid structure
- Decision Basis dropdown
- Moderator Note field
- Review & Confirm button
- Back to Queue / case navigation
- warm ivory / white / brown / beige visual system
MOBILE
- vertical stacked layout
- large 9:16 video
- content information
- system information
- Policy Reference
- 2-column Final Action controls
- Decision Basis dropdown
- Moderator Note
- Review & Confirm button
Do NOT change these foundations.
============================================================
2. HEADER
============================================================
Preserve the approved Ting Ting header.
LEFT:
Ting Ting symbol
TING TING
CENTER:
SAFETY REVIEW
RIGHT:
Maya Tan
Content Moderator
profile photo
On mobile:
increase header breathing room and readability slightly.
Do NOT make the header oversized.
Do NOT introduce:
- navigation tabs
- search fields
- settings
- notifications
- new profile controls
============================================================
3. CASE NAVIGATION — CLEAN UP
============================================================
Use:
← Back to Queue
TT-SG-260905-018427
PENDING REVIEW
Previous
Next Case →
For Case 01:
Previous may appear disabled.
PENDING REVIEW uses the same restrained red treatment as Screen 1.
REMOVE completely:
TIER 1 ADJUDICATION
CASE REF:
or any other invented adjudication / tier terminology.
The Case ID itself is enough.
Mobile should simply show:
← Back to Queue
TT-SG-260905-018427
PENDING REVIEW
Do not add any tier or level.
============================================================
4. CREATOR / CONTENT INFORMATION
============================================================
Keep:
@reelcraft.sg
Caption:
Weekend rehearsal 🎬 Getting the choreography right before tomorrow’s shoot.
Metadata:
00:14 · English · Singapore
Queue source:
AI Detected
Queue age:
3m
Priority:
Top
REMOVE:
VERIFIED CREATOR
or any creator verification status.
REMOVE any:
- follower count
- likes
- engagement metrics
- account tier
- creator score
============================================================
5. REMOVE TECHNICAL VIDEO METADATA
============================================================
Do NOT show:
720×1280
H.264
1080p
codec
resolution
bitrate
media technical metadata
Use ONLY:
00:14 · English · Singapore
This is a moderation decision interface, not a video engineering tool.
============================================================
6. SYSTEM INFORMATION TERMINOLOGY
============================================================
Remove the heading:
SYSTEM ASSESSMENT
Remove:
POLICY FLAGGED
Remove:
MODEL CONFIDENCE
Use the simpler exact terminology:
Policy
Physical Risk & Imitation
Recommended action
Remove Content
Confidence
86%
Detected signals
Blade-like objects
Repeated striking motion
Close-range physical interaction
IMPORTANT:
Use exactly:
Detected signals
Do NOT use:
Detection signals
Why flagged
System signal
AI analysis
Model analysis
============================================================
7. DETECTED SIGNALS — EXACT WORDING
============================================================
Replace any extended / invented text such as:
Blade-like objects detected in primary action zone
Repeated striking motion (high-velocity hand movement)
Close-range physical interaction without safety gear
with ONLY:
Blade-like objects
Repeated striking motion
Close-range physical interaction
Do not add technical explanation.
============================================================
8. SYSTEM RECOMMENDATION
============================================================
Recommended action:
Remove Content
Confidence:
86%
These are supporting signals only.
Do not visually imply the moderator must follow the recommendation.
Do not pre-select Remove Content in Final Action.
The moderator retains full authority to choose any of the six Final Actions.
============================================================
9. POLICY REFERENCE
============================================================
Preserve the current Policy Reference layout.
Use:
PR-4.2
Physical Risk & Imitation
Guidance:
Content involving conduct with substantial physical-harm potential may require enforcement. Staged, professional, educational or cultural context may alter the applicable treatment.
Then:
View full policy →
Keep the right arrow.
Make it clearly clickable.
Do NOT create the Policy modal yet.
============================================================
10. FINAL ACTION — REMOVE INVENTED LANGUAGE
============================================================
Keep heading:
FINAL ACTION
REMOVE:
Human adjudicator override active
REMOVE:
Select 1 resolution
REMOVE any:
- override mode
- adjudication mode
- decision engine language
- human control status
- specialist tier indicator
Simply show:
FINAL ACTION
followed by the six choices.
============================================================
11. FINAL ACTION OPTIONS — EXACT CONTENT
============================================================
Use all six:
NO ACTION
Content remains available
REMOVE CONTENT
Remove from platform
AGE-GATE 18+
Restrict to adult viewers
RESTRICT RECOMMENDATION
Limit from recommendation surfaces
ADD VIEWER WARNING
Apply contextual viewing notice
ESCALATE REVIEW
Send for specialist review
Use concise professional microcopy.
Do NOT use:
Confirms with safety standards
Direct violation of policy threshold
Exclude from algorithmic feeds
Senior Policy Specialist
or other invented language.
============================================================
12. FINAL ACTION VISUAL STYLE
============================================================
Preserve the existing action-control grid.
Do NOT make the actions gaming-style cards.
Use restrained tonal surfaces.
The selected state should be clearly visible.
Possible visual logic:
No Action:
neutral / subtle positive tone
Remove Content:
restrained red/coral tone
Age-Gate 18+:
warm amber
Restrict Recommendation:
warm beige/brown
Add Viewer Warning:
muted amber
Escalate Review:
deeper amber / attention tone
Do not use bright blue.
Do not preselect any action.
============================================================
13. DECISION BASIS
============================================================
Preserve:
Decision basis
[ Select decision basis ▾ ]
It must visibly be a dropdown box with a down arrow.
Initial state:
nothing selected.
Dropdown options should include:
POLICY BASIS
Physical Risk & Imitation
Regulated Goods & Services
Hate Speech & Hateful Behavior
Harassment & Bullying
Shocking & Graphic Content
Body Exposure & Sexualized Behaviors
Integrity & Authenticity
Suicide & Self-Harm
CONTEXT / DECISION BASIS
Staged / fictional context
Educational context
Professional activity
Cultural / ceremonial context
Public-interest context
Policy threshold not met
Insufficient evidence
Viewer protection without removal
Specialist review required
Do not expose all options unless dropdown is opened.
============================================================
14. MODERATOR NOTE
============================================================
Use ONLY:
Moderator note
Then the empty text area.
REMOVE completely:
Optional audit record
REMOVE:
Optional
Audit
Case note
Enter note
Type here
placeholder instructions
The text field should appear frequently usable but not mandatory.
Leave it visually empty.
============================================================
15. REVIEW & CONFIRM
============================================================
Preserve:
REVIEW & CONFIRM →
Use the right arrow.
Keep it as the primary filled Ting Ting action button.
Do NOT add:
Submit
Save
Apply
Approve
Continue
Do NOT create the confirmation modal yet.
============================================================
16. MOBILE CLEANUP
============================================================
Preserve the current mobile structure.
Mobile content order should remain:
1. Header
2. Back to Queue + Case ID + Pending Review
3. Video
4. Creator / caption
5. Content metadata
6. Policy / recommended action / confidence / detected signals
7. Policy Reference
8. Final Action
9. Decision Basis
10. Moderator Note
11. Review & Confirm →
REMOVE from mobile:
- Tier 1 Adjudication
- Verified Creator
- System Assessment heading
- Optional audit record
- Select 1 resolution
- technical media metadata
- any invented workflow labels
Increase the mobile header and case-navigation readability slightly.
Do not enlarge excessively.
============================================================
17. MOBILE ACTION GRID
============================================================
Keep the current 2-column mobile Final Action layout.
It works well.
Ensure all six actions remain readable and tappable.
Do NOT turn them into a dropdown.
Do NOT create horizontal scrolling.
Do NOT make the labels microscopic.
============================================================
18. MOBILE POLICY SECTION
============================================================
Preserve the current Policy Reference panel.
Ensure:
View full policy →
is clearly visible and tappable.
Do not create the Policy modal yet.
============================================================
19. MOBILE NOTE / DROPDOWN
============================================================
Decision Basis:
full-width dropdown.
Moderator Note:
full-width text area.
Review & Confirm:
full-width or near-full-width primary button.
No placeholder inside Moderator Note.
============================================================
20. EXACT CASE DATA
============================================================
Do not alter the current case information.
CASE:
TT-SG-260905-018427
Creator:
@reelcraft.sg
Caption:
Weekend rehearsal 🎬 Getting the choreography right before tomorrow’s shoot.
Duration:
00:14
Language:
English
Market:
Singapore
Queue source:
AI Detected
Queue age:
3m
Priority:
Top
Policy:
Physical Risk & Imitation
Recommended action:
Remove Content
Confidence:
86%
Detected signals:
Blade-like objects
Repeated striking motion
Close-range physical interaction
Current status:
PENDING REVIEW
============================================================
21. DO NOT MODIFY THE VIDEO PLACEHOLDER
============================================================
The current video is temporary.
Do NOT spend this revision changing:
- people
- scene
- video styling
- thumbnail
- placeholder imagery
The final Case 01 media asset will replace it later.
Preserve the current video dimensions and player layout only.
============================================================
22. DO NOT ADD FEATURES
============================================================
STRICTLY DO NOT ADD:
- Audit History
- Appeals
- Quality metrics
- Model quality
- precision / recall
- false-positive data
- training data
- model feedback
- additional review tiers
- severity scores
- creator verification
- creator risk scores
- social engagement
- comments
- likes
- shares
- follower count
- case history
- case timeline
- technical video metadata
- settings
- hotkeys
- notifications
- dashboards
- charts
- additional navigation
This remains Stage C human moderation review only.
============================================================
23. COMPLETED STATE PREPARATION
============================================================
Do not create a new screen.
Simply preserve visual support for the future state where:
PENDING REVIEW
will become the exact recorded Final Action.
Example:
REMOVE CONTENT
The recorded:
Final Action
Decision Basis
Moderator Note
will remain visible when a completed case is reopened.
The bottom action will later become:
DECISION RECORDED ✓
Do not implement this state now.
============================================================
24. VISUAL SYSTEM
============================================================
Preserve exactly the existing approved Ting Ting visual system:
- warm ivory page
- white main cards
- richer beige supporting surfaces
- espresso/dark brown typography
- refined brown brand accents
- red pending status
- subtle tonal action controls
- clean contemporary sans-serif
Do NOT change the overall palette.
Do NOT reintroduce dark navy/cyan.
============================================================
25. FINAL QUALITY CHECK
============================================================
Before completing the revision verify:
1. Overall desktop layout unchanged.
2. Overall mobile layout unchanged.
3. Tier 1 Adjudication removed.
4. Verified Creator removed.
5. System Assessment heading removed.
6. Policy Flagged changed to Policy.
7. Model Confidence changed to Confidence.
8. Queue source says AI Detected.
9. Video metadata says 00:14 · English · Singapore.
10. No codec/resolution shown.
11. Detected signals use exact short wording.
12. Human adjudicator override text removed.
13. Select 1 resolution removed.
14. Final Action contains exactly six options.
15. Action microcopy uses the approved wording.
16. Decision Basis remains a dropdown.
17. Moderator Note has no optional/audit text.
18. Review & Confirm keeps right arrow.
19. Mobile remains responsive.
20. No new features are invented.
============================================================
26. OUTPUT
============================================================
Revise the CURRENT Screen 2 only.
Return:
1. cleaned desktop Case Review Workspace
2. cleaned mobile Case Review Workspace
Do NOT modify Screen 1.
Do NOT create the confirmation modal yet.
Do NOT create Policy Center yet.
Do NOT create About or Community Guidelines.
Preserve the successful existing Screen 2 structure exactly and apply only the corrections specified above.
```

**What came back:** A lot of the extra content was removed and the two-column desktop/mobile structure stayed intact, but some unwanted wording was still left in the interface.

**What I changed next and why:** I narrowed the next prompt to text only so I could finish the wording cleanup without risking the layout.

---

### Stitch 11 — Screen 2 text-only surgical revision — first attempt

#### Prompt

```text
SCREEN 2 — TEXT-ONLY SURGICAL REVISION
Preserve the CURRENT desktop and mobile Screen 2 layouts EXACTLY.
CRITICAL:
Do not move, resize, restructure, merge, compress, reorder or redesign ANY component.
Do not alter:
- two-column desktop proportions
- video size
- right-column panel sizes
- vertical spacing
- Final Action layout
- Decision Basis position
- Moderator Note position
- Review & Confirm position
- mobile layout
- colors
- typography sizes
- card dimensions
Make ONLY the following wording/content corrections.
1. Remove:
“TIER 1 ADJUDICATION”
2. Remove:
“VERIFIED CREATOR”
3. Remove:
“SYSTEM ASSESSMENT”
4. Replace:
“POLICY FLAGGED”
with:
“Policy”
5. Replace:
“MODEL CONFIDENCE”
with:
“Confidence”
6. System information must read:
Policy
Physical Risk & Imitation
Recommended action
Remove Content
Confidence
86%
Detected signals
• Blade-like objects
• Repeated striking motion
• Close-range physical interaction
IMPORTANT:
Recommended action must remain a normal information field.
Do NOT convert “Remove Content” into a badge, pill or chip.
7. Replace technical video metadata with exactly:
00:14 · English · Singapore
Remove:
720×1280
H.264
resolution
codec information
8. Keep:
Queue source
AI Detected
Queue age
3m
Priority
Top
9. Remove:
“Human adjudicator override active”
10. Remove:
“Select 1 resolution”
11. Final Action options remain exactly:
NO ACTION
Content remains available
REMOVE CONTENT
Remove from platform
AGE-GATE 18+
Restrict to adult viewers
RESTRICT RECOMMENDATION
Limit from recommendation surfaces
ADD VIEWER WARNING
Apply contextual viewing notice
ESCALATE REVIEW
Send for specialist review
12. Keep Decision Basis exactly where it currently is.
Label:
Decision basis
Dropdown:
Select decision basis ▾
13. Remove:
“Optional audit record”
Use only:
Moderator note
Keep the text area empty with no placeholder.
14. Preserve:
REVIEW & CONFIRM →
15. Preserve Policy Reference:
PR-4.2 · Physical Risk & Imitation
Content involving conduct with substantial physical-harm potential may require enforcement. Staged, professional, educational or cultural context may alter the applicable treatment.
View full policy →
Again:
THIS IS A TEXT-ONLY REVISION.
Do not reorganize the desktop.
Do not compress information into badges.
Do not merge fields into one horizontal row.
Do not modify layout geometry.
Do not redesign anything.
```

**What came back:** The text-only revision failed with Stitch’s unexpected-generation error before I got a usable result.

**What I changed next and why:** I resent the same text-only prompt because I still wanted the correction without changing any geometry.

---

### Stitch 12 — Screen 2 text-only surgical revision — retry

#### Prompt

```text
SCREEN 2 — TEXT-ONLY SURGICAL REVISION
Preserve the CURRENT desktop and mobile Screen 2 layouts EXACTLY.
CRITICAL:
Do not move, resize, restructure, merge, compress, reorder or redesign ANY component.
Do not alter:
- two-column desktop proportions
- video size
- right-column panel sizes
- vertical spacing
- Final Action layout
- Decision Basis position
- Moderator Note position
- Review & Confirm position
- mobile layout
- colors
- typography sizes
- card dimensions
Make ONLY the following wording/content corrections.
1. Remove:
“TIER 1 ADJUDICATION”
2. Remove:
“VERIFIED CREATOR”
3. Remove:
“SYSTEM ASSESSMENT”
4. Replace:
“POLICY FLAGGED”
with:
“Policy”
5. Replace:
“MODEL CONFIDENCE”
with:
“Confidence”
6. System information must read:
Policy
Physical Risk & Imitation
Recommended action
Remove Content
Confidence
86%
Detected signals
• Blade-like objects
• Repeated striking motion
• Close-range physical interaction
IMPORTANT:
Recommended action must remain a normal information field.
Do NOT convert “Remove Content” into a badge, pill or chip.
7. Replace technical video metadata with exactly:
00:14 · English · Singapore
Remove:
720×1280
H.264
resolution
codec information
8. Keep:
Queue source
AI Detected
Queue age
3m
Priority
Top
9. Remove:
“Human adjudicator override active”
10. Remove:
“Select 1 resolution”
11. Final Action options remain exactly:
NO ACTION
Content remains available
REMOVE CONTENT
Remove from platform
AGE-GATE 18+
Restrict to adult viewers
RESTRICT RECOMMENDATION
Limit from recommendation surfaces
ADD VIEWER WARNING
Apply contextual viewing notice
ESCALATE REVIEW
Send for specialist review
12. Keep Decision Basis exactly where it currently is.
Label:
Decision basis
Dropdown:
Select decision basis ▾
13. Remove:
“Optional audit record”
Use only:
Moderator note
Keep the text area empty with no placeholder.
14. Preserve:
REVIEW & CONFIRM →
15. Preserve Policy Reference:
PR-4.2 · Physical Risk & Imitation
Content involving conduct with substantial physical-harm potential may require enforcement. Staged, professional, educational or cultural context may alter the applicable treatment.
View full policy →
Again:
THIS IS A TEXT-ONLY REVISION.
Do not reorganize the desktop.
Do not compress information into badges.
Do not merge fields into one horizontal row.
Do not modify layout geometry.
Do not redesign anything.
```

**What came back:** The retry worked: the remaining tier/verification/system-assessment wording and technical video fields were removed, while the layout stayed in place.

**What I changed next and why:** I moved next to the mobile header because TING TING and SAFETY REVIEW were overlapping and an extra ACTIVE CASE QUEUE label was still there.

---

### Stitch 13 — Mobile Screen 2 — header repair only

#### Prompt

```text
MOBILE SCREEN 2 — HEADER REPAIR ONLY
Modify ONLY the MOBILE Case Review Workspace.
Do NOT modify desktop.
Do NOT modify the video.
Do NOT modify case content.
Do NOT modify the review workflow below the header.
The current mobile header is broken because the Ting Ting wordmark and SAFETY REVIEW overlap.
There is also an invented label:
ACTIVE CASE QUEUE
Remove it completely.
Rebuild ONLY the mobile header as a clean two-level responsive header.
FIRST ROW:
LEFT:
hamburger icon
original Ting Ting symbol
TING TING
RIGHT:
small circular Maya Tan profile image
Do not show Maya Tan’s full name or role in the mobile header because space is limited.
SECOND ROW:
SAFETY REVIEW
Center SAFETY REVIEW horizontally across the full mobile viewport.
Use the same modern sans-serif typography and approved Ting Ting visual identity as Screen 1.
The title must not overlap the logo or profile.
Use comfortable vertical spacing.
Target viewport:
390–430px wide.
HEADER VISUAL SYSTEM:
background:
white / very pale warm ivory
logo and text:
deep espresso / brown
no cyan
no blue
no dark navigation bar
The header should feel premium, minimal and calm.
Immediately BELOW the header, preserve the case-navigation area:
← Back to Queue
PENDING REVIEW
TT-SG-260905-018427
Use restrained red for PENDING REVIEW.
Do NOT add:
ACTIVE CASE QUEUE
case tier
adjudication level
search field
navigation tabs
notification icons
settings
extra text
Ensure:
- no overlap
- no clipped text
- no horizontal overflow
- hamburger remains easy to tap
- avatar remains easy to tap
- SAFETY REVIEW is genuinely centered
IMPORTANT:
Do not alter anything below the mobile case-navigation area.
Repair the mobile header only.
```

**What came back:** The mobile header stopped overlapping, ACTIVE CASE QUEUE was removed, and the rest of the mobile review workspace stayed unchanged.

**What I changed next and why:** I then fixed desktop Screen 2 because its right-side workflow was still missing Decision Basis, Moderator Note and Review & Confirm.

---

### Stitch 14 — Desktop Screen 2 only — repair current workspace

#### Prompt

```text
DESKTOP SCREEN 2 ONLY — REPAIR CURRENT WORKSPACE
IMPORTANT:
Modify ONLY the currently selected DESKTOP Case Review Workspace.
DO NOT MODIFY THE MOBILE VERSION.
The current mobile Screen 2 is approved and must remain exactly as it is.
Do not redesign the desktop from scratch.
Preserve:
- header
- case navigation
- video size and position
- creator/caption area
- metadata area
- overall two-column layout
- Policy Reference panel
- Final Action six-option grid
- Ting Ting colors
- typography system
- warm ivory / white / beige design language
The desktop has one structural problem:
the right-side review workflow currently ends after Final Action and is missing the remaining decision controls.
Repair it precisely as follows.
==================================================
1. RIGHT COLUMN INFORMATION PANEL
==================================================
Keep the current upper-right information panel, but improve its hierarchy.
Do NOT compress Policy, Confidence and Recommended Action into one crowded horizontal strip.
Display them as professional information fields with breathing room:
Policy
Physical Risk & Imitation
Recommended action
Remove Content
Confidence
86%
Detected signals
• Blade-like objects
• Repeated striking motion
• Close-range physical interaction
Recommended action is SUPPORTING INFORMATION.
Do NOT turn “Remove Content” into:
- a badge
- pill
- alert chip
- warning banner
It should appear as normal information text with a restrained red accent if desired.
Keep the panel compact but readable.
==================================================
2. POLICY REFERENCE
==================================================
Preserve the existing Policy Reference panel.
Use exactly:
PR-4.2 · Physical Risk & Imitation
Content involving conduct with substantial physical-harm potential may require enforcement. Staged, professional, educational or cultural context may alter the applicable treatment.
View full policy →
Do not redesign this panel.
==================================================
3. FINAL ACTION
==================================================
Preserve the current Final Action section and its six-option grid.
Keep exactly:
NO ACTION
Content remains available
REMOVE CONTENT
Remove from platform
AGE-GATE 18+
Restrict to adult viewers
RESTRICT RECOMMENDATION
Limit from recommendation surfaces
ADD VIEWER WARNING
Apply contextual viewing notice
ESCALATE REVIEW
Send for specialist review
Do not preselect any action.
==================================================
4. RESTORE DECISION BASIS — DESKTOP
==================================================
Directly BELOW Final Action, add:
Decision basis
Then a full-width dropdown control:
Select decision basis                                      ▾
This dropdown must visually match the approved Ting Ting form controls.
Do not show all options until opened.
The dropdown will later contain:
Physical Risk & Imitation
Regulated Goods & Services
Hate Speech & Hateful Behavior
Harassment & Bullying
Shocking & Graphic Content
Body Exposure & Sexualized Behaviors
Integrity & Authenticity
Suicide & Self-Harm
Staged / fictional context
Educational context
Professional activity
Cultural / ceremonial context
Public-interest context
Policy threshold not met
Insufficient evidence
Viewer protection without removal
Specialist review required
Initial state:
no selection.
==================================================
5. RESTORE MODERATOR NOTE — DESKTOP
==================================================
Immediately below Decision Basis add:
Moderator note
Then a clean full-width text area.
The text area should be approximately 2–4 lines high.
IMPORTANT:
No placeholder text.
Do NOT write:
- Optional
- Optional audit record
- Enter note
- Type here
- Case note
Only:
Moderator note
The field should appear commonly used but not mandatory.
==================================================
6. RESTORE PRIMARY ACTION — DESKTOP
==================================================
Below Moderator Note, aligned toward the lower right of the decision workspace, add the primary action:
REVIEW & CONFIRM →
Use the approved deep espresso / brown filled button.
It must:
- have a right arrow
- be clearly actionable
- have sufficient padding
- match the Ting Ting visual system
Do not create the confirmation modal yet.
==================================================
7. RIGHT COLUMN VERTICAL FLOW
==================================================
The desktop right column should now flow naturally as:
SYSTEM INFORMATION
↓
POLICY REFERENCE
↓
FINAL ACTION
↓
DECISION BASIS
↓
MODERATOR NOTE
↓
REVIEW & CONFIRM →
There should NOT be a large empty blank area underneath Final Action.
The right column should feel like one complete moderation workflow.
==================================================
8. LEFT COLUMN
==================================================
DO NOT CHANGE the left column.
Preserve:
- video player
- @reelcraft.sg
- caption
- 00:14 · English · Singapore
- Queue source: AI Detected
- Queue age: 3m
- Priority: Top
Do not resize or reposition the video.
==================================================
9. DESKTOP CASE NAVIGATION
==================================================
Preserve:
← Back to Queue
TT-SG-260905-018427
PENDING REVIEW
Previous
Next Case →
Do not add any new workflow terminology.
==================================================
10. STRICTLY DO NOT CHANGE
==================================================
Do NOT modify:
- Mobile Screen 2
- Screen 1
- Ting Ting colors
- logo
- header structure
- video
- Final Action grid structure
- Policy Reference styling
- case data
Do NOT add:
- dashboards
- metrics
- analytics
- audit information
- model tools
- case tiers
- extra navigation
- new fields
==================================================
11. FINAL CHECK
==================================================
Before finalizing confirm:
1. Mobile was not touched.
2. Desktop remains two-column.
3. Video remains unchanged.
4. Upper-right system information is readable and not compressed into badges.
5. Final Action remains six options.
6. Decision Basis exists below Final Action.
7. Moderator Note exists below Decision Basis.
8. Review & Confirm → exists below Moderator Note.
9. No large empty area remains under Final Action.
10. No new features were invented.
Repair ONLY the selected desktop Screen 2.
```

**What came back:** Desktop Screen 2 now had the full decision flow in the right order: Final Action, Decision Basis, Moderator Note and Review & Confirm. The mobile version was left alone.

**What I changed next and why:** I made one last desktop-only spacing adjustment because there was too much empty ivory space below the main button.

---

### Stitch 15 — Desktop Screen 2 bottom-space trim

#### Prompt

```text
Desktop Screen 2 only: preserve every component, layout, size, color and position exactly. Reduce the overall desktop frame/page height so the screen ends approximately 40px below the Review & Confirm button. Remove the large unused empty ivory area beneath the workspace. Do not add content, footer, panels or features to fill the space. Do not modify mobile.
```

**What came back:** The excessive blank space was removed and the desktop page ended much closer to Review & Confirm without adding any new content.

**What I changed next and why:** With the review workspace settled, I moved to the confirmation step that sits between the moderator’s decision and recording the action.

---

### Stitch 16 — Confirmation Modal over Screen 2

#### Prompt

```text
ROLE
Act as a Principal Product Designer, Trust & Safety Product Designer, Interaction Designer and Responsive UX Lead.
You are extending the existing fictional product:
TING TING — SAFETY REVIEW
The approved Screen 2 — Case Review Workspace already exists.
This task is to design the CONFIRMATION MODAL that appears when the Content Safety Moderator clicks:
REVIEW & CONFIRM →
This is NOT a new routed page.
It is a modal overlay on top of Screen 2.
Preserve the approved Ting Ting visual identity exactly:
- warm ivory page
- white primary surfaces
- richer beige / sand secondary surfaces
- espresso / dark brown typography
- refined brown accents
- restrained red for Pending
- restrained green for successful recorded actions
- contemporary sans-serif typography
- premium, spacious consumer-tech aesthetic
Do NOT redesign Screen 2.
============================================================
1. INTERACTION CONTEXT
============================================================
The moderator has already:
1. reviewed the video
2. reviewed the system recommendation
3. checked the policy reference
4. selected a Final Action
5. selected a Decision Basis
6. optionally entered a Moderator Note
7. clicked REVIEW & CONFIRM →
The confirmation modal is the final human checkpoint before the review decision is recorded.
The system must NOT immediately apply the action before confirmation.
============================================================
2. MODAL BEHAVIOR
============================================================
When REVIEW & CONFIRM → is clicked:
- keep Screen 2 visible underneath
- dim and softly blur the underlying Screen 2
- open one centered confirmation modal
- preserve the moderator’s current form state underneath
- do not navigate away
- do not reset any selection
The underlying workspace should remain recognizable but clearly inactive.
Use subtle background dimming and restrained blur.
Do NOT make the background completely black.
============================================================
3. DESKTOP MODAL
============================================================
Create a centered desktop modal.
It should feel:
- serious
- calm
- consequential
- premium
- professional
Do NOT make it look like:
- browser alert
- destructive warning dialog
- gaming confirmation box
- system error window
Use:
white or very light warm surface
subtle warm border
soft shadow
moderate rounded corners
generous padding
espresso typography
============================================================
4. MODAL HEADER
============================================================
Use:
CONFIRM REVIEW DECISION
This is preferable to “Confirm Enforcement Action” because the selected outcome may also be NO ACTION.
Below it show the Case ID:
TT-SG-260905-018427
Use the Case ID as small operational metadata.
Do not add:
- tier
- severity
- adjudication level
- system status
- AI terminology
============================================================
5. EXAMPLE STATE FOR DESIGN
============================================================
For the visual example, use the Human Moderator decision that best demonstrates context overriding the automated recommendation.
SYSTEM RECOMMENDATION FROM SCREEN 2:
Remove Content
HUMAN SELECTED FINAL ACTION:
NO ACTION
DECISION BASIS:
Staged / fictional context
MODERATOR NOTE:
Visible rehearsal setup and foam props indicate staged choreography.
IMPORTANT:
The modal must be designed dynamically so later it can display ANY of the six possible Final Actions and any Decision Basis selected by the moderator.
This example is only the visual state used for designing the modal.
============================================================
6. MODAL CONTENT STRUCTURE
============================================================
Show exactly:
Final action
NO ACTION
Decision basis
Staged / fictional context
Moderator note
Visible rehearsal setup and foam props indicate staged choreography.
Then a subtle divider.
Then the explanatory line:
This will complete the review and update the case status in the Review Queue.
Do NOT add:
- system confidence
- AI recommendation
- policy explanation
- detected signals
- queue age
- priority
- creator handle
- additional technical metadata
The confirmation modal should summarize ONLY the moderator’s final recorded decision.
============================================================
7. INFORMATION HIERARCHY
============================================================
FINAL ACTION should be the visually strongest value in the modal.
Example:
Final action
NO ACTION
Decision Basis should be clearly readable but secondary.
Moderator Note should be displayed as normal case-record text, not as an editable field inside the modal.
The modal is for confirmation, not editing.
If there is NO Moderator Note entered later:
completely hide the Moderator Note section.
Do NOT show:
Moderator note
None
No note
Empty
—
The modal should collapse naturally.
============================================================
8. ACTION BUTTONS
============================================================
Bottom of modal:
CANCEL
CONFIRM →
Use no brackets.
CANCEL:
secondary tonal button or text-style control
CONFIRM →:
primary filled espresso / brown Ting Ting action
The Confirm button must include a right arrow.
Do NOT use:
Yes
No
Submit
Save
Approve
Use exactly:
CANCEL
CONFIRM →
============================================================
9. CANCEL BEHAVIOR
============================================================
When CANCEL is clicked:
- close the modal
- return to Screen 2
- restore the exact state the moderator left
Preserve:
- selected Final Action
- selected Decision Basis
- Moderator Note
- video state if technically practical
Do NOT:
- reset fields
- clear note
- return to Screen 1
- change the case status
Cancel means:
return and reconsider.
============================================================
10. CONFIRM BEHAVIOR
============================================================
When CONFIRM → is clicked:
DO NOT immediately jump back to Screen 1.
First show a short processing state inside the SAME modal.
Approximate duration:
1 second
The confirmation modal content transitions into:
a clean circular loading indicator
RECORDING ACTION
Do NOT display:
- fake progress percentage
- loading bar
- technical messages
- API text
- database messages
Only:
circular loader
RECORDING ACTION
============================================================
11. SUCCESS STATE
============================================================
After approximately 1 second:
the loading indicator smoothly transforms into a restrained green success tick.
Show:
✓
ACTION RECORDED
Use Ting Ting’s restrained professional green.
Do not use:
- confetti
- celebration animation
- fireworks
- huge success effects
This is an internal operational action.
Show the success state briefly, approximately 0.5–0.8 seconds.
Then automatically transition back to Screen 1 — Review Queue.
No Continue button is required.
============================================================
12. RESULT AFTER CONFIRM
============================================================
The functional application will later update Screen 1.
For this example:
BEFORE
10 Pending
0 Completed
Case:
TT-SG-260905-018427
PENDING REVIEW
AFTER
9 Pending
1 Completed
Case:
TT-SG-260905-018427
NO ACTION
VIEW DECISION →
The recorded action should later appear in Screen 1 using the approved green completed-state treatment.
DO NOT redesign Screen 1 in this task.
This behavior is implementation context only.
============================================================
13. DYNAMIC FINAL ACTION SUPPORT
============================================================
The modal must visually support all six possible Final Actions:
NO ACTION
REMOVE CONTENT
AGE-GATE 18+
RESTRICT RECOMMENDATION
ADD VIEWER WARNING
ESCALATE REVIEW
Whatever the moderator selects on Screen 2 must appear under:
Final action
in the modal.
Do NOT hard-code the product to No Action.
No Action is only the current design example.
============================================================
14. DYNAMIC DECISION BASIS SUPPORT
============================================================
Whatever the moderator selects from Decision Basis must appear exactly under:
Decision basis
in the modal.
Example:
Staged / fictional context
But future cases may show:
Educational context
Professional activity
Cultural / ceremonial context
Policy threshold not met
Physical Risk & Imitation
etc.
The modal should be flexible enough for longer values without breaking layout.
============================================================
15. MOBILE MODAL
============================================================
Create a responsive mobile treatment for the SAME confirmation interaction.
Target:
390–430px phone width.
Do NOT create a different product.
On mobile:
keep Screen 2 visible and dimmed behind.
Use either:
- a large centered modal
OR
- a polished bottom-sheet modal
Choose the treatment that best matches the approved Ting Ting mobile design.
My preference:
a large bottom sheet / lower-screen modal with rounded top corners because it is easier to operate on a phone.
============================================================
16. MOBILE CONTENT
============================================================
Mobile confirmation should show:
CONFIRM REVIEW DECISION
TT-SG-260905-018427
Final action
NO ACTION
Decision basis
Staged / fictional context
Moderator note
Visible rehearsal setup and foam props indicate staged choreography.
This will complete the review and update the case status in the Review Queue.
CANCEL
CONFIRM →
Do not compress text excessively.
Use generous spacing and comfortable touch targets.
============================================================
17. MOBILE ACTIONS
============================================================
On mobile:
CANCEL
and
CONFIRM →
must both be easy to tap.
Prefer either:
two large side-by-side buttons
OR
stacked full-width buttons if available width is limited.
CONFIRM → must remain the primary action.
Do NOT place buttons too close to the bottom browser edge.
Respect safe-area spacing.
============================================================
18. MOBILE PROCESSING STATE
============================================================
After Confirm:
same modal / bottom sheet transitions to:
circular loader
RECORDING ACTION
Then:
green tick
ACTION RECORDED
Then automatically return to Screen 1.
Do NOT create separate mobile pages for these states.
They are transient states of the same modal.
============================================================
19. COLOR / STYLE
============================================================
Preserve the approved Ting Ting visual system.
Modal:
white / very pale warm surface
Background overlay:
soft warm dark transparency + restrained blur
Primary action:
deep espresso brown
Secondary action:
warm beige / neutral
Success:
restrained green
Text:
espresso / charcoal
No:
- blue
- cyan
- neon
- bright destructive red modal backgrounds
- dark hacker interface
============================================================
20. ACCESSIBILITY / USABILITY
============================================================
Ensure:
- strong contrast
- readable labels
- clear button hierarchy
- desktop keyboard-focus compatibility
- mobile touch targets
- no accidental dismissal from tiny controls
Optional:
a subtle X close icon may be used ONLY if it performs exactly the same function as CANCEL.
However, CANCEL is sufficient.
Do not clutter the modal.
============================================================
21. STRICTLY DO NOT ADD
============================================================
Do NOT add:
- policy text
- AI recommendation
- confidence
- detected signals
- severity
- audit information
- reviewer score
- case metrics
- creator profile
- comment box
- another editable note
- dropdowns
- checkboxes
- “I understand” checkbox
- confirmation reason
- second confirmation
- new navigation
- footer
- settings
The modal should remain concise.
============================================================
22. DESIGN EXAMPLE
============================================================
Desktop should broadly feel like:
Screen 2 dimmed / blurred behind
┌──────────────────────────────────────┐
│                                      │
│ CONFIRM REVIEW DECISION              │
│                                      │
│ TT-SG-260905-018427                  │
│                                      │
│ Final action                         │
│ NO ACTION                            │
│                                      │
│ Decision basis                       │
│ Staged / fictional context           │
│                                      │
│ Moderator note                       │
│ Visible rehearsal setup and foam     │
│ props indicate staged choreography.  │
│                                      │
│ ───────────────────────────────────  │
│                                      │
│ This will complete the review and    │
│ update the case status in the        │
│ Review Queue.                        │
│                                      │
│ CANCEL               CONFIRM →       │
│                                      │
└──────────────────────────────────────┘
Do not treat this ASCII drawing as literal styling.
Use the approved professional Ting Ting design language.
============================================================
23. FINAL QUALITY CHECK
============================================================
Before finalizing verify:
1. Underlying Screen 2 remains visible behind modal.
2. Screen 2 is dimmed / softly blurred.
3. Modal uses approved Ting Ting colors.
4. Title says CONFIRM REVIEW DECISION.
5. Case ID is shown.
6. Final Action is prominent.
7. Decision Basis is shown.
8. Moderator Note appears only when one exists.
9. Cancel returns to Screen 2 state.
10. Confirm has right arrow.
11. Confirm transitions to ~1-second loader.
12. Loader says RECORDING ACTION.
13. Loader transitions into green success tick.
14. Success says ACTION RECORDED.
15. It then returns to Screen 1 automatically.
16. Mobile uses the same interaction.
17. No new page/navigation/features are introduced.
18. This remains a modal state, not an independent product page.
============================================================
24. OUTPUT
============================================================
Create the Confirmation Modal interaction for the existing Screen 2.
Provide:
1. Desktop confirmation modal over the existing desktop Screen 2.
2. Mobile responsive confirmation modal over the existing mobile Screen 2.
You may visually demonstrate:
- confirmation state
- processing state
- success state
as interaction states of the SAME modal.
Do NOT modify Screen 1.
Do NOT redesign Screen 2.
Do NOT create additional product pages.
Begin.
```

**What came back:** Stitch gave me desktop and mobile confirmation states with Cancel, Confirm, a short RECORDING ACTION state, ACTION RECORDED, and a return to the queue.

**What I changed next and why:** I moved on to Policy Center so a moderator could open the relevant internal standard without leaving the review context.

---

### Stitch 17 — Policy Center Modal — initial design

#### Prompt

```text
ROLE
Act as a Principal Product Designer, Trust & Safety Policy Product Designer, Information Architect, Responsive UX Lead and Design Systems Lead.
You are extending the existing fictional product:
TING TING — SAFETY REVIEW
The approved Review Queue and Case Review Workspace already exist in this Stitch project.
Your task is to design the reusable:
POLICY CENTER MODAL
This is NOT a new routed page.
It is a large modal / overlay that can open from two places:
ENTRY A — SCREEN 1
Footer → Policy
ENTRY B — SCREEN 2
View full policy →
The SAME Policy Center component is used in both situations.
Preserve the approved Ting Ting design system exactly:
- warm ivory page background
- white primary surfaces
- richer warm beige / sand supporting surfaces
- deep espresso typography
- refined brown accents
- restrained red/green status colors
- contemporary premium sans-serif typography
- spacious consumer-tech visual language
Do NOT redesign Ting Ting.
============================================================
1. CORE PURPOSE
============================================================
The Policy Center is an INTERNAL operational policy reference for Content Safety Moderators.
It is NOT the public Community Guidelines.
The Policy Center helps moderators understand:
- the applicable policy
- purpose of the policy
- review considerations
- contextual factors
- possible moderation treatments
The interface should feel like an internal policy-reference system used by a mature global technology company.
It must NOT feel like:
- legal terms and conditions
- a public help center
- school notes
- a PDF reader
- a cybersecurity console
- a government portal
- a generic documentation website
============================================================
2. MODAL / OVERLAY BEHAVIOR
============================================================
When opened:
- keep the current underlying Ting Ting screen visible
- softly dim and blur the background
- open a large Policy Center overlay
- preserve the underlying case/form state
- do not navigate away
Use a clear X close icon in the upper-right.
Clicking X:
- closes Policy Center
- returns the user to the exact previous screen and state
- does not clear decisions or notes
Do NOT add Save, Done, Apply or Confirm buttons.
This is reference material only.
============================================================
3. TWO ENTRY STATES
============================================================
The same modal must visually support TWO starting states.
ENTRY FROM SCREEN 1 — FOOTER POLICY
Open the Policy Center at a general overview:
TING TING SAFETY STANDARDS
Policy Framework
2026.09
Status:
Active
The left Policy Index is visible.
The right content area initially shows a concise framework overview.
ENTRY FROM SCREEN 2 — VIEW FULL POLICY →
Automatically open the relevant policy for the current case.
For the current Case 01 example:
PR-4.2
Physical Risk & Imitation
The moderator should NOT need to search for the relevant policy manually.
For future cases, the modal should automatically focus the appropriate policy.
============================================================
4. DESKTOP MODAL SIZE
============================================================
Create a LARGE desktop modal.
It should occupy approximately:
80–88% of viewport width
and around:
75–85% of viewport height
Do NOT make this a tiny confirmation-style popup.
This is an information workspace.
Use:
- white primary modal surface
- subtle warm border
- soft shadow
- moderate rounded corners
- spacious internal padding
Background Screen 1 or Screen 2 should remain recognizable but inactive.
============================================================
5. DESKTOP LAYOUT
============================================================
Use a sophisticated TWO-COLUMN structure.
LEFT COLUMN:
approximately 27–32%
POLICY INDEX
RIGHT COLUMN:
approximately 68–73%
ACTIVE POLICY CONTENT
Use a vertical divider or tonal separation.
The layout should feel clean and editorial, not like a sidebar-heavy enterprise app.
============================================================
6. MODAL HEADER
============================================================
Top-left:
POLICY CENTER
Below:
Ting Ting Safety Standards
Small metadata:
Framework version 2026.09
Status: Active
Top-right:
X close icon
Do NOT add:
- settings
- search history
- audit
- policy metrics
- enforcement statistics
- policy owner names
- approval chains
============================================================
7. LEFT COLUMN — POLICY INDEX
============================================================
Heading:
POLICY INDEX
Include a restrained search field:
Search policy
This search is internal to the Policy Center only.
Then list exactly these policies:
PR-4.2
Physical Risk & Imitation
HC-2.1
Hate Speech & Hateful Behavior
HB-3.4
Harassment & Bullying
RG-5.1
Regulated Goods & Services
SG-6.3
Shocking & Graphic Content
SX-7.2
Body Exposure & Sexualized Behaviors
IA-8.1
Integrity & Authenticity
SH-9.2
Suicide & Self-Harm
These are fictional Ting Ting policy IDs.
Do NOT invent additional policies.
Use clean vertical navigation.
The active policy should use a restrained warm beige/brown selected treatment.
Do not use bright blue.
============================================================
8. GENERAL OVERVIEW STATE
============================================================
When opened from Screen 1 footer → Policy, the right area may initially show:
TING TING SAFETY STANDARDS
Policy Framework
2026.09
The Ting Ting Safety Standards provide internal operational guidance for consistent, contextual and proportionate moderation decisions.
Moderators should consider:
- policy threshold
- content context
- creator intent
- potential impact
- audience suitability
- educational, professional, cultural or public-interest context
Then:
ENFORCEMENT PRINCIPLES
Context before conclusion
A detected signal alone does not determine the final action.
Proportional response
Use the least restrictive action that appropriately addresses the policy concern.
Evidence-based judgment
Decisions should follow the content and available context rather than personal preference.
Consistency
Comparable cases should receive comparable treatment unless meaningful context differs.
Review uncertainty
When available information does not support a confident decision, additional review should be used rather than guessing.
Keep this overview concise and premium.
============================================================
9. ACTIVE POLICY EXAMPLE — PR-4.2
============================================================
When opened from Screen 2 Case 01, automatically select:
PR-4.2
Physical Risk & Imitation
Display:
PR-4.2
PHYSICAL RISK & IMITATION
Status:
Active
Last revised:
August 2026
PURPOSE
Reduce content that promotes, instructs or encourages conduct with substantial potential for physical harm while preserving legitimate professional, educational, artistic and cultural expression.
REVIEW CONSIDERATIONS
Moderators should consider:
- whether the activity is real or staged
- whether professional supervision is visible
- use of protective equipment
- whether viewers are encouraged to imitate the conduct
- age and context of participants
- cultural or ceremonial purpose
- educational or documentary purpose
- severity of potential harm
CONTEXTUAL CONSIDERATIONS
- Staged / fictional production
- Professional activity
- Cultural / ceremonial context
- Educational purpose
- Public-interest context
- Imitation or facilitation intent
POSSIBLE TREATMENTS
NO ACTION
Context does not meet the enforcement threshold.
REMOVE CONTENT
Content directly promotes, facilitates or instructs conduct with substantial physical-harm potential.
AGE-GATE 18+
Content may remain but is unsuitable for younger audiences.
RESTRICT RECOMMENDATION
Content remains accessible but should not receive broad recommendation.
ADD VIEWER WARNING
Content is permitted but benefits from additional viewer context.
ESCALATE REVIEW
Available information is insufficient or specialist interpretation is required.
============================================================
10. HC-2.1 — HATE SPEECH & HATEFUL BEHAVIOR
============================================================
PURPOSE
Protect individuals and communities from attacks or dehumanizing treatment based on protected characteristics while allowing education, counterspeech, reporting and legitimate discussion.
REVIEW CONSIDERATIONS
Determine whether offensive or hateful language is:
- directed at a target
- quoted rather than endorsed
- being condemned
- used for educational purposes
- part of counterspeech
- part of documentary or news material
- used in reclaimed community context
- intended to intimidate or dehumanize
POSSIBLE TREATMENTS
Clear targeted hateful attacks may require Remove Content.
Educational, counterspeech or contextualized use may result in No Action.
Ambiguous cases may require Escalate Review.
============================================================
11. HB-3.4 — HARASSMENT & BULLYING
============================================================
PURPOSE
Reduce targeted abuse, humiliation, intimidation and repeated hostile behavior directed at individuals.
REVIEW CONSIDERATIONS
Consider:
- whether a specific person is being targeted
- repeated versus isolated behavior
- severity of insults or threats
- power imbalance
- public-interest or criticism context
- satire or parody
- whether statements criticize conduct rather than attack identity
POSSIBLE TREATMENTS
No Action
Remove Content
Restrict Recommendation
Escalate Review
depending on severity and context.
============================================================
12. RG-5.1 — REGULATED GOODS & SERVICES
============================================================
PURPOSE
Limit content that facilitates inappropriate promotion, sale or access to regulated products and services.
REVIEW CONSIDERATIONS
Look for:
- direct commercial promotion
- coded or indirect solicitation
- payment instructions
- contact details directing users off-platform
- age restrictions
- educational or news context
- discussion versus facilitation
Examples may include:
- gambling services
- restricted financial schemes
- controlled commercial products
- other regulated services
Clear facilitation or commercial promotion may require Remove Content.
Discussion without facilitation may receive a different proportional treatment.
============================================================
13. SG-6.3 — SHOCKING & GRAPHIC CONTENT
============================================================
PURPOSE
Reduce unwanted exposure to highly distressing visual material while allowing appropriate documentary, educational, medical, sports and public-interest content.
REVIEW CONSIDERATIONS
Assess:
- level of visible injury
- presence of blood or bodily harm
- whether imagery is real or simulated
- educational or medical purpose
- news or public-interest context
- professional sports context
- whether presentation is primarily intended to shock
POSSIBLE TREATMENTS
Remove Content
Age-Gate 18+
Restrict Recommendation
Add Viewer Warning
No Action
based on severity and context.
============================================================
14. SX-7.2 — BODY EXPOSURE & SEXUALIZED BEHAVIORS
============================================================
PURPOSE
Maintain age-appropriate access to content involving body exposure or sexualized presentation.
REVIEW CONSIDERATIONS
Assess:
- degree of exposure
- sexualized intent
- age of participants
- sport or dance context
- health or educational purpose
- cultural context
- setting and presentation
- whether adult-only treatment is sufficient
POSSIBLE TREATMENTS
No Action
Age-Gate 18+
Restrict Recommendation
Remove Content
Escalate Review
============================================================
15. IA-8.1 — INTEGRITY & AUTHENTICITY
============================================================
PURPOSE
Reduce misleading or deceptive content capable of causing meaningful harm while preserving opinion, satire and ordinary disagreement.
REVIEW CONSIDERATIONS
Determine:
- whether a factual claim is being presented
- likely severity of harm
- availability of supporting evidence
- satire or parody context
- whether specialist expertise is required
- whether misleading presentation appears deliberate
POSSIBLE TREATMENTS
No Action
Add Viewer Warning
Restrict Recommendation
Remove Content
Escalate Review
============================================================
16. SH-9.2 — SUICIDE & SELF-HARM
============================================================
PURPOSE
Reduce promotion, instruction or encouragement of self-harm while allowing responsible recovery, prevention and support-focused discussion.
REVIEW CONSIDERATIONS
Assess:
- promotion or encouragement
- instructions or methods
- immediacy of risk
- graphic imagery
- recovery or support context
- prevention or education purpose
- whether specialist review is warranted
POSSIBLE TREATMENTS
No Action
Add Viewer Warning
Age-Gate 18+
Remove Content
Escalate Review
depending on severity and context.
============================================================
17. POLICY CONTENT DESIGN
============================================================
Do NOT display every section as giant boxes.
Use strong editorial hierarchy:
Policy ID
Policy Title
Metadata
Purpose
Review Considerations
Contextual Considerations
Possible Treatments
Use:
- clean headings
- comfortable paragraph width
- subtle bullets
- generous line-height
- warm beige callout surfaces only where useful
Do not make it look like lecture notes.
============================================================
18. SCROLLING
============================================================
The modal may scroll internally.
Desktop:
Left Policy Index may remain sticky.
Right policy content scrolls independently or within the main modal body.
Keep the modal header visible if practical.
Do NOT allow the entire underlying page to scroll while the modal is open.
============================================================
19. MOBILE VERSION
============================================================
Create a responsive Policy Center for approximately 390–430px phone width.
Do NOT force the desktop two-column layout onto mobile.
Use:
POLICY CENTER
Ting Ting Safety Standards
X close icon
Then:
Select policy                    ▾
The Policy Index becomes a dropdown / selector.
For Case 01 entered from Screen 2:
automatically select:
PR-4.2 · Physical Risk & Imitation
Then display the policy vertically:
PR-4.2
Physical Risk & Imitation
Status: Active
Purpose
Review Considerations
Contextual Considerations
Possible Treatments
The content scrolls vertically.
============================================================
20. MOBILE GENERAL ENTRY
============================================================
If opened from Screen 1 footer:
The selector may initially show:
Policy Framework Overview
Then display the general Ting Ting Safety Standards overview.
The moderator may select another policy from the dropdown.
============================================================
21. MOBILE CLOSE BEHAVIOR
============================================================
Use a clear X at the upper-right.
Closing must return to the exact previous Screen 1 or Screen 2 location.
Do NOT create:
- Back to Settings
- navigation tabs
- bottom navigation
- Save button
- Confirm button
============================================================
22. VISUAL DIFFERENCE BETWEEN POLICY AND COMMUNITY GUIDELINES
============================================================
This Policy Center is INTERNAL.
It should feel:
structured
operational
precise
professional
Community Guidelines will later be more public-facing and editorial.
Do NOT design Community Guidelines in this task.
============================================================
23. DO NOT ADD
============================================================
Do NOT add:
- policy analytics
- accuracy percentages
- moderator performance
- audit history
- policy approvals
- employee names
- version comparison
- change logs
- policy comments
- collaboration tools
- download PDF
- print
- bookmarks
- favorites
- legal disclaimers
- real company references
- external links
- TikTok branding
Keep scope focused.
============================================================
24. FINAL QUALITY CHECK
============================================================
Before finalizing verify:
1. Policy Center is a modal/overlay, not a new routed page.
2. Underlying Ting Ting screen remains dimmed behind it.
3. X closes back to exact previous state.
4. Desktop uses Policy Index + active content.
5. Mobile uses policy selector + single-column content.
6. Same modal supports Screen 1 and Screen 2 entry.
7. Screen 2 entry automatically opens the relevant policy.
8. Screen 1 entry opens Policy Framework Overview.
9. Exact eight policy categories are used.
10. PR-4.2 content is fully represented.
11. No additional product features are invented.
12. Visual design matches approved Ting Ting Screen 1 and Screen 2.
13. No dark/cyan theme returns.
14. Mobile remains readable at 390–430px.
15. This does not become a public Community Guidelines page.
============================================================
25. OUTPUT
============================================================
Create ONLY the reusable:
POLICY CENTER MODAL
Provide:
1. Desktop Policy Center overlay
2. Mobile Policy Center overlay
For the visual example, show the Screen 2 entry state focused on:
PR-4.2 · Physical Risk & Imitation
Do NOT modify Screen 1.
Do NOT redesign Screen 2.
Do NOT create About.
Do NOT create Community Guidelines.
Begin.
```

**What came back:** The Policy Center structure was useful, but it also added things I did not want, including an invented policy summary, a mobile “Back to Case Adjudication” button and repeated mobile policy metadata.

**What I changed next and why:** I kept the modal structure and used a cleanup prompt to remove only those invented or redundant parts.

---

### Stitch 18 — Policy Center — surgical cleanup only

#### Prompt

```text
POLICY CENTER — SURGICAL CLEANUP ONLY
Preserve the CURRENT Policy Center desktop and mobile layouts exactly.
Do NOT redesign:
- modal dimensions
- desktop two-column structure
- Policy Index
- mobile policy selector
- colors
- typography system
- background blur
- X close control
- current spacing architecture
Make ONLY the corrections below.
1. DESKTOP — REMOVE INVENTED SUMMARY
Under:
Physical Risk & Imitation
remove the invented descriptive sentence:
“Platform safety enforcement rules concerning bodily harm, dangerous stunts, weapon imitation, and physical safety hazards.”
Do not replace it with another invented summary.
The policy content should proceed cleanly into the approved policy sections.
The prohibited word “dangerous” must not appear anywhere in the Ting Ting interface.
2. MOBILE — REMOVE BOTTOM BUTTON
Delete completely:
Back to Case Adjudication
Do not replace it with another button.
The X close icon in the upper-right is the ONLY control required to close the Policy Center.
Closing with X later returns the user to their exact previous Screen 1 or Screen 2 state.
Do not use the word:
Adjudication
anywhere.
3. MOBILE — CLEAN POLICY METADATA
Remove duplicated policy identifiers.
Do not show:
PR-4.2
PR-4.2 · Rev. Aug 2026
as separate redundant lines.
Use clean hierarchy:
PR-4.2
Physical Risk & Imitation
Status: Active · Last revised: August 2026
Do not use an “Active Policy” badge.
4. COMPLETE POLICY CONTENT
Ensure the active policy remains vertically scrollable and contains:
PURPOSE
REVIEW CONSIDERATIONS
CONTEXTUAL CONSIDERATIONS
POSSIBLE TREATMENTS
Do not remove content simply because it appears below the initial viewport.
5. STRICT PRESERVATION
Do not modify:
- desktop Policy Index
- policy search
- eight approved policy categories
- PR-4.2 Purpose wording
- Review Considerations
- Contextual Considerations
- Possible Treatments
- mobile policy dropdown
- X close button
- colors or brand styling
Do not add any new features.
This is a text/content cleanup only.
```

**What came back:** The unwanted summary, adjudication button and duplicate metadata were removed, but the mobile policy content still needed a cleaner hierarchy and the full sections in the right order.

**What I changed next and why:** I made the next prompt mobile-only and restored the sequence Purpose → Review Considerations → Contextual Considerations → Possible Treatments.

---

### Stitch 19 — Policy Center — mobile content repair only

#### Prompt

```text
POLICY CENTER — MOBILE CONTENT REPAIR ONLY
Modify ONLY the mobile Policy Center.
Do NOT modify desktop.
Preserve:
- current modal size
- current colors
- current policy dropdown
- X close icon
- typography
- scrolling behavior
- overall visual style
Fix ONLY the mobile content hierarchy.
1. REMOVE THE DUPLICATED POLICY HEADER
The mobile screen currently repeats:
PR-4.2
Physical Risk & Imitation
Status: Active · Last revised: August 2026
twice.
Show this block ONLY ONCE.
2. RESTORE PURPOSE
Immediately after the single policy header, show:
PURPOSE
Reduce content that promotes, instructs or encourages conduct with substantial potential for physical harm while preserving legitimate professional, educational, artistic and cultural expression.
3. KEEP REVIEW CONSIDERATIONS NEXT
Show:
REVIEW CONSIDERATIONS
• Whether the activity is real or staged
• Whether professional supervision is visible
• Use of protective equipment
• Whether viewers are encouraged to imitate the conduct
• Age and context of participants
• Cultural or ceremonial purpose
• Educational or documentary purpose
• Severity of potential harm
4. SHOW CONTEXTUAL CONSIDERATIONS AFTER REVIEW CONSIDERATIONS
Show:
CONTEXTUAL CONSIDERATIONS
• Staged / fictional production
• Professional activity
• Cultural / ceremonial context
• Educational purpose
• Public-interest context
• Imitation or facilitation intent
Do not hide this section.
5. SHOW POSSIBLE TREATMENTS AFTER CONTEXTUAL CONSIDERATIONS
Show:
POSSIBLE TREATMENTS
NO ACTION
Context does not meet the enforcement threshold.
REMOVE CONTENT
Content directly promotes, facilitates or instructs conduct with substantial physical-harm potential.
AGE-GATE 18+
Content may remain but is unsuitable for younger audiences.
RESTRICT RECOMMENDATION
Content remains accessible but should not receive broad recommendation.
ADD VIEWER WARNING
Content is permitted but benefits from additional viewer context.
ESCALATE REVIEW
Available information is insufficient or specialist interpretation is required.
6. SCROLLING
The mobile Policy Center should scroll vertically inside the modal so all sections can be reached naturally.
Do not shrink typography to force all content into one viewport.
Do not remove sections because they extend below the fold.
7. STRICT PRESERVATION
Do NOT:
- modify desktop
- add new buttons
- add Back to Case Adjudication
- change the dropdown
- change colors
- change modal dimensions
- create a new page
This is a mobile content-order correction only.
```

**What came back:** The mobile Policy Center then showed one clean policy header followed by the full Purpose, Review Considerations, Contextual Considerations and Possible Treatments content with vertical scrolling.

**What I changed next and why:** I accepted the Policy Center design and moved to the About experience.

---

### Stitch 20 — About Ting Ting Modal — initial design

#### Prompt

```text
ROLE
Act as a Principal Brand Product Designer, Corporate Digital Experience Designer,
Information Architect and Responsive UX Lead.
You are extending the existing fictional short-video technology company:
TING TING
The approved Screen 1 — Review Queue already exists.
Your task is to design the reusable:
ABOUT TING TING MODAL
This opens ONLY from:
SCREEN 1 FOOTER → About
This is NOT a routed page.
It is a large informational modal / overlay displayed above the existing Review Queue.
Preserve the approved Ting Ting design system exactly:
- warm ivory main background
- white primary surfaces
- richer warm beige / sand supporting surfaces
- deep espresso typography
- restrained brown brand accents
- contemporary premium sans-serif typography
- spacious global consumer-tech aesthetic
- current Ting Ting logo / wordmark language
Do NOT redesign Ting Ting.
============================================================
1. PURPOSE
============================================================
The About modal explains:
- what Ting Ting is
- what the platform stands for
- how Ting Ting approaches safety
- what Safety Review does
- Ting Ting’s operating principles
- Ting Ting’s global presence
This is a COMPANY / BRAND information experience.
It is NOT:
- a Trust & Safety dashboard
- a policy manual
- Community Guidelines
- Terms & Conditions
- a corporate annual report
- a legal page
- a careers page
It should feel like the polished About experience of a major global consumer-technology company.
============================================================
2. MODAL BEHAVIOR
============================================================
When the user clicks:
About
from the Screen 1 footer:
- keep Screen 1 visible underneath
- softly dim and blur Screen 1
- open one large About Ting Ting overlay
- do not navigate away
- preserve Screen 1 scroll position and state
Use a clear X close icon in the upper-right.
Clicking X:
- closes the modal
- returns to the exact previous Screen 1 position
No Save.
No Confirm.
No Back button.
No additional navigation.
============================================================
3. DESKTOP MODAL SIZE
============================================================
Use a large premium desktop modal.
Approximate scale:
80–88% of viewport width
75–85% of viewport height
The modal may scroll internally if necessary.
Use:
- white primary surface
- subtle warm border
- soft premium shadow
- moderate rounded corners
- generous spacing
- editorial layout
Do NOT make it resemble a small alert box.
============================================================
4. HEADER
============================================================
Top-left:
ABOUT TING TING
Below or nearby, use the Ting Ting symbol / wordmark subtly.
Top-right:
X close icon
Do NOT add:
- Share
- Download
- Contact Us button
- Careers
- Investor Relations
- Settings
============================================================
5. HERO SECTION
============================================================
Create a strong but restrained brand hero.
Use:
TING TING
Short video.
Global expression.
Responsible discovery.
Then supporting copy:
Ting Ting is a global short-form video platform built for creativity,
entertainment, learning and cultural expression.
People use Ting Ting to discover ideas, share moments, participate in
communities and connect through short-form video.
Our platform is designed around two principles that need to work together:
creative freedom and responsible participation.
The hero may include:
- an abstract original Ting Ting brand visual
- elegant geometric motion / echo shapes
- subtle photography featuring diverse Asian/APAC creators or employees
Do NOT use TikTok imagery or logos.
Do NOT make the hero look like an advertisement.
============================================================
6. SECTION — OUR APPROACH TO SAFETY
============================================================
Heading:
OUR APPROACH TO SAFETY
Use this exact content:
Ting Ting uses a combination of automated systems and human review to help
apply its Safety Standards consistently across the platform.
Automated systems help identify content that may require review at scale.
Human moderators provide contextual judgment where a final enforcement
decision requires interpretation of the content, its purpose and the
applicable policy.
The goal is not to remove every piece of sensitive content.
The goal is to apply the appropriate treatment for the context.
Then show the six possible moderation treatments in a refined informational
presentation:
No Action
Remove Content
Age-Gate 18+
Restrict Recommendation
Add Viewer Warning
Escalate Review
IMPORTANT:
These are informational here.
Do NOT make them interactive buttons.
Do NOT use the same strong control styling as Screen 2 Final Action.
============================================================
7. SECTION — OUR PRINCIPLES
============================================================
Heading:
OUR PRINCIPLES
Create six clean principle blocks/cards.
Do NOT make them oversized.
Use exact content:
SAFETY
Reduce meaningful harm while preserving legitimate creative and informational
expression.
CONTEXT
Consider the circumstances, intent and presentation of content before making
consequential enforcement decisions.
CONSISTENCY
Apply the same standards reliably across creators, content types and regions.
PROPORTIONALITY
Use the level of enforcement appropriate to the severity and context of the
content.
TRANSPARENCY
Maintain clear standards and traceable moderation decisions.
HUMAN ACCOUNTABILITY
Keep meaningful human judgment in moderation cases where context or policy
interpretation matters.
Use warm beige / white tonal variation.
Avoid bright icons or gaming-style visual language.
============================================================
8. SECTION — SAFETY REVIEW
============================================================
Heading:
SAFETY REVIEW
Use:
Ting Ting Safety Review is the internal moderation environment used to manage
content routed for human assessment.
Moderators review the content, relevant system signals and applicable policy
guidance before recording the final action.
Each completed review creates a clear case record containing:
- Final Action
- Decision Basis
- Moderator Note when provided
- Review Status
This section should visually connect the company story to the product the user
is currently using.
Do NOT turn this into another workflow screen.
============================================================
9. SECTION — GLOBAL OPERATIONS
============================================================
Heading:
GLOBAL OPERATIONS
Use:
Ting Ting operates through regional teams supporting users across major
markets.
Headquarters:
Singapore
Then show the approved ten global offices:
ASIA PACIFIC
Singapore — Headquarters
Tokyo
Seoul
Sydney
EUROPE
London
Berlin
AMERICAS / MIDDLE EAST
New York
Toronto
São Paulo
Dubai
Use an elegant global-company presentation.
Possible design:
three regional columns
or
a restrained abstract world-map / network graphic
but do NOT create a huge interactive map.
Do NOT invent additional locations.
============================================================
10. CLOSING BRAND LINE
============================================================
At the bottom of the About content, show:
Ting Ting Technologies
Building a platform where creativity can scale responsibly.
Use a restrained brand treatment.
Do NOT add:
- Privacy
- Terms
- Careers
- legal disclaimers
- social links
============================================================
11. DESKTOP VISUAL HIERARCHY
============================================================
The modal should broadly flow:
ABOUT TING TING
↓
BRAND HERO
Ting Ting
Short video. Global expression. Responsible discovery.
↓
OUR APPROACH TO SAFETY
↓
OUR PRINCIPLES
↓
SAFETY REVIEW
↓
GLOBAL OPERATIONS
↓
Closing brand line
Use strong editorial hierarchy and generous spacing.
Do NOT make every section a large bordered box.
Use cards only where they improve readability.
============================================================
12. VISUAL CHARACTER
============================================================
This modal should feel slightly more expressive than the Policy Center.
Policy Center:
precise, operational, structured
About Ting Ting:
brand-led, human, global, editorial
Still preserve the same Ting Ting palette.
Use:
- warm ivory
- white
- sand / beige
- espresso
- brown
- subtle photographic or abstract brand imagery
No blue/cyan.
No neon.
No cyberpunk.
No gaming aesthetic.
============================================================
13. MOBILE VERSION
============================================================
Create a responsive About modal for approximately 390–430px phone width.
Do NOT force a desktop multi-column layout onto mobile.
Use a vertically scrolling full-height or near-full-height modal.
Header:
ABOUT TING TING
X
Then stack:
TING TING brand hero
↓
Who we are
↓
Our Approach to Safety
↓
Our Principles
↓
Safety Review
↓
Global Operations
↓
Closing brand line
============================================================
14. MOBILE HERO
============================================================
Keep:
TING TING
Short video.
Global expression.
Responsible discovery.
Then concise company introduction.
Any brand visual should remain responsive and not crowd the text.
============================================================
15. MOBILE PRINCIPLES
============================================================
Stack the six principles vertically.
Each should remain readable without tiny type.
Use compact warm tonal cards or clear separators.
Do not create a horizontally scrolling card carousel.
============================================================
16. MOBILE GLOBAL OPERATIONS
============================================================
Use vertically grouped regional lists:
ASIA PACIFIC
Singapore — Headquarters
Tokyo
Seoul
Sydney
EUROPE
London
Berlin
AMERICAS / MIDDLE EAST
New York
Toronto
São Paulo
Dubai
Do not squeeze all regions side by side.
============================================================
17. MOBILE CLOSE BEHAVIOR
============================================================
Use only the X close icon.
No:
Back to Review Queue button
Done
Continue
Confirm
Closing returns to Screen 1 at the exact previous scroll position.
============================================================
18. CONTENT ACCURACY
============================================================
Everything in this modal is fictional Ting Ting company information.
Do NOT mention:
- TikTok
- ByteDance
- Meta
- Instagram
- YouTube
- any real technology company
Do NOT add:
- fake employee counts
- revenue
- market share
- founding year
- CEO
- investors
- real office addresses
- real statistics
============================================================
19. DO NOT ADD FEATURES
============================================================
Do NOT add:
- careers
- investors
- press room
- leadership team
- company history timeline
- awards
- news
- employee directory
- ESG
- legal pages
- settings
- interactive office map
- additional footer
- contact form
Keep this About experience focused.
============================================================
20. FINAL QUALITY CHECK
============================================================
Before finalizing verify:
1. About opens as a modal over Screen 1.
2. Screen 1 remains dimmed/blurred behind it.
3. X closes back to exact Screen 1 position.
4. Visual style matches approved Ting Ting.
5. Hero contains Ting Ting brand identity and tagline.
6. Company description is present.
7. Our Approach to Safety is present.
8. All six moderation treatments are mentioned informationally.
9. All six Principles are present.
10. Safety Review section is present.
11. Exactly ten approved global offices are present.
12. No additional company facts are invented.
13. Mobile contains the same substantive content.
14. Mobile is readable at 390–430px.
15. This does not become Policy Center or Community Guidelines.
============================================================
21. OUTPUT
============================================================
Create ONLY:
ABOUT TING TING MODAL
Provide:
1. Desktop About overlay over the approved Screen 1
2. Mobile About overlay over the approved mobile Screen 1
Do NOT modify Screen 1 itself.
Do NOT create Community Guidelines yet.
Do NOT redesign Policy Center.
Begin.
```

**What came back:** The About overlay looked polished, but it read too much like an explanation of the internal moderation product rather than the About page of a global short-video brand.

**What I changed next and why:** I kept the modal itself and first removed invented corporate framing and cleaned up the typography.

---

### Stitch 21 — About Ting Ting — surgical design cleanup

#### Prompt

```text
ABOUT TING TING — SURGICAL DESIGN CLEANUP
Preserve the CURRENT About modal desktop and mobile structure.
Do NOT modify Screen 1.
Do NOT change the modal/overlay behavior.
Do NOT change the X close button.
Do NOT redesign Ting Ting’s approved color system.
Fix the following issues only.
1. REMOVE INVENTED CONTENT
Delete completely:
DUAL CORE
and its explanatory card.
Do not replace it with another invented concept.
Do not invent slogans, strategic pillars, operating models or company terminology that was not provided.
2. TYPOGRAPHY CONSISTENCY
The current oversized serif TING TING hero is inconsistent with the approved Ting Ting visual system.
Use the same premium contemporary sans-serif family as the approved Review Queue and Case Review screens.
The About modal may feel slightly more editorial through:
- scale
- spacing
- imagery
- composition
but not through an unrelated serif brand font.
Use:
TING TING
Short video.
Global expression.
Responsible discovery.
as the hero.
3. IMPROVE DESKTOP READABILITY
The current About content is too small and compressed.
Increase:
- body font size
- paragraph line-height
- section spacing
- breathing room
Use a comfortable editorial reading width.
Do not stretch long paragraphs across the entire modal.
Break content into visually manageable sections.
Do not make the modal look like policy documentation.
4. HERO CONTENT
Use exactly:
TING TING
Short video.
Global expression.
Responsible discovery.
Ting Ting is a global short-form video platform built for creativity, entertainment, learning and cultural expression.
People use Ting Ting to discover ideas, share moments, participate in communities and connect through short-form video.
Our platform is designed around two principles that need to work together:
creative freedom and responsible participation.
Do not add additional brand concepts.
5. OUR APPROACH TO SAFETY
Keep heading:
OUR APPROACH TO SAFETY
Use exactly:
Ting Ting uses a combination of automated systems and human review to help apply its Safety Standards consistently across the platform.
Automated systems help identify content that may require review at scale.
Human moderators provide contextual judgment where a final enforcement decision requires interpretation of the content, its purpose and the applicable policy.
The goal is not to remove every piece of sensitive content.
The goal is to apply the appropriate treatment for the context.
6. MODERATION TREATMENTS
Show these six informational treatments:
No Action
Remove Content
Age-Gate 18+
Restrict Recommendation
Add Viewer Warning
Escalate Review
Do NOT invent policy explanations such as:
“Immediate removal for high-severity violation”
“Forwarded to senior policy & legal”
or similar unsupported descriptions.
If short supporting microcopy is used, use only:
NO ACTION
Content remains available
REMOVE CONTENT
Remove from platform
AGE-GATE 18+
Restrict to adult viewers
RESTRICT RECOMMENDATION
Limit from recommendation surfaces
ADD VIEWER WARNING
Apply contextual viewing notice
ESCALATE REVIEW
Send for specialist review
These are informational cards, NOT clickable buttons.
7. OUR PRINCIPLES — MUST BE PRESENT
Ensure the modal continues with:
OUR PRINCIPLES
SAFETY
Reduce meaningful harm while preserving legitimate creative and informational expression.
CONTEXT
Consider the circumstances, intent and presentation of content before making consequential enforcement decisions.
CONSISTENCY
Apply the same standards reliably across creators, content types and regions.
PROPORTIONALITY
Use the level of enforcement appropriate to the severity and context of the content.
TRANSPARENCY
Maintain clear standards and traceable moderation decisions.
HUMAN ACCOUNTABILITY
Keep meaningful human judgment in moderation cases where context or policy interpretation matters.
Use six refined compact principle cards or sections.
8. SAFETY REVIEW — MUST BE PRESENT
After Our Principles show:
SAFETY REVIEW
Ting Ting Safety Review is the internal moderation environment used to manage content routed for human assessment.
Moderators review the content, relevant system signals and applicable policy guidance before recording the final action.
Each completed review creates a clear case record containing:
Final Action
Decision Basis
Moderator Note when provided
Review Status
9. GLOBAL OPERATIONS — MUST BE PRESENT
Show:
GLOBAL OPERATIONS
Ting Ting operates through regional teams supporting users across major markets.
Headquarters:
Singapore
ASIA PACIFIC
Singapore — Headquarters
Tokyo
Seoul
Sydney
EUROPE
London
Berlin
AMERICAS / MIDDLE EAST
New York
Toronto
São Paulo
Dubai
Do not invent any other location.
10. CLOSING
At the end show:
Ting Ting Technologies
Building a platform where creativity can scale responsibly.
11. MOBILE
Preserve the current single-column mobile modal.
Increase mobile typography and line-height slightly.
Do NOT shrink text simply to make sections fit one viewport.
The modal should scroll naturally.
Mobile must contain the same substantive content as desktop:
Hero
Our Approach to Safety
Moderation Treatments
Our Principles
Safety Review
Global Operations
Closing line
12. STRICTLY DO NOT ADD
Do not add:
Dual Core
company statistics
CEO
founding year
employee numbers
careers
investor information
strategic frameworks
legal language
policy metrics
company history
extra locations
new features
This is a content/design cleanup only.
Preserve the current modal behavior, colors and responsive overlay structure.
```

**What came back:** The DUAL CORE concept was removed and readability improved, but the page still contained too much moderation workflow and treatment content.

**What I changed next and why:** I changed the direction to a brand-only About page because Ting Ting should feel like a consumer platform, not Trust & Safety documentation.

---

### Stitch 22 — About Ting Ting — brand-only refinement

#### Prompt

```text
ABOUT TING TING — BRAND-ONLY REFINEMENT
ROLE
Act as a Principal Brand Designer, Consumer-Tech Product Designer, Editorial Designer and Responsive UX Lead.
You are refining the existing:
ABOUT TING TING MODAL
for the fictional global short-video brand:
TING TING
IMPORTANT:
TING TING is a consumer-facing short-video BRAND, comparable in positioning to a major global social/video platform.
This About experience should feel like a real brand/company About page.
It should NOT explain the internal Safety Review tool.
It should NOT explain moderation workflows.
It should NOT feel like an internal policy page.
Preserve the current modal behavior:
- opens over Screen 1
- Screen 1 remains dimmed / softly blurred behind
- X close icon in upper-right
- closing returns to the exact previous Screen 1 state
- desktop modal remains large and scrollable
- mobile modal remains responsive and vertically scrollable
Preserve the approved Ting Ting visual identity:
- warm ivory
- white
- richer beige / sand
- deep espresso typography
- refined brown accents
- premium contemporary sans-serif
- spacious global consumer-tech aesthetic
Do NOT redesign the brand.
==================================================
1. REMOVE ALL INTERNAL MODERATION CONTENT
==================================================
Delete completely from the About modal:
- Our Approach to Safety
- Safety Review
- Moderation Treatments
- No Action
- Remove Content
- Age-Gate 18+
- Restrict Recommendation
- Add Viewer Warning
- Escalate Review
- automated systems
- human review
- moderator workflows
- Final Action
- Decision Basis
- Moderator Note
- Review Status
- policy interpretation
- proportional enforcement
- human accountability as a moderation principle
- Safety Standards explanations
- any internal Trust & Safety workflow description
The About modal must NOT explain the moderation product.
TING TING should be presented as a BRAND.
==================================================
2. REMOVE INVENTED CORPORATE FRAMEWORKS
==================================================
Delete any invented concepts such as:
- Dual Core
- operational pillars
- safety operating model
- platform enforcement framework
- internal strategy terminology
- company statistics
- employee counts
- revenue
- founding year
- CEO
- investors
- market share
- internal system names
Do not replace them with new invented corporate concepts.
==================================================
3. ABOUT MODAL CONTENT STRUCTURE
==================================================
Use ONLY these major content sections:
1. Brand Hero
2. Who We Are
3. Our Mission
4. What We Believe
5. Global Presence
6. Closing Brand Line
Keep the content concise.
This should feel like the About experience of a premium global consumer brand.
==================================================
4. BRAND HERO
==================================================
Use:
TING TING
Short video.
Global expression.
Responsible discovery.
The hero should feel visually strong but restrained.
Possible visual treatment:
- original Ting Ting symbol / wordmark
- elegant abstract brand shapes
- subtle motion / echo motif
- premium photography of diverse creators or communities
- warm editorial composition
Do NOT use:
- TikTok branding
- real social-platform logos
- internal moderation imagery
- dashboards
- policy screens
- employee operations rooms
This is the public identity of the brand.
==================================================
5. WHO WE ARE
==================================================
Heading:
WHO WE ARE
Use exactly:
Ting Ting is a global short-form video platform for creativity, entertainment, learning and cultural expression.
People use Ting Ting to discover ideas, share moments and connect through video.
Keep this concise.
Do not expand it into several paragraphs.
==================================================
6. OUR MISSION
==================================================
Heading:
OUR MISSION
Use exactly:
To make creative expression easy to discover, share and enjoy across cultures.
Give this line strong visual importance.
It may appear as a large editorial statement rather than inside a conventional card.
==================================================
7. WHAT WE BELIEVE
==================================================
Heading:
WHAT WE BELIEVE
Create four refined brand-principle blocks.
Use exactly:
CREATIVITY
Give people space to create, experiment and share ideas in their own voice.
COMMUNITY
Help people find shared interests, conversations and communities through video.
RESPONSIBILITY
Build experiences that encourage thoughtful participation and long-term trust.
GLOBAL CONNECTION
Make it easier for ideas, culture and creativity to move across borders.
Use these as BRAND values.
Do NOT turn them into policy language.
Do NOT mention moderation.
Do NOT add additional principles.
==================================================
8. GLOBAL PRESENCE
==================================================
Heading:
GLOBAL PRESENCE
Supporting line:
Ting Ting operates across major creative and technology hubs around the world.
Then show exactly these 10 locations.
ASIA PACIFIC
Singapore — Headquarters
Tokyo
Seoul
Sydney
EUROPE
London
Berlin
AMERICAS / MIDDLE EAST
New York
Toronto
São Paulo
Dubai
Do NOT invent additional cities.
Do NOT add office addresses.
Do NOT add employee counts.
==================================================
9. GLOBAL PRESENCE VISUAL TREATMENT
==================================================
This section may use:
- three regional columns
- refined location typography
- subtle world / connection graphic
- abstract network lines
- tasteful city imagery
But do NOT create:
- interactive map
- tourism advertisement
- real office photography claiming to be Ting Ting
- huge location cards
- extra office information
Keep it elegant and brand-led.
==================================================
10. CLOSING BRAND LINE
==================================================
At the end show:
TING TING TECHNOLOGIES
Building a platform where creativity can travel further.
Use a restrained premium closing treatment.
Do NOT add:
- legal text
- Privacy
- Terms
- Community Guidelines
- Policy
- Careers
- Investors
- social links
The modal already has an X close control.
==================================================
11. DESKTOP VISUAL HIERARCHY
==================================================
Desktop should flow:
ABOUT TING TING
↓
TING TING HERO
Short video.
Global expression.
Responsible discovery.
↓
WHO WE ARE
↓
OUR MISSION
↓
WHAT WE BELIEVE
4 principles
↓
GLOBAL PRESENCE
↓
Closing brand line
Use generous whitespace.
Use editorial section transitions.
Do not place every section inside a bordered card.
The About modal should feel more expressive than Policy Center.
==================================================
12. TYPOGRAPHY
==================================================
Use the same approved Ting Ting contemporary sans-serif brand system.
Do NOT use an unrelated giant serif font.
Use:
- strong modern headlines
- readable body copy
- generous line-height
- premium spacing
The brand may feel editorial through scale and composition, not through a completely different typeface.
==================================================
13. MOBILE VERSION
==================================================
Preserve the existing mobile modal concept.
Target:
390–430px wide.
Use a vertically scrollable single-column brand experience.
Order:
ABOUT TING TING
TING TING HERO
WHO WE ARE
OUR MISSION
WHAT WE BELIEVE
GLOBAL PRESENCE
Closing brand line
Do NOT remove substantive brand content on mobile.
Do NOT shrink typography excessively.
==================================================
14. MOBILE PRINCIPLES
==================================================
Stack the four principles vertically:
Creativity
Community
Responsibility
Global Connection
Use refined compact cards or separators.
No horizontal carousel.
No tiny text.
==================================================
15. MOBILE GLOBAL PRESENCE
==================================================
Stack by region:
ASIA PACIFIC
Singapore — Headquarters
Tokyo
Seoul
Sydney
EUROPE
London
Berlin
AMERICAS / MIDDLE EAST
New York
Toronto
São Paulo
Dubai
Use comfortable spacing.
==================================================
16. STRICTLY DO NOT ADD
==================================================
Do NOT add:
- Safety Review
- moderation workflows
- Policy Center content
- Community Guidelines content
- automated moderation
- human review
- Trust & Safety
- enforcement actions
- company history
- leadership
- CEO
- careers
- investor information
- statistics
- awards
- ESG
- news
- press room
- internal departments
- additional offices
- public metrics
This is a concise brand About experience.
==================================================
17. FINAL QUALITY CHECK
==================================================
Before finalizing verify:
1. Ting Ting feels like a global short-video brand.
2. No internal moderation explanation remains.
3. No Safety Review content remains.
4. Hero is brand-led.
5. Who We Are is concise.
6. Our Mission uses the exact approved sentence.
7. Exactly four brand principles are present.
8. Exactly ten global locations are present.
9. No unsupported company facts were invented.
10. Desktop feels premium and editorial.
11. Mobile contains the same substantive content.
12. X remains the only close control.
13. Current Ting Ting color system remains unchanged.
14. No TikTok or other real-brand imitation appears.
==================================================
18. OUTPUT
==================================================
Refine ONLY the existing:
ABOUT TING TING MODAL
Return:
1. corrected desktop About overlay
2. corrected mobile About overlay
Do NOT modify Screen 1.
Do NOT modify Policy Center.
Do NOT create Community Guidelines yet.
This is a brand-only About refinement.
```

**What came back:** The About page finally became brand-focused: hero, Who We Are, Mission, four beliefs, Global Presence and the closing brand line, without the internal moderation explanation.

**What I changed next and why:** I kept that content and made only one final founder-image change so desktop and mobile would show the same fictional founder.

---

### Stitch 23 — About Ting Ting — founder image revision only

#### Prompt

```text
ABOUT TING TING — FOUNDER IMAGE REVISION ONLY
Preserve the current About Ting Ting modal layout, content, colors, spacing, typography, sections, and modal behavior.
Do NOT redesign the About modal.
Make ONLY the following founder-image changes.
==================================================
1. REPLACE CURRENT DESKTOP PERSON
==================================================
Remove the current female person shown in the About hero.
Replace her with a FICTIONAL Indian male technology-company founder.
Character specification:
Name:
Elon Srinivasan
Role:
Founder & CEO
Appearance:
- Indian male
- approximately 50–58 years old
- dark brown skin tone
- mature professional appearance
- natural short dark hair with subtle greying
- confident but approachable
- intelligent, experienced technology-founder presence
- realistic facial proportions
- professional but contemporary clothing
- no tie required
- avoid stereotypical corporate portrait styling
The person is completely fictional.
Do NOT make him resemble:
- Elon Musk
- Sundar Pichai
- Satya Nadella
- any real executive or public figure
Create a unique fictional individual.
==================================================
2. PHOTOGRAPHIC STYLE
==================================================
Use a premium editorial corporate photograph.
The founder may be:
- speaking at a Ting Ting community/creator event
OR
- interacting with creators
OR
- photographed naturally in a modern technology-company setting
Prefer candid/editorial energy rather than a passport-style headshot.
The image should communicate:
- leadership
- creativity
- technology
- global consumer brand
- human connection
Use the same warm visual tone as the existing About modal.
Do NOT make it look like:
- stock photography
- political portrait
- finance executive portrait
- formal board photograph
==================================================
3. FOUNDER CAPTION
==================================================
Directly underneath the image show:
Elon Srinivasan
Founder & CEO
Hierarchy:
Elon Srinivasan
slightly stronger text
Founder & CEO
smaller muted secondary text
Do not add:
- biography
- age
- education
- previous companies
- quotes
- achievements
- social links
==================================================
4. DESKTOP PLACEMENT
==================================================
Preserve the current desktop hero composition:
LEFT:
TING TING
tagline
RIGHT:
founder image
Place:
Elon Srinivasan
Founder & CEO
directly beneath the founder image.
Keep the layout balanced.
Do not increase the hero height excessively.
==================================================
5. MOBILE — IMPORTANT
==================================================
The current mobile About modal incorrectly removes the founder image.
The mobile version MUST also show the same fictional founder.
Use this order:
TING TING
Short video.
Global expression.
Responsible discovery.
↓
Founder image
↓
Elon Srinivasan
Founder & CEO
↓
WHO WE ARE
↓
OUR MISSION
↓
WHAT WE BELIEVE
↓
GLOBAL PRESENCE
The image should be responsive and fit comfortably within the mobile modal.
Do not crop the founder’s face.
Do not make the image extremely tall.
Use approximately full content width with appropriate margins.
==================================================
6. CONSISTENCY
==================================================
Desktop and mobile must depict the SAME fictional founder:
Elon Srinivasan
Founder & CEO
Keep:
- same person
- same apparent age
- same clothing
- same image if practical
Do not generate different founders for desktop and mobile.
==================================================
7. STRICT PRESERVATION
==================================================
Do NOT alter:
- Who We Are text
- Our Mission
- What We Believe
- Creativity
- Community
- Responsibility
- Global Connection
- Global Presence
- office locations
- closing brand line
- X close behavior
- modal colors
- overall typography system
This is a founder-image and responsive-consistency revision only.
```

**What came back:** The founder was changed to the fictional Elon Srinivasan, Founder & CEO, with the same person and caption used across desktop and mobile.

**What I changed next and why:** I moved on to the public-facing Community Guidelines overlay.

---

### Stitch 24 — Community Guidelines — create reusable modal only

#### Prompt

```text
COMMUNITY GUIDELINES — CREATE REUSABLE MODAL ONLY
ROLE
Act as a Principal Consumer-Tech Product Designer, Content Policy Designer,
Editorial UX Designer and Responsive Design Lead.
You are extending the existing fictional global short-video brand:
TING TING
The approved Screen 1 — Review Queue already exists.
Your task is to create ONLY the:
TING TING COMMUNITY GUIDELINES MODAL
This opens from:
SCREEN 1 FOOTER → Community Guidelines
This is NOT a new routed page.
It is a large scrollable informational modal / overlay above Screen 1.
==================================================
1. STRICT PRESERVATION
==================================================
DO NOT modify Screen 1.
Preserve exactly:
- current Ting Ting logo
- warm ivory page
- white cards
- approved darker beige / sand
- espresso/brown typography
- current header
- current news carousel
- case cards
- footer
- current desktop/mobile layouts
The underlying Screen 1 must remain visible, softly dimmed and blurred.
==================================================
2. COMMUNITY GUIDELINES PURPOSE
==================================================
This is Ting Ting’s PUBLIC-FACING platform guidance.
It explains to creators and users:
- what content standards apply
- what behavior Ting Ting expects
- what kinds of context may matter
- what platform actions may occur
This is DIFFERENT from the internal Policy Center.
POLICY CENTER:
internal, operational, moderator-focused
COMMUNITY GUIDELINES:
public-facing, clear, accessible, brand-consistent
Do NOT make this look like:
- internal moderation software
- legal terms and conditions
- employee documentation
- school notes
- a dashboard
- a government document
==================================================
3. MODAL BEHAVIOR
==================================================
When Community Guidelines is clicked:
- Screen 1 remains underneath
- softly dim and blur Screen 1
- open a large Community Guidelines modal
- preserve Screen 1 state and scroll position
Use only:
X close icon
in the upper-right.
Clicking X returns the user to the exact previous Screen 1 position.
Do NOT add:
Back
Done
Save
Confirm
Continue
footer navigation
bottom navigation
==================================================
4. DESKTOP MODAL
==================================================
Use a large desktop modal approximately:
80–88% viewport width
75–85% viewport height
The modal scrolls internally.
Use:
- white / very light warm surface
- subtle warm border
- soft premium shadow
- moderate rounded corners
- generous spacing
- Ting Ting espresso/brown typography
The visual style should feel more editorial and public-facing than Policy Center.
==================================================
5. HEADER / HERO
==================================================
Top-left:
COMMUNITY GUIDELINES
Supporting brand:
Ting Ting Community Standards
Use a concise hero:
CREATE FREELY.
PARTICIPATE RESPONSIBLY.
Then:
Ting Ting supports creative expression, entertainment, education and community participation.
These guidelines describe the standards expected from everyone who uses the platform.
They are designed to:
- protect people from meaningful harm
- support respectful participation
- keep content appropriate for different audiences
- reduce deceptive or exploitative behavior
- preserve room for legitimate artistic, cultural, educational and public-interest expression
Then one short highlighted line:
Context matters.
A piece of content may contain sensitive material without necessarily violating Ting Ting rules when its purpose, presentation and surrounding context support a different treatment.
Do NOT add additional slogans.
==================================================
6. COMMUNITY PRINCIPLES
==================================================
Create four refined public-facing principles:
SAFETY
Support participation without exposing people to substantial preventable harm.
RESPECT
Protect people and communities from targeted abuse, hostility and intimidation.
AUTHENTICITY
Support genuine participation and reduce deceptive platform behavior.
AGE-APPROPRIATE PARTICIPATION
Apply proportionate access and visibility controls where content is unsuitable for younger audiences.
Keep these concise.
Do NOT turn them into operational moderator rules.
==================================================
7. GUIDELINE CATEGORY NAVIGATION — DESKTOP
==================================================
Create a clean category index.
Use exactly TEN categories:
01
Hate Speech & Hateful Behavior
02
Harassment & Bullying
03
Physical Risk & Imitation
04
Shocking & Graphic Content
05
Body Exposure & Sexualized Behaviors
06
Regulated Goods & Services
07
Integrity & Authenticity
08
Suicide & Self-Harm
09
Privacy & Personal Safety
10
Authentic Platform Participation
Do NOT invent additional categories.
The category index may appear as:
- a restrained left-side index
OR
- a compact sticky category navigation
Choose whichever feels most natural for a public consumer-tech guideline experience.
Do not make it resemble the internal Policy Center.
==================================================
8. 01 — HATE SPEECH & HATEFUL BEHAVIOR
==================================================
Heading:
01
HATE SPEECH & HATEFUL BEHAVIOR
Content:
Ting Ting does not allow content that attacks, dehumanizes or promotes hostility toward people based on protected characteristics.
This can include:
- direct hateful attacks
- degrading comparisons
- calls for exclusion or harm
- celebration of harm against protected groups
Contextual exceptions may include:
- educational discussion
- counterspeech
- documentary reporting
- historical discussion
- community members discussing or reclaiming language directed at them
==================================================
9. 02 — HARASSMENT & BULLYING
==================================================
Ting Ting does not allow severe or repeated targeted abuse.
This can include:
- sustained humiliation
- intimidation
- credible threats
- coordinated harassment
- targeted degrading attacks
Ordinary criticism, disagreement, satire and public-interest commentary are not automatically harassment.
==================================================
10. 03 — PHYSICAL RISK & IMITATION
==================================================
Do not encourage viewers to participate in activities that create substantial physical-harm risk.
Content may be reviewed differently when it involves:
- professional sport
- controlled performance
- film or theatre production
- protective equipment
- trained participants
- cultural or ceremonial practice
- educational demonstration
Stronger enforcement may apply where content promotes, facilitates or instructs viewers to reproduce conduct with substantial physical-harm potential.
IMPORTANT:
Do not use the word “dangerous” anywhere in this modal.
==================================================
11. 04 — SHOCKING & GRAPHIC CONTENT
==================================================
Ting Ting limits content containing severe injury, graphic bodily harm or material presented primarily to shock viewers.
Context matters for:
- news reporting
- medical education
- professional sports
- documentary material
- public-interest reporting
Depending on severity, content may:
- remain available
- receive a viewer warning
- be limited from recommendation
- be age-gated
- be removed
==================================================
12. 05 — BODY EXPOSURE & SEXUALIZED BEHAVIORS
==================================================
Ting Ting applies age-appropriate standards to body exposure and sexualized presentation.
Review may consider:
- degree of exposure
- participant age
- sexualized intent
- sport or dance context
- health or educational purpose
- cultural context
- setting and presentation
Some mature content may remain available only to adult users.
==================================================
13. 06 — REGULATED GOODS & SERVICES
==================================================
Ting Ting does not allow inappropriate facilitation or promotion of regulated products and services.
Examples may include:
- betting or gambling services
- restricted financial schemes
- controlled commercial products
- direct instructions for acquiring restricted goods
Discussion, journalism or education about these subjects may be treated differently from promotion or facilitation.
==================================================
14. 07 — INTEGRITY & AUTHENTICITY
==================================================
Do not deliberately mislead people in ways that can create meaningful harm.
This may include certain:
- deceptive claims
- impersonation
- manipulated content
- coordinated deceptive behavior
- harmful misinformation
Satire, opinion and parody are not automatically violations.
Content requiring specialist factual assessment may receive additional review.
==================================================
15. 08 — SUICIDE & SELF-HARM
==================================================
Ting Ting does not allow content that promotes, encourages or provides instructions for suicide or self-harm.
Supportive content may be permitted when it focuses on:
- recovery
- prevention
- awareness
- seeking help
- responsible discussion
Content involving immediate or severe risk may receive additional review.
==================================================
16. 09 — PRIVACY & PERSONAL SAFETY
==================================================
Do not expose private information or use Ting Ting to place another person at risk.
Users should not publish sensitive information such as:
- private home addresses
- confidential identification details
- private financial information
- non-public contact information
Threatening or exploitative use of personal information may result in platform action.
==================================================
17. 10 — AUTHENTIC PLATFORM PARTICIPATION
==================================================
Ting Ting expects accounts and interactions to represent genuine participation.
Do not engage in:
- coordinated fake engagement
- impersonation intended to deceive
- artificial manipulation of platform signals
- misleading identity practices
- organized spam
==================================================
18. HOW TING TING MAY RESPOND
==================================================
Create a public-facing section:
HOW TING TING MAY RESPOND
Use these six possible platform treatments:
NO ACTION
Content remains available.
REMOVE CONTENT
Content is removed from the platform.
AGE-GATE 18+
Content remains available only to adult viewers.
RESTRICT RECOMMENDATION
Content remains accessible but is not broadly distributed through recommendation surfaces.
ADD VIEWER WARNING
A contextual notice is shown before viewing.
ESCALATE REVIEW
The content requires additional specialist or policy review.
These are informational.
Do NOT make them clickable controls.
==================================================
19. CONTEXTUAL REVIEW
==================================================
Heading:
CONTEXTUAL REVIEW
Use:
Ting Ting moderation does not rely on isolated words, objects or visual signals alone.
Context may include:
- creator intent
- surrounding dialogue
- captions and descriptions
- whether content is staged
- educational purpose
- professional context
- cultural context
- public-interest value
- likelihood of viewer imitation
- severity of possible harm
Keep this section public-facing and readable.
==================================================
20. REPORTING CONTENT
==================================================
Heading:
REPORTING CONTENT
Use:
Users may report content they believe violates Ting Ting Community Guidelines.
Reports may contribute to further review.
Submitting a report does not automatically mean content will be removed.
==================================================
21. APPEALS
==================================================
Heading:
APPEALS
Use:
Creators may request review of certain platform actions.
An appeal does not automatically reverse the original decision.
The content may be reviewed again using the relevant context and platform standards.
This is informational only.
Do NOT create an appeals workflow.
==================================================
22. CLOSING PRINCIPLES
==================================================
At the end show:
HOW WE APPLY THESE GUIDELINES
CONTEXT MATTERS
A signal alone does not determine the final decision.
PROPORTIONAL RESPONSE
Different levels of concern may require different platform actions.
CONSISTENCY MATTERS
Comparable cases should receive comparable treatment when material context is similar.
UNCERTAINTY SHOULD BE REVIEWED
Where available information does not support a clear outcome, additional review may be appropriate.
Keep this concise and brand-consistent.
==================================================
23. FOOTER INSIDE MODAL
==================================================
At the very end show only:
TING TING COMMUNITY GUIDELINES
Framework version: 2026.09
Status: Active
Last updated: September 2026
Do NOT add:
Privacy
Terms
Careers
legal disclaimer
external links
==================================================
24. MOBILE VERSION
==================================================
Create a true responsive mobile modal at approximately 390–430px width.
Do NOT copy the desktop two-column navigation structure.
Mobile should use:
COMMUNITY GUIDELINES
Ting Ting Community Standards
X close icon
Then:
Create freely.
Participate responsibly.
↓
Community Principles
↓
Category selector or compact accordion navigation
↓
Guideline content
↓
How Ting Ting May Respond
↓
Contextual Review
↓
Reporting Content
↓
Appeals
↓
How We Apply These Guidelines
↓
Framework information
==================================================
25. MOBILE CATEGORY ACCESS
==================================================
For mobile, convert the desktop category index into either:
Select guideline                    ▾
OR
a clean accordion category list.
Prefer the solution that produces the clearest mobile experience.
Do NOT require horizontal scrolling.
Do NOT create bottom navigation.
==================================================
26. MOBILE CONTENT PARITY
==================================================
CRITICAL:
Desktop and mobile may have different layouts, but they must contain the SAME substantive guideline content.
Do not delete sections on mobile just to shorten the page.
The mobile modal should scroll vertically.
Do NOT shrink typography excessively.
==================================================
27. TYPOGRAPHY
==================================================
Use the approved Ting Ting modern sans-serif brand system.
Do NOT introduce a completely different serif identity.
The Community Guidelines may feel editorial through:
- section scale
- whitespace
- hierarchy
- warm callout surfaces
not through unrelated typography.
==================================================
28. VISUAL STYLE
==================================================
Community Guidelines should visually sit between:
ABOUT
brand-led / expressive
and
POLICY CENTER
internal / operational
Community Guidelines should feel:
public
clear
friendly
trustworthy
structured
accessible
Use:
- white
- warm ivory
- approved sand/beige
- espresso
- brown accents
No blue/cyan.
No gaming UI.
No technical dashboards.
==================================================
29. STRICTLY DO NOT ADD
==================================================
Do NOT invent:
- additional guideline categories
- enforcement statistics
- percentages
- user counts
- policy metrics
- moderation accuracy
- internal policy IDs
- moderator terminology
- employee workflows
- case IDs
- dashboards
- settings
- reporting forms
- appeal forms
- Community Guidelines search history
- external websites
- real company references
==================================================
30. FINAL CHECK
==================================================
Before finalizing verify:
1. It opens as a modal over Screen 1.
2. Screen 1 remains blurred/dimmed behind.
3. X is the only close control.
4. It feels public-facing, not internal.
5. Exactly 10 guideline categories exist.
6. No extra categories were invented.
7. Physical Risk & Imitation uses the approved wording.
8. The prohibited word does not appear anywhere.
9. How Ting Ting May Respond includes exactly six treatments.
10. Contextual Review is present.
11. Reporting is present.
12. Appeals is informational only.
13. Desktop and mobile contain the same substantive content.
14. Mobile scrolls naturally.
15. No new workflow or navigation has been invented.
16. Ting Ting brand styling remains unchanged.
==================================================
31. OUTPUT
==================================================
Create ONLY:
TING TING COMMUNITY GUIDELINES MODAL
Return:
1. Desktop Community Guidelines overlay
2. Mobile Community Guidelines overlay
Do NOT modify Screen 1.
Do NOT modify About.
Do NOT modify Policy Center.
Do NOT create new product pages.
Begin.
```

**What came back:** Stitch produced the public-facing Community Guidelines for desktop and mobile with the four principles, ten categories, response treatments, contextual review, reporting, appeals and framework information.

**What I changed next and why:** I finished the Stitch design work with the small Maya Tan employee-profile interaction.

---

### Stitch 25 — Employee Profile Popover — create only this interaction

#### Prompt

```text
EMPLOYEE PROFILE POPOVER — CREATE ONLY THIS INTERACTION
ROLE
Act as a Principal Product Designer, Interaction Designer and Responsive UX Lead.
You are extending the existing fictional product:
TING TING — SAFETY REVIEW
The approved Screen 1 — Review Queue already exists.
Your task is to create ONLY the small EMPLOYEE PROFILE POPOVER that opens when the user clicks or taps the moderator profile area in the top-right header.
This is NOT a new routed page.
This is NOT a full-screen modal.
This is a compact profile popover.
Preserve the approved Ting Ting Screen 1 design exactly.
==================================================
1. TRIGGER
==================================================
The popover opens when the user clicks or taps the existing header profile:
Maya Tan
Content Moderator
profile photo
Do NOT create another trigger or new navigation item.
==================================================
2. CONTENT — EXACTLY THIS
==================================================
Show only:
[ same Maya Tan profile photo ]
Maya Tan
Employee ID
TT-SG-CM-02418
Role
Content Moderator
That is all.
Do NOT add:
- email
- phone number
- department
- location
- shift
- status
- performance
- cases reviewed
- permissions
- settings
- logout
- edit profile
- notifications
- account preferences
- manager
- reporting line
- employment history
- verification badge
Do not invent any additional employee information.
==================================================
3. CLOSE CONTROL
==================================================
Place a clear X close icon in the upper-right corner of the popover.
Clicking X closes the popover and returns to the unchanged Review Queue.
Do not add:
Done
Save
Back
Cancel
Confirm
X is sufficient.
==================================================
4. DESKTOP PLACEMENT
==================================================
On desktop:
Anchor the popover directly beneath or slightly below-left of the existing Maya Tan profile area in the top-right header.
It should visually feel connected to the profile trigger.
Do NOT place it randomly in the center of the page.
Use a compact size approximately appropriate for:
280–340px width
The popover should not cover a large portion of the Review Queue.
Screen 1 remains visible and active behind it.
A full-page blur is NOT required.
A very subtle background dim may be used only if needed, but prefer a normal anchored popover.
==================================================
5. DESKTOP VISUAL STYLE
==================================================
Use the approved Ting Ting visual system:
- white / warm ivory surface
- subtle beige border
- soft premium shadow
- moderate rounded corners
- espresso / dark brown text
- restrained brown accent
- current contemporary sans-serif typography
Use the SAME Maya Tan profile image already present in the header.
Do NOT generate a different employee photo.
==================================================
6. PROFILE IMAGE
==================================================
Place the profile image prominently near the top of the popover.
Use a circular image.
Do not make it huge.
Then show:
Maya Tan
as the strongest text.
Below it show the two information fields:
Employee ID
TT-SG-CM-02418
Role
Content Moderator
Use clear but restrained hierarchy.
==================================================
7. MOBILE VERSION
==================================================
Create a responsive version for approximately 390–430px phone width.
Trigger:
tap the existing Maya Tan/avatar area in the mobile header.
On mobile, use either:
- a compact centered popover
OR
- a compact upper-screen card
Choose whichever best fits the approved Ting Ting mobile design.
Do NOT create a full new page.
Keep enough margin from phone edges.
Use the SAME content:
Maya Tan
Employee ID
TT-SG-CM-02418
Role
Content Moderator
and the SAME profile image.
Use X to close.
==================================================
8. MOBILE USABILITY
==================================================
Ensure:
- X is easy to tap
- text is readable without zoom
- profile image is clear
- no horizontal overflow
- popover does not cover the entire screen unnecessarily
- no bottom navigation is created
- no extra account controls are added
==================================================
9. INTERACTION
==================================================
Behavior:
Profile click/tap
→ Employee Profile Popover opens
X
→ popover closes
Do not navigate away.
Do not reset Review Queue state.
Do not alter filters, counters or case states.
==================================================
10. STRICT PRESERVATION
==================================================
Do NOT modify:
- Screen 1 layout
- header structure
- news carousel
- Review Queue
- filters
- case cards
- footer
- Ting Ting colors
- existing profile photo
- mobile layout
This task is ONLY to add the profile popover interaction.
==================================================
11. FINAL QUALITY CHECK
==================================================
Before finalizing verify:
1. Desktop popover opens from Maya Tan profile area.
2. Mobile popover opens from the existing avatar/profile area.
3. Same Maya Tan photo is used.
4. Name is Maya Tan.
5. Employee ID is TT-SG-CM-02418.
6. Role is Content Moderator.
7. X closes the popover.
8. No Settings exist.
9. No Logout exists.
10. No employee metrics exist.
11. No extra fields were invented.
12. Screen 1 itself remains unchanged.
==================================================
12. OUTPUT
==================================================
Create ONLY:
EMPLOYEE PROFILE POPOVER
Provide:
1. Desktop popover state over approved Screen 1
2. Mobile popover state over approved mobile Screen 1
Do NOT create a separate profile page.
Do NOT modify any other Ting Ting screen.
```

**What came back:** The profile popover showed only the approved information: Maya Tan, Employee ID TT-SG-CM-02418 and Content Moderator, using the same avatar.

**What I changed next and why:** I then took the approved Stitch designs/code into a clean Google AI Studio build so I could implement the working React prototype.

---

## SECTION B — GOOGLE AI STUDIO PROMPTS

### AI Studio 01 — Initial master build [PARTIAL RECOVERY]

#### Prompt

```text
[PARTIAL RECOVERY — the complete original prompt is not exposed in the surviving chat/export.]
Visible opening in AI Studio Versions:
"Do not ask me what application to build. Build it now. P..."
```

**What came back:** The first AI Studio build went in the wrong direction and did not look like the Ting Ting product I had approved in Stitch.

**What I changed next and why:** I rejected that build, opened Versions/backups and tried to get back to the approved Stitch direction instead of continuing on top of a bad base.

---

### AI Studio 02 — Screen 1 restoration to approved Stitch design [PARTIAL RECOVERY]

#### Prompt

```text
[PARTIAL RECOVERY — the exact prompt text/title is not recoverable from the surviving record.]
```

**What came back:** AI Studio said Screen 1 had been restored, but when I checked the preview it had not really changed.

**What I changed next and why:** The project was getting messy, so I stopped trying to patch it and restarted from a clean AI Studio project using the Stitch source/code as the design reference.

---

### AI Studio 03 — PROMPT 1 — DESIGN SOURCE LOCK + SCREEN 1 IMPLEMENTATION

#### Prompt

```text
PROMPT 1 — DESIGN SOURCE LOCK + SCREEN 1 IMPLEMENTATION
You are building a frontend-only React web prototype called:
TING TING — SAFETY REVIEW
I have provided the approved Stitch HTML/code references for the complete product, including desktop and mobile states, plus the Ting Ting logo/color references and five final Internal News poster image assets.
IMPORTANT SOURCE-OF-TRUTH RULE
All supplied Stitch code is APPROVED DESIGN SOURCE CODE.
Read all supplied files so you understand the complete Ting Ting visual system, but in this iteration IMPLEMENT ONLY:
SCREEN 1 — REVIEW QUEUE
Do not implement Screen 2 or any modal yet.
Do not reinterpret, redesign, modernize or replace the supplied Stitch design.
Where possible, preserve the actual:
HTML structure
spacing
dimensions
typography hierarchy
colors
borders
shadows
card proportions
responsive behavior
Convert the approved Screen 1 desktop/mobile Stitch structure into maintainable React components while keeping the resulting UI visually faithful to Stitch.
TECHNICAL GUARDRAILS
Frontend only.
Use:
React
TypeScript
Vite
Tailwind/CSS as appropriate
normal in-memory React state
Do NOT use:
Express
backend routes
@google/genai
Gemini API
Firebase
Supabase
authentication
database
API keys
localStorage
sessionStorage
IndexedDB
external live services
Refresh must reset the prototype.
SCREEN 1 MUST CONTAIN
Approved header:
LEFT
hamburger
approved Ting Ting logo
TING TING
CENTER
SAFETY REVIEW
RIGHT
Search Case ID
Maya Tan
Content Moderator
approved Maya profile image
Internal News:
use ONLY the five uploaded final poster images
one poster at a time
previous / next
01 / 05 indicator
auto-advance every 3.5 seconds
smooth horizontal transition
infinite loop
pause on desktop hover
no click-through
do not overlay duplicate poster text
Review Queue:
10 Pending
0 Completed
Filters only:
ALL
PRIORITY
Top
Medium
Low
STATUS
Pending
Completed
POLICY
Physical Risk & Imitation
Regulated Goods & Services
Hate Speech & Hateful Behavior
Harassment & Bullying
Shocking & Graphic Content
Body Exposure & Sexualized Behaviors
Integrity & Authenticity
Suicide & Self-Harm
Exactly 10 case cards.
Desktop:
4 + 4 + 2
Mobile:
approved single-column vertical card design from Stitch.
Each card contains ONLY:
[9:16 temporary thumbnail]
Case ID
Creator handle
Policy category
Priority: X · Queue age: X
PENDING REVIEW
READ MORE →
Use these exact Screen 1 records:
01
TT-SG-260905-018427
@reelcraft.sg
Physical Risk & Imitation
Priority: Top
Queue age: 3m
02
TT-SG-260905-018463
@oddsafterdark
Regulated Goods & Services
Priority: Top
Queue age: 8m
03
TT-SG-260905-018519
@classroomcontext
Hate Speech & Hateful Behavior
Priority: Medium
Queue age: 2h 10m
04
TT-IN-260905-020174
@ringsidecut
Shocking & Graphic Content
Priority: Medium
Queue age: 4h 35m
05
TT-SG-260905-021308
@heritage.stage
Physical Risk & Imitation
Priority: Low
Queue age: 15h 05m
06
TT-SG-260905-022441
@streetwatch.sg
Shocking & Graphic Content
Priority: Top
Queue age: 21m
07
TT-IN-260905-023086
@trackline.rider
Physical Risk & Imitation
Priority: Medium
Queue age: 7h 45m
08
TT-SG-260905-024197
@afterhours.move
Body Exposure & Sexualized Behaviors
Priority: Medium
Queue age: 10h 20m
09
TT-SG-260905-025634
@medskills.lab
Shocking & Graphic Content
Priority: Low
Queue age: 22h 40m
10
TT-SG-260905-026712
@urbanstuntlab
Physical Risk & Imitation
Priority: Top
Queue age: 54m
All cases initially:
PENDING REVIEW
Implement working:
news carousel
Priority filter
Status filter
Policy filter
Search Case ID
READ MORE may store/select the clicked Case ID for the next implementation stage, but DO NOT build or invent Screen 2 in this iteration.
Preserve the approved footer exactly from the supplied Screen 1 Stitch code:
TING TING
Short video.
Global expression.
Responsible discovery.
COMPANY
About
Policy
Community Guidelines
CONTACT
Safety Operations
+65 6818 2400
safety@tingting.example
General Enquiries
+65 6818 2000
hello@tingting.example
GLOBAL OFFICES
Asia Pacific
Singapore — Headquarters
Tokyo
Seoul
Sydney
Europe
London
Berlin
Americas / Middle East
New York
Toronto
São Paulo
Dubai
© 2026 Ting Ting Technologies
DO NOT ADD:
dashboards
sidebars
analytics
audit information
AI risk scores
reports
transcripts
moderation tiers
settings
notifications
new navigation
extra case information
extra pages
extra footer content
CRITICAL:
The supplied Stitch code determines visual design.
This prompt determines functionality and exact content.
Do not invent alternatives when either source already specifies the answer.
Build Screen 1 now.
When complete, tell me only:
which files/components you created
which Screen 1 interactions work
what remains placeholder
Do not start Screen 2.
{ attached the stitch files as well}
```

**What came back:** The clean rebuild was much closer to Stitch and I liked the beige direction. I still found practical issues such as the ALL button color, incomplete interactions and low-quality image handling.

**What I changed next and why:** I kept the visual base and used a separate interaction-polish prompt instead of rebuilding Screen 1 again.

---

### AI Studio 04 — PROMPT 1B — SCREEN 1 INTERACTION POLISH ONLY

#### Prompt

```text
PROMPT 1B — SCREEN 1 INTERACTION POLISH ONLY
The current Screen 1 visual implementation is APPROVED.
Do not redesign Screen 1.
Do not change its layout, spacing, typography, card dimensions, footer, carousel size, case data, or responsive structure.
This iteration is ONLY for Screen 1 interaction behavior and one small visual correction.
==================================================
ALL BUTTON COLOR
==================================================
The selected ALL filter button is currently brown.
Change the active ALL button to the approved deep black / espresso treatment from the supplied Stitch Screen 1 design.
Use white text.
Do not change the other filter styling.
==================================================
2. FILTER DROPDOWN BEHAVIOR
Fix Priority, Status and Policy dropdown behavior.
Use controlled dropdown state so ONLY ONE dropdown can be open at a time.
Required behavior:
Click PRIORITY
→ Priority dropdown opens.
Click STATUS while Priority is open
→ Priority closes.
→ Status opens.
Click POLICY while another dropdown is open
→ previous dropdown closes.
→ Policy opens.
Selecting any dropdown option:
→ applies the filter
→ immediately closes that dropdown.
Clicking ALL:
→ reset Priority to All
→ reset Status to All
→ reset Policy to All
→ close ANY currently open dropdown.
Clicking anywhere outside the filter controls:
→ close any open dropdown.
Clicking the same open dropdown button again:
→ close it.
Do not require a second click after choosing an option.
==================================================
3. SEARCH CASE ID
Make the existing header Search Case ID input functional.
It must filter the 10 local cases in real time.
Search ONLY by Case ID.
Examples:
018427
→ show TT-SG-260905-018427
TT-IN-260905
→ show matching India cases
TT-SG-260905-02
→ show matching Singapore cases beginning with that sequence.
Search should be:
case-insensitive
partial-match capable
When the search field is empty:
→ show cases according to the active filters.
The search must combine with Priority / Status / Policy filters.
If no case matches:
show a restrained empty state:
“No matching cases.”
Do not search creator names or policy text.
==================================================
4. SEARCH CLEAR CONTROL
If text exists inside Search Case ID:
show the approved small X clear control inside the input.
Click X:
→ clear the search
→ immediately restore cases according to active filters.
Do not reset Priority / Status / Policy when clearing search.
==================================================
5. HAMBURGER MENU
Activate the existing top-left hamburger.
Click/tap:
→ open a compact anchored popover beneath the hamburger/header area.
Show EXACTLY:
About
Policy
Community Guidelines
Nothing else.
Do NOT add:
Home
Settings
Help
Logout
Profile
Notifications
Clicking hamburger again:
→ close menu.
Clicking outside:
→ close menu.
Do not redesign the header.
==================================================
6. MAYA TAN PROFILE
Activate the existing Maya Tan/profile area.
Click/tap Maya Tan or her avatar:
→ open the approved Employee Profile popover supplied in the Stitch references.
Show EXACTLY:
Maya Tan
Employee ID
TT-SG-CM-02418
Role
Content Moderator
Use the same Maya Tan image already visible in the header.
X:
→ close popover.
Clicking outside may also close it.
Do not add:
email
shift
metrics
settings
logout
review counts
==================================================
7. READ MORE
Activate every READ MORE → button.
For this iteration:
clicking READ MORE must set/store the clicked case as the selected case using in-memory React state.
Example:
Case 04 READ MORE
→ selectedCaseId becomes TT-IN-260905-020174
Case 08 READ MORE
→ selectedCaseId becomes TT-SG-260905-024197
Do NOT invent Screen 2.
If the approved Screen 2 component is not yet implemented, keep the selected case state ready for Prompt 2.
Do not navigate to a generic or invented case page.
==================================================
8. FOOTER LINKS
Activate the existing footer links:
About
Policy
Community Guidelines
For now, wire them to clear application overlay targets/state:
About
→ activeOverlay = about
Policy
→ activeOverlay = policy
Community Guidelines
→ activeOverlay = communityGuidelines
Do not redesign or invent modal content in this iteration.
The actual approved modal implementations will be completed in a later prompt using the supplied Stitch code.
==================================================
9. NEWS CAROUSEL
Do not redesign the carousel.
Verify the existing behavior remains:
exactly five approved poster images
auto-advance every 3.5 seconds
previous arrow
next arrow
01 / 05 counter
infinite loop
pause on desktop hover
manual interaction resets timer
Do not make posters clickable.
==================================================
10. IMAGE QUALITY
Do not regenerate, sharpen, AI-enhance, reinterpret or replace the current temporary case thumbnails.
Their final high-resolution assets will be supplied later.
Preserve the approved dimensions/crops only.
==================================================
11. RESPONSIVE BEHAVIOR
All interaction fixes must also work on mobile.
In particular:
hamburger must be tappable
profile must be tappable
filters must open/close correctly
only one dropdown open at a time
search must work without horizontal overflow
clicking outside must close menus where appropriate
Do not modify the approved mobile visual layout.
==================================================
12. STRICT PRESERVATION
Do not modify:
Screen 1 layout
Ting Ting logo
beige palette
header positioning
Review Queue typography
case card structure
footer design
exact 10-case data
news poster assets
desktop 4 + 4 + 2 layout
mobile card layout
This is an INTERACTION POLISH task only.
==================================================
13. COMPLETION CHECK
Before completing, test:
ALL is deep black/espresso.
Priority dropdown opens.
Selecting Priority closes it.
Opening Status closes Priority.
Clicking ALL closes any dropdown and resets filters.
Clicking outside closes dropdown.
Search Case ID filters correctly.
Search X clears search.
Hamburger opens only three options.
Maya Tan profile opens correct popover.
READ MORE stores correct selectedCaseId.
Footer links set correct overlay target.
Carousel still works.
Desktop and mobile remain visually unchanged.
After implementing, report only:
files changed
which interactions now work
any interaction that could not be completed
Do not start Screen 2.
```

**What came back:** Most of the Screen 1 interactions worked, including search, filters, hamburger/profile triggers and the carousel. When I checked mobile, however, the header still did not match the approved Stitch version.

**What I changed next and why:** I isolated the mobile header as the next problem so I would not disturb the working desktop screen and interactions.

---

### AI Studio 05 — MOBILE HEADER — CODE-LEVEL STRUCTURAL FIX

#### Prompt

```text
MOBILE HEADER — CODE-LEVEL STRUCTURAL FIX
The previous response claimed the mobile header was fixed, but the live preview proves it is NOT fixed.
CURRENT BUG:
On a 390–430px mobile viewport, the text:
TING TING
and
SAFETY REVIEW
overlap in the same horizontal row.
Do not tell me it is fixed unless the rendered preview visibly shows two separate rows.
Modify ONLY:
src/components/Header.tsx
and any directly necessary header CSS/classes.
DO NOT modify desktop.
==================================================
CREATE TWO DISTINCT RESPONSIVE HEADER STRUCTURES
==================================================
Do NOT use the same one-row JSX layout for desktop and mobile.
Create:
A. DESKTOP HEADER
visible only at desktop/tablet breakpoint
B. MOBILE HEADER
visible only below that breakpoint
For example, use an appropriate responsive breakpoint such as md.
The current approved desktop header must remain visually unchanged.
==================================================
2. MOBILE HEADER — EXACT STRUCTURE
For mobile, build TWO PHYSICAL ROWS in the DOM.
MOBILE ROW 1:
LEFT GROUP:
hamburger icon
Ting Ting logo
TING TING
RIGHT GROUP:
search icon
Maya Tan avatar
Layout behavior:
display: flex
align-items: center
justify-content: space-between
width: 100%
The left group itself must be:
display: flex
align-items: center
The right group itself must be:
display: flex
align-items: center
Do NOT render:
Maya Tan full name
Content Moderator
on mobile.
Do NOT render SAFETY REVIEW inside Row 1.
==================================================
3. MOBILE ROW 2
Create a separate second row below Row 1.
It contains ONLY:
SAFETY REVIEW
It must be horizontally centered across the full mobile header width.
Use:
text-align: center
width: 100%
Give it its own vertical spacing.
SAFETY REVIEW must NOT use absolute positioning that can overlap TING TING.
==================================================
4. IMPORTANT — REMOVE CONFLICTING POSITIONING
Inspect the current Header.tsx and remove/override any mobile styles such as:
absolute positioning
left: 50%
translateX(-50%)
shared single-row center title
fixed-width center columns
grid columns that force TING TING and SAFETY REVIEW into the same space
if those styles cause the current overlap.
On mobile:
TING TING belongs ONLY in Row 1.
SAFETY REVIEW belongs ONLY in Row 2.
They must never occupy the same line.
==================================================
5. MOBILE SEARCH
Keep the already-working search interaction.
Default state:
search icon only.
When search icon is tapped:
show the Search Case ID input in a clean mobile search row or compact overlay below the header.
Do NOT insert the expanded search field between TING TING and SAFETY REVIEW.
Closing search returns to the search icon.
==================================================
6. MOBILE PROFILE
Keep the already-working Maya Tan profile popover.
Only the avatar appears in the mobile header.
Tapping the avatar still opens:
Maya Tan
Employee ID
TT-SG-CM-02418
Role
Content Moderator
==================================================
7. TARGET MOBILE RESULT
At approximately 390px width, the rendered header must visually read:
ROW 1
☰ [TT LOGO] TING TING [SEARCH] [AVATAR]
ROW 2
codeCode
SAFETY REVIEW
There must be visible separation between the two rows.
No overlap.
No clipping.
No horizontal scrolling.
==================================================
8. DESKTOP PRESERVATION
Desktop must remain:
hamburger + logo + TING TING
centered SAFETY REVIEW
Search Case ID + Maya Tan + Content Moderator + avatar
Do not alter desktop spacing or layout.
==================================================
9. DO NOT TOUCH ANYTHING ELSE
Do NOT modify:
NewsCarousel
Review Queue
filters
case cards
footer
case data
Screen 2
colors
mobile carousel
mobile queue cards
==================================================
10. VERIFY AGAINST THE ACTUAL RENDER
After modifying Header.tsx:
Render the app at 390px width.
Confirm TING TING and SAFETY REVIEW are on separate rows.
Confirm no text overlaps.
Confirm hamburger works.
Confirm search works.
Confirm avatar/profile works.
Confirm desktop remains unchanged.
Do not report completion based only on code compilation.
Report the exact mobile JSX structure and responsive classes you changed in Header.tsx.
```

**What came back:** The overlap was fixed by splitting mobile into separate header rows, but that solved the bug in a way that no longer matched the approved single-row Stitch mobile design.

**What I changed next and why:** I asked for a Stitch-fidelity correction rather than accepting a technically working but visually different header.

---

### AI Studio 06 — SCREEN 1 MOBILE — EXACT STITCH FIDELITY CORRECTION

#### Prompt

```text
SCREEN 1 MOBILE — EXACT STITCH FIDELITY CORRECTION
The current desktop Screen 1 is APPROVED.
Modify ONLY the MOBILE Screen 1 layout.
Do NOT change any existing functionality.
Use the supplied approved Stitch Screen 1 Mobile code as the exact visual source of truth.
This task fixes only:
mobile header proportions
Review Queue heading/counter arrangement
mobile filter sizing
==================================================
MOBILE HEADER — RESTORE APPROVED SINGLE ROW
==================================================
The current two-row mobile header is functionally correct but does not match the approved Stitch mobile design.
Restore ONE compact horizontal mobile header row.
Exact content order:
LEFT:
hamburger icon
approved Ting Ting logo
TING TING
CENTER AREA:
SAFETY REVIEW
RIGHT:
search icon
Maya Tan avatar
Do NOT show:
Maya Tan full name
Content Moderator
on mobile.
CRITICAL:
Do not allow TING TING and SAFETY REVIEW to overlap.
Achieve this through mobile-specific sizing and spacing, NOT by creating a second header row.
Reduce mobile typography/gaps as needed.
TING TING should be compact.
SAFETY REVIEW should use restrained small uppercase typography.
Search remains icon-only until tapped.
Avatar remains compact and circular.
Target:
390–430px width.
The header should visually match the supplied approved Stitch mobile Screen 1.
==================================================
2. HEADER HEIGHT
Reduce the current mobile header height.
Do not leave a separate SAFETY REVIEW row.
Use approximately the same compact height and vertical padding shown in the approved Stitch mobile reference.
No overlap.
No horizontal overflow.
==================================================
3. REVIEW QUEUE HEADER
The current REVIEW QUEUE title is too large.
Reduce its mobile size to match the approved Stitch reference.
Keep:
REVIEW QUEUE
but use the approved restrained heading scale.
Do not make it a large desktop-style headline.
==================================================
4. COUNTERS — SAME ROW AS REVIEW QUEUE
Move:
10 Pending
0 Completed
onto the SAME horizontal row as REVIEW QUEUE.
Layout:
LEFT:
REVIEW QUEUE
RIGHT:
10 Pending 0 Completed
Use the compact approved counter treatment.
Counters should NOT look like large KPI pills.
Use:
small colored dot + label
Pending:
restrained red
Completed:
neutral/green treatment as approved.
Ensure the whole row fits comfortably at 390–430px.
==================================================
5. MOBILE FILTER ROW
The current filter controls are too large and POLICY wraps onto a second row.
Match the approved Stitch mobile layout.
Keep ALL FOUR controls on ONE ROW:
ALL
PRIORITY ▾
STATUS ▾
POLICY ▾
Use compact mobile-specific:
font size
horizontal padding
control height
gap
ALL:
approved deep espresso / near-black background
white text
PRIORITY / STATUS / POLICY:
white/light surface
thin warm border
compact down arrow
Do not create horizontal page overflow.
Do not allow POLICY to move to another row at approximately 390px width.
==================================================
6. SPACING
Reduce excess vertical spacing between:
news carousel
REVIEW QUEUE row
filter row
first case card
Match the tighter approved Stitch mobile rhythm.
Do not make the interface cramped, but remove the extra desktop-like spacing currently visible.
==================================================
7. PRESERVE ALL FUNCTIONALITY
Do NOT change the already-working:
ALL reset logic
Priority dropdown
Status dropdown
Policy dropdown
outside-click closing
search behavior
hamburger behavior
Maya profile behavior
Internal News carousel
Read More selected-case logic
footer
case data
This is VISUAL MOBILE FIDELITY ONLY.
==================================================
8. DO NOT MODIFY
Do NOT change:
desktop Screen 1
poster images
carousel design
case cards
thumbnail dimensions
footer
colors
case information
React state architecture
==================================================
9. VERIFY AGAINST STITCH
At 390px mobile width, verify visually:
Header is ONE row.
TING TING does not overlap SAFETY REVIEW.
Search and avatar fit on the right.
REVIEW QUEUE is compact.
10 Pending / 0 Completed appear on same row as REVIEW QUEUE.
ALL / PRIORITY / STATUS / POLICY all fit on one row.
POLICY does not wrap.
No horizontal overflow.
Existing interactions still work.
Do not claim completion based only on compilation.
Compare the rendered mobile preview against the supplied approved Stitch mobile reference before finishing.
```

**What came back:** The mobile-fidelity attempt did not finish reliably; AI Studio hit an execution/quota error after partial edits.

**What I changed next and why:** I stopped spending quota on small mobile visual differences and moved to the missing core workflow: Screen 2 and confirmation.

---

### AI Studio 07 — PROMPT 2 — IMPLEMENT SCREEN 2 + CONFIRMATION MODAL

#### Prompt

```text
PROMPT 2 — IMPLEMENT SCREEN 2 + CONFIRMATION MODAL
The existing Screen 1 is APPROVED FOR NOW.
DO NOT modify Screen 1 in this iteration.
Do not change:
header
carousel
Review Queue
filters
search
case cards
footer
hamburger
profile interaction
desktop or mobile Screen 1 layout
Use the already supplied APPROVED Stitch code for:
Case Review Workspace — Desktop
Case Review Workspace — Mobile
Confirmation Modal — Desktop
Confirmation Modal — Mobile
These Stitch exports are the exact VISUAL SOURCE OF TRUTH.
Do not redesign them.
==================================================
SCREEN 2 MUST BE DYNAMIC
==================================================
READ MORE on Screen 1 must now open Screen 2 for the exact clicked case.
Use the existing selectedCaseId React state.
Create ONE reusable CaseReview component.
Do NOT create ten different screens.
Do NOT hard-code Case 01.
All visible case information must come from the selected case dataset.
==================================================
2. USE CURRENT 10-CASE DATASET
For this implementation, use the exact case records already present in the current project.
Do not invent new cases, policies, creators or metadata.
Later I will provide final media assets and any final scenario-data corrections.
==================================================
3. SCREEN 2 VISUAL FIDELITY
Reproduce the supplied Stitch Screen 2 as faithfully as possible.
Preserve:
DESKTOP
approved Ting Ting header
navigation row
large left media/content panel
right assessment/action panel
ivory/white/beige surfaces
espresso typography
spacing
card dimensions
Final Action grid
Decision Basis
Moderator Note
Review & Confirm button
MOBILE
exact approved stacked layout from Stitch
do not simply shrink desktop
preserve approved ordering and spacing
Do NOT add new panels.
==================================================
4. HEADER
Screen 2 desktop header:
LEFT:
approved Ting Ting logo
TING TING
CENTER:
SAFETY REVIEW
RIGHT:
Maya Tan
Content Moderator
approved avatar
Do NOT add Search Case ID to Screen 2.
Use the supplied Stitch mobile Screen 2 header for mobile.
==================================================
5. CASE NAVIGATION
Implement:
← Back to Queue
[current Case ID]
PENDING REVIEW
Previous
Next Case →
Behavior:
Back to Queue:
return to Screen 1 without resetting Screen 1 filters/search.
Previous:
load previous case.
Next Case:
load next case.
Case 01:
Previous disabled.
Case 10:
Next Case disabled.
==================================================
6. LEFT MEDIA PANEL
Preserve the approved 9:16 media area from Stitch.
For now use the existing temporary case image/thumbnail.
Do not create new graphics.
Do NOT add:
transcript
AI timeline
waveform
comments
reports
likes
follower counts
creator history
Final videos will be added later.
==================================================
7. CREATOR INFORMATION
Show dynamically:
Creator handle
Caption
Duration · Language · Market
Then the compact metadata area:
QUEUE SOURCE
QUEUE AGE
PRIORITY
Use only the values already stored for the selected case.
==================================================
8. SYSTEM INFORMATION
Use exactly these labels:
Policy
Recommended action
Confidence
Detected signals
Do not rename them to:
Model Confidence
System Assessment
AI Risk
Policy Flagged
Why Flagged
Detected signals should show the current case's three stored signals.
==================================================
9. POLICY REFERENCE
Preserve the Stitch Policy Reference section.
Show:
[current policy ID] · [current policy name]
policy guidance text
View full policy →
For now, clicking View full policy should store/set the selected policy for the future Policy Center implementation.
Do not create a new Policy Center design.
==================================================
10. FINAL ACTION
Implement exactly SIX selectable actions:
NO ACTION
Content remains available
REMOVE CONTENT
Remove from platform
AGE-GATE 18+
Restrict to adult viewers
RESTRICT RECOMMENDATION
Limit from recommendation surfaces
ADD VIEWER WARNING
Apply contextual viewing notice
ESCALATE REVIEW
Send for specialist review
Rules:
no action preselected
system recommendation does NOT select an action
moderator may choose any option
only one option selected at a time
selected state must follow the approved Stitch visual styling
==================================================
11. DECISION BASIS
Implement the approved dropdown.
Initial text:
Select decision basis
Options:
POLICY BASIS
Physical Risk & Imitation
Regulated Goods & Services
Hate Speech & Hateful Behavior
Harassment & Bullying
Shocking & Graphic Content
Body Exposure & Sexualized Behaviors
Integrity & Authenticity
Suicide & Self-Harm
CONTEXT / DECISION BASIS
Staged / fictional context
Educational context
Professional activity
Cultural / ceremonial context
Public-interest context
Policy threshold not met
Insufficient evidence
Viewer protection without removal
Specialist review required
Behavior:
one selection only
selecting closes dropdown
clicking outside closes dropdown
works desktop and mobile
==================================================
12. MODERATOR NOTE
Moderator Note textarea:
editable
initially empty
NO placeholder
optional
preserve exact typed text
Do not prefill the example note shown in static Stitch designs.
==================================================
13. REVIEW & CONFIRM VALIDATION
REVIEW & CONFIRM →
requires:
Final Action
Decision Basis
Moderator Note remains optional.
If either required field is missing:
show restrained inline validation.
Do NOT use browser alerts.
==================================================
14. CONFIRMATION MODAL
When both required fields exist:
open the APPROVED Stitch Confirmation Modal over the CURRENT Screen 2.
The background must remain the exact current case, dimmed/blurred.
The modal must dynamically show:
CONFIRM REVIEW DECISION
Case ID
[current case]
FINAL ACTION
[current selected action]
DECISION BASIS
[current selected basis]
MODERATOR NOTE
[exact typed note]
IMPORTANT:
If Moderator Note is empty:
hide the entire Moderator Note section.
Do NOT show:
None
No note
—
==================================================
15. CANCEL
CANCEL:
close confirmation modal.
Return to the same Screen 2 state.
Preserve:
selected case
Final Action
Decision Basis
Moderator Note
Nothing resets.
==================================================
16. CONFIRM — FOR THIS ITERATION
Implement the complete visual confirmation sequence:
CONFIRM →
same modal changes to:
circular loading indicator
RECORDING ACTION
for approximately 1 second.
Then:
green check
ACTION RECORDED
for approximately 0.6–0.8 seconds.
IMPORTANT:
For this iteration, after success:
return to Screen 1.
Also store the completed decision in normal React in-memory state.
Update:
case status → Completed
recordedAction
recordedDecisionBasis
recordedModeratorNote
Pending / Completed counters should update automatically from state.
Example:
10 Pending / 0 Completed
→ after one confirmation →
9 Pending / 1 Completed
No backend.
No persistence.
Refresh still resets all cases.
==================================================
17. COMPLETED CASE CARD
When returning to Screen 1 after confirmation:
the exact completed case must change:
PENDING REVIEW
to the exact selected action, for example:
NO ACTION
REMOVE CONTENT
AGE-GATE 18+
RESTRICT RECOMMENDATION
ADD VIEWER WARNING
ESCALATE REVIEW
Use the approved GREEN completed-state treatment.
Change:
READ MORE →
to:
VIEW DECISION →
Do not change any other case.
==================================================
18. VIEW DECISION
Click VIEW DECISION:
open Screen 2 for that completed case.
Restore:
recorded Final Action
recorded Decision Basis
recorded Moderator Note if supplied
Top status:
show the recorded action rather than PENDING REVIEW.
Bottom button becomes:
DECISION RECORDED ✓
It must be non-clickable.
Do not allow duplicate confirmation.
==================================================
19. STATE RULE
Use React in-memory state only.
Do NOT use:
localStorage
sessionStorage
IndexedDB
database
backend
API
Browser refresh must reset:
10 Pending
0 Completed
==================================================
20. DO NOT INVENT FEATURES
Do NOT add:
transcript
creator analytics
follower counts
reports
audit history
timeline
model metrics
AI risk score
settings
additional moderation actions
appeal workflow
additional navigation
backend functionality
If it is not in the supplied Stitch code or this prompt, do not add it.
==================================================
21. PRESERVE SCREEN 1
CRITICAL:
Do not visually redesign Screen 1 while connecting this workflow.
Only the following Screen 1 values may change dynamically:
Pending counter
Completed counter
completed case status/action
READ MORE → VIEW DECISION
Everything else on Screen 1 must remain unchanged.
==================================================
22. VERIFY BEFORE COMPLETION
Test:
Case 01 Read More opens Case 01.
Case 04 Read More opens Case 04.
Case 08 Read More opens Case 08.
Back to Queue works.
Previous / Next works.
all six Final Actions selectable.
Decision Basis works.
Moderator Note works.
validation works.
Confirmation Modal uses current case.
Cancel preserves all values.
Confirm shows loader.
ACTION RECORDED appears.
returns to Screen 1.
counters update.
correct case becomes green completed state.
VIEW DECISION restores the decision.
refresh resets to 10 Pending / 0 Completed.
desktop follows supplied Stitch.
mobile follows supplied Stitch.
Screen 1 visual design remains unchanged.
When finished, report only:
files created/changed
interactions implemented
any placeholder remaining
any known issue
Do not implement Policy Center, About or Community Guidelines yet.
```

**What came back:** Screen 2 opened and the confirmation modal opened, so the core review flow existed. I did not fully verify every item AI Studio claimed at that point, and later I found the media height and scroll-position issues.

**What I changed next and why:** I accepted the core flow for the moment and moved to Policy Center, planning to come back to the usability issues later.

---

### AI Studio 08 — PROMPT 3 — IMPLEMENT SCREEN 4: POLICY CENTER ONLY

#### Prompt

```text
PROMPT 3 — IMPLEMENT SCREEN 4: POLICY CENTER ONLY
The current implementation of:
SCREEN 1 — REVIEW QUEUE
SCREEN 2 — CASE REVIEW WORKSPACE
SCREEN 3 — CONFIRMATION MODAL
is APPROVED FOR NOW.
DO NOT redesign, rebuild or modify those screens in this iteration.
Your task is ONLY to implement:
SCREEN 4 — TING TING POLICY CENTER
Use the already supplied APPROVED Stitch Policy Center Desktop and Policy Center Mobile HTML/code as the exact VISUAL SOURCE OF TRUTH.
Do not reinterpret the design.
==================================================
POLICY CENTER IS AN OVERLAY
==================================================
Policy Center is NOT a new routed page.
It is a large modal/overlay over the current Ting Ting screen.
When opened:
preserve the underlying app state
dim / softly blur the current page exactly as shown in Stitch
open the approved Policy Center interface
scrolling happens inside the Policy Center
closing returns to the exact underlying state
Do not reset:
selected case
filters
search
Final Action
Decision Basis
Moderator Note
Pending / Completed state
==================================================
2. TWO ENTRY MODES
Policy Center can open from TWO places.
ENTRY A — GENERAL POLICY ACCESS
From:
Screen 1 hamburger → Policy
OR
Screen 1 footer → Policy
Open the Policy Center in its general/default state.
Use the overview/default selection shown in the supplied approved Stitch design.
ENTRY B — CASE-SPECIFIC POLICY ACCESS
From:
Screen 2 → View full policy →
Open the SAME Policy Center component.
Automatically select and display the policy associated with the CURRENT selected case.
Example:
Current case policy:
Physical Risk & Imitation
→ Policy Center opens directly on:
PR-4.2
Physical Risk & Imitation
Do not require the moderator to search for it manually.
==================================================
3. EXACT POLICY INDEX
Use exactly these eight internal policy standards:
PR-4.2
Physical Risk & Imitation
HC-2.1
Hate Speech & Hateful Behavior
HB-3.4
Harassment & Bullying
RG-5.1
Regulated Goods & Services
SG-6.3
Shocking & Graphic Content
SX-7.2
Body Exposure & Sexualized Behaviors
IA-8.1
Integrity & Authenticity
SH-9.2
Suicide & Self-Harm
Do NOT invent:
additional policies
new policy IDs
misinformation categories
spam categories
child-safety categories
regulatory tiers
==================================================
4. CONTENT SOURCE
CRITICAL:
Use the EXACT policy wording, Purpose content, Review Considerations, Contextual Considerations and other text already contained in the supplied approved Stitch Policy Center code.
Do not rewrite the policy language.
Do not shorten it.
Do not generate replacement policy definitions.
The supplied Stitch code is the content source of truth.
==================================================
5. DESKTOP LAYOUT
Preserve the approved Stitch desktop structure.
LEFT SIDE:
POLICY CENTER
Ting Ting Safety Standards
Framework version 2026.09
Status: Active
Policy Index
Search policy field
List of the eight policies
RIGHT SIDE:
selected policy ID
status / revision information
policy title
Purpose
Review Considerations
Contextual Considerations
and all other approved content already present in the supplied Stitch design.
Preserve:
ivory / white background
beige highlights
espresso typography
current border styling
selected-policy treatment
spacing
modal proportions
Do not turn it into a generic dashboard.
==================================================
6. POLICY SELECTION
Clicking any policy in the desktop Policy Index:
→ updates the right-side content to that policy.
Only one policy selected at a time.
Selected item should use the approved Stitch active styling.
Do not navigate away.
==================================================
7. POLICY SEARCH
Activate the existing Search policy control.
Search should filter the eight policies by:
policy name
policy ID
Examples:
PR-4.2
→ Physical Risk & Imitation
graphic
→ Shocking & Graphic Content
harassment
→ Harassment & Bullying
Search is local only.
No external search.
If search is cleared:
restore all eight policy items.
==================================================
8. MOBILE VERSION
Use the supplied APPROVED Policy Center Mobile Stitch code.
Do NOT simply shrink the desktop two-column layout.
Preserve the approved mobile structure:
POLICY CENTER
Ting Ting Safety Standards
Framework v2026.09
ACTIVE
Policy selector/dropdown
Selected policy content
Purpose
Review Considerations
Contextual Considerations
and all substantive policy content.
The entire modal must scroll vertically.
==================================================
9. MOBILE POLICY SELECTOR
The mobile policy selector must allow switching between all eight policies.
Example:
PR-4.2 · Physical Risk & Imitation ▾
Tap:
→ show policy options
Select another:
→ close dropdown
→ load that policy content
No horizontal overflow.
==================================================
10. MOBILE CONTENT PARITY
CRITICAL:
Desktop and mobile can use different layouts.
But mobile must NOT lose substantive policy information.
Do not omit:
Purpose
Review Considerations
Contextual Considerations
status / revision information
approved explanatory content
If the content is longer than the phone viewport:
SCROLL.
Do not delete information just to make it fit.
==================================================
11. CLOSE BEHAVIOR
Activate the existing approved close control from Stitch.
X:
→ close Policy Center
→ return to the exact screen/state underneath.
Examples:
Screen 1 → Policy → X
→ return to Screen 1 at same scroll/filter/search state.
Screen 2 Case 05 → View full policy → X
→ return to Case 05 with any selected Final Action, Decision Basis and Moderator Note preserved.
Do not reset anything.
==================================================
12. DYNAMIC CASE POLICY CONNECTION
Use the current case's stored:
policyId
policy
when View full policy is clicked.
Do not hard-code PR-4.2.
If selected case uses:
SG-6.3
→ open Shocking & Graphic Content.
SX-7.2
→ open Body Exposure & Sexualized Behaviors.
HB-3.4
→ open Harassment & Bullying.
etc.
This must work dynamically.
==================================================
13. DO NOT MODIFY CASE DATA
Do NOT change any case scenarios or policy assignments in this prompt.
Some final case media/scenario information will be updated separately later.
For now, simply respect whatever policyId the current case dataset contains.
==================================================
14. STRICTLY DO NOT ADD
Do NOT add:
policy analytics
enforcement metrics
audit history
moderator statistics
legal citations
external websites
downloadable PDFs
edit policy controls
settings
version history
additional navigation
backend
API calls
Gemini integration
==================================================
15. PRESERVE EXISTING WORKING APP
Do not alter:
Screen 1 visuals
Screen 1 interactions
Screen 2 visuals
Screen 2 moderation controls
Screen 3 Confirmation Modal
Pending / Completed logic
News carousel
Hamburger layout
Maya Tan profile
Footer styling
This task adds Policy Center functionality only.
==================================================
16. TEST BEFORE COMPLETION
Verify:
Screen 1 hamburger → Policy opens Policy Center.
Screen 1 footer → Policy opens Policy Center.
General access opens default/overview state.
Screen 2 View full policy opens Policy Center.
Case-specific access selects correct policy automatically.
Desktop policy selection works.
Policy search works.
Mobile selector works.
All eight policies are available.
Mobile contains full substantive content.
Policy Center scrolls internally.
X returns to exact previous Screen 1 state.
X returns to exact previous Screen 2 state.
Screen 2 draft values remain preserved after closing.
No other existing screen changes visually.
When complete, report only:
files/components created or changed
Policy Center interactions implemented
any known issue
confirmation that Screens 1–3 were not redesigned
Do NOT implement About or Community Guidelines in this iteration.
```

**What came back:** Policy Center opened and the case-specific policy access worked, but general Policy access was opening PR-4.2 instead of the Framework Overview.

**What I changed next and why:** Because the overlay was usable and quota mattered, I continued to About and kept the general-entry issue for a later surgical fix.

---

### AI Studio 09 — PROMPT 4 — IMPLEMENT ABOUT TING TING OVERLAY ONLY

#### Prompt

```text
PROMPT 4 — IMPLEMENT ABOUT TING TING OVERLAY ONLY
The current implementation of:
Screen 1 — Review Queue
Screen 2 — Case Review Workspace
Screen 3 — Confirmation Modal
Screen 4 — Policy Center
is APPROVED FOR NOW.
DO NOT redesign or modify those screens in this iteration.
Your task is ONLY to implement:
ABOUT TING TING
Use the already supplied APPROVED Stitch About Desktop and About Mobile HTML/code as the exact VISUAL SOURCE OF TRUTH.
Do not reinterpret the design.
==================================================
ABOUT IS AN OVERLAY
==================================================
About Ting Ting is NOT a routed page.
It opens as a large modal / overlay above Screen 1.
Entry points:
Screen 1 hamburger → About
Screen 1 footer → About
When opened:
preserve Screen 1 state
preserve scroll position
softly dim / blur Screen 1 underneath
open the approved About Ting Ting overlay
content scrolls inside the overlay if required
Closing the overlay returns to the exact previous Screen 1 state.
==================================================
2. SOURCE-OF-TRUTH RULE
Use the supplied Stitch About code for:
modal dimensions
desktop composition
mobile composition
typography
spacing
founder image placement
beige / ivory / white surfaces
espresso typography
section hierarchy
Global Presence styling
close button
responsive behavior
Do NOT redesign it into:
a corporate dashboard
Trust & Safety documentation
policy documentation
an operations page
an annual report
This is the ABOUT experience of a global short-video BRAND.
==================================================
3. EXACT ABOUT CONTENT STRUCTURE
Use ONLY these major sections:
Brand Hero
Who We Are
Our Mission
What We Believe
Global Presence
Closing Brand Line
Do NOT add moderation workflow sections.
==================================================
4. BRAND HERO
Use:
TING TING
Short video.
Global expression.
Responsible discovery.
Preserve the approved Stitch hero composition.
Desktop should include the approved fictional founder image on the right.
Mobile must ALSO include the same founder image.
Do not omit the founder on mobile.
==================================================
5. FOUNDER
Use exactly:
Elon Srinivasan
Founder & CEO
The founder is a FICTIONAL person.
Use the same founder image already supplied in the approved Stitch design.
Character appearance:
Indian male
approximately 50–58 years old
dark brown skin
mature professional appearance
contemporary technology-company founder presence
CRITICAL:
Do NOT generate a different founder.
Do NOT replace the supplied founder image.
Desktop and mobile must use the SAME person/image.
Do not add:
biography
education
previous employers
achievements
age
social links
quotes
==================================================
6. WHO WE ARE
Heading:
WHO WE ARE
Use exactly:
Ting Ting is a global short-form video platform for creativity, entertainment, learning and cultural expression.
People use Ting Ting to discover ideas, share moments and connect through video.
Do not expand this into additional paragraphs.
==================================================
7. OUR MISSION
Heading:
OUR MISSION
Use exactly:
To make creative expression easy to discover, share and enjoy across cultures.
Preserve the visually prominent treatment from Stitch.
==================================================
8. WHAT WE BELIEVE
Heading:
WHAT WE BELIEVE
Use exactly four principles:
CREATIVITY
Give people space to create, experiment and share ideas in their own voice.
COMMUNITY
Help people find shared interests, conversations and communities through video.
RESPONSIBILITY
Build experiences that encourage thoughtful participation and long-term trust.
GLOBAL CONNECTION
Make it easier for ideas, culture and creativity to move across borders.
Use the approved Stitch visual treatment.
These are BRAND principles.
Do NOT convert them into moderation or policy principles.
==================================================
9. GLOBAL PRESENCE
Heading:
GLOBAL PRESENCE
Use:
Ting Ting operates across major creative and technology hubs around the world.
Show exactly these ten locations:
ASIA PACIFIC
Singapore — Headquarters
Tokyo
Seoul
Sydney
EUROPE
London
Berlin
AMERICAS / MIDDLE EAST
New York
Toronto
São Paulo
Dubai
Do not invent any additional city.
Do not add addresses.
Do not add employee counts.
==================================================
10. CLOSING BRAND LINE
Use exactly:
TING TING TECHNOLOGIES
Building a platform where creativity can travel further.
Preserve the understated approved closing treatment from Stitch.
==================================================
11. REMOVE / DO NOT ADD INTERNAL MODERATION CONTENT
ABOUT must NOT contain:
Safety Review explanation
moderation treatments
Final Action
Decision Basis
Moderator Note
automated moderation
human review workflow
Policy Center content
Safety Standards
enforcement procedures
moderation metrics
Trust & Safety operations
audit information
Do NOT add:
Dual Core
operational pillars
company statistics
CEO biography
founding year
employee counts
revenue
investor information
careers
press room
leadership team
company history timeline
awards
ESG
news feed
Keep About concise and brand-focused.
==================================================
12. CLOSE BEHAVIOR
Use the approved X close control.
X:
→ close About overlay
→ return to exact previous Screen 1 state
→ preserve filters
→ preserve search
→ preserve scroll position
→ preserve Pending / Completed state
Escape key support is acceptable if already part of modal architecture.
Do NOT add:
Back
Done
Save
Continue
Confirm
==================================================
13. DESKTOP
Use the approved Stitch desktop About layout.
Maintain:
brand-led hero
founder image
founder name / role
editorial spacing
readable body text
principle layout
Global Presence section
internal scrolling if content exceeds viewport
Do not turn every section into a bordered card.
==================================================
14. MOBILE
Use the supplied approved Stitch Mobile About code.
Do NOT simply shrink desktop.
Mobile content order:
ABOUT TING TING
TING TING hero
tagline
founder image
Elon Srinivasan
Founder & CEO
WHO WE ARE
OUR MISSION
WHAT WE BELIEVE
GLOBAL PRESENCE
closing brand line
Mobile must contain the SAME substantive content as desktop.
Do not remove the founder image.
Do not remove sections to shorten the page.
Use vertical scrolling.
==================================================
15. RESPONSIVE REQUIREMENTS
At approximately 390–430px mobile width:
no horizontal overflow
founder image fits cleanly
no face cropping
readable typography
principles stack cleanly
regional office lists stack vertically
X remains easily tappable
Preserve supplied mobile spacing as closely as possible.
==================================================
16. TRIGGERS
Activate:
Screen 1 hamburger → About
Screen 1 footer → About
Both must open the SAME reusable About component.
Do not duplicate the overlay implementation.
==================================================
17. PRESERVE WORKING APP
Do NOT modify:
Screen 1 visuals
Screen 1 interactions
Screen 2
Screen 3 Confirmation Modal
Screen 4 Policy Center
case data
Pending / Completed logic
News carousel
filters
search
Maya Tan profile
footer styling
Only wire the existing About triggers to the approved About overlay.
==================================================
18. TEST BEFORE COMPLETION
Verify:
Hamburger → About opens overlay.
Footer → About opens same overlay.
Screen 1 remains visible underneath.
X closes overlay.
Previous Screen 1 state is preserved.
Desktop matches supplied Stitch About design.
Mobile matches supplied Stitch About design.
Elon Srinivasan image appears desktop.
Same founder appears mobile.
Founder name is Elon Srinivasan.
Role is Founder & CEO.
Who We Are exact text appears.
Mission exact text appears.
Exactly four brand principles appear.
Exactly ten global offices appear.
No moderation workflow information appears.
Screens 1–4 remain unchanged.
When finished, report only:
files/components created or changed
About interactions implemented
any known issue
confirmation that Screens 1–4 were not redesigned
DO NOT implement Community Guidelines yet.
```

**What came back:** The About overlay opened and worked in the running app, and I did not find a blocking issue at that stage.

**What I changed next and why:** I moved to Community Guidelines.

---

### AI Studio 10 — PROMPT 5 — IMPLEMENT COMMUNITY GUIDELINES OVERLAY ONLY

#### Prompt

```text
PROMPT 5 — IMPLEMENT COMMUNITY GUIDELINES OVERLAY ONLY
The current implementation of:
Screen 1 — Review Queue
Screen 2 — Case Review Workspace
Screen 3 — Confirmation Modal
Screen 4 — Policy Center
About Ting Ting Overlay
is APPROVED FOR NOW.
DO NOT redesign or modify those screens in this iteration.
Your task is ONLY to implement:
TING TING COMMUNITY GUIDELINES
Use the already supplied APPROVED Stitch Community Guidelines Desktop and Mobile HTML/code as the exact VISUAL SOURCE OF TRUTH.
Do not reinterpret the design.
==================================================
COMMUNITY GUIDELINES IS AN OVERLAY
==================================================
Community Guidelines is NOT a routed page.
It opens as a large modal/overlay above Screen 1.
Entry points:
Screen 1 hamburger → Community Guidelines
Screen 1 footer → Community Guidelines
When opened:
preserve Screen 1 state
preserve scroll position
softly dim / blur Screen 1 underneath
open the approved Community Guidelines overlay
content scrolls inside the overlay
Closing returns to the exact previous Screen 1 state.
==================================================
2. PUBLIC-FACING PURPOSE
Community Guidelines is PUBLIC-FACING platform guidance.
It is NOT the internal Policy Center.
Policy Center:
internal
operational
moderator-focused
policy IDs and detailed review logic
Community Guidelines:
public
creator/user-facing
accessible
brand-consistent
clear language
Do NOT make Community Guidelines look like internal moderation software.
==================================================
3. SOURCE-OF-TRUTH RULE
Use the supplied Stitch Community Guidelines code for:
modal dimensions
desktop layout
mobile layout
typography
section hierarchy
spacing
beige / ivory / white surfaces
espresso typography
category navigation
close button
responsive behavior
exact text content
Do NOT rewrite or summarize the supplied guideline wording.
Do NOT create alternative categories.
==================================================
4. HERO
Use the approved hero exactly as supplied in Stitch.
Key visible content:
COMMUNITY GUIDELINES
Ting Ting Community Standards
CREATE FREELY.
PARTICIPATE RESPONSIBLY.
Preserve the supporting introduction from the supplied Stitch code.
Also preserve the approved:
Context matters.
callout / highlighted message.
Do not invent another slogan.
==================================================
5. COMMUNITY PRINCIPLES
Use exactly these four public-facing principles:
SAFETY
RESPECT
AUTHENTICITY
AGE-APPROPRIATE PARTICIPATION
Use the exact approved descriptions already present in Stitch.
Do NOT add principle numbering unless it is present in the approved Stitch design.
Do NOT convert these into internal moderator procedures.
==================================================
6. EXACT 10 GUIDELINE CATEGORIES
Use exactly these ten categories:
Hate Speech & Hateful Behavior
Harassment & Bullying
Physical Risk & Imitation
Shocking & Graphic Content
Body Exposure & Sexualized Behaviors
Regulated Goods & Services
Integrity & Authenticity
Suicide & Self-Harm
Privacy & Personal Safety
Authentic Platform Participation
Do NOT add:
misinformation
spam
child safety
violence
illegal activity
any other categories
unless they are already contained within the wording of one of the approved ten categories.
==================================================
7. CATEGORY CONTENT
Use the exact content already contained in the approved Stitch Community Guidelines code.
For each category, preserve:
heading
explanatory paragraph
examples / bullet points
contextual exceptions where present
public-facing tone
Do not shorten mobile content.
Do not replace wording with generated policy language.
==================================================
8. PHYSICAL RISK & IMITATION
Preserve the approved category wording from Stitch.
CRITICAL:
Do NOT introduce the previously prohibited word that was removed during Stitch refinement.
Use the exact approved Stitch wording only.
==================================================
9. HOW TING TING MAY RESPOND
Preserve the approved section:
HOW TING TING MAY RESPOND
Use exactly these six informational platform treatments:
NO ACTION
REMOVE CONTENT
AGE-GATE 18+
RESTRICT RECOMMENDATION
ADD VIEWER WARNING
ESCALATE REVIEW
These are informational here.
They are NOT clickable moderation controls.
Do not style them like Screen 2 Final Action buttons.
Use the exact approved explanatory text from Stitch.
==================================================
10. CONTEXTUAL REVIEW
Preserve:
CONTEXTUAL REVIEW
and the full approved content.
This section should explain that context may include factors such as:
creator intent
surrounding dialogue
captions/descriptions
staged context
educational purpose
professional context
cultural context
public-interest value
likelihood of imitation
severity of possible harm
Use the supplied Stitch wording.
==================================================
11. REPORTING CONTENT
Preserve:
REPORTING CONTENT
Use the exact approved text from Stitch.
This is informational only.
Do NOT build:
report form
report workflow
report submission modal
user-report database
==================================================
12. APPEALS
Preserve:
APPEALS
Use the exact approved informational text from Stitch.
Do NOT create:
appeal form
appeal queue
appeals dashboard
creator account workflow
==================================================
13. HOW WE APPLY THESE GUIDELINES
Preserve the approved closing principles:
CONTEXT MATTERS
PROPORTIONAL RESPONSE
CONSISTENCY MATTERS
UNCERTAINTY SHOULD BE REVIEWED
Use the exact supplied Stitch wording.
==================================================
14. FRAMEWORK INFORMATION
At the end, preserve the approved framework information:
TING TING COMMUNITY GUIDELINES
Framework version: 2026.09
Status: Active
Last updated: September 2026
Do not add legal disclaimers or external links.
==================================================
15. DESKTOP LAYOUT
Use the approved Stitch desktop Community Guidelines layout.
Preserve:
large modal proportions
editorial public-facing style
category navigation/index
ivory/white/beige palette
espresso text
generous spacing
content scrolling
close control
Do NOT make it visually identical to Policy Center.
Community Guidelines should feel more public-facing and editorial.
==================================================
16. CATEGORY NAVIGATION — DESKTOP
Activate the existing category navigation from Stitch.
Clicking a category should:
→ navigate/scroll/select that guideline section within the same overlay
Do not navigate to a separate page.
Use the existing Stitch category treatment.
==================================================
17. MOBILE VERSION
Use the supplied APPROVED Community Guidelines Mobile Stitch code.
Do NOT simply shrink desktop.
Preserve the mobile vertical flow.
Use either the existing approved:
guideline selector dropdown
OR
accordion structure
whichever exists in the supplied Stitch code.
Do not invent a different interaction.
==================================================
18. MOBILE CONTENT PARITY
CRITICAL:
Mobile and desktop may have different layouts.
But mobile must contain the SAME substantive content.
Do NOT remove:
any of the 10 categories
How Ting Ting May Respond
Contextual Review
Reporting Content
Appeals
How We Apply These Guidelines
framework information
If content exceeds the viewport:
scroll vertically.
Do not shrink typography excessively.
==================================================
19. CLOSE BEHAVIOR
Use the approved X close control.
X:
→ close Community Guidelines
→ return to exact previous Screen 1 state
→ preserve filters
→ preserve search
→ preserve scroll position
→ preserve Pending / Completed state
Escape key support is acceptable if already part of modal architecture.
Do NOT add:
Back
Done
Save
Confirm
Continue
==================================================
20. TRIGGERS
Activate:
Screen 1 hamburger → Community Guidelines
Screen 1 footer → Community Guidelines
Both must open the SAME reusable Community Guidelines component.
Do not duplicate implementations.
==================================================
21. STRICTLY DO NOT ADD
Do NOT add:
internal policy IDs
moderator language
audit history
policy metrics
external links
report form
appeal form
settings
legal documents
Privacy
Terms
careers
account controls
backend
APIs
Gemini calls
==================================================
22. PRESERVE WORKING APP
Do NOT modify:
Screen 1
Screen 2
Screen 3
Policy Center
About Ting Ting
News carousel
filters
search
Maya Tan profile
Pending / Completed logic
case data
footer styling
This task adds Community Guidelines only.
==================================================
23. TEST BEFORE COMPLETION
Verify:
Hamburger → Community Guidelines opens overlay.
Footer → Community Guidelines opens same overlay.
Screen 1 remains visible underneath.
X closes overlay.
Screen 1 state is preserved.
Desktop matches supplied Stitch Community Guidelines design.
Mobile matches supplied Stitch design.
Exactly four community principles appear.
Exactly ten categories exist.
Desktop category navigation works.
Mobile category navigation works.
Full guideline content is scrollable.
How Ting Ting May Respond appears.
Contextual Review appears.
Reporting Content appears.
Appeals appears.
How We Apply These Guidelines appears.
Framework information appears.
No internal moderation workflow is added.
Screens 1–4 and About remain unchanged.
When complete, report only:
files/components created or changed
Community Guidelines interactions implemented
any known issue
confirmation that existing screens were not redesigned
Do NOT create any new screens after this.
```

**What came back:** Community Guidelines opened and worked, but when I manually scrolled the right panel the left Table of Contents did not follow the section I was actually reading.

**What I changed next and why:** I kept the design and asked only for scroll synchronization because the problem was interaction state, not layout.

---

### AI Studio 11 — COMMUNITY GUIDELINES — SCROLL SYNC FIX ONLY

#### Prompt

```text
COMMUNITY GUIDELINES — SCROLL SYNC FIX ONLY
The current Community Guidelines overlay is APPROVED.
Do NOT redesign or modify its visual layout.
Modify ONLY the synchronization between:
LEFT:
Table of Contents / active guideline item
and
RIGHT:
scrollable Community Guidelines content
==================================================
CURRENT BUG
The left Table of Contents only updates when a user clicks a guideline.
If the user manually scrolls the RIGHT content panel to another guideline section, the LEFT highlighted/checked guideline remains on the old section.
Example:
Right content is currently showing:
04 — Shocking & Graphic Content
but left navigation still highlights:
05 — Body Exposure & Sexualized Behaviors
This is incorrect.
==================================================
REQUIRED BEHAVIOR — SCROLL SPY
Implement automatic scroll-position tracking for the RIGHT content panel.
Whenever the user manually scrolls through the content:
the guideline section currently active / nearest the top of the visible content area must automatically become the active item in the LEFT Table of Contents.
Examples:
Right panel reaches:
01 Hate Speech & Hateful Behavior
→ left item 1 becomes active
04 Shocking & Graphic Content
→ left item 4 becomes active
08 Suicide & Self-Harm
→ left item 8 becomes active
10 Authentic Platform Participation
→ left item 10 becomes active
The previous active item must lose its highlight/check.
==================================================
LEFT NAVIGATION BEHAVIOR
The active left item should continue using the existing approved styling:
highlighted beige background
bold/stronger text
check mark if currently used
Only ONE item may be active at a time.
Do NOT change the current visual styling.
==================================================
CLICKING LEFT NAVIGATION
Preserve the existing behavior:
click a left Table of Contents item
→ smoothly scroll the RIGHT content panel to that section
After the scroll completes:
→ that same left item remains active
==================================================
MANUAL RIGHT-PANEL SCROLL
When the user scrolls manually:
the active left item must update automatically.
Use a reliable implementation such as:
IntersectionObserver scoped to the right scroll container
or an equivalent scroll-position tracking implementation.
IMPORTANT:
Observe the RIGHT MODAL CONTENT SCROLL CONTAINER, not the browser window.
==================================================
SECTION DETECTION
Each guideline section should have a stable section ref/id.
Determine active section based on which section is entering/nearest the upper portion of the visible right content panel.
Avoid rapid flickering between two categories when the user is between sections.
Use an appropriate threshold/rootMargin so the active state feels stable.
==================================================
SIDEBAR VISIBILITY
If the active Table of Contents item moves outside the visible sidebar area:
automatically scroll the LEFT navigation just enough to keep the active item visible.
Do NOT jump the entire sidebar unnecessarily.
Use subtle behavior.
==================================================
OTHER SECTIONS
The same synchronization should also work for other Table of Contents entries where applicable, including:
Overview & Principles
How Ting Ting May Respond
Contextual Review
Reporting & Appeals
How We Apply These Guidelines
If one of those sections is currently visible in the right panel, highlight its corresponding left navigation item.
==================================================
MOBILE
Do not alter the approved mobile design.
If the mobile category selector currently displays the active section name, update that selected/displayed value as the user scrolls through sections.
Do NOT automatically open the mobile dropdown while scrolling.
==================================================
STRICT PRESERVATION
Do NOT modify:
Community Guidelines text
colors
layout
typography
section order
sidebar design
modal dimensions
close behavior
Screen 1
Screen 2
Confirmation Modal
Policy Center
About Ting Ting
any case data
This is ONLY a scroll synchronization fix.
==================================================
VERIFY
Test specifically:
Click item 5 → right panel scrolls to section 5.
Manually scroll upward to section 4 → left automatically changes to item 4.
Manually scroll to section 7 → left automatically changes to item 7.
Scroll to the final sections → corresponding left navigation updates.
Only one item is active at a time.
Clicking navigation still works.
No visual design changes occurred.
After completion, report only:
component/file changed
method used for scroll tracking
confirmation that manual scrolling and sidebar highlighting are synchronized
```

**What came back:** The scroll-sync fix worked: manual scrolling updated the active left item and the existing navigation still worked.

**What I changed next and why:** I accepted that fix and moved on to the final case scenarios and real media.

---

### AI Studio 12 — PROMPT 6 — FINAL CASE DATA + REAL MEDIA INTEGRATION

#### Prompt

```text
PROMPT 6 — FINAL CASE DATA + REAL MEDIA INTEGRATION
The current Ting Ting application screens and interactions are APPROVED FOR NOW.
DO NOT redesign or restructure any UI.
Preserve exactly:
Screen 1 Review Queue
Screen 2 Case Review Workspace
Screen 3 Confirmation Modal
Screen 4 Policy Center
About Ting Ting
Community Guidelines
Hamburger Menu
Maya Tan Profile
News Carousel
Filters
Search
Footer
Pending / Completed workflow
View Decision workflow
all desktop/mobile layouts
This iteration is ONLY for:
replacing temporary case thumbnails with the 10 uploaded final thumbnails
replacing temporary Screen 2 media with the 10 uploaded final videos
updating the case dataset so the metadata accurately matches the FINAL 10 scenarios
==================================================
FINAL MEDIA FILES
==================================================
I have uploaded exactly these 20 assets:
case-01-video.mp4
case-01-thumb.png
case-02-video.mp4
case-02-thumb.png
case-03-video.mp4
case-03-thumb.png
case-04-video.mp4
case-04-thumb.png
case-05-video.mp4
case-05-thumb.png
case-06-video.mp4
case-06-thumb.png
case-07-video.mp4
case-07-thumb.png
case-08-video.mp4
case-08-thumb.png
case-09-video.mp4
case-09-thumb.png
case-10-video.mp4
case-10-thumb.png
Use these exact uploaded files.
Do NOT:
regenerate media
create placeholders
substitute stock imagery
modify the files
create alternate thumbnails
use remote URLs
Copy/store them as local frontend assets if necessary.
==================================================
2. MEDIA MAPPING
Map exactly:
Case 01
thumbnail → case-01-thumb.png
video → case-01-video.mp4
Case 02
thumbnail → case-02-thumb.png
video → case-02-video.mp4
Continue identically through Case 10.
Never mismatch case numbers.
==================================================
3. SCREEN 1 THUMBNAILS
Each Review Queue card must use its matching final thumbnail.
Examples:
Case 01 card:
case-01-thumb.png
Case 04 card:
case-04-thumb.png
Case 10 card:
case-10-thumb.png
Preserve the current approved 9:16 card image dimensions and crop behavior.
Use:
object-fit: cover
Do not stretch images.
Do not change card dimensions.
==================================================
4. SCREEN 2 REAL VIDEO
Replace the temporary media area with the matching real MP4.
The Screen 2 media player must dynamically use the selected case's video.
Example:
selectedCaseId = Case 05
→ play case-05-video.mp4
selectedCaseId = Case 09
→ play case-09-video.mp4
Use ONE reusable video player.
Do not hard-code Case 01.
==================================================
5. VIDEO PLAYER
Preserve the approved Stitch player appearance as closely as possible.
Use normal HTML5 video playback.
Required:
matching thumbnail as poster frame
play
pause
scrub/progress bar
mute/unmute
current time / duration
fullscreen if already supported by the approved UI
playsInline on mobile
Do NOT autoplay with sound.
Do NOT loop automatically unless already specified by the approved design.
Do NOT use:
external video player libraries
streaming services
backend video processing
external URLs
==================================================
6. FINAL 10 SCENARIOS
Update the case dataset to reflect the FINAL scenarios below.
Preserve the existing Case IDs and creator handles unless explicitly changed below.
CASE 01
Scenario:
Film-school students performing a realistic fight rehearsal using replica swords.
caseId:
TT-SG-260905-018427
creator:
@reelcraft.sg
caption:
Weekend rehearsal 🎬 Running through the fight sequence before tomorrow’s shoot.
policyId:
PR-4.2
policy:
Physical Risk & Imitation
priority:
Top
queueAge:
3m
queueSource:
AI Detected
recommendedAction:
No Action
confidence:
86%
detectedSignals:
Blade-like objects
Repeated striking motion
Close-range physical interaction
policyGuidance:
Content involving conduct with substantial physical-harm potential may require enforcement. Staged, professional, educational or cultural context may alter the applicable treatment.
CASE 02
Scenario:
Two adult Indian college students arguing outside campus. The woman slaps the man, he slaps her back, and nearby students intervene.
caseId:
TT-SG-260905-018463
creator:
@oddsafterdark
caption:
Things got out of hand outside campus today.
policyId:
HB-3.4
policy:
Harassment & Bullying
priority:
Top
queueAge:
8m
queueSource:
AI Detected
recommendedAction:
Remove Content
confidence:
88%
detectedSignals:
Physical assault
Reciprocal striking
Aggressive confrontation
policyGuidance:
Targeted harassment, intimidation and physical aggression may require enforcement depending on severity, context and risk of further harm.
CASE 03
Scenario:
Two young Indian men racing motorcycles at high speed on a South Indian public road without helmets.
caseId:
TT-SG-260905-018519
creator:
@classroomcontext
caption:
Late evening run. Nobody was catching us. 🏍️
policyId:
PR-4.2
policy:
Physical Risk & Imitation
priority:
Top
queueAge:
2h 10m
queueSource:
AI Detected
recommendedAction:
Remove Content
confidence:
93%
detectedSignals:
High-speed motorcycle behavior
Public-road racing
No protective equipment
policyGuidance:
Content involving dangerous conduct with substantial physical-harm potential may require enforcement, particularly when performed in uncontrolled public environments.
CASE 04
Scenario:
Intense South Indian street-fight arena with powerful punches and visible minor facial injury.
caseId:
TT-IN-260905-020174
creator:
@ringsidecut
caption:
Final round. Nobody was backing down.
policyId:
SG-6.3
policy:
Shocking & Graphic Content
priority:
Medium
queueAge:
4h 35m
queueSource:
AI Detected
recommendedAction:
Age-Gate 18+
confidence:
84%
detectedSignals:
Repeated powerful physical impact
Visible facial injury
Blood-related visual cue
policyGuidance:
Graphic or injury-related material may require restrictions depending on severity, presentation and contextual value.
CASE 05
Scenario:
Indian heritage performance involving choreographed ceremonial-blade movements.
caseId:
TT-SG-260905-021308
creator:
@heritage.stage
caption:
Heritage night performance ✨ A tradition passed through generations.
policyId:
PR-4.2
policy:
Physical Risk & Imitation
priority:
Low
queueAge:
15h 05m
queueSource:
AI Detected
recommendedAction:
No Action
confidence:
84%
detectedSignals:
Bladed objects
Coordinated weapon movement
Close-proximity performance
policyGuidance:
Staged, professional, educational or cultural context may alter the treatment of content involving potentially dangerous objects or actions.
CASE 06
Scenario:
Road-accident aftermath with a conscious injured person receiving assistance from a responder.
caseId:
TT-SG-260905-022441
creator:
@streetwatch.sg
caption:
Accident near the junction. Emergency help is already here.
policyId:
SG-6.3
policy:
Shocking & Graphic Content
priority:
Top
queueAge:
21m
queueSource:
User Report
recommendedAction:
Add Viewer Warning
confidence:
82%
detectedSignals:
Injured person
Road-collision scene
Visible distress
policyGuidance:
Real-world injury content may warrant viewer protection depending on graphic severity, public-interest value and presentation.
CASE 07
Scenario:
Professional motorcycle rider performing a controlled wheelie on a closed training track with protective equipment.
caseId:
TT-IN-260905-023086
creator:
@trackline.rider
caption:
Closed-track training session. Months of practice behind this one. 🏍️
policyId:
PR-4.2
policy:
Physical Risk & Imitation
priority:
Medium
queueAge:
7h 45m
queueSource:
AI Detected
recommendedAction:
No Action
confidence:
85%
detectedSignals:
Motorcycle stunt
Elevated front wheel
High-speed maneuver
policyGuidance:
Professional or controlled activity with appropriate safety equipment and contextual signals may receive different treatment from uncontrolled imitation-worthy conduct.
CASE 08
Scenario:
Glamorous adult Indian woman dancing at a private North Indian party while adult men cheer and throw money around her.
caseId:
TT-SG-260905-024197
creator:
@afterhours.move
caption:
Private celebration ✨ Friday night energy.
policyId:
SX-7.2
policy:
Body Exposure & Sexualized Behaviors
priority:
Medium
queueAge:
10h 20m
queueSource:
AI Detected
recommendedAction:
Restrict Recommendation
confidence:
83%
detectedSignals:
Sexualized movement pattern
Adult private-party context
Suggestive presentation
policyGuidance:
Sexualized adult presentation may warrant audience or recommendation controls depending on explicitness, framing and context.
CASE 09
Scenario:
First-aid training demonstration using a simulated wound and fake blood.
caseId:
TT-SG-260905-025634
creator:
@medskills.lab
caption:
Basic wound-care demonstration for first-aid trainees.
policyId:
SG-6.3
policy:
Shocking & Graphic Content
priority:
Low
queueAge:
22h 40m
queueSource:
AI Detected
recommendedAction:
No Action
confidence:
74%
detectedSignals:
Wound-like imagery
Medical treatment action
Blood-like visual material
policyGuidance:
Medical, educational or simulated graphic material may receive different treatment when context clearly establishes instructional purpose and limited severity.
CASE 10
Scenario:
Young Indian creator performs a high-risk urban jump and then encourages viewers to imitate it.
caseId:
TT-SG-260905-026712
creator:
@urbanstuntlab
caption:
Think you can copy this? Your turn. 😈
policyId:
PR-4.2
policy:
Physical Risk & Imitation
priority:
Top
queueAge:
54m
queueSource:
AI Detected
recommendedAction:
Remove Content
confidence:
94%
detectedSignals:
High-impact stunt behavior
Explicit imitation encouragement
No visible controlled environment
policyGuidance:
High-risk conduct presented in a way that encourages imitation may require enforcement, particularly when no controlled environment or meaningful safety measures are visible.
==================================================
7. DURATION / LANGUAGE / MARKET
Use the ACTUAL media duration if the browser can obtain it from the video metadata.
Do not invent a false duration.
Display duration in mm:ss.
For language / market:
Case 01:
English · India
Case 02:
English · India
Case 03:
English · India
Case 04:
English · India
Case 05:
English · India
Case 06:
English · Singapore
Case 07:
English · India
Case 08:
English · India
Case 09:
English · Singapore
Case 10:
English · India
==================================================
8. IMPORTANT DATA RULE
The case dataset must now match the actual uploaded media.
Delete / replace old scenario-specific data that no longer applies.
In particular REMOVE old Case 02 betting content:
Regulated Goods & Services assignment
betting odds
off-platform solicitation
commercial call-to-action
betting caption
And REMOVE old Case 03 classroom content:
Hate Speech & Hateful Behavior assignment
teacher/classroom caption
hate terminology signals
educational classroom scenario
Do not leave obsolete data hidden elsewhere in the current case records.
==================================================
9. POLICY FILTER
The Screen 1 Policy filter must continue working against the updated case policies.
Do not remove any existing policy option from the dropdown merely because no current case uses it.
Keep all eight policy categories available.
==================================================
10. COMPLETED-STATE LOGIC
Do not change the existing moderation workflow.
All cases still begin:
PENDING REVIEW
System Recommended Action is supporting information only.
The moderator may still choose ANY of the six Final Actions.
Do not preselect recommendations.
==================================================
11. MEDIA ERROR HANDLING
If an uploaded video cannot load:
do not replace it with generated content.
Keep the matching thumbnail visible and fail gracefully.
Do not break Screen 2.
No external fallback URL.
==================================================
12. PERFORMANCE
Do not preload all ten full videos on Screen 1.
Screen 1 should load thumbnails only.
Load a case video when Screen 2 opens for that selected case.
This is important for performance.
==================================================
13. STRICT PRESERVATION
DO NOT redesign or modify:
Header
Screen 1 layout
News Carousel
Review Queue layout
filters
footer
Screen 2 layout
Final Action UI
Decision Basis UI
Confirmation Modal
Policy Center
About
Community Guidelines
profile popover
hamburger design
This task changes DATA + MEDIA only.
==================================================
14. VERIFY BEFORE COMPLETION
Test:
Case 01 card uses case-01-thumb.png.
Case 10 card uses case-10-thumb.png.
Case 01 Screen 2 plays case-01-video.mp4.
Case 04 Screen 2 plays case-04-video.mp4.
Case 08 Screen 2 plays case-08-video.mp4.
Case 10 Screen 2 plays case-10-video.mp4.
Switching cases switches the video.
Videos are not all loaded on Screen 1.
Case 02 now shows the college altercation scenario.
Case 03 now shows the motorcycle street-racing scenario.
Case 05 shows heritage-performance context.
Case 09 shows first-aid-training context.
Policy filter still works.
Final Actions remain unrestricted.
Existing Confirm workflow remains functional.
No approved screen was visually redesigned.
After implementation report only:
exact media asset paths created
data file changed
media components changed
confirmation that all 10 thumbnails map correctly
confirmation that all 10 videos map correctly
any asset that failed to load
confirmation that existing UI was preserved
{attached the video abd thumbnails}
```

**What came back:** AI Studio updated the case data and added the video-player code, but the preview still showed broken thumbnails/video fallback states because the actual binary media files were not correctly present in the AI Studio filesystem.

**What I changed next and why:** I stopped asking the model to invent around missing files and repaired the media manually through GitHub/public, then verified the videos myself.

---

### AI Studio 13 — PROMPT 7 — FINAL VISUAL FIDELITY + MOBILE QA PASS

#### Prompt

```text
PROMPT 7 — FINAL VISUAL FIDELITY + MOBILE QA PASS
The Ting Ting application is functionally complete for now.
The following are already working and MUST NOT be rebuilt:
Screen 1 Review Queue
Screen 2 Case Review Workspace
Screen 3 Confirmation Modal
Screen 4 Policy Center
About Ting Ting
Community Guidelines
Hamburger Menu
Maya Tan Profile
Search
Filters
News Carousel
Read More / View Decision
Previous / Next Case
Final Action
Decision Basis
Moderator Note
Confirmation flow
Pending / Completed counters
completed-case state
Community Guidelines scroll spy
This iteration is ONLY a FINAL VISUAL FIDELITY / RESPONSIVE QA PASS.
The supplied APPROVED Stitch desktop and mobile code remains the visual source of truth.
DO NOT redesign the product.
==================================================
CRITICAL PRESERVATION RULE
==================================================
Do NOT modify:
case dataset
captions
policy assignments
confidence values
detected signals
media filenames
video paths
thumbnail paths
React moderation state
completion workflow
filter logic
search logic
confirmation logic
scroll-spy logic
Policy Center data
Community Guidelines content
About content
The currently broken/missing case image/video assets are a separate filesystem task.
DO NOT try to regenerate or replace them in this prompt.
This task is VISUAL + RESPONSIVE only.
==================================================
2. PRIMARY TEST VIEWPORTS
Verify the complete application at:
DESKTOP:
approximately 1440px wide
MOBILE:
approximately 390px wide
Also ensure reasonable behavior between:
390px–430px mobile widths.
No horizontal page overflow anywhere.
==================================================
3. SCREEN 1 MOBILE HEADER
The current mobile Screen 1 header is functional but does not match the approved Stitch mobile design closely enough.
Use the APPROVED Stitch Screen 1 Mobile code as exact reference.
The mobile header must be ONE compact horizontal row.
Order:
LEFT:
hamburger
Ting Ting logo
TING TING
CENTER:
SAFETY REVIEW
RIGHT:
search icon
Maya Tan avatar
Do NOT show on mobile:
Maya Tan full name
Content Moderator
full Search Case ID input by default
The current two-row header must NOT return.
Make everything fit through mobile-specific:
smaller typography
tighter gaps
smaller logo
restrained avatar size
compact horizontal padding
Do NOT overlap:
TING TING
and
SAFETY REVIEW
Do NOT use desktop sizing on mobile.
Search icon behavior must remain functional.
==================================================
4. SCREEN 1 MOBILE REVIEW QUEUE HEADER
Match the supplied Stitch mobile layout.
Currently the Review Queue area has historically become too large / vertically spread.
At mobile width:
LEFT:
REVIEW QUEUE
RIGHT:
10 Pending
0 Completed
Keep them on the SAME row if that is how they appear in the supplied approved Stitch mobile code.
Use compact typography.
The counters must use the approved restrained treatment rather than oversized KPI pills.
Pending:
small red indicator
Completed:
small neutral/green indicator
Do not increase page height unnecessarily.
==================================================
5. MOBILE FILTER BAR
Match the supplied Stitch mobile Screen 1.
Keep ALL FOUR controls in ONE horizontal row at approximately 390px:
ALL
PRIORITY ▾
STATUS ▾
POLICY ▾
Do not allow POLICY to wrap onto a second row.
Use compact:
button height
font size
horizontal padding
gaps
arrow size
ALL active state:
deep espresso / near-black
white text
Do NOT make ALL brown.
Preserve all existing dropdown interaction logic.
==================================================
6. SCREEN 1 MOBILE SPACING
Compare against the Stitch mobile reference.
Correct excessive vertical spacing between:
header
Internal News
Review Queue heading
counters
filters
first card
Do not make the page cramped.
Aim to reproduce the approved Stitch spacing rhythm.
==================================================
7. INTERNAL NEWS IMAGE QUALITY
The Internal News carousel uses the correct approved poster images, but the rendered poster quality must be as sharp as the source assets allow.
Do NOT:
regenerate posters
AI-enhance posters
replace poster images
redraw poster text
create alternative artwork
Inspect the rendering implementation.
Ensure:
use the original highest-resolution imported poster assets
do not accidentally reference low-resolution screenshots/previews if full-resolution versions are present
preserve original aspect ratio
prevent unnecessary CSS upscaling beyond available source resolution
avoid browser stretching
use appropriate object-fit/object-position
do not apply blur
do not apply image-rendering effects that soften text
do not crop important poster text
Desktop:
poster should fill the approved wide carousel area cleanly.
Mobile:
use the approved Stitch crop/layout while keeping text readable.
Do not modify carousel behavior:
exactly 5 posters
auto-advance 3.5s
arrows
counter
infinite loop
hover pause
==================================================
8. SCREEN 1 DESKTOP
Desktop Screen 1 is already close to approved.
Do NOT redesign it.
Only correct obvious deviations from the supplied Stitch desktop code if found.
Preserve:
4 + 4 + 2 cards
header composition
Review Queue title
counters
filter position
beige/ivory palette
footer
Do not modify card dimensions merely to solve mobile issues.
==================================================
9. POLICY CENTER — GENERAL ENTRY FIX
Correct one functional/fidelity issue.
CURRENT:
Screen 1 → Policy
opens directly to:
PR-4.2 Physical Risk & Imitation
THIS IS WRONG.
Required:
Screen 1 hamburger → Policy
and
Screen 1 footer → Policy
must open the GENERAL:
Policy Framework Overview
state shown in the supplied approved Stitch Policy Center design.
Only:
Screen 2 → View full policy →
should open a specific case policy automatically.
Examples:
current case PR-4.2
→ open PR-4.2
current case SG-6.3
→ open SG-6.3
Do not change case-specific behavior.
==================================================
10. POLICY CENTER TERMINOLOGY
Compare Policy Center content against the supplied approved Stitch code.
If the implementation introduced:
ENFORCEMENT GUIDANCE
where the approved Stitch design uses:
POSSIBLE TREATMENTS
restore:
POSSIBLE TREATMENTS
Do not otherwise rewrite policy content.
==================================================
11. POLICY CENTER MOBILE FIDELITY
Compare mobile Policy Center against its approved Stitch reference.
Ensure:
same substantive content as desktop
Purpose visible
Review Considerations visible
Contextual Considerations visible
Possible Treatments visible where supplied
status / revision information preserved
policy dropdown works
no horizontal overflow
full vertical scrolling
Do not truncate sections to fit the viewport.
==================================================
12. ABOUT TING TING TYPOGRAPHY
Compare About implementation with the supplied approved Stitch About code.
The current implementation may have introduced a serif-style Mission treatment.
Do NOT invent typography.
If the approved Stitch code uses the normal Ting Ting sans-serif typography for the Mission, restore that exact typography.
If Stitch genuinely uses a serif treatment, preserve it.
STITCH decides.
Do not change copy.
==================================================
13. ABOUT FOUNDER IMAGE
Verify desktop AND mobile:
same Elon Srinivasan image
same fictional founder
Founder & CEO
On mobile:
image visible
no awkward face crop
correct aspect ratio
no excessive stretching
clean spacing
Do not generate another founder.
==================================================
14. ABOUT MOBILE
Match the supplied approved About mobile code.
Verify exact section flow:
TING TING
tagline
founder
WHO WE ARE
OUR MISSION
WHAT WE BELIEVE
GLOBAL PRESENCE
closing line
No horizontal overflow.
Do not omit content.
==================================================
15. COMMUNITY GUIDELINES
The Community Guidelines implementation and scroll synchronization currently work.
DO NOT change the scroll-spy architecture.
Only perform visual mobile fidelity verification.
Ensure:
mobile section selector fits
no horizontal overflow
category headings readable
cards/callouts match Stitch
all content scrolls cleanly
X remains accessible
Do not modify text.
==================================================
16. SCREEN 2 DESKTOP FIDELITY
Compare current Screen 2 against supplied Stitch desktop code.
Do NOT change functionality.
Verify:
column proportions
media-panel dimensions
system-information card proportions
Policy Reference card
Final Action grid
Decision Basis
Moderator Note
Review & Confirm button
ivory / beige / espresso palette
spacing
Remove NO fields.
Add NO fields.
Do not create new analysis panels.
==================================================
17. SCREEN 2 MOBILE FIDELITY
Use supplied approved Screen 2 Mobile Stitch code.
Ensure correct mobile content order:
header
Back to Queue / Case ID / status
media player
creator + caption
content metadata
Policy / Recommended action / Confidence
Detected signals
Policy Reference
Final Action
Decision Basis
Moderator Note
Review & Confirm
Preserve the approved two-column Final Action layout on mobile.
No horizontal overflow.
Do not make controls excessively tall.
==================================================
18. CONFIRMATION MODAL MOBILE
Compare against supplied approved Confirmation Modal Mobile code.
Ensure:
correct width
centered/bottom-sheet positioning according to Stitch
readable Case ID
Final Action
Decision Basis
Moderator Note when present
Cancel / Confirm
no clipping
no horizontal overflow
Do not change confirmation logic or timing.
==================================================
19. MOBILE TOUCH TARGETS
Ensure mobile controls remain comfortably tappable:
hamburger
search
avatar
filters
carousel arrows
Read More
Previous / Next
View full policy
Final Action cards
Decision Basis
X buttons
footer links
But do not increase them so much that fidelity is lost.
==================================================
20. FOOTER MOBILE
Compare Screen 1 mobile footer with approved Stitch.
Preserve darker beige/sand background.
Ensure clean stacking of:
TING TING
brand line
COMPANY
CONTACT
GLOBAL OFFICES
copyright
No oversized vertical gaps.
No horizontal overflow.
==================================================
21. DO NOT TOUCH REAL MEDIA MAPPING
The current /case-XX-thumb.png and /case-XX-video.mp4 paths may not load until files are physically placed in the app filesystem.
DO NOT attempt to solve that here.
Do NOT:
change filenames
change asset paths
use remote URLs
generate replacements
alter video component logic unnecessarily
Leave media mapping intact.
==================================================
22. GLOBAL VISUAL RULES
Across the app:
Use only the approved design system:
warm ivory backgrounds
white primary cards
darker beige / sand accents
espresso / deep brown typography
near-black active controls
restrained red pending state
restrained green completed state
Do NOT introduce:
blue
cyan
dark dashboard UI
gradients not present in Stitch
neon
excessive shadows
generic SaaS styling
==================================================
23. FINAL RESPONSIVE VERIFICATION
Before completing, manually inspect rendered previews at:
390px
430px
1440px
Verify:
mobile header fits in one row
no Ting Ting / Safety Review overlap
Review Queue header matches Stitch
counters fit correctly
all four filters fit correctly
no page-level horizontal overflow
Internal News appears sharp and correctly fitted
Screen 2 mobile follows approved order
Confirmation modal fits mobile
Policy Center mobile contains all content
About mobile founder is correctly displayed
Community Guidelines mobile remains functional
desktop screens did not regress
all existing interactions still work
==================================================
24. REPORT
After completion report only:
exact files changed
fidelity corrections made
whether any supplied image source itself is too low-resolution to improve without replacement
any remaining desktop/mobile mismatch
confirmation that application logic, case data and media paths were preserved
Do not create any new feature or screen.
```

**What came back:** This broad QA prompt caused regressions: previously working dropdowns stopped working and the Internal News presentation changed in ways I did not want.

**What I changed next and why:** I rolled back to the last stable version and changed strategy to one small, testable fix at a time.

---

### AI Studio 14 — SURGICAL FIX 1 — POLICY CENTER ONLY

#### Prompt

```text
SURGICAL FIX 1 — POLICY CENTER ONLY
The current application is a restored STABLE version.
DO NOT modify any component except the Policy Center implementation and the minimum application state required to distinguish general versus case-specific Policy Center entry.
CRITICAL:
Do NOT modify:
Header layout
Review Queue
filters or dropdown logic
Search
News Carousel
Case Cards
Screen 2 layout
Final Action
Decision Basis
Confirmation Modal
About
Community Guidelines
Footer
case data
media paths
responsive styling outside Policy Center
==================================================
FIX 1 — GENERAL POLICY ENTRY
CURRENT BUG:
Opening Policy from:
Screen 1 hamburger → Policy
or
Screen 1 footer → Policy
opens directly to:
PR-4.2 · Physical Risk & Imitation
This is incorrect.
GENERAL policy entry must open the approved:
POLICY FRAMEWORK OVERVIEW
state from the supplied Stitch Policy Center design.
The overview should represent the general Ting Ting Safety Standards framework before a specific standard is selected.
==================================================
CASE-SPECIFIC ENTRY MUST REMAIN DIFFERENT
Screen 2:
View full policy →
must CONTINUE opening the specific policy associated with the currently selected case.
Examples:
PR-4.2 case
→ open Physical Risk & Imitation
SG-6.3 case
→ open Shocking & Graphic Content
SX-7.2 case
→ open Body Exposure & Sexualized Behaviors
HB-3.4 case
→ open Harassment & Bullying
Do not break this dynamic case-specific behavior.
==================================================
IMPLEMENT ENTRY MODE CLEANLY
Use explicit Policy Center entry state, for example:
general
or
caseSpecific
GENERAL:
hamburger Policy
footer Policy
→ open Framework Overview
CASE-SPECIFIC:
Screen 2 View full policy
→ open selected case policy
Do not infer general entry by defaulting to PR-4.2.
==================================================
FIX 2 — TERMINOLOGY
Inspect the current Policy Center against the APPROVED Stitch Policy Center source.
If any visible section has been named:
ENFORCEMENT GUIDANCE
but the supplied Stitch design uses:
POSSIBLE TREATMENTS
replace it with exactly:
POSSIBLE TREATMENTS
Use the exact supplied Stitch content under that section.
Do not rewrite any other policy wording.
==================================================
OVERVIEW DESIGN
Use the existing approved Stitch Policy Framework Overview design/content.
Do NOT invent:
analytics
audit information
policy statistics
moderator metrics
legal citations
new principles
dashboards
Do not redesign the Policy Center.
==================================================
CLOSE / STATE PRESERVATION
Preserve existing behavior:
X
→ return to exact previous screen/state .
If opened from Screen 2:
Final Action
Decision Basis
Moderator Note
must remain untouched.
==================================================
MOBILE
Apply the same entry logic on mobile.
General Policy access:
→ Framework Overview
Case-specific access:
→ current case policy
Do NOT otherwise alter mobile Policy Center styling in this task.
==================================================
STRICT FILE SCOPE
Prefer changing ONLY:
PolicyCenterModal.tsx
and, only if genuinely required:
App.tsx
Do not edit unrelated component files.
==================================================
VERIFY
Test:
Screen 1 hamburger → Policy
→ Framework Overview
Screen 1 footer → Policy
→ Framework Overview
Screen 2 PR-4.2 case → View full policy
→ PR-4.2
Screen 2 SG-6.3 case → View full policy
→ SG-6.3
Close from Screen 2
→ review draft preserved
POSSIBLE TREATMENTS terminology matches Stitch.
Priority / Status / Policy filters on Screen 1 still work exactly as before.
Internal News Carousel remains completely unchanged.
After implementation report only:
exact files changed
general entry behavior
case-specific entry behavior
terminology corrected
confirmation that no other component was modified
```

**What came back:** The Policy Center general entry was functionally fixed and the terminology moved back to POSSIBLE TREATMENTS, but visually I still did not think the overview matched the approved Stitch design.

**What I changed next and why:** I accepted the functional correction for now and moved to the more important Screen 2 video-height problem.

---

### AI Studio 15 — SURGICAL FIX 2 — SCREEN 2 DESKTOP VIDEO HEIGHT ONLY

#### Prompt

```text
SURGICAL FIX 2 — SCREEN 2 DESKTOP VIDEO HEIGHT ONLY
The current Ting Ting application is in a STABLE working state.
Do NOT redesign or modify any component except the desktop media sizing inside the Case Review Workspace.
This task is ONLY to fix the oversized desktop video/player height on Screen 2.
==================================================
CURRENT PROBLEM
On desktop, the 9:16 media player is sized mainly from the width of the left column.
Because the media is vertical, this makes it excessively tall.
The moderator has to scroll down just to see the bottom of the video.
This is poor workspace usability.
The full vertical video should normally be visible at once on a standard laptop/desktop viewport.
==================================================
REQUIRED DESKTOP BEHAVIOR
Keep the media aspect ratio EXACTLY:
9:16
Do NOT crop.
Do NOT stretch.
Do NOT change the underlying video.
On desktop only:
constrain the player primarily by viewport HEIGHT rather than allowing it to expand to the full width of the left column.
Target:
approximately 560–650px maximum player height on a normal laptop/desktop viewport
preferably use a responsive viewport-based constraint such as max-height based on vh
width should calculate automatically from the 9:16 aspect ratio
maintain the complete video frame
horizontally center the vertical player inside the existing left media card
The result should allow the moderator to see the ENTIRE video player in the visible workspace without scrolling just to reach its bottom.
==================================================
LEFT CARD
Do NOT shrink the entire left column.
The existing left media/card region may remain the same width.
Inside it:
center the narrower 9:16 video player.
Then keep directly below the video:
creator handle
caption
duration / language / market
queue source
queue age
priority
Do not place metadata beside the video.
==================================================
RIGHT PANEL
Do NOT modify:
System Information
Policy Reference
Final Action
Decision Basis
Moderator Note
Review & Confirm
card dimensions
typography
content
behavior
Keep the right panel aligned to the TOP of the media section.
==================================================
MOBILE
DO NOT change mobile media sizing.
The approved Screen 2 mobile vertical video layout must remain exactly as it currently works.
This fix applies only at desktop/tablet desktop breakpoints.
==================================================
VIDEO PLAYER
Preserve all existing player behavior and code:
poster frame
play
pause
progress/scrubber
current time
duration
mute
fullscreen
playsInline
video path
thumbnail path
fallback behavior
Do not rewrite the video player logic.
==================================================
STRICT FILE / LOGIC PRESERVATION
Do NOT modify:
Screen 1
Header
Review Queue
filters
Search
News Carousel
Footer
Policy Center
About
Community Guidelines
Confirmation Modal
case data
media paths
Pending / Completed state
moderation workflow
Prefer changing ONLY the desktop sizing/classes in the existing CaseReview component.
==================================================
VERIFY
Test at approximately:
1366 × 768
1440 × 900
Confirm:
Full 9:16 video is visible without scrolling just to reach the bottom.
Aspect ratio remains 9:16.
Video is centered inside the left card.
No cropping or stretching.
Right panel remains aligned at the top.
Metadata remains underneath the video.
Mobile layout is unchanged.
All Screen 2 interactions still work.
After completion report only:
exact file changed
old desktop media-sizing behavior
new desktop media-sizing behavior
confirmation that no functionality or mobile layout was modified
```

**What came back:** The desktop video became smaller and centered, so I could see the full 9:16 player without excessive scrolling. It was not exactly the Stitch design, but it was usable.

**What I changed next and why:** I kept the improved inline player and explored a separate enlarged-view idea instead of making the inline player huge again.

---

### AI Studio 16 — SURGICAL FIX 3 — SCREEN 2 EXPANDED VIDEO VIEWER ONLY [PARTIAL RECOVERY]

#### Prompt

```text
[PARTIAL RECOVERY — the exact full prompt is not present in the surviving export. The human-side record identifies it as a prompt to replace the oversized native fullscreen experience with a controlled expanded video viewer.]
```

**What came back:** This prompt never ran because the AI Studio quota was exhausted.

**What I changed next and why:** I postponed the expanded-view idea and used the downtime to fix the real media files through GitHub.

---

### AI Studio 17 — SURGICAL FIX A — SCREEN 1 ↔ SCREEN 2 SCROLL POSITION ONLY — first attempt

#### Prompt

```text
[SAME INTENDED FIX AS THE SUCCESSFUL RETRY BELOW; this first transmission was quota-blocked before code changes were produced.]
```

**What came back:** The quota was still not available, so the scroll-position fix also did not run.

**What I changed next and why:** I kept this as the first task for the next session instead of pretending the bug had been fixed.

---

### AI Studio 18 — PS1 FINAL SCOPE LOCK — PRIORITIZED REVIEW QUEUE INTAKE [FORMAL R.G.O.G.C. MASTER / SCOPE-LOCK PROMPT]

#### Prompt

```text
PS1 FINAL SCOPE LOCK — PRIORITIZED REVIEW QUEUE INTAKE
GOAL
Treat the following as the final MGMT 6110 Problem Set 1 product scope for the EXISTING Ting Ting — Safety Review application.
The primary user is an INTERNAL Content Safety Moderator working in the Trust & Safety — Content Moderation Operations business function of the fictional Ting Ting short-video platform.
The product has TWO primary workflow screens. They represent two consecutive jobs in the moderator's work.
1. SCREEN 1 — REVIEW QUEUE
User job:
A Content Safety Moderator opens the Review Queue during a moderation shift to identify and start the next case from the prioritized human-review queue.
The queue has already received cases routed for human review. The moderator is NOT deciding the final enforcement action on Screen 1.
Screen 1 helps the moderator understand the waiting work using the EXISTING:
- Priority
- Queue age
- Policy category
- Status
- Search Case ID
- Priority filter
- Status filter
- Policy filter
For the default ALL view, order the existing cases as a prioritized review queue:
- Top priority before Medium priority
- Medium priority before Low priority
- within the same priority level, show the case with the LONGER Queue age first
Use only the existing case data. Do NOT invent a scoring formula, SLA, urgency score, risk score, confidence value or new queue field.
For Pending cases, change the existing action label:
READ MORE →
to:
START REVIEW →
START REVIEW means the moderator is beginning the detailed human review. Do NOT create an "In Review" state and do NOT create case-claiming or assignment logic.
When START REVIEW is selected:
- preserve the selected Case ID;
- open the EXISTING Screen 2 — Case Review Workspace for that exact case;
- ensure the Case ID and case information shown on Screen 2 correspond to the selected Screen 1 case;
- Screen 2 must open at the TOP of the workspace, regardless of the moderator's previous scroll position on Screen 1;
- do not reload the page.
When the moderator uses Back to Queue from Screen 2:
- return to Screen 1;
- restore the Screen 1 scroll position the moderator left;
- preserve the current queue/filter/search state where technically possible using existing in-memory front-end state;
- do not reload the page.
Completed cases must continue to use the EXISTING:
VIEW DECISION →
behavior. Do not rename VIEW DECISION.
Screen 1 is successful when the moderator selects START REVIEW on a pending case and the correct selected Case ID opens at the top of the existing Case Review Workspace.
2. SCREEN 2 — CASE REVIEW WORKSPACE
User job:
A Content Safety Moderator opens the Case Review Workspace to assess the selected video against the system recommendation and relevant policy, then record the appropriate final moderation action.
Preserve the EXISTING Screen 2 workflow:
- video review
- content/case information
- system recommendation as supporting information
- relevant policy reference
- six Final Action choices
- required Decision Basis
- optional Moderator Note
- REVIEW & CONFIRM
- confirmation modal
- CANCEL behavior
- confirmation processing/success behavior
- return to the Review Queue
- recorded action displayed on the completed case
- Pending / Completed counter update
The moderator remains the final decision-maker. The system recommendation is supporting information only and must never automatically determine or preselect the Final Action.
Screen 2 is successful when the moderator confirms the decision, the case returns to the Review Queue as completed, the exact recorded Final Action is shown on the case, and the Pending / Completed counts update correctly.
3. CONFIRMATION INTERACTION
The confirmation experience is a modal state within Screen 2, NOT a third routed screen.
Preserve its existing purpose as the final human checkpoint before recording the decision.
Do not redesign it in this iteration.
4. EXISTING SUPPORTING CONTENT
Preserve the existing:
- Internal News section
- Policy Center overlay
- About Ting Ting overlay
- Community Guidelines overlay
- Maya Tan profile interaction
- hamburger interaction
- footer
Do not redesign, remove or expand these in this iteration.
They are not part of the Screen 1 or Screen 2 job change being made now.
OUTPUT
Maintain the existing running React application.
For THIS ITERATION, modify only what is necessary to implement the Screen 1 prioritized queue-intake job and its Screen 1 ↔ Screen 2 navigation behavior described above.
Preserve the current approved Ting Ting visual design, responsive design, media, existing cases, existing overlays and Screen 2 decision workflow.
Use the existing in-memory React state. Do not create persistence.
The application must remain usable and readable on approximately 390–430px mobile screens as well as desktop.
FINAL SUBMISSION REQUIREMENT:
Every invented product value must ultimately be kept in ONE dedicated data file.
Do NOT perform a broad data-architecture refactor in this iteration because I want this workflow change isolated and verifiable.
Instead, after implementing this prompt, inspect the current project and REPORT:
- which current files contain invented data or invented content values;
- whether more than one dedicated data file currently exists.
Do not move those values yet.
FINAL SUBMISSION REQUIREMENT:
The app must not depend at runtime on Gemini, another model, a backend, a database or an outside service.
Do NOT perform a broad asset/dependency refactor in this iteration.
Instead, after implementing this prompt, REPORT if you find any:
- @google/genai or other model import;
- Gemini client;
- API-key handling;
- fetch/axios call to an outside service;
- remote http/https image, video, font or other asset reference used by the running app.
Do not expose or print the value of any secret or key.
When finished, report:
1. every file changed in THIS iteration and what changed;
2. confirmation of the default queue ordering implemented;
3. confirmation that START REVIEW opens the selected case at the top of Screen 2;
4. confirmation that Back to Queue restores Screen 1 position/state;
5. confirmation that the existing Screen 2 decision workflow was not altered;
6. the current invented-data-file audit;
7. the current external/model/runtime-dependency audit;
8. any implementation choice you made that I did not explicitly specify.
GUARDRAILS
This is an EXISTING application. Do not rebuild it from scratch.
Do NOT redesign the current Ting Ting visual system.
Do NOT change the existing 10 case records, Case IDs, creator handles, policy categories, priorities, queue ages, scenario details or media.
Do NOT invent new cases, data, labels, scores, fields, statuses or workflow stages.
Do NOT add:
- In Review status
- case claiming
- moderator assignment
- SLA timers
- urgency scores
- risk scores
- confidence fields on Screen 1
- analytics
- charts
- dashboards
- queue telemetry
- model-performance information
- new filters
- new search fields
- new routes
- new screens
- login
- authentication
- user accounts
- database
- backend functionality
- localStorage
- sessionStorage
- IndexedDB
Do NOT call Gemini or any other model.
Do NOT add or require an API key.
Do NOT call any outside service or introduce any new remote URL.
Do NOT use live data or scraping.
Do NOT use a real company's logo, data, case or trademark. Ting Ting and all product data are fictional.
Do not introduce the word "dangerous" anywhere in the interface.
Do NOT alter:
- Internal News content or carousel behavior
- About Ting Ting
- Policy Center
- Community Guidelines
- profile popover
- hamburger menu
- footer
- video assets
- Screen 2 layout
- Screen 2 video sizing
- Final Action choices
- Decision Basis choices
- Moderator Note behavior
- confirmation-modal design
- completed-card design
Do NOT restore anything previously removed from the product.
Make no unrelated visual polish changes.
This iteration has ONE change category:
Screen 1 prioritized queue intake and the navigation required to start/return from that review.
Change nothing else.
CONTEXT
This is my individual Problem Set 1 for MGMT 6110 Human-AI Collaboration at Singapore Management University.
The final application is an invented front-end simulation for an internal Content Safety Moderator.
The business function being augmented is:
Trust & Safety — Content Moderation Operations.
The product was designed iteratively in Google Stitch and implemented/iterated in Google AI Studio.
A substantial working Ting Ting application already exists. Preserve working functionality instead of regenerating it.
The final codebase will be controlled in GitHub and deployed on Vercel.
The app must eventually satisfy the assignment requirements:
- one to three primary screens;
- invented data;
- invented values kept in one dedicated data file;
- no backend;
- no model calls;
- no outside services;
- no API keys;
- usable on a phone;
- interactions without page reload.
I am deliberately isolating changes because an earlier broad QA generation changed previously working functionality. If something outside this prompt appears necessary, REPORT it instead of changing it.
ROLE
You are a senior front-end developer maintaining an existing React application.
Implement the specified Screen 1 workflow change conservatively.
Preserve working code and visual design.
Verify the result in the running application rather than assuming that a successful build means the behavior is correct.
Change nothing else.
```

**What came back:** This scope-lock prompt fixed the navigation part: Screen 2 opened at the top and Back to Queue returned me to the same Screen 1 scroll position. The START REVIEW label and priority/queue-age sorting were still not done.

**What I changed next and why:** I manually verified the scroll behavior, then split the remaining queue-intake work into its own prompt so I could test it separately.

---

### AI Studio 19 — SCREEN 1 — PRIORITIZED REVIEW QUEUE INTAKE ONLY

#### Prompt

```text
SCREEN 1 — PRIORITIZED REVIEW QUEUE INTAKE ONLY
The previous iteration successfully fixed the Screen 1 ↔ Screen 2 scroll-position behavior.
I manually verified that:
- selecting a case opens Screen 2 at the top;
- Back to Queue restores the previous Screen 1 scroll position;
- Previous / Next Case opens Screen 2 at the top.
PRESERVE THAT WORK EXACTLY.
This iteration modifies ONLY the remaining Screen 1 prioritized-queue behavior.
==================================================
1. PENDING CASE ACTION LABEL
==================================================
On Screen 1, for every case whose current status is PENDING REVIEW:
replace:
READ MORE →
with:
START REVIEW →
START REVIEW means that the Content Safety Moderator is beginning the detailed human review of that selected case.
Do NOT change the click behavior.
It must continue to:
- preserve the selected Case ID;
- open the existing Screen 2 — Case Review Workspace;
- open Screen 2 at the top using the navigation behavior already fixed.
For completed cases, preserve the existing:
VIEW DECISION →
label and behavior exactly.
Do NOT rename VIEW DECISION.
==================================================
2. DEFAULT PRIORITIZED QUEUE ORDER
==================================================
Screen 1 is now a prioritized human-review intake queue.
For PENDING REVIEW cases, display cases using this ordering:
FIRST:
Priority
Top
then
Medium
then
Low
SECOND:
Within the SAME priority level, order by Queue age from LONGEST waiting time to SHORTEST waiting time.
Examples of Queue age values already present may include:
- 3m
- 54m
- 2h 10m
- 7h 45m
- 22h 40m
Interpret the existing Queue age values correctly for comparison.
Do NOT change any Queue age value.
Do NOT change any Priority value.
Do NOT invent a new score, SLA, urgency field, risk field or ranking formula.
The ordering must be derived only from the EXISTING:
- Priority
- Queue age
data.
==================================================
3. FILTER AND SEARCH BEHAVIOR
==================================================
Preserve all existing Screen 1 controls:
- ALL
- PRIORITY
- STATUS
- POLICY
- Search Case ID
Filtering and search must continue to work.
When a filtered/search result contains multiple PENDING REVIEW cases, preserve the same prioritization logic among those displayed pending cases:
Top → Medium → Low
and within the same priority:
longer Queue age → shorter Queue age.
Do NOT add another sorting control.
Do NOT add another filter.
Do NOT add explanatory telemetry.
==================================================
4. COMPLETED CASES
==================================================
Do not modify completed-case functionality.
Preserve:
- exact recorded Final Action;
- completed green treatment;
- VIEW DECISION →;
- Pending / Completed counter logic;
- existing completed-case state behavior.
Do not create an In Review status.
Do not create case claiming or moderator assignment.
==================================================
5. STRICT PRESERVATION
==================================================
Do NOT modify:
- Screen 1 visual design;
- case-card dimensions;
- thumbnails or videos;
- case data;
- Case IDs;
- creator handles;
- policy categories;
- priorities;
- queue ages;
- Internal News;
- header;
- Maya Tan profile;
- hamburger menu;
- footer;
- About Ting Ting;
- Policy Center;
- Community Guidelines;
- Screen 2 layout;
- Screen 2 content;
- Final Action controls;
- Decision Basis;
- Moderator Note;
- confirmation modal;
- scroll-position implementation fixed in the previous iteration.
Do NOT add any new feature.
Do NOT perform the one-data-file refactor yet.
Do NOT perform external-asset or dependency cleanup yet.
Do NOT make visual-polish changes.
This iteration has ONE change category:
SCREEN 1 PRIORITIZED REVIEW QUEUE INTAKE.
Change nothing else.
==================================================
6. VERIFY BEFORE REPORTING COMPLETION
==================================================
Verify in the running application that:
1. Every pending case now says START REVIEW →.
2. Completed cases still say VIEW DECISION →.
3. Pending cases are ordered Top → Medium → Low.
4. Within each priority level, the longest Queue age appears first.
5. Search still works.
6. Priority filter still works.
7. Status filter still works.
8. Policy filter still works.
9. START REVIEW opens the correct selected case.
10. Screen 2 still opens at the top.
11. Back to Queue still restores the previous Screen 1 position.
12. No unrelated UI or workflow changed.
When finished, report:
- exact files changed;
- the resulting ordered Case IDs with their Priority and Queue age;
- whether all 12 verification checks passed;
- any implementation choice you made that I did not specify.
Change nothing else.
```

**What came back:** The queue-intake change worked: pending cards showed START REVIEW and were ordered Top → Medium → Low, then longest queue age first within each priority. Search, filters and navigation still worked.

**What I changed next and why:** I locked Screen 1’s job and went back to the remaining video-control issue.

---

### AI Studio 20 — SCREEN 2 — EXPANDED VIDEO VIEWER ONLY

#### Prompt

```text
SCREEN 2 — EXPANDED VIDEO VIEWER ONLY
The current Screen 2 — Case Review Workspace is approved.
The existing inline video player works correctly.
There is ONE usability problem:
when the current fullscreen control is used, the video becomes excessively large and appears cropped because native/fullscreen presentation does not suit this portrait 9:16 moderation video.
Replace ONLY that fullscreen behavior with a controlled in-app expanded video viewer.
==================================================
1. PRESERVE THE INLINE VIDEO
==================================================
Do NOT modify:
- the current Screen 2 video size;
- video position;
- video source;
- playback behavior;
- creator/caption information;
- metadata;
- right-column moderation workflow;
- Screen 2 layout.
The existing inline video remains exactly where and how it currently appears.
==================================================
2. REPLACE NATIVE FULLSCREEN
==================================================
Do NOT use browser/native fullscreen for this video.
Replace the current fullscreen action with an EXPAND VIDEO interaction.
The control may keep an appropriate expand-style icon, but it must no longer trigger native fullscreen.
When selected:
- preserve Screen 2 underneath;
- softly dim and blur the underlying workspace;
- open one centered in-app video viewer modal;
- continue using the same selected case video;
- do not navigate away;
- do not reload the page.
==================================================
3. EXPANDED VIEWER SIZE
==================================================
The expanded viewer should be noticeably larger than the inline player but must NOT fill the entire desktop viewport.
Use a scale approximately comparable to, or slightly larger than, the existing confirmation modal.
For desktop:
- centered modal;
- comfortable maximum height of approximately 75–80vh;
- comfortable maximum width appropriate to a portrait 9:16 video;
- leave visible breathing room around the modal.
The viewer must feel like an enlarged inspection surface, not a cinema/fullscreen experience.
==================================================
4. PRESERVE THE COMPLETE VIDEO FRAME
==================================================
CRITICAL:
The video is portrait-oriented 9:16.
Always preserve the complete frame.
Use containment behavior equivalent to:
object-fit: contain
Do NOT use cropping behavior equivalent to:
object-fit: cover
Do NOT:
- crop the top or bottom;
- crop the left or right;
- zoom the video to fill a landscape container;
- stretch or distort the video.
The moderator must be able to inspect the entire video frame.
==================================================
5. PLAYBACK CONTROLS
==================================================
Inside the expanded viewer preserve normal video controls such as:
- play / pause;
- timeline / scrubbing;
- current time / duration;
- volume.
Do NOT add:
- likes;
- comments;
- shares;
- social-media controls;
- download;
- picture-in-picture;
- additional moderation information.
This viewer is for inspecting the same case media only.
==================================================
6. CLOSE BEHAVIOR
==================================================
Provide a clear X close control.
Closing the expanded viewer must:
- close only the viewer;
- return to the exact Screen 2 workspace;
- preserve the selected case;
- preserve Final Action selection if one exists;
- preserve Decision Basis if one exists;
- preserve Moderator Note if one exists;
- preserve Screen 2 scroll position.
Escape may also close the viewer on desktop if already supported naturally.
Do not navigate back to Screen 1.
==================================================
7. MOBILE
==================================================
Use the same interaction on mobile.
For approximately 390–430px viewport width:
- use most of the available screen width;
- allow enough vertical room for the portrait video;
- maintain safe spacing from browser/device edges;
- preserve the full 9:16 frame;
- do not crop;
- do not cause horizontal overflow.
It may feel close to full-screen on a phone because of the available space, but it must remain an in-app overlay with a visible close control rather than invoking browser/native fullscreen.
==================================================
8. STRICT PRESERVATION
==================================================
Do NOT modify:
- Screen 1;
- prioritized queue ordering;
- START REVIEW;
- Screen 1 ↔ Screen 2 scroll behavior;
- Screen 2 desktop layout;
- Screen 2 mobile layout;
- case data;
- policy information;
- system recommendation;
- Final Action;
- Decision Basis;
- Moderator Note;
- Review & Confirm;
- confirmation modal;
- Policy Center;
- About Ting Ting;
- Community Guidelines;
- Internal News;
- header;
- footer;
- colors;
- typography system.
Do NOT add a new routed screen.
Do NOT add any new feature.
This iteration has ONE change category:
SCREEN 2 VIDEO EXPANSION BEHAVIOR.
Change nothing else.
==================================================
9. VERIFY BEFORE REPORTING
==================================================
Verify in the running application that:
1. Inline Screen 2 video is unchanged.
2. Expand control opens an in-app modal instead of native fullscreen.
3. Expanded viewer is centered on desktop.
4. Expanded video is larger but does not fill the entire desktop viewport.
5. Complete 9:16 frame remains visible.
6. No part of the video is cropped.
7. Video is not distorted.
8. Playback controls work.
9. X closes back to the same Screen 2 state.
10. Screen 2 selections/notes are preserved.
11. Mobile expanded viewer remains usable without cropping or horizontal overflow.
12. No unrelated product behavior changed.
When finished report:
- exact files changed;
- how native fullscreen was removed/replaced;
- the desktop sizing rule used;
- how 9:16 containment is guaranteed;
- whether all 12 checks passed;
- any implementation choice you made that I did not specify.
Change nothing else.
```

**What came back:** The requested expanded viewer did not solve the problem. Fullscreen was still present and still opened the video too large.

**What I changed next and why:** I paused the optional viewer work and first dealt with the two cases whose local videos were not playing.

---

### AI Studio 21 — SCREEN 2 — TWO BROKEN LOCAL VIDEO REFERENCES ONLY

#### Prompt

```text
SCREEN 2 — TWO BROKEN LOCAL VIDEO REFERENCES ONLY
The application is currently stable and the majority of case videos play correctly.
I manually verified that the videos for these TWO creator cases do NOT play:
1. @trackline.rider
2. @ringsidecut
All other working video cases must remain untouched.
This task is ONLY to diagnose and repair the local media reference for these two cases.
==================================================
1. IDENTIFY THE EXACT CASE RECORDS
==================================================
Locate the existing case records for:
@trackline.rider
and
@ringsidecut
Confirm their:
- Case ID;
- current video/media path;
- thumbnail path;
- corresponding local media filename.
Do NOT change any case data other than a broken local media path if that is the cause.
==================================================
2. INSPECT THE ACTUAL LOCAL FILESYSTEM
==================================================
Inspect the existing local/public media folders and identify the actual MP4/video files intended for these two cases.
Check for:
- filename mismatch;
- path mismatch;
- capitalization mismatch;
- extension mismatch;
- duplicated filename;
- file located in the wrong public directory;
- reference pointing to an old filename.
Do NOT fetch anything from the internet.
Do NOT create a remote URL.
Do NOT regenerate the videos.
Use only the local media files already present in the project.
==================================================
3. REPAIR ONLY THE BROKEN REFERENCES
==================================================
If the local media files exist, update ONLY the necessary references so:
@trackline.rider
and
@ringsidecut
load and play their correct existing local videos.
Use valid relative/local public asset paths compatible with the existing Vite/React application.
Do NOT change the working video component unless the component itself is specifically preventing only these two local files from loading.
If the expected MP4 file is genuinely missing from the project, STOP and report:
- the exact expected filename;
- the expected folder;
- the current broken reference.
Do NOT substitute another case's video.
Do NOT generate a placeholder video.
==================================================
4. STRICT PRESERVATION
==================================================
Do NOT modify:
- any other case video;
- any thumbnail unless its path is also genuinely broken for these same two cases;
- Screen 1;
- prioritized queue ordering;
- START REVIEW;
- filters;
- search;
- navigation;
- scroll-position behavior;
- Screen 2 layout;
- video dimensions;
- fullscreen behavior;
- Picture-in-Picture behavior;
- Final Action;
- Decision Basis;
- Moderator Note;
- confirmation modal;
- Policy Center;
- About Ting Ting;
- Community Guidelines;
- Internal News;
- case scenario content;
- policy data;
- colors;
- typography.
Do not perform the expanded-video/fullscreen redesign in this iteration.
Do not perform a data-file refactor.
Do not make unrelated cleanup changes.
This iteration has ONE target:
restore playback for @trackline.rider and @ringsidecut using their correct existing local media.
==================================================
5. VERIFY THE ACTUAL RENDER
==================================================
Do not report success based only on compilation.
Verify in the running preview:
1. @trackline.rider opens its correct case.
2. Its video loads.
3. Its video plays.
4. Timeline/scrubbing works.
5. @ringsidecut opens its correct case.
6. Its video loads.
7. Its video plays.
8. Timeline/scrubbing works.
9. At least one previously working case video still plays normally.
10. No unrelated application behavior changed.
When finished, report:
- the Case ID for each affected creator;
- the previous media path;
- the corrected media path;
- exact files changed;
- the root cause for each broken video;
- whether all 10 verification checks passed.
Change nothing else.
```

**What came back:** AI Studio diagnosed the two broken cases as missing local video files. GitHub showed that the media situation was really a workspace/sync problem, so I did not treat the model’s diagnosis as the final fix.

**What I changed next and why:** I repaired the public media files manually, synced again and verified playback before touching the player UI.

---

### AI Studio 22 — SCREEN 2 — SURGICAL EXPANDED VIDEO VIEWER FIX

#### Prompt

```text
SCREEN 2 — SURGICAL EXPANDED VIDEO VIEWER FIX
The current Ting Ting application is stable and has been checkpointed to GitHub.
All local case videos now play correctly.
There is ONE remaining Screen 2 video usability problem:
The current browser/native fullscreen control makes the portrait 9:16 case video excessively large and visually cropped in fullscreen.
I do NOT want native browser fullscreen for case review.
Replace only that behavior with a controlled in-app expanded video viewer.
==================================================
1. TARGET THE EXISTING VIDEO COMPONENT
==================================================
The existing Screen 2 video player is implemented in:
src/components/CaseVideoPlayer.tsx
Inspect this component first.
Modify ONLY CaseVideoPlayer.tsx unless another file is technically unavoidable.
Do NOT modify App.tsx, CaseReview.tsx, queue logic, navigation logic, case data, or unrelated components.
==================================================
2. PRESERVE THE EXISTING INLINE PLAYER
==================================================
The normal inline Screen 2 video player is approved.
Preserve:
- current inline position;
- current inline dimensions;
- current video source;
- autoplay/playback behavior;
- play/pause;
- timeline/scrubbing;
- volume;
- current styling.
Do not make the normal Screen 2 video larger or smaller.
==================================================
3. REMOVE NATIVE FULLSCREEN BEHAVIOR
==================================================
The user must no longer enter browser/native fullscreen from this case video.
Remove or disable the native fullscreen control for this video player.
Also disable Picture-in-Picture if it is exposed by the browser controls.
Preserve normal playback controls.
If native browser controls cannot reliably hide only fullscreen/Picture-in-Picture, implement only the minimum custom controls necessary to preserve:
- play/pause;
- timeline/scrubbing;
- volume;
and provide the custom EXPAND VIDEO control described below.
Do not add download, social, share, comment, like, or unrelated media controls.
==================================================
4. ADD ONE EXPAND VIDEO CONTROL
==================================================
Add one clear expand-style icon/control to the existing video player.
This control replaces native fullscreen.
When clicked:
- do NOT invoke browser fullscreen;
- do NOT navigate to another screen;
- keep Screen 2 underneath;
- softly dim/blur the underlying Screen 2;
- open a centered in-app expanded video viewer;
- show the SAME selected case video.
==================================================
5. EXPANDED VIEWER SIZE
==================================================
The expanded viewer should feel similar in scale to the existing confirmation modal, but slightly larger to support media inspection.
Desktop target:
- centered in the viewport;
- maximum height approximately 78vh;
- width determined naturally from the portrait 9:16 aspect ratio;
- visible whitespace around the viewer;
- do NOT fill the entire desktop screen.
This is an enlarged inspection popup, not a cinema/fullscreen experience.
==================================================
6. PRESERVE THE COMPLETE 9:16 VIDEO
==================================================
CRITICAL:
Always show the COMPLETE portrait frame.
Use containment behavior equivalent to:
object-fit: contain
Do NOT use:
object-fit: cover
Do NOT:
- crop the video;
- zoom the video to fill a landscape container;
- stretch the video;
- distort its aspect ratio.
The moderator must be able to inspect the complete video evidence.
==================================================
7. CLOSE AND STATE PRESERVATION
==================================================
Provide a clear X close control.
Closing the expanded viewer must return to the exact same Screen 2 state.
Preserve:
- selected Case ID;
- Screen 2 scroll position;
- Final Action selection;
- Decision Basis selection;
- Moderator Note;
- existing review workflow state.
Do not return to Screen 1.
==================================================
8. MOBILE
==================================================
On approximately 390–430px mobile width:
- keep this as an in-app overlay;
- use most of the available width;
- preserve the entire 9:16 frame;
- keep the X visible;
- prevent horizontal overflow;
- do not invoke browser/native fullscreen.
==================================================
9. STRICT PRESERVATION
==================================================
Do NOT modify:
- Screen 1;
- START REVIEW;
- prioritized queue ordering;
- filters;
- Search Case ID;
- Screen 1 ↔ Screen 2 scroll restoration;
- Previous / Next Case behavior;
- local media files;
- case data;
- Screen 2 layout outside the video component;
- Final Action;
- Decision Basis;
- Moderator Note;
- REVIEW & CONFIRM;
- confirmation modal;
- Internal News;
- Policy Center;
- About Ting Ting;
- Community Guidelines;
- header;
- footer;
- typography;
- color system.
Do NOT perform:
- data-file refactoring;
- asset cleanup;
- dependency cleanup;
- unrelated visual polish.
This iteration has ONE target:
Replace the oversized native fullscreen behavior with a controlled in-app expanded video viewer.
Change nothing else.
==================================================
10. VERIFY THE ACTUAL RUNNING PREVIEW
==================================================
Do not report success based only on TypeScript compilation or production build.
Verify in the actual running preview that:
1. Inline Screen 2 video remains unchanged.
2. Native fullscreen is no longer exposed.
3. Picture-in-Picture is no longer exposed.
4. A new Expand Video control is visible.
5. Expand Video opens an in-app centered overlay.
6. Browser fullscreen is not entered.
7. The complete 9:16 video frame is visible.
8. No part of the video is cropped or distorted.
9. Expanded viewer is larger but not entire-screen on desktop.
10. Playback controls continue to work.
11. X closes to the same Screen 2 state.
12. Existing moderation selections/notes are preserved.
13. Mobile viewer remains usable without cropping or horizontal overflow.
14. No unrelated product behavior changed.
When finished, report:
- exact files changed;
- whether only CaseVideoPlayer.tsx was changed;
- how native fullscreen was removed;
- how Picture-in-Picture was disabled;
- how the expanded viewer was implemented;
- the desktop sizing rule;
- how full 9:16 containment is guaranteed;
- whether all 14 checks passed;
- any implementation choice you made that I did not explicitly specify.
Change nothing else.
```

**What came back:** The surgical expanded-viewer change caused a regression: media that had been working disappeared/broke in the preview.

**What I changed next and why:** I restored the stable version and dropped the custom popup idea instead of stacking another fix on top of a regression.

---

### AI Studio 23 — SCREEN 2 — REMOVE FULLSCREEN ONLY

#### Prompt

```text
SCREEN 2 — REMOVE FULLSCREEN ONLY
The previous expanded-video generation was rejected and the application has been restored to the last stable version.
All thumbnails and local case videos are working again.
There is ONE remaining video-control change:
REMOVE FULLSCREEN from the existing Screen 2 video player.
Picture-in-Picture is currently working correctly and should REMAIN available.
==================================================
1. TARGET ONLY THE VIDEO COMPONENT
==================================================
Inspect:
src/components/CaseVideoPlayer.tsx
Modify ONLY this file unless absolutely technically unavoidable.
Do NOT modify:
- media files;
- media paths;
- mockData.ts;
- App.tsx;
- CaseReview.tsx;
- any other component.
==================================================
2. REMOVE FULLSCREEN
==================================================
Remove the existing fullscreen control from the Screen 2 case video player.
If the component currently contains any explicit fullscreen implementation such as:
- handleFullscreen
- requestFullscreen()
- exitFullscreen()
- a fullscreen button/icon
remove only that fullscreen functionality.
If the HTML5 video element also exposes browser fullscreen through its native controls, add the minimum supported controls restriction necessary to suppress fullscreen, such as:
controlsList="nofullscreen nodownload noremoteplayback"
Do NOT remove the normal native video controls.
==================================================
3. KEEP PICTURE-IN-PICTURE
==================================================
Picture-in-Picture is approved.
Do NOT add:
disablePictureInPicture
Do NOT suppress or remove Picture-in-Picture.
Preserve the existing browser Picture-in-Picture behavior exactly as it currently works.
==================================================
4. PRESERVE EVERYTHING ELSE
==================================================
Preserve:
- current video source;
- current local asset paths;
- inline video dimensions;
- video aspect ratio;
- play / pause;
- timeline / scrubbing;
- volume;
- Picture-in-Picture;
- Screen 2 layout;
- all moderation controls;
- all case data.
Do NOT create:
- an expanded-video modal;
- a React Portal;
- custom playback controls;
- new video state synchronization;
- a new overlay;
- any replacement fullscreen experience.
Do NOT modify Screen 1 or any queue/navigation behavior.
Do NOT perform any unrelated cleanup or visual changes.
This iteration has ONE target:
REMOVE FULLSCREEN WHILE PRESERVING THE EXISTING WORKING VIDEO PLAYER AND PICTURE-IN-PICTURE.
Change nothing else.
==================================================
5. VERIFY THE ACTUAL PREVIEW
==================================================
Do not report completion based only on build success.
Verify in the running preview that:
1. Screen 1 thumbnails still load.
2. Screen 2 videos still load.
3. Video playback still works.
4. Scrubbing still works.
5. Volume still works.
6. Fullscreen is no longer available.
7. Picture-in-Picture is still available and works.
8. No media path changed.
9. No unrelated UI changed.
When finished report:
- exact file changed;
- exactly what fullscreen code/control was removed;
- whether controlsList was changed;
- confirmation that Picture-in-Picture remains enabled;
- whether all 9 checks passed.
Change nothing else.
```

**What came back:** Removing fullscreen worked and normal inline playback, scrubbing and volume still worked.

**What I changed next and why:** I left the video player alone and fixed the last obvious Screen 1 media-quality problem: the Internal News posters.

---

### AI Studio 24 — SCREEN 1 — INTERNAL NEWS ORIGINAL POSTER QUALITY ONLY

#### Prompt

```text
SCREEN 1 — INTERNAL NEWS ORIGINAL POSTER QUALITY ONLY
The current Ting Ting application is stable.
I have now manually added the FIVE ORIGINAL, HIGH-QUALITY Internal News poster images into the project's /public/ folder.
These are the approved source images.
The current Internal News carousel is displaying lower-quality / incorrect versions of the posters.
This iteration has ONE goal:
MAKE THE EXISTING INTERNAL NEWS CAROUSEL DISPLAY THE FIVE ORIGINAL LOCAL POSTER FILES AT THEIR PROPER QUALITY.
Do not redesign the carousel.
==================================================
1. INSPECT THE CURRENT INTERNAL NEWS IMPLEMENTATION
==================================================
First inspect:
src/components/NewsCarousel.tsx
and the current data source/file that provides the five Internal News image references.
Identify:
- the current five poster image paths;
- whether any poster currently uses a remote URL;
- whether any poster uses a generated, compressed, preview, thumbnail, screenshot, or lower-quality substitute;
- the current CSS/image fitting behavior.
Do not change anything yet until you identify the current source references.
==================================================
2. USE THE FIVE ORIGINAL LOCAL POSTERS
==================================================
Use ONLY the five original poster files that I manually placed in /public/.
They are:
/tingting-news-01.png
/tingting-news-02.png
/tingting-news-03.png
/tingting-news-04.png
/tingting-news-05.png
Use them in the existing Internal News slide order:
Slide 1 → /tingting-news-01.png
Slide 2 → /tingting-news-02.png
Slide 3 → /tingting-news-03.png
Slide 4 → /tingting-news-04.png
Slide 5 → /tingting-news-05.png
If any of these exact files do not exist in /public/, STOP and report which filename is missing instead of inventing a replacement path.
Do NOT:
- fetch any image from an external URL;
- use googleusercontent or another remote image host;
- regenerate any poster;
- recreate any poster;
- AI-enhance any poster;
- sharpen or upscale the bitmap artificially;
- create a screenshot or thumbnail version;
- compress or re-export the source image;
- replace the supplied posters with substitutes.
Use the original local image files directly.
==================================================
3. PRESERVE POSTER CLARITY
==================================================
The poster artwork and text must remain clear and readable.
Render the original images directly in the browser at their available source resolution.
Do not intentionally reduce their intrinsic resolution.
Avoid unnecessary image enlargement beyond what the existing carousel reasonably requires.
Do NOT apply:
- CSS blur;
- opacity reduction to the image itself;
- image filters;
- artificial sharpening;
- pixelation effects;
- low-resolution preview rendering.
Use normal browser image rendering.
==================================================
4. PRESERVE THE COMPLETE POSTER
==================================================
The full approved poster composition should remain visible.
Do not crop away:
- poster headings;
- text;
- logos/artwork;
- people;
- important edges of the composition.
Prefer containment behavior where necessary so important poster content is not lost.
Use behavior equivalent to:
object-fit: contain
if the existing carousel container aspect ratio would otherwise crop important parts of the supplied poster.
Do NOT distort or stretch the source aspect ratio.
If containment creates small unused space because the source image aspect ratio differs from the existing carousel frame, preserve the existing surrounding carousel styling rather than cropping the poster.
==================================================
5. PRESERVE THE EXISTING INTERNAL NEWS EXPERIENCE
==================================================
Do NOT change:
- number of slides;
- slide order;
- news titles;
- news descriptions/copy;
- carousel dimensions unless absolutely required to prevent source-image distortion;
- arrows;
- dots/indicators;
- autoplay behavior;
- carousel timing;
- hover behavior;
- mobile carousel interaction;
- Internal News heading;
- surrounding Screen 1 layout.
Do not add a new news feature.
Do not add click-through pages or links.
==================================================
6. STRICT APPLICATION PRESERVATION
==================================================
Do NOT modify:
- prioritized Review Queue;
- START REVIEW;
- case ordering;
- Search Case ID;
- filters;
- case cards;
- thumbnails;
- case videos;
- Screen 1 ↔ Screen 2 navigation;
- scroll restoration;
- Screen 2;
- video player;
- Picture-in-Picture;
- moderation workflow;
- Policy Center;
- About Ting Ting;
- Community Guidelines;
- Maya Tan profile;
- hamburger menu;
- footer;
- typography system;
- overall colour system.
Do NOT perform:
- data-file consolidation;
- broad asset cleanup;
- unrelated external-dependency cleanup;
- mobile redesign;
- any other visual polish.
This iteration has ONE change category:
INTERNAL NEWS POSTER SOURCE + RENDERING QUALITY.
Change nothing else.
==================================================
7. LOCAL-ASSET REQUIREMENT
==================================================
After the correction, all five Internal News poster images used by the running carousel must resolve from LOCAL /public/ paths:
/tingting-news-01.png
/tingting-news-02.png
/tingting-news-03.png
/tingting-news-04.png
/tingting-news-05.png
There must be no runtime remote URL used for any of these five poster images.
Do not introduce an outside service.
==================================================
8. VERIFY THE ACTUAL RUNNING PREVIEW
==================================================
Do not report completion based only on TypeScript/build success.
Verify in the actual running preview that:
1. All five original posters load.
2. Slide 1 uses /tingting-news-01.png.
3. Slide 2 uses /tingting-news-02.png.
4. Slide 3 uses /tingting-news-03.png.
5. Slide 4 uses /tingting-news-04.png.
6. Slide 5 uses /tingting-news-05.png.
7. Posters are visibly clear and use the original local source files.
8. No important poster text/content is cropped.
9. Images are not stretched or distorted.
10. Carousel arrows still work.
11. Carousel indicators still work.
12. Existing autoplay/timing still works.
13. Mobile carousel remains usable.
14. No remote URL is used for any of the five news posters.
15. No unrelated Screen 1 or Screen 2 behavior changed.
When finished, report:
- exact files changed;
- previous image source/path for each of the five slides;
- new local path for each slide;
- whether any previous image reference was remote;
- the image-fit/rendering rule used;
- confirmation that no source image was regenerated, compressed, enhanced or replaced;
- whether all 15 checks passed;
- any implementation choice you made that I did not explicitly specify.
Change nothing else.
```

**What came back:** The carousel switched from the lower-quality remote poster references to the five original local high-resolution PNGs, and the existing carousel behavior stayed intact.

**What I changed next and why:** I locked Internal News and ran a read-only compliance audit before making any more structural changes.

---

### AI Studio 25 — FINAL COMPLIANCE AUDIT ONLY — DO NOT EDIT ANY FILE

#### Prompt

```text
FINAL COMPLIANCE AUDIT ONLY — DO NOT EDIT ANY FILE
Inspect the entire current Ting Ting project and REPORT ONLY.
Do not modify any file.
Do not build new features.
Do not refactor anything.
Do not delete anything.
I need two audits.
1. EXTERNAL / RUNTIME DEPENDENCY AUDIT
Search the entire project for:
- http://
- https://
- googleusercontent
- fetch(
- axios
- @google/genai
- GEMINI
- API_KEY
- process.env
- import.meta.env
Report every matching file and the purpose of each match.
Specifically identify:
- remote images;
- remote fonts;
- remote videos;
- API/model imports;
- API-key handling;
- network calls;
- anything the running browser app depends on externally.
Do NOT print the value of any secret or key.
2. INVENTED-DATA AUDIT
Identify every source file that currently contains fictional Ting Ting product content or invented values, including:
- case data;
- moderator/profile data;
- news metadata;
- policy content;
- enforcement options;
- decision-basis options;
- About Ting Ting copy;
- Community Guidelines copy;
- footer/contact/office information;
- invented names;
- invented dates;
- invented numbers;
- invented IDs;
- invented asset-path mappings.
Tell me exactly which files contain invented product data/content.
Do not count:
- TypeScript interfaces/types;
- component layout code;
- CSS classes;
- generic UI labels such as Close, Cancel, Back, Search, etc.
3. FINAL REPORT
Return only:
A. REMOTE / EXTERNAL DEPENDENCIES
File | Match | What it is | Must be localized/removed? Yes/No
B. INVENTED DATA LOCATIONS
File | Invented content contained there
C. CURRENT DATA FILES
List every file under src/data/
D. COMPLIANCE SUMMARY
- Any model/API call present? Yes/No
- Any API-key handling present? Yes/No
- Any runtime external URL dependency present? Yes/No
- More than one invented-data file/location present? Yes/No
E. MINIMUM FIX PLAN
Give the smallest possible set of changes required to satisfy:
- no outside runtime service/URL dependency;
- all invented product values in one dedicated data file.
DO NOT IMPLEMENT THE FIXES.
Change nothing.
```

**What came back:** The audit found no active model/API call, API-key flow, fetch or axios use. It did find remote logo/avatar URLs, external Google Fonts and invented Ting Ting content spread across several files.

**What I changed next and why:** I handled the remaining runtime dependencies first and left the larger one-data-file refactor until the end.

---

### AI Studio 26 — LOCALIZE TING TING LOGO AND MAYA AVATAR ONLY — failed authenticated-asset copy attempt

#### Prompt

```text
LOCALIZE TING TING LOGO AND MAYA AVATAR ONLY

The current application is stable.

The final app must not depend at runtime on the two remote Google-hosted image URLs currently used for:

1. APPROVED_LOGO_URL
2. MAYA_AVATAR_URL

These are the exact approved Stitch-origin images already displayed correctly in the app.

This task is ONLY to make local copies of those exact existing images and replace the runtime remote references.

1. Inspect the current APPROVED_LOGO_URL and MAYA_AVATAR_URL values in src/data/mockData.ts.

2. Download/copy the exact image bytes from those existing URLs into /public/.

Do NOT:
- regenerate either image;
- recreate either image;
- AI-enhance either image;
- crop either image;
- resize either image;
- alter its visual appearance;
- substitute another image.

3. Detect the actual image format/content type and save each with an appropriate local filename, for example:

/tingting-logo.png or .webp
/maya-avatar.png or .webp

Use the actual format rather than forcing the wrong extension.

4. Replace ONLY the two remote URL constants in src/data/mockData.ts with the new local /public/ paths.

5. Verify in the running preview that:
- the Ting Ting logo looks exactly the same as before;
- Maya Tan’s avatar looks exactly the same as before;
- both load from local paths;
- no googleusercontent URL remains for either asset.

6. Do NOT modify:
- any other data;
- Internal News;
- case media;
- Screen 1;
- Screen 2;
- queue logic;
- filters;
- moderation workflow;
- fonts;
- package.json;
- metadata.json;
- any other component.

When finished, report:
- exact local filename created for the logo;
- exact local filename created for Maya avatar;
- detected image format and dimensions;
- files changed;
- old remote path → new local path for each asset.

Change nothing else.
```

**What came back:** AI Studio could not copy the two protected Google-hosted images because the sandbox received a 403 without my browser session. It correctly stopped instead of recreating them.

**What I changed next and why:** I captured the approved logo and Maya avatar myself, placed them in /public, and then asked AI Studio only to change the references.

---

### AI Studio 27 — LOCALIZE TING TING LOGO + MAYA AVATAR REFERENCES ONLY

#### Prompt

```text
LOCALIZE TING TING LOGO + MAYA AVATAR REFERENCES ONLY
The approved local image files now exist in /public/:
/tingting-logo.png
/maya-avatar.png
The application is currently stable.
This iteration has ONE goal:
Replace the two remaining remote Google-hosted image references with these local files.
==================================================
1. UPDATE ONLY THE TWO ASSET REFERENCES
==================================================
In:
src/data/mockData.ts
replace the current remote APPROVED_LOGO_URL value with:
/tingting-logo.png
replace the current remote MAYA_AVATAR_URL value with:
/maya-avatar.png
Do not change the constant names.
==================================================
2. STRICT PRESERVATION
==================================================
Do NOT modify:
- the two local PNG files;
- any other data in mockData.ts;
- Internal News paths;
- case data;
- case thumbnails;
- case videos;
- Screen 1;
- START REVIEW;
- queue ordering;
- filters;
- search;
- Screen 1 ↔ Screen 2 navigation;
- Screen 2;
- video player;
- Picture-in-Picture;
- Policy Center;
- About Ting Ting;
- Community Guidelines;
- Header layout;
- profile-popover layout;
- footer;
- typography;
- package.json;
- metadata.json;
- index.html;
- Google Fonts;
- any other file unless absolutely unavoidable.
Do not perform the one-data-file refactor in this iteration.
Do not add or remove any feature.
Change nothing else.
==================================================
3. VERIFY THE RUNNING PREVIEW
==================================================
Verify that:
1. The Ting Ting logo still displays.
2. Maya Tan's avatar still displays.
3. The logo loads from /tingting-logo.png.
4. The avatar loads from /maya-avatar.png.
5. Neither APPROVED_LOGO_URL nor MAYA_AVATAR_URL contains googleusercontent.com anymore.
6. Internal News still works.
7. Screen 1 still works.
8. Screen 2 still works.
9. No unrelated UI changed.
When finished report:
- exact file changed;
- old logo URL → new logo path;
- old avatar URL → new avatar path;
- whether all 9 checks passed.
Change nothing else.
```

**What came back:** The logo and Maya avatar were switched to /tingting-logo.png and /maya-avatar.png, and both still looked correct in the preview.

**What I changed next and why:** I checkpointed that stable state and removed the last external font/icon dependency next.

---

### AI Studio 28 — FINAL COMPLIANCE FIX — REMOVE EXTERNAL GOOGLE FONTS ONLY

#### Prompt

```text
FINAL COMPLIANCE FIX — REMOVE EXTERNAL GOOGLE FONTS ONLY

The current Ting Ting application is stable and checkpointed.

The Ting Ting logo, Maya Tan avatar, Internal News posters, case thumbnails and case videos are now all local assets.

A compliance audit found one remaining runtime external-service dependency:

Google Fonts loaded from fonts.googleapis.com and fonts.gstatic.com in index.html.

This iteration has ONE goal:

REMOVE ALL EXTERNAL GOOGLE FONT DEPENDENCIES WHILE PRESERVING THE CURRENT INTERFACE AS CLOSELY AS POSSIBLE.

==================================================
1. INSPECT FONT USAGE FIRST
==================================================

Inspect:
- index.html
- src/index.css
- any component that depends on Material Symbols or explicitly named Google font families

Identify the current use of:
- Hanken Grotesk
- JetBrains Mono
- Newsreader
- Material Symbols

Do not modify unrelated application code.

==================================================
2. REMOVE EXTERNAL FONT REQUESTS
==================================================

Remove from index.html:
- fonts.googleapis.com preconnect
- fonts.gstatic.com preconnect
- all Google Fonts stylesheet links

After this iteration, the running application must make ZERO requests to:
fonts.googleapis.com
or:
fonts.gstatic.com

Do not replace them with another external font provider.

==================================================
3. USE LOCAL / SYSTEM FONT FALLBACKS
==================================================

Preserve the existing typography hierarchy as closely as possible using local/system font stacks.

Use appropriate fallbacks such as:

For the primary sans-serif interface:
system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif

For monospace text:
ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace

For serif/editorial text where Newsreader was used:
Georgia, "Times New Roman", serif

Do not broadly redesign typography.

Do not change:
- font sizes;
- weights unless required for compatibility;
- spacing;
- colors;
- layout dimensions.

==================================================
4. MATERIAL SYMBOLS
==================================================

If Material Symbols currently depend on the removed Google-hosted font:
replace ONLY those affected icons with equivalent icons from the icon library already installed in this project.

Prefer the existing lucide-react dependency.

Do NOT introduce another icon library or external asset service.

Preserve the meaning, approximate size and placement of each affected icon.

==================================================
5. STRICT PRESERVATION
==================================================

Do NOT modify:
- Screen 1 prioritized queue;
- START REVIEW;
- queue ordering;
- Search Case ID;
- filters;
- Internal News;
- case cards;
- thumbnails;
- videos;
- Screen 1 ↔ Screen 2 navigation;
- scroll restoration;
- Screen 2 workflow;
- Picture-in-Picture;
- Policy Center;
- About Ting Ting;
- Community Guidelines;
- Maya Tan profile content;
- footer content;
- invented data;
- mockData.ts;
- policyData.ts;
- package.json;
- metadata.json.

Do NOT perform the one-data-file consolidation yet.

Do NOT make unrelated visual polish changes.

This iteration has ONE change category:
REMOVE EXTERNAL GOOGLE FONT RUNTIME DEPENDENCIES.

Change nothing else.

==================================================
6. VERIFY THE ACTUAL RUNNING PREVIEW
==================================================

Verify that:
1. The application builds successfully.
2. Screen 1 remains visually readable and stable.
3. Screen 2 remains visually readable and stable.
4. Header layout remains intact.
5. Internal News remains intact.
6. Policy Center remains intact.
7. About Ting Ting remains intact.
8. Community Guidelines remains intact.
9. Icons previously using Material Symbols still render correctly.
10. No request to fonts.googleapis.com remains.
11. No request to fonts.gstatic.com remains.
12. No new external font/icon service was introduced.
13. No unrelated workflow changed.

Then search the entire project for:
fonts.googleapis.com
fonts.gstatic.com

Both should return zero runtime references.

When finished report:
- exact files changed;
- Google Fonts links removed;
- previous font family → new local/system fallback for each family;
- any Material Symbols replaced and their replacement icon;
- remaining fonts.googleapis.com / fonts.gstatic.com matches, if any;
- whether all 13 checks passed.

Change nothing else.
```

**What came back:** The Google Fonts links were removed, system/local font fallbacks were used, and Material Symbols were replaced with lucide-react icons. The app still built and the screens remained usable.

**What I changed next and why:** After checking the UI, I treated the separate Picture-in-Picture issue as its own problem rather than blaming the font change without evidence.

---

### AI Studio 29 — SCREEN 2 — RESTORE EXPLICIT PICTURE-IN-PICTURE ONLY

#### Prompt

```text
SCREEN 2 — RESTORE EXPLICIT PICTURE-IN-PICTURE ONLY
The current Ting Ting application is stable.
The previous compliance iteration removed external Google Fonts and replaced Material Symbols with local lucide-react icons.
The Screen 2 case video still loads and plays correctly.
Fullscreen has already been intentionally removed and MUST remain removed.
There is ONE current video-control problem:
Picture-in-Picture is not reliably available/working in the current running preview.
This iteration has ONE goal:
MAKE PICTURE-IN-PICTURE EXPLICITLY AVAILABLE AND WORKING ON THE EXISTING SCREEN 2 VIDEO PLAYER.
==================================================
1. TARGET ONLY CASEVIDEOPLAYER
==================================================
Inspect:
src/components/CaseVideoPlayer.tsx
Modify ONLY this file unless technically unavoidable.
Do NOT modify:
- App.tsx
- CaseReview.tsx
- mockData.ts
- any media file
- any media path
- any other component
==================================================
2. KEEP FULLSCREEN REMOVED
==================================================
Do NOT restore:
- fullscreen button
- requestFullscreen()
- exitFullscreen()
- browser/native fullscreen
Keep the current fullscreen removal intact.
==================================================
3. ADD ONE EXPLICIT PICTURE-IN-PICTURE CONTROL
==================================================
Do not rely only on the browser deciding whether to expose a native PiP control.
Add one small, clear Picture-in-Picture button to the EXISTING video control area.
Use an appropriate icon from the already-installed lucide-react library if available.
Do NOT introduce another icon library.
When clicked:
- use the existing HTMLVideoElement;
- if Picture-in-Picture is supported and the video is not currently in PiP, call:
video.requestPictureInPicture()
- if the same video is currently in Picture-in-Picture, allow exiting using:
document.exitPictureInPicture()
Handle unsupported browsers gracefully without breaking video playback.
Do not reload the page.
Do not navigate anywhere.
==================================================
4. PRESERVE THE VIDEO PLAYER
==================================================
Preserve exactly:
- current local video source
- current media path
- current inline player size
- current aspect ratio
- play / pause
- timeline / scrubbing
- volume
- current poster/video behavior
Do NOT:
- create an expanded-video modal
- create custom fullscreen
- change video size
- change object-fit
- change media files
- change case data
- add download controls
- add social-media controls
==================================================
5. STRICT APPLICATION PRESERVATION
==================================================
Do NOT modify:
- Screen 1
- START REVIEW
- prioritized queue
- search
- filters
- Internal News
- logo
- Maya avatar
- navigation
- scroll restoration
- Screen 2 layout outside the video control
- Final Action
- Decision Basis
- Moderator Note
- REVIEW & CONFIRM
- confirmation modal
- Policy Center
- About Ting Ting
- Community Guidelines
- header
- footer
- fonts
- index.html
- index.css
Do NOT perform:
- data consolidation
- dependency cleanup
- unrelated refactoring
- visual redesign
This iteration has ONE target:
EXPLICIT PICTURE-IN-PICTURE CONTROL ONLY.
Change nothing else.
==================================================
6. VERIFY IN THE ACTUAL RUNNING PREVIEW
==================================================
Do not report success based only on compilation.
Verify that:
1. Screen 2 video still loads.
2. Video still plays.
3. Scrubbing still works.
4. Volume still works.
5. Fullscreen remains unavailable.
6. A clear Picture-in-Picture control is visible.
7. Clicking it opens the SAME case video in browser Picture-in-Picture.
8. Clicking/exiting PiP returns correctly to Screen 2.
9. Video playback is not reset or broken.
10. Screen 1 remains unchanged.
11. No media path changed.
12. No unrelated UI changed.
When finished report:
- exact file changed;
- whether only CaseVideoPlayer.tsx changed;
- how Picture-in-Picture was implemented;
- how unsupported browsers are handled;
- confirmation that fullscreen remains removed;
- whether all 12 checks passed.
Change nothing else.
```

**What came back:** AI Studio added an explicit Picture-in-Picture control, but I still could not rely on PiP in the preview.

**What I changed next and why:** PiP was optional for the assignment, so I stopped spending quota on it and decided to remove it completely.

---

### AI Studio 30 — SCREEN 2 — REMOVE PICTURE-IN-PICTURE ONLY

#### Prompt

```text
SCREEN 2 — REMOVE PICTURE-IN-PICTURE ONLY
The current Ting Ting application is stable.
Fullscreen has already been intentionally removed from the Screen 2 case video player.
I now want Picture-in-Picture removed as well.
The final Screen 2 video player should remain a SIMPLE INLINE VIDEO PLAYER ONLY.
This iteration has ONE target:
REMOVE PICTURE-IN-PICTURE WHILE PRESERVING ALL NORMAL INLINE VIDEO PLAYBACK.
==================================================
1. TARGET ONLY THE VIDEO COMPONENT
==================================================
Inspect:
src/components/CaseVideoPlayer.tsx
Modify ONLY this file.
Do NOT modify any other file unless absolutely technically unavoidable.
==================================================
2. REMOVE ALL PICTURE-IN-PICTURE BEHAVIOR
==================================================
Remove any explicit Picture-in-Picture implementation, including if currently present:
- PictureInPicture or PictureInPicture2 icon imports;
- PiP button/control;
- controls-pip-toggle-btn;
- isPipActive state;
- enterpictureinpicture listeners;
- leavepictureinpicture listeners;
- requestPictureInPicture();
- exitPictureInPicture();
- togglePictureInPicture or equivalent PiP handlers.
Do not replace PiP with another video feature.
==================================================
3. DISABLE NATIVE PICTURE-IN-PICTURE
==================================================
On the existing HTML5 video element, disable browser/native Picture-in-Picture using:
disablePictureInPicture={true}
Preserve the existing fullscreen restriction.
The final player must expose:
- NO fullscreen;
- NO Picture-in-Picture.
==================================================
4. KEEP NORMAL INLINE VIDEO CONTROLS
==================================================
Preserve exactly:
- current local video source;
- current media paths;
- current inline player dimensions;
- current video aspect ratio;
- play / pause;
- timeline / scrubbing;
- volume / mute;
- current video styling;
- current Screen 2 position.
Do NOT create:
- expanded-video modal;
- fullscreen replacement;
- custom overlay;
- new media state;
- download control;
- social controls.
==================================================
5. STRICT PRESERVATION
==================================================
Do NOT modify:
- Screen 1;
- START REVIEW;
- prioritized queue ordering;
- search;
- filters;
- Internal News;
- case thumbnails;
- case media files;
- Screen 1 ↔ Screen 2 navigation;
- scroll restoration;
- Screen 2 layout outside the video player;
- Final Action;
- Decision Basis;
- Moderator Note;
- REVIEW & CONFIRM;
- confirmation modal;
- Policy Center;
- About Ting Ting;
- Community Guidelines;
- header;
- footer;
- fonts;
- logo;
- Maya avatar;
- data files.
Do NOT perform any refactor or cleanup unrelated to PiP.
Change nothing else.
==================================================
6. VERIFY THE ACTUAL PREVIEW
==================================================
Verify in the running preview that:
1. Screen 2 video still loads.
2. Video still plays.
3. Play/pause still works.
4. Timeline/scrubbing still works.
5. Volume/mute still works.
6. Fullscreen remains unavailable.
7. Picture-in-Picture is no longer available.
8. No media path changed.
9. Screen 1 remains unchanged.
10. No unrelated UI or workflow changed.
When finished report:
- exact file changed;
- exactly what PiP code/control was removed;
- confirmation that disablePictureInPicture is enabled;
- confirmation that fullscreen remains removed;
- whether all 10 checks passed.
Change nothing else.
```

**What came back:** PiP was removed and the simple inline player still had the controls I actually needed: play/pause, scrubbing and volume, with fullscreen already gone.

**What I changed next and why:** I locked the product and attempted the final structural compliance step: one dedicated file for all invented Ting Ting values.

---

### AI Studio 31 — FINAL COMPLIANCE FIX — CONSOLIDATE ALL INVENTED PRODUCT DATA INTO ONE FILE

#### Prompt

```text
FINAL COMPLIANCE FIX — CONSOLIDATE ALL INVENTED PRODUCT DATA INTO ONE FILE

The current Ting Ting application is stable, visually approved, and checkpointed to GitHub.

All product functionality is now LOCKED.

This iteration has ONE assignment-compliance goal:

MOVE ALL INVENTED TING TING PRODUCT DATA / FICTIONAL CONTENT VALUES INTO ONE SINGLE DEDICATED DATA FILE.

Do NOT redesign, rewrite, simplify, improve, or reinterpret the product.

==================================================
1. CREATE THE SINGLE SOURCE-OF-TRUTH DATA FILE
==================================================

Create exactly one dedicated product-data file:
src/data/tingTingData.ts

This file must become the single source of truth for all invented Ting Ting product values and fictional product content.

TypeScript interfaces/types may remain in:
src/types.ts
because types are code definitions, not invented product data.

Images, videos, and other binary assets remain in /public/ or their existing asset folders.
Their LOCAL PATH VALUES should be stored in tingTingData.ts where they are part of product data.

==================================================
2. MOVE ALL EXISTING DATA FROM mockData.ts
==================================================

Move the existing contents/data definitions from:
src/data/mockData.ts
into:
src/data/tingTingData.ts

including the existing:
- APPROVED_LOGO_URL local path
- MAYA_AVATAR_URL local path
- NEWS_SLIDES
- INITIAL_CASES
- POLICY_CATEGORIES
- all case IDs
- creator handles
- priorities
- queue ages
- statuses
- captions
- scenario information
- recommendation data
- signals
- policy references
- local thumbnail paths
- local video paths
- all other fictional case values currently stored there

Preserve every existing value EXACTLY.
Do not rewrite or regenerate case content.

==================================================
3. MOVE ALL EXISTING POLICY DATA
==================================================

Move all fictional policy data from:
src/data/policyData.ts
into:
src/data/tingTingData.ts

including:
- policy IDs / codes
- policy names
- definitions
- scope
- violation criteria
- exceptions
- enforcement outcomes
- all other existing fictional policy content

Preserve the wording exactly.
Do not generate new policies.

==================================================
4. MOVE MAYA TAN PROFILE DATA
==================================================

Move the invented moderator/profile values currently hardcoded in:
src/components/Header.tsx
src/components/CaseReviewHeader.tsx
into tingTingData.ts.

This includes existing values such as:
- Maya Tan
- employee/moderator ID
- Content Moderator role
- avatar local path
- any other fictional Maya profile value

Both components must import and render the SAME profile data from tingTingData.ts.
Do not change the profile design or behavior.

==================================================
5. MOVE MODERATION DECISION DATA
==================================================

Move fictional moderation-option data currently declared in:
src/components/CaseReview.tsx
into tingTingData.ts.

This includes the existing:
- FINAL_ACTION_OPTIONS
- Final Action descriptions
- POLICY_BASIS_OPTIONS
- CONTEXT_BASIS_OPTIONS
- decision-basis labels/options

Preserve every existing option and wording exactly.
Do not change the moderation workflow.

==================================================
6. MOVE POLICY CENTER FICTIONAL CONTENT
==================================================

Move fictional product/policy content currently hardcoded in:
src/components/PolicyCenter.tsx
into tingTingData.ts.

This includes the existing:
- Policy Framework Overview content
- purpose statement
- review considerations
- framework version
- fictional policy-facing explanatory content

Do NOT move generic UI words such as:
- Search
- Close
- Back
- Overview
unless they are part of fictional Ting Ting content.

Do not change Policy Center layout, navigation, scroll behavior, or styling.

==================================================
7. MOVE ABOUT TING TING FICTIONAL CONTENT
==================================================

Move the fictional company/product content from:
src/components/AboutModal.tsx
into tingTingData.ts.

This includes existing:
- company history
- founded year
- Singapore origin
- platform statistics
- regional-hub numbers
- leadership/founder names
- mission/company narrative
- founder-image local path
- other fictional Ting Ting corporate facts

Preserve all existing wording and values exactly.
Do not redesign the About modal.

==================================================
8. MOVE COMMUNITY GUIDELINES CONTENT
==================================================

Move the fictional Community Guidelines content currently declared in:
src/components/CommunityGuidelinesModal.tsx
into tingTingData.ts.

This includes:
- categories
- article/category names
- summaries
- prohibited-content lists
- exception rules
- all fictional guideline content

Preserve wording exactly.
Do not change Community Guidelines behavior or scroll synchronization.

==================================================
9. MOVE FOOTER / CORPORATE DATA
==================================================

Move fictional corporate/contact information currently hardcoded in:
src/components/Footer.tsx
into tingTingData.ts.

This includes:
- Safety Operations phone
- Safety Operations email
- General Enquiries phone
- General Enquiries email
- Global Offices list
- office/location names
- tagline
- legal/copyright entity text
- fictional dates/numbers contained in those values

Preserve all values exactly.
Do not change Footer layout or styling.

==================================================
10. SINGLE-DATA-FILE REQUIREMENT
==================================================

After the refactor:
src/data/tingTingData.ts
must be the ONLY dedicated file containing invented Ting Ting product data/content.

Remove:
src/data/mockData.ts
src/data/policyData.ts
after all imports have been safely migrated.

Do NOT leave duplicate copies of the invented data in the old files.
Do NOT create:
- another mock file
- another policy-data file
- another content-data file
- JSON duplicates
- backup data files inside src/

There must be ONE dedicated product-data source.

==================================================
11. WHAT MAY REMAIN INSIDE COMPONENTS
==================================================

Components may retain generic interface labels and structural UI text such as:
- Search
- Close
- Cancel
- Confirm
- Back to Queue
- Start Review
- View Decision
- Previous
- Next
- Optional
- Required
because these are generic interface labels rather than invented Ting Ting dataset values.

Components may also retain:
- JSX
- CSS/Tailwind classes
- component state
- event handlers
- validation logic
- rendering logic

Do not move programming logic into the data file.

==================================================
12. ABSOLUTE VALUE PRESERVATION
==================================================

This is a DATA-LOCATION REFACTOR ONLY.
Do NOT change ANY existing fictional value.

Do NOT:
- rename a case
- modify a Case ID
- modify creator handles
- modify priorities
- modify queue ages
- modify policies
- modify captions
- rewrite corporate copy
- rewrite guidelines
- change contact data
- add new values
- remove existing values
- regenerate content

The rendered product should contain the SAME content before and after this refactor.

==================================================
13. STRICT PRODUCT PRESERVATION
==================================================

Do NOT modify:
- Screen 1 layout
- prioritized queue behavior
- START REVIEW
- Priority → Queue Age sorting
- filters
- Search Case ID
- Internal News
- carousel behavior
- case cards
- thumbnails
- videos
- Screen 1 ↔ Screen 2 navigation
- scroll restoration
- Screen 2 layout
- inline video player
- fullscreen/Picture-in-Picture state
- Final Action behavior
- Decision Basis behavior
- Moderator Note behavior
- REVIEW & CONFIRM
- confirmation modal
- completed-case behavior
- counters
- Policy Center behavior
- About behavior
- Community Guidelines behavior
- Header behavior
- Footer behavior
- responsive layouts
- typography
- colors

Do not add any new feature.
Do not perform unrelated cleanup.
Do not modify package.json or metadata.json in this iteration.

This iteration has ONE change category:
INVENTED PRODUCT DATA CONSOLIDATION.

Change nothing else.

==================================================
14. VERIFY THE DATA ARCHITECTURE
==================================================

After the refactor, verify:
1. src/data/tingTingData.ts exists.
2. src/data/mockData.ts no longer exists.
3. src/data/policyData.ts no longer exists.
4. All previous consumers import the required product values from tingTingData.ts.
5. Maya profile data is no longer duplicated between Header.tsx and CaseReviewHeader.tsx.
6. Moderation-option datasets are no longer hardcoded in CaseReview.tsx.
7. Policy datasets/content are no longer separately stored in PolicyCenter.tsx.
8. About fictional company facts are sourced from tingTingData.ts.
9. Community Guidelines fictional data is sourced from tingTingData.ts.
10. Footer fictional contact/office data is sourced from tingTingData.ts.
11. The application builds successfully.

==================================================
15. VERIFY THE ACTUAL RUNNING PRODUCT
==================================================

Do not report success based only on compilation.

Verify in the running preview:
12. Screen 1 renders all 10 cases.
13. Prioritized queue ordering is unchanged.
14. START REVIEW works.
15. Search works.
16. Priority filter works.
17. Status filter works.
18. Policy filter works.
19. Internal News still shows all five posters.
20. Screen 2 opens the correct selected Case ID.
21. Screen 2 video plays.
22. Final Action choices are unchanged.
23. Decision Basis choices are unchanged.
24. Moderator Note works.
25. REVIEW & CONFIRM works.
26. Confirmation modal works.
27. Completed case state/counts update correctly.
28. Policy Center works.
29. About Ting Ting works.
30. Community Guidelines works.
31. Header / Maya profile works.
32. Footer remains intact.
33. No unrelated visual change occurred.

==================================================
16. FINAL REPORT
==================================================

When finished, report:
A. Exact files created.
B. Exact files deleted.
C. Exact files modified.
D. Every exported data group now stored in tingTingData.ts.
E. Every component updated to import from tingTingData.ts.
F. Confirmation that mockData.ts and policyData.ts were removed.
G. Confirmation that no invented Ting Ting product data remains duplicated across multiple dedicated data files.
H. Any invented values intentionally left inside components and WHY they qualify as generic UI labels rather than product data.
I. Whether all 33 verification checks passed.
J. Any implementation choice you made that I did not explicitly specify.

Do not make any further changes after verification.

Change nothing else.
```

**What came back:** The refactor started but did not finish. AI Studio created `src/data/tingTingData.ts`, modified `src/types.ts`, and began changing `src/components/Header.tsx`, then stopped with the provider/quota failure. I was left with a partial migration rather than a completed one-data-file refactor.

**What I changed next and why:** I did not push the partial migration. When I resumed the project, I restored the last stable version before this attempt so I could protect the working product and retry the structural requirement from a clean state.

---

### AI Studio 32 — Separate one-page rebuild master prompt (abandoned branch)

#### Prompt

```text
PROMPT 1 — MASTER PROMPT
TING TING — SAFETY REVIEW

ROLE

You are a senior front-end developer building a React web app.

Implement the product exactly as specified below.

This is an already-defined business workflow. Do not redesign the product, invent additional workflows, or add features I did not request.

I am not a programmer. If you make an implementation choice I did not specify, state that choice in one short line at the end rather than silently adding product behavior.


GOAL

Build the front end of TING TING — SAFETY REVIEW.

The user is:

Maya Tan
Content Safety Moderator

Business function:

Trust & Safety — Content Moderation Operations.

Her one job on this product is:

Work through a prioritized queue of videos requiring human review, inspect one case against its context, system recommendation and relevant policy, choose and confirm the appropriate final moderation action, and return that case to the queue as completed.

Build this as ONE MAIN PAGE.

Do NOT navigate to a separate review page.

The numbered acceptance tests are:

1. The page opens with exactly 10 fictional moderation cases.

2. All 10 cases initially have status:

Pending Review.

3. Screen-level counters initially show:

10 Pending
0 Completed

4. Pending cases are automatically ordered:

First by Priority:
Top → Medium → Low

Then within each Priority:
longest Queue Age → shortest Queue Age.

5. Every Pending case card contains:

- local thumbnail
- Case ID
- creator handle
- policy category
- Priority
- Queue Age
- Pending Review status
- START REVIEW →

6. Clicking START REVIEW on a case expands the review workflow directly underneath / inside that same case card.

Do NOT navigate to another page.

Only one case workflow may be expanded at a time.

7. Expanding one case must NOT reset the queue, filters, search, counts, or other case data.

8. The expanded review workflow must dynamically use the exact selected case.

Never hard-code Case 01.

9. The expanded workflow contains:

A. MEDIA

- local case video
- play
- pause
- timeline / seek
- mute / unmute
- playsInline

No fullscreen.
No Picture-in-Picture.
No expanded-video popup.

B. CASE CONTEXT

- Case ID
- creator
- caption
- language / market
- queue source
- Priority
- Queue Age

C. SYSTEM ASSESSMENT

- system recommended action
- confidence
- detected signals

The system recommendation is advisory only.

The moderator can choose any Final Action.

D. RELEVANT POLICY CONTEXT

- policy ID
- policy name
- policy guidance

E. FINAL ACTION

Nothing is preselected.

Show exactly six choices:

NO ACTION
Content remains available

REMOVE CONTENT
Remove from platform

AGE-GATE 18+
Restrict to adult viewers

RESTRICT RECOMMENDATION
Limit from recommendation surfaces

ADD VIEWER WARNING
Apply contextual viewing notice

ESCALATE REVIEW
Send for specialist review

Exactly one may be selected.

F. DECISION BASIS

Required.

Nothing selected initially.

Use one dropdown containing:

POLICY BASIS

Physical Risk & Imitation
Regulated Goods & Services
Hate Speech & Hateful Behavior
Harassment & Bullying
Shocking & Graphic Content
Body Exposure & Sexualized Behaviors
Integrity & Authenticity
Suicide & Self-Harm

CONTEXT / DECISION BASIS

Staged / fictional context
Educational context
Professional activity
Cultural / ceremonial context
Public-interest context
Policy threshold not met
Insufficient evidence
Viewer protection without removal
Specialist review required

G. MODERATOR NOTE

Optional empty textarea.

Do not make it required.

H. REVIEW & CONFIRM

The primary button is:

REVIEW & CONFIRM →

It remains disabled until:

- exactly one Final Action is selected
AND
- one Decision Basis is selected.

10. The expanded workflow also contains:

CANCEL REVIEW

Clicking it collapses the workflow and returns the card to its untouched Pending state.

11. Clicking REVIEW & CONFIRM opens a centered modal over the same page.

The modal title is:

CONFIRM MODERATION DECISION

Show:

Case ID

FINAL ACTION
[exact selected action]

DECISION BASIS
[exact selected basis]

MODERATOR NOTE
[exact note if entered; otherwise a restrained “None provided” state]

Buttons:

CANCEL
CONFIRM

12. CANCEL on the confirmation modal closes only the modal.

The expanded review workflow must remain open with all selections and note preserved.

13. CONFIRM shows a brief state:

RECORDING ACTION…

then:

ACTION RECORDED

14. After confirmation:

- close the modal
- collapse that case’s expanded review workflow
- change that case status from Pending to Completed
- decrease Pending by 1
- increase Completed by 1
- show the exact recorded Final Action on that case card
- use a restrained green completed treatment
- replace START REVIEW → with VIEW DECISION →

15. Completed cases move after all remaining Pending cases.

They no longer participate in the active Pending priority ordering.

16. Clicking VIEW DECISION expands that case inline in a read-only completed view showing:

- video
- case context
- recorded Final Action
- recorded Decision Basis
- recorded Moderator Note

Do not allow the recorded decision to be edited.

17. Include working Screen 1 controls:

SEARCH CASE ID

Search only Case ID.
Partial matching.
Case-insensitive.
Clear X.

PRIORITY FILTER

All
Top
Medium
Low

STATUS FILTER

All
Pending
Completed

POLICY FILTER

All
Physical Risk & Imitation
Regulated Goods & Services
Hate Speech & Hateful Behavior
Harassment & Bullying
Shocking & Graphic Content
Body Exposure & Sexualized Behaviors
Integrity & Authenticity
Suicide & Self-Harm

Search and filters must combine correctly.

Only one dropdown may be open at a time.

18. Include an Internal News carousel above the Review Queue using exactly five local poster paths:

/tingting-news-01.png
/tingting-news-02.png
/tingting-news-03.png
/tingting-news-04.png
/tingting-news-05.png

Required:

- one poster visible at a time
- previous
- next
- 01 / 05 through 05 / 05
- pagination indicator
- looping
- auto-advance around every 3.5 seconds
- pause on hover on desktop

Do not recreate poster artwork.

19. Include a compact header containing:

TING TING
SAFETY REVIEW

Search Case ID

Maya Tan
Content Moderator

Avatar path:

/maya-avatar.png

20. Clicking Maya Tan / avatar opens a small profile popover showing only:

Maya Tan

Employee ID
TT-SG-CM-02418

Role
Content Moderator

No email.
No logout.
No settings.
No employee statistics.

21. Include a hamburger menu containing only:

About
Policy
Community Guidelines

These may open lightweight supporting modal overlays.

They are NOT separate primary screens.

22. About, Policy and Community Guidelines must use fictional Ting Ting content only.

Keep them useful but secondary to the moderator’s one core job.

Do not turn them into additional workflows.

23. The application must be comfortably usable on a 390–430px mobile screen.

On mobile:

- one-column case list
- no horizontal overflow
- expanded review content stacks vertically
- action options remain comfortably tappable
- confirmation modal fits the viewport
- all information required to complete the moderation job remains available

24. Visual design:

Use a warm premium Ting Ting palette:

Main canvas:
warm ivory / off-white

Primary cards:
clean white

Secondary surfaces:
warm sand / beige

Primary text:
espresso / very dark brown

Secondary text:
muted warm grey-brown

Primary accent:
deep warm brown

Pending:
restrained red

Completed / recorded:
restrained green

Use:

- generous whitespace
- subtle warm borders
- restrained shadows
- clear typography hierarchy
- rounded cards
- polished consumer-tech presentation

Do NOT create:

- dark dashboard
- cybersecurity console
- blue enterprise SaaS interface
- sidebar layout

25. Initial queue order must be:

1. Case 03 — Top — 2h 10m
2. Case 10 — Top — 54m
3. Case 06 — Top — 21m
4. Case 02 — Top — 8m
5. Case 01 — Top — 3m
6. Case 08 — Medium — 10h 20m
7. Case 07 — Medium — 7h 45m
8. Case 04 — Medium — 4h 35m
9. Case 09 — Low — 22h 40m
10. Case 05 — Low — 15h 05m

26. The product succeeds when:

a moderator can identify the next case,
expand it,
inspect the evidence,
make a deliberate human decision,
confirm it,
and visibly see that same case return to the queue as Completed with the recorded action and updated counts,

without navigating away from the page.


OUTPUT

Create a running React + TypeScript front-end application.

Use normal in-memory React state.

One main page only.

The confirmation interaction and supporting About / Policy / Community Guidelines / profile views are modal or overlay states, not routed screens.

Keep EVERY invented Ting Ting product value in exactly ONE dedicated data file:

src/data/tingTingData.ts

This one file must contain all fictional product values, including:

- asset paths
- news records
- all 10 case records
- policy records
- priorities
- queue ages
- captions
- recommendations
- confidence values
- detected signals
- Final Action options
- Decision Basis options
- Maya profile
- fictional About content
- fictional Policy content
- fictional Community Guidelines content

Do NOT create:

mockData.ts
policyData.ts
aboutData.ts
guidelinesData.ts
duplicate JSON data files
hard-coded duplicate product values inside components

TypeScript interfaces/types may remain in src/types.ts.

Generic UI labels such as Search, Cancel, Confirm, Required and Optional may remain inside components.

Use reusable components.

Suggested structure:

src/App.tsx

src/data/tingTingData.ts

src/types.ts

src/components/Header.tsx
src/components/NewsCarousel.tsx
src/components/QueueFilterBar.tsx
src/components/CaseCard.tsx
src/components/InlineReviewWorkflow.tsx
src/components/CaseVideoPlayer.tsx
src/components/ConfirmationModal.tsx
src/components/AboutModal.tsx
src/components/PolicyModal.tsx
src/components/CommunityGuidelinesModal.tsx

Use these local asset references:

/maya-avatar.png

/tingting-news-01.png
through
/tingting-news-05.png

/case-01-thumb.png
through
/case-10-thumb.png

/case-01-video.mp4
through
/case-10-video.mp4

The actual local binary files may be added to /public after the initial generation.

If a referenced local file is currently missing:

keep the correct local path.

Do NOT:

- fetch a replacement
- generate a substitute
- use remote stock media

When done:

1. run TypeScript/build checks
2. test what can genuinely be tested in the preview
3. list files created/changed
4. state which numbered Goal tests passed
5. state which tests were not verified or blocked
6. list any implementation choice you made that I did not specify

Do not say every test passed simply because compilation succeeded.


GUARDRAILS

Screens and invented data only.

No backend.

No server.

No API routes.

No database.

No Firebase.

No Supabase.

No login.

No authentication.

No user accounts.

No analytics.

No persistence.

No localStorage.

No sessionStorage.

No IndexedDB.

Do NOT call:

- Gemini API
- @google/genai
- any LLM/model
- any outside API
- any outside service
- any remote image/video service

No API keys.

No GEMINI_API_KEY.

No environment secrets.

No fetch() for outside resources.

No axios for outside resources.

No remote Google Fonts.

No fonts.googleapis.com.

No fonts.gstatic.com.

Use local/system fonts only.

Use an already-installed local icon package such as lucide-react if needed.

No Material Symbols loaded from Google Fonts.

If AI Studio scaffolding introduces unused model/API code or dependencies, remove them if the frontend can run without them.

No real company name, logo or trademark.

Ting Ting is fictional.

Every name, Case ID, creator handle, policy, number and date displayed must be fictional.

Do NOT add:

- additional primary screens
- sidebar
- dashboard analytics
- graphs
- moderator productivity statistics
- AI risk scores
- transcripts
- audit history
- appeals workflow
- settings
- notifications
- hotkeys
- batch controls
- workload controls
- live sync
- system-health indicators
- moderation tiers
- technical infrastructure labels
- fullscreen
- Picture-in-Picture
- download control
- expanded-video popup
- anything not requested above

Make the smallest conservative implementation choice whenever something is unspecified.

Report that choice instead of silently inventing product behavior.


CONTEXT

Individual Problem Set 1 for:

MGMT 6110 — Human-AI Collaboration
Singapore Management University.

This assignment requires a working front end for a specific user performing a specific job.

One to three screens are permitted.

This product intentionally uses ONE page because the moderator’s entire job is one continuous review workflow.

Product:

TING TING — SAFETY REVIEW

Ting Ting is a completely fictional short-video platform.

Primary user:

Maya Tan
Content Safety Moderator

User type:

Internal employee.

Business function:

Trust & Safety — Content Moderation Operations.

User sentence:

A Content Safety Moderator opens Ting Ting Safety Review to work through prioritized flagged videos, review one case against its context, system recommendation and relevant policy, and record the final moderation action; she knows it worked when the review collapses back into the queue and the case shows Completed with the exact recorded action while the Pending / Completed counts update.

The application will later be:

- controlled in GitHub
- documented in PROMPTS.md while I work
- deployed through Vercel
- tested in a private browser window
- tested on a phone

I am not a programmer.

When you make an unspecified choice, state it clearly rather than hiding it.

Build this product now.

Do not ask me what application to build.
```

**What came back:** The separate rebuild produced a working one-page concept with 10 Pending cases, prioritized queue cards, inline START REVIEW expansion, the six Final Actions, required Decision Basis and a confirmation modal. The visual direction was close, but the model also invented temporary case/news content and the local media had not yet been added.

**What I changed next and why:** I kept it only as a scratch branch and tried to secure it in my college GitHub account before spending another product prompt. Because the submission deadline was close and my original Ting Ting was already much more complete, I later abandoned this rebuild rather than use quota rebuilding features I already had.

---

### AI Studio 33 — GITHUB PUSH ONLY — DO NOT MODIFY THE APPLICATION

#### Prompt

```text
GITHUB PUSH ONLY — DO NOT MODIFY THE APPLICATION

The current Ting Ting application is working.

This task is ONLY to push the CURRENT project files to my existing GitHub repository.

Do not modify any application source code.
Do not redesign anything.
Do not generate any new files except normal Git metadata if required.

Repository:

https://github.com/Rohithkannambai/MGMT6110-PS1-TingTing-rohith-.git

Use the CURRENT project root as the repository root.

Please:

1. Inspect the current Git status and repository configuration.

2. If this project is not already a Git repository, initialize Git in the current project root.

3. Ensure the branch is named:

main

4. Add the repository above as the origin remote.

If an incorrect origin already exists, report it first and replace only the origin URL.

5. Stage the current project files.

6. Create a commit with this message:

feat: initialize Ting Ting Safety Review

7. Push the current main branch to:

origin/main

8. Do NOT:
- modify application source code;
- create fake credentials;
- request or expose a GitHub personal access token;
- place credentials in source files;
- place credentials in .env files;
- print any secrets.

9. If GitHub authentication is unavailable in the environment, STOP at that point and tell me exactly:

- whether Git was initialized;
- current branch;
- configured origin URL;
- whether the commit was created;
- the exact authentication/push error.

Do not attempt insecure authentication workarounds.

10. If the push succeeds, report:

- repository URL;
- branch pushed;
- commit hash;
- commit message;
- number of files committed.

This is a Git/GitHub operation only.

Change nothing else.
```

**What came back:** Git was initialized locally, the branch was `main`, the college repository was set as `origin`, and a 23-file commit was created. The push itself failed because the container had no interactive GitHub credentials: `fatal: could not read Username for 'https://github.com': No such device or address`.

**What I changed next and why:** I did not try to work around authentication with a token or secret. With time running short, I abandoned the scratch rebuild, returned to the stable original Ting Ting project and finished the submission from that version.

---
### AI Studio 34 — FINAL STRUCTURAL COMPLIANCE FIX — ONE INVENTED-DATA FILE ONLY

#### Prompt

```text
FINAL STRUCTURAL COMPLIANCE FIX — ONE INVENTED-DATA FILE ONLY

ROLE

You are a senior front-end developer maintaining an EXISTING stable React/TypeScript application.

This is a DATA-LOCATION REFACTOR ONLY.

Do not redesign, rewrite, improve, simplify, or reinterpret the product.


GOAL

The current Ting Ting application is working correctly.

The assignment requires all invented/fictitious Ting Ting product values to live in ONE dedicated data file.

Create:

src/data/tingTingData.ts

and make it the single source of truth for all fictional Ting Ting product content.

The rendered application and all existing behaviour must remain unchanged.


OUTPUT

1. Consolidate the existing fictional product data currently stored in:

src/data/mockData.ts
src/data/policyData.ts

and fictional hard-coded product values currently present in:

src/components/Header.tsx
src/components/CaseReviewHeader.tsx
src/components/CaseReview.tsx
src/components/PolicyCenter.tsx
src/components/AboutModal.tsx
src/components/CommunityGuidelinesModal.tsx
src/components/Footer.tsx

into:

src/data/tingTingData.ts


2. Move existing values EXACTLY as they currently are.

This includes, where present:

- local Ting Ting logo path
- Maya avatar path
- founder image path
- Internal News records
- all 10 moderation case records
- Case IDs
- creator handles
- policy categories
- priorities
- queue ages
- statuses
- captions
- language / market
- queue sources
- recommendations
- confidence values
- detected signals
- policy guidance
- thumbnail paths
- video paths

- all fictional policy standards
- policy IDs
- policy names
- definitions
- violation criteria
- exceptions
- possible treatments / enforcement information
- Policy Framework Overview content

- Maya Tan profile information
- employee ID
- Content Moderator role

- Final Action option data and descriptions
- Decision Basis option data

- About Ting Ting fictional company content
- founder/company facts
- mission / brand copy
- global presence information

- Community Guidelines fictional category/content data

- footer contact details
- office lists
- tagline
- copyright / fictional legal entity text


3. Update every existing consumer/component so it imports the required fictional values from:

src/data/tingTingData.ts


4. After all imports are safely migrated, remove:

src/data/mockData.ts
src/data/policyData.ts

Do not leave duplicate invented-data copies behind.


5. Keep programming types/interfaces in:

src/types.ts

Types are code definitions and do NOT need to be moved into the product-data file.


6. Generic UI labels may remain inside components, for example:

Search
Close
Cancel
Confirm
Back to Queue
Start Review
View Decision
Previous
Next
Required
Optional

Component logic, JSX, state, handlers and styles also remain in components.


GUARDRAILS

ABSOLUTELY preserve the current application.

Do NOT change:

- Screen 1 visual design
- queue ordering
- START REVIEW
- search
- filters
- Pending / Completed counters
- case cards
- Internal News
- thumbnails
- videos
- media paths
- Screen 1 ↔ Screen 2 navigation
- scroll-position behaviour
- Screen 2 design
- video player
- fullscreen state
- Picture-in-Picture state
- Final Action behaviour
- Decision Basis behaviour
- Moderator Note
- REVIEW & CONFIRM
- confirmation modal
- completed-case logic
- VIEW DECISION
- Policy Center behaviour
- About behaviour
- Community Guidelines behaviour
- Maya profile
- header
- footer
- mobile behaviour
- typography
- colours
- spacing

Do NOT:

- rewrite any fictional text
- rename any case
- change any Case ID
- change any number
- change any date
- change any priority
- change any queue age
- change any policy
- create new fictional content
- remove existing fictional content

Do NOT introduce:

- backend
- database
- API
- Gemini/model call
- API key
- remote runtime service
- external asset URL
- another data file
- JSON copy
- backup/mock/policy data file
- unrelated cleanup
- new feature

Do not modify:

package.json
metadata.json
index.html
src/index.css

unless a build error proves that doing so is technically unavoidable.

If something is ambiguous, preserve the current value and behaviour rather than inventing a replacement.


CONTEXT

The application is already visually and functionally approved.

This change exists ONLY to satisfy the MGMT 6110 Problem Set 1 requirement that invented product values be kept in ONE dedicated data file.

The user-facing product should look and behave the same before and after this refactor.


VERIFICATION

After completing the migration:

1. Confirm that:

src/data/tingTingData.ts

exists.

2. Confirm that:

src/data/mockData.ts
src/data/policyData.ts

no longer exist.

3. Search the project for imports from:

mockData
policyData

There must be zero remaining imports.

4. Confirm that fictional Ting Ting datasets are not duplicated across other dedicated data files.

5. Run TypeScript/build checks.

6. Do NOT claim the visible product is fully verified merely because the build passes.

When finished, report only:

A. file created
B. files deleted
C. files modified
D. major data groups moved into tingTingData.ts
E. whether any fictional product values were intentionally left inside components, and why
F. build result
G. any implementation choice not explicitly specified

If the task is interrupted by quota/provider failure before the migration is complete, clearly report that the refactor is PARTIAL and list exactly which files were changed.

Do not make any further changes after finishing this task.
```

**What came back:** The refactor changed far more than data location. In the preview, approved Case IDs and creator handles were replaced with new values such as `CASE-8821` and `@daredevil_dan`, case scenarios/policies changed, thumbnails and video mappings changed, and Internal News dropped from five items to three. The running product no longer matched the version I had verified.

**What I changed next and why:** I rejected the result and restored the previous stable version because a structural refactor was not allowed to rewrite the product. I then exported the stable source and completed the one-data-file migration as a controlled code-side refactor, preserving the existing case/media/news values, removed the unused Gemini/key scaffold artifacts, pushed the verified project to my public GitHub repository, and deployed the tested build to Vercel.

---
