
  document.getElementById('downloadElement').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'HASHAKA ALVIN CV.pdf';
    link.download = 'Mwunguzi_Alvin_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
