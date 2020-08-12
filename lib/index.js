"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DnDSource", {
  enumerable: true,
  get: function get() {
    return _DnDSource["default"];
  }
});
Object.defineProperty(exports, "DnDContext", {
  enumerable: true,
  get: function get() {
    return _DnDContext["default"];
  }
});
Object.defineProperty(exports, "AddMorePopover", {
  enumerable: true,
  get: function get() {
    return _AddMorePopover["default"];
  }
});
Object.defineProperty(exports, "ViewTypes", {
  enumerable: true,
  get: function get() {
    return _ViewTypes["default"];
  }
});
Object.defineProperty(exports, "CellUnits", {
  enumerable: true,
  get: function get() {
    return _CellUnits["default"];
  }
});
Object.defineProperty(exports, "SummaryPos", {
  enumerable: true,
  get: function get() {
    return _SummaryPos["default"];
  }
});
Object.defineProperty(exports, "SchedulerData", {
  enumerable: true,
  get: function get() {
    return _SchedulerData["default"];
  }
});
Object.defineProperty(exports, "DemoData", {
  enumerable: true,
  get: function get() {
    return _DemoData["default"];
  }
});
exports["default"] = exports.DATETIME_FORMAT = exports.DATE_FORMAT = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _row = _interopRequireDefault(require("antd/lib/row"));

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/select/style/index.css");

require("antd/lib/grid/style/index.css");

var _radio = _interopRequireDefault(require("antd/lib/radio"));

require("antd/lib/radio/style/index.css");

var _popover = _interopRequireDefault(require("antd/lib/popover"));

require("antd/lib/popover/style/index.css");

var _calendar = _interopRequireDefault(require("antd/lib/calendar"));

require("antd/lib/calendar/style/index.css");

var _EventItem = _interopRequireDefault(require("./EventItem"));

var _DnDSource = _interopRequireDefault(require("./DnDSource"));

var _DnDContext = _interopRequireDefault(require("./DnDContext"));

var _ResourceView = _interopRequireDefault(require("./ResourceView"));

var _HeaderView = _interopRequireDefault(require("./HeaderView"));

var _BodyView = _interopRequireDefault(require("./BodyView"));

var _ResourceEvents = _interopRequireDefault(require("./ResourceEvents"));

var _AgendaView = _interopRequireDefault(require("./AgendaView"));

var _AddMorePopover = _interopRequireDefault(require("./AddMorePopover"));

var _ViewTypes = _interopRequireDefault(require("./ViewTypes"));

var _CellUnits = _interopRequireDefault(require("./CellUnits"));

var _SummaryPos = _interopRequireDefault(require("./SummaryPos"));

var _SchedulerData = _interopRequireDefault(require("./SchedulerData"));

