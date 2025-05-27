## Skill-Based Job Application System

### Problem Statement

Build a **Node.js + Express + MongoDB** application called **Skill-Based Job Application System**, where two types of users—**Admin** and **Candidate**—interact with the system based on their roles.

Admins can create and manage job postings. Candidates register with a list of predefined skills and can view jobs relevant to their skills, apply for jobs, and withdraw applications. The system should support **JWT-based authentication**, **Redis caching** for performance, and **email notifications** on job applications.

---

### Functional Requirements

#### Roles:

- **Admin**: Can perform full CRUD operations on job postings.
- **Candidate**: Can view matching jobs, apply for jobs, and withdraw applications.

---

### Database Design

- Create a **schema design** that supports all possibilities mentioned in this problem statement.
- Maintain proper **relationships** between users and jobs, where:

  - Users have roles (`admin`, `candidate`)
  - Candidates have a **mandatory skills array** (must be provided at signup)
  - Jobs store required skills and maintain an **applicants array** of Candidate IDs

- Ensure job queries are optimized for skill matching using MongoDB queries and indexing where necessary.

---

### Basic Features

#### For **Admin**:

- Create, view, update, and delete job listings.
- Only manage jobs created by themselves.

#### For **Candidate**:

- View jobs where at least one required skill matches any of their listed skills.
- Apply for a job — this should:

  - Push the candidate's ID into the job's `applicants` array
  - Send an email notification to the candidate with relevant job info

- Withdraw application — this should:

  - Remove the candidate’s ID from the `applicants` array

---

### Additional Features

- **Nodemailer Integration**:

  - Send an email to the candidate when they apply for a job.
  - Include job title, description, admin’s name, and timestamp of application.

- **Redis Caching**:

  - Use Redis to cache the response of the **matching jobs** route for each candidate.
  - Invalidate or refresh the cache if a job is updated or a candidate updates their skills.

---

### Authentication

- Implement `/signup` and `/login` routes.
- **Store raw passwords** (no password hashing needed).
- On login, **generate a JWT token** and use it for all protected operations.

---

### Middlewares

1. **Role Based Auth Middleware**:

   - Verifies JWT token for all protected routes also confirms that the user has the appropriate role (`admin` or `candidate`) for accessing specific features.

2. **Validation Middleware** (if required):

   - Ensures candidate provides a **non-empty skills array** during signup.

---

### **Other Instructions**

- **Commit every 20 minutes** or after completing a logical unit of work.
- **Maintain a clean coding structure** with proper file and folder separation.
- **Segregate code** into appropriate folders like `routes/`, `controllers/`, `models/`, `middlewares/`, etc.
- **Use a `.env` file** to store sensitive information like `PORT`, `MONGO_URI`, `JWT_SECRET`, `EMAIL_USER`, `EMAIL_PASS`, etc.
- **Finally, submit your GitHub repo link on the Masai GitHub Submission Portal**.

---
