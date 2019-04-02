function showEvaluateScreen() {
  header.innerHTML = '<h1>Daglig evaluering</h1>';
  content.classList.length = 0;
  content.classList.add('evaluateDayContentGrid');
  content.innerHTML = `
      <div>Humør</div>
      <div>★ ★ ★ ★ ★ ★ ★ ★ ★</div>
      <div>Mentalt tilstede</div>
      <div>★ ★ ★ ★ ★ ★ ★ ★ ★</div>
      <div>Kvalitet på arbeid</div>
      <div>★ ★ ★ ★ ★ ★ ★ ★ ★</div>
      <div>Daglig evaluering</div>
      <div><textarea class="bigText"></textarea></div>
      <div><button onclick="showMainScreen()">Lagre og ferdig</button></div>
                `;
}
