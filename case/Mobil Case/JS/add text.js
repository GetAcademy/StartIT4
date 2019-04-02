function addtxt() {
    var textDiv = document.getElementById('textDiv');
    textDiv.innerHTML += '<textarea id="addedText" class="mainButton"></textarea><button onclick="deletetxt()">Slett</button>';
}