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
