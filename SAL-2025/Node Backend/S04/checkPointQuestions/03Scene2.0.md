**Scene 2.0**
### **1. What is the main responsibility of the "Model" in the MVC architecture?**  
A) Handling user requests and responses  
B) Managing data Interactions
C) Defining application routes  
D) Rendering HTML pages  

✅ **Correct Answer:** B) Managing data Interactions
---

### **2. Where should the database file (`db.json`) be placed in the given folder structure?**  
A) Inside the `controllers` folder  
B) Inside the `models` folder  
C) In the root directory  
D) Inside the `routes` folder  

✅ **Correct Answer:** C) In the root directory  

---

### **3. Which file in the given structure is responsible for defining API endpoints and linking them to controllers?**  
A) `courseController.js`  
B) `courseModel.js`  
C) `courseRoutes.js`  
D) `index.js`  

✅ **Correct Answer:** C) `courseRoutes.js`  

---

### **4. What is the role of `controllers/courseController.js`?**  
A) It defines routes and endpoints  
B) It manages business logic and handles HTTP requests/responses  
C) It stores and retrieves data from `db.json`  
D) It initializes the Express app  

✅ **Correct Answer:** B) It manages business logic and handles HTTP requests/responses  

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
C)  All of the above  

D) None of the above  

✅ **Correct Answer:** c) All of the above  



---

