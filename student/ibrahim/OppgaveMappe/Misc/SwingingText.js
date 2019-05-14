class SwingingText {    // mal for objekter satt opp av metoder 
        constructor(speed, id, text, color) {
            this._speed = speed; // er det samme som objecktIbris.speed
            this._id = id;
            this._text = text;
            this._color = color;
            this._x = 0;    // trenger ikke å ha i parameteret fordi det skal bare være 0
            this._angle = 0; // trenger ikke å ha i parameteret fordi det skal bare være 0

        }
        getHtml() {
            return '<text ' // lager html basert på objektet
                + 'id="' + this._id + '" '
                + 'x="0" '
                + 'y="14" '
                + 'fill="' + this._color + '"'
                + '>'
                + this._text
                + '</text>';
        }
        moveIbri() {
            this._angle = (this._angle + this._speed) % 360;     //modulus == hvis den når 365 grader vil den gå tilbake til 5 så den ikke forsetter over
            this._x = Math.round(40 + 40 * Math.sin(Math.PI * this._angle / 180));    //for at vi ikke skulle trenge en range input og den går fram og tilbake av seg selv
            var txtElement = document.getElementById(this._id); // får id
            txtElement.setAttribute('x', this._x + '%');  //foranderer på valuen til objektIbri.x | . == tilhører objektIbri 
        }
    }