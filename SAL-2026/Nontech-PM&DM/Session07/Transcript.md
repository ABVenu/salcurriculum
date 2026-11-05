0:00 - Thank you.

0:30 - Hello all, Greetings, hope you are doing well. Let me quickly share my screen. I think my screen is

1:00 - already visible. Can you confirm if you are able to see my screen? Let me in fact stop sharing

1:04 - and share one more time so that all of you can confirm if it's visible. Yeah. Please let me know if you can see the screen and it's visible. Okay, good. So we'll be using AI for streamlining some of our daily tasks today. It is one of the most common use cases, but then there are so many things that you can get wrong. From the very basic

1:30 - basic workflows of, let's say there is a transcripting call nowadays and I see some of you also on this call have joined using the AI note takers, otter, read AI. So we all rely or we all outsource some of our learning to these AI tools and then these transcripts and all we expect that are perfect to the right tone, right? We do customer research. We have a lot of data that is being collated. But are we really streamlining these daily tasks to all.

2:00 - optimized for AI, are we able to get the right value add out of it? And if we are doing these, what are the best practices of the

2:10 - prompt engineering or what we have learned so far or we'll be learning going forward in terms of the best practices of

2:17 - chat, GPT, perplexity, Claude, GROC, how do you use them? How do you apply them and how do you apply them in a way that your

2:24 - daily tasks that you do are more predictable and are more rounded in.

2:30 - experiences and give you exact value that you want to get out of them.

2:34 - Right?

2:35 - So we'll cover some practical hands-on use cases.

2:38 - For the context, this deck is already shared with you.

2:43 - You can find this in the attachments.

2:46 - And for the session, we'll be going ahead with this drive.

2:51 - Here I have some, I just clicked on this and I've opened it.

2:57 - So I have some case studies here.

2:59 - case studies here for us to go through together, right? If you just look at this, you have

3:06 - phone Pika case study where I have the phone Pega, meeting a transcript, right? I've just

3:10 - taken this transcript. I will just download this, right? And generally what happens is we'll go through

3:17 - them one by one. Now you have this transcript ready in front of you, right? How would you process

3:22 - that, right? I would just, the best practice or the way of doing this is I would start a

3:29 - a new chat GPT session, right? I would go ahead add this file. I'll just upload this.

3:35 - And I would say, analyze this transcript for me. Some people don't even do this. People just say,

3:46 - tell me what does it have? Right? Now, when it kind of starts analyzing it, right? You saw it did

3:54 - not apply the reasoning model. It applied the basic fast,

3:59 - or the flash version. It says the source is, there is a meeting that happened on

4:04 - phone pay product discovery. It happened on October 6,226. It's a 62 minute meeting. And then it has

4:12 - given you the executive summary. The meeting begins with seemingly straightforward product idea,

4:18 - which is UPI circle, where you can pay on your friends behalf. However, the discussion reveals

4:23 - a more important problem, which says the dependence.

4:29 - may need visibility, control and reassurance about their finances. And when they delegate

4:34 - payment, what are the capabilities? Just to give you a brief about this idea itself, right? What

4:40 - is UPI circle? So if I want to allocate a monthly budget of, let's say, 5,000. In that 5,000, I want my friend to

4:49 - pay 1,000, my family to pay 3,000. Me, without me being in the loop, they should be able to pay on my behalf, right?

4:59 - and they should be able to understand how much transaction was done and a ledger should be

5:05 - maintained for that. Now, what product is being explored? A delegated UPI payment experience

5:13 - built on NPCI National Payment Corporation of India's UPA Circle framework, indented to help

5:19 - one person enable another person to make payments, like how I explained to you. Full delegation,

5:25 - the secondary user can make payments within a monthly spending.

5:29 - cap. So if I say my father can pay up to 5,000 on my behalf, even if I'm not there, he can pay from

5:34 - my account. And partial delegation is each payment requires approval from the primary user. This is

5:40 - what is being discussed in this meeting, right? The important distinction is that the original concept

5:45 - is a proposed solution, not a proof that this solution will work. And that is why this was a product

5:50 - discovery call, right? Parents cannot initial hypothesis why this feature was built and why this product

5:58 - was built. If you see the first analysis of the transcript itself that GPD has done

6:04 - for you, right, has given you really good insights. And you can probably start creating inferences

6:10 - and you can start thinking that this is exactly what I need. Let's go through this. It says the

6:18 - transcript reveals a shift between two different problem statements. In the room, first hypothesis

6:23 - was older or less digital confident users may depend.

6:28 - on family members to complete their digital payments. That is the hypothesis with which

6:31 - we started this idea out at phone pay. The second part is users cannot understand or trust

6:38 - what is happening on their account. Users cannot blindly trust that. Users may mistakenly do recurring

6:48 - debits because you don't know that payment is made or not. Your father has done payment for you

6:54 - and your father does not know if you have approved it or not. He might just go ahead and do multiple

6:58 - payments, right? And there is someone in the meeting transcript, her name is probably

7:05 - Sunita, she says approximately 31% of the tagged auto pay payment as unauthorized debit,

7:13 - complaints from users who are 60 years and above. What are we saying? We are saying that

7:18 - people or parents who are 60 years and above, they would want their kids or their dependents to pay on their behalf.

7:26 - But I don't know who Sunita is probably, but Sunita says there is a supporting

7:30 - data where these 60 year old people are saying that auto pay is an unauthorized debit according

7:38 - to 31% of the users. And why does this matter? Users need is to complete a payment and understand

7:45 - accounting activity. There is a friction where you need someone's help. The main risk is approval

7:51 - or failed payments can cause confusion matrix and hidden activities.

7:56 - Now it has given you some key takeaways as well. It has said product management

8:04 - takeaways are do not prematurely commit to saying that eldersly need it and we should just go ahead and build

8:09 - it. In the meeting maybe you neglected Sunita's point. You did not do a large discussion or

8:17 - the discussion that this would have warranted. You did not give it enough time. But now the analysis

8:22 - of this transcript is done and it is saying don't jump to confirm.

8:26 - conclusion. 31% is a discovery signal. It's not a proof. validate it and only then go ahead and do it.

8:34 - Right. Now let's rather than going through this summary, it has also given you some core four findings.

8:43 - Where it says there is a Fatima, there is a Rahul Menan, there is a Dipa, there is a Vikram, there is a Aditya.

8:49 - So many people are there on this call. You have just downloaded the transcript and the secondary user is a

8:56 - under served. Fatima has said something. Approval based payments could fail. Rahul has a concern. Deepa has a concern. Vikram has a concern. Risk assessment. So many things are there. Full delegation versus partial delegation. You can just keep going. And then it has said, okay, I have also identified the people who are supposed to take actions from this meeting transcript.

9:23 - Right? Fatima Sheikh is designed.

9:26 - And Vikram I.R. is legal. Engineering, this needs to happen. Risk this needs to happen. Sunita Reddy needs to do this. Neha Karni from product needs to do this. And growth marketing needs to do this. It has given some scores. This is inundating information. If you were spending this much time in just analyzing a transcript and this was the type of information that you were trying to get out of an AI tool, you will probably never be able to.

9:56 - to make decisions because you will not read this much content. I read some part of it. You might have already started

10:01 - feeling, yeah, how do I optimize for my transcript? So how would you do it? Take a minute, think about it. How would you

10:10 - upload your transcript and how would you go about analyzing it? And the transcript is available with all of you.

10:18 - The link to this drive is there. Go ahead and just run this transcript on any tool and tell me what your

10:23 - Browns would look like? How would you do it? Let's see what is the ideal way of doing this, right? So, there is a hidden

10:42 - point in this transcript where 31% of the seniors complained about fraud. This year GPT was able to catch.

10:53 - These two, those to include Rahul Steens being dropped off from mid-meeting, a deadline that quietly moves a joke. There are a lot of things that you need to discover.

11:03 - Let's write a lazy prompt that we have written here. What was our lazy prompt? This was our lazy prompt. I'll just paste it so that.

11:19 - Analyze this transcript for me. This was a lazy prompt. That is generally how.

11:23 - Let me highlight this in red.

11:30 - Analyze this transcript and attach the transcript. That is how we do it.

11:35 - How many times have you done this and then you have realized somebody in your team has assigned you a task without actually reading what was discussed in the meeting?

11:46 - How many of you have those who are working at least would have seen this?

11:51 - Or how many of you have gotten?

11:53 - actions from AI that did not belong to you. How many of you have faced that?

11:58 - I think some of you would have right. So let's look at how can we be more structural about

12:05 - this analysis that we have here in front of us, right? I would just go ahead. I have a more detailed

12:12 - prompt here. Let's first read this prompt so that we can kind of get a good hang of it.

12:20 - executive summary. You should have it in maximum five bullet points. What are the problem,

12:28 - key insights and scope? And what does it say? Your role is you are a meticulous chief of staff

12:34 - and from the transcript that I've given you below. I'll actually make this one also in purple

12:39 - color. So the entire prompt is visible to you. So you are a meticulous chief of staff.

12:46 - And your role is to give me an executive summary of five bullet points.

12:50 - Only things that were explicitly agreed in the meeting. What can happen is in a meeting we start with the discussion.

12:59 - Like in this case, we started with the discussion of we will build this feature of UPI circle where people can pay on behalf of each other and adults would use it.

13:10 - But then Shubak came out and said 31% of these users are saying that this is fraudulent. I don't want to do it.

13:17 - Fair call out. That's why I'm saying only the explicitly

13:20 - agree decisions, right? If a decision was changed later in the meeting, show only the final

13:27 - person and note the timestamp. This is called reasoning or chain of thought citation prompting.

13:35 - What is chain of thought citation prompting? When AI goes through a raw material or when your

