function nyNøkkelvane() {
    
    mainextra.innerHTML = `
                <div class="overskrift back" onclick="newGoal()">←</div>
                <p class="button">Hvilke vaner trenger du for å nå målet?</p>
                <div class="Textbox" id="textDiv"> <textarea class="button" style="background-color:white"></textarea><br /></div>
                <div id="nyVane" onclick="addtxt()" style="font-size:50px; text-align:center;">⁺</div><br />
                <br /><button onclick="nyAktivitet()" class="button">Neste</button>
                            `}
