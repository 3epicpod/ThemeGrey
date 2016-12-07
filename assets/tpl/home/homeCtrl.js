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
