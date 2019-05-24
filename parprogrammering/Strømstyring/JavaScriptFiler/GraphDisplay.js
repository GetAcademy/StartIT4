var chooseFormat = document.getElementById('chooseFormat');




function updateChart() {
    var chart = new CanvasJS.Chart("chartContainer1", {
        // theme: "light2", // "light1", "light2", "dark1", "dark2"
        animationEnabled: true,
        title: {
            text: "Bruk av strøm"
        },
        subtitles: [{
            text: "Hold musepekeren over punktene for mer informasjon!"
        }],
        axisX: {
            lineColor: "black",
            labelFontColor: "black"
        },
        axisY: {
            includeZero: false,
            gridThickness: 1,
            title: "Power Consumed",
            suffix: " kw/h",
            titleFontColor: "black",
            labelFontColor: "black"
        },
        legend: {
            cursor: "pointer",
            itemmouseover: function (e) {
                e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness * 2;
                e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize + 2;
                e.chart.render();
            },
            itemmouseout: function (e) {
                e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness / 2;
                e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize - 2;
                e.chart.render();
            },
            itemclick: function (e) {
                if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                    e.dataSeries.visible = false;
                } else {
                    e.dataSeries.visible = true;
                }
                e.chart.render();
            }
        },
        toolTip: {
            shared: true
        },
        //Bygningene som er lagt inn legges her.
        //Skal du legge inn fler bygninger, husk å også hente data fra data.js og plugg det inn i dataConverter.js.

        data: [{
            type: "line",
            name: "Bergeskogen Barnehage",
            markerSize: 5,
            xValueFormatString: "DD MM,YY",
            yValueFormatString: "#,##0.0\"kw/h\"",
            showInLegend: true,
            dataPoints: timeFormat(1),
        },
        {
            type: "line",
            name: "Valby Grendehus",
            markerSize: 5,
            xValueFormatString: "DD MM, YY",
            yValueFormatString: "#,##0.0\"kw/h\"",
            showInLegend: true,
            dataPoints: timeFormat(2),
        },
        {
            type: "line",
            name: "Solstad Barnehage",
            markerSize: 5,
            xValueFormatString: "DD MM, YY",
            yValueFormatString: "#,##0.0\"kw/h\"",
            showInLegend: true,
            dataPoints: timeFormat(3),
        },
        {
            type: "line",
            name: "Rødbøl Barnehage",
            markerSize: 5,
            azixYType: "secondary",
            xValueFormatString: "DD MM, YY",
            yValueFormatString: "#,##0.0\"kw/h\"",
            showInLegend: true,
            dataPoints: timeFormat(4),
        }
        ],

    });

    chart.render();
}

function timeFormat(numbers) {
    let x = numbers
    let changeFormat = chooseFormat.value;

    if (x == 1) {
        if (changeFormat == 'Timer') {
            niceData = convert(uglyData);
            return niceData;
        }
        else if (changeFormat == 'Dager') {
            niceData = convert(uglyData);
            perDayData = convertToPerDay(niceData);
            return perDayData;
        }
        else if (changeFormat == 'Måned') {
            niceData = convert(uglyData);
            perMonthData = ConvertToPerMonthData(niceData);
            return perMonthData;
        }
        else if (changeFormat == 'År') {
            niceData = convert(uglyData);
            perYearData = convertToPerYearData(niceData);
            return perYearData;
        }
        updateChart();

    }

    if (x == 2) {
        if (changeFormat == 'Timer') {
            niceData2 = convert(uglyData2);
            return niceData2;
        }
        else if (changeFormat == 'Dager') {
            niceData2 = convert(uglyData2);
            perDayData2 = convertToPerDay(niceData2);
            return perDayData2;
        }
        else if (changeFormat == 'Måned') {
            niceData2 = convert(uglyData2);
            perMonthData2 = ConvertToPerMonthData(niceData2);
            return perMonthData2;
        }
        else if (changeFormat == 'År') {
            niceData2 = convert(uglyData2);
            perYearData2 = convertToPerYearData(niceData2);
            return perYearData2;
        }
        updateChart();

    }
    if (x == 3) {
        if (changeFormat == 'Timer') {
            niceData3 = convert(uglyData3);
            return niceData3;
        }
        else if (changeFormat == 'Dager') {
            niceData3 = convert(uglyData3);
            perDayData3 = convertToPerDay(niceData3);
            return perDayData3;
        }
        else if (changeFormat == 'Måned') {
            niceData3 = convert(uglyData3);
            perMonthData3 = ConvertToPerMonthData(niceData3);
            return perMonthData3;
        }
        else if (changeFormat == 'År') {
            niceData3 = convert(uglyData3);
            perYearData3 = convertToPerYearData(niceData3);
            return perYearData3;
        }
        updateChart();

    }
    if (x == 4) {
        if (changeFormat == 'Timer') {
            niceData4 = convert(uglyData4);
            return niceData4;
        }
        else if (changeFormat == 'Dager') {
            niceData4 = convert(uglyData4);
            perDayData4 = convertToPerDay(niceData4);
            return perDayData4;
        }
        else if (changeFormat == 'Måned') {
            niceData4 = convert(uglyData4);
            perMonthData4 = ConvertToPerMonthData(niceData4);
            return perMonthData4;
        }
        else if (changeFormat == 'År') {
            niceData4 = convert(uglyData4);
            perYearData4 = convertToPerYearData(niceData4);
            return perYearData4;
        }
        updateChart();
    }
}
