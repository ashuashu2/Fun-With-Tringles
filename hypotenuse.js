var inputSide = document.querySelectorAll(".side-input");
var calculateButton = document.querySelector(".calculate-button");
var outputBox = document.querySelector(".output-box");


function calculateSumOfSquares (a,b){
    var sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateButtonHandler(){
    var sumOfSquares =  calculateSumOfSquares(Number(inputSide[0].value),Number(inputSide[1].value));
    var lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputBox.innerText= "The length of hypotenuse is " + lengthOfHypotenuse
}


calculateButton.addEventListener("click", calculateButtonHandler);