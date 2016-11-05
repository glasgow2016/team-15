function jsoncallback(jsonObject){
     for (var i = 0; i < jsonObject.Questions.length; i++) {
        document.getElementById("question-img").src = jsonObject.Questions[i].image;
        document.getElementById("question").innerHTML = jsonObject.Questions[i].question;
        document.getElementById("ans1").innerHTML = jsonObject.Questions[i].answer1;
        if(jsonObject.Questions[i].answer2 != undefined){
          document.getElementById("ans2").innerHTML = jsonObject.Questions[i].answer2;
        }
      }
    }
