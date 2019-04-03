function dailyScreen() {
    
    mainextra.innerHTML = `
                <div class="overskrift back" onclick="nyEvaluering()">←</div>
                <p class="mainButton">Velg</p>
                <textarea class="button" style="background-color:white;color:black">Humør</textarea><br />
                <textarea class="button" style="background-color:white;color:black">Mentalt Tilstede</textarea><br />
                <textarea class="button" style="background-color:white;color:black">Kvalitet på arbeid</textarea><br />
                <br /><button onclick="nyEvaluering()" class="button">Lagre</button>
`}
