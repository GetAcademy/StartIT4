var goalOBJ;
function newGoal() {
   
    mainextra.innerHTML = `
                <p class="button">Hva vil du oppnå?</p>
                <textarea id="hva" class="button" style="background-color:white;color:black"></textarea>
                <p class="button">Forkort det til en setning.</p>
                <textarea id="forkort" class="button" style="background-color:white;color:black"></textarea>
                <p class="button">Hvorfor vil du nå dette målet?</p>
                <textarea id="hvorfor" class="button" style="background-color:white;color:black"></textarea> <br />
                <br /><button onclick="nyNøkkelvane()" class="button">Neste</button>
                                  `}
function nyNøkkelvane() {
    var hva = document.getElementById('hva').value;
     var forkort = document.getElementById('forkort').value;
    var hvorfor = document.getElementById('hvorfor').value;
    goalOBJ = {};
    goalOBJ.hva = hva;
    goalOBJ.forkort = forkort;
    goalOBJ.hvorfor = hvorfor;
    
    mainextra.innerHTML = `
                <div class="overskrift back" onclick="newGoal()">←</div>
                <p class="button">Hvilke vaner trenger du for å nå målet?</p>
                <div class="Textbox" id="textDiv"> <textarea id="vaner" class="button" style="background-color:white;color:black"></textarea><br /></div>
                <div id="nyVane" onclick="addtxt()" style="font-size:50px; text-align:center;">⁺</div><br />
                <br /><button onclick="nyAktivitet()" class="button">Neste</button>
                            `}


function nyAktivitet() {
    var vaner = document.getElementById('vaner').value;
    goalOBJ.vaner = vaner;
    mainextra.innerHTML = `
                <div class="overskrift back" onclick="nyNøkkelvane()">←</div>
                <p class="button">Hvilke aktiviteter vil være viktige for deg hvis du skal nå dette målet?</p>
                <div id="textDiv"> <textarea id="aktiviteter" class="button" style="background-color:white;color:black"></textarea><br /></div>
                <div id="nyVane" onclick="addtxt()" style="font-size:50px; text-align:center;">⁺</div><br />
                <br /><button onclick="nyEvaluering()" class="button">Neste</button>
                        `}

function nyEvaluering() {
    var aktiviteter = document.getElementById('aktiviteter').value;
    goalOBJ.aktiviteter = aktiviteter;
    mainextra.innerHTML = `
                <div class="overskrift back" onclick="nyAktivitet()">←</div>
                <button class="button" onclick="dailyScreen()">Daglig</button><br />
                <button class="button" onclick="weeklyScreen()">Ukentlig</button><br />
                <button  class="button" onclick="coachScreen()">Coach</button><br />
                <br /><button onclick="showMainScreen()" class="button">Fullfør</button>
            `}
