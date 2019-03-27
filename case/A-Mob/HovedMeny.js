function visMeny() {
    document.getElementById('innhold').innerHTML =
        `<table>
    <tbody>
        <tr>
            <h1 class="to">Meny</h1>
        </tr>
        <tr>
            <div><button class="fixed1" onclick="visSiIfraOmMobbing()">Si ifra om mobbing</button></div>
        <tr>
            <div><button class="fixed1" onclick="visHvaErMobbing()">Hva er mobbing</button></div>
        </tr>
        <tr>
            <div><button class="fixed1" onclick="visHvordanTaVarePåAndre()">Hvordan ta vare på andre</button></div>
        </tr>
        <tr>
            <div><button class="fixed1" onclick="visSelvevaluering()">Selvevaluering</button></div>
        </tr>
        <tr>
            <div><button class="fixed2">Logg ut</div></button>
        </tr>
    </tbody>
    </table>`
}