13:41 - AI goes through the transcript itself, we are saying it, boss, don't just give me a clear

13:50 - outcome also give me the clear outcome from where did you get it? What is your citation? What is your

13:57 - source? Who said it? When did they say it? And where is the evidence of that? And then finally,

14:06 - what do I need? I need an action item of in a table format. My output that I've given you is in a table

14:13 - format. That table should have columns named as what is the action. Who is the owner?

14:20 - By when should it happen? Most important, if you go back and look at the source table

14:27 - that your GPT has currently given you, let me just open that and show it to you. So this also

14:34 - give us an exchange table, right? It has given the exchange table, deliverable, due date and owner,

14:40 - but there is no clear citation. There is no chain of thought citation which is saying

14:45 - if two people share their first name, disambucate. There are two rawholes in this.

14:50 - There is not one Rahul. There are two Rauls in this. Let's go ahead and check if it was able to capture that, right?

15:01 - Aditya Joshi, Sunita Reddy, Rahul Bhati or Rahul Mennan.

15:05 - Right? If your A.A. is not able to capture that, these models, they are getting better and they are able to improvise and they are able to do deep reasoning pretty well.

15:15 - But source timestamp, use the full names. If two people share the first.

15:20 - name to December 8th. If no owner was named, clearly tell that this task is

15:27 - unassigned. Do not hallucinate. I will show you the response that your chat GPD gave and I will also

15:32 - show you the response that we will get out of this prompt. In some places, GPD has actually assigned

15:38 - to the task that did not belong to that person. And that is what we want to mitigate. If an action

15:47 - item is not decided or is a parking lot, including Joe,

15:50 - or suggestions that were rejected. Sometimes in a meeting we just might casually say,

15:54 - oh, that's a good idea, but let's not discuss it for now. I know the users will feel like this,

15:59 - but we can't do anything about it. These, a anomalous point, but which represent a good opinion,

16:06 - should not be rejected outright. They should be given a value on the face, and they should be considered

16:12 - as ballpark item. And if there are any open risks raised by any attendee, flag them out. Finally,

16:20 - any number or statement where the speaker corrected themselves. The speaker might say,

16:26 - oh, yes, this is giving me a 31 number and then they say, no, no, no, no, wait, Shoba might say,

16:32 - I did not read that correctly. It's not 31. It's 3.1%. What then? If rather than 31%, if Shuba said

16:41 - that 3.1% users are only worried about it, all of a sudden your outlook of this being a bad feature

16:47 - changes a lot. Or if it is 0.3% then what?

16:50 - Yes? Is 31% users dangerous or 3.1 or 0.31? What is dangerous?

17:01 - What is dangerous? 31? Yes. 31% is dangerous. And then rule at the end of this Marchsearcher prompt,

17:10 - cite a timestamp for every decision and action that is taken. Do not infer anything that is not set.

17:16 - And meeting date is Tuesday, 6th October, 26.

17:20 - I am giving this. It's called cross-referencing. Cross-referencing happens in two ways.

17:28 - I can take a response from GPT and give it to Claude and say, can you validate if GPT did a good job or not?

17:34 - Or I can take that to a perplexity and say, can you see if that it did a good job or not? That's cross-referencing between LLM models.

17:42 - The other form of cross-referencing is where you are saying, no, I know what is the correct data. I will give you

17:50 - difference saying that when I attach a meeting, how many of you have done that you've

17:54 - written a prompt but you have attached something different than that a prompt? How many of you

17:58 - have been in that situation? Yeah. So it's a very normal use case. And that's why we are saying

18:04 - only look at the transcript, which is from the meeting and you can give the meeting name also,

18:09 - saying that it's from the Tuesday, 6th, 6th October meeting, right? So let's just run this

18:14 - prompt and let's see what is the output this time.

18:20 - This is copied.

18:30 - And I'm using the same text window.

18:31 - I will probably attach the transcript again so that it has reference.

18:39 - Let's run it again.

18:44 - So waiting for the attachment to complete.

18:50 - Let's hit run.

19:20 - Let's try again.

19:25 - Let's try again.

19:50 - Okay. So now, executive summary, decisions with the timestamp.

20:10 - Now you cannot go back and hallucinate that it's not correct.

20:15 - Right. Only explicit decisions or agreements are listed below.

20:19 - Proposals that were not.

20:20 - explicitly finalized are excluded. What does it say document the 23,000 primary

20:28 - user estimates with its query treat it as a proxy, not as a count of parents. Conduct 12 secondary

20:35 - user interviews, 18 home and 4 remote. Require a cooling of period for delegation. The duration

20:42 - was not finalized in the script. Exclude under 18 users from the discovery phase, right?

20:50 - This was revised at 2453.

20:55 - We have to test two hypothesis.

20:56 - Secondary users need to pay without depending on the primary users.

21:01 - And the second hypothesis is they mainly need visibility and reassurance when paying securely.

21:06 - Vikram IIR will deliver one page legal assessment by October 16th.

21:11 - Now let's see.

21:12 - It has given you owner done date action item.

21:17 - Rahul Bhadier, Rahul Manan.

21:19 - Conduct a Google Pay, UPI Circle,

21:20 - competitive tier down. This one it says it's unassigned. Let's see did it did the previous

21:25 - response assign it to someone?

21:33 - Okay. This one also did not assign it, which is good. And what are the not decided or parking lot

21:43 - items? Not decided items are no dates were agreed, right? For launch a pop co-pilot

21:50 - launched the pilot project in two weeks.

21:54 - Karan Malotra said that we can launch it on Diwali.

21:58 - And there was a teen segment that can be probably launched for V2.

22:03 - And initial seven-day you cap payment on behalf only to $2,000.

22:09 - DIPA Raghwan proposed this.

22:15 - And then Rahul Menon said they need technical feasibility assessment.

22:18 - and what are the open risks that were discussed?

22:23 - Is this what corrections were made?

22:27 - Ariti initially said, initially says the estimate is 2.3 crores, but then he corrects himself

22:32 - and says, no, it's $23,000.

22:35 - Fatima said initially 12 interviews, all in home and then said, no, 8 in home and 4 remote.

22:41 - Let's just ask it one very thing.

22:43 - What are the differences in your?

22:48 - original response and with this response.

22:57 - Are there any gaps that you were able to identify?

23:05 - This is like asking GPD itself to create its paper and test it as well.

23:10 - But yeah, that's...

23:12 - Can you feel that this, what was given to you now,

23:16 - is a much more detailed, accountable, reliable, hallucination, less response, right?

23:27 - Improved for executive consumption, five concise bullet points.

23:32 - Major improvement is the decisions in the original response, it was saying they were mixed

23:37 - of agreed item and interpretations.

23:39 - Here only dedicated list of agreed items on the call are called out.

23:43 - Named on us dates and timestamps, right?

23:46 - Proposed discovery plan and some assignments were hallucinated responses.

23:51 - The entire plan, I did not read it for you, but the entire plan that it gave for day one to day three,

23:56 - what should happen, day four to day seven, day eight to day 10, day 11 to day 14,

24:01 - was a lot of inferencing that your LLM did on your behalf.

24:04 - It was trying to make decisions for you.

24:09 - Right?

24:11 - And that is the power of writing or analyzing good prompts.

24:14 - So membership relationship verification, let's go back to the response which is evaluating.

24:21 - Revised commitments are unresolved topics have been improved, right?

24:26 - Improved, though not perfect.

24:27 - Source traceability is much better improved.

24:29 - What were the gaps?

24:31 - Actions are still mixed with decisions.

24:34 - Who needs to take action versus what were the decisions made?

24:36 - And then, of course, you can continue to improve this prompt as you go along.

24:41 - But I hope with this, the first use case, how.

24:44 - you're transcripting and we have also given you an assignment here, right?

24:50 - Go ahead, look at this response.

24:54 - I will share this chat with all of you so that you can validate this, complete this as a homework as well.

25:03 - So we have the original response on top and we have the newer response at the bottom.

25:09 - So public link copied, list, paste, paste the response.

25:14 - says.

25:30 - Then says.

25:31 - Let me also.

25:44 - What we want you to do is on this link, open this, verify in the first response versus the chief of staff refined prompt response, which one got which parts better and which one were kind of flaky, right? And we have given you some self-check prompt as well. We wrote one of the self-check prompts. And I'll just add that here as well.

26:14 - Right. This is the prom that I wrote for checking its response. What are the differences in your original response with this response? Are there any gaps that you are able to identify? Right. Here I've given check your output against the transcript for every owner, date and number, quote the exact line that supports. List anything you cannot support with a quote and fix it. For a leadership rewrite, how do you make it friendly for leadership? You can say rewrite the executive summary for a VP who has just 30 seconds, right?

26:44 - let them get one insight that could change the product direction.

26:48 - Let's try to run this prompt. Let's see what it kind of gives us, right?

26:58 - rewrite the executive summary for a VP who has just 30 seconds.

27:02 - The product may need to solve visibility issue, not payments issue.

27:06 - Supported data suggests that older users often mistake unfamiliar auto pay mandates as fraud,

27:12 - raising the possibility that financial visibility and reassurance matter more than delegated

27:18 - payments. The team will need to test the 12 hypothesis with these 12 users and under 18 users

27:26 - are right now out of scope. So for a VP we are saying the value is there but where you need

27:32 - to probably invest more is if you are looking at this Google UPI circle feature to make the

27:41 - trust in the people that it's not fraudulent and pay on behalf or pay UPA circle

27:45 - is actually a viable thing, right? So yeah, that is what it is. Let's go ahead and look at some

27:55 - more of our use cases. I have another very interesting use case for you. So Swigi, as a

28:03 - case study we have taken here, but most of you might be going through daily, at least I suffer a lot

