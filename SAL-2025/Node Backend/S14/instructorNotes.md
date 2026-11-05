#### Caching with Redis, Cron Jobs & Other Utility Modules

### Learning Objectives

- Caching and Redis
- cronjobs, csv reader, pdf geneartor
- Task scheduling with cron jobs

## Scenes

**1.0** Undserstanding need to Cachig and Implementation with Redis

- 1.1 - Activity to establish the need of caching
- 1.2 - Understanding Redis, its terminology, working principle, how it is different from Mongo
- 1.3 - Download, Install and Usage Redis
- 1.4 - Implementation of Caching using Redis

**2.0** Utility Modules: These are other important backend modules, which helps to create a good backend system

- 2.1 - Cronjob - how it helps, simple snippet to understand
- 2.2 - csv reader - how it helps , simple snippet to understand
- 2.4 - Pdf generator - how it helps, simple snippet to understand

**3.0** Integration Use Case 
Implementation of Task Scheduler with caching that creates todo in bulk and emails the report to the user

- Problem statement: A user uploads the CSV file which is of bulk todos, User should get immedeiate response Task Processing Started, Will Receive Report Shortly
- The data should be stored in Redis, an Cron Should Run at regular Interval, which should make these todos to create in mongo, passed/failed to be tracked and onec task is finished, an report to be craeted and mailed to user

## Pitfalls

**1.0**

- How caching differs from rate limiting
- What is the difference between FE caching and BE caching
- How Redis & Mongo Differs inspite of being NoSQL DBs

**2.0**

- How cron job works, how it differs from setTimeout

**3.0**

- Flow of using multiple modules 

## Content/Pedagagoy

### **Scene 1.0**

#### **1.1: Activity – Understanding the Need for Caching**

* Imagine you’re simply refreshing your LMS dashboard repeatedly, where your Lectures and Assignments are fetched from the database again and again.
* Is there any difference in the data received? No, it’s mostly the same — yet the database is being queried repeatedly, causing unnecessary load.
* Can we stop this repeated calling? Not really. We can’t tell the user to stop refreshing, and applying a rate-limiter would degrade user experience.
* So, how do we reduce repeated DB hits for the same data?
* The solution is **temporary storage** — what if we store the frequently requested data in a memory buffer and serve it from there when the user requests again?
* That’s where **caching** comes in.
  **Caching** is the technique of storing frequently accessed data in temporary memory (usually RAM) to avoid hitting the main database repeatedly.
* Caching can be done at both **frontend** and **backend** levels. In this session, we’ll focus on **backend caching**.
![Caching Image](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/549f9f0b-858c-48fd-85f0-bad327bb74c1/DAvlUdDIH3moWSYq.png)

---

#### **1.2: Introduction to Redis**

* So, how do we implement caching in the backend? How do we store data in temporary memory?
* For this, we use a special kind of in-memory database called **Redis**.
* **Redis** stands for **REmote DIctionary Server** and is widely used as an in-memory key-value NoSQL database. Caching is one of its primary uses, though it can also be used for real-time analytics, pub-sub systems, etc.
* Unlike traditional databases that store data on disk, **Redis stores data in RAM**, which makes reading and writing operations significantly faster.
* Redis doesn't store data as documents (like MongoDB). Instead, it stores data as **key-value pairs**, making it extremely fast for lookups, since keys are indexed internally.
* This key-value nature and in-memory storage make Redis ideal for scenarios where speed and performance are critical.

---

### **1.3: Download, Install, and Use Redis**

#### **Step-by-Step: How to Install and Run Redis Locally**

>  *Before installing Redis, emphasize: "Redis is a service that runs in the background — like MongoDB — and listens for key-value operations."*

##### **Option 1: For Linux/macOS (using Homebrew or package managers)**

```bash
# For macOS using Homebrew
brew install redis
brew services start redis

# For Ubuntu/Debian
sudo apt update
sudo apt install redis-server
sudo systemctl start redis
```

##### **Option 2: For Windows Users**

