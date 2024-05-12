import React from 'react';

const QuestionsView = ({ questions, currentQuestion, optionClicked }) => {
  return (
    <div className="question-card">
      <h2>
        Question: {currentQuestion + 1} out of {questions.length}
      </h2>
      <h3 className="question-text">{questions[currentQuestion].text}</h3>

      <ul>
        {questions[currentQuestion].options.map((option) => {
          return (
            <li
              key={option.id}
              onClick={() => optionClicked(option.isCorrect)}
            >
              {option.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionsView;