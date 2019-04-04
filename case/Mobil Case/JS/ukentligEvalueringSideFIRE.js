function ukentligEvalueringSideFIRE() {
    header.innerHTML = '<h1>Ukentlig evaluering</h1>';
    content.classList.length = 0;
    content.classList.add('myGrid');
    content.classList.add('ukentligEvalueringSideFIRE');
    content.innerHTML = `
    <div style="align-self: center">
        Kommentarer om nøkkelvaner.
    </div>
    <div><textarea class="bigText2"></textarea></div>
    <div><button onclick="showMainScreen()">Lagre og ferdig</button</div>
    `;
}