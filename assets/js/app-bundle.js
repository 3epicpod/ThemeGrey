'use strict';
app.controller('Chart3Ctrl', ['$scope','toastr','SweetAlert',
    function ($scope,toastr,SweetAlert) {
        /*Chart1 start*/
        var chart1 = c3.generate({
            bindto: '#chart1',
            data: {
                columns: [
                    ['sample', 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 150, 250, 150, 200, 170, 240, 100, 150, 250, 150, 200, 170, 240, 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 350, 220, 250, 300, 270, 140, 150, 90, 150, 50, 120, 70, 40]
                ]
            },
            zoom: {
                enabled: true
            },color: {
				pattern: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"]
			}
        });
        /*Chart1 Ends*/
            
        /*Chart2 START*/
        var chart2 = c3.generate({
            bindto: '#chart2',
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 130, 100, 140, 200, 150, 50]
                ],
                type: 'bar'
            },color: {
				pattern: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"]
			}
        });

        $scope.toBar = function(){
            chart2.transform('bar');         
        };
        
        $scope.toLine = function(){
            chart2.transform('line');         
        };
        /*Chart2 ENDS*/
        
        /*Chart3 START*/

        var chart3 = c3.generate({
            bindto: '#chart3',
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 130, 100, 140, 200, 150, 50]
                ],
                type: 'bar'
            },color: {
				pattern: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"]
			}
        });
        
        $scope.toSpline = function(){
            chart3.transform('area-spline');  
        };
        $scope.toBar = function(){
            chart3.transform('bar');  
        };
        $scope.toData2Spline = function(){
            chart3.transform('area-spline', 'data2');
        };
        $scope.toData1Spline = function(){
            chart3.transform('area-spline', 'data1');
        };
        
        /*Chart3 ENDS*/


    }]);

'use strict';
app.controller('Chart1Ctrl', ['$scope','toastr','SweetAlert',
    function ($scope,toastr,SweetAlert) {
        var chart = c3.generate({
            bindto: '#chart',
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 50, 20, 10, 40, 15, 25]
                ]
            },color: {
				pattern: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"]
			}
        });

        setTimeout(function () {
            chart.load({
                columns: [
                    ['data1', 230, 190, 300, 500, 300, 400]
                ]
            });
        }, 1000);

        setTimeout(function () {
            chart.load({
                columns: [
                    ['data3', 130, 150, 200, 300, 200, 100]
                ]
            });
        }, 1500);

        setTimeout(function () {
            chart.unload({
                ids: 'data1'
            });
        }, 2000);
        
        var chart3 = c3.generate({
            bindto: '#chart3',
            data: {
                columns: [
                    ['data1', 130, 200, 100, 180, 150, 50],
                    ['data2', 55, 20, 50, 200, 50, 150],
                    ['data3', 130, 100, 140, 150, 150, 50]
                ],
                type: 'bar'
            },
            bar: {
                width: {
                    ratio: 0.5 
                }
            },color: {
				pattern: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"]
			}
        });

        $('#chart2').highcharts({
            title: {
                text: 'Monthly Average Temperature',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: WorldClimate.com',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'New York',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'Berlin',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }],
			credits: {
				  enabled: false
			  },
			  exporting: { enabled: false },
			colors: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"]
        });
        
        
        $('#chart4').highcharts({
            bindto: '#chart4',
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Temperature vs Rainfall'
            },
            xAxis: [{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value} °C',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                title: {
                    text: 'Temperature',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: 'Rainfall',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value} mm',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                opposite: true
            }],

            tooltip: {
                shared: true
            },

            series: [{
                name: 'Rainfall',
                type: 'column',
                yAxis: 1,
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                tooltip: {
                    pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f} mm</b> '
                }
            }, {
                name: 'Rainfall error',
                type: 'errorbar',
                yAxis: 1,
                data: [[48, 51], [68, 73], [92, 110], [128, 136], [140, 150], [171, 179], [135, 143], [142, 149], [204, 220], [189, 199], [95, 110], [52, 56]],
                tooltip: {
                    pointFormat: '(error range: {point.low}-{point.high} mm)<br/>'
                }
            }, {
                name: 'Temperature',
                type: 'spline',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                tooltip: {
                    pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}°C</b> '
                }
            }, {
                name: 'Temperature error',
                type: 'errorbar',
                data: [[6, 8], [5.9, 7.6], [9.4, 10.4], [14.1, 15.9], [18.0, 20.1], [21.0, 24.0], [23.2, 25.3], [26.1, 27.8], [23.2, 23.9], [18.0, 21.1], [12.9, 14.0], [7.6, 10.0]],
                tooltip: {
                    pointFormat: '(error range: {point.low}-{point.high}°C)<br/>'
                }
            }],
			credits: {
				  enabled: false
			  },
			  exporting: { enabled: false },
			colors: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"]
        });
    
    
    }]);

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

