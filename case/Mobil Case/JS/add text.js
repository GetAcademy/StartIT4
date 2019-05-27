function addtxt() {
    var textDiv = document.getElementById('textDiv');
    textDiv.innerHTML += '<textarea id="addedText" class="button" style="background-color:white"></textarea><button class="button" onclick="deletetxt()">Slett</button>';
}
