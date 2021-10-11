const correctAnswer = true;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = "Hast du Emotionen?";

const yesButton = document.querySelector(".yes")
yesButton.onclick = function() {
    if (correctAnswer === true) {
         alert('Herzlichen Glückwunsch du bist ein Mensch!');
    } else {
        alert("Falsche Antwort");
    }
};
const noButton = document.querySelector(".no")
noButton.onclick = function() {
    if (correctAnswer === false) {
        alert("Herzlichen Glückwunsch du bist ein Roboter!");
    } else {
        alert("Falsche Antwort");
    }
};