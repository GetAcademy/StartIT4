function dailyScreen() {
    content.innerHTML = `
                <div class="overskrift back" onclick="nyEvaluering()">←</div> 
                <h2 class="overskrift">Daglig Evaluering</h2>
                <div class="info" onclick="infoScreen()">🛈</div> <br />
                <br /><p>Velg</p>
                
                <textarea>Humør</textarea><br />
                <textarea>Mentalt Tilstede</textarea><br />
                <textarea>Kvalitet på arbeid</textarea><br />
                <br /><button onclick="nyEvaluering()">Lagre</button>
`}