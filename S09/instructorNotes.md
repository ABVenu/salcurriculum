#### Mongoose Design Patterns: ER Modeling, Junction Schemas & Cascading Strategies

### Learning Objectives

- Understanding ER Diagrams and Need
- Understanding need of junction schema and its effective design
- Implemenation of Many to Many Relationships using junction schmeas
- Cascading strategies - soft delete, archiving
- Pre/Post hooks

## Scenes

**1.0** ER Diagrams

- 1.1 - Need of Visulization, Documentation of Relationships
- 1.2 - How to draw ER Digrams - basic rules
- 1.3 - Implementation of typical ER Diagrams

**2.0** Effective design of Many to Many Relationships using junction schema

- 2.1 - Brief overview of Many to Many Relationship, practical difficulty of mainataining/Links the id directly in the schema
- 2.2 - Need to common point like `junction schemas` which helps is effective management of Many to Many relationships
- 2.3 - Implementation of junction schema which is effective way to manage many to many relationship

**3.0** Cascading Strategies for Data Integrity & Preservation: Ensuring Unbroken Relationships

- 3.1 - what is cascading, why it is needed?

- 3.2 - Cascading Strategies
  3.2.1 - Soft Delete
  3.2.3 - Archiving
  3.2.3 - Integrated Delete, Update, Restore from Archives (if needed)

- 3.3 - Pre/Post hooks to execute Cascading Stratergies

## Pitfalls

**1.0**

- understaning the which type of relationship to be selected

**2.0**

- many to many relatsionship management is nightmare for many students
- also relationhips means just linking the object IDs

**3.0**

- deletion means not actually deleting from Database, cannot imagine soft delete/archiving and other startergies

## Content/Pedagagoy

### **Scene 1.0 ER Diagrams**

#### 1.1 **Need of Visulization, Documentation of Relationships**

- Relationship design means not only directly refelcting in Schemas, or else we cannot get the type of relationship being implemenated, which field and how it is connected.
- First schema (Entity) will be decided then fields (attributes) are decided and finally relationship is decided
- So, to effectively visulize all these things, we need to create an diagram which is helping to see all the schemas that are getting
- also these diagrams helps to document, which helps is future as well,
- The following are the benefits of using ER Diagrams

  1.  **Visualize your Data Model**:

      - Makes it easier to understand what collections you have and how they relate.
      - Shows which fields are embedded vs. referenced.

  2.  **Design before Implementation**:

      - You can plan your schemas and relationships clearly before coding.
      - Helpful when deciding between **embedding vs. referencing**.

  3.  **Onboarding New Developers**:

      - A clear diagram makes it easy for others to understand your DB design.

  4.  **Debugging and Refactoring**:
      - Spot unoptimized relationships or circular references early.

  ***

#### **What Problems Do ER Diagrams Solve?**

| Problem                    | How ER Diagrams Helps                                             |
| -------------------------- | ----------------------------------------------------------------- |
| Unclear data relationships | Clarify how collections reference or embed one another            |
| Schema complexity          | Break down large, nested schemas into understandable visual units |
| Poor database performance  | Helps you rethink data modeling (e.g., when to normalize)         |
| Collaboration challenges   | Acts as a communication tool between devs, PMs, designers         |

#### 1.2 **How to draw ER Diagrams - basic rules**

##### Method 1 using shapes

1. **Entities (Models)**

   - Drawn as rectangles.
   - Use **singular** names like `User`, `Course`, `Pet`.
   - Attributes (schema fields) are shown as ovals connected to the entity.

2. **Relationships**

   - Represented by diamonds.
   - Connect related entities with lines.
   - Name the relationship with a **verb** (e.g., `has`, `belongsTo`, `enrolled`).

3. **Primary Key**
   - Every Mongoose model has a default `_id` as the primary key.
   - Underline `_id` in the diagram to indicate it's the unique identifier.

- //// Add Typical ER Diagram Here ////

##### Method 2 using box and arrows

- Here box is put for a model and all the attributes are listed in the box starting from `_id` and `arrows` are used to connect one box with another which represents relationship

- This method is generally used by developers
- //// Add Typical ER Diagram Here ////

#### 1.3 **Implementation of typical ER Diagrams**

- Implement Both Method 1 and Method 2 and explain neatly

---

### **Scene 2.0 — Effective Design of Many-to-Many Relationships Using a Junction Schema**

#### 2.1 & 2.2

- In **One-to-One** or **One-to-Many** relationships, we typically store the dependent entity's `id` inside the independent entity’s document to establish the relationship.
- However, in **Many-to-Many** relationships, this approach can create confusion:

  - Let’s take the example of `courses` and `students`:
    - A single **course** can have many **students**
    - A single **student** can enroll in many **courses**
  - If we store all student IDs inside a course document and all course IDs inside a student document, it might resemble a **One-to-Many** structure from both sides. This blurs the distinction and makes it harder to manage.

