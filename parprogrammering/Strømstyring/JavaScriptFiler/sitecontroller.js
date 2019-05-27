function homeButton(){
    document.getElementById('content').style.display = 'none';
    document.getElementById('SearchTable').style.display = "none";
    document.getElementById('map').style.display = 'none'; 
    document.getElementById('main').style.display = 'block';
    mainHtml();
}

function toggleMap() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('content').style.display = 'none';
    document.getElementById('SearchTable').style.display = "none";
    document.getElementById('map').style.display = 'block';
    mainHtml();
}
function call() {
    createData();
    updateChart();
    console.log(perDayData);
    console.log(niceData);


}
function toggleList() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('content').style.display = 'none';
    document.getElementById('map').style.display = 'none';
    document.getElementById('SearchTable').style.display = "block";
    mainHtml();
}
function toggleLeggTilBygg() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('map').style.display = 'none';
    document.getElementById('SearchTable').style.display = "none";
    document.getElementById('content').style.display = 'block';
    mainHtml();
}
