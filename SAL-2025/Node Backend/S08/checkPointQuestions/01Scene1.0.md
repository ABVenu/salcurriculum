**Scene 1.0**

### 1. **Which of the following best describes "Documents by Reference" in MongoDB?**

A) Embedding documents directly inside another document  
B) Linking documents using ObjectIds and storing related data in separate collections  
C) Converting documents into arrays  
D) Using a CSV file to link data

**Correct Answer:** B) Linking documents using ObjectIds and storing related data in separate collections

---

### 2. **What type of relationship is being modeled when a `Book` document stores an array of `ObjectId`s pointing to `Author` documents?**

A) One-to-One (1:1)  
B) One-to-Many (1:N)  
C) Many-to-Many (M:N)  
D) None of the above

**Correct Answer:** B) One-to-Many (1:N)

### 3. **Which of the following is a drawback of using references instead of embedding documents in MongoDB?**

A) Slower write operations  
B) Larger individual documents  
C) Requires manual joins through application logic or use of `populate`  
D) Prevents updates to related documents

**Correct Answer:** C) Requires manual joins through application logic or use of `populate`
