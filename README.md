# Verse Finder 

**Verse Finder** is an AI-powered search tool designed to bridge the gap between your feelings and scripture. It uses **Google Gemini AI** to act as a biblical scholar, translating your personal mood or topic into specific verse references, then fetches the full text directly from the **ESV Bible API**.
<img width="1902" height="911" alt="Verse_Finder" src="https://github.com/user-attachments/assets/9eb5a4af-9cb5-47cd-9bce-a0f43e45d16c" />

## Live Demo
The application is deployed on Render:
https://verse-finder-pvdq.onrender.com/
---

##Getting Started (local setup)

### 1. Prerequisites
Before running this project, ensure you have:
* **Node.js** (v18 or higher)
* A **Google Gemini API Key** (Obtainable via [Google AI Studio](https://aistudio.google.com/))
* An **ESV API Key** (Obtainable via the [ESV API Portal](https://api.esv.org/))

### 2. Installation
1.  **Clone the repo**:
    ```bash
    git clone [https://github.com/YOUR_USERNAME/verse-finder.git](https://github.com/YOUR_USERNAME/verse-finder.git)
    cd verse-finder
    ```
2.  **Install Backend dependencies**:
    ```bash
    npm install
    ```
3.  **Install Frontend dependencies**:
    ```bash
    # If your React app is in a folder named 'src' or 'client'
    cd client 
    npm install
    ```

### 3. Configuration
1.  In the root folder, locate `.env.example`.
2.  Rename it to `.env` (this file is ignored by Git for your safety).
3.  Fill in your keys:
    ```text
    GEMINI_API_KEY=your_key_here
    ESV_API_KEY=your_key_here
    PORT=3000
    ```

---

## Usage

To run the app locally, you need to start both the server and the client:

**Run the Backend (Server):**
In the *server* folder, run:
```bash
node main.js
```
**Run the Frontend:**
In the *root* folder, run:
```bash
npm run dev
```

---
## Attribution
Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by Crossway, a publishing ministry of Good News Publishers. **Used by permission through its API.** All rights reserved. The ESV text may not be quoted in any any form (written, visual, electronic, or audio) without written permission from Crossway, except as provided by the [ESV API Terms of Use](https://api.esv.org/).

---
## License
MIT License

Copyright (c) 2025 IFLORE24

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
