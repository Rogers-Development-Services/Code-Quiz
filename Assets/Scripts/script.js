// Declaring Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = getElementById('results');
const startButton = getElementById('start');
const questionContainer = getElementById('question');
const optionContainer = getElementById('options');
const submitButton = getElementById('submit');
const timerContainer = getElementById('timer');

// Here's what I think I need
function buildQuiz (){};

function showResults(){};

// Display the quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);


// GIVEN I am taking a code quiz

// # setInterval/setTimeout
// WHEN I click the start button
// THEN a timer starts 

startButton.addEventListener('click', setTime(), askQuestion());

var timeElapsed = 0;

function setTime() {

    var timerInterval = setInterval(function(){

        timeElapsed++;
        timerContainer.textContent = "It has been " + timeElapsed + " seconds since your quiz has started"; 

        if (timeElapsed === 120) {
            clearInterval(timerInterval);
        }

    }, 1000);
}

// and I am presented with a question

function askQuestion() {

    var question1 = questionContainer.createElement('h1');
    question1.innerText = "In JavaScript an array is considered an object?"

    var option1a = document.createElement('button');
    var option1b = document.createElement('button');
    
    option1a.innerText = "True";
    option1b.innerText = "False";

    questionContainer.appendChild(option1a);
    questionContainer.appendChild(option1b);
}

// function setTime() {
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
//       if(secondsLeft === 0) {
//         clearInterval(timerInterval);
//         sendMessage();
//       }
  
//     }, 1000);
//   }

// # event listeners
// WHEN I answer a question
// THEN I am presented with another question

// # event listeners + modifying remanining time
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// # clearInterval/clearTimeout
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// # localStorage
// WHEN the game is over
// THEN I can save my initials and score