# From Idea to Prototype with AI

## What You Will Learn in This Lesson

In the previous lesson you learned what **AI** and **Large Language Models** are, and how to brief a chat tool with a clear **role**, **context**, and **format**. You practised checking a reply before you trust it.

This lesson puts that skill on a **product-manager path**. You will refine a rough idea with AI, name the **user**, map the **journey**, tell a **story** teams can rally around, and turn it into **low-fidelity** screens and then a **high-fidelity**, clickable prototype.

The running example is **PhonePe Trusted Pay**: a friend or family member pays on your behalf, the app keeps a **social balance**, and you settle later. Use the same workflow on **your own** idea. PhonePe is the teaching example, not the only allowed product.

What you will practise, in order:

- Walk **idea → problem → persona → journey → story → prototype** without skipping.
- Lock a **product name** and **one-line vision**, then build a persona and journey in **one chat thread**.
- Create **low-fi** mock-ups, then a **happy-path MVP** in **Google Stitch**, **Lovable**, or **Replit**.
- Iterate screens, generate an **instant prototype**, and ask questions that test the experience — not a feature shopping list.

You will leave with a repeatable AI-led workflow and a prototype you can show — not a finished company, and not proof that the market already loves the idea.

---

## The Journey from Idea to Product

Every product starts as an idea. The idea is not the product. Between those two ends sit steps a modern product manager must keep in mind.

- **Official Definition:** The **idea-to-product journey** is the sequence that turns a rough thought into something users can try — problem definition, user understanding, storytelling, prototyping, and testing.
- **In Simple Words:** You do not jump from “I have an idea” to “the app is live.” You walk a path.
- **Real-Life Example:** “Someone should pay for me when I am short of cash” is an idea. A PhonePe screen where Rahul pays for dinner and the app tracks what you owe him is a product step.

Write **Idea** on the left and **Product** on the right, then fill the middle before you open a design tool.

| Step | What you clarify | If you skip it |
|------|------------------|----------------|
| **Define the problem** | What pain are you solving? | You build a feature nobody needed |
| **Refine the problem** | Who hurts, when, how they cope today | You solve a slogan, not a moment |
| **User persona** | A named person, their day, their friction | You design for “everyone” |
| **User journey** | How they discover, try, return, and pay | You only design the middle screen |
| **User story** | A narrative teams can feel | Engineering and design pull apart |
| **Low-fidelity prototype** | Screens, buttons, and flow | You argue colour before the flow is clear |
| **High-fidelity prototype** | Look, theme, realistic interaction | Users cannot imagine using it |
| **Alpha, then beta, then launch** | Insiders → early adopters → everyone | You ship bugs to the whole market |

![From idea to product — eight steps on one path: Idea, Problem, Persona, Journey, Story, Low-fi, High-fi, then a live Product](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session03/s03-06-idea-to-product-path.png?v=20260915)

AI can turn a sentence into screens in minutes. That speed is useful only after the idea is refined.

If you convert every idea into a prototype and send it to the same people, they will help once or twice — then they will stop. Even a friend has other work. A hundred prototypes is not validation; it is spam.

- **Official Definition:** **Prototype-first jumping** is converting an unrefined idea into a clickable mock and asking users to react before you know who they are, what friction you are solving, or how they would use the product.
- **In Simple Words:** Building first, thinking later.
- **Real-Life Example:** A new “try this app” link every evening. By the third night they are busy — not because the third idea was worse, but because you used up their patience.

Refine with the **right user** first, then prototype. Users will not pay for something that does not remove **friction**. Generating screens is not the same as validating a product.

**Activity: Fill the Middle of the Path**

Pick any product you use every week (UPI, food delivery, or a ride app). Write **Idea** and **Product** as the two ends, list five steps in between, and circle the step you skip most often when you “just want to build.”

---

## User, Friction, Journey, and Story

To refine a problem you must know **who** the user is and **where they struggle**. Those two answers unlock the rest of the path.

