var NameArray = ['Navn', 'Adresse', 'Sted', 'Post.Nr', 'Kategori', 'Areal', 'Oppvarming'];



function mainHtml(){
    var display;

}
// <div onclick="homeButton()" class="header" style="cursor:pointer; color: white;">Kommunal Strømstyring</div>
// <div class="menuContainer">
//     <button class="button" onclick="toggleList()">Liste over bygg</button>
//     <button class="button" onclick="toggleLeggTilBygg()">Legg til bygg</button>
//     <button class="button" onclick="toggleMap()">Kart</button>
// </div>


// <div id="main" class="main" style="display:block">Velkommen til Larvik kommune sin kommunale strømstyring
//     side.<br />Vennligst velg:
//     <br />
//     <input id="from" type="datetime-local" value="2019-01-01T00:00" /><br />
//     <input id="to" type="datetime-local" value="2019-01-01T00:00" /><br />
//     <div class="form-group">
//         <div class="dropdown bootstrap-select">
//             <select id="chooseFormat" class="custom-select text-white"
//                 style="background-color:#006EB6; max-width: 22%; text-align: right;">
//                 <option value='Timer'>Timer</option>
//                 <option value='Dager'>Dager</option>
//                 <option value='Måned'>Måned</option>
//                 <option value='År'>År</option>
//             </select>
//         </div>
//     </div>

//     <button type="button" class="btn btn-primary" id="knapp" onclick="setInputValTjueFireTimer()">1
//         døgn</button>
//     <button type="button" class="btn btn-primary" id="knapp" onclick="setInputValEnMnd()">1 måned</button>
//     <button type="button" class="btn btn-primary" id="knapp" onclick="setInputValTreMnd()">3 måneder</button>
//     <button type="button" class="btn btn-primary" id="knapp" onclick="setInputValSeksMnd()">6 måneder</button>
//     <button type="button" class="btn btn-primary" id="knapp" onclick="setInputValTolvMnd()">1 år</button>
//     <br />
//     <button type="button" class="btn btn-primary" id="knapp2" onclick="call()">Lag data</button>

//     <div class="chartContainer1" id="chartContainer1" style="height: 300px; width: 100%;"></div>
// </div>

// <div id="content" style="display:none">
//     <h1>Bygninger</h1>
//     <form id="add-bygg-form">
//         <input type="text" name="navn" placeholder="Navn">
//         <input type="text" name="by" placeholder="By">
//         <input type="text" name="adresse" placeholder="Adresse">
//         <input type="text" name="postnr" placeholder="Post nummer">
//         <input type="text" name="areal" placeholder="Areal">
//         <input type="text" name="oppvarming" placeholder="Oppvarming metode">
//         <input type="text" name="kategori" placeholder="Kategori">

//         <button id="Knapp">Legg til</button>
//     </form>
//     <ul id="bygg-list"></ul>
// </div>
// <div id="map" style="display:none"></div>

// <div id="SearchTable" style="display:none">
//     <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.."
//         title="Type in a name">
//     <table id="myTable"></table>
// </div>

// <div class="footer">Laget av: Per, Henrik, Ibrahim og Adrian</div>











function createSearchHtml() {
    var innerDisplay = '';
    innerDisplay += '<tr class="tableHeader">';
    for (let i = 0; i < NameArray.length; i++) {
        innerDisplay += `<th style="width:14.2%;">${NameArray[i]}</th>`;
    }
    innerDisplay += '</tr>';
    document.getElementById('myTable').innerHTML += innerDisplay;
}