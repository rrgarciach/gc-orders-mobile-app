'use strict';

import LoginCtrl from './login/login.controller';
import routes from './login/login.routes';

export default angular.module('app.gc-orders', [])
  .controller('LoginCtrl', LoginCtrl)
  .config(routes).name;
