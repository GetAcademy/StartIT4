function testOnLoad() {
    document.getElementById('info').innerHTML += '<li>onload</li>';
    console.log();
}
function testOnChange() {
    document.getElementById('info').innerHTML += '<li>onchange</li>';
}
function testOnInput() {
    document.getElementById('info').innerHTML += '<li>oninput</li>';
}
function testOnMouseOver() {
    document.getElementById('info').innerHTML += '<li>onmouseover</li>';
}
function testOnMouseOut() {
    document.getElementById('info').innerHTML += '<li>onmouseout</li>';
}