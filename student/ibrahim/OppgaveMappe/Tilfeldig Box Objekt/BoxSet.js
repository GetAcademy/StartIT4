class BoxSet {
    constructor() {
        var randomNumber = tilfeldigTall(0, 9);
        this._randomBoxNr = [];
        for(let i = 0; i < randomNumber; i++){
            this._randomBoxNr.push(new Box());
        }
    }
    remove(Index){
        this._randomBoxNr.splice(Index, 1);
    }

    getRandomNrOfBox(){
        return this._randomBoxNr;
    }
}

function tilfeldigTall(minimum, maksimum) {
    return minimum + Math.floor(Math.random() * (maksimum - minimum + 1));
}