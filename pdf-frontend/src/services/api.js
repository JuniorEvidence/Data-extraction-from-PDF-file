// src/services/api.js

import axios from 'axios';

const API_URL = 'http://localhost:8000';  // Replace with your FastAPI backend URL if different

// Function to upload a PDF
export const uploadPDF = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(`${API_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading PDF:", error);
    throw error;
  }
};

// Function to ask a question
export const askQuestion = async (documentId, question) => {
  try {
    const response = await axios.post(`${API_URL}/ask`, { documentId, question });
    return response.data;
  } catch (error) {
    console.error("Error asking question:", error);
    throw error;
  }
};
