var uglyData = buildings;

var niceData = [];
//console.log(niceData);
var perDayData = [];

function convert(myArray) {
    var data = [];
    for (let obj of myArray) {
        data.push({
            x: new Date(obj.date),
            y: obj.power
            
        });

    }
    return data;
}

function convertToPerDay(someData) {
    let newData = [];
    let currentDateData = null;
    for (let value of someData) {
        let dateWithoutTime = new Date(value.x.setHours(0));
        if (currentDateData == null ||
            currentDateData.x.getTime() != dateWithoutTime.getTime()) {
            currentDateData = { x: dateWithoutTime, y: 0 };
            newData.push(currentDateData);
        }
        currentDateData.y += value.y;
    }
    return newData;
}

function calculateAreal(){
    return (y.value / building.areal);
    
}