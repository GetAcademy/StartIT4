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
    ? '<span class="knapp1" onclick="select1()">✓</span>'
    : '<span class="knapp1" onclick="select1()"></span>';
    var checkbox2 = checked2
    ? '<span class="knapp2" onclick="select2()">✓</span>'
    : '<span class="knapp2" onclick="select2()"></span>';

    document.getElementById('innhold').innerHTML =
        `
    <table>
        <tbody>
            <tr>
                <h1 class="kontakt">Ta kontakt</h1>
            </tr>
            <tr>
                <h4>Har du blitt mobbet?</h4>
                    ${checkbox1} Ja ${checkbox2} Nei

                    <br/>
              
            </tr>
            <tr>
                <h4>Hvordan ble du mobbet??</h4>
            <div class="checkBox">
                <input onchange="takontakt()" name="toern" id="hvorDytt" type="checkBox"  />Dyttet
                <input onchange="takontakt()" name="toern" id="hvorUte" type="checkbox"  />Utestengt
                <input onchange="takontakt()" name="toern" id="hvorLedd" type="checkBox" />Ledd av
                <input onchange="takontakt()" name="toern" id="hvorPlaget" type="checkBox" />Plaget/ertet
            </div>
            </tr>
            <tr>
                <h4>Kjenner du noen som har blitt mobbet?</h4>
            <div class="checkBox">
                <input onchange="takontakt()" name="treern" id="kjennJa" type="checkBox" />Ja
                <input onchange="takontakt()" name="treern" id="kjennNei" type="checkBox" />Nei
            </div>
            </tr> <br>
            <tr>
            <div class="text">
                <br><li>Det er greit å si ifra!</li>
                    <li>Med å si ifra så kan du bedre din og andre sin psykiske helse!</li>
            </div>
            </tr>
            <tr>
            
                 <p> Her kan du skrive en kommentar viss du ønsker! :)</p>
            <div>
                 <input type="textBox"><br>
            </div>
            </tr>
            <tr>
            <div>
                <br><button class="drit" id="drit" disabled="" onclick="visSendInn();">Send Inn</button>
            </div>
            </tr>
        </tbody>
    </table>
    ` ;
}
