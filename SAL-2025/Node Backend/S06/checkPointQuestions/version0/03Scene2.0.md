**Scene 2.0 Mongoose**

### **1. Why do developers prefer Mongoose over the MongoDB native driver in Node.js applications?**  
A) Mongoose provides a schema-based approach, while the MongoDB native driver does not  
B) Mongoose is faster than the MongoDB native driver  
C) The MongoDB native driver does not support CRUD operations  
D) Mongoose allows direct SQL queries in MongoDB  

**Answer:** A) Mongoose provides a schema-based approach, while the MongoDB native driver does not  


### **2. In Mongoose, what is the difference between a schema and a model?**  
A) A schema defines the structure of a document, while a model interacts with the database using that schema  
B) A model defines the structure, while a schema is used only for validation  
C) A schema stores data, while a model is just a function  
D) There is no difference; both terms refer to the same concept  

**Answer:** A) A schema defines the structure of a document, while a model interacts with the database using that schema  

 

### **3. Which of the following correctly creates a Mongoose model in Node.js?**  
A) `const User = mongoose.model('User', new mongoose.Schema({ name: String, age: Number }));`  
B) `const User = mongoose.createSchema('User', { name: String, age: Number });`  
C) `const User = mongoose.useSchema('User', { name: String, age: Number });`  
D) `const User = new mongoose.Schema('User', { name: String, age: Number });`  

**Answer:** A) `const User = mongoose.model('User', new mongoose.Schema({ name: String, age: Number }));`  

 

### **4. What is the correct way to insert a document into a MongoDB collection using Mongoose?**  
A)  
```js
const newUser = new User({ name: "John", age: 25 });
await newUser.save();
```  
B)  
```js
User.insert({ name: "John", age: 25 });
```  
C)  
```js
User.createDocument({ name: "John", age: 25 });
```  
D)  
```js
User.add({ name: "John", age: 25 });
```  

**Answer:** A)  
```js
const newUser = new User({ name: "John", age: 25 });
await newUser.save();
```  

 

### **5. How do you retrieve all documents from a collection using Mongoose?**  
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
const users = User.selectAll();
```  
D)  
```js
const users = await User.findAll();
```  

**Answer:** A)  
```js
const users = await User.find();
```  

 

