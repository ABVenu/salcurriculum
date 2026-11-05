# Assignment Objective

Total Questions: 10

Difficulty Flow: Easy → Moderate → Hard

Question Types:
- 6 MCQ (Single Correct): Q1–Q6
- 4 MSQ (Multiple Correct): Q7–Q10

---

## Q1 (MCQ, Easy)

Meera manages a Google Sheet of new course enquiries. Each morning she finds rows marked **pending**, types the same acknowledgement email by hand, then changes the status to **sent**. What does **automation** mean for this work?

A. Asking a large language model to invent a new product name for every row  
B. Replacing the sheet with a handwritten notebook so nothing is missed  
C. Setting a clear trigger, rule, and action so the same follow-up runs without repeating the manual loop every time  
D. Publishing a blog post once and hoping students reply on their own

**Correct Answer:** C

**Answer Explanation:**  
Automation is a predefined process: a **trigger**, a **rule**, and a **tool/action** produce a consistent outcome without repeated human effort for every case. Meera’s pending → email → update status loop is exactly that pattern.

**Why other options are wrong:**  
- A: Generating new names is creative writing, not automating the acknowledgement loop.  
- B: A notebook increases manual work; it does not remove the copy-paste loop.  
- D: A one-time blog post is marketing, not a triggered multi-step workflow.

---

## Q2 (MCQ, Easy)

BrightPath Learning wants a workflow that starts the moment a visitor submits an n8n Form titled “Course Enquiry.” Which trigger type fits best?

A. On form submission  
B. On a monthly schedule only  
C. Manual execute only, with no form at all  
D. A Switch node used as the first step with no trigger

**Correct Answer:** A

**Answer Explanation:**  
A **form trigger** starts the workflow when someone submits the form — the right doorbell for an enquiry logger.

**Why other options are wrong:**  
- B: A schedule starts on time, not when a person submits the form.  
- C: Manual execute is useful while learning, but it does not listen for form submits.  
- D: Switch is a branching action node, not a trigger that starts the run.

---

## Q3 (MCQ, Easy)

On the n8n home screen, Kabir wants to see which past runs succeeded or failed and which node broke. Where should he look first?

A. Sticky notes on the canvas  
B. The Credentials list only  
C. The Tidy up button  
D. Executions history for that workflow

**Correct Answer:** D

**Answer Explanation:**  
**Executions** store run history: success, failure, timestamps, and which node failed — that is the observability view taught for debugging.

**Why other options are wrong:**  
- A: Sticky notes are human labels; they do not record run outcomes.  
- B: Credentials store saved logins, not run results.  
- C: Tidy up only rearranges node layout.

---

## Q4 (MCQ, Easy)

A teammate says: “n8n, Make, and Dify are identical, so pick any tool for every job.” Which statement best corrects that claim?

A. All three only export workflows as Python scripts, so shape never matters  
B. Capability overlaps, but the **shape** of building differs — n8n suits broad app-to-app canvases, Make feels scenario/module-linear, Dify shines for knowledge upload and RAG citation checks  
C. Dify is the only tool that can send email  
D. Make cannot connect to Slack under any plan

**Correct Answer:** B

**Answer Explanation:**  
The notes compare tools by **shape**: n8n for node-canvas app workflows and self-host/JSON export; Make for visual scenarios; Dify when you need knowledge-base / RAG testing. Overlap exists; one tool is not best for every need.

**Why other options are wrong:**  
- A: n8n workflows are JSON-based canvases, not “Python only.”  
- C: Email is not unique to Dify; Gmail-style actions appear in n8n builds.  
- D: Make can notify Slack; the Momowala-style demo used that pattern.

---

## Q5 (MCQ, Moderate)

Priya built Form → Gmail. The Form node shows green success, but no email arrives. The Gmail node was never connected to the Form node. What is the most likely cause?

A. The nodes are disconnected, so form data never reaches the Gmail action  
B. JSON cannot carry email addresses between nodes under any condition  
C. Credentials must be deleted before every test run  
D. Publish is required even for a one-click Execute step on a manual test

**Correct Answer:** A

**Answer Explanation:**  
Nodes must be **connected**. If Form and Gmail are disconnected, the form can succeed while mail never sends.

