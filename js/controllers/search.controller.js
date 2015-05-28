app.controller('SearchCtrl', ['$scope', '$stateParams', '$location', 'GitSearcher',
 function($scope, $stateParams, $location, GitSearcher){
  
  $scope.query = $stateParams.query;
  if ($scope.query === '')
    $location.path('/');


  $scope.metadata = {};
  $scope.results = [];

  var searched = function(data) {
    $scope.metadata.count = data.total_count;
    $scope.results = data.items;
  };

  var failed = function() {
    
  };

  GitSearcher.get($scope.query, searched, failed);

  $scope.search = function() {
    if ($scope.query !== '')
      $location.path('search/' + $scope.query);
  };

}]);