28:11 - on this daily. There are so many things that go around us, right? We have things like

28:19 - Outlook for Microsoft employees. We get mails on Outlook. We have Microsoft teams where people are messaging.

28:26 - The same person might be sending an email and saying, hey, I've just sent you an email. Can you

28:30 - reply to that, right? On Teams. We kind of have conversations on the product. Like when we are

28:39 - working on a document or when we are working on Excel, we might just leave the document comments

28:44 - there. And then we go back to teams and say, can you look at the comment that I left in that document

28:50 - and reply on the email that I had sent initially. So Swigi similarly has multiple meetings where people

28:59 - are talking things. They have Slack messages where on groups people are chitch-chating. They have their

29:03 - Gmail also, right? The case study that we have here is

29:09 - There are four sources which are talking about upcoming monsoon in Chennai because you know Chennai has retreating monsoons.

29:18 - Generally when it's October, November, December, the monsoon happens. And there is a big reveal for VP, right?

29:26 - VP said, I like the plan for monsoons. Go ahead and approve it. Let's launch it. And they said this on Slack via a thumbs up.

29:34 - And teams went ahead and executed the plan. And then the VP said, hey, my thumbs up, that just means a thumbs up.

29:39 - of that I like the idea. You have to propose that idea to me and actually give me the final

29:43 - look. So how do you tackle such situation? This is a very common use case in your day-to-day life,

29:48 - right? Let's look at the sample data that we have here. If you go to the second case study, which is

29:53 - Vigee, we have the transcript of two of these calls, right? Gmail and Slack meeting operations stand-up

30:03 - and meeting ops. We have the Gmail thread, the mail thread that's going on. And we have the

30:09 - leadership meeting Slack conversation as well. So what I'll do is I'll download all

30:14 - four of these Slack, Gmail thread, Monsoon meeting ops, operations meeting that was set up,

30:22 - and the leadership review meeting that happened. I will now go ahead and let's start a new

30:33 - chat. Otherwise, you will kind of, it might hallucinate across phone pay and chat

30:40 - GPD. I don't want that to happen. I'm attaching these four. And this time we'll not go ahead with

30:46 - a lazy prompt. I've already given you a prompt here. I want you to run that prompt, right?

30:51 - We want to solve the scenario, summarize the things, read the AI summary, right? Note how confident

30:59 - it sounds. Read the sources from these dates. I've given the date.

31:03 - Log every error in the audit table and each row needs a proof.

31:08 - This is what we are trying to solve and this is the prompt that we are going to use.

31:11 - Let me just highlight this in purple color so that you know Kansi prompts here, right?

31:17 - You have to page this source. I'll just copy page this. While it runs, we will kind of read through

31:24 - the prompt as well. So if you see what is the prompt. Below are four sources about the same project,

31:32 - Slack, email, two meetings. Short all statements chronologically. First, get your sequence

31:38 - right. Once your sequence is right, the latest is at the top. An emoji reaction is not an approval.

31:46 - Two people share the same first name, Priya. Again, the same problem here also. List every safety

31:53 - related items separately, even if it is raised by a junior person and give me output as decision

31:58 - table, action items, superseded items, open risk.

32:02 - and items of owner. So evidence, owner, decision, statement below are organized

32:10 - chronologically. The latest decisions would be at the top. So you will see decisions on 8, 9th, 10th.

32:15 - Now, this has kind of gone through your email, your Slack, and that is what I think fantastically

32:22 - Microsoft copilot also does. Microsoft co-pilot, in fact, one app for all your productivity

32:30 - apps is what it stands for. It helps you.

32:32 - become more productive. If you attach the work IQ or it's one of the components within

32:38 - M365 coparid, you just attach that. It can have access to your teams. It can have access to your

32:45 - outlook. It can have team access to your docs and all of that. It will give you a chronological sequence

32:52 - order of things. So what happened on, let's say, 7th August, do not release the rain fee to production

32:58 - until legal and finance have both closed their reviews. The original

33:02 - proposed launch date was provisional. So legal team has said, wait, don't launch this feature

33:09 - of rain fees, right? Rain fee policy revised, 20 for non-members, zero for Swiggy

33:16 - 1 members, and earlier flat 25 rupees flat fees is now changed to 20 and 0. Routing should

33:25 - avoid designated underclass only when rain mode is on and zones rain threshold is met, avoid a

33:32 - permanent closure of these roads, right? Legal sign-off is conditional on the upfront

33:40 - fee visibility on the store listing and cart before checkout. So this product and the design

33:46 - team need to go, show it to their design team, get it approved, and if it is visible only

33:53 - then the legal team will give a sign-off. Otherwise, you would have just said, hey, we have

33:57 - gotten a thumbs up form, sci-finance, and legal it says it's good to go, that's not right.

34:02 - And who needs to own this? Ananya Dissai from legal team needs to give the final sign-off.

34:07 - Right?

34:08 - Leadership clarified that Samir Khan's lack thumbs-up was acknowledgement but not approval.

34:15 - The emoji must not be treated as sign-off.

34:18 - Samir Khan, who's the VP of South Ops.

34:21 - Right?

34:22 - So current policy and delivery positions, rain fees, target launch of 15th October,

34:30 - 30 per.

34:32 - order plus daily benefits when a partner completes at least 10 qualified rain mode

34:37 - orders. Okay. This is the driver benefits, driver partner benefits. And rain mode and rainfall

34:43 - threshold-based avoidances of the designated underpass. Source, status. Okay, action item,

34:54 - owner, source and timestamp and status.

35:02 - implement customer facing fee label display it in the store listing page

35:11 - use reviews so overall you are able to see this right it has given you each of the action

35:15 - items open and what are the risks let's also go and see this superseded items which were

35:21 - initially decided in either call or on slack or on transcript and now they are superseded flat fees

35:26 - as you have discussed has been changed treating samir khan's thumbs up message as an approval for

35:31 - $25. That was wrong. Launch on 12th is conditional only if legal approves the

35:38 - UI card. We are not going ahead with just saying that the legal has given approval. It's a conditional

35:44 - approval. And revised offset of finance 0.9,000 because initial estimated was $1.65,000 because you're

35:52 - doing $25,000, flat fees for everyone. So finance also needs to revise a number. This is where these

35:59 - LLMs and AI models becomes your thought partners. You have to know how to use them to

36:04 - really ground your sources of information and then tell it okay, what are the angles that I might

36:09 - be missing. So you might be missing this angle of legal. You might be missing this angle of finance.

36:13 - And that is what it holds you accountable for and helps you narrow it down. Legal conditions must

36:19 - be completed and finance and legal must close before production release. Open risks. Water

36:24 - logged underpasses can trap delivery partners. So deviant reported prior instance.

36:29 - One bike was fully submerged and routing avoid list assigned to Lakshmi. She has to go ahead and do this. Avoid list does not cover newly flooded locations. You have to account for that. Routing must be permanently blocked on important roads. Right. And Lakshmi, it has to implement that logic. And partners may continue receiving unsafe routing instructions. Track and interim safety control. Now see, this is really, really good and really detailed.

36:59 - if you gave it the right prompt. If you know I want to see the commercial launch risks, what are the items with no ownership or complete ownership review, right? This is the case when we gave a more structured or a defined prompt. What? Let's just ask it. What if I did not give you this prompt and just asked you to give me 5.

37:29 - bullet summary from the attached resources.

37:34 - I've seen a lot of people do this.

37:37 - Don't, I don't have time to read all of this. I don't know who should take actions and how should I drive the project forward.

37:42 - Give me five bullets points. I'll implement them. I'll just go ahead.

37:45 - Right.

37:51 - So delivery partner incentives are approved.

37:55 - Rupee fees, 25 rupees is improved. Routing fees.

37:58 - routing safety algorithm is made better. Manual safety and override critical gaps.

38:03 - Partner communication and launch readiness is something that the team is working on to give

38:07 - readiness in both English language and the native Tamil language. But you don't know the risks.

38:14 - The underpass risk, which is such a normalized one, plus how you landed from, see, at none of

38:21 - this place, it mentioned the finance forecast need to be revised. We went away from $1.63

38:28 - to how much was that finance offsite or sorry not offset offset offset yeah from

38:35 - 1.65.65 to 0.9. It will not give you the exact answer. It will not give you all the details

38:43 - that you are looking for. If you try to say give me a Chris summary, give me only 5 bullet points,

38:47 - give me action items that I can quickly go and work on. And that's why your daily tasks

38:51 - of these transcripting, adding these notes, referencing them need to have a refined refined

38:58 - prompt that has to be a part of your prompt library. In our case, it was this prompt that we used

39:04 - for collating this information and bringing it all of it together. This kind of helps you bring

39:11 - your daily tasks to the power of A and leveraging it is your thought partner. Right. So now that

39:19 - we have looked at this and you understand the foundations, I'm hoping you appreciate more what the

39:28 - benefit of a good prompt is and apply that according to this framework. It's more

39:34 - or less applied to that the TC-P50 framework itself, which we have also discussed in other sessions

39:41 - around prompting, right? So we'll at this point to validate how much you are understanding,

39:47 - we'll kind of have a quick quiz for you, right? And we'll see how much you have learned this.

39:53 - I'll start that and let's see how much the concepts have ceded in your

39:58 - thoughts, right? So yeah, let me start the time there.

40:28 - Thank you.

40:58 - Thank you.

41:28 - Thank you.

41:58 - Thank you.

42:28 - Thank you.

42:58 - Thank you.

43:28 - Thank you

43:58 - Thank you

44:28 - Thank you

44:58 - Thank you.

0:00 - Welcome back. Let's talk about some of the daily tasks that we perform and how can we automate that with prompt library or a prompt resource that can take care of three things.

