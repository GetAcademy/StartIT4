function visMeny() {
    document.getElementById('innhold').innerHTML = 
    `
    <table>
    <tbody>
        <tr>
            <h1>Meny</h1>
        </tr>
        <tr>
            <td onclick="visSiIfraOmMobbing()">Si ifra om mobbing</td>
        </tr>
        <tr>
            <td onclick="visHvaErMobbing()">Hva er mobbing</td>
        </tr>
        <tr>
            <td onclick="visHvordanTaVarePåAndre()">Hvordan ta vare på andre</td>
        </tr>
        <tr>
            <td onclick="visSelvevaluering()">Selvevaluering</td>
        </tr>
        <tr>
            <td>Logg ut</td>
        </tr>
    </tbody>
    </table>
    `;
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
                <input id="bittMobbetJa" type="radio" name="blitt">ja
                <input id="bittMobbetNei" type="radio" name="blitt">nei
            </tr>
            <tr>
                <h4>Hvordan ble du mobbet?</h4>
                <input id="bleMobbetDyttet type="radio">Dyttet
                <input id="bleMobbetUtestengt type="radio">Utestengt
                <input id="bleMobbetLedd type="radio">Ledd av
                <input id="bleMobbetPlaget type="radio">Plaget/ertet
            </tr>
            <tr>
                <h4>Kjenner du noen som har blitt mobbet?</h4>
            </tr>
            <tr>
                <input id="harBlittMobbetJa" type="radio">ja
                <input id="harBlittMobbetNei type="radio">nei
            </tr>
            <tr>
                <input type="text">
            </tr>
            <tr>
                <td onclick="visSendInn()">Send inn</td>
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
function visSelvevaluering() {
    document.getElementById('innhold').innerHTML =
        `
            <table>
                <tr>
                    <th>Hvordan har denne uken vært for deg?</th>


                </tr>
            </table>
        `;
}