import template from './editor.html';

let editorComponent = {
  templateUrl: template,
  controller: 'EditorController',
  bindings: {
    matchToEdit: '<',
    priceSchemas: '<',
    onChange: '&'
  }
};

export default editorComponent;