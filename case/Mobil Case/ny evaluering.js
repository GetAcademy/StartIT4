function nyEvaluering() {
    content.innerHTML = `
                <div class="overskrift back" onclick="nyAktivitet()">←</div>
                <h2 class="overskrift">Evaluering</h2>
                <div class="info" onclick="infoScreen()">🛈</div> <br />
                <br /> <br /> <button class="eval" onclick="dailyScreen()">Daglig</button><br />
                <button class="eval" onclick="weeklyScreen()">Ukentlig</button><br />
                <button class="eval" onclick="coachScreen()">Coach</button><br />
                <br /><button>Fullfør</button>
            `}