'use strict';
app.controller('dashboard1Ctrl', ['$scope','toastr','SweetAlert',
    function ($scope,toastr,SweetAlert) {
        /*Chart1 start*/
        var chart1 = c3.generate({
            bindto: '#chart1',
            data: {
				columns: [
					['data1', 70],
					['data2', 30],
				],
				type : 'donut',
				onclick: function (d, i) { console.log("onclick", d, i); },
				onmouseover: function (d, i) { console.log("onmouseover", d, i); },
				onmouseout: function (d, i) { console.log("onmouseout", d, i); }
			},
			
			color: {
				pattern: ['#13BDD1', '#ccc']
			},
			donut: {
				label: {
					show: false
				},
				width: 15
			},
			legend: {
				show: false
			}

		});
        /*Chart1 Ends*/
		
		/*Chart2 start*/
        var chart2 = c3.generate({
            bindto: '#chart2',
            data: {
				columns: [
					['data1', 50],
					['data2', 50],
				],
				type : 'donut',
				onclick: function (d, i) { console.log("onclick", d, i); },
				onmouseover: function (d, i) { console.log("onmouseover", d, i); },
				onmouseout: function (d, i) { console.log("onmouseout", d, i); }
			},
			
			color: {
				pattern: ['#f3757d', '#ccc']
			},
			donut: {
				label: {
					show: false
				},
				width: 15
			},
			legend: {
				show: false
			}

		});
        /*Chart2 Ends*/
		
		/*Chart3 start*/
        var chart3 = c3.generate({
            bindto: '#chart3',
            data: {
				columns: [
					['data1', 80],
					['data2', 20],
				],
				type : 'donut',
				onclick: function (d, i) { console.log("onclick", d, i); },
				onmouseover: function (d, i) { console.log("onmouseover", d, i); },
				onmouseout: function (d, i) { console.log("onmouseout", d, i); }
			},
			
			color: {
				pattern: ['#efb985', '#ccc']
			},
			donut: {
				label: {
					show: false
				},
				width: 15
			},
			legend: {
				show: false
			}

		});
        /*Chart3 Ends*/
		
		/*Chart4 start*/
        var chart4 = c3.generate({
            bindto: '#chart4',
            data: {
				columns: [
					['data1', 90],
					['data2', 10],
				],
				type : 'donut',
				onclick: function (d, i) { console.log("onclick", d, i); },
				onmouseover: function (d, i) { console.log("onmouseover", d, i); },
				onmouseout: function (d, i) { console.log("onmouseout", d, i); }
			},
			
			color: {
				pattern: ['#77e8bc', '#ccc']
			},
			donut: {
				label: {
					show: false
				},
				width: 15
			},
			legend: {
				show: false
			}

		});
        /*Chart4 Ends*/
            

		
		
		$('#chart5').highcharts({
            title: {
                text: 'Monthly Average Sales',
                x: -20 //center
            },
			colors: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"],
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (?C)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            }, 
            series: [{
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'New York',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'Berlin',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 10.0, 11.6, 10.9, 14.3, 9.0, 3.9, 1.0]
            }, ],
			credits: {
				  enabled: false
			  },
			  exporting: { enabled: false }
        });
		
		$('#chart6').highcharts({
            chart: {
            type: 'column'
        },
			colors: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"],
        title: {
            text: 'Browser market shares. January, 2015 to May, 2015'
        }, 
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Dataware',
                y: 56.33,
                drilldown: 'Dataware'
            }, {
                name: 'Testing',
                y: 24.03,
                drilldown: 'Testing'
            }, {
                name: 'Demo',
                y: 10.38,
                drilldown: 'Demo'
            }, {
                name: 'Operations',
                y: 4.77,
                drilldown: 'Operations'
            }, {
                name: 'Opera',
                y: 0.91,
                drilldown: 'Opera'
            }, {
                name: 'detectable',
                y: 0.2,
                drilldown: null
            }]
        }],
			credits: {
				  enabled: false
			  },
			  exporting: { enabled: false }
        });

		
		
		$scope.rowCollection = [
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com', status:'up', rate:'10%', label:'design'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com', status:'down', rate:'2%', label:'testing'},
            {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com', status:'up', rate:'34%', label:'demo'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com', status:'down', rate:'20%', label:''},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com', status:'up', rate:'36%', label:'operation'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com', status:'down', rate:'12%', label:''},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com', status:'up', rate:'10%', label:'active'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com', status:'down', rate:'41%', label:'bumper'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com', status:'up', rate:'12%', label:''},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com', status:'down', rate:'74%', label:'hump'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com', status:'up', rate:'85%', label:'legend'}
        ];
		
		var chart7 = c3.generate({
			bindto: '#chart7',
			data: {
				columns: [
					['Dataware', 30, 30, 30, 0, 0, 20],
					['Malware', 30, 10, 70, 20, 15, 50]
				],
				types: {
					Dataware: 'area-spline',
					Malware: 'area-spline'
				}
			},
			
        color: {
            pattern: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"]
        },
			legend: {
				show: false
			},
			point: {
				show: false
			}
		});	
 
		
		var chart9 = c3.generate({
			bindto: '#chart9',
			data: {
				// iris data from R
				columns: [
					['data1', 30],
					['data2', 50],
					['data3', 70]
				],
				type : 'pie',
			},
			color: {
            pattern: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"]
        },
			legend: {
				show: false
			},
			point: {
				show: false
			}
		});
		
    }]);


