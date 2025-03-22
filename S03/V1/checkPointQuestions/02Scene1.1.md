**Scene 1.1**

1. **What does the `Content-Length` header indicate in an HTTP request?** 
   a) The length of the response body  
   b) The length of the request URL  
   c) The length of the request body  
   d) The size of the server memory  
   **Answer:** c)


2. **Which content type is commonly used when sending JSON data in an HTTP request?**
   a) text/plain  
   b) application/json  
   c) multipart/form-data  
   d) application/xml  
   **Answer:** b) 

3. **What will be the output format of the following Express.js route?**

   ```js
   app.get("/data", (req, res) => {
     res.json({ status: "success", message: "Data retrieved" });
   });
   ```

   a) JSON  
   b) Plain text/HTML  
   c) Both JSON and HTML  
   d) None of the above
   **Answer:** a)