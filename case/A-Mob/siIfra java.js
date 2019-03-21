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