class Enemy {
    constructor() {
        this.w = 20;
        this.h = 20;
        const x = random(width);
        const y = random(height);

        this.enemySprite = createSprite(x, y, this.w, this.h);
    }

    render() {
        drawSprite(this.enemySprite);
    }


}
