### Learning Objectives

- Quick Recap of MongoDB
- Need of softwares/drivers that connects DB & Node JS
- Brief Introduction on ODM/ORM
- mongoose - installtion and basic setup
- creation of schema - models
- creating simple crud using created schema & model

#### Scenes

**1.0** Need of driver softwares that connects DB

- 1.1 - why we need Drivers that connects DB..
- 1.2 - what they are called, is there general classification, best examples used
- 1.3 - how they work?, apart from connecting DB will they perform any other tasks
- 1.4 - what is schema design?, how important it is, why it is needed, how it is responsible to run a system/building an app
- 1.5 - good analogy to demonstrate importance of schema

**2.0** Mongoose - a complete Guide

- 2.1 - which driver is used to connect mongo-nodejs
- 2.2 - why mongoose is used, why not MongoDB Native driver
- 2.3 - how to use?,
- 2.4 - how to connect with DB & node js?
- 2.5 - how to create schema, explain the JS part of schema
- 2.6 - what are models?, how models ae diffrent with schems
- 2.7 - finally which is responsible to interact with DB & nodejs, schema or model?

**3.0** CRUD Operations using Mongoose - Schema - Model using Express App & Routes

- 3.1 - export a typical created model and make CRUD operation
- 3.2 - demostarate all poosible ways, that how mongoose schema behaves
  - 3.2.1 - like insert all the fields mentioned in schema
  - 3.2.2 - skip some fields and add the data
  - 3.2.3 - add some extra fields, which is not specified in schema
  - demonstrate flexiblity of schema - which is merit and demerit as well
- 3.3 - once data/document is added, explain the typical document structure, explain the default fiels created like versionkey,
- 3.4 - adding timeStamps like createdAt, updatedAt - its importance
- 3.5 - Standard Coding Practise to store mongo url in .env and imoprt them from .env, (explain the process object)

### Pitfalls

**1.0**

- 1.1 - ODM/ORM bifurcation, and how they works
- 1.2 - Need & Importance of Schema Design, stamping this is very important

**2.0**

- 2.1 - diffrence between mongoDb Driver and Mongoose (imp Interview question)
- 2.2 - why connecting to DB is async operation?
- 2.3 - typical project setup flow - create express app - then connect to db
- 2.4 - syntax of Schema/Model..., finally which one is used in CRUD Schema/Model??

**3.0**

- 3.1 - Behaviour of Schema - (3.2.1 to 3.2.3 above)
- 3.2 - why insertOne is not present in Mongoose but present in MongoDB
- 3.3 - Many thinks the CRUD operations is for one document at a time
- 3.4 - .env, need, impotance and usage

### Content/Pedagagoy

**Scene 1.0**

### 1.1 **Need a Database Driver?**

- **MongoDB Shell** allows direct interaction with the database but is limited to manual commands.
- In real-world applications, **database interactions should happen dynamically** when a client makes a request.
- Writing raw queries in the shell is impractical; instead, we need a way to connect **Node.js with MongoDB programmatically**.

### **The Role of Database Drivers**

- To enable seamless communication between **Node.js** and **MongoDB**, we use **driver software**.
- These drivers act as a **bridge** between the backend application and the database, allowing CRUD operations through function calls.

### 1.2 **What Are Database Drivers Generally Called?**

Database drivers are commonly categorized into two types:

1. **ODM (Object Data Modeling)** – Used for NoSQL databases like MongoDB.
2. **ORM (Object-Relational Mapping)** – Used for SQL-based relational databases like MySQL and PostgreSQL.

#### **What is ODM (Object Data Modeling)?**

- ODM is a **higher-level abstraction** over the raw database driver, designed specifically for **NoSQL databases** (e.g., MongoDB).
- It maps **JavaScript objects** in code to **documents** in a NoSQL database.
- It provides **schema enforcement, validation, and built-in query methods** to interact with NoSQL databases more efficiently.

##### **Example ODM: Mongoose (for MongoDB)**

- Mongoose ensures that data follows a structure (schema) even though MongoDB itself is schema-less.
- It offers built-in validation, middleware, and hooks for better data management.

#### **What is ORM (Object-Relational Mapping)?**

