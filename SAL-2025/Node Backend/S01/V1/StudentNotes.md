### **Introduction to Backend, NodeJs and Modules**

### **Learning Objectives (LOs)**

By the end of this session, learners will:

- **Understand Backend Development** – What backend is, why it is needed, and how it differs from frontend development.
- **Learn About Servers** – What a server is, its role in web applications, and how it handles requests and responses.
- **Explore Business Logic & Database Interactions** – Understand how backend processes data, applies logic, and interacts with databases.
- **Understand the Client-Server Model and 3-Tier Architecture** – Learn how modern applications are structured using **Presentation, Logic, and Data layers**, and why this architecture is in high demand today.
- **Introduction to Node.js** – Learn why Node.js is a popular choice for backend development and how it works.
- **Explore JavaScript Module Systems (CJS vs. ESM)** – Understand the differences between **CommonJS (CJS) and ECMAScript Modules (ESM)** and when to use each.
- **Types of Modules in Node.js** – Learn about built-in modules (`fs`, `path`, `http`) and custom modules in **CommonJS**.

### **Why is Backend Needed?**

Backend development is essential for creating dynamic, scalable, and secure applications. It acts as the brain of the application, handling data management, business logic, and communication between the frontend and the database.

#### **Importance of Backend Development**

1. **Data Storage & Management** – It stores and organizes data securely.
   - **Example:** A social media app stores user profiles, posts, and comments.
2. **Business Logic & Processing** – It ensures that data is processed according to the application's rules.
   - **Example:** An e-commerce site calculates discounts and applies taxes before checkout.

---

### **Difference Between Backend and Frontend**

| Feature            | Frontend                                                | Backend                                                                 |
| ------------------ | ------------------------------------------------------- | ----------------------------------------------------------------------- |
| **Definition**     | The part of the application users see and interact with | Manages data, business logic, and interactions with the database        |
| **Languages Used** | HTML, CSS, JavaScript (React, Angular, Vue)             | JavaScript (Node.js), Python (Django, Flask), Java (Spring Boot)        |
| **Example**        | A login page with input fields and buttons              | Validates login credentials, checks the database, and returns user data |

---

### **What is the Task of the Frontend?**

The frontend handles the visual and interactive aspects of a web application.

#### **Key Responsibilities**

1. **User Interface (UI) Design** – Ensuring a visually appealing layout.
2. **User Experience (UX) Optimization** – Making the interface smooth and user-friendly.
3. **Data Presentation** – Fetching and displaying data from the backend dynamically.
4. **Handling User Input** – Capturing and validating user actions before sending them to the backend.

#### **Example:**

- In a **banking app**, the frontend displays account balances and enables transactions.
- In a **food delivery app**, it shows restaurant menus and allows users to place orders.

---

## ![FrontEnd-Backend](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/8fcc8883-1d40-4a20-91a5-82e97a9abab2/2eUXBLcWcyi2cCAz.gif)

### **What is a Server?**

A **server** is a computer or software that processes requests and provides responses to clients over a network.

#### **Types of Servers**

1. **Web Server** – Delivers web pages over HTTP/HTTPS (e.g., Apache, Nginx).
2. **Application Server** – Runs backend logic and serves dynamic content (e.g., Node.js, Express).

![Server](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/b5a6891e-00af-45ac-9445-73d5f434f92c/uRUqBfPFZaRJYZHj.jpg)

#### **Example:**

- When you visit a website, your browser (client) requests a page from a web server, which then responds with the necessary data.

---

### **What is Business Logic? What are Database Interactions?**

- **Business logic** is the set of rules that define how data should be processed.
- **Database interactions** involve CRUD operations (Create, Read, Update, Delete) in a database.

#### **Example of Business Logic**

1. **E-commerce platform** – Calculates discounts, taxes, and final pricing.
2. **Banking system** – Verifies account balance before processing withdrawals.

