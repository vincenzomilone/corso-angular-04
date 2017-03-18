(function() {
  'use strict';

  angular
    .module('ngUsers')
    .config(['$stateProvider', usersConfig]);

  function usersConfig($stateProvider) {
    $stateProvider.state('app.users', {
      url: '/users',
      views: {
        'main@app': {
          templateUrl: 'app/users/users.html',
          controller: 'UsersController',
          controllerAs: '$users'
        }
      }
    })
  }
})();