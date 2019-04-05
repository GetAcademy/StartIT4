var result = document.getElementById("resultBox");

function addCharacter(x) {
    result.innerText += x;
}

function clearResult() {
    result.innerText = '';
}

function calculate() {
    var calculation = result.innerHTML;
    
    result.innerText = eval(calculation);
}