class BoxView {
    constructor(box) {
        this._box = box;
    }

    getHtml(Index) {
        var html = '<rect onclick="removeBox(' + Index + ')" '
            + 'x ="' + this._box.getX() + '" '
            + 'y ="' + this._box.getY() + '" '
            + 'fill="' + this._box.getColor() + '" '
            + 'width="' + this._box.getWidth() + '" '
            + 'height="' + this._box.getHeight() + '"'
            + '/>';
        return html;
    }
}
