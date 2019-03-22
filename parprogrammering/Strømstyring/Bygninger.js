
//Arrayen til bygningene
var data = {
    buildings: [
        {
            name: 'Bergeskoge Barnehage',
            Adresse: "Brekkegata 31",
            PostNr: "3260",
            Sted: "Larvik",
            Kategori: "Barnehage",
            Areal: 724,
            Oppvarming: "El",
            powerConsumptionHistory: [
                {
                    date: '2019-03-02 14:00',
                    energy: 5.3
                }, {
                    date: '2019-03-02 13:00',
                    energy: 4.3
                },
            ]
        },
        {
            name: 'Valby Grendehus',
            Adresse: "Søvstråveien 44",
            PostNr: "3261",
            Sted: "Larvik",
            Kategori: "Barnehage",
            Areal: 373,
            Oppvarming: "El",
            powerConsumptionHistory: [
                {
                    date: '2019-03-02 14:00',
                    energy: 5.3
                }, {
                    date: '2019-03-02 13:00',
                    energy: 4.3
                },
            ]
        },
        {
            name: "Solstad Barnehage",
            Adresse: "Agnesveien 14",
            PostNr: "3292",
            Sted: "Stavern",
            Kategori: "Barnehage",
            Areal: 885,
            Oppvarming: "El, Varmepumpe",
            powerConsumptionHistory: [
                {
                    date: '2019-03-02 14:00',
                    energy: 5.3
                }, {
                    date: '2019-03-02 13:00',
                    energy: 4.3
                }, 
            ]
        },
        {
            name: "Rødbøl",
            Adresse: "Ganke Ravei 312",
            PostNr: "3267",
            Sted: "Larvik",
            Kategori: "Barnehage",
            Areal: 777,
            Oppvarming: "El, Bio",
            powerConsumptionHistory: [
                {
                    date: '2019-03-02 15.00',
                    energy: 8.3
                }, {
                    date: '2019-03-02 16.00',
                    energy: 3.8
                },
            ]
        },    
    ]   
};


//knappene som viser bygningene
show();
function show() {
    var html = '<ul>';
    for (let i = 0; i < data.buildings.length; i++) {
        let building = data.buildings[i];
        html += `<li>
            <button onclick="selectBuilding(${i})">${building.name}</button> </b>
        `;
    }
    document.getElementById('buildings').innerHTML = html;

}
//Henter informasjon fra array
function selectBuilding(index) {
    let building = data.buildings[index];
    document.getElementById('buildings').innerHTML = 
    `<b>
    Navn: ${building.name}</b><br/>
    Adresse: ${building.Adresse}</br>
    PostNr: ${building.PostNr}<br/>
    Sted: ${building.Sted}<br/>
    Kategori: ${building.Kategori}<br/>
    Areal: ${building.Areal}<br/>
    `;
}

