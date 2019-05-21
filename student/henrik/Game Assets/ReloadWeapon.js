var reloadBtn = document.getElementById("reload")

var magazines = [
    magazine0 = 20,
    magazine1 = 38,
    magazine2 = 42,
    magazine3 = 32
]

var currentMagazine = [
    magazine4 = 28
]

function reload() {
    currentMagazine.push(magazines)
    magazines[0].push(currentMagazine)
    magazines.splice(0, 1)
    
  //  magazines.sort();
    console.log(magazines)
    console.log(currentMagazine)
}

function shoot() {
    currentMagazine[0] = -1;
}

