**Scene 3.0**


### **What is the purpose of token blacklisting in authentication systems?**

A) To compress the JWT for faster transmission
B) To keep track of users who have changed their email
C) To invalidate tokens before their expiration time (e.g., password reset or after logout)
D) To avoid using HTTPS for token transmission

**Answer:** C) To invalidate tokens before their expiration time (e.g., password reset or after logout)

### **What should an authentication middleware do to handle blacklisted tokens stored in MongoDB?**

A) Check if the token has expired based on JWT payload only
B) Ignore token validation and trust the frontend
C) Query the blacklist collection in MongoDB to see if the token exists, and reject it if found
D) Save the token again in MongoDB for safety

**Answer:** C) Query the blacklist collection in MongoDB to see if the token exists, and reject it if found







