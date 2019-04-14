class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {
        this.load.audio('cat', ['audio/meow.mp3', 'audio/meow.ogg']);
        this.load.image("face", "images/face.png");
       // this.load.spritesheet('boy', 'images/boy.png', { frameWidth: 120, frameHeight: 200 });
    }
    create() {
        this.catSound = this.sound.add('cat');
        this.catSound.play();
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(8, 0xff0000);
        this.graphics.strokeRect(100, 200, 50, 50);
        this.graphics.fillStyle(0xff00ff, 1);
        this.graphics.fillCircle(200, 300, 60);


        var faceCon = this.add.container();

        for (var i = 0; i < 5; i++) {
            var xx = Phaser.Math.Between(100, 400);
            var yy = Phaser.Math.Between(100, 400);
            var face = this.add.image(xx, yy, "face");
            faceCon.add(face);
        }

        //this.graphics.moveTo(0, 0);
        //this.graphics.lineTo(100, 300);

        //this.graphics.strokePath();



        //this.face = this.add.image(game.config.width / 2, game.config.height / 2, "face");
        //this.face.setInteractive();
        //this.face.on('pointerdown', this.onDown, this);
        //this.face.on('pointerdown', this.onUp, this);
        //this.char = this.add.sprite(0, game.config.height / 2, "boy");

        //var frameNames = this.anims.generateFrameNumbers('boy');

        //this.anims.create({
           // key: 'walk',
            //frames: frameNames,
            //frameRate: 8,
            //repeat: -1
        //});
        //this.char.play('walk');
        //this.doWalk();
        //this.tex1 = this.add.text(200, 300, "HELLO!");
    }

    //onUp() {
      //  this.face.alpha = 1;
    //}

    //onDown() {
        //this.face.alpha = .5;
    //}

    //doWalk() {
      //  this.tweens.add({
           // targets: this.char,
            //duration: 5000,
            //x: game.config.width,
            //onComplete: this.onCompleteHandler.bind(this),
            
        //});
    //}
    //onCompleteHandler(tween, targets, custom) {
      //  var char = targets[0];
        //char.x = 0;
        //this.doWalk();
    //}
    update() {

    }
    
}