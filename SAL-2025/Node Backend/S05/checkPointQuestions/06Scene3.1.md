### **Scene-3.1 -MongoDB Queries**

#### **1. How do you insert multiple documents into a collection at once?**

A) `db.students.insertMany([{ name: "Alice" }, { name: "Bob" }]);`
B) `db.students.insertAll([{ name: "Alice" }, { name: "Bob" }]);`  
C) `db.students.insert([{ name: "Alice" }, { name: "Bob" }]);`  
D) `db.students.insertBatch([{ name: "Alice" }, { name: "Bob" }]);`
**Answer:** A) `db.students.insertMany([{ name: "Alice" }, { name: "Bob" }]);`

#### **2. How do you retrieve documents from the MongoDB "Users" collection whose name is "Alice"?**

A) `db.Users.find({ name: "alice" })`  
B) `db.Users.findAll({ name: "alice" })`  
C) `db.Users.get({ name: "alice" })`  
D) `db.Users.select({ name: "alice" })`

**Answer:** A) `db.Users.find({ name: "alice" })`

#### **3. How can you view all documents in a MongoDB collection?**

A) `SHOW ALL FROM students;`  
B) `db.students.find();`
C) `db.students.getAll();`  
D) `db.students.selectAll();`

**Answer:** B) `db.students.find();`
