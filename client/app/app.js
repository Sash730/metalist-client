import angular from 'angular';
import datePicker from './../../node_modules/angular-datepicker/index';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import validationMatch from 'angular-validation-match';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import MatchDetailsComponent from './match-details/match-details.component';
import CartComponent from './cart/cart.component';
import CartSummaryComponent from './cart/summary/cart-summary.component';
import NavpanelComponent from './navpanel/navpanel.component';
import StadiumComponent from './stadium/stadium.component';

import CartService from './services/cart.service';
import MatchService from './services/match.service';
import TicketsService from './services/ticket.service';

import footerDirective from '../components/footer/footer.directive';
import mongooseErrorDirective from '../components/mongoose-error/mongoose-error.directive';
import navbarDirective from '../components/navbar/navbar.directive';
import oauthButtonsDirective from '../components/oauth-buttons/oauth-buttons.directive';

import { routerConfig } from './router';

import adminModule from './admin/admin.module';
import angularLocaleRuModule from './angular-locale_ru-ru';
import authModule from '../components/auth/auth.module';
import constantsModule from './app.constant';
import filtersModule from '../filters/filters';

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
import StadiumController from './stadium/stadium.controller';
import TicketsController from './tickets/tickets.controller';

import '../favicon.ico';
import './app.less';
import './../../node_modules/angular-datepicker/dist/index.min.css';
import './../../node_modules/moment-timezone';
import './../../node_modules/moment/min/moment-with-locales.min.js';

angular.module('metalistTicketsApp', [
  adminModule,
  angularLocaleRuModule.name,
  authModule,
  filtersModule,
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
  .component('stadium', StadiumComponent)
  .directive('footer', footerDirective)
  .directive('mongooseError', mongooseErrorDirective)
  .directive('navbar', navbarDirective)
  .directive('oauthButtons', oauthButtonsDirective)
  .service('CartService', CartService)
  .service('MatchService', MatchService)
  .service('TicketsService', TicketsService)
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
  .controller('StadiumController', StadiumController)
  .controller('TicketsController', TicketsController)
  .config(routerConfig)
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