import template from './stadium.html';



let stadiumComponent = {
  templateUrl: template,
  controller: 'StadiumController',
  bindings: {
    priceSchema: '<',
    onSectorSelect: '&'
  }
};

export default stadiumComponent;