**Scene 1.0**

### **1. In an Express.js project, where should business logic typically be placed to keep the code modular?**  
A) Inside `server.js`  
B) Inside `routes/` folder  
C) Inside `controllers/` folder  
D) Inside `views/` folder  

**✅ Correct Answer:** C) Inside `controllers/` folder  

**📝 Explanation:** Controllers handle business logic, while `server.js` is mainly for initializing the app and defining middlewares.  

---

### **2. If a project uses `db.json` to store data, how can we read the file synchronously in Node.js?**  
A) `fs.readFileSync("db.json", "utf-8")`  
B) `fs.readFile("db.json", "utf-8")`  
C) `fs.getFile("db.json")`  
D) `db.json.readFile()`  

**✅ Correct Answer:** A) `fs.readFileSync("db.json", "utf-8")`  

**📝 Explanation:** `fs.readFileSync` is used for synchronous file reading, which returns the file content as a string.  

---

### **3. What is the correct way to define a route in Express.js that uses a controller function?**  
A) `app.use('/books', getBooks())`  
B) `app.get('/books', getBooks)`  
C) `app.get('/books', getBooks())`  
D) `app.get('/books', () => getBooks)`  

**✅ Correct Answer:** B) `app.get('/books', getBooks)`  

**📝 Explanation:** The controller function is **passed as a reference** (without parentheses), so Express can call it when the route is hit.  

---

### **4. In an Express.js project with MVC structure, which folder should handle database interactions?**  
A) `routes/`  
B) `models/`  
C) `controllers/`  
D) `views/`  

**✅ Correct Answer:** B) `models/`  

**📝 Explanation:** The **models** folder is responsible for handling data-related operations, even if the database is `db.json`.  

---

### **5. What is the correct way to extract a **path parameter** from the route `/books/:id` in Express.js?**  
A) `req.query.id`  
B) `req.params.id`  
C) `req.body.id`  
D) `req.route.id`  

**✅ Correct Answer:** B) `req.params.id`  

**📝 Explanation:** Path parameters are extracted using `req.params.<parameter_name>`.  

---

### **6. What is the correct way to extract a **query parameter** from the URL `/books?author=Paulo`?**  
A) `req.params.author`  
B) `req.query.author`  
C) `req.body.author`  
D) `req.get('author')`  

**✅ Correct Answer:** B) `req.query.author`  

**📝 Explanation:** Query parameters are extracted using `req.query.<parameter_name>`.  

---

### **7. If a client sends a request to delete a book that does not exist, what is the correct HTTP status code to return?**  
A) `400 Bad Request`  
B) `401 Unauthorized`  
C) `404 Not Found`  
D) `409 Conflict`  

**✅ Correct Answer:** C) `404 Not Found`  

**📝 Explanation:** When a requested resource is not available, the proper response is **404 Not Found**.  

---

### **8. What is the correct status code for a successful `POST` request when a new book is created?**  
A) `200 OK`  
B) `201 Created`  
C) `204 No Content`  
D) `409 Conflict`  

**✅ Correct Answer:** B) `201 Created`  

**📝 Explanation:** `201 Created` indicates that a new resource was successfully created.  

---

