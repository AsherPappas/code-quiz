// Initializing all variables
var submitButton = document.getElementById("submitButton"); // Start Quiz submitButton
var timer = document.getElementById("timer"); // Timer Variable 
var quizChallengePage = document.getElementById("quizChallengePage"); // Initial page variable
var quizQuestionsPage = document.getElementById("quizQuestionsPage"); // Quiz page variable
var quizQuestionHeader = document.getElementById("quizQuestionHeader"); // Presents quiz question
var answerResponse = document.getElementById("answerResponse"); // Presents the response to the user's choice

var finalScorePage = document.getElementById("finalScorePage");
var allDone = document.getElementById("allDone");
var finalScoreIs = document.getElementById("finalScoreIs");

var initials = document.getElementById("initials"); 
var initialInput = document.getElementById("initialInput"); 
var initialButton = document.getElementById("initialButton"); 

var highScoresPage = document.getElementById("highScoresPage");
var score = document.getElementById("score");
var highScore = document.querySelector("#highScore");
var clearHighScore = document.querySelector("#clearHighScore");
var goBack = document.querySelector("#goBack");

// Choices provided for each quiz question
var choice1 = document.getElementById("one"); 
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");

// Quiz Questions array stores the different quiz questions
var quizQuestions = [
    {
    "quizQuestionHeader" : "Which is not a JavaScript Data type:", 
    "one" : "1. number",
    "two" : "2. string",
    "three" : "3. variable",
    "four" : "4. boolean",
    "correct" : "3. variable",
    },
    {
    "quizQuestionHeader" : "Which of the following is not a looping structure in JavaScript:", 
    "one" : "1. For",
    "two" : "2. While",
    "three" : "3. Do While",
    "four" : "4. array",
    "correct" : "4. array",
    },
    {
    "quizQuestionHeader" : "The condition in an if / else statement is enclosed within ____.", 
    "one" : "1. quotes",
    "two" : "2. curly brackets",
    "three" : "3. parenthesis",
    "four" : "4. square brackets",
    "correct" : "3. parenthesis",
    },
    {
    "quizQuestionHeader" : "Arrays in Javascript can be used to store ____.", 
    "one" : "1. numbers and strings",
    "two" : "2. other arrays",
    "three" : "3. booleans",
    "four" : "4. All the Above",
    "correct" : "4. All the Above",
    }
]

