(function() {
  'use strict';

  angular
    .module('ngHome')
    .config(['$stateProvider', homeConfig]);

  function homeConfig($stateProvider) {
    $stateProvider.state('app.home', {
      url: '/home',
      views: {
        'main@app': {
          templateUrl: 'app/home/home.html',
          controller: 'HomeController',
          controllerAs: '$home'
        }
      }
    })
  }
})();