0:20 - Before we talk about that, just a quick heads up, we'll end up creating some really cool stuff here.

0:28 - and let me list that down.

0:31 - So we will think about how do I create a user persona for my product?

0:35 - How do I create a user journey and understand the touch points and the pain points, right?

0:41 - Touch points, pain points, right?

0:45 - How do I go out about thinking about my product roadmap?

0:57 - And if I have to write a one-pager concept note for a new idea that I'm proposing as a product manager, how can I go about doing that as well?

1:06 - Now, these are your daily tasks, at least as a PM that you would do.

1:10 - Where a prompt library comes in handy is introducing you also to the platform Misfit product.

1:17 - You can check this out on my LinkedIn as well.

1:21 - It has all the prompt libraries that I use day in day out, right?

1:24 - and that kind of really helps me in maintaining 100x productivity as an AIPM.

1:34 - Let me show you what that means.

1:35 - So I have this prompt library.

1:37 - Let's say I want to launch this.

1:42 - We'll start by the product user persona creation prompt.

1:47 - I have this prompt listed out here.

1:49 - We have already done another session.

1:51 - You can go back and watch the recording for that.

1:54 - where we have spoken about how to write prompts in the TCPFT framework, right?

2:00 - So alignment with the clarity framework of OpenAA or the TCPFT framework or the Kosta framework of Google.

2:08 - We have written a prompt here.

2:09 - I'll just copy this prompt.

2:10 - Let me start a new session, right?

2:13 - Let me just go to chat, GPD and start a new chat.

2:17 - So I'll go ahead and paste this prompt.

2:19 - If you look at this output of this prompt, right?

2:24 - It's having the components of what the core user persona is, right?

2:31 - Who the persona is?

2:33 - What are the elements that need to be added into that persona, which is demographics, technical, proficiency, success metrics, name of the persona.

2:41 - It is a self-reflection prompt.

2:44 - It does not ask you a lot of questions.

2:45 - It just asks you, tell me the name of the product.

2:48 - Let's say the name of the product.

2:54 - is UPI circle that is on phone pay where elderly can use this to pay on to pay on to request

3:12 - their dependence to pay on their behalf and it asks you do want one person or do you want to

3:24 - persona. So I want only one persona. What is the primary person and what is the secondary

3:28 - persona? Primary persona is the main core user workflow of your user journey and the secondary

3:36 - persona is someone who is can also benefit from your primary offering and is willing to pay,

3:42 - right? Your make or break persona is your primary persona. Now if you think about writing this prompt

3:47 - and maintaining it, what it solves for you is one, it works across platforms, it will work on a clod,

3:52 - it will work on a grok, it will work on a GROC, it will work on a GPT, it will work on a

3:54 - Gemini, it will work on a perplexity and it is scalable across product types also. I have

4:01 - even phone pay, you can go ahead and try this prompt for Swiggy, Spotify. If you are launching

4:06 - a new product, if you don't have any idea about what your product should look like and how it should

4:10 - work, you can just go ahead and give a one-line description and it will give you a good solid persona.

4:16 - Right, let me just copy this image. It has demographics, it has psychographics, it has product

4:22 - specifics, it has technical proficiency.

4:24 - and the primary persona of Savitri who says, I like managing my daily life independently.

4:31 - And with UPI Circle, I can easily request my son to pay when I need help.

4:36 - Now, this is what productivity in a day-to-day life looks like.

4:40 - Let me just paste this here and we will also keep pasting the prompt links as well so that you don't need to repeat this.

4:49 - Right. Now, another task that you ideally would be doing.

4:54 - Let me just paste this here.

5:02 - So you can find the link to the prompt as well as a 100x PM in this slide itself.

5:11 - Similarly, I can just go ahead and do the same for my user journey also.

5:14 - Let's say I want to now map the user journey of Savitri here.

5:19 - We have given you a prompt here, you can just copy this prompt.

5:22 - On the same chat, I will run this.

5:24 - as well, right?

5:27 - I'll just give this prompt and say for the same product above, run this as well.

5:38 - And give me image output.

5:43 - I will also probably share with you the chat so that you can refer and recreate it.

5:52 - Now why we are doing this?

5:54 - Before, let me just paste this here.

6:24 - This is here. Let's go back and look at our user journey as well.

6:38 - So if you think about it, this is how the user journey of Savitria looks like.

6:43 - She gets an awareness about this product.

6:45 - She says, oh, I have a UPI Circle app where my dependents can pay on my behalf, but she's not clear

6:53 - how it works.

6:54 - Now she takes it into consideration.

6:56 - Why don't I add my son and my daughter-in-law or my daughter and my son-in-law into this?

7:02 - And my concern is, is it safe?

7:05 - Will there be a limit or will I get bankrupt?

7:07 - Like these age category of people, as you know, are very scarce for or are vulnerable to these digital scams.

7:15 - So she is worried about this and this is the problem that we should ideally be trying to solve as well.

7:19 - Like the product and the functionality is great, but how do you make them trust that this is a useful product

7:24 - which will actually come in handy for them, right?

7:26 - Then there is onboarding, she gets started, she sets her daughter onto it.

7:31 - She might need some help to set it up to configure the context.

7:34 - That is where a good product manager mind comes in and she can set that up.

7:38 - She starts transacting, she starts buying things online,

7:41 - she starts ordering the regular groceries at home, and then she just says to her son-in-law,

7:45 - can you pay on my behalf, and she's happy and empowered.

7:48 - Now, what are the top four recommendations?

7:51 - In the user journey prompt itself, as a product manager, we have

7:54 - given you this thought process of where you should focus.

7:58 - Launch a simple, relatable education campaign to increase that option.

8:03 - Add strong trust and safety signals so that the activation increases and the effort is

8:08 - medium for this.

8:10 - The launch campaign is simple.

8:11 - It's a low effort, right?

8:12 - And then you can simplify the setup and guided flow with family assist.

8:17 - This is where the product design and the entire experience comes to it.

8:20 - If I have to translate this now to a...

8:24 - roadmap that I can actually create and assign it to the different teams, right?

8:31 - Let me show you the third prompt.

8:33 - Let me first go ahead and copy the.

8:36 - So this is the persona prompt.

8:38 - This is our user journey prompt.

8:40 - I'll just add it to the slide so that you also have it handy.

8:48 - And yeah, this is the prompt and that's also.

8:54 - this image.

8:55 - So this is your user journey prompt.

9:03 - And let's talk about the third bit that we are talking about, which is the product roadmap.

9:12 - Again, we have given you a prompt, which can superfast your entire roadmap creation.

9:20 - It can create the work items, it can assign the work items, it can create the risk items, it can create the risk items.

9:24 - it can create a delivery plan and you can train it to reduce hallucination on your previous

9:30 - Zira tickets, right?

9:31 - Let me go ahead and create this roadmap for the above product.

9:40 - Again, this is a interactive prompt.

9:42 - So it will ask you a free questions with respect to your product.

9:46 - I have given it the context that use the same product that we are trying to build on top.

9:51 - And using that itself, you should probably go ahead and.

9:54 - and create this entire roadmap, right?

9:57 - I'm just waiting for this to start generating.

10:04 - Okay, so it says what duration of the roadmap do you want, right?

10:10 - Product and feature it has already said, total duration.

10:14 - I say I want a total duration of, I think this can be done in three months and I want a roadmap

10:22 - scale which is weekly task. Let's say I want weekly tasks. And the date for

10:36 - launches, let's say, first Jan, 2020. Let's make it 26 Jan because first Jan,

10:43 - we don't have three months. Okay. So this is your task, your alpha testing, beta testing.

10:51 - your swim lanes, work items, engineering, front-end, engineering,

10:55 - backend, design, testing, marketing, milestone headers, right?

11:00 - And it has created your matrix checklist and your engineering PM launch checklist as well.

11:05 - Now, this is the power. Let us see, can you show me a sample of also creating a work item of this

11:20 - in Jira dashboard. I have my Jira connector already attached to my chat GPD.

11:28 - It is connecting to my Jira workspace. I'll just see if it can convert this entire roadmap, right?

11:35 - It says sample Zira work item is created, which has priority high, sprint, weak, owner.

11:41 - Acceptance criteria is also written for you, right? Now it is thinking and it is going to go and create

11:47 - that work item for me.

11:48 - So in less than, I think we have not taken here, I don't know the exact time, but maybe

11:55 - we have taken 12, 15 minutes from where we started in understanding our user persona, right,

12:02 - to defining their user journey. Now going ahead and creating a roadmap, actually creating

12:07 - the work item of this and assigning it in Jira, right? It says I've already created this,

12:14 - you can go and look at this work item. Let's click on open the work item. So I have a

12:18 - Zira work item. And in your Jira, this work item is already created. Define the

12:22 - into end to end experience of elderly phone page, scope, acceptance criteria, deliverable, and you can

12:28 - share this with your team. That is the power or that is the utility of using the repurposing

12:36 - prompts in itself, which are written with high grade quality, right? I will just try to show you one more,

12:46 - which let me first add the list.

12:48 - links to this chat so that you have it handy. Now I will go ahead. And on this platform,

12:56 - these are just couple of or the three prompts that we have shown you, which can automate

13:00 - your 100x PM journey. You can also see one page of prompt creation. You can see concept

13:05 - note. You can see PID creation. You can verify. These are all aligned to the underlying framework

13:11 - or the underlying foundations that we have covered off, CoStar and TCPFT framework. Any good prompt,

13:18 - you think about it. It works on this. Let's take an example of the Google's

13:24 - Kostar framework, right? Which is context. What is the context of problem, right? What is the

13:33 - context of problem? Right. What is the situation that you're working in? I'm working

