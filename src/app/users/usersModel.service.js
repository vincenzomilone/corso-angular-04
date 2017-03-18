(function() {
  'use strict';

  angular
    .module('ngUsers')
    .service('UsersModel', ['$http', UsersModelService]);

  function UsersModelService($http) {
    this.getUsers = function() {
      return $http.get('/api/v1/users').then(function(resp) {
        return resp.data;
      }, function() {
        return [];
      })
    };
    this.getUserById = function(userId) {
      return $http.get('/api/v1/users/'+userId).then(function(resp) {
        return resp.data;
      }, function() {
        return {};
      });
    }
    this.createUser = function(user) {
      return $http.post('/api/v1/users/', user);
    }
    this.updateUser = function(user) {
      return $http.put('/api/v1/users/'+user.userId, user);
    }
  }
})();