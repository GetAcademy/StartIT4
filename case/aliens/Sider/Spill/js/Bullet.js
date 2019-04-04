class Bullet {
    constructor() {
        this.pos = createVector(player.position.x, player.position.y);
        this.vel = p5.Vector.fromAngle(Math.PI / 2);
        this.vel.mult(10);
        
    }
    update() {
        this.pos.add(this.vel);
    }

    render() {
        push();
        stroke(255);
        strokeWeight(4);
        point(this.pos.x, this.pos.y);
        pop();
    }

    offscreen() {
        if (this.pos.x > width || this.pos.x < 0) {
            return true;
        }

        if (this.pos.y > height || this.pos.y < 0) {
            return true;
        }
        return false;
    }
}