- **Official Definition:** A **user persona** is a realistic portrait of a target user — demographics, daily life, pains, gains, and where today’s workaround fails them.
- **In Simple Words:** A named person you can design for, not “users aged 18–45.”
- **Real-Life Example:** “People who use UPI” is not a persona. “Arjun, 24, software engineer in Bengaluru, who runs out of balance before payday and feels awkward asking friends to pay” is a persona.

**Friction** is the snag in today’s workaround — double transfers, a merchant waiting in a queue, a mental tally of who paid for chai. If you are not removing friction, you are decorating.

| Question | Why it matters |
|----------|----------------|
| **Who is the user?** | You cannot solve a pain you cannot locate in a real life |
| **What is the friction?** | If there is no friction, there is no reason to pay |

![Persona card for Arjun and a five-stage user journey — Awareness, Onboarding, Engagement, Revenue, and Growth loop](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session03/s03-07-persona-and-journey.png?v=20260915)

Pains are obvious needs (no balance, cannot track dues). Gains include feelings (stay present at dinner, settle without an awkward chat).

Start with **one primary persona**. Secondary personas come after the first story is clear.

A persona tells you **who**. A **user journey** tells you **how** they move — including how they first hear about the product.

- **Official Definition:** A **user journey** is the path from first awareness through onboarding, repeated use, and (if it works) loyalty and revenue.
- **In Simple Words:** How they found it, tried it, came back, and started paying.
- **Real-Life Example:** Think of **Uber**. For many people the first airport ride was free. That created awareness, then a first install, then convenience, then a habit.

| Stage | What the user is doing | Uber-style example |
|-------|------------------------|--------------------|
| **Awareness** | They notice the product exists | A free first airport ride, a friend, an ad |
| **Onboarding** | They learn how it works — ride, payment, wait | First trip completed without panic |
| **Engagement** | They come back in a repeat pattern | Weekly rides |
| **Revenue** | Repeat use becomes recurring spend | Paying for rides as a habit |
| **Growth loop** | The product deepens the relationship | **Uber One**, autos, two-wheelers, parcels on the same app |

Awareness without a first successful use is only noise. PhonePe already has split-expense groups; many users never find them because onboarding does not guide them. A journey that is not shown does not happen.

Once the journey is clear, you still need a **story**. This is a core product-manager skill: the idea starts speaking **on behalf of the user**.

- **Official Definition:** A **user story** (in this lesson) is a narrative in the user’s voice that shows how they feel today, what goes wrong, and how the product would change that — so engineering, design, and business share one picture.
- **In Simple Words:** Teams rally to a life, not to an API name.
- **Real-Life Example:** “Add a pay-on-behalf API” is a requirement. “Arjun is at a rooftop dinner with a nearly empty account and hates being the broke friend” is a story.

A story worth sharing has **before** (messy tally, guilt), **during** (running tab, one approval), and **after** (payday, three taps, friendships intact).

A ticket in Agile is a work unit. This story is **empathy and alignment**. You can break it into tickets later.

**Activity: Person, Snag, and a Favourite App**

For your idea, write a name, age band, city, job, one pain, one gain, and today’s friction in one line. Then pick Google Pay, Zomato, Swiggy, or Uber and write how **you** first heard of it, what made the first use safe, and what made you come back.

---

## Low-Fidelity, High-Fidelity, and Design Consistency

Aspiring product managers often jump from idea to a polished screen. Fidelity is a **choice of detail**, not a quality score.

- **Official Definition:** A **low-fidelity prototype** is a rough outline of structure and flow — often pen-and-paper or simple wireframes — without final colour or branding. A **high-fidelity prototype** looks and behaves much closer to the real product: layout, colour, type, and realistic interactions.
- **In Simple Words:** Low-fi is the floor plan. High-fi is the furnished room.
- **Real-Life Example:** A home purchase usually starts with a **plot outline** on paper: blocks, apartments, rooms. You cannot yet see the sofa. When you paint and place furniture, you are looking at high fidelity.

