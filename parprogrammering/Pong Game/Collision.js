var paddle1 = document.getElementById("Paddle1");
var paddle2 = document.getElementById("Paddle2");
var ball = document.getElementById("Ball");
var lineTop = document.getElementById("lineTop");
var lineBot = document.getElementById("lineBot");

function intersectRect(paddle1, paddle2, lineBot, lineTop, ball) {
  var paddle1 = paddle1.getBoundingClientRect();
  var paddle2 = paddle2.getBoundingClientRect();    
  var ball = ball.getBoundingClientRect();
  var lineTop = lineTop.getBoundingClientRect();
  var lineBot = lineBot.getBoundingClientRect();




}

