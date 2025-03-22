**Scene 2.0**
1. **Which built-in module is used to read and write `db.json` in Express?**  
   A) `fs`  
   B) `http`  
   C) `path`  
   D) `express-fileupload`

**Answer:** A)

2. **How do you read `db.json` data in Express.js?**  
   A) `fs.readFileSync("db.json")`  
   B) `fs.readFile("db.json", (err, data) => {})`  
   C) `require("./db.json")`  
   D) All of the above

**Answer:** D)

3. **How do you add a new user to `db.json` in Express?**  
   A) `fs.appendFileSync("db.json", newUser)`  
   B) `db.users.push(newUser); fs.writeFileSync("db.json", JSON.stringify(db))`  
   C) `fs.addFileSync("db.json", JSON.stringify(newUser))`  
   D) `db.users = db.users + newUser; fs.saveFile("db.json", db)`

**Answer:** B)

4. **Which status code should be returned when a requested user is not found in `db.json`?**  
   A) 200  
   B) 201  
   C) 404  
   D) 500

**Answer:** C)

5. **What is the correct way to access route parameters in an Express.js request?**  
   a) `req.body`  
   b) `req.query`  
   c) `req.params`  
   d) `req.headers`  
   **Answer:** c)

