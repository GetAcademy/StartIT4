function Calculate() {
var selectedValue = document.forms.myForm.class.value;
var selectedDPS = document.forms.myForm.damage.value;
var Resultat = document.getElementById("calcResultat");

switch (selectedValue) {
    case 'aWarrior': 
        Resultat.innerHTML = Math.round(selectedDPS / .8107)
        break;
    case 'fWarrior':
        Resultat.innerHTML = Math.round(selectedDPS / .8107)
        break;
    case 'aMage':
        Resultat.innerHTML = Math.round(selectedDPS / .8415)
        break;
    case 'fiMage':
        Resultat.innerHTML = Math.round(selectedDPS / .8234)
        break;
    case 'frMage':
        Resultat.innerHTML = Math.round(selectedDPS / .8276);
        break;
    case 'desWarlock':
        Resultat.innerHTML = Math.round(selectedDPS / .8976)
        break;
    case 'demWarlock':
        Resultat.innerHTML = Math.round(selectedDPS / .8550)
        break;
    case 'aWarlock':
        Resultat.innerHTML = Math.round(selectedDPS / .9249)
        break;
    case 'bHunter':
        Resultat.innerHTML = Math.round(selectedDPS / .8471)
        break;
    case 'mHunter':
        Resultat.innerHTML = Math.round(selectedDPS / .8612)
        break;
    case 'sHunter':
        Resultat.innerHTML = Math.round(selectedDPS / .8395)
        break;
    case 'Priest':
        Resultat.innerHTML = Math.round(selectedDPS / .9590)
        break;
    case 'oRogue':
        Resultat.innerHTML = Math.round(selectedDPS / .8741)
        break;
    case 'sRogue':
        Resultat.innerHTML = Math.round(selectedDPS / .8146)
        break;
    case 'aRogue':
        Resultat.innerHTML = Math.round(selectedDPS / .8633)
        break;
    case 'fDruid':
        Resultat.innerHTML = Math.round(selectedDPS / .8526)
        break;
    case 'bDruid':
        Resultat.innerHTML = Math.round(selectedDPS / .9043)
        break;
    case 'fDK':
        Resultat.innerHTML = Math.round(selectedDPS / .8092)
        break;
    case 'uDK':
        Resultat.innerHTML = Math.round(selectedDPS / .8299)
        break;
    case 'DH':
        Resultat.innerHTML = Math.round(selectedDPS / .8652)
        break;
    case 'Monk':
        Resultat.innerHTML = Math.round(selectedDPS / .8504)
        break;
    case 'Paladin':
        Resultat.innerHTML = Math.round(selectedDPS / .8504)
        break;
    case 'enhShaman':
        Resultat.innerHTML = Math.round(selectedDPS / .8331)
        break;
    case 'eleShaman':
        Resultat.innerHTML = Math.round(selectedDPS / .9207)
        break;
}}