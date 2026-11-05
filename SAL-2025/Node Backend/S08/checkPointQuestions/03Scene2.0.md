**Scene 2.0**

### 1. **You are building a blogging platform. The `Post` and `User` models are related such that each post belongs to one user, and one user can have many posts. Given the following schemas:**

```js
// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Post Schema
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
```

**Which query would correctly retrieve all posts along with their author's name and email?**

A) `Post.find().populate("author", "name email");`

B) `Post.find().join("author").select("name email");`

C) `User.find().populate("posts", "title content");`

D) `Post.populate("author").find("name email");`

**Correct Answer:** A) `Post.find().populate('author', 'name email');`
