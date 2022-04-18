// alert("you are going right!");

var gamePattern=[];

var buttonColors =["red","blue","green","yellow"];

var userClickedPattern=[];
var started=false;
var level=0;

$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});



$(".btn").click(function()
{
  var userChosenColor =$(this).attr("id");
  userClickedPattern.push(userChosenColor);
// console.log(userClickedPattern);
playSound(userChosenColor);
animatePress(userChosenColor);
checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel)
{
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){

    console.log("success");

    if(userClickedPattern.length === gamePattern.length)
    {
      setTimeout(function (){
        nextSequence();
      },500);
    }

  }
  else{

    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function() {
      // Do stuff
      $("body").removeClass("game-over");
  }, 200);

  $("h1").text("Game Over, Press Any Key to Restart");
    console.log("wrong");
    startOver();
  }
}


function nextSequence()
{
  userClickedPattern=[];

  level++;

  $("#level-title").text("Level " + level);

  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour =buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);



  playSound(randomChosenColour);
}

function playSound(name)
{
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor)
{
  $("#"+ currentColor).addClass("pressed");
  setTimeout(function() {
    $("#"+ currentColor).removeClass("pressed");
}, 100);
}

function startOver()
{
  level=0;
  gamePattern=[];
  started=false;
}