**Why other options are wrong:**  
- B: JSON is exactly how structured fields move between nodes.  
- C: Deleting credentials is not a normal test step and would block sending.  
- D: Execute step / Execute workflow is used for learning tests; Publish is for keeping schedules or production triggers live.

---

## Q6 (MCQ, Moderate)

An operations sheet has many order statuses: `placed`, `packed`, `delivered`, and `preparation in progress`. You want each value to follow a different path on the same field. Which node fits best?

A. If node with only one true/false outcome for all four values  
B. Loop Over Items with no routing rules at all  
C. Switch node with renamed routes for each status value  
D. Sticky note that lists the four statuses

**Correct Answer:** C

**Answer Explanation:**  
**Switch** is for one field with many values. Rename outputs (`placed`, `delivered`, …) instead of leaving default `0,1,2,3`.

**Why other options are wrong:**  
- A: If is for one main true/false decision, not four peer routes on the same field.  
- B: Loop walks items one by one; it does not replace multi-value routing.  
- D: Sticky notes document intent; they do not route executions.

---

## Q7 (MSQ, Moderate)

Which statements correctly describe good first candidates for no-code automation?

A. Copying the same form fields into a sheet every day  
B. Sending the same style of acknowledgement email after a clear trigger  
C. One-off judgement calls with no stable rule or fields  
D. Updating status from `pending` to `sent` after an email goes out

**Correct Answers:** A, B, D

**Answer Explanation:**  
Stable fields, repeatable actions, and clear triggers (form/sheet/status updates) are good candidates. One-off judgement with no rule is a poor first candidate.

**Why other options are wrong:**  
- C: Processes without a clear rule should be redesigned before automation.

---

## Q8 (MSQ, Moderate)

In n8n, which statements about **data items**, **parameters**, and **JSON** are correct?

A. A data item is one unit of data (for example one form reply) moving from node to node  
B. Parameters are the configurable fields on a node such as To, Subject, Message, or sheet tab  
C. JSON is a labelled key–value text format used to store and move structured data between nodes  
D. You must type every JSON path by hand on day one; drag-and-drop mapping is never used

**Correct Answers:** A, B, C

**Answer Explanation:**  
Data items are packets on the conveyor belt (A). Parameters are the dials on each node (B). JSON is the structured format between nodes and for workflow export (C). Beginners usually **drag** fields; they do not type every path by hand.

**Why other options are wrong:**  
- D: Class practice emphasises drag-and-drop expressions; glancing at JSON helps when a mapping turns red.

---

## Q9 (MSQ, Hard)

You are designing a sheet-driven follow-up: get rows where email status is `pending`, process them one by one, send Gmail, then update that row’s status. Which design choices match the patterns taught?

A. Use Get rows with a filter such as Email status = pending so only pending rows return  
B. Use Loop Over Items (often batch size 1) so each row can trigger its own send/update steps  
C. Match the Sheets update on a repeated non-unique date column so many rows share one key  
D. Prefer Manual Trigger or Execute while learning so a published schedule does not burn free credits overnight

**Correct Answers:** A, B, D

**Answer Explanation:**  
Filter pending rows (A), loop one item at a time (B), and keep learning runs manual/execute to avoid quiet credit burn (D). The match column for updates must be **unique** (for example Order ID), not a repeated date.

**Why other options are wrong:**  
- C: Matching on a non-unique column confuses which row to update.

---

## Q10 (MSQ, Hard)

Neha maps form fields into Gmail. Some mappings show green; one Subject expression shows red. Which statements are correct for fixing and verifying the live build?

A. A red expression usually means a broken JSON mapping — re-drag the field from Input  
B. After a full test, confirm success in the inbox, in the sheet (if append is used), and in Executions  
C. Leaving Form and Gmail disconnected is fine as long as both nodes are configured  
D. Required Gmail parameters such as To, Subject, and Message must be filled or the node warns and the send fails

**Correct Answers:** A, B, D

**Answer Explanation:**  
Red expressions need remapping (A). End-to-end verification covers apps plus Executions (B). Subject/Message/To are mandatory on send (D). Disconnected nodes break the chain even if each node looks configured (C is wrong).

**Why other options are wrong:**  
- C: Connection is required for data to flow from Form into Gmail.

---
