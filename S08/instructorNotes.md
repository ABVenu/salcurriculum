#### Designing Relationships within Schemas in Mongoose

### Learning Objectives

- creating a common final route that supports searching the data along with pagination and sorting
- Need of Relationships
- Types of Relationships
- Implementation of relationships
- Pre and Post Hooks that helps managing relationships

## Scenes

**1.0** Need of Relationships

- 1.1 - Creation of final route that supports filtering data along with pagination and sorting
- 1.2 - Understanding of what if the project grows, and the number of nested/embedded entites grows to large numbers
- 1.3 - Demonstrating by giving examples of A Customer Schema having many Orders, issues of these growing nested documents like querying is tough, main schema is becoming heavy etc
- 1.4 - Demonstrating need of seprate schemas - collections and link them, so that main Schema is not loaded and also maintaining the those entities is also easy

**2.0** Types of Relationships

- 2.1 - Classification of Relationships
- 2.2 - Explaining One to One Relationship with Practical Example and Just displaying how a typical Schemas may look
- 2.3 - Explaining One to Many Relationship with Practical Example and Just displaying how a typical Schemas may look
- 2.4 - Explaining Many to Many Relationship with Practical Example and Just displaying how a typical Schemas may look

- 2.5 - Implementing one to Many relationship Schema, as it is general case & Demonstrating Relationship by create respective routes

**3.0** Creating Cascading Effects to Ensure Complete Relationships

- 3.1 - Relationship means not only creating schemas; it is completed only when all its associated routes/functionalities are created

  - Example: If a course is deleted, its dependent lectures should also be deleted.

- 3.2 - Introduction to Cascading and Pre/Post Hooks in Mongoose

- 3.3 - Managing Relationships Using Pre/Post Hooks

## Pitfalls

**1.0**

- need of relationships

**2.0**

- clear diffrentiation between types of relationships and which one to choose in case of projects
- Implementing which type of relationship to be used

**3.0**

- Relationhsip means not only just creating schemas, it of how routes/queries are implemented
- Implementation of hooks

## Content/Pedagagoy

### **Scene 1.0 Need of Relationships**

#### 1.1 **Creation of final route that supports filtering data along with pagination and sorting**

- This is previous session continuation part
- Create a master query which supports search by query along pagination and sorting through query

```javaScript
const Course = require('../models/Course');

const getCourses = async (req, res) => {
  try {
    const {
      search = '',
      page = 1,
      limit = 10,
      sortBy = 'createdAt',
      order = 'desc'
    } = req.query;

    // Create filter for search (case-insensitive)
    const searchFilter = {
      $or: [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ]
    };

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const sortOrder = order === 'asc' ? 1 : -1;

    const courses = await Course.find(searchFilter)
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Course.countDocuments(searchFilter);

    res.json({
      success: true,
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / limit),
      courses
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error', error: err.message });
  }
};
```

#### 1.2 **Understanding the Implications of Project Growth and Increasing Nested/Embedded Entities**

As a project scales, using nested or embedded documents in MongoDB can become problematic if the embedded entities grow in number or size.

- Embedded or nested documents work well **only when their number is limited or controlled** by the developer.

  - For example, in an e-commerce application, a customer might be allowed to add up to **10 addresses**, which is manageable as a subdocument inside the Customer schema.
  - However, the same customer could place **hundreds or thousands of orders**. If all of those order documents are embedded inside the Customer document, the schema would become excessively large and difficult to manage.
  - Further complexity arises when each order includes **delivery tracking details or other dependent subdocuments**. Embedding these too would make the Customer schema even more bloated.

- **Problems with this approach**:

  - The **Customer schema becomes huge**, affecting both performance and maintainability.
  - **Querying becomes difficult**, especially when trying to fetch or update specific nested entities.
  - On the **frontend/user side**, loading such a large schema could result in **slow performance** or unnecessary data transfer.

- **Solution**:
  - Instead of embedding everything inside a single document, it’s more efficient to **create separate schemas** (e.g., an `Order` schema) and link them using **referencing**.
  - This approach ensures that the **Customer schema remains lightweight**, and each entity (like orders or delivery tracking) can be managed independently.

---

#### 1.3 **Example: Customer Schema with Growing Orders — Issues with Deep Nesting**

Let’s take the example of a `Customer` schema that includes all order details as embedded documents:

```js
{
  _id: "cust123",
  name: "John Doe",
  email: "john@example.com",
  orders: [
    {
      orderId: "ord001",
      items: [...],
      delivery: {
        status: "Delivered",
        trackingId: "track001"
      }
    },
    ...
  ]
}
```

**Challenges:**

- Querying specific orders or delivery statuses becomes complex.
- As orders grow, so does the parent Customer document.
- Indexing and filtering become inefficient.
- Makes updates and deletions cumbersome.

#### 1.4 **Need for Separate Schemas and Collections**

To maintain scalability and performance:

