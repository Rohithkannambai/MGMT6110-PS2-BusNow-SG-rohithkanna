# predictions.md

I did this before anybody in my group commented on my board.

## 1. My product

- Live address: https://busnow-sg-rohithkanna.vercel.app

- Who it is for, and the one job it does for them:
  BUSNOW SG is for SMU students, staff and visitors around the Bras Basah campus area who want to quickly check live bus arrival times at nearby campus stops.

- Health check from Step 1, on 26 September 2026 at about 3:53 AM:
  /api/health returned keyConfigured: true and upstreamStatus: 200.

- Devices and browsers I used for this evaluation:
  Laptop — Microsoft Edge; iPhone — Safari.


## 2. My findings

### Finding 1

- Where:
  https://busnow-sg-rohithkanna.vercel.app, Visitor Feedback / Disqus section, at the ? icon beside “OR SIGN UP WITH DISQUS”.

- What I did, what I saw:
  I tapped the ? icon and an information pop-up opened. I then tapped outside the pop-up expecting it to close, but it stayed open. I had to tap the same ? icon again to close it. On my iPhone, this felt less user-friendly because the pop-up takes up more of the available screen.

- Which heuristic:
  3 — User Control and Freedom.

- Screen or system:
  Screen. The issue is about how the pop-up opens and closes, and it does not need anything from the backend to fix it.

- Severity, and why:
  3, driven mainly by persistence / learnability. A first-time user may not know that the same ? icon has to be tapped again to close the pop-up. Tapping outside does not close it, and on mobile this can disturb the experience until the user figures out how to close it.

- The repair:
  The information pop-up should be easy to close, including by tapping or clicking outside it, without making the user figure out that the ? icon must be pressed again.


### Finding 2

- Where:
  https://busnow-sg-rohithkanna.vercel.app, main bus-stop selection screen.

- What I did, what I saw:
  I selected SMU — 04121 and then reloaded the browser. The selected stop was no longer remembered. I also closed BUSNOW and reopened the live site, and again the previous stop was not remembered, so I had to select it again.

- Which heuristic:
  7 — Flexibility and Efficiency of Use.

- Screen or system:
  Screen. BUSNOW already knows which stop the user selected during the session, so the interface could remember that choice on the same device.

- Severity, and why:
  1, driven by low impact. A returning user has to make one extra tap to select their usual stop again, but no work is lost and the main task can still be completed immediately.

- The repair:
  A returning user should have a quicker way to get back to the stop they usually check, such as remembering the last selected stop on that device.


### Finding 3

- Where:
  https://busnow-sg-rohithkanna.vercel.app, main page, directly below the line “Live bus arrivals around the Bras Basah campus area”.

- What I did, what I saw:
  I noticed four small circles near the top of the page, with one circle highlighted in red. They looked like they might be page or navigation buttons, so I clicked and tapped them. Nothing happened, and the cursor did not show that they were interactive. They are only part of the design.

- Which heuristic:
  8 — Aesthetic and Minimalist Design.

- Screen or system:
  Screen. The issue comes from the visual design of the page and does not depend on the backend or LTA data.

- Severity, and why:
  2, driven by impact. A first-time visitor may think the circles are navigation or progress buttons and try to click them, but this does not stop the main bus-checking task.

- The repair:
  Decorative elements should not look like navigation or progress buttons if they do not do anything. The bus-stop selection and live bus information should remain the clear focus of the page.


## 3. My predictions

1. The three findings I expect others to raise, and the severity I expect them to give each:

   - Finding 3 — the small circles at the top look like page or navigation buttons even though they do nothing. I expect severity 2 because it is easy to notice and someone may try clicking it.

   - Finding 1 — the ? information pop-up does not close when I click outside it. I expect severity 3 because this can disturb the experience, especially on mobile.

   - Finding 2 — the selected bus stop is not remembered after reloading or reopening the product. I expect severity 2 because a regular user may notice that they have to select their usual stop again.

2. The heuristic I think my product breaks worst:

   3 — User Control and Freedom, because the ? pop-up does not have an obvious way to close it other than clicking the same ? button again.

3. The finding that would show my own evaluation was wrong:

   Someone might say that my product looks too simple and that the bus timing alone is not enough. If they see this as a serious issue, then my evaluation was wrong because I thought keeping the app simple made it easy to use, and I would need to improve it.


## 4. Findings I had already heard in the studio

NONE
