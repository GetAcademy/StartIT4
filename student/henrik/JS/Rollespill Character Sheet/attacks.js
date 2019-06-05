function attackValue() {
    var chosenClass = document.getElementById("class").value
    var lvl = parseInt(document.getElementById("level").value, 10)
    var babGoesHere = document.getElementById("babValue")
    var BAB;
    var rangedAttack = document.getElementById("totalRangedAttack")
    var meleeAttack = document.getElementById("totalMeleeAttack")
    var meleeAttackStat = document.getElementById("meleeAttackStat").value
    var rangedAttackStat = document.getElementById("rangedAttackStat").value
    var size = document.getElementById("sizeForAttack").value
    var str = document.getElementById("str").value
    var dex = document.getElementById("dex").value
    var con = document.getElementById("con").value
    var int = document.getElementById("int").value
    var wis = document.getElementById("wis").value
    var cha = document.getElementById("cha").value
    var strMod = Math.floor((str - 10) / 2);
    var dexMod = Math.floor((dex - 10) / 2);
    var conMod = Math.floor((con - 10) / 2);
    var intMod = Math.floor((int - 10) / 2);
    var wisMod = Math.floor((wis - 10) / 2);
    var chaMod = Math.floor((cha - 10) / 2);
    if (
        chosenClass == "Rogue" ||
        chosenClass == "Cleric" ||
        chosenClass == "Druid" ||
        chosenClass == "Bard" ||
        chosenClass == "Alchemist" ||
        chosenClass == "Oracle" ||
        chosenClass == "Inquisitor" ||
        chosenClass == "Magus") {
        BAB = Math.floor(lvl * 0.75);
    }
    else if (
        chosenClass == "Fighter" ||
        chosenClass == "Barbarian" ||
        chosenClass == "Ranger" ||
        chosenClass == "Cavalier" ||
        chosenClass == "Gunslinger" ||
        chosenClass == "Monk" ||
        chosenClass == "Paladin") {
        BAB = lvl;
    }
    else if (
        chosenClass == "Sorceror" ||
        chosenClass == "Wizard") {
        BAB = Math.floor(lvl * 0.5);
    }
    babGoesHere.innerHTML = 'Basic Attack: ' + BAB;
    
    // SIZE MODIFIER TO ATTACK
    if (size == 'small') {
        BAB += 1;
    }
    else if (size == 'medium') {
        BAB += 0;
    }
    else if (size == 'large') {
        BAB -= 1;
    }
    
    // MELEE ATTACK 
    if (meleeAttackStat == 'dexAttack') {
        var dexToAttack = BAB + dexMod;
        meleeAttack.innerHTML = 'Melee Attack Modifier: ' + dexToAttack;
    }
    else if (meleeAttackStat == 'strAttack') {
        var strToAttack = BAB + strMod;
        meleeAttack.innerHTML = 'Melee Attack Modifier: ' + strToAttack;
    }
    else if (meleeAttackStat == 'conAttack') {
        var conToAttack = BAB + conMod;
        meleeAttack.innerHTML = 'Melee Attack Modifier: ' + conToAttack;
    }
    else if (meleeAttackStat == 'intAttack') {
        var intToAttack = BAB + intMod;
        meleeAttack.innerHTML = 'Melee Attack Modifier: ' + intToAttack;
    }
    else if (meleeAttackStat == 'chaAttack') {
        var chaToAttack = BAB + chaMod;
        meleeAttack.innerHTML = 'Melee Attack Modifier: ' + chaToAttack;
    }
    else if (meleeAttackStat == 'wisAttack') {
        var wisToAttack = BAB + wisMod;
        meleeAttack.innerHTML = 'Melee Attack Modifier: ' + wisToAttack;
    }
    // RANGED ATTACK
    if (rangedAttackStat == 'rangedDexAttack') {
        var dexToAttack = BAB + dexMod;
        rangedAttack.innerHTML = 'Ranged Attack Modifier: ' + dexToAttack;
    }
    else if (rangedAttackStat == 'rangedStrAttack') {
        var strToAttack = BAB + strMod;
        rangedAttack.innerHTML = 'Ranged Attack Modifier: ' + strToAttack;
    }
    else if (rangedAttackStat == 'rangedConAttack') {
        var conToAttack = BAB + conMod;
        rangedAttack.innerHTML = 'Ranged Attack Modifier: ' + conToAttack;
    }
    else if (rangedAttackStat == 'rangedIntAttack') {
        var intToAttack = BAB + intMod;
        rangedAttack.innerHTML = 'Ranged Attack Modifier: ' + intToAttack;
    }
    else if (rangedAttackStat == 'rangedChaAttack') {
        var chaToAttack = BAB + chaMod;
        rangedAttack.innerHTML = 'Ranged Attack Modifier: ' + chaToAttack;
    }
    else if (rangedAttackStat == 'rangedWisAttack') {
        var wisToAttack = BAB + wisMod;
        rangedAttack.innerHTML = 'Ranged Attack Modifier: ' + wisToAttack;
    }
}