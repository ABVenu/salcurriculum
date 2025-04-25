**Scene 3.0 Mongoose CRUD**

### **1. What is the correct way to connect MongoDB using Mongoose in a Node.js application?**

A)

```js
mongoose.connect("mongodb://localhost:27017/myDB");
```

B)

```js
mongoose.link("mongodb://localhost:27017/myDB");
```

C)

```js
mongoose.use("mongodb://localhost:27017/myDB");
```

D)

```js
mongoose.start("mongodb://localhost:27017/myDB");
```

**Answer:** A)

```js
mongoose.connect("mongodb://localhost:27017/myDB");
```

---

### **2. How do you check if the Mongoose connection is successful?**

A)

```js
mongoose.connection.on("connected", () => console.log("Connected to MongoDB"));
```

B)

```js
mongoose.on("connect", () => console.log("Connected to MongoDB"));
```

C)

```js
mongoose.success(() => console.log("Connected to MongoDB"));
```

D)

```js
mongoose.connectStatus(() => console.log("Connected to MongoDB"));
```

**Answer:** A)

```js
mongoose.connection.on("connected", () => console.log("Connected to MongoDB"));
```

---

### **3. What is the correct way to insert a new document into a collection using Mongoose?**

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

**Answer:** A)

```js
const user = new User({ name: "Alice", age: 28 });
await user.save();
```

---

