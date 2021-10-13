const questionList = [
    "Bist du ein neuer Fisch?",
    "Findet dein Kurs lokal statt?",
    "Bist du am coden interessiert?",
    "Stört es dich lange vor dem PC zu sitzen?",
    "Ist die Erde flach?",
    "Ist Wasser nass?",
    "Bist du ein Mensch?"
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

let correctAnswer = answerList[questionIndex]

const myQuestion = document.querySelector(".question");
myQuestion.textContent = questionList[0];
updateProgress();

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
    resultElement.textContent = "Richtige Antwort!";
    resultElement.className = "correct";
    document.querySelector(".quiz").appendChild(resultElement);
    setTimeout(setNewQuestion, 0);
}
function showAnswerIsIncorrect () {
    const resultElement = document.createElement("p");
    resultElement.textContent = "Falsche Antwort!";
    resultElement.className = "incorrect";
    document.querySelector(".quiz").appendChild(resultElement);
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
    document.querySelector(".quiz").removeChild(document.querySelector(".correct"))
    updateProgress();
    quizend();
}
function updateProgress() {
    const progressElement = document.querySelector(".progress");
    progressElement.textContent = `Question ${questionIndex + 1}/${questionList.length}`;
}
function quizend () {
    if (questionIndex === 7) {
        document.querySelector(".quiz")
        .removeChild(document.querySelector(".answer"));
        document.querySelector(".quiz")
        .removeChild(document.querySelector(".progress"));
        const endElement = document.querySelector(".question");
        endElement.textContent = "Herzlichen Glückwunsch!!!";
        endElement.className = "finish";
    } else {}
}