//This is a converter. The random dataset we created did not use the
//same method of listing day and consumption as the graph we're using.
//This script converts it to the correct format.


var uglyData = [
    { "date": "2019-01-01T09:00:00.000Z", "power": 13.0170341476524865 },
    { "date": "2019-01-01T10:00:00.000Z", "power": 21.335133189406978 },
    { "date": "2019-01-01T11:00:00.000Z", "power": 34.681311771082061 },
    { "date": "2019-01-01T12:00:00.000Z", "power": 37.329849325552704 },
    { "date": "2019-01-01T13:00:00.000Z", "power": 43.108685555312149 },
    { "date": "2019-01-01T14:00:00.000Z", "power": 36.1204850243826803 },
    { "date": "2019-01-01T15:00:00.000Z", "power": 37.0485753783152942 },
    { "date": "2019-01-01T16:00:00.000Z", "power": 32.9005911195845746 },
    { "date": "2019-01-01T17:00:00.000Z", "power": 25.345465692511018 },
    { "date": "2019-01-01T18:00:00.000Z", "power": 36.0519657349468616 },
    { "date": "2019-01-01T19:00:00.000Z", "power": 32.4081153721599833 },
    { "date": "2019-01-01T20:00:00.000Z", "power": 36.097169508706444 },
    { "date": "2019-01-01T21:00:00.000Z", "power": 38.9252574626441064 },
    { "date": "2019-01-01T22:00:00.000Z", "power": 33.67969001017535 },
    { "date": "2019-01-01T23:00:00.000Z", "power": 29.9707166043901645 },
    { "date": "2019-01-02T00:00:00.000Z", "power": 26.074340948519437 },
    { "date": "2019-01-02T01:00:00.000Z", "power": 38.2553659303137295 },
    { "date": "2019-01-02T02:00:00.000Z", "power": 34.2446012486947926 },
    { "date": "2019-01-02T03:00:00.000Z", "power": 42.082809222091423 },
    { "date": "2019-01-02T04:00:00.000Z", "power": 35.7290543023221083 },
    { "date": "2019-01-02T05:00:00.000Z", "power": 37.9748108132795847 },
    { "date": "2019-01-02T06:00:00.000Z", "power": 33.7757491752785866 },
    { "date": "2019-01-02T07:00:00.000Z", "power": 36.3555119416752444 },
    { "date": "2019-01-02T08:00:00.000Z", "power": 34.2329193644859684 },
    { "date": "2019-01-02T09:00:00.000Z", "power": 36.7750401367609214 }
];
var niceData = convert(uglyData);
//console.log(niceData);
var perDayData = convertToPerDay(niceData);
console.log(perDayData);

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
    for (let value of someData) {
        let date = value.x;
        let power = value.y;
        date = date.toLocaleDateString();
        // let monthAndYear = date.getMonth() + 1 + '.' + date.getYear();
        // let week = date.getWeek();
        // let year = date.getYear();
        let dataObj = findOrCreateDataObjectFromDate(newData, date);
        dataObj.y += power;
    }
    return newData;
}

function findOrCreateDataObjectFromDate(dataList, date) {
    for (let value of dataList) {
        if (value.x == date) {
            return value;
        }
    }
    let newObj = {x: date, y: 0};
    dataList.push(newObj);
    return newObj;
}
//
var uglyData1 = [
        {"date":"2019-01-01T09:00:00.000Z","power":52.83010481114612},
        {"date":"2019-01-01T10:00:00.000Z","power":58.50544575676938},
        {"date":"2019-01-01T11:00:00.000Z","power":59.980967838219165},
        {"date":"2019-01-01T12:00:00.000Z","power":67.30552432744504},
        {"date":"2019-01-01T13:00:00.000Z","power":52.41821998957042},
        {"date":"2019-01-01T14:00:00.000Z","power":63.490425183938484},
        {"date":"2019-01-01T15:00:00.000Z","power":74.97576228534462},
        {"date":"2019-01-01T16:00:00.000Z","power":64.52166946258198},
        {"date":"2019-01-01T17:00:00.000Z","power":61.39581985368744},
        {"date":"2019-01-01T18:00:00.000Z","power":55.599694998846736},
        {"date":"2019-01-01T19:00:00.000Z","power":72.53963288600781},
        {"date":"2019-01-01T20:00:00.000Z","power":57.23620558413538},
        {"date":"2019-01-01T21:00:00.000Z","power":67.73961142245976},
        {"date":"2019-01-01T22:00:00.000Z","power":52.69308512559759},
        {"date":"2019-01-01T23:00:00.000Z","power":54.986852011701444},
        {"date":"2019-01-02T00:00:00.000Z","power":57.31869853194377},
        {"date":"2019-01-02T01:00:00.000Z","power":74.26259622145898},
        {"date":"2019-01-02T02:00:00.000Z","power":74.3061680925232},
        {"date":"2019-01-02T03:00:00.000Z","power":59.244551726987574},
        {"date":"2019-01-02T04:00:00.000Z","power":67.6904365340878},
        {"date":"2019-01-02T05:00:00.000Z","power":52.25871775325627},
        {"date":"2019-01-02T06:00:00.000Z","power":72.04559526623311},
        {"date":"2019-01-02T07:00:00.000Z","power":68.29257833512393},
        {"date":"2019-01-02T08:00:00.000Z","power":56.09121002149655},
        {"date":"2019-01-02T09:00:00.000Z","power":67.26274512975927},   
];
var niceData1 = convert(uglyData1);

