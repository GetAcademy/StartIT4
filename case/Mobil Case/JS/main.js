﻿function showMainScreen() {
    
    mainextra.innerHTML = `
    <button class="button" onclick="showMyGoalsScreen()">
      ${txt2}
    </button>
      <div><button class="button" onclick="ukentligEvaluering()">Ukentlig evaluering</button></div>
      <div><button class="button" onclick="dagligEvaluering()">Daglig evaluering</button></div>
      <div><button class="button" onclick="newGoal()">Nytt mål</button></div>
      <div><button class="button" onclick="lagDagbok()">Dagbok</button></div>
      <div><button class="button" onclick="kalender()">Kalender</button></div>
    `;
}
