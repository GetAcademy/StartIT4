var paddle1 = document.getElementById("Paddle1")
var paddle2 = document.getElementById("Paddle2")
var ball = document.getElementById("Ball")

function intersectRect(paddle1, paddle2) {
    var paddle1 = paddle1.getBoundingClientRect();
    var paddle2 = paddle2.getBoundingClientRect();    
    var ball = ball.getBoundingClientRect();
  
  return !(paddle2.left > paddle1.right || 
           r2.right < r1.left || 
           r2.top > r1.bottom ||
           r2.bottom < r1.top);
}