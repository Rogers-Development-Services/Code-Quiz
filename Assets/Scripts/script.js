// Declaring Variables

const quizContainer = document.getElementById('quiz');
const startButton = document.getElementById('start');
const questionContainer = document.getElementById('question');
const questionTitle = document.getElementById('question-title');
const optionContainer = document.getElementById('options');
const timerContainer = document.getElementById('timer');

// this counts which question im refrencing in my array
let counter = 0;
let scoreCount = 10;

var resultsContainer = document.createElement('div');

var initalsInput = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");
var msgDiv = document.querySelector('#msg');
var userInitalsSpan = document.querySelector("#user-initials");
var userScoreSpan = document.querySelector("#user-score");

// Declaring Arrays

var questionArray = [
    {
        question: "What is the JavaScript primitive data type which contain the values \"true or false\"?",
        choices: [
            "Numbers",
            "Strings",
            "Boolean",
            "Objects",
            "Undefined"
        ],
        answers: 2
    },
    {
        question: "Which company developed JavaScript? (not Jscript)",
        choices: [
            "Microsoft",
            "Apple",
            "Google",
            "Netscape",
            "CERN"
        ],
        answers: 3
    },
    {
        question: "What is \"this\" keyword in JavaScript?",
        choices: [
            "A keyward which referes to the object from where it was called",
            "A keyward which refers to the object from where it was refrenced"
        ],
        answers: 0
    },
    {
        question: "Which symbol is used for comments in Javascript?",
        choices: [
            "<!-- -->",
            "//",
            "/*  */",
            "/*"
        ],
        answers: 1
    },
    {
        question: "What would be the result of 3 + 2 + \"7\"?",
        choices: [
            "12",
            "57",
        ],
        answers: 1
    },
    {
        question: "What is not an undefined value in JavaScript?",
        choices: [
            "A variable used in the code which doesn't exist",
            "A variable which is not assigned to any value",
            "A property which doesn't exsist",
            "A variable which does exisit which is not initialized"
        ],
        answers: 3
    },
    {
        question: "What is an advantage of using \"innerHTML\" in JavaScript?",
        choices: [
            "Content is replaced everywhere",
            "We cannot use like \"appending to innerHTML\"",
            "Even if you use +=like \"innerHTML = innerHTML + 'html'\" still the old content is replaced by html",
            "The entire innerHTML content is re-parsed and build into elements, therefore its much slower",
            "The innerHTML does not provide validation and therefore we can potentially insert valid and broken HTML in the document and break it",
            "innerHTML is cleaner, especially when adding in extra properties like classes and javascript events."

        ],
        answers: 5
    },
    {
        question: "Is JavaScript case sensitive?",
        choices: [
            "Yes",
            "No",
            "Depends",
        ],
        answers: 0
    },
    {
        question: "What will this alert return: \"alert(document.getElementById('checkbox1').checked);\"?",
        choices: [
            "false",
            "true",
            "checked",
            "unchecked"
        ],
        answers: 1
    },
    {
        question: "____ is an operator which is used to return a string description of the type of a variable?",
        choices: [
            "this",
            "valueof",
            "typeof",
            "instanceof"
        ],
        answers: 2
    },
    {
        question: "",
        choices: "",
        answers: ''
    }

]

var selectedOptionArray = [];

// GIVEN I am taking a code quiz

// # setInterval/setTimeout
// WHEN I click the start button
// THEN a timer starts and am presented with a question

startButton.addEventListener('click', initialize);

function initialize() {

    hideButton();

    setTime();

    askQuestion();

}

function hideButton() {

    startButton.style.visibility = 'hidden';

}

// Declaring Variables for setTime

var timeElapsed = 0;
var timeLeft = 120;

function setTime() {

    var timerInterval = setInterval(function () {

        timeElapsed++;

        timeLeft--;

        timerContainer.textContent = "It has been " + timeElapsed + " seconds since your quiz has started!";

        // stops timer after two min
        if (timeElapsed === 120) {

            clearInterval(timerInterval);

            timerContainer.innerHTML = "";
        }

    }, 1000);
}

function askQuestion() {

    // Questions are set up and is displayed

    questionTitle.innerHTML = questionArray[counter].question;

    // Options are set up and displayed depending on which question is presented

    var optionAmount = questionArray[counter].choices.length;
    // console.log(optionAmount);

    for (i = 0; i < optionAmount; i++) {

        var ithOption = document.createElement('button');

        ithOption.innerText = questionArray[counter].choices[i];

        optionContainer.append(ithOption);
    }

    // # clearInterval/clearTimeout
    // WHEN all questions are answered or the timer reaches 0
    // THEN the game is over

    // when all the questions are answered or the timer ends, display results 
    if (counter === 10 || timeLeft === 0) {

        timeElapsed = 119;

        timeLeft = 0;

        quizContainer.innerHTML = "";

        questionContainer.innerHTML = "";

        optionContainer.innerHTML = "";

        compareResults();
    }

}

function compareResults() {

    // Display to lists side by side, with question, correct answer, and selected answer

    // Display answers

    // Couldn't figure out how to call from orginal array...

    var displayChoices = "";

    var displayAnswers = "";

    for (let j = 0; j < 10; j++) {
        if (j === 3) {
            if (selectedOptionArray[j] === "<!-- -->") {
                var unicodeOption = "&lt;&#33;&#45;&#45; &#45;&#45;&gt;";
                displayChoices += `<li>${unicodeOption.toString()}</li>`;
            }
        } else {
            displayChoices += `<li>${selectedOptionArray[j]}</li>`;
        }
    }

    for (let j = 0; j < 10; j++) {

        displayAnswers += `<li>${questionArray[j].choices[questionArray[j].answers]}</li>`;
    }

    resultsContainer.setAttribute("id", "results");

    resultsContainer.innerHTML = "Here were your choices: " + "<br>" + displayChoices + "<br>" + "<br>" + "Here were the correct answeres: " + "<br>" + displayAnswers.toString() + "<br>" + "<br>" + "You got " + scoreCount + " out of 10 correct.";

    questionContainer.replaceWith(resultsContainer);
}

// # event listeners
// WHEN I answer a question
// THEN I am presented with another question

// CLICK stores the users choice into the selectedOptionsArray and transitions to the next question
optionContainer.addEventListener('click', function (event) {

    selectedOptionArray.push(event.target.innerText);

    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock

    if (selectedOptionArray[counter] !== questionArray[counter].choices[questionArray[counter].answers]) {

        timeElapsed = timeElapsed + 5;

        timeLeft = timeLeft - 5;

        scoreCount--;

    }

    counter++;

    console.log(selectedOptionArray);

    optionContainer.innerHTML = "";

    askQuestion();

});

// # localStorage
// WHEN the game is over
// THEN I can save my initials and score

renderLastScore();

function displayMessage(type, message) {

    msgDiv.textContent = message;

    msgDiv.setAttribute("class", type);

}

function renderLastScore() {

    var initals = localStorage.getItem("initials");

    var score = localStorage.getItem("score-count");

    if (!initals) {

        return;
    }

    userInitalsSpan.textContent = initals;

    userScoreSpan.textContent = score;
}

submitBtn.addEventListener('click', function (event) {

    event.preventDefault();

    var initials = document.querySelector('#initials').value;

    var score = document.querySelector("#score-count").value;

    if (initials === "") {

        displayMessage("error", "Initials can't be blank");

    } else {

        displayMessage("Sucess", "Score recorded");

        localStorage.setItem("initials", initials);

        localStorage.setItem("score-count", score);

        renderLastScore();
    }
})
