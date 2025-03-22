
**Scene 2**

1. **Why is Node.js considered efficient compared to traditional request-response servers?**  
   a) It uses a multi-threaded blocking architecture  
   b) It handles requests synchronously  
   c) It uses an event-driven, non-blocking architecture  
   d) It processes requests only one at a time

   **Answer:** c) It uses an event-driven, non-blocking architecture

2. **How does Node.js handle multiple tasks if it is single-threaded?**  
   a) It spawns multiple threads for each request  
   b) It uses the event loop and delegates tasks to libuv’s thread pool and worker threads  
   c) It processes tasks sequentially in a queue without delegation  
   d) It does not support concurrency

   **Answer:** b) It uses the event loop and delegates tasks to libuv’s thread pool and worker threads

3. **What is the role of the event loop in Node.js?**  
   a) It executes JavaScript synchronously  
   b) It manages and processes asynchronous operations efficiently  
   c) It spawns multiple threads for handling CPU-intensive tasks  
   d) It blocks execution until an I/O operation is completed

   **Answer:** b) It manages and processes asynchronous operations efficiently

4. **What is the nature of Node.js in terms of execution?**

   1. Fully synchronous
   2. Fully asynchronous
   3. Single-threaded but asynchronous ✅
   4. Multi-threaded and synchronous

   **Answer :** c) Single-threaded but asynchronous

5. **Which component of Node.js is responsible for handling asynchronous operations?**

   1. Event Loop
   2. Thread Pool
   3. Global Object
   4. Callback Queue

   **Answer :** a) Event Loop