- ORM is used for **SQL databases** (e.g., MySQL, PostgreSQL) to map **JavaScript objects** to **tables and rows** in a relational database.
- It provides an **abstraction layer** over SQL queries, allowing developers to work with objects instead of writing raw SQL.
- ORMs handle **relationships (one-to-one, one-to-many), transactions, and migrations** automatically.

##### **Example ORM: Sequelize (for MySQL & PostgreSQL)**

- Sequelize allows developers to interact with SQL databases using JavaScript methods instead of writing complex SQL queries.

#### **Which One Is Used for MongoDB – Node.js Connection?**

- **ODM (Mongoose) is used to connect MongoDB with Node.js** because MongoDB is a NoSQL database.
- **MongoDB Driver (low-level)** can also be used, but Mongoose simplifies interactions by providing an abstraction layer.
- **ORMs like Sequelize are NOT used for MongoDB** since they are meant for SQL databases.

---

### **1.3 Other Tasks Performed by These Drivers Apart from Connecting to the Database**

- Define schemas to enforce structure when adding data to the database.
- Perform data validation and apply constraints while inserting data.
- Simplify querying with CRUD operations, supporting almost all query functions needed for daily tasks.
- Manage data relationships (if required).
- Provide hooks and middleware for custom logic (e.g., performing automated tasks before or after CRUD operations).
- Handle secure connections using environment variables.
- Support indexing and optimization (to improve query speed and efficiency).

### **1.4 Real-World Analogy: Schema Design & UPI Banking System**

Imagine a **Unified Payments Interface (UPI)** system that allows seamless transactions between different banks. No matter which bank a user belongs to—be it **SBI, HDFC, ICICI, or Axis Bank**—they can send and receive money instantly using UPI.

How is this possible? Because all banks **follow a common data structure (schema)** for transactions.

![Simple UPI](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/13ab342e-b6ef-477b-b2a7-270ce36ea7fd/fwHpvfyKaQAlWOXY.jpg)

#### **How UPI Represents Schema Design**

🔹 **Standardized Structure (Schema Definition)**

- Every bank follows a **predefined format** for storing transaction details.
- A UPI transaction always includes **Sender, Receiver, Amount, Timestamp, and UPI ID**—ensuring uniformity.

🔹 **Data Consistency & Validation**

- If a transaction is missing a **Receiver UPI ID** or has a **negative amount**, the system rejects it.
- Just like a schema enforces **validations**, UPI ensures all required fields are present.

🔹 **Interoperability & Scalability**

- A user from **SBI** can send money to **HDFC**, and another from **ICICI** can pay to **Axis Bank**.
- Because of a **well-structured schema**, all banks can seamlessly interact—just like how a well-designed database schema ensures smooth app functionality.

🔹 **Security & Optimization**

- The UPI system ensures **secure transactions** with OTPs and PIN validation.
- Similarly, schema design allows **data encryption, indexing, and role-based access** to optimize performance.

#### **What If There Was No Schema?**

- If each bank had its own transaction format, they **wouldn’t be able to communicate** with other banks.
- Users would **only be able to send money within their own bank** instead of across banks.
- It would cause **data mismatches, errors, and failed transactions**.

Just like a **well-structured UPI system enables seamless transactions across banks**, a **well-designed schema** ensures smooth, secure, and efficient app operations.

**Scene 2.0**

### **2.1 Which driver is used to connect mongo-nodejs**

we can use Mongoose to connect MongoDB and NodeJS, even mongodb has its own driver called as `mongodb`, but `mongoose` has more advantages, but `mongoose` is better compared to mongo-db driver, the following are the diffrences between them.

### **Advanatges of Mongoose over MongoDB native driver**

#### MongoDB - Driver

- Low-level API: The MongoDB driver is the official, low-level driver provided by MongoDB. It provides the basic functionalities to interact with MongoDB, such as querying the database, inserting documents, updating, and deleting.

- No Schema or Validation: It doesn't enforce any schema or data structure. You are responsible for ensuring that your data is structured correctly when interacting with MongoDB.

- Flexibility: It gives you full control over how you interact with MongoDB and how you structure your queries and data.

- Direct Database Interaction: It communicates directly with the database using MongoDB's native API, which means you have to manually manage things like validation, transformations, and more.

#### Mongoose

