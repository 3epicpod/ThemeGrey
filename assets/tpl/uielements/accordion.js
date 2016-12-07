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
