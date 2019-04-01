function leggTilOppgaveSide() {
    header.innerHTML = '<h1>Legg til oppgave</h1>';
    content.classList.length = 0;
    content.classList.add('myGrid');
    content.classList.add('leggTilOppgaveSide');
    content.innerHTML = `
    <div style="align-self: center">
        Skriv hva oppgaven skal være i tekstfeltet under
    </div>
    <div><textarea class="bigText2"></textarea></div>
    <div><button onclick="showMyGoalsScreen()">Tilbake</button</div>
    `;
}