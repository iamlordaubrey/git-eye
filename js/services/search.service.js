app.factory('GitSearcher', ['$http', function($http) {
  var baseUrl = 'https://api.github.com/search/repositories?q=';

  return {
    get: function(query, success, error) {
      $http.get(baseUrl + query).success(success).error(error);
    }
  };
}]);