import template from 'components/oauth-buttons/oauth-buttons.html';

const oauthButtonsDirective = () => {
        return {
            templateUrl: template,
            restrict: 'EA',
            controller: 'OauthButtonsCtrl',
            controllerAs: 'OauthButtons',
            scope: {
                classes: '@'
            }
        };
    };

export default oauthButtonsDirective;