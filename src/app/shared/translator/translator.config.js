(function() {
  'use strict';

  angular
    .module('ngTranslator')
    .config(['$translateProvider', translatorConfig]);

  /** @ngInject */
  function translatorConfig($translateProvider) {
    $translateProvider
      .preferredLanguage('en')
      .useSanitizeValueStrategy('escape')
      .useStaticFilesLoader({
        prefix: 'translations/translations-',
        suffix: '.json'
      });
  }

})();
