//inputs
var parent = document.getElementById('parent');

var buildingName = document.createElement('input');
buildingName.id = "buildingNames";
buildingName.className = "test";
buildingName.placeholder = "Navn";
buildingName.setAttribute('type', 'text');
parent.appendChild(buildingName);

var br2 = document.createElement('br');
parent.appendChild(br2);

var buildingAdress = document.createElement('input');
buildingAdress.id = "buildingAdresses";
buildingAdress.classList = "test";
buildingAdress.placeholder = "Adresse";
buildingAdress.setAttribute('type', 'text');
parent.appendChild(buildingAdress);

var br3 = document.createElement('br');
parent.appendChild(br3);

var buildingPostNr = document.createElement('input');
buildingPostNr.id = "buildingPostNumber";
buildingPostNr.classList = "test";
buildingPostNr.placeholder = "PostNr"
buildingPostNr.setAttribute('type', 'text');
parent.appendChild(buildingPostNr);

var br4 = document.createElement('br');
parent.appendChild(br4);


var buildingSted = document.createElement('input');
buildingSted.id = "buildingPlace";
buildingSted.classList = "test";
buildingSted.placeholder = "Sted";
buildingSted.setAttribute('type', 'text');
parent.appendChild(buildingSted);

var br5 = document.createElement('br');
parent.appendChild(br5);

var buildingKategori = document.createElement('input');
buildingKategori.id = "buildingKategorier";
buildingKategori.classList = "test";
buildingKategori.placeholder = "Kategori";
buildingKategori.setAttribute('type', 'text');
parent.appendChild(buildingKategori);

var br6 = document.createElement('br');
parent.appendChild(br6);


var buildingAreal = document.createElement('input');
buildingAreal.id = "buildingArealer";
buildingAreal.placeholder = "Areal";
buildingAreal.classList = "test";
buildingAreal.setAttribute('type', 'text');
parent.appendChild(buildingAreal);

var br7 = document.createElement('br');
parent.appendChild(br7);

var buildingOppvarming = document.createElement('input');
buildingOppvarming.id = "buildingOppvarmingId";
buildingOppvarming.placeholder ="Oppvarming";
buildingOppvarming.classList = "test";
buildingOppvarming.setAttribute('type', 'text');
parent.appendChild(buildingOppvarming);

var br8 = document.createElement('br');
parent.appendChild(br8);