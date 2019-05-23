var uglyData = buildings;
var uglyData2 = buildings2;
var uglyData3 = buildings3;
var uglyData4 = buildings4;


var niceData;
var niceData2;
var niceData3;
var niceData4;


//console.log(niceData);
var perDayData;
var perDayData2;
var perDayData3;
var perDayData4;



var perMonthData;
var perMonthData2;
var perMonthData3;
var perMonthData4;


var perYearData;
var perYearData2;
var perYearData3;
var perYearData4;



console.log(perMonthData)

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

function ConvertToPerMonthData(someData2) {
    let newData2 = [];
    let currentDateData2 = null;
    for (let value of someData2) {
        let dateWithoutTimeAndDays = new Date(value.x.setDate(0));
        if (currentDateData2 == null ||
            currentDateData2.x.getDay() != dateWithoutTimeAndDays.getDay()) {
            currentDateData2 = { x: dateWithoutTimeAndDays, y: 0 };
            newData2.push(currentDateData2);
        }
        currentDateData2.y += value.y;
    }
    return newData2;
}

function convertToPerYearData(someData3) {
    let newData3 = [];
    let currentDateData3 = null;
    for (let value of someData3) {
        let dateWithoutTimeAndDaysAndMonths = new Date(value.x.setMonth(0));
        if (currentDateData3 == null ||
            currentDateData3.x.getFullYear() != dateWithoutTimeAndDaysAndMonths.getFullYear()) {
            currentDateData3 = { x: dateWithoutTimeAndDaysAndMonths, y: 0 };
            newData3.push(currentDateData3);
        }
        currentDateData3.y += value.y
    }
    return newData3;
}

