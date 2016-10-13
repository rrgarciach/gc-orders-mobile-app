'use strict';

import angular from 'angular';
import gcOrdersModule from './gc-orders/gc-orders.module';
import servicesModule from './services/services.module';

import MenuCtrl from './menu/menu.controller';

import routes from './app.routes';
import run from './app.run';

angular.module('app', [
  'ionic',
  'pascalprecht.translate',
  gcOrdersModule,
  servicesModule
])
  .controller('MenuCtrl', MenuCtrl)
  .config(routes)
  .run(run);
