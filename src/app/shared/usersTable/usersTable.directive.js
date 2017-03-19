(function() {
  'use strict';

  angular
    .module('ngUsersTable')
    .directive('usersTable', ngUsersTableDirective);

  function ngUsersTableDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/shared/usersTable/users-table.html',
      scope: {
        users: '='
      },
      link: function($scope, $element, $attrs) {
        $scope.orderBy = {
          value: 'lastName',
          reverse: false
        };
        $scope.updateOrderBy = function(value) {
          if( $scope.orderBy.value === value ) {
            $scope.orderBy.reverse = !$scope.orderBy.reverse;
            return;
          }
          $scope.orderBy.value = value;
          $scope.orderBy.reverse = false; 
        }
      } 
    }
  }

})();