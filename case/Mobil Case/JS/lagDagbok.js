function lagDagbok() {
    header.innerHTML = '<h1>Dagbok</h1>';
    content.classList.length = 0;
    content.classList.add('myGrid');
    content.classList.add('lagDagbok');
    content.innerHTML = `
    <div style="align-self: center">
        Skriv litt om dagen i dag.
    </div>
    <div><textarea class="bigText2"></textarea></div>
    <div><button onclick="showMainScreen()">Lagre og ferdig</button></div>
    `;
}