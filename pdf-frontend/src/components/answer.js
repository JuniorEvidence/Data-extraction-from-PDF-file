// src/components/AnswerDisplay.js
import React from 'react';

function AnswerDisplay({ answer }) {
  return (
    <div>
      <h2>Answer</h2>
      <p>{answer ? answer : "No answer available."}</p>
    </div>
  );
}

export default AnswerDisplay;


