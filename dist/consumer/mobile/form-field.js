"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _label = _interopRequireWildcard(require("./label"));

var _hint = _interopRequireWildcard(require("./hint"));

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

var FormField =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(FormField, _React$PureComponent);

  function FormField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      focused: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "baseClassName", 'pbg-form-field');

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function () {
      _this.setState({
        focused: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (value) {
      _this.props.onChange(value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function (value) {
      _this.setState({
        focused: false
      });

      if (_this.props.onBlur) _this.props.onBlur(value);
    });

    return _this;
  }

  _createClass(FormField, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: this.className
      });
    }
  }, {
    key: "className",
    get: function get() {
      var resultingClassName = this.baseClassName;

      if (this.error) {
        resultingClassName += ' pbg-form-field-error';
      }

      if (this.focused) {
        resultingClassName += ' pbg-form-field-focused';
      }

      return resultingClassName;
    }
  }, {
    key: "error",
    get: function get() {
      return this.props.error;
    }
  }, {
    key: "hint",
    get: function get() {
      return this.props.hint;
    }
  }, {
    key: "focused",
    get: function get() {
      return this.state.focused || !!this.error;
    }
  }, {
    key: "labelType",
    get: function get() {
      if (this.props.error) return _label.types.ERROR;
      return _label.types.base;
    }
  }, {
    key: "label",
    get: function get() {
      var label = this.props.label;

      var labelElement = _react.default.createElement("div", null, _react.default.createElement(_label.default, {
        type: this.labelType,
        required: this.props.required
      }, label));

      return label ? labelElement : null;
    }
  }, {
    key: "hintOrError",
    get: function get() {
      if (this.error) return _react.default.createElement("div", null, _react.default.createElement(_hint.default, {
        type: _hint.types.ERROR
      }, this.error));
      if (this.hint) return _react.default.createElement("div", null, _react.default.createElement(_hint.default, null, this.hint));
      return null;
    }
  }]);

  return FormField;
}(_react.default.PureComponent);

;
var _default = FormField;
exports.default = _default;