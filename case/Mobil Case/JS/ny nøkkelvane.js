function nyNøkkelvane() {
    content.innerHTML = `
                <div class="overskrift back" onclick="newGoal()">←</div>
                <h2 class="overskrift">Nøkkelvaner</h2>
                <div class="info" onclick="infoScreen()">🛈</div> <br />
                <br /><p>Hvilke vaner trenger du for å nå målet??</p>
                <div id="textDiv"> <textarea></textarea><br /></div>
                <div id="nyVane" onclick="addtxt()" style="font-size:50px">⁺</div><br />
                <br /><button onclick="nyAktivitet()">Neste</button>
                <div id="content"></div>
                            `}