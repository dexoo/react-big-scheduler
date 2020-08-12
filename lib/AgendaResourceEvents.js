"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _AgendaEventItem = _interopRequireDefault(require("./AgendaEventItem"));

var _index = require("./index");

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

var AgendaResourceEvents = /*#__PURE__*/function (_Component) {
  _inherits(AgendaResourceEvents, _Component);

  var _super = _createSuper(AgendaResourceEvents);

  function AgendaResourceEvents(props) {
    _classCallCheck(this, AgendaResourceEvents);

    return _super.call(this, props);
  }

  _createClass(AgendaResourceEvents, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          schedulerData = _this$props.schedulerData,
          resourceEvents = _this$props.resourceEvents,
          slotClickedFunc = _this$props.slotClickedFunc,
          slotItemTemplateResolver = _this$props.slotItemTemplateResolver;
      var startDate = schedulerData.startDate,
          endDate = schedulerData.endDate,
          config = schedulerData.config,
          localeMoment = schedulerData.localeMoment;
      var agendaResourceTableWidth = schedulerData.getResourceTableWidth();
      var width = agendaResourceTableWidth - 2;
      var events = [];
      resourceEvents.headerItems.forEach(function (item) {
        var start = localeMoment(startDate).format(_index.DATE_FORMAT),
            end = localeMoment(endDate).add(1, 'days').format(_index.DATE_FORMAT),
            headerStart = localeMoment(item.start).format(_index.DATE_FORMAT),
            headerEnd = localeMoment(item.end).format(_index.DATE_FORMAT);

        if (start === headerStart && end === headerEnd) {
          item.events.forEach(function (evt) {
            var durationStart = localeMoment(startDate);
            var durationEnd = localeMoment(endDate).add(1, 'days');
            var eventStart = localeMoment(evt.eventItem.start);
            var eventEnd = localeMoment(evt.eventItem.end);
            var isStart = eventStart >= durationStart;
            var isEnd = eventEnd < durationEnd;

            var eventItem = /*#__PURE__*/_react["default"].createElement(_AgendaEventItem["default"], _extends({}, _this.props, {
              key: evt.eventItem.id,
              eventItem: evt.eventItem,
              isStart: isStart,
              isEnd: isEnd
            }));

            events.push(eventItem);
          });
        }
      });
      var a = slotClickedFunc != undefined ? /*#__PURE__*/_react["default"].createElement("a", {
        onClick: function onClick() {
          slotClickedFunc(schedulerData, resourceEvents);
        }
      }, resourceEvents.slotName) : /*#__PURE__*/_react["default"].createElement("span", null, resourceEvents.slotName);

      var slotItem = /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: width
        },
        title: resourceEvents.slotName,
        className: "overflow-text header2-text"
      }, a);

      if (!!slotItemTemplateResolver) {
        var temp = slotItemTemplateResolver(schedulerData, resourceEvents, slotClickedFunc, width, "overflow-text header2-text");
        if (!!temp) slotItem = temp;
      }

      return /*#__PURE__*/_react["default"].createElement("tr", {
        style: {
          minHeight: config.eventItemLineHeight + 2
        }
      }, /*#__PURE__*/_react["default"].createElement("td", {
        "data-resource-id": resourceEvents.slotId
      }, slotItem), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "day-event-container"
      }, events)));
    }
  }]);

  return AgendaResourceEvents;
}(_react.Component);

_defineProperty(AgendaResourceEvents, "propTypes", {
  schedulerData: _propTypes.PropTypes.object.isRequired,
  resourceEvents: _propTypes.PropTypes.object.isRequired,
  subtitleGetter: _propTypes.PropTypes.func,
  eventItemClick: _propTypes.PropTypes.func,
  viewEventClick: _propTypes.PropTypes.func,
  viewEventText: _propTypes.PropTypes.string,
  viewEvent2Click: _propTypes.PropTypes.func,
  viewEvent2Text: _propTypes.PropTypes.string,
  slotClickedFunc: _propTypes.PropTypes.func,
  slotItemTemplateResolver: _propTypes.PropTypes.func
});

var _default = AgendaResourceEvents;
exports["default"] = _default;