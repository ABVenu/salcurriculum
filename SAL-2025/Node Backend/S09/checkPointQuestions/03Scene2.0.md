**Scene 2.0 Junction Schema**

### **1. What is the main purpose of a Junction Schema in MongoDB?**

A) To optimize aggregation queries  
B) To manage many-to-many relationships between two different entities  
C) To create indexes automatically  
D) To store backups of two collections

**Answer:** B) To manage many-to-many relationships between two different entities

---

### **2. Which of the following is typically true about a Junction Schema?**

A) It stores only documents with a single field  
B) It holds references (IDs) to documents from two different collections  
C) It contains entire embedded documents from other collections  
D) It automatically updates related collections without manual effort

**Answer:** B) It holds references (IDs) to documents from two different collections

---

### **3. In a system with a User Collection and a Train Collection, where one user can board many trains and one train can have many users, how should a many-to-many relationship be handled in MongoDB?**

A) Embed the complete User documents inside each Train document.  
B) Create a Junction Schema called Reservation where userId, trainId, routeId, and other reservation info are maintained.  
C) Store an array of Train names inside each User document.  
D) Directly reference all users inside each Train document without any separate collection.

**Answer:** B) Create a Junction Schema called Reservation where userId, trainId, routeId, and other reservation info are maintained.

---