- Use **separate collections** for Customers, Orders, and Delivery Tracking.
- **Reference** the Customer `_id` in each Order document.
- This way:
  - Each schema remains clean and focused.
  - Fetching data is optimized using joins/population techniques (`populate` in Mongoose).
  - Maintaining each entity (orders, tracking) becomes easier.

---

### **Scene 2.0 Types of Relationships**

MongoDB supports different types of relationships between documents, allowing flexible data modeling. Choosing between embedded documents or referencing depends on the use case, data access patterns, and scalability needs.

#### **2.1 Classification of Relationships**

MongoDB relationships can be broadly classified into:

- **One-to-One (1:1)**  
  One document is related to one and only one document in another collection.

- **One-to-Many (1:N)**  
  A single document is related to multiple documents in another collection.

- **Many-to-Many (M:N)**  
  Multiple documents in one collection are related to multiple documents in another collection.

Each of these can be implemented through **embedding** (storing one document inside another) or **referencing** (linking documents using IDs).

---

#### **2.2 One-to-One Relationship**

Let’s consider a `User` who has exactly one `Profile`.

##### Option 1: Embedding (suitable for small profiles)

```js
// User Schema with Embedded Profile
{
  _id: "user123",
  name: "Alice",
  email: "alice@example.com",
  profile: {
    age: 25,
    bio: "Software Engineer",
    location: "San Francisco"
  }
}
```

##### Option 2: Referencing (recommended for larger or optional profiles)

```js
// User Schema
{
  _id: "user123",
  name: "Alice",
  email: "alice@example.com",
  profileId: "profile123"  // Reference to Profile
}

// Profile Schema
{
  _id: "profile123",
  age: 25,
  bio: "Software Engineer",
  location: "San Francisco"
}
```

---

#### **2.3 One-to-Many Relationship**

Let us take an example of, One `Customer` can place multiple `Orders`.

```js
// Customer Schema
{
  _id: "cust001",
  name: "Bob",
  email: "bob@example.com"
}

// Order Schema
{
  _id: "ord001",
  customerId: "cust001",   // Reference to Customer
  amount: 250,
  status: "Shipped"
}
```

#### **2.4 Many-to-Many Relationship**

Let us take an example of, an `Student` can enroll in multiple `Courses`, and each `Course` can have many `Students`.

##### Implementation Using Referencing:

```js
// Student Schema
{
  _id: "stu001",
  name: "Charlie",
  enrolledCourses: ["course001", "course002"]  // References to Course IDs
}

// Course Schema
{
  _id: "course001",
  title: "Node.js Mastery",
  enrolledStudents: ["stu001", "stu002"]  // References to Student IDs
}
```

Perfect! Let's lock in the **pedagogy for Scene 3.0** — focusing solely on **One-to-Many Relationship** using `Course` and `Lecture` as our ideal schemas. This will be simple, relatable, and fully demonstrable through real code and routes.

---

#### **2.5 - Implementing one to Many relationship Schema, as it is general case & Demonstrating Relationship by create respective routes**

- let us implement One to Many Relationship, will take example of `course` & `lecture` schema, where one `course` can have many `lectures`, so `course` is independent and `lecture` is dependent

##### **Schema Flow**

```txt
Course
  |_ title
  |_ description

Lecture
  |_ courseId (ref to Course)
  |_ title
  |_ content
```

---

##### Create Schemas

##### `models/Course.js`

```js
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
});

module.exports = mongoose.model("Course", courseSchema);
```

##### `models/Lecture.js`

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

```
Course
 └── Lecture
       └── courseId → points back to Course._id
```

---

##### **Functional Routes: Making Relationship Useful**

Now show how the relationship becomes **meaningful** through these routes:

---

##### Create Course

```js
// POST /courses
router.post("/courses", async (req, res) => {
  const { title, description } = req.body;
  const course = await Course.create({ title, description });
  res.status(201).json({ success: true, course });
});
```

---

##### Add Lecture to Course

```js
// POST /courses/:courseId/lectures
router.post("/courses/:courseId/lectures", async (req, res) => {
  const { courseId } = req.params;
  const { title, content } = req.body;

  const lecture = await Lecture.create({ title, content, courseId });
  res.status(201).json({ success: true, lecture });
});
```

---

##### Get All Lectures for a Course, use populate method to get course details

```js
// GET /courses/:courseId/lectures
router.get("/courses/:courseId/lectures", async (req, res) => {
  const { courseId } = req.params;

  const lectures = await Lecture.find({ courseId }).populate("courseId");
  res.json({ success: true, lectures });
});
```

##### Popluate Method

- It is method given by mongoose, this `populate` method, just gets the data of the `courseId` from the `Course` collection which is mentioned as `ref` in the lecture Schema

---

## **Scene 3.0 Creation of Cascading Effect To Ensure Completeness/Integrity of Relationhsips**

### **3.1 Relationship Means More Than Just Linking Schemas**

