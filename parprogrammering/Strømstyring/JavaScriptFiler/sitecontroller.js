function homeButton(){
    window.location.reload()
}
function toggleMap() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('content').style.display = 'none';
    document.getElementById('SearchTable').style.display = "none";
    document.getElementById('map').style.display = 'block';
}

function toggleList() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('content').style.display = 'none';
    document.getElementById('map').style.display = 'none';
    document.getElementById('SearchTable').style.display = "block";
}
function toggleLeggTilBygg() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('map').style.display = 'none';
    document.getElementById('SearchTable').style.display = "none";
    document.getElementById('content').style.display = 'block';
}
function call() {
    niceData = null;
    createData();
    updateChart();
    console.log(perDayData);
    console.log(niceData);
}