// src/components/QuestionForm.js
import React, { useState } from 'react';

function QuestionForm({ onAskQuestion }) {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAskQuestion(question);
    setQuestion('');
  };

  return (
    <div>
      <h2>Ask a Question</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question"
        />
        <button type="submit">Ask</button>
      </form>
    </div>
  );
}

export default QuestionForm;
