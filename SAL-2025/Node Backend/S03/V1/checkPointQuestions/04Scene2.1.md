**Scene 2.1**
1. **What is the best way to find a user by ID in `db.json`?**  
   A) `db.users.find(user => user.id === id)`  
   B) `db.users.map(user => user.id === id)`  
   C) `db.users.filter(user => user.id === id)[0]`  
   D) Both A and C

**Answer:** D)

2. **If a server is temporarily unavailable due to maintenance, which HTTP status code should it return?**
   a) 403 Forbidden  
   b) 500 Internal Server Error  
   c) 503 Service Unavailable  
   d) 408 Request Timeout

**Answer:** C)

3. **Which of the following HTTP status codes indicate a **client-side error\*\*?

A) **200 OK**  
B) **301 Moved Permanently**  
C) **400 Bad Request**  
D) **500 Internal Server Error**

**Correct Answer:** 🟢 **C) 400 Bad Request**

    #### **Explanation:**
    - **200 OK** → ✅ Successful response (not an error).
    - **301 Moved Permanently** → ✅ Redirection (not an error).
    - **400 Bad Request** → ❌ *Client-side error* (the request was malformed or incorrect).
    - **500 Internal Server Error** → ❌ *Server-side error* (not a client error).
