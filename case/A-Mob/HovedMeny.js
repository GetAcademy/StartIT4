function visMeny() {
    document.getElementById('innhold').innerHTML =
        `<table>
    <tbody>
        <tr>
            <h1 class="to">Meny</h1>
        </tr>
        <tr>
            <div>
                <tr>
                    <button class="fixed1" onclick="visSiIfraOmMobbing()">Si ifra om mobbing</button>
                </tr>
                <tr>
                    <button class="fixed1" onclick="visHvaErMobbing()">Hva er mobbing</button>
                </tr>
                <tr>
                    <button class="fixed1" onclick="visHvordanTaVarePåAndre();nåErMenyBorte();">Hvordan ta vare på andre</button>
                </tr>
                <tr>
                    <button class="fixed1" onclick="visSelvevaluering()">Selvevaluering</button>
                </tr>
            </div>
            <div>
                <tr>
                    <button class="fixed2">Logg ut</button>
                </tr>
            </div>
        </tr>
    </tbody>
    </table>`
}
