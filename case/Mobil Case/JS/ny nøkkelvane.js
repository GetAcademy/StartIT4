function nyNøkkelvane() {
    header.innerHTML = `<div class="overskrift back" onclick="newGoal()">←</div>
                <h2 class="overskrift">Nøkkelvaner</h2>
                <div class="info" onclick="infoScreen()">🛈</div>`;
    content.classList.length = 0;
    content.classList.add('myGrid');
    content.classList.add('mainEvaluatePage');
    content.innerHTML = `
                <p class="mainButton">Hvilke vaner trenger du for å nå målet?</p>
                <div id="textDiv"> <textarea class="mainButton"></textarea><br /></div>
                <div id="nyVane" onclick="addtxt()" style="font-size:50px; text-align:center;">⁺</div><br />
                <br /><button onclick="nyAktivitet()" class="mainButton">Neste</button>
                            `}