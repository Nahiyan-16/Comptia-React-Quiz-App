import React, { useState, useEffect } from "react";
import subjects from "../data";

const Quiz = ({ subjectIndex, onReset }) => {
  const currentSubject = subjects[subjectIndex];
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Shuffle questions and choices when the component mounts
    if (currentSubject) {
      const shuffled = currentSubject.questions.map((question) => {
        const choices = [...question.choices];
        shuffleArray(choices);
        return { ...question, choices };
      });
      shuffleArray(shuffled);
      setShuffledQuestions(shuffled);
    }
  }, [currentSubject]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleAnswer = (choice) => {
    const questionData = shuffledQuestions[currentQuestionIndex];
    const isCorrect = choice === questionData.answer;
    if (isCorrect) setScore(score + 1);

    setUserAnswers([
      ...userAnswers,
      {
        question: questionData.question,
        userAnswer: choice,
        correctAnswer: questionData.answer,
      },
    ]);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(false);
    }
  };

  // Ensure we are not accessing undefined properties
  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <div id="question-container">
      {isCompleted ? (
        <div>
          <h2>
            Your Score: {score}/{shuffledQuestions.length}
          </h2>
          {userAnswers.map((answer) => (
            <div key={answer.question} className="result">
              <p>Question: {answer.question}</p>
              <p>Your Answer: {answer.userAnswer}</p>
              <p>Correct Answer: {answer.correctAnswer}</p>
            </div>
          ))}
          <button onClick={onReset}>Start Over</button>
        </div>
      ) : (
        currentQuestion && (
          <div>
            <h2>{currentQuestion.question}</h2>
            {currentQuestion.choices.map((choice) => (
              <button key={choice} onClick={() => handleAnswer(choice)}>
                {choice}
              </button>
            ))}
            {showExplanation && (
              <div className="explanation">
                <p>
                  {currentQuestion.answer ===
                  userAnswers[userAnswers.length - 1].userAnswer
                    ? "Correct! "
                    : ""}
                  {currentQuestion.explanation}
                </p>
              </div>
            )}
            <div className="counter">
              <p>
                Answered: {currentQuestionIndex + 1} /{" "}
                {shuffledQuestions.length}
              </p>
            </div>
            <div className="navigation">
              <button
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={
                  currentQuestionIndex === shuffledQuestions.length - 1 &&
                  !showExplanation
                }
              >
                Next
              </button>
              <button onClick={onReset}>Reset</button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Quiz;
