var goalOBJ;
function newGoal() {
   
    mainextra.innerHTML = `
                <button class="regular">Hva vil du oppnå?</button>
                <input id="hva" class="regular" style="background-color:white;color:black; width: 94%; height: 32px;"></input>
                <button class="regular">Konkretiser det så godt som mulig.</button>
                <input id="forkort" class="regular" style="background-color:white;color:black; width: 94%; height: 32px;"></input>
                <button class="regular">Hvorfor vil du nå dette målet?</button>
                <input id="hvorfor" class="regular" style="background-color:white;color:black; width: 94%; height: 32px;"></input> <br />
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
                <button class="regular">Skriv ned en vane du trenger for å nå målet?</button>
                <div class="Textbox" id="textDiv"> <input id="vaner" class="button" style="background-color:white;color:black; width: 94%; height: 32px;"></input><br /></div>
               
                <br /><button onclick="nyAktivitet()" class="button">Neste</button>
                            `}


function nyAktivitet() {
    var vaner = document.getElementById('vaner').value;
    goalOBJ.vaner = vaner;
    mainextra.innerHTML = `
                <div class="overskrift back" onclick="nyNøkkelvane()">←</div>
                <button class="regular">Skriv ned en aktivitet som vil være viktige for deg hvis du skal nå dette målet?</button>
                <div id="textDiv"> <input id="aktiviteter" class="button" style="background-color:white;color:black; width: 94%; height: 32px;"></input><br /></div>
                
                <br /><button onclick="dailyScreen()" class="button">Neste</button>
                        `}

function dailyScreen() {
    var aktiviteter = document.getElementById('aktiviteter').value;
    goalOBJ.aktiviteter = aktiviteter;
    mainextra.innerHTML = `
                <div class="overskrift back" onclick="nyEvaluering()">←</div>
                <button class="regular">Velg 3 ting du ønsker å bli evaluert på daglig.</button>
                <input id="daglig1" class="button" style="background-color:white;color:black; width: 94%; height: 32px;" value="Humør"></input><br />
                <input id="daglig2" class="button" style="background-color:white;color:black; width: 94%; height: 32px;" value="Mentalt Tilstede"></input><br />
                <input id="daglig3" class="button" style="background-color:white;color:black; width: 94%; height: 32px;" value="Kvalitet på arbeid"></input><br />
                <br /><button onclick="weeklyScreen()" class="button">Lagre</button>
`}

function weeklyScreen() {
  var daglig1 = document.getElementById('daglig1').value;
    var daglig2 = document.getElementById('daglig2').value;
    var daglig3 = document.getElementById('daglig3').value;
 goalOBJ.daglig1 = daglig1;
    goalOBJ.daglig2 = daglig2;
    goalOBJ.daglig3 = daglig3;
    mainextra.innerHTML = `
                <div class="overskrift back" onclick="nyEvaluering()">←</div>
                <button class="regular">Lag 3 Spørsmål du må svare på hver uke</button>
                <input id="ukentlig1" class="button" style="background-color:white;color:black; width: 94%; height: 32px;" value="Hva har vært spesielt bra denne uken?"></input><br />
                <input id="ukentlig2" class="button" style="background-color:white;color:black; width: 94%; height: 32px;" value="Hva kan gjøres bedre neste uke?"></input><br />
                <input id="ukentlig3" class="button" style="background-color:white;color:black; width: 94%; height: 32px;" value="Hva skal du ha spesielt fokus på neste uke"></input><br />
                <br /><button onclick="coachScreen()" class="button">Lagre</button>
                
`}
function coachScreen() {
    var ukentlig1 = document.getElementById('ukentlig1').value;
    var ukentlig2 = document.getElementById('ukentlig2').value;
    var ukentlig3 = document.getElementById('ukentlig3').value;
goalOBJ.ukentlig1 = ukentlig1;
    goalOBJ.ukentlig2 = ukentlig2;
    goalOBJ.ukentlig3 = ukentlig3;
   mainextra.innerHTML = `<button onclick="showMainScreen()" class="button">Fullfør</button>`
        
}

