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

    let skills = ["acrobatics", "appraise", "bluff", "climb", "diplomacy", "disableDevice", "disguise", "escapeArtist", "fly", "handleAnimal", "heal", "intimidate", "knowArcane", "knowDungeoneering", "knowEngineering", "knowGeography", "knowHistory", "knowLocal", "knowNature", "knowNobility", "knowPlanes", "knowReligion", "perform", "linguistics", "perception", "ride", "senseMotive", "sleightOfHand", "spellcraft", "stealth", "survival", "swim", "umd"];

    for (let td of skillStr) {
        td.innerHTML = strMod;
    }
    for (let td of skillDex) {
        td.innerHTML = dexMod;
    }
    for (let td of skillCon) {
        td.innerHTML = conMod;
    }
    for (let td of skillInt) {
        td.innerHTML = intMod;
    }
    for (let td of skillWis) {
        td.innerHTML = wisMod;
    }
    for (let td of skillCha) {
        td.innerHTML = chaMod;
    }


    let valuesFromUIObj = {
        Alchemist: ['appraise', 'fly', 'heal', 'knowArcane', 'knowNature', 'perception', 'sleightOfHand', 'spellcraft', 'survival', 'umd'],
        Bard: ['acrobatics', 'appraise', 'bluff', 'climb', 'diplomacy', 'disguise', 'escapeArtist', 'intimidate', 'knowArcane', 'knowDungeoneering', 'knowEngineering', 'knowGeography', 'knowHistory', 'knowLocal', 'knowNature', 'knowNobility', 'knowPlanes', 'knowReligion', 'linguistics', 'perception', 'perform', 'senseMotive', 'sleightOfHand', 'spellcraft', 'stealth', 'umd'],
        Barbarian: ['acrobatics', 'climb', 'handleAnimal', 'intimidate', 'knowNature', 'perception', 'ride', 'survival', 'swim'],
        Cavalier: ['bluff', 'climb', 'diplomacy', 'handleAnimal', 'intimidate', 'ride', 'senseMotive', 'swim'],
        Cleric: ['appraise', 'diplomacy', 'heal', 'knowArcane', 'knowHistory', 'knowNobility', 'knowPlanes', 'knowReligion', 'linguistics', 'senseMotive', 'spellcraft'],
        Druid: ['climb', 'fly', 'handleAnimal', 'heal', 'knowGeography', 'knowNature', 'perception', 'ride', 'spellcraft', 'survival', 'swim'],
        Fighter: ['climb', 'handleAnimal', 'intimidate', 'knowDungeoneering', 'knowEngineering', 'ride', 'survival', 'swim'],
        Gunslinger: ['acrobatics', 'bluff', 'climb', 'handleAnimal', 'heal', 'intimidate', 'knowEngineering', 'knowNature', 'perception', 'ride', 'sleightOfHand', 'survival', 'swim'],
        Inquisitor: ['bluff', 'climb', 'diplomacy', 'disguise', 'heal', 'intimidate', 'knowArcane', 'knowDungeoneering', 'knowNature', 'knowPlanes', 'knowReligion', 'perception', 'ride', 'senseMotive', 'spellcraft', 'stealth', 'survival', 'swim'],
        Magus: ['climb', 'fly', 'intimidate', 'knowArcane', 'knowDungeoneering', 'knowPlanes', 'ride', 'spellcraft', 'swim', 'umd'],
        Monk: ['acrobatics', 'climb', 'escapeArtist', 'intimidate', 'knowHistory', 'knowReligion', 'perception', 'perform', 'ride', 'senseMotive', 'stealth', 'swim'],
        Oracle: ['diplomacy', 'heal', 'knowHistory', 'knowPlanes', 'knowReligion', 'senseMotive', 'spellcraft'],
        Paladin: ['diplomacy', 'handleAnimal', 'heal', 'knowNobility', 'knowReligion', 'ride', 'senseMotive', 'spellcraft'],
        Ranger: ['climb', 'handleAnimal', 'heal', 'intimidate', 'knowDungeoneering', 'knowGeography', 'knowNature', 'perception', 'ride', 'spellcraft', 'stealth', 'survival', 'swim'],
        Rogue: ['acrobatics', 'appraise', 'bluff', 'climb', 'diplomacy', 'disableDevice', 'disguise', 'escapeArtist', 'intimidate', 'knowDungeoneering', 'knowLocal', 'linguistics', 'perception', 'perform', 'senseMotive', 'sleightOfHand', 'stealth', 'swim', 'umd'],
        Sorceror: ['appraise', 'bluff', 'fly', 'intimidate', 'knowArcane', 'spellcraft', 'umd'],
        Wizard: ['appraise', 'fly', 'knowArcane', 'knowDungeoneering', 'knowEngineering', 'knowGeography', 'knowHistory', 'knowLocal', 'knowNature', 'knowNobility', 'knowPlanes', 'knowReligion', 'linguistics', 'spellcraft']
    };
    let bonusProps = valuesFromUIObj[chosenClass];
    for (let propName of bonusProps) {
        let inputElement = document.getElementById(propName);
        let value = inputElement.value;
        if (value >= 1) {
            let element = document.getElementById(propName+ 'Misc');
            element.innerHTML = +3;
        }
        else if (value == 0 || value == '0') {
            let element = document.getElementById(propName+ 'Misc');
            element.innerHTML = 0;
        }
    }

    

}










