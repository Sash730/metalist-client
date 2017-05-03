import angular from 'angular';
import UtilService from './util.service'

let utilModule = angular.module('util', [])
  .factory('Util', UtilService);

export default utilModule;