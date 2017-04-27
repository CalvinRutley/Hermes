/**
 * Created by lbaerisw on 12/17/16.
 */
(function() {
  'use strict';
  angular
      .module('Notifications')
      .controller('NotificationController', NotificationController);

  Notifications.$inject = [
    'NotificationService',
    'WebsocketService'
  ];

  function NotificationController(NotificationService, WebsocketService) {

    var ctrl = this;
    ctrl.notificationsTable = NotificationService.eventsTable;
    WebsocketService.addZaqarQueue('LintPasses');
    ctrl.connected = WebsocketService.getConnected;
    ctrl.authenticated = "needs doing";
    ctrl.subscribed = "needs doing";
    ctrl.activeSubscriptions = "needs doing";

    }

})();