(function() {
  'use strict';

  angular
    .module('ngTranslator')
    .controller('TranslatorController', ['Translator',  TranslatorController]);

  function TranslatorController(Translator) {
    var vm = this;
    vm.languages = ['it', 'en'];
    vm.setLanguage = function(locale) {
      Translator.setLanguage(locale);
    }
    vm.isActive = function(locale) {
      return Translator.currentLanguage === locale;
    }
    
  }
})();