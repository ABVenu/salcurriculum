**Scene 3.0**

### **1. What does the `.skip()` method in a Mongoose query do?**

A) Skips validation  
B) Skips over the first N documents in the result  
C) Skips the current schema field  
D) Skips the middleware functions

**Correct Answer:** B) Skips over the first N documents in the result

### **2. Which of the following query correctly fetches the **latest 5 users** from the database using Mongoose?**

```js
User.find();
```

A) `.sort({ createdAt: 1 }).limit(5)`

B) `.sort({ createdAt: -1 }).limit(5)`

C) `.limit(5).skip(5)`

D) `.find().sort('createdAt')`

**Correct Answer:** B) `.sort({ createdAt: -1 }).limit(5)`

### **3. Why is it recommended to store the MongoDB URI and port number in a `.env` file instead of directly in your code?**

A) To enable auto-scaling  
B) To make the app look cleaner  
C) To separate configuration and avoid exposing sensitive data  
D) To speed up the application runtime

**Correct Answer:** C) To separate configuration and avoid exposing sensitive data