13:44 - for phone pay. I'm trying to build this feature of what is the context?

13:47 - you are an AI or expert product strategist with a decade with a decade. Let me just make it slightly smaller.

14:06 - you are an expert product strategies with a decade of experience in building

14:17 - deep tech products. You will help me become more efficient as a

14:30 - AIPM. This is your context part of the product. This is your context part of the problem.

14:35 - Right? Let's look at the rest of them. What is the situation? You are, I am working as, I'm giving my situation of my context here. I am working as a senior PM at phone pay, building feature, building feature for growth and adopt

15:05 - option of UPI on the platform. What is the tasks that you need to give?

15:17 - In this case, you have given multiple tasks. You can give your own set of tasks. What we have given to it, we have shown you user persona, user journey and roadmap. We will also look at one

15:35 - With this roadmap, we have also asked it to create Jira tickets item, right? What are the action that it needs to take? Connector of Jira and image prompt, right? Image prompting and the result format. We have images. We have roadmap, Jira items. We have one pager doc that can be saved in my Google Drive, so on and so forth. So let's quickly see that as well. It will give you a good

16:05 - understanding of what the different result formats mean. So I'll just go here.

16:09 - I have this one product one pageer creation prompt. I'll go ahead and copy this, right? I'll run this

16:16 - in this. I'll say go ahead for this product. Create the one pages prompt.

16:35 - your problem, but it is going at doing the research. Now if you see within the prompt,

16:40 - we have given the chain of thought or the reasoning. For it to do deep reasoning, go look at the

16:45 - resources, give us the citation and we have added instructions where we say make sure there

16:50 - is no hallucination and what are your sources of information you give us that clearly. It looks like

16:55 - UPI circle is already announced on phone pay. So we went ahead and read that piece of information.

17:01 - If you look at this, phone pay goes live with UPI circle and it's been, uh, it's been.

17:05 - it's in 2025 itself that they have done this, right?

17:09 - And it kind of gave that one pager in accordance to that.

17:13 - It includes everything that you need to have in your one pager, let's say,

17:17 - executive summary, problem, opportunity, proposed solutions,

17:22 - target users, primary users that we focused on.

17:25 - And why this will win, like a proposition for your business.

17:30 - If you are writing in your organizations, concept notes or one pages or PRD documents,

17:35 - that are already doing a bit of work. You can tweak or fine tune this prompt according

17:42 - to your use cases, but the framework of TCE, PFTHs task, context, example, persona, those should remain.

17:52 - They can be tweaked according to your own use cases, right? That will reduce the hallucination.

17:57 - And in your daily tasks, when you think about as PMs to get higher productivity, these

18:03 - prompt should not only focus on one vertical or one business or one type of product.

18:07 - It's not that this prompt only works for phone pay UPI.

18:11 - It should be able to scale and it should be able to work for all the particular use cases that

18:15 - we have shown to you, right?

18:16 - So here is your one pager.

18:18 - Now that this one pager is ready, I would now want to go ahead and probably estimate how much

18:26 - time and effort have I taken and how much time and effort would it have been if I had not

18:31 - done this via an AI product route.

18:33 - Right. One of the things that's also evaluated a lot in the interviews is when you do this as an AI PM, right? As an AI product manager, how much time are you saving today versus how much time would it have it taken you when you were doing this without AI and when you were doing this traditionally?

18:55 - Right. So we have given a framework here, which is FTA framework. How frequently are you doing this?

19:03 - When, how frequently do you create, let's say, user persona, right?

19:13 - So for the task, let me just take these here.

19:19 - The task is persona creation, right? How frequently do we do it? I think I would do it once

19:25 - in a month. That's why I won. If you are doing it daily, you would give it a five star rating.

19:31 - How frequently do I create a user journey?

19:33 - competitive review is something that I do every week at least. So probably four times a month or I'll give it a three, right? And then creating a one page is again something that you do at least twice a week and PRD writing is one. Right? How much time does it take you to do this manually? Right? If it takes you under 10 minutes, you can give it a one. If it gives you takes you over an hour, you have to give it a five.

20:03 - Right. So a persona creation generally takes me two hours. So I would probably give it a two.

20:11 - User journey definitely takes me more time. So I'll give it a three.

20:15 - Competitor research also takes me time around three to four hours. So at least a three.

20:19 - Creating a one pageer again takes probably a couple of hours. So two. Right. And

20:25 - PRD writing, it takes a lot of time. So I'll give it a five. Right. It takes a lot of time. Right. It takes a lot of time. One pager also it will

20:33 - take some time. So let's try to give it a three. Now this is how you can convince and this is how

20:38 - you can explain how you as a product manager are saving time with AI. How much time did it take us

20:45 - with AI? Right? One. All of them would be one because we are all able to do this in less than

20:52 - 20 minutes, 15, 20 minutes, right? So all of them one, maybe a PRD creating and reviewing concept note

21:00 - might take a bit longer. So I'm giving it a two here. Otherwise, everything is a one.

21:07 - Right. Competitor review. Also, if you have to read, you can probably give it a two. And risk if it goes

21:14 - wrong. Right. Risk if it goes wrong. Persona, if it goes wrong, the risk, if you see here,

21:22 - goes to client or regulators is very high. It's not so high here. So I will probably give it a one.

21:27 - And if the risk is on user journey can go wrong is also two maybe. But your competitor

21:35 - review risk is very high. So a four, right? And creating one pageer again, it's internal. So

21:41 - risk is three. PRD writing, if it goes wrong, if the entire project goes for a toss, so it can be

21:46 - again a five. Now this framework kind of helps you understand and narrow down. Are you really becoming

21:51 - productive? If you multiply your frequency by current time, right? Let's try to do this.

21:57 - Let me add a column here. Sorry about that, I think it added a row.

22:08 - If I add a column here and I add a column here. Right? So. How much is the time that is taken for you to do these tasks? When you are

22:27 - it traditionally. Right? You can just multiply this frequency by task. So it's 2, 3, 9, 6, 3 to 6 and 5. So your total time is 5 55 and 6, 11, 20, 25 hours, right? And when you do it with AI, it's 1 into 1, 1 into 1, 1 in this frequency into AI.

22:57 - If it, 2 into 3 is 6, right? 2 into 2 is 4 and 2 into 1 into 1 into 2 is 2.

23:07 - 2. So yeah, 2, 4, 6, 1 and 1. What does your time come to? Let's highlight this.

23:21 - 6, 4, 10, 14, 14. 14 hours. Now you can give a quantified.

23:27 - impact and you can clearly state this is how AI is helping me and this is the time that I'm able to save when I'm operating as an AIPM with reusable prompts and my own prompt library. So I hope you are able to appreciate why we are doing this and how we have created this prompt library for your own organization as well. You can go ahead and create this. And of course, if you want to reuse ours, happy to share that via misfit as well. One thing which is very important, which will be discussing at this.

23:57 - point is how do you make sure all these prompts and everything that you are getting?

24:01 - We have also given you some more sample prompts here for weekly status report.

24:05 - If you want to create a co-work skill on cloud or if you want to create a co-work on co-pilot which automates and sends it out at a particular frequency, you can use this weekly status report prompt.

24:15 - Email trash to clean your email box.

24:17 - That is also there and research synthesis.

24:19 - If you want to do research and you want to narrow it down, do competitor research.

24:25 - In fact, competitor research, if I just go ahead and show you on this, there is another one prompt that we have here for competitor research.

24:36 - So if you see here, research in competitor research, right? If you just run this prompt as well, it will give you for this feature, run this.

24:49 - So it will give you a detailed competitor analysis of what are the features and how other competitors like Google page,

24:55 - have the same. It's asking me the name of the company, same product and company as above use case.

25:09 - So you can see Google Pay, PayTM, Bheem, WhatsApp Pay, how they are doing, what are their features, pre-payment approval, spending limits they're offering.

25:21 - Request status tracking is not available on PayTM and Bheem.

25:25 - It is important because that is where we are saying that these elderly people can kind of feel getting lost, right?

25:31 - So we also have this prompt for you where you can do competitor analysis.

25:35 - It gives you five ideas that you can leverage from your competitor and make your product better.

25:40 - And it also takes you a step ahead in doing your research faster.

25:46 - So with that, I think we have shown you some really good prompts that we are using.

25:52 - We'll take a pause here.

25:54 - so that you can drink some water and then we'll continue from there.

25:59 - So I'll just start the timer and you can probably take a 510 pause and then we'll come back.

26:24 - Thank you.

26:54 - Thank you.

27:24 - Thank you.

27:54 - Thank you.

28:24 - Thank you.

28:54 - Thank you.

29:24 - Thank you

29:54 - Thank you

30:24 - Thank you

30:54 - So yeah, welcome back, and let's

31:09 - and let's start, and let's start with this, and let's start with this interesting, uh, this interesting one,

31:13 - this interesting one, which is how do you reduce your hallucination and factual check on these

31:20 - case studies that we have been covering so far, right?

31:22 - We have looked at some of the

31:24 - some of the mechanisms which help you quickly create stuff and I think most of you are already doing that in your organizations where you are using either a chat GBT or a clod or a

31:34 - publicity and getting output out there very quickly right.

31:39 - I'll have this also attached and shared with you.

31:43 - Let's look at this Uber case study, right?

31:46 - I have this report which is done on top of Uber's financial statements analysis.

31:53 - Now, the numbers and the reports that we have gotten are from the real FY 2025 figures, the financial filings of Uber.

32:02 - And you can very well go ahead and download that from the Uber investor listing platform.

32:08 - I will just download this for my use case, right?

32:12 - I have this.

32:14 - And

32:21 - And we will now run some pack checks on top of this report, right?

32:30 - This is the report which has both your Uber market research data and it has pulled the insights.

