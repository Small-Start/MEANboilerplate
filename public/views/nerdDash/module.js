angular.module('nerd', []).config(function($routeProvider) {
  // route for the home page
  $routeProvider.when('/nerd/:id', {
    template: '<p>Hello Unique Nerd</p>',
    controller: 'viewNerdCtrl'
  });
});
