function saves() {
    var lvl = parseInt(document.getElementById("level").value, 10);
    var chosenClass = document.getElementById("class").value
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
    var fortSave = document.getElementById("fortitudeSave")
    var willSave = document.getElementById("willSave")
    var reflexSave = document.getElementById("reflexSave")
    // High Fort and ref
    if (
        chosenClass == 'Alchemist' || 
        chosenClass == 'Gunslinger' || 
        chosenClass == 'Ranger') {
        let a = Math.floor(conMod + 2 + (lvl * 0.5));
        let b = Math.floor(wisMod + (lvl * 0.33));
        let c = Math.floor(dexMod + 2 + (lvl * 0.5));
        fortSave.innerHTML = 'Fortitude: ' + a;
        willSave.innerHTML = 'Will: ' + b;
        reflexSave.innerHTML = 'Reflex: ' + c;
    }
    // high Will and Ref
    else if (
        chosenClass == 'Bard') 
    {
        let a = Math.floor(conMod + (lvl * 0.33));
        let b = Math.floor(wisMod + 2 + (lvl * 0.5));
        let c = Math.floor(dexMod + 2 + (lvl * 0.5));
        fortSave.innerHTML = 'Fortitude: ' + a;
        willSave.innerHTML = 'Will: ' + b;
        reflexSave.innerHTML = 'Reflex: ' + c;   
    }
    // High fort
    else if (
            chosenClass == 'Barbarian' || 
            chosenClass == 'Cavalier' || 
            chosenClass == 'Fighter') {
        let a = Math.floor(conMod + 2 + (lvl * 0.5));
        let b = Math.floor(wisMod + (lvl * 0.33));
        let c = Math.floor(dexMod + (lvl * 0.33));
        fortSave.innerHTML = 'Fortitude: ' + a;
        willSave.innerHTML = 'Will: ' + b;
        reflexSave.innerHTML = 'Reflex: ' + c;
    }   
    //high fort and will
    else if (
            chosenClass == 'Cleric' || 
            chosenClass == 'Druid' || 
            chosenClass == 'Inquisitor' || 
            chosenClass == 'Magus' || 
            chosenClass == 'Paladin') {
        let a = Math.floor(conMod + 2 + (lvl * 0.5));
        let b = Math.floor(wisMod + 2 + (lvl * 0.5));
        let c = Math.floor(dexMod + (lvl * 0.33));
        fortSave.innerHTML = 'Fortitude: ' + a;
        willSave.innerHTML = 'Will: ' + b;
        reflexSave.innerHTML = 'Reflex: ' + c;
    }
    // High everything
    else if (
            chosenClass == 'Monk') {
        let a = Math.floor(conMod + 2 + (lvl * 0.5));
        let b = Math.floor(wisMod + 2 + (lvl * 0.5));
        let c = Math.floor(dexMod + 2 + (lvl * 0.5));
        fortSave.innerHTML = 'Fortitude: ' + a;
        willSave.innerHTML = 'Will: ' + b;
        reflexSave.innerHTML = 'Reflex: ' + c;
    }
    // high will
    else if (chosenClass == 'Oracle' || 
            chosenClass == 'Sorceror' || 
            chosenClass == 'Wizard') {
        let a = Math.floor(conMod + (lvl * 0.33));
        let b = Math.floor(wisMod + 2 + (lvl * 0.5));
        let c = Math.floor(dexMod + (lvl * 0.33));
        fortSave.innerHTML = 'Fortitude: ' + a;
        willSave.innerHTML = 'Will: ' + b;
        reflexSave.innerHTML = 'Reflex: ' + c;
    }
    // high reflex
    else if (chosenClass == 'Rogue') {
        let a = Math.floor(conMod + (lvl * 0.33));
        let b = Math.floor(wisMod + (lvl * 0.33));
        let c = Math.floor(dexMod + 2 + (lvl * 0.5));
        fortSave.innerHTML = 'Fortitude: ' + a;
        willSave.innerHTML = 'Will: ' + b;
        reflexSave.innerHTML = 'Reflex: ' + c;
    }
    else{
        console.log("no class found");
    }
}
