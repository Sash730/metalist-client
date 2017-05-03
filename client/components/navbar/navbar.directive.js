import template from 'components/navbar/navbar.html';

const navbarDirective = () => ({
        templateUrl: template,
        restrict: 'E',
        controller: 'NavbarController',
        controllerAs: 'nav'
    });

export default navbarDirective;