32:38 - Ideally what we have done is we have taken the investor analysis report from Uber's investor calls website.

32:46 - We have now extracted or asked A.N.N.

32:51 - like the cloud opus model is what we have used and we have used GPD 5.1 or 5.6 solve and we have asked it, why don't you summarize it and give me a market research file, right?

33:05 - Let's see what all is right and where all AI probably hallucinated on this. I will just open a new chat window. Let's go ahead and open a new chat.

33:21 - from Uber's research analysis.

33:28 - And I have this prompt again that we were discussing.

33:33 - I'll highlight this in purple.

33:36 - You are a fact checker preparing a report for professional

33:47 - do not verify anything yet.

33:50 - Because if you say go ahead and verify without your guardrails, without your instructions, without how you want to drive it, it will just go ahead, jump and start doing that for you. We don't want that.

34:00 - Extract every checkable claim from the report below in this table, which is what is the ID, what is the claim that is made, what section or which part of the report it is pointing to, what is the claim type, and what is the risk level.

34:16 - To start off, you can just turn this much is a prompt.

34:19 - prompt. This will give you a good understanding of what are all the claims that are made, what are the claim types, what are the sections and what are the risks level that are generally created in this.

34:29 - On each of the claim, go ahead and say claim type, give me the number, date. Where can you find this citation?

34:37 - Which event actually caused this? If you are saying Uber did this or Uber made this much money or Uber launched this project, which event are you clearly referring to?

34:47 - Give me a comparison and calculation of the data. From any fact or opinion represented to publicly available information that you can access.

34:59 - You might know that these tools like ChargbD, Clot, Puplexity, all of them have their tool calling.

35:06 - And the tune calling is directly attached with what is known as web browsers.

35:11 - So in real time, they can really look at your data, fetch those reports, do the tune calling.

35:16 - do the tune calling. And if you have the client-based version of Chair GPD or Claude

35:23 - desktop version, they are in fact more powerful with the Pro and Max versions. They can have connectors

35:28 - where you can explicitly give connectors within your organization as well to validate this data.

35:32 - Now if I am working in Uber and I have all of this data inside my organization, I can very well attach

35:38 - that what are connectors. Okay, there's a question. Let me try to answer that. What is a connector?

35:44 - connector is, think about a connector as an interface as a plugin, right?

35:52 - Let me think of a simpler example and then try to simplify it for you.

35:58 - If you have ever gone to railway stations or airports, right, you will have standing desk where

36:03 - you can go and charge your phone. That's called an electronic connector where you can go and plug your

36:11 - phone. Similarly, when you log in.

36:13 - you log into some of these apps, let's say Swiggy or Zomato. They ask you, do you want

36:20 - to log in with Gmail? That's a Gmail connector. Because once your Gmail is given, you can give access

36:25 - on your credentials and you can start accessing your devices. Similarly, if you think about

36:31 - chat, GPD, cloud, complexity, they also have their connectors. Let me actually show you that.

36:38 - So if you go into your cloud, right, let me just go to the settings. If you go to the settings, if you go to

36:43 - settings here. In the settings, you'll be able to see your connectors. And this tells

36:51 - you all the tools that you can use on my behalf. So it can go ahead and create a Canva deck.

36:56 - It can go and look at my Gmail, send emails on my behalf. Look at my Google Drive. It can go to

37:02 - the Trello board atlasian MCP, which can create my GERA tickets. And that is how it was able to do that

37:07 - in the few minutes before when we were creating the roadmap and we actually created a Zira

37:13 - it, right? It can actually go ahead and do that for you. So that is what a connector is.

37:18 - Now, these connectors give you the capability to do deep research and more bounded or deep

37:23 - research on that. Coming back, what am I saying to this? I'm saying, go ahead, look at your claims,

37:29 - your number, your date, your citation, all the information that you can have from your internal

37:33 - connectors, figure that out. Codes from name people and unnamed people with the citation.

37:39 - Make sure for rules, one claim per row.

37:43 - and validate that with any calculations that can be re-computed or probably are not wrong.

37:52 - Do deep research. I'll just add one more line to this prompt. Do deep research to ensure that you verify the claims of this data with any and all sources of information.

38:13 - information that you can find, right? Refer and find.

38:20 - Let's go ahead and

38:27 - and

38:43 - only validated and publicly available data is approved.

38:56 - Post this run.

38:58 - I will just go ahead and give this prompt.

39:03 - And this is your

39:08 - Let's go to chat GPD.

39:12 - Run this.

39:14 - Now if you think about it, right?

39:17 - This is your way of grounding any market research, competitor research, financial research, financial assessments using this core data that you have.

39:31 - I'll read this uploaded Uber Technologies, competitor and market research report.

39:36 - Global positioning, India deep dive as a source of truth for this extraction.

39:40 - Scope.

39:41 - identifiable, claimable, checkable claim, including numerical numbers, values in table,

39:46 - financial calculation, market share estimates, dates, cost, source, attributions, competition,

39:52 - events.

39:53 - There is so much that is there in this report.

39:55 - Right?

39:56 - What are the claims?

39:58 - In fact, I'll give you a couple of minutes.

40:00 - You can also go ahead and upload it so that we can read it together.

40:03 - So go ahead.

40:04 - If you don't have the link, I'll share this link again.

40:07 - This is, you have to go your AI work, everyday work kit.

40:10 - You have the Uber case.

40:11 - study that we are trying to pull. Just pull this up and then run it on either chat,

40:18 - GPD cloud or perplexity, any tool that you might be using here.

40:22 - So it says,

40:33 - important you explicitly, you explicitly instructed me not to verify anything yet.

40:39 - According to the table, below is the claim inventory only.

40:43 - No claims are marked as verified.

40:45 - Right now, I'm just giving you all the claims that you have made.

40:48 - Then I will go ahead and use my connector, my fact checker, my original source of data.

40:54 - And if you have more resources which are more latest, you have more PDFs, you can upload them and then you can verify that as well.

41:00 - I have given you the actual file that you can look, right?

41:03 - Verification protocol prompt MD.

41:05 - You can download this and you can upload it in your next one.

41:08 - so that it has the real information. Let's see what are the claims?

41:12 - Uber technologies, Uber's largest mobility and delivery platform, okay?

41:17 - In fiscal year 2025, there was 13, 193 million in revenue.

41:22 - That's interesting. I don't know if that's correct or not.

41:26 - 19 million in these year over year, right?

41:30 - Served 202 million monthly active platforms, net income of 10.5 million.

41:37 - And it has.

41:38 - given you risk level that these might be wrong because it's created by a so it when

41:43 - when you start doing your hallucination checks or when you start doing your runs to make sure

41:50 - you are validating every bit of data that it gives you you have to really ensure that it's grounded

41:56 - in facts and that's why we have given risk level high medium low all the numbers that it had

42:01 - that the a has given you it's kind of pointing you that they they might be high risk even if there is

42:06 - let's say 100,000 rupees difference here and there. Uber remains a clear market leader.

42:12 - In India, Uber remains a clear market leader. I would think this is opinion. This is definitely

42:18 - not fact because we have enough place. It is a market leader. It might be a market leader,

42:23 - but it is not a clear market leader. The CEO Dara said that Repido is a bike company in cars.

42:30 - Nobody in India comes close to Uber. Okay, that's interesting. And Ola remains.

42:36 - Uber's chief rival with roughly 40% share. Then how these are conflicting claims, right?

42:42 - Section 2, global financial snapshot, booking revenue, EBTA, free cash flow, and then global

42:51 - competitive landscape, lift in US and Canada, DoDash in US, DD in China, grab in Southeast Asia,

42:57 - Bolt in Europe, Uber's autonomous strategy, and which makes India one of the first AVV market

43:05 - outside the US. Okay, good. Uber is 50% OLA is 35% earlier we had seen 40%.

43:16 - So there are claims. And India deep dive, if you see recent moves, Uber injected 3 million capital

43:22 - for Uber India Private Limited. Uber launched Uber bike pool in 47 cities, directly targeting

43:30 - core segment of Rebito, India deep dive claims. So it has given you 54 claims.

43:35 - Now on these 54 claims, if I want to run my fact check analysis and I want to validate,

43:42 - and it has given you priority flags where mathematical numbers can be wrong,

43:48 - India-specific launches, let's go ahead and validate this.

43:53 - So this is my second prompt where you extract every claim and you are doing a fact-check, right?

44:05 - Now, verify each. Let me just deleting. I think this is a DB duplicate.

44:21 - Let me just make this purple. And I'll show you this in the full screen. We'll just read it. Let's

44:30 - actually run this so that it can run while by the time we come back and review it.

44:35 - So now I will validate all of these 54 claims that are there in this report.

44:39 - Now this can come from your marketing team. This can come from your research team.

44:43 - But how do you validate these claims?

44:45 - Right. So tier one, now verify each and every high to medium claim in the ledger for each of this protocol strictly.

44:55 - Right. The second thing that it says is first make sure the...

45:05 - Tier 1, primary, company filings, earnings release, regulator, persona, Verbatim interview video.

45:12 - Look at that source clearly.

45:15 - Second, tier 2, is it a reputable news or citing source that you can verify?

45:21 - For quotes, make sure original verbatim code and its venue, if you cannot find, label that as unverified.

45:30 - This is kind of your fact checker getting built in real time, right?

45:35 - Confirm the cited report actually exist and the numbers are not hallucinated.

45:39 - Recompute and show the automatics.

45:41 - This is what your chain of thought or your self-consistency prompting is, where you are asking you become self-consistent and you give me every step if this is something that has really happened or not.

45:51 - Calculation, do it.

45:52 - Recency, note the source of data.

45:54 - Are you really saying that this is up to date in two days' time or is this something which is old?

