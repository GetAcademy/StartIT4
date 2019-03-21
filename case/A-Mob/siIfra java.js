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
                <td onclick="visSelvauering()">Selvauering</td>
            </tr>
            <tr>
                <td>Logg ut</td>
            </tr>
        </tbody>
    </table>
`;
}
function visHvaErMobbing(); {
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