| | Low fidelity | High fidelity |
|--|--------------|---------------|
| **Looks like** | Boxes, labels, arrows | Real colours, logos, type, photos |
| **Helps you discuss** | Features, buttons, main workflows | Look, brand, motivating CTA |
| **Change cost** | Cheap — erase a box | Higher — you are editing a designed screen |

![Low-fi paper wireframe, high-fi payment screen, and an MVP split that builds the happy path now and parks edge cases for later](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session03/s03-09-lofi-hifi-mvp.png?v=20260915)

Change the **low-fidelity** version until the flow is right. Do not discover a wrong step in the final product.

Low-fi is for **function**. High-fi is for **feeling plus function**.

Between low-fi and high-fi, pause for **theme**. If every screen invents its own colours, the set will look like five different apps.

- **Official Definition:** **Design consistency** is using the same colours, patterns, logos, and control styles across screens so the product feels like one system.
- **In Simple Words:** Pick the paint and the switch style before you furnish every room.
- **Real-Life Example:** A **red** button on a white screen stands out more than a blue one. Text on that red button should be **white**, not pink or orange — contrast is how the eye finds the action. You have seen this on food-delivery apps.

Create all low-fi screens first. Then decide colours and buttons. Then build high-fi.

High contrast on the primary action helps the **call to action (CTA)** get noticed.

**Activity: Floor Plan Then Furniture**

Sketch three boxes for your idea: home, main action, success. Label only buttons and titles. Write one sentence under each box for the user’s job. Only then note one colour or logo you would add in high-fi.

---

## Alpha Testing and Beta Testing

After a high-fidelity prototype exists, you still do not dump it on every user.

- **Official Definition:** **Alpha testing** is an early try of a raw build with insiders — often employees, family, or a trusted circle — who see an unfinished version. **Beta testing** is a later try with **early-adopter users** after the build is more stable, but before a full public launch.
- **In Simple Words:** Alpha is “family sees the messy version.” Beta is “a few real users try a sturdier version.”
- **Real-Life Example:** Many apps on the Play Store let you **join a beta programme**. Open a listing such as Uber and look for an option to become a beta tester. You may see features the whole market never sees.

Alpha testers are **not** looking at the finished product. They help you find bugs in an early high-fi.

You then stabilize and invite a close community of users. Then you take the product to everyone.

Why enrol in a beta programme as a learner: you work closer to that company’s product managers and developers, and you see experiments that may never ship.

- Alpha is **raw**. Beta is **stabler but limited**. Launch is **everyone**.
- AI-generated screens do not replace people tapping the flow on a real phone.
- A common doubt: *“Is my roommate the market?”* They may be alpha. The market is later.

---

## Running Example: PhonePe Trusted Pay

The rest of this lesson builds one idea end to end so you can copy the method.

**Raw idea:** A capability in PhonePe so a friend or family member can pay on your behalf — useful in social outings, trips, and a cash crunch.

![Friends at a Bengaluru rooftop dinner — one person is short of cash, another pays, and a Trusted Pay card tracks social balance to settle later](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session03/s03-08-trusted-pay-moment.png?v=20260915)

People who go out often run out of cash before salary credits. Today they ask a spouse or friend to pay, then repay later. That creates **double transactions** and can keep a **merchant waiting** while phones get shuffled — as in a go-karting queue when the person paying is not the person at the counter.

A cleaner product would let you **delegate** payment, keep a **log** of what you owe, and require **your approval** so nobody spends in your name without a check. Think of the running **khata** at a neighbourhood grocery shop — trust plus a ledger.

That is still a high-level wish. Next you refine it with AI, in the **same chat**, so context carries forward.

---

## Refining the Idea with AI

Use a free-tier chat tool (**ChatGPT**, **Claude**, **Gemini**, or similar). Write prompts so they work across tools. Stay in **one thread** for the whole product.