45:58 - And then the output label should be either verified, partially true, false, unverifiable, outdated.

46:04 - And units of checks and currencies, the numbers which are given in billions of dollars,

46:09 - make sure the date of conversion and that revenue currency mix are checked.

46:15 - Be clear in differentiating of the definitions of revenue, gross bookings, cost, EBTA, and what is the

46:22 - globally acceptable standards, especially American acceptable standards of financial reporting,

46:26 - take those into account and then kind of give me the feedback out, right?

46:30 - So this is the problem that we have given.

46:32 - This is your extract every claim.

46:34 - prompt, right? It's available for you also to run on top of the data that you have just

46:39 - uploaded. Let's go ahead and see what is the output that it gives us. Let me go to the GPT, yes.

46:48 - So it's doing deep reasoning. This time it was not quick. It worked for 97 seconds. And let me just

46:54 - zoom this in. World's largest mobility platform partially true. 193 million? Incorrect. It has given you the filing

47:04 - and the data for 26, the revenue was 52 billion. And that is what was surprising

47:11 - to me. Gross bookings were 193. Confused gross bookings with revenue. Revenue increase 19% wrong. Revenue

47:19 - grew, 18%. It rounded it off according to its own understanding. Your net income is verified.

47:26 - Core operating profitability roughly doubled. Partially true. It went from, so it's 98.8.

47:31 - That is how your rounding works for an AI generated script, right?

47:39 - And EBTA is wrong. That is what I was also kind of guessing.

47:43 - Abita margin of 16.7% are on gross bookings.

47:47 - If you look at EBTA on the recomputed revenue, it is just 4.51%.

47:53 - That is a fair number for this industry which operates on 3 to 5%.

47:58 - Right. Uber is clear market leader.

48:00 - Partially true.

48:01 - economic time source. Let's actually go ahead and read some of these resources just to verify

48:06 - if it is getting it from the right one or not. Yes. And this is from August 23, 23, 25.

48:12 - Rapido, not Ola, is Uber's biggest travel in India, CEO Dara. Right?

48:20 - Repidio was reported to have a larger share across all vehicles department. So yes,

48:26 - Rapido is a bike company in car. Nobody in India comes close to Uber and that won't change.

48:31 - false. It actually says, OLA used to be our main competition. Now the tough competition in India is Repido. That is what the source of information says. So this kind of recent 3 billion capital, right? It's actually roughly 10th of 3 billion. It's 350 million, not 3 billion. So that was a gross error that your analysis gave you. And then Ola

49:01 - image, the chief competition, limited competitive threat, partially true, unverifiable.

49:06 - India will be a stable duably. At this point of time, with the smaller players, the fragmented taxi

49:13 - unions of some states like Goa and Rajasthan and Rajasthan and majorly tourist destinations still being

49:20 - operated by informal community, this is definitely not verifiable. So it has given you that claim. It says

49:26 - that it's not 100% true that it is. And then it gives financial data of India gross

49:31 - Bookings revenue adjusted a bit is partially true. Verified everything for you. Global

49:37 - Competitive Landscape. Lift. Statistica, DoDash. Okay. So it has Uber's commercial, Uber

49:48 - operates commercial robot taxi rides in Bangalore through a local AV startup. False. It is announced

49:54 - it's for US. It's not for was found commercial Uber robot taxi rides in India. No primary evidence was found. So they have not launched robot taxi rides in India.

50:01 - taxis in India, an easy way for you to say what they are doing in India.

50:05 - Same Rivian announcement. Uber's first automated or autonomous vehicle, which is like these

50:11 - drones or self-driven cars or no human is not launched in India yet.

50:17 - Your report was saying that if you would have just converted that to a PPP and send it out to your

50:22 - leadership, I'm sure that claim would not have gone really well and you would not have been seen in a great light.

50:30 - So this factual correctness prompt, right, wherever it has unverifiable information,

50:37 - it points you to that. You can then go ahead and tell it, let me try to give you that prompt.

50:41 - Now only for those prompts where the verified information is, now only for those prompt where the verified information is, now only for those prompts where the verified information is available.

50:58 - Create a report.

51:00 - and executive summary to be presented to my leadership.

51:13 - And that is it. This will give you a more grounded and more deep reasoned response prompt. It has also

51:22 - given you some more insights. I'll share this chat as well with all of you so that you can refer this and

51:29 - see the prompts that we have followed.

51:33 - Just, okay, this is copied.

51:59 - Okay, let's do another round of quick quiz to understand how much you have groved and what is still unclear and then we'll start it from there.

52:29 - I don't know.

52:59 - Thank you.

53:29 - Thank you.

53:59 - Thank you.

54:29 - Thank you.

54:59 - Thank you.

55:29 - Thank you.

55:59 - Thank you

56:29 - Thank you.

56:59 - Thank you.

0:00 - So yeah, let's look this again.

0:05 - We kind of had this in front of us where we uploaded the Uber market and competitive and financial summary.

0:17 - And then we ran the fact checker.

0:18 - Now this fact checker in itself was able to tell us which information is fully verified.

0:24 - It was able to give us the links.

0:25 - It was also able to tell us where partial information was true and partial information.

0:30 - information was incorrect, right? The most, at least for me, the most exciting or interesting

0:34 - part of this was Uber's claim on Rapido, right, where it said, we are the largest at this

0:41 - point of time, provide us and then it said no, the biggest competition is OLA, but according to

0:48 - the real sighted sources, what we saw it, it was Rapido, according to Dara, the CEO of Uber,

0:56 - right? Now with this done, let's talk about some of

1:00 - of the more daily tasks where this can come in handy. The power of AI and we have looked at

1:05 - the hallucinations or the risks of AI as well. What becomes interesting at this point of time

1:10 - is how do you really identify use cases where AI can validate AI's content, right? AI can also,

1:20 - we have looked at, can validate some of our facts and figure where publicly available data or

1:25 - information is available. Let's think about it in this way.

1:30 - able to look at the resources, you are able to look at the guidelines of Uber, because

1:36 - Uber statistical data was available. But what happens when you talk about real customer service? Let

1:41 - me give you another case study here, right? This is Google Maps user research. You see Google

1:46 - map had done some user research. They've spoken, they've spoken to their end users, and there are

1:52 - some Play Store reviews and ratings also that we have here. Let me just go to that case study

1:58 - once. Yeah. So they are now trying to identify what did the users

2:08 - really say. The initial hypothesis or this problem context before we solve it is a new study asks

2:16 - why two-wheelers riders in Bangalore stop navigation partway through the trip. If you have ever

2:24 - traveled, you might have done this. You start your journey with you.

2:28 - let's say your Google Maps. Midway, either you might know the way and or you might

2:37 - just find Google Maps useless and you might change the navigation. The PM thinks the answer

2:45 - is battery drain. PM feels the interviewers and the survey say it's route. It's roots that don't

2:52 - suit a bike. Oneways, narrow lanes, flooded underpasses, dark lanes at night. Right?

2:58 - The PM feels its battery when the people start thinking that the battery is draining out,

3:03 - they kind of switch off navigation. The interviews and surveys that are being done by Google say

3:11 - it's a user reported problem where users say this route is not suited for bike. That's why I stop it.

3:17 - The narrow lanes sometimes get me clocked at the end of the street. That does not help.

3:22 - There are flooded underpasses. There are dark lanes at the night which don't work.

3:26 - So how do you fix this? Now, from your user research, what did the users really say? What is the need versus what is the pain point? When you think about a need, a user need is what the user is asking you for. So when we were in the world of Walkman, most of the users used to ask for more memory. And the ways of solving that was a memory card. There was an extension memory that you could provide. But what was the actual pain point. Actual pain point was my control and extensibility of my playlist. That is what Apple did.

3:56 - when they launched the iPod with cloud music, right?

4:00 - So let's look at these transcripts. I'll just download these.

4:06 - So source one research, source two research, and source three research. These are the original

4:14 - sources of information. There is an audit report also where an EA has already done some analysis.

4:21 - We will run that as well. But let me give the raw transcripts. Let me start a new chat.

4:26 - These are raw user research transcripts. These are your raw. There are some raw user research transcripts. Go ahead and do de-preasmean to assess if they can signal.

4:56 - some product decisions for me.

5:01 - I'm just giving a free pass or a free run to chat.

5:04 - GPD to do its thing. And then I will run the prompts. I will also let you read the prompt once.

5:10 - If you go here, right, this is a prompt that we are going to run after this. Let's just read it for a minute.

5:18 - You are a senior research lead reviewing junior synthesis before it goes to a director.

5:23 - Audit the synthesis against the sources only.

5:25 - right? Just read this one and then we'll put this up.

5:55 - I'm hoping you have read this. Let's go ahead and paste it.

6:25 - All right. This is copied.

6:55 - with that GPT for Google Maps.

7:12 - Okay. So the link is added. Let's see what it gives us.

7:15 - There are four type of issues that you need to know before we do this analysis, right?

7:21 - Where all LLMs can hallucinate. Let's just quickly look at them once.

7:26 - The first one is hallucination. Can you just recollect from the class? Can you just recollect from the class?

7:33 - Where all have we seen the cases of hallucination? Can you put that in the chat?

7:45 - Where is outdated context? We saw this in Uber, right? In Uber we saw, let me write

7:52 - UB. In Uber we saw the context was outdated. The numbers were from previous years and they were

8:00 - were the real information or the real competitor was rapido, not Uber or not OLA. Hallucination

8:08 - was it took 193 as gross earnings to be revenue. That is where it hallucinated.

8:15 - Right? Can you confirm if you remember those?

8:22 - Yes, yes, yes, yes. I can see that in the cell.

8:38 - Can you check? Two more things that are specific to this.

