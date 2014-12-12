var learnApp = angular.module('learnApp', [])

function ContainController ($scope){
    $scope.Title = "Learn";
    $scope.showOne(){
        $scope.Title = 1;

    }

}

ContainController.$inject = ['$scope'];
learnApp.controller('ContainController', ContainController);
