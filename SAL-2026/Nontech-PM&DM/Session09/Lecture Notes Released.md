# Intro to Automation: Getting Started with n8n

[PPT Used in Session]((https://coding-platform.s3.amazonaws.com/dev/lms/tickets/c2c888b4-a868-4464-9063-17c45dc126ef/LKSoUwpxuanlpyMq.pdf))

In previous work you used AI to draft emails, posts, and product copy, then edited those drafts as a human. This lesson moves one step further: instead of only generating text, you connect tools so **routine follow-ups run by themselves**.

Imagine a Google Sheet of new orders. Name, order ID, email, and **email status** sit in rows. Every morning someone opens the sheet, finds rows marked **pending**, sends an email by hand, then types **sent**.

That copy-paste loop is exactly what automation removes.

This lesson explains what an **automation workflow** is, why teams use tools like **n8n**, and how the n8n canvas works. You will also build and test a first live workflow from a form to email and Google Sheets — with the same patterns shown in class.

## What You Will Learn in This Lesson

In this lesson, you will learn:

- What an **automation workflow** is and why teams use tools like n8n
- How **fair-use / fair-code** node-based tools differ from linear iPaaS tools such as Zapier and Make
- Which repetitive business steps are good candidates for no-code automation
- How to navigate the n8n **canvas**, **workflows**, **credentials**, and **executions**
- The core building blocks: **triggers**, **action nodes**, **data items**, and **parameters**
- How **JSON** carries data between nodes
- How to configure a **form trigger**, connect **Gmail** and **Google Sheets**, map dynamic fields, run a live test, and fix common errors
- Extra patterns from the live build: **If**, **Switch**, and **Loop** for sheet-based email workflows

By the end, you will be able to describe automation in plain language, open n8n confidently, and run a simple multi-step workflow end to end.

---

## Why Automations Matter

Automation is not new. Banks, toll plazas, airports, and payment apps have used rule-based flows for decades. AI made those flows more flexible, but the core idea stayed the same: **a trigger, a rule, and an outcome**.

### Everyday automations you already know

- **Bank IVR:** “Press 1 for new account, press 2 for existing customer.” A rule maps each key to an action.
- **FASTag / toll:** Vehicle number is read → Fastag balance is checked → amount is deducted → gate opens or holds.
- **UPI / QR:** Scan → enter PIN → if balance exists, money moves; if not, pay cash.
- **DigiYatra:** Biometrics + flight details replace repeated ID checks at the gate.
- **PhonePe first-time limits:** First payment capped (for example ₹5,000) and daily caps reduce fraud risk.
- **Autopay:** On a fixed day, Spotify, electricity, or LPG renewals deduct automatically.

- **Official Definition:** **Automation** is a predefined process where a **trigger**, a **rule**, and a **tool/action** produce a consistent outcome without repeated human effort for every case.
- **In Simple Words:** “When this happens, do that” — every time, the same way.
- **Real-Life Example:** Autopay on the 5th of the month is a schedule trigger plus a debit action. You do not open the app and pay manually each month.

**Need:** Manual work does not scale. One person typing emails for 33 sheet rows is slow and easy to miss.

![Manual copy-paste on a pending order sheet versus an automated n8n workflow that loops rows, checks status, sends email, and updates the sheet](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session09/s09-01-manual-vs-automated-sheet.png?v=20261102)

**Logic:** If the rule is clear and the data is structured, a machine can apply the rule faster and more consistently than a tired human.

**Common doubt:** “Do I need AI for every automation?”  
No. Many automations are pure rules (IVR, FASTag, Autopay). AI helps when the input is messy language or the next step needs judgement.

**Activity — Spot the automation:**  
Write three daily tasks that already feel automated (bank call menu, toll, subscription). For each, note the trigger and the outcome in one line.

Once you see automation outside software, the next step is understanding how **modern AI-enabled** workflows go beyond fixed menus.

---

## Deterministic Rules vs AI-Enabled Automations

Older automations were mostly **deterministic**: if status is `placed`, do A; if `delivered`, do B. You write one rule per case.

Newer workflows add **LLMs**. The same agent can read “I am an expecting mother, five years with the company, need two months leave” and answer with policy context, tone, and citations — without four separate hard-coded rules for every wording.

Three ideas made automation powerful again:

| Idea | What it means | Why it matters |
|------|----------------|----------------|
| **Probabilistic outputs** | The model chooses a useful reply from context, not only an exact if-else match | Handles natural language questions |
| **Tool calling** | The agent does not only suggest — it can act (apply leave, send Slack, update a sheet) | Moves from advice to action |
| **Memory / context** | Later questions remember earlier actions (leave already taken) | Feels continuous, not forgetful |

A chat-only answer from ChatGPT is **not** a full automation. A strong automation combines **reasoning**, **tool calling**, and often **live data** (web search, company sheets, policy PDFs).

**Live demos from class (same patterns you can rebuild later):**

1. **Sheet → loop → if pending → update status** on n8n: read order rows, process one by one, update email status when pending.
2. **HR policy chat agent** (shown on Dify): classify query → retrieve from policy PDF → answer with citations → escalate if needed.
3. **Make.com competitor review** for a brand like Momowala: read competitor sheet → summarise with an LLM → Slack notification on a schedule.

**Activity — Rule vs judgement:**  
For “send order confirmation email,” write which part is a fixed rule and which part might need an LLM (tone, FAQ reply, personalisation).

Automations need a **home** — one place that talks to Gmail, Sheets, Slack, WhatsApp, and more without you writing APIs for each tool.

---

## Why Teams Use Automation Platforms

Teams choose platforms like n8n, Make, or Dify for four practical reasons.

1. **One platform that connects many tools**  
   Gmail, Sheets, Slack, Teams, Jira, forms, WhatsApp — one canvas instead of ten separate admin panels.

2. **No-code / low-code building**  
   Drag nodes, set credentials, map fields. You do not write Python to send one email from a form.

3. **Observability**  
   See which runs succeeded, which failed, and which node broke.

4. **Recovery and control**  
   Fix a missing field, re-run, publish when ready, unpublish when you do not want burn of free credits.

- **Official Definition:** An **automation platform** (or iPaaS-style tool) is software that connects apps with **triggers** and **actions** so data can move across systems without custom code for every integration.
- **In Simple Words:** A remote control for your work apps: one button press starts a chain of useful steps.
- **Real-Life Example:** Form submitted → email acknowledgement → new row in Google Sheets, all from one workflow.

**Common doubt:** “Can I just keep using Excel macros?”  
Macros help inside one file. Platforms shine when the work spans **email + sheet + chat + schedule**.

---

## n8n, Make, and Dify — Choosing the Right Shape of Tool

n8n sits next to tools such as **Make**, **Zapier**, **Dify**, and **Relevance AI**. Capability overlaps; the **shape** of building differs.

### What n8n is

- **Official Definition:** **n8n** is a **node-based**, source-available automation platform (often called **fair-code** under its Sustainable Use License). Workflows are stored as **JSON** and can run on **n8n Cloud** or on your own machine (**localhost / self-hosted**).
- **In Simple Words:** A whiteboard of boxes. Each box is a step. Lines show the order. The whole board can be downloaded as a JSON file and shared.
- **Real-Life Example:** “Form to Google Sheets workflow” is a named canvas with a Form node connected to Gmail and Sheets nodes.

**Fair use vs commercial use (important):**

- Using n8n for **personal learning** or **internal company workflows** is typically allowed under community / fair-use terms; you may self-host for free, but your laptop must stay on if you rely on localhost.
- If you **sell automations**, resell workflows, or package n8n for client delivery, you generally need a **commercial / enterprise license**. Check the current pricing and license page before introducing it at work.
- Cloud trials are time-limited (often about **14 days**). Prefer a **personal Gmail** for class signup; many college/enterprise domains block free trial signup.

**JSON sharing:** Export a workflow as JSON, send it to a teammate, import it, reconnect credentials, and reuse the logic.

### How Make compares

| Concept in Make | Closest idea in n8n |
|-----------------|---------------------|
| Scenario | Workflow |
| Modules | Nodes |
| Credentials | Credentials |
| Active / inactive scenario | Published / unpublished workflow |
| Execution history | Executions |

Make’s free tier often includes a monthly run limit (for example around **1,000** operations). Leaving a daily scenario **live** can exhaust credits quietly. Same caution applies on any free tier.

The Momowala-style pattern in Make looked like: **Google Sheet → Gemini summary → Slack message**.

### How Dify compares

Dify shines when you need a **knowledge base** and retrieval testing for **RAG** (Retrieval-Augmented Generation). Upload an HR policy PDF, test whether the right chunks are found, then answer with citations.

| Need | Often easier starting point |
|------|-----------------------------|
| Broad app-to-app workflows, self-host, JSON export | **n8n** |
| Visual scenarios with generous template UX | **Make** |
| Knowledge upload + retrieval testing for RAG agents | **Dify** |

n8n file format is **JSON**. Make exports are also JSON-friendly. Dify workspace files often use a **DSL** format.

For non-tech learners, learning to **read simple JSON** pays off across tools.

### Fair-use node canvas vs linear iPaaS

Traditional linear iPaaS tools (Zapier, Make-style scenarios) often bill by **tasks / operations** and guide you along a straight “when this, then that” line. That is excellent for quick two- or three-step zaps.

n8n’s node canvas makes **branching**, **loops**, and **self-hosting** feel natural. You can keep complex logic on one board and export the board as JSON. Fair-use / fair-code licensing is different from “free forever for every commercial product,” so always read the license before client work.

**Activity — Pick a tool for the job:**  
For each case, choose n8n, Make, or Dify in one word: (a) internal form → sheet → email, (b) competitor research Slack every Monday, (c) chat over a private HR PDF with citation checks.

This course focuses on **building in n8n**. Competitor tools are landscape knowledge so you choose wisely later.

---

## What Is an Automation Workflow?

- **Official Definition:** An **automation workflow** is a sequence of connected steps that starts from a **trigger** and performs one or more **actions**, optionally branching on conditions, until a defined business result is reached.
- **In Simple Words:** A recipe: start when X happens, then do Y, then do Z.
- **Real-Life Example:** New form submit → send thank-you email with the person’s name → append name, email, phone to a sheet.

| Part | Role | Class example |
|------|------|----------------|
| **Trigger** | Starts the run | n8n Form submitted |
| **Data** | Facts moving between steps | Name, email, phone as JSON |
| **Action** | Does work in another app | Gmail send, Sheets append |
| **Result** | Business outcome | Inbox message + new sheet row |

![Automation workflow building blocks — trigger, data, action, and result connected in one pipeline with a form-to-email-to-sheet example](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session09/s09-03-trigger-data-action-result.png?v=20261102)

**Good candidates for no-code automation**

- Copying the same fields from a form into a sheet every day
- Sending the same style of acknowledgement email
- Updating status from `pending` to `sent` after an email goes out
- Monday competitor or order digests on a schedule

**Poor first candidates**

- One-off judgement calls with no clear rule
- Broken processes that need redesign before automation
- Anything that must use **real customer secrets** during practice (use your own test email only)

**Quick test before you automate**

Ask four questions. If any answer is “no,” fix the process first.

1. Is the trigger obvious (form submit, new row, clock time)?
2. Are the fields stable (name, email, status)?
3. Is the action the same most times (send mail, append row)?
4. Can a human verify success in under a minute (inbox + sheet)?

**Activity — Candidate checklist:**  
Pick one repetitive task at work or college. Write: trigger, data fields, action, result. If you cannot name all four, it is not ready to automate yet.

---

## Navigating the n8n Interface

After you log in (Cloud trial or enterprise workspace), start from **Overview**.

### Main areas

| Area | What you use it for |
|------|---------------------|
| **Workflows** | Create, open, rename, share, publish |
| **Credentials** | Saved logins for Gmail, Google Sheets, Slack, model keys |
| **Executions** | History of runs: success, failure, time |
| **Editor** | Visual canvas where you place and connect nodes |
| **Evaluations** (when shown) | Performance / token-oriented views on runs |

Inside a workflow you typically see tabs such as **Editor**, **Executions**, and **Evaluations**.

- **Editor:** What you are building.
- **Executions:** How many times it ran and whether it succeeded.
- **Evaluations:** How the run performed (including usage-style metrics where available).

### Canvas controls you will use often

- **Create workflow** — orange / primary button on an empty workspace
- **Rename** — double-click the workflow title (example: `Form to email to Google Sheet Workflow`)
- **Nodes panel** — click **+** or search to open WhatsApp, Gmail, Sheets, Form, and more
- **Zoom in / out / fit** — focus the canvas
- **Tidy up** — straighten a messy layout into a cleaner line
- **Publish** — make schedule / production triggers live; unpublished edits often show as needing publish again
- **Execute workflow / Execute step** — test one node or the full chain
- **Stop** — halt a long loop mid-run
- **Sticky notes** — right-click the canvas to document what a section does

**Credentials habit:** Always **rename** credentials (example: `Arun Misfit Credential Gmail`). Default numbered names become confusing when you have multiple Google accounts.

![n8n editor canvas with three connected nodes — Form trigger, Gmail send message, and Google Sheets append row — on one workflow board](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session09/s09-02-n8n-form-gmail-sheets.png?v=20261102)

**Activity — Orientation:**  
Open n8n. Create a blank workflow, rename it, open Credentials, and locate Executions — without building nodes yet.

---

## Core Building Blocks: Triggers, Actions, Data, Parameters

### Triggers — what starts the workflow

n8n supports several trigger families. Class covered these:

| Trigger type | Starts when… | Notes |
|--------------|--------------|-------|
| **Form** | Someone submits an n8n Form (or connected form) | Great first learning trigger |
| **Chat** | A message arrives in the workflow chat | Can be made publicly shareable |
| **Schedule** | Time rules fire (hourly, daily, monthly) | Needs **Publish** to run on its own |
| **Webhook** | An external URL receives GET/POST (and similar) | Useful for websites and apps |
| **App / event** | Something changes in Sheets, Telegram, Notion, Airtable, etc. | “When a row is added…” style |
| **Manual** | You click to run | Maximum control while learning; no schedule config |

- **Official Definition:** A **trigger node** is the first node that listens for an event or time condition and starts a workflow execution.
- **In Simple Words:** The doorbell of your automation.
- **Real-Life Example:** “On form submitted” is the doorbell; Gmail send is what happens after someone rings it.

**Schedule tip:** Daily at 08:15 only runs after you **publish**. After publish, a small change often turns the status back to “needs publish.”

### Action nodes — what the workflow does

Examples from class:

- **Gmail → Send a message**
- **Google Sheets → Get rows / Append row / Update row**
- **Slack → Send message** (same idea as Make demo)
- Later: AI model nodes, agents, MCP-related options on richer plans

Choosing the wrong action breaks the flow. Searching “Gmail” shows many actions (delete message, send message…). Pick **Send a message** when you want outbound mail.

### Data items and parameters

- **Official Definition:** A **data item** is one unit of data (often one form reply or one sheet row) that flows from node to node. **Parameters** are the fields you configure on a node (To, Subject, Message, Sheet name, match column).
- **In Simple Words:** Data items are the packets on the conveyor belt. Parameters are the dials you set on each machine.
- **Real-Life Example:** After a form test, one item may look like name = Arun, email = arun@misfittech.com, phone = 9123456789.

Nodes must be **connected**. If Form and Gmail are disconnected, the form can succeed while mail never sends.

Missing required parameters show warnings (red/orange). Subject and Message are mandatory on Gmail send.

### Reading JSON between nodes

Every successful node output can be viewed as:

1. **Schema** — field list  
2. **Table** — good for many rows  
3. **JSON** — the structured format workflows export and share  

Sample shape (illustrative):

```json
{
  "What is your name": "Rahul Sharma",
  "What is your email ID": "arun.nandewal@gmail.com",
  "What is your phone number": "3344556677"
}
```

- **Official Definition:** **JSON** (JavaScript Object Notation) is a text format of keys and values used to store and move structured data between systems and nodes.
- **In Simple Words:** A labelled locker: each label (key) has a value.
- **Real-Life Example:** `"email status": "pending"` is one labelled fact the If node can test.

Green mapped fields mean the drag-and-drop expression worked. Red means the expression is broken — fix the JSON path before running again.

**How data flows across two nodes**

1. Form runs and produces one **data item** with name, email, phone.  
2. That item becomes the **Input** panel of the next node.  
3. Gmail parameters pull values from that input with expressions.  
4. Gmail output (message id, status) becomes input for Sheets if you continue the chain.

You rarely type JSON by hand on day one. You **drag** fields. Still, glancing at JSON teaches you why a red expression failed.

![Form node JSON output mapped into Gmail To, Subject, and Message parameters — green for valid drag-and-drop expressions, red when mapping breaks](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session09/s09-04-json-field-mapping.png?v=20261102)

**Activity — Read one output:**  
Execute a Form step once. Open Schema, Table, and JSON views. Write the three field names you see.

---

## Building Your First Workflow: Form → Email → Google Sheets

This is the core hands-on path from class. Build it yourself rather than relying on “Build with AI” on day one.

### Step 1 — Form trigger

1. Create workflow → rename it clearly.  
2. Click **+** → search **n8n Form** → choose **On new form submitted**.  
3. Set authentication to **None** for practice.  
4. Add form title and short description (example: form created to learn n8n).  
5. Add elements:
   - **What is your name?** → Textarea (or text)
   - **What is your email ID?** → Email type (auto-validates `@` and domain style)
   - **What is your phone number?** → Number  
6. **Execute step** → fill sample data → Submit.  
7. Confirm a **green** success and inspect output.

**Logic:** Email field type blocks invalid text. Number field blocks letters. Validations reduce bad data before later nodes run.

### Step 2 — Gmail action with static then dynamic fields

1. Click the Form node’s **+** → search **Gmail** → **Send a message**.  
2. Select your renamed Gmail credential (Sign in with Google → allow permissions → save).  
3. First test with **fixed** To, Subject, Message (send only to **your** inbox).  
4. Run Execute step / Execute workflow. Confirm mail arrived.  
5. Optional: under Options, disable **Append n8n attribution** if you do not want the “sent automatically with n8n” footer.  
6. Make fields **dynamic**:
   - Delete fixed To → drag **What is your email ID** from input  
   - Subject like `This form works for {{ name }}`  
   - Message as **Expression** (expand editor) including name, email, phone  

Switch between **Fixed** and **Expression**. Expression opens a larger editor for multi-line body text.

**Common errors**

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Form green, mail never sent | Nodes not connected | Drag the connector or re-add via + |
| Orange/red on Gmail | Subject / Message / To empty | Fill required parameters |
| “Execute previous node” prompt | No upstream data | Run Form once to create sample items |
| Attribution line unwanted | Default n8n footer on | Disable append attribution in options |
| Expression red | Broken JSON mapping | Re-drag the field from Input |

**Safety:** While testing, put **your own email** in every pending row. Do not blast random addresses or WhatsApp numbers.

### Step 3 — Append a Google Sheets row

1. Prepare a sheet tab (class used a tab like **capture email**) with headers: Name, Email ID, Phone Number.  
2. Create a **Google Sheets** credential the same way as Gmail.  
3. After Gmail, add **Google Sheets → Append a row in sheet**.  
4. Choose credential → **Sheet within a document** → pick the spreadsheet → pick the tab.  
5. Map columns manually: drag form fields into Name / Email / Phone.  
6. Execute step → verify the row appeared.  
7. Execute full workflow with a new sample (example: Rohini Gupta) → confirm **email + sheet** both updated.

One form submission = **one** appended row (not one row per field).

### Step 4 — Verify in Executions

Open **Executions**. Check timestamps and success marks. Click a failed run, open the red node, read the error, fix parameters, re-run.

**Activity — End-to-end checklist:**  
Run one full test. Tick: form output green → email received with dynamic name → sheet row matches the form → execution listed as success.

### Minimal practice workflow (two connected tools)

If you only have time for one build, stop after Form + Gmail with dynamic fields. Sheets append is the natural third step when credentials are ready.

Optional stretch from the same pattern: add Slack “send message” instead of (or after) Gmail, still mapping name and email from the form input.

---

## Extending the Same Ideas: Filters, If, Switch, and Loop

After the two-step form flow, class built a sheet-driven email workflow. These nodes are the next building blocks.

### Get rows with a filter

**Google Sheets → Get rows** can pull all rows (headers excluded) or filter, for example **Email status = pending**, so only four pending rows return instead of all 32.

### If node vs Switch node

| Node | Use when |
|------|----------|
| **If** | One main condition (and/or on that decision) — true vs false paths |
| **Switch** | Same field, many values (placed / packed / delivered / preparation in progress) |

On If: map `email status` → equals `pending` → true path gets pending rows; false gets the rest.

On Switch: add routing rules on **Order status** for each value. Rename outputs (`placed`, `delivered`…) instead of default `0,1,2,3`. Do **not** mix different columns across routes in one Switch.

### Loop Over Items

- **Official Definition:** A **Loop** node processes many items in batches (often **batch size = 1**) so each row can trigger its own send/update steps.
- **In Simple Words:** Instead of treating 32 rows as one lump, walk them one by one.
- **Real-Life Example:** For each pending order row: send Gmail → update that row’s email status to `new email sent`, matching on unique **Order ID**.

**Match column rule:** The column you match for updates must be **unique**. Matching on a repeated date confuses which row to update.

![Sheet workflow — get pending rows, loop one item at a time, branch on If, send Gmail, then update email status on the matching order row](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session09/s09-05-sheet-loop-if-email-update.png?v=20261102)

Use **Stop** if a long loop should not finish during a demo.

**Activity — Design the loop on paper:**  
Write nodes in order: Manual Trigger → Get rows (pending) → Loop → Gmail send → Sheets update status. Mark which fields are dynamic.

Publish only when you intend a schedule or public trigger to stay live. For learning, prefer **manual** or **execute** so free credits are not burned overnight.

### Putting sticky notes and tidy-up to work

When the loop workflow works, click **Tidy up** so the path reads left to right. Right-click the canvas and add a **sticky note** such as “My first n8n workflow is ready.”

Future you (and teammates importing your JSON) will thank the labels. Sticky notes do not change execution. They only make the board readable.

**Activity — Label the board:**  
On your working workflow, add one sticky note that states the business goal in one sentence (example: “Pending order rows get email, then status updates”).

---

## Key Takeaways

- Automation means **trigger + rule/action + outcome**; AI adds judgement, tool calling, and memory on top of classic rules.
- Teams use n8n-like tools for **one canvas**, **no-code nodes**, and **visible executions** across Gmail, Sheets, Slack, and more.
- n8n is a **fair-code / source-available**, **JSON-based**, node canvas — great for learning and internal workflows; commercial selling usually needs a proper license.
- Core pieces are **triggers**, **action nodes**, **data items**, **parameters**, and readable **JSON** between steps.
- Your first solid build is **Form → dynamic Gmail → Sheets append**, verified in both apps and in **Executions**; filters, If, Switch, and Loop unlock sheet-scale follow-ups next.

In upcoming lessons you will deepen credentials, error handling, and richer agent-style workflows on the same canvas.

---

## Important Commands, Libraries, Terminologies Used

| Term | Quick meaning |
|------|----------------|
| **Automation workflow** | Connected steps from trigger to business result |
| **Trigger** | Event or schedule that starts a run |
| **Action node** | Step that does work (send email, append row) |
| **Credential** | Saved login/permission for an external app |
| **Data item** | One packet of values moving between nodes |
| **Parameter** | Configurable field on a node |
| **JSON** | Key–value text format for workflow data and exports |
| **Expression** | Dynamic field mapping (drag from Input) vs fixed text |
| **Publish** | Make a workflow live for schedules / production triggers |
| **Execution** | One recorded run of a workflow |
| **If node** | True/false branch on a condition |
| **Switch node** | Multi-route branch on many values of a field |
| **Loop Over Items** | Process items in batches, often one row at a time |
| **n8n** | Node-based fair-code automation platform |
| **Make scenario** | Make’s name for a workflow |
| **Dify knowledge / RAG** | Upload docs and retrieve grounded answers |
| **Fair-code / Sustainable Use License** | Source available with usage limits for commercial packaging |
| **Localhost / self-host** | Run n8n on your machine; machine must stay on |
| **n8n attribution** | Optional footer on emails saying sent via n8n |
| **Tidy up** | Auto-arrange nodes on the canvas |
| **Sticky note** | Canvas comment for humans reading the workflow |
