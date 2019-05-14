class BoxSetView {
    constructor(boxSet) {
        this._svg = document.getElementsByTagName("svg")[0];
        this._boxSet = boxSet;
    }
    show() {
        var html = '';
        var boxes = this._boxSet.getRandomNrOfBox();
        for (var i in boxes) {
            let box = boxes[i];
            let boxView = new BoxView(box);
            html += boxView.getHtml(i);
        }
        this._svg.innerHTML = html;
    }
}