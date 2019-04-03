//inputs
var parent = document.getElementById('parent');

var node = document.createTextNode('Navn:');
node.id = 'Text';
parent.appendChild(node);

var buildingName = document.createElement('input');
buildingName.id = "buildingNames";
buildingName.className = "test";
buildingName.setAttribute('type', 'text');
parent.appendChild(buildingName);

var br2 = document.createElement('br');
parent.appendChild(br2);

var node1 = document.createTextNode('Adresse:');
node1.id = 'Text';
parent.appendChild(node1);

var buildingAdress = document.createElement('input');
buildingAdress.id = "buildingAdresses";
buildingAdress.classList = "test";
buildingAdress.setAttribute('type', 'text');
parent.appendChild(buildingAdress);

var br3 = document.createElement('br');
parent.appendChild(br3);

var node2 = document.createTextNode('PostNr:');
node2.id = 'Text';
parent.appendChild(node2);

var buildingPostNr = document.createElement('input');
buildingPostNr.id = "buildingPostNumber";
buildingPostNr.classList = "test";
buildingPostNr.setAttribute('type', 'text');
parent.appendChild(buildingPostNr);

var br4 = document.createElement('br');
parent.appendChild(br4);

var node3 = document.createTextNode('Plass:');
node3.id = 'Text';
parent.appendChild(node3);

var buildingSted = document.createElement('input');
buildingSted.id = "buildingPlace";
buildingSted.classList = "test";
buildingSted.setAttribute('type', 'text');
parent.appendChild(buildingSted);

var br5 = document.createElement('br');
parent.appendChild(br5);

var node4 = document.createTextNode('Kategori:');
node4.id = 'Text';
parent.appendChild(node4);

var buildingKategori = document.createElement('input');
buildingKategori.id = "buildingKategorier";
buildingKategori.classList = "test";
buildingKategori.setAttribute('type', 'text');
parent.appendChild(buildingKategori);

var br6 = document.createElement('br');
parent.appendChild(br6);

var node5 = document.createTextNode('Areal: ');
node5.id = 'Text';
parent.appendChild(node5);

var buildingAreal = document.createElement('input');
buildingAreal.id = "buildingArealer";
buildingAreal.classList = "test";
buildingAreal.setAttribute('type', 'text');
parent.appendChild(buildingAreal);

var br7 = document.createElement('br');
parent.appendChild(br7);

var node6 = document.createTextNode('Oppvarming:');
node6.id = 'Text';
parent.appendChild(node6);

var buildingOppvarming = document.createElement('input');
buildingOppvarming.id = "buildingOppvarmingId";
buildingOppvarming.classList = "test";
buildingOppvarming.setAttribute('type', 'text');
parent.appendChild(buildingOppvarming);

var br8 = document.createElement('br');
parent.appendChild(br8);