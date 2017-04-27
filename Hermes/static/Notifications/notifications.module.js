
(function() {
  'use strict';

  angular
    .module('Notifications', [])
    .config(config);

  config.$inject = ['$provide', '$windowProvider', '$routeProvider'];

  function config($provide, $windowProvider, $routeProvider) {
    var path = $windowProvider.$get().STATIC_URL + 'Notifications/';
    $provide.constant('horizon.dashboard.Notifications.basePath', path);

    $routeProvider.when('/Notifications', {
      templateUrl: path + 'table.html'
    });

  }

})();
