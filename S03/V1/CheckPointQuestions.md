#### ***Scene 1**

1. Which HTTP method is used to retrieve data from a server without modifying it?  
   a) POST  
   b) PUT  
   c) GET  
   d) DELETE  
   **Answer:** c) GET  

2. Which HTTP method is typically used to submit data to be processed by the server?  
   a) GET  
   b) POST  
   c) DELETE  
   d) HEAD  
   **Answer:** b) POST  

3. Which content type is commonly used when sending JSON data in an HTTP request?  
   a) text/plain  
   b) application/json  
   c) multipart/form-data  
   d) application/xml  
   **Answer:** b) application/json  

4. What does the `Content-Length` header indicate in an HTTP request?  
   a) The length of the response body  
   b) The length of the request URL  
   c) The length of the request body  
   d) The size of the server memory  
   **Answer:** c) The length of the request body  

5. When sending a file upload in an HTTP request, which `Content-Type` should typically be used?  
   a) application/x-www-form-urlencoded  
   b) multipart/form-data  
   c) application/json  
   d) text/html  
   **Answer:** b) multipart/form-data  

---
**Scene 2**

1. **What will be the output format of the following Express.js route?**  
   ```js
   app.get('/data', (req, res) => {  
       res.json({ status: 'success', message: 'Data retrieved' });  
   });
   ```
   a) JSON  
   b) Plain text/HTML  
   c) Both JSON and HTML  
   d) None of the above  


2. **What will be the output format of the following Express.js route?**  
   ```js
   app.get('/info', (req, res) => {  
       res.send('<h1>Server is running</h1>');  
   });
   ```
   a) JSON  
   b) Plain text/HTML  
   c) Both JSON and HTML  
   d) None of the above  

   **Answer:** b) Plain text/HTML  

3. **What will be the output format of the following Express.js route?**  
   ```js
   app.get('/message', (req, res) => {  
       res.send({ message: 'Hello, World!' });  
   });
   ```
   a) JSON  
   b) Plain text/HTML  
   c) Both of the above (depends on client interpretation)  
   d) None of the above  

   **Answer:** c) Both of the above (depends on client interpretation)  


4. **What is the correct way to access route parameters in an Express.js request?**  
   a) `req.body`  
   b) `req.query`  
   c) `req.params`  
   d) `req.headers`  
   **Answer:** c) `req.params`  

5. **If a server is temporarily unavailable due to maintenance, which HTTP status code should it return?**
   a) 403 Forbidden  
   b) 500 Internal Server Error  
   c) 503 Service Unavailable  
   d) 408 Request Timeout  

**Answer:** C) 503 Service Unavailable  

6. **Which HTTP status code indicates that the request was successful?**
   A) 200 OK  
   B) 301 Moved Permanently  
   C) 404 Not Found  
   D) 500 Internal Server Error  

   **Answer:** A) 200 OK  
---

**Scene 3**

1. **Which built-in module is used to read and write `db.json` in Express?**  
A) `fs`  
B) `http`  
C) `path`  
D) `express-fileupload`  

 **Answer:** A) 

2. **How do you read `db.json` data in Express.js?**  
A) `fs.readFileSync("db.json")`  
B) `fs.readFile("db.json", (err, data) => {})`  
C) `require("./db.json")`  
D) All of the above  

 **Answer:** D) 

3. **How do you add a new user to `db.json` in Express?**  
A) `fs.appendFileSync("db.json", newUser)`  
B) `db.users.push(newUser); fs.writeFileSync("db.json", JSON.stringify(db))`  
C) `fs.addFileSync("db.json", JSON.stringify(newUser))`  
D) `db.users = db.users + newUser; fs.saveFile("db.json", db)`  

 **Answer:** B) 

4. **What is the best way to find a user by ID in `db.json`?**  
A) `db.users.find(user => user.id === id)`  
B) `db.users.map(user => user.id === id)`  
C) `db.users.filter(user => user.id === id)[0]`  
D) Both A and C  

 **Answer:** D)

5. **Which status code should be returned when a requested user is not found in `db.json`?**  
A) 200  
B) 201  
C) 404  
D) 500  

 **Answer:** C) 

---
**Scene 4**
 

1. **What is the correct way to access route parameters in an Express.js request?**  
   a) `req.body`  
   b) `req.query`  
   c) `req.params`  
   d) `req.headers`  
   **Answer:** c) 

2. **If a user with ID 5 exists, how would you delete them from `db.json` using params?**  
   A) `DELETE /users/5`  
   B) `REMOVE /users/5`  
   C) `DEL /users?id=5`  
   D) `DELETE /users?id=5`  
   **Answer:** A) 


3. **Which of the following is the correct way to extract a query parameter in an Express route handler, for `/names/:id -> /names/10`?**  
   A) `req.params.id`  
   B) `req.query.id`  
   C) `req.body.id`  
   D) `req.param.id`  
**Answer:** A) 

4. **Which of the following is the correct way to extract a query parameter in an Express route handler, for `/users?name=Alice`?**  
A) `req.params.id`  
B) `req.query.id`  
C) `req.body.id`  
D) `req.query.name`  
**Answer:** D) 

5. **How can you access custom headers sent in an HTTP request in an Express.js route?**  
   a) `req.query`  
   b) `req.params`  
   c) `req.headers`  
   d) `req.body`  
   **Answer:** c) 
---

