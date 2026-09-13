\# BUSNOW SG



BUSNOW SG is a fictional student utility built for MGMT 6110 — Human-AI Collaboration.



\## User



A university student leaving the Bras Basah campus area after class.



\## One job



Choose one of a small set of nearby public bus stops and view the current bus services and upcoming arrival times before leaving campus.



\## Live data



Bus arrival information is retrieved from \*\*LTA DataMall\*\* through the application's own server-side API.



The browser calls:



\- `/api/bus`

\- `/api/health`



The browser does not call LTA DataMall directly.



\## Credential



The LTA DataMall credential is stored only as the server-side environment variable:



`LTA\_ACCOUNT\_KEY`



The credential must not be committed to this repository or exposed to the browser.



\## Run locally



Prerequisite: Node.js



Install dependencies:



```bash

npm install