- **Official Definition:** **Idea refinement with AI** is using a generative model to separate the underlying problem from a guessed solution, name existing close features, and produce a sharper product concept, name, and vision line.
- **In Simple Words:** Ask the model to make the idea feasible and specific — then you decide what to keep.
- **Real-Life Example:** You thought “let my family pay from my PhonePe.” The model may point out that **UPI Circle** already lets a trusted person pay **from your bank account**. If your account is empty, that does not help. Your real problem is a **running tab** someone else pays from *their* money, which you settle later.

```text
This happens when I run out of cash and I would want PhonePe to allow
my friend or family to pay on my behalf. They should log all the
payments for me and I should be able to settle my balances at the
end of each calendar month. I want to ensure this idea is feasible
and refined. Help me do that.
```

A good refine should:

- **Separate problem from solution.** “I run out of money before month-end” is the problem. “PhonePe Trusted Pay” is a solution.
- **Name close existing features.** UPI Circle is full or partial delegation **from your account** (for example a ₹10,000 family shopping limit). It fails when **you** have no balance. Your idea is different: someone you trust pays, and you keep a social ledger.
- **Widen situations you forgot.** Dining, trips, shared stays, cabs, entertainment, small purchases, family expenses, group outings.
- **Give a name and a one-liner.** The working name became **PhonePe Trusted Pay**. Vision: **make it effortless to pay even when you cannot pay yourself.**

Save the **product name**, the **idea** (ask friends or family to pay; track **social balance**; settle later), and the **one-line vision** before you leave this step.

The model’s job is **granularity and options**. Your job is **choice**. If it invents a launch date or a market share, delete that line.

Do not start a **new chat** for every step or the persona will drift.

**Activity: Refine One Idea in One Thread**

Paste your raw idea in the prompt shape above. Highlight problem versus solution. Note any “already close” feature and write why yours is still different — or admit it is not. Copy the name, idea, and one-liner into your notes.

---

## Persona and Journey with AI

After the idea is named, generate **one primary persona** in the **same chat**. When the prompt asks for product name or primary versus secondary, say: pick this from the context of the chat.

- **Official Definition:** **AI-assisted persona generation** is briefing a model with your refined idea so it drafts demographics, daily life, pains, gains, and struggles with today’s tools — which you then edit for truth.
- **In Simple Words:** Ask for a realistic person who would use Trusted Pay, then keep the parts that sound like someone you know.
- **Real-Life Example:** **Arjun Mehta**, about **21–28**, Bengaluru, software engineer, earning band roughly **₹6–12 lakh**. Pain: balance runs out before month-end, awkward to ask friends, tracks dues by hand. Gain: stay present in social plans, auto-track what he owes, settle without an awkward conversation. Belief: good friends make life richer.

Ask the model to **convert the persona to an image** if you want a face on the slide. The picture is a communication aid, not evidence that such a user already exists.

Creating a **prompt library** (saved prompts you reuse) is part of being an **AI-led product manager**. If the persona sounds like a brochure, rewrite it until it sounds like a tired person at 11 pm.

Next, still in the same chat, run a **user-journey** prompt (and ask for a journey image if that helps you present).

| Stage | What happens for Trusted Pay | How Arjun feels |
|-------|------------------------------|-----------------|
| **Awareness** | App, social, friends | “This could be useful.” |
| **Consideration** | FAQ, a short video, is it safe? | “Let me try.” |
| **Onboarding** | Sets up a trusted friend circle | “That was easy.” |
| **Retention** | Asks Rahul to pay in a real moment | Stress drops |
| **Loyalty** | Tells friends so the next trip is ready | Unknown feature → trusted habit |

Touchpoints are not only the app. If group split already exists but nobody is guided to it, your journey must include **visible onboarding**. Hidden needs (do not embarrass me; do not make my friend chase me) often sit in retention and loyalty, not on the first button.

**Activity: One Persona, Five Stages**

