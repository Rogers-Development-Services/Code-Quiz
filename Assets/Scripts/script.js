// Declaring Variables

const quizContainer = document.getElementById('quiz');
const startButton = document.getElementById('start');
const questionContainer = document.getElementById('question');
const questionTitle = document.getElementById('question-title');
const optionContainer = document.getElementById('options');
// const submitButton = document.getElementById('submit');
const timerContainer = document.getElementById('timer');

// const initials = document.getElementById("initials");
// const saveScore = document.getElementById("saveScoreButton");
// const finalScore = document.getElementById('finalScore');
// const mostRecentScore = localStorage.getItem("mostRecentScore");

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
// var correctOptionIndex = questionArray[counter].choices[questionArray[counter].answers];
// console.log (correctOptionIndex);
// console.log(questionArray[counter].choices[questionArray[counter].answers]);

var selectedOptionArray = [];
// var correctArray = [2, 1, 0, ];
// correctAnswers = [];

// if (answerArray[i] === correctArray[i]; correctArray++) {
//     // compare the indexes of each array and tally correct answers
//     // keep track of correct answers
//     // let correctAnswer = [];
//     if (correctArray[i] === correctArray[i] {
//         correctAnswers++;
//     }) 
// }

// GIVEN I am taking a code quiz

// # setInterval/setTimeout
// WHEN I click the start button
// THEN a timer starts and am presented with a question

// refrence funcion means name without () vs calling is name with ()
// Need to make this buton disappear after first click!!!
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
// var timePenalty = timeElapsed + 5;
// var totalTime = timeLeft - timeElapsed;

function setTime() {
    // console.log("start button is clicked");

    var timerInterval = setInterval(function () {

        timeElapsed++;

        timeLeft--;

        timerContainer.textContent = "It has been " + timeElapsed + " seconds since your quiz has started!";

        // stops timer after two min
        if (timeElapsed === 120) {

            clearInterval(timerInterval);

            // timerContainer.textContent = "Times UP!";
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

    // for (let i = 0; i < 10; i++) {

    //     if (i == 3) {

    //         if (selectedOptionArray[i] === "<!-- -->") {

    //             var unicodeOption = "&lt;&#33;&#45;&#45; &#45;&#45;&gt;";

    //             displayChoices += `<li>${unicodeOption.toString()}</li>`;
            
    //         } else {

    //             displayChoices += `<li>${selectedOptionArray[i]}</li>`;
    //         }
    //     }
    // }

    for (let j = 0; j < 10; j++) {

        displayAnswers += `<li>${questionArray[j].choices[questionArray[j].answers]}</li>`;
    }
    // [
    // questionArray[0].choices[questionArray[0].answers],
    // questionArray[1].choices[questionArray[1].answers],
    // questionArray[2].choices[questionArray[2].answers],
    // questionArray[3].choices[questionArray[3].answers],
    // questionArray[4].choices[questionArray[4].answers],
    // questionArray[5].choices[questionArray[5].answers],
    // questionArray[6].choices[questionArray[6].answers],
    // questionArray[7].choices[questionArray[7].answers],
    // questionArray[8].choices[questionArray[8].answers],
    // questionArray[9].choices[questionArray[9].answers]
    // ];

    // if ( displayChoices === displayAnswers) {

    //     scoreCount++

    // }

    // var displayAmount = questionArray[counter].choices.length;

    // for (j = 0; j < displayAmount; j++) {

    //     var jthAmount = document.createElement('ul');

    //     jthOption.innerText = questionArray[counter].choices[answers];

    //     optionContainer.append(ithOption);
    // }

    resultsContainer.setAttribute("id", "results");

    resultsContainer.innerHTML = "Here were your choices: " + "<br>" + displayChoices + "<br>" + "<br>" + "Here were the correct answeres: " + "<br>" + displayAnswers.toString() + "<br>" + "<br>" + "You got " + scoreCount + " out of 10 correct.";

    questionContainer.replaceWith(resultsContainer);

    // if (selectedOptionArray[counter] !== questionArray[counter].choices[questionArray[counter].answers]) {

    // resultsContainer.setAttribute("id", "results");

    // resultsContainer.innerHTML = "Here are your results:";

    // questionContainer.replaceWith(resultsContainer);
    // }
}

// initials.innerText = mostRecentScore;

// # event listeners
// WHEN I answer a question
// THEN I am presented with another question

// CLICK stores the users choice into the selectedOptionsArray and transitions to the next question
optionContainer.addEventListener('click', function (event) {

    selectedOptionArray.push(event.target.innerText);
    // console.log(event.target.innerText);
    // console.log(selectedOptionArray);
    // console.log(questionArray[counter].choices[questionArray[counter].answers]);

    // this doesn't work...
    // var chosenOption = selectedOptionArray[counter];
    // console.log(chosenOption);

    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock

    if (selectedOptionArray[counter] !== questionArray[counter].choices[questionArray[counter].answers]) {

        timeElapsed = timeElapsed + 5;

        timeLeft = timeLeft - 5;

        scoreCount--;

    }

    counter++;

    console.log(selectedOptionArray);
    // console.log(questionArray[0].choices[questionArray[0].answers]);

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



// # event listeners + modifying remanining time
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

    // var correctOption = questionArray[counter].choices[answers];

    // var chosenOption = selectedOptionArray[counter];
    // console.log(chosenOption);
    // console.log(questionArray[counter].choices[questionArray[counter].answers]);

    // var selectedOption = optionContainer.addEventListener('click', function (event) {

    // if ( selectedOption !== correctOption ) {
    //     // subtract 5s from the timer
    //     setTime(-5);
    //     }
    // });





    // create a trigger once first quesions is answered which prompts the next question by event handler 'click', once i click on the choice i want to creat counter ++, this way it ques the next question.
    // generate all the questions and choices
    // click handler brings you to the next question. 
    // array for whichever choice they choose and then check the answer later
    // Hide and then display the second in CSS once different buttons are clicked