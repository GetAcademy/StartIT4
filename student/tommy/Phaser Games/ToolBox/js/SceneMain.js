class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {

    }
    create() {
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();
        model.score = 0;
        console.log("Ready!");
        
    }
    update() { }
}