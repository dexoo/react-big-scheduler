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

var AgendaEventItem = /*#__PURE__*/function (_Component) {
  _inherits(AgendaEventItem, _Component);

  var _super = _createSuper(AgendaEventItem);

  function AgendaEventItem(props) {
    _classCallCheck(this, AgendaEventItem);

    return _super.call(this, props);
  }

  _createClass(AgendaEventItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          eventItem = _this$props.eventItem,
          isStart = _this$props.isStart,
          isEnd = _this$props.isEnd,
          eventItemClick = _this$props.eventItemClick,
          schedulerData = _this$props.schedulerData,
          eventItemTemplateResolver = _this$props.eventItemTemplateResolver;
      var config = schedulerData.config;
      var roundCls = isStart ? isEnd ? 'round-all' : 'round-head' : isEnd ? 'round-tail' : 'round-none';
      var bgColor = config.defaultEventBgColor;
      if (!!eventItem.bgColor) bgColor = eventItem.bgColor;
      var titleText = schedulerData.behaviors.getEventTextFunc(schedulerData, eventItem);

      var content = /*#__PURE__*/_react["default"].createElement(_EventItemPopover["default"], _extends({}, this.props, {
        title: eventItem.title,
        startTime: eventItem.start,
        endTime: eventItem.end,
        statusColor: bgColor
      }));

      var eventItemTemplate = /*#__PURE__*/_react["default"].createElement("div", {
        className: roundCls + ' event-item',
        key: eventItem.id,
        style: {
          height: config.eventItemHeight,
          maxWidth: config.agendaMaxEventWidth,
          backgroundColor: bgColor
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          marginLeft: '10px',
          lineHeight: "".concat(config.eventItemHeight, "px")
        }
      }, titleText));

      if (eventItemTemplateResolver != undefined) eventItemTemplate = eventItemTemplateResolver(schedulerData, eventItem, bgColor, isStart, isEnd, 'event-item', config.eventItemHeight, config.agendaMaxEventWidth);
      return config.eventItemPopoverEnabled ? /*#__PURE__*/_react["default"].createElement(_popover["default"], {
        placement: "bottomLeft",
        content: content,
        trigger: "hover"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        className: "day-event",
        onClick: function onClick() {
          if (!!eventItemClick) eventItemClick(schedulerData, eventItem);
        }
      }, eventItemTemplate)) : /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("a", {
        className: "day-event",
        onClick: function onClick() {
          if (!!eventItemClick) eventItemClick(schedulerData, eventItem);
        }
      }, eventItemTemplate));
    }
  }]);

  return AgendaEventItem;
}(_react.Component);

_defineProperty(AgendaEventItem, "propTypes", {
  schedulerData: _propTypes.PropTypes.object.isRequired,
  eventItem: _propTypes.PropTypes.object.isRequired,
  isStart: _propTypes.PropTypes.bool.isRequired,
  isEnd: _propTypes.PropTypes.bool.isRequired,
  subtitleGetter: _propTypes.PropTypes.func,
  eventItemClick: _propTypes.PropTypes.func,
  viewEventClick: _propTypes.PropTypes.func,
  viewEventText: _propTypes.PropTypes.string,
  viewEvent2Click: _propTypes.PropTypes.func,
  viewEvent2Text: _propTypes.PropTypes.string,
  eventItemTemplateResolver: _propTypes.PropTypes.func
});

var _default = AgendaEventItem;
exports["default"] = _default;