function showMainScreen() {
    header.innerHTML = '<h1>Hovedside</h1>';
    content.setAttribute('class', 'mainPageContentGrid');
    content.innerHTML = `
    <button class="mainGoals" onclick="showMyGoalsScreen()">
      Hovedmål: 1</br>
Hovedmål: 2</br>
Hovedmål: 3
    </button>
      <div><button class="mainButton" onclick="ukentligEvaluering()">Ukentlig evaluering</button></div>
      <div><button class="mainButton" onclick="showEvaluateScreen()">Daglig evaluering</button></div>
      <div><button class="mainButton" onclick="lagNyttMål()">Nytt mål</button></div>
      <div><button class="mainButton" onclick="lagDagbok()">Dagbok</button></div>
      <div><button class="mainButton" onclick="kalender()">Kalender</button></div>
    `;
}