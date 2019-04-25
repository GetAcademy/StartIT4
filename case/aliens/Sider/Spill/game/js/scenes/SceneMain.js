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
        this.back = this.add.image(0, 0, "background");
        this.back.setOrigin(0, 0);
        this.player = this.physics.add.sprite(game.config.width / 2, game.config.height / 2, "player")



        this.cameras.main.setBounds(0, 0, this.back.displayWidth, this.back.displayHeight);
        this.cameras.main.startFollow(this.player, true);



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

         
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }


    update() {
        if (this.keyA.isDown) {
            this.player.x--;
            this.player.play('walk-left',true);
        }

        if (this.keyD.isDown) {
            this.player.x++;
            this.player.play('walk-right',true);
        }

        if (this.keyW.isDown) {
            this.player.y--;
            this.player.play('walk-up',true);
        }

        if (this.keyS.isDown) {
            this.player.y++;
            this.player.play('walk-down',true);
        }
    }
}