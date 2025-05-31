
# Resume Checker web app using LLM Model

This project analyzes resumes using prompt-engineered LLM-based semantic comparison and gives personalized feedback based on a job description. Built with HTML/CSS/JavaScript (frontend), Node.js (backend), and local LLMs via [Ollama](https://ollama.com).

---

## 📦 Features

- Upload your resume (PDF)
- Paste a job description
- Get:
  - ✅ Match score (0–100%)
  - ✅ Missing or weak skills
  - ✅ Tailored suggestions to improve your resume
- Runs fully locally using [LLaMA 3 via Ollama](https://ollama.com/library)

---

## 🚀 Technologies

- **Frontend**: HTML/CSS/JavaScript
- **Backend**: Node.js, Express, Multer, pdf-parse
- **AI**: Ollama with `llama3` or `mistral`
- **Optional DB**: MongoDB (for future enhancements)

---

## 🖥 Run Locally

### ✅ 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/ai-resume-analyzer.git
cd ai-resume-analyzer

### ✅ 2. Start the backend

cd Backend
npm install
node server.js

⚠️ Requires Ollama installed + model pulled: 

ollama run llama3.2


### ✅ 3. Start the frontend

cd ../Frontend
# Use live server or http-server


