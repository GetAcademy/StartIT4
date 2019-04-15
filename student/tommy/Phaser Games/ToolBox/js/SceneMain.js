class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {

    }
    create() {
        emitter = new Phaser.Events.EventEmitter();
        model.score = 100;
        console.log("Ready!");
        
    }
    update() { }
}