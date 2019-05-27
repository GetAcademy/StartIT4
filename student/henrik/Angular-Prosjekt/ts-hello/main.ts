
class Point {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;

    }

    draw () {
        console.log('x: ' + this.x + ', y: ' + this.y)
    }

}

let point = new Point(1, 2);

point.x = 3;
point.draw();