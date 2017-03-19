(function() {
  angular
    .module('ngUsers')
    .constant('UsersRole', {
      'ADMIN': 'Amministratore',
      'DEVELOPER': 'Sviluppatore',
      'BASE': 'Altro'
    });
})();