'use strict';
app.controller('dashboard2Ctrl', ['$scope','toastr','SweetAlert',
    function ($scope,toastr,SweetAlert) {
         jQuery(document).ready(function($) {
 
					$('#myCarousel').carousel({
							interval: 5000
					});
			 
					$('#carousel-text').html($('#slide-content-0').html());
			 
					//Handles the carousel thumbnails
					$('[id^=carousel-selector-]').click( function(){
							var id_selector = $(this).attr("id");
							var id = id_selector.substr(id_selector.length -1);
							var id = parseInt(id);
							$('#myCarousel').carousel(id);
					});
			 
			 
					// When the carousel slides, auto update the text
					$('#myCarousel').on('slid', function (e) {
							var id = $('.item.active').data('slide-number');
							$('#carousel-text').html($('#slide-content-'+id).html());
					});
			});
			$('#chart1').highcharts({
				title: {
					text: 'Monthly Average Sales',
					x: -20 //center
				},
				subtitle: {
					text: '',
					x: -20
				},
				colors: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"],
				xAxis: {
					categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
						'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
				},
				yAxis: {
					title: {
						text: 'Temperature (°C)'
					},
					plotLines: [{
						value: 0,
						width: 1,
						color: '#808080'
					}]
				}, 
				credits: {
					  enabled: false
				  },
				series: [{
					name: 'Tokyo',
					data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
				}, {
					name: 'New York',
					data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
				}, {
					name: 'Berlin',
					data: [-0.9, 0.6, 3.5, 8.4, 13.5, 10.0, 11.6, 10.9, 14.3, 9.0, 3.9, 1.0]
				}, ],
			credits: {
				  enabled: false
			  },
			  exporting: { enabled: false }
			});
			$('#chart2').highcharts({
				chart: {
					type: 'area'
				},
				title: {
					text: 'US and USSR nuclear stockpiles'
				},
				credits: {
					  enabled: false
				  },
				 
				xAxis: {
					allowDecimals: false,
					labels: {
						formatter: function () {
							return this.value; // clean, unformatted number for year
						}
					}
				},
				yAxis: {
					title: {
						text: 'Nuclear weapon states'
					},
					labels: {
						formatter: function () {
							return this.value / 1000 + 'k';
						}
					}
				},
				tooltip: {
					pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
				},
				colors: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"],
				plotOptions: {
					area: {
						
						pointStart: 1940,
						marker: {
							enabled: false,
							symbol: 'circle',
							radius: 2,
							states: {
								hover: {
									enabled: true
								}
							}
						}
					}
				},
				series: [{
					color: '#2de8bd',
					name: 'USA',
					data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
						1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
						27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
						26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
						24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
						22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
						10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
				}] ,
			credits: {
				  enabled: false
			  },
			  exporting: { enabled: false }
			});
			$('#chart3').highcharts({
				chart: {
					type: 'column'
				},
				title: {
					text: 'World\'s largest cities per 2014'
				},
				colors: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"],				
				credits: {
					  enabled: false
				  },
				xAxis: {
					type: 'category',
					labels: {
						rotation: -45,
						style: {
							fontSize: '13px',
							fontFamily: 'Verdana, sans-serif'
						}
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: 'Population (millions)'
					}
				},
				legend: {
					enabled: false
				},
				tooltip: {
					pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
				},
				series: [{
					color: '#13bdd1',
					name: 'Population',
					data: [
						['Shanghai', 23.7],
						['Lagos', 16.1],
						['Istanbul', 14.2],
						['Karachi', 14.0],
						['Mumbai', 12.5],
						['Moscow', 12.1],
						['São Paulo', 11.8],
						['Beijing', 11.7],
						['Guangzhou', 11.1],
						['Delhi', 11.1],
						['Shenzhen', 10.5],
						['Seoul', 10.4],
						['Jakarta', 10.0], 
					],
					dataLabels: {
						enabled: true,
						rotation: -90,
						color: '#FFFFFF',
						align: 'right',
						format: '{point.y:.1f}', // one decimal
						y: 10, // 10 pixels down from the top
						style: {
							fontSize: '13px',
							fontFamily: 'Verdana, sans-serif'
						}
					}
				}],
			credits: {
				  enabled: false
			  },
			  exporting: { enabled: false }
			});
			$('#chart4').highcharts({
				chart: {
					polar: true,
					type: 'line'
				},
				credits: {
					  enabled: false
				  },
				colors: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"],
				title: {
					text: 'Budget vs spending',
				},

				pane: {
					size: '80%'
				},

				xAxis: {
					categories: ['Sales', 'Marketing', 'Development', 'Customer Support'],
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
					enabled: false
				},

				series: [{
					color:'#13bdd1',
					name: 'Allocated Budget',
					data: [43, 19, 60, 35 ],
					pointPlacement: 'on'
				}, {
					color:'#f3757d',
					name: 'Actual Spending',
					data: [60, 39, 42, 51 ],
					pointPlacement: 'on'
				}],
			credits: {
				  enabled: false
			  },
			  exporting: { enabled: false }
			});
			$('#chart5').highcharts({
				chart: {
					type: 'column'
				},
				colors: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"],
				credits: {
					  enabled: false
				  },

				title: {
					text: 'Efficiency Optimization by Branch'
				},
				xAxis: {
					categories: [
						'Seattle HQ',
						'San Francisco',
						'Tokyo'
					]
				},
				yAxis: [{
					min: 0,
					title: {
						text: 'Employees'
					}
				}, {
					title: {
						text: 'Profit (millions)'
					},
					opposite: true
				}],
				legend: {
					shadow: false
				},
				tooltip: {
					shared: true
				},
				plotOptions: {
					column: {
						grouping: false,
						shadow: false,
						borderWidth: 0
					}
				},
				series: [{
					name: 'Employees',
					color: '#13bdd1',
					data: [150, 73, 20],
					pointPadding: 0.3,
					pointPlacement: -0.2
				}, {
					name: 'Employees Optimized',
					color: '#f3757d',
					data: [140, 90, 40],
					pointPadding: 0.4,
					pointPlacement: -0.2
				}, {
					name: 'Profit',
					color: '#efb985',
					data: [183.6, 178.8, 198.5],
					tooltip: {
						valuePrefix: '$',
						valueSuffix: ' M'
					},
					pointPadding: 0.3,
					pointPlacement: 0.2,
					yAxis: 1
				}, {
					name: 'Profit Optimized',
					color: '#77e8bc',
					data: [203.6, 198.8, 208.5],
					tooltip: {
						valuePrefix: '$',
						valueSuffix: ' M'
					},
					pointPadding: 0.4,
					pointPlacement: 0.2,
					yAxis: 1
				}],
			credits: {
				  enabled: false
			  },
			  exporting: { enabled: false }
			});
			$('#chart6').highcharts({
				chart: {
					plotBackgroundColor: null,
					plotBorderWidth: null,
					plotShadow: false,
					type: 'pie'
				},
				colors: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"],
				title: {
					text: 'Browser market shares January, 2015 to May, 2015'
				},
				credits: {
					  enabled: false
				  },
				tooltip: {
					pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: 'pointer',
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
			$scope.rowCollection = [
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com', status:'up', rate:'10%', label:'design'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com', status:'down', rate:'2%', label:'testing'},
            {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com', status:'up', rate:'34%', label:'demo'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com', status:'down', rate:'20%', label:''},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com', status:'up', rate:'36%', label:'operation'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com', status:'down', rate:'12%', label:''},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com', status:'up', rate:'10%', label:'active'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com', status:'down', rate:'41%', label:'bumper'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com', status:'up', rate:'12%', label:''},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com', status:'down', rate:'74%', label:'hump'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com', status:'up', rate:'85%', label:'legend'}
        ];
		
		var chart7 = c3.generate({
			bindto: '#chart7',
			data: {
				columns: [
					['Dataware', 30, 30, 30, 0, 0, 20],
					['Malware', 30, 10, 70, 20, 15, 50]
				],
				types: {
					Dataware: 'area-spline',
					Malware: 'area-spline'
				}
			},
			
        color: {
            pattern: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"]
        },
			legend: {
				show: false
			},
			point: {
				show: false
			}
		});	
 
		
		var chart9 = c3.generate({
			bindto: '#chart9',
			data: {
				// iris data from R
				columns: [
					['data1', 30],
					['data2', 50],
					['data3', 70]
				],
				type : 'pie',
			},
			color: {
            pattern: ['#13bdd1', '#f3757d', '#efb985', "#77e8bc"]
        },
			legend: {
				show: false
			},
			point: {
				show: false
			}
		});
    }]);

'use strict';
app.controller('errorCtrl', ['$scope',
    function ($scope) {
		
    }]);



'use strict';
app.controller('extraCtrl', ['$scope',
    function ($scope) {
		singlePage();
    }]);

'use strict';
app.controller('login1Ctrl', ['$scope',
    function ($scope) {

    }]);

'use strict';
app.controller('login1Ctrl', ['$scope',
    function ($scope) {

    }]);

'use strict';
app.controller('cardCtrl', ['$scope', function ($scope) {
	 
}]);

'use strict';
app.controller('homeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.toView = function () {
            $rootScope.boolChangeClass = !$rootScope.boolChangeClass;
            $rootScope.showBlocker = $rootScope.boolChangeClass;
        };
        $scope.toHide = function () {
            $rootScope.showBlocker = $rootScope.boolChangeClass = false;
            $("body").scrollTop(0);
        };

        $scope.switchUser = function () {
            $scope.firms.selected = "";
            $(".user-logged-in .ui-select-toggle .caret").css("display", "block");
            $(".user-logged-in .ui-select-container").css("pointer-events", "visible");
        };
        $scope.nonSelect = function () {
            setTimeout(function () {
                $(".user-logged-in .ui-select-toggle .caret").css("display", "none");
                $(".user-logged-in .ui-select-container").css("pointer-events", "none");
            }, 100);
        };
        addSelectedMenu();
    }]);

