'use strict';

import LoginCtrl from './login.controller';
import q from 'q';

describe('Controller: LoginCtrl', () => {

  let $ionicSMDMock = jasmine.createSpyObj('$ionicSideMenuDelegate', ['canDragContent']);
  let $httpMock = jasmine.createSpyObj('$http', ['post']);
  $httpMock.post.and.returnValue(q.defer().promise);
  let sessionServiceMock = jasmine.createSpyObj('sessionService', ['setSessionToken']);

  it('should login and redirect to dashboard', () => {

    // Act
    let ctrl = new LoginCtrl($ionicSMDMock, $httpMock, sessionServiceMock);
    ctrl.doLogin();

    // Assert
    expect($httpMock.post).toHaveBeenCalled();
  });
});
