// src/components/Upload.js
import React from 'react';

function Upload({ onUpload }) {
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      onUpload(e.target.files[0]);
    }
  };

  return (
    <div>
      <h2>Upload PDF</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
    </div>
  );
}

export default Upload;