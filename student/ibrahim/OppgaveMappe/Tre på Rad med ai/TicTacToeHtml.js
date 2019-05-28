function createHtml() {
    var display = '';
    for (let row = 0; row < 3; row++) {
        display += '<tr>';
        for (let i = 0; i < 3; i++) {
            display += `<td class=" cell " id="${Math.floor(Math.random(1000) * 1000)}"></td>`;
        }
        display += '</tr>'
    }
    document.getElementById('htmlTable').innerHTML += display;
}