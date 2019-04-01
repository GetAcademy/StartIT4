function newGoal() {
    header.innerHTML = `<div class="overskrift back">←</div>
        <h2 class="overskrift"> Nytt Mål</h2>
            <div class="info" onclick="infoScreen()">🛈</div>`;
    content.classList.length = 0;
    content.classList.add('myGrid');
    content.classList.add('mainEvaluatePage');
    content.innerHTML = `
                <p class="mainButton">Hva vil du oppnå?</p>
                <textarea class="mainButton"></textarea>
                <p class="mainButton">Forkort det til en setning.</p>
                <textarea class="mainButton"></textarea>
                <p class="mainButton">Hvorfor vil du nå dette målet?</p>
                <textarea class="mainButton"></textarea class="mainButton"> <br />
                <br /><button onclick="nyNøkkelvane()" class="button">Neste</button>
                                  `}
