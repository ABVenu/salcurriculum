**Scene 2.0**

### **1. What is the primary purpose of a server in web development?**  
A) To store only frontend files  
B) To process client requests and send responses  
C) To generate frontend UI  
D) To run JavaScript code in the browser  

**Correct Answer:** **B** (To process client requests and send responses)  



### **2. In Express.js, what method is used to define a GET route?**  
A) `app.get()`  
B) `app.post()`  
C) `app.route()`  
D) `app.fetch()`  

**Correct Answer:** **A** (`app.get()`)  


3. ### **Which of the following best describes the difference between a URL and a specific URL?**  

A) A **URL** is a general format for accessing resources, while a **specific URL** points to an exact resource or endpoint.  

B) A **URL** is only used in frontend development, while a **specific URL** is used in backend APIs.  

C) A **URL** is the domain name, and a **specific URL** is only used for dynamic routes.  

D) A **URL** is only used for GET requests, while a **specific URL** can handle all HTTP methods.  

**Correct Answer:** **A**  
**Explanation:** A **URL** (Uniform Resource Locator) is a general format that defines web addresses (e.g., `https://example.com/api/users`), while a **specific URL** refers to a fully defined address pointing to a particular resource (e.g., `https://example.com/api/users/123`).  



4. ### **What is the difference between an endpoint and a route in an Express.js server?**  

A) A route is the full URL, and an endpoint is only the base domain  
B) A route is a specific **endpoint + HTTP method**, while an endpoint is a specific URL that responds to a request  
C) There is no difference; both terms mean the same thing  
D) An endpoint is only for GET requests, while a route can handle all HTTP methods  

✅ **Correct Answer:** **B**  
📝 **Explanation:**  
- A **route** in Express.js is defined by a **specific HTTP method (GET, POST, etc.) and an endpoint** (e.g., `app.get('/users')`).  
- An **endpoint** is just the **URL path** where the server listens for requests (e.g., `/users`).  


5. ### **What does the following Express route do?**  
```js
app.post('/login', (req, res) => {
    res.send('Login successful');
});
```
A) Defines a route that handles GET requests at `/login`  
B) Defines a route that handles POST requests at `/login`  
C) Defines a global middleware for authentication  
D) Sends an automatic response to all routes  

**Correct Answer:** **B** (Defines a route that handles POST requests at `/login`)  

