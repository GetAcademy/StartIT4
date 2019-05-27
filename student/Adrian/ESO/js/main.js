function chosenRace(){
    var race = document.getElementById('race').value;
    var pic = document.getElementById('pic');
    if(race == 'choose'){
        pic.innerHTML = ''
    }
    else if(race == 'breton'){
        pic.innerHTML = `<img class="pic" src="/img/race/breton.png"/><span>Breton racial passives have a strong focus on magicka. Increased max magicka, increased spell resistance and magicka ability cost reduction makes them a good magicka based race often used on magicka damage dealers and healers.</span> <ul><li>Opportunist – Increases your Alliance Points gained by 1%.</li><li>Gift of Magnus: Increases your Max Magicka by 2000.</li><li>Spell Attunement: Gain 2310 Spell Resistance and 100 Magicka Recovery. The Spell Resistance granted by this effect is doubled if you are afflicted with Burning, Chilled, or Concussed.</li><li>Magicka Mastery: Reduces the Magicka cost of your abilities by 7%.</li></ul>`;
    }
    else if (race == 'redguard'){
        pic.innerHTML = '<img class="pic" src="/img/race/redguard.png"/>'
    }
    else if(race == 'orc'){
        pic.innerHTML = '<img class="pic" src="/img/race/orc.png"/>'
    }
    else if(race == 'altmer'){
        pic.innerHTML = '<img class="pic" src="/img/race/highelf.png"/>'
    }
    else if(race == 'woodelf'){
        pic.innerHTML = '<img class="pic" src="/img/race/woodelf.png"/>'
    }
    else if(race == 'khajiit'){
        pic.innerHTML = '<img class="pic" src="/img/race/khajiit.png"/>'
    }
    else if(race == 'nord'){
        pic.innerHTML = '<img class="pic" src="/img/race/nord.png"/>'
    }
    else if(race == 'dunmer'){
        pic.innerHTML = '<img class="pic" src="/img/race/darkelf.png"/>'
    }
    else if(race == 'argonian'){
        pic.innerHTML = '<img class="pic" src="/img/race/argonian.png"/>'
    }
    else if(race == 'imperial'){
        pic.innerHTML = '<img class="pic" src="/img/race/imperial.png"/>'
    }
    

}