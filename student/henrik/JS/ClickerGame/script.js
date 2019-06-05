var imageDiv = document.getElementById("image");
var pointsDiv = document.getElementById("pointsInfo");
var upgrade = document.getElementById("oppgrader")

//model
var points = 0;
var pointsPerClick = 1;
var upgradeCost = 10
//controller
function changeImage() {
    points += pointsPerClick;
    show();
}

function buyUpgrade() {
    if (points < upgradeCost) return;
    points -= upgradeCost;
    upgradeCost = upgradeCost + 5
    upgrade.innerHTML = 'Oppgrader! ' + Math.ceil(upgradeCost) + 'poeng';
    pointsPerClick++;
    show();
}


//view 
show()
function show() {
    imageDiv.innerHTML = points % 2 === 0 ? "😃" : '😀';
    pointsDiv.innerHTML = points;

}