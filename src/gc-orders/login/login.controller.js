'use strict';

class LoginCtrl {

  constructor($ionicSideMenuDelegate, $http) {
    $ionicSideMenuDelegate.canDragContent(false);
    this.$http = $http;
    // Form data for the login modal
    this.loginData = {};
  }

  doLogin() {
    this.$http.post('https://gc-orders-development.herokuapp.com/api/v1/auth', this.loginData)
      .then(response => {
        console.log('token', JSON.stringify(response.data));
      });
  }

}
angular.module('app.gc-orders')
  .controller('LoginCtrl', LoginCtrl);