- Maintaining Many-to-Many relationships becomes increasingly difficult when IDs are embedded directly within each other’s schema:

  - Data duplication
  - Update inconsistencies
  - Complex querying

- To solve this, we introduce a **separate schema** that acts as a **common link** between the two — known as a **Junction Schema** (or **Junction Table** in SQL).

  - In our `courses` and `students` example:
    - We create a new schema called `enrollment`
    - This schema stores references (IDs) to both the `student` and the `course`
    - Now, each enrollment document clearly represents a unique relationship between a student and a course

- **Why use a Junction Schema?**

  - Clearly represents Many-to-Many relationships
  - Easy to manage and scale
  - Helps in maintaining normalized data
  - Simplifies complex queries and analytics

- So in conclusion:
  - The `enrollment` schema is a **Junction Schema**
  - It **effectively manages Many-to-Many relationships** by acting as a bridge between the two entities
- //// Add A Junction Schema Diagram Here ////

#### **2.3 Implementation of junction schema which is effective way to manage many to many relationship**

##### **2.3.1 Create Schemas**

```js
// Course Schema
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
});
const Course = mongoose.model("Course", courseSchema);

// Student Schema
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const Student = mongoose.model("Student", studentSchema);

// Enrollment Schema (Junction Schema)
const enrollmentSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  enrolledAt: { type: Date, default: Date.now },
});
const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
```

---

##### **2.3.2 Create Routes**

```js
// Route 1: Create a Course
app.post("/courses", async (req, res) => {
  const course = await Course.create(req.body);
  res.status(201).json(course);
});

// Route 2: Create a Student
app.post("/students", async (req, res) => {
  const student = await Student.create(req.body);
  res.status(201).json(student);
});

// Route 3: Create an Enrollment (link Student ↔ Course)
app.post("/enrollments", async (req, res) => {
  const enrollment = await Enrollment.create({
    student: req.body.studentId,
    course: req.body.courseId,
  });
  res.status(201).json(enrollment);
});

// Route 4: Get all enrollments with student and course details
app.get("/enrollments", async (req, res) => {
  const enrollments = await Enrollment.find()
    .populate("student", "name email") // populate student fields
    .populate("course", "title description"); // populate course fields

  res.json(enrollments);
});
```

- Explain them by demonstrating through `Compass`

---

### **Scene 3.0 Cascading Strategies for Data Integrity & Preservation: Ensuring Unbroken Relationships**

#### **3.1 What is a Cascading Effect?**

A **cascading effect** in database management refers to a **change in one document (or record)** that automatically triggers **related changes** in other documents. This ensures that dependent data remains consistent and prevents the existence of **orphaned or inconsistent records**.

#### **3.2 Cascading Strategies**

**Goal:** To ensure **data integrity**, **relationship consistency**, and **preservation of critical associations** between related documents in a database.

In applications with **related data models**, any action on one entity (delete, update, insert) may require corresponding actions on other entities. This is known as **cascading**.

---

#### **3.2.1 Soft Delete**

#### What is it?

Instead of deleting a document permanently, we **mark it as deleted** using a flag like `isDeleted: true`.

#### Why is it useful?

- Allows recovery or "undo"
- Avoids accidental data loss
- Useful for audit logs or temporary hiding

#### Example:

```js
courseSchema.add({ isDeleted: { type: Boolean, default: false } });
```

Use `.find({ isDeleted: false })` in queries.

---

#### **3.2.2 Archiving**

##### What is it?

Instead of marking, we **move the document** from the main collection to a separate archival collection (e.g., `ArchivedCourses`).

##### Why is it useful?

- Keeps production data clean and fast
- Still allows historical access
- Helps in compliance or backup scenarios

##### Example:

```js
const archivedCourse = new ArchivedCourse(course.toObject());
await archivedCourse.save();
await course.deleteOne();
```

---

#### **3.2.3 Integrated Delete, Update, Restore from Archive**

##### What is it?

A **workflow** that performs coordinated actions across related models:

- When a `Course` is archived → move related `Enrollments`
- On restore → bring back both course and enrollments

##### Why is it useful?

- Maintains referential consistency
- Avoids orphan records
- Automates data transitions

##### Example Workflow:

- Archive a course → also archive or soft-delete its enrollments
- Restore the course → restore its enrollments too

---

#### **3.2.4 Prevention of Duplicate Entries**

##### What is it?

Prevent the creation of **redundant records** in many-to-many junction schemas (e.g., same student enrolling in the same course multiple times).

##### Why is it useful?

- Maintains data accuracy
- Avoids bloated data and duplicate efforts
- Enforces true uniqueness in relationships

##### Approaches:

**A. Programmatic Check**

