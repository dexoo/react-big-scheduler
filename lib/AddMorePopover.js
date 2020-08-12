"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _row = _interopRequireDefault(require("antd/lib/row"));

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/grid/style/index.css");

var _EventItem = _interopRequireDefault(require("./EventItem"));

var _DnDSource = _interopRequireDefault(require("./DnDSource"));

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

var AddMorePopover = /*#__PURE__*/function (_Component) {
  _inherits(AddMorePopover, _Component);

  var _super = _createSuper(AddMorePopover);

  function AddMorePopover(props) {
    var _this;

    _classCallCheck(this, AddMorePopover);

    _this = _super.call(this, props);
    _this.state = {
      dndSource: new _DnDSource["default"](function (props) {
        return props.eventItem;
      }, _EventItem["default"])
    };
    return _this;
  }

  _createClass(AddMorePopover, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          headerItem = _this$props.headerItem,
          left = _this$props.left,
          top = _this$props.top,
          height = _this$props.height,
          closeAction = _this$props.closeAction,
          schedulerData = _this$props.schedulerData;
      var config = schedulerData.config,
          localeMoment = schedulerData.localeMoment;
      var time = headerItem.time,
          start = headerItem.start,
          end = headerItem.end,
          events = headerItem.events;
      var header = localeMoment(time).format(config.addMorePopoverHeaderFormat);
      var durationStart = localeMoment(start);
      var durationEnd = localeMoment(end);
      var eventList = [];
      var i = 0;
      var DnDEventItem = this.state.dndSource.getDragSource();
      events.forEach(function (evt) {
        if (evt !== undefined) {
          i++;
          var eventStart = localeMoment(evt.eventItem.start);
          var eventEnd = localeMoment(evt.eventItem.end);
          var isStart = eventStart >= durationStart;
          var isEnd = eventEnd < durationEnd;
          var eventItemLeft = 10;
          var eventItemWidth = 138;
          var eventItemTop = 12 + i * config.eventItemLineHeight;

          var eventItem = /*#__PURE__*/_react["default"].createElement(DnDEventItem, _extends({}, _this2.props, {
            key: evt.eventItem.id,
            eventItem: evt.eventItem,
            leftIndex: 0,
            isInPopover: true,
            isStart: isStart,
            isEnd: isEnd,
            rightIndex: 1,
            left: eventItemLeft,
            width: eventItemWidth,
            top: eventItemTop
          }));

          eventList.push(eventItem);
        }
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "add-more-popover-overlay",
        style: {
          left: left,
          top: top,
          height: height,
          width: '170px'
        }
      }, /*#__PURE__*/_react["default"].createElement(_row["default"], {
        type: "flex",
        justify: "space-between",
        align: "middle"
      }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
        span: "22"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "base-text"
      }, header)), /*#__PURE__*/_react["default"].createElement(_col["default"], {
        span: "2"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        onClick: function onClick() {
          closeAction(undefined);
        }
      }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
        type: "cross"
      })))), eventList);
    }
  }]);

  return AddMorePopover;
}(_react.Component);

_defineProperty(AddMorePopover, "propTypes", {
  schedulerData: _propTypes.PropTypes.object.isRequired,
  headerItem: _propTypes.PropTypes.object.isRequired,
  left: _propTypes.PropTypes.number.isRequired,
  top: _propTypes.PropTypes.number.isRequired,
  height: _propTypes.PropTypes.number.isRequired,
  closeAction: _propTypes.PropTypes.func.isRequired,
  subtitleGetter: _propTypes.PropTypes.func,
  moveEvent: _propTypes.PropTypes.func,
  eventItemClick: _propTypes.PropTypes.func,
  viewEventClick: _propTypes.PropTypes.func,
  viewEventText: _propTypes.PropTypes.string,
  viewEvent2Click: _propTypes.PropTypes.func,
  viewEvent2Text: _propTypes.PropTypes.string,
  eventItemTemplateResolver: _propTypes.PropTypes.func
});

var _default = AddMorePopover;
exports["default"] = _default;