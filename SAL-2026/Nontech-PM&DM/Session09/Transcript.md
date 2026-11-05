0:00 - Thank you.

0:30 - Hello. Welcome all. I hope you are doing well and keeping healthy. We'll be talking about

0:51 - introduction to automation tools. The most exciting part of any A.A journey today's time is setting up agents and

1:00 - running them. So that is what we are going to discuss today. Can you confirm if you are able to see my screen?

1:09 - Okay. Good, good. Right.

1:19 - So before we jump to what is automation, how it works, sort of things. Let me quickly.

1:30 - show you a couple of demos, right? So I have this Google sheet which is tracking orders which

1:40 - have come from multiple people. I have the name of the person, the order ID, their name, right?

1:46 - And these are the latest orders that have come. And the email for their orders is not yet sent.

1:55 - So their email status is pending. Right. I have set up an automation.

2:00 - on any 10, right? Which reads each of these rows individually. It goes into the loop node.

2:09 - What is a loop node? How it works? We'll explain you all of them one by one. But it's kind of

2:17 - reading every row in the sheet. And then there is a if condition, which is a very simple one,

2:22 - which says if the email status is pending, right?

2:30 - ahead and send out an email and then update the row in the sheet saying that the email

2:36 - went to this end customer, right? So let me execute this. So if you see it read the rows,

2:43 - it went through the first item, second item, and it is updating in real time, who who on the

2:50 - status wherever it sees that the email is not yet sent, right? This is what a basic automation

2:58 - looks like. Now,

3:00 - As we go along these sessions, if you see it went along with all the 32 items and it updated

3:05 - the sheet for four. So 1, 2, 3, 4, these 4 rows got updated and total there are 33 items.

3:12 - So it went over all the 33 items, right? We can quickly open and see all the items that it went

3:19 - with. The last item it went with was Sahel Aurora, right? The username is Sahel Arora. So

3:25 - it went till Sahel Arora and then it sent everything else is sent already.

3:30 - So this is a simple automated workflow. What am I doing? I'm reading a Google sheet.

3:36 - From that sheet, I am reading one row at a time. And in that row that is being read, I am automatically

3:45 - sending an email out. Right now, I'm not sending that email. I will do that in front of you

3:49 - and I will show that to you. I'm just updating the sheet with another node, which is this update

3:56 - draw in the sheet. This is a simple workflow. Agentic workflows. How does an agentic

4:01 - workflow work? Let's think I am a company which has an HR policy document, right? And I am an

4:11 - employee of that company. There is this another tool called DFI for automations as well, right?

4:17 - I have uploaded my HR company document in here. Noabridge HR policy. I've already uploaded it here.

4:23 - Now I go ahead and ask, I have this chat agent which I have created with this automation workflow, and I say, okay, how many of, okay, how many leaves can I take? A very simple question, right? So my automation runs. It reads through the file that is there, right? I'll just wait for the response and I will show

4:53 - you in the meanwhile the workflow that we have. This is the automation workflow that I have built.

5:03 - It reads the user input. It qualifies a query. If it is a right query, it sends it to the HR policy document.

5:10 - Then it puts a tone so that the person feels it's an actual HR feeling talking to them. And if it is an

5:17 - escalation, it reports to that escalation email to the HR. And if you see reasoning that

5:23 - the question asks about employees leave policy, which falls directly enter company's

5:28 - policy. So it is a valid ask, right? Now, if this was not a valid ask, the LLM or the AI should

5:35 - have automatically detected that, right? And it should have told me that this is not for HR policy.

5:42 - It should not even go to that HR policy direction that you have created, right? And it should have

5:48 - ignored it at that point itself. It has gone ahead. It is now going to the, and you can

5:53 - see your entire step by step here. So it went to the query classifier. It went to a document.

5:59 - It read the document. It has a knowledge retriever which retrieves the knowledge from the table or

6:06 - the data that you have provided it. In this case, you have provided a policy PDF. It read that.

6:11 - It said, I've got the knowledge. I have put in a note and I'm now checking if this policy question that

6:17 - the user has asked, does it have any element of escalation or not? So it says, you, your leave

6:23 - entitlement depends on your type of leave you are taking. Leave is calculated, casual

6:27 - leave, sick leave, earned leave, maternity leave, paternity leave, right? If you have been with the company

6:34 - for less than six months, then you are eligible for 50% of the annual allowance. And it says query

6:40 - classifier, it's a plain thing. It does not need escalation. And if I say, I am a mother, I am an expecting

6:49 - mother. And I need a, I am an expecting mother. And I need.

6:53 - Two months of leave. I have been with company for five years. Can I take the leave?

7:05 - Again, the same query runs. Think of the job of the HR. It's essentially automated now. They don't need to update or reach out individual employees. They can just update this document.

7:23 - and add it to this LLM automation, it will automatically read and provide you with the latest

7:30 - information. It will also give the citation of which document it read and how it was able to

7:37 - give that answer out. Right? I'll just open that and probably show that as well. So this is the document

7:43 - and exact pages of the documents are cited here. Right? I'll show you one more tool which is

7:49 - make.com. In make, if you see, you have scenarios that you can create, right? And I am

7:58 - reading this Google sheet. I am, let's say, the head of marketing for a company called Momo Walla.

8:04 - I want to do competitor research. Every Monday, this looks at my competitor moves, extracts their

8:12 - data, and sends me out a Slack notification saying that this is your competitor

8:19 - review, right? For these companies, what are they doing in Momo making as go-to-market,

8:28 - right? Fusion experiment and what is each of the company doing differently? And it automatically

8:35 - sends me a notification. Now that is where and how modern day AI-enabled automations are.

8:44 - I hope you find all of this exciting and you are really looking forward to building these as well.

8:49 - all of this as part of your curriculum. So don't worry, we will build all of this. And I'll also

8:55 - share each node, each workflow, each component of each of the node for you to really build it yourself

9:02 - as well. Right. Coming back to our basics, right? Why automations? What are automations?

9:14 - We see a lot of scenarios in and around us which work on automations.

9:19 - But we don't appreciate or we are probably not fully aware about what each of

9:30 - these automation entails, right? What each of these automation entails can only be understood and

9:39 - you can only know the power of automations if you keenly observe what's going on in and around us

9:45 - since 1980s, 1990s because I know automations are popular now and there are all these

9:52 - tools that are getting popular. But as I said, automation in itself have been there for a while.

9:59 - I'll just give you some use cases that you can think about. If you think about bank calls,

10:04 - right? What were the earliest bank calls that you had? Can anyone think about it?

10:11 - Whenever you call a bank, what happens?

10:15 - Yeah. So bank key general caller to how it goes, to open a bank account, press 1,

10:23 - if you're an existing customer, press 2, to apply for a credit card, press 3, to open a fixed

10:29 - deposit, press 4. These are all automations. You can just click on button 1 and there is someone

10:36 - who has defined a rule at the back end which says for this number, this link should open.

10:45 - or for this number, this action should happen, right? So what is automation, right?

10:54 - Automation is there is a rule, there is a outcome that is defined, and there is a tool

11:02 - or link that needs to be opened for achieving that outcome, right? These are the most basic

11:11 - format of automations that we know of. Another use case. Most of you would have

11:20 - either driven a car or sat in a car or would have sat in a vehicle whenever you see a toll road,

11:26 - right? What happens in the toll road? On the toll road, your car's input is the car or vehicle

11:39 - coming in. Its number is automatically detected. Number is detected. Once the number is

11:46 - detected, what happens? It checks the balance of your fast tag against that vehicle number registered,

11:57 - the bank account which is linked. And it auto debits. And if there is less money in that balance,

12:08 - what would it say? Hold this user for now. If the money is debited, you let them go.

12:22 - If an individual who was sitting on these tollboats, on these tollboats, if this user was spending time

12:29 - manually entering and manually collecting the fine for, let's say, on an average, 100 cars in a day, how much effort was it?

12:38 - and how many cars could pass through? We would all stay in lines. We would wait for the car

12:45 - in front of us to get done. And if a person is not having cash or if UPI was not there,

12:53 - again, another case of automation, right? You have a QR code, scan the QR code, you enter

13:02 - your M-pin. If there is a balance existing in your account, it directly goes and debitates that money.

13:08 - If the balance is not there, you pull out your wallet, you give the cash to the person,

13:15 - the person shuffles through his cash balance that he has, he takes out the change and gives it to you.

13:26 - Just look at the two scenarios which are in front of us and appreciate the amount of manual effort

13:34 - that used to go inside this. Another example, fantastic, which I think I love

13:38 - the most in terms of automation in the Indian industry itself is how many of you have

13:43 - traveled in flights and have tried this thing called or named as DGi Yatra?

13:55 - Fantastic piece of work. I know we can debate about privacy and security concerns.

14:03 - Yes, yes, I see. Yeah, I see your comments. So you have seen Digi Yatra. What

14:08 - exactly is Dijiatra since you are all typing about Dijyatra. What all, what do you think of

14:14 - DGyatra? Yeah. Yes. Yes. So yeah, it's fantastic. It's, yes. It's, yes, it's based on Adhar. Exactly.

14:26 - So it's based on Adhar. It gets your biometrics. It checks your flight number. And then you kind of just

14:33 - tuck, tuck, tuck, tuck, walk inside the gate. You walk inside the gate, your security, you have a dedicated line. There are less number of people.

14:38 - Nobody is physically verifying your identity card.

14:40 - Nobody is asking you to pull out a driving license or an Adhaar card.

14:44 - Everything is just so seamless.

14:46 - This is on proactive management. Also, appreciate the automation that is

14:52 - now available for banks and fraud detection.

15:00 - If you have ever tried, phone pay, there is an automation return with checks.

15:03 - Let me just type that out. PhonePay, what happens?

15:06 - If paying, if you are paying someone first time, there is a limit that is kept at 5,000

15:17 - INR and there is also a daily limit of 50,000.