Run the persona prompt for **one** primary persona. Copy name, age band, city, job, one pain, one gain. Delete invented statistics. Then write Awareness → Consideration → Onboarding → Retention → Loyalty with one action, one feeling, and one touchpoint per stage.

---

## Product Storytelling with Google Storybook

A persona card still may not move a designer or an engineer. A **story they can hear** often will.

- **Official Definition:** **Product storytelling** is turning the persona, journey, and problem into a short narrative that shows the before / during / after of the user’s life.
- **In Simple Words:** You make people feel Arjun’s month-end, not only list his attributes.
- **Real-Life Example:** **Google Storybook** (a **Gemini Gem**, experimental in the same family as tools such as NotebookLM) turns a written story into an illustrated, narrated storybook. Quality depends on the **story you paste**, not on the tool alone.

Workflow: in the same chat, run a **product storytelling** prompt; copy the story; open Google Storybook; paste and submit (free to use at the time of class). Play it and share the link. You can **download a PDF** to print, narrate yourself, or send to teammates. It is not a video file.

A story that works for Trusted Pay (shortened): Arjun in Koramangala, about **₹387** left until payday, a rooftop plan, Priya picking up dinner, Rohan covering the cab, a messy notebook of IOUs — then a running tab, payday, and three taps to settle. Friendships stay intact.

That is how you brief teams: this is who suffers, this is what they do today, this is what we offer, this is why **engagement** could rise.

If the Storybook is generic, your **input story** was generic. Storybook is **alignment**. Screens come next.

Tools also change. Follow official **YouTube** channels of Google, OpenAI, and Anthropic, and prefer a **weekly** AI roundup over a daily flood you will ignore.

**Activity: Story Then Tool**

Generate a one-page before / during / after story. If you cannot picture a place, a rupee amount, and a friend’s name, regenerate. Paste it into Google Storybook (or a voice note). Write three sentences for engineering: problem today, what we build, success for the user.

---

## Low-Fidelity Mock-ups, Landing Page, and CTA

Now ask the same chat for **one single prompt** that describes **every screen** of a low-fidelity prototype — features, buttons, and interactions.

- **Official Definition:** A **low-fidelity mock-up set** is a screen-by-screen outline of the workflow, used to explain the idea to design and engineering before visual polish.
- **In Simple Words:** A comic strip of the app, in boxes.
- **Real-Life Example:** Trusted Pay low-fi included: home with “Try Trusted Pay,” ask someone to pay, pick a friend, edit limits, payment requested, pay on Arjun’s behalf with outstanding balance shown, success, activity, settle, notifications.

Ask the model to **generate an image** of that flow for your working document.

**Edge cases** belong on the outline even if you will not build them in version one: not enough balance; friend’s limit reached (you set ₹5,000; Rahul already paid ₹5,000); request expired at the counter; friend declines; something looks wrong (decimals, or another currency while travelling).

Two pieces of the set matter more than the rest.

- **Official Definition:** The **landing page** (here, the first home the user sees) is where they first meet the offer. A **call to action (CTA)** is the primary next step — the first tap.
- **In Simple Words:** Home is the front door. The CTA is the handle.
- **Real-Life Example:** **Try Trusted Pay** or **Ask someone to pay** is the CTA. If that line is confusing, the rest of the app may never open.

Landing page plus CTA is the **onboarding launch pad**. One primary CTA beats three competing buttons.

Motivating copy still has to be **true**. In high-fi you can rewrite a cold “Continue” into **Track and settle with Rahul**.

**Activity: One Prompt, All Screens**

Ask for **one** prompt that lists every happy-path screen, then a short list of edge cases. Number the screens. Mark each **Must have for first demo** or **Later**.

---

## Happy Path, Edge Cases, and MVP

When you move to high fidelity, do not try to build every failure at once.

