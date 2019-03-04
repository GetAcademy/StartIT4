<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>
    <style>
        div {
            position: absolute;
        }
    </style>
</head>
<body>
    <p>Ferdighet 12 - Funksjoner med returverdi</p>
    <script>


var ord = '';  

        tilfeldigFirkant();

        function tilfeldigFirkant() {
            var endX = tilfeldigTall(window.innerWidth * 0.2, window.innerWidth);
            var endY = tilfeldigTall(window.innerHeight * 0.2, window.innerHeight);

            var startX = tilfeldigTall(1, endX * 0.8);
            var startY = tilfeldigTall(1, endY * 0.8);
            var bredde = endX - startX;
            var høyde = endY - startY;
            var farge = tilfeldigFarge();
            var divHtml = '<div style="' +
                delAvStylePx('left', startX) +
                delAvStylePx('top', startY) +
                delAvStylePx('width', bredde) +
                delAvStylePx('height', høyde) +
                delAvStyle('background-color', farge) +
                '"> ' + 
                KonsOgVokal()
                + '</div>';
            document.write(divHtml);
            if (Math.random() < 0.9) tilfeldigFirkant();
        }

        function delAvStylePx(navn, verdi) {
            return delAvStyle(navn, verdi + 'px');
        }

        function delAvStyle(navn, verdi) {
            return navn + ':' + verdi + ';';
        }

        function tilfeldigFarge() {
            return '#' +
                tilfeldigTallEllerBokstavABCDEF() +
                tilfeldigTallEllerBokstavABCDEF() +
                tilfeldigTallEllerBokstavABCDEF() +
                tilfeldigTallEllerBokstavABCDEF() +
                tilfeldigTallEllerBokstavABCDEF() +
                tilfeldigTallEllerBokstavABCDEF();
        }

        function tilfeldigTallEllerBokstavABCDEF() {
            var tall = tilfeldigTall(0, 15);
            if (tall < 10) return tall;
            const charCodeA = 'a'.charCodeAt(0);
            return String.fromCharCode(tall - 10 + charCodeA);
        }
       
        function tilfeldigVokal()
        {
            var vokal = tilfeldigTall(0, 8);
            if (vokal == 0 ) return 'a';
            else if (vokal == 1) return 'e';
            else if (vokal == 2) return 'i';
            else if (vokal == 3) return 'o';
            else if (vokal == 4) return 'u';
            else if (vokal == 5) return 'y';
            else if (vokal == 6) return 'æ';
            else if (vokal == 7) return 'ø';
            else if (vokal == 8) return 'å';
        }
        
        function tilfeldigKonstonant()
        {
            var Konsonanter =
            [
                'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'
            ];
            return Konsonanter[tilfeldigTall(0,20)];
    
        }

        function KonsOgVokal()
        {
            return tilfeldigKonstonant() + tilfeldigVokal() + tilfeldigKonstonant() + tilfeldigVokal() + tilfeldigKonstonant()
        }

        /*var hasRun = false;
        
        function tilfeldigOrd()
        {
            if(!hasRun)
            {
                for(let i = 0; i < 5;i++)
                    {
                        ord += WhatTheHell();
                    }
                    hasRun = true;
            }
            return ord;
        }*/
        function tilfeldigTall(minimum, maksimum) {
            return minimum + Math.floor(Math.random() * (maksimum - minimum)+ minimum);
        }
    </script>
</body>
</html>