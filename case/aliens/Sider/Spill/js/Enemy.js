class Enemy {
    constructor() {
        this.x = random(0, 800);
        this.y = random(0, 600);
        this.h = 20;
        this.w = 20;
    }
    render() {
        noStroke();
        fill(255, 0, 0);
        rect(this.x, this.y, this.h, this.w);
    }
    move() {
        if (this.x < 400) {
            this.x += 2;
        } else if (this.x > 400 || this.x < 0) {
            this.x -= 2;
        }

        if (this.y < 400) {
            this.y -= 2;
        } else if (this.y > 400 || this.y < 0) {
            this.y += 2;
        }

    }
}