#### **Example of Database Interactions**

1. **A login system** verifies user credentials against stored records in a database.
2. **A blogging platform** retrieves all posts from a database and displays them on the frontend.

---

### **What is the Client-Server Model?**

The **client-server model** is a networking architecture where a client (frontend) sends requests to a server (backend), which processes them and returns the required data.

#### **How it Works?**

1. The client sends a request to the server (e.g., asking for product details).
2. The server processes the request, retrieves data from the database, and applies business logic.
3. The server sends the processed data back to the client.

#### **Example:**

- When you **search for a product on Amazon**, the frontend (client) sends a request to the backend, which fetches matching products from the database and returns the results.

---

### **What is 3-Tier Architecture?**

The **3-tier architecture** is a widely used software architecture that divides an application into three separate layers for better scalability, security, and maintenance.

#### **Layers of 3-Tier Architecture**

1. **Presentation Layer (Frontend)** – The UI that users interact with.
2. **Application Layer (Backend)** – The logic that processes requests and applies business rules.
3. **Data Layer (Database)** – The storage system where application data is managed.

#### **Example:**

- In a **food delivery app**:
  - The **frontend** displays menus and allows users to place orders.
  - The **backend** processes orders and assigns delivery drivers.
  - The **database** stores customer details, orders, and restaurant menus.

---

![Client Sever ](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/fcad6793-da41-40af-b121-44e18bf86b87/gzG2svjiL3hrWLEy.png)

---

### **Why is 3-Tier Architecture in Demand Nowadays?**

The 3-tier architecture is widely adopted due to the following benefits:

1. **Scalability** – Each layer can be scaled independently, making it easy to handle large amounts of traffic.
2. **Security** – The separation of concerns enhances security by keeping the database protected from direct user access.
3. **Maintainability** – Changes in one layer do not affect others, making updates and debugging easier.
4. **Cloud & Microservices Compatibility** – Modern applications use cloud-based services and microservices, which align well with the 3-tier model.

---

### **Famous Websites Using 3-Tier Architecture**

Many popular web applications use 3-tier architecture due to its efficiency and flexibility.

1. **Amazon** – Handles millions of requests with separate frontend, backend, and database layers.
2. **Netflix** – Uses 3-tier architecture to process video streaming requests efficiently.
3. **Facebook** – Manages billions of users by separating UI, business logic, and database operations.
4. **Uber** – Uses a multi-tier architecture to handle ride-booking, pricing, and driver allocation.

---

## **Why is Node.js Used as a Backend?**

Node.js is a **runtime environment** that allows JavaScript to run on the server side, making it a popular choice for backend development.

### **Advantages of Using Node.js for Backend**

1. **Non-blocking, Asynchronous Architecture**

   - Node.js uses an **event-driven model**, meaning it handles multiple requests simultaneously without waiting for one to finish before starting another.
   - **Example:** A real-time chat app processes multiple messages at the same time without delay.

2. **Single Programming Language (JavaScript)**

   - With Node.js, developers use JavaScript for both **frontend and backend**, reducing context switching.
   - **Example:** A web application built with React (frontend) and Express (backend) uses the same language.

3. **High Performance with V8 Engine**

   - Node.js runs on Google's **V8 engine**, which compiles JavaScript into machine code for faster execution.
   - **Example:** Netflix migrated its backend to Node.js to improve load times and reduce response latency.

4. **Scalability & Microservices Support**

   - Node.js is **lightweight** and works well for **microservices architecture**, where different services (like authentication, payments, etc.) run separately.
   - **Example:** Uber uses Node.js to handle thousands of ride requests in real-time.

5. **Large Ecosystem with npm (Node Package Manager)**
   - Node.js has a vast collection of open-source libraries, making development **faster and easier**.
   - **Example:** `bcrypt` for password hashing, `jsonwebtoken` for authentication.

---

#### Structure of Nodejs

