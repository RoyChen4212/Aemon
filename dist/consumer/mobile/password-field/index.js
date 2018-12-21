"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordField = void 0;

var _react = _interopRequireDefault(require("react"));

var _textField = require("../text-field");

var _hint = _interopRequireWildcard(require("../hint"));

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

var PasswordField =
/*#__PURE__*/
function (_TextField) {
  _inherits(PasswordField, _TextField);

  function PasswordField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PasswordField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PasswordField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "baseClassName", 'pbg-form-field pbg-text-field pbg-password-field');

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "baseType", 'password');

    return _this;
  }

  _createClass(PasswordField, [{
    key: "hintOrError",
    get: function get() {
      if (this.error) return this.errorFeedback;
      if (this.hint) return this.hintFeedback;
      return _react.default.createElement("div", {
        className: "pbg-forgot-password-container"
      }, this.forgotPassword);
    }
  }, {
    key: "errorFeedback",
    get: function get() {
      return _react.default.createElement("div", {
        className: "pbg-forgot-password-container"
      }, _react.default.createElement(_hint.default, {
        type: _hint.types.ERROR
      }, this.error), this.forgotPassword);
    }
  }, {
    key: "hintFeedback",
    get: function get() {
      return _react.default.createElement("div", {
        className: "pbg-forgot-password-container"
      }, _react.default.createElement(_hint.default, null, this.hint), this.forgotPassword);
    }
  }, {
    key: "forgotPassword",
    get: function get() {
      return _react.default.createElement(_hint.default, {
        type: _hint.types.CLICKABLE,
        onClick: this.props.onForgotPassword
      }, this.props.forgotPasswordText || '[FORGOT PASSWROD]');
    }
  }]);

  return PasswordField;
}(_textField.TextField);

exports.PasswordField = PasswordField;