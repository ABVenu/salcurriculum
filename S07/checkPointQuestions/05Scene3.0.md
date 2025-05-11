**Scene 3.0**

### **Given the following schema: where commentSchema is subdocument for postSchema**

```js
const commentSchema = new mongoose.Schema({
  text: String,
  author: String,
});

const postSchema = new mongoose.Schema({
  title: String,
  comments: [commentSchema],
});
```

**Which query will return posts that have at least one comment by "John"?**

A) `Post.find({ "author": "John" })`  
B) `Post.find({ "comments.author": "John" })`  
C) `Post.find({ "comments.text.author": "John" })`  
D) `Post.find({ "title.comments.author": "John" })`

Answer: B) `Post.find({ "comments.author": "John" })`

---

### **Given the following schema: where roomSchema is subdocument for houseSchema**

```js
const roomSchema = new mongoose.Schema({
  name: String,
  area: Number,
});

const houseSchema = new mongoose.Schema({
  address: String,
  rooms: [roomSchema],
});
```

**Which query returns all houses that have a room named "Living Room"?**

A) `House.find({ "room.name": "Living Room" })`  
B) `House.find({ "rooms": { name: "Living Room" } })`  
C) `House.find({ "rooms.name": "Living Room" })`  
D) `House.find({ "rooms[0].name": "Living Room" })`

Answer: C) `House.find({ "rooms.name": "Living Room" })`

---
