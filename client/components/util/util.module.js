import UtilService from './util.service'

let utilModule = angular.module('util', [])
  .factory('Util', UtilService)
  .name;

export default utilModule;