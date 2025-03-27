### **3.2 Demonstrating Mongoose Schema Behavior with Outputs**  

#### **Schema Definition (`models/User.js`)**
```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
```

---

### **3.2.1 Insert All Fields Mentioned in Schema**  
#### **Code:**
```js
const user1 = new User({ name: "Alice", age: 25, email: "alice@example.com" });
await user1.save();
console.log(user1);
```

#### **Output:**
```json
{
  "_id": "65c4b27c93d0a1b45e5d8a8f",
  "name": "Alice",
  "age": 25,
  "email": "alice@example.com",
  "__v": 0
}
```
✅ **All fields are stored as per the schema.**  

---

### **3.2.2 Skip Some Fields & Add Data**  
#### **Code:**
```js
const user2 = new User({ name: "Bob", age: 30 }); // Skipping email field
await user2.save();
console.log(user2);
```

#### **Output:**
```json
{
  "_id": "65c4b27c93d0a1b45e5d8a90",
  "name": "Bob",
  "age": 30,
  "__v": 0
}
```
✅ **Email is missing, but the document is still inserted.**  
❗ If `email` was marked as `required`, this would throw an error.

---

### **3.2.3 Add Extra Fields Not Specified in Schema**  
#### **Code:**
```js
const user3 = new User({ name: "Charlie", age: 28, email: "charlie@example.com", location: "NYC" });
await user3.save();
console.log(user3);
```

#### **Output:**
```json
{
  "_id": "65c4b27c93d0a1b45e5d8a91",
  "name": "Charlie",
  "age": 28,
  "email": "charlie@example.com",
  "__v": 0
}
```
❌ **`location: "NYC"` is ignored because it is not in the schema.**  
⚡ If we want to allow dynamic fields, we need to use `{ strict: false }` in the schema:  
```js
const userSchema = new mongoose.Schema(
  { name: String, age: Number, email: String },
  { strict: false }  // Allows extra fields
);
```
Now, the output would include `"location": "NYC"`.

---

### **Key Takeaways:**
1️⃣ **Mongoose enforces schema structure**—only defined fields are stored.  
2️⃣ **Missing fields do not prevent insertion** (unless `required: true`).  
3️⃣ **Extra fields are ignored by default** unless `strict: false` is set.  

🚀 This **flexibility** of Mongoose can be a **merit** (structured data) or a **demerit** (unexpected omissions), depending on the use case.