**Scene 3.1**

### **1. How do you retrieve all documents from a MongoDB collection using Mongoose?**

A)

```js
const users = await User.find();
```

B)

```js
const users = User.getAll();
```

C)

```js
const users = User.fetch();
```

D)

```js
const users = User.findAll();
```

**Answer:** A)

```js
const users = await User.find();
```

---

### **2. What is the correct way to delete a document using Mongoose?**

A)

```js
await User.deleteOne({ name: "Alice" });
```

B)

```js
User.drop({ name: "Alice" });
```

C)

```js
User.removeOne({ name: "Alice" });
```

D)

```js
User.erase({ name: "Alice" });
```

**Answer:** A)

```js
await User.deleteOne({ name: "Alice" });
```

---
