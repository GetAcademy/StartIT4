var checked1 = false;
var checked2 = false;

function select1() {
    checked1 = !checked1;
    harBlittMobbet();
}

function select2() {
    checked2 = !checked2;
    harBlittMobbet();
}

function harBlittMobbet() {

    var checkbox1 = checked1
        ? '<div class="customChk" onclick="select1()"><div class="customChkInner">✓</div></div>'
        : '<div class="customChk" onclick="select1()"></div>';
    var checkbox2 = checked2
        ? '<div class="customChk" onclick="select2()"><div class="customChkInner">✓</div></div>'
        : '<div class="customChk" onclick="select2()"></div>';

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
                <button class="knapp" onclick="harBlittMobbet()">Trykk her</button>
            </td>
            <td style="width: 15%">
                <h4>Vet du om noen som blir mobbet?</h4>
                <button class="knapp">Trykk her</button>
            </td>
        </tr>
    </table>

        <div class="spør">Har du blit dyttet/slått eller sparket?</div>
        ${checkbox1} Ja  &nbsp; &nbsp;  ${checkbox2} Nei
        <div class="nesteMobbet">Har noen sagt stygge ting til deg?</div>
        ${checkbox1} Ja  &nbsp; &nbsp;  ${checkbox2} Nei
        <div class="nesteMobbet">Har du blitt utestengt?</div>
        ${checkbox1} Ja  &nbsp; &nbsp;  ${checkbox2} Nei
        <div class="nesteMobbet">Har du blit mobbet lenge?</div>
        ${checkbox1} Ja  &nbsp; &nbsp;  ${checkbox2} Nei
        <div class="nesteMobbet">Har du blitdawda lenge?</div>
        ${checkbox1} Ja  &nbsp; &nbsp;  ${checkbox2} Nei



        
    `;
}


























// function takontakt() {

//     var bareDrit = document.getElementById('drit');
//     var harJa = document.getElementById('harJa');
//     var harNei = document.getElementById('harNei');
//     var hvorDytt = document.getElementById('hvorDytt');
//     var hvorUte = document.getElementById('hvorUte');
//     var hvorLedd = document.getElementById('hvorLedd');
//     var hvorPlaget = document.getElementById('hvorPlaget');
//     var kjennJa = document.getElementById('kjennJa');
//     var kjennNei = document.getElementById('kjennNei');


//     if ((harJa.checked || harNei.checked) &&
//         (hvorDytt.checked || hvorUte.checked || hvorLedd.checked || hvorPlaget.checked) &&
//         (kjennJa.checked || kjennNei.checked)) {
//         bareDrit.disabled = false;
//     }
// } 