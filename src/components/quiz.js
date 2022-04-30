import React, { useState } from 'react';

export default function Quiz() {
	const questions = [
		{
			questionText: 'What is "Schmeckle"?',
			answerOptions: [
				{ answerText: 'Ricks favorite food', isCorrect: false },
				{ answerText: 'The name of fly-guards', isCorrect: false },
				{ answerText: 'Ricks Cat-person friend', isCorrect: false },
        { answerText: 'A currency', isCorrect: true },
			],
		},
		{
			questionText: 'Which of the following is NOT one of Rick catch phrases?',
			answerOptions: [
				{ answerText: 'No jumping in the sewer', isCorrect: false },
				{ answerText: 'Hit the desk, Jack!', isCorrect: true },
				{ answerText: 'GRASSS... tastes bad', isCorrect: false },
				{ answerText: 'Uh ohhhh! Somersoult jump!', isCorrect: false },
			],
		},
		{
			questionText: 'Which is the dimension of the original Rick?',
			answerOptions: [
				{ answerText: 'C-126', isCorrect: false },
				{ answerText: 'C-132', isCorrect: false },
				{ answerText: 'C-137', isCorrect: true },
				{ answerText: 'C-129', isCorrect: false },
			],
		},
		{
			questionText: 'What is the name of the planet that Mortys robot is from?',
			answerOptions: [
				{ answerText: 'Gazorpazorp', isCorrect: true },
				{ answerText: 'Smegmalon', isCorrect: false },
				{ answerText: 'Chundlopia', isCorrect: false },
				{ answerText: 'Glaagablaaga', isCorrect: false },
			],
		},
	];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0); //state variable

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1); //Whatever the currect score is plus oen
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

	return (
		<div className='app'>
			{/* Wrapped in ternary operator. When true it will fire. */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length} //Plus one is needed because arrays start at 0
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
					     {questions[currentQuestion].answerOptions.map((answerOption) => (  //Array for questions
                 <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button> //Pass into handler, as this is how we know the correct answer is clicked
               ))}
					</div>
				</>
			)}
		</div>
	);
}
