function lagDagbok() {
    for (let i = 0; i < evalueringDag.length; i++) {
        var dagensEvaluering = evalueringDag[i];
    }
    mainextra.innerHTML = `
    <div class="button">
        Skriv litt om dagen i dag.
    </div>
    <div><input class="button" style="background-color:white;color:black; width: 94%; height: 32px;"></input></div>
    <div><button onclick="showMainScreen()" class="button">Lagre og ferdig</button></div>
    `;

}
