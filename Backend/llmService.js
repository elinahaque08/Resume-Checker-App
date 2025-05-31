const axios = require('axios');

async function analyzeResume(resumeText, jobDescription) {
  const prompt = `
You are a resume analysis assistant.

Given the resume and a job description:

1. Score how well this resume matches the job (0 to 100%)
2. List specific skills, experiences, or keywords missing from the resume.
3. Suggest concrete improvements the candidate can make to tailor their resume to this job.

Resume:
${resumeText}

Job Description:
${jobDescription}

Please return your analysis in clear, readable points.
`;

  const response = await axios.post('http://localhost:11434/api/generate', {
    model: 'llama3.2', // or the model you installed
    prompt: prompt,
    stream: false
  });

  return response.data.response;
}

module.exports = { analyzeResume };

