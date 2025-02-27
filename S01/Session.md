**A. Event-Driven Architecture in Node.js:**

Imagine you're at a café. You order coffee and wait. Instead of staring at the counter, you do other things (check phone, read). When the coffee is ready, the barista **calls your name** (an event), and you react (pick up the coffee).

In Node.js, **Event-Driven Architecture** works similarly:

1. **Events** happen (like a user request or a file being read).
2. **Listeners** (functions) wait for specific events.
3. When an event occurs, its listener **reacts**.

**Why Node.js?**  
Node.js is built around an **event loop** that efficiently handles multiple tasks without waiting, making it great for real-time apps (chat, games).

---

**Simple Code Example:**

```javascript
// 1. Import the 'events' module
const EventEmitter = require("events");

// 2. Create an event emitter object
const myEmitter = new EventEmitter();

// 3. Define a listener (function) for the 'greet' event
myEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}! 👋`);
});

// 4. Emit the 'greet' event with data ('Alice')
myEmitter.emit("greet", "Alice");

// Another example with a second event
myEmitter.on("coffeeReady", (type) => {
  console.log(`Your ${type} coffee is ready! ☕`);
});

myEmitter.emit("coffeeReady", "espresso");
```

**Output:**

```
Hello, Alice! 👋
Your espresso coffee is ready! ☕
```

---

**Key Parts Explained:**

1. **EventEmitter**: A Node.js class to create objects that emit events.
2. **.on(eventName, listener)**: Attaches a listener (function) to an event.
3. **.emit(eventName, data)**: Triggers the event, causing all attached listeners to run.

---

**Real-World Use Cases:**

- Handling HTTP requests in a server.
- Reacting to a user clicking a button in a web app.
- Processing data when a file finishes uploading.

**Why It’s Powerful:**  
Node.js doesn’t block other tasks while waiting for events. It can handle many operations at once, like serving 1000s of users simultaneously.

![eventsdrivenarchitecture.webp](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2025-02-27/eventsdrivenarchitecture_378118.webp)

### **B. Single Threaded Behaviour of JS**

## **Why is Node.js Called Single-Threaded?**

Node.js is called **single-threaded** because it executes **JavaScript code on a single main thread**. This means that all JavaScript operations, such as function calls, loops, and variable assignments, are handled sequentially in **one thread**, without creating new threads for each task.

However, Node.js can still handle multiple tasks concurrently using **asynchronous operations**, which are managed by a system called **libuv**. These tasks (e.g., file reading, database queries, network requests) are **delegated to background workers** but are eventually handled back in the main thread.

---

## **Blocking vs. Non-Blocking Behavior**

### **Blocking Code (Synchronous)**

Blocking operations **stop the execution** of further code until they are completed.

#### **Example: A Blocking Operation (Synchronous File Read)**

```js
const fs = require("fs");

console.log("Task 1: Start");

// Blocking - Stops execution until file is read
const data = fs.readFileSync("file.txt", "utf8");

console.log("Task 2: File read completed");
console.log("Task 3: End");
```

### **What Happens?**

1. **Task 1 runs immediately** on the main thread.
2. The program **waits** for `fs.readFileSync` to finish.
3. Only after the file is read, **Task 2 and Task 3 execute**.

⛔ **Problem:** This approach is **slow** because it stops everything while waiting for the file.

---

### **Non-Blocking Code (Asynchronous)**

Non-blocking operations **do not stop the execution** of other code.

#### **Example: A Non-Blocking Operation (Asynchronous File Read)**

```js
const fs = require("fs");

console.log("Task 1: Start");

// Non-blocking - Uses a callback function
fs.readFile("file.txt", "utf8", (err, data) => {
  console.log("Task 2: File read completed");
});

