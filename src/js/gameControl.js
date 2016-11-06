var wrongAnswers = 0;
var timeMultiplier = 5;
var questionNum = 0;
var questions;


function jsoncallback(jsonObject){
    questions = jsonObject.Questions;
    update();
}

function continueQuest(){
    if(questionNum===questions.length){
        var masterDiv = document.getElementById("master");
        while(masterDiv.hasChildNodes()){
            masterDiv.removeChild(document.getElementById("master").firstChild);
        }

        var header = document.createElement("h1");
        header.appendChild(document.createTextNode("Summary"));
        masterDiv.appendChild(header);

        var timeLate = wrongAnswers * timeMultiplier;

        var message = document.createElement("p");

        if(timeLate == 0){
            message.appendChild(document.createTextNode( "Well done you were on time !"));
            masterDiv.appendChild(message);
        }else{
            message.appendChild(document.createTextNode("Oh no ! you were " + timeLate + " minutes late !"));
            masterDiv.appendChild(message);
            message = document.createElement("p");
            message.appendChild(document.createTextNode("Try again and plan a safer route !"));
            masterDiv.appendChild(message);
        }

        var mainMenuButton = document.createElement("a");
        mainMenuButton.href = "homepage.html";
        mainMenuButton.text = "Home";
        masterDiv.appendChild(mainMenuButton);

    }
    else {
        update();
        $("#responseTile").hide();
        $("#responseTile2").hide();
        document.getElementById("ans1").style.visibility = 'visible';
        document.getElementById("ans2").style.visibility = 'visible';
    }
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
     //window.alert(wrongAnswers);
     displayResponseBox(eleId);
}

function getTime() {
  var timeLate = wrongAnswers * timeMultiplier;

  if(timeLate == 0){
    document.getElementById("hidden").innerHTML = "Well done you were on time !";
  }else{
    document.getElementById("hidden").innerHTML = "Oh no ! you were " + timeLate + " minutes late !";
    document.getElementById("hidden2").innerHTML = "Try again and plan a safer route !";
  }
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

