class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {
      
        this.load.spritesheet('balls', 'images/balls.png', { frameWidth: 100, frameHeight: 100 });
        this.load.spritesheet('paddles', 'images/paddles.png', { frameWidth: 400, frameHeight: 50 });
        this.load.image('bar', 'images/bar.jpg');
    }
    create() {
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();
        var mediaManager = new MediaManager({ scene: this });

        var sb = new SoundButtons({ scene: this });

        this.velocity = 100;
        this.centerX = game.config.width / 2;
        this.centerY = game.config.height / 2;
        this.quarter = game.config.height / 4;


        this.bar = this.add.image(this.centerX, this.centerY, 'bar');
        this.bar.displayWidth = game.config.width / 3;
        this.bar.displayHeight = game.config.height;

        this.ball = this.physics.add.sprite(this.centerX, this.centerY, 'balls');
        Align.scaletoGameW(this.ball, 0.05);


        this.paddle1 = this.physics.add.sprite(this.centerX, this.quarter, 'paddles');
        Align.scaletoGameW(this.paddle1, 0.25);

        this.paddle2 = this.physics.add.sprite(this.centerX, this.quarter * 3, 'paddles');
        Align.scaletoGameW(this.paddle2, 0.25);

        this.setBallColor();
        this.ball.setVelocity(0, this.velocity);
        this.paddle1.setImmovable();
        this.paddle2.setImmovable();
        this.physics.add.collider(this.ball, this.paddle1, this.ballhit,null,this);
        this.physics.add.collider(this.ball, this.paddle2, this.ballhit, null, this);
        this.input.on('pointerdown', this.changePaddle, this);


    }

    changePaddle() {
        var paddle = (this.velocity > 0) ? this.paddle2 : this.paddle1;
        var color = (paddle.frame.name == 1) ? 0 : 1;
        paddle.setFrame(color);
    }

    setBallColor() {
        var r = Math.floor(Math.random() * 100);
        if (r < 50) {
            this.ball.setFrame(0);
        }
        else {
            this.ball.setFrame(1);
        }
    }

    ballhit(ball, paddle) {
        this.setBallColor();
        this.velocity = -this.velocity;
        ball.setVelocity(0, this.velocity);
    }


    update() { }
}