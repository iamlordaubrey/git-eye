angular.module('giteye', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('indexPage', {
    url: '/',
    views: {
      '': 'views/home.html'
      // 'theView': {
      //   templateUrl: '',
      //   controller: ''
      // }
    }
  })


}]);

console.log('apple.js');