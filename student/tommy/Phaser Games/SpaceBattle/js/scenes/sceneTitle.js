class SceneTitle extends Phaser.Scene {
    constructor() {
        super('SceneTitle');
    }
    preload() {
        this.load.image("button1", "images/ui/buttons/2/1.png");
        this.load.image("title", "images/title.png");
    }
    create() {
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();
        this.background = this.add.image(0, 0, 'background').setOrigin(0.5, 0.5);
        this.alignGrid = new AlignGrid({ rows: 11, cols: 11, scene: this });
        //this.alignGrid.showNumbers();


        var title = this.add.image(0, 0, 'title');
        Align.scaletoGameW(title, 0.8);
        this.alignGrid.placeAtIndex(27, title);

        var ship = this.add.image(0, 0, "ship");
        this.alignGrid.placeAtIndex(60, ship);
        
        Align.scaletoGameW(ship, 0.125);
        
        

        console.log("SceneTtile!");

        var btnStart = new FlatButton({ scene: this, key: 'button1', text: 'start', event: 'start_game' });
        this.alignGrid.placeAtIndex(93, btnStart);

        emitter.on('start_game', this.startGame, this);
        mediaManager = new MediaManager({ scene: this });
        //mediaManager.setBackgroundMusic("backgroundMusic");
        var sb = new SoundButtons({ scene: this });
        
    }

    startGame() {
        this.scene.start('SceneMain');
    }


    update() { }
}