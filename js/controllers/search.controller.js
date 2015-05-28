app.controller('SearchCtrl', ['$scope', '$stateParams', '$location', function($scope, $stateParams, $location){
  
  $scope.query = $stateParams.query;
  $scope.search = function() {
    if ($scope.query !== '')
      $location.path('search/' + $scope.query);
  };

}])