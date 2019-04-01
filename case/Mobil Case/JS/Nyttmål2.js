function lagNyttMål2() {
    header.innerHTML = '<h1>Nytt Mål</h1>';
    content.classList.length = 0;
    content.classList.add('myGrid');
    content.classList.add('lagNyttMål2');
    content.innerHTML = `
    <div style="align-self: center">
        Hva skal det nye målet være?
    </div>
    <div><textarea class="bigText2"></textarea></div>
    <div><button onclick="showMainScreen()">Lagre og ferdig</button</div>
    `;
}