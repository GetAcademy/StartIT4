
function visOgSkjulMeny() {
    let meny = document.getElementById('meny');
    if (meny.style.display == 'none') {
        meny.style.display = 'block';
    } else {
        meny.style.display = 'none';
    }
}


//     //document.getElementById('page').classList.toggle('pageUtenMeny');
function nåErMenyBorte() {
    let meny = document.getElementById('meny');
    meny.style.display = 'none';
}

