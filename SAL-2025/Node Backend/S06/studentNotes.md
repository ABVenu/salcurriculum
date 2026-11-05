# Mongoose: Connecting MongoDB and Node.js
### [Live Coding Notes](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/f2b90e71-c70d-4ac8-8074-4b58c06e9e6b/wmL0pUtaPuGRRWbi.zip)

## 📝 Session Learning Objectives

By the end of this session, students should be able to:

- Recall the basics of MongoDB, especially document structure and CRUD.
- Understand the role of database drivers and why Mongoose is preferred.
- Distinguish between MongoDB, drivers, and Mongoose (ODM).
- Install and connect Mongoose to a Node.js project.
- Define and use Schema and Models in Mongoose.
- Perform CRUD operations using Mongoose.
- Apply schema validations in Mongoose.

---

## 1️⃣ MongoDB Recap

MongoDB is a **NoSQL document-based database** that stores data in flexible, JSON-like documents (BSON).
Core MongoDB concepts:

- **Documents** are like JS objects:

  ```js
  {
    _id: ObjectId("..."),
    name: "Alice",
    age: 25,
    email: "alice@example.com"
  }
  ```

- **Collections** are groups of related documents (like SQL tables).
- CRUD operations:

  - `insertOne`, `find`, `updateOne`, `deleteOne`

- Flexible schema: Not enforced by default, allows fast prototyping.

---

## 2️⃣ Need for Drivers and ORMs/ODMs

### 2.1 The Driver Concept

- Node.js cannot talk directly to MongoDB — it needs a **driver** (like a translator).
- MongoDB Node.js Driver (`mongodb` package) lets us connect and perform operations in native JavaScript.

### 2.2 Pain Points with the Raw Driver

While powerful, the raw driver is verbose and lacks:

- Schema validation
- Middleware/hooks
- Relationship modeling
- Cleaner abstractions

---

## 3️⃣ Introduction to Mongoose: A MongoDB ODM

### 3.1 What is Mongoose?

- Mongoose is an **ODM (Object Data Modeling)** library for MongoDB and Node.js.
- It helps define schemas, create models, and interact with MongoDB more intuitively.

### 3.2 Analogy

> Think of **UPI Apps** as Mongoose and **Bank Server** as MongoDB.
> You don’t go to the bank for every small task; instead, use an app with defined formats and security.

![Simple UPI](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/13ab342e-b6ef-477b-b2a7-270ce36ea7fd/fwHpvfyKaQAlWOXY.jpg)

---

## 4️⃣ Installation and Project Setup

### 4.1 Install Mongoose

```bash
npm install mongoose
```

### 4.2 Setup Connection

In `index.js`:

```js
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/myapp")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));
```

---

## 5️⃣ Schema and Model

### 5.1 Schema

Defines the **shape and rules** for a document in a collection.

📌 Analogy: Like an **ice cream mould** — decides the shape (fields), not the content (values).

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  age: Number,
  isActive: { type: Boolean, default: true },
});
```

---

### 5.2 Model

A **model** is a wrapper over the schema used to perform CRUD on the collection.

📌 Analogy: If the schema is the mold, the model is the **refrigerator** where finished ice creams (documents) are stored and retrieved.

![Schema - model](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/51795afd-42a6-4d08-95b2-1a00f141dd1f/rfyzRu33IBhvQOiH.png)

```js
const User = mongoose.model("User", userSchema);
```

---

## 6️⃣ CRUD Operations with Mongoose

### 6.1 Create

```js
const user = new User({ name: "Bob", email: "bob@gmail.com" });
await user.save();
```

or using `create()`:

```js
await User.create({ name: "Alice", email: "alice@gmail.com" });
```

### 6.2 Read

```js
const users = await User.find(); // all
const user = await User.findById("id"); // by ID
```

### 6.3 Update

```js
await User.findByIdAndUpdate(id, { age: 30 }, { new: true });
```

### 6.4 Delete

```js
await User.findByIdAndDelete(id);
```

---

## 💡 Bonus: Schema Validations

```js
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
  },
});
```

---

## ✅ Final Conclusion

- MongoDB stores data in flexible JSON-like documents called BSON.
- Native MongoDB driver allows interaction but is verbose and lacks abstractions.
- Mongoose is an ODM that simplifies working with MongoDB using schemas and models.
- Schemas define structure and rules; models are used for executing DB operations.
- CRUD operations in Mongoose are simpler and more readable.
- Built-in schema validation makes data integrity easier to maintain.

---