var _DemoData = _interopRequireDefault(require("./DemoData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var RadioButton = _radio["default"].Button;
var RadioGroup = _radio["default"].Group;

var Scheduler = /*#__PURE__*/function (_Component) {
  _inherits(Scheduler, _Component);

  var _super = _createSuper(Scheduler);

  function Scheduler(props) {
    var _this;

    _classCallCheck(this, Scheduler);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onWindowResize", function (e) {
      var schedulerData = _this.props.schedulerData;

      schedulerData._setDocumentWidth(document.documentElement.clientWidth);

      _this.setState({
        documentWidth: document.documentElement.clientWidth,
        documentHeight: document.documentElement.clientHeight
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resolveScrollbarSize", function () {
      var schedulerData = _this.props.schedulerData;
      var contentScrollbarHeight = 17,
          contentScrollbarWidth = 17,
          resourceScrollbarHeight = 17,
          resourceScrollbarWidth = 17,
          contentHeight = schedulerData.getSchedulerContentDesiredHeight();

      if (!!_this.schedulerContent) {
        contentScrollbarHeight = _this.schedulerContent.offsetHeight - _this.schedulerContent.clientHeight;
        contentScrollbarWidth = _this.schedulerContent.offsetWidth - _this.schedulerContent.clientWidth;
      }

      if (!!_this.schedulerResource) {
        resourceScrollbarHeight = _this.schedulerResource.offsetHeight - _this.schedulerResource.clientHeight;
        resourceScrollbarWidth = _this.schedulerResource.offsetWidth - _this.schedulerResource.clientWidth;
      }

      if (!!_this.schedulerContentBgTable && !!_this.schedulerContentBgTable.offsetHeight) {
        contentHeight = _this.schedulerContentBgTable.offsetHeight;
      }

      var tmpState = {};
      var needSet = false;

      if (contentScrollbarHeight != _this.state.contentScrollbarHeight) {
        tmpState = _objectSpread(_objectSpread({}, tmpState), {}, {
          contentScrollbarHeight: contentScrollbarHeight
        });
        needSet = true;
      }

      if (contentScrollbarWidth != _this.state.contentScrollbarWidth) {
        tmpState = _objectSpread(_objectSpread({}, tmpState), {}, {
          contentScrollbarWidth: contentScrollbarWidth
        });
        needSet = true;
      }

      if (contentHeight != _this.state.contentHeight) {
        tmpState = _objectSpread(_objectSpread({}, tmpState), {}, {
          contentHeight: contentHeight
        });
        needSet = true;
      }

      if (resourceScrollbarHeight != _this.state.resourceScrollbarHeight) {
        tmpState = _objectSpread(_objectSpread({}, tmpState), {}, {
          resourceScrollbarHeight: resourceScrollbarHeight
        });
        needSet = true;
      }

      if (resourceScrollbarWidth != _this.state.resourceScrollbarWidth) {
        tmpState = _objectSpread(_objectSpread({}, tmpState), {}, {
          resourceScrollbarWidth: resourceScrollbarWidth
        });
        needSet = true;
      }

      if (needSet) _this.setState(tmpState);
    });

    _defineProperty(_assertThisInitialized(_this), "schedulerHeadRef", function (element) {
      _this.schedulerHead = element;
    });

    _defineProperty(_assertThisInitialized(_this), "onSchedulerHeadMouseOver", function () {
      _this.currentArea = 2;
    });

    _defineProperty(_assertThisInitialized(_this), "onSchedulerHeadMouseOut", function () {
      _this.currentArea = -1;
    });

    _defineProperty(_assertThisInitialized(_this), "onSchedulerHeadScroll", function (proxy, event) {
      if ((_this.currentArea === 2 || _this.currentArea === -1) && _this.schedulerContent.scrollLeft != _this.schedulerHead.scrollLeft) _this.schedulerContent.scrollLeft = _this.schedulerHead.scrollLeft;
    });

    _defineProperty(_assertThisInitialized(_this), "schedulerResourceRef", function (element) {
      _this.schedulerResource = element;
    });

    _defineProperty(_assertThisInitialized(_this), "onSchedulerResourceMouseOver", function () {
      _this.currentArea = 1;
    });

    _defineProperty(_assertThisInitialized(_this), "onSchedulerResourceMouseOut", function () {
      _this.currentArea = -1;
    });

    _defineProperty(_assertThisInitialized(_this), "onSchedulerResourceScroll", function (proxy, event) {
      if ((_this.currentArea === 1 || _this.currentArea === -1) && _this.schedulerContent.scrollTop != _this.schedulerResource.scrollTop) _this.schedulerContent.scrollTop = _this.schedulerResource.scrollTop;
    });

    _defineProperty(_assertThisInitialized(_this), "schedulerContentRef", function (element) {
      _this.schedulerContent = element;
    });

    _defineProperty(_assertThisInitialized(_this), "schedulerContentBgTableRef", function (element) {
      _this.schedulerContentBgTable = element;
    });

    _defineProperty(_assertThisInitialized(_this), "onSchedulerContentMouseOver", function () {
      _this.currentArea = 0;
    });

    _defineProperty(_assertThisInitialized(_this), "onSchedulerContentMouseOut", function () {
      _this.currentArea = -1;
    });

    _defineProperty(_assertThisInitialized(_this), "onSchedulerContentScroll", function (proxy, event) {
      if (_this.currentArea === 0 || _this.currentArea === -1) {
        if (_this.schedulerHead.scrollLeft != _this.schedulerContent.scrollLeft) _this.schedulerHead.scrollLeft = _this.schedulerContent.scrollLeft;
        if (_this.schedulerResource.scrollTop != _this.schedulerContent.scrollTop) _this.schedulerResource.scrollTop = _this.schedulerContent.scrollTop;
      }

      var _this$props = _this.props,
          schedulerData = _this$props.schedulerData,
          onScrollLeft = _this$props.onScrollLeft,
          onScrollRight = _this$props.onScrollRight,
          onScrollTop = _this$props.onScrollTop,
          onScrollBottom = _this$props.onScrollBottom;
      var _this$state = _this.state,
          scrollLeft = _this$state.scrollLeft,
          scrollTop = _this$state.scrollTop;

      if (_this.schedulerContent.scrollLeft !== scrollLeft) {
        if (_this.schedulerContent.scrollLeft === 0 && onScrollLeft != undefined) {
          onScrollLeft(schedulerData, _this.schedulerContent, _this.schedulerContent.scrollWidth - _this.schedulerContent.clientWidth);
        }

        if (_this.schedulerContent.scrollLeft === _this.schedulerContent.scrollWidth - _this.schedulerContent.clientWidth && onScrollRight != undefined) {
          onScrollRight(schedulerData, _this.schedulerContent, _this.schedulerContent.scrollWidth - _this.schedulerContent.clientWidth);
        }
      } else if (_this.schedulerContent.scrollTop !== scrollTop) {
        if (_this.schedulerContent.scrollTop === 0 && onScrollTop != undefined) {
          onScrollTop(schedulerData, _this.schedulerContent, _this.schedulerContent.scrollHeight - _this.schedulerContent.clientHeight);
        }

        if (_this.schedulerContent.scrollTop === _this.schedulerContent.scrollHeight - _this.schedulerContent.clientHeight && onScrollBottom != undefined) {
          onScrollBottom(schedulerData, _this.schedulerContent, _this.schedulerContent.scrollHeight - _this.schedulerContent.clientHeight);
        }
      }

      _this.setState({
        scrollLeft: _this.schedulerContent.scrollLeft,
        scrollTop: _this.schedulerContent.scrollTop
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onViewChange", function (e) {
      var _this$props2 = _this.props,
          onViewChange = _this$props2.onViewChange,
          schedulerData = _this$props2.schedulerData;
      var viewType = parseInt(e.target.value.charAt(0));
      var showAgenda = e.target.value.charAt(1) === '1';
      var isEventPerspective = e.target.value.charAt(2) === '1';
      onViewChange(schedulerData, {
        viewType: viewType,
        showAgenda: showAgenda,
        isEventPerspective: isEventPerspective
      });
    });

    _defineProperty(_assertThisInitialized(_this), "goNext", function () {
      var _this$props3 = _this.props,
          nextClick = _this$props3.nextClick,
          schedulerData = _this$props3.schedulerData;
      nextClick(schedulerData);
    });

    _defineProperty(_assertThisInitialized(_this), "goBack", function () {
      var _this$props4 = _this.props,
          prevClick = _this$props4.prevClick,
          schedulerData = _this$props4.schedulerData;
      prevClick(schedulerData);
    });

    _defineProperty(_assertThisInitialized(_this), "handleVisibleChange", function (visible) {
      _this.setState({
        visible: visible
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (date) {
      _this.setState({
        visible: false
      });

      var _this$props5 = _this.props,
          onSelectDate = _this$props5.onSelectDate,
          schedulerData = _this$props5.schedulerData;
      onSelectDate(schedulerData, date);
    });

    var _schedulerData = props.schedulerData,
        dndSources = props.dndSources;
    var sources = [];
    sources.push(new _DnDSource["default"](function (props) {
      return props.eventItem;
    }, _EventItem["default"]));

    if (dndSources != undefined && dndSources.length > 0) {
      sources = [].concat(_toConsumableArray(sources), _toConsumableArray(dndSources));
    }

    var dndContext = new _DnDContext["default"](sources, _ResourceEvents["default"]);
    _this.currentArea = -1;

    _schedulerData._setDocumentWidth(document.documentElement.clientWidth);

    _this.state = {
      visible: false,
      dndContext: dndContext,
      contentHeight: _schedulerData.getSchedulerContentDesiredHeight(),
      contentScrollbarHeight: 17,
      contentScrollbarWidth: 17,
      resourceScrollbarHeight: 17,
      resourceScrollbarWidth: 17,
      scrollLeft: 0,
      scrollTop: 0,
      documentWidth: document.documentElement.clientWidth,
      documentHeight: document.documentElement.clientHeight
    };
    if (_schedulerData.isSchedulerResponsive()) window.onresize = _this.onWindowResize;
    return _this;
  }

  _createClass(Scheduler, [{
    key: "componentDidMount",
    value: function componentDidMount(props, state) {
      this.resolveScrollbarSize();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(props, state) {
      this.resolveScrollbarSize();
      var schedulerData = this.props.schedulerData;
      var localeMoment = schedulerData.localeMoment,
          behaviors = schedulerData.behaviors;

      if (schedulerData.getScrollToSpecialMoment() && !!behaviors.getScrollSpecialMomentFunc) {
        if (!!this.schedulerContent && this.schedulerContent.scrollWidth > this.schedulerContent.clientWidth) {
          var start = localeMoment(schedulerData.startDate).startOf('day'),
              end = localeMoment(schedulerData.endDate).endOf('day'),
              specialMoment = behaviors.getScrollSpecialMomentFunc(schedulerData, start, end);

          if (specialMoment >= start && specialMoment <= end) {
            var index = 0;
            schedulerData.headers.forEach(function (item) {
              var header = localeMoment(item.time);
              if (specialMoment >= header) index++;
            });
            this.schedulerContent.scrollLeft = (index - 1) * schedulerData.getContentCellWidth();
            schedulerData.setScrollToSpecialMoment(false);
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props6 = this.props,
          schedulerData = _this$props6.schedulerData,
          leftCustomHeader = _this$props6.leftCustomHeader,
          rightCustomHeader = _this$props6.rightCustomHeader;
      var renderData = schedulerData.renderData,
          viewType = schedulerData.viewType,
          showAgenda = schedulerData.showAgenda,
          isEventPerspective = schedulerData.isEventPerspective,
          config = schedulerData.config;
      var width = schedulerData.getSchedulerWidth();
      var calendarPopoverEnabled = config.calendarPopoverEnabled;
      var dateLabel = schedulerData.getDateLabel();
      var defaultValue = "".concat(viewType).concat(showAgenda ? 1 : 0).concat(isEventPerspective ? 1 : 0);
      var radioButtonList = config.views.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(RadioButton, {
          key: "".concat(item.viewType).concat(item.showAgenda ? 1 : 0).concat(item.isEventPerspective ? 1 : 0),
          value: "".concat(item.viewType).concat(item.showAgenda ? 1 : 0).concat(item.isEventPerspective ? 1 : 0)
        }, /*#__PURE__*/_react["default"].createElement("span", {
          style: {
            margin: "0px 8px"
          }
        }, item.viewName));
      });

      var tbodyContent = /*#__PURE__*/_react["default"].createElement("tr", null);

      if (showAgenda) {
        tbodyContent = /*#__PURE__*/_react["default"].createElement(_AgendaView["default"], this.props);
      } else {
        var resourceTableWidth = schedulerData.getResourceTableWidth();
        var schedulerContainerWidth = width - resourceTableWidth + 1;
        var schedulerWidth = schedulerData.getContentTableWidth() - 1;
        var DndResourceEvents = this.state.dndContext.getDropTarget();
        var eventDndSource = this.state.dndContext.getDndSource();
        var displayRenderData = renderData.filter(function (o) {
          return o.render;
        });
        var resourceEventsList = displayRenderData.map(function (item) {
          return /*#__PURE__*/_react["default"].createElement(DndResourceEvents, _extends({}, _this2.props, {
            key: item.slotId,
            resourceEvents: item,
            dndSource: eventDndSource
          }));
        });
        var contentScrollbarHeight = this.state.contentScrollbarHeight,
            contentScrollbarWidth = this.state.contentScrollbarWidth,
            resourceScrollbarHeight = this.state.resourceScrollbarHeight,
            resourceScrollbarWidth = this.state.resourceScrollbarWidth,
            contentHeight = this.state.contentHeight;
        var resourcePaddingBottom = resourceScrollbarHeight === 0 ? contentScrollbarHeight : 0;
        var contentPaddingBottom = contentScrollbarHeight === 0 ? resourceScrollbarHeight : 0;
        var schedulerContentStyle = {
          overflow: 'auto',
          margin: "0px",
          position: "relative",
          paddingBottom: contentPaddingBottom
        };
        var resourceContentStyle = {
          overflowX: "auto",
          overflowY: "auto",
          width: resourceTableWidth + resourceScrollbarWidth - 2,
          margin: "0px -".concat(contentScrollbarWidth, "px 0px 0px")
        };

        if (config.schedulerMaxHeight > 0) {
          schedulerContentStyle = _objectSpread(_objectSpread({}, schedulerContentStyle), {}, {
            maxHeight: config.schedulerMaxHeight - config.tableHeaderHeight
          });
          resourceContentStyle = _objectSpread(_objectSpread({}, resourceContentStyle), {}, {
            maxHeight: config.schedulerMaxHeight - config.tableHeaderHeight
          });
        }

        var resourceName = schedulerData.isEventPerspective ? config.taskName : config.resourceName;
        tbodyContent = /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
          style: {
            width: resourceTableWidth,
            verticalAlign: 'top'
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "resource-view"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            overflow: "hidden",
            borderBottom: "1px solid #e9e9e9",
            height: config.tableHeaderHeight
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            overflowX: "scroll",
            overflowY: "hidden",
            margin: "0px 0px -".concat(contentScrollbarHeight, "px")
          }
        }, /*#__PURE__*/_react["default"].createElement("table", {
          className: "resource-table"
        }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", {
          style: {
            height: config.tableHeaderHeight
          }
        }, /*#__PURE__*/_react["default"].createElement("th", {
          className: "header3-text"
        }, resourceName)))))), /*#__PURE__*/_react["default"].createElement("div", {
          style: resourceContentStyle,
          ref: this.schedulerResourceRef,
          onMouseOver: this.onSchedulerResourceMouseOver,
          onMouseOut: this.onSchedulerResourceMouseOut,
          onScroll: this.onSchedulerResourceScroll
        }, /*#__PURE__*/_react["default"].createElement(_ResourceView["default"], _extends({}, this.props, {
          contentScrollbarHeight: resourcePaddingBottom
        }))))), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "scheduler-view",
          style: {
            width: schedulerContainerWidth,
            verticalAlign: 'top'
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            overflow: "hidden",
            borderBottom: "1px solid #e9e9e9",
            height: config.tableHeaderHeight
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            overflowX: "scroll",
            overflowY: "hidden",
            margin: "0px 0px -".concat(contentScrollbarHeight, "px")
          },
          ref: this.schedulerHeadRef,
          onMouseOver: this.onSchedulerHeadMouseOver,
          onMouseOut: this.onSchedulerHeadMouseOut,
          onScroll: this.onSchedulerHeadScroll
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            paddingRight: "".concat(contentScrollbarWidth, "px"),
            width: schedulerWidth + contentScrollbarWidth
          }
        }, /*#__PURE__*/_react["default"].createElement("table", {
          className: "scheduler-bg-table"
        }, /*#__PURE__*/_react["default"].createElement(_HeaderView["default"], this.props))))), /*#__PURE__*/_react["default"].createElement("div", {
          style: schedulerContentStyle,
          ref: this.schedulerContentRef,
          onMouseOver: this.onSchedulerContentMouseOver,
          onMouseOut: this.onSchedulerContentMouseOut,
          onScroll: this.onSchedulerContentScroll
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: schedulerWidth,
            height: contentHeight
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "scheduler-content"
        }, /*#__PURE__*/_react["default"].createElement("table", {
          className: "scheduler-content-table"
        }, /*#__PURE__*/_react["default"].createElement("tbody", null, resourceEventsList))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "scheduler-bg"
        }, /*#__PURE__*/_react["default"].createElement("table", {
          className: "scheduler-bg-table",
          style: {
            width: schedulerWidth
          },
          ref: this.schedulerContentBgTableRef
        }, /*#__PURE__*/_react["default"].createElement(_BodyView["default"], this.props))))))));
      }

      ;

      var popover = /*#__PURE__*/_react["default"].createElement("div", {
        className: "popover-calendar"
      }, /*#__PURE__*/_react["default"].createElement(_calendar["default"], {
        fullscreen: false,
        onSelect: this.onSelect
      }));

      var schedulerHeader = /*#__PURE__*/_react["default"].createElement("div", null);

      if (config.headerEnabled) {
        schedulerHeader = /*#__PURE__*/_react["default"].createElement(_row["default"], {
          type: "flex",
          align: "middle",
          justify: "space-between",
          style: {
            marginBottom: '24px'
          }
        }, leftCustomHeader, /*#__PURE__*/_react["default"].createElement(_col["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "header2-text"
        }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
          type: "left",
          style: {
            marginRight: "8px"
          },
          className: "icon-nav",
          onClick: this.goBack
        }), calendarPopoverEnabled ? /*#__PURE__*/_react["default"].createElement(_popover["default"], {
          content: popover,
          placement: "bottom",
          trigger: "click",
          visible: this.state.visible,
          onVisibleChange: this.handleVisibleChange
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: 'header2-text-label',
          style: {
            cursor: 'pointer'
          }
        }, dateLabel)) : /*#__PURE__*/_react["default"].createElement("span", {
          className: 'header2-text-label'
        }, dateLabel), /*#__PURE__*/_react["default"].createElement(_icon["default"], {
          type: "right",
          style: {
            marginLeft: "8px"
          },
          className: "icon-nav",
          onClick: this.goNext
        }))), /*#__PURE__*/_react["default"].createElement(_col["default"], null, /*#__PURE__*/_react["default"].createElement(RadioGroup, {
          defaultValue: defaultValue,
          size: "default",
          onChange: this.onViewChange
        }, radioButtonList)), rightCustomHeader);
      }

      return /*#__PURE__*/_react["default"].createElement("table", {
        id: "RBS-Scheduler-root",
        className: "scheduler",
        style: {
          width: "".concat(width, "px")
        }
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        colSpan: "2"
      }, schedulerHeader))), /*#__PURE__*/_react["default"].createElement("tbody", null, tbodyContent));
    }
  }]);

  return Scheduler;
}(_react.Component);