'use strict';
app.controller('AngularCtrl', ['$scope',
    function ($scope) {
        var firstnames = ['Laurent', 'Blandine', 'Olivier', 'Max','Laurent', 'Blandine', 'Olivier', 'Max','Laurent', 'Blandine', 'Olivier', 'Max'];
        var lastnames = ['Renard', 'Faivre', 'Frere', 'Eponge','Renard', 'Faivre', 'Frere', 'Eponge','Renard', 'Faivre', 'Frere', 'Eponge'];
        var dates = ['1987-05-21', '1987-04-25', '1955-08-27', '1966-06-06','1987-05-21', '1987-04-25', '1955-08-27', '1966-06-06','1987-05-21', '1987-04-25', '1955-08-27', '1966-06-06'];
        var id = 1;

        function generateRandomItem(id) {

            var firstname = firstnames[Math.floor(Math.random() * 3)];
            var lastname = lastnames[Math.floor(Math.random() * 3)];
            var birthdate = dates[Math.floor(Math.random() * 3)];
            var balance = Math.floor(Math.random() * 2000);

            return {
                id: id,
                firstName: firstname,
                lastName: lastname,
                birthDate: new Date(birthdate),
                balance: balance
            }
        }

        $scope.rowCollection = [];

        for (id; id < 20; id++) {
            $scope.rowCollection.push(generateRandomItem(id));
        }
        
        /**/
        $scope.rowCollection1 = [
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
        ];

        $scope.predicates = ['firstName', 'lastName', 'birthDate', 'balance', 'email'];
        $scope.selectedPredicate = $scope.predicates[0];
        /**/
        
        /**/
        $scope.rowCollection2 = [
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
        ];

        $scope.removeRow = function removeRow(row) {
            var index = $scope.rowCollection2.indexOf(row);
            if (index !== -1) {
                $scope.rowCollection2.splice(index, 1);
            }
        }
        /**/
        
    }]);

