"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNonWorkingTime = exports.getScrollSpecialMoment = exports.getEventText = exports.getDateLabel = exports.getNonAgendaViewBodyCellBgColor = exports.getCustomDate = exports.getSummary = void 0;

var _index = require("./index");

//getSummary func example
var getSummary = function getSummary(schedulerData, headerEvents, slotId, slotName, headerStart, headerEnd) {
  return {
    text: 'Summary',
    color: 'red',
    fontSize: '1.2rem'
  };
}; //getCustomDate example


exports.getSummary = getSummary;

var getCustomDate = function getCustomDate(schedulerData, num) {
  var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var viewType = schedulerData.viewType;
  var selectDate = schedulerData.startDate;
  if (date != undefined) selectDate = date;
  var startDate = num === 0 ? selectDate : schedulerData.localeMoment(selectDate).add(2 * num, 'days').format(_index.DATE_FORMAT),
      endDate = schedulerData.localeMoment(startDate).add(1, 'days').format(_index.DATE_FORMAT),
      cellUnit = _index.CellUnits.Hour;

  if (viewType === _index.ViewTypes.Custom1) {
    var monday = schedulerData.localeMoment(selectDate).startOf('week').format(_index.DATE_FORMAT);
    startDate = num === 0 ? monday : schedulerData.localeMoment(monday).add(2 * num, 'weeks').format(_index.DATE_FORMAT);
    endDate = schedulerData.localeMoment(startDate).add(1, 'weeks').endOf('week').format(_index.DATE_FORMAT);
    cellUnit = _index.CellUnits.Day;
  } else if (viewType === _index.ViewTypes.Custom2) {
    var firstDayOfMonth = schedulerData.localeMoment(selectDate).startOf('month').format(_index.DATE_FORMAT);
    startDate = num === 0 ? firstDayOfMonth : schedulerData.localeMoment(firstDayOfMonth).add(2 * num, 'months').format(_index.DATE_FORMAT);
    endDate = schedulerData.localeMoment(startDate).add(1, 'months').endOf('month').format(_index.DATE_FORMAT);
    cellUnit = _index.CellUnits.Day;
  }

  return {
    startDate: startDate,
    endDate: endDate,
    cellUnit: cellUnit
  };
}; //getNonAgendaViewBodyCellBgColor example


exports.getCustomDate = getCustomDate;

var getNonAgendaViewBodyCellBgColor = function getNonAgendaViewBodyCellBgColor(schedulerData, slotId, header) {
  if (!header.nonWorkingTime) {
    return '#87e8de';
  }

  return undefined;
}; //getDateLabel func example


exports.getNonAgendaViewBodyCellBgColor = getNonAgendaViewBodyCellBgColor;

var getDateLabel = function getDateLabel(schedulerData, viewType, startDate, endDate) {
  var start = schedulerData.localeMoment(startDate);
  var end = schedulerData.localeMoment(endDate);
  var dateLabel = start.format('MMM D, YYYY');

  if (viewType === _index.ViewTypes.Week || start != end && (viewType === _index.ViewTypes.Custom || viewType === _index.ViewTypes.Custom1 || viewType === _index.ViewTypes.Custom2)) {
    dateLabel = "".concat(start.format('MMM D'), "-").concat(end.format('D, YYYY'));
    if (start.month() !== end.month()) dateLabel = "".concat(start.format('MMM D'), "-").concat(end.format('MMM D, YYYY'));
    if (start.year() !== end.year()) dateLabel = "".concat(start.format('MMM D, YYYY'), "-").concat(end.format('MMM D, YYYY'));
  } else if (viewType === _index.ViewTypes.Month) {
    dateLabel = start.format('MMMM YYYY');
  } else if (viewType === _index.ViewTypes.Quarter) {
    dateLabel = "".concat(start.format('MMM D'), "-").concat(end.format('MMM D, YYYY'));
  } else if (viewType === _index.ViewTypes.Year) {
    dateLabel = start.format('YYYY');
  }

  return dateLabel;
};

exports.getDateLabel = getDateLabel;

var getEventText = function getEventText(schedulerData, event) {
  if (!schedulerData.isEventPerspective) return event.title;
  var eventText = event.title;
  schedulerData.resources.forEach(function (item) {
    if (item.id === event.resourceId) {
      eventText = item.name;
    }
  });
  return eventText;
};

exports.getEventText = getEventText;

var getScrollSpecialMoment = function getScrollSpecialMoment(schedulerData, startMoment, endMoment) {
  // return endMoment;
  var localeMoment = schedulerData.localeMoment;
  return localeMoment();
};

exports.getScrollSpecialMoment = getScrollSpecialMoment;

var isNonWorkingTime = function isNonWorkingTime(schedulerData, time) {
  var localeMoment = schedulerData.localeMoment;

  if (schedulerData.cellUnit === _index.CellUnits.Hour) {
    var hour = localeMoment(time).hour();
    if (hour < 9 || hour > 18) return true;
  } else {
    var dayOfWeek = localeMoment(time).weekday();
    if (dayOfWeek === 0 || dayOfWeek === 6) return true;
  }

  return false;
};

exports.isNonWorkingTime = isNonWorkingTime;
var _default = {
  //getSummaryFunc: getSummary,
  getSummaryFunc: undefined,
  //getCustomDateFunc: getCustomDate,
  getCustomDateFunc: undefined,
  // getNonAgendaViewBodyCellBgColorFunc: getNonAgendaViewBodyCellBgColor,
  getNonAgendaViewBodyCellBgColorFunc: undefined,
  getScrollSpecialMomentFunc: getScrollSpecialMoment,
  getDateLabelFunc: getDateLabel,
  getEventTextFunc: getEventText,
  isNonWorkingTimeFunc: isNonWorkingTime
};
exports["default"] = _default;