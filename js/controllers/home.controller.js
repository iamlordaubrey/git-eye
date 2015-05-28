app.controller('HomeCtrl', ['$scope', '$state', function($scope, $state){
  
  $scope.query = '';
  $scope.search = function() {
    if ($scope.query !== '')
      $state.go('search', {query: $scope.query});
  };

}])