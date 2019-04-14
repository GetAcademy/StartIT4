class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {
        this.load.image("road", "images/road.jpg");
        this.load.spriteSheet("cars", "images/cars.png", { frameWidth: 60, frameHeight: 126 });
        this.load.image("line", "images/line.png");

    }
    create() {
        var road = new Road({ scene: this });
    }
    update() { }
}