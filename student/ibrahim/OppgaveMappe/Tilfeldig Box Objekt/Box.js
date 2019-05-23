class Box {
    constructor() {
        this._color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        this._x = Math.floor(Math.random() * 600);
        this._y = Math.floor(Math.random() * 400);
        this._width = 100 + Math.floor(Math.random() * 500);
        this._height = 100 + Math.floor(Math.random() * 300);
    }
    getColor() {
        return this._color;
    }
    getX() {
        return this._x;
    }
    getY() {
        return this._y;
    }
    getWidth() {
        return this._width;
    }
    getHeight() {
        return this._height;
    }
}
