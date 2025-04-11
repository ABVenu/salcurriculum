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

**3.0** Implementation of Relationships

- 3.1 - Take a ideal schemas, where all the three can be explained easily
- 3.2 - Implement one to Many relationship Schema, as it is general case
- 3.3 - Demonstrate Relationship by create respective routes
- 3.4 - Relationship means not only creating Schemas, it is completed, only when it associated Routes are created

## Pitfalls

**1.0**

- need of relationships

**2.0**

- clear diffrentiation between types of relationships and which one to choose in case of projects

**3.0**

- Implementing which type of relationship to be used
- Relationhsip means not only just creating schemas, it of how routes/queries are implemented

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

Perfect! Here's the continuation of your documentation, expanding **Scene 2.0** into the detailed subpoints you provided. I’ve maintained a professional and instructional tone, with clean formatting and concise explanations:

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