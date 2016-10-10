'use strict';

angular.module('app.gc-orders')
  .config($translateProvider => {

    $translateProvider.translations('es', {
      login_instructions: 'Introduzca sus credenciales para iniciar sesión.',
      login_email: 'Correo electrónico',
      login_password: 'Contraseña',
      login_button: 'Iniciar Sesión',
    });

  });
