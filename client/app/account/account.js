import accountTemplate from 'app/account/login/login.html';
import recoveryTemplate from 'app/account/recovery/recovery.html';
import signupTemplate from 'app/account/signup/signup.html';
import settingsTemplate from 'app/account/settings/settings.html';

export default function ($stateProvider) {
  'ngInject';
  $stateProvider.state('login', {
    url: '/login?referrer',
    referrer: 'main.home',
    templateUrl: accountTemplate,
    controller: 'LoginController',
    controllerAs: 'vm'
  })
    .state('logout', {
      url: '/logout',
      template: '',
      controller: 'LogoutController'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: signupTemplate,
      controller: 'SignupController',
      controllerAs: 'vm'
    })
    .state('recovery', {
      url: '/recovery',
      templateUrl: recoveryTemplate,
      controller: 'RecoveryController',
      controllerAs: 'vm'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: settingsTemplate,
      controller: 'SettingsController',
      controllerAs: 'vm',
      authenticate: true
    });
}

