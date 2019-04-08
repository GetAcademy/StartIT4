function ukentligEvalueringSideTRE() {
   
   mainextra.innerHTML = `
    <div style="align-self: center">
        Hva skal du ha spesielt fokus på neste uke?
    </div>
    <div><textarea class="button" style="background-color:white;color:black"></textarea></div>
    <div><button class="button" onclick="ukentligEvalueringSideFIRE()">Neste</button></div>
    <div><button class="button" onclick="ukentligEvalueringSideTRE()">Tilbake</button><div>
    `;
}