- **Official Definition:** The **happy path** is the sequence where everything works as intended. An **edge case** is where the product can break or surprise. A **Minimum Viable Product (MVP)** is the smallest set of features that makes the core job work and gives **value to the user and to the business**.
- **In Simple Words:** Happy path is “ask → friend pays → it logs → you settle.” MVP is that path, working well enough to learn.
- **Real-Life Example:** Trusted Pay happy path: you ask a friend to pay; they accept; they pay; the ledger shows Rahul paid ₹1,500; at month-end you clear it. Edge cases include Rahul rejecting, Rahul having no money, a request in rupees while they pay in dollars, the friend not being on PhonePe, duplicates, fraud, or settlement failing.

| Build now (happy-path MVP) | Park for later |
|----------------------------|----------------|
| Ask someone to pay; friend accepts and pays | Friend declines; request expires |
| Ledger of social balance | Amount exceeds friend’s limit |
| Settle at month-end; clear success | Settlement fails; partial settle |
| | Friend not on PhonePe; duplicate or fraud; extra privacy flows |

An **MVP prototype** lets people **try the core job** on the happy path. A **polished prototype** tries to look finished across every branch. Start with look-and-feel of the happy path, then improvise.

**Viable** means value for user **and** business. A pretty screen nobody can complete is not viable.

You will not iterate the prompt forever before you start. You start so you can **see** the product, then improve.

Calling a logo-and-theme pass an MVP because it “looks like PhonePe” is a mistake. Looks are not the core job.

**Activity: Five Cards and an MVP Card**

Write five happy-path steps and five edge cases. Circle only the happy path for the first prototype. Fill: MVP name; core job; this version includes; this version does not include; how you will know it is working enough to learn.

---

## High-Fidelity Prototypes with AI Builders

Many builders can produce high-fi screens: **Uizard**, **Visily**, **Ready AI**, **Emergent**, **Replit**, **Bolt.new**, **Google Stitch**, **Lovable**, **Canva**, **Claude** design, **GitHub Spark**, plus coding agents such as **OpenAI Codex** and **Google Antigravity**.

The practical method: **name the tool**, ask the chat for **one ready-to-paste prompt** tuned to that tool — colours and type aligned to the **existing** product (here, PhonePe). Ask for **happy path only**, and ask it to **list edge cases** for later.

```text
I want to create a full-fledged high-fidelity prototype for this product
using Google Stitch. Give me one single prompt ready to paste into
Google Stitch that can help me build this entire prototype. Do deep
research so that screen colours, formatting, fonts, and design
principles align with the existing PhonePe application. For now,
create only the happy-path screens and tell me which edge cases we
are missing so we can improve the prototype later.
```

In **Google Stitch** choose **mobile app** or **website**. This walkthrough uses **mobile**. You can pick a **faster** model or a **more balanced** one.

If the “best” model fails, **pivot to speed** so you still get screens. If a tool fails twice, **pivot to another platform**. That flexibility is a live product skill.

**Why Google Stitch** (useful in interviews):

- **Code export** into Claude, Antigravity, Google AI Studio, Lovable, and similar — including **HTML** and **CSS** in a zip.
- **Figma** so designers take components, not only screenshots.
- **Free tier** for many screens; some other tools hit credit limits quickly.
- **Built-in prototyping** — select screens and turn them into a tappable flow.
- **Mobile and web** in the same tool.

When Stitch generation fails, reuse the same prompt family in **Lovable** or **Replit**. Lovable can stall when **credits** run out. Replit can produce a **runnable** app.

None of this is failure. It is the real texture of AI tools.

**Why Lovable** (when you use it): native **database** (for example **Supabase**); **login** (Google or phone OTP); **GitHub** for a portfolio; a **hosted URL** people can try without a QR maze; paths into Figma and coding environments such as Cursor or Windsurf.

Builder platforms let you **publish** for anyone to try. Stitch shines when you want to **edit one screen, one component, or one theme** (a **dark theme**, or the same flow restyled as **Google Pay**) by dragging screens into context and regenerating.

When tools mention “export code,” you only need a plain-language map.

