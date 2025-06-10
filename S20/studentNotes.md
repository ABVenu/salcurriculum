Here are detailed student notes on the implementation of AI in Node.js projects, covering local and cloud-based AI infrastructure, prompt engineering, and a resume generator project example.

-----

## Student Notes: Implementing AI in Node.js Projects

### Introduction to AI Infrastructure

Integrating AI into Node.js projects involves choosing the right infrastructure to run your AI models. This can broadly be categorized into two main approaches: **local development** and **cloud-based API integration**.

#### Local AI Development with Ollama

For local development and privacy-focused applications, tools like **Ollama** have become incredibly popular.

  * **What is Ollama?**
    Ollama is a powerful, open-source tool that allows you to run large language models (LLMs) and other generative AI models directly on your local machine. It packages models into a unified format, provides an API, and handles GPU acceleration, making it much easier to experiment with and deploy AI models without relying on cloud services. This is ideal for privacy-sensitive applications, offline use, and reducing API costs.

  * **How to Download Ollama:**

    1.  Go to the official Ollama website: [https://ollama.com/](https://ollama.com/)
    2.  Download the installer specific to your operating system (macOS, Linux, or Windows Preview).
    3.  **For macOS:** Download the `.dmg` file, open it, and drag the Ollama application to your Applications folder.
    4.  **For Linux:** Open your terminal and run the official install script:
        ```bash
        curl -fsSL https://ollama.com/install.sh | sh
        ```
        This script will download and install Ollama, attempting to configure GPU support if applicable.
    5.  **For Windows (Preview):** Download the `.exe` installer and follow the wizard steps. WSL2 (Windows Subsystem for Linux 2) is often recommended for better performance.
    6.  Verify installation by opening your terminal and typing `ollama`. You should see a prompt or version information.

  * **How Models Can Be Pulled and Pushed (Managed) in Ollama:**

      * **Pulling Models:** Once Ollama is installed, you can easily download pre-trained models from the Ollama model library using the `ollama run` command. Ollama will automatically download the model if it's not present locally.
        Example: To pull and run the Llama 3 model:
        ```bash
        ollama run llama3
        ```
        You'll see progress bars as the model layers are downloaded.
      * **Pushing Models (Sharing):** You can also share your custom-trained or modified models on `ollama.com`. This involves creating a `Modelfile` (a configuration file for your model) and then using `ollama create` to build your local model and `ollama push` to upload it to the Ollama registry.
        Steps typically involve:
        1.  Converting your model weights (e.g., from Hugging Face) to the GGUF format using tools like `llama.cpp`.
        2.  Creating a `Modelfile` that points to your GGUF file and defines parameters like context length, instruction format, etc.
        3.  Running `ollama create <your-model-name> -f Modelfile` to integrate it into Ollama.
        4.  Using `ollama push <your-username>/<your-model-name>` to share it.

  * **System Requirements to Pull AI Models (for Ollama):**
    The actual requirements depend heavily on the model size (number of parameters) and whether you have a GPU.

      * **CPU:** While Ollama can run on CPU, performance is significantly better with a GPU. Newer CPUs with AVX512 support can offer some acceleration.
      * **RAM:**
          * **Minimum:** 16GB RAM for smaller models (e.g., 7B parameters).
          * **Recommended:** 32GB RAM for a smoother experience, especially with larger models.
          * **Ideal:** 64GB+ for very large models or complex tasks.
      * **VRAM (GPU Memory):** This is the most critical component for performance.
          * **Minimum:** NVIDIA GPU with at least 8GB VRAM for 7B models.
          * **Recommended:** NVIDIA RTX 3060 or higher with 12GB+ VRAM.
          * **For larger models (e.g., 14B, 30B, 65B):** You'll need 16GB, 32GB, or even more VRAM respectively. Quantized models (e.g., 4-bit) can reduce VRAM requirements significantly at a slight cost to quality.
      * **Disk Space:** Around 50GB minimum to accommodate Ollama and model files. Larger models require more.
      * **Operating System:** Linux (Ubuntu 20.04+ recommended), macOS (Apple Silicon M1/M2 chips are well-supported), Windows (via WSL2).
      * **Drivers:** Latest NVIDIA CUDA Toolkit and GPU drivers if using an NVIDIA GPU.

#### Cloud-Based API Links from AI Models (e.g., Gemini, ChatGPT)

The alternative to local development is leveraging cloud-based AI services through their APIs. This offers scalability, high performance, and access to the latest, most powerful models without managing local hardware.

  * **Google Gemini API:**

      * Accessed via the `@google/generative-ai` Node.js SDK.
      * Requires an API key obtained from Google AI Studio.
      * Ideal for various generative tasks, including text generation, multimodal inputs (text + image), and more.
      * Typically used for server-side calls in production to keep API keys secure.
      * **Example (Conceptual):**
        ```javascript
        const { GoogleGenerativeAI } = require('@google/generative-ai');
        require('dotenv').config();

        const API_KEY = process.env.GEMINI_API_KEY;
        const genAI = new GoogleGenerativeAI(API_KEY);

        async function generateContent(prompt) {
            const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
            const result = await model.generateContent(prompt);
            const response = await result.response;
            return response.text();
        }
        ```

  * **OpenAI (ChatGPT) API:**

      * Accessed via the `openai` Node.js library.
      * Requires an API key from the OpenAI platform.
      * Offers a wide range of models (GPT-3.5, GPT-4, DALL-E, etc.) for various tasks like chat completion, text generation, image generation, and more.
      * **Example (Conceptual):**
        ```javascript
        const OpenAI = require('openai');
        require('dotenv').config();

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        async function getChatCompletion(messages) {
            const chatCompletion = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: messages, // Array of message objects
            });
            return chatCompletion.choices[0].message.content;
        }
        ```

### Typical Prompt Object Structure

When interacting with AI models, especially chat-based ones, you often send a "prompt object" or an array of message objects rather than just a plain string. This allows for more structured communication, including system instructions and conversation history.

A typical prompt object (or message object within an array) often includes:

  * **`role`**: Specifies who is sending the message. Common roles are:
      * `"system"`: Used for initial instructions or context for the AI model, setting its persona, constraints, or overall behavior. (Supported by some models, like older OpenAI chat models or specific configurations).
      * `"user"`: The input provided by the human user.
      * `"assistant"`: The response generated by the AI model.
      * `"tool"`: (Advanced) Output from a tool call made by the assistant.
  * **`content`** (or `text`): The actual message or instruction. For multimodal models, this could also be an array containing text and image objects.

**Example (OpenAI/Gemini Chat structure):**

```javascript
const messages = [
    {
        role: "system", // Optional, depending on model support
        content: "You are a helpful assistant specialized in writing professional resumes.",
    },
    {
        role: "user",
        content: "Generate a resume for a software engineer with 5 years of experience.",
    },
    {
        role: "assistant",
        content: "Certainly! To help me generate the best resume, could you please provide details on their key skills, past projects, and educational background?",
    },
    {
        role: "user",
        content: "Skills: JavaScript, Node.js, React, AWS. Projects: E-commerce platform, Mobile banking app. Education: B.Tech in Computer Science.",
    },
];
```

### Prompt Terminologies

Understanding these terms is crucial for effectively controlling AI model behavior:

  * **Token:**

      * The fundamental unit of text that an LLM processes. It's not always a single word; it can be part of a word, a whole word, a punctuation mark, or even a space.
      * LLMs break down input and generate output in terms of tokens.
      * The cost of using cloud APIs is often calculated per token (input + output).
      * Models have a "context window" which is the maximum number of tokens they can process in a single interaction (input + output).

  * **Temperature:**

      * Controls the randomness or creativity of the AI's output.
      * A higher `temperature` (e.g., 0.8-1.0) leads to more diverse, creative, and sometimes less predictable responses.
      * A lower `temperature` (e.g., 0.1-0.3) makes the output more deterministic, focused, and factual.
      * Range: Typically 0.0 to 1.0 (some APIs might allow higher).

  * **`max_tokens` (or `max_output_tokens`):**

      * Sets the maximum number of tokens the AI model is allowed to generate in its response.
      * Important for controlling response length and managing API costs.
      * If the AI reaches `max_tokens` before completing its thought, the response will be truncated.

  * **`top_p` (Nucleus Sampling):**

      * Another parameter to control output diversity, often used as an alternative or in conjunction with `temperature`.
      * It samples from the smallest set of tokens whose cumulative probability exceeds the value of `top_p`.
      * A lower `top_p` value results in more focused and less varied responses (similar to low temperature).
      * A higher `top_p` value allows for more diverse and creative responses by considering a wider range of tokens.
      * Range: Typically 0.0 to 1.0.

  * **`top_k`:**

      * Filters the token selection to consider only the `k` most probable tokens.
      * For example, if `top_k=50`, the model will only choose from the top 50 most likely next tokens.
      * Can be used with or instead of `top_p` to control diversity.

  * **`stop_sequences` (or `stop`):**

      * A list of one or more sequences of tokens where the model should stop generating further output.
      * Useful for ensuring the AI doesn't generate beyond a certain point or format. E.g., stopping at "\#\#\#" or a specific phrase.

### Prompting with Gemini and Ollama (Node.js Examples)

#### 1\. Prompting with Google Gemini API (Node.js)

First, set up your project:

```bash
mkdir ai-resume-generator
cd ai-resume-generator
npm init -y
npm install @google/generative-ai dotenv express body-parser html-pdf
```

Create a `.env` file in your root and add your Gemini API key:

```
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

**`app.js` (or `server.js`):**

````javascript
const express = require('express');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const pdf = require('html-pdf'); // Or 'puppeteer' for more robust conversion
const fs = require('fs');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files like CSS for HTML resume template

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const geminiModel = genAI.getGenerativeModel({ model: 'gemini-pro' }); // Use gemini-1.5-flash for faster, cheaper if available

// Route to generate resume HTML
app.post('/generate-resume-html', async (req, res) => {
    const { skills, projects, education, experience, contact } = req.body;

    const prompt = `
    Generate a professional resume in HTML format.
    The resume should include sections for Contact Information, Summary, Skills, Experience, Projects, and Education.
    Ensure the HTML is well-structured and uses semantic tags.
    Include some basic inline CSS or a <style> block for a clean, readable layout.
    
    Here is the candidate's information:
    Contact Information: ${contact.name}, ${contact.email}, ${contact.phone}, ${contact.linkedin}
    Skills: ${skills.join(', ')}
    Experience: ${experience.map(exp => `${exp.title} at ${exp.company} (${exp.duration}): ${exp.details}`).join('\n')}
    Projects: ${projects.map(proj => `${proj.name}: ${proj.description} (Tech Stack: ${proj.techStack})`).join('\n')}
    Education: ${education.map(edu => `${edu.degree} from ${edu.institution} (${edu.year})`).join('\n')}

    Output only the HTML code. Do not include any introductory or concluding text outside the HTML tags.
    `;

    try {
        const result = await geminiModel.generateContent(prompt);
        const response = await result.response;
        let resumeHtml = response.text();

        // Basic cleaning to remove markdown code blocks if Gemini returns them
        if (resumeHtml.startsWith('```html')) {
            resumeHtml = resumeHtml.substring(7, resumeHtml.lastIndexOf('```')).trim();
        }

        res.json({ html: resumeHtml });
    } catch (error) {
        console.error('Error generating resume HTML from Gemini:', error);
        res.status(500).json({ error: 'Failed to generate resume HTML.' });
    }
});

