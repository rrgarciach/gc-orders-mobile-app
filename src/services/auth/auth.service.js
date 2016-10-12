'use strict';

export default function authService(apiService) {

  return {
    login,
    logout
  };

  function login(loginData) {
    return apiService.post('/api/v1/auth', loginData)
      .then(response => {
        this.sessionService.setToken(response.data.token);
        console.log('token', JSON.stringify( this.sessionService.getToken() ));
      });
  }

  function logout() {
      this.sessionService.destroy();
      console.log('token', JSON.stringify( this.sessionService.getToken() ));
  }

}