15:22 - Why did government introduce this? These automations are in place to avoid spam, digital

15:29 - arrest and those sort of activities. Right? So it's not that and do you think for you to

15:36 - really create a rule and an outcome and then a tool attached to that. Do you really think

15:43 - you need a AI? No. If you have a rule, if you have an outcome, a very simple Python script or a very

15:50 - simple line of code or even an Excel operation which is validating this manually can work really

15:56 - well for you, right? And that is what is the power of automation. That is what gives a lens

16:04 - to companies to really try this out.

16:12 - I love this example. I think someone gave this example. This is fantastic. Autopay.

16:22 - If you have ever taken a subscription of, let's say, a Spotify or a YouTube music or any of that product, right?

16:33 - You can set up an auto pay. What is an auto pay?

16:34 - auto pay on a particular day of the month, go ahead and deduct money. You might be doing this

16:41 - for your utility bills as well. Electricity bill, LPG renewal, all of that gets auto-debated.

16:47 - I know it's also a trick for these companies to milk money because to cancel auto pay or to reduce

16:56 - their cancellation, the cancellation button can be deeply hidden in some other website like Spotify,

17:04 - you to its website product to cancel the subscription. That's secondary, but that is what the

17:13 - power of these automations for businesses is. Right. Now, why automations became such a big thing

17:19 - in 2027 and why it rose, why it rose from 2026. Earlier, the automations were very deterministic. What is

17:30 - deterministic?

17:31 - your rule was the output. Now it is probabilistic with LLMs. So the case I showed you, right? If the message is in placed status, if the order is in place status, status, or if it is in preparation, in progress, or if it is packed or if it is

18:01 - it delivered, all of these, if you have to write rules to automate this, you will

18:13 - write four rules, one for placed, one for delivered, one for placement in preparation, and so on and so

18:19 - forth. What these LLMs like ChagipT, Claude, Grock, Quen can do for you. They can read the context of

18:31 - the user conversation, they can pull out the specific part and create a personalized

18:39 - machines on top of that. We just built that. Let me show you this. So this LLM read that the message

18:48 - that the company is coming from the user is. I am a mother. I've been with the company for six years,

18:53 - five years now. I need a two-month leave. It automatically read, congratulations. Yes, you can

18:59 - definitely take the leave. Since you have been with the company for five years, you are fully

19:03 - eligible for a standard maternity benefit. It feels like the LLM is talking to the end user. And it says

19:11 - you are entitled to 26 weeks. Two weeks is just eight to nine months, eight to nine weeks.

19:17 - Sorry, two months is just eight to nine weeks. It's very well covered in this. When you are ready,

19:24 - make sure you go and apply this to HRMS NOVA bridge.

19:29 - where you have to determine if user did this, only this can happen. Now user can do all

19:37 - these things and the LLM sits in between and then decides how the outcome should be. That is one thing

19:46 - that got popular from 2020 to 23. The second nature is tool calling. Tool calling is now this

19:53 - will not just recommend you can take these two weeks leave. It will actually go ahead and say two months

19:58 - leave. I will apply on your behalf. I will go and access this. I will log in on your

20:04 - behalf. I will apply it for you. You just tell me the dates. These tool calling became popular in

20:11 - 2024 with the agentic creation. And this is again something that we are going to learn and build

20:16 - together. Right? So, this is the core or this is the crux of your two.

20:28 - major things that have made automation's need of the R. One is your outputs can be

20:36 - probabilistic either probably this can happen or probably that can happen. And your tool calling

20:41 - for the agent to take action for you has become more standard now. Right? Another thing for you to look at

20:54 - is, if you think of in modern times, proactive insights and hidden business value.

21:12 - These LLMs and these automations can not only detect the patterns that you tell it, that you tell it.

21:18 - You will probably say, this is my HR policy. Always refer to this and give me the

21:24 - answers only in and around it. And your tool would be like, yes, I will focus on this

21:28 - policy. I will give you the answers around this. But what if you say, okay, this is my data?

21:34 - I have no clue if my company and my business is going high or if it is going low. You pull this data

21:41 - and you let me know if it is doing well or not. And every Monday, the insights workflow that I showed

21:47 - you, right? I have not given it any specific template. I have not given it any specific rule. I have told

21:53 - it boss, you go ahead and make something out of it, which is valuable. And it is automatically

22:01 - picking that. It is doing research. It has access to what is known as your web tools, right?

22:08 - Web tools, which is real time data search. This can happen. This can happen very easily.

22:23 - augment to your LLM because LLMs, those of you who have read or have used LLMs,

22:30 - know there is this concept of knowledge cutoff. So there is a particular day or at a particular time

22:37 - when the knowledge of these LLMs is trained and then they are given to market. Let's say we are

22:43 - talking about GPT Astra. So GPT Astra has a knowledge cutoff date of let's say May. We started using

22:53 - it in July, August, September of 26. But the training of that stopped in May. Today,

23:00 - if I ask it about something which is, let's say, current affair, it will not have that latest

23:05 - information, but it has the access to web tools where it can get the latest information. It can

23:10 - look at your data. It can pick insights. Bring it all of that together and use its reasoning power.

23:23 - tool calling power and the probabilistic nature of LLMs is what has made automation

23:28 - so powerful today. Your automations, if they can be answered by just going to a chat GPT or an LLM,

23:35 - then it's not an automation. If it's not doing a combination of this, it's not doing your tool calling,

23:41 - it's not doing your reasoning, it's not applying its own brain to figure out key this should go in a

23:47 - particular direction or not, then it's probably not a great automation. You can anyway just outsource

23:52 - this to your GBT or LLM or Claude and it can take care of it for you. One more interesting piece,

23:57 - which is now getting traction in 2026 is memory. These automations can store your context.

24:12 - What have you asked? So now if this person comes back and asks the HR policy second time,

24:18 - assume she has already taken a two month leave. Now she comes back and says, can I

24:22 - I take another two months. This time it will say you have already taken nine weeks. So you are

24:27 - left with 17 weeks. It will have that context. It will store that context. And this is what is how

24:32 - generative AI is influencing automations. This is how you should think about automations.

24:38 - And when you build automations, you should worry, not so much worry, but you should bring this in a form

24:46 - that you bring the value of probabilistic nature of an LLM. You bring the

24:52 - tool call where it can call the tools and work on your behalf. It can do reasoning and it can

24:58 - use the memory to automate your workflows in a way that the end user feels that it's valuable

25:07 - and it's something that I would want to use instead of a human. This is where the next channel challenge

25:13 - comes. Are we building these automations to take jobs away? Right. I was

25:22 - reading somewhere it said laid off with the laid written like this. I was laid off because of AI. Let's not be critical of this. Let's be appreciative of this. People who have been doing tasks which are manual and which can be done better, do you think

25:52 - this consistency of HR responses. Congratulations, yes. It's a good way of an HR interacting

26:00 - with the employees. Do you think it's a good way? Can you? Yeah, okay. Thanks for that. Yes, it's a good way.

26:09 - Do you think giving the exact citation saying that policy in here, here on here

26:14 - is this helpful for an employee to know that policy, I don't need to read everything. The HR document is exactly pointing me to

26:22 - certain location, I can directly go and pick that up. Do you think it's a beneficial thing for

26:29 - someone to leverage? Of course, yes, right? So, if personalization

26:52 - and search can be improved. If you can give time back to the people, all of them contribute to your productivity gains. So when you build your automations in your company, you should fundamentally question and you should fundamentally think about, can I really really create

27:22 - value in terms of personalization? Can the users feel that the existing, think of a customer support

27:28 - agent who talks to you on Zomato. If it's a human, a human might have a bad day or a human might have

27:35 - their own emotions, a customer can be anyone. Customer can come and start abusing the person. And if you

27:41 - start abusing the person, the personalization response that might come back as a human as well,

27:46 - um, can also be slightly harmful to the business.

27:52 - You're making me. You have robbed me. You are thieves. If someone says like this,

27:57 - the human customer support executive can say, you are a fool, you got fool, you deserve to be fueled.

28:05 - I know LLMs can also do that. Your AI can also do that. But that behavior you can control. You can find

28:13 - you in them. You can give them rack documents. You can give them specific instructions. This is how

28:17 - you're supposed to speak and this is how you are not supposed to speak. No two ways about it.

28:22 - Right. So that's the difference or that's the power of your LLM. If you can induce in that, that in your workflows, in your personalization, it can give you the source of truth. Most importantly for any workflow that can give time, value and productivity back to your users. It's not about replacing those individuals. It's not about taking jobs away. It's about making jobs away. It's about making

28:52 - them relevant with the advent of this technology. And that is what we need to be appreciative of.

28:58 - In general, if you can think of those lenses and if you can project it positively, I think the outlook of people

29:08 - who are willing to embrace AI and I'm sure you have or you are watching this content with the same

29:14 - intention is you want to be AI first. You want to create value. You want to be the people who are paid the most for the next set of

29:22 - jobs and who are those people who are being paid the best for this next set of jobs is your

29:28 - folks who can create value with AI. Right. Now, where do these, so that is what your introduction to

29:41 - automations is. Let's duplicate this and let's talk about.

29:52 - automation tools and their value.

29:59 - Why do we need? Why do we need automation tools?

30:06 - There are so many tools that we need, like we need Gmail to read our Gmail to update the sheets.

30:19 - We need Slack to read our SMSes. We need Microsoft teams. We need Jira to create the tickets.

30:25 - We need, let's say, forms to fill the forms out. We might need WhatsApp to send WhatsApp notification

30:31 - to the user. There are so many tools. You cannot keep going, reading the documentation of each of these

30:38 - tools, how to set them up, and be a person who can create that.

30:45 - right? We want a one single platform, one platform that brings it all together.

30:56 - Correct? That is one of the asks. Do you all concur with me?

31:01 - Good. The second is we are not engineers, bro. We are not engineers nor are we tech savvy.

