var model = {
    beenBullied: {
        questions: [
            'Har du blitt dyttet / slått eller sparket?',
            'Har noen sagt stygge ting til deg?',
            'Har du blitt utestengt?',
            'Har du blit mobbet lenge?'
        ],
        checked: [null, null, null, null]
    },
    seenBullying: {
        questions:
            [
                'Vet du hvem som ble mobbet?',
                'Så du hvem som mobbet?',
                'Gjorde du noe for å stoppe mobbingen?',
                'Hvordan mobbet ble vedkommende?'
            ],
        checked: [null, null, null, null]
    }
};


function harBlittMobbet3() {
    document.getElementById('blittMobbet').innerHTML
        = createYesOrNoQuestionsHtml('seenBullying');
}

function harBlittMobbet2() {
    document.getElementById('blittMobbet').innerHTML
        = createYesOrNoQuestionsHtml('beenBullied');
}

function createYesOrNoQuestionsHtml(categoryName) {
    let questions = model[categoryName].questions;
    let html = '';
    for (let i = 0; i < questions.length; i++) {
        html += `<div class="spør">${questions[i]}</div>
          ${createCheckbox(i, true, categoryName)} Ja  &nbsp; &nbsp;  ${createCheckbox(i, false, categoryName)} Nei`;
    }
    return html;
}

function select(questionIndex, yes, categoryName) {
    model[categoryName].checked[questionIndex] = yes;
    document.getElementById('blittMobbet').innerHTML = createYesOrNoQuestionsHtml(categoryName);
}

function createCheckbox(questionIndex, isYesCheckbox, categoryName) {
    let checkedValue = model[categoryName].checked[questionIndex];
    let isChecked = isYesCheckbox && checkedValue || !isYesCheckbox && checkedValue == false;
    let check = isChecked ? `<div class="customChkInner">✓</div>` : '';
    let divHtml = `<div class="customChk" onclick="select(${questionIndex},${isYesCheckbox},'${categoryName}')">${check}</div>`;
    return divHtml;
}

function harBlittMobbet() {
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
                <button class="knapp" onclick="harBlittMobbet3()">Trykk her</button>
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




