'use strict';

export default function authService(apiService) {

  return {
    login
  };

  function login(loginData) {
    return apiService.post('/api/v1/auth', loginData)
      .then(response => {
        this.sessionService.setSessionToken(response.data.token);
        console.log('token', JSON.stringify( this.sessionService.getSessionToken() ));
      });
  }

}
