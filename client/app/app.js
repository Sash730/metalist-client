import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import angular from 'angular';
import  * as datePicker  from 'angular-datepicker';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import validationMatch from 'angular-validation-match';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-bootstrap';

import MatchDetailsComponent from './match-details/match-details.component';
import CartComponent from './cart/cart.component';
import CartSummaryComponent from './cart/summary/cart-summary.component';
import NavpanelComponent from './navpanel/navpanel.component';

import CartService from './services/Cart';
import MatchService from './services/Match';
import TicketService from './services/Ticket';

import footerDirective from '../components/footer/footer.directive';
import mongooseErrorDirective from '../components/mongoose-error/mongoose-error.directive';
import navbarDirective from '../components/navbar/navbar.directive';
import oauthButtonsDirective from '../components/oauth-buttons/oauth-buttons.directive';

import accountConfig from './account/account';
import checkoutConfig from './checkout/checkout';
import homeConfig from './home/home';
import notFoundConfig from './404/404';
import mainConfig from './main/main';
import matchConfig from './match/match';
import sectorConfig from './sector/sector';

import adminModule from './admin/admin.module';
import authModule from '../components/auth/auth.module';
import constantsModule from './app.constant';

import CheckoutController from './checkout/checkout.controller';
import HomeController from './home/home.controller';
import LoginController from './account/login/login.controller';
import LogoutController from './account/logout/logout.controller';
import MatchController from './match/match.controller';
import NotFoundController from './404/404.controller';
import NavbarController from '../components/navbar/navbar.controller';
import OauthButtonsController from '../components/oauth-buttons/oauth-buttons.controller';
import RecoveryController from './account/recovery/recovery.controller';
import SectorController from './sector/sector.controller';
import SettingsController from './account/settings/settings.controller';
import SignupController from './account/signup/signup.controller';

import './app.less';
import './bootstraptheme.less';

angular.module('metalistTicketsApp', [
  adminModule,
  authModule,
  constantsModule,
  ngCookies,
  ngResource,
  ngSanitize,
  uiRouter,
  uiBootstrap,
  validationMatch,
  datePicker
])
  .component('matchDetails', MatchDetailsComponent)
  .component('cart', CartComponent)
  .component('cartSummary', CartSummaryComponent)
  .component('navpanel', NavpanelComponent)
  .directive('footer', footerDirective)
  .directive('mongooseError', mongooseErrorDirective)
  .directive('navbar', navbarDirective)
  .directive('oauthButtons', oauthButtonsDirective)
  .service('Cart', CartService)
  .service('Match', MatchService)
  .service('Ticket', TicketService)
  .controller('HomeController', HomeController)
  .controller('CheckoutController', CheckoutController)
  .controller('LoginController', LoginController)
  .controller('LogoutController', LogoutController)
  .controller('MatchController', MatchController)
  .controller('NavbarController', NavbarController)
  .controller('OauthButtonsController', OauthButtonsController)
  .controller('RecoveryController', RecoveryController)
  .controller('SectorController', SectorController)
  .controller('SettingsController', SettingsController)
  .controller('SignupController', SignupController)
  .controller('NotFoundController', NotFoundController)
  .config(function ($urlRouterProvider, $locationProvider, $cookiesProvider) {
    $urlRouterProvider.otherwise('/404');

    let n = new Date();
    $cookiesProvider.defaults.expires = new Date(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours() + 6);

    $locationProvider.html5Mode(true);
  })
  .config(accountConfig)
  .config(checkoutConfig)
  .config(homeConfig)
  .config(mainConfig)
  .config(matchConfig)
  .config(notFoundConfig)
  .config(sectorConfig)
  .run(function ($rootScope, $window) {
    'ngInject';
    $rootScope.$on('$stateChangeStart', function (event, next, nextParams,  prev, prevParams) {

      if (next.name === 'login' && prev && prev.name && !prev.authenticate) {
        next.referrer = prev.name;
        next.params = prevParams;
        $window.sessionStorage.href = $window.location.href;
      }
      if (next.name === 'signup') {
        $window.sessionStorage.href = $window.location.href;
      }
      if ($window.location.hash && $window.location.hash == '#_=_') {
        event.preventDefault();
        $window.location.href = $window.sessionStorage.href;
      }
    });
  });