```js
const existing = await Enrollment.findOne({ student, course });
if (existing) return res.status(400).json({ message: "Already enrolled" });
```

**B. Compound Unique Index**

```js
enrollmentSchema.index({ student: 1, course: 1 }, { unique: true });
```

Then handle `duplicate key` errors (error code `11000`).

**C. Preventing Accidental Inserts with (upsert: false)**

- When using updateOne or findOneAndUpdate, setting upsert: false ensures that no new document is created if the match is not found.
- Use it when you only want to update existing records, not insert new ones.

Example:

```js
await Enrollment.updateOne(
  { student: studentId, course: courseId },
  { $set: { enrolledAt: new Date() } },
  { upsert: false }
);
```

If no matching enrollment exists, this will do nothing — preventing accidental insertions.

---

#### **3.3 Pre/Post hooks to execute Cascading Stratergies**

In Mongoose, **pre** and **post** hooks are functions that run **before** or **after** certain actions like saving or removing a document. They allow you to add extra behavior to your database operations.

### Pre Hooks

- **Run before** the action (e.g., save, update).
- Use it to modify or validate data **before** it's saved.

**Example:**

```javascript
userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    this.password = hashPassword(this.password); // Hash password before saving
  }
  next(); // Continue to save the document
});
```

### Post Hooks

- **Run after** the action is completed (e.g., after saving, removing).
- Use it to perform tasks like logging or notifications **after** the action.

**Example:**

```javascript
userSchema.post("save", function (doc) {
  console.log("User saved:", doc); // Log after saving the user
});
```

### Summary

- **Pre:** Do something before saving, updating, or removing.
- **Post:** Do something after the action is done.

#### 3.1 Soft Deletion Of Course Using Pre/Post Hooks

- We can create cascading stratergies using these hooks, let us save, I want to delete a `course`,So the `course` will set `isDeleted` true, then all the enrollments of this course are no more a value, so I will be marking `isActive` as `false` for all enrollments, where this `course` was present, using `pre` hook
- Then `course` will be soft deleted
- Once `course` is deleted, then will add this course as `pastCourses` in the `student` schema for future ref, using `post` hook

##### Updated **Course Schema** (with pre and post hooks)

```js
const mongoose = require("mongoose");
const Enrollment = require("./Enrollment"); // Make sure path is correct
const Student = require("./Student"); // Make sure path is correct

const courseSchema = new mongoose.Schema({
  title: String,
  isActive: { type: Boolean, default: true },
});

// Pre Hook: Mark related enrollments as inactive when the course is soft-deleted
courseSchema.pre("save", async function (next) {
  if (!this.isModified("isActive")) return next(); // skip if isActive not changing

  if (this.isActive === false) {
    console.log(
      `🧹 Pre Hook: Soft-deleting enrollments for course ${this._id}`
    );

    // Update related enrollments
    const enrollments = await Enrollment.find({
      course: this._id,
      isActive: true,
    });
    const studentIds = enrollments.map((enroll) => enroll.student);

    // Add studentIds to this course for post-hook to use
    this.enrolledStudentIds = studentIds;

    // Soft delete enrollments
    await Enrollment.updateMany(
      { course: this._id },
      { $set: { isActive: false } }
    );
  }
  next();
});

// Post Hook: After course is saved (soft-deleted), push the courseId to each student's course list
courseSchema.post("save", async function () {
  if (this.isActive === false && this.enrolledStudentIds?.length) {
    console.log(
      `📬 Post Hook: Adding soft-deleted course ${this._id} to students' courses`
    );

    // Find students and add this courseId to their courses array
    await Student.updateMany(
      { _id: { $in: this.enrolledStudentIds } },
      { $addToSet: { pastCourses: this._id } } // Add to set ensures no duplicates
    );
  }
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
```

---

##### **Student Schema** (No changes needed here)

```js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  pastCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
```

---

##### **Enrollment Schema** (No changes needed)

```js
const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  enrolledAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
});

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
module.exports = Enrollment;
```

---

##### **Soft Delete Route**

```js
// Soft delete a course and deactivate its enrollments
app.delete("/courses/:id/", async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).send("Course not found");

  course.isActive = false;
  await course.save(); // triggers pre and post hooks

  res.send(
    "✅ Course soft-deleted, enrollments deactivated, students notified"
  );
});
```

---

##### Explanation:

- **Pre Hook:** The course’s related enrollments are marked as inactive before the course itself is saved.
- **Post Hook:** After the course is saved, the post hook pushes the course ID to the `courses` array in all students who were enrolled in that course.

- The pre hook is executed **before** saving the course, while the post hook is executed **after** the save operation is complete.

- With this setup, when a course is soft-deleted, all the related enrollments are deactivated, and the course ID is tracked in each student’s `courses` array, demonstrating how cascading logic can be implemented with Mongoose hooks.
