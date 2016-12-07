'use strict';
app.controller('Chart2Ctrl', ['$scope','toastr','SweetAlert',
    function ($scope,toastr,SweetAlert) {
        /* Chart1 START*/
        var chart1 = c3.generate({
            bindto: '#chart1',
            data: {
                columns: [
                    ['data1', 30],
                    ['data2', 120],
                ],
                type : 'pie'
            },color: {
				pattern: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"]
			}
        });

        setTimeout(function () {
            chart1.load({
                columns: [
                    ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                    ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                    ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                ]
            });
        }, 1500);

        setTimeout(function () {
            chart1.unload({
                ids: 'data1'
            });
            chart1.unload({
                ids: 'data2'
            });
        }, 2500);
        /* Chart1 ENDS*/
        
        /* Chart2 START*/
        $('#chart2').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },colors: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"],
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    size: '100%',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'Microsoft Internet Explorer',
                    y: 56.33
                }, {
                    name: 'Chrome',
                    y: 24.03,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Firefox',
                    y: 10.38
                }, {
                    name: 'Safari',
                    y: 4.77
                }, {
                    name: 'Opera',
                    y: 0.91
                }, {
                    name: 'Proprietary or Undetectable',
                    y: 0.2
                }]
            }],
			credits: {
				  enabled: false
			  },
			  exporting: { enabled: false }
        });
        /* Chart2 ENDS*/
        
        /*Chart3 START*/
        
        var chart3 = c3.generate({
            bindto: '#chart3',
            data: {
                columns: [
                    ['data1', 30],
                    ['data2', 120],
                ],
                type : 'donut'
            },colors: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"],
            donut: {
                title: "Iris Petal Width"
            },color: {
				pattern: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"]
			}
        });

        setTimeout(function () {
            chart3.load({
                columns: [
                    ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                    ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                    ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                ]
            });
        }, 1500);

        setTimeout(function () {
            chart3.unload({
                ids: 'data1'
            });
            chart3.unload({
                ids: 'data2'
            });
        }, 2500);


        /*Chart3 ENDS*/
        
        /*Chart4 START*/
        $('#chart4').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: ''
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }
        },colors: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"],
        plotOptions: {
            pie: {
                size: '100%',
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: 'Versions',
            data: [2,3],
            size: '90%',
            innerSize: '60%',
            dataLabels: {
                formatter: function () {
                    // display only if larger than 1
                    return this.y > 1 ? '<b> Value:</b> ' + this.y + '%' : null;
                }
            }
        }],
			credits: {
				  enabled: false
			  },
			  exporting: { enabled: false }
    });
    /*Chart4 ENDS*/
    /*Chart 5 START*/
    $('#chart5').highcharts({

        chart: {
            polar: true,
            type: 'line'
        },
		colors: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"],
        title: {
            text: 'Budget vs spending',
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Sales', 'Marketing', 'Development', 'Customer Support',
                    'Information Technology', 'Administration'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'center',
            layout: 'vertical',
            verticalAlign:'bottom'
        },

        series: [{
            name: 'Allocated Budget',
            data: [43000, 19000, 60000, 35000],
            pointPlacement: 'on'
        }, {
            name: 'Actual Spending',
            data: [50000, 39000, 42000, 31000],
            pointPlacement: 'on'
        }],
			credits: {
				  enabled: false
			  },
			  exporting: { enabled: false }

    });
    /*CHART5 ENDS*/
    
        
    /*Chart6 START*/
    $('#chart6').highcharts({

        chart: {
            polar: true,
            type: 'line'
        },
		colors: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"],
        title: {
            text: 'Budget vs spending',
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Sales', 'Marketing', 'Development', 'Customer Support',
                    'Information Technology', 'Administration'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'center',
            layout: 'vertical',
            verticalAlign:'bottom'
        },

        series: [{
            name: 'Allocated Budget',
            data: [43000, 19000, 60000, 35000, 17000, 10000],
            pointPlacement: 'on'
        }, {
            name: 'Actual Spending',
            data: [50000, 39000, 42000, 31000, 26000, 14000],
            pointPlacement: 'on'
        }],
			credits: {
				  enabled: false
			  },
			  exporting: { enabled: false }

    });
    /*Chart6 ENDS*/
    
    }]);
