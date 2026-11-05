**Scene 3.1**

### **Given the following schema: voteSchema is Subdocument for pollSchema**

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
