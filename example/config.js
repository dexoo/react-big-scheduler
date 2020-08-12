import {ViewTypes} from '../src/index';

export default {
  schedulerWidth: '100%',

  eventItemHeight: 30,
  eventItemLineHeight: 34,

  headerEnabled: true,
  scrollToSpecialMomentEnabled: false,
  eventItemPopoverEnabled: true,
  calendarPopoverEnabled: false,
  recurringEventsEnabled: false,

  resourceName: "Pracownik",

  nonAgendaDayCellHeaderFormat: "HH:mm",
  dayStartFrom: 5,
  dayStopTo: 20,

  views: [
    {viewName: 'Day', viewType: ViewTypes.Day, showAgenda: false, isEventPerspective: false}
  ],
}