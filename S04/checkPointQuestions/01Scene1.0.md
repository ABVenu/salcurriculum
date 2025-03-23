**Scene 1.0**
### **1. Why is `Express.Router()` used in an Express application?**  
A) To modularize routes and keep code organized  
B) To replace middleware functions like `express.json()`  
C) To make API requests faster  
D) To automatically generate routes  

✅ **Correct Answer:** A) To modularize routes and keep code organized  

---

### **2. How do you define an Express router in a separate file?**  

```javascript
const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.json({ msg: "User list" });
});

module.exports = router;
```

How should this be used in `index.js`?  

A) `app.use("/", router);`  
B) `app.use("/api", require("./routes/userRoutes"));`  
C) `router.use("/api", require("./routes/userRoutes"));`  
D) `app.get("/api", router);`  

✅ **Correct Answer:** B) `app.use("/api", require("./routes/userRoutes"));`  

---

### **3. What will be the correct URL to access the "users" route in the following setup?**  

```javascript
app.use("/api", require("./routes/userRoutes"));
```

A) `/users`  
B) `/api/users`  
C) `/api`  
D) `/userRoutes/users`  

✅ **Correct Answer:** B) `/api/users`  

---

### **4. Which of the following is the correct way to define multiple routes using `Express.Router()`?**  

A)  
```javascript
const router = express.Router();
router.get("/courses", (req, res) => res.send("Courses List"));
router.post("/add", (req, res) => res.send("Add Course"));
module.exports = router;
```
B)  
```javascript
const router = express.Router();
router.use("/courses", (req, res) => res.send("Courses List"));
router.post("/add", (req, res) => res.send("Add Course"));
module.exports = router;
```
C)  
```javascript
const router = express.Router();
router.get("/courses", (req, res) => res.send("Courses List"));
router.post("/add", (req, res) => res.send("Add Course"));
app.use(router);
module.exports = router;
```
D) None of the above  

✅ **Correct Answer:** A) The correct way is to define multiple routes using `router.get()` and `router.post()`, then export the `router`.  

---

### **5. How do you handle an undefined route properly in Express?**  

A)  
```javascript
app.use("*", (req, res) => {
  res.status(404).json({ msg: "Route not found" });
});
```
B)  
```javascript
app.use((req, res) => {
  res.status(404).json({ msg: "Route not found" });
});
```
C)  
```javascript
app.get("*", (req, res) => {
  res.status(404).json({ msg: "Route not found" });
});
```
D) All of the above  

✅ **Correct Answer:** D) All of the above  

(Explanation: `app.use("*", ...)` and `app.get("*", ...)` work, but `app.use((req, res) => { ... })` is the most flexible since it handles all HTTP methods.)  

---


