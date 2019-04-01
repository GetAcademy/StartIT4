function nyEvaluering() {
    header.innerHTML = `<div class="overskrift back" onclick="nyAktivitet()">←</div>
                <h2 class="overskrift">Evaluering</h2>
                <div class="info" onclick="infoScreen()">🛈</div>`;
    content.classList.length = 0;
    content.classList.add('myGrid');
    content.classList.add('mainEvaluatePage');
    content.innerHTML = `
                  <button class="Button" onclick="dailyScreen()">Daglig</button><br />
                <button class="Button" onclick="weeklyScreen()">Ukentlig</button><br />
                <button  class="Button" onclick="coachScreen()">Coach</button><br />
                <br /><button class="Button">Fullfør</button>
            `}