function convert(myArray) {
    var data1 = [];
    for (let obj of myArray) {
        data1.push({
            x: new Date(obj.date),
            y: obj.power
        });
    }
    return data1;
}
//
var uglyData2 = [
    {"date":"2019-01-01T09:00:00.000Z","power":21.413851557807636},
    {"date":"2019-01-01T10:00:00.000Z","power":27.851092644967938},
    {"date":"2019-01-01T11:00:00.000Z","power":22.84067119177176},
    {"date":"2019-01-01T12:00:00.000Z","power":22.399378416085288},
    {"date":"2019-01-01T13:00:00.000Z","power":24.970555384089792},
    {"date":"2019-01-01T14:00:00.000Z","power":25.328525098298527},
    {"date":"2019-01-01T15:00:00.000Z","power":24.39363902658989},
    {"date":"2019-01-01T16:00:00.000Z","power":22.544095079432196},
    {"date":"2019-01-01T17:00:00.000Z","power":28.17622253641872},
    {"date":"2019-01-01T18:00:00.000Z","power":21.6401956960167},
    {"date":"2019-01-01T19:00:00.000Z","power":28.36660729644929},
    {"date":"2019-01-01T20:00:00.000Z","power":26.45550262661978},
    {"date":"2019-01-01T21:00:00.000Z","power":25.70410131925511},
    {"date":"2019-01-01T22:00:00.000Z","power":29.153286188868808},
    {"date":"2019-01-01T23:00:00.000Z","power":25.754626439247204},
    {"date":"2019-01-02T00:00:00.000Z","power":27.147644060489586},
    {"date":"2019-01-02T01:00:00.000Z","power":28.87806854768238},
    {"date":"2019-01-02T02:00:00.000Z","power":29.412366872895134},
    {"date":"2019-01-02T03:00:00.000Z","power":26.454766857769577},
    {"date":"2019-01-02T04:00:00.000Z","power":22.86084077199443},
    {"date":"2019-01-02T05:00:00.000Z","power":28.778370129870524},
    {"date":"2019-01-02T06:00:00.000Z","power":28.426472349977807},
    {"date":"2019-01-02T07:00:00.000Z","power":25.915473651028194},
    {"date":"2019-01-02T08:00:00.000Z","power":25.77776625053085},
    {"date":"2019-01-02T09:00:00.000Z","power":21.972176365486387},  
];
var niceData2 = convert(uglyData2);

function convert(myArray) {
var data2 = [];
for (let obj of myArray) {
    data2.push({
        x: new Date(obj.date),
        y: obj.power
    });
}
return data2;
}

//

var uglyData3 = [
    {"date":"2019-01-01T09:00:00.000Z","power":42.02532077103846},
    {"date":"2019-01-01T10:00:00.000Z","power":31.167908349321856},
    {"date":"2019-01-01T11:00:00.000Z","power":43.40254766184393},
    {"date":"2019-01-01T12:00:00.000Z","power":38.300662914014126},
    {"date":"2019-01-01T13:00:00.000Z","power":37.161691314660786},
    {"date":"2019-01-01T14:00:00.000Z","power":33.51510058172927},
    {"date":"2019-01-01T15:00:00.000Z","power":41.450537964246045},
    {"date":"2019-01-01T16:00:00.000Z","power":38.918024958598956},
    {"date":"2019-01-01T17:00:00.000Z","power":32.01139521070929},
    {"date":"2019-01-01T18:00:00.000Z","power":40.373085386094054},
    {"date":"2019-01-01T19:00:00.000Z","power":41.12825952909069},
    {"date":"2019-01-01T20:00:00.000Z","power":30.96717917022403},
    {"date":"2019-01-01T21:00:00.000Z","power":34.86495808738146},
    {"date":"2019-01-01T22:00:00.000Z","power":31.045468574995635},
    {"date":"2019-01-01T23:00:00.000Z","power":34.06306546165517},
    {"date":"2019-01-02T00:00:00.000Z","power":34.89521586252374},
    {"date":"2019-01-02T01:00:00.000Z","power":37.27368348297334},
    {"date":"2019-01-02T02:00:00.000Z","power":33.00340350610499},
    {"date":"2019-01-02T03:00:00.000Z","power":36.63824952384465},
    {"date":"2019-01-02T04:00:00.000Z","power":34.764173366985936},
    {"date":"2019-01-02T05:00:00.000Z","power":37.84613630979191},
    {"date":"2019-01-02T06:00:00.000Z","power":40.49072585755674},
    {"date":"2019-01-02T07:00:00.000Z","power":42.66596817580183},
    {"date":"2019-01-02T08:00:00.000Z","power":34.06816046811542},
    {"date":"2019-01-02T09:00:00.000Z","power":36.346015986763945},
];
var niceData3 = convert(uglyData3);

function convert(myArray) {
var data3 = [];
for (let obj of myArray) {
    data3.push({
        x: new Date(obj.date),
        y: obj.power
    });
}
return data3;
}