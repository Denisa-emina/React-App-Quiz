import React, { useState } from "react";
import "./App.css";
import "./styles.css";
import { questions } from "./context/Questions";
import NavButtons from "./context/NavButtons";
import QuestionsView from "./components/QuestionsView";


function App() {
	// Proprietati
	const [showResults, setShowResults] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);

	
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
			<h1>
				<strong>React Quiz</strong>
			</h1>

			{showResults ? (
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
			  <div className="question-card-container">
				
				<QuestionsView
				  questions={questions}
				  currentQuestion={currentQuestion}
				  optionClicked={optionClicked}
				/> 
				
				<NavButtons
				  currentQuestion={currentQuestion}
				  setCurrentQuestion={setCurrentQuestion}
				  questionsLength={questions.length}
				/>
			  </div>
			)}
		  </div>
		);
	  }
	  
	  export default App;
