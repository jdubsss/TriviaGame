/*we are creating a quiz for users to select 1 answer for each question.
the user is times and needs to complete the quiz during the alotted time or the quiz is over.

items needed: countdown timer, a list of questions and possible answers. of the possible answers only 1 is correct.

user is presented with their results at the end of the quiz - ends on timer or ends on finish button.*/


$(document).ready(function() {


var correct = 0;
var incorrect = 0;  
var intervalId;
var clockRunning = false;
var timer = {

  time: 16,

  reset: function() {

    timer.time = 16;

    $("#timer").html("00:15");

  },


  start: function() {

    if (!clockRunning) {
        intervalId = setInterval(timer.count, 1000);
        clockRunning = true;
    }
  },


  stop: function() {

    clearInterval(intervalId);
    clockRunning = false;
  },


  count: function() {

    timer.time--;


    var converted = timer.timeConverter(timer.time);
    console.log(converted);

    $("#timer").html(converted);

          if (converted === "00:00") {

        stop();

        window.location.href = 'results.html';
      }
	  },


	  timeConverter: function(t) {

	    var minutes = Math.floor(t / 60);
	    var seconds = t - (minutes * 60);

	    if (seconds < 10) {
	      seconds = "0" + seconds;
	    }

	    if (minutes === 0) {
	      minutes = "00";
	    }
	    else if (minutes < 10) {
	      minutes = "0" + minutes;
	    }

	    return minutes + ":" + seconds;
	  }

	}

	timer.start();

	$('#test3').on('click', function (){
	    correct++;
      console.log(correct);
	  });


	$('#test8').on('click', function (){
	    correct++;
      console.log(correct);
	  });

	$('#test11').on('click', function (){
	    correct++;
      console.log(correct);
	  });

	$('#test13').on('click', function (){
	    correct++;
      console.log(correct);
	  });

	$('#test19').on('click', function (){
	    correct++;
      console.log(correct);
	  });
//------code below is from Josh

  // localStorage.clear();


$('#submitx').on('click', function() {
    console.log(correct);
    
    localStorage.setItem("answers", correct);
    localStorage.getItem("answers")

});
console.log("local", localStorage.getItem("answers"))
 //how to remove item from lcoal storge
$('#correctGuess').text(localStorage.getItem("answers"));
    $('#incorrectGuess').text(5 - localStorage.getItem("answers"));

});






//----------------------jasons example in class  
/*var questions = [
  {
    questionText: 'What city were you born in?',
    answers: [
    {
      isCorrect: true,
      text: 'SLC'
    },
    {
      isCorrect: false,
      text: 'Denver'
    },
    {
      isCorrect: false,
      text: 'HNL'
    },
    {
      isCorrect: false,
      text: 'NYC'
    }
    ]
  },
    {
    questionText: 'What city were you born in?',
    answers: [
    {
      isCorrect: true,
      text: 'SLC'
    },
    {
      isCorrect: false,
      text: 'Denver'
    },
    {
      isCorrect: false,
      text: 'HNL'
    },
    {
      isCorrect: false,
      text: 'NYC'
    }
    ]
  },

  var questionContainer = $('#questionsContainer');


  questions.forEach(function(currentQuestion, index) {
    var questionText = $('<div />');
    questionText.text(currentQuestion.questionText);

    var answerList = $('<ul />');

    currentQuestion.answers.forEach(function (currentAnswer, answerIndex) {
      var curAnswerElement = $('<li />');
      curAnswerElement.text(currentAnswer.text);
      answerList.append(curAnswerElement)
    });

    var questionWapper = $('<div />');
    questionWapper.append(questionText)
    questionContainer.appendChild(question);
  })
*/
