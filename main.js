const correctAnswer = true;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = "Bist du ein Mensch?";

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
}
function showAnswerIsIncorrect () {
    const resultElement = document.createElement("p");
    resultElement.textContent = "Deine Antwort ist falsch!";
    resultElement.className = "incorrect";
    document.body.appendChild(resultElement);
}