![NodeJS Structure](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/78398cb1-4ee6-467e-9c43-9077ca526bad/FAEfUx2JOPGFJo2S.png)

## **Node.js Structure**

### **Core Components**


![Node Env](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/c5ac2690-13bb-4c15-81a3-a9921dc13408/kJSaLCdwXuvmfGAz.png)


- **V8 Engine** – Compiles JavaScript into machine code for fast execution.
- **Libuv** – Handles non-blocking I/O, event loop, and thread pool.
- **Event Loop** – Manages asynchronous tasks efficiently.
- **Node.js APIs** – Built-in modules (`fs`, `http`, `path`, `os`) for system operations.
- **Module System** – Supports **CommonJS (CJS)** and **ES Modules (ESM)**.
- **npm** – Manages external packages and dependencies.

---

### **How Node.js Works?**

- Client request → **Event Loop** receives it.
- Non-blocking tasks run asynchronously via **Libuv**.
- Blocking I/O tasks use **Thread Pool**.
- Once complete, response is sent to the client.

---

### **Role of Libuv**

- Implements **Event Loop & Thread Pool**.
- Handles **file system, networking, and timers** asynchronously.
- Provides **cross-platform support** (Windows, Linux, macOS).

---

### **Where is Node.js Used?**

| Use Case                 | Example                  |
| ------------------------ | ------------------------ |
| **Real-time Apps**       | WhatsApp, Slack, Discord |
| **Streaming Services**   | Netflix, YouTube         |
| **E-commerce Websites**  | Amazon, eBay             |
| **APIs & Microservices** | PayPal, Uber             |

---

## **Brief Working of JavaScript in the Browser**

JavaScript is a **single-threaded** language, meaning it executes code line by line in a synchronous manner. However, to handle multiple tasks efficiently, the browser provides **asynchronous execution** using **Web APIs** and the **Event Loop**.

![How JS Works in Browser](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/c2ea2482-b9e7-41bd-a58d-2c400b889bcb/3FIjGV0vDRWoniPN.png)

### **How Asynchronous Tasks are Handled?**

JavaScript uses the **Event Loop** and **Callback Queue** to handle async tasks like API calls, timers, and event listeners.

#### **Key Components in Async Handling:**

1. **Call Stack** – Executes JavaScript code in a **Last-In, First-Out (LIFO)** manner.
2. **Web APIs** – Browser-provided APIs like `setTimeout`, `fetch`, and `DOM Events`.
3. **Callback Queue** – Stores async callbacks that are executed when the call stack is empty.
4. **Event Loop** – Monitors the call stack and moves tasks from the queue to execution.

#### **Example of Asynchronous Execution:**

```js
console.log("Start");

setTimeout(() => {
  console.log("Async Task Done");
}, 2000);

console.log("End");
```

**Output:**

```
Start
End
Async Task Done (after 2 seconds)
```

The `setTimeout` function is executed **asynchronously** using the Web API, allowing the rest of the code to run without waiting.

---

## **Web APIs and Their Role in JavaScript Execution**

Web APIs are provided by the browser to handle tasks asynchronously. Some commonly used Web APIs:

1. **DOM API** – `document.getElementById()`, `addEventListener()`.
2. **Timer API** – `setTimeout()`, `setInterval()`.
3. **Fetch API** – Handles HTTP requests asynchronously.
4. **Storage API** – `localStorage`, `sessionStorage`, `cookies`.
5. **Geolocation API** – Retrieves user's location.

#### **Example: Fetch API (Web API)**

```js
console.log("Fetching data...");

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data));

console.log("Other tasks running...");
```

##### Here, `fetch` runs in the background, and the Event Loop ensures non-blocking execution.
---
## **Working of JavaScript in Node.js Environment**  

![Node JS Workinhg](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/bd674e7c-5abd-4030-87d5-867ea9f65682/EGEQ1o1ENugYUDcP.png)

