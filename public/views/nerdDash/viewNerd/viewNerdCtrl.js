angular.module('nerd').controller('viewNerdCtrl', function($scope, nerdFactory,$routeParams) {
  function getUsers() {
    nerdFactory.get().success(function(data) {
      $scope.users = data;
    });
  }
  $(document).ready(function() {
    getUsers();
    console.log($routeParams.id);
  })
});
