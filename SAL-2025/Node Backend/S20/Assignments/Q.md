## **Assignment: AI-Powered Recipe Generator with PDF Export**

### **Problem Statement:**

Build a **“Smart Recipe Generator”** using **Node.js** that takes a list of random ingredients as input and generates a full-fledged recipe using AI models (both **Ollama** and **Gemini API**). The recipe should include a creative title, proper quantity measurements, step-by-step instructions, and optionally, nutritional details.

---

### **Core Features:**

1. **Input**:
   A `POST /generate-recipe` route that accepts a JSON array of random ingredients in the body:

   ```json
   {
     "ingredients": ["chicken", "garlic", "spinach", "cheese"]
   }
   ```

2. **Ollama (Local Model) Responsibilities**:

   - Generate a **creative name/title** for the dish.
   - Suggest **realistic quantity measurements** for each ingredient.
   - Provide a list of **preparation steps** (minimum 5 steps).

3. **Gemini API Responsibilities**:

   - Rewrite the preparation steps to make them **user-friendly and well-formatted**.
   - Optionally: Estimate **nutritional information** like calories, protein, fat, and carbs.

4. **PDF Export**:

   - Combine all generated content (Title, Ingredients with quantities, Steps, Nutrition – if any) into a visually styled **HTML page**, and convert it into a **downloadable PDF** using a library like `puppeteer`.

---

### **Final Output Example:**

- **Recipe Title**: “Garlic-Infused Creamy Spinach Chicken”
- **Ingredients with Measurements**:

  - Chicken – 250g
  - Garlic – 4 cloves
  - Spinach – 1 cup (chopped)
  - Cheese – 100g

- **Steps**:

  - Step 1: Marinate the chicken with garlic and salt for 30 mins...
  - ...

- **Optional Nutrition**: 430 kcal | 35g protein | 18g fat | 5g carbs

---

### **Tech Stack:**

- **Node.js + Express**
- **Ollama** (running a local LLM like `llama2`, `mistral`)
- **Gemini Pro API** (via REST or SDK)
- **PDF Generator**: `puppeteer` or `html-pdf`
- **dotenv** for managing secrets

---

### **Bonus Features (Optional)**:

- Add a `/compare-models` route that shows the raw outputs of Ollama and Gemini for comparison.
- Add a `/history` route to view previously generated recipes (store in-memory or file).
- Include an option to download the **HTML page** alongside the PDF.

---

### **Submission Instructions**

- Submit the Masai Github Repo Link
