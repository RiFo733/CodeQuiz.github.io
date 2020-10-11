const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const option1 = document.getElementById("1");
const option2 = document.getElementById("2");
const option3 = document.getElementById("3");
const option4 = document.getElementById("4");
const timer = document.getElementById("timer");
const result = document.getElementById("result");
const score = document.getElementById("score");




var questions = [
{
    question: "What is a string surrounded by?",
    option1: "<div class='text-center btn btn-secondary'>1. Quotes</div>",
    option2: "<div class='text-center btn btn-secondary'>2. Parenthesis</div>",
    option3: "<div class='text-center btn btn-secondary'>3. Squiggly Brackets</div>",
    option4: "<div class='text-center btn btn-secondary'>4. Angle Brackets</div>",
    correctAnswer: "1"
},
{
    question: "Boolean is a...",
    option1: "<div class='text-center btn btn-secondary'>1. Perform the same action multiple times</div>",
    option2: "<div class='text-center btn btn-secondary'>2. Store Information</div>",
    option3: "<div class='text-center btn btn-secondary'>3. True/False value</div>",
    option4: "<div class='text-center btn btn-secondary'>4. For Soup</div>",
    correctAnswer: "3"
},
{
    question: "What is the main “building blocks” of the program?",
    option1: "<div class='text-center btn btn-secondary'>1. Variables</div>",
    option2: "<div class='text-center btn btn-secondary'>2. Array</div>",
    option3: "<div class='text-center btn btn-secondary'>3. Function</div>",
    option4: "<div class='text-center btn btn-secondary'>4. Cloud</div>",
    correctAnswer: "3"
},
{
    question: "What is a “named storage” for data to store goodies, visitors, and other data?",
    option1: "<div class='text-center btn btn-secondary'>1. Variables</div>",
    option2: "<div class='text-center btn btn-secondary'>2. Array</div>",
    option3: "<div class='text-center btn btn-secondary'>3. Function</div>",
    option4: "<div class='text-center btn btn-secondary'>4. Cloud</div>",
    correctAnswer: "1"
},
{
    question: "What Is JavaScript?",
    option1: "<div class='text-center btn btn-secondary'>1. Operating System</div>",
    option2: "<div class='text-center btn btn-secondary'>2. Programming Language</div>",
    option3: "<div class='text-center btn btn-secondary'>3. Web Browser</div>",
    option4: "<div class='text-center btn btn-secondary'>4. Software</div>",
    correctAnswer: "2"
}
];

const finalQuestion = questions.length - 1;
let startQuestion = 0;


function renderQuestion(){
    let q = questions[startQuestion];


    question.innerHTML = "<p>"+ q.question +"</p>";
    option1.innerHTML = q.option1;
    option2.innerHTML = q.option2;
    option3.innerHTML = q.option3;
    option4.innerHTML = q.option4;
}

document.getElementById("startButton").addEventListener("click", startQuiz);
document.getElementById("startButton").addEventListener("click", setTime);
document.getElementById("startButton").addEventListener("click", function () {
    messageDiv.textContent = "";
});

var timeEl = document.querySelector(".time");
var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer:" + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}


setTime();




window.score = new Score.Model(json);

score
    .onComplete
    .add(function (result) {
        document
            .querySelector('#score')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#scoreElement").Score({ model: score });

