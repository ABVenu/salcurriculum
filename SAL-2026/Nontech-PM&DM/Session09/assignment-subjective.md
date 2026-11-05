# Assignment Subjective

Difficulty: Medium

Questions: 1 applied practical task (n8n build + Google Doc evidence)

---

## Task: BrightPath Course Enquiry Logger (Form → Email → Google Sheets)

### Context

**BrightPath Learning** is a fictional online-learning company. Enquiries currently sit in inboxes and get copied into a sheet by hand. Your job is to build a first live n8n workflow so that when someone submits a course enquiry form, BrightPath:

1. Sends an acknowledgement email with the enquirer’s name filled in dynamically  
2. Appends one new row to a Google Sheet with Name, Email ID, and Phone Number  

Use **your own test email** for every send. Do not message real customers or random addresses.

### What you must build in n8n

1. **Create and rename** a workflow (example name: `BrightPath Course Enquiry Logger`).  
2. **Form trigger** — *On new form submitted* with at least three fields:
   - What is your name? (text)  
   - What is your email ID? (email type)  
   - What is your phone number? (number)  
3. **Gmail → Send a message** connected after the Form:
   - Use a renamed Gmail credential  
   - First prove a **fixed** send to your own inbox works  
   - Then switch **To / Subject / Message** to **dynamic** mappings from the form input (name must appear in the subject or body)  
4. **Google Sheets → Append a row** after Gmail:
   - Sheet tab with headers: **Name**, **Email ID**, **Phone Number**  
   - Map form fields into those columns  
5. Run **one full end-to-end test** with a new sample person (invented data is fine). Confirm: form green → email received with dynamic name → one new sheet row → Executions shows success.

### What you must write in the Google Doc

In the same doc, after the screenshots, answer these short applied prompts in your own words (about 40–80 words each):

1. **Trigger vs workflow:** For this BrightPath logger, what is the trigger, and what is the full workflow result?  
2. **Fixed vs expression:** Why was a hard-coded To/Subject unsafe or incomplete for a real enquiry logger, and what did expressions change?  
3. **Tool shape:** In one paragraph, when would you pick **n8n** vs **Dify** for a BrightPath follow-up (app-to-app logger vs chat over an HR/policy PDF)?  
4. **Next building block:** On paper (or as a short bullet list), design the next version that emails only sheet rows where **Email status = pending**, using Get rows → Loop → If/send → update status. Name the nodes in order and state which match column should be unique.

### Screenshots required in the doc

- Canvas showing Form → Gmail → Sheets connected  
- One successful **Executions** entry (or node success greens)  
- The received acknowledgement email (blur/redact anything sensitive)  
- The Google Sheet row that matches the test submission  

### Submission instruction

1. Open a new browser tab. In the address bar type **`doc.new`** and press **Enter**. A blank Google Doc opens in your Google account.  
2. Complete the build evidence (screenshots) and all four short answers in that doc.  
3. Click the blue **Share** button (top right).  
4. Under **General access**, open the dropdown and select **Anyone with the link**. Keep the role as **Viewer**.  
5. Click **Copy link**.  
6. Paste that link into the **answer text box** on the learning platform and submit.

Make sure sharing is **Anyone with the link** can view. Private links cannot be graded.

---

## Answer Explanation (Ideal Solution Walkthrough)

### Build walkthrough

1. Create workflow → rename clearly.  
2. Add **n8n Form** → On new form submitted → auth None for practice → add name (text), email (email), phone (number) → Execute step once to produce sample JSON.  
3. Connect **Gmail → Send a message** → renamed credential → test fixed To/Subject/Message to your inbox → then drag form fields into To/Subject/Message (Expression mode for multi-line body).  
4. Prepare sheet headers → **Google Sheets → Append a row** → map Name / Email ID / Phone Number → Execute.  
5. Full workflow execute with a new sample → verify inbox + one sheet row + Executions success.

### Short-answer ideal points

1. **Trigger** = form submitted. **Workflow** = connected sequence that yields acknowledgement email + sheet row (business result).  
2. Fixed values only talk to one address/text; **expressions** pull each submitter’s email and name at runtime so the logger scales.  
3. **n8n** for Form/Gmail/Sheets app-to-app canvas; **Dify** when the need is knowledge upload + retrieval/citations over a PDF (RAG), not a simple enquiry logger.  
4. Node order: Manual Trigger → Get rows (filter pending) → Loop (batch 1) → Gmail send → Sheets update status; match on a **unique** key such as Enquiry ID / Order ID, not a repeated date.

### Alternative approaches

- Slack “send message” may replace or follow Gmail if Slack credentials are ready; the doc must still show dynamic name mapping and a sheet append.  
- n8n Cloud trial or instructor-hosted instance are both acceptable; localhost self-host is fine if the student can keep the machine on during the test.

### What fails the task

- Form green but Gmail/Sheets never connected.  
- Only fixed email text with no dynamic name/email mapping.  
- Multiple sheet rows created for one submission because of incorrect append setup.  
- No Executions / inbox / sheet evidence.  
- Part 4 designs a Switch on four unrelated columns or matches updates on a non-unique date.  
- Google Doc link not set to **Anyone with the link** can view.

---
