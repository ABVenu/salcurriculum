**Scene 3.1**

### **1. Given the following schema:**

```js
const taskSchema = new mongoose.Schema({
  description: String,
  completed: Boolean,
});

const userSchema = new mongoose.Schema({
  username: String,
  tasks: [taskSchema],
});
```

**Which query will return all users who have at least one task marked as completed?**

A) `User.find({ "tasks": { completed: true } })`  
B) `User.find({ "tasks.completed": true })`  
C) `User.find({ completed: true })`  
D) `User.find({ "tasks[0].completed": true })`

Answer: B) `User.find({ "tasks.completed": true })`

---

### **2. Given the following schema:**

```js
const petSchema = new mongoose.Schema({
  name: String,
  type: String,
});

const ownerSchema = new mongoose.Schema({
  name: String,
  pets: [petSchema],
});
```

**Which query returns all owners who have a pet named "Bella" and type "Dog"?**

A) `Owner.find({ "pets": { name: "Bella", type: "Dog" } })`  
B) `Owner.find({ "pets.name": "Bella", "pets.type": "Dog" })`  
C) `Owner.find({ "pets": { $elemMatch: { name: "Bella", type: "Dog" } } })`  
D) `Owner.find({ "name": "Bella", "type": "Dog" })`

Answer:C) `Owner.find({ "pets": { $elemMatch: { name: "Bella", type: "Dog" } } })`

---
