function dailyScreen() {
    header.innerHTML = `<div class="overskrift back" onclick="nyEvaluering()">←</div> 
                <h2 class="overskrift">Daglig Evaluering</h2>
                <div class="info" onclick="infoScreen()">🛈</div>`;
    content.classList.length = 0;
    content.classList.add('myGrid');
    content.classList.add('mainEvaluatePage');
    content.innerHTML = `
                <p class="mainButton">Velg</p>
                <textarea class="mainButton">Humør</textarea><br />
                <textarea class="mainButton">Mentalt Tilstede</textarea><br />
                <textarea class="mainButton">Kvalitet på arbeid</textarea><br />
                <br /><button onclick="nyEvaluering()" class="mainButton">Lagre</button>
`}