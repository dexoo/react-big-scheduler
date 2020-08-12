"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _popover = _interopRequireDefault(require("antd/lib/popover"));

require("antd/lib/popover/style/index.css");

var _EventItemPopover = _interopRequireDefault(require("./EventItemPopover"));

var _index2 = require("./index");

var _DnDTypes = require("./DnDTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var supportTouch = ('ontouchstart' in window);

var EventItem = /*#__PURE__*/function (_Component) {
  _inherits(EventItem, _Component);

  var _super = _createSuper(EventItem);

  function EventItem(_props) {
    var _this;

    _classCallCheck(this, EventItem);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "initStartDrag", function (ev) {
      var _this$props = _this.props,
          schedulerData = _this$props.schedulerData,
          eventItem = _this$props.eventItem;

      var slotId = schedulerData._getEventSlotId(eventItem);

      var slot = schedulerData.getSlotById(slotId);
      if (!!slot && !!slot.groupOnly) return;
      if (schedulerData._isResizing()) return;
      ev.stopPropagation();
      var clientX = 0;

      if (supportTouch) {
        if (ev.changedTouches.length == 0) return;
        var touch = ev.changedTouches[0];
        clientX = touch.pageX;
      } else {
        if (ev.buttons !== undefined && ev.buttons !== 1) return;
        clientX = ev.clientX;
      }

      _this.setState({
        startX: clientX
      });

      schedulerData._startResizing();

      if (supportTouch) {
        _this.startResizer.addEventListener('touchmove', _this.doStartDrag, false);

        _this.startResizer.addEventListener('touchend', _this.stopStartDrag, false);

        _this.startResizer.addEventListener('touchcancel', _this.cancelStartDrag, false);
      } else {
        document.documentElement.addEventListener('mousemove', _this.doStartDrag, false);
        document.documentElement.addEventListener('mouseup', _this.stopStartDrag, false);
      }

      document.onselectstart = function () {
        return false;
      };

      document.ondragstart = function () {
        return false;
      };
    });

    _defineProperty(_assertThisInitialized(_this), "doStartDrag", function (ev) {
      ev.stopPropagation();
      var clientX = 0;

      if (supportTouch) {
        if (ev.changedTouches.length == 0) return;
        var touch = ev.changedTouches[0];
        clientX = touch.pageX;
      } else {
        clientX = ev.clientX;
      }

      var _this$props2 = _this.props,
          left = _this$props2.left,
          width = _this$props2.width,
          leftIndex = _this$props2.leftIndex,
          rightIndex = _this$props2.rightIndex,
          schedulerData = _this$props2.schedulerData;
      var cellWidth = schedulerData.getContentCellWidth();
      var offset = leftIndex > 0 ? 5 : 6;
      var minWidth = cellWidth - offset;
      var maxWidth = rightIndex * cellWidth - offset;
      var startX = _this.state.startX;
      var newLeft = left + clientX - startX;
      var newWidth = width + startX - clientX;

      if (newWidth < minWidth) {
        newWidth = minWidth;
        newLeft = (rightIndex - 1) * cellWidth + (rightIndex - 1 > 0 ? 2 : 3);
      } else if (newWidth > maxWidth) {
        newWidth = maxWidth;
        newLeft = 3;
      }

      _this.setState({
        left: newLeft,
        width: newWidth
      });
    });

    _defineProperty(_assertThisInitialized(_this), "stopStartDrag", function (ev) {
      ev.stopPropagation();

      if (supportTouch) {
        _this.startResizer.removeEventListener('touchmove', _this.doStartDrag, false);

        _this.startResizer.removeEventListener('touchend', _this.stopStartDrag, false);

        _this.startResizer.removeEventListener('touchcancel', _this.cancelStartDrag, false);
      } else {
        document.documentElement.removeEventListener('mousemove', _this.doStartDrag, false);
        document.documentElement.removeEventListener('mouseup', _this.stopStartDrag, false);
      }

      document.onselectstart = null;
      document.ondragstart = null;
      var _this$props3 = _this.props,
          width = _this$props3.width,
          left = _this$props3.left,
          top = _this$props3.top,
          leftIndex = _this$props3.leftIndex,
          rightIndex = _this$props3.rightIndex,
          schedulerData = _this$props3.schedulerData,
          eventItem = _this$props3.eventItem,
          updateEventStart = _this$props3.updateEventStart,
          conflictOccurred = _this$props3.conflictOccurred;

      schedulerData._stopResizing();

      if (_this.state.width === width) return;
      var clientX = 0;

      if (supportTouch) {
        if (ev.changedTouches.length == 0) {
          _this.setState({
            left: left,
            top: top,
            width: width
          });

          return;
        }

        var touch = ev.changedTouches[0];
        clientX = touch.pageX;
      } else {
        clientX = ev.clientX;
      }

      var cellUnit = schedulerData.cellUnit,
          events = schedulerData.events,
          config = schedulerData.config,
          localeMoment = schedulerData.localeMoment;
      var cellWidth = schedulerData.getContentCellWidth();
      var offset = leftIndex > 0 ? 5 : 6;
      var minWidth = cellWidth - offset;
      var maxWidth = rightIndex * cellWidth - offset;
      var startX = _this.state.startX;
      var newWidth = width + startX - clientX;
      var deltaX = clientX - startX;
      var sign = deltaX < 0 ? -1 : deltaX === 0 ? 0 : 1;
      var count = (sign > 0 ? Math.floor(Math.abs(deltaX) / cellWidth) : Math.ceil(Math.abs(deltaX) / cellWidth)) * sign;
      if (newWidth < minWidth) count = rightIndex - leftIndex - 1;else if (newWidth > maxWidth) count = -leftIndex;
      var newStart = localeMoment(eventItem.start).add(cellUnit === _index2.CellUnits.Hour ? count * config.minuteStep : count, cellUnit === _index2.CellUnits.Hour ? 'minutes' : 'days').format(_index2.DATETIME_FORMAT);

      if (count !== 0 && cellUnit !== _index2.CellUnits.Hour && config.displayWeekend === false) {
        if (count > 0) {
          var tempCount = 0,
              i = 0;

          while (true) {
            i++;
            var tempStart = localeMoment(eventItem.start).add(i, 'days');
            var dayOfWeek = tempStart.weekday();

            if (dayOfWeek !== 0 && dayOfWeek !== 6) {
              tempCount++;

              if (tempCount === count) {
                newStart = tempStart.format(_index2.DATETIME_FORMAT);
                break;
              }
            }
          }
        } else {
          var _tempCount = 0,
              _i = 0;

          while (true) {
            _i--;

            var _tempStart = localeMoment(eventItem.start).add(_i, 'days');

            var _dayOfWeek = _tempStart.weekday();

            if (_dayOfWeek !== 0 && _dayOfWeek !== 6) {
              _tempCount--;

              if (_tempCount === count) {
                newStart = _tempStart.format(_index2.DATETIME_FORMAT);
                break;
              }
            }
          }
        }
      }

      var hasConflict = false;

      var slotId = schedulerData._getEventSlotId(eventItem);

      var slotName = undefined;
      var slot = schedulerData.getSlotById(slotId);
      if (!!slot) slotName = slot.name;

      if (config.checkConflict) {
        var start = localeMoment(newStart),
            end = localeMoment(eventItem.end);
        events.forEach(function (e) {
          if (schedulerData._getEventSlotId(e) === slotId && e.id !== eventItem.id) {
            var eStart = localeMoment(e.start),
                eEnd = localeMoment(e.end);
            if (start >= eStart && start < eEnd || end > eStart && end <= eEnd || eStart >= start && eStart < end || eEnd > start && eEnd <= end) hasConflict = true;
          }
        });
      }

      if (hasConflict) {
        _this.setState({
          left: left,
          top: top,
          width: width
        });

        if (conflictOccurred != undefined) {
          conflictOccurred(schedulerData, 'StartResize', eventItem, _DnDTypes.DnDTypes.EVENT, slotId, slotName, newStart, eventItem.end);
        } else {
          console.log('Conflict occurred, set conflictOccurred func in Scheduler to handle it');
        }

        _this.subscribeResizeEvent(_this.props);
      } else {
        if (updateEventStart != undefined) updateEventStart(schedulerData, eventItem, newStart);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "cancelStartDrag", function (ev) {
      ev.stopPropagation();

      _this.startResizer.removeEventListener('touchmove', _this.doStartDrag, false);

      _this.startResizer.removeEventListener('touchend', _this.stopStartDrag, false);

      _this.startResizer.removeEventListener('touchcancel', _this.cancelStartDrag, false);

      document.onselectstart = null;
      document.ondragstart = null;
      var _this$props4 = _this.props,
          schedulerData = _this$props4.schedulerData,
          left = _this$props4.left,
          top = _this$props4.top,
          width = _this$props4.width;

      schedulerData._stopResizing();

      _this.setState({
        left: left,
        top: top,
        width: width
      });
    });

    _defineProperty(_assertThisInitialized(_this), "initEndDrag", function (ev) {
      var _this$props5 = _this.props,
          schedulerData = _this$props5.schedulerData,
          eventItem = _this$props5.eventItem;

      var slotId = schedulerData._getEventSlotId(eventItem);

      var slot = schedulerData.getSlotById(slotId);
      if (!!slot && !!slot.groupOnly) return;
      if (schedulerData._isResizing()) return;
      ev.stopPropagation();
      var clientX = 0;

      if (supportTouch) {
        if (ev.changedTouches.length == 0) return;
        var touch = ev.changedTouches[0];
        clientX = touch.pageX;
      } else {
        if (ev.buttons !== undefined && ev.buttons !== 1) return;
        clientX = ev.clientX;
      }

      _this.setState({
        endX: clientX
      });

      schedulerData._startResizing();

      if (supportTouch) {
        _this.endResizer.addEventListener('touchmove', _this.doEndDrag, false);

        _this.endResizer.addEventListener('touchend', _this.stopEndDrag, false);

        _this.endResizer.addEventListener('touchcancel', _this.cancelEndDrag, false);
      } else {
        document.documentElement.addEventListener('mousemove', _this.doEndDrag, false);
        document.documentElement.addEventListener('mouseup', _this.stopEndDrag, false);
      }

      document.onselectstart = function () {
        return false;
      };

      document.ondragstart = function () {
        return false;
      };
    });

    _defineProperty(_assertThisInitialized(_this), "doEndDrag", function (ev) {
      ev.stopPropagation();
      var clientX = 0;

      if (supportTouch) {
        if (ev.changedTouches.length == 0) return;
        var touch = ev.changedTouches[0];
        clientX = touch.pageX;
      } else {
        clientX = ev.clientX;
      }

      var _this$props6 = _this.props,
          width = _this$props6.width,
          leftIndex = _this$props6.leftIndex,
          schedulerData = _this$props6.schedulerData;
      var headers = schedulerData.headers;
      var cellWidth = schedulerData.getContentCellWidth();
      var offset = leftIndex > 0 ? 5 : 6;
      var minWidth = cellWidth - offset;
      var maxWidth = (headers.length - leftIndex) * cellWidth - offset;
      var endX = _this.state.endX;
      var newWidth = width + clientX - endX;
      if (newWidth < minWidth) newWidth = minWidth;else if (newWidth > maxWidth) newWidth = maxWidth;

      _this.setState({
        width: newWidth
      });
    });

    _defineProperty(_assertThisInitialized(_this), "stopEndDrag", function (ev) {
      ev.stopPropagation();

      if (supportTouch) {
        _this.endResizer.removeEventListener('touchmove', _this.doEndDrag, false);

        _this.endResizer.removeEventListener('touchend', _this.stopEndDrag, false);

        _this.endResizer.removeEventListener('touchcancel', _this.cancelEndDrag, false);
      } else {
        document.documentElement.removeEventListener('mousemove', _this.doEndDrag, false);
        document.documentElement.removeEventListener('mouseup', _this.stopEndDrag, false);
      }

      document.onselectstart = null;
      document.ondragstart = null;
      var _this$props7 = _this.props,
          width = _this$props7.width,
          left = _this$props7.left,
          top = _this$props7.top,
          leftIndex = _this$props7.leftIndex,
          rightIndex = _this$props7.rightIndex,
          schedulerData = _this$props7.schedulerData,
          eventItem = _this$props7.eventItem,
          updateEventEnd = _this$props7.updateEventEnd,
          conflictOccurred = _this$props7.conflictOccurred;

      schedulerData._stopResizing();

      if (_this.state.width === width) return;
      var clientX = 0;

      if (supportTouch) {
        if (ev.changedTouches.length == 0) {
          _this.setState({
            left: left,
            top: top,
            width: width
          });

          return;
        }

        var touch = ev.changedTouches[0];
        clientX = touch.pageX;
      } else {
        clientX = ev.clientX;
      }

      var headers = schedulerData.headers,
          cellUnit = schedulerData.cellUnit,
          events = schedulerData.events,
          config = schedulerData.config,
          localeMoment = schedulerData.localeMoment;
      var cellWidth = schedulerData.getContentCellWidth();
      var offset = leftIndex > 0 ? 5 : 6;
      var minWidth = cellWidth - offset;
      var maxWidth = (headers.length - leftIndex) * cellWidth - offset;
      var endX = _this.state.endX;
      var newWidth = width + clientX - endX;
      var deltaX = newWidth - width;
      var sign = deltaX < 0 ? -1 : deltaX === 0 ? 0 : 1;
      var count = (sign < 0 ? Math.floor(Math.abs(deltaX) / cellWidth) : Math.ceil(Math.abs(deltaX) / cellWidth)) * sign;
      if (newWidth < minWidth) count = leftIndex - rightIndex + 1;else if (newWidth > maxWidth) count = headers.length - rightIndex;
      var newEnd = localeMoment(eventItem.end).add(cellUnit === _index2.CellUnits.Hour ? count * config.minuteStep : count, cellUnit === _index2.CellUnits.Hour ? 'minutes' : 'days').format(_index2.DATETIME_FORMAT);

      if (count !== 0 && cellUnit !== _index2.CellUnits.Hour && config.displayWeekend === false) {
        if (count > 0) {
          var tempCount = 0,
              i = 0;

          while (true) {
            i++;
            var tempEnd = localeMoment(eventItem.end).add(i, 'days');
            var dayOfWeek = tempEnd.weekday();

            if (dayOfWeek !== 0 && dayOfWeek !== 6) {
              tempCount++;

              if (tempCount === count) {
                newEnd = tempEnd.format(_index2.DATETIME_FORMAT);
                break;
              }
            }
          }
        } else {
          var _tempCount2 = 0,
              _i2 = 0;

          while (true) {
            _i2--;

            var _tempEnd = localeMoment(eventItem.end).add(_i2, 'days');

            var _dayOfWeek2 = _tempEnd.weekday();

            if (_dayOfWeek2 !== 0 && _dayOfWeek2 !== 6) {
              _tempCount2--;

              if (_tempCount2 === count) {
                newEnd = _tempEnd.format(_index2.DATETIME_FORMAT);
                break;
              }
            }
          }
        }
      }

      var hasConflict = false;

      var slotId = schedulerData._getEventSlotId(eventItem);

      var slotName = undefined;
      var slot = schedulerData.getSlotById(slotId);
      if (!!slot) slotName = slot.name;

      if (config.checkConflict) {
        var start = localeMoment(eventItem.start),
            end = localeMoment(newEnd);
        events.forEach(function (e) {
          if (schedulerData._getEventSlotId(e) === slotId && e.id !== eventItem.id) {
            var eStart = localeMoment(e.start),
                eEnd = localeMoment(e.end);
            if (start >= eStart && start < eEnd || end > eStart && end <= eEnd || eStart >= start && eStart < end || eEnd > start && eEnd <= end) hasConflict = true;
          }
        });
      }

      if (hasConflict) {
        _this.setState({
          left: left,
          top: top,
          width: width
        });

        if (conflictOccurred != undefined) {
          conflictOccurred(schedulerData, 'EndResize', eventItem, _DnDTypes.DnDTypes.EVENT, slotId, slotName, eventItem.start, newEnd);
        } else {
          console.log('Conflict occurred, set conflictOccurred func in Scheduler to handle it');
        }

        _this.subscribeResizeEvent(_this.props);
      } else {
        if (updateEventEnd != undefined) updateEventEnd(schedulerData, eventItem, newEnd);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "cancelEndDrag", function (ev) {
      ev.stopPropagation();

      _this.endResizer.removeEventListener('touchmove', _this.doEndDrag, false);

      _this.endResizer.removeEventListener('touchend', _this.stopEndDrag, false);

      _this.endResizer.removeEventListener('touchcancel', _this.cancelEndDrag, false);

      document.onselectstart = null;
      document.ondragstart = null;
      var _this$props8 = _this.props,
          schedulerData = _this$props8.schedulerData,
          left = _this$props8.left,
          top = _this$props8.top,
          width = _this$props8.width;

      schedulerData._stopResizing();

      _this.setState({
        left: left,
        top: top,
        width: width
      });
    });

    _defineProperty(_assertThisInitialized(_this), "startResizable", function (props) {
      var eventItem = props.eventItem,
          isInPopover = props.isInPopover,
          schedulerData = props.schedulerData;
      var config = schedulerData.config;
      return config.startResizable === true && isInPopover === false && (eventItem.resizable == undefined || eventItem.resizable !== false) && (eventItem.startResizable == undefined || eventItem.startResizable !== false);
    });

    _defineProperty(_assertThisInitialized(_this), "endResizable", function (props) {
      var eventItem = props.eventItem,
          isInPopover = props.isInPopover,
          schedulerData = props.schedulerData;
      var config = schedulerData.config;
      return config.endResizable === true && isInPopover === false && (eventItem.resizable == undefined || eventItem.resizable !== false) && (eventItem.endResizable == undefined || eventItem.endResizable !== false);
    });

    _defineProperty(_assertThisInitialized(_this), "subscribeResizeEvent", function (props) {
      if (_this.startResizer != undefined) {
        if (supportTouch) {// this.startResizer.removeEventListener('touchstart', this.initStartDrag, false);
          // if (this.startResizable(props))
          //     this.startResizer.addEventListener('touchstart', this.initStartDrag, false);
        } else {
          _this.startResizer.removeEventListener('mousedown', _this.initStartDrag, false);

          if (_this.startResizable(props)) _this.startResizer.addEventListener('mousedown', _this.initStartDrag, false);
        }
      }

      if (_this.endResizer != undefined) {
        if (supportTouch) {// this.endResizer.removeEventListener('touchstart', this.initEndDrag, false);
          // if (this.endResizable(props))
          //     this.endResizer.addEventListener('touchstart', this.initEndDrag, false);
        } else {
          _this.endResizer.removeEventListener('mousedown', _this.initEndDrag, false);

          if (_this.endResizable(props)) _this.endResizer.addEventListener('mousedown', _this.initEndDrag, false);
        }
      }
    });

    var _left = _props.left,
        _top = _props.top,
        _width = _props.width;
    _this.state = {
      left: _left,
      top: _top,
      width: _width
    };
    _this.startResizer = null;
    _this.endResizer = null;
    return _this;
  }

  _createClass(EventItem, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(np) {
      var left = np.left,
          top = np.top,
          width = np.width;
      this.setState({
        left: left,
        top: top,
        width: width
      });
      this.subscribeResizeEvent(np);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.subscribeResizeEvent(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props9 = this.props,
          eventItem = _this$props9.eventItem,
          isStart = _this$props9.isStart,
          isEnd = _this$props9.isEnd,
          isInPopover = _this$props9.isInPopover,
          eventItemClick = _this$props9.eventItemClick,
          schedulerData = _this$props9.schedulerData,
          isDragging = _this$props9.isDragging,
          connectDragSource = _this$props9.connectDragSource,
          connectDragPreview = _this$props9.connectDragPreview,
          eventItemTemplateResolver = _this$props9.eventItemTemplateResolver;
      var config = schedulerData.config,
          localeMoment = schedulerData.localeMoment;
      var _this$state = this.state,
          left = _this$state.left,
          width = _this$state.width,
          top = _this$state.top;
      var roundCls = isStart ? isEnd ? 'round-all' : 'round-head' : isEnd ? 'round-tail' : 'round-none';
      var bgColor = config.defaultEventBgColor;
      if (!!eventItem.bgColor) bgColor = eventItem.bgColor;
      var titleText = schedulerData.behaviors.getEventTextFunc(schedulerData, eventItem);

      var content = /*#__PURE__*/_react["default"].createElement(_EventItemPopover["default"], _extends({}, this.props, {
        eventItem: eventItem,
        title: eventItem.title,
        startTime: eventItem.start,
        endTime: eventItem.end,
        statusColor: bgColor
      }));

      var start = localeMoment(eventItem.start);
      var eventTitle = isInPopover ? "".concat(start.format('HH:mm'), " ").concat(titleText) : titleText;

      var startResizeDiv = /*#__PURE__*/_react["default"].createElement("div", null);

      if (this.startResizable(this.props)) startResizeDiv = /*#__PURE__*/_react["default"].createElement("div", {
        className: "event-resizer event-start-resizer",
        ref: function ref(_ref) {
          return _this2.startResizer = _ref;
        }
      });

      var endResizeDiv = /*#__PURE__*/_react["default"].createElement("div", null);

      if (this.endResizable(this.props)) endResizeDiv = /*#__PURE__*/_react["default"].createElement("div", {
        className: "event-resizer event-end-resizer",
        ref: function ref(_ref2) {
          return _this2.endResizer = _ref2;
        }
      });

      var eventItemTemplate = /*#__PURE__*/_react["default"].createElement("div", {
        className: roundCls + ' event-item',
        key: eventItem.id,
        style: {
          height: config.eventItemHeight,
          backgroundColor: bgColor
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          marginLeft: '10px',
          lineHeight: "".concat(config.eventItemHeight, "px")
        }
      }, eventTitle));

      if (eventItemTemplateResolver != undefined) eventItemTemplate = eventItemTemplateResolver(schedulerData, eventItem, bgColor, isStart, isEnd, 'event-item', config.eventItemHeight, undefined);

      var a = /*#__PURE__*/_react["default"].createElement("a", {
        className: "timeline-event",
        style: {
          left: left,
          width: width,
          top: top
        },
        onClick: function onClick() {
          if (!!eventItemClick) eventItemClick(schedulerData, eventItem);
        }
      }, eventItemTemplate, startResizeDiv, endResizeDiv);

      return isDragging ? null : schedulerData._isResizing() || config.eventItemPopoverEnabled == false || eventItem.showPopover == false ? /*#__PURE__*/_react["default"].createElement("div", null, connectDragPreview(connectDragSource(a))) : /*#__PURE__*/_react["default"].createElement(_popover["default"], {
        placement: "bottomLeft",
        content: content,
        trigger: "hover"
      }, connectDragPreview(connectDragSource(a)));
    }
  }]);

  return EventItem;
}(_react.Component);

_defineProperty(EventItem, "propTypes", {
  schedulerData: _propTypes.PropTypes.object.isRequired,
  eventItem: _propTypes.PropTypes.object.isRequired,
  isStart: _propTypes.PropTypes.bool.isRequired,
  isEnd: _propTypes.PropTypes.bool.isRequired,
  left: _propTypes.PropTypes.number.isRequired,
  width: _propTypes.PropTypes.number.isRequired,
  top: _propTypes.PropTypes.number.isRequired,
  isInPopover: _propTypes.PropTypes.bool.isRequired,
  leftIndex: _propTypes.PropTypes.number.isRequired,
  rightIndex: _propTypes.PropTypes.number.isRequired,
  isDragging: _propTypes.PropTypes.bool.isRequired,
  connectDragSource: _propTypes.PropTypes.func.isRequired,
  connectDragPreview: _propTypes.PropTypes.func.isRequired,
  updateEventStart: _propTypes.PropTypes.func,
  updateEventEnd: _propTypes.PropTypes.func,
  moveEvent: _propTypes.PropTypes.func,
  subtitleGetter: _propTypes.PropTypes.func,
  eventItemClick: _propTypes.PropTypes.func,
  viewEventClick: _propTypes.PropTypes.func,
  viewEventText: _propTypes.PropTypes.string,
  viewEvent2Click: _propTypes.PropTypes.func,
  viewEvent2Text: _propTypes.PropTypes.string,
  conflictOccurred: _propTypes.PropTypes.func,
  eventItemTemplateResolver: _propTypes.PropTypes.func
});

var _default = EventItem;
exports["default"] = _default;