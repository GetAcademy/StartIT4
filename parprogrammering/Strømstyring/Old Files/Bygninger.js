
//Arrayen til bygningene
var data = {
    building: [
        {
            name: 'Bergeskoge Barnehage',
            Adresse: "Brekkegata 31",
            PostNr: "3260",
            Sted: "Larvik",
            Kategori: "Barnehage",
            Areal: 724,
            Oppvarming: "El",
        },
        {
            name: 'Valby Grendehus',
            Adresse: "Søvstråveien 44",
            PostNr: "3261",
            Sted: "Larvik",
            Kategori: "Barnehage",
            Areal: 373,
            Oppvarming: "El",
        },
        {
            name: "Solstad Barnehage",
            Adresse: "Agnesveien 14",
            PostNr: "3292",
            Sted: "Stavern",
            Kategori: "Barnehage",
            Areal: 885,
            Oppvarming: "El, Varmepumpe",
        },
        {
            name: "Rødbøl",
            Adresse: "Ganke Ravei 312",
            PostNr: "3267",
            Sted: "Larvik",
            Kategori: "Barnehage",
            Areal: 777,
            Oppvarming: "El, Bio",
        },
    ]
};


// //knappene som viser bygningene
// show();
// function show() {
//     var html = '<ul>';
//     for (let i = 0; i < data.buildings.length; i++) {
//         let building = data.buildings[i];
//         html += `<li>
//             <button onclick="selectBuilding(${i})">${building.name}</button> </b>
//         `;
//     }
//     document.getElementById('buildings').innerHTML = html;

//}
//Henter informasjon fra array
// function selectBuilding(index) {
//     let building = data.buildings[index];
//     document.getElementById('buildings').innerHTML =
//         `<b>
//     Navn: ${building.name}</b><br/>
//     Adresse: ${building.Adresse}</br>
//     PostNr: ${building.PostNr}<br/>
//     Sted: ${building.Sted}<br/>
//     Kategori: ${building.Kategori}<br/>
//     Areal: ${building.Areal}<br/>
//     `;
// }
doStuff()
function doStuff() {
for (let i = 0; i < data.building.length; i++) {
    let building = data.building[i];
    document.getElementById('buildings').innerHTML =
    `<b>
    <tr><td>Navn: ${building.name}</b></td>
    <td>Adresse: ${building.Adresse}</td>
    <td>PostNr: ${building.PostNr}</td>
    <td>Sted: ${building.Sted}</td>
    <td>Kategori: ${building.Kategori}</td>
    <td>Areal: ${building.Areal}</td></tr>
`;}
}   

