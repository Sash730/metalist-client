import template from 'match.html';

export default function ($stateProvider) {
  'ngInject';
  $stateProvider.state('main.match', {
    url: '/match/:id/sectors',
    templateUrl: template,
    controller: 'MatchController',
    controllerAs: 'vm',

    resolve: {
      match: (MatchService, $stateParams, $state) => {
        return MatchService
          .fetchMatch($stateParams.id)
          .catch((error) => {
            console.log(error);
            $state.go('404');
          })
          ;
      },
      cart: (CartService) => {
        return CartService.cart;
      }
    }
  });
}
