(function(){
  'use strict';
  angular.module('kj-timer')
  .controller('MainCtrl', ['$scope','$interval', function($scope, $interval){

    $scope.count = 0;
    var timer;

    function getMinutes(){

      var minutes = Math.floor($scope.count / 60),
      seconds = $scope.count % 60;

      $scope.display = minutes.toString()+':'+seconds.toString();
    }

    function countdownSec(){
      if ($scope.count > 0){
        $scope.count--;
        getMinutes();
      } else {
        $interval.cancel(timer);
        navigator.vibrate(3000);
      }
    }

    $scope.start = function(){
      if ($scope.count < 0 || isNaN($scope.count)){
        $scope.count = 0;
      } else {
        getMinutes();
        timer = $interval(countdownSec, 1000);
      }
    };

    $scope.stop = function(){
      $scope.count = 0;
      $scope.display = '';
    };

  }]);

})();
