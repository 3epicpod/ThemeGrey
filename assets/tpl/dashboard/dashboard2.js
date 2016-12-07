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