'use strict';
app.controller('BasicCtrl', ['$scope',
    function ($scope) {
        $scope.rowCollection = [
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'}
        ];

    }]);

'use strict';
app.controller('PaginateCtrl', ['$scope',
    function ($scope) {
        $scope.rowCollection = [
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'}
        ];
        
        $scope.rowCollection1 = [
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'}
        ];
        
        
        var
        nameList = ['Pierre', 'Pol', 'Jacques', 'Robert', 'Elisa'],
        familyName = ['Dupont', 'Germain', 'Delcourt', 'bjip', 'Menez'];

    function createRandomItem() {
        var
            firstName = nameList[Math.floor(Math.random() * 4)],
            lastName = familyName[Math.floor(Math.random() * 4)],
            age = Math.floor(Math.random() * 100),
            email = firstName + lastName + '@whatever.com',
            balance = Math.random() * 3000;

        return{
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            balance: balance
        };
    }

    
    $scope.itemsByPage=15;

    $scope.rowCollection2 = [];
    for (var j = 0; j < 200; j++) {
        $scope.rowCollection2.push(createRandomItem());
    }
        
    }]);
app.directive('csSelect', function () {
    return {
        require: '^stTable',
        template: '<input type="checkbox"/>',
        scope: {
            row: '=csSelect'
        },
        link: function (scope, element, attr, ctrl) {

            element.bind('change', function (evt) {
                scope.$apply(function () {
                    ctrl.select(scope.row, 'multiple');
                });
            });

            scope.$watch('row.isSelected', function (newValue, oldValue) {
                if (newValue === true) {
                    element.parent().addClass('st-selected');
                } else {
                    element.parent().removeClass('st-selected');
                }
            });
        }
    };
});

