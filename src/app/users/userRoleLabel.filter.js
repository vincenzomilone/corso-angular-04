(function() {
  'use strict';

  angular
    .module('ngUsers')
    .filter('userRoleLabel', ['UsersRole', function(UsersRole) {
      return function(input) {
        return UsersRole[input];
      }
    }])
})();