(function() {
  angular
    .module('ngUsers')
    .controller('UsersController', ['usersList', '$scope', '$state', UsersController]);

  function UsersController(usersList, $scope, $state) {
    var vm = this;
    vm.list = usersList;
    $scope.$on('EDIT_USER', function(event, user) {
      $state.go('app.users.edit', {userId: user.userId});
    });
  }
})();