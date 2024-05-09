import React, { useState } from "react";
import "./App.css";
import "./styles.css";
import CountdownTimer from "./components/Timer";
import { questions } from "./context/Questions";


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
					<div className="question-card">
						{/* Intrebarea de sus */}
						<h2>
							Question: {currentQuestion + 1} out of {questions.length}
						</h2>
						<h3 className="question-text">{questions[currentQuestion].text}</h3>

	
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
						<div className="countdown-timer">
							<CountdownTimer minutes={10} />
						</div>
					</div>


					{/* Butoanele */}
					<div className="nav-buttons">
						<button className="nav-buttons-button"
							onClick={() => {
								if (currentQuestion > 0) {
									setCurrentQuestion(currentQuestion - 1);
								}
							}}
							disabled={currentQuestion === 0}
						>
							Prev
						</button>
						<button className="nav-buttons-button"
							onClick={() => {
								if (currentQuestion + 1 < questions.length) {
									setCurrentQuestion(currentQuestion + 1);
								}
							}}
							disabled={currentQuestion + 1 === questions.length}
						>
							Next
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