### **Execution Flow in Node.js**  
1. **JavaScript Code Execution** – Runs on the **V8 Engine**, converting code to machine code.  
2. **Event Loop** – Manages the execution of synchronous and asynchronous tasks.  
3. **Libuv** – Provides **Thread Pool** and event-driven non-blocking I/O operations.  
4. **Worker Threads (Optional)** – Allows multithreading for CPU-intensive tasks.  
5. **Callback Queue & Microtask Queue** – Ensures asynchronous tasks execute in the correct order.  

---

### **How Asynchronous Tasks Work in Node.js?**  
- **Event Loop** – Manages tasks in different phases (timers, I/O, callbacks).  
- **Thread Pool** – Manages heavy operations like file I/O, DNS, and cryptographic functions.  
- **Worker Threads** – Used for CPU-bound tasks (e.g., image processing, data crunching).  

Example:  
```js
const fs = require("fs");

console.log("Start");
fs.readFile("file.txt", "utf-8", (data) => {
  console.log("File Read Done");
});
console.log("End");
```
💡 **Output:**  
```
Start  
End  
File Read Done (After file reading completes)
```
➡ **Why?** `fs.readFile` is handled by **Thread Pool**, freeing up the Event Loop to continue execution.  

---

### **Role of Event Loop, Thread Pool & Worker Threads**  
| **Feature**       | **Purpose** |
|------------------|-------------|
| **Event Loop** | Manages async tasks, ensuring non-blocking execution. |
| **Thread Pool** | Handles expensive I/O operations (default size: 4 threads). |
| **Worker Threads** | Runs CPU-intensive tasks on separate threads. |

#### **Example of Worker Threads**  
Worker threads are ideal for **CPU-heavy tasks** like video processing.  

---


---

## **Installing Node.js**

To run JavaScript outside the browser, we install **Node.js**, which includes the **V8 engine** and **npm (Node Package Manager)**.

### **Installation Steps:**

