**Scene 3.1**

### **1. You're paginating blog posts with 10 posts per page. What does the following code do?**

```js
Post.find().skip(20).limit(10);
```

A) Gets the first 20 posts  
B) Gets 10 posts starting from the 21st  
C) Gets posts 1 to 10  
D) Skips the first 10 and gets 20 posts

**Correct Answer:** B) Gets 10 posts starting from the 21st

### **2. You have a `.env` file with the following line:**

```
PORT=4000
```

**Which of the following code snippets will correctly use the port in your `index.js` file?**

A) `const PORT = process.port.PORT;`

B) `const PORT = process.env.port;`

C) `require("dotenv").config(); const PORT = process.env.PORT;`

D) `const PORT = dotenv.PORT;`

**Correct Answer:** C)
