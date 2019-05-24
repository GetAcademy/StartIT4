var NameArray = ['Navn', 'Adresse', 'Sted', 'Post.Nr', 'Kategori', 'Areal', 'Oppvarming'];

// function 

/* <h1>Bygninger</h1>
    <form id="add-bygg-form">
        <input type="text" name="navn" placeholder="Navn">
            <input type="text" name="by" placeholder="By">
                <input type="text" name="adresse" placeholder="Adresse">
                    <input type="text" name="postnr" placeholder="Post nummer">
                        <input type="text" name="areal" placeholder="Areal">
                            <input type="text" name="oppvarming" placeholder="Oppvarming metode">
                                <input type="text" name="kategori" placeholder="Kategori">

                                    <button id="Knapp">Legg til</button>
            </form>
                                <ul id="bygg-list"></ul> */












function createSearchHtml() {
    var innerDisplay = '';
    innerDisplay += '<tr class="tableHeader">';
    for (let i = 0; i < NameArray.length; i++) {
        innerDisplay += `<th style="width:14.2%;">${NameArray[i]}</th>`;
    }
    innerDisplay += '</tr>';
    document.getElementById('myTable').innerHTML += innerDisplay;
}