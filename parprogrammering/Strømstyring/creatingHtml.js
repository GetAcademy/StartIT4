var NameObject = {
    list: ['Navn', 'Adresse', 'Sted', 'Post.Nr', 'Kategori', 'Areal', 'Oppvarming'],
    selectValues: ['Timer', 'Dager', 'Måned', 'År'],
    buttonPrefixNames: ['1 Døgn', '1 måned', '3 måneder', '6 måneder', '1 år', 'Lag data'],
    buttonPrefixesFunctions: ['setInputValTjueFireTimer()', 'setInputValEnMnd()', 'setInputValTreMnd()', 'setInputValSeksMnd()', 'setInputValTolvMnd()', 'call()'],
    fireDisplayNames: ['navn', 'by', 'adresse', 'postnr', 'areal', 'oppvarming', 'kategori'],
    fireDisplayPlaceholders: ['Navn', 'By', 'Adresse', 'Post nummer', 'Areal', 'Oppvarming', 'Kategori'],
};


function createMainHtml() {
    var mainDisplay = '';
    mainDisplay += `Velkommen til Larvik kommune sin kommunale strømstyring
            side.
        <br />Vennligst velg: 
        <br />
            <input id="from" type="datetime-local" value="2019-01-01T00:00" /> <br />
            <input id="to" type="datetime-local" value="2019-01-01T00:00" /> <br />
            <div class="form-group">
                <div class="dropdown bootstrap-select">
                    <select id="chooseFormat" class="custom-select text-white" style="background-color:#006EB6; max-width: 22%; text-align: right;">`;
    for (let i = 0; i < NameObject.selectValues.length; i++) {
        mainDisplay += `<option value='${NameObject.selectValues[i]}'>${NameObject.selectValues[i]}</option>`;
    }
    mainDisplay += `
                    </select>
                </div>
            </div>`;
    for (let j = 0; j < NameObject.buttonPrefixNames.length; j++) {
        if (j % 5 == 0) mainDisplay += '<br />';
        mainDisplay += `<button type="button" class="btn btn-primary" id="knapp"onclick="${NameObject.buttonPrefixesFunctions[j]}">${NameObject.buttonPrefixNames[j]}</button>`;
    }
    mainDisplay += `<div class="chartContainer1" id="chartContainer1" style="height: 300px; width: 100%;"></div>`;
    document.getElementById('main').innerHTML = mainDisplay;
}



function createSearchHtml() {
    var innerDisplay = '';
    innerDisplay += '<tr class="tableHeader">';
    for (let i = 0; i < NameObject.list.length; i++) {
        innerDisplay += `<th style="width:14.2%;">${NameObject.list[i]}</th>`;
    }
    innerDisplay += '</tr>';
    document.getElementById('myTable').innerHTML += innerDisplay;
}

function createFireBaseHTML() {
    var fireDisplay = '';
    fireDisplay += `
    <h1>Bygninger</h1>
        <form id="add-bygg-form">`;
    for (let i = 0; i < NameObject.fireDisplayNames.length; i++) {
        fireDisplay += `<input type="text" name="${NameObject.fireDisplayNames[i]}" 
        placeholder="${NameObject.fireDisplayPlaceholders[i]}">`;
    }
    fireDisplay += `
            <button id="Knapp">Legg til</button>
        </form>
        <ul id="bygg-list"></ul>
    `;
    document.getElementById('content').innerHTML = fireDisplay;
}
