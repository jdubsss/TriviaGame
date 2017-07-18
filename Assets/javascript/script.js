/*we are creating a quiz for users to select 1 answer for each question.
the user is times and needs to complete the quiz during the alotted time or the quiz is over.

items needed: countdown timer, a list of questions and possible answers. of the possible answers only 1 is correct.

user is presented with their results at the end of the quiz - ends on timer or ends on finish button.*/

// -----------------------Global variables------------------------

//is it best to hve the questions and radio btns in html? or create list in js and link to html?

var testQuestions = {
	question1: "answer",
	question2: "answer",
	question3: "answer",
	question4: "answer",
	question5: "answer",
};

var userGuess;

console.log(testQuestions);

    // $("#timer").html("00:15");





// ------------------------ list of functions ------------------------


//compare correct answer with users guess

//print iusers score to page


//end quiz when time runs out


//present user scor when press submit button



//when user clicks start the next page loads and the timer starts to run

/*var testResults = 

$('#startButton').on('click', function () {
	//times will start counting down from 15 seconds to zero
	//new page will load
})*/

//countdown timer
  // $("#startButton").on("click", timer.start());


window.onload = function() {
	console.log(testQuestions);

	//start timer
  // $("#start").on("click", timer.start);
  //and page loads
  

var correct = 0;
var incorrect = 0;  
var intervalId;
var clockRunning = false;
var timer = {

  time: 16,

  reset: function() {

    timer.time = 16;

    // DONE: Change the "timer" class to "00:00."
    $("#timer").html("00:15");

  },


  start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(timer.count, 1000);
        clockRunning = true;
    }
  },


  stop: function() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },


  count: function() {

    // DONE: Decrease time by 1, remember we cant use "this" here.
    timer.time--;

    // DONE: Get the current time, pass that into the timer.timeConverter function,
    //       and save the result in a variable.
    var converted = timer.timeConverter(timer.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#timer").html(converted);

          if (converted === "00:00") {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        // alert("Time Up!");

        // window.open(url="../../results.html");
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

	console.log(timer.start());

	$('#test3').on('click', function (){
	    correct++;
	  });


	$('#test8').on('click', function (){
	    correct++;
	  });

	$('#test11').on('click', function (){
	    correct++;
	  });

	$('#test13').on('click', function (){
	    correct++;
	  });

	$('#test19').on('click', function (){
	    correct++;
	  });

	console.log(correct);


};








/*function run() {
      intervalId = setInterval(decrement, 1000);
    }


var timer = {

  time: 0,
  lap: 1,

  reset: function() {

    timer.time = 0;
    timer.lap = 1;

    // DONE: Change the "display" div to "00:00."
    $(".timer").html("00:10");

  },
  start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(timer.count, 15000);
        clockRunning = true;
    }
  },
  stop: function() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },

  count: function() {

    // DONE: Decrease time by 1, remember we cant use "this" here.
    timer.time--;

    // DONE: Get the current time, pass that into the timer.timeConverter function,
    //       and save the result in a variable.
    var converted = timer.timeConverter(timer.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $(".timer").html(converted);
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
};*/














//program execution












