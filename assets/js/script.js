// Questions array
const questions = [
    {
        question: 'What is the output of `console.log(typeof 42)`?',
        answers: [
            { text: '"number"', correct: true },
            { text: '"object"', correct: false },
            { text: '"string"', correct: false },
            { text: '"undefined"', correct: false }
        ]
    },
    {
        question: 'Which method can be used to convert a JSON string into a JavaScript object?',
        answers: [
            { text: 'JSON.parse()', correct: true },
            { text: 'JSON.stringify()', correct: false },
            { text: 'JSON.toObject()', correct: false },
            { text: 'Object.toJSON()', correct: false }
        ]
    },
    {
        question: 'How do you create a function in JavaScript?',
        answers: [
            { text: 'function myFunction() {}', correct: true },
            { text: 'function:myFunction() {}', correct: false },
            { text: 'function = myFunction() {}', correct: false },
            { text: 'create myFunction() {}', correct: false }
        ]
    },
    {
        question: 'Which statement creates a new object?',
        answers: [
            { text: 'let obj = {};', correct: true },
            { text: 'let obj = [];', correct: false },
            { text: 'let obj = () => {};', correct: false },
            { text: 'let obj = new Array();', correct: false }
        ]
    },
    {
        question: 'What will `console.log("5" + 3)` output?',
        answers: [
            { text: '"53"', correct: true },
            { text: '8', correct: false },
            { text: 'TypeError', correct: false },
            { text: 'undefined', correct: false }
        ]
    },
    {
        question: 'How do you add a comment in JavaScript?',
        answers: [
            { text: '// This is a comment', correct: true },
            { text: '# This is a comment', correct: false },
            { text: '/* This is a comment */', correct: false },
            { text: '<!-- This is a comment -->', correct: false }
        ]
    },
    {
        question: 'Which operator is used to assign a value to a variable?',
        answers: [
            { text: '=', correct: true },
            { text: '==', correct: false },
            { text: '===', correct: false },
            { text: '->', correct: false }
        ]
    },
    {
        question: 'What will be the output of `console.log("Hello".length)`?',
        answers: [
            { text: '5', correct: true },
            { text: '"Hello"', correct: false },
            { text: 'undefined', correct: false },
            { text: 'Error', correct: false }
        ]
    },
    // Add more questions as needed
];
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-btn');
    const questionContainerElement = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const timerElement = document.getElementById('timer');
    const restartButton = document.getElementById('restart-btn');
    const highScoreList = document.getElementById('high-score-list'); // Ensure this is in your HTML
    let scoreElement = document.getElementById('score'); // Element to display the score

    let shuffledQuestions, currentQuestionIndex;
    let timer;
    let timeRemaining = 60; // Set initial time limit (in seconds)
    let score = 0; // Variable to store the current score
    

    startButton.addEventListener('click', startQuiz);
    restartButton.addEventListener('click', restartQuiz);

    function startQuiz() {
        startButton.classList.add('hide');
        shuffledQuestions = questions.sort(() => Math.random() - .5);
        currentQuestionIndex = 0;
        score = 0; // Reset score
        scoreElement.innerText = score; // Reset score display
        timeRemaining = 60; // Reset the timer for each new quiz
        timerElement.innerText = timeRemaining;
        timer = setInterval(updateTimer, 1000); // Start the timer
        questionContainerElement.classList.remove('hide');
        setNextQuestion();
    }

    function updateTimer() {
        if (timeRemaining <= 0) {
            endQuiz();
        } else {
            timeRemaining--;
            timerElement.innerText = timeRemaining;
        }
    }

    function endQuiz() {
        clearInterval(timer);
        questionContainerElement.classList.add('hide');
        saveHighScore();
        showHighScores();
        restartButton.classList.remove('hide'); // Show the restart button
    }

    function restartQuiz() {
        clearInterval(timer);
        startQuiz(); // Reset and start the quiz again
        restartButton.classList.add('hide'); // Hide the restart button
    }

    function setNextQuestion() {
        resetState();
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }

    function showQuestion(question) {
        questionElement.innerText = question.question;
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButtonsElement.appendChild(button);
        });
    }

    function resetState() {
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct === 'true'; // Convert string to boolean
        if (correct) {
            score += 10; // Increment score for correct answer
            scoreElement.innerText = score; // Update score display
        } else {
            timeRemaining -= 10; // Time penalty for incorrect answer
            updateTimer();
        }
        Array.from(answerButtonsElement.children).forEach(button => {
            button.removeEventListener('click', selectAnswer); // Remove event listener to prevent multiple answers
        });
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            setTimeout(() => {
                currentQuestionIndex++;
                setNextQuestion();
            }, 1000); // Delay before showing next question
        } else {
            setTimeout(endQuiz, 1000); // Delay before ending the quiz
        }
    }

    function saveHighScore() {
        const initials = prompt("Enter your initials to save your score:");
        if (initials && initials.trim() !== "") {
            const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
            const newScore = { score: score, initials: initials };
            highScores.push(newScore);
            highScores.sort((a, b) => b.score - a.score);
            highScores.splice(5); // Keep only top 5 scores
            localStorage.setItem("highScores", JSON.stringify(highScores));
        }
    }

    function showHighScores() {
        const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
        highScoreList.innerHTML = highScores
            .map(score => `<li>${score.initials} - ${score.score}</li>`)
            .join("");
    }
});
