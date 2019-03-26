        window.onload = function () {

            var chart = new CanvasJS.Chart("chartContainer", {
                //theme: "light2", // "light1", "light2", "dark1", "dark2"
                animationEnabled: true,
                title: {
                    text: "Consumption of Electricity"
                },
                subtitles: [{
                    text: "Try Clicking and Hovering over Legends!"
                }],
                axisX: {
                    lineColor: "black",
                    labelFontColor: "black"
                },
                axisY2: {
                    gridThickness: 0,
                    title: "Power Consumed",
                    suffix: "kw/h",
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
                    axisYType: "secondary",
                    xValueFormatString: "DD MM,YY",
                    yValueFormatString: "#,##0.0\"kw/h\"",
                    showInLegend: true,
                    dataPoints: niceData,
                },
                {
                    type: "line",
                    name: "Valby Grendehus",
                    markerSize: 5,
                    azisYType: "secondary",
                    xValueFormatString: "DD MM, YY",
                    yValueFormatString: "#,##0.0\"kw/h\"",
                    showInLegend: true,
                    dataPoints: niceData1,
                },
                {
                    type: "line",
                    name: "Solstad Barnehage",
                    markerSize: 5,
                    azisYType: "secondary",
                    xValueFormatString: "DD MM, YY",
                    yValueFormatString: "#,##0.0\"kw/h\"",
                    showInLegend: true,
                    dataPoints: niceData2,
                },
                {
                    type: "line",
                    name: "Rødbøl Barnehage",
                    markerSize: 5,
                    azixYType: "secondary",
                    xValueFormatString: "DD MM, YY",
                    yValueFormatString: "#,##0.0\"kw/h\"",
                    showInLegend: true,
                    dataPoints: niceData3,
                }
                ],

            });


            chart.render();

        }