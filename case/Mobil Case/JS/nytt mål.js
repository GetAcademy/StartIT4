function newGoal() {
    content.innerHTML = `
                <div class="overskrift back">←</div>
                <h2 class="overskrift">Nytt Mål</h2>
                <div class="info" onclick="infoScreen()">🛈</div> <br />
                <br /><p>Hva vil du oppnå?</p>
                <textarea></textarea>
                <p>Forkort det til en setning.</p>
                <textarea></textarea>
                <p>Hvorfor vil du nå dette målet?</p>
                <textarea></textarea> <br />
                <br /><button onclick="nyNøkkelvane()">Neste</button>
                                  `}