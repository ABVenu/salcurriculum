### **Mongoose Aggregations: Pipelines for Advanced Data Insights**

---

### **Learning Objectives**

- Understand the need for aggregations in MongoDB
- Differentiate between standard queries and aggregation pipelines
- Learn the working mechanism of pipelines with simple examples
- Perform common single-collection aggregations
- Perform multi-collection aggregations using stages like `$lookup`

---

## **Scenes**

### **1.0 Need Of Aggregations**

- **1.1** - A real-world example where simple queries fall short (e.g., grouping totals, filtering after grouping)
- **1.2** - Establish the need for something beyond queries — **enter Aggregations**
- **1.3** - Difference between standard query vs. aggregation pipeline (use-cases, performance, flexibility)
- **1.4** - Introduction to basic aggregation & the idea of **stages** in a **pipeline**

---

### **2.0 Typical Aggregations for Single Collection**

- **2.1** - Exploring `$group` – aggregate data (e.g., total amount per user)
- **2.2** - Exploring `$match` – filtering data before/after grouping
- **2.3** - Exploring `$project` – shaping the output, selecting fields
  - **2.3.1** - Explaining `"$FieldName"` why `$` and `""` used for FieldName

---

### **3.0 Typical Aggregations for Multi-Collection**

- **3.1** - Exploring `$lookup` – join-like functionality (e.g., user with their orders)
- **3.2** - Exploring `$unwind` – flattening arrays from `$lookup` results
- **3.3** - Brief overview of other stages: `$facet`, `$bucket`, `$cond`, etc. – advanced use-cases

---

## Pitfalls

**1.0**

- Understaning aggregation, pipleine structure
- Understanding how query differs from aggregation

**2.0**

- Which method/pipeline to be used.
- when to use `$` for fieldName, when not to use

**3.0**

- Working with Multi Collection

## Content/Pedagagoy

---

# **Scene 1.0 — Introduction to Aggregation**

---

### Start with a Problem Statement:

### Scenario 1:

Imagine you have a **`orders`** collection:

```json
[
  { "item": "apple", "quantity": 5 },
  { "item": "banana", "quantity": 10 },
  { "item": "apple", "quantity": 8 },
  { "item": "orange", "quantity": 15 }
]
```

---

### Problem:

> **Find the total quantity ordered _item-wise_.**

---

### Can we solve this with Normal Query?

- We can `find` all apples:
  ```js
  db.orders.find({ item: "apple" });
  ```
- We can manually add `5 + 8 = 13`.

But...

- Again, we have to do **manual calculation** for every item.
- What if there are **100 different items**?
- What if **items keep changing daily**?

### Scenario 2

**Write a query to find the count of students _state-wise_.**"

---

### Ask the audience:

- How can we solve this?
- Should we write **one query for each state**?  
  (e.g., `find({ state: 'Delhi' }).count()`, `find({ state: 'Maharashtra' }).count()`, and so on?)

**That’s 30+ queries** for 30 states!

- **But wait —** what if we **don't even know** in advance what the states are?  
  (Maybe the states are dynamic — users can come from anywhere.)

- Can normal `find()` queries help us here?

**No, traditional queries will not solve this efficiently.**

---

### Then build the realization:

We **don't just want to find documents** —  
We want to **analyze, group, and compute** something from the documents.

---

### **1.2** Establishing the Need for Something Beyond Simple Queries — **Enter Aggregations**

- Traditional queries are primarily used to retrieve documents based on known field values. They are effective when you know _what_ you're looking for — for example, fetching a user by their ID or listing all products within a certain price range.
- However, the kind of data analysis described earlier isn't about retrieving documents — it's about deriving insights _from_ the data. In these cases:

  - We don't just need documents; we need processed, summarized, or calculated information.
  - Often, we don't even know the exact values in advance — we need the database to _analyze_ and _compute_ the results for us.

- **This is where MongoDB's powerful feature called `Aggregations` comes into play.**

- **Aggregation** refers to the process of performing a series of operations on the data to transform and compute results. Think of it as building a data processing pipeline.

---

### **1.3** - Difference between standard query vs. aggregation pipeline (use-cases, performance, flexibility)

