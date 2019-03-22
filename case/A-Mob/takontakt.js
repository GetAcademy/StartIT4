var bareDrit = document.getElementById('drit');
var harJa = document.getElementById('harJa');
var harNei = document.getElementById('harNei');
var hvorDytt = document.getElementById('hvorDytt');
var hvorUte = document.getElementById('hvorUte');
var hvorLedd = document.getElementById('hvorLedd');
var hvorPlaget = document.getElementById('hvorPlaget');
var kjennJa = document.getElementById('kjennJa');
var kjennNei = document.getElementById('kjennNei');
var infoDiv = document.getElementById('info');

function takontakt(){
    if ((harJa.checked || harNei.checked) &&
        (hvorDytt.checked || hvorUte.checked || hvorLedd.checked || hvorPlaget.checked) &&
        (kjennJa.checked || kjennNei.checked)) {
        infoDiv.innerHTML = 'Du kan kanskje trykke på send inn knappen!';
        bareDrit.disabled = false;
    }
} 