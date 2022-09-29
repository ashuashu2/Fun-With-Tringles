var quizForm = document.querySelector(".quiz-form");
var submitButton = document.querySelector(".submit-button");
var outputBox = document.querySelector(".output-box");


const correctAnswers = [
    "90°",
    "One right angles",
    "12,16,20",
    "100°",
    "30°",
];




function submitButtonHandler() {

    let score = 0 ;
    let index = 0 ;
    var formResults = new FormData(quizForm);
    
    for (let value of formResults.values()){
        if (value===correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
  outputBox.innerText = "YAY your score is " + score 
}


submitButton.addEventListener("click", submitButtonHandler)