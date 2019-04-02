function nyAktivitet() {
    header.innerHTML = `<div class="overskrift back" onclick="nyNøkkelvane()">←</div>
        <h2 class="overskrift">Aktiviteter</h2>
        <div class="info" onclick="infoScreen()">🛈</div>`;
    content.classList.length = 0;
    content.classList.add('myGrid');
    content.classList.add('mainEvaluatePage');
    content.innerHTML = `
                <p class="mainButton">Hvilke aktiviteter vil være viktige for deg hvis du skal nå dette målet?</p>
                <div id="textDiv"> <textarea class="mainButton"></textarea><br /></div>
                <div id="nyVane" onclick="addtxt()" style="font-size:50px; text-align:center;">⁺</div><br />
                <br /><button onclick="nyEvaluering()" class="button">Neste</button>
                        `}