// Route to convert HTML to PDF
app.post('/convert-to-pdf', (req, res) => {
    const { htmlContent } = req.body;

    const options = {
        format: 'A4',
        orientation: 'portrait',
        border: '10mm',
        header: {
            height: '10mm',
            contents: '<div style="text-align: center; font-size: 10px;">Generated by AI Resume Builder</div>'
        },
        footer: {
            height: '10mm',
            contents: '<span style="color: #444; font-size: 10px;">{{page}}</span>/<span>{{pages}}</span>'
        }
    };

    pdf.create(htmlContent, options).toBuffer((err, buffer) => {
        if (err) {
            console.error('Error converting HTML to PDF:', err);
            return res.status(500).json({ error: 'Failed to convert HTML to PDF.' });
        }
        res.setHeader('Content-Type', 'application/pdf');
        res.send(buffer);
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
````

#### 2\. Prompting with Ollama (Node.js)

To interact with Ollama from Node.js, you'll typically use its local API. You can use a library like `node-fetch` or `axios`.

First, make sure Ollama is running and you have a model pulled (e.g., `ollama run llama3`).

**`app.js` (or `server.js` - part of the same file as above, just changing the AI interaction part):**

````javascript
// ... (previous setup for express, body-parser, etc.)

// Function to interact with Ollama
async function generateContentFromOllama(prompt) {
    const ollamaApiUrl = 'http://localhost:11434/api/generate'; // Default Ollama API endpoint

    try {
        const response = await fetch(ollamaApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'llama3', // Specify the model you pulled with Ollama
                prompt: prompt,
                stream: false, // Set to true for streaming responses
                options: {
                    temperature: 0.7,
                    num_predict: 2000, // Similar to max_tokens for Ollama
                    top_p: 0.9,
                }
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Ollama API error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        return data.response; // The actual generated content from Ollama
    } catch (error) {
        console.error('Error calling Ollama API:', error);
        throw error;
    }
}

// Modify the /generate-resume-html route to use Ollama:
app.post('/generate-resume-html-ollama', async (req, res) => {
    const { skills, projects, education, experience, contact } = req.body;

    const prompt = `
    Generate a professional resume in HTML format.
    The resume should include sections for Contact Information, Summary, Skills, Experience, Projects, and Education.
    Ensure the HTML is well-structured and uses semantic tags.
    Include some basic inline CSS or a <style> block for a clean, readable layout.
    
    Here is the candidate's information:
    Contact Information: Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}, LinkedIn: ${contact.linkedin}
    Skills: ${skills.join(', ')}
    Experience: ${experience.map(exp => `Title: ${exp.title}, Company: ${exp.company}, Duration: ${exp.duration}, Details: ${exp.details}`).join('\n')}
    Projects: ${projects.map(proj => `Name: ${proj.name}, Description: ${proj.description}, Tech Stack: ${proj.techStack}`).join('\n')}
    Education: ${education.map(edu => `Degree: ${edu.degree}, Institution: ${edu.institution}, Year: ${edu.year}`).join('\n')}

    Output only the HTML code. Do not include any introductory or concluding text outside the HTML tags.
    `;

    try {
        let resumeHtml = await generateContentFromOllama(prompt);

        // Basic cleaning for Ollama output
        if (resumeHtml.startsWith('```html')) {
            resumeHtml = resumeHtml.substring(7, resumeHtml.lastIndexOf('```')).trim();
        }

        res.json({ html: resumeHtml });
    } catch (error) {
        console.error('Error generating resume HTML from Ollama:', error);
        res.status(500).json({ error: 'Failed to generate resume HTML from Ollama.' });
    }
});

// ... (rest of your PDF conversion route and app.listen)
````

### Important Snippets for a Resume Generator Project

This section provides key code snippets for a Node.js resume generator project where AI generates the HTML, which is then converted to PDF.

**Project Structure:**

```
ai-resume-generator/
├── public/
│   └── index.html  (Frontend for user input and displaying resume)
│   └── style.css   (Optional: CSS for the web form and basic resume styling)
├── .env            (For API keys)
├── package.json
├── package-lock.json
└── app.js          (Node.js backend)
```

**1. `public/index.html` (Frontend Form):**

This HTML would contain a form where the user inputs their resume details.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Resume Generator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Generate Your Resume with AI</h1>
        <form id="resumeForm">
            <fieldset>
                <legend>Contact Information</legend>
                <input type="text" id="name" placeholder="Full Name" required>
                <input type="email" id="email" placeholder="Email" required>
                <input type="tel" id="phone" placeholder="Phone Number">
                <input type="text" id="linkedin" placeholder="LinkedIn Profile URL">
            </fieldset>

            <fieldset>
                <legend>Skills (comma-separated)</legend>
                <input type="text" id="skills" placeholder="e.g., JavaScript, Node.js, React, AWS">
            </fieldset>

            <fieldset>
                <legend>Experience</legend>
                <div id="experienceContainer">
                    <button type="button" onclick="addExperienceField()">Add Experience</button>
                </div>
            </fieldset>
            
            <fieldset>
                <legend>Projects</legend>
                <div id="projectsContainer">
                    <button type="button" onclick="addProjectField()">Add Project</button>
                </div>
            </fieldset>

            <fieldset>
                <legend>Education</legend>
                <div id="educationContainer">
                    <button type="button" onclick="addEducationField()">Add Education</button>
                </div>
            </fieldset>

            <button type="submit">Generate Resume (HTML)</button>
            <button type="button" id="convertToPdfBtn" style="display: none;">Download as PDF</button>
        </form>

        <div id="resumeOutput" style="margin-top: 20px; border: 1px solid #ccc; padding: 15px; background-color: #f9f9f9;">
            <h2>Generated Resume Preview</h2>
            <div id="resumeHtmlContent">
                </div>
        </div>
    </div>

    <script>
        // JavaScript to handle dynamic form fields and API calls
        let currentResumeHtml = '';

        function addExperienceField() {
            const container = document.getElementById('experienceContainer');
            const div = document.createElement('div');
            div.innerHTML = `
                <input type="text" class="exp-title" placeholder="Job Title">
                <input type="text" class="exp-company" placeholder="Company">
                <input type="text" class="exp-duration" placeholder="Duration (e.g., Jan 2020 - Dec 2023)">
                <textarea class="exp-details" placeholder="Key responsibilities and achievements"></textarea>
                <button type="button" onclick="this.parentNode.remove()">Remove</button>
                <hr>
            `;
            container.insertBefore(div, container.lastElementChild);
        }

        function addProjectField() {
            const container = document.getElementById('projectsContainer');
            const div = document.createElement('div');
            div.innerHTML = `
                <input type="text" class="proj-name" placeholder="Project Name">
                <textarea class="proj-description" placeholder="Project Description"></textarea>
                <input type="text" class="proj-techstack" placeholder="Tech Stack (comma-separated)">
                <button type="button" onclick="this.parentNode.remove()">Remove</button>
                <hr>
            `;
            container.insertBefore(div, container.lastElementChild);
        }

        function addEducationField() {
            const container = document.getElementById('educationContainer');
            const div = document.createElement('div');
            div.innerHTML = `
                <input type="text" class="edu-degree" placeholder="Degree">
                <input type="text" class="edu-institution" placeholder="Institution">
                <input type="text" class="edu-year" placeholder="Graduation Year">
                <button type="button" onclick="this.parentNode.remove()">Remove</button>
                <hr>
            `;
            container.insertBefore(div, container.lastElementChild);
        }

        document.getElementById('resumeForm').addEventListener('submit', async (e) => {
            e.preventDefault();

            const contact = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                linkedin: document.getElementById('linkedin').value,
            };

            const skills = document.getElementById('skills').value.split(',').map(s => s.trim()).filter(s => s);

            const experience = Array.from(document.querySelectorAll('#experienceContainer > div')).map(div => ({
                title: div.querySelector('.exp-title').value,
                company: div.querySelector('.exp-company').value,
                duration: div.querySelector('.exp-duration').value,
                details: div.querySelector('.exp-details').value,
            }));

            const projects = Array.from(document.querySelectorAll('#projectsContainer > div')).map(div => ({
                name: div.querySelector('.proj-name').value,
                description: div.querySelector('.proj-description').value,
                techStack: div.querySelector('.proj-techstack').value,
            }));

            const education = Array.from(document.querySelectorAll('#educationContainer > div')).map(div => ({
                degree: div.querySelector('.edu-degree').value,
                institution: div.querySelector('.edu-institution').value,
                year: div.querySelector('.edu-year').value,
            }));

            // Choose which backend endpoint to call (Gemini or Ollama)
            const backendEndpoint = '/generate-resume-html'; // Or '/generate-resume-html-ollama' for Ollama

            try {
                const response = await fetch(backendEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ contact, skills, experience, projects, education }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to generate resume HTML.');
                }

                const data = await response.json();
                currentResumeHtml = data.html; // Store the generated HTML
                document.getElementById('resumeHtmlContent').innerHTML = currentResumeHtml;
                document.getElementById('convertToPdfBtn').style.display = 'block'; // Show PDF button
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred: ' + error.message);
                document.getElementById('convertToPdfBtn').style.display = 'none';
            }
        });

        document.getElementById('convertToPdfBtn').addEventListener('click', async () => {
            if (!currentResumeHtml) {
                alert('Please generate the resume HTML first.');
                return;
            }

            try {
                const response = await fetch('/convert-to-pdf', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ htmlContent: currentResumeHtml }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to convert HTML to PDF.');
                }

                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'generated_resume.pdf';
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred during PDF conversion: ' + error.message);
            }
        });
        
        // Initial add of some fields for user convenience
        addExperienceField();
        addProjectField();
        addEducationField();
    </script>
</body>
</html>
```

**2. `public/style.css` (Basic Styling for the form and resume preview):**

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
}

.container {
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 900px;
    margin-bottom: 20px;
}

h1, h2 {
    color: #0056b3;
    text-align: center;
}

form fieldset {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 20px;
}

form legend {
    font-weight: bold;
    color: #0056b3;
    padding: 0 10px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

textarea {
    resize: vertical;
    min-height: 60px;
}

button {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-right: 10px;
    margin-top: 10px;
}

button:hover {
    background-color: #0056b3;
}

#resumeOutput {
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 15px;
    background-color: #f9f9f9;
    min-height: 200px;
}

/* Basic styling for the generated resume HTML */
#resumeHtmlContent h3 {
    margin-top: 15px;
    margin-bottom: 5px;
    color: #333;
}
#resumeHtmlContent ul {
    list-style-type: disc;
    margin-left: 20px;
    margin-bottom: 10px;
}
#resumeHtmlContent p {
    margin-bottom: 5px;
}
#resumeHtmlContent hr {
    border: 0;
    border-top: 1px solid #eee;
    margin: 10px 0;
}
```

-----