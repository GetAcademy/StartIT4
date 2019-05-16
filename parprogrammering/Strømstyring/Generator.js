var buildings = [];
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
                power: randomPower(power)

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
    document.getElementById('from').value = "2019-01-01T00:01";
    document.getElementById('to').value = "2019-01-31T23:59";
}
function setInputValTreMnd() {
    document.getElementById('from').value = "2019-01-01T00:01";
    document.getElementById('to').value = "2019-03-31T23:59";
}
function setInputValSeksMnd() {
    document.getElementById('from').value = "2019-01-01T00:01";
    document.getElementById('to').value = "2019-05-31T23:59";
}
function setInputValTolvMnd() {
    document.getElementById('from').value = "2019-01-01T00:01";
    document.getElementById('to').value = "2019-12-31T23:59";
}
function setInputValTjueFireTimer() {
    document.getElementById('from').value = "2019-01-01T00:01";
    document.getElementById('to').value = "2019-01-01T23:59";
}