class Model {
    constructor() {
        this._score = 0;
    }
    set socre(val) {
        this._score = val;
        console.log("score updated!");
    }

    get score() {
        return this_.score;
    }
    
}