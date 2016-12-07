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
