const correctAnswer = true;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = "Hast du Emotionen?";

const yesButton = document.querySelector(".yes")
yesButton.onclick = function() {
    alert('Herzlichen Glückwunsch du bist ein Mensch!');
}
const noButton = document.querySelector(".no")
noButton.onclick = function() {
    alert("Herzlichen Glückwunsch du bist ein Roboter!");
}