31:12 - You cannot go and tell me configure an AP. You cannot go and tell me, configure an AP.

31:15 - I define the cookies, define the authorization, protect my data.

31:21 - I want, I want production or live apps running without coding.

31:30 - I want drag and up drop components on no code platforms.

31:34 - That is what I want.

31:39 - Let's not right, we are not savvy, let's say we are not engineers, but we are tech savvy.

31:44 - So these no code platforms or low code platforms, they are drag and drop. You don't need to do anything fancy to really run these machines on your LLMs by configuring writing code, writing Python scripts, none of that.

32:03 - You will need to just understand how these nodes work. How do you set up your credentials? And once you have given your credentials, once you have logged in with your email ID, all of it should work.

32:14 - seamlessly. And you should be able to track it. The third one is observability and tracking.

32:44 - I want the flexibility of these platforms to tell me. I set up a workflow. I set up that for my organization. I have run this chat assistant where all my HR policy documents are set up and the team or the employees of the organization. This can come and read. I want these to be visible to me. If the automation. If the automation fails

33:14 - I want to have it fixed or help from AI to also fix it to also fix it.

33:30 - This is like that Frankenstein. It should be auto-recover.

33:44 - cover and start. These are the reasons and these are the value ads that your

33:52 - automation tools provide you. You have to be very clear that you are looking at these

34:00 - automation tools that we are going to discuss and we are going to touch upon from all these four

34:05 - lenses. All any platform that you use in your company or organization or for your business or

34:11 - for your individual use cases as well. It should have one platform that brings it all together, right? It should be able to fix it on itself using AI and it should make sure the outcomes that it is targeting are achieved in a very simple way. Now, to run these automations, there are a lot of tools that can do

34:41 - your work using a trigger and nodes to complete your actions. There is N8N, there is make,

34:49 - there is DFI and all of that. There is also relevance AI. Some of these Ype coding platforms

34:56 - like cursor, Replit, they have also started offering it. In fact, Chad, GPT also has its inbuilt

35:01 - automations that you can set up. Let's start with N8N. Right? What is N8N? I'll just give you the link so that you all can also open

35:11 - and work with me. So N8N is a open source tool or a platform that saves the

35:23 - context in JSON file formats. JSON file formats are easy to understand for human language.

35:31 - This it means it's open source. That is anyone can use it. Anyone can use it. Anyone can use it.

35:41 - and create their workflows as long as, as long as as long as it's not for sales or let's say further incentives.

36:11 - or if your organization uses for N8N for its internal purposes to automate its workflow,

36:18 - it's an open source free tool. You can pay for the hosting or that also you can run on your local

36:23 - host. So you don't even need to pay for, don't need to pay for hosting. You can run it on your local

36:32 - host. But the problem with local host is your server or your laptop on which you are running. It should

36:36 - always be on and your N8N should always be on your local host.

36:41 - If you don't want to do that, you can pay a minimal fees for hosting services, but if you are using it for sales and further incentives or money making, you need to buy the commercial license or the enterprise license of N8N.

37:03 - That is the KVAT here.

37:05 - Right? You need to work with N8N with certain guardrails if you are creating workflows, automations,

37:11 - for consulting and you are selling it off to organizations, still find the organization

37:16 - that is buying that workflow for you, they need to have the enterprise or the commercial license.

37:22 - And you can find those details about N8N if you go to their pricing page, right? If you see the

37:27 - enterprise license, if you go to the pricing page, you can see business and enterprise license

37:35 - for organization with strict compliance and governance needs. If your companies is less than 100,

37:41 - If you are starter, right, you can have 2.5k workflow execution with unlimited steps and this is per month billing.

37:50 - It is kind of costly and it's in euros. So this comes down to I think 20,000 per month, which is a huge cost.

38:00 - But if you are using it for your own purposes, you can very well run it on your local host.

38:05 - It gives you the feature that it provides. And as we go through these workflows and during your code,

38:11 - curriculum, you will learn all of these. You can have agents, you can have MCP, you can have AI

38:16 - nodes, you can have 1,600 credits. And when I say credits, these are the credits of AI models. By

38:23 - default, all the Gemini, Claude, GPT, they associate with these platforms and they provide you free credits

38:31 - for you to get started on. So you can get started on any time. You can go ahead and use their pricing.

38:38 - You can get started. You will get a login. You can click on this.

38:41 - link, right? You can get started. You will get a link on your email. If you have an enterprise

38:47 - email, let's say at the rate college ID, let's say IITdeley.ac.ac.m. That link will not get sent.

38:54 - You will need to use an at the rate email or a personal account. Because if you are using a business

38:58 - or an enterprise account, end of the day, IIT Delhi is an enterprise. You will need to take the business

39:04 - and the enterprise account and that organization will need to send the link to you. And you will

39:08 - ask, you will need to ask your organization to add it for you. For our class and for our practical

39:13 - purposes, just use your Gmail IDs, set up an account, get that link, and get that ready. And remember,

39:21 - in principle, if you're trying to introduce this in your organizations, you have to get a commercial

39:25 - license of N8N. All the files, all the automations that you built, all the configurations that you set

39:31 - up, all the data setups that you do are available as JSON files imports, right? You can

39:38 - just download that JSON, share it with anyone in your company, and they can more or less

39:45 - go ahead and recreate that workflow and start using it as well. Now that being said, it's just

39:51 - the first tool that we have spoken about. There are more tools make, Defi, relevance, so on and

39:58 - so forth. We will try to cover them as well in some detail, but for this series or this session in particular,

40:08 - We will be focusing on building our workflow on N8N and we will kind of share it the workflows

40:17 - that we are creating on JSON file with you.

40:22 - When you set up an account, it is available only for 14 days. After that, you will need to set up

40:29 - your local host to run it. We will also teach you how to set up N8N on your local host and get

40:34 - it running. But for now, go ahead and create your account.

40:38 - so that we can do hands on together and we can then take it from there. In the meanwhile,

40:43 - just to check how much you have understood, let's quickly have a quiz to see how many concepts

40:49 - and what part of concepts have you really understood and which are missing. So let me start

40:54 - the quiz.

41:08 - Thank you.

41:38 - Thank you.

42:08 - Thank you.

42:38 - Thank you.

43:08 - Thank you.

43:38 - Thank you

44:08 - Thank you

44:38 - Thank you

45:08 - Thank you

45:38 - Thank you

0:00 - So let's start with setting up the basics of an A10.

0:09 - I am hoping your accounts are ready and you are logged in and either if you're using it

0:15 - for your personal purposes then you have your personal account which is available for

0:20 - let's say a 14 days trial right or you are having your enterprise account for an A10.

0:27 - So if you have that, let's get started with the basic understanding of what these components are.

0:33 - Before I kind of take you there because we have also looked at some of the other tools or other prominent automation platforms.

0:43 - I'll also try to just go ahead and walk you through that once so that you understand what this landscape looks like, what are the top relevant tools that you have.

0:53 - First one is Make.

0:54 - So let me share the link of Make all this.

0:56 - link of make also with you, right?

1:02 - Make.com is one of the closest alternative, the other two are ZAPR and DefiA,

1:10 - relevance A.A also. Because on the free tier, it kind of gives you thousand runs.

1:17 - Make comes really close to an 8.N. If you go to the home screen of Make, right?

1:24 - once you set up your account, you'll see your usage, right?

1:29 - You can go to scenarios, you can create AI agents, credentials.

1:33 - Some things which are common across these platforms, let me just unpublish these workflows.

1:39 - So those workflows which are published would be in green and they would run at a set frequency, right?

1:45 - If you look at N8 and make and I'll also walk you through N8N in detail, but it's kind of bonus.

1:54 - content for you where you also get to learn its competitor so that, you know, from a capability

2:00 - standpoint, most of them are very similar and they also operate at a certain set level itself.

2:07 - So if you see on the left and side, if you go to your home screen, right, you'll see your organization,

2:12 - you'll see your teams, users and different type of user roles. And it gives you monthly credits

2:18 - of thousand, which I have already existed for my runs because

2:24 - I had set up this automation and it was kind of running every day by itself.

2:29 - And that's one critical thing that you need to keep in mind.

2:32 - If you're operating on the free tier, you have to be very careful on how many runs do you have.

2:38 - You have your subscription, you have your credit usage.

2:41 - And then on top of that, you also have some scenarios, AI agents, credentials, credentials, webhooks.

2:49 - So the common thing that I wanted to discuss with make is if you see scenarios,

2:54 - is equivalent to workflows in N8N. We'll talk about the workflows in N810. But any workflow

3:01 - or any scenario that you want to run, right? So if you see this, the one that I was showing you,

3:06 - which is Momowala Competitor Review, where I'm reading the list of competitors from a Google

3:13 - sheet, and then I have the second node which I run the Gemini model, and then on summarization of

3:19 - those competitors, I send a Slack message out, right? So the concepts are very simple.

3:24 - You have completed execution, incomplete executions, and if you see here, you have your edit

3:30 - button as well, where you can just click on edit and you can modify this.

3:35 - Individual nodes get activated, right?

3:39 - And you can delete these individual nodes by just by right clicking on them.

3:44 - You can also see on make, you have this run one's button, which says get this data, run this node,

3:51 - and then the Slack message, right?

3:53 - You can save the workflow if it is, if there are latest changes, then this will pop up in

3:58 - orange and it will show you that you have to make it live, right?

4:06 - It's again, if you look at your current scenario tab, it is inactive.

4:11 - So once you make it active and once you make it published, it will kind of start running on

4:16 - its own.

4:17 - You can create AI agents, all the credentials that you want to save, right?

4:21 - You can go ahead and if you see my AI Gemini credit.

4:23 - credentials, my Gmail credentials, my Google Drive, my Slack, all these WhatsApp

4:28 - credential, WhatsApp business are all set up once.

4:32 - Credentials, and I'll just keep typing so that you can see all these concepts when we

4:38 - show it in N8N as well, and it will be kind of revision for you.

