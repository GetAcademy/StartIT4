class Sprite {
    constructor() {
        this.pos = createVector(random(windowWidth), random(windowHeight));
        this.w = 20;
        this.h = 20;
        this.sprite = createSprite(this.pos.x, this.pos.y, this.w, this.h);
        
    }

    render() {
        push()
        drawSprite(this.sprite);      
        pop();
    }
    move() {
        this.sprite.pos++;
    }
} 
