### **Task 1: List of books borrowed by each borrower**

* Use: `$lookup`, `$group`, `$project`, `$unwind`
* Hint: Lookup `books` from `loans` using `bookId`

---

### **Task 2: Top 3 most borrowed books**

* Use: `$group` (on `bookId`), `$sort`, `$limit`, `$lookup`, `$unwind`
* Hint: Join with `books` to show titles

---

### **Task 3: Borrower’s loan history with book details (borrowerId = User1)**

* Use: `$match`, `$lookup`, `$unwind`, `$project`
* Hint: Filter by `borrowerId`, then join `books`

---

### **Task 4: Borrowers who have borrowed more than 2 books**

* Use: `$group`, `$match`, `$lookup`, `$project`
* Hint: Count loans per borrowerId using `$sum`, filter with `$gt`

---

### **Task 5: Full report of all loans (with borrower name and book title)**

* Use: `$lookup` (twice), `$unwind`, `$project`
* Hint: Join with both `books` and `borrowers`

---

### **Task 6: Genre-wise count of borrowed books**

* Use: `$lookup`, `$unwind`, `$group`
* Hint: Lookup genre from `books`, then group by genre

---

### **Task 7: Current borrowed books (status = "Borrowed") with borrower and book title**

* Use: `$match`, `$lookup`, `$unwind`, `$project`

---

### **Task 8: Number of returned books per borrower**

* Use: `$match` (status = Returned), `$group`, `$lookup`, `$project`

---

### **Task 9: Borrowers who borrowed multiple genres**

* Use: `$lookup`, `$group` with `$addToSet`, `$project` with `$size`, `$match`
* Hint: Use `$size: "$uniqueGenres"` and `$gt: 1`

---

### **Task 10: List borrowers with total borrow count and names**

* Use: `$group`, `$lookup`, `$project`

---