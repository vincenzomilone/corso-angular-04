(function() {
  'use strict';

  angular
    .module('corsoAngular03')
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
            controllerAs: 'main'
          },
          'sidebar@app': {
            templateUrl: 'app/shared/sidebar/sidebar.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/home');
  }

})();
