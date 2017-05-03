import angular from 'angular';
import uiRouter from 'angular-ui-router';
import authModule from '../../components/auth/auth.module';

let adminModule = angular.module('metalistTicketsApp.admin', [
  authModule,
  uiRouter
]);

export default adminModule;