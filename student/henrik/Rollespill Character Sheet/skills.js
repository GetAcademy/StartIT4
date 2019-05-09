function skills() {
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

    var skillTable = document.getElementById("myTable")
    var skillStr = skillTable.getElementsByClassName("skillModifierStr")
    var skillDex = skillTable.getElementsByClassName("skillModifierDex")
    var skillCon = skillTable.getElementsByClassName("skillModifierCon")
    var skillInt = skillTable.getElementsByClassName("skillModifierInt")
    var skillWis = skillTable.getElementsByClassName("skillModifierWis")
    var skillCha = skillTable.getElementsByClassName("skillModifierCha")
    
    var acrobatics = document.getElementById("acrobatics").value
    var acrobaticsTotal = document.getElementById("acrobaticsTotal")

    var appraise = document.getElementById("appraise").value
    var appraiseTotal = document.getElementById("appraiseTotal")

    var bluff = document.getElementById("bluff").value
    var bluffTotal = document.getElementById("bluffTotal")

    var climb = document.getElementById("climb").value
    var climbTotal = document.getElementById("climbTotal")

    var diplomacy = document.getElementById("diplomacy").value
    var diplomacyTotal = document.getElementById("diplomacyTotal")

    var disableDevice = document.getElementById("disableDevice").value
    var disableDeviceTotal = document.getElementById("disableDeviceTotal")
    
    var disguise = document.getElementById("disguise").value
    var disguiseTotal = document.getElementById("disguiseTotal")

    var escapeArtist = document.getElementById("escapeArtist").value
    var escapeArtistTotal = document.getElementById("escapeArtistTotal")

    var fly = document.getElementById("fly").value
    var flyTotal = document.getElementById("flyTotal")

    var handleAnimal = document.getElementById("handleAnimal").value
    var handleAnimalTotal = document.getElementById("handleAnimalTotal")

    var heal = document.getElementById("heal").value
    var healTotal = document.getElementById("healTotal")

    var intimidate = document.getElementById("intimidate").value
    var intimidateTotal = document.getElementById("intimidateTotal")

    var knowArcane = document.getElementById("knowArcane").value
    var knowArcaneTotal = document.getElementById("knowArcaneTotal")

    var knowDungeoneering = document.getElementById("knowDungeoneering").value
    var knowDungeoneeringTotal = document.getElementById("knowDungeoneeringTotal")

    var knowEngineering = document.getElementById("knowEngineering").value
    var knowEngineeringTotal = document.getElementById("knowEngineeringTotal")

    var knowGeography = document.getElementById("knowGeography").value
    var knowGeographyTotal = document.getElementById("knowGeographyTotal")

    var knowHistory = document.getElementById("knowHistory").value
    var knowHistoryTotal = document.getElementById("knowHistoryTotal")

    var knowLocal = document.getElementById("knowLocal").value
    var knowLocalTotal = document.getElementById("knowLocalTotal")

    var linguistics = document.getElementById("linguistics").value
    var linguisticsTotal = document.getElementById("linguisticsTotal")

    var perception = document.getElementById("perception").value
    var perceptionTotal = document.getElementById("perceptionTotal")

    var ride = document.getElementById("ride").value
    var rideTotal = document.getElementById("rideTotal")

    var senseMotive = document.getElementById("senseMotive").value
    var senseMotiveTotal = document.getElementById("senseMotiveTotal")

    var sleightOfHand = document.getElementById("sleightOfHand").value
    var sleightOfHandTotal = document.getElementById("sleightOfHandTotal")

    var spellcraft = document.getElementById("spellcraft").value
    var spellcraftTotal = document.getElementById("spellcraftTotal")

    var stealth = document.getElementById("stealth").value
    var stealthTotal = document.getElementById("stealthTotal")

    var survival = document.getElementById("survival").value
    var survivalTotal = document.getElementById("survivalTotal")

    var swim = document.getElementById("swim").value
    var swimTotal = document.getElementById("swimTotal")

    var umd = document.getElementById("umd").value
    var umdTotal = document.getElementById("umdTotal")
    
    var appraiseMisc = document.getElementById("appraiseMisc")
    
    
    for ( let td of skillStr) {
        td.innerHTML = strMod;
    }
    for ( let td of skillDex) {
        td.innerHTML = dexMod;
    }
    for ( let td of skillCon) {
        td.innerHTML = conMod;
    }
    for ( let td of skillInt) {
        td.innerHTML = intMod;
    }
    for ( let td of skillWis) {
        td.innerHTML = wisMod;
    }
    for ( let td of skillCha) {
        td.innerHTML = chaMod;
    }

    
    if (chosenClass == 'Alchemist') {
        if (appraise >= 1) {
            appraiseMisc.innerHTML = 3;
        }
    }
}