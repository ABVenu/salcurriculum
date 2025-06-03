#### Understanding Artificial Intelligence, Language Models, and Effective Prompting

### Learning Objectives

## Scenes

**1.0**
  - Introduction of AI, its evolution and its terminologies

**2.0**
  - How AI Works
  - How LLMS works

**3.0**
  - Prompting

## Pitfalls

**1.0**

**2.0**

**3.0**

## Content/Pedagagoy

### **Scene 1.0 ER Diagrams**

### **Activity 1: Watch the Following Video**

🎥 [E-Eye: An AI-Based Elephant Movement Prediction Model](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/4c52f3b8-4507-47f7-86c2-326d41cb325e/1UbaIsJ3NgtZNFL0.mp4)

> 📌 **Instructions:**
> Watch the video carefully and reflect on what is happening behind the scenes.

---

#### ✍️ **Think and Reflect**

- What are your thoughts on this solution?
- Clearly, there is more than just code—something intelligent is working behind the scenes.
- The system is able to **detect elephants** based on characteristics like **size, shape, walking pattern**, and possibly even **thermal or movement patterns**.
- It **automatically sends warnings** when an elephant approaches the railway track – **without human intervention.**
- This kind of **autonomous decision-making** is powered by **Artificial Intelligence (AI).**

---

### 🧭 **Where Are We Heading?**

Let’s now dive into:

- **What is AI?**
- **How has AI evolved over time?**
- Understanding key concepts like:

  - AI (Artificial Intelligence)
  - ML (Machine Learning)
  - DL (Deep Learning)
  - LLMs (Large Language Models)
  - And many more!

- And we’ll wrap up with **hands-on prompting techniques**—how to talk to AI effectively!

#### What is AI?

- Artificial intelligence (AI) is technology that enables computers and machines to simulate human learning, comprehension, problem solving, decision making, creativity and autonomy.

- Applications and devices equipped with AI can see and identify objects. They can understand and respond to human language.
- They can learn from new information and experience. They can make detailed recommendations to users and experts.
- They can act independently, replacing the need for human intelligence or intervention (a classic example being a self-driving car).

- But in 2024, most AI researchers, practitioners and most AI-related headlines are focused on breakthroughs in generative AI (gen AI), a technology that can create original text, images, video and other content.

- To fully understand generative AI, it’s important to first understand the technologies on which generative AI tools are built: machine learning (ML) and deep learning.

![AI-ML-DL-Gen AI - 1](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/138ed213-e3bc-410b-859b-b58614b87dca/tdmIMpJtwUP3mATW.png)

![AI-ML-DL-Gen AI - 2](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/734b8a99-a652-4bc3-9dff-2969df3f81e9/vDDjlRetRtDelclt.png)

#### Machine learning

- Directly underneath AI, we have machine learning, which involves creating models by training an algorithm to make predictions or decisions based on data. It encompasses a broad range of techniques that enable computers to learn from and make inferences based on data without being explicitly programmed for specific tasks.
- There are many types of machine learning techniques or algorithms, including `linear regression`, `logistic regression`, `decision trees`, `support vector machines (SVMs)` and more. Each of these approaches is suited to different kinds of problems and data.
- But one of the most popular types of machine learning algorithm is called a `neural network` (or `artificial neural network`). `Neural networks` are modeled after the `human brain's` structure and function. A neural network consists of interconnected layers of nodes (analogous to neurons) that work together to process and analyze complex data.