4:42 - So we have credentials, right?

4:45 - This is same between N8N and MIC.

4:47 - Then we have your workflows in N8N which are

4:53 - N8N which are called your scenarios in Make.

4:58 - You have individual nodes which are very common.

5:01 - You can see your past executions, right?

5:04 - You can create agents.

5:06 - I'll just go back here and see what else is there.

5:09 - Credentials you have seen.

5:11 - If you have your API keys, you can store your API keys.

5:14 - This is a separate window in Make.

5:17 - In N8N your keys sit within your credentials.

5:22 - your credentials.

5:23 - So your API keys are within credentials, right?

5:33 - So that is what is a major thing.

5:38 - And then if you go back to your scenarios and you see you have your publish and publish button,

5:43 - right?

5:44 - I'll just open our Mumuwala competitor review, right?

5:48 - You'll see history of executions.

5:50 - That is what I've written here.

5:51 - You have.

5:52 - and history.

5:53 - Did it run successfully or not?

5:55 - Successful versus unsuccessful?

5:58 - Right?

5:59 - Unsuccessful executions.

6:03 - You have published and live workflows.

6:08 - As I showed you in make, if you click on this active versus inactive, if you go to your scenarios,

6:15 - you will see an active toggle button here.

6:18 - That shows which of your workflows are active and which of them are not.

6:21 - And if you have shared them, you can also see the shared link here.

6:25 - And even with this link and command, start using your workflow, right?

6:32 - And I think this has exhausted my full limit and it kind of ran throughout the month.

6:39 - So it throughout, it shows you which used your workflow and how many times did it run?

6:46 - So you have to be careful, you don't keep it live and then you forget about it.

6:50 - So you have to be very careful.

6:51 - careful which workflows are active. This is the first tool which is like a competitor of

6:57 - an A10. As part of this also, I'll just walk you through the other competitor, which is your DFI

7:04 - AI. So versus DFI versus make. I've shown you

7:11 - Defi. Let's just also quickly walk through DFI. I'll give you the link to DFI as well.

7:16 - Right. So this is your.

7:20 - This is your link to DFI as an automation tool.

7:25 - Now, I personally love DFI because if you think about DFI, you can see here, if I go to the home page, right, it gives you a lot of options.

7:36 - You can create your agents.

7:38 - The best differentiator or the best part that I like about DFI is, let me just add it here.

7:45 - Defi.

7:46 - It has knowledge setup.

7:50 - So what do I mean by knowledge setup?

7:52 - If I show you here, any data set, right, any set data set that I want to upload and store it as my knowledge, you can directly do that with DFI.

8:03 - If I show you the HR policy pipeline, I have attached the H.R document, right?

8:07 - And you can test if your retrieval is working fine or not.

8:12 - And if retrieval means if there is this, there is a part of this document that I want to index

8:20 - and I want to get information out of.

8:22 - Is it, will an LLM model be able to run on this and will it actually be able to find information or not?

8:27 - You can just go to retrieval testing.

8:29 - And this is the same workflow that we looked earlier, right?

8:32 - I can just ask, hey, how many leaves can I take?

8:38 - Right.

8:39 - And if I run this test, it will tell you, is that chunking, a building, and sizing of individual, the entire PDF done properly?

8:49 - and is it able to find the right chunks and what is the confidence level store?

8:53 - You can validate this.

8:55 - This is the differentiator or the most exciting part that I find about DFI.

9:01 - Another thing that I really like about DFI is there are a lot of learning tools and capabilities

9:08 - that you can have, your AI, chat, workflow, tech summarizer, knowledge agent, and all your

9:14 - different use cases that you can create for marketing, productivity, ops, sales and outreach.

9:19 - If I just show you some content on marketing, right, text policy, translation tool, market research tool, UTM, go-to-market strategist workflow, these again, I'll, so if you see the orchestration, it has given you each component, it has this sticky notes which define what each of these notes is doing.

9:41 - So I'll just call out the similarities.

9:43 - N8N also has sticky notes.

9:46 - You can make notes and define what each of your.

9:48 - module or your notes does.

9:51 - If you can see this in your DFI AI, it says this is a market research and evidence agent.

9:58 - This agent gathers the input from company, customers, competitors, market trends, relevant data.

10:04 - And then if the market information can change quickly, it can verify the claims, figures and

10:10 - competitor details. And then it sends to the strategy development of the GTM workflow

10:16 - or the agent.

10:18 - is one of the sample apps. This sample app is also available as, so what we see as

10:25 - sample apps in DFI. You can see this as templates ready to use in N8N. So why I'm giving

10:35 - you a brief idea about this and we are kind of going in detail is you should understand and

10:40 - appreciate that N8N is a broader umbrella and it's why why it is one of the leading in the industry

10:47 - is it does not have like a thousand execution limit. Its limit is much larger.

10:52 - Plus on the free tier when you run it on local host, it's your local host where you don't need to

10:56 - have any limit as such by itself. And it has the best of these different tools that somewhere

11:04 - or the other are easier to use on N8N than DFI or make. One more thing that is important

11:11 - for DFI is it has its own marketplace. You can publish your apps here, right? And you have

11:16 - integration endpoints. One thing to look at in your D5 workspace is if you just go through

11:25 - your workflow, if you just click on your studio where all your workflows that you have created,

11:30 - right? You can see on this create button, the file format is DSL here. The file format that is

11:37 - there for N8N, right? File format is JSON for N8N. When we create, we create, we create,

11:46 - a workflow in N8N or the scenario that is there in MIC, the file format is a JSON file

11:52 - format. If you go and see the file format of your, let me edit this, so this is your editor window,

12:01 - right? If you export this, right, this again is a JSON format. So your file format for

12:08 - make and N8N is both a JSON file format. Now this kind of

12:16 - helps you appreciate and understand that JSON is a more go-to-standard format. In fact,

12:22 - chatGBT automations can also work on JSON-formatted automations. So for you, if you are a non-technical

12:29 - person and who's just getting started with these automations, if you can really spend some time

12:35 - understanding how a JSON is written, how it is formatted, and how it fails in terms of its competitors,

12:43 - you would be able to understand and appreciate for a person who's coming from non-tech background.

12:49 - JSON is a more easy to understand and use a framework or a language by itself.

12:55 - Right? So that was about the major features and functionalities, right? Of the competitors, which is make N8N and your

13:13 - DFI. You can use more of these features and functionalities. We have just

13:20 - given you a landscape. You should try all these tools out and you should try to make workflows

13:24 - across this. And as we go along, we will also teach you how to make different workflows,

13:29 - advanced workflows on these tools. But have an understanding and have a assessment of if you are

13:37 - building rag agents, if you want to set up a knowledge database, I think the easiest or the simplest

13:42 - one for you to build is DFI. What is RAG? Rag is retrieval augmented

13:49 - generation. So enterprises or companies can have its own data sources and those data sources, they don't

13:56 - want it to be exposed to LLMs. They want to use embedding models and they want to query on top of that.

14:01 - As I showed you, this HR policy has an HR document which is there at the back end. I just want to

14:07 - use this as a source of information. On top of this, I want to run the LLM and I want it to give me

14:12 - information in terms of whether this is going to work or whether this is going to give

14:20 - hallucinated responses or when it works, can it give me really grounded and solid responses or not?

14:25 - Right. So if you are trying to build such agents where you have a dedicated knowledge base,

14:30 - then ideally your DFI works better than your N8N. That being said, let's move ahead with the

14:38 - N8N functionalities, right? So at the very start, if you look at N8N, right, let's go through the basic workflows.

14:49 - If I go here, right, and if I show you, if you click on overview, you will see a few things here.

14:59 - First one is your workflow where you are setting up your workflows, right? If you are setting up your workflows, right, if you

15:08 - click on this, you can share your workflow. And once you share your workflow, your team or the

15:14 - people within your team can see it. It also shows you if it is published versus not published. If it is

15:21 - published, it will show a green button. That means anyone on the internet with a link to this workflow

15:25 - will be able to access it, right? That's the first piece of it. The second piece of it is your

15:32 - credentials where you save all your credentials. So if you see my Gmail, um,

15:38 - is saved, my Google sheets is saved, my GROC account is saved, my Google Drive credentials

15:44 - are saved and my, and this is what I was explaining to you, right? Let's go through this one by one

15:49 - so that all your concepts are clear, right? N8N basics. So the first thing that we have looked

15:57 - is workflow and within workflows, this is where you create your work items. You create your work items.

16:08 - right? We will then have credentials where you can set up your login tools that you'll be using.

16:24 - We will go through these one by one, right? I'll go to my workflows first and let's say I go to this

16:31 - workflow. There is this button that you'll see create workflow. If you don't have any workflow, it will show up a blank here.

16:38 - You will have an orange button in between your screen. You can just click on create workflow.

16:43 - Now within the workflow, you will see three windows, editor, execution and evaluations. So let's explain

16:50 - this one by one. Editor, execution and evaluation. In your editor, what you see is what you want to create.

17:03 - In executions, what you see is how many runs have happened.

17:15 - And evaluation is token usage and how your run performed.

17:27 - Now, we'll go through them one by one. Let's try to create a very simple workflow workflow.

17:32 - If you see here, first, first, we'll go through them one by one. Let's try to create a very simple workflow.

17:33 - First of all, you can rename your workflow. You will, you can double click on this and

17:37 - you can rename your workflow. There is a publish button at the top. Right now it is disabled because

17:41 - you have not made any changes. I will just say, let's say, form to Google Sheets workflow. This

17:51 - is what I'll create. So let's say, and then you'll see either you can build with AI or you can manually

18:01 - created. Ideal way or the best way of learning N8N is you start from scratch and you build

18:07 - yourself rather than relying on AI at the very outset. So I will click on the first step. I will

18:12 - search a form and this is where when you click on plus or you can click a plus here, right? It says

18:19 - you can open the nodes panel. What is a nodes panel? It has all the nodes that you might need

