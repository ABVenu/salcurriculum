**Scene 2.0**

### **1. Given the following documents in a `sales` collection:**

```json
{ "region": "North", "amount": 100 }
{ "region": "South", "amount": 150 }
{ "region": "North", "amount": 200 }
```

**Which aggregation pipeline will return the total sales amount per region?**

A) `[ { $match: { region: "North" } }, { $sum: "$amount" } ]`

B) `[ { $group: { _id: "$region", total: { $sum: "$amount" } } } ]`

C) `[ { $project: { region: 1, amount: 1 } } ]`

D) `[ { $group: { _id: null, total: "$amount" } } ]`

**Answer:** B) `[ { $group: { _id: "$region", total: { $sum: "$amount" } } } ]`

---

### **2. Given the following documents in a `products` collection:**

```json
{ "name": "Laptop", "category": "Electronics", "price": 1200 }
{ "name": "Shirt", "category": "Apparel", "price": 40 }
{ "name": "Phone", "category": "Electronics", "price": 800 }
```

**Which aggregation pipeline will return only the products in the "Electronics" category?**

A) `[ { $match: { category: "Electronics" } } ]`

B) `[ { $group: { _id: "$category" } } ]`

C) `[ { $project: { name: 1, category: 1 } } ]`

D) `[ { $match: { price: { $gt: 1000 } } } ]`


**Answer:** A) `[ { $match: { category: "Electronics" } } ]`

---


