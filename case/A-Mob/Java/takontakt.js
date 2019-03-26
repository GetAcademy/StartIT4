function takontakt() {

    var bareDrit = document.getElementById('drit');
    var harJa = document.getElementById('harJa');
    var harNei = document.getElementById('harNei');
    var hvorDytt = document.getElementById('hvorDytt');
    var hvorUte = document.getElementById('hvorUte');
    var hvorLedd = document.getElementById('hvorLedd');
    var hvorPlaget = document.getElementById('hvorPlaget');
    var kjennJa = document.getElementById('kjennJa');
    var kjennNei = document.getElementById('kjennNei');


    if ((harJa.checked || harNei.checked) &&
        (hvorDytt.checked || hvorUte.checked || hvorLedd.checked || hvorPlaget.checked) &&
        (kjennJa.checked || kjennNei.checked)) {
        bareDrit.disabled = false;
    }
} 