8:44 - to this use case and are relevant to us are biased logic and improper formatting and

8:51 - compliance. Biased logic is if some user said it, you make that as a permanent conclusion

8:56 - is already decided. Let's say 2% or 5% of the users are matching the PM's hypothesis

9:02 - of battery. We will go ahead and say this is the right answer. And improper formatting compliance.

9:07 - Sometimes the unsafe or personal identifiable information PII can get linked.

9:14 - There is nothing which can say 100% confidence, AIA, 100% confidence. This is the right answer.

9:21 - But what is PII? PII is personal identifiable information that might get leaked to AI when you are

9:27 - uploading this research data. We did not think about it. To tackle all of these four, we have given this

9:35 - prompt where we are saying biased logic should not be given. Outdated context should not be there.

9:42 - Risk type hallucination or what type of risk.

9:44 - is it. And formatting compliance, if there is anything that you might have missed out.

9:49 - Specifically check every code, state the percentage against the base and validate the numbers.

9:55 - Let's see what this gave us on our GPD output. So, this was the original response. Then we

10:05 - wrote this prompt, right? And this is the cited responses that it gave.

10:14 - Yeah. You are a senior user experience audit. What is the audit saying? First, there is a bias logic. What is the bias logic? The brief stage that hypothesis is based on battery train is the main source for riders quit. In QB route, suitable leads as 25 to 38% which batteries. It has given you the numbers and it has exactly given you where did the PM come up with this thesis of.

10:40 - But it is a biased logic that the PM is having. Why is it the biased logic?

10:44 - The fix is evidence.

10:50 - Do not conclude battery optimization lacks overall value.

10:59 - There is a standard strong signal that riders abandon navigation when they cannot trust.

11:09 - Framer loss. Again, bias.

11:13 - You have framed it in a way.

11:14 - there is a stronger signal.

11:17 - You have already given someone, the other person who will read this, you have already given a bias.

11:22 - In your raw interview notes, it has found that the PMR has already written that it's a problem.

11:33 - Similarly, if you say percentage and number mismatches, where did that happen?

11:41 - This is correct.

11:42 - 52 out of 12, 20012.

11:44 - respondent said this. All these numbers are correct. So PM hypothesis contradiction.

11:55 - 15 September voice release. It is correct. And what is the personal identifiable information?

12:10 - Participation description. P1, P2 is used. So no personal information.

12:14 - is lost. And this kind of tells you what is your risk analysis that is done on top

12:21 - of this. Right? Let's go back and now look at the second prompt. I have done the research. I have

12:30 - identified if my response had any of this information. Right. Let me just run this audit report that

12:36 - PM also gave on this. And then see what it can understand. Right now we have only given it the

12:43 - raw reports. It has no bias of the PM. This is the report from the PM. Tell me the five, let's say, five biggest mistakes in here.

13:04 - Now let's see how the PM interpreted all these research that he conducted with the users and then customers, right?

13:13 - Thank you.

13:43 - So if you see, first it says PM claim the battery drain is number one reason is incorrect.

13:57 - Unsuitable routes cannot hear or see the instruction battery drain is the third top reason. The top reason is unsuitable routes.

14:04 - The top reason is unsuitable routes.

14:06 - So PM was biased.

14:11 - There is a fabricated willingness to pay. I am I'd happily pay $99 a month for an ad free low battery rider mode. PM is claiming this. But actually what your end user or the person that interviewed said, if you ever make me pay for maps. This is a clear evidence from your research which says if you ever ask me to pay for maps, I'll go back asking the Chaiwala, it should just work.

14:41 - I don't need to pay anything to the Chai Walla.

14:43 - Maybe I'll pay for a chai.

14:45 - So your PM is having his bias.

14:47 - He has written that in his report.

14:49 - It prioritizes a voice feature which has already been launched.

14:52 - PM recommendation, launch land-based voice directions.

14:56 - When you do the research, again, your PM has not done historical research on the features that are already launched.

15:02 - They just say go and launch a voice feature. That's already there.

15:05 - And it was able to find that in 15 September.

15:09 - And after the release of this, there was also feedback.

15:11 - back taken. Just tell me the landmark after the cafe coffee day left.

15:15 - Right? And this feature is not able to correctly give it. Correct conclusion. Measure the

15:20 - existing feature rather than recommending a new feature. Measure the existing feature post-launch

15:25 - effectiveness before recommending further investments. With this, what I also want you to appreciate

15:33 - is you can do research. You can use AI and you can create a report and you can create an hypothesis.

15:41 - recommendation. But before that, this is what we have been doing so far. It's cross

15:45 - referencing. Understand the type of mistakes that can happen with AI. I'll just put this on the full

15:52 - screen. Hallucination. Outdated context. Where did hallucination happen? Hallucination happened where

15:58 - it said people are willing to pay. Outdated context. Where did that happen? It happened where

16:05 - we had already lead, where we had already released a feature. And then after the 16th September timeline,

16:11 - you are coming and saying, launch this voice feature again.

16:14 - This is the outdated context, 16th September.

16:18 - Hallucination happened.

16:22 - In the case where it fabricated answer that users are willing to us to pay.

16:26 - What is the bias logic?

16:27 - Battery drain was the hypothesis. It was the third reason that the product manager found,

16:32 - but it is therein is brief.

16:36 - Right?

16:37 - So this post-creating your report,

16:41 - If you just put that report through it, let me just put that report through it and do your analysis on each of the facts.

16:49 - It will give you all of this.

16:54 - It says it dismisses a strong opportunity.

16:57 - 38% user says unsuitable routes is the problem that Google Map should be fixing.

17:02 - You are not even picking that one. And the fifth biggest mistake is it invents persona percentages, misuses the sample and exposes the sample and exposes

17:10 - participant information. How? You have written daily office computer, gig driver,

17:16 - night shift, right? These figures are unsupported. Because the six interviews included a commuter,

17:24 - delivery, student, teacher, consultant, doctor. How did you make them office commuter? How did you

17:30 - generalize a teacher, a consultant and a doctor? Or as a commuter, how did you analyze 52%? How did you

17:38 - analyze that this is a daily computer? There is a rider. We can understand a delivery rider.

17:43 - Night shift. There is no mention. Who is the night shift person here? Are you assuming doctor is a night shift?

17:48 - or are you assuming your computer is a night shift? How have you concluded that? So what would I tell

17:55 - the director of the product? So it has the leading problem is identified incorrectly. Fabricated

18:01 - court for payment. Misses the release context which has already released a feature and that users are already

18:06 - using? Reverses the evidence based on the priority and finally compromises

18:11 - research integrity because generalization is done without labeling who is generalized is what.

18:19 - So this is the case study that we have for you. Now with that, what are the answers for the Google

18:26 - map studies? Eight out of ten interviews blame battery. That was fabricated. Reverse quoted. I will

18:32 - pay. We have just given you the answers. We have one more fantastic case study for.

18:36 - you which is around Zepto. Just read this and then I will just brief you how to do it.

18:43 - The document again for Zepto are available in your AI work kit itself. It's called the Zomato

18:47 - user research. You can find them here. Just open that and let me know if you're able to access

18:51 - it. Yeah, so it has a research, raw interview, debrief and survey results. So all these

19:01 - three with the audit of a product manager. What we want you to do is

19:05 - you have to students get the research brief, six interviews and a survey and an audit

19:13 - synthesis. There it reveals that there are some top findings from the PM and the top findings from

19:20 - the PM are out of stock items as the hypothesis and participant phone number in the table.

19:27 - How many users are really going away because of out-of-order problem? That is the case study. We would

19:34 - love for you to run this. I would in fact run this and add it in the same chat. Let me do this. We will go ahead. We will go ahead and

20:04 - In the same chat, we will upload these as well for you.

20:13 - Run the analysis for these as well as well. And give the final summary in five points. So

20:24 - that your answers are visible to you and you can break them down and see them. Right. So we are just running this analysis.

20:34 - So yeah, the PM's report is not ready for the CEO. There are the findings which are given here. I will not read it for you so that you get to solve it first time, first hand. And then we can validate how many of you got it. We have also given a research table here. Right. So when you want to do these actions, it's kind of a summary of all the things that we have covered so far.

20:57 - Two, what is the role that you need to take? The role prompt, right? Turn a meeting decision into its own. You have to use the role of

21:04 - LLM model as chief of staff. Make, improve its own summary. Sells check prompt. Slack,

21:12 - rewrite for a VP for a Slack. You should use the leadership and Slack versions. Conflict-aware

21:18 - prompt when you have to merge different type of messages together. Task audit, when you have to automate a

21:24 - task for a certain frequency. Split a task as AI human for workflow automations using N-8.

21:30 - If you use turn-off one prompt, right, for stress.

21:34 - testing, you have to use a skeptical manager or a quality analyst manager. Template

21:38 - builder for building templates. Fact checking, you can use a claim ledger, a legal counsel or a

21:43 - verifier. For auditing your research, the one case study that we just did, you have to use user research,

21:49 - expert user research, and analyst or expert user research scientist. And polish without adding

21:56 - claims, citation prompting, and discovering how to rewrite with exact time.

22:04 - where things were heard. So those are the different types of prompting that we have looked at.

22:10 - I hope you got real value out of this. We will have one more quiz quickly for you so that let me just

22:18 - come out of this. We'll have a quick quiz so that we can see how much of these concepts really landed with you.

22:25 - And I hope you get all the answers right. So let's start.

22:34 - Thank you.

23:04 - Thank you.

23:34 - Thank you.

24:04 - Thank you.

24:34 - Thank you.

25:04 - Thank you.

25:34 - Thank you

26:04 - Thank you

26:34 - Thank you

27:04 - Thank you