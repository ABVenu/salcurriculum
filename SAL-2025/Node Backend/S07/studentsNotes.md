# **S07: Advanced Mongoose – Complex Schemas, Validations & Queries**

### [Live Coding Notes](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/d1b0d25b-4ef9-4313-978d-1ab84bfea9f0/xtTeaJZNRgCIbdQw.zip)

---

## Learning Objectives

By the end of this session, you’ll be able to:

- Understand the **need for schema validations** in Mongoose.
- Apply **built-in and custom validations** within your schemas.
- Design and differentiate between **Nested Documents**, **Subdocuments**, and **Referenced Documents**.
- Use **complex queries** with MongoDB operators (`$gte`, `$in`, `$or`, etc.).
- Utilize **cursor methods** like `.limit()` and `.skip()` for pagination and filtering.

---

## Scene 1: Schema Validations in Mongoose

### 🔍 1.1 Why Are Validations Needed?

Mongoose allows us to define schemas (data structures), but how do we ensure the data being entered is **valid and meaningful**?

- Doing manual checks is possible but inefficient.
- Mongoose provides built-in **schema-level validation** to reject invalid or malformed data **before it gets saved**.

### 🧪 1.2 Common Schema Validations (with examples)

| Validator     | Description                                               | Example                                     |
| ------------- | --------------------------------------------------------- | ------------------------------------------- |
| `required`    | Ensures field must be provided                            | `required: true`                            |
| `default`     | Provides a fallback if value not supplied                 | `default: 'Anonymous'`                      |
| `type`        | Enforces the expected data type                           | `type: String`                              |
| `enum`        | Limits field to certain allowed values                    | `enum: ['male', 'female']`                  |
| `min` / `max` | Sets numeric or date boundaries                           | `min: 18`, `max: 60`                        |
| `match`       | Regex pattern matching (e.g. for emails, usernames)       | `match: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/`   |
| `unique`      | Ensures values are not duplicated in the collection       | `unique: true`                              |
| `trim`        | Trims whitespace from string                              | `trim: true`                                |
| `lowercase`   | Converts input to lowercase before storing                | `lowercase: true`                           |
| `validate`    | Custom validation logic                                   | `validate: { validator: fn, message: msg }` |
| `immutable`   | Prevents field from being changed after document creation | `immutable: true`                           |

### 💡 Example Schema with Validations

```js
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  age: {
    type: Number,
    min: 18,
    max: 65,
    default: 18,
  },
  gender: {
    type: String,
    enum: ["male", "female", "non-binary"],
    default: "non-binary",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  preferences: {
    theme: {
      type: String,
      enum: ["dark", "light"],
      default: "light",
    },
  },
  customField: {
    type: String,
    validate: {
      validator: (v) => v !== "forbidden",
      message: 'CustomField cannot be "forbidden"',
    },
  },
});
```

---

## 🎯 Scene 2: Complex Schemas in Mongoose

### 🧠 2.1 Why Do We Need Complex Schemas?

In real-world applications, data isn't flat or standalone.

Example: In a **Course** document for an LMS, we may have:

- An array of **lectures**
- An array of **students**
- **Assignments**, **instructors**, and more

These require **complex nested structures** — either embedded inside the document or referenced externally.

---

### 🔀 2.2 Types of Complex Schemas

#### 📘 A. Nested Documents

- Objects or arrays **directly embedded** within the main schema.
- Best when data is **tightly coupled** and doesn’t need to exist separately.

**Example:**

```js
const courseSchema = new mongoose.Schema({
  title: String,
  lectures: [
    {
      title: String,
      startDateTime: Date,
      endDateTime: Date,
    },
  ],
});
```

#### 📘 B. Subdocuments (Embedded Schemas)

- Defined using separate **Mongoose Schemas** and embedded into another schema.
- Adds structure, reusability, and internal `_id` fields.

**Example:**

```js
const lectureSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
});

const courseSchema = new mongoose.Schema({
  title: String,
  lectures: [lectureSchema],
});
```

> 🎯 **Key Difference**: Subdocuments use `new Schema()` and are better structured; Nested documents are plain objects.

#### 📘 C. Referenced Documents

- Instead of embedding full data, we only store an **ObjectId reference** to another document in a different collection.
- Used when data is **large**, **shared**, or **independent**.

