### Student Notes

### [Live Coding Notes](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/e474e417-5019-4f50-b1a4-594d0118ad84/FySHjUVPgfVFlduu.zip)

# **S09: Mongoose Design Patterns – ER Diagrams, Junction Schemas & Cascading**

### 🚀 **Learning Objectives**

* Understand how to visualize relationships using ER diagrams.
* Learn to model many-to-many relationships using **junction schemas**.
* Implement cascading strategies like **soft delete** and **archiving**.
* Use **Mongoose hooks** to manage data consistency automatically.

---

## 🎯 Scene 1: ER Diagrams – Visualizing Schema Relationships

### 🔍 1.1 Why ER Diagrams?

Before writing code, it’s helpful to draw out your **data model** — this includes:

* What data we are storing (entities and fields)
* How those entities are connected (relationships)

**💡 ER (Entity-Relationship) Diagrams** help you:

| Benefit               | Explanation                                                            |
| --------------------- | ---------------------------------------------------------------------- |
| Visualize data model  | See collections and how they relate                                    |
| Design before coding  | Choose between **embed vs. reference** early                           |
| Onboard others easily | Helps new developers understand your DB quickly                        |
| Debug/refactor easily | Spot redundant or confusing relationships before they become a problem |

---

### ✏️ 1.2 How to Draw ER Diagrams

There are two common ways:

#### ✅ Method 1: Traditional Shapes (Academic Style)

* **Rectangles** = Entities (models)
* **Ovals** = Attributes (fields)
* **Diamonds** = Relationships (verbs like `enrolled`, `owns`)
* **Underline** = Primary key (`_id`)

#### ✅ Method 2: Developer Style (Box + Arrows)

* Each model is a **box**
* Inside the box: `_id`, then fields
* Use **arrows** to show how models are related

  * → One-to-One
  * →→ One-to-Many
  * ↔ Many-to-Many

📸 Example Diagram:
![ER Diagram](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/b528c297-9079-4eb0-93a7-1963e2905e75/Kk3PLTBNKzJFtdIq.png)

---

## 🎯 Scene 2: Designing Many-to-Many Using Junction Schemas

### 🔄 2.1 The Challenge with Many-to-Many

**Example**: A `Student` can enroll in many `Courses`, and each `Course` can have many `Students`.

❌ If we put all student IDs inside course documents, and all course IDs inside student documents:

* It becomes messy
* Data duplication
* Hard to manage updates
* Complex queries

---

### 🧩 2.2 Junction Schemas to the Rescue

A **junction schema** is a new collection that connects two other collections.

✅ Instead of storing references in each model, we create a third collection called `Enrollment`:

```txt
Student ← Enrollment → Course
```

Each enrollment represents **one student in one course**, with optional extra fields like:

* Date enrolled
* Status
* Grade

📊 **Benefits**:

| Benefit            | Why It Helps                                         |
| ------------------ | ---------------------------------------------------- |
| Clean M\:N mapping | Every row is a unique connection (no duplication)    |
| Flexible           | Add metadata (like `enrolledAt`, `status`)           |
| Scalable           | You don’t modify original `Student` or `Course` docs |

📸 Junction Schema Diagram:
![Junction Schema](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/21e78fca-adce-40fb-a473-b532bf5830c1/QryfjRAsdZpqzhDc.png)

---

### 🛠️ 2.3 Coding the Junction Schema

#### 2.3.1 Schema Setup

```js
// models/Course.js
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
});
const Course = mongoose.model("Course", courseSchema);

// models/Student.js
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const Student = mongoose.model("Student", studentSchema);

// models/Enrollment.js (junction schema)
const enrollmentSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  enrolledAt: { type: Date, default: Date.now },
});
const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
```

#### 2.3.2 Sample Routes

```js
// Create a course
app.post("/courses", async (req, res) => {
  const course = await Course.create(req.body);
  res.status(201).json(course);
});

// Create a student
app.post("/students", async (req, res) => {
  const student = await Student.create(req.body);
  res.status(201).json(student);
});

// Enroll a student in a course
app.post("/enroll", async (req, res) => {
  const { studentId, courseId } = req.body;
  const enrollment = await Enrollment.create({ student: studentId, course: courseId });
  res.status(201).json(enrollment);
});
```

---

## 🎯 Scene 3: Cascading Strategies in Mongoose

### 🔁 3.1 What is Cascading?

**Cascading** means: When one entity is deleted or updated, its related data should also be handled automatically.

✅ Example:

* If a `Course` is deleted, what happens to `Enrollment`?
* If a `User` is archived, should their comments also be hidden?

---

### 🧩 3.2 Common Cascading Strategies

| Strategy          | Explanation                                                        |
| ----------------- | ------------------------------------------------------------------ |
| 🧼 Soft Delete    | Don’t remove the doc, just mark as `{ isDeleted: true }`           |
| 🗃️ Archiving     | Move the document to a separate collection or add `archived: true` |
| 🔄 Restore/Update | Restore from archive or update fields instead of deleting          |

---

### 🔧 3.3 Using Pre/Post Hooks in Mongoose

Mongoose lets us run functions **before (`pre`) or after (`post`)** certain actions like `.deleteOne()`, `.save()`, etc.

```js
// Soft delete enrollments when a course is deleted
courseSchema.pre("deleteOne", { document: true, query: false }, async function (next) {
  const courseId = this._id;
  await Enrollment.updateMany({ course: courseId }, { isDeleted: true });
  next();
});
```

🛡️ This protects data and ensures **referential integrity**.

---

## ⚠️ Pitfalls to Avoid

| Area                        | Mistake                                                                 |
| --------------------------- | ----------------------------------------------------------------------- |
| Relationship Type Confusion | Using M\:N when 1\:N is enough (or vice versa)                          |
| Linking IDs Everywhere      | Just putting object IDs is not enough; junction schemas give clarity    |
| Deleting Means Removing     | Instead of hard delete, prefer soft delete or archive for better safety |

---

## ✅ Summary

| Concept              | Key Takeaway                                                                 |
| -------------------- | ---------------------------------------------------------------------------- |
| ER Diagrams          | Help visualize, plan, and communicate your DB structure                      |
| Junction Schema      | Best way to implement many-to-many relationships in MongoDB with Mongoose    |
| Cascading Strategies | Use hooks to manage related data integrity with soft delete or archive logic |

---


