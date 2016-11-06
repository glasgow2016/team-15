var wrongAnswers = 0;
let timeMultiplier = 5;
var questionNum = 0;
var questions;


function jsoncallback(jsonObject){
        questions = jsonObject.Questions;

        update();  
}

function continueQuest(){
    update();
    $("#responseTile").hide();
    $("#responseTile2").hide();
    document.getElementById("ans1").style.visibility = 'visible';
    document.getElementById("ans2").style.visibility = 'visible';
}

function update(){
    document.getElementById("question-img").src = questions[questionNum].image;
    document.getElementById("question").innerHTML = questions[questionNum].question;  
    document.getElementById("ans1").innerHTML = questions[questionNum].answer1;
    document.getElementById("response1").innerHTML = questions[questionNum].response1;
    if(questions[questionNum].answer2 != undefined){
        document.getElementById("ans2").innerHTML = questions[questionNum].answer2;
        document.getElementById("response2").innerHTML = questions[questionNum].response2;
    }
}

function rightAnswer(ele){
     
    questionNum += 1;  
    document.getElementById("ans1").style.visibility = 'hidden';
    document.getElementById("ans2").style.visibility = 'hidden';
 	displayResponseBox(ele);
}

function wrongAnswer(eleId){
     wrongAnswers += 1;
     window.alert(wrongAnswers);
     displayResponseBox(eleId);
}

function displayResponseBox(eleId){
     if("ans1" === eleId){
         $("#responseTile").show();
         $("#responseTile2").hide();  
     }
     else if("ans2" === eleId){
         $("#responseTile").hide();
         $("#responseTile2").show();
     }

}

function gameOver(){
    return false;
}