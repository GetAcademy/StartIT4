function weeklyScreen() {
    content.innerHTML = `
                <div class="overskrift back" onclick="nyEvaluering()">←</div> 
                <h2 class="overskrift">Ukentlig Evaluering</h2>
                <div class="info" onclick="infoScreen()">🛈</div> <br />
                <br /><p>Lag Spørsmål</p>
                <textarea>Hva har vært spesielt bra denne uken?</textarea><br />
                <textarea>Hva kan gjøres bedre neste uke?</textarea><br />
                <textarea>Hva skal du ha spesielt fokus på neste uke</textarea><br />
                <br /><button onclick="nyEvaluering()">Lagre</button>
                
`}