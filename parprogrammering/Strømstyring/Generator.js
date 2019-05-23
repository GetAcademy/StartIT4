var buildings = [];
var buildings2 = [];
var buildings3 = [];
var buildings4 = [];


function createData() {
    const timeFrom = document.getElementById('from').value;
    const timeTo = document.getElementById('to').value;
    const dateFrom = new Date(timeFrom);
    const dateTo = new Date(timeTo);

    for (let buildingNo = 1; buildingNo < 2; buildingNo++) {
        let power = randomPower(10 + Math.random() * 60);
        for (let myDate = dateFrom; myDate <= dateTo; myDate = addOneHour(myDate)) {

            buildings.push({
                date: myDate.toISOString(),
                power: randomPower(power),
                squareMeters: power / 700,
            });
            buildings2.push({
                date: myDate.toISOString(),
                power: randomPower(power),
                squareMeters: power / 700,
            });
            buildings3.push({
                date: myDate.toISOString(),
                power: randomPower(power),
                squareMeters: power / 700,
            });
            buildings4.push({
                date: myDate.toISOString(),
                power: randomPower(power),
                squareMeters: power / 700,
            });

        }

    }

}

function randomPower(oldValue) {
    return (Math.random() * 0.4 + 0.8) * oldValue;
}

function addOneHour(oldDate) {
    const newDate = new Date();
    newDate.setTime(oldDate.getTime() + 1000 * 60 * 60);
    return newDate;
}

function setInputValEnMnd() {
    document.getElementById('chooseFormat').options[0].disabled = true;
    document.getElementById('chooseFormat').selectedIndex = '1';
    document.getElementById('from').value = "2020-01-01T00:01";
    document.getElementById('to').value = "2020-01-31T23:59";
}
function setInputValTreMnd() {
    document.getElementById('chooseFormat').options[0].disabled = true;
    document.getElementById('chooseFormat').selectedIndex = '1';
    document.getElementById('from').value = "2020-01-01T00:01";
    document.getElementById('to').value = "2020-03-31T23:59";
}
function setInputValSeksMnd() {
    document.getElementById('chooseFormat').options[0].disabled = true;
    document.getElementById('chooseFormat').selectedIndex = '1';
    document.getElementById('from').value = "2020-01-01T00:01";
    document.getElementById('to').value = "2020-05-31T23:59";
}
function setInputValTolvMnd() {
    document.getElementById('chooseFormat').options[0].disabled = true;
    document.getElementById('chooseFormat').options[1].disabled = true;
    document.getElementById('chooseFormat').selectedIndex = '2';
    document.getElementById('from').value = "2020-01-01T00:01";
    document.getElementById('to').value = "2020-12-31T23:59";
}
function setInputValTjueFireTimer() {
    document.getElementById('chooseFormat').options[1].disabled = true;
    document.getElementById('chooseFormat').options[2].disabled = true;
    document.getElementById('chooseFormat').options[3].disabled = true;
    document.getElementById('chooseFormat').selectedIndex = '0';
    document.getElementById('from').value = "2020-01-01T00:01";
    document.getElementById('to').value = "2020-01-01T23:59";
}