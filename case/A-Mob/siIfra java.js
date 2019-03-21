function siIfra() {
    document.getElementById('siIfraOmMobbing').innerHTML =
        `
            <table>
                <tr>
                    <th>hei paa deg</th>





                    <th>da praaver vi</th>
                </tr>
            </table>
        `;
}
function visMeny() {
    document.getElementById('innhold').innerHTML = 
    `
    <table>
    <tbody>
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
                <td onclick="(visSendInn)">Send inn</td>
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
                <td> Fint at du valgte og ta kontakt!</td>
            </tr>
            <tr>
                <td onclick="vismeny()">Meny</td>
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
                <td onclick="visHvaErMobbing()">hei paa meg</td>
            <tr>
        </tbody>
    </table>
    `;
}