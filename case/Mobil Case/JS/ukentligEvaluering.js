function ukentligEvaluering() {
    header.innerHTML = '<h1>Ukentlig evaluering</h1>';
    content.classList.length = 0;
    content.classList.add('myGrid');
    content.classList.add('ukentligEvaluering');
    content.innerHTML = `
    <div style="align-self: center">
        Hva har vært spesielt bra denne uken?
    </div>
    <div><textarea class="bigText2"></textarea></div>
    <div><button onclick="showMainScreen()">Tilbake</button> <button onclick="ukentligEvalueringSideTO()">Neste</button</div>
    `;
}