'use strict';
app.controller('SortableCtrl', ['$scope',
    function ($scope) {
        $scope.rowCollection = [
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
            {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
            {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'}
        ];

    }]);

'use strict';
app.controller('accordionCtrl', ['$scope', function ($scope) {
	function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
	}
	setTimeout(function(){
		$('#accordion2,#accordion3').on('hidden.bs.collapse', toggleChevron);
		$('#accordion2,#accordion3').on('shown.bs.collapse', toggleChevron);
	},1000);
}]);

'use strict';
app.controller('AlertCtrl', ['$scope','toastr','SweetAlert',
    function ($scope,toastr,SweetAlert) {
        $scope.successToast=function(){
            toastr.success('Hello world!', 'Toastr fun!');
        };
        $scope.warningToast=function(){
            toastr.warning('Hello world!', 'Toastr fun!');
        };
        $scope.infoToast=function(){
            toastr.info('Hello world!', 'Toastr fun!');
        };
        $scope.errorToast=function(){
            toastr.error('Hello world!', 'Toastr fun!');
        };
        $scope.simple1Sweet = function() {
            SweetAlert.swal("Here's a message");
        };
        $scope.simple2Sweet = function() {
            SweetAlert.swal("Here's a message!", "It's pretty, isn't it?");
        };
        $scope.successSweet = function() {
            SweetAlert.swal("Good job!", "You clicked the button!", "success");
        };
        $scope.warningSweet = function() {
            SweetAlert.swal({
                title: "Are you sure?",
                text: "Your will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                closeOnConfirm: false}, 
             function(){ 
                SweetAlert.swal("Booyah!");
             });
        };
        $scope.warningCloseSweet = function() {
            SweetAlert.swal({
                title: "Are you sure?",
                text: "Your will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel plx!",
                closeOnConfirm: false,
                closeOnCancel: false 
            }, 
            function(isConfirm){ 
                if (isConfirm) {
                    SweetAlert.swal("Deleted!", "Your imaginary file has been deleted.", "success");
                } else {
                    SweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");
                }
             });
        };
    }]);

'use strict';
app.controller('cardCtrl', ['$scope', function ($scope) {
	 
}]);

'use strict';
app.controller('card2Ctrl', ['$scope', function ($scope) {
	 $('#show').on('click',function(){        
        $('.card-reveal').slideToggle('slow');
    });
    
    $('.card-reveal .close').on('click',function(){
        $('.card-reveal').slideToggle('slow');
    });
}]);

'use strict';
app.controller('DradAndDropCtrl', ['$scope',
    function ($scope) {
        $scope.models = {
            selected: null,
            lists: {"AssignedUser": [], "AvailableUser": []}
        };

        // Generate initial model
        var available = ['Stephen','Harry','James','Parker','Peter'];
        var assigned = ['Ramsey','Jane','Piccolo','Trunkz','Maria Diaz'];
        for (var i = 0; i <= 4; i++) {
            $scope.models.lists.AssignedUser.push({label: available[i]});
            $scope.models.lists.AvailableUser.push({label: assigned[i]});
        }

        // Model to JSON for demo purpose
        $scope.$watch('models', function(model) {
            $scope.modelAsJson = angular.toJson(model, true);
        }, true);
        
    }]);

'use strict';
app.controller('signCtrl', ['$scope', function ($scope) {
	var canvas = document.querySelector("canvas");
        var signaturePad = new SignaturePad(canvas);
        setTimeout(function(){
            signaturePad = new SignaturePad(canvas);
            signaturePad.minWidth = 0.5;
            signaturePad.maxWidth = 1;
            signaturePad.penColor = "red";
            signaturePad.backgroundColor = "#e2e1e1";
        },500);
        
        function resizeCanvas() {
            var ratio =  Math.max(window.devicePixelRatio || 1, 1);
            canvas.width = $(".canvasArea").width()-50;
            canvas.height = canvas.offsetHeight * ratio;
            canvas.width = 10+canvas.width;
            canvas.height = 400;
            canvas.getContext("2d").scale(ratio, ratio);
            signaturePad.clear();
            signaturePad.penColor = "green";
            signaturePad.backgroundColor = "rgb(66, 133, 244)";
        }
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        $scope.clear=function(){
            signaturePad.clear();
        };
}]);
