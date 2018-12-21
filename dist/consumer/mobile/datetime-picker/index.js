"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatetimePicker = void 0;

var _react = _interopRequireDefault(require("react"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _formField = _interopRequireDefault(require("../form-field"));

var _label = _interopRequireWildcard(require("../label"));

var _hint = _interopRequireWildcard(require("../hint"));

var _formFields = require("../form-fields");

var _valueGenerator = require("./value-generator");

var _makeEvent = _interopRequireDefault(require("../../../lib/make-event"));

require("./style.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DatetimePicker =
/*#__PURE__*/
function (_FormField) {
  _inherits(DatetimePicker, _FormField);

  function DatetimePicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DatetimePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DatetimePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "baseClassName", 'pbg-form-field pbg-datetime-picker');

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      dateValue: '',
      timeValue: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeDateValue", function (ev) {
      var currentValue = _this.props.value;
      var newValue = currentValue ? (0, _valueGenerator.applyDateToValue)(currentValue, ev.target.value, _this.timezone) : (0, _valueGenerator.generateNewValue)(ev.target.value, null, _this.timezone);

      _this.onChange((0, _makeEvent.default)(newValue));

      _this.onBlur((0, _makeEvent.default)(newValue));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeTimeValue", function (ev) {
      var currentValue = _this.props.value;
      var newValue = currentValue ? (0, _valueGenerator.applyTimeToValue)(currentValue, ev.target.value, _this.timezone) : (0, _valueGenerator.generateNewValue)(null, ev.target.value, _this.timezone);

      _this.onChange((0, _makeEvent.default)(newValue));

      _this.onBlur((0, _makeEvent.default)(newValue));
    });

    return _this;
  }

  _createClass(DatetimePicker, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: this.className
      }, this.label, _react.default.createElement("div", {
        className: "pbg-datetime-picker-pickers-wrapper"
      }, this.pickers), this.hintOrError);
    }
  }, {
    key: "timezone",
    get: function get() {
      return this.props.timezone;
    }
  }, {
    key: "pickers",
    get: function get() {
      var components = [_react.default.createElement(_formFields.DatePicker, {
        value: this.state.dateValue,
        onChange: this.onChangeDateValue
      }), _react.default.createElement(_formFields.TimePicker, {
        value: this.state.timeValue,
        onChange: this.onChangeTimeValue
      })];
      return components.map(function (comp, key) {
        return _react.default.createElement("div", {
          className: "pbg-datetime-picker-container",
          key: "comp-".concat(key)
        }, comp);
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      var date = props.value;
      if (!date) return {};
      return {
        dateValue: toDatePickerString(date),
        timeValue: toTimePickerString("".concat(date.getHours(), ":").concat(date.getMinutes()))
      };
    }
  }]);

  return DatetimePicker;
}(_formField.default);

exports.DatetimePicker = DatetimePicker;
;

var toDatePickerString = function toDatePickerString(date) {
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return "".concat(date.getFullYear(), "-").concat(month, "-").concat(day);
};

var toTimePickerString = function toTimePickerString(date) {
  var split = date.split(':');
  var hours = split[0].length < 2 ? "0".concat(split[0]) : split[0];
  var mins = split[1].length < 2 ? "0".concat(split[1]) : split[1];
  return "".concat(hours, ":").concat(mins);
};