app.controller('HomeCtrl', ['$scope', '$state', '$location', function($scope, $state, $location){
  
  $scope.query = '';
  $scope.search = function() {
    if ($scope.query !== '')
      $location.path('search/' + $scope.query);
  };

}])