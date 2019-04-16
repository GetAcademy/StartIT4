class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {
        this.load.image("button1", "images/ui/buttons/2/1.png");

    }
    create() {
        var flatbutton = new FlatButton({ scene: this, key: 'button1', text: 'Press Me!',x:200,y:100 });
        
        var gridConfig = { rows: 5, cols: 5, scene: this };
        var alignGrid = new AlignGrid(gridConfig);
        alignGrid.showNumbers();

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