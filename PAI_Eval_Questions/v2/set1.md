## NEM Project

## Problem Statement: **Recipe Collaboration API**

Design and implement a RESTful API using **Node.js**, **Express**, and **MongoDB (Mongoose)** for a **Recipe Collaboration Platform**. The platform enables users to create, manage, and assign recipes. Each recipe consists of a list of ingredients and is associated with users both as creators and preparers.

---

## Data Models

### 1. **User Model**

The `User` model should include the following fields:

- **`name`** – This field is required and should store the user's name as a string.
- **`email`** – This is also a required string field and must be unique for every user in the system to avoid duplication.

The combination of these fields uniquely identifies each user and ensures clean user management within the platform.

### 2. **Recipe Model**

The `Recipe` model should include the following fields:

- **`title`** – A mandatory string that serves as the recipe's name or heading.
- **`description`** – An optional string providing more details about the recipe.
- **`ingredients`** - A string indicating the category of the ingredient (e.g., "vegetable", "spice", "dairy").

- **`createdBy`** – A required reference (`ObjectId`) to a user who created the recipe. This establishes ownership.
- **`assignedToPrepare`** – An optional reference (`ObjectId`) to a user who is assigned to prepare the recipe.
- **`createdAt`** – A timestamp that defaults to the current date and time when the recipe is created.

---

## Functional Requirements

### User Functionalities

- Create a new user.
- Assign user to prepare Recepies (`assignedToPrepare`)
- Delete User
- Remove user which assigned to prepare Recepies (`assignedToPrepare`)

---

### Recipe Functionalities

- Create a new recipe (linked to the creator).
- Add ingredients to a recipe/ Remove ingredients from a recipe.
- Assign another user to prepare the recipe.
- Get a single recipe by ID with populated `createdBy` and `assignedToPrepare`.

### Special Route: Search Recipe by

- Fetch recipes by:
  - Title (partial match, case-insensitive)

---

## Middleware Requirements

### 1. **Custom Logger Middleware**

- Create a custom middleware that logs the following for every request:
  - HTTP method
  - Request URL
  - Timestamp

### 2. **Rate Limiting Middleware**

- Apply a rate limiter to **all GET routes**:
  - Limit to **5 requests per minute per IP**
  - After 1 minute, the counter resets automatically

---

## Specail Feature

To establish a **complete and consistent sense of relationship**, ensure the following edge cases are handled:

- When a user is deleted:
  - All recipes where the user is the **creator (`createdBy`)** must be deleted automatically.
  - The user must be **removed** (i.e., set to `null`) from all recipes where they were assigned as the **preparer (`assignedToPrepare`)**.

---

## Best Practices & Conventions

- Maintain a clean folder structure: `models/`, `routes/`, `controllers/`, `middlewares/`, `config/`
- Use `.env` for sensitive configuration (`PORT`, `MONGO_URI`, etc.)
- Use `mongoose.populate()` to fetch relational data in recipes
- Use modular controllers and separation of concerns

---

## Submission Instructions

- Submit the Masai Repo Link
