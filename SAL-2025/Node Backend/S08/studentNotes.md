## Student Notes

## Advanced Mongoose: Relationships and Its Design

### [Live Coding Notes](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/726b9a41-fbc3-4fdd-a539-332bd22406f0/syeq3ywB1HSTSsZq.zip)

---

## Learning Objectives

- Create a master route that supports searching, pagination, and sorting data
- Understand why relationships are needed in databases
- Learn the types of relationships in MongoDB
- Implement relationships using Mongoose
- Use hooks to manage data integrity in relationships

---

## 1. Need for Relationships

### Why Relationships Are Needed

- When your project grows, embedding large numbers of nested documents (like orders inside customers) can make documents too big and slow to query.
- For example, a customer may have hundreds or thousands of orders. Embedding all orders inside the customer document makes it heavy and hard to maintain.
- Instead, use **separate schemas and collections**, and **link** them using references (IDs).
- This keeps main documents lightweight and improves querying and updating.

---

## 2. Types of Relationships in MongoDB

### 2.1 Classification

- **One-to-One (1:1)**
- **One-to-Many (1\:N)**
- **Many-to-Many (M\:N)**

You can implement these using **embedding** or **referencing**.

---

### 2.2 One-to-One Example

![One to One Relationship](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/8a4a8d74-636b-4ce2-991c-39870923eda6/FlsAhzAihlapZNry.png)

User and Profile:

- Embedding (for small profile data):

```js
{
  _id: "user123",
  name: "Alice",
  profile: {
    age: 25,
    bio: "Software Engineer"
  }
}
```

- Referencing (for larger or optional profiles):

```js
// User
{
  _id: "user123",
  name: "Alice",
  profileId: "profile123"
}

// Profile
{
  _id: "profile123",
  age: 25,
  bio: "Software Engineer"
}
```

---

### 2.3 One-to-Many Example

![One to Many Relationship](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/b38d8743-7d93-4a4b-b6c2-36005fa98e74/jYs0pYdHbDjxLAhs.png)
Customer and Orders:

### **Parent Document: Post**

```js
// Post
{
  _id: "post001",
  title: "Understanding JavaScript Closures",
  content: "Closures are functions that have access to variables from another function’s scope...",
  author: "Alice"
}
```

---

### **Child Documents: Comments**

```js
// Comment 1
{
  _id: "comm001",
  postId: "post001",
  commenter: "Bob",
  comment: "Great explanation! Really helped me understand closures."
}

// Comment 2
{
  _id: "comm002",
  postId: "post001",
  commenter: "Charlie",
  comment: "Can you give more examples of practical use cases?"
}
```

---

### Key Idea:

- This is a **One-to-Many (1\:N)** relationship:

  - **One Post** ➝ can have **many Comments**.
  - Comments hold the foreign key: `postId` pointing to the Post’s `_id`.

---

### 2.4 Many-to-Many Example

![Many To Many Relationship](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/85a3b9c4-0176-4c1b-951f-9f03fd2af158/QjesjTv3eVpnv3NY.png)

Students and Courses:

```js
// Student
{
  _id: "stu001",
  name: "Charlie",
  enrolledCourses: ["course001", "course002"]
}

// Course
{
  _id: "course001",
  title: "Node.js Mastery",
  enrolledStudents: ["stu001", "stu002"]
}
```

---

## 3. Implementing One-to-Many Relationship: Course & Lecture Example

- One **Course** can have many **Lectures**.
- `Lecture` documents reference the `Course` they belong to.

### Schemas

`models/Course.js`:

```js
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
});

module.exports = mongoose.model("Course", courseSchema);
```

`models/Lecture.js`:

```js
const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  title: String,
  content: String,
});

module.exports = mongoose.model("Lecture", lectureSchema);
```

---

### Routes

- **Create Course**

```js
router.post("/courses", async (req, res) => {
  const { title, description } = req.body;
  const course = await Course.create({ title, description });
  res.status(201).json({ success: true, course });
});
```

- **Add Lecture to Course**

```js
router.post("/courses/:courseId/lectures", async (req, res) => {
  const { courseId } = req.params;
  const { title, content } = req.body;

  const lecture = await Lecture.create({ title, content, courseId });
  res.status(201).json({ success: true, lecture });
});
```

- **Get All Lectures of a Course (with course info using populate)**

```js
router.get("/courses/:courseId/lectures", async (req, res) => {
  const { courseId } = req.params;

  const lectures = await Lecture.find({ courseId }).populate("courseId");
  res.json({ success: true, lectures });
});
```

---

### What is `populate`?

`populate` fetches the referenced document data. In this case, when fetching lectures, it also fetches the related course details.

---

