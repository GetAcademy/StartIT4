var checked = [null, null, null, null];

function select(questionIndex, yes) {
    checked[questionIndex] = yes;
    harBlittMobbet();
    harBlittMobbet2();
}

function createCheckbox(questionIndex, yes) {
    var checkedValue = checked[questionIndex];
    if (yes) {
        return checkedValue
            ? `<div class="customChk" onclick="select(${questionIndex},${yes})"><div class="customChkInner">✓</div></div>`
            : `<div class="customChk" onclick="select(${questionIndex},${yes})"></div>`;
    }
    else {
        return checkedValue == false
            ? `<div class="customChk" onclick="select(${questionIndex},${yes})"><div class="customChkInner">✓</div></div>`
            : `<div class="customChk" onclick="select(${questionIndex},${yes})"></div>`;

    }
}

 function harBlittMobbet() {
    // var blittDyttet = checked[0];
    // var styggeTing = checked[1];
    // var utestengt = checked[2];
    // var mobbetLenge = checked[3];


    document.getElementById('innhold').innerHTML =
        ` 
    <table>
    <tr>
        <td colspan="2";>
            <h1 class="kontakt">Ta kontakt</h1>
        </td>
    </tr>
    <tr>
        <td style="width: 15%">
                <h4>Har du blitt mobbet?</h4>
                <button class="knapp" onclick="harBlittMobbet2()">Trykk her</button>
            </td>
            <td style="width: 15%">
                <h4>Vet du om noen som blir mobbet?</h4>
                <button class="knapp">Trykk her</button>
            </td>
    </tr>
    </table>
        <div id="blittMobbet"></div>
        <div class="text">
            <br><li>Det er greit å si ifra!</li>
                <li>Med å si ifra så kan du bedre din og andre sin psykiske helse!</li>
        </div>
    
            <p> Her kan du skrive en kommentar viss du ønsker! :)</p>
        <div>
            <input type="textBox"><br>
        </div>

        <div>
            <br><button class="drit" onclick="visSendInn();">Send Inn</button>
        </div>
        <div class="botCorner"><button class="returnButton" onclick="visMeny()">&#8617;</button></div>
    `;
}
function harBlittMobbet2() {
    document.getElementById('blittMobbet').innerHTML =
     `
        <div class="spør">Har du blit dyttet/slått eller sparket?</div>
        ${createCheckbox(0, true)} Ja  &nbsp; &nbsp;  ${createCheckbox(0, false)} Nei
        <div class="nesteMobbet">Har noen sagt stygge ting til deg?</div>
        ${createCheckbox(1, true)} Ja  &nbsp; &nbsp;  ${createCheckbox(1, false)} Nei
        <div class="nesteMobbet">Har du blitt utestengt?</div>
        ${createCheckbox(2, true)} Ja  &nbsp; &nbsp;  ${createCheckbox(2, false)} Nei
        <div class="nesteMobbet">Har du blit mobbet lenge?</div>
        ${createCheckbox(3, true)} Ja  &nbsp; &nbsp;  ${createCheckbox(3, false)} Nei
    `
}