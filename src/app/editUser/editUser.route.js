(function() {
  'use strict';

  angular
    .module('ngEditUser')
    .config(['$stateProvider', editUserConfig]);

  function editUserConfig($stateProvider) {
    $stateProvider.state('app.users.edit', {
      url: '/:userId',
      views: {
        'content@app.users': {
          templateUrl: 'app/editUser/edit-user.html',
          controller: 'EditUserController',
          controllerAs: '$editUser'
        }
      },
      resolve: {
        userData: ['UsersModel', '$stateParams', function(UsersModel, $stateParams) {
          return UsersModel.getUserById($stateParams.userId);
        }]
      }
    });
  }
})();