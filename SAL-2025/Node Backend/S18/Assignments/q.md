
### 📘 **Assignment: From Code to Cloud - Implementing Professional DevOps Practices**

#### 📌 **Problem Statement**

You have already built and tested a fully functional Todo API with user authentication and CRUD operations. Now, it's time to elevate your project from a local application to a professionally engineered service.

This assignment requires you to take your existing, tested API, refactor it according to professional coding standards, and then build a complete Continuous Integration and Continuous Deployment (CI/CD) pipeline using GitHub Actions and Docker. The final goal is to have your application automatically tested and deployed to the cloud whenever you push a change.

---

### 🚀 **Assignment Tasks**

You will start with the code from your previous "Integration Testing with Auth and CRUD" assignment.

#### 1. **Code Refactoring & Standardization (Mandatory)**

Before automating, ensure your codebase is clean, scalable, and secure. Apply the following standard practices:

* **Folder Structure:** Organize your code into a logical structure (e.g., `controllers`, `routes`, `services`, `middlewares`, `config`, `utils`).
* **Naming Conventions:** Ensure all files, variables, and functions follow a consistent naming scheme (`camelCase`, `PascalCase`, etc.).
* **Environment Variables:** Move all secrets (database URI, JWT secret, port) into a `.env` file and use `dotenv` to manage them. Ensure `.env` is in your `.gitignore`.
* **Centralized Error Handling:** Implement a single, centralized error-handling middleware to manage all application errors.
* **Consistent Responses:** Create a utility or a standard format for all API responses (e.g., `{ success, data, message }`).

#### 2. **Continuous Integration (CI) with GitHub Actions (Mandatory)**

Automate your testing process to ensure code quality with every push.

* Create a GitHub Actions workflow file at `.github/workflows/ci.yml`.
* This workflow must trigger on every `push` to the `main` branch.
* The workflow's job should:
    1.  Check out your code.
    2.  Set up Node.js (e.g., version 18).
    3.  Install all `npm` dependencies.
    4.  Run your entire test suite (`npm test`).
* Ensure the workflow fails if any of your integration tests fail.

#### 3. **Containerization with Docker (Highly Recommended Bonus)**

Prepare your application for portable and scalable deployments by containerizing it.

* Create a `Dockerfile` in the root of your project.
* The `Dockerfile` should:
    * Use an appropriate `node` base image (e.g., `node:18-alpine`).
    * Set a working directory.
    * Copy `package.json` and run `npm install` efficiently to leverage Docker's layer caching.
    * Copy the rest of your application code.
    * Expose the correct port.
    * Set the `CMD` to run your application.
* Create a `.dockerignore` file to exclude `node_modules`, `.git`, and `.env` from the image.

#### 4. **Continuous Deployment (CD) with GitHub Actions (Mandatory)**

Extend your CI pipeline to automatically deploy your application to a cloud service.

* Modify your `.github/workflows/ci.yml` (or create a separate `cd.yml`) to add a "deploy" job that runs **only after** the "test" job succeeds.
* **Deployment Target:** Deploy your application to **Render**.
* **Deployment Method (Choose one):**
    * **If you did not do the Docker bonus:** Use Render's **Deploy Hook**. Trigger the hook using `curl` at the end of your workflow.
    * **If you completed the Docker bonus:** Configure Render to deploy from a Docker image. Your GitHub Actions workflow must build the Docker image, push it to a registry (like Docker Hub or GitHub Container Registry), and then trigger the Render deployment.
* **Security:** Store all sensitive information (Render Deploy Hook URL, API Key, Docker Hub credentials) as **GitHub Secrets**, not as plain text in your workflow file.

---

### ✅ **Validation Criteria**

* The codebase must be visibly refactored according to the specified standards.
* All existing integration tests must pass successfully within the GitHub Actions runner.
* A green checkmark should appear next to commits on the `main` branch in your GitHub repository, indicating a successful CI/CD run.
* The deployed Render URL should host the live, working version of your API.

---

### ⚠️ Constraints

* Start from your previously completed, working Todo API with tests.
* Do not break any existing API functionality or tests during refactoring.
* The application must remain a backend-only service.

---

### Submission Instructions

* Please complete all the tasks in a single GitHub repository.
* Ensure the final, deployed Render URL is included in the repository's description or a `README.md` file.
* Submit the link to your public GitHub repository for review.