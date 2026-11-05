**Scene 2.1**
### **1. Given the following documents in a `students` collection:**

```json
{ "name": "Alice", "grade": 85, "class": "10A" }
{ "name": "Bob", "grade": 90, "class": "10A" }
{ "name": "Charlie", "grade": 78, "class": "10B" }
```

**Which aggregation pipeline will return only the `name` and `grade` fields for all students?**

A) `[ { $match: { class: "10A" } } ]`

B) `[ { $group: { _id: "$class", avg: { $avg: "$grade" } } } ]`

C) `[ { $project: { name: 1, grade: 1, _id: 0 } } ]`

D) `[ { $project: { class: 1 } } ]`

**Answer:** C) `[ { $project: { name: 1, grade: 1, _id: 0 } } ]`

