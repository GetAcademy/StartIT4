function showMyGoalsScreen() {
    header.innerHTML = '<h1>Mine mål</h1>';
    content.setAttribute('class', 'myGoalsContentGrid');
    content.innerHTML = `
      <div><button class="button" onclick="leggTilOppgaveSide()">Legg til oppgave</button></div>
      <div><button class="button">Rediger</button></div>
      <div><button class="button">Slett</button></div>
      <div><button class="button" onclick="dagligEvaluering()">Evaluer</button></div>
      <div><center><button class="button" onclick="showMainScreen()">Tilbake</button></center></div>      
    `;
}
