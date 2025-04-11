**Scene 3.0**
### **1. Given the following schema:**

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

### **2. Given the following schema:**

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

### **3. Given the following schema:**

```js
const voteSchema = new mongoose.Schema({
  userId: String,
  score: Number,
});

const pollSchema = new mongoose.Schema({
  question: String,
  votes: [voteSchema],
});
```

**Which query will return polls where any vote has a score greater than 3?**

A) `Poll.find({ "votes.score": { $gt: 3 } })`  
B) `Poll.find({ "votes": { score: { $gt: 3 } } })`  
C) `Poll.find({ score: { $gt: 3 } })`  
D) `Poll.find({ "votes[0].score": { $gt: 3 } })`

Answer: A) `Poll.find({ "votes.score": { $gt: 3 } })`

---
