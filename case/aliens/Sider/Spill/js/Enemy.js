class Enemy {
    constructor() {
        this.h = 20;
        this.w = 20;
        this.distance = 100;
        this.remainingDistance = floor( this.distance * random());
        this.phase = Math.floor(Math.random() * 4);
        this.phases1 = [
            { speedX: 1, speedY: 0 },
            { speedX: 0, speedY: 1 },
            { speedX: -1, speedY: 0 },
            { speedX: 0, speedY: -1 },
        ];
        this.phases2 = [
            { speedX: 1, speedY: 0 },
            { speedX: 0, speedY: 1 },
            { speedX: -1, speedY: 0 },
            { speedX: 0, speedY: 1 },
            { speedX: 1, speedY: 0 },
            { speedX: 0, speedY: -1 },
            { speedX: -1, speedY: 0 },
            { speedX: 0, speedY: -1 },
        ];
        this.phases = this.phases2; //random() < 0.5 ? this.phases1 : this.phases2;
        this.enemySprite = createSprite(random(windowWidth), random(windowHeight), this.h, this.w);
    }

    pos() {
        return this.enemySprite.position;
    }

   
    move() {
        if (this.remainingDistance == 0) {
            this.phase = (this.phase + 1) % this.phases.length;
            this.remainingDistance = this.distance;
        }
        let currentPhase = this.phases[this.phase];
        this.pos().x += currentPhase.speedX;
        this.pos().y += currentPhase.speedY;
        this.remainingDistance--;
    }

    edges() {
        if (this.pos().x > width) {
            this.pos().x = 0;
            
        }
        if (this.pos().x < 0) {
            this.pos().x = width;
           
        }
        if (this.pos().y > height) {
            this.pos().y = 0;
            
        }
        if (this.pos().y < 0) {
            this.pos().y = height;
            
        }
    }
    

    }
