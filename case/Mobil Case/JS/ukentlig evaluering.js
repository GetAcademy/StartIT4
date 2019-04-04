function weeklyScreen() {
  
    mainextra.innerHTML = `
                <div class="overskrift back" onclick="nyEvaluering()">←</div>
                <p class="button">Lag Spørsmål</p>
                <textarea class="button" style="background-color:white;color:black">Hva har vært spesielt bra denne uken?</textarea><br />
                <textarea class="button" style="background-color:white;color:black">Hva kan gjøres bedre neste uke?</textarea><br />
                <textarea class="button" style="background-color:white;color:black">Hva skal du ha spesielt fokus på neste uke</textarea><br />
                <br /><button onclick="nyEvaluering()" class="button">Lagre</button>
                
`}