18:24 - to set up your workflow and start running it. Right. So if I show you the nodes panel, I'm just

18:30 - making notes so that you can also try it. All your nodes exist inside it. So you can click on this

18:38 - plus and or you can click on this search. If you want a WhatsApp node, you can see this. It's

18:42 - there. If you want a Gmail node, you can see your Gmail is there. If you want a, let's say,

18:49 - a Google Sheets node, it is there, right? So let's start with a basic node. You can have a form,

18:55 - N8N form or you can have other sort of forms as well, which you want to attach.

19:00 - I'll just attach an N8N form. Now, what you see is a trigger come up. What is a trigger?

19:06 - In N8N, we have four type of triggers, right? There is an event-based trigger, which is, let's say,

19:16 - a row is added to Google Sheets, right? There is a form trigger. When a form gets filled,

19:26 - right? Then there is a chat-based trigger.

19:30 - where you can chat with the interaction and then there is a scheduled trigger where you can schedule an event

19:41 - and that will run at a defined frequency. We will go through all of them one by one. Let's start with the

19:50 - form trigger. What I want, I go to my workflow. I will say on a new form submitted, you can select an authentication, you can select your

20:00 - authorization. I don't want any authentication at this point of time. So what I'll do is I'll give

20:05 - a form, let's say, sample, form name. And I'll say this form is this form is created to teach students

20:15 - an A10. And I can add form elements. What are my form elements? Right? The form elements are,

20:25 - you can add a label, right? You can add an element type.

20:30 - Now, when you add an element or if you add a form, you can think about this as the questions that you want to ask.

20:41 - So I can ask you what is your name, right? And then I can also ask you, let's say, text input type is, I want you to give your name as, let's say, a number, a password, a radio, button, a text area, right?

20:58 - I want it to be a text area. So I will go ahead with a text area. So what is your name will be a text area? And I want another input which says, I'll just show that one more time. So you'll see add form element, where you can go ahead and add another form element. You can just say add form element. And this time I'm asking what is your email ID, right? And I can again, let's say, this time I will select email type. So the user can only enter an email type. Right? I'll add another form.

21:28 - element which is what is your phone number?

21:35 - Right? And this time it should be a checkbox, email, ID, number, password, number. Now, your form is ready. We have not added any authentication on top of this, right? We have not, our authentication type is none. I can just go ahead and then on top of that, I will try to.

21:58 - Click and execute step.

22:01 - When I click and execute step, this form will come in front of you.

22:04 - And I can fill this detail saying, let's say, my name is Aron, my email ID is Arun at the rate,

22:10 - misfittech.com. See, until I type dot com, it was saying because you have selected the field type as

22:18 - email, it has automatic validations and checks that it validates.

22:24 - Similarly look at this, right? Because email IDs, if I try to enter,

22:28 - some text. It's not even allowing me. I'm trying to type, but it's not allowing me. If I add a number, right, then it is allowing me to enter. So my number is 9.1, 2, 3, 4, 5, 6, 7, 8, 9. So this, this is my number. And when I click on summit, if you see your test response should come here. If you look at this, now, if I close this, if you see the output is there, right? Output shows green. That

22:58 - your form ran successfully and it kind of gave you the output that you filled. It also gave you submitted

23:04 - and and the test mode is, the form mode is test here. If you see a green checkbox, that means your

23:12 - node executed successfully and on that execution, it gave you that output. You can see the output in two

23:20 - ways in any 10. You can either click an individual node, right? And you can see that output here. Or you can see the output.

23:28 - in the output panel below, which is here at the bottom. You can see the output here. Every output can be seen in three types. You can either see the output as a, I'll just show you in this. This is a better view. You can either see this as a flat schema with individual fields. What was your name? This was filled. You can either see this is a table. When you have multiple rows of entry, this kind of the better view of looking at this is

23:57 - a table format or you can look at JSON. Jason, as I said, is one of the formats that you should probably get

24:06 - most familiar with because it really helps you understand how it is written. It's a very simple format which

24:11 - is embedded with starting with brackets and then listed or within it the queries are given with

24:19 - curly brackets. So if you see the JSON, this is how it will look like. Three forms of output, schema,

24:24 - table and JSON. So if just to revise what we have done, we clicked on this, we searched on

24:32 - the form, innate and form we selected as a node. Once it came up, we kind of selected authentication type

24:38 - as none, right? And then we looked at the form title, sample form name, form description, and then

24:46 - the label, what is your email ID, what is your phone number, right? And then the form is submitted.

24:52 - So that is what is done so far. We can also, now what we will do is once this form is submitted, we would want this to go and get added to a Google sheet. We can do that. But I think understanding the concepts or the differences between DFI make and form node. I'll just add in the nodes as well. So we have looked at the form node, right?

25:20 - So let's take a pause here. You can get it's heavy. Try to do this. Drink some water and take a break and then we can resume from here. So yeah, let's start the timer. We'll take a break.

25:50 - Thank you.

26:20 - Thank you.

26:50 - Thank you.

27:20 - Thank you.

27:50 - Thank you.

28:20 - Thank you.

28:50 - Thank you.

29:20 - Thank you.

29:50 - Thank you.

30:20 - Okay.

30:27 - Okay.

30:28 - I think we are back.

30:29 - Can you can you confirm?

30:50 - Good. So we have looked at the form node, right? On top of this, now we will try to look at some other workflow.

30:58 - Now we will try to look at some other workflow pieces that are there. If you look at four

31:06 - buttons which are here in front of your screen, right? There is this tidy up. Tidy up. Let me just add

31:18 - within your workflow. There are of course zoom in and zoom out buttons. There is

31:31 - tidy up. Let's let me show you that one by one. So when I say zoom in, you can see this zoom out and

31:42 - zoom in. It kind of gets into your workflow flow. And you have your workflow. And you have your

31:48 - fit, zoom to fit on my screen, whatever is the workflow, it should fit to my screen.

31:53 - Tidy up is if it's convoluted and if you have created a workflow that is not looking very clean,

31:59 - it can tidy that up. Once we create a multi-component workflow, we will show you how tidy up also works.

32:07 - Second piece that we wanted to show you is this executions, right? If you see executions, it shows you

32:14 - shows you the date and when it really ran and whether it was successful or not.

32:18 - Right. And I will also now go ahead and kind of attach another note to this. But first, let's go ahead and look at credentialss. So when I go to my workflows, I can click on credentials. I'll try to create a new credential. Let's see how a credential works. Let me just add an item here.

32:39 - Credentials. I will come back and show you also the different type of trigger, schedule, event-based trigger. But let's look at credential first. Right.

32:48 - I go to create credential. In create credential, I can select any type of credential that I want to add.

32:56 - Let's say I want to add Google Sheets. I can add a Google Sheets credential, a Google Sheets trigger, right?

33:04 - Or I can add a Gmail trick one. So let me add Gmail path to API. Right. I'll just select this.

33:14 - Click on Continue. It will ask me sign in with Google. Once you sign in with Google,

33:18 - It will allow you to set up your credential. Let's just click on sign up with Google.

33:23 - It will take me to the account. Let me use my account. And once you have logged in, it will say,

33:29 - do you want to give all these permissions? You can give all these permissions and click on continue.

33:35 - It can read, compose, send, all those messages are given and you can say Arun Misfit credentials.

33:44 - Always remember to rename your credentials. Otherwise, you can get logged.

33:48 - and these credentials are handy or are very useful when you actually run your workflow

33:57 - because you might be wanting to run it on one set of Google Sheet or you might be wanting to run this

34:02 - on a particular set of Gmail. You might have multiple accounts. You can get lost and you can get

34:10 - confused. So on this top you will see a default number. The good practice is always always

34:18 - rename your credentials and workflows. If you don't rename them, then your workflow

34:32 - can get confusing. Now let's, before closing, I think, see, it did not save because I did

34:39 - not save it. So I'll just double click on this. Go back and again.

34:48 - Arun Misfit Credential, Gmail.

34:58 - Let me switch account.

35:02 - Go back and select this one.

35:06 - Continue.

35:07 - It has already the access.

35:09 - Now it is saved, right?

35:11 - Arun Misfit credential, Gmail.

35:13 - Okay.

35:14 - So this is what I have saved.

35:16 - Let's go back to our workflow workflow.

35:17 - to our workflow again showing you you can create your workflow from here as well. You

35:22 - can create an agent, you can create a data table. Let's go ahead and go to our workflow. Within

35:27 - the workflow, we have form to Google Sheet Workflow. Let's actually rename this. We'll go form

35:34 - to email to Google Sheet Workflow. So when a form is submitted, I want an email to the students

35:42 - who has reached out to me. So I will now when you want to

35:47 - add your second node. You can either, let's just move this to the left, you can either

35:55 - click on this plus to attach the next node or you can click on this plus to figure out your next node.

36:02 - Let's see the difference between the two. If you select here and if you say Gmail, right,

36:07 - and in Gmail you will see there are all these actions that are available. Similarly, when you have

36:12 - WhatsApp or if you have Slack, let's also look at Slack, right? If I say Slack,

36:16 - on Slack, you will have all these actions. Close a channel, create a channel, get a channel,

36:22 - open a channel, send the topic of a channel, get file, message, all these actions. So you have

36:27 - to be very clear which node you want to use. And we will build advanced workflows and we'll show you

36:33 - as we go along here, right? That you can make the wrong choice and then it can kind of ruin your

36:40 - entire workflow. So if I go back to Gmail, I'll show one more time. So you click on plus and you

36:46 - search Gmail, right? So on your Gmail, you can click on this and you can delete a message.

36:53 - We don't want to delete a message. We want to send a message. So you can just select send a message

36:57 - node. It will have, it will ask you for all these fields to be filled out. Right. But before that,

37:06 - let me show you something. If I close this and come out of it, it is directly attached to the form

37:12 - when it is submitted. I can delete this link. Now these. These.

