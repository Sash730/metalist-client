export default class LogoutController {

  constructor($state, $http, Auth, CartService) {
    'ngInject';
    this.Auth = Auth;
    this.$http = $http;
    this.$state = $state;
    this.loadCart = CartService.loadCart.bind(CartService);

    this.Auth.logout();
    this.logoutSession();
  }

  logoutSession() {
    return this.$http.get('/auth/local/logout')
      .then(() => {
        this.loadCart();

        this.$state.go('main.home');
      })
      .catch((error) => {
        console.log(error);
        this.$state.go('404');
      });
  }
}