**Scene 1.0**
1. **Which HTTP method is used to retrieve data from a server without modifying it?**
   a) POST  
   b) PUT  
   c) GET  
   d) DELETE  
   **Answer:** c)

2. **What will be the output format of the following Express.js route?**

   ```js
   app.get("/info", (req, res) => {
     res.send("<h1>Server is running</h1>");
   });
   ```

   a) JSON  
   b) Plain text/HTML  
   c) Both JSON and HTML  
   d) None of the above

   **Answer:** b)

3. **What will be the output format of the following Express.js route?**

   ```js
   app.get("/message", (req, res) => {
     res.send({ message: "Hello, World!" });
   });
   ```

   a) JSON  
   b) Plain text/HTML  
   c) Both of the above (depends on client interpretation)  
   d) None of the above

   **Answer:** c)

4. **What is the purpose of `express.json()` in an Express application?**

   A) It serves static files like HTML and CSS.  
   B) It parses incoming JSON payloads and makes them available in `req.body`.  
   C) It handles URL-encoded data submitted via forms.  
   D) It manages session storage for authentication.
   **Answer:** B)

5. **What is the primary purpose of HTTP status codes in an API response?**

   A) To display error messages to the user on the frontend.  
   B) To provide a standardized way for clients to understand the result of their request.  
   C) To format the JSON response correctly.  
   D) To increase the speed of the API response.

   **Answer:** B)
