
var uglyData = [
    { "date": "2019-01-01T09:00:00.000Z", "power": 43.0170341476524865 },
    { "date": "2019-01-01T10:00:00.000Z", "power": 41.335133189406978 },
    { "date": "2019-01-01T11:00:00.000Z", "power": 34.681311771082061 },
    { "date": "2019-01-01T12:00:00.000Z", "power": 37.329849325552704 },
    { "date": "2019-01-01T13:00:00.000Z", "power": 43.108685555312149 },
    { "date": "2019-01-01T14:00:00.000Z", "power": 36.1204850243826803 },
    { "date": "2019-01-01T15:00:00.000Z", "power": 37.0485753783152942 },
    { "date": "2019-01-01T16:00:00.000Z", "power": 32.9005911195845746 },
    { "date": "2019-01-01T17:00:00.000Z", "power": 45.345465692511018 },
    { "date": "2019-01-01T18:00:00.000Z", "power": 36.0519657349468616 },
    { "date": "2019-01-01T19:00:00.000Z", "power": 32.4081153721599833 },
    { "date": "2019-01-01T20:00:00.000Z", "power": 36.097169508706444 },
    { "date": "2019-01-01T21:00:00.000Z", "power": 38.9252574626441064 },
    { "date": "2019-01-01T22:00:00.000Z", "power": 33.67969001017535 },
    { "date": "2019-01-01T23:00:00.000Z", "power": 39.9707166043901645 },
    { "date": "2019-01-02T00:00:00.000Z", "power": 36.074340948519437 },
    { "date": "2019-01-02T01:00:00.000Z", "power": 48.2553659303137295 },
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
