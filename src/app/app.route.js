(function() {
  'use strict';

  angular
    .module('corsoAngular04')
    .config(['$stateProvider', '$urlRouterProvider',routerConfig]);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '',
        views: {
          'layout': {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: '$main'
          },
          'sidebar@app': {
            controller: 'TranslatorController',
            controllerAs: '$translator',
            templateUrl: 'app/shared/sidebar/sidebar.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/home');
  }

})();
