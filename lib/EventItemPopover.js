"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _col2 = _interopRequireDefault(require("antd/lib/col"));

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/grid/style/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var EventItemPopover = /*#__PURE__*/function (_Component) {
  _inherits(EventItemPopover, _Component);

  var _super = _createSuper(EventItemPopover);

  function EventItemPopover(props) {
    _classCallCheck(this, EventItemPopover);

    return _super.call(this, props);
  }

  _createClass(EventItemPopover, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          schedulerData = _this$props.schedulerData,
          eventItem = _this$props.eventItem,
          title = _this$props.title,
          startTime = _this$props.startTime,
          endTime = _this$props.endTime,
          statusColor = _this$props.statusColor,
          subtitleGetter = _this$props.subtitleGetter,
          viewEventClick = _this$props.viewEventClick,
          viewEventText = _this$props.viewEventText,
          viewEvent2Click = _this$props.viewEvent2Click,
          viewEvent2Text = _this$props.viewEvent2Text,
          eventItemPopoverTemplateResolver = _this$props.eventItemPopoverTemplateResolver;
      var localeMoment = schedulerData.localeMoment,
          config = schedulerData.config;
      var start = localeMoment(startTime),
          end = localeMoment(endTime);

      if (eventItemPopoverTemplateResolver != undefined) {
        return eventItemPopoverTemplateResolver(schedulerData, eventItem, title, start, end, statusColor);
      } else {
        var subtitleRow = /*#__PURE__*/_react["default"].createElement("div", null);

        if (subtitleGetter !== undefined) {
          var subtitle = subtitleGetter(schedulerData, eventItem);

          if (subtitle != undefined) {
            subtitleRow = /*#__PURE__*/_react["default"].createElement(_row["default"], {
              type: "flex",
              align: "middle"
            }, /*#__PURE__*/_react["default"].createElement(_col2["default"], {
              span: 2
            }, /*#__PURE__*/_react["default"].createElement("div", null)), /*#__PURE__*/_react["default"].createElement(_col2["default"], {
              span: 22,
              className: "overflow-text"
            }, /*#__PURE__*/_react["default"].createElement("span", {
              className: "header2-text",
              title: subtitle
            }, subtitle)));
          }
        }

        var opsRow = /*#__PURE__*/_react["default"].createElement("div", null);

        if (viewEventText !== undefined && viewEventClick !== undefined && (eventItem.clickable1 == undefined || eventItem.clickable1)) {
          var col = /*#__PURE__*/_react["default"].createElement(_col2["default"], {
            span: 22
          }, /*#__PURE__*/_react["default"].createElement("span", {
            className: "header2-text",
            style: {
              color: '#108EE9',
              cursor: 'pointer'
            },
            onClick: function onClick() {
              viewEventClick(schedulerData, eventItem);
            }
          }, viewEventText));

          if (viewEvent2Text !== undefined && viewEvent2Click !== undefined && (eventItem.clickable2 == undefined || eventItem.clickable2)) {
            col = /*#__PURE__*/_react["default"].createElement(_col2["default"], {
              span: 22
            }, /*#__PURE__*/_react["default"].createElement("span", {
              className: "header2-text",
              style: {
                color: '#108EE9',
                cursor: 'pointer'
              },
              onClick: function onClick() {
                viewEventClick(schedulerData, eventItem);
              }
            }, viewEventText), /*#__PURE__*/_react["default"].createElement("span", {
              className: "header2-text",
              style: {
                color: '#108EE9',
                cursor: 'pointer',
                marginLeft: '16px'
              },
              onClick: function onClick() {
                viewEvent2Click(schedulerData, eventItem);
              }
            }, viewEvent2Text));
          }

          ;
          opsRow = /*#__PURE__*/_react["default"].createElement(_row["default"], {
            type: "flex",
            align: "middle"
          }, /*#__PURE__*/_react["default"].createElement(_col2["default"], {
            span: 2
          }, /*#__PURE__*/_react["default"].createElement("div", null)), col);
        } else if (viewEvent2Text !== undefined && viewEvent2Click !== undefined && (eventItem.clickable2 == undefined || eventItem.clickable2)) {
          var _col = /*#__PURE__*/_react["default"].createElement(_col2["default"], {
            span: 22
          }, /*#__PURE__*/_react["default"].createElement("span", {
            className: "header2-text",
            style: {
              color: '#108EE9',
              cursor: 'pointer'
            },
            onClick: function onClick() {
              viewEvent2Click(schedulerData, eventItem);
            }
          }, viewEvent2Text));

          opsRow = /*#__PURE__*/_react["default"].createElement(_row["default"], {
            type: "flex",
            align: "middle"
          }, /*#__PURE__*/_react["default"].createElement(_col2["default"], {
            span: 2
          }, /*#__PURE__*/_react["default"].createElement("div", null)), _col);
        }

        var dateFormat = config.eventItemPopoverDateFormat;
        return /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: '300px'
          }
        }, /*#__PURE__*/_react["default"].createElement(_row["default"], {
          type: "flex",
          align: "middle"
        }, /*#__PURE__*/_react["default"].createElement(_col2["default"], {
          span: 2
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "status-dot",
          style: {
            backgroundColor: statusColor
          }
        })), /*#__PURE__*/_react["default"].createElement(_col2["default"], {
          span: 22,
          className: "overflow-text"
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: "header2-text",
          title: title
        }, title))), subtitleRow, /*#__PURE__*/_react["default"].createElement(_row["default"], {
          type: "flex",
          align: "middle"
        }, /*#__PURE__*/_react["default"].createElement(_col2["default"], {
          span: 2
        }, /*#__PURE__*/_react["default"].createElement("div", null)), /*#__PURE__*/_react["default"].createElement(_col2["default"], {
          span: 22
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: "header1-text"
        }, start.format('HH:mm')), /*#__PURE__*/_react["default"].createElement("span", {
          className: "help-text",
          style: {
            marginLeft: '8px'
          }
        }, start.format(dateFormat)), /*#__PURE__*/_react["default"].createElement("span", {
          className: "header2-text",
          style: {
            marginLeft: '8px'
          }
        }, "-"), /*#__PURE__*/_react["default"].createElement("span", {
          className: "header1-text",
          style: {
            marginLeft: '8px'
          }
        }, end.format('HH:mm')), /*#__PURE__*/_react["default"].createElement("span", {
          className: "help-text",
          style: {
            marginLeft: '8px'
          }
        }, end.format(dateFormat)))), opsRow);
      }
    }
  }]);

  return EventItemPopover;
}(_react.Component);

_defineProperty(EventItemPopover, "propTypes", {
  schedulerData: _propTypes.PropTypes.object.isRequired,
  eventItem: _propTypes.PropTypes.object.isRequired,
  title: _propTypes.PropTypes.string.isRequired,
  startTime: _propTypes.PropTypes.string.isRequired,
  endTime: _propTypes.PropTypes.string.isRequired,
  statusColor: _propTypes.PropTypes.string.isRequired,
  subtitleGetter: _propTypes.PropTypes.func,
  viewEventClick: _propTypes.PropTypes.func,
  viewEventText: _propTypes.PropTypes.string,
  viewEvent2Click: _propTypes.PropTypes.func,
  viewEvent2Text: _propTypes.PropTypes.string,
  eventItemPopoverTemplateResolver: _propTypes.PropTypes.func
});

var _default = EventItemPopover;
exports["default"] = _default;