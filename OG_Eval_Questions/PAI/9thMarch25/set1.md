## JavaScript Problem: Custom Object Filter

### **Objective:**

Create a **custom filter function** that behaves like JavaScript’s `.filter()` — but it should work on an **array of objects**, not just numbers.

---

### **Reference Example (for understanding only):**

```js
const numbers = [1, 2, 3, 4, 5, 6];

const isEven = (num) => num % 2 === 0;

const result = numbers.filter(isEven);
console.log(result); // Output: [2, 4, 6]
```

---

### **Your Task:**

1. Write a function named **`customFilter`** that:

   - Takes two arguments:
     - An array of **objects**
     - A **callback function**
   - Returns a **new array** containing only those objects for which the **callback returns `true`**.

2. - Use arrow functions
   - Use the spread operator
   - **Do not use `.filter()`**

3. After completing the code, answer:
   - Which is the **callback function**?
   - Which is the **higher-order function**?

---

### **Data to Use:**

```js
const users = [
  { name: "Alice", age: 24 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 16 },
  { name: "Eve", age: 22 },
  { name: "Frank", age: 19 },
  { name: "Grace", age: 15 },
];
```

---

### **Expected Usage:**

```js
// A function that takes a user object and returns true if the user's age is 18 or above
const isAdult = // you write this!

const adults = customFilter(users, isAdult);
console.log(adults);
```

---

### **Expected Output:**

```js
[
  { name: "Alice", age: 24 },
  { name: "Charlie", age: 30 },
  { name: "Eve", age: 22 },
  { name: "Frank", age: 19 },
];
```

---

### Final Step:

After writing your function, clearly mention:

- 👉 **Callback Function**: ****\_****
- 👉 **Higher-order Function**: ****\_****

---

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
- **`ingredients`** – An embedded array of subdocuments. Each ingredient in this array should have:

  - `name`: A required string representing the name of the ingredient.
  - `quantity`: A string indicating the amount (e.g., "2 cups", "1 tsp").
  - `type`: A string indicating the category of the ingredient (e.g., "vegetable", "spice", "dairy").

- **`createdBy`** – A required reference (`ObjectId`) to a user who created the recipe. This establishes ownership.
- **`assignedToPrepare`** – An optional reference (`ObjectId`) to a user who is assigned to prepare the recipe.
- **`createdAt`** – A timestamp that defaults to the current date and time when the recipe is created.

> **Note:** Ingredients are embedded subdocuments inside the recipe schema, not separate collections.

---

## Functional Requirements

### User Functionalities

- Create a new user.
- Assign user to prepare Recepies (`assignedToPrepare`)
- Delete a user
- Remove user which assigned to prepare Recepies (`assignedToPrepare`)

---

### Recipe Functionalities

- Create a new recipe (linked to the creator).
- Add ingredients to a recipe.
- Remove ingredients from a recipe.
- Assign another user to prepare the recipe.
- Get a single recipe by ID with populated `createdBy` and `assignedToPrepare`.
- Fetch recipes by:
  - Title (partial match, case-insensitive)
  - Ingredient name
  - Created by a specific user (`userId`)
  - Assigned to a specific user (`assignedToPrepare`)
- Support pagination and sorting (by `title`) when listing recipes.

---

### Quantity Adjustment by Servings

- Create a route to get the list of ingredients adjusted by number of servings.
  - **Route:** `GET /recipes/:id/ingredients?servings=<number>`
  - This should scale the `quantity` of all ingredients by the provided servings multiplier.
  - **Example:**
    - Original: `2 cups of rice`
    - Query: `?servings=3`
    - Result: `6 cups of rice`

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

## Special Note

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
