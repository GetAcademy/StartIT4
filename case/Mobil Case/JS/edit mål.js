function editGoal() {

    mainextra.innerHTML = `
                <button class="button">Hva vil du oppnå?</button>
                <input id="hva" class="button" style="background-color:white;color:black; width: 94%; height: 32px;" value="${goalOBJ.hva}"></input>
                <button class="button">Forkort det til en setning.</button>
                <input id="forkort" class="button" style="background-color:white;color:black; width: 94%; height: 32px;" value="${goalOBJ.forkort}"></input>
                <button class="button">Hvorfor vil du nå dette målet?</button>
                <input id="hvorfor" class="button" style="background-color:white;color:black; width: 94%; height: 32px;" value="${goalOBJ.hvorfor}"></input> <br />
                <br /><button onclick="editNøkkelvane()" class="button">Neste</button>
                                  `}
function editNøkkelvane() {
    var hva = document.getElementById('hva').value;
    var forkort = document.getElementById('forkort').value;
    var hvorfor = document.getElementById('hvorfor').value;
    goalOBJ.hva = hva;
    goalOBJ.forkort = forkort;
    goalOBJ.hvorfor = hvorfor;
    mainextra.innerHTML = `
                <div class="overskrift back" onclick="editGoal()">←</div>
                <button class="button">Hvilke vaner trenger du for å nå målet?</button>
                <div class="Textbox" id="textDiv"> <input id="vaner" class="button" style="background-color:white;color:black; width: 94%; height: 32px;" value="${goalOBJ.vaner}"></input><br /></div>
                
                <br /><button onclick="editAktivitet()" class="button">Neste</button>
                            `}


function editAktivitet() {
    var vaner = document.getElementById('vaner').value;
    goalOBJ.vaner = vaner;
    mainextra.innerHTML = `
                <div class="overskrift back" onclick="editNøkkelvane()">←</div>
                <button class="button">Hvilke aktiviteter vil være viktige for deg hvis du skal nå dette målet?</button>
                <div id="textDiv"> <input id="aktiviteter" class="button" style="background-color:white;color:black; width: 94%; height: 32px;" value="${goalOBJ.aktiviteter}"></input><br /></div>
                
                <br /><button onclick="editEvaluering()" class="button">Neste</button>
                        `}

function editEvaluering() {
    var aktiviteter = document.getElementById('aktiviteter').value;
    goalOBJ.aktiviteter = aktiviteter;
    mainextra.innerHTML = `
                
                <br /><button onclick="showMainScreen()" class="button">Fullfør</button>
            `}