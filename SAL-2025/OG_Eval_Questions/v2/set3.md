## NEM Project

## Problem Statement: **Book Collaboration API**

Design and implement a RESTful API using **Node.js**, **Express**, and **MongoDB (Mongoose)** for a **Book Collaboration Platform**. The platform enables users to create, manage, and contribute to books. Each book is authored by one user and can optionally have another user as a contributor (e.g., co-author, editor).

---

## Data Models

### 1. **User Model**

The `User` model should include:

- **`name`** – Required string to store the user's name.
- **`email`** – Required and unique string to ensure no duplication.

Each user is uniquely identified by their email.

---

### 2. **Book Model**

The `Book` model should include:

- **`title`** – Required string serving as the name of the book.
- **`summary`** – Optional string with a brief overview of the book
- **`author`** – Required `ObjectId` referencing the user who created the book.
- **`contributor`** – Optional `ObjectId` referencing another user who is contributing to the book.
- **`publishedAt`** – Defaults to current date when book is created.

> **Note:** Chapters are embedded subdocuments, not separate collections.

---

## Functional Requirements

### User Functionalities

- Create a new user.
- Delete a user.
- Assign a user as a contributor to a book.
- Remove a user as a contributor from books.

---

### Book Functionalities

- Create a new book (linked to the author).
- Add or remove chapters from a book.
- Assign another user as a contributor.
- Get a single book by ID with populated `author` and `contributor` fields.\


### Special Route: Search books by
  - Partial title match (case-insensitive)

---

## Middleware Requirements

### 1. **Logger Middleware**

- Log for each request:
  - HTTP method
  - URL
  - Timestamp

### 2. **Rate Limiter Middleware**

- Limit all **GET** routes:
  - 5 requests per minute per IP

---

## Special Feature

To maintain relational integrity:

- When a user is deleted:
  - All books where the user is the **author** must be deleted.
  - If the user was a **contributor**, set the contributor field to `null`.

---

## Best Practices

- Folder Structure:
  - `models/`
  - `controllers/`
  - `routes/`
  - `middlewares/`
  - `config/`

- Use `.env` for config (`PORT`, `MONGO_URI`)
- Use `mongoose.populate()` to resolve references
- Modular and clean controller structure

---

