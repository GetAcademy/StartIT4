var ball = document.getElementById("Ball");
var gameBoard = document.getElementById("GameBoard")
var keysModel = {
    s: false,
    w: false,
    ArrowUp: false,
    ArrowDown: false,
};
var speedFromKey = {
    s: {
        deltaPaddle1: 1,
        deltaPaddle2: 0,
    },
    w: {
        deltaPaddle1: -1,
        deltaPaddle2: 0,
    },
    ArrowUp: {
        deltaPaddle1: 0,
        deltaPaddle2: -1,
    },
    ArrowDown: {
        deltaPaddle1: 0,
        deltaPaddle2: 1,
    },
};

setInterval(updateGame, 10);

document.addEventListener('keydown', function (event) {
    updateKey(event.key, true);
});

document.addEventListener('keyup', function (event) {
    updateKey(event.key, false);
});

function updateGame() {
    for (let key in keysModel) {
        let onOrOffValue = keysModel[key];
        if (onOrOffValue) {
            paddle(key);
        }
    }
}

function updateKey(key, onOrOffValue) {
    if (keysModel[key] == undefined) return;
    keysModel[key] = onOrOffValue;
}


function paddle(key) {
    let paddle1 = document.getElementById("Paddle1");
    let paddle2 = document.getElementById("Paddle2");
    const speed = 2;
    paddle1.y1.baseVal.value += speed * speedFromKey[key].deltaPaddle1;
    paddle1.y2.baseVal.value += speed * speedFromKey[key].deltaPaddle1;
    paddle2.y1.baseVal.value += speed * speedFromKey[key].deltaPaddle2;
    paddle2.y2.baseVal.value += speed * speedFromKey[key].deltaPaddle2;
}
