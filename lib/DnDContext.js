"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactDnd = require("react-dnd");

var _Util = require("./Util");

var _DnDTypes = require("./DnDTypes");

var _index = require("./index");

var _ViewTypes = require("./ViewTypes");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DnDContext = function DnDContext(sources, DecoratedComponent) {
  var _this = this;

  _classCallCheck(this, DnDContext);

  _defineProperty(this, "getDropSpec", function () {
    return {
      drop: function drop(props, monitor, component) {
        var schedulerData = props.schedulerData,
            resourceEvents = props.resourceEvents;
        var cellUnit = schedulerData.cellUnit,
            localeMoment = schedulerData.localeMoment;
        var type = monitor.getItemType();
        var pos = (0, _Util.getPos)(component.eventContainer);
        var cellWidth = schedulerData.getContentCellWidth();
        var initialStartTime = null,
            initialEndTime = null;

        if (type === _DnDTypes.DnDTypes.EVENT) {
          var initialPoint = monitor.getInitialClientOffset();
          var initialLeftIndex = Math.floor((initialPoint.x - pos.x) / cellWidth);
          initialStartTime = resourceEvents.headerItems[initialLeftIndex].start;
          initialEndTime = resourceEvents.headerItems[initialLeftIndex].end;
          if (cellUnit !== _index.CellUnits.Hour) initialEndTime = localeMoment(resourceEvents.headerItems[initialLeftIndex].start).hour(23).minute(59).second(59).format(_index.DATETIME_FORMAT);
        }

        var point = monitor.getClientOffset();
        var leftIndex = Math.floor((point.x - pos.x) / cellWidth);
        var startTime = resourceEvents.headerItems[leftIndex].start;
        var endTime = resourceEvents.headerItems[leftIndex].end;
        if (cellUnit !== _index.CellUnits.Hour) endTime = localeMoment(resourceEvents.headerItems[leftIndex].start).hour(23).minute(59).second(59).format(_index.DATETIME_FORMAT);
        return {
          slotId: resourceEvents.slotId,
          slotName: resourceEvents.slotName,
          start: startTime,
          end: endTime,
          initialStart: initialStartTime,
          initialEnd: initialEndTime
        };
      },
      hover: function hover(props, monitor, component) {
        var schedulerData = props.schedulerData,
            resourceEvents = props.resourceEvents,
            movingEvent = props.movingEvent;
        var cellUnit = schedulerData.cellUnit,
            config = schedulerData.config,
            viewType = schedulerData.viewType,
            localeMoment = schedulerData.localeMoment;
        var item = monitor.getItem();
        var type = monitor.getItemType();
        var pos = (0, _Util.getPos)(component.eventContainer);
        var cellWidth = schedulerData.getContentCellWidth();
        var initialStart = null,
            initialEnd = null;

        if (type === _DnDTypes.DnDTypes.EVENT) {
          var initialPoint = monitor.getInitialClientOffset();
          var initialLeftIndex = Math.floor((initialPoint.x - pos.x) / cellWidth);
          initialStart = resourceEvents.headerItems[initialLeftIndex].start;
          initialEnd = resourceEvents.headerItems[initialLeftIndex].end;
          if (cellUnit !== _index.CellUnits.Hour) initialEnd = localeMoment(resourceEvents.headerItems[initialLeftIndex].start).hour(23).minute(59).second(59).format(_index.DATETIME_FORMAT);
        }

        var point = monitor.getClientOffset();
        var leftIndex = Math.floor((point.x - pos.x) / cellWidth);

        if (!resourceEvents.headerItems[leftIndex]) {
          return;
        }

        var newStart = resourceEvents.headerItems[leftIndex].start;
        var newEnd = resourceEvents.headerItems[leftIndex].end;
        if (cellUnit !== _index.CellUnits.Hour) newEnd = localeMoment(resourceEvents.headerItems[leftIndex].start).hour(23).minute(59).second(59).format(_index.DATETIME_FORMAT);
        var slotId = resourceEvents.slotId,
            slotName = resourceEvents.slotName;
        var action = 'New';
        var isEvent = type === _DnDTypes.DnDTypes.EVENT;

        if (isEvent) {
          var event = item;

          if (config.relativeMove) {
            newStart = localeMoment(event.start).add(localeMoment(newStart).diff(localeMoment(initialStart)), 'ms').format(_index.DATETIME_FORMAT);
          } else {
            if (viewType !== _ViewTypes.ViewTypes.Day) {
              var tmpMoment = localeMoment(newStart);
              newStart = localeMoment(event.start).year(tmpMoment.year()).month(tmpMoment.month()).date(tmpMoment.date()).format(_index.DATETIME_FORMAT);
            }
          }

          newEnd = localeMoment(newStart).add(localeMoment(event.end).diff(localeMoment(event.start)), 'ms').format(_index.DATETIME_FORMAT); //if crossResourceMove disabled, slot returns old value

          if (config.crossResourceMove === false) {
            slotId = schedulerData._getEventSlotId(item);
            slotName = undefined;
            var slot = schedulerData.getSlotById(slotId);
            if (!!slot) slotName = slot.name;
          }

          action = 'Move';
        }

        if (!!movingEvent) {
          movingEvent(schedulerData, slotId, slotName, newStart, newEnd, action, type, item);
        }
      },
      canDrop: function canDrop(props, monitor) {
        var schedulerData = props.schedulerData,
            resourceEvents = props.resourceEvents;
        var item = monitor.getItem();
        if (schedulerData._isResizing()) return false;
        var config = schedulerData.config;
        return config.movable && !resourceEvents.groupOnly && (item.movable == undefined || item.movable !== false);
      }
    };
  });

  _defineProperty(this, "getDropCollect", function (connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver()
    };
  });

  _defineProperty(this, "getDropTarget", function () {
    return (0, _reactDnd.DropTarget)(_toConsumableArray(_this.sourceMap.keys()), _this.getDropSpec(), _this.getDropCollect)(_this.DecoratedComponent);
  });

  _defineProperty(this, "getDndSource", function () {
    var dndType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _DnDTypes.DnDTypes.EVENT;
    return _this.sourceMap.get(dndType);
  });

  this.sourceMap = new Map();
  sources.forEach(function (item) {
    _this.sourceMap.set(item.dndType, item);
  });
  this.DecoratedComponent = DecoratedComponent;
};

exports["default"] = DnDContext;