app.controller('SearchCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
  
  $scope.query = $stateParams.query;
  $scope.q = '';

}])