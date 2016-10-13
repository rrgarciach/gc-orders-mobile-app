'use strict';

import routes from './gc-orders.routes';

import LoginCtrl from './login/login.controller';
import loginTranslate from './login/login.translate';

export default angular.module('gc-orders', [])
  .config(routes)
  .controller('LoginCtrl', LoginCtrl)
  .config(loginTranslate)
  .name;
