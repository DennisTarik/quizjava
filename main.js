const questions = [
    {
        question: "Bist du ein neuer Fisch?",
        answer: true,
    },
    {
        question: "Findet dein Kurs lokal statt?",
        answer: false,
    },
    {
        question: "Bist du am coden interessiert?",
        answer: true,
    },
    {
        question: "Stört es dich lange vor dem PC zu sitzen?",
        answer: false,
    },
    {
        question: "Ist die Erde flach?",
        answer: false,
    },
    {
        question: "Ist Wasser nass?",
        answer: true,
    },
    {
        question: "Bist du ein Mensch?",
        answer: true,
    }
]
let questionIndex = 0

let correctAnswer = questions[questionIndex].answer;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = questions[questionIndex].question;
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
}
function showAnswerIsCorrect () {
/*     const resultElement = document.createElement("p");
    resultElement.className = "correct";
    resultElement.textContent = "Richtige Antwort!"; */
    ducoument.body.append(

    )
    document.querySelector(".quiz").appendChild(resultElement);
    setTimeout(setNewQuestion, 0);
}
function showAnswerIsIncorrect () {
/*     const resultElement = document.createElement("p");
    resultElement.className = "incorrect";
    resultElement.textContent = "Falsche Antwort!"; */
    document.querySelector(".quiz").appendChild(resultElement);
    disableButtons();
}
function disableButtons () {
    yesButton.disabled = true;
    noButton.disabled = true;
}
function setNewQuestion () {
    questionIndex += 1;
    document.querySelector(".quiz").removeChild(document.querySelector(".correct"))
    if (questionIndex < questions.length) {
        myQuestion.textContent = questions[questionIndex].question;
        correctAnswer = questions[questionIndex].answer;
        updateProgress(); 
    } else {
        quizEnd();
    }
}
function updateProgress() {
    const progressElement = document.querySelector(".progress");
    progressElement.textContent = `Question ${questionIndex + 1}/${questions.length}`;
}
function quizEnd () {
    document.querySelector(".quiz")
    .removeChild(document.querySelector(".answer"));
    document.querySelector(".quiz")
    .removeChild(document.querySelector(".progress"));
    const endElement = document.querySelector(".question");
    endElement.textContent = "Herzlichen Glückwunsch!!!";
    endElement.className = "finish";
}
