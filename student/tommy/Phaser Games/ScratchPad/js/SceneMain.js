class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {
        this.load.spritesheet('boy', 'images/boy.png', { frameWidth: 120, frameHeight: 200 });
    }
    create() {
        this.char = this.add.sprite(0, game.config.height / 2, "boy");

        var frameNames = this.anims.generateFrameNumbers('boy');

        this.anims.create({
            key: 'walk',
            frames: frameNames,
            frameRate: 8,
            repeat: -1
        });
        this.char.play('walk');
        this.doWalk();
        this.tex1 = this.add.text(200, 300, "HELLO!");
    }

    doWalk() {
        this.tweens.add({
            targets: this.char,
            duration: 5000,
            x: game.config.width,
            onComplete: this.onCompleteHandler.bind(this),
            
        });
    }
    onCompleteHandler(tween, targets, custom) {
        var char = targets[0];
        char.x = 0;
        this.doWalk();
    }
    update() {

    }
    
}