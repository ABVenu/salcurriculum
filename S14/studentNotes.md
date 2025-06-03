# **Caching with Redis, Cron Jobs & Utility Modules**

#### [Live Coding Notes](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/4ef386cb-b4b0-49b7-b561-8e3647143c8d/yP3dPftgr0tdOajq.zip)

## **Learning Objectives**

By the end of this session, you will be able to:

- Understand the concept of caching and why it is used in backend systems.
- Learn what Redis is, how it works, and how to use it for backend caching.
- Install and set up Redis on your system and connect it to a Node.js project.
- Implement caching in an Express-based Node.js application using Redis.
- Learn about key backend utility modules: `cron` jobs, CSV readers, and PDF generators.
- Build an integrated use case that schedules tasks using `cron`, processes data with Redis and MongoDB, and generates an automated report via email.

---

## **Understanding the Need for Caching**

Imagine you're refreshing your LMS dashboard repeatedly. Your lectures and assignments are being fetched from the database every single time—even though the data hasn’t changed.

- **Problem:** Repeated DB hits lead to unnecessary load and slower response times.
- **Solution:** Use a **temporary memory storage** to serve frequently accessed data without re-querying the database every time.

This is called **caching** — storing frequently accessed data in memory (RAM) to improve performance.

### **Frontend vs Backend Caching**

- **Frontend caching**: Stored in the user's browser (e.g., localStorage, cache headers).
- **Backend caching**: Handled on the server, typically using tools like Redis.
  ![Caching Image](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/549f9f0b-858c-48fd-85f0-bad327bb74c1/DAvlUdDIH3moWSYq.png)

---

## **Introduction to Redis**

### What is Redis?

- **Redis** stands for **Remote Dictionary Server**.
- It is a **key-value based NoSQL database** stored entirely in RAM.
- Redis is blazing fast and used extensively for **caching**, **real-time analytics**, **queue systems**, and **pub-sub** messaging.

### Why Redis?

- Data is stored in-memory, so read/write is extremely fast.
- Stores data as key-value pairs, not documents.
- Ideal for temporary, fast-access data like sessions, cached responses, and task queues.

---

## **Installing and Using Redis Locally**

### For macOS and Linux:

```bash
brew install redis
brew services start redis

# or for Ubuntu
sudo apt update
sudo apt install redis-server
sudo systemctl start redis
```

### For Windows:

- Download from: [https://github.com/microsoftarchive/redis/releases](https://github.com/microsoftarchive/redis/releases)
- Install `Redis-x64-3.0.504.zip`
- Run Redis using `redis-cli`

Also install **Redis VS Code Extension** for GUI access.

---

## **Basic Redis CLI Commands**

```bash
redis-cli

PING                 # Returns PONG
SET name "LMS App"   # Stores value
GET name             # Retrieves value
DEL name             # Deletes a key
EXISTS name          # Checks if key exists
SETEX temp 60 "data" # Sets a key with 60s expiration
```

### TTL in Redis

- TTL = Time to Live. You can check how long a key has before it expires using:

```bash
TTL name
```

---

## **Using Redis in Node.js**

```bash
npm install redis
```

```js
const redis = require("redis");
const client = redis.createClient();

client.connect();

client.on("connect", () => console.log("Redis connected"));
client.on("error", (err) => console.error("Redis error", err));
```

### Caching Example

```js
await client.set("lectureData", JSON.stringify({ title: "Redis Intro" }), {
  EX: 60,
});
const data = await client.get("lectureData");
console.log(JSON.parse(data));
```

---

## **Implementing Redis Caching in a Node.js App**

### Step 1: Redis Configuration

```js
// redis.config.js
const { createClient } = require("redis");

const client = createClient();

client.on("error", (err) => {
  console.error("Redis connection error:", err);
});

async function connectRedis() {
  if (!client.isOpen) {
    await client.connect();
    console.log("Redis connected successfully.");
  }
}

module.exports = { client, connectRedis };
```

### Step 2: Connect Redis in Server

```js
const { connectRedis } = require("./config/redis.config");
connectRedis();
```

### Step 3: Use Redis to Cache GET Response

```js
const { client } = require("../config/redis.config");

TodoRouter.get("/alltodos", async (req, res) => {
  const userId = req.user;

  const cached = await client.get(`todos:${userId}`);
  if (cached) {
    return res.status(200).json({
      message: "Todos (from cache)",
      todos: JSON.parse(cached),
    });
  }

  const todos = await TodoModel.find({ userId });
  await client.set(`todos:${userId}`, JSON.stringify(todos), { EX: 60 });

  res.status(200).json({ message: "Todos List", todos });
});
```

---

## **Backend Utility Modules**

### **1. Cron Jobs**

- Use to schedule tasks (like background jobs).
- Example: Sending weekly emails, processing uploads, cleanup tasks.

```js
const cron = require("node-cron");

cron.schedule("*/2 * * * *", () => {
  console.log("Running this task every 2 minutes");
});
```

### **2. CSV Reader**

- Used to parse `.csv` files (e.g., bulk data uploads).

```js
const csv = require("csv-parser");
const fs = require("fs");

fs.createReadStream("data.csv")
  .pipe(csv())
  .on("data", (row) => {
    console.log(row);
  });
```

### **3. PDF Generator**

- Used to auto-generate reports, invoices, etc.

```js
const PDFDocument = require("pdfkit");
const fs = require("fs");

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream("report.pdf"));

doc.text("This is a sample PDF report.");
doc.end();
```

---

## **Integrated Use Case: Scheduled Bulk Todo Processing**

### Problem:

- A user uploads a CSV file containing todos.
- The backend must immediately respond with: **"Task Processing Started. You will receive a report shortly."**
- Data is stored in Redis temporarily.
- A **cron job** runs in the background:

  - Reads from Redis
  - Processes todos into MongoDB
  - Tracks successes/failures
  - Generates a PDF report
  - Emails the report to the user

### Modules Involved:

- **Redis** – Caching uploaded data
- **Cron** – Scheduling task execution
- **MongoDB** – Final data storage
- **CSV Reader** – Parsing bulk input
- **PDFKit** – Report generation
- **Nodemailer** – Sending email report

This mimics how real-world backend workflows operate — like how e-commerce platforms process orders, payments, and billing asynchronously.

---

## **Pitfalls to Watch Out For**

### Caching & Redis:

- Don’t confuse **caching** with **rate-limiting**.
- Redis is for **temporary fast access**, MongoDB is for **permanent storage**.
- Redis stores data in **RAM**, MongoDB stores in **disk**.
- TTL (Time To Live) ensures Redis doesn’t overload memory.

### Cron Jobs:

- Cron jobs are **repeating tasks**, unlike `setTimeout` which runs once.
- Avoid overlapping cron executions — always ensure previous job is complete before starting the next.

### Integration:

- Ensure a smooth data flow between Redis → MongoDB → PDF → Email.
- Always track failures and handle errors gracefully.

---

## **Conclusion**

In this session, you learned how to boost backend performance using **Redis caching**, and how to automate repetitive backend tasks using **cron jobs**. You also explored the use of key utility modules like **CSV readers** and **PDF generators**, culminating in a powerful integrated use case that mimics real-world backend systems.

Mastering these tools and patterns will significantly elevate your ability to build **efficient, scalable, and professional-grade** backend applications.
