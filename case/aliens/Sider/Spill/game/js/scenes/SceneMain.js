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
        //adding imgs and sprites
        this.back = this.add.image(0, 0, "background");
        this.back.setOrigin(0, 0);
        this.player = this.physics.add.sprite(game.config.width / 2, game.config.height / 2, "player");
        this.alien = this.physics.add.sprite(game.config.width / 2, 30, "alien");
        
        this.back.setInteractive();
        this.back.on('pointerdown', this.onDown, this);

        this.player.body.collideWorldBounds = true;
        this.alien.body.collideWorldBounds = true;
        this.physics.world.setBounds(0, 0, this.back.displayWidth, this.back.displayHeight);

        this.bulletGroup = this.physics.add.group();
        

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

      
    }


    setColliders() {
        this.physics.add.collider(this.bulletGroup, this.alien, this.destroyBullet,null,this);
    }

    destroyBullet(alien, bullet) {
        bullet.destroy();
        
        
       
        
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

    update() {
        if (this.keyA.isDown) {
            this.player.x--;
            this.player.play('walk-left', true);
            angle = 180;
        }

        if (this.keyD.isDown) {
            this.player.x++;
            this.player.play('walk-right', true);
            angle = 360;
        }

        if (this.keyW.isDown) {
            this.player.y--;
            this.player.play('walk-up', true);
            angle = 270;
        }

        if (this.keyS.isDown) {
            this.player.y++;
            this.player.play('walk-down', true);
            angle = -270;
        }
    }
}