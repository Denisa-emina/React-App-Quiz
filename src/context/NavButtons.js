import React from 'react';

const NavButtons = ({ currentQuestion, setCurrentQuestion, questionsLength }) => {
  return (
    <div className="nav-buttons">
      <button
        className="nav-buttons-button"
        onClick={() => {
          if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
          }
        }}
        disabled={currentQuestion === 0}
      >
        Prev
      </button>
      <button
        className="nav-buttons-button"
        onClick={() => {
          if (currentQuestion + 1 < questionsLength) {
            setCurrentQuestion(currentQuestion + 1);
          }
        }}
        disabled={currentQuestion + 1 === questionsLength}
      >
        Next
      </button>
    </div>
  );
};

export default NavButtons;