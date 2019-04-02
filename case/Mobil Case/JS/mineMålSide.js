function showMyGoalsScreen() {
    header.innerHTML = '<h1>Mine mål</h1>';
    content.setAttribute('class', 'myGoalsContentGrid');
    content.innerHTML = `
      <div><button class="mainButton" onclick="leggTilOppgaveSide()">Legg til oppgave</button></div>
      <div><button class="mainButton">Rediger</button></div>
      <div><button class="mainButton">Slett</button></div>
      <div><button class="mainButton" onclick="dagligEvaluering()">Evaluer</button></div>
      <div><center><button onclick="showMainScreen()">Tilbake</button></center></div>      
    `;
}