console.log("Task 3: End");
```

### **What Happens?**

1. **Task 1 runs immediately** on the main thread.
2. `fs.readFile` is sent to **libuv**, which hands it to the **Thread Pool** for processing.
3. **Task 3 runs immediately**, without waiting for Task 2.
4. Once the file is read, **the event loop picks up Task 2 and executes it**.

✅ **Advantage:** The main thread **keeps executing** instead of waiting, making Node.js fast and efficient.

---

## **How Node.js Handles Asynchronous Tasks?**

Node.js achieves **non-blocking behavior** using the **Event Loop** and **libuv**.

### **Main Components of Asynchronous Handling:**

1. **Main Thread (Single-Threaded JavaScript Execution)**

   - Runs JavaScript code sequentially.
   - Delegates slow operations to background workers.

2. **libuv (Handles Asynchronous Tasks)**

   - Sends slow tasks (like file reads, network requests) to background workers.
   - Uses a **Thread Pool** for CPU-heavy tasks.

3. **Thread Pool (Handles CPU-Intensive Tasks)**

   - A pool of extra worker threads (usually 4 by default).
   - Used for tasks like file I/O, database queries, and cryptography.

4. **Event Loop (Manages Task Execution)**
   - Checks if async tasks are completed.
   - Moves completed tasks back to the main thread for execution.

---
![singleThreadedBehavioursofjs.jpg](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2025-02-27/singleThreadedBehavioursofjs_612397.jpeg)

### **Step-by-Step Execution of an Async Task**

Let's consider reading a file asynchronously:

```js
const fs = require("fs");

console.log("Task 1: Start");

// Async file read
fs.readFile("file.txt", "utf8", (err, data) => {
  console.log("Task 2: File read completed");
});

console.log("Task 3: End");
```

### **What Happens Internally?**

1. **Task 1 runs immediately** on the main thread.
2. `fs.readFile` is sent to **libuv**, which assigns it to a worker thread from the **Thread Pool**.
3. **Task 3 runs immediately** while the file is being read in the background.
4. Once the file is read, **libuv signals the event loop** that Task 2 is ready.
5. **The event loop picks up Task 2** and executes it on the main thread.

---

## **Clarification: Why is Node.js Still Called Single-Threaded Despite Having a Thread Pool?**

Even though **Node.js uses multiple threads in the background**, it is still called **single-threaded** because:

- **Only the main thread executes JavaScript code.**
- **Background threads do not execute JS code**—they only handle specific tasks like file I/O.
- **All JavaScript callbacks and async operations ultimately run on the main thread.**

### **Analogy: A Restaurant with One Chef**

Imagine Node.js as a **restaurant with a single chef (main thread)**:

1. The **chef takes orders** (executes JavaScript code).
2. If an order takes time (e.g., cooking steak), the **chef sends it to the kitchen staff (Thread Pool).**
3. While the kitchen prepares the steak, **the chef takes more orders** (executes more JS code).
4. When the steak is ready, **the waiter (event loop) brings it back to the customer**.

**Even though the kitchen helps, there is still only ONE chef handling everything**—just like **Node.js is still single-threaded!**

---

### **3. HTTP**
### 🚀 **HTTP Module in Node.js: A Complete Summary in One Shot**  

#### **1️⃣ What is the HTTP Module?**  
The **HTTP module** in Node.js allows developers to create and handle web servers. It enables communication between **clients (browsers, apps)** and **servers** using HTTP requests and responses.  

#### **2️⃣ Why is it Needed in Backend Development?**  
- Allows building **web APIs** and handling client requests.  
- Helps serve **HTML pages, JSON data, or files** to users.  
- Supports handling **GET, POST, PUT, DELETE** requests.  
- Works on an **event-driven, non-blocking** model, making it **fast and efficient**.  

#### **3️⃣ Creating a Simple HTTP Server**  
To use the HTTP module, first, import it:  
```javascript
const http = require('http');
```
Then, create a server that listens for requests:  
```javascript
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
});
server.listen(3000, () => console.log('Server running on port 3000'));
```
- **req (request)** → Holds client request details (URL, method, headers).  
- **res (response)** → Used to send a response back to the client.  

![httprequest.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2025-02-27/httprequest_449317.png)

#### **4️⃣ Handling HTTP Requests with Events (`req.on()`)**  
When a client sends **POST data**, it arrives in chunks. We handle it using events:  

1️⃣ **`data` Event** – Triggers when a chunk of data arrives.  
2️⃣ **`end` Event** – Triggers when all data has been received.  
3️⃣ **`error` Event** – Triggers if an error occurs while receiving data.  

Example: Handling a POST request with events:  
```javascript
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {  // 📌 Fires when receiving data
            body += chunk;
        });

        req.on('end', () => {  // 📌 Fires when data transfer completes
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Received data: ${body}`);
        });

        req.on('error', err => {  // 📌 Fires if an error occurs
            res.writeHead(500);
            res.end('Error in receiving data');
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000, () => console.log('Server running on port 3000'));
```

#### **5️⃣ Summary**  
- **HTTP module** helps create and manage web servers.  
- It handles **client requests and server responses**.  
- HTTP requests can contain **data**, handled using `req.on()` events.  
- `data`, `end`, and `error` events help manage incoming data.  


