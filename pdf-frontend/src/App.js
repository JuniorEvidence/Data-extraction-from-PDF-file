import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Upload from './components/upload';
import QuestionForm from './components/questionform';
import AnswerDisplay from './components/answer';
import { uploadPDF, askQuestion } from './services/api';

function App() {
  const [documentId, setDocumentId] = useState(null);
  const [answer, setAnswer] = useState('');

  const handleUpload = async (file) => {
    try {
      const data = await uploadPDF(file);
      setDocumentId(data.documentId);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  const handleQuestion = async (question) => {
    if (!documentId) {
      alert("Please upload a document first.");
      return;
    }
    try {
      const response = await askQuestion(documentId, question);
      setAnswer(response.answer);
    } catch (error) {
      console.error("Question failed:", error);
    }
  };

  return (
    <div className="App">
      <h1>PDF Q&A App</h1>
      <Upload onUpload={handleUpload} />
      <QuestionForm onAskQuestion={handleQuestion} />
      <AnswerDisplay answer={answer} />
    </div>
  );
}

export default App;
