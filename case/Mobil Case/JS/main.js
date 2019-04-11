function showMainScreen() {
    let abc = 'Intet mål';
    if (goalOBJ) {
        abc = goalOBJ.forkort;
    }
    mainextra.innerHTML = `
    <button class="button" onclick="showMyGoalsScreen()">${abc}</button>
      <div><button class="button" onclick="ukentligEvaluering()">Ukentlig evaluering</button></div>
      <div><button class="button" onclick="dagligEvaluering()">Daglig evaluering</button></div>
      <div><button class="button" onclick="newGoal()">Nytt mål</button></div>
      <div><button class="button" onclick="lagDagbok()">Dagbok</button></div>
      <div><button class="button" onclick="kalender()">Kalender</button></div>
    `;
}
