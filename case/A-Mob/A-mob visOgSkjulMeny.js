function visOgSkjulMeny() {
    // document.getElementById('meny').innerHTML =
    // `
    // `
    let meny = document.getElementById('meny');
    let displayNow = meny.style.display;
    meny.style.display = displayNow == 'none' ? 'block' : 'none';

    //document.getElementById('page').classList.toggle('pageUtenMeny');
}
