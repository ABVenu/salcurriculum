**Scene 3.0**


### **1. Given two collections:**

**`orders` collection:**

```json
{ "_id": 1, "item": "Pen", "customerId": 101 }
{ "_id": 2, "item": "Notebook", "customerId": 102 }
```

**`customers` collection:**

```json
{ "_id": 101, "name": "Alice" }
{ "_id": 102, "name": "Bob" }
```

**Which aggregation stage will join the `customers` data with the `orders` collection based on `customerId`?**

A)`[ { $lookup: { from: "customers", localField: "_id", foreignField: "customerId", as: "customer" } } ]`


B)`[ { $lookup: { from: "customers", localField: "customerId", foreignField: "_id", as: "customer" } } ]`

C) `[ { $match: { item: "Pen" } } ]`


D) `[ { $group: { _id: "$customerId" } } ]`


**Answer:** B) `[ { $lookup: { from: "customers", localField: "customerId", foreignField: "_id", as: "customer" } } ]`

---

### **2. After applying a `$lookup` stage, each document includes an array field `customer`. To flatten this array into individual objects, which stage should be used?**

A) `$project`
B) `$group`
C) `$unwind`
D) `$merge`

**Answer:** C) `$unwind`

---

