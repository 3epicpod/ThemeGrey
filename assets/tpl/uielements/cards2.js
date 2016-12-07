'use strict';
app.controller('card2Ctrl', ['$scope', function ($scope) {
	 $('#show').on('click',function(){        
        $('.card-reveal').slideToggle('slow');
    });
    
    $('.card-reveal .close').on('click',function(){
        $('.card-reveal').slideToggle('slow');
    });
}]);
