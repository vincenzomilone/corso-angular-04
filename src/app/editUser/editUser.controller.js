(function() {
  angular
    .module('ngEditUser')
    .controller('EditUserController', ['userData', 'UsersModel', '$state', 'UsersRole', 'toastr', '_', EditUserController]);

  function EditUserController(userData, UsersModel, $state, UsersRole, toastr, _) {
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
        toastr.error('Compilare tutti i dati della form');
        return;
      }
      UsersModel.updateUser(vm.user).then(function() {
        toastr.success('Utente aggiornato con successo');
        vm.goBack();
      }, function() {

      });
    }
  }
})();