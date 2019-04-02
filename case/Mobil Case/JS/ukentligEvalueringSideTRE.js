function ukentligEvalueringSideTRE() {
    header.innerHTML = '<h1>Ukentlig evaluering</h1>';
    content.classList.length = 0;
    content.classList.add('myGrid');
    content.classList.add('ukentligEvalueringSideTRE');
    content.innerHTML = `
    <div style="align-self: center">
        Hva skal du ha spesielt fokus på neste uke?
    </div>
    <div><textarea class="bigText2"></textarea></div>
    <div><button onclick="ukentligEvalueringSideFIRE()">Neste</button></div>
    `;
}