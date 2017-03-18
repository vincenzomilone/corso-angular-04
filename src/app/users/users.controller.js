(function() {
  angular
    .module('ngUsers')
    .controller('UsersController', ['usersList', UsersController]);

  function UsersController(usersList) {
    var vm = this;
    vm.list = usersList;
  }
})();