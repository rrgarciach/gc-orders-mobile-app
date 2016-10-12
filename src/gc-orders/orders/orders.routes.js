'use strict';

angular.module('app.gc-orders.orders')
  .config(($stateProvider, $urlRouterProvider) => {

    $stateProvider
      .state('app.orders', {
        url: '/orders',
        views: {
          'menuContent': {
            templateUrl: 'templates/orders-list.html',
            controller: 'OrdersListCtrl as vm',
          }
        }
      });

  });
