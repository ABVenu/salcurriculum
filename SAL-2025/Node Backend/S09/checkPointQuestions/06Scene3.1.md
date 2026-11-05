**Scene 3.1 Cascading Stratergies**

### **1. When using a Post Hook (`post`) in Mongoose, what typically happens?**

A) Data is validated before saving to the database  
B) An action is triggered **after** a document is saved, updated, or deleted  
C) Indexes are automatically created on referenced fields  
D) The database connection is closed immediately

**Answer:** B) An action is triggered **after** a document is saved, updated, or deleted

---

### **2. In a cascading delete strategy using Soft Delete, what should happen to child documents when a parent document is soft-deleted?**

A) They should all be immediately hard-deleted  
B) Their references should also be updated (e.g., setting their `isDeleted` flag to true)  
C) They should be ignored completely  
D) They should be moved to an archive collection

**Answer:** B) Their references should also be updated (e.g., setting their `isDeleted` flag to true)

---