37:16 - who are independent. They are not connected. So if I try to execute the workflow, the form will fill,

37:22 - let's say Arun, Arun at numismith.com and 1, 2, 3, 4. I just click on submit. It executed but the mail

37:34 - did not get sent. And if you hover over this, to subject and message, these parameters are missing.

37:40 - It says there are two, who do you want to send it to? Subject and message are mandatory notes.

37:46 - that are not filled out. So you want to set them up. For your workflow to execute sequentially,

37:54 - these two nodes have to be connected. And how do we connect them? When you click on plus and you

37:59 - search, it was automatically connected or you can drag and drop this air. If I have it something like this,

38:06 - right? If it's not tidy. Now I'll show you what the tidy up workflow does. You can just tidy up

38:12 - and it will make it linear. It will make it clean for you. Right. So,

38:16 - Once this is set, any node that is not able to run will either show a red triangle or an orange triangle.

38:23 - And that that should tell you that this node is having something missing. Now what do I want? I want. I want to send a message, let's say to my email ID.

38:34 - Arun Nandeval at the redgmail.com.

38:37 - What is the subject? This form works. And what is the message?

38:44 - Hello.

38:44 - So this is amazing learning of an Aden. Right? Now let's try to, you can either execute the workflow from here or you can go out and execute it. If you want to run one particular node, you can execute it by opening it. When to open it, what we have done, we have just double clicked it and you can click on execute. It will run from here. Or if you want to run the entire workflow, your execute button is also here. You can click on this and you can run from here.

39:14 - We have already ran it from here. So let me run it from here. This again, because it's a linear workflow and the first node is attached to it, it will ask you to execute the previous form node once because it has no data. It has. In fact, the data of Arun, Arun Misfit 1, 2, 3, 4. Let's execute this step. It has this data. It has already sent out an email. Let me go ahead and check my email ID if I really got this or not.

39:44 - This is my email.

39:48 - Okay. So it says this form works, right? Hello, this is amazing learning of N8N.

39:55 - But this message has something called as this email was sent automatically with N8N.

40:00 - I don't want this. I don't want this annotation because this is kind of useless for me.

40:06 - So what I'll go and do is you go to your workflow.

40:10 - In the options of your node, I'll show it where it is. You double-click.

40:13 - is you double click on your Gmail node, right? In the options, add options, you can select

40:19 - this and you can say append N8N attribution. This is called N8N attribution where N8N is attributing

40:25 - itself as the source of message sender. You can select this and you can disable this. Once you

40:31 - disable this, append N8N attribution, it will kind of go and now if you execute this, now if I just

40:39 - execute this. You see, it's sent message again. This earlier message was showing like

40:46 - this. Let's go and look at the latest message. It's gone now. This is, hello, this is amazing

40:51 - learning of N8N. Right? So this is a simple form. It's these two nodes are running independently.

40:59 - What if I want to send the email out to the student who send the or fill the form with their

41:08 - phone number, right? So on this form, let me not change anything. In fact, what I'll do is

41:20 - I will execute the full workflow. When I execute the full workflow, let's say my name is Arun and my

41:29 - email ID is Arun at the rate misfit tech at the rate.com and my phone number

41:38 - is 1, 2, 3, 4. Arun, submit. You see, it is running the entire workflow, but the mail is going

41:52 - to a fixed value. It is not dynamic. I want it to be dynamic. How do you make it dynamic?

42:00 - Delete this text and delete the drag and drop the value from this. What is your email ID? This is my email ID. I will

42:08 - go ahead and include it here. So what is your email? I'll just show it again.

42:16 - JSON. Email, what is it? It's a dynamic value. This is how the credential, the value, your entire

42:23 - workflow data nodes are stored in N8N in JSON file. But earlier, these are fixed values.

42:29 - This form works. Hello, this is amazing learning of N8N. I want to make it dynamic. I will click on the inputs. You can see all your

42:38 - variables here, right? You can click on input. What is your email ID? You can just drag

42:45 - it and keep it here. And if it is showing in green, that means your drag and drop has worked

42:51 - out well. If it is showing in red, that means there is an error and you need to fix it.

42:58 - Now let's see if it really works or not. I will also make the subject dynamic. This form works for,

43:04 - let me drag my name here. So it should send me my name also. This one.

43:08 - form works for. You'll see here. Jason, what is your name gets dropped there and it will show you a sample

43:13 - value around. And let's say hello, this is amazing learning of N8N. Your phone number is

43:22 - and you will see and you will kind of learn this as we go along as we build more complex nodes or

43:30 - workflows, right? It is an expression or a fixed value that you can see here. It is an expression or a fixed value that you can see here.

43:38 - If you click on expression, it will open this small pop-up here, which you can expand.

43:44 - Again, showing it here. Fixed is, this is a fixed text. You can just keep typing and it will only go horizontally.

43:50 - But if you make it as an expression, it will open it in a larger window.

43:54 - There is this expand button, showing it again, make it expression, expand button. It will show you the entire text.

44:03 - This makes it easier to edit. So you can say, hello, this is amazing learning of N8N.

44:08 - your name is, I can capture that name, what is your name?

44:15 - Right?

44:16 - Your email ID is this.

44:25 - Your phone number is.

44:38 - We will soon get back to you. Let's close this. So it says, hello, this is amazing

44:50 - learning of N8N, your name is this, your email ID is this, your phone number is this, and we will soon

44:54 - get back to you. Now let's try to run this. Let me fill this, execute this again. This time

45:03 - I'll give my name as Rahul Sharma. I'll give my same email ID just to change. I'll give my same email

45:07 - ID just to check if the email gets sent to that same email ID or not. Arun Nandewal at the

45:13 - at the rate, gmail.com. And what is your phone number? Let's say 3344-4566 and 7. Let's click on

45:22 - submit. Let's see what is the, did the workflow execute or not? Yes, the workflow ran successfully. How can

45:30 - you see the data? You can see the data by this. What is your name, Rahul Sharma, that got accomplished.

45:35 - and in the send a message also, everything looks green. So let's see what email was actually

45:41 - sent out. Let's close these nodes. Let's see. Okay. So this form works for Rahul Sharma. This is your

45:52 - email ID. This is your phone number 3344-55-6677. And we will soon get back to you. Now we know

46:00 - that it is working fine. It is dynamic. It has the data attributes. How did we get the data attributes?

46:05 - For every field that you want to drag, you can just drag it from here and keep it there.

46:09 - Let's actually update this in the sheet as well. Right? I have this order sheet status. I'll probably

46:19 - create capture email. Right? Let me just delete this. What are we capturing? Name and phone number.

46:35 - Right. The name of my sheet is order status email loops. We will run another

46:42 - workflow. We'll build a more convoluted workflow when we learn loop and if node and switch node.

46:49 - But for now, I will just use this sheet capture email, right? And update it as and when the form

46:55 - get filled. So after this mail is sent, I want to add a row. So I will just click on plus.

47:05 - I'll say Google Sheets, right? You can see append a row in the sheet, right? Or an update row. I want to append a row.

47:18 - When I say append a row, it will sell me okay. Select your credential. So this is the credential that I've given for Google Sheets.

47:27 - In the email also, you have to select your credential, which credential you want to send. So I have two credentials here. You can select from drop down.

47:35 - On the Google sheet, I have selected this credential. And I want a sheet within a document. I don't want the entire document. I want to focus on a sheet within a document. Now look at the magic. All your sheets which are there in your drive will start showing here. You just need to search your order status. The name of your sheet, whatever it is, order status email loop. So order status email loop shows up. Once you select that, all your sheet name name.

48:05 - Your sheet name three, there are three sheets will also show here. You can select which sheet do you want. I want the capture email sheet. It will say I will map each column manually. For one row of entry, you will always have one row only captured. You know, you cannot say that because I entered three fields, I want three rows. It's one entry that you have given. And those one entry should get stored one time only.

48:35 - Right. So it says I have three fields, name, email, ID and phone number. And these are the exact column headers that you give on your sheet. Right. Let's just get the names. Where will the names come from? The names will come from when you're filling the form out. So what is your name? Rahul Sharma gets dragged and dropped into the name field. I'll show one more time. What is your name? It gets dropped here. Right. I'll show one more time. What is your name? What is you?

49:05 - your name gets dropped here, right? Then what is your email ID gets dropped here? What is your email

49:13 - ID? And what is your phone number gets dropped to the phone number? Let's try to execute this step.

49:24 - So it says output done. Again, you can see it in the three formats. Let's see if it actually got saved or not.

49:31 - So it got saved. Rahul Sharma, email ID and phone number.

49:35 - Now let's try to execute the workflow into it. So I'm executing the form gets opened. My name is Rohini Gupta. My email ID that I have to send is again. I have to give the same email ID. Otherwise, we'll not be able to see if the mail is going or not. And this time my phone number is 9999888-2. Let's submit. So now if you go and see your all the three ran and while it was running, it kind of was

50:04 - hovering over it. So let's see the email. Your email, Rohini Gupta got captured,

50:12 - your number got captured and your Google sheet also got updated. On top of this, if you want to see all

50:21 - your executions and if you want to validate if these executions ran successfully or not, you can click on

50:26 - executions. It will show you with the dates whether they completed successfully or not. And if any, if any,

50:34 - anything fails, you can click on that particular node and validate where it failed. So that is

50:40 - at a starting glance, how you set up a workflow. The basic nodes that we have looked at is

50:47 - a form node, a Gmail node and sending or updating a row in the sheet node, right? And I hope you are with me

50:56 - so far and you are able to create this yourself as well. We will now probably take a quick pause to

51:03 - check how much you have understood this and we'll have a quick quiz for you and then we will

51:09 - resume from here, right? Go ahead and complete the quiz and then we can move forward.

51:33 - Thank you.

52:03 - Thank you.

52:33 - Thank you.

53:03 - Thank you.

53:33 - Thank you.

54:03 - Thank you.