## 4. Managing Relationships for Data Integrity

- Relationships are complete only when all related routes and functionalities are created.
- Example: When deleting a course, its lectures should also be deleted (can be done with Mongoose middleware hooks).
- This helps keep data consistent and clean.

---

## Scene 3.0 Cursor Methods

### 3.2 Cursor Methods

MongoDB provides powerful cursor methods to efficiently handle large datasets, especially when you want to:

- **Paginate results** (fetch a subset of documents)
- **Sort data** based on one or multiple fields
- **Limit the number of documents** returned
- **Skip documents** to jump over pages

**Common cursor methods:**

| Method                    | Purpose                                                                   |
| ------------------------- | ------------------------------------------------------------------------- |
| `.skip(n)`                | Skip first `n` documents (useful for pagination)                          |
| `.limit(n)`               | Limit results to `n` documents                                            |
| `.sort({ field: order })` | Sort documents by field(s). `order` is 1 for ascending, -1 for descending |

---

### Route Example: Apply cursor methods for Lectures of a Course

We will create a **GET** route that fetches lectures for a given course applying:

- Search (filter by lecture title)
- Pagination (page & limit)
- Sorting (by `createdAt` or any field)

---

### Route Code

```js
// GET /courses/:courseId/lectures?search=&page=&limit=&sortBy=&order=
router.get("/courses/:courseId/lectures", async (req, res) => {
  try {
    const { courseId } = req.params;
    const {
      search = "",
      page = 1,
      limit = 5,
      sortBy = "createdAt",
      order = "asc",
    } = req.query;

    // Build search filter (case-insensitive on lecture title)
    const searchFilter = {
      courseId,
      title: { $regex: search, $options: "i" },
    };

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const sortOrder = order === "asc" ? 1 : -1;

    const lectures = await Lecture.find(searchFilter)
      .sort({ [sortBy]: sortOrder }) // sort by dynamic field & order
      .skip(skip) // skip docs for pagination
      .limit(parseInt(limit)) // limit results per page
      .populate("courseId", "title description"); // populate course details, select title & description

    const total = await Lecture.countDocuments(searchFilter);

    res.json({
      success: true,
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / limit),
      lectures,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
});
```

---

### Explanation:

- `search`: Filters lectures whose title contains the search text (case-insensitive).
- `page` & `limit`: Controls pagination; skips `(page-1)*limit` documents and limits the output to `limit`.
- `sortBy` & `order`: Dynamically sort lectures by any field (e.g., `createdAt`, `title`), ascending or descending.
- `populate("courseId")`: Includes course details in the lecture response to show relationship.

---

This route covers all cursor operations making it easy to retrieve filtered, paginated, and sorted related documents in an efficient and scalable manner.

---

## What is a `.env` file?

- `.env` stands for **environment variables** file.
- It is a **simple text file** where you can store important configuration values for your app.
- These values are stored as **key-value pairs** (e.g., `PORT=5000`).

---

## Why do we need `.env` files?

1. **Keep sensitive data safe**

   - Things like database passwords, API keys, and secret tokens should **not be hardcoded** in your code.
   - `.env` files help keep this info separate and out of your public code.

2. **Easy configuration management**

   - You can easily change settings like the server port or database URL without changing your code.
   - This is especially useful when you move your app from **development to production** environments.

3. **Prevent accidental leaks**

   - `.env` files are usually added to `.gitignore` so they are **not pushed to public repositories** like GitHub.

4. **Make your code reusable**

   - Your code can stay the same while the environment values can be different for every machine or deployment.

---

## How to use `.env` files in Node.js?

1. Create a file named `.env` in your project root.

2. Add your variables:

   ```
   PORT=5000
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/mydb
   ```

3. Install `dotenv` package:

   ```bash
   npm install dotenv
   ```

4. Load `.env` variables at the start of your app (usually in `index.js`):

   ```js
   require("dotenv").config();
   ```

5. Use the variables in your code:

   ```js
   const port = process.env.PORT;
   const mongoUri = process.env.MONGO_URI;
   ```

---

## Conclusion

- Properly designed relationships help keep MongoDB documents lightweight and maintainable.
- Use referencing (instead of heavy embedding) for large or growing datasets to improve query performance.
- Mongoose’s `populate` method simplifies fetching related documents and building rich responses.
- Middleware hooks (pre/post) help maintain data integrity by handling cascading operations like deletes.
- Cursor methods (`skip`, `limit`, `sort`) enable efficient pagination, sorting, and filtering of large datasets.
- Combining these techniques helps build scalable, clean, and performant APIs with MongoDB and Mongoose.
- Understanding relationship types (1:1, 1\:N, M\:N) is key to modeling real-world data accurately.

---
