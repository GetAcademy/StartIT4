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
    var acrobaticsMisc = document.getElementById("acrobaticsMisc")

    var appraise = document.getElementById("appraise").value
    var appraiseTotal = document.getElementById("appraiseTotal")
    var appraiseMisc = document.getElementById("appraiseMisc")

    var bluff = document.getElementById("bluff").value
    var bluffTotal = document.getElementById("bluffTotal")
    var bluffMisc = document.getElementById("bluffMisc")

    var climb = document.getElementById("climb").value
    var climbTotal = document.getElementById("climbTotal")
    var climbMisc = document.getElementById("climbMisc")

    var diplomacy = document.getElementById("diplomacy").value
    var diplomacyTotal = document.getElementById("diplomacyTotal")
    var diplomacyMisc = document.getElementById("diplomacyMisc")

    var disableDevice = document.getElementById("disableDevice").value
    var disableDeviceTotal = document.getElementById("disableDeviceTotal")
    var disableDeviceMisc = document.getElementById("disableDeviceMisc")
    
    var disguise = document.getElementById("disguise").value
    var disguiseTotal = document.getElementById("disguiseTotal")
    var disguiseMisc = document.getElementById("disguiseMisc")

    var escapeArtist = document.getElementById("escapeArtist").value
    var escapeArtistTotal = document.getElementById("escapeArtistTotal")
    var escapeArtistMisc = document.getElementById("escapeArtistMisc")

    var fly = document.getElementById("fly").value
    var flyTotal = document.getElementById("flyTotal")
    var flyMisc = document.getElementById("flyMisc")

    var handleAnimal = document.getElementById("handleAnimal").value
    var handleAnimalTotal = document.getElementById("handleAnimalTotal")
    var handleAnimalMisc = document.getElementById("handleAnimalMisc")

    var heal = document.getElementById("heal").value
    var healTotal = document.getElementById("healTotal")
    var healMisc = document.getElementById("healMisc")

    var intimidate = document.getElementById("intimidate").value
    var intimidateTotal = document.getElementById("intimidateTotal")
    var intimidateMisc = document.getElementById("intimidateMisc")

    var knowArcane = document.getElementById("knowArcane").value
    var knowArcaneTotal = document.getElementById("knowArcaneTotal")
    var knowArcaneMisc = document.getElementById("knowArcaneMisc")

    var knowDungeoneering = document.getElementById("knowDungeoneering").value
    var knowDungeoneeringTotal = document.getElementById("knowDungeoneeringTotal")
    var knowDungeoneeringMisc = document.getElementById("knowDungeoneeringMisc")

    var knowEngineering = document.getElementById("knowEngineering").value
    var knowEngineeringTotal = document.getElementById("knowEngineeringTotal")
    var knowEngineeringMisc = document.getElementById("knowEngineeringMisc")

    var knowGeography = document.getElementById("knowGeography").value
    var knowGeographyTotal = document.getElementById("knowGeographyTotal")
    var knowGeographyMisc = document.getElementById("knowGeographyMisc")

    var knowHistory = document.getElementById("knowHistory").value
    var knowHistoryTotal = document.getElementById("knowHistoryTotal")
    var knowHistoryMisc = document.getElementById("knowHistoryMisc")

    var knowLocal = document.getElementById("knowLocal").value
    var knowLocalTotal = document.getElementById("knowLocalTotal")
    var knowLocalMisc = document.getElementById("knowLocalMisc")

    var knowNature = document.getElementById("knowNature").value
    var knowNatureTotal = document.getElementById("knowNatureTotal")
    var knowNatureMisc = document.getElementById("knowNatureMisc")

    var linguistics = document.getElementById("linguistics").value
    var linguisticsTotal = document.getElementById("linguisticsTotal")
    var linguisticsMisc = document.getElementById("linguisticsMisc")

    var perception = document.getElementById("perception").value
    var perceptionTotal = document.getElementById("perceptionTotal")
    var perceptionMisc = document.getElementById("perceptionMisc")

    var ride = document.getElementById("ride").value
    var rideTotal = document.getElementById("rideTotal")
    var rideMisc = document.getElementById("rideMisc")

    var senseMotive = document.getElementById("senseMotive").value
    var senseMotiveTotal = document.getElementById("senseMotiveTotal")
    var senseMotiveMisc = document.getElementById("senseMotiveMisc")

    var sleightOfHand = document.getElementById("sleightOfHand").value
    var sleightOfHandTotal = document.getElementById("sleightOfHandTotal")
    var sleightOfHandMisc = document.getElementById("sleightOfHandMisc")

    var spellcraft = document.getElementById("spellcraft").value
    var spellcraftTotal = document.getElementById("spellcraftTotal")
    var spellcraftMisc = document.getElementById("spellcraftMisc")

    var stealth = document.getElementById("stealth").value
    var stealthTotal = document.getElementById("stealthTotal")
    var stealthMisc = document.getElementById("stealthMisc")

    var survival = document.getElementById("survival").value
    var survivalTotal = document.getElementById("survivalTotal")
    var survivalMisc = document.getElementById("survivalMisc")

    var swim = document.getElementById("swim").value
    var swimTotal = document.getElementById("swimTotal")
    var swimMisc = document.getElementById("swimMisc")

    var umd = document.getElementById("umd").value
    var umdTotal = document.getElementById("umdTotal")
    var umdMisc = document.getElementById("umdMisc")
    
    
    
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
            appraiseMisc.innerHTML = +3;
        }
        if (fly >= 1) {
            flyMisc.innerHTML = +3;
        }
        if (heal >= 1) {
            healMisc.innerHTML = +3;
        }
        if (knowArcane >= 1) {
            knowArcaneMisc.innerHTML = +3;
        }
        if (knowNature >= 1) {
            knowNatureMisc.innerHTML = +3;
        }
        if (perception >= 1) {
            perceptionMisc.innerHTML = +3;
        }
        if (sleightOfHand >= 1) {
            sleightOfHandMisc.innerHTML = +3;
        }
        if (spellcraft >= 1) {
            spellcraftMisc.innerHTML = +3;
        }
        if (survival >= 1) {
            survivalMisc.innerHTML = +3;
        }
        if (umd >= 1) {
            umdMisc.innerHTML = +3;
        }
        if (disableDevice >= 1) {
            disableDeviceMisc.innerHTML = +3;
        }
    }
    else if (chosenClass == 'Bard') {
        if (acrobatics >= 1) {
            acrobatics.innerHTML = +3;
        }
        if (appraise >= 1) {
            appraiseMisc.innerHTML = +3;
        }
        if (bluff >= 1) {
            bluffMisc.innerHTML = +3;
        }
        if (climb >= 1) {
            climbMisc.innerHTML = +3;
        }
        if (diplomacy >= 1) {
            diplomacyMisc.innerHTML = +3;
        }
        if (disguise >= 1) {
            disguiseMisc.innerHTML = +3;
        }
        if (escapeArtist >= 1) {
            escapeArtistMisc.innerHTML = +3;
        }
        if (intimidate >= 1) {
            intimidateMisc.innerHTML = +3;
        }
        if (knowArcane >= 1) {
            knowArcaneMisc.innerHTML = +3;
        }
        if (knowDungeoneering >= 1) {
            knowDungeoneeringMisc.innerHTML = +3;
        }
}