54:33 - Thank you.

55:03 - Thank you.

55:33 - Thank you.

56:03 - Thank you.

0:00 - Okay. Let's keep going. Let me talk you through the different type of triggers that we have spoken of. We have looked at the form trigger. Let's go ahead and quickly look at some of the other forms. Now what we'll do is we'll go ahead into personal. We'll create a new workflow. You can click on this and create a new workflow.

0:30 - call this triggers, right? So the first trigger that we are going to talk about is chat trigger. When you

0:43 - make chat publicly available, it can be accessed by anyone. And you can share that link so that anyone of your

0:55 - friend, family can go ahead and chat on your behalf, right?

1:00 - You can directly double click on this and you can click on open chat or you can see a button here which says open chat.

1:12 - Once you kind of type a message here, let's say hello world, right? My name is Arun. The workflow gets triggered. After this you might have an email node, you might have a

1:29 - Slack, whenever your user chats with you, what is the workflow that you want

1:37 - to execute? I might have here a Google Sheets node, I might have here a WhatsApp node. That

1:44 - depends on your use case and your workflow. That's your first, in fact, your second type of trigger

1:52 - node that we wanted to discuss. We have already looked at the form node. Another trigger node that I want to

1:57 - show you all is a manual trigger. In fact, we'll come to this at the last because

2:05 - this is what we are going to use for the workflow that we are going to build now. The third trigger after

2:12 - the form trigger and your chat trigger that I want to show you is scheduled trigger, right?

2:19 - So if you click on this, you will see there is a manual trigger on any app event when it is

2:26 - listening, let's say, to your website and we'll build this as we go along. If there is

2:32 - any app event that is happening on Telegram, on Notion, on A table, once you have to listen that,

2:37 - let's say your ATABLE database, that is also a workflow that will learn to build. Once that gets updated,

2:44 - if you want to listen to that, you can pull that in. If you have a website where you are listening to a

2:50 - URL endpoint, right, you can use an on webhook call. This is.

2:56 - If I just select this, it will give you an option of get request, put request, post, and all of this.

3:03 - We will build this as you go along, but because this is introduction, you can see a trigger can also be let me add the fifth type of trigger here,

3:12 - which is your webhook trigger, which listens to a public URL, right?

3:21 - this is your next trigger, right? I can delete this as well. If you think about it,

3:32 - we can also have another form of trigger, which is what I wanted to talk as the fourth one,

3:37 - which is your schedule trigger. On a particular schedule, let's say you want to trigger it daily.

3:42 - You can say trigger interval is daily or if you want to trigger it every hour and at which minute

3:47 - of every hour, let's say at the 15th minute of every hour, they should get automatically triggered.

3:51 - Right. Then you can use this as your trigger. I can set this up as a daily trigger which runs in an interval of between how many days, every third day, every fourth day. Let's say I want to run it every day every day. So my days in between is one and I want to run it at midnight or I want to run it at, let's say, 8 a.m in the morning. So I can select 8 a.m and 15th minute is when I want to run this.

4:18 - So once you have selected the schedule trigger, it will only work if you publish your workflow.

4:27 - And that is where I want to introduce you to this button called publish.

4:30 - Once you click on publish, it will give you a version. Let's say added the or the version is,

4:38 - I can give it a name like Schedule trigger version.

4:45 - Right.

4:46 - And you can.

4:48 - And then go ahead and probably just give a description, added a schedule rigors.

4:55 - And once you click on publish, it will start, workflow is published.

5:00 - Click on Got It will ask you some checklist of production go live.

5:04 - Do you want to enable MCP access? Do you want to track time saved by running this workflow?

5:08 - Do you want to set up these error notification?

5:11 - We will configure each of these and we will get to it when we build our real end-to-end workflows.

5:17 - and we make it live because we are just getting started.

5:21 - You can skip this entire list for now and you can close this.

5:24 - If your workflow is published and this is something that we had seen in the make configuration as well,

5:30 - it will start showing as green.

5:32 - As soon as you make any change to this workflow, right, it will again turn yellow and it will ask you to publish again.

5:40 - So because we are using this schedule trigger, I will in fact show it one more time where you can

5:47 - select where do you want to run it on days, minutes, hours.

5:50 - If you want to run it in month, which day of the month, right?

5:54 - And on which day trigger and at what time and what minute of that day in the month, right?

6:01 - I'll just delete this.

6:02 - Let's just delete it.

6:03 - And you see it became yellow.

6:04 - So it's asking you to publish again.

6:06 - It says there is no node at this point of time.

6:09 - So you don't need to run your workflow again.

6:13 - But if there is a change and if there is a node, you can publish it again.

6:17 - Let's try to do that.

6:18 - So we have looked at four type of triggers so far.

6:20 - We have looked at an setup of an initial, very simple form-based trigger where we were filling a form out.

6:27 - Then we looked at the chat-based trigger.

6:30 - Then we also looked at a webhook-based trigger.

6:33 - We looked at the scheduled trigger.

6:35 - And now I will run the simplest one, which gives you the maximum control.

6:38 - It's called a manual trigger.

6:39 - So you can just click on this and it will manually trigger your entire workflow.

6:43 - There is no configuration or any parameters in the best.

6:47 - manual trigger workflow. What you need to do here is you just click on this and it will

6:51 - kind of run your entire workflow, right? So what am I saying? I'll click on this. We'll use the same

6:58 - example. We have this sheet where it is, let's say, order status email. And I have some of the people

7:05 - who have their order status as pending, right? So my order status is pending. I want to send them

7:13 - all an email out. Right. Now, it can go.

7:17 - Go ahead and send this email to these email IDs that I have here. Rather than sending it to

7:23 - them and randomizing this, please be very careful when you are running your workflows and when you

7:28 - are testing them out specially, you use your own email ID and when you use your own WhatsApp or you use

7:34 - your own telegram number and you don't end up randomizing the people. So I will in fact go ahead and give

7:39 - my email ID itself here in all the sections so that the email gets sent to me itself.

7:47 - If you see all the four email ID are mine, which are in pending status, the rest of them are sent, right?

7:53 - So I will execute this workflow. What I want to do is I want to get the sheets from this row.

8:00 - So I'll just click on the plus. I will search on, let's say, Google Sheets. On Google Sheets, what do we want to do?

8:10 - Take a pause and think about it. What do you think we should do? You can create a spreadsheet? No. Do you want to clear the spreadsheet? No.

8:17 - What do we really want to do? We want to get the rows from the sheet. So you select this

8:22 - get rows from the sheet, right? In the get rows, again, you first select which drive or which sheet

8:28 - are credentials have you given. This is the email ID that I have given credential. We will select the sheet

8:34 - within a document because this has three sheets. We want to look at this copy of raw order status,

8:41 - not the raw order status. This has random email addresses. I'll just, in fact, delete this so that

8:47 - it does not cause confusion. I will use the copy of raw order status. So I'll go back here.

8:53 - I will select sheet within a document. I want to run get rows. And again, you can modify add row,

9:00 - append row, delete row from here operation itself. So you select get rows. I'll select the sheet name,

9:09 - order status email loop. And what is the sheet name? Copy of raw order status loop.

9:17 - It also gives you filters. If you want to apply any specific conditions on which it should

9:22 - pull the data, right? Let's try to first execute and then I'll show you this. So you can either

9:28 - execute it from here, but as I said, the ideal way is you use this execute button so that your

9:34 - entire workflow runs only and not only just one part of it. So when I click on execute workflow,

9:38 - it says this one ran. Now this is running and it is getting the rows and it got 32 items.

9:44 - Why 32 items? Let's go and check it.

9:47 - this. So it in fact has 32 items. First row is excluded. The header column is excluded.

9:53 - Let me do one thing. Let me add a filter condition to this. What is the filter condition?

9:59 - I want column. What is the column? Email status, right? I want email status to be what is the value

10:08 - pending? Only get me those rows where the email status is pending. You have to, this is called your

10:15 - column or data attribute mapping where you are saying this column name value should

10:22 - match to this value pending. Let's try to hit this. Again, let's click on execute step. And this

10:30 - time it only gave me four items. So when you get the rows, one way of doing this is you can

10:37 - directly apply a filter condition on the get rows itself. That's one way of doing it. Let me introduce

10:45 - you to one more basic node, which is the if node in this case. Rather than applying

10:50 - it here, I will delete it. I'll click on execute step so that it gets all the 32 rows.

10:57 - If you see here, it has gotten 32 items, right? So what I do now is on top of this, you can

11:08 - select a plus and you can add the if node. There are two different types.

11:15 - those who are from engineering background might know if and switch. If you have multiple

11:20 - conditions, right? You can use the switch node. If you have one condition on one particular column,

11:28 - you can use the if node. So if I select the if node and I say, again, you have to drag and drop

11:35 - and this is called your data attribute mapping. I say email status is pending. What is the value

11:43 - is pending. In this if node itself, you can see there are different type of conditions

11:49 - and checks that you can apply. You can have string check which says does this part of string

11:54 - exist or not? Does it, is the string empty or not? Does it, is the string empty or not? Does it

12:01 - not contain this text? Similarly, for numbers you can check greater than equal to less than.

12:07 - For date and time, you can say on or after before or after. Boolean also you can check. So

12:13 - the if node is a very, very powerful node in your N8N workflow which can in fact go and tell you

12:18 - what are all the conditions that you want to apply. Now if I go ahead and do this and I click on

12:24 - execute, you'll see the true will have 4 and the false will have 28. What exactly happens? It is picking

12:33 - these 4 as true nodes and the rest of 28 are going to the false because only 4 are there which have

12:41 - condition as email status pending. And this is the power of if note. Now, if you have

12:50 - multiple conditions, you don't want to have just a normal condition. You want to have multiple

12:55 - conditions. Let's say I have order status as placed, preparation in progress, packed and delivered.

13:03 - Right? I think these are only four. Yeah. And I want to split all these data items by these statuses.

