import template from 'app/sector/sector.html';

export default function ($stateProvider) {
  'ngInject';
  $stateProvider.state('main.sector', {
    url: '/match/:id/tribune/:tribune/sectors/:sector',
    templateUrl: template,
    controller: 'SectorController',
    controllerAs: 'vm',
    resolve: {
      sector: (Stadium, $stateParams) => {
        return Stadium['tribune_' + $stateParams.tribune]['sector_' + $stateParams.sector];
      },
      match: (MatchService, $stateParams, $state) => {
        return MatchService
          .fetchMatch($stateParams.id)
          .catch((error) => {
            console.log(error);
            $state.go('404');
          });
      }
    }
  });
}


