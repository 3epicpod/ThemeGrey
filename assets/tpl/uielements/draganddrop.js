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
