**Scene 3.0 Mongoose CRUD**

### **1. What is the correct way to connect MongoDB using Mongoose in a Node.js application?**

A) `mongoose.connect("mongodb://localhost:27017/myDB");`


B) `mongoose.link("mongodb://localhost:27017/myDB");`


C) `mongoose.use("mongodb://localhost:27017/myDB");`


D) `mongoose.start("mongodb://localhost:27017/myDB");`


Answer: A)`mongoose.connect("mongodb://localhost:27017/myDB");`

---


### **2. What is the correct way to insert a new document into a collection using Mongoose?**

A)

```js
const user = new User({ name: "Alice", age: 28 });
await user.save();
```

B)

```js
User.insertOne({ name: "Alice", age: 28 });
```

C)

```js
User.addNew({ name: "Alice", age: 28 });
```

D)

```js
User.put({ name: "Alice", age: 28 });
```

Answer: A)

```js
const user = new User({ name: "Alice", age: 28 });
await user.save();
```

---

