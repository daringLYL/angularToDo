var app = angular.module("exercise", ['ngStorage']);
app.controller("doExercise", function ($scope,$localStorage) {
    $scope.getThing = "";
    $scope.search = "";
    $scope.recover = [];
    $scope.$storage = $localStorage.$default({
       result :[]
    });
    $scope.selected = false;
    $scope.show = function () {
        $scope.$storage.result.push({'name':$scope.getThing,'date':new Date().toLocaleDateString()});
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
<<<<<<< HEAD
    $scope.delete = function(item){
        if(confirm('是否确认'+item+'删除？')){
            for (index in $scope.$storage.result) {
                if(item === $scope.$storage.result[index]){
=======
    $scope.$storage = $localStorage.$default({
        recover :[]
     });
    $scope.delete = function(item){
        if(confirm("是否确认"+item+"删除？")){
            for (index in $scope.$storage.result) {
                if(item == $scope.$storage.result[index]){
                    $scope.$storage.recover.push({'name':item.name,'date':item.date});
>>>>>>> 添加“恢复”功能
                    $scope.$storage.result.splice(index,1);
                }
            }
        }
    };
    $scope.deleteRecover = function(item){
        if(confirm("是否确认"+item+"删除？")){
            for (index in $scope.$storage.recover) {
                if(item == $scope.$storage.recover[index]){
                    $scope.$storage.recover.splice(index,1);
                }
            }
        }
    };
    $scope.show=true;
        $scope.showRecover=function () {
          $scope.show=!$scope.show;
          console.log($scope.show);
        }
           })