* Download from: [https://github.com/microsoftarchive/redis/releases](https://github.com/microsoftarchive/redis/releases)
* Download & Install : `Redis-x64-3.0.504.zip` file
* Open another terminal and run: `redis-cli` to interact with Redis
* Also Install `Redis For VS Code` extention in VSCode, which is GUI for redis

---

##### **Basic Redis Commands using CLI (redis-cli)**

```bash
# Open Redis CLI
redis-cli

# Type 
PING # You will receive PONG as reply 

# Set a key-value pair
SET name "LMS System"

# Get the value by key
GET name

# Delete a key
DEL name

# Check if a key exists
EXISTS name

# Set a key with expiry (in seconds)
SETEX tempData 60 "temporary info"
```

---

#### **Using Redis in Node.js**

> Install `redis` package in your Node project:

```bash
npm install redis
```

```js
// redisClient.js
const redis = require('redis');
const client = redis.createClient();

client.connect();

client.on('connect', () => {
  console.log('Redis connected');
});

client.on('error', (err) => {
  console.error('Redis error', err);
});

// Example usage
async function setCache() {
 await client.set('lectureData', JSON.stringify({ title: 'Redis Intro' }), {
  EX: 60 // expires in 60 seconds
});
  const data = await client.get('lectureData');
  console.log(JSON.parse(data));
}
```
* By default `Redis` runs on port of 6379 
* Now check the cached Data either through CLI or through extention again and again for 1 min
* You can see the data upto first 1 min and gets disaapars after that as expiration clears the data
* Data Expiration not only clears the data but also releases RAM so that, the sever performnace is not affected 

##### TTL in Redis: 
TTL means Time To Live, it is time left to expire a data that is stored, you can check TTL through CLI or through the Extension 
---

### Scene 2.0: Implementation of Caching with Redis

* step1: create client in configs as similar to Mongo
```javascript
// redis.config.js
const { createClient } = require("redis");

const client = createClient({
  // Optional: you can specify host/port if not using default (6379)
  // url: "redis://localhost:6379"
});

client.on("error", (err) => {
  console.error("Redis connection error:", err);
});

async function connectRedis() {
  if (!client.isOpen) {
    await client.connect();
    console.log("Redis connected successfully.");
  }
}

module.exports = {
  client,
  connectRedis,
};
```
* step 2: Import in server.js as similar to connect to DB
```javascript
const express = require("express");
const { connectRedis } = require("./config/redis.config");
const { connectMongo } = require("./config/mongodb.config"); // assuming similar export

const app = express();

connectMongo();   // Your Mongo connection
connectRedis();   // Redis connection

// other setup like routes and middleware
```
* step 3: For Get Request, Store Data in Redis 
```javascript
const { client } = require("../config/redis.config");

TodoRouter.get("/alltodos", authMiddleware(["user", "admin"]), async (req, res) => {
  const userId = req.user;

  try {
    const cachedData = await client.get(`todos:${userId}`);
    if (cachedData) {
      return res.status(200).json({
        message: "Todos List (from cache)",
        todos: JSON.parse(cachedData),
      });
    }

    const todos = await TodoModel.find({ userId });
    await client.set(`todos:${userId}`, JSON.stringify(todos), { EX: 60 });

    res.status(200).json({ message: "Todos List", todos });

  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});
```

### Scene 3.0: Integration Use Case 

**Implementation of Task Scheduler with Caching that Creates Todos in Bulk and Emails the Report to the User**

* **Problem Statement:** A user uploads a CSV file containing a bulk list of todos. The user should immediately receive a response: *"Task Processing Started, You Will Receive a Report Shortly."*
* The uploaded data should be stored in Redis.
* A **cron job** should run at regular intervals, fetching the data from Redis and creating todos in MongoDB.
* Each task should be tracked for success or failure.
* Once processing is complete, a **report should be generated** and **emailed to the user**.

- This use case helps students to know backend works using the utility modules, so that they can relate how they gets bills, how payement is processed, how orders are getting tracked etc

