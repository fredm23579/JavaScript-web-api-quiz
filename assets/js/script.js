// Questions array
const questions = [
  // Define the questions array to use later
  {
    question: 'What is the output of `console.log(typeof 42)`?', // Question 1 of 14
    answers: [
      // Answer choices for Question 1 of 14
      { text: '"number"', correct: true }, // correct answer
      { text: '"object"', correct: false }, // incorrect answer
      { text: '"string"', correct: false }, // incorrect answer
      { text: '"undefined"', correct: false } // incorrect answer
    ]
  },
  {
    question:
      'Which method can be used to convert a JSON string into a JavaScript object?', // Question 2 of 14
    answers: [
      // Answer choices for Question 2 of 14
      { text: 'JSON.parse()', correct: true }, // correct answer
      { text: 'JSON.stringify()', correct: false }, // incorrect answer
      { text: 'JSON.toObject()', correct: false }, // incorrect answer
      { text: 'Object.toJSON()', correct: false } // incorrect answer
    ]
  },
  {
    question: 'How do you create a function in JavaScript?', // Question 3 of 14
    answers: [
      // Answer choices for Question 3 of 14
      { text: 'function myFunction() {}', correct: true }, // correct answer
      { text: 'function:myFunction() {}', correct: false }, // incorrect answer
      { text: 'function = myFunction() {}', correct: false }, // incorrect answer
      { text: 'create myFunction() {}', correct: false } // incorrect answer
    ]
  },
  {
    question: 'Which statement creates a new object?', // Question 4 of 14
    answers: [
      // Answer choices for Question 4 of 14
      { text: 'let obj = {};', correct: true }, // correct answer
      { text: 'let obj = [];', correct: false }, // incorrect answer
      { text: 'let obj = () => {};', correct: false }, // incorrect answer
      { text: 'let obj = new Array();', correct: false } // incorrect answer
    ]
  },
  {
    question: 'What will `console.log("5" + 3)` output?', // Question 5 of 14
    answers: [
      // Answer choices for Question 5 of 14
      { text: '"53"', correct: true }, // correct answer
      { text: '8', correct: false }, // incorrect answer
      { text: 'TypeError', correct: false }, // incorrect answer
      { text: 'undefined', correct: false } // incorrect answer
    ]
  },
  {
    question: 'How do you add a comment in JavaScript?', // Question 6 of 14
    answers: [
      // Answer choices for Question 6 of 14
      { text: '// This is a comment', correct: true },
      { text: '# This is a comment', correct: false },
      { text: '/* This is a comment */', correct: false },
      { text: '<!-- This is a comment -->', correct: false }
    ]
  },
  {
    question: 'Which operator is used to assign a value to a variable?', // Question 7 of 14
    answers: [
      // Answer choices for Question 7 of 14
      { text: '=', correct: true },
      { text: '==', correct: false },
      { text: '===', correct: false },
      { text: '->', correct: false }
    ]
  },
  {
    question: 'What will be the output of `console.log("Hello".length)`?', // Question 8 of 14
    answers: [
      // Answer choices for Question 8 of 14
      { text: '5', correct: true },
      { text: '"Hello"', correct: false },
      { text: 'undefined', correct: false },
      { text: 'Error', correct: false }
    ]
  },
  {
    question: 'What is the output of `console.log(typeof 42)`?', // Question 9 of 14
    answers: [
      // Answer choices for Question 9 of 14
      { text: '"number"', correct: true },
      { text: '"object"', correct: false },
      { text: '"string"', correct: false },
      { text: '"undefined"', correct: false }
    ]
  },
  {
    question:
      'Which method removes the last element from an array and returns that element in JavaScript?', // Question 10 of 14
    answers: [
      // Answer choices for Question 10 of 14
      { text: 'pop()', correct: true },
      { text: 'push()', correct: false },
      { text: 'shift()', correct: false },
      { text: 'unshift()', correct: false }
    ]
  },
  {
    question:
      'What is the correct syntax for referring to an external script called "app.js"?', // Question 11 of 14
    answers: [
      { text: '<script src="app.js"></script>', correct: true }, // correct answer
      { text: '<script href="app.js"></script>', correct: false }, // incorrect answer
      { text: '<script ref="app.js"></script>', correct: false }, // incorrect answer
      { text: '<script name="app.js"></script>', correct: false } // incorrect answer
    ]
  },
  {
    question:
      'How do you write a conditional statement for executing some statements only if "i" is NOT equal to 5?', // Question 12 of 14
    answers: [
      { text: 'if (i != 5)', correct: true }, // correct answer
      { text: 'if i <> 5', correct: false }, // incorrect answer
      { text: 'if (i =! 5)', correct: false }, // incorrect answer
      { text: 'if (i ==! 5)', correct: false } // incorrect answer
    ]
  },
  {
    question: 'Which event occurs when the user clicks on an HTML element?', // Question 13 of 14
    answers: [
      { text: 'onclick', correct: true }, // correct answer
      { text: 'onchange', correct: false }, // incorrect answer
      { text: 'onmouseover', correct: false }, // incorrect answer
      { text: 'onmouseclick', correct: false } // incorrect answer
    ]
  },
  {
    question: 'How do you declare a JavaScript variable?', // Question 14 of 14
    answers: [
      { text: 'var myVariable;', correct: true }, // correct answer
      { text: 'v myVariable;', correct: false }, // incorrect answer
      { text: 'variable myVariable;', correct: false }, // incorrect answer
      { text: 'var = myVariable;', correct: false } // incorrect answer
    ]
  }
]
// shuffle array function for questions and answers
function shuffleArray (array) {
  // Define a function to shuffle the array
  return array.sort(() => Math.random() - 0.5) // Shuffle the array using the sort method and the Math.random method
}
// add event listeners to buttons
// start the quiz function
document.addEventListener('DOMContentLoaded', () => {
  // Add an event listener to the DOMContentLoaded event to start the quiz
  // Set up the elements for the quiz to use later
  const elements = {
    startButton: document.getElementById('start-btn'), // Get the start button element
    questionContainer: document.getElementById('question-container'), // Get the question container element
    questionElement: document.getElementById('question'), // Get the question element
    answerButtons: document.getElementById('answer-buttons'), // Get the answer buttons
    timerElement: document.getElementById('timer'), // Get the timer element
    restartButton: document.getElementById('restart-btn'), // Get the restart button
    highScoreList: document.getElementById('high-score-list'), // Get the high score list
    endQuizButton: document.getElementById('end-quiz-btn'), // Get the end quiz button
    highScoresContainer: document.getElementById('high-scores-container'), // Get the high scores container
    showHighScoresButton: document.getElementById('show-high-scores-btn'), // Get the show high scores button for toggling the high scores container
    scoreElement: document.getElementById('score'), // Get the score element for displaying the score
    form: document.getElementById('form'), // Get the form element for entering initials
    input: document.getElementById('input') // Get the input element for entering initials
  }
  // Set up the state of the quiz to use later
  let shuffledQuestions, // Shuffled questions array to use later
    currentQuestionIndex, // Index of the current question to use later
    timer, // Timer variable to use later
    timeRemaining = 60, // Time remaining variable to use later
    score = 0 // Score variable to use later
  // Add event listeners to buttons and form elements to start and restart the quiz and end the quiz and show high scores and clear high scores
  addEventListeners()
  // Show high scores function call to update the display of high scores
  showHighScores()
  // Define functions to start, restart, end, and show high scores
  const clearHighScoresButton = document.getElementById('clear-high-scores-btn') // Get the clear high scores button
  // Clear high scores function
  clearHighScoresButton.addEventListener('click', clearHighScores) // Add an event listener to the clear high scores button to clear high scores
  // Clear high scores function definition
  function clearHighScores () {
    localStorage.removeItem('highScores') // Remove the high scores from local storage
    showHighScores() // Update the display of high scores
  }
  // add event listeners function definition to start
  function addEventListeners () {
    elements.startButton.addEventListener('click', startQuiz) // Add an event listener to the start button
    elements.restartButton.addEventListener('click', restartQuiz) // Add an event listener to the restart button
    elements.endQuizButton.addEventListener('click', endQuiz) // Add an event listener to the end quiz button
    elements.showHighScoresButton.addEventListener('click', toggleHighScores) // Add an event listener to the show high scores button
  }
  // start the quiz function definition
  function startQuiz () {
    setQuizState(true) // Set the state of the quiz to active
    elements.startButton.classList.add('hide') // Hide the start button
    elements.questionContainer.classList.remove('hide') // Show the question container
    elements.showHighScoresButton.classList.add('hide') // Hide the show high scores button
    elements.form.classList.add('hide') // Hide the form element for entering initials
    elements.restartButton.classList.add('hide') // Hide the restart button
    elements.highScoresContainer.classList.add('hide') // Hide the high scores container

    shuffledQuestions = shuffleArray(questions) // Shuffle the questions
    currentQuestionIndex = 0 // Set the index of the current question to 0
    score = 0 // Set the score to 0
    elements.timerElement.classList.remove('hide') // Show the timer element
    timeRemaining = 60 // Set the time remaining to 60 seconds
    elements.timerElement.innerText = timeRemaining // Display the time remaining
    timer = setInterval(updateTimer, 1000) // Start the timer
    setNextQuestion() // Set the next question
  }
  // Set the state of the quiz function definition
  function setQuizState (isActive) {
    elements.questionContainer.classList.toggle('hide', !isActive) // Hide the question container
    elements.endQuizButton.classList.toggle('hide', !isActive) // Hide the end quiz button
    elements.restartButton.classList.toggle('hide', isActive) // Show the restart button
    elements.showHighScoresButton.classList.toggle('hide', isActive) // Show the show high scores button
    elements.form.classList.toggle('hide', isActive) // Show the form element for entering initials
    elements.highScoresContainer.classList.toggle('hide', isActive) // Show the high scores container
  }
  // Update the timer function definition
  function updateTimer () {
    if (timeRemaining <= 0) {
      // If the time remaining is less than or equal to 0
      endQuiz() // End the quiz
    } else {
      // Otherwise
      timeRemaining-- // Decrement the time remaining
      elements.timerElement.innerText = timeRemaining // Display the time remaining
    }
  }
  // End the quiz function definition
  function endQuiz () {
    clearInterval(timer) // Stop the timer
    saveHighScore() // Save the high score
    setQuizState(false) // Set the state of the quiz to inactive
    showHighScores() // Show the high scores
  }
  // Restart the quiz function definition
  function restartQuiz () {
    clearInterval(timer) // Stop the timer
    startQuiz() // Start the quiz
  }
  // Set the next question function definition
  function setNextQuestion () {
    resetState() // Reset the state of the quiz
    showQuestion(shuffledQuestions[currentQuestionIndex]) // Show the next question
  }
  // Show the next question function definition
  function showQuestion (question) {
    elements.questionElement.innerText = question.question // Display the question
    elements.questionElement.style.fontWeight = 'bold' // Bolden the question
    shuffleArray(question.answers).forEach(answer => {
      // Shuffle the answers
      const button = document.createElement('button') // Create a button
      button.innerText = answer.text // Display the answer
      button.classList.add('btn') // Add the class 'btn' to the button
      button.dataset.correct = answer.correct // Add the data attribute 'correct' to the button
      button.addEventListener('click', selectAnswer) // Add an event listener to the button
      elements.answerButtons.appendChild(button) // Append the button to the answer buttons
    })
  }
  // Reset the state of the quiz function definition
  function resetState () {
    elements.answerButtons.innerHTML = '' // Clear the answer buttons
    elements.questionElement.innerText = '' // Clear the question
  }
  // Select the answer function definition
  function selectAnswer (e) {
    const selectedButton = e.target // Get the selected button from the event target element and store it in a variable
    const correct = selectedButton.dataset.correct === 'true' // Check if the selected button has the correct data attribute
    updateScore(correct) // Update the score based on the correct answer or not
    disableButtons() // Disable the answer buttons after the user has selected an answer
    setTimeout(() => {
      // Set a timeout of 1 second
      currentQuestionIndex++ // Increment the index of the current question
      if (currentQuestionIndex < shuffledQuestions.length) {
        // If the index of the current question is less than the length of the shuffled questions array
        setNextQuestion() // Set the next question
      } else {
        // Otherwise
        endQuiz() // End the quiz
      }
    }, 1000) // Set a timeout of 1 second
  }
  // Update the score function definition
  function updateScore (correct) {
    if (correct) {
      // If the answer is correct
      score += 10 // Add 10 points to the score
    } else {
      timeRemaining -= 10 // Subtract 10 seconds from the time remaining
    }
    elements.scoreElement.innerText = score // Display the score
    updateTimer() // Update the timer
  }
  // Disable the answer buttons function definition
  function disableButtons () {
    Array.from(elements.answerButtons.children).forEach(button => {
      // Loop through the children of the answer buttons
      button.disabled = true // Disable the button after the user has selected an answer
    })
  }
  // Save the high score function definition
  function saveHighScore () {
    elements.form.classList.remove('hide') // Show the form element for entering initials
    elements.form.onsubmit = e => {
      // Add an event listener to the form
      e.preventDefault() // Prevent the default form submission behavior
      const initials = elements.input.value // Get the value of the input element
      if (initials.trim() !== '') {
        // If the input value is not empty
        const highScores = JSON.parse(localStorage.getItem('highScores')) || [] // Get the high scores from local storage
        highScores.push({ score, initials }) // Add the score and initials to the high scores
        highScores.sort((a, b) => b.score - a.score) // Sort the high scores in descending order
        highScores.splice(5) // Keep only the top 5 high scores
        localStorage.setItem('highScores', JSON.stringify(highScores)) // Save the high scores to local storage
        showHighScores() // Show the high scores
        elements.form.classList.add('hide') // Hide the form element for entering initials
      }
    }
  }
  // Show the high scores function definition
  function showHighScores () {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [] // Get the high scores from local storage
    elements.highScoreList.innerHTML = highScores // Display the high scores in the high score list
      .map(
        // Map over the high scores
        (
          scoreItem // Map over the high scores
        ) => '<li>' + scoreItem.initials + ' - ' + scoreItem.score + '</li>' // Display the initials and score in the high score list
      )
      .join('') // Join the high scores with a newline character
    elements.highScoresContainer.classList.remove('hide') // Show the high scores container
    elements.showHighScoresButton.classList.add('hide') // Hide the show high scores button
  }
  // Toggle the high scores function definition
  function toggleHighScores () {
    const isHidden = elements.highScoresContainer.classList.contains('hide') // Check if the high scores container is hidden or not
    if (isHidden) {
      // If the high scores container is hidden
      showHighScores() // Show the high scores
    } else {
      elements.highScoresContainer.classList.add('hide') // Otherwise hide the high scores
      elements.showHighScoresButton.classList.remove('hide') // Show the show high scores button
    }
  }
})
