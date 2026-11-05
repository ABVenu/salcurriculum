**Scene 3.1**

### **1. Given the following document after `$lookup`:**

```json
{
  "_id": 1,
  "item": "Pen",
  "customer": [{ "_id": 101, "name": "Alice" }]
}
```

**Which aggregation stage will flatten the `customer` array into a single embedded object?**

A)`{ $group: { _id: "$customer._id", name: { $first: "$customer.name" } } }`

B) `{ $unwind: "$customer" }`

C)`{ $project: { customer: 0 } }`

D)`{ $match: { customer: { $exists: true } } }`

**Answer:** B) `{ $unwind: "$customer" }`

---
