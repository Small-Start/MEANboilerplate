angular.module('nerd').factory('nerdFactory', function($http) {
  var urlBase = '/api/nerds';
  return {
    // call to get all nerds
    get: function() {
      return $http.get(urlBase);
    },
    // these will work when more API routes are defined on the Node side of things
    // call to POST and create a new nerd
    create: function(nerdData) {
      return $http.post(urlBase, nerdData);
    },
    // call to DELETE a nerd
    delete: function(id) {
      return $http.delete(urlBase + "/" + id);
    }
  }
});