- Higher-level Abstraction: Mongoose is an Object Data Modeling (ODM) library for MongoDB. It abstracts the low-level interactions and provides a higher-level API for managing MongoDB documents in the form of JavaScript objects.

- Schemas and Models: It allows you to define a schema for your data, which includes data types, validation rules, default values, and other constraints. This helps structure your data and ensures that it adheres to the defined schema.

- Please Note: Why schemas are used for No-SQL??, it should be flexible right??, yes, NOSQL is flexible, but it is minimum requirement of basic structure to be defined or else it tough to run/manage the system.

- Built-in Validation and Middleware: Mongoose provides built-in validation for data and supports middlewares (e.g., pre-save hooks, validation hooks) to automate processes like data validation, transformations, and other operations.

- Convenient Methods: It adds several helper methods (e.g., save(), find(), update()) on models and documents that make interacting with the database easier and more intuitive.

### 2.2 **Installing and Using Mongoose**

![mongoose](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/a5b77151-bcfe-43da-b5fe-31d258376550/SzzoqjhaKFlWeEUh.png)

#### **Install Mongoose**

To use Mongoose in a Node.js project, install it via npm:

```sh
npm install mongoose
```

#### **Import Mongoose**

In your Node.js file, import Mongoose:

```js
const mongoose = require("mongoose");
```

#### **Connect to MongoDB**

Establish a connection to the MongoDB database:

```js
mongoose.connect("mongodb://localhost:27017/myDatabase");
```

- Now connection is established, to interact with database, we need to create schemas and connect with model,

#### **Schema**

- A **constructor function** in Mongoose that defines the structure and rules for documents in a collection.
- Specifies **data types, validations, default values, and behaviors** to ensure consistency.

#### **Create Schema**

```js
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});
```

### **Model**

- A **wrapper around the schema** that provides an interface to interact with the database, by specifying Collection Name and Schema used for the collection
- Used to perform **CRUD operations** on documents while enforcing schema rules.

#### **Create a Model**

A model is a wrapper for interacting with the database:

```js
const User = mongoose.model("User", userSchema);
```

**Schema defines structure** but **Model is used to interact with MongoDB**  
**Please Note:**
**Schema** is like an ice-cream mould—it defines the shape of the ice cream but does not create it. **Model**, on the other hand, is like a refrigerator box, which creates and stores the ice cream using the mould.

So, just like we deal with the refrigerator to create and consume ice creams, in Mongoose, we work with the Model to perform CRUD operations on data in the database.

![Schema - model](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/51795afd-42a6-4d08-95b2-1a00f141dd1f/rfyzRu33IBhvQOiH.png)

#### **Perform CRUD Operations**

- **Create a new document**
  ```js
  const newUser = new User({
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  });
  newUser
    .save()
    .then(() => console.log("User saved"))
    .catch((err) => console.log(err));
  ```
- **Read data from DB**

  ```js
  User.find().then((users) => console.log(users));
  ```

- **Update a document**

  ```js
  User.updateOne({ name: "Alice" }, { age: 26 }).then(() =>
    console.log("Updated")
  );
  ```

- **Delete a document**
  ```js
  User.deleteOne({ name: "Alice" }).then(() => console.log("Deleted"));
  ```

### 3.0 **CRUD Operations Using Mongoose - Schema & Model in an Express App**

#### **3.1 Export a Typical Model & Perform CRUD Operations**

**Create a Model (`models/User.js`)**

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
```

**Set Up Express & Routes (`server.js`)**

```js
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/myDatabase");

// CREATE (Add a new user)
app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

// READ (Get all users)
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// UPDATE (Modify user by ID)
app.put("/users/:id", async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedUser);
});

// DELETE (Remove user by ID)
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

### **3.2 Demonstrating Mongoose Schema Behavior with Outputs**