1. **Download Node.js** from [https://nodejs.org](https://nodejs.org).
2. **Install Node.js** by running the installer.
3. **Verify Installation:**
   - Open **Command Prompt (Windows)** or **Terminal (Mac/Linux)**.
   - Run:
     ```sh
     node -v
     ```
   - If installed successfully, it will show the Node.js version.

---

## **Writing and Executing the First Node.js Code**

### **1. Writing a Simple Script**

Create a file **`app.js`** and add:

```js
console.log("Hello, Node.js!");
```

### **2. Running the Script in Terminal**

Navigate to the folder where `app.js` is located and run:

```sh
node app.js
```

**Output:**

```
Hello, Node.js!
```

---

## **Modules in JavaScript**

Modules allow code to be **split into reusable files**, making projects more organized and maintainable.

### **Types of Module Systems in JavaScript**

1. **CommonJS (CJS)** – Used in **Node.js** (default in Node).
2. **ECMAScript Modules (ESM)** – Used in **modern browsers** and supported in Node.js (via `import/export`).

---

## **CommonJS (CJS) – Default in Node.js**

CommonJS uses `require()` for importing modules and `module.exports` for exporting.

### **Example of Custom Module in CJS**

#### **1. Creating a Module (`math.js`)**

```js
function add(a, b) {
  return a + b;
}

module.exports = { add };
```

#### **2. Importing and Using the Module (`app.js`)**

```js
const math = require("./math");

console.log(math.add(5, 3)); // Output: 8
```

---

## **ECMAScript Modules (ESM) – Modern Standard**

ESM uses `import` and `export` keywords.

### **Example in ESM**

#### **1. Creating a Module (`math.mjs`)**

```js
export function add(a, b) {
  return a + b;
}
```

#### **2. Importing the Module (`app.mjs`)**

```js
import { add } from "./math.mjs";

console.log(add(5, 3)); // Output: 8
```

**Note:** In Node.js, ESM requires `"type": "module"` in `package.json` or using `.mjs` files.

---

### **Comparison of CommonJS (CJS) and ECMAScript Modules (ESM)**

| Feature                          | CommonJS (CJS)                                           | ECMAScript Modules (ESM)                                      |
| -------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------- |
| **Default Usage**                | Node.js (default)                                        | Modern Browsers & Node.js (`"type": "module"`)                |
| **File Extension**               | `.js`                                                    | `.mjs` (or `.js` with `"type": "module"` in `package.json`)   |
| **Import Syntax**                | `const module = require('module')`                       | `import module from 'module'`                                 |
| **Export Syntax**                | `module.exports = {}`                                    | `export default` or `export {}`                               |
| **Synchronous or Asynchronous?** | **Synchronous** (Blocks execution while loading modules) | **Asynchronous** (Non-blocking module loading)                |
| **Support in Browsers**          | ❌ Not supported                                         | ✅ Supported in modern browsers                               |
| **Dynamic Imports**              | ❌ Not supported (except with `require()`)               | ✅ `import()` allows dynamic imports                          |
| **Can Be Used in Node.js?**      | ✅ Default in Node.js                                    | ✅ Requires `"type": "module"` in `package.json`              |
| **Top-Level `await` Support**    | ❌ Not supported                                         | ✅ Supported in ESM                                           |
| **Best For**                     | Traditional Node.js projects                             | Modern JavaScript projects and frontend/backend compatibility |



---

### **Key Takeaways**
- **CJS is best for Node.js-only projects** (simpler, widely used).
- **ESM is the modern standard** for both frontend and backend JavaScript.
- **ESM supports async imports and works in browsers** without additional setup.

---

## **Types of Modules in Node.js**

### **1. Built-in Modules** (Inbuilt in Node.js)
Node.js provides **core modules** without installation.

#### **Examples of Built-in Modules:**
| Module | Description | Example |
|--------|------------|---------|
| `fs` | File system operations | Read/write files |
| `http` | Create web servers | Build APIs |
| `path` | Work with file paths | Resolve directory paths |
| `os` | Get OS information | Fetch system details |

#### **Example: Using the `fs` Module**
```js
const fs = require("fs");

fs.writeFileSync("message.txt", "Hello from Node.js!");
console.log("File created successfully!");
````

---

### **2. Custom Modules (Only in CJS)**

Custom modules allow developers to write their own reusable logic.

#### **Example: Creating a Custom Module**

```js
// greetings.js
module.exports.hello = function (name) {
  return `Hello, ${name}!`;
};
```

#### **Using the Custom Module**

```js
const greetings = require("./greetings");

console.log(greetings.hello("John")); // Output: Hello, John!
```

---

## **Summary**

- **JavaScript in the browser** is **single-threaded** but handles async tasks using **Web APIs, Event Loop, and Callback Queue**.
- **Node.js installation** allows running JavaScript outside the browser.
- **First Node.js script** runs using `node filename.js`.
- **Modules in JavaScript** enable reusable code.
- **CommonJS (CJS)** is used in Node.js, while **ESM (ECMAScript Modules)** is used in browsers and modern Node.js.
- **Built-in modules** like `fs`, `http`, and `path` simplify backend development.
- **Custom modules** allow developers to write reusable functions.

### **Conclusion**

- **Backend is essential** for handling business logic, database interactions, and secure data processing.
- **Servers** act as the backbone of web applications, managing client requests and delivering responses.
- **3-Tier Architecture** is widely used because it **improves scalability, security, and maintainability** in modern applications.
- **Node.js** is a **fast, efficient, and scalable** backend technology due to its **non-blocking, event-driven architecture**.
- **Modules help structure JavaScript applications** – CJS is the default in Node.js, while ESM is the modern standard.
- **Node.js provides built-in modules** for essential functionalities, while **custom modules** allow code reusability and modularization.
