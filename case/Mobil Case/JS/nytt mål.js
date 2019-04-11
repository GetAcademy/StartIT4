﻿var goalOBJ;
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
                <br /><button onclick="dailyScreen()" class="button">Neste</button>
                        `}

function dailyScreen() {
    var aktiviteter = document.getElementById('aktiviteter').value;
    goalOBJ.aktiviteter = aktiviteter;
    mainextra.innerHTML = `
                <div class="overskrift back" onclick="nyEvaluering()">←</div>
                <p class="button">Velg</p>
                <textarea id="daglig1" class="button" style="background-color:white;color:black">Humør</textarea><br />
                <textarea id="daglig2" class="button" style="background-color:white;color:black">Mentalt Tilstede</textarea><br />
                <textarea id="daglig3" class="button" style="background-color:white;color:black">Kvalitet på arbeid</textarea><br />
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
                <p class="button">Lag Spørsmål</p>
                <textarea id="ukentlig1" class="button" style="background-color:white;color:black">Hva har vært spesielt bra denne uken?</textarea><br />
                <textarea id="ukentlig2" class="button" style="background-color:white;color:black">Hva kan gjøres bedre neste uke?</textarea><br />
                <textarea id="ukentlig3" class="button" style="background-color:white;color:black">Hva skal du ha spesielt fokus på neste uke</textarea><br />
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

