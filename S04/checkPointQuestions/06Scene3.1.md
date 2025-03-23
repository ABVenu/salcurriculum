**Scene 3.1**

### **1. What is the purpose of built-in middleware like express.json()?**

A) It is used to parse incoming JSON request bodies
B) It serves static files in Express
C) It logs incoming requests
D) It enables routing
✅ **Correct Answer:** A) It is used to parse incoming JSON request bodies

---

### **2. What happens if a middleware does NOT call `next()`?**

A) The request will move to the next middleware normally  
B) The request will be stuck and never reach the next middleware or route  
C) The request will be automatically terminated with a `500` error  
D) Express will retry the request

✅ **Correct Answer:** B) The request will be stuck and never reach the next middleware or route, resulting in a **hanging request**.

---

### **3. How do you create a custom middleware that logs the request method and URL?**

A)

```javascript
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
```

B)

```javascript
app.use(() => {
  console.log(`${req.method} ${req.url}`);
});
```

C)

```javascript
app.get((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
```

D)

```javascript
app.use(req, res, (next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
```

✅ **Correct Answer:** A) The correct way is to use `app.use((req, res, next) => { ... next(); })`.
