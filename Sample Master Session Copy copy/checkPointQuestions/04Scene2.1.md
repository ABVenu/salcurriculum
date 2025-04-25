**Scene 2.1**

### **1. What is the primary role of a schema in Mongoose?**  
A) To define the structure and validation rules for documents in a MongoDB collection  
B) To store raw JSON data without any restrictions  
C) To replace the need for indexes in MongoDB  
D) To automatically create collections without defining models  

**Answer:** A) To define the structure and validation rules for documents in a MongoDB collection  

### **2. How do you update a document using Mongoose?**  
A)  
```js
await User.updateOne({ name: "John" }, { age: 30 });
```  
B)  
```js
User.change({ name: "John" }, { age: 30 });
```  
C)  
```js
User.modify({ name: "John" }, { age: 30 });
```  
D)  
```js
await User.updateData({ name: "John" }, { age: 30 });
```  

**Answer:** A)  
```js
await User.updateOne({ name: "John" }, { age: 30 });
```  

 

### **3. How do you delete a document using Mongoose?**  
A)  
```js
await User.deleteOne({ name: "John" });
```  
B)  
```js
User.remove({ name: "John" });
```  
C)  
```js
User.drop({ name: "John" });
```  
D)  
```js
await User.erase({ name: "John" });
```  

**Answer:** A)  
```js
await User.deleteOne({ name: "John" });
```  

---