- **Official Definition:** **HTML (HyperText Markup Language)** describes structure. **CSS (Cascading Style Sheets)** describes look. Together they are common **frontend** building blocks. **Frontend** is screens, buttons, and interactions. **Backend** is data, databases, **APIs**, and business rules — what should happen when the user taps.
- **In Simple Words:** Frontend is the restaurant hall. Backend is the kitchen and the accounts book.
- **Real-Life Example:** The Trusted Pay button is frontend. The record “Arjun owes Rahul ₹1,500” is backend.

You do not need to write HTML in this lesson. You **do** need to know what you are exporting. A pretty screen with nowhere to store balances is only half a product.

Name the tool in the prompt. If generation fails, change **model** before you abandon the tool, then switch tools. Do not rebuild the idea from zero in the new builder — reuse the **same product context**.

**Activity: One Prompt, Named Tool**

Ask for a paste-ready prompt for **one** builder you can open today. Specify happy path only and “list edge cases for later.” If it fails, retry faster or switch tools. Save a screenshot of home and success.

---

## Iterating Screens and Instant Prototypes

High-fi is not a single generate-and-stop. You **select**, **edit**, and **connect**.

In Google Stitch, typical moves from class:

- Recreate **one** screen (for example payment success) in a **dark theme**.
- Drag several screens into the **chat context** so a change applies to more than one. Clicking outside can drop that context — watch the chat window as each screen is added.
- Restyle the same flow for another brand (for example a **Google Pay** treatment) to test whether the idea still reads.
- Edit a single component: rewrite a cold CTA into motivating copy such as **Track and settle with Rahul**.
- Add **multilingual** copy (for example a **Hindi** screen as a demo). Only keep languages you will actually test, or you will confuse testers.
- Add a missing branch later: “create a screen where the friend **declined** the request,” with the happy-path screens still in context.

**Instant prototype:** select the screens that belong to **one** product version, generate an instant prototype, and tap through as a user would — ask Priya to pay, send a request to Rahul, see outstanding amounts update, settle with a UPI-style confirmation.

Stitch can also export a **design markdown** file with component-level context for a coding tool, show a **predictive heatmap** of likely taps, or convert a mobile flow toward a desktop web version. You can share a **QR code** so someone tries the flow on their phone.

That tappable flow is what you take to people. Do not walk them through static images saying “imagine you tap here.”

On Replit-style builders you can **publish**, wait for build and security checks, and share a URL. Hosting may be time-limited. Treat the link as a **test surface**, not a store listing.

Keep **one** product story per prototype. Mixing PhonePe light, PhonePe dark, Google Pay, and Hindi in one demo confuses testers.

Regeneration often appears **to the right** of the selected screen. Stay organised or you will prototype the wrong set.

**Activity: Tap the Happy Path Yourself**

Open your prototype. Complete ask → success → settle without explaining it to anyone. Note the first place **you** hesitated. Fix that label or button only. Do not add a new feature.

---

## Questions to Ask When You Show a Prototype

A good prototype still fails if you ask the wrong questions. Curiosity beats interrogation.

![Prototype tools Stitch, Lovable, and Replit beside questions to avoid and questions that invite honest feedback](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session03/s03-10-ask-and-tools.png?v=20260915)

**Do not ask** (remember these first):

- **“What extra features would you want?”** One person is not your market. You will get a convenience shopping list.
- **“Why did you do that?”** *Why* feels like blame. People freeze or invent a clever reason.

**Do ask** — let them relive the experience:

| Ask | What you learn |
|-----|----------------|
| How was your experience? What did it feel like? | Emotion, not a feature list |
| Did you immediately find value in what you just tried? | Desire for the core job |
| Was anything not obvious? | Confusion on landing page or CTA |
| Can you do that again without guidance? | Whether the flow stands alone |
| Would you be willing to pay for what you just tried? | First hint of value (not a price study) |
| Does any alternative already do this better? | Competition and “why not WhatsApp / khata” |

