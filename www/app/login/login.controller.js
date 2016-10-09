'use static';

angular.module('app')
  .controller('LoginCtrl', LoginCtrl);

function LoginCtrl($ionicSideMenuDelegate) {
  $ionicSideMenuDelegate.canDragContent(false);
}