#### **Schema Definition (`models/User.js`)**

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
```

---

#### **3.2.1 Insert All Fields Mentioned in Schema**

**Code:**

```js
const user1 = new User({ name: "Alice", age: 25, email: "alice@example.com" });
await user1.save();
console.log(user1);
```

**Output:**

```json
{
  "_id": "65c4b27c93d0a1b45e5d8a8f",
  "name": "Alice",
  "age": 25,
  "email": "alice@example.com",
  "__v": 0
}
```

**All fields are stored as per the schema.**

---

#### **3.2.2 Skip Some Fields & Add Data**

**Code:**

```js
const user2 = new User({ name: "Bob", age: 30 }); // Skipping email field
await user2.save();
console.log(user2);
```

**Output:**

```json
{
  "_id": "65c4b27c93d0a1b45e5d8a90",
  "name": "Bob",
  "age": 30,
  "__v": 0
}
```

**Email is missing, but the document is still inserted.**  
❗ If `email` was marked as `required`, this would throw an error.

---

#### **3.2.3 Add Extra Fields Not Specified in Schema**

**Code:**

```js
const user3 = new User({
  name: "Charlie",
  age: 28,
  email: "charlie@example.com",
  location: "NYC",
});
await user3.save();
console.log(user3);
```

**Output:**

```json
{
  "_id": "65c4b27c93d0a1b45e5d8a91",
  "name": "Charlie",
  "age": 28,
  "email": "charlie@example.com",
  "__v": 0
}
```

**`location: "NYC"` is ignored because it is not in the schema.**  
⚡ If we want to allow dynamic fields, we need to use `{ strict: false }` in the schema:

```js
const userSchema = new mongoose.Schema(
  { name: String, age: Number, email: String },
  { strict: false } // Allows extra fields
);
```

Now, the output would include `"location": "NYC"`.

---

### **3.3 Understanding the Default Document Structure**

Once a document is inserted, MongoDB automatically adds:

```json
{
  "_id": "65c4b27c93d0a1b45e5d8a8f",
  "name": "Alice",
  "age": 25,
  "email": "alice@example.com",
  "__v": 0
}
```

- **`_id`** – Unique identifier for each document (default by MongoDB).
- **`__v`** – Version key (used for Mongoose internal versioning).

---

### **3.4 Adding Timestamps (`createdAt`, `updatedAt`) & Its Importance**

To track when a document is created or updated:

```js
const userSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    email: String,
  },
  { timestamps: true } // Enables createdAt & updatedAt
);
```

Now, every document will have:

```json
{
  "_id": "65c4b27c93d0a1b45e5d8a8f",
  "name": "Alice",
  "age": 25,
  "email": "alice@example.com",
  "createdAt": "2025-03-26T10:00:00Z",
  "updatedAt": "2025-03-26T10:05:00Z",
  "__v": 0
}
```

**Importance of `timestamps`**

- Helps in sorting records by creation/modification time.
- Essential for analytics, logs, and tracking user activity.

---

### 3.5 **Standard Coding Practice: Storing MongoDB URL in `.env`**

#### **Why Store the MongoDB URL in `.env`?**

- **Security** – Avoid exposing credentials in the code.
- **Flexibility** – Easily change the database URL without modifying the code.
- **Environment-Specific Configurations** – Use different DBs for development, testing, and production.

---

### **Steps to Store and Use MongoDB URL from `.env`**

#### ** Install dotenv package**

```sh
npm install dotenv
```

#### **Create a `.env` file in the root directory**

```env
MONGO_URI = mongodb://localhost:27017/myDatabase
PORT = 5000
```

> 🔹 `.env` should **never** be committed to Git. Add it to `.gitignore`.

#### **Load `.env` in Your App (`server.js` or `index.js`)**

```js
require("dotenv").config(); // Load environment variables

const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI; // Access the variable from .env

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("DB Connection Error:", err));
```

> 🔹 The **`process.env`** object in Node.js allows us to access environment variables.

#### **Explain `process`**

In Node.js, **`process`** is a global object that provides information about and control over the **current running Node.js instance**. It allows access to environment variables (`process.env`), command-line arguments, system signals, and process events.

#### Updated Folder Structure for a Typical Backend Project

```
todo-app/
│── node_modules/
│── config/
│   ├── db.js                 # Database connection setup
│── controllers/
│   ├── todoController.js      # Controller for handling logic
│── models/
│   ├── todoModel.js           # Mongoose Schema and Model
│── routes/
│   ├── todoRoutes.js          # Express routes for CRUD operations
│── .env                       # Environment variables (MongoDB URI, PORT, etc.)
│── .gitignore                  # Ignore node_modules, .env, etc.
│── package.json                # Project dependencies and scripts
│── server.js                   # Entry point (sets up Express server)
```

---
