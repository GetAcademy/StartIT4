function nyAktivitet() {
    content.innerHTML = `
                <div class="overskrift back" onclick="nyNøkkelvane()">←</div>
                <h2 class="overskrift">Aktiviteter</h2>
                <div class="info" onclick="infoScreen()">🛈</div> <br />
                <br /><p>Hvilke aktiviteter vil være viktige for deg hvis du skal nå dette målet?</p>
                <div id="textDiv"> <textarea></textarea><br /></div>
                <div id="nyVane" onclick="addtxt()" style="font-size:50px">⁺</div><br />
                <br /><button onclick="nyEvaluering()">Neste</button>
                        `}