Lead with **curiosity** on the landing page. Make them feel involved. That is the point of a motivating CTA.

Tie each later change to something you heard, watched, or already marked as a gap — not to “we felt like a dark theme.”

If you add a decline screen, it is because that branch was missing. If you parked fraud flows, say so. That is a **trade-off**, not a failure.

When you present the refined prototype, use a short spine you can defend:

1. Who and the intended problem.
2. What the first idea offered.
3. What you refined (persona, journey, story).
4. What you changed on the screens, and why.
5. What you parked (edge cases, extra brands, extra languages), and why.
6. What you want to learn next from real people.

| We chose | We gave up | Why this is acceptable now | Risk we still own |
|----------|------------|----------------------------|-------------------|
| Happy-path MVP in one brand | Every decline, timeout, and currency branch | We can learn whether the running tab is understood | A friend who says no is still untested |
| Instant tappable prototype | A fully polished multi-theme app | Testers can complete a job, not imagine one | A pretty unused path teaches little |
| Honest “settle later” ledger | Pretending UPI Circle already solves empty-balance | The core job is different from spending *their* account | Users may still confuse the two features |

- First-round testers are a **filter**, not a census of India. Label the source honestly when you present.
- End with one ask: try this path, then answer the questions above — not a twelve-item roadmap.
- Upcoming work is taking this prototype to **real people** with those questions, then deciding what to iterate.

**Activity: Write Your Ask / Don’t-Ask Card**

1. Copy the two “do not ask” lines.
2. Write five “do ask” questions in **your** product’s words.
3. After you next show the prototype to one person, write one change you will make and one you will **not** make, with a reason.

---

## Key Takeaways

- Do not jump from idea to prototype. Sequence **problem → persona → journey → story → low-fi → high-fi → test**. AI makes each step faster; it does not make skipping safe.
- Refine in **one chat thread**. Separate problem from solution, name close features (UPI Circle versus a social running tab), and lock a **name** plus a **one-line vision**.
- An **MVP** is the **happy path** that delivers user and business value. Park edge cases. Change low-fi before you fall in love with high-fi polish.
- Use **Google Stitch**, **Lovable**, and **Replit** as a **set**. When a model or credit limit fails, pivot. Show a **tappable** flow, not a slide of boxes.
- When you present, tell the story and ask **how it felt** — never “what else should we build?” or a blaming **why**. Next, confirm important bets with real users, not only with generated screens.

---

## Important Commands, Libraries & Terminologies

| Term | What it means |
|------|----------------|
| **Idea-to-product journey** | Steps from a rough thought to something people can try |
| **Friction** | The snag in today’s workaround that makes a user care |
| **User persona** | Named portrait of who you are designing for |
| **User journey** | Path from awareness through loyalty and revenue |
| **Growth loop** | Extra reasons to stay on the same platform |
| **User story / product story** | Narrative that aligns teams around the user’s life |
| **Low-fidelity / high-fidelity prototype** | Outline of flow versus near-real look and interaction |
| **Alpha / beta testing** | Insiders on a raw build, then early adopters on a stabler build |
| **Design consistency** | Same colours, logos, and controls across screens |
| **UPI Circle** | Delegation to pay **from the account holder’s** bank |
| **Social balance / running tab** | Ledger of what you owe a trusted circle, settled later |
| **Prompt library** | Saved prompts you reuse across problems |
| **Landing page / CTA** | First screen, and the primary next tap |
| **Happy path / edge case** | Intended success flow versus a break or surprise |
| **MVP** | Smallest version that delivers the core job and value |
| **Google Stitch / Lovable / Replit** | Builders for high-fi screens, hosting, or instant prototypes |
| **HTML / CSS / frontend / backend** | Structure and style of what you see; versus data and rules |
| **Instant prototype** | Tappable flow generated from selected screens |
| **Trade-off** | Choosing the happy-path MVP and openly parking other work |
