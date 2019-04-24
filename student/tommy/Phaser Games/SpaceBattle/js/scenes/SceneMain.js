class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {
      
        

    }
    create() {
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();
        var mediaManager = new MediaManager({ scene: this });

        var sb = new SoundButtons({ scene: this });

        this.centerX = game.config.width / 2;
        this.centerY = game.config.height / 2;

       
        this.background = this.add.image(0, 0, 'background');
        this.background.setOrigin(0, 0);
        this.ship = this.physics.add.sprite(this.centerX, this.centerY, 'ship');
        Align.scaletoGameW(this.ship, 0.125);

        this.background.scaleX = this.ship.scaleX;
        this.background.scaleY = this.ship.scaleY;
        this.background.setInteractive();
        this.background.on('pointerdown', this.backgroundClicked, this);

        this.cameras.main.setBounds(0, 0, this.background.displayWidth, this.background.displayHeight);
        this.cameras.main.startFollow(this.ship, true);
    }

    backgroundClicked() {
        var tx = this.background.input.localX * this.background.scaleX;
        var ty = this.background.input.localY * this.background.scaleY;
        this.tx = tx;
        this.ty = ty;

        var angle = this.physics.moveTo(this.ship, tx, ty, 60);
        angle = this.toDegrees(angle);
        this.ship.angle = angle;

    }

    toDegrees(angle) {
        return angle * (180 / Math.PI);
    }
    update() {
        var distX = Math.abs(this.ship.x - this.tx);
        var distY = Math.abs(this.ship.y - this.ty);

        if (distX < 10 && distY < 10) {
            this.ship.body.setVelocity(0, 0);
        }
    }
}