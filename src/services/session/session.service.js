'use strict';

angular.module('app.services')
  .service('sessionService', sessionService);

function sessionService() {
  let session = {};

  return {
    setSessionToken,
    getSessionToken,
  };

  function setSessionToken(token) {
    session.token = token;
  }

  function getSessionToken() {
    return session.token;
  }

}
