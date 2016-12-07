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

