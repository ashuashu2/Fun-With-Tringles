var angle1 = document.querySelector("#angle-1");
var angle2 = document.querySelector("#angle-2");
var angle3 = document.querySelector("#angle-3");
var tringleButton = document.querySelector(".is-tringle");
var outputBox= document.querySelector(".output-box");

function calculateSumOfAngles(angle1,angle2,angle3){
    var sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
}

function tringleButtonHandler(){
    var sumOfAngles = calculateSumOfAngles (Number(angle1.value),Number(angle2.value),Number(angle3.value));

    if(sumOfAngles){
        if (sumOfAngles === 180 ){
            outputBox.innerText = "Yes, that angles form a tringle"
        }else{
            outputBox.innerText = "Sorry, that angles don't form a tringle"
        }

    }else{
        outputBox.innerText = "Please Enter All The Feilds"
    }
     
    

}


tringleButton.addEventListener("click", tringleButtonHandler);