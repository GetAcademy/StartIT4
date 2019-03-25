function finaleScreen() {
    var mål1 = document.getElementById('mål1').value;
    content.innerHTML = `
                <div class="overskrift back" onclick="newGoal()">←</div> 
                <h2 class="overskrift">Finale</h2>
                <div>${mål1}</div>
        `
}