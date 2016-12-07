var app = angular.module('template', [
    'ngRoute',
    'ui.router.state',
    'ui.router',
    'ncy-angular-breadcrumb',
    'ui.select',
    'ngSanitize',
    'ngLetterAvatar',
    'toastr',
    'oitozero.ngSweetAlert',
    'smart-table',
    'signature',
    'dndLists',
	'jcs-autoValidate',
	'ui.bootstrap'
]);
'use strict';
app.directive('initialName', function () {
            color = ["#F4A460", "#FA8072", "#708090", "#FF6347", "#FF1493", "#FFA500", "#2E8B57", "#6495ED"
                        , "#BC8F8F", "#808000", "#A52A2A", "#2F4F4F", "#708090", "#6600FF", "#FF3300", "#FF6600"];
            return {
                restrict: 'E',
                transclude: true,
                scope: {},
                link: function ($scope) {
                    var index = $scope.$parent.$index;
                    var random = Math.floor(Math.random() * 9) + 1;
                    $(".initial-name").eq(index).css("background", color[random]);
                },
                templateUrl: 'assets/tpl/partials/initialName.html'
            };
        });
setInterval(function(){
			$(".pageError .fa").toggleClass("fa-chain-broken");
			$(".pageError .fa").toggleClass("fa-chain");
		},500);
function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2),
    zoom: 10
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
function singlePage(){
	$("body").addClass("single-page");
}
function multiPage(){
	$("body").removeClass("single-page");
}

function addSelectedMenu() {
    setTimeout(function () {
        $(".sidebar .panel-group .panel-body a").click(function () {
            $("a").removeClass("selectedMenu");
            $(this).addClass("selectedMenu");
        });
    }, 500);
}
function toggleTheme(){
	$(".theme_chooser").toggleClass("showtheme_chooser");
}
function theme(addclass){
	$("body").removeAttr('class').attr('class', addclass);
}