function showMainScreen() {
    let abc = 'Intet mål';
    if (goalOBJ) {
        abc = goalOBJ.forkort;
    }
    mainextra.innerHTML = `
    <button class="button" onclick="showMyGoalsScreen()">${abc}</button>
      <div><button class="button" onclick="ukentligEvaluering()" id=ukentlig>Ukentlig evaluering</button></div>
      <div><button class="button" onclick="dagligEvaluering() id="daglig">Daglig evaluering</button></div>
      <div><button class="button" onclick="newGoal()">Nytt mål</button></div>
      <div><button class="button" onclick="lagDagbok()">Dagbok</button></div>
      <div><button class="button" onclick="kalender()">Kalender</button></div>
    `;
}

 var updateinputEmpty = setInterval(inputEmpty, 1000);
        function inputEmpty() {
            var input1 = document.getElementById('hva').value;
            var input2 = document.getElementById('forkort').value;
            var input3 = document.getElementById('hvorfor').value;
            if (input1 == "" || input2 == "" || input3 == "") {
                document.getElementById('ukentlig').style.cssText = "visibility: hidden;";
                document.getElementById('daglig').style.cssText = "visibility: hidden;";
                document.getElementById('content').innerHTML += `<div>Ingen mål har blitt lagt til.</div>`;
                return false;
            }
            else 
                mainextra.innerHTML = `
    <button class="button" onclick="showMyGoalsScreen()">${abc}</button>
      <div><button class="button" onclick="ukentligEvaluering()" id=ukentlig>Ukentlig evaluering</button></div>
      <div><button class="button" onclick="dagligEvaluering() id="daglig">Daglig evaluering</button></div>
      <div><button class="button" onclick="newGoal()">Nytt mål</button></div>
      <div><button class="button" onclick="lagDagbok()">Dagbok</button></div>
      <div><button class="button" onclick="kalender()">Kalender</button></div>
    `;
        }
