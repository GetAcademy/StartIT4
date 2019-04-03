//model
var buildings = [
    {
        Navn: 'Bergeskoge Barnehage',
        Adresse: "Brekkegata 31",
        PostNr: "3260",
        Sted: "Larvik",
        Kategori: "Barnehage",
        Areal: 724,
        Oppvarming: "El"
    },
    {
        Navn: 'Bergeskoge Barnehage',
        Adresse: "Brekkegata 31", 
        PostNr: "3260", 
        Sted: "Larvik", 
        Kategori: "Barnehage", 
        Areal: 724, 
        Oppvarming: "El"
    },
];

//controller
var buildingNameInput = document.getElementById('buildingNames');
var buildingAdressInput = document.getElementById('buildingAdresses');
var buildingPostNrInput = document.getElementById('buildingPostNumber');
var buildingStedInput = document.getElementById('buildingPlace');
var buildingKategoriInput = document.getElementById('buildingKategorier');
var buildingArealInput = document.getElementById('buildingArealer');
var buildingOppvarmingInput = document.getElementById('buildingOppvarmingId');

function addBuilding() {
    buildings.push({
        Navn: buildingNameInput.value,
        Adresse: buildingAdressInput.value,
        PostNr: buildingPostNrInput.value,
        Sted: buildingStedInput.value,
        Kategori: buildingKategoriInput.value,
        Areal: buildingArealInput.value,
        Oppvarming: buildingOppvarmingInput.value

    });
    buildingNameInput.value = '';
    buildingAdressInput.value = '';
    buildingPostNrInput.value = '';
    buildingStedInput.value = '';
    buildingKategoriInput.value = '';
    buildingArealInput.value = '';
    buildingOppvarmingInput.value = '';
    buildingsShow();
}


//view
var buildingsTable = document.getElementById('buldingTable');
buildingsShow();

function buildingsShow() {
    let html = `
                <tr>
                    <th>Navn På Byggning</th>
                    <th>Adresse På Byggning</th>
                    <th>PostNR På Byggning</th>
                    <th>Sted På Byggning</th>
                    <th>Kategori På Byggning</th>
                    <th>Areal På Byggning</th>
                    <th>Oppvarmings Metode På Byggning</th>
                    <th></th>
                </tr>`;
    for (let i = 0; i < buildings.length; i++) {
        html += createHtmlRow(i);
    }
    buildingsTable.innerHTML = html;
}
function createHtmlRow(i) {
    const building = buildings[i];

    if (!building.editMode)
        return `<tr>
                    <td>${building.Navn}</td>
                    <td>${building.Adresse}</td>
                    <td>${building.PostNr}</td>
                    <td>${building.Sted}</td>
                    <td>${building.Kategori}</td>
                    <td>${building.Areal}</td>
                    <td>${building.Oppvarming}</td>
                        <td>
                            <button style="width: 100px; height:20px;" onclick="deleteBuilding(${i})">Slett</button>
                            <button style="width: 100px; height:20px;" onclick="editBuilding(${i})">Rediger</button>
                        </td>
                    </tr>
                `;
    return `<tr>
                            <td><input id="editName${i}" type="text" value="${building.Navn}"/></td>
                            <td><input id="editAdress${i}" type="text" value="${building.Adresse}"/></td>
                            <td><input id="editPostNr${i}" type="text" value="${building.PostNr}"/></td>
                            <td><input id="editPlace${i}" type="text" value="${building.Sted}"/></td>
                            <td><input id="editCategory${i}" type="text" value="${building.Kategori}"/></td>
                            <td><input id="editAreal${i}" type="text" value="${building.Areal}"/></td>
                            <td><input id="editHeating${i}" type="text" value="${building.Oppvarming}"/></td>
                                <td>
                                    <button style="width: 100px; height:20px;" onclick="updateBuilding(${i})">Lagre</button>
                                </td>
                            </tr>
                        `;
}
function deleteBuilding(index) {
    buildings.splice(index, 1);
    buildingsShow();
}
function editBuilding(index) {
    buildings[index].editMode = true;
    buildingsShow();
}
function updateBuilding(index) {
    const id = `editName${index}`;
    const id2 = `editAdress${index}`
    const id3 = `editPostNr${index}`
    const id4 = `editPlace${index}`
    const id5 = `editCategory${index}`
    const id6 = `editAreal${index}`
    const id7 = `editHeating${index}`
    const inputTag = document.getElementById(id);
    const inputTag2 = document.getElementById(id2);
    const inputTag3 = document.getElementById(id3);
    const inputTag4 = document.getElementById(id4);
    const inputTag5 = document.getElementById(id5);
    const inputTag6 = document.getElementById(id6);
    const inputTag7 = document.getElementById(id7);
    const building = buildings[index];
    building.Navn = inputTag.value;
    building.Adresse = inputTag2.value;
    building.PostNr = inputTag3.value;
    building.Sted = inputTag4.value;
    building.Kategori = inputTag5.value;
    building.Areal = inputTag6.value;
    building.Oppvarming = inputTag7.value;
    building.editMode = false;
    buildingsShow();
}