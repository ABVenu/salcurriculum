
# **S05: External Middlewares, Introduction to Databases & MongoDB Shell CRUD**

---

## ✅ **Learning Objectives**

By the end of this session, you will be able to:

* Understand what external middlewares are and how to use them.
* Realize the limitations of using `db.json` or file-based storage.
* Explain the need for real databases in full-stack applications.
* Know the characteristics of ideal databases.
* Differentiate between types of databases (SQL vs NoSQL).
* Identify the essential software tools required for working with MongoDB.
* Learn MongoDB’s data structure: Databases → Collections → Documents.
* Practice basic MongoDB shell commands and CRUD operations.
* Explore MongoDB query operators like `$gt`, `$lte`, and `$eq`.

---

## 🧩 **1. External Middlewares (Recap + Intro)**

### ➤ What are Middlewares?

* Middlewares are functions that execute **between request and response cycle**.
* They can modify request/response objects or end the request-response cycle.

### ➤ What are **External Middlewares**?

* Pre-built middlewares available through `npm`.
* Examples:

  * `morgan` → Logging
  * `cors` → Cross-Origin Resource Sharing
  * `express.json()` → Parse incoming JSON
  * `helmet` → Secure headers

### ➤ How to Use External Middleware:

```js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('dev'));
```

---

## 🧠 **2. Why Not Just Use `db.json`?**

### ➤ Limitations of `db.json` or File-Based Storage:

| Feature           | `db.json` (File-based) | Database (like MongoDB) |
| ----------------- | ---------------------- | ----------------------- |
| Performance       | Slower on large data   | Optimized               |
| Scalability       | Not scalable           | Highly scalable         |
| Querying          | Manual filtering       | Advanced querying       |
| Concurrent Access | Not safe               | Designed for it         |
| Data Integrity    | Risk of corruption     | Managed                 |

---

## 📌 **3. Why Do We Need Databases?**

* To **store, retrieve, and manage** structured data efficiently.
* Enable **multi-user access** and **concurrent requests**.
* Support **querying, filtering**, and **sorting**.
* Provide **security**, **integrity**, and **reliability**.

---

## 🏗️ **4. Characteristics of Ideal Databases**

* Fast Read/Write performance
* Scalable horizontally
* Flexible schema (NoSQL) or well-defined schema (SQL)
* High availability
* Secure and ACID-compliant (SQL) or BASE (NoSQL)

---

## 🧮 **5. Types of Databases**

| Type      | Examples          | Characteristics                      |
| --------- | ----------------- | ------------------------------------ |
| SQL       | MySQL, PostgreSQL | Structured tables, strict schema     |
| NoSQL     | MongoDB, Firebase | Flexible schema, JSON-like documents |
| In-Memory | Redis             | Fast, temporary storage              |
| Graph DB  | Neo4j             | Relationship-oriented data           |

> For this session, we focus on **MongoDB** – a NoSQL document database.

---

## 🛠️ **6. MongoDB Software Stack**

| Tool              | Purpose                                              |
| ----------------- | ---------------------------------------------------- |
| **MongoDB**       | Database Engine (runs in background)                 |
| **Mongo Shell**   | Command-line interface to interact with DB           |
| **Mongo Compass** | GUI for database operations (browse, insert, delete) |

---

## 🧱 **7. MongoDB Data Organization**

1. **Databases** – like a container (e.g., `schoolDB`)
2. **Collections** – like folders inside DB (e.g., `students`)
3. **Documents** – actual data (JSON-like objects)

```js
{
  name: "Ravi",
  age: 21,
  enrolled: true
}
```

---

## 💻 **8. Basic Mongo Shell Commands**

### ➤ Connect using terminal:

```bash
mongosh
```

### ➤ Useful Commands:

```bash
show dbs                     // List all databases
use schoolDB                 // Switch to/create database
db.createCollection("students") // Create collection
show collections             // List collections
```

---

## 🧪 **9. MongoDB CRUD in Shell**

### ➤ Insert:

```js
db.students.insertOne({ name: "Ravi", age: 22, enrolled: true })
db.students.insertMany([
  { name: "Priya", age: 20 },
  { name: "Amit", age: 24 }
])
```

### ➤ Read:

```js
db.students.find()                  // All documents
db.students.find({ age: { $gt: 21 } }) // Age > 21
```

### ➤ Update:

```js
db.students.updateOne(
  { name: "Ravi" },
  { $set: { age: 23 } }
)
```

### ➤ Delete:

```js
db.students.deleteOne({ name: "Amit" })
db.students.deleteMany({ enrolled: false })
```

---

## 🔍 **10. Query Operators (Mini Preview)**

| Operator | Description        | Example                       |
| -------- | ------------------ | ----------------------------- |
| `$gt`    | Greater than       | `{ age: { $gt: 18 } }`        |
| `$lt`    | Less than          | `{ marks: { $lt: 40 } }`      |
| `$lte`   | Less than or equal | `{ age: { $lte: 25 } }`       |
| `$eq`    | Equal              | `{ name: { $eq: "Priya" } }`  |
| `$ne`    | Not equal          | `{ enrolled: { $ne: true } }` |

---

## 🧠 **Bonus Tip**

MongoDB supports **hundreds of other powerful functions**:

* Text search
* Aggregation pipelines
* Geospatial queries
* Indexing
* Transactions (for critical use cases)

---

## 🏁 **Conclusion**

In this session, you learned:

* How to integrate and use external middlewares in Express apps.
* The limitations of using `db.json` and the need for real databases.
* Key characteristics of modern databases and types (SQL vs NoSQL).
* What MongoDB is and its structure: DB → Collection → Document.
* How to use Mongo shell for basic CRUD operations.
* How MongoDB supports advanced queries using operators like `$gt`, `$lte`, `$eq`.


