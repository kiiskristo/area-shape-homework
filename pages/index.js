import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { allExercises } from './excercises';

const AreaExercisesApp = () => {
  // State to store all exercises
  const [exercises, setExercises] = useState([]);
  // State to track current exercise index
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to store user's answer
  const [userAnswer, setUserAnswer] = useState('');
  // State to track correct/incorrect answer status
  const [answerStatus, setAnswerStatus] = useState(null);
  // State to track score
  const [score, setScore] = useState(0);
  // State to track attempts
  const [attempts, setAttempts] = useState(0);
  // State to track which shape types the user has seen hints for
  const [seenHints, setSeenHints] = useState({
    rectangle: false,
    triangle: false,
    parallelogram: false,
    trapezoid: false
  });

  // Shuffle exercises when component mounts
  useEffect(() => {
    // Shuffle the exercises for a random order
    const shuffledExercises = _.shuffle(allExercises);
    setExercises(shuffledExercises);
  }, []);

  // Function to check the user's answer
  const checkAnswer = () => {
    if (!exercises.length) return;
    
    const currentExercise = exercises[currentIndex];
    const userNumericAnswer = parseFloat(userAnswer);
    
    // Check if the answer is valid
    if (isNaN(userNumericAnswer)) {
      setAnswerStatus('invalid');
      return;
    }
    
    // Calculate tolerance for floating point differences
    const tolerance = 0.1;
    const isCorrect = Math.abs(userNumericAnswer - currentExercise.solution) < tolerance;
    
    setAnswerStatus(isCorrect ? 'correct' : 'incorrect');
    setAttempts(attempts + 1);
    
    if (isCorrect) {
      // Award 0.5 points if hint was used, otherwise 1 point
      const pointsToAdd = seenHints[currentExercise.type] ? 0.5 : 1;
      setScore(score + pointsToAdd);
    }
  };

  // Function to move to the next exercise
  const nextExercise = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer('');
      setAnswerStatus(null);
    }
  };

  // Function to move to the previous exercise
  const prevExercise = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setUserAnswer('');
      setAnswerStatus(null);
    }
  };

  // Mark a shape type as having had its hint viewed
  const viewHint = (type) => {
    setSeenHints(prev => ({
      ...prev,
      [type]: true
    }));
  };

  // Get formula based on shape type
  const getFormula = (type) => {
    switch (type) {
      case 'rectangle':
        return 'Area = length × width';
      case 'triangle':
        return 'Area = (base × height) ÷ 2';
      case 'parallelogram':
        return 'Area = base × height';
      case 'trapezoid':
        return 'Area = ((base1 + base2) × height) ÷ 2';
      default:
        return '';
    }
  };

  // Display loading message if exercises aren't loaded yet
  if (!exercises.length) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-xl font-semibold">Loading exercises...</div>
      </div>
    );
  }

  const currentExercise = exercises[currentIndex];
  const exerciseType = currentExercise.type;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700">Math Area Exercises</h1>
          <p className="mt-2 text-gray-600">Practice calculating the area of different shapes</p>
        </header>

        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-gray-700">Exercise {currentIndex + 1} of {exercises.length}</span>
            <span className="font-semibold text-green-600">Score: {score}/{attempts}</span>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* SVG Exercise Display */}
            <div className="flex-1 flex flex-col justify-center items-center border rounded-lg p-2 bg-gray-50">
              <h3 className="text-lg font-medium text-gray-700 mb-3">Find the area</h3>
              {currentExercise.svg}
            </div>

            {/* Exercise Information */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-blue-600 mb-3">
                Area Calculation
              </h2>
              
              <div className="mb-6">
                <label htmlFor="answer" className="block font-medium text-gray-700 mb-1">
                  Your Answer:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="answer"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter your answer"
                    className="flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
                  />
                  <button
                    onClick={checkAnswer}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Check
                  </button>
                </div>
                
                {/* Feedback message */}
                {answerStatus === 'correct' && (
                  <div className="mt-2 text-green-600 font-medium">
                    Correct! Well done! 🎉
                  </div>
                )}
                {answerStatus === 'incorrect' && (
                  <div className="mt-2 text-red-600 font-medium">
                    Incorrect. Try again!
                  </div>
                )}
                {answerStatus === 'invalid' && (
                  <div className="mt-2 text-orange-600 font-medium">
                    Please enter a valid number.
                  </div>
                )}
              </div>

              {/* Hint section */}
              <div className="mb-4">
                <details 
                  className="bg-gray-50 rounded-md p-2"
                  onClick={() => !seenHints[exerciseType] && viewHint(exerciseType)}
                >
                  <summary className="font-medium text-gray-700 cursor-pointer">Need a hint?</summary>
                  <div className="mt-2 pl-4 text-gray-600">
                    <p className="font-medium mb-1">Formula:</p>
                    <div className="bg-blue-50 p-2 rounded text-blue-800 font-medium mb-2">
                      {getFormula(exerciseType)}
                    </div>
                    
                    <p className="text-orange-600 font-medium mt-2">Note: Using a hint will reduce your points to 0.5 instead of 1.</p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between">
          <button
            onClick={prevExercise}
            disabled={currentIndex === 0}
            className={`px-4 py-2 rounded-md ${
              currentIndex === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Previous
          </button>
          <button
            onClick={nextExercise}
            disabled={currentIndex === exercises.length - 1}
            className={`px-4 py-2 rounded-md ${
              currentIndex === exercises.length - 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AreaExercisesApp;