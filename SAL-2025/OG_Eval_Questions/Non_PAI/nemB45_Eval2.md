### **Problem Statement: Real-Time File Processing System**

**Objective:**
Design a backend system that efficiently monitors and processes files in a designated directory structure, handles error scenarios with proper logging, and simulates real-time behavior.

---

### **System Requirements**

### **System Behavior:**

#### **File Generation:**

- New files must be generated in the `Processing` folder **every 3 seconds**.
- File names should be unique and include timestamps to avoid collisions.
- Append the status `File Started Processing` to each file and assign a **random processing duration between 1 to 6 seconds**.

#### **Conditions for Updating Status to `In-Progress` in the File:**

- Once the file is assigned a random processing duration between 1 to 6 seconds, append the status `In-Progress` on the next line.

#### **Processing Logic:**

- Further status updates in the file should occur after the waiting upto processing duration mentioned:

  - If the processing time is less than 5 seconds, append the status `Final-Status: Completed` along with the **current time** on the next line.
  - If the processing time is more than 5 seconds, append the status `Final-Status: Crashed` along with the **current time** on the next line.

#### **Logging Rules:**

- All file status updates (Processing → In-Progress → Completed/Crashed) must be logged with a timestamp in a `logs.txt` file.
- A **warning log** must be generated if a file remains in `In-Progress` for **more than 3 seconds**.
- An **error log** must be generated if a file is **not processed within 5 seconds**, causing it to be moved to the `Crashed` folder.

---

### **Constraints:**

- **Do not use `Math.random()`**. Use `crypto.randomInt()` or an equivalent secure alternative as specified in the [Node.js documentation](https://nodejs.org/api/crypto.html#cryptorandomintmin-max-callback).

---

### **Additional Special Features:**

- Create respective folders for different stages of file processing:

  - `Processing` folder for files in progress.
  - `In-Progress` folder for files currently being processed.
  - `Completed` folder for successfully processed files.
  - `Crashed` folder for files that failed to process.

---

### **Expected Deliverables:**

1. A working backend prototype of the system.
2. Source code with clearly structured modules.
3. A `README.md` document that includes:

   - Logging strategy.
   - Libraries/packages used, with justifications for their inclusion.

4. A sample log file showing a trace of file transitions, including warnings and errors.

---

### **Evaluation Criteria:**

- Correctness and robustness of the file processing logic.
- Clarity and completeness of logging.
- Code quality, maintainability, and documentation.

## Deliverable:

Submit the GitHub repository link.

---
