function statMods() {
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
    document.getElementById("modStr").innerHTML = strMod
    document.getElementById("modDex").innerHTML = dexMod
    document.getElementById("modCon").innerHTML = conMod
    document.getElementById("modInt").innerHTML = intMod
    document.getElementById("modWis").innerHTML = wisMod
    document.getElementById("modCha").innerHTML = chaMod
}