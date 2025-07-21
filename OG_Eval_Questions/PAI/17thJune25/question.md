# **Mini LMS - Course Enrollment System**

---

## Objective

Design and develop a backend API for a **Mini Learning Management System (LMS)** using **Node.js, Express.js, MongoDB, and Mongoose**.

---

## Core Modules & Features to Implement

### **User Module**

- Allow user registration.
- Users can have two roles: **Student** and **Instructor**.
- Implement necessary validations:

  - Name, email, and role are mandatory.
  - Email should be unique and properly formatted.

---

### **Course Module**

- Allow instructors to create courses.
- A course should include:

  - Title, description, instructor reference, start date, end date, allowed capacity (minimum 5 and maximum 15), enrolled capacity (default: 0; increases as students enroll), `isStarted`, `isCompleted`.

- Validate that:

  - Only instructors can create courses.
  - End date must be after the start date.
  - Title must be unique.

---

### **Enrollment Module**

- Allow students to enroll in courses.
- Validate that:

  - A student cannot enroll in the same course multiple times.
  - Enrollment is not allowed if the course capacity is full — return appropriate responses in such cases.

---

## Additional Features

### **Get My Courses API**

- Build an API that:

  - If a student ID is provided → return all courses enrolled by that student.
  - If an instructor ID is provided → return all courses created by that instructor.

### **List Enrollments**

- Return enrollment details, along with relevant populated data (student, course, instructor).

### **Start Course**

- Accept `courseId` and `userId` to mark the course as started.
- `isStarted` should be updated to `true`.
- Set the start date as the current date and the end date as `start date + 30 days`.
- Ensure that the course meets the minimum allowed capacity; otherwise, return:
  `"Course with less than minimum allowed capacity cannot be started."`
- Only instructors can start a course.

### **End Course**

- Accept `courseId` and `userId` to mark the course as completed.
- `isCompleted` should be updated to `true`.
- Validate that the current date is not earlier than the end date; otherwise, restrict ending the course.
- Only instructors can end a course.

---

## Schema Expectations (To be designed by you)

- **User**: basic info, role, created date.
- **Course**: title, instructor reference, start/end date, allowed capacity, enrolled capacity, status flags (`isStarted`, `isCompleted`).
- **Enrollment**: student reference, course reference, enrolled date.

_(Design schemas carefully focusing on relationships, constraints, and validations.)_

---

## Endpoints (You have to define based on the problem statement and features specified above.)

---

## Middleware Expectations

Implement custom middlewares to handle:

- **Request Logger Middleware**

  - Log incoming request method, URL, and timestamp.

- **Role Checking Middleware**

  - Only instructors can create or modify courses.
  - Only students can enroll in courses (only once).

- **Undefined Routes Handling**

  - Gracefully handle unknown routes.

- **(Create and use any additional middlewares if necessary)**

---

### Other Instructions

- Use proper file and folder structure.
- Use `.env` for sensitive environment variables.
- Commit frequently (at least every 20 minutes).
- Submit the Masai GitHub repository link once completed.

---
