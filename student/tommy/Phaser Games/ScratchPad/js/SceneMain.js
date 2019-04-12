class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {
        this.load.image("face", "images/face.png");
    }
    create() {
        this.face = this.add.image(100, 200, "face");
        console.log("Ready!");
    }
    update() { }
}