**Example:**

```js
const courseSchema = new mongoose.Schema({
  title: String,
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Instructor",
  },
});
```

---

### ✅ Comparison Table

| Type             | Tightly Coupled | Has `_id`? | Reusable | Best Use Case                                   |
| ---------------- | --------------- | ---------- | -------- | ----------------------------------------------- |
| Nested Documents | ✅ Yes          | ❌ No      | ❌ No    | Small, non-reusable, tightly coupled data       |
| Subdocuments     | ✅ Yes          | ✅ Yes     | ✅ Yes   | Structured, reusable, moderate-sized data       |
| Referenced Docs  | ❌ No           | ✅ Yes     | ✅ Yes   | Large, shared, loosely-coupled independent data |

---

## 🎯 Scene 3: Mongoose Beyond CRUD

### 🚀 3.1 Life Without Inbuilt Queries

Writing custom filters for every condition is hard.

That’s why Mongoose (and MongoDB) offers **powerful query operators**.

### 🔎 3.2 Common MongoDB Query Operators

| Operator | Purpose                                 | Example Usage                                          |
| -------- | --------------------------------------- | ------------------------------------------------------ |
| `$eq`    | Equal to                                | `{ age: { $eq: 18 } }`                                 |
| `$ne`    | Not equal to                            | `{ age: { $ne: 18 } }`                                 |
| `$gt`    | Greater than                            | `{ age: { $gt: 30 } }`                                 |
| `$gte`   | Greater than or equal to                | `{ age: { $gte: 18 } }`                                |
| `$lt`    | Less than                               | `{ age: { $lt: 65 } }`                                 |
| `$lte`   | Less than or equal to                   | `{ age: { $lte: 60 } }`                                |
| `$in`    | Value exists in array                   | `{ gender: { $in: ['male', 'female'] } }`              |
| `$and`   | Combine multiple query conditions       | `{ $and: [{ age: { $gt: 18 } }, { isActive: true }] }` |
| `$or`    | Match if at least one condition is true | `{ $or: [{ age: { $lt: 18 } }, { isActive: false }] }` |

### 🔁 3.3 Cursor Methods

Useful for **pagination**, **filtering**, and **performance optimization**.

| Method     | Description                       | Example                     |
| ---------- | --------------------------------- | --------------------------- |
| `.skip()`  | Skips a certain number of results | `.find().skip(10)`          |
| `.limit()` | Limits the number of results      | `.find().limit(5)`          |
| `.sort()`  | Sorts results by a field          | `.find().sort({ age: -1 })` |

---

## ⚠️ Pitfalls to Avoid

### Schema Validation

- Don’t forget that `unique` is **not a validator**, it's a **MongoDB index**.
- Use **custom validators** for complex logic.
- Remember `match` uses regex — always test your pattern.

### Complex Schemas

- Know the difference between **nested objects** vs **subdocuments**.
- Subdocuments get their own `_id`, which might confuse you initially.
- Use references when data is reused across collections.

### Advanced Queries

- Many students stop at `.find()`. Explore MongoDB operators!
- Practice combining operators (`$and`, `$in`, `$or`) in one query.
- Don’t forget `.limit()` and `.skip()` — they’re crucial for pagination.

---

## 🧠 Interview Prep Tips

- What’s the difference between nested and embedded documents?
- How do you perform pagination in MongoDB?
- How is a subdocument different from a referenced document?
- Can we create custom validation in Mongoose? How?

---

### **Conclusion: Key Takeaways**

- **Schema validations** in Mongoose ensure only clean, reliable, and expected data is stored in MongoDB.
- Mongoose supports a variety of **built-in validators** like `required`, `enum`, `min/max`, and `match`, plus **custom validators** for complex needs.
- **Nested documents**, **subdocuments**, and **referenced documents** help model complex data based on how tightly the data is coupled.
- Subdocuments are structured and reusable, while references are ideal for large, shared, or loosely related data.
- MongoDB provides **powerful query operators** (`$gte`, `$in`, `$or`, etc.) for flexible and dynamic data filtering.
- Cursor methods like `.skip()`, `.limit()`, and `.sort()` are essential for building **paginated** or **sorted** API responses.
- A solid understanding of these concepts enhances both **backend performance** and **data modeling accuracy**.
