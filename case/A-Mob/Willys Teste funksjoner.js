var buttonLastClicked;
    var buttonBeforeLastClicked;

function doClick(buttonClicked) {
    
    var unlimetedpower = document.getElementById('exodia');
    var infoDiv = document.getElementById('info');
    var divA = document.getElementById('a');
    //  var divB = document.getElementById('b');
  
        infoDiv.innerHTML = '';

        if (buttonClicked == divA) infoDiv.innerHTML += unlimetedpower.innerHTML;
        // else if (buttonClicked == divB) infoDiv.innerHTML =- unlimetedpower.innerHTML;
        // else if ()

        if (buttonLastClicked == buttonClicked)
            infoDiv.innerHTML += unlimetedpower.innerHTML;

        if (buttonBeforeLastClicked == buttonClicked)
            infoDiv.innerHTML += unlimetedpower.innerHTML;
        buttonBeforeLastClicked = buttonLastClicked;
        buttonLastClicked = buttonClicked;
}

function removeElement(buttonClicked) {
    var Element = document.getElementById(exodia)
    var divB = document.getElementById('b');
        if (buttonClicked == divB) Element.parentNode.removeChild(Element);
}