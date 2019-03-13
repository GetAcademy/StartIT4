var map;
var player;


function createMap() {
    let x = floor(random(8, 64));
    let y = floor(4096 / x);
    map = generateRectMap(x, y);
}

function generateMap(cols, rows) {
    let tiles = [];
    for (let x = 0; x < cols; x++) {
        tiles[x] = [];
        for (let y = 0; y < rows; y++) {
            if (x === 0 || y === 0 || x === cols - 1 || y === rows - 1) {
                tiles[x][y] = ['wall'];
            } else {
                tiles[x][y] = ['concrete'];
            }
        }
    }
    return new Map(tiles);
}

function setup() {
    createCanvas(800, 600);

    generateMap();
}


function draw() {
    background(0);

    map.display();
}