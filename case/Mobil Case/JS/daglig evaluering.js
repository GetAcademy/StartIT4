function dailyScreen() {
    header.innerHTML = `<div class="overskrift back" onclick="nyEvaluering()">←</div> 
                <h2 class="overskrift">Daglig Evaluering</h2>
                <div class="info" onclick="infoScreen()">🛈</div>`;
    content.classList.length = 0;
    content.classList.add('myGrid');
    content.classList.add('mainEvaluatePage');
    content.innerHTML = `
                <p>Velg</p>
                
                <textarea>Humør</textarea><br />
                <textarea>Mentalt Tilstede</textarea><br />
                <textarea>Kvalitet på arbeid</textarea><br />
                <br /><button onclick="nyEvaluering()">Lagre</button>
`}