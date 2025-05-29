**Scene 3.0**


### **What is the main purpose of token blacklisting in a JWT-based authentication system?**

A) To permanently store expired tokens for future reference
B) To allow users to change roles without logging out
C) To prevent reuse of tokens after logout or manual revocation
D) To store tokens for offline access

**Answer:** C) To prevent reuse of tokens after logout or manual revocation

---

### **Where are blacklisted tokens typically stored in a production-ready application?**

A) In the frontend local storage
B) In a flat file or `.env` file
C) In a fast-access store like Redis or an in-memory store
D) Directly inside the JWT payload

**Answer:** C) In a fast-access store like Redis or an in-memory store

---

### **Which of the following is a potential downside of not implementing token blacklisting in a JWT system?**

A) User sessions will expire too quickly
B) Revoked or logged-out tokens can still be used until they expire
C) Access tokens will need to be refreshed more often
D) Server load increases due to constant verification

**Answer:** B) Revoked or logged-out tokens can still be used until they expire

---

### **During logout, how does token blacklisting typically help enhance security?**

A) It resets the user password automatically
B) It deletes the user from the database
C) It marks the current token as invalid, preventing further use
D) It disables all backend API endpoints

**Answer:** C) It marks the current token as invalid, preventing further use

---
