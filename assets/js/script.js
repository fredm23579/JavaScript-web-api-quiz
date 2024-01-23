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

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        startButton: document.getElementById('start-btn'),
        questionContainer: document.getElementById('question-container'),
        questionElement: document.getElementById('question'),
        answerButtons: document.getElementById('answer-buttons'),
        timerElement: document.getElementById('timer'),
        restartButton: document.getElementById('restart-btn'),
        highScoreList: document.getElementById('high-score-list'),
        endQuizButton: document.getElementById('end-quiz-btn'),
        highScoresContainer: document.getElementById('high-scores-container'),
        showHighScoresButton: document.getElementById('show-high-scores-btn'),
        scoreElement: document.getElementById('score'),
        form: document.getElementById('form'),
        input: document.getElementById('input')
    };

    let shuffledQuestions, currentQuestionIndex, timer, timeRemaining = 60, score = 0;
    
    addEventListeners();
    showHighScores();
    const clearHighScoresButton = document.getElementById('clear-high-scores-btn');

    clearHighScoresButton.addEventListener('click', clearHighScores);

    function clearHighScores() {
        localStorage.removeItem("highScores");
        showHighScores(); // Update the display of high scores
    }

    function addEventListeners() {
        elements.startButton.addEventListener('click', startQuiz);
        elements.restartButton.addEventListener('click', restartQuiz);
        elements.endQuizButton.addEventListener('click', endQuiz);
        elements.showHighScoresButton.addEventListener('click', toggleHighScores);
    }

    function startQuiz() {
        setQuizState(true);
        shuffledQuestions = shuffleArray(questions);
        currentQuestionIndex = 0;
        score = 0;
        elements.timerElement.classList.remove('hide'); 
        timeRemaining = 60;
        elements.timerElement.innerText = timeRemaining;
        timer = setInterval(updateTimer, 1000);
        setNextQuestion();
    }

    function setQuizState(isActive) {
        elements.questionContainer.classList.toggle('hide', !isActive);
        elements.endQuizButton.classList.toggle('hide', !isActive);
        elements.restartButton.classList.toggle('hide', isActive);
        elements.showHighScoresButton.classList.toggle('hide', isActive);
        elements.form.classList.toggle('hide', isActive);
        elements.highScoresContainer.classList.toggle('hide', isActive);
    }

    function updateTimer() {
        if (timeRemaining <= 0) {
            endQuiz();
        } else {
            timeRemaining--;
            elements.timerElement.innerText = timeRemaining;
        }
    }

    function endQuiz() {
        clearInterval(timer);
        saveHighScore();
        setQuizState(false);
        showHighScores();
    }

    function restartQuiz() {
        clearInterval(timer);
        startQuiz();
    }

    function setNextQuestion() {
        resetState();
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }

    function showQuestion(question) {
        elements.questionElement.innerText = question.question;
        shuffleArray(question.answers).forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            button.dataset.correct = answer.correct;
            button.addEventListener('click', selectAnswer);
            elements.answerButtons.appendChild(button);
        });
    }

    function resetState() {
        elements.answerButtons.innerHTML = '';
        elements.questionElement.innerText = '';
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct === 'true';
        updateScore(correct);
        disableButtons();
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < shuffledQuestions.length) {
                setNextQuestion();
            } else {
                endQuiz();
            }
        }, 1000);
    }

    function updateScore(correct) {
        if (correct) {
            score += 10;
        } else {
            timeRemaining -= 10;
        }
        elements.scoreElement.innerText = score;
        updateTimer();
    }

    function disableButtons() {
        Array.from(elements.answerButtons.children).forEach(button => {
            button.disabled = true;
        });
    }

    function saveHighScore() {
        elements.form.classList.remove('hide');
        elements.form.onsubmit = (e) => {
            e.preventDefault();
            const initials = elements.input.value;
            if (initials.trim() !== '') {
                const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
                highScores.push({ score, initials });
                highScores.sort((a, b) => b.score - a.score);
                highScores.splice(5);
                localStorage.setItem('highScores', JSON.stringify(highScores));
                showHighScores();
                elements.form.classList.add('hide');
            }
        };
    }

    function showHighScores() {
        const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        elements.highScoreList.innerHTML = highScores
            .map(scoreItem => ('<li>' + scoreItem.initials + ' - ' + scoreItem.score + '</li>'))
            .join('');
        elements.highScoresContainer.classList.remove('hide');
        elements.showHighScoresButton.classList.add('hide');
    }

    function toggleHighScores() {
        const isHidden = elements.highScoresContainer.classList.contains('hide');
        if (isHidden) {
            showHighScores();
        } else {
            elements.highScoresContainer.classList.add('hide');
            elements.showHighScoresButton.classList.remove('hide');
        }
    }
});