- **Queries** are used for simple document retrieval based on known conditions, whereas **aggregations** are used for **data analysis**.  
   The analysis can be **simple** or **multi-level** — for example:
  - First, fetch relevant data,
  - Then perform calculations or transformations on it,
  - Then apply further operations on the intermediate results, and so on.  
    Aggregation allows chaining multiple operations step-by-step to achieve complex analytical outcomes.

| Aspect          | Standard Query                               | Aggregation Pipeline                                    |
| --------------- | -------------------------------------------- | ------------------------------------------------------- |
| **Purpose**     | Retrieve documents based on known conditions | Analyze, transform, and compute over data               |
| **Use-Cases**   | Find, filter, sort documents                 | Grouping, calculating averages/sums, restructuring data |
| **Flexibility** | Limited to direct field matching             | Highly flexible with multiple transformation stages     |
| **Performance** | Fast for simple lookups                      | Slightly heavier, optimized for complex processing      |
| **Output**      | Full documents or projections                | Custom-structured data (even entirely new fields)       |

- **Example of Standard Query**:

  ```js
  db.orders.find({ status: "delivered" });
  ```

  → Returns all documents where `status` is `"delivered"`.

- **Example of Aggregation**:
  ```js
  db.orders.aggregate([
    { $match: { status: "delivered" } },
    { $group: { _id: "$customerId", totalSpent: { $sum: "$amount" } } },
  ]);
  ```
  → Returns total amount spent by each customer who had delivered orders.

---

### **1.4** Introduction to Basic Aggregation & the Concept of **Stages** in a Pipeline

- Aggregation pipelines are made up of **multiple stages**, each responsible for a particular transformation or calculation.
- Each stage takes in data, processes it, and passes it to the next stage — much like a real-world conveyor belt (refer to the factory assembly line analogy above).

- **Basic Structure**:
  ```js
  db.collection.aggregate([
    { $stage1: {...} },
    { $stage2: {...} },
    ...
  ])
  ```
- In MongoDB, these series of data transformations are structured as **pipelines**, where each stage performs a specific operation on the data and passes the results to the next stage.

### **2.0 Typical Aggregations for Single Collection**

When aggregating data from a single MongoDB collection, the following common **aggregation stages** are frequently used:

| Stage          | Purpose                                                                             |
| :------------- | :---------------------------------------------------------------------------------- |
| **$match**     | Filters documents based on conditions (works like a query filter).                  |
| **$group**     | Groups documents by a field and performs calculations (sum, average, count, etc.).  |
| **$project**   | Selects specific fields or reshapes documents. Can also create new computed fields. |
| **$sort**      | Sorts documents based on one or more fields.                                        |
| **$limit**     | Limits the number of documents passed to the next stage.                            |
| **$skip**      | Skips a specified number of documents (useful for pagination).                      |
| **$count**     | Quickly counts the number of documents passing through the pipeline.                |
| **$addFields** | Adds new fields to documents without replacing the original fields.                 |
| **$unset**     | Removes one or more fields from documents.                                          |

> 🔥 **Note:** Aggregation can be as simple as just filtering, or as complex as multi-level grouping, reshaping, and calculating new fields!

---

# 🗂️ **Collection We'll Use: `orders`**

📦 **Sample Data:**

```javascript
[
  { orderId: 1, customerName: "Alice", amount: 120, status: "delivered" },
  { orderId: 2, customerName: "Bob", amount: 80, status: "pending" },
  { orderId: 3, customerName: "Charlie", amount: 200, status: "delivered" },
  { orderId: 4, customerName: "Alice", amount: 150, status: "cancelled" },
  { orderId: 5, customerName: "David", amount: 300, status: "delivered" },
  { orderId: 6, customerName: "Bob", amount: 50, status: "delivered" },
  { orderId: 7, customerName: "Charlie", amount: 70, status: "pending" },
  { orderId: 8, customerName: "Eve", amount: 400, status: "delivered" },
  { orderId: 9, customerName: "David", amount: 90, status: "pending" },
  { orderId: 10, customerName: "Alice", amount: 60, status: "delivered" },
  { orderId: 11, customerName: "Frank", amount: 500, status: "delivered" },
];
```

