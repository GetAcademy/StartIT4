function lagNyttMål() {
    header.innerHTML = '<h1>Nytt Mål</h1>';
    content.classList.length = 0;
    content.classList.add('myGrid');
    content.classList.add('lagNyttMål');
    content.innerHTML = `
    <div style="align-self: center">
        Opprett et nytt mål:
    </div>
    <div><textarea class="bigText2"></textarea></div>
    <div><button onclick="showMainScreen()">Tilbake</button> <button onclick="showMainScreen()">Lagre og ferdig</button> <button onclick="lagNyttMål2()">Nytt mål</button</div>
    `;
}