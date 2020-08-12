"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _AddMore = _interopRequireDefault(require("./AddMore"));

var _Summary = _interopRequireDefault(require("./Summary"));

var _SelectedArea = _interopRequireDefault(require("./SelectedArea"));

var _index = require("./index");

var _Util = require("./Util");

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

var ResourceEvents = /*#__PURE__*/function (_Component) {
  _inherits(ResourceEvents, _Component);

  var _super = _createSuper(ResourceEvents);

  function ResourceEvents(props) {
    var _this;

    _classCallCheck(this, ResourceEvents);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "initDrag", function (ev) {
      var isSelecting = _this.state.isSelecting;
      if (isSelecting) return;
      if ((ev.srcElement || ev.target) !== _this.eventContainer) return;
      ev.stopPropagation();
      var resourceEvents = _this.props.resourceEvents;
      if (resourceEvents.groupOnly) return;
      var clientX = 0;

      if (supportTouch) {
        if (ev.changedTouches.length == 0) return;
        var touch = ev.changedTouches[0];
        clientX = touch.pageX;
      } else {
        if (ev.buttons !== undefined && ev.buttons !== 1) return;
        clientX = ev.clientX;
      }

      var schedulerData = _this.props.schedulerData;
      var cellWidth = schedulerData.getContentCellWidth();
      var pos = (0, _Util.getPos)(_this.eventContainer);
      var startX = clientX - pos.x;
      var leftIndex = Math.floor(startX / cellWidth);
      var left = leftIndex * cellWidth;
      var rightIndex = Math.ceil(startX / cellWidth);
      var width = (rightIndex - leftIndex) * cellWidth;

      _this.setState({
        startX: startX,
        left: left,
        leftIndex: leftIndex,
        width: width,
        rightIndex: rightIndex,
        isSelecting: true
      });

      if (supportTouch) {
        document.documentElement.addEventListener('touchmove', _this.doDrag, false);
        document.documentElement.addEventListener('touchend', _this.stopDrag, false);
        document.documentElement.addEventListener('touchcancel', _this.cancelDrag, false);
      } else {
        document.documentElement.addEventListener('mousemove', _this.doDrag, false);
        document.documentElement.addEventListener('mouseup', _this.stopDrag, false);
      }

      document.onselectstart = function () {
        return false;
      };

      document.ondragstart = function () {
        return false;
      };
    });

    _defineProperty(_assertThisInitialized(_this), "doDrag", function (ev) {
      ev.stopPropagation();
      var clientX = 0;

      if (supportTouch) {
        if (ev.changedTouches.length == 0) return;
        var touch = ev.changedTouches[0];
        clientX = touch.pageX;
      } else {
        clientX = ev.clientX;
      }

      var startX = _this.state.startX;
      var schedulerData = _this.props.schedulerData;
      var headers = schedulerData.headers;
      var cellWidth = schedulerData.getContentCellWidth();
      var pos = (0, _Util.getPos)(_this.eventContainer);
      var currentX = clientX - pos.x;
      var leftIndex = Math.floor(Math.min(startX, currentX) / cellWidth);
      leftIndex = leftIndex < 0 ? 0 : leftIndex;
      var left = leftIndex * cellWidth;
      var rightIndex = Math.ceil(Math.max(startX, currentX) / cellWidth);
      rightIndex = rightIndex > headers.length ? headers.length : rightIndex;
      var width = (rightIndex - leftIndex) * cellWidth;

      _this.setState({
        leftIndex: leftIndex,
        left: left,
        rightIndex: rightIndex,
        width: width,
        isSelecting: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "stopDrag", function (ev) {
      ev.stopPropagation();
      var _this$props = _this.props,
          schedulerData = _this$props.schedulerData,
          newEvent = _this$props.newEvent,
          resourceEvents = _this$props.resourceEvents;
      var headers = schedulerData.headers,
          events = schedulerData.events,
          config = schedulerData.config,
          cellUnit = schedulerData.cellUnit,
          localeMoment = schedulerData.localeMoment;
      var _this$state = _this.state,
          leftIndex = _this$state.leftIndex,
          rightIndex = _this$state.rightIndex;

      if (supportTouch) {
        document.documentElement.removeEventListener('touchmove', _this.doDrag, false);
        document.documentElement.removeEventListener('touchend', _this.stopDrag, false);
        document.documentElement.removeEventListener('touchcancel', _this.cancelDrag, false);
      } else {
        document.documentElement.removeEventListener('mousemove', _this.doDrag, false);
        document.documentElement.removeEventListener('mouseup', _this.stopDrag, false);
      }

      document.onselectstart = null;
      document.ondragstart = null;
      var startTime = headers[leftIndex].time;
      var endTime = resourceEvents.headerItems[rightIndex - 1].end;
      if (cellUnit !== _index.CellUnits.Hour) endTime = localeMoment(resourceEvents.headerItems[rightIndex - 1].start).hour(23).minute(59).second(59).format(_index.DATETIME_FORMAT);
      var slotId = resourceEvents.slotId;
      var slotName = resourceEvents.slotName;

      _this.setState({
        startX: 0,
        leftIndex: 0,
        left: 0,
        rightIndex: 0,
        width: 0,
        isSelecting: false
      });

      var hasConflict = false;

      if (config.checkConflict) {
        var start = localeMoment(startTime),
            end = localeMoment(endTime);
        events.forEach(function (e) {
          if (schedulerData._getEventSlotId(e) === slotId) {
            var eStart = localeMoment(e.start),
                eEnd = localeMoment(e.end);
            if (start >= eStart && start < eEnd || end > eStart && end <= eEnd || eStart >= start && eStart < end || eEnd > start && eEnd <= end) hasConflict = true;
          }
        });
      }

      if (hasConflict) {
        var conflictOccurred = _this.props.conflictOccurred;

        if (conflictOccurred != undefined) {
          conflictOccurred(schedulerData, 'New', {
            id: undefined,
            start: startTime,
            end: endTime,
            slotId: slotId,
            slotName: slotName,
            title: undefined
          }, _DnDTypes.DnDTypes.EVENT, slotId, slotName, startTime, endTime);
        } else {
          console.log('Conflict occurred, set conflictOccurred func in Scheduler to handle it');
        }
      } else {
        if (newEvent != undefined) newEvent(schedulerData, slotId, slotName, startTime, endTime);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "cancelDrag", function (ev) {
      ev.stopPropagation();
      var isSelecting = _this.state.isSelecting;

      if (isSelecting) {
        document.documentElement.removeEventListener('touchmove', _this.doDrag, false);
        document.documentElement.removeEventListener('touchend', _this.stopDrag, false);
        document.documentElement.removeEventListener('touchcancel', _this.cancelDrag, false);
        document.onselectstart = null;
        document.ondragstart = null;

        _this.setState({
          startX: 0,
          leftIndex: 0,
          left: 0,
          rightIndex: 0,
          width: 0,
          isSelecting: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAddMoreClick", function (headerItem) {
      var _this$props2 = _this.props,
          onSetAddMoreState = _this$props2.onSetAddMoreState,
          resourceEvents = _this$props2.resourceEvents,
          schedulerData = _this$props2.schedulerData;

      if (!!onSetAddMoreState) {
        var config = schedulerData.config;
        var cellWidth = schedulerData.getContentCellWidth();
        var index = resourceEvents.headerItems.indexOf(headerItem);

        if (index !== -1) {
          var left = index * (cellWidth - 1);
          var pos = (0, _Util.getPos)(_this.eventContainer);
          left = left + pos.x;
          var top = pos.y;
          var height = (headerItem.count + 1) * config.eventItemLineHeight + 20;
          onSetAddMoreState({
            headerItem: headerItem,
            left: left,
            top: top,
            height: height
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "eventContainerRef", function (element) {
      _this.eventContainer = element;
    });

    _this.state = {
      isSelecting: false,
      left: 0,
      width: 0
    };
    return _this;
  }

  _createClass(ResourceEvents, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var schedulerData = this.props.schedulerData;
      var config = schedulerData.config;

      if (config.creatable === true) {
        if (supportTouch) {// this.eventContainer.addEventListener('touchstart', this.initDrag, false);
        } else {
          this.eventContainer.addEventListener('mousedown', this.initDrag, false);
        }
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(np) {
      if (supportTouch) {// this.eventContainer.removeEventListener('touchstart', this.initDrag, false);
      } else {
        this.eventContainer.removeEventListener('mousedown', this.initDrag, false);
      }

      if (np.schedulerData.config.creatable) {
        if (supportTouch) {// this.eventContainer.addEventListener('touchstart', this.initDrag, false);
        } else {
          this.eventContainer.addEventListener('mousedown', this.initDrag, false);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          resourceEvents = _this$props3.resourceEvents,
          schedulerData = _this$props3.schedulerData,
          connectDropTarget = _this$props3.connectDropTarget,
          dndSource = _this$props3.dndSource;
      var cellUnit = schedulerData.cellUnit,
          startDate = schedulerData.startDate,
          endDate = schedulerData.endDate,
          config = schedulerData.config,
          localeMoment = schedulerData.localeMoment;
      var _this$state2 = this.state,
          isSelecting = _this$state2.isSelecting,
          left = _this$state2.left,
          width = _this$state2.width;
      var cellWidth = schedulerData.getContentCellWidth();
      var cellMaxEvents = schedulerData.getCellMaxEvents();
      var rowWidth = schedulerData.getContentTableWidth();
      var DnDEventItem = dndSource.getDragSource();
      var selectedArea = isSelecting ? /*#__PURE__*/_react["default"].createElement(_SelectedArea["default"], _extends({}, this.props, {
        left: left,
        width: width
      })) : /*#__PURE__*/_react["default"].createElement("div", null);
      var eventList = [];
      resourceEvents.headerItems.forEach(function (headerItem, index) {
        if (headerItem.count > 0 || headerItem.summary != undefined) {
          var isTop = config.summaryPos === _index.SummaryPos.TopRight || config.summaryPos === _index.SummaryPos.Top || config.summaryPos === _index.SummaryPos.TopLeft;
          var marginTop = resourceEvents.hasSummary && isTop ? 1 + config.eventItemLineHeight : 1;
          var renderEventsMaxIndex = headerItem.addMore === 0 ? cellMaxEvents : headerItem.addMoreIndex;
          headerItem.events.forEach(function (evt, idx) {
            if (idx < renderEventsMaxIndex && evt !== undefined && evt.render) {
              var durationStart = localeMoment(startDate);
              var durationEnd = localeMoment(endDate).add(1, 'days');

              if (cellUnit === _index.CellUnits.Hour) {
                durationStart = localeMoment(startDate).add(config.dayStartFrom, 'hours');
                durationEnd = localeMoment(endDate).add(config.dayStopTo + 1, 'hours');
              }

              var eventStart = localeMoment(evt.eventItem.start);
              var eventEnd = localeMoment(evt.eventItem.end);
              var isStart = eventStart >= durationStart;
              var isEnd = eventEnd <= durationEnd;

              var _left = index * cellWidth + (index > 0 ? 2 : 3);

              var _width = evt.span * cellWidth - (index > 0 ? 5 : 6) > 0 ? evt.span * cellWidth - (index > 0 ? 5 : 6) : 0;

              var top = marginTop + idx * config.eventItemLineHeight;

              var eventItem = /*#__PURE__*/_react["default"].createElement(DnDEventItem, _extends({}, _this2.props, {
                key: evt.eventItem.id,
                eventItem: evt.eventItem,
                isStart: isStart,
                isEnd: isEnd,
                isInPopover: false,
                left: _left,
                width: _width,
                top: top,
                leftIndex: index,
                rightIndex: index + evt.span
              }));

              eventList.push(eventItem);
            }
          });

          if (headerItem.addMore > 0) {
            var _left2 = index * cellWidth + (index > 0 ? 2 : 3);

            var _width2 = cellWidth - (index > 0 ? 5 : 6);

            var top = marginTop + headerItem.addMoreIndex * config.eventItemLineHeight;

            var addMoreItem = /*#__PURE__*/_react["default"].createElement(_AddMore["default"], _extends({}, _this2.props, {
              key: headerItem.time,
              headerItem: headerItem,
              number: headerItem.addMore,
              left: _left2,
              width: _width2,
              top: top,
              clickAction: _this2.onAddMoreClick
            }));

            eventList.push(addMoreItem);
          }

          if (headerItem.summary != undefined) {
            var _top = isTop ? 1 : resourceEvents.rowHeight - config.eventItemLineHeight + 1;

            var _left3 = index * cellWidth + (index > 0 ? 2 : 3);

            var _width3 = cellWidth - (index > 0 ? 5 : 6);

            var key = "".concat(resourceEvents.slotId, "_").concat(headerItem.time);

            var summary = /*#__PURE__*/_react["default"].createElement(_Summary["default"], {
              key: key,
              schedulerData: schedulerData,
              summary: headerItem.summary,
              left: _left3,
              width: _width3,
              top: _top
            });

            eventList.push(summary);
          }
        }
      });
      return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        style: {
          width: rowWidth
        }
      }, connectDropTarget( /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.eventContainerRef,
        className: "event-container",
        style: {
          height: resourceEvents.rowHeight
        }
      }, selectedArea, eventList))));
    }
  }]);

  return ResourceEvents;
}(_react.Component);

_defineProperty(ResourceEvents, "propTypes", {
  resourceEvents: _propTypes.PropTypes.object.isRequired,
  schedulerData: _propTypes.PropTypes.object.isRequired,
  dndSource: _propTypes.PropTypes.object.isRequired,
  onSetAddMoreState: _propTypes.PropTypes.func,
  updateEventStart: _propTypes.PropTypes.func,
  updateEventEnd: _propTypes.PropTypes.func,
  moveEvent: _propTypes.PropTypes.func,
  movingEvent: _propTypes.PropTypes.func,
  conflictOccurred: _propTypes.PropTypes.func,
  subtitleGetter: _propTypes.PropTypes.func,
  eventItemClick: _propTypes.PropTypes.func,
  viewEventClick: _propTypes.PropTypes.func,
  viewEventText: _propTypes.PropTypes.string,
  viewEvent2Click: _propTypes.PropTypes.func,
  viewEvent2Text: _propTypes.PropTypes.string,
  newEvent: _propTypes.PropTypes.func,
  eventItemTemplateResolver: _propTypes.PropTypes.func
});

var _default = ResourceEvents;
exports["default"] = _default;