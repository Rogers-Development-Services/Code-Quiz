// Declaring Variables

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const startButton = document.getElementById('start');
const questionContainer = document.getElementById('question');
const optionContainer = document.getElementById('options');
const submitButton = document.getElementById('submit');
const timerContainer = document.getElementById('timer');
// this counts which question im refrencing in my array
const counter = 0;

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
            "A keyward which referes to the object from where it was called?",
            "A keyward which refers to the object from where it was refrenced?"
        ],
        answers: 0
    }
    {
        question: "Which symbol is used for comments in Javascript?",
        choices: [
            "<!-- -->",
            "//",
            "/*  */",
            "/*"
        ],
        answers: 1
    }
    {
        question: "What would be the result of 3 + 2 + \"7\"?",
        choices: [
            "12",
            "57",
        ],
        answers: 1
    }
    {
        question: "What is not an undefined value in JavaScript?",
        choices: [
            "A variable used in the code which doesn't exist",
            "A variable which is not assigned to any value",
            "A property which doesn't exsist",
            "A variable which does exisit which is not initialized"
        ],
        answers: 3
    }
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
    }
    {
        question: "Is JavaScript case sensitive?",
        choices: [
            "Yes",
            "No",
            "Depends",            
        ],
        answers: 0
    }
    {
        question: "What will this alert return: \"alert(document.getElementById('checkbox1').checked);\"?",
        choices: [
            "false",
            "true",
            "checked",
            "unchecked"
        ],
        answers: 1
    }
    {
        question: "____ is an operator which is used to return a string description of the type of a variable?",
        choices: [
            "this",
            "valueof",
            "typeof",
            "instanceof"
        ],
        answers: 2
    }
    
]

// Options
// Responses

// Here's what I think I need
function buildQuiz() { };

function showResults() { };

// Display the quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);


// GIVEN I am taking a code quiz

// # setInterval/setTimeout
// WHEN I click the start button
// THEN a timer starts 

// refrence funcion means name without () vs calling is name with ()
startButton.addEventListener('click', initialize);

var timeElapsed = 0;

function initialize() {
    setTime();
    askQuestion();
}

function setTime() {
    // console.log("start button is clicked");
    var timerInterval = setInterval(function () {

        timeElapsed++;
        timerContainer.textContent = "It has been " + timeElapsed + " seconds since your quiz has started";

        if (timeElapsed === 120) {
            clearInterval(timerInterval);
        }

    }, 1000);
}

// and I am presented with a question

function askQuestion() {

    var question = document.createElement('h1');

    question.innerText = questionArray[counter].question;
    
    // create a trigger once first quesions is answered which prompts the next question by event handler 'click', once i click on the choice i want to creat counter ++, this way it ques the next question.
    // generate all the questions and choices
    // click handler brings you to the next question. 
    // array for whichever choice they choose and then check the answer later
    // Hide and then display the second in CSS once different buttons are clicked


    questionContainer.appendChild(question);

    // var option1a = document.createElement('button');
    // var option1b = document.createElement('button');

    // option1a.innerText = "True";
    // option1b.innerText = "False";

    // optionContainer.appendChild(option1a);
    // optionContainer.appendChild(option1b);
}

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