---

# ### **2.1 Exploring `$group` – Aggregate Data**

### 📌 Example 1: Total amount spent by each customer

```javascript
db.orders.aggregate([
  {
    $group: {
      _id: "$customerName",
      totalAmount: { $sum: "$amount" },
    },
  },
]);
```

---

### 📌 Example 2: Total number of orders per customer

```javascript
db.orders.aggregate([
  {
    $group: {
      _id: "$customerName",
      numberOfOrders: { $sum: 1 },
    },
  },
]);
```

---

# ### **2.2 Exploring `$match` – Filter Data**

### 📌 Example 1: Find all delivered orders

```javascript
db.orders.aggregate([{ $match: { status: "delivered" } }]);
```

---

### 📌 Example 2: Find orders with amount greater than 100

```javascript
db.orders.aggregate([{ $match: { amount: { $gt: 100 } } }]);
```

---

# ### **2.3 Exploring `$project` – Shaping the Output**

### 📌 Example 1: Show only customer name and amount

```javascript
db.orders.aggregate([
  {
    $project: {
      _id: 0,
      customerName: 1,
      amount: 1,
    },
  },
]);
```

---

### 📌 Example 2: Create a new field "isHighValue" based on amount

```javascript
db.orders.aggregate([
  {
    $project: {
      customerName: 1,
      amount: 1,
      isHighValue: { $gt: ["$amount", 200] },
    },
  },
]);
```

---

# ### **Combining `$match`, `$group`, and `$project`**

### 📌 Example: Find total amount spent by each customer, only for delivered orders, and project output neatly

```javascript
db.orders.aggregate([
  { $match: { status: "delivered" } },
  {
    $group: {
      _id: "$customerName",
      totalSpent: { $sum: "$amount" },
    },
  },
  {
    $project: {
      _id: 0,
      customerName: "$_id",
      totalSpent: 1,
    },
  },
]);
```

---

# ### 📌 Example: Using `$$ROOT`

**Scenario:**  
From above example, we can see, no documents are given as result, What if we want to group all orders by `status`, but instead of creating your own new structure, you want to **keep entire original document** inside the grouping result.

**Query:**

```javascript
db.orders.aggregate([
  {
    $group: {
      _id: "$status",
      orders: { $push: "$$ROOT" },
    },
  },
]);
```

---

# 📖 **Explanation:**

- `$group` normally collects _specific fields_.
- `$$ROOT` refers to the **entire original document**.
- Here, for each `status`, we **push the full order documents** into an array called `orders`.

---

# ✨ **Key Points about `$$ROOT`:**

- `$$ROOT` means "**the current full document**" inside the aggregation stage.
- It is useful when:
  - You need the _entire document_ inside a `$group`, `$push`, etc.
  - You want to **clone full documents** into arrays or sub-documents.
- Without `$$ROOT`, you would have to manually specify every field.

---

---

# 📘 **Why `$` is needed for Field Names?**

When writing aggregation queries, MongoDB needs a way to **know the difference** between a **normal value** (like a string or number) and a **field value** from the document.  
To do this, we use a `$` symbol before a field name.  
The `$` tells MongoDB,

> "Hey! Don’t treat this as a simple text — go **fetch the value** from the document's field."

Without the `$`, MongoDB would think you're just giving some plain text and not a dynamic value from your data.  
So, whenever you want to **use the value of a field** inside stages like `$project`, `$group`, `$match`, etc., you must put a `$` before the field name.

✅ **Remember:** `$fieldName` = value inside the document, `"fieldName"` = just text.

---

#### **Simple Example**

Imagine you have a document like:

```javascript
{
  name: "Alice",
  age: 25
}
```

### ❌ Wrong way (No `$`):

```javascript
$project: {
  userName: "name"; // MongoDB will just assign the word "name", not Alice.
}
```

### ✅ Correct way (With `$`):

```javascript
$project: {
  userName: "$name"; // MongoDB picks the value from the 'name' field => "Alice"
}
```

---

# ✍️ **Quick Tip**

