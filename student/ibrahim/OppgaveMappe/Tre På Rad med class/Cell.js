class Cell {
    constructor(index) {
        this._content = null;
        this._index = index;
    }
    isBlank(){
        return this._content === null;
    }
    setX() {
        this._content = 'x';
    }
    setO() {
        this._content = 'o';
    }
    isX(){
        return this._content === 'x';
    }
    isFirstInRow() {
       return this._index % 3 == 0;
    }
    index(){
        return this._index;
    }
    content(){
        if(this.isBlank()) return '';
        return this._content;
    }
}