const app = angular.module("exercise", ['ngStorage']);
app.controller("doExercise", function ($scope, $localStorage) {
    $scope.getThing = "";
    $scope.search = "";
    $scope.recover = [];
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
        const keycode = window.event ? e.keyCode : e.which;
        if (keycode === 13) {
            $scope.show();
        }
    }
    $scope.$storage = $localStorage.$default({
        recover: []
    });
    $scope.delete = function (item, index) {
        if(confirm(`是否确认${item}删除`)){
        if (item == $scope.$storage.result[index]) {
            $scope.$storage.recover.push(item);
            $scope.$storage.result.splice(index, 1);
        }
    }};
    $scope.deleteRecover = function (item, index) {
        if(confirm(`是否确认${item}删除`)){
        if (item == $scope.$storage.recover[index]) {
            $scope.$storage.recover.splice(index, 1);
        }
    }
    };
    $scope.onShow = true;
    $scope.showRecover = function () {
        $scope.onShow = !$scope.onShow;
    }
})

