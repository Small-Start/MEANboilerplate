angular.module('nerd').controller('nerdCtrl', function($scope, nerdFactory) {
  $scope.nerd = {};

  function getUsers() {
    nerdFactory.get().success(function(data) {
      $scope.users = data;
    });
  }
  $scope.setNerd = function() {
    nerdFactory.create($scope.nerd).success(function(data) {
      getUsers();
    });
  }
  $(document).ready(function() {
    getUsers();
  })
});
