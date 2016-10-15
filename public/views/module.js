angular.module('startMean', ['ngRoute', 'nerd']).config(function($routeProvider) {
  // route for the home page
  $routeProvider.when('/geek', {
      templateUrl: '/views/index.html'
        // controller: 'mainCtrl'
    })
    // route for the about page
    .when('/nerd', {
      templateUrl: 'views/nerdDash/nerd.html',
      controller: 'nerdCtrl'
    }).otherwise({
      redirectTo: '/'
    });
});
