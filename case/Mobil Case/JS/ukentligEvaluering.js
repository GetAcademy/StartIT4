function ukentligEvaluering() {
  
    mainextra.innerHTML = `
    <div style="align-self: center">
        Hva har vært spesielt bra denne uken?
    </div>
    <div><textarea class="button" style="background-color:white;color:black"></textarea></div>
    <div><button class="button" onclick="showMainScreen()">Tilbake</button></div> 
    <div><button class="button" onclick="ukentligEvalueringSideTO()">Neste</button</div>
    `;
}
