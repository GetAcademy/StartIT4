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
function visSiIfraOmMobbing() {
    document.getElementById('innhold').innerHTML = 
    `
    <table>
        <tbody>
            <tr>
                <h1>Ta kontakt</h1>
            </tr>
            <tr>
                <h4>Har du blitt mobbet?</h4>
                <input onchange="takontakt()" name="enern" id="harJa" type="radio" />ja
                <input onchange="takontakt()" name="enern" id="harNei" type="radio" />nei
            </tr>
            <tr>
                <h4>Hvordan ble du mobbet??</h4>
                <input onchange="takontakt()" name="toern" id="hvorDytt" type="radio" />Dyttet
                <input onchange="takontakt()" name="toern" id="hvorUte" type="radio" />Utestengt
                <input onchange="takontakt()" name="toern" id="hvorLedd" type="radio" />Ledd av
                <input onchange="takontakt()" name="toern" id="hvorPlaget" type="radio" />Plaget/ertet
            </tr>
            <tr>
                <h4>Kjenner du noen som har blitt mobbet?</h4>
                <input onchange="takontakt()" name="treern" id="kjennJa" type="radio" />Ja
                <input onchange="takontakt()" name="treern" id="kjennNei" type="radio" />Nei
            </tr> <br>
            <tr>
                <br><li>Det er greit å si ifra!</li>
                    <li>Med å si ifra så kan du bedre din og andre sin psykiske helse!</li>
            </tr>
            <tr>
                    <br><br>
                 <p> Her kan du skrive en kommentar viss du ønsker! :)</p>
                 <input type="text"><br>
            </tr>
            <tr>
                <br><button id="drit" disabled="" onclick="visSendInn();">Send Inn</button>
            </tr>
        </tbody>
    </table>
    ` ;
}
function visSendInn() {
    document.getElementById('innhold').innerHTML =
    `
    <table>
        <tbody>
            <tr>
                <h1> Fint at du valgte og ta kontakt!</h1>
            </tr>
            <tr>
                <td onclick="visMeny()">Meny</td>
            </tr>
        </tbody>
    </table>
    `;
}
function visHvaErMobbing() {
    document.getElementById('innhold').innerHTML =
    `
    
    <table>
        <tbody>
            <tr>
                <h1 onclick="visHvaErMobbing()">Hva er Mobbing?</h1>
            <tr>
        </tbody>
    </table>
    `;
}
function visHvordanTaVarePåAndre() {
    document.getElementById('innhold').innerHTML =
    `
    <table>
        <tbody>
            <tr>
                <h1 onclick="()">Hvordan ta vare på andre?</h1>
            </tr>
        <tbody>
    </table>
    `;
}
