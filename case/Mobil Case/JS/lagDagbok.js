function lagDagbok() {
    for (let i = 0; i < evalueringDag.length; i++) {
        var dagensEvaluering = evalueringDag[i];
    }
    mainextra.innerHTML = `
    <div class="button">
        Skriv litt om dagen i dag.
    </div>
    <div><textarea class="button" style="background-color:white;color:black">${dagensEvaluering.Text}</textarea></div>
    <div><button onclick="showMainScreen()" class="button">Lagre og ferdig</button></div>
    `;

}
