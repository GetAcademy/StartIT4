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
        this.tx = 0;
        this.ty = 0;

        //adding imgs and sprites
        this.back = this.add.image(0, 0, "background");
        this.back.setOrigin(0, 0);
        this.player = this.physics.add.sprite(game.config.width / 2, game.config.height / 2, "player");


        this.back.setInteractive();
        this.back.on('pointerdown', this.onDown, this);

        this.player.body.collideWorldBounds = true;

        this.physics.world.setBounds(0, 0, this.back.displayWidth, this.back.displayHeight);

        this.bulletGroup = this.physics.add.group();
        this.alienGroup = this.physics.add.group();
        //this.alienGroup.setVelocity(0, 0);

        
        this.makeAliens();

        // this.hitCount = 0;

        //camera config
        this.cameras.main.setBounds(0, 0, this.back.displayWidth, this.back.displayHeight);
        this.cameras.main.startFollow(this.player, true);


        //player anims
        this.anims.create({
            key: 'walk-down',
            frames: this.anims.generateFrameNumbers('player',
                {
                    start: 0,
                    end: 3,
                }),

            frameRate: 8,

        });

        this.anims.create({
            key: 'walk-right',
            frames: this.anims.generateFrameNumbers('player',
                {
                    start: 4,
                    end: 7,
                }),

            frameRate: 8,

        });

        this.anims.create({
            key: 'walk-up',
            frames: this.anims.generateFrameNumbers('player',
                {
                    start: 8,
                    end: 11,
                }),

            frameRate: 8,

        });

        this.anims.create({
            key: 'walk-left',
            frames: this.anims.generateFrameNumbers('player',
                {
                    start: 12,
                    end: 15,
                }),

            frameRate: 8,

        });

        // keyCodes 
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        this.setColliders();
        this.moveAlien();


    }

    moveAlien() {
        var distX = Math.abs(this.player.x - this.tx);
        var distY = Math.abs(this.player.y - this.ty);
        this.tx = this.player.x;
        this.ty = this.player.y;

        if (distX > 30 && distY > 30) {
            console.log('før');
            console.log(this.alienGroup.children);
            for (let child of this.alienGroup.children.entries) {
                this.physics.moveTo(child, this.player.x, this.player.y,10);
            }
        }
    }


    damageAlien(alienGroup, bullet) {
        alienGroup.hitCount++;
        if (alienGroup.hitCount == 3) {
            alienGroup.destroy();
            alienGroup.hitCount = 0;
        }
        bullet.destroy();


    }

    makeAliens() {
        if (this.alienGroup.getChildren().length == 0) {
            this.alienGroup = this.physics.add.group({
                key: 'alien',
                frame: [0,],
                frameQuantity: 14,
                bounceX: 0,
                bounceY: 0,
                angularVelocity: 0,
                collideWorldBounds: true,

            });
            this.alienGroup.hitCount = 0;
            this.alienGroup.children.iterate(function (child) {
                var xx = Math.floor(Math.random() * this.back.displayWidth);
                var yy = Math.floor(Math.random() * this.back.displayHeight);
                child.hitCount = 0;
                child.x = xx;
                child.y = yy;

                child.body.setVelocity(0, 0);



            }.bind(this));

        }
    }



    setColliders() {
        this.physics.add.collider(this.alienGroup, this.bulletGroup, this.damageAlien, null, this);

    }






    onDown() {
        this.makeBullet();
    }

    makeBullet() {
        var dirObj = this.getDirFromAngle(angle);
        var bullet = this.physics.add.sprite(this.player.x + dirObj.tx * 30, this.player.y + dirObj.ty * 30, "bullet");
        this.bulletGroup.add(bullet);
        bullet.angle = angle;
        bullet.body.setVelocity(dirObj.tx * 400, dirObj.ty * 400);
    }

    getDirFromAngle(angle) {
        var rads = angle * Math.PI / 180;
        var tx = Math.cos(rads);
        var ty = Math.sin(rads);
        return { tx, ty }
    }

    toDegrees(angle) {
        return angle * (180 / Math.PI);
    }

    update() {
        if (this.keyA.isDown) {
            this.player.x--;
            this.tx -= 10;

            this.player.play('walk-left', true);
            angle = 180;
        }

        if (this.keyD.isDown) {
            this.player.x++;
            this.tx += 10;
            this.player.play('walk-right', true);
            angle = 360;
        }

        if (this.keyW.isDown) {
            this.player.y--;
            this.ty -= 10;
            this.player.play('walk-up', true);
            angle = 270;
        }

        if (this.keyS.isDown) {
            this.player.y++;
            this.ty += 10;
            this.player.play('walk-down', true);
            angle = -270;
        }

        
    }
}