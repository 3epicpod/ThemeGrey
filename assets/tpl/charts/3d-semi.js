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
