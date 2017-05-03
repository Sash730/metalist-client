import template from 'app/checkout/checkout.html';

export default function ($stateProvider) {
  'ngInject';
  $stateProvider.state('main.checkout', {
    url: '/checkout',
    templateUrl: template,
    controller: 'CheckoutController',
    controllerAs: 'vm'
  });
}
