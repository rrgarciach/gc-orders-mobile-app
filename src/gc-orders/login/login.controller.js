'use strict';

class LoginCtrl {

  constructor($ionicSideMenuDelegate, $http, sessionService) {
    $ionicSideMenuDelegate.canDragContent(false);
    this.$http = $http;
    this.sessionService = sessionService;
    // Form data for the login modal
    this.loginData = {};
  }

  doLogin() {
    this.$http.post('https://gc-orders-development.herokuapp.com/api/v1/auth', this.loginData)
      .then(response => {
        this.sessionService.setSessionToken(response.data.token);
        console.log('token', JSON.stringify( this.sessionService.getSessionToken() ));
      });
  }

}
angular.module('app.gc-orders')
  .controller('LoginCtrl', LoginCtrl);
