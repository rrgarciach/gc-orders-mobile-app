'use strict';

import angular from 'angular';
import gcOrdersModule from './gc-orders/gc-orders.module';

import routes from './app.routes';
import run from './app.run';

angular.module('app', [
  'ionic',
  'pascalprecht.translate',
  gcOrdersModule,
  // 'app.services',
])
  .config(routes)
  .run(run);
