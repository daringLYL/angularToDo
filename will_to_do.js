const app = angular.module('exercise', ['ngStorage']);
app.controller('doExercise', function ($scope, $localStorage) {
    $scope.getThing = '';
    $scope.search = '';
    $scope.$storage = $localStorage.$default({
        result: []
    });
    $scope.selected = false;
    $scope.show = function () {
        $scope.$storage.result.push({ 'name': $scope.getThing, 'date': new Date().toLocaleDateString() });
        $scope.getThing = '';
    }
    $scope.done = function (index) {
        $scope.selected = !$scope.selected;
    }
    $scope.enterEvent = function (e) {
        var keycode = window.event ? e.keyCode : e.which;
        if (keycode === 13) {
            $scope.show();
        }
    }
    $scope.delete = function (item) {
        if (confirm('是否确认' + item + '删除？')) {
            for (index in $scope.$storage.result) {
                $scope.$storage.result.splice(index, 1);
            }
        }
    };


})

