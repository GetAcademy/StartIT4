class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {
        this.load.image("button1", "images/ui/buttons/2/1.png");
        this.load.image("button2", "images/ui/buttons/2/5.png");

    }
    create() {
        
        var gridConfig = { rows: 5, cols: 5, scene: this };
        var alignGrid = new AlignGrid(gridConfig);
        alignGrid.showNumbers();

        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();

        var fireText = { color: 'black', fontSize: 30 };
        var flatbutton = new FlatButton({ scene: this, key: 'button1', text: 'Fire!', x: 240, y: 100, event: 'button_pressed', params: 'fire_lasers', textConfig: fireText });
        var flatbutton2 = new FlatButton({ scene: this, key: 'button2', text: 'SelfDestruct', x: 240, y: 300, event: 'button_pressed', params:'self_destruct' });

        emitter.on('button_pressed', this.buttonPressed, this);

        
        this.sb = new ScoreBox({ scene: this });
        this.sb.x = game.config.width / 2;
        this.sb.y = 50;


        model.score = 0;
        console.log("Ready!");
        
    }

    buttonPressed(params) {
        console.log(params);
    }
    update() { }
}