- **Use `$`** when you want the **value** of the field.
- **Don't use `$`** if you just want a **plain string**.

---

### **3.0 Typical Aggregations for Multi-Collection**

### 1. `$lookup` — Joining Collections

- **Purpose**: `$lookup` allows you to perform an SQL-like join operation between two collections.
- **How it Works**: It matches documents from the "local" collection to documents from the "foreign" collection based on a specified field and combines matching documents into an array.
- **Key Parameters**:
  - `from`: The collection to join.
  - `localField`: Field from the local collection.
  - `foreignField`: Field from the foreign collection.
  - `as`: Name of the output array field.

### 2. `$unwind` — Flattening Arrays

- **Purpose**: `$unwind` is used to deconstruct an array field from the input documents to output a document for each element.
- **How it Works**: Each element of the array becomes its own document, allowing you to perform aggregation operations on each item individually.
- **Use Case**: Useful after `$lookup` when you want to work with individual items instead of arrays.

### 3. Other Useful Stages Overview

- `$facet`: Run multiple aggregation pipelines in parallel and combine the results.
- `$bucket`: Group documents into ranges based on a field value.
- `$cond`: Perform conditional operations like if-else logic within the aggregation pipeline.

---

## 🗃️ Insert Sample Data

### 👤 `users` Collection

```js
db.users.insertMany([
  { _id: 1, name: "Alice", age: 28 },
  { _id: 2, name: "Bob", age: 32 },
  { _id: 3, name: "Charlie", age: 25 },
]);
```

### 📦 `orders` Collection

```js
db.orders.insertMany([
  { _id: 101, item: "Laptop", price: 1200, userId: 1 },
  { _id: 102, item: "Mouse", price: 25, userId: 1 },
  { _id: 103, item: "Keyboard", price: 75, userId: 2 },
  { _id: 104, item: "Monitor", price: 300, userId: 2 },
  { _id: 105, item: "USB Cable", price: 10, userId: 3 },
]);
```

---

## 🔍 Queries

### 🔗 **1. `$lookup` – Get all orders per user**

```js
db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "orders",
    },
  },
]);
```

📘 **Result:** Each user now has an `orders` array containing their purchases.

---

### 🔗 **2. `$lookup` with `$project` – Show user name and order count**

```js
db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "orders",
    },
  },
  {
    $project: {
      name: 1,
      totalOrders: { $size: "$orders" },
    },
  },
]);
```

---

### 🧨 **3. `$unwind` – Flatten orders per user**

```js
db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "orders",
    },
  },
  { $unwind: "$orders" },
  {
    $project: {
      name: 1,
      itemPurchased: "$orders.item",
      amount: "$orders.price",
    },
  },
]);
```

📘 Each user-order becomes its own document.

---

### 🧩 **4. Combined: `$lookup` + `$unwind` + `$group` – Total spend per user**

```js
db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "orders",
    },
  },
  { $unwind: "$orders" },
  {
    $group: {
      _id: "$name",
      totalSpent: { $sum: "$orders.price" },
    },
  },
]);
```

📘 Final output: Name and total money spent.

---

## ⚙️ **3.3 Brief Overview of Other Useful Stages**

### 📚 `$facet` – Run multiple pipelines in one go

```js
db.orders.aggregate([
  {
    $facet: {
      totalOrders: [{ $count: "count" }],
      highValueOrders: [{ $match: { price: { $gt: 100 } } }],
    },
  },
]);
```

---

### 🎯 `$bucket` – Group orders by price range

```js
db.orders.aggregate([
  {
    $bucket: {
      groupBy: "$price",
      boundaries: [0, 100, 500, 1500],
      default: "Other",
      output: {
        count: { $sum: 1 },
        items: { $push: "$item" },
      },
    },
  },
]);
```

---

### 🔀 `$cond` – Conditional logic (e.g., discount flag)

```js
db.orders.aggregate([
  {
    $project: {
      item: 1,
      price: 1,
      isDiscounted: {
        $cond: {
          if: { $lt: ["$price", 50] },
          then: true,
          else: false,
        },
      },
    },
  },
]);
```
