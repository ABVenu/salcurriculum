#### **Scene 2.1**

1. **Which control runs the whole workflow one time for testing purposes?**  
   a) The Execute workflow button  
   b) The Publish button in the top bar  
   c) The Tidy Up control  
   d) The Zoom to Fit control  

   **Answer:** a) The Execute workflow button  

   **Explanation:** Execute workflow is a manual test run; Publish switches the triggers on.

2. **What starts a workflow running by itself?**  
   a) An action node that sends data to an app  
   b) A parameter on a node  
   c) A data item passed along  
   d) A trigger node waiting for events  

   **Answer:** d) A trigger node waiting for events  

   **Explanation:** A trigger waits for an event and starts the run; actions follow it.

3. **A node's parameter reads {{ $json.Email }}. What kind of value is it exactly?**  
   a) A fixed, typed-in value  
   b) An expression read from data  
   c) A saved credential login  
   d) A trigger for the workflow  

   **Answer:** b) An expression read from data  

   **Explanation:** An expression is looked up from earlier data each time the workflow runs.

4. **A form trigger outputs three items. How many rows does the Append Row node add?**  
   a) Only one row in total  
   b) No rows at all  
   c) Three rows, one per item  
   d) Six rows, two per item  

   **Answer:** c) Three rows, one per item  

   **Explanation:** Most nodes run once per incoming item.

5. **Where exactly does an item's data sit in n8n's internal data structure?**  
   a) Under the key named json  
   b) Under the workflow's title text  
   c) Inside the saved credential login  
   d) Inside the canvas sticky note  

   **Answer:** a) Under the key named json  

   **Explanation:** Each item wraps its fields in a json key.
