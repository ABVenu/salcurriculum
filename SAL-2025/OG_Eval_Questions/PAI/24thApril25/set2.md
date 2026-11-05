## Book Renting App

### Problem Statement

Build a **Node.js + Express + MongoDB** application named **Book Renting App**, where two roles—**Author** and **Reader**—can interact with the platform based on their permissions.

The application enables authors to share their books and readers to rent them, with proper rental restrictions and automation. allowed category of books are `science`, `fiction`, `history` & `geography`

Create schemas, maintain relationships in such a way that, it should support all the features asked below

---

### Functional Requirements

#### Roles:

- **Author**: Can perform full **CRUD** operations on books they own.
- **Reader**: Can **view** available books and **rent** them (with a limit).

---

### Database Design

- Create a **flexible schema design** that accommodates the functionalities and roles described above.
- Maintain proper **relationships** between users (author, reader) and books.
- Ensure book ownership and rental status are clearly represented.

---

### Basic Features

#### For **Author**:

- Add, view, update, and delete books.
- Can only manage their own books.

#### For **Reader**:

- View all books that are **available**.
- Rent a book — this should:
  - Mark the book as **rented**
  - Store the reader’s ID for tracking

---

### Additional Features

- **Cron Job + Redis Integration**:
  - Run a **cron job every 2 minutes**.
  - Rented books should be **automatically made available** after this duration.
  - Use **Redis** to manage/store BookIds which ae rented

---

### Authentication

- Implement `/signup` and `/login` routes.
- **Store raw passwords** (no password hashing needed).
- On login, **generate a JWT token** and use it for all protected operations.

---

### Middlewares

1. **Auth Middleware**:

   - Checks JWT token validity.
   - Verifies the user’s role (`author` or `reader`) for protected route access.

2. **Deletion Watcher Middleware**:

   - Prevents deletion of any book currently **rented**.

3. **Rent Control Middleware**:
   - Restricts a **Reader** from renting **more than 3 books at a time**.

---

### Other Instructions

- **Commit your code every 20 minutes** or upon completing meaningful progress.
- Follow a **clean and modular folder structure**:
  - `routes/`, `controllers/`, `models/`, `middlewares/`, `cron/`, `config/`
- Use a `.env` file for sensitive data like `PORT`, `MONGO_URI`, `JWT_SECRET`, etc.
- Submit your project by pushing to **Masai GitHub** and sharing the repository link via the portal.

---