_defineProperty(Scheduler, "propTypes", {
  schedulerData: _propTypes.PropTypes.object.isRequired,
  prevClick: _propTypes.PropTypes.func.isRequired,
  nextClick: _propTypes.PropTypes.func.isRequired,
  onViewChange: _propTypes.PropTypes.func.isRequired,
  onSelectDate: _propTypes.PropTypes.func.isRequired,
  onSetAddMoreState: _propTypes.PropTypes.func,
  updateEventStart: _propTypes.PropTypes.func,
  updateEventEnd: _propTypes.PropTypes.func,
  moveEvent: _propTypes.PropTypes.func,
  movingEvent: _propTypes.PropTypes.func,
  leftCustomHeader: _propTypes.PropTypes.object,
  rightCustomHeader: _propTypes.PropTypes.object,
  newEvent: _propTypes.PropTypes.func,
  subtitleGetter: _propTypes.PropTypes.func,
  eventItemClick: _propTypes.PropTypes.func,
  viewEventClick: _propTypes.PropTypes.func,
  viewEventText: _propTypes.PropTypes.string,
  viewEvent2Click: _propTypes.PropTypes.func,
  viewEvent2Text: _propTypes.PropTypes.string,
  conflictOccurred: _propTypes.PropTypes.func,
  eventItemTemplateResolver: _propTypes.PropTypes.func,
  dndSources: _propTypes.PropTypes.array,
  slotClickedFunc: _propTypes.PropTypes.func,
  toggleExpandFunc: _propTypes.PropTypes.func,
  slotItemTemplateResolver: _propTypes.PropTypes.func,
  nonAgendaCellHeaderTemplateResolver: _propTypes.PropTypes.func,
  onScrollLeft: _propTypes.PropTypes.func,
  onScrollRight: _propTypes.PropTypes.func,
  onScrollTop: _propTypes.PropTypes.func,
  onScrollBottom: _propTypes.PropTypes.func
});

var DATE_FORMAT = 'YYYY-MM-DD';
exports.DATE_FORMAT = DATE_FORMAT;
var DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
exports.DATETIME_FORMAT = DATETIME_FORMAT;
var _default = Scheduler;
exports["default"] = _default;

// this line has been added by scripts/build.js
require('./css/antd-globals-hiding-hack.css');
