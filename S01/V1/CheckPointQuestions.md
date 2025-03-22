#### **Scene 1**

1. **Which of the following is NOT a layer in a 3-tier architecture?**  
   a) Presentation Layer  
   b) Business Logic Layer  
   c) Database Layer  
   d) Operating System Layer

   **Answer:** d) Operating System Layer

2. **What is the primary purpose of the Business Logic Layer in a 3-tier architecture?**  
   a) To store and manage data  
   b) To process user inputs and apply business rules  
   c) To display information to users  
   d) To manage network connections

   **Answer:** b) To process user inputs and apply business rules

3. **Which layer in a 3-tier architecture interacts directly with the end user?**  
   a) Presentation Layer  
   b) Business Logic Layer  
   c) Database Layer  
   d) Network Layer

   **Answer:** a) Presentation Layer

4. **Which of the following statements about 3-tier architecture is TRUE?**  
   a) It improves application scalability and security.  
   b) It reduces the need for middleware.  
   c) It requires all components to run on the same physical machine.  
   d) It merges the business logic and presentation layers.

   **Answer:** a) It improves application scalability and security.

5. **Which layer in the 3-tier architecture is responsible for storing and retrieving data?**
   A) Presentation Layer
   B) Application Layer
   C) Data Layer ✅
   D) None of the above
   **Answer:** C) Data Layer

---

**Scene 1.1**

1. **Which of the following is an advantage of using a 3-tier architecture?**  
   a) Better separation of concerns  
   b) Increased dependency between layers  
   c) Reduced need for databases  
   d) Direct user access to the database

   **Answer:** a) Better separation of concerns

2. **What happens if the Business Logic Layer fails in a 3-tier architecture?**  
   a) The application continues to work normally  
   b) Users can still interact with the presentation layer but may experience errors  
   c) The database layer takes over the business logic  
   d) The network layer compensates for the failure

   **Answer:** b) Users can still interact with the presentation layer but may experience errors

3. **Which of the following best describes the Client-Server model?**  
   a) A single machine handles both client and server roles simultaneously  
   b) Clients request services, and servers provide responses over a network  
   c) Servers initiate communication, and clients passively receive data  
   d) Clients and servers always operate on the same physical machine

   **Answer:** b) Clients request services, and servers provide responses over a network

---

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

---

**Scene 2.1**

1. **Which of the following best describes the working of the Node.js event loop?**  
   a) It runs continuously and processes pending tasks from the event queue  
   b) It creates a new thread for each incoming request  
   c) It blocks execution while waiting for I/O operations to complete  
   d) It executes only synchronous operations

   **Answer:** a) It runs continuously and processes pending tasks from the event queue

2. **Why is Node.js suitable for handling I/O-heavy applications?**  
   a) It uses a multi-threaded synchronous approach  
   b) It processes requests in parallel using multiple cores  
   c) It uses an asynchronous, non-blocking event-driven architecture  
   d) It waits for each request to complete before handling the next one

   **Answer:** c) It uses an asynchronous, non-blocking event-driven architecture

3. **Which of the following is an example of an asynchronous operation in Node.js?**  
   a) Reading a large file  
   b) Setting a timer using `setTimeout`  
   c) Making an HTTP request
   d) All of the above

   **Answer:** d) All of the above

---

**Scene 3**

1. **What is a module in Node.js?**  
   a) A built-in Node.js package manager  
   b) A reusable block of code that is self-contained  
   c) A type of function used for handling requests  
   d) A variable declaration method in JavaScript

   **Answer:** b) A reusable block of code that is self-contained

2. **What is the purpose of the `require()` function in Node.js?**  
   a) To define a new module  
   b) To import an existing module into a file  
   c) To declare a variable  
   d) To run an external script

   **Answer:** b) To import an existing module into a file

3. **Which of the following is CommonJS (CJS) code?**

   a) `const fs = require('fs');`  
   b) `import fs from 'fs';`  
   c) Both of the above  
   d) None of the above

   **Answer:** a) `const fs = require('fs');`

4. **How do you run a JavaScript file using Node.js?**  
   a) run <fileName>.js  
   b) start <fileName>.js  
   c) execute <fileName>.js  
   d) node <fileName>.js

   **Answer:** d) node <fileName>.js

5. **Which of the following is NOT a built-in module in Node.js?**  
   a) fs  
   b) http  
   c) express  
   d) path

   **Answer:** c) express

---

**Scene 3.1**

1. **Which keyword is used to export a module in CommonJS?**  
   a) `export`  
   b) `exports`  
   c) `module.exports`  
   d) `define`

   **Answer:** c) `module.exports`

2. **What will happen if a required module is not found in Node.js?**  
   a) Node.js will automatically create the module  
   b) An error will be thrown stating "MODULE_NOT_FOUND"  
   c) The program will execute without the module  
   d) Node.js will attempt to install the missing module automatically

   **Answer:** b) An error will be thrown stating "MODULE_NOT_FOUND"

3. **Which of the following statements about Node.js modules is TRUE?**  
   a) A module must always be a single function  
   b) Built-in modules require manual installation  
   c) Modules can be either built-in, third-party, or user-defined  
   d) Node.js does not support modular programming

   **Answer:** c) Modules can be either built-in, third-party, or user-defined
