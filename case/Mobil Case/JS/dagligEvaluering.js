function dagligEvaluering() {
    header.innerHTML = '<h1>Evaluer</h1>';
    content.classList.length = 0;
    content.classList.add('myGrid');
    content.classList.add('dagligEvaluering');
    content.innerHTML = `
    <div style="align-self: center">
        Hva har vært spesielt bra denne dagen?
    </div>
    <div><textarea class="bigText2"></textarea></div>
    <div><button onclick="showMyGoalsScreen()">Tilbake</button></div>
    `;
}