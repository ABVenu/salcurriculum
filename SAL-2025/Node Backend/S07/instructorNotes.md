#### Advanced Mongoose: Complex Schemas, Validations & Queries

### Learning Objectives

- Schema Validations in the mongoose
- Demonstration of Schema Validations
- Complex Schemas - need and importance
- Types of Complex Schemas and their Implementation
- Exploring Mongoose beyond CRUD,
- Using the inbuilt operators
- Cursor Methods

## Scenes

**1.0** Schema Validations

- 1.1 - Why schema validation needed
- 1.2 - Applying a typical schema validation
- 1.3 - Demonstration of schema validation by inserting invalid data

**2.0** Complex Schemas

- 2.1 - Why complex schemas are needed
- 2.2 - Types of Complex Schemas
- 2.3 - demonstartion of Nested Document
- 2.4 - demonstration of SubDocument
- 2.5 - Brief overview of Documents by reference
- 2.6 - merits/demerits, use case of all the three complex schema

**3.0** Exploring Mongoose Beyond CRUD

- 3.1 - life without inbuilt queries
- 3.2 - demonstration of inbuilt queries like $gte, $lte, $ne, $in, $and, $or etc
- 3.3 - demonstration of cursor methods like .skip(), .limit() etc

## Pitfalls

**1.0**

- How schema validation works?
- what are the things avaialable in schema validation, apart from few regular methods

**2.0**

- Understanding working of subdocument
- Understanding diffrence between nested Document/Sub document
- confusion may create when `_id` is created for `main document` and also for `subdocument` in the same collection

**3.0**

- identifying and applying appropriate query functions
- many students just end with basic CRUD queries

## Content/Pedagagoy

**Scene 1.0 Schema Validation**

### 1.1 **Why Schema Validations are required**

- Mongoose allows to define a structure of data, but how it is ensured that right/acceptable data is being added into the DB??
- This is possible manually by applying some middlewares, but that is not appropriate method, when more and more schemas are added to the system
- Mongoose is powerful driver software that allows the developers to add the validations like creating the `Schemas`, so that whenever data is been entering into the system, the schema validstors will check the incoming data and allow them if fine or else will throw error if not fine.

### 1.2 **Applying a typical schema validation**

- verbally explain, exactly where these are appiled and convience them that no extra files/functions needed to create these validations, instead just apply them while crating schema
- The typical schema validators are `required`, `unique`, `enum`, `min`, `max`, also we can we write custom functions as well, if suitable inbuilt validators are not available.
- **Common Mongoose Validation Terminologies**

  1. **`required`**:

  - Ensures that the field must be provided.
  - If not present, Mongoose will throw a validation error.
  - Example:
    ```javascript
    required: true;
    ```

  2. **`default`**:

  - Specifies a default value if the field is not provided.
  - Example:
    ```javascript
    default: "No description available"
    ```

  3. **`type`**:

  - Defines the type of the field (e.g., `String`, `Number`, `Boolean`, `Date`).
  - Example:
    ```javascript
    type: String;
    ```

  4. **`enum`**:

  - Restricts the field’s value to a predefined set of values.
  - Example:
    ```javascript
    enum: ["male", "female", "non-binary"];
    ```

  5. **`min`**:

  - Ensures the field's value is greater than or equal to the specified minimum.
  - Applies to `Number` or `Date` types.
  - Example:
    ```javascript
    min: 18;
    ```

  6. **`max`**:

  - Ensures the field's value is less than or equal to the specified maximum.
  - Applies to `Number` or `Date` types.
  - Example:
    ```javascript
    max: 65;
    ```

  7. **`match`**:

  - Validates the field against a regular expression.
  - Example (email validation):
    ```javascript
    match: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    ```

  8. **`unique`**:

  - Ensures that the field value is unique across all documents in the collection.
  - Example:
    ```javascript
    unique: true;
    ```

  9. **`validate`** (Custom Validator):

  - Allows you to define custom validation logic using a function.
  - Example:
    ```javascript
    validate: {
    validator: function(v) {
        return v.length >= 3;
    },
    message: "Name must be at least 3 characters long"
    }
    ```

  10. **`trim`**:

      - Removes leading and trailing whitespaces from a string.
      - Example:

      ```javascript
      trim: true;
      ```

  11. **`lowercase` / `uppercase`**:

      - Converts the string to lowercase or uppercase before storing it in the database.
      - Example:

      ```javascript
      lowercase: true;
      ```

  12. **`immutable`**:
      - Prevents the field from being changed after the document is created.
      - Example:
      ```javascript
      immutable: true;
      ```

### 1.3 **Demonstration of schema validation by inserting invalid data**

```javascript
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  age: {
    type: Number,
    min: 18,
    max: 65,
    default: 18,
  },
  gender: {
    type: String,
    enum: ["male", "female", "non-binary"],
    default: "non-binary",
  },
  bio: {
    type: String,
    trim: true,
    default: "No bio provided",
    maxlength: 500,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  preferences: {
    theme: {
      type: String,
      enum: ["dark", "light"],
      default: "light",
    },
  },
  customField: {
    type: String,
    validate: {
      validator: function (v) {
        return v !== "forbidden"; // Custom validation rule
      },
      message: "CustomField cannot have the value 'forbidden'",
    },
  },
});

module.exports = mongoose.model("User", userSchema);
```

---

## **Scene 2.0 Complex Schemas**

### **2.1 Why Complex Schemas Are Needed**

- The purpose of creating schemas is not just to define a simple, straightforward structure. In real-world applications, schemas are often **complex in nature**, involving **arrays of objects, nested objects, or relationships between entities**.
- Consider an example of a **Course Schema** in an LMS (Learning Management System). A course is not just a standalone entity—it includes multiple **lectures, instructors, students, assignments, etc.** Each of these is **not just raw data but separate entities** with their own properties.
- The challenge is: **How do we structure these entities within the Course Schema?** This is where **complex schemas** come into play, allowing us to efficiently manage and organize interconnected data.

---

### **2.2 Types of Complex Schemas**

These separate entities can be structured, linked, or related in multiple ways. They are broadly classified into three types:

1. **Nested Documents**
2. **Embedded Documents (Subdocuments)**
3. **Documents Linked by Reference**

#### **2.2.1 Nested Documents**

- In this approach, related entities are directly embedded as part of the schema. These can either be **nested objects or arrays of objects**.
- This method is useful when the related data is **small and tightly coupled with the main document**.

##### **Example:**

```javascript
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  startDate: Date,
  endDate: Date,
  isActive: Boolean,
  lectures: [
    {
      title: String,
      videoUrl: String,
      startDateTime: Date,
      endDateTime: Date,
      noOfAttendees: Number,
    },
  ],
});
```

- Here, the `lectures` field is an **array of objects** where each object contains complete lecture details directly stored in the `Course` schema.
- This structure allows retrieving all course-related data in a **single query**, making reads faster.

---

#### **2.2.2 Embedded Documents (Subdocuments)**

- In this approach, a **dedicated schema is created** for related entities, which is then used as a **subdocument** inside the main schema.
- Unlike nested documents, subdocuments use the **Mongoose Schema constructor**, making them more structured.

##### **Example:**

```javascript
const lectureSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  startDateTime: Date,
  endDateTime: Date,
  noOfAttendees: Number,
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  lectures: [lectureSchema], // Using a subdocument schema
});
```

- Here, a subdocument schema (`lectureSchema`) is created separately and embedded inside the `Course` schema.
- **How it works:** When a `Course` is created, its `lectures` are added at the same time. Mongoose will automatically generate an **ObjectId** for each embedded lecture.

##### **Sample Request Body for Creating a Course:**

```json
{
  "title": "NEM Backend Course",
  "description": "A Complete Guide for Node Backend",
  "lectures": [
    {
      "title": "Intro to Node",
      "videoUrl": "https://youtu.be/PvS9AmP9jfo?si=l2e2-Ilz8rtItUDF",
      "startDateTime": "2025-04-03T10:00:00.000Z",
      "endDateTime": "2025-04-03T12:00:00.000Z",
      "noOfAttendees": 65
    }
  ]
}
```

- **Updating or Adding Lectures:** You can add more lectures using **update methods and `$push` operations** in MongoDB.

---

#### **2.2.3 Documents Linked by Reference (Normalization)**

- In this approach, related entities are stored as **separate documents** in different collections, and they are linked using **ObjectIds**.
- This is useful for **one-to-many and many-to-many relationships**, such as **students enrolled in multiple courses** or **courses having thousands of lectures**.

##### **Example:**

```javascript
const lectureSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  startDateTime: Date,
  endDateTime: Date,
  noOfAttendees: Number,
});
const LectureModel = mongoose.model("Lecture", lectureSchema);

const courseSchema = new mongoose.Schema({
  title: String,
  lectures: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lecture" }],
});
const CourseModel = mongoose.model("Course", courseSchema);
```

- Here, **lectures are stored in a separate collection** (`lectures` collection), and the `Course` schema only stores **ObjectIds referencing Lecture documents**.
- When retrieving course data, we can use **Mongoose's `.populate()` method** to fetch full lecture details.

##### **How It Works:**

1. A new `lecture` is created and saved in the `Lecture` collection.
2. The generated `lecture._id` is stored inside the `lectures` array in the `Course` schema.
3. To retrieve a course along with its lectures, we use `.populate("lectures")`.

**Advantage:** Efficient for large datasets, as lectures can be updated independently.  
**Disadvantage:** Requires an **extra query** to fetch full lecture details.

🔹 A more detailed discussion on **handling relationships with ObjectIds** will be covered in the next session on **Relationships**.

---

### **2.3 Choosing the Right Schema Design**

Each schema design has its own benefits and trade-offs. Choosing the right approach depends on **data size, access patterns, and performance needs**.

| Schema Type                           | Advantages                                                    | Disadvantages                                  | Best Use Case                                                                 |
| ------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------- |
| **Nested Documents**                  | Fast read operations, all data in a single document           | Can cause performance issues with deep nesting | Small, tightly related data (e.g., course with 5–10 lectures)                 |
| **Embedded Documents (Subdocuments)** | Structured, easy to manage, automatically generates ObjectIds | Cannot be updated independently                | When updates are rare, but structure is important                             |
| **Documents Linked by Reference**     | Efficient for large datasets, independent updates             | Requires extra queries (`populate`)            | Large datasets, shared entities (e.g., students enrolled in multiple courses) |

---

Here’s your content with improved grammar, spelling, and clarity while keeping the original meaning intact:  

---

## **Scene 3.0: Exploring MongoDB Beyond CRUD**

### **3.1 Query Operators in MongoDB**

- So far, we have familiarized ourselves with databases and their drivers. However, working with databases goes beyond just performing CRUD operations—there is much more to explore.
- As mentioned earlier, an ideal database should support a wide range of queries that cater to real-world needs. In this section, we will focus on essential query operations that go beyond basic CRUD.
- MongoDB and Mongoose offer various operators and methods that enhance our ability to filter, retrieve, and manipulate data efficiently.

MongoDB provides several operators that allow us to perform more advanced queries beyond basic CRUD operations:

#### **Comparison Operators:**

- `$gt` (greater than)
- `$gte` (greater than or equal to)
- `$lt` (less than)
- `$lte` (less than or equal to)
- `$eq` (equal to)
- `$ne` (not equal to)
- `$in` (matches any value in an array)
- `$nin` (does not match any value in an array)

#### **Logical Operators:**

- `$and` (matches documents that satisfy all conditions)
- `$or` (matches documents that satisfy at least one condition)
- `$not` (negates an expression)
- `$nor` (matches documents that fail all conditions)

##### Let's use the following `Course` schema and write various queries based on it:

```javascript
const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  videoUrl: { type: String, required: true },
  startDateTime: { type: Date, required: true },
  endDateTime: { type: Date, required: true },
  noOfAttendees: { type: Number, min: 0, default: 0 },
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true, trim: true },
  description: { type: String, required: true, trim: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  isActive: { type: Boolean, default: true },
  lectures: [lectureSchema], // Using a subdocument schema
  studentsEnrolled: { type: Number, min: 0, default: 0 },
  createdAt: { type: Date, default: Date.now, immutable: true },
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
```

---

### **Basic Queries**

#### **Find all courses**

```javascript
const courses = await Course.find();
console.log(courses);
```

#### **Find a specific course by title**

```javascript
const course = await Course.findOne({ title: "Full Stack Web Development" });
console.log(course);
```

#### **Find a course by ID**

```javascript
const course = await Course.findById(courseId);
console.log(course);
```

#### **Get all active courses**

```javascript
const activeCourses = await Course.find({ isActive: true });
console.log(activeCourses);
```

---

### **Query Operators**

#### **Find courses with at least 10 students enrolled**

```javascript
const popularCourses = await Course.find({ studentsEnrolled: { $gte: 10 } });
console.log(popularCourses);
```

#### **Find courses that start after a certain date**

```javascript
const upcomingCourses = await Course.find({
  startDate: { $gt: new Date("2025-06-01") },
});
console.log(upcomingCourses);
```

#### **Find courses starting between two dates**

```javascript
const coursesBetweenDates = await Course.find({
  startDate: { $gte: new Date("2025-05-01"), $lte: new Date("2025-06-01") },
});
console.log(coursesBetweenDates);
```

#### **Find courses with multiple possible titles using `$in`**

```javascript
const courses = await Course.find({
  title: { $in: ["MERN Stack", "Full Stack Web Development"] },
});
console.log(courses);
```

#### **Find courses that are either inactive or have fewer than 5 students**

```javascript
const courses = await Course.find({
  $or: [{ isActive: false }, { studentsEnrolled: { $lt: 5 } }],
});
console.log(courses);
```

#### **Find courses that are both active and have more than 20 students**

```javascript
const courses = await Course.find({
  $and: [{ isActive: true }, { studentsEnrolled: { $gt: 20 } }],
});
console.log(courses);
```

---

### **3.2 Cursor Methods for Efficient Querying**

MongoDB provides powerful cursor methods to refine query results:

- `.skip(n)`: Skips `n` number of documents.
- `.limit(n)`: Limits the number of documents returned.
- `.sort({ field: 1/-1 })`: Sorts the results in ascending (`1`) or descending (`-1`) order.

With cursor methods, we can efficiently create paginated data while maintaining the required order.

---

### **Queries with Cursor Methods**

#### **Get the first 5 courses (`limit()`)**

```javascript
const courses = await Course.find().limit(5);
console.log(courses);
```

#### **Skip the first 10 courses and get the next 5 (`skip()` and `limit()`)**

```javascript
const courses = await Course.find().skip(10).limit(5);
console.log(courses);
```

#### **Sort courses by start date in ascending order (`sort()`)**

```javascript
const courses = await Course.find().sort({ startDate: 1 });
console.log(courses);
```

#### **Sort courses by the number of students enrolled in descending order**

```javascript
const courses = await Course.find().sort({ studentsEnrolled: -1 });
console.log(courses);
```

---

### **3.3 Searching with Regular Expressions (Regex)**

MongoDB supports regex for flexible text searching, making it easier to search for patterns within string fields.

#### **Example: Find courses whose title contains "web" (case-insensitive search)**

```javascript
const courses = await Course.find({ title: { $regex: /web/i } });
console.log(courses);
```

#### **Find courses whose description starts with "Learn"**

```javascript
const courses = await Course.find({ description: { $regex: /^Learn/ } });
console.log(courses);
```

#### **Find courses whose title ends with "Development"**

```javascript
const courses = await Course.find({ title: { $regex: /Development$/ } });
console.log(courses);
```

---