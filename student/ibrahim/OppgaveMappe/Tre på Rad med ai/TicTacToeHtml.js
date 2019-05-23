function createHtml(){
    var display = '';
    display += '<tr>';
    for (let i = 0; i < 9; i++){
        let first = i % 3 === 0;
        first = 'first';
        let tr = i % 3 === 0;
        if(tr === 0) return '<tr>';
        if(tr === 3) return '</tr>';
        display += `<td class="cell ${first}" id="${i}"></td>`;
    }

    document.getElementById('htmlTable').innerHTML += display;
}