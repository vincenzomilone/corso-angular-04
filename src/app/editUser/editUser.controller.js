(function() {
  angular
    .module('ngEditUser')
    .controller('EditUserController', ['userData', 'UsersModel', '$state', 'UsersRole', 'toastr', '_', '$translate', EditUserController]);

  function EditUserController(userData, UsersModel, $state, UsersRole, toastr, _, $translate) {
    var vm = this;
    vm.user = userData;
    vm.roles = [];
    _.forEach(_.keys(UsersRole), function(k) {
      vm.roles.push({
        value: k,
        description: UsersRole[k]
      });
    });
    vm.goBack = function() {
      $state.go('^', null, {reload: true});
    }
    vm.save = function(form) {
      if(form.$invalid) {
        $translate('users.errors.form').then(function(message) {
          toastr.error(message);
        })
        return;
      }
      UsersModel.updateUser(vm.user).then(function() {
        $translate('users.saved').then(function(message) {
          toastr.success(message);
        })
        vm.goBack();
      }, function() {

      });
    }
  }
})();