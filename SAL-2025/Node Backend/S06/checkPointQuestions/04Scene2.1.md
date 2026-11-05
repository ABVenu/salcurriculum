**Scene 2.1**

 

### **1. How do you update a document using Mongoose?**  
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

Answer: A)  
```js
await User.updateOne({ name: "John" }, { age: 30 });
```  

 

