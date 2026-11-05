#### **Scene 2.2**

1. **Why does adding a constraint such as “if unsure, say please verify” improve a prompt?**  
   a) It logs into the portal automatically and copies live marks  
   b) It turns the model into software that never makes any error  
   c) It makes every reply legally true with no human checking  
   d) It permits a warning instead of a fluent invented “fact”  

   **Answer:** d) It permits a warning instead of a fluent invented “fact”  

   **Explanation:** Constraints are limits (length, style, content bans, process). Telling the model that silence or a warning is allowed reduces fluent guessing presented as fact. You still check the result.

2. **You paste two short sample emails in the tone you want, then ask for a new email in that same style. Which extra prompting habit is this?**  
   a) Few-shot: a few samples show the style before the new task  
   b) Zero-shot: the task is given with no sample of the desired style  
   c) Retrieval: the model fetches the emails from a locked database  
   d) Recognition: the model matches a face before it writes anything  

   **Answer:** a) Few-shot: a few samples show the style before the new task  

   **Explanation:** Zero-shot gives the task with no example. One-shot shows one sample. Few-shot shows two to five samples of the style you want, then asks for a new item in that style.

3. **A first prompt is only three vague words with no audience, length, or format. What is the most useful next step?**  
   a) Repeat the same three words until the model guesses the hidden goal  
   b) Add the audience, situation, limits, and required output shape  
   c) Paste login secrets so the model can open and fix the file  
   d) Keep the first reply, because fluent text means the job is done  

   **Answer:** b) Add the audience, situation, limits, and required output shape  

   **Explanation:** Revision is part of prompting. A vague request produces a generic dump. Adding Role, Context (including constraints), and Format turns it into a brief the model can aim at.
