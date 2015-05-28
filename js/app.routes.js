app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
 
  $stateProvider
    .state('home', {
        url:'/',
        templateUrl: './views/home.view.html',
        controller: 'HomeCtrl'
    })
    .state('search', {
        url:'/search/:query',
        templateUrl: './views/search.view.html',
        controller: 'SearchCtrl'
    });

}]);