class Bullet {
    constructor() {
       
        this.vel = p5.Vector.fromAngle(angle);
        this.vel.mult(10);

        this.bulletSprite = createSprite(player.position.x, player.position.y, 5, 5);
        
    }
   
    pos() {
        return this.bulletSprite.position
    }

    update() {
        this.pos().add(this.vel);
    }

    

    offscreen() {
        if (this.pos().x > width || this.pos().x < 0) {
            return true;
        }

        if (this.pos().y > height || this.pos().y < 0) {
            return true;
        }
        return false;
    }
}