13:11 - I would rather than using an if node. I can also use what is called as a switch node.

13:17 - I can just click on this plus and I can use the switch node. Right. Click on switch. In switch.

13:26 - You can see there are multiple routing rules that you can apply. What is the order status?

13:32 - If I select this value. If it is placed, this is the first route.

13:41 - you can add another routing rule on the same column. If you have to apply only one condition and there are multiple and or or on that, you can use the if node. If you want to apply multiple conditions, it's not just one condition, it's not just and or, multiple values in the same column. Then you can use the switch node. I'll just show this one more time. You can click on add routing rules. And in this, I will just drag this status. And this time I'll say not

14:10 - not placed but delivered. I can add another routing rule. Order status I'll drag here. What is another value? Packed. And another routing rule, which says, I'll just read it once so that I get it right.

14:40 - So this is preparation in progress.

14:44 - Please do not mix columns in this case.

14:48 - If you end up mixing your columns, what I mean by that is in one routing rule you are applying name and the other routing rule you are applying name and other routing rule you are applying, let's say, an email status.

14:58 - Then it will not work.

15:00 - This is for the same column, same field, but having different values.

15:04 - So be very careful in applying this.

15:06 - Once I have done this, I will click on execute step.

15:10 - And if you see output 0 has 8 items, output 1 has 8 items, output 2 has 8 items, output 2 has 8 items, and output 3 has 8 items.

15:21 - If I go and see this, all these have 0, 1, 2, 3.

15:26 - The default naming convention of the switch node is, it will use 0 1, 2, 3.

15:31 - As many routes as you add, it will just add 0, 1, 2, 3 names and take it from there.

15:36 - If I don't want this default naming convention, this is not clear and this is not obvious to any layman user, right?

15:44 - I want it to be more self-explanatory.

15:49 - So I will go ahead and I will rename the output.

15:53 - There is this toggle that you can see, which is renamed the output.

15:56 - Just rename the output to whatever you want.

15:58 - Placed.

15:59 - This one also renamed the output delivered.

16:03 - Renamed the output to packed.

16:06 - And rename the output to preparation in progress.

16:11 - Now let's execute.

16:13 - Now it will say placed, delivered, packed and preparation, four items each.

16:18 - Right.

16:19 - So that is the second node, which is very powerful in splitting your data and kind of making sense of that.

16:26 - Now people who have already gotten to the delivery, you can send them a custom email or you can send them an update sheet response.

16:36 - and you can do all those variations, right?

16:40 - Now I would delete this.

16:44 - I'm hoping your if node and switch nodes are clear.

16:47 - Let's try to actually update this sheet back.

16:52 - For you to read a Google sheet and multiple entries,

16:56 - I'm going to explain you the most powerful or probably the most impactful node that is out there.

17:03 - And it's called the.

17:06 - Google Sheets, loop or generally loop node in N8N.

17:14 - What is a loop node?

17:15 - If you just click on plus and search a loop node, right?

17:19 - It says loops over items and splits it in individual batches.

17:25 - So if I, and you can define your path size.

17:28 - Do you want to run two rows at a time?

17:30 - Do you want to run one row at a time?

17:31 - Let's say I want to run one row at a time because that is how we want to run the loop.

17:35 - Right?

17:36 - It will show something like this.

17:39 - It will say a replace me is there.

17:42 - What do you want to loop on?

17:44 - I want to get this data.

17:46 - I want to run this on the loop.

17:49 - And every time the loop runs,

17:54 - right?

17:54 - I want to run these 32 items.

17:57 - And on this loop, what I want to do,

18:00 - I want to, let's say,

18:05 - update this column with the

18:06 - row number.

18:08 - Reading column is there.

18:09 - I want to update which all rows are red.

18:13 - Right?

18:13 - So what can I do?

18:15 - I'll just say, okay.

18:17 - Read this and on this I will select a plus and let's say a Google sheet.

18:28 - In Google Sheet, what do I want to do?

18:30 - I want to update a row.

18:31 - So append or update a row in the sheet.

18:34 - Now this is very important.

18:36 - very carefully. What do I want to do? The same sheet, which is loop, the same sheet,

18:43 - the same sheet, raw status. I want to update the row. And it says which is the column that

18:50 - you want to match on? I want to match the column on. I want to match the column on. I want

18:55 - to, which column do I want to match on? Reading. This is the column that I want to match on,

19:00 - right? And I want to update.

19:06 - Or we can also, what is the unique value?

19:10 - Order ID is also unique.

19:12 - So we can match on order ID as well.

19:14 - Let's try to do that.

19:16 - I will match on order ID.

19:20 - And what do I want to update?

19:22 - I want to update the reading column.

19:26 - What do I do?

19:29 - Order ID. Order ID, which order ID should match, which is coming from the get row sheet.

19:43 - Individual row I want to update. So I will update this. I want to match on order ID.

19:49 - Always remember whichever column you are matching on, that has to be dragged from here and it has to be unique.

19:57 - Otherwise it can get confused.

19:58 - If I'm having all the same values, like 5th October multiple values, it will get confused which exact row I need to update.

20:05 - And which column do I need to update? I need to update the column as reading.

20:09 - So let me add the row number here.

20:12 - Which row is it read?

20:14 - Right?

20:15 - And I'll close this.

20:17 - Now I'll just do it one more time so that you can all see it.

20:21 - What did we do?

20:22 - We added a loop first on the loop.

20:27 - one row at a time.

20:31 - And once I added the loop, it said, okay, what do you want to do?

20:34 - You have to replace me.

20:35 - I want to update the Google sheet.

20:41 - So Google sheet, update or append a row.

20:44 - In this, I selected the same sheet.

20:47 - And I selected the sheet number.

20:51 - What column do I want to match on?

20:53 - I want to match on order ID.

20:56 - Where do I get the order ID?

20:57 - from the input get rows in the sheet.

21:00 - So let's say I get this order ID here.

21:02 - And what do I want to update?

21:04 - I want to update the reading column to this reading status.

21:09 - Or I want to actually add the row number here.

21:12 - So I will drag the row number here.

21:14 - Now let's see what is happening.

21:16 - So your loop will start.

21:18 - It will read all the rows.

21:20 - One at a time it will go through the loop and continuously update them.

21:24 - Let's execute this and see how it looks or how it works.

21:27 - So it started. It got 32 rows. First item went. First item updated.

21:33 - Number two item went. Second item updated. Third, fourth. And let's see what's happening in our sheet.

21:39 - So you see two, three, four, five, six, seven, eight. And that's why I said it's the most powerful and the most interesting node that you should be knowing about.

21:51 - Right. It will keep executing and think the amount of time that it saves for you.

21:57 - If you go back here, so your workflow is executing. At any point of time, if you want to stop updating your workflow, right? You have this stop button here. You can just click on that and your execution will stop running. You can just say stop the current execution.

22:16 - Right. Once the current execution stops, right? You let's add a more

22:27 - more refined way of doing this. I just don't want to update the Google Sheet.

22:36 - What I want to do is I want to send an email to people who have not received the email and then update the email status.

22:43 - I am hoping the workflow is clear. Let me just write the name.

22:47 - Read sheet, update or send, send email and on the send email, and on the send email, update email.

22:57 - the status.

23:01 - Right? This is what I want to do.

23:03 - So if the email is not already sent, right? I want to send that email and I want to update the sheet back.

23:13 - Now right now, we are getting all the rows. I don't want all the rows. I just want those rows which email is not already sent.

23:22 - So what I'll do, I'll go to my get rows. I'll add a filter condition here saying

23:27 - If the email status is pending, right? What do I need to do? Go over the loop each item. Send an email. Let me select a Gmail node. And I want to send a message. Who do I want to send a message to? Let's execute the previous note so that you get the data.

23:49 - Right? So it's saying you can get email address from here. You can draw.

23:57 - and drop this email address. What is the subject? Let's say order status is whatever is your order

24:05 - status. It's placed. And we can say, hey there. Your go to expression, expand it. Hey there. Hey there.

24:27 - and is in the status, which is your, let's say, status is placed here. I'll just show you what happens if your, if your JSON is not correct. It will show red like this. Right. So your order of is in the status, just place the status. And we'll say, thank you for ordering with us.

24:57 - So this is the email that I want to send. And now once this email is sent, I've added the two. I've added the subject and I've added the message. Once I have this email is sent. I want to update the row to email status as I don't want the reading column to be updated. What I want to update is new email sent.

25:25 - This is what I want to update it, this column too. Now let's run the workflow. So let me execute this. There are four rows. Item one went. Item two went. Let's see the status. Pending set will automatically get changed to new email sent. New email is done four times. And let's go and check our email also. It said workflow executed successfully. Let's see if we actually got the email.

25:51 - So yeah, it got the four emails, placed preparation in progress.

25:55 - progress and your names and your order statuses are also captured in this.

26:00 - And you can remove your innate and attributions if you would like to from here.

26:05 - So that is where we'll take a pause. We'll quickly assess your readiness with a quiz.

26:10 - And then we will move ahead. You have built an end-to-head workflow. If you just tidy this up,

26:17 - it will then make it look a more cleaner workflow. Right. So you can click on this tidy button. And if you want to add

26:25 - sticky notes. You can just click on, right click on this. And you can say, I want to add

26:31 - node the chat. That's not. I think that's not the right one. Sorry about that. We go back.

26:41 - Yeah. So you can just add here, I think, yeah, you can just right click and say add a sticky node,

26:47 - which says, my first and attend workflow workflow is ready.

26:55 - just save it and keep it here. That's your sticking on. So let's quickly take a quiz

27:01 - and understand how much you have understood so far. And then we'll move on from here.

27:25 - Thank you.

27:55 - Thank you.

28:25 - Thank you.

28:55 - Thank you.

29:25 - Thank you.

29:55 - Thank you.

30:25 - Thank you.

30:55 - Thank you.

31:25 - Thank you.

31:55 - Thank you.