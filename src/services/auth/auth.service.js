'use strict';

export default function authService(apiService, sessionService) {

  return {
    login,
    logout
  };

  function login(loginData) {
    return apiService.post('/api/v1/auth', loginData)
      .then(response => {
        sessionService.setToken(response.token);
      });
  }

  function logout() {
      sessionService.destroy();
  }

}
