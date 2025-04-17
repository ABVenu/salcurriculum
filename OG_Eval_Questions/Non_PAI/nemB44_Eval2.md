## Problem Statement: Task Management App

### Overview

Design and develop a **Task Management App** using **Express.js** where users can create and assign tasks, and roles like **admin** and **user** determine access and control. The app should include authentication, authorization, email notifications, logging, rate-limiting, and task aggregation functionalities to ensure secure and efficient task tracking.

---

### User Roles

1. **Admin**

   - Has full access to all tasks and users.
   - Can view, update, delete any task.
   - Can manage user roles and assignments.

2. **User**
   - Can **create** new tasks.
   - Can **assign** tasks to other users.
   - Can view:
     - Tasks they created.
     - Tasks assigned to them.
   - Can **mark a task as completed** only if they are the assigned person.

---

### Features & Functional Requirements

1. **Authentication & Authorization**

   - User registration with **hashed passwords** using bcrypt.
   - Login functionality that issues a **JWT token**.
   - Middleware to protect routes based on **roles and ownership**.
   - **Role-Based Access Control** (RBAC):
     - Only the **assigned person** can mark a task as completed.
     - Only the **task creator** can reassign or delete the task.
     - **Admins** can perform any operation.

2. **Task Functionality**

   - Users can create tasks with fields: `title`, `description`, `dueDate`, `status`, `createdBy`, `assignedTo`.
   - Tasks can be assigned to other users.
   - Assigned user can update task `status` to `completed`.
   - Email notifications must be sent:
     - When a task is assigned.
     - When a task is marked completed.
     - Notification must be sent to both the **creator** and **assigned user**.

3. **Task Visibility**

   - Users should only be able to see:
     - Tasks they **created**.
     - Tasks that are **assigned to them**.
   - Admin can see **all tasks**.

4. **Aggregation Routes**

   - **Tasks grouped by user**: Return the number of tasks assigned to each user.
     - Endpoint: `GET /tasks/grouped-by-user`
     - Output: An array with user details and task counts, e.g.,
       ```json
       [
         { "user": "User A", "tasksAssigned": 5 },
         { "user": "User B", "tasksAssigned": 3 }
       ]
       ```
   - **Tasks grouped by completion status**: Return the number of tasks grouped by their completion status.
     - Endpoint: `GET /tasks/grouped-by-completion`
     - Output:
       ```json
       {
         "completed": 10,
         "notCompleted": 5
       }
       ```

5. **Logging & Monitoring**

   - Use `morgan` middleware to log all incoming requests with request method, path, and status.
   - Logs should also include timestamp and user (if authenticated).

6. **Rate Limiting**
   - Apply a **rate limiter middleware** on all **GET** requests to prevent abuse (e.g., limit to 100 requests per 15 minutes per IP).

---

### Email Notification

Use a service like **nodemailer** to send structured emails with:

- Task details (title, description, due date).
- Action performed (assigned or completed).
- Participants (creator, assignee).

---

### Tech Stack Suggestions

- **Backend:** Express.js
- **Authentication:** bcrypt, JWT
- **RBAC:** Custom middleware based on role and ownership
- **Email:** nodemailer (or a mock SMTP for dev)
- **Logger:** morgan
- **Rate Limiting:** express-rate-limit
- **Database:** MongoDB (with Mongoose), or any relational DB of choice

---

### **User Routes** (Protected with JWT)

1. Create a new task.
2. View tasks created by the user and tasks assigned to the user.
3. Assign task to user (only task creator can assign)
4. Mark a task as completed (only assigned user can do this).

---

### **Admin Routes** (Protected with JWT and Admin role)

1. View all tasks (admin can see all tasks).
2. View task count grouped by completion status (admin).
3. Update a task (admin can update any task).
4. Delete a task (admin can delete any task).
5. Create a new user (admin).
6. View all users (admin).

---

### **Other Instructions**

- **Commit every 20 minutes** or after completing a logical unit of work.
- **Maintain a clean coding structure** with proper file and folder separation.
- **Segregate code** into appropriate folders like `routes/`, `controllers/`, `models/`, `middlewares/`, etc.
- **Use a `.env` file** to store sensitive information like `PORT`, `MONGO_URI`, `JWT_SECRET`, etc.
- **Finally, submit your GitHub repo link on the Masai GitHub Submission Portal**.
