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

4. **How can you access custom headers sent in an HTTP request in an Express.js route?**  
   a) `req.query`  
   b) `req.params`  
   c) `req.headers`  
   d) `req.body`  
   **Answer:** c) `req.headers`  

5. **What is the correct way to access route parameters in an Express.js request?**  
   a) `req.body`  
   b) `req.query`  
   c) `req.params`  
   d) `req.headers`  
   **Answer:** c) `req.params`  



---

**Scene 3**

### 1. Which HTTP status code indicates that the request was successful?  
A) 200 OK  
B) 301 Moved Permanently  
C) 404 Not Found  
D) 500 Internal Server Error  

**Answer:** A) 200 OK  

---  
### 2. What does the HTTP status code **404** signify?  
A) The request was successful  
B) The requested resource was not found  
C) The request requires authentication  
D) The server is overloaded  

**Answer:** B) The requested resource was not found  

---  
### 3. Which HTTP status code is used for **permanent redirection**?  
A) 302 Found  
B) 301 Moved Permanently  
C) 403 Forbidden  
D) 500 Internal Server Error  

**Answer:** B) 301 Moved Permanently  

---  
### 4. If a server is temporarily unavailable due to maintenance, which HTTP status code should it return?  
A) 403 Forbidden  
B) 500 Internal Server Error  
C) 503 Service Unavailable  
D) 408 Request Timeout  

**Answer:** C) 503 Service Unavailable  

---  
### 5. What does the HTTP status code **401 Unauthorized** indicate?  
A) The client must authenticate itself to get the requested response  
B) The client is forbidden from accessing the resource  
C) The server encountered an unexpected error  
D) The resource has been permanently removed  

**Answer:** A) The client must authenticate itself to get the requested response 

---
**Scene 4**

### 1. What is the primary purpose of **Routes** in a Node.js project?  
A) Defining how requests are handled and mapping them to controllers  
B) Managing and storing data in the database  
C) Controlling the flow of authentication and authorization  
D) Handling UI-related tasks in a web application  

**Answer:** A) **Defining how requests are handled and mapping them to controllers**  



### 2. What is the main role of the **Controller** in an MVC-based project?  
A) Managing the database and defining schemas  
B) Handling business logic and interacting with models  
C) Defining the structure of API routes  
D) Serving static frontend files  

**Answer:** B) **Handling business logic and interacting with models**  