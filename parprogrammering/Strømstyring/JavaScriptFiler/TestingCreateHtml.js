var NameArray = [
    ['Navn', 'Adresse', 'Sted', 'Post.Nr', 'Kategori', 'Areal', 'Oppvarming'],
    ['Liste Over Bygg', 'Legg til bygg', 'Kart'],
    ['toggleList()', 'toggleLeggTilBygg()', 'toggleMap()'],
    ['Timer', 'Dager', 'Måned', 'År'],
    ['1 Døgn', '1 måned', '3 måneder', '6 måneder', '1 år'],
    ['setInputValTjueFireTimer()', 'setInputValEnMnd()', 'setInputValTreMnd()', 'setInputValSeksMnd()', 'setInputValTolvMnd()'],
    ['Navn', 'By', 'Adresse', 'Post nummer', 'Areal', 'Oppvarming metode', 'Kategori'],
    ['navn', 'by', 'adresse', 'postnr', 'areal', 'oppvarming', 'kategori'],
];
// window.onload =  mainHtml();

function mainHtml() {
    var display;
    let listNames = NameArray[0];
    let buttonNames = NameArray[1];
    let functionNames = NameArray[2];
    let selectValues = NameArray[3];
    let buttonPreFixesNames = NameArray[4];
    let buttonPreFixesFunctionNames = NameArray[5];
    let BuildingStuffNames = NameArray[6];
    let OtherBuildingsNames = NameArray[7];

    display += `<div onclick="homeButton()" class="header" style="cursor:pointer; color: white;">Kommunal Strømstyring</div>
                <div class="menuContainer">`;
    for (let i = 0; i < buttonNames.length; i++) {
        display += `<button class="button" onclick="${functionNames[i]}">${buttonNames[i]}</button>`;
    }
    display += `</div>
    <div id="main" class="main" style="display:block">Velkommen til Larvik kommune sin kommunale strømstyring
        side.<br />Vennligst velg:
        <br />
        <input id="from" type="datetime-local" value="2019-01-01T00:00" /><br />
        <input id="to" type="datetime-local" value="2019-01-01T00:00" /><br />
        <div class="form-group">
            <div class="dropdown bootstrap-select">
            <select id="chooseFormat" class="custom-select text-white"style="background-color:#006EB6; max-width: 22%; text-align: right;">
            `;
    for (let j = 0; j < selectValues.length; j++) {
        display += `<option value="${selectValues[j]}">${selectValues[j]}</option>`;
    }
    display += `</select>
            </div>
        </div>`;
    display += `<div>`;
    for (let k = 0; k < buttonPreFixesNames.length; k++) {
        display += `<button type="button" class="btn btn-primary" id="knapp" onclick="${buttonPreFixesFunctionNames[k]}">
                    ${buttonPreFixesNames[k]}</button>`;
    }
    display += `<br />
                     <button type="button" class="btn btn-primary" id="knapp2" onclick="call()">Lag data</button>
                
                     <div class="chartContainer1" id="chartContainer1" style="height: 300px; width: 100%;"></div>
                 </div>
                 <div id="content" style="display:none">
                    <h1>Bygninger</h1>
                    <form id="add-bygg-form">`;
    for (let o = 0; o < BuildingStuffNames.length; o++) {
        display += `<input type="text" name="${OtherBuildingsNames[o]}" placeholder="${BuildingStuffNames[o]}">`;
    }
    display += `<button id="Knapp">Legg til</button>
                     </form> 
                     <ul id="bygg-list"></ul>
                    </div>
                    <div id="map" style="display:none"></div>

                    <div id="SearchTable" style="display:none">
                        <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.."
                            title="Type in a name">
                        <table id="myTable">
                            <tr class="tableHeader">`;
    for (let p = 0; p < listNames.length; p++) {
        display += `<th style="width:14.2%;">${listNames[p]}</th>`;
    }
    display += `</tr>
                            </table>
                    </div>
                    
                    <div class="footer">Laget av: Per, Henrik, Ibrahim og Adrian</div>`;

    document.getElementById('Container').innerHTML += display;
}

mainHtml();
