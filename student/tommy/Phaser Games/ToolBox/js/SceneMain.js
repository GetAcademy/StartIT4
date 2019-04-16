class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {

    }
    create() {
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();

        this.sb = new ScoreBox({ scene: this });
        this.sb.x = game.config.width / 2;
        this.sb.y = 50;


        model.score = 0;
        console.log("Ready!");
        
    }
    update() { }
}