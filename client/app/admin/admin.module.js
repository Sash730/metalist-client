import AdminController from './admin.controller';
import EditorController from './match-editor/editor/editor.controller';
import MatchEditorController from './match-editor/match-editor.controller';
import PriceSchemaController from './price-schema/price-schema.controller';
import SeasonTicketController from './season-ticket/season-ticket.controller';
import TicketsStatisticController from './tickets-statistic/tickets-statistic.controller';

import AdminUsersComponent from './admin-users/admin-users.component';
import BlockRowListComponent from './season-ticket/block-row-list/block-row-list.component';
import BlockRowFormComponent from './season-ticket/block-row-form/block-row-form.component';
import EditorComponent from './match-editor/editor/editor.component';
import MatchEditorComponent from './match-editor/match-editor.component';
import EventsSummaryComponent from './tickets-statistic/events-summary/events-summary.component';
import DaysSummaryComponent from './tickets-statistic/days-summary/days-summary.component';
import PriceSchemaComponent from './price-schema/price-schema.component';
import SeasonTicketComponent from './season-ticket/season-ticket.component';
import SeasonTicketListComponent from './season-ticket/season-ticket-list/season-ticket-list.component';
import SeasonTicketFormComponent from './season-ticket/season-ticket-form/season-ticket-form.component';
import TicketsStatisticComponent from './tickets-statistic/tickets-statistic.component';

import MatchEditorService from './match-editor/match-editor.service';
import PriceSchemaService from './price-schema/price-schema.service';
import SeasonTicketService from './season-ticket/season-ticket.service';

let adminModule = angular.module('metalistTicketsApp.admin', [])
  .service('MatchEditorService', MatchEditorService)
  .service('SeasonTicketService', SeasonTicketService)
  .service('PriceSchemaService', PriceSchemaService)
  .controller('AdminController', AdminController)
  .controller('EditorController', EditorController)
  .controller('MatchEditorController', MatchEditorController)
  .controller('PriceSchemaController', PriceSchemaController)
  .controller('SeasonTicketController', SeasonTicketController)
  .controller('TicketsStatisticController', TicketsStatisticController)
  .component('adminUsers', AdminUsersComponent)
  .component('blockRowList', BlockRowListComponent)
  .component('blockRowForm', BlockRowFormComponent)
  .component('editor', EditorComponent)
  .component('matchEditor', MatchEditorComponent)
  .component('eventsSummary', EventsSummaryComponent)
  .component('daysSummary', DaysSummaryComponent)
  .component('priceSchema', PriceSchemaComponent)
  .component('seasonTicket', SeasonTicketComponent)
  .component('seasonTicketList', SeasonTicketListComponent)
  .component('seasonTicketForm', SeasonTicketFormComponent)
  .component('ticketsStatistic', TicketsStatisticComponent)
  .name;

export default adminModule;