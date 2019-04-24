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
        this.physics.world.setBounds(0, 0, this.background.displayWidth, this.background.displayHeight);

        this.background.setInteractive();
        this.background.on('pointerdown', this.backgroundClicked, this);

        this.cameras.main.setBounds(0, 0, this.background.displayWidth, this.background.displayHeight);
        this.cameras.main.startFollow(this.ship, true);

        this.rockGroup = this.physics.add.group({
            key: 'rocks',
            frame: [0, 1, 2],
            frameQuantity: 4,
            bounceX: 1,
            bounceY: 1,
            angularVelocity: 1,
            collideWorldBounds: true
        });
        this.rockGroup.children.iterate(function (child) {
            var xx = Math.floor(Math.random() * this.background.displayWidth);
            var yy = Math.floor(Math.random() * this.background.displayHeight);

            child.x = xx;
            child.y = yy;

            Align.scaletoGameW(child, 0.1)

            var vx = Math.floor(Math.random() * 2) - 1;
            var vy = Math.floor(Math.random() * 2) - 1;
            if (vx == 0 && vy == 0) {
                vx = 1;
                vy = 1;
            }
            var speed = Math.floor(Math.random() * 200) + 10;
            child.body.setVelocity(vx * speed, vy * speed);

        }.bind(this)); 
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