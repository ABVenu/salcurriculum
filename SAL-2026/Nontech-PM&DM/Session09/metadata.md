lecture ID:

Course Name: Certification in Agentic Systems and Design / Software Engineering with AI / Software Development with Applied AI

Target Audience: Students from any background, may not necessarily be from a tech background

session duration: 1hr 50mins

Session Notes Length: 480 lines to 500 lines max

title: Intro to Automation: Getting Started with n8n

objective: No-code automation basics

type of session: theory/implementation mix — a short concept block, a guided tour of the n8n editor, and a hands-on build of a first two-step automation. No coding required.

topics be covered: Explain what an automation workflow is and why teams use tools like n8n; Navigate the n8n interface and identify its core building blocks, such as triggers, nodes, and actions; Build a simple two-step automation connecting two tools

running case study: BrightPath Learning, the same fictional online-learning company used in the previous session. Students build a "Course Enquiry Logger": when someone submits an enquiry form, n8n adds a row to a Google Sheet. Optional extension: also post a message to Slack or send an email. All sample data is synthetic.

tools and accounts needed (set up BEFORE class — see resources/setup-checklist.md):
- n8n: an n8n Cloud free trial, or a self-hosted instance (Community Edition) run by the instructor/student
- A Google account (for Google Sheets)
- Optional: a Slack workspace the student can add apps to, or any mailbox for the email extension

notes on terminology: n8n is "fair-code" (source-available under the Sustainable Use License), not open source in the OSI sense. The Scenes&LOs wording says "open-source"; the notes explain the distinction so students do not repeat an inaccurate claim. Button labels and menus in n8n change between versions; the notes were written against the 2.x editor and tell students to look for the equivalent control if a label differs.

detailed subtopics to be covered:
Subtopic/Scene 1: Understanding Automation & The Power of n8n | Duration: 40 minutes
LO:1 Define what an automation workflow is and articulate why teams leverage tools like n8n to eliminate manual tasks.
LO:2 Differentiate fair-use scenarios for open-source, node-based automation tools compared to traditional linear iPaaS tools (e.g., Zapier, Make).
LO:3 Identify repetitive business processes within a workflow that are prime candidates for no-code automation.

Subtopic/Scene 2: Navigating the n8n Interface & Core Building Blocks | Duration: 45 minutes
LO:1 Navigate the n8n visual canvas and interface controls to locate workflow management tools.
LO:2 Identify and explain the core building blocks of n8n, including Triggers, Action Nodes, Data Items, and Parameters.
LO:3 Inspect sample JSON data structures passed between adjacent nodes to understand how data flows across a workflow.

Subtopic/Scene 3: Building & Testing Your First Two-Step Automation | Duration: 45 minutes
LO:1 Configure a Trigger Node (e.g., Webhook, Form Submission, or Schedule) to kick off an automated workflow.
LO:2 Connect an Action Node (e.g., Slack notification, Google Sheet append, or Email dispatch) and map dynamic output fields from the trigger.
LO:3 Execute a live end-to-end test run, troubleshoot execution errors, and verify success in both connected tools.

source materials for this session:
- n8n documentation (docs.n8n.io): data structure, Webhook and Form Trigger nodes, executions, Google Sheets node
- n8n Sustainable Use License (github.com/n8n-io/n8n, LICENSE.md)
- Zapier and Make help-centre pages on how task and operation usage is counted
- Synthetic BrightPath Learning sample files in resources/
