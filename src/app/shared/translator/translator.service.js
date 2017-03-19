(function() {
  'use strict';

  angular
    .module('ngTranslator')
    .service('Translator', ['$translate', 'moment', '$cookies', TranslatorService]);

  function TranslatorService($translate, moment, $cookies) {
    var vm = this;
    vm.currentLanguage = $cookies.get('corso-angular-language') || 'en';

    vm.setLanguage = function(locale) {
      vm.currentLanguage = locale;
      $translate.use(locale);
      moment.locale(locale);
      $cookies.put('corso-angular-language', locale, {
        'expires': moment().add(6, 'months').toDate()
      });
    }

  }
})();