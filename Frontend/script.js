function uploadResume() {
    const fileInput = document.getElementById('resumeInput');
    const file = fileInput.files[0];
    const jobDescription = document.getElementById('jobDescription').value;
  
    const formData = new FormData();
    formData.append('resume', file);
    formData.append('jobDescription', jobDescription);
  
    fetch('http://localhost:5050/upload', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        document.getElementById('resultBox').innerText = data.analysis;
      })
      .catch(err => {
        document.getElementById('resultBox').innerText = 'Error analyzing resume.';
      });
  }
  
  