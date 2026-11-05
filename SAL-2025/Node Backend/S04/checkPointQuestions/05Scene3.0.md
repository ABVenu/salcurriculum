***Scene 3.0**
### **1. Why are middlewares used in Express?**  
A) To handle and modify request and response objects before reaching the final route handler  
B) To replace routes in Express  
C) To improve database performance  
D) To automatically generate routes  

✅ **Correct Answer:** A) To handle and modify request and response objects before reaching the final route handler  

---

### **2. Which of the following is an example of an application-level middleware?**  

A)  
```javascript
app.use((req, res, next) => {
  console.log("Request received");
  next();
});
```
B)  
```javascript
router.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});
```
C)  
```javascript
app.get("/", (req, res) => {
  res.send("Hello World");
});
```
D)  
```javascript
const express = require("express");
const app = express();
```

✅ **Correct Answer:** A) The `app.use()` function applies middleware at the **application level**, meaning it will execute for all requests.  

---

### **3. How do you apply middleware at the router level?**  

A)  
```javascript
router.use((req, res, next) => {
  console.log("Middleware for this router");
  next();
});
```
B)  
```javascript
app.use((req, res, next) => {
  console.log("Middleware for this router");
  next();
});
```
C)  
```javascript
router.get("/", (req, res, next) => {
  res.send("Middleware applied");
});
```
D)  
```javascript
app.get("/", (req, res) => {
  res.send("Middleware applied");
});
```

✅ **Correct Answer:** A) The `router.use()` function applies middleware **only to a specific router**, meaning it will execute for all routes within that router.  

---

### **4. Which of the following is NOT an example of built-in middleware in Express?**  

A) `express.json()`  
B) `express.urlencoded({ extended: true })`  
C) `express.static("public")`  
D) `express.logger()`  

✅ **Correct Answer:** D) `express.logger()` does not exist in Express. The correct external middleware for logging is `morgan`.  

---

### **5. Which middleware can be used to serve static files like images, CSS, and JavaScript?**  

A) `express.json()`  
B) `express.static("public")`  
C) `bodyParser.urlencoded({ extended: true })`  
D) `cors()`  

✅ **Correct Answer:** B) `express.static("public")` is used to serve static files like images, stylesheets, and scripts.  

---

