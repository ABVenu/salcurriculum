### **Scene-3.0-MongoDB Queries**

#### **1. How do you create a new database in MongoDB using the Mongo shell?**

A) `CREATE DATABASE myDB;`  
B) `use myDB;`
C) `db.createDatabase("myDB");`  
D) `new Database("myDB");`

**Answer:** B) `use myDB;`

#### **2. In MongoDB, what happens when you switch to a database using `use myDB;` that does not exist?**

A) MongoDB throws an error saying the database does not exist.  
B) A new database is created immediately.  
C) A new database is created only when you insert data into a collection.
D) The shell exits because the database is invalid.

**Answer:**C) A new database is created only when you insert data into a collection.

#### **3. How do you create a new collection in MongoDB?**

A) `db.createCollection("users");`
B) `db.users.create();`  
C) `CREATE TABLE users ();`  
D) `db.new("users");`

**Answer:**A) `db.createCollection("users");`

#### **4. What will happen if you insert a document into a non-existent collection?**

A) The operation will fail because the collection does not exist.  
B) MongoDB will automatically **create the collection** and insert the document.
C) The document will be inserted, but it won't be retrievable.  
D) You must manually create the collection before inserting documents.

**Answer:** B) MongoDB will automatically **create the collection** and insert the document.

#### **5. Which of the following commands correctly inserts a document into a collection named `students`?**

A) `INSERT INTO students VALUES ({ name: "John", age: 22 });`  
B) `db.students.insert({ name: "John", age: 22 });`
C) `db.insert("students", { name: "John", age: 22 });`  
D) `db.students.add({ name: "John", age: 22 });`
**Answer:** B) `db.students.insert({ name: "John", age: 22 });`
