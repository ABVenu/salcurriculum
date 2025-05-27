## Student Notes

# **S10: Mongoose Aggregations – Pipelines for Advanced Data Insights**

---

## 🏁 **Learning Objectives**

By the end of this session, you should be able to:

- Understand when and why to use aggregation instead of queries.
- Differentiate between simple queries and multi-stage aggregation pipelines.
- Build basic to intermediate aggregation pipelines using `$group`, `$match`, `$project`, and others.
- Work with multi-collection aggregations using `$lookup` and `$unwind`.
- Avoid common mistakes and confidently shape data using Mongoose aggregation methods.

---

## 🎬 **Scene 1.0 – The Need for Aggregation**

### 🤔 Problem Setup:

Let’s say you have the following `orders` collection:

```json
[
  { "item": "apple", "quantity": 5 },
  { "item": "banana", "quantity": 10 },
  { "item": "apple", "quantity": 8 },
  { "item": "orange", "quantity": 15 }
]
```

Now, try answering:

> What is the total quantity ordered per item?

A normal query like:

```js
db.orders.find({ item: "apple" });
```

…only gives documents, not totals. You’d still have to manually add `5 + 8`.

🔴 **Problem:**

- Manual effort is needed.
- Not scalable when there are 100s of dynamic items.

🟢 **Solution: Aggregation!**
Let the database group and calculate results _for_ you.

---

## 🆚 Query vs Aggregation – What's the Difference?

| Feature              | Query (`find`)                | Aggregation (`aggregate`)                          |
| -------------------- | ----------------------------- | -------------------------------------------------- |
| Purpose              | Retrieve matching documents   | Transform, compute, and analyze documents          |
| Output               | Full or partial documents     | Custom result structures                           |
| Flexibility          | Limited (filter/sort/project) | Very flexible (grouping, joining, reshaping, etc.) |
| Performance (simple) | Fast                          | Slightly heavier (optimized for processing)        |
| Use-Cases            | Search/filter                 | Analytics, reporting, grouping, restructuring      |

---

## 🔁 What is an Aggregation Pipeline?

An **aggregation pipeline** is a sequence of **stages** through which the data flows and gets transformed step-by-step.

> Analogy: Like a factory assembly line — each stage performs one operation and hands off to the next.

```js
db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $group: { _id: "$customerName", total: { $sum: "$amount" } } },
]);
```

![Aggregation Pipeline Flow](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/1ab4093e-b142-44a4-a223-eeeae453861e/WntdLOhRzXKjkTkn.png)

---

## 🔧 **Scene 2.0 – Common Stages for Single Collection**

### 📦 Sample Data: `orders`

```js
[
  { orderId: 1, customerName: "Alice", amount: 120, status: "delivered" },
  { orderId: 2, customerName: "Bob", amount: 80, status: "pending" },
  { orderId: 3, customerName: "Charlie", amount: 200, status: "delivered" },
  { orderId: 4, customerName: "Alice", amount: 150, status: "cancelled" },
  ...
]
```

---

### 📌 `$group` – Grouping and Aggregation

📝 **Example: Total amount per customer**

```js
db.orders.aggregate([
  { $group: { _id: "$customerName", totalAmount: { $sum: "$amount" } } },
]);
```

➡️ Output:

```json
[
  { "_id": "Alice", "totalAmount": 330 },
  { "_id": "Bob", "totalAmount": 130 },
  ...
]
```

---

### 📌 `$match` – Filtering Documents

📝 **Example: Only delivered orders**

```js
{
  $match: {
    status: "delivered";
  }
}
```

✅ Can be used **before or after** `$group`.

---

### 📌 `$project` – Selecting and Reshaping Fields

📝 **Example: Include only `customerName` and `amount`**

```js
{ $project: { customerName: 1, amount: 1, _id: 0 } }
```

---

🧠 **Why `$FieldName` inside quotes?**

- MongoDB requires fields inside aggregation expressions to be prefixed with `$`.
- Quotes are used to avoid parsing conflicts or for dynamic field access.

```js
{
  $sum: "$amount";
} // correct
```

---

### Other Common Stages

| Stage        | Purpose                           |
| ------------ | --------------------------------- |
| `$sort`      | Sort the result                   |
| `$limit`     | Limit number of documents         |
| `$skip`      | Skip N documents (for pagination) |
| `$count`     | Count number of documents         |
| `$addFields` | Add calculated fields             |
| `$unset`     | Remove specific fields            |

---

## 🔗 **Scene 3.0 – Aggregating Across Multiple Collections**

### 🧩 `$lookup` – Joining Two Collections

📝 **Use Case: Get user info with their orders**

**Collections:**

- `users` with fields `{ _id, name }`
- `orders` with field `userId`

```js
db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "userOrders",
    },
  },
]);
```

➡️ Joins `orders` to `users` where `_id === userId`

---

### 🪄 `$unwind` – Flattening Array Fields

**When to use:**
After `$lookup`, the joined data (`userOrders`) is an **array**.
To work on each order individually, **flatten it**.

```js
{
  $unwind: "$userOrders";
}
```

---

### 💡 Other Interesting Stages

| Stage     | Use Case                                                             |
| --------- | -------------------------------------------------------------------- |
| `$facet`  | Run multiple pipelines in parallel and combine results               |
| `$bucket` | Group documents into dynamic ranges (like age groups, price buckets) |
| `$cond`   | Conditional logic (if/else) inside aggregation                       |

---

## ⚠️ **Pitfalls & Gotchas**

### ❌ Confusing Aggregation with Query

- Aggregation returns **processed data**, not raw documents.
- Fields must be accessed using `$` (e.g., `"$amount"` not just `amount`).

### ❌ Not Using Correct Stage Order

- `$match` before `$group` for filtering (better performance)
- `$project` to clean up result structure (can be used before/after grouping)

### ❌ Forgetting `$unwind` After `$lookup`

- If you want to group or filter nested results, `$unwind` is often necessary.

---

## 📌 Summary Cheatsheet

| Stage        | Summary                                    |
| ------------ | ------------------------------------------ |
| `$match`     | Filter documents like `.find()`            |
| `$group`     | Group by field and perform aggregation     |
| `$project`   | Select and shape fields                    |
| `$lookup`    | Perform join-like operations               |
| `$unwind`    | Deconstruct arrays to individual documents |
| `$sort`      | Sort documents                             |
| `$limit`     | Return N documents                         |
| `$addFields` | Add computed or new fields                 |

---

## 🧪 Interviewer Observations

- **Do they know why aggregation is needed over queries?**
- **Do they understand `$group`, `$match`, `$lookup` clearly?**
- **Can they explain the pipeline flow?**
- **Do they understand `$unwind` necessity after `$lookup`?**

---

## 📝 Notes for Practice

- ✅ Try building a pipeline that:

  - Filters delivered orders
  - Groups by customer
  - Calculates total amount
  - Projects name and total

- ✅ Join `users` and `orders`, and find total amount per user.
- ✅ Use `$facet` to get two results: top 3 customers and bottom 3 customers.

---