- Establishing a relationship between schemas is not just about linking them using ObjectIds. A **complete relationship** is achieved only when all associated functionalities and dependencies are handled properly.

- For example, consider the case where **lectures are created using a `courseId`**:

  - What happens if the **course is deleted**?
  - Does the **lecture collection** know that its corresponding course no longer exists?
  - If not, the lectures associated with that deleted course become **orphaned** and essentially **useless**.
  - This is an example of an **incomplete relationship** — the integrity between related entities is broken.

- To ensure a **complete and reliable relationship**, we must:
  - Handle such cases explicitly in our methods or routes.
  - Ensure that **dependent records** (like lectures) are also **deleted or updated appropriately** when a parent record (like course) is removed.
  - Implement **cascading delete**, **manual cleanup**, or add **validation checks** during data access.

> In summary, **relationships are not just about linking — they are about maintaining integrity and consistency across related data**.

---

### **3.2 Introduction to Cascading and Pre/Post Hooks in Mongoose**

In this section, we will explore the concepts of **cascading effects** and how Mongoose supports **pre** and **post hooks** to manage these effects. This is crucial for ensuring that data integrity is maintained, especially in relationships between collections.

---

#### **What is a Cascading Effect?**

A **cascading effect** in database management refers to a **change in one document (or record)** that automatically triggers **related changes** in other documents. This ensures that dependent data remains consistent and prevents the existence of **orphaned or inconsistent records**.

**Example:**

- In a Course-Lecture relationship:
  - If a **Course** is deleted, we would want all the **Lectures** associated with that course to also be deleted automatically. Otherwise, the lectures would become **orphaned** — still linked to the course but not tied to any existing course.

In relational databases, cascading delete operations are common, but in NoSQL databases like MongoDB, it's something you need to manually handle via your application's logic.

---

#### **Pre/Post Hooks in Mongoose**

Mongoose provides **middleware hooks** that allow you to execute logic before or after certain operations on documents. These hooks are essential for managing cascading effects, such as deleting dependent records or updating related data when a change occurs in one document.

##### **What are Pre/Post Hooks?**

- **Pre-hooks** are functions that execute **before** a specific operation is performed on a document. These hooks can be used to modify the document or perform other operations before the main action happens.
- **Post-hooks** are functions that execute **after** a specific operation is completed. These hooks allow you to perform actions based on the outcome of the operation (such as cleanup tasks or additional notifications).

Both **pre** and **post** hooks can be applied to operations like **save**, **remove**, **findOneAndDelete**, **update**, etc.

##### **Common Use Cases for Pre/Post Hooks:**

1. **Pre-hooks**:

   - Validate or modify data before saving.
   - Prevent the saving of documents under certain conditions.
   - Implement cascading delete operations before a document is removed.

2. **Post-hooks**:
   - Perform actions after a document is saved (e.g., sending an email notification).
   - Handle cascading updates after saving or updating related data.
   - Delete or clean up dependent documents after the primary document is deleted.

---

### **3.3 Implementing Cascading Effects with Pre/Post Hooks in Mongoose**

To implement cascading effects using pre/post hooks, Mongoose provides middleware that can be set up for operations like **delete** or **update**. Let’s walk through an example.

##### **Example 1: Cascading Delete (Pre Hook)**

Imagine we have a `Course` model, and each course has multiple associated `Lectures`. We want to ensure that when a course is deleted, all the lectures related to it are also deleted.

Here's how we can use a **pre** hook to achieve this:

```javascript
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: String,
  description: String,
});

// Pre-hook to handle cascading delete on related lectures
courseSchema.pre("remove", async function (next) {
  try {
    // Delete all lectures associated with the course
    await mongoose.model("Lecture").deleteMany({ courseId: this._id });
    next();
  } catch (err) {
    next(err);
  }
});

const Course = mongoose.model("Course", courseSchema);
```

In this example, before a `Course` is deleted, the **pre** hook (`'remove'`) will trigger and remove all `Lecture` documents that have the `courseId` matching the `Course` being deleted.

##### **Example 2: Cascading Delete (Post Hook)**

Alternatively, you can handle cascading effects after the operation is complete using a **post** hook. Here’s how it might look for the `Lecture` deletion process:

```javascript
courseSchema.post("remove", async function (doc, next) {
  try {
    // Delete all related lectures after the course is removed
    await mongoose.model("Lecture").deleteMany({ courseId: doc._id });
    next();
  } catch (err) {
    next(err);
  }
});
```

This **post-hook** ensures that the lectures are deleted **after** the course itself is removed. Both approaches can be used depending on whether you want to ensure integrity before the operation or clean up afterward.

---

#### Sample Course Delete Route

```javaScript
router.delete('/courses/:id', async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Trigger the cascading delete (handled by the pre-hook in the Course model)
    await course.remove();  // This will trigger the 'remove' pre-hook
    res.status(200).json({ message: 'Course and related lectures deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
```

---
