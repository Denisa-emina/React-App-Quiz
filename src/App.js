import React, { useState } from "react";
import "./App.css";
import "./styles.css";
import CountdownTimer from "./components/Timer";



function App() {
  // Proprietati
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  
  
  const questions = [
    {
      text: "What command is used to start the React local development server?",
      options: [
        { id: 0, text: "npm start", isCorrect: true },
        { id: 1, text: "npm serve", isCorrect: false },
        { id: 2, text: "npm build", isCorrect: false },
        { id: 3, text: "npm run dev", isCorrect: false },
      ],
    },
    {
      text: "To develop and run React code, Node.js is required.",
      options: [
        { id: 0, text: "True", isCorrect: true },
        { id: 1, text: "False", isCorrect: false },
        
      ],
    },
    {
      text: "React component names must begin with an uppercase letter.",
      options: [
        { id: 0, text: "True", isCorrect: true },
        { id: 1, text: "False", isCorrect: false },
        
      ],
    },
    {
      text: "Which of the following command is used to install create-react-app?",
      options: [
        { id: 0, text: "npm install -g create-react-app", isCorrect: false },
        { id: 1, text: "npx create-react-app my-app",isCorrect: true },
        { id: 2, text: "npm install create-react-app",isCorrect: false },
        { id: 3, text: "npm install -f create-react-app",  isCorrect: false },
      ],
    },
    {
      text: "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
      options: [
        { id: 0, text: "data", isCorrect: false },
        { id: 1, text: "key", isCorrect: true },
        { id: 2, text: "index", isCorrect: false },
        { id: 3, text: "id", isCorrect: false },
      ],
    },
    {
      text: "What is the default port where webpack-server runs?",
      options: [
        { id: 0, text: "8080", isCorrect: false },
        { id: 1, text: "6060",isCorrect: false },
        { id: 2, text: "3030",isCorrect: false },
        { id: 3, text: "3000",  isCorrect: true },
      ],
    },
    {
      text: " Which of these use the spread operator?",
      options: [
        { id: 0, text:  "const combined = ...array1 + ...array2;  ", isCorrect: false },
        { id: 1, text: "const combined = [array1, array2];",isCorrect: false },
        { id: 2, text: "const combined = array1 + array2;", isCorrect: false },
        { id: 3, text: "const combined = [...array1, ...array2];  ",  isCorrect: true },
      ],
    },
    {
      text: "What is the correct syntax to import a Component from React?",
      options: [
        {id: 0, text: "import React.Component from 'react' ", isCorrect: false },
        { id: 1, text: "import Component from 'react' ",isCorrect: false },
        { id: 2, text: "import [ Component ] from 'react' ",isCorrect: false },
        { id: 3, text: "import { Component } from 'react' ", isCorrect: true },
      ],
    },
    {
      text: "What are the two ways to handle data in React?",
      options: [
        { id: 0, text: "State & Props", isCorrect: true },
        { id: 1, text: "Services & Components",isCorrect: false },
        { id: 2, text: "State & Services",isCorrect: false },
        { id: 3, text: "State & Component", isCorrect: false },
      ],
    },
    {
      text: "What tool does React use to compile JSX?",
      options: [
        { id: 0, text: "React Router", isCorrect: false },
        { id: 1, text: "Babel",isCorrect: true },
        { id: 2, text: "JSX Compiler",isCorrect: false },
        { id: 3, text: "None of the above",  isCorrect: false },
      ],
    },{
      text: "Don't take into consideration the final score, it's just a quiz. YOU are a great developer !",
      options: [
        { id: 0, text: <img src='icons8-react-js-150.png' alt=""/>, isCorrect: true},
      ]
    },
  ];
   
  
  // Celelalte functii
  

  /* un posibil raspuns a fost apasat */
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  

  
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  

  return (
    <div className="App">
      {/* Header */}
      <h1><strong>𝓡𝓮𝓪𝓬𝓽 𝓠𝓾𝓲𝔃</strong></h1>
  
      
      {showResults? (
        /*  Rezultate finale */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length}
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /*  Question Card */
        <div className="question-card">
          {/* Intrebarea de sus */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          
          {/* Butoanele */}
          <div className="nav-buttons">
            <button
              onClick={() => {
                if (currentQuestion > 0) {
                  setCurrentQuestion(currentQuestion - 1);
                }
              }}
              disabled={currentQuestion === 0}
            >
               Previous Question
            </button>
            <button
              onClick={() => {
                if (currentQuestion + 1 < questions.length) {
                  setCurrentQuestion(currentQuestion + 1);
                }
              }}
              disabled={currentQuestion + 1 === questions.length}
            >
              Next Question 
            </button>
          </div>
  
          {/* Raspunsurile posibile */}
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
          <div>
            <CountdownTimer minutes={10} />
          </div>
        </div>
      )}
    </div>
  );
}


export default App;
