const questionList = [
    "Are you a Fish",
    "Are you a Cat",
    "Are you a Human",
    "Are you a Dog",
    "Are you a Camel",
    "Are you a Bird",
    "Are you a Cyborg"
];

let questionIndex = 0

const answerList = [
    true,
    false,
    true,
    false,
    false,
    true,
    true,
]

let correctAnswer = answerList[0]

const myQuestion = document.querySelector(".question");
myQuestion.textContent = questionList[0];

const yesButton = document.querySelector(".yes")
yesButton.onclick = function () {
    if (correctAnswer === true) {
    showAnswerIsCorrect()
    } else {
    showAnswerIsIncorrect()
    }
}; 
const noButton = document.querySelector(".no")
noButton.onclick = function () {
    if (correctAnswer === false) {
    showAnswerIsCorrect()
    } else {
    showAnswerIsIncorrect()
    }
}; 
function showAnswerIsCorrect () {
    const resultElement = document.createElement("p");
    resultElement.textContent = "Deine Antwort ist richtig!";
    resultElement.className = "correct";
    document.body.appendChild(resultElement);
    setTimeout(setNewQuestion, 500);
}
function showAnswerIsIncorrect () {
    const resultElement = document.createElement("p");
    resultElement.textContent = "Deine Antwort ist falsch!";
    resultElement.className = "incorrect";
    document.body.appendChild(resultElement);
    disableButtons();
}
function disableButtons () {
    yesButton.disabled = true;
    noButton.disabled = true;
}
function setNewQuestion () {
    questionIndex += 1;
    myQuestion.textContent = questionList[questionIndex];
    correctAnswer = answerList[questionIndex];
    document.body.removeChild(document.querySelector(".correct"))
    quizend();
}
function quizend () {
    if (questionIndex === 7) {
        document.body.removeChild(document.querySelector(".answer"));
        const endElement = document.createElement("h1");
        endElement.textContent = "Herzlichen Glückwunsch!!!";
        endElement.className = "finish";
        document.body.appendChild(endElement);
    } else {}
}