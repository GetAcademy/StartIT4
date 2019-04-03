function showMainScreen() {
    
    mainextra.innerHTML = `
    <button class="mainGoals" onclick="showMyGoalsScreen()">
      bla bla bla
    </button>
      <div><button class="button" onclick="ukentligEvaluering()">Ukentlig evaluering</button></div>
      <div><button class="button" onclick="dagligEvaluering()">Daglig evaluering</button></div>
      <div><button class="button" onclick="newGoal()">Nytt mål</button></div>
      <div><button class="button" onclick="lagDagbok()">Dagbok</button></div>
      <div><button class="button" onclick="kalender()">Kalender</button></div>
    `;
}