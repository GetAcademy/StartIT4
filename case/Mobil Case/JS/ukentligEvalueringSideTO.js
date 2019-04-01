function ukentligEvalueringSideTO() {
    header.innerHTML = '<h1>Ukentlig evaluering</h1>';
    content.classList.length = 0;
    content.classList.add('myGrid');
    content.classList.add('ukentligEvalueringSideTO');
    content.innerHTML = `
    <div style="align-self: center">
        Hva kan gjøres bedre neste uke?
    </div>
    <div><textarea class="bigText2"></textarea></div>
    <div><button onclick="ukentligEvalueringSideTRE()">Neste</button</div>
    `;
}