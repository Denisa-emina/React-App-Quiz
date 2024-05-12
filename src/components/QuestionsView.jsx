import React, { useState } from 'react';
import CountdownTimer from './Timer';

const QuestionsView = ({ questions, currentQuestion, optionClicked }) => {
const [timeLeft, setTimeLeft] = useState(10 * 60); 
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
      <CountdownTimer
        minutes={timeLeft / 60} />
    </div>
  );
};

export default QuestionsView;
