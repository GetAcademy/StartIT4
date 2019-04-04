function nyAktivitet() {
    
    mainextra.innerHTML = `
                <div class="overskrift back" onclick="nyNøkkelvane()">←</div>
                <p class="button">Hvilke aktiviteter vil være viktige for deg hvis du skal nå dette målet?</p>
                <div id="textDiv"> <textarea class="button" style="background-color:white;color:black"></textarea><br /></div>
                <div id="nyVane" onclick="addtxt()" style="font-size:50px; text-align:center;">⁺</div><br />
                <br /><button onclick="nyEvaluering()" class="button">Neste</button>
                        `}
