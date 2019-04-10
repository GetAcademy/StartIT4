
var ball = document.getElementById("Ball");
var gameBoard = document.getElementById("GameBoard")

document.addEventListener('keydown', function(event){
    if (event.key == "s" || event.key == "w"){
        paddle1(event.key);
    }
});

document.addEventListener('keydown', function(event){
    if (event.key == "ArrowUp" || event.key == "ArrowDown"){
        paddle2(event.key);
    }
});

function paddle1(e) {
    let paddle1 = document.getElementById("Paddle1");


    if (event.key == "s") {
        paddle1.y1.baseVal.value += 10
        paddle1.y2.baseVal.value += 10
    }
    else if (event.key == "w") {
        paddle1.y1.baseVal.value -= 10
        paddle1.y2.baseVal.value -= 10
    }
}

function paddle2(e) {
    let paddle2 = document.getElementById("Paddle2");

    if (event.key == "ArrowUp") {
        paddle2.y1.baseVal.value -= 10
        paddle2.y2.baseVal.value -= 10
    }
    else if (event.key == "ArrowDown") {
        paddle2.y1.baseVal.value += 10
        paddle2.y2.baseVal.value += 10
    }
}