var checked1 = false;
var checked2 = false;

function select1(){
    checked1 = !checked1;
    visSiIfraOmMobbing();
}

function select2(){
    checked2 = !checked2;
    visSiIfraOmMobbing();
}


function visSiIfraOmMobbing() {
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
                    <button class="knapp" onclick="harBlittMobbet()">khjkjh</button>
                </td>
                <td style="width: 15%">
                    <h4>Hvordan ble du mobbet??</h4>
                    <button class="knapp">khjkjh</button>
                </td>
            </tr>
    </table>
                    ${checkbox1} Ja ${checkbox2} Nei

                    <br/>
              
            <div class="checkBox">
                <input onchange="takontakt()" name="toern" id="hvorDytt" type="checkBox"  />Dyttet
                <input onchange="takontakt2()" name="toern" id="hvorUte" type="checkbox"  />Utestengt
                <input onchange="takontakt3()" name="toern" id="hvorLedd" type="checkBox" />Ledd av
                <input onchange="takontakt4()" name="toern" id="hvorPlaget" type="checkBox" />Plaget/ertet
            </div>
                <h4>Kjenner du noen som har blitt mobbet?</h4>
            <div class="checkBox">
                <input onchange="takontakt5()" name="treern" id="kjennJa" type="checkBox" />Ja
                <input onchange="takontakt6()" name="treern" id="kjennNei" type="checkBox" />Nei
            </div>
            ${checkbox1} ja

            <div class="text">
                <br><li>Det er greit å si ifra!</li>
                    <li>Med å si ifra så kan du bedre din og andre sin psykiske helse!</li>
            </div>
            
                 <p> Her kan du skrive en kommentar viss du ønsker! :)</p>
            <div>
                 <input type="textBox"><br>
            </div>

            <div>
                <br><button class="drit" id="drit" disabled="" onclick="visSendInn();">Send Inn</button>
            </div>
    ` ;
}
