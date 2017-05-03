import angular from 'angular';
import ngCookies from 'angular-cookies';
import uiRouter from 'angular-ui-router';
import utilModule from '../util/util.module';
import constantsModule from '../../app/app.constant';

let authModule = angular.module('metalistTicketsApp.auth', [
  constantsModule,
  utilModule,
  ngCookies,
  uiRouter
])
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

export default authModule;