var buttonLastClicked;
    var buttonBeforeLastClicked;

function doClick(buttonClicked) {
    
    var infoDiv = document.getElementById('info');
    var divA = document.getElementById('a');
    var divB = document.getElementById('b');
    var divC = document.getElementById('c');
    var divD = document.getElementById('d');
    
        infoDiv.innerHTML = 'Du trykket på firkant ';

        if (buttonClicked == divA) infoDiv.innerHTML += 'A';
        else if (buttonClicked == divB) infoDiv.innerHTML += 'B';
        else if (buttonClicked == divC) infoDiv.innerHTML += 'C';
        else if (buttonClicked == divD) infoDiv.innerHTML += 'D';

        if (buttonLastClicked == buttonClicked)
            infoDiv.innerHTML += ' ()';

        if (buttonBeforeLastClicked == buttonClicked)
            infoDiv.innerHTML += '(pls slutt og trykk på meg D:)';
        buttonBeforeLastClicked = buttonLastClicked;
        buttonLastClicked = buttonClicked;
}
