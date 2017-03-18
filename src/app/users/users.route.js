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
        },
        'content@app.users': {
          templateUrl: 'app/users/list/list.html',
          controller: 'UsersController',
          controllerAs: '$users'
        }
      },
      resolve: {
        usersList: ['UsersModel', function(UsersModel) {
          return UsersModel.getUsers();
        }]
      }
    })
  }
})();