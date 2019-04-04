class Player {
    constructor() {
        this.w = 20
        this.h = 30
        const x = 300;
        const y = 300;
        this.playerSprite = createSprite(x, y, this.w, this.h);
    }

    render() {
        drawSprite(this.playerSprite);
    }

    controls() {
        
        if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
            this.playerSprite.position.y += -1;
        } else if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
            this.playerSprite.position.x += -1;
        } else if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
            this.playerSprite.position.y += +1;
        } else if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
            this.playerSprite.position.x += +1;
        }
    }
}