- Detection of Breast Cancer is an best example, [Breast Cancer Detection](https://www.breastcancer.org/screening-testing/artificial-intelligence)

#### Deep learning

![Deep Learning](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/aa0732f0-0e97-4ad7-ad76-1c51bf51e902/krkZfpgvppaWMmFs.png)

- Deep learning is a subset of machine learning that uses multilayered neural networks, called deep neural networks, that more closely simulate the complex decision-making power of the human brain.

- Deep neural networks include an input layer, at least three but usually hundreds of hidden layers, and an output layer, unlike neural networks used in classic machine learning models, which usually have only one or two hidden layers.

- These multiple layers enable unsupervised learning: they can automate the extraction of features from large, unlabeled and unstructured data sets, and make their own predictions about what the data represents.

- Because deep learning doesn’t require human intervention, it enables machine learning at a tremendous scale.It's used in fields like natural language processing, image recognition, and even in autonomous vehicles.

- Deep learning also enables:

  - `Semi-supervised learning`, which combines supervised and unsupervised learning by using both labeled and unlabeled data to train AI models for classification and regression tasks.

  - `Self-supervised learning`, which generates implicit labels from unstructured data, rather than relying on labeled data sets for supervisory signals.

  - `Reinforcement learning`, which learns by trial-and-error and reward functions rather than by extracting information from hidden patterns.

  - `Transfer learning`, in which knowledge gained through one task or data set is used to improve model performance on another related task or different data set.

#### Generative AI

- Generative AI, sometimes called "gen AI", refers to deep learning models that can create complex original content such as long-form text, high-quality images, realistic video or audio and more in response to a user’s prompt or request.
- At a high level, generative models encode a simplified representation of their training data, and then draw from that representation to create new work that’s similar, but not identical, to the original data.
- Generative models have been used for years in statistics to analyze numerical data. But over the last decade, they evolved to analyze and generate more complex data types. This evolution coincided with the emergence of three sophisticated deep learning model types:

  - Variational autoencoders or VAEs, which were introduced in 2013, and enabled models that could generate multiple variations of content in response to a prompt or instruction.

  - Diffusion models, first seen in 2014, which add "noise" to images until they are unrecognizable, and then remove the noise to generate original images in response to prompts.

  - Transformers (also called transformer models), which are trained on sequenced data to generate extended sequences of content (such as words in sentences, shapes in an image, frames of a video or commands in software code). Transformers are at the core of most of today’s headline-making generative AI tools, including ChatGPT and GPT-4, Copilot, BERT, Bard and Midjourney.

#### 🤖 **Diffference between Artificial Intelligence (AI) & Generative AI (GenAI) and its application**

AI is a broad field where machines are designed to mimic human intelligence to solve problems, make decisions, or perform tasks.

#### 🔹 **Examples of AI:**

1. **Face Recognition in Phones** – Unlocking your phone using your face.
2. **Spam Filters in Email** – Detects and moves spam to the spam folder.
3. **Self-driving Cars** – Detect objects, interpret signs, and make driving decisions.
4. **Voice Assistants (e.g., Alexa, Siri)** – Understand and respond to voice commands.
5. **Recommendation Systems (Netflix, YouTube)** – Suggests content based on your behavior.

---

### ✨ **Generative AI (GenAI)**

GenAI refers to AI that can **generate new content**, such as text, images, audio, or video, based on what it has learned.

#### 🔹 **Examples of Generative AI:**

1. **ChatGPT** – Generates human-like text answers or creative writing.
2. **DALL·E** – Creates original images from text prompts.
3. **Sora (by OpenAI)** – Generates videos based on descriptions.
4. **MusicLM (Google)** – Generates original music from text inputs.
5. **Deepfake Generators** – Create realistic fake videos using real faces/voices.

---

### Quick Summary:

| Feature               | AI Example                         | GenAI Example                      |
| --------------------- | ---------------------------------- | ---------------------------------- |
| Task Automation       | Spam detection in Gmail            | Email writing assistant (ChatGPT)  |
| Prediction & Decision | Credit card fraud detection        | Story or blog generation (ChatGPT) |
| Recognition           | Face or speech recognition systems | Voice cloning or face generation   |

---

##### Breif History Of Evolution of AI

- 1950 - Alan Turing publishes Computing Machinery and Intelligence. In this paper, Turing famous for breaking the German ENIGMA code during WWII and often referred to as the "father of computer science" asks the following question: "Can machines think?"
- 1956 - John McCarthy coins the term "artificial intelligence"
- 1980 - Neural networks, which use a backpropagation algorithm to train itself, became widely used in AI applications.
- 1997 - Deep Blue (developed by IBM) beat the world chess champion, Gary Kasparov, in a highly-publicized match, becoming the first program to beat a human chess champion.
- 1997 - Windows released a speech recognition software (developed by Dragon Systems).
- 2006 - Companies such as Twitter, Facebook, and Netflix started utilizing AI as a part of their advertising and user experience (UX) algorithms.
- 2011 - IBM Watson® beats champions Ken Jennings and Brad Rutter at Jeopardy! Also, around this time, `data science` begins to emerge as a `popular discipline`.
- 2011 - Apple released Siri, the first popular virtual assistant.
- 2015 - Baidu's Minwa supercomputer uses a special deep neural network called a convolutional neural network to identify and categorize images with a higher rate of accuracy than the average human.
- 2020 - OpenAI started beta testing GPT-3, a model that uses Deep Learning to create code, poetry, and other such language and writing tasks. While not the first of its kind, it is the first that creates content almost indistinguishable from those created by humans.
- 2021 - OpenAI developed DALL-E, which can process and understand images enough to produce accurate captions, moving AI one step closer to understanding the visual world.
- 2022 - A rise in large language models or LLMs, such as OpenAI’s ChatGPT, creates an enormous change in performance of AI and its potential to drive enterprise value. With these new generative AI practices, deep-learning models can be pretrained on large amounts of data.

### Scene 2.0 AI for Developers:

#### AI Engineers vs AI Researchers

- _Researchers_ explore theoretical advancements, create new architectures.
- _Engineers_ implement, fine-tune, and deploy existing models.

- In this session we focus for AI Engineers, before proceeding towards Implementation, we should unbderstand how exactly AI works what are its dependencies, key terminologies etc,

#### How generative AI works

- In general, generative AI operates in three phases:

  - **Training**, to create a foundation model.
  - **Tuning**, to adapt the model to a specific application.
  - **Generation**, evaluation and more tuning, to improve accuracy.

- **Training**

  - Generative AI begins with a "foundation model"; a deep learning model that serves as the basis for multiple different types of generative AI applications.
    ![AI Models](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/12c38939-e9aa-467c-bf99-cb8e38068654/dbqS3OHexpjKbeCT.png)

  - **What is AI Model??**
  - An AI model is a program that has been trained on a set of data to recognize certain patterns or make certain decisions without further human intervention. Artificial intelligence models apply different algorithms to relevant data inputs to achieve the tasks, or output, they’ve been programmed for.
  - Algorithms vs. models
    - Though the two terms are often used interchangeably in this context, they do not mean quite the same thing.
    - Algorithms are procedures, often described in mathematical language or pseudocode, to be applied to a dataset to achieve a certain function or purpose.
    - Models are the output of an algorithm that has been applied to a dataset.
    - _`In simple terms, an AI model is used to make predictions or decisions and an algorithm is the logic by which that AI model operates.`_
  - The most common foundation models today are `Large Language Models (LLMs)`, created for text generation applications. But there are also foundation models for image, video, sound or music generation, and multimodal foundation models that support several kinds of content.
  - **What are LLMs?**

    - Large language models (LLMs) are a category of foundation models trained on immense amounts of data making them capable of understanding and generating natural language and other types of content to perform a wide range of tasks.

    - **How LLMs works?**
      ![How LLMs Works](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/5db4251f-5896-48b7-bded-44385d69191f/PAEksixScuNQjfCn.png)
    - These models work by estimating the probability of a token or sequence of tokens occurring within a longer sequence of tokens. Consider the following sentence:
    - `When I hear rain on my roof, I _______ in my kitchen.`
    - If you assume that a token is a word, then a language model determines the probabilities of different words or sequences of words to replace that underscore. For example, a language model might determine the following probabilities:
      cook soup 9.4%
      warm up a kettle 5.2%
      cower 3.6%
      nap 2.5%
      relax 2.2%
      ...
    - A "sequence of tokens" could be an entire sentence or a series of sentences. That is, a language model could calculate the likelihood of different entire sentences or blocks of text. Estimating the probability of what comes next in a sequence is useful for all kinds of things: generating text, translating languages, and answering questions, to name a few.
    - How the model picks depends on `Temperature`:
    - Low temperature (e.g., 0.1): The model becomes more deterministic — it will almost always pick the highest-probability output, e.g., "cook soup".
    - Higher temperature (e.g., 0.8 or 1.0): The model samples from the distribution — it might choose "warm up a kettle" or even something creative like "cower", depending on probabilities.
    - It estimates what text is most likely to come next based on massive patterns it learned during training.
    - It predicts one token at a time, then moves to the next, recursively — like:
      ```text
      When I hear rain on my roof, I → cook → soup → in → my → kitchen.
      ```
    - To create a foundation model, practitioners train a deep learning algorithm on huge volumes of relevant raw, unstructured, unlabeled data, such as terabytes or petabytes of data text or images or video from the internet. The training yields a neural network of billions of parameters encoded representations of the entities, patterns and relationships in the data that can generate content autonomously in response to prompts. This is the foundation model.
    - This training process is compute-intensive, time-consuming and expensive. It requires thousands of clustered graphics processing units (GPUs) and weeks of processing, all of which typically costs millions of dollars. Open source foundation model projects, such as Meta's Llama-2, enable gen AI developers to avoid this step and its costs.
      Absolutely! Here's a more **detailed yet easy-to-understand version** of the **Simplified Working of an LLM**, along with how **GPT is built on Transformer architecture**:

    - **Simplified Working of an LLM (Large Language Model)**

      1.  **Tokenization** – _“Breaking text into chunks”_

      - The input sentence is split into smaller units called **tokens** (words, subwords, or even characters).

      - Example:
        Input: `"ChatGPT is amazing"`
        Tokens: `["Chat", "G", "PT", " is", " amazing"]`

      - These tokens are just numbers under the hood – this allows the model to process text as numerical data.

      2. **Embedding** – _“Converting tokens to vectors”_

      - Each token is mapped to a **vector** – a list of numbers that represent meaning and context.
      - These vectors capture **semantic similarity**. For example:

        - "king" and "queen" may have similar vector directions.
        - This helps the model understand relationships between words.

      3.  **Transformers** – _“Understanding context with attention”_

      - This is the **core brain** of the LLM (like GPT).
      - The **Transformer architecture** uses **self-attention** to figure out which words in a sentence are important to each other.

        - Example: In `"The dog chased its tail"`, the model learns that "its" refers to "dog".

      - Transformers process **all tokens at once**, using **multiple layers** to refine understanding. **GPT (Generative Pre-trained Transformer)** is built entirely using this architecture — that's what the "T" in GPT stands for.

      4. **Output Prediction** – _“Generating next token(s)”_

      - After processing, the model **predicts the most likely next token**.
      - It keeps predicting token-by-token until a sentence or paragraph is formed.

        Example:

        > Input: "Once upon a time, there was a"
        > Output: `"king"` → `"who"` → `"lived"` → `"in"` → `"a"` → `"castle"` ...

---

- **Tuning**

  - Next, the model must be tuned to a specific content generation task. This can be done in various ways, including:

  - Fine-tuning, which involves feeding the model application-specific labeled data, questions or prompts the application is likely to receive, and corresponding correct answers in the wanted format.

  - Reinforcement learning with human feedback (RLHF), in which human users evaluate the accuracy or relevance of model outputs so that the model can improve itself. This can be as simple as having people type or talk back corrections to a chatbot or virtual assistant.

- **Generation, evaluation and more tuning**

  - Developers and users regularly assess the outputs of their generative AI apps, and further tune the model even as often as once a week for greater accuracy or relevance. In contrast, the foundation model itself is updated much less frequently, perhaps every year or 18 months.

  - Another option for improving a gen AI app's performance is retrieval augmented generation (RAG), a technique for extending the foundation model to use relevant sources outside of the training data to refine the parameters for greater accuracy or relevance.

  - 1.  **Parameters**

    > Parameters are like memory – they’re the things a model _learns_ while it's being trained.

    Imagine you're teaching a child to recognize animals. After many examples, they learn that animals with four legs, a tail, and who meow are usually cats. Similarly, an AI model learns patterns in data. These learned patterns are stored as **parameters**.

    🔍 **In AI terms:**
    Large Language Models like GPT-3 or GPT-4 are trained on massive amounts of text. During training, they adjust billions of **parameters** (e.g., GPT-3 has 175 billion of them). These parameters help decide how likely a word should follow another word in a sentence.

    🛠 **Analogy:** Parameters are like the knobs and settings in a sound studio — tweak them right, and you get the perfect sound (output).

    ***

  - 2. **Inference**

    > Inference is when we **use** the trained model to make predictions or generate answers.

    Once the AI is trained, it’s ready to be used. When you ask ChatGPT a question, you’re not training it again — you’re performing **inference**. The model is using what it already knows (its parameters) to generate a response.

    🛠 **Analogy:**
    Think of **training** as learning how to cook a dish. **Inference** is when someone places an order and you use your learned recipe to prepare and serve the meal.

    ***

  - 3. **Temperature**

    > Temperature controls how **creative or predictable** a model’s output is.

    It’s a setting you can tweak:

    - **Low temperature (e.g., 0.2)**: The model plays it safe. You get direct, factual, consistent answers.
    - **High temperature (e.g., 0.9)**: The model becomes more creative or surprising, but can be less accurate.

    🔍 **Example:**
    **Prompt:** "Tell me a story about a dragon."

    - **Low Temp (0.2):**
      “A dragon lived in a cave. One day, it flew to a village and helped the people.”

    - **High Temp (0.9):**
      “In a forgotten realm where clouds were made of cinnamon, a neon-pink dragon taught frogs how to code.”

    🛠 **Analogy:**
    Temperature is like the **spice level** in your food. Low = plain and safe. High = bold and unexpected flavors.

  - 4. **Neural Network**

    > Neural networks are **mathematical structures inspired by the human brain**. They’re made of layers of “neurons” that process information.

    When you show an image to a neural network:

    - The **first layer** might detect edges,
    - The **next layer** sees shapes like eyes or ears,
    - The **final layer** identifies it as a “dog.”

    🔍 **In language models:**
    The same concept applies — instead of visual features, the layers look for patterns in **words**, grammar, and meaning.

    🛠 **Analogy:**
    Like a team of chefs in a kitchen, where each chef (layer) does part of the job — one chops, one cooks, one plates — and the final output is a delicious dish (the AI’s answer).

  - 5. **Hallucination**

  > A hallucination is when an AI gives an answer that sounds right — but is actually wrong.

  AI doesn’t know facts; it knows patterns. Sometimes, it confidently mixes up those patterns and gives you an answer that **looks and sounds believable but isn’t true**.

  🔍 **Example:**
  “Who invented the lightbulb?”
  AI says: **“Albert Einstein”** (Wrong — it’s **Thomas Edison**).

  🛠 **Analogy:**
  It’s like that one friend who confidently blurts out the wrong answer in a quiz — and you believe them until you check the facts.

---

### **CPU vs. GPU – Made Simple**

| 🔍 Feature    | 🧩 **CPU**                                     | 🎮 **GPU**                                                    |
| ------------- | ---------------------------------------------- | ------------------------------------------------------------- |
| **Full Form** | Central Processing Unit                        | Graphics Processing Unit                                      |
| **Main Job**  | Handles all general tasks (browsing, apps, OS) | Specializes in fast math for images and AI                    |
| **Cores**     | Few (4–16)                                     | Many (hundreds or thousands)                                  |
| **Strength**  | Great at doing one thing at a time, very well  | Great at doing many things at the same time                   |
| **Use In AI** | Okay for small models or simple tasks          | Perfect for training and running large AI models like ChatGPT |
| **Example**   | Typing in Word, Browsing                       | Gaming, Video Editing, AI Image Generation                    |

---

### ⚙️ **Analogy:**

- **CPU** = A smart person solving one tough problem at a time.
- **GPU** = A large group of helpers solving lots of small problems together.

---

### 👨‍🏫 Simple Summary:

> “CPU is your computer’s brain. GPU is like a turbo engine — perfect for heavy tasks like AI and graphics.”

---

### Scene 3.0 Prompting

#### What is prompting?

An AI prompt is the input submitted to a large language model (LLM) via a generative artificial intelligence (GenAI) platform, like OpenAI's ChatGPT or Microsoft Copilot. The prompt can be defined as a question, command, statement, code sample or other form of text.

- **Why Proper AI Prompting is Essential:**

- Proper prompting is crucial because it helps guide the AI to generate accurate, relevant, and useful responses. A well-structured prompt gives the AI clear instructions, context, and expectations—reducing confusion and improving output quality. It allows users to control the tone, format, and depth of the answer, making interactions with AI more efficient and purposeful. Just like asking the right question leads to the right answer, effective prompting ensures the AI delivers meaningful results.

- **Example: Bad Prompt vs. Good Prompt**
- **Bad Prompt**

  > "Tell me about trees."

  - **Why it's bad:**

  - Too vague
  - No clarity on what type of trees, purpose, or format
  - AI might talk about random facts or give a generic answer

- **Good Prompt**
  > "Explain the importance of trees in controlling air pollution, in 3 simple bullet points, for school students."
  - **Why it's good:**
    - Clear topic: trees & air pollution
    - Defined format: bullet points
    - Specific audience: school students
    - Ensures relevance, simplicity, and structure

Here is a **well-structured explanation of different types of prompting in AI**, suitable for students. These techniques are especially relevant when working with **Large Language Models (LLMs)** like ChatGPT, GPT-4, etc.

---

## 📌 Types of Prompting in AI

---

### 1. 🟡 **Zero-Shot Prompting**

**Definition**:
The model is asked to perform a task **without giving any example**.

**Use Case**:
When the model is already trained and capable of understanding the task from the instruction alone.

**Example**:

> “Translate this sentence into French: ‘How are you?’”
> The model will answer: “Comment ça va ?”

---

### 2. 🟢 **One-Shot Prompting**

**Definition**:
The model is given **one example** before asking it to perform the same kind of task.

**Use Case**:
To help the model understand the pattern expected in the output.

**Example**:

> Example: “Translate to French: ‘Good morning’ → ‘Bonjour’
> Now, translate: ‘Thank you’ →”

---

### 3. 🔵 **Few-Shot Prompting**

**Definition**:
The model is given **a few examples (2–5)** before asking it to continue the pattern.

**Use Case**:
Improves accuracy and consistency, especially for more complex or ambiguous tasks.

**Example**:

> Refer the previous emails:
>
> 1. _Subject: Meeting reschedule — The meeting on Monday has been moved to Wednesday at 3 PM. Please confirm your availability._
> 2. _Subject: Project update — The client approved the design. We will start development next week._
>    Now write a similar email to inform the team about the new office holiday schedule.

---

### 4. 🧠 **Chain-of-Thought Prompting**

**Definition**:
The model is guided to **explain its reasoning step by step** before giving the final answer.

**Use Case**:
Used in **logical reasoning**, **math**, and **multi-step questions**.

**Example**:

> “If a pencil costs ₹5 and a pen costs ₹10, how much will 2 pencils and 1 pen cost?
> Think step-by-step.”

Output:

- Pencil = ₹5 → 2 pencils = ₹10
- Pen = ₹10
- Total = ₹10 + ₹10 = ₹20

---

### 5. 🧑‍🏫 **Role Prompting**

**Definition**:
You assign a **role or persona** to the AI to shape how it responds.

**Use Case**:
To control tone, style, or perspective of the response.

**Example**:

> “You are a history teacher. Explain World War I in simple terms to a 6th-grade student.”

---

### 6. 🔍 **Self-Critique Prompting (Reflexion)**

**Definition**:
The model is prompted to **review or critique its own answer** and improve it.

**Use Case**:
Helps the model to revise for better accuracy or clarity.

**Example**:

> First: “Explain Newton’s First Law.”
> Then: “Now check your explanation and improve it for clarity and correctness.”
