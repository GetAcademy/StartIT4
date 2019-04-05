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
                <button class="knapp" onclick="harBlittMobbet()">khjkjh</button>
            </td>
            <td style="width: 15%">
                <h4>Vet du om noen som blir mobbet?</h4>
                <button class="knapp">khjkjh</button>
            </td>
        </tr>
    </table>



        <div> halla </div>

        <div class="customChk" onclick="select1()"><div class="customChkInner">✓</div></div>
        <div class="customChk" onclick="select1()"></div>




        
 

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