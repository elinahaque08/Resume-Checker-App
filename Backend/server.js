require('dotenv').config();

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const { analyzeResume } = require('./llmService');


const app = express();

app.use(cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080']
  }));
  

app.use(express.json());


const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload', upload.single('resume'), async (req, res) => {
    try {
      const data = await pdfParse(req.file.buffer);
      const resumeText = data.text;
      const jobDesc = req.body.jobDescription;
  
      const aiResponse = await analyzeResume(resumeText, jobDesc);
      res.json({ analysis: aiResponse });
  
    } catch (err) {
      console.error('❌ Error during resume analysis:', err.message);
      res.status(500).json({ error: 'Resume processing failed: ' + err.message });
    }
  });
  
  

const PORT = 5050;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
