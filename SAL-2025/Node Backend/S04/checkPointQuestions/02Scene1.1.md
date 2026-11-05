**Scene 1.1**

### **1. What will be the output of the following request?**

```javascript
// routes/userRoutes.js
const express = require("express");
const router = express.Router();

router.get("/profile", (req, res) => {
  res.json({ msg: "User profile" });
});

module.exports = router;
```

If this router is used like this:

```javascript
app.use("/users", require("./routes/userRoutes"));
```

And we send a request to `/profile`, what will happen?

A) `{ msg: "User profile" }`  
B) `Cannot GET /profile`  
C) `{ msg: "Route not found" }`  
D) Server will crash

✅ **Correct Answer:** B) `Cannot GET /profile`

(Explanation: Since `router.get("/profile")` is used inside `app.use("/users", ...)`, the correct request URL should be **`/users/profile`**, not `/profile`.)

---

### **2. What is the best way to separate routes from `index.js`?**

A) Keeping all routes inside `index.js` for better readability  
B) Using `Express.Router()` and defining separate route files  
C) Adding routes inside `config.js`  
D) Manually writing functions for each request in `index.js`

✅ **Correct Answer:** B) Using `Express.Router()` and defining separate route files

---
