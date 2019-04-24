var paddle1 = document.getElementById("Paddle1");
var paddle2 = document.getElementById("Paddle2");
var ball = document.getElementById("Ball");
var top = document.getElementById("TopLine");
var bot = document.getElementById("BottomLine");

intersectRect();

function intersectRect(paddle1, paddle2, ball, top, bot) {
    var paddle1 = paddle1.getBoundingClientRect();
    var paddle2 = paddle2.getBoundingClientRect();    
    var ball = ball.getBoundingClientRect();
    var top = top.getBoundingClientRect();
    var bot = bot.getBoundingClientRect();
   

  return !(paddle2.left > paddle1.right || 
           paddle2.right < paddle1.left || 
           paddle2.top > paddle1.bottom ||
           paddle2.bottom < paddle1.top);
}
