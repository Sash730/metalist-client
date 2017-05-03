import template from 'home.html';

export default function ($stateProvider) {
  'ngInject';
  $stateProvider.state('main.home', {
    url: '/',
    controller: 'MatchesController',
    templateUrl: template,
    controllerAs: 'vm',
  });
}
