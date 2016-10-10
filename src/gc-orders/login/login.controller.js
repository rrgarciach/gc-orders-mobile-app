'use static';

class LoginCtrl {
  constructor($ionicSideMenuDelegate) {
    $ionicSideMenuDelegate.canDragContent(false);
    // Form data for the login modal
    this.loginData = {};
  }
}
angular.module('app.gc-orders')
  .controller('LoginCtrl', LoginCtrl);
