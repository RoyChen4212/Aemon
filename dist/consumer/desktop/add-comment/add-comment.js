"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _formField = _interopRequireDefault(require("../form-field"));

var _textArea = _interopRequireDefault(require("../text-area"));

var _avatar = _interopRequireDefault(require("../avatar"));

var _button = require("../button");

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AddComment =
/*#__PURE__*/
function (_FormField) {
  _inherits(AddComment, _FormField);

  function AddComment() {
    _classCallCheck(this, AddComment);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddComment).apply(this, arguments));
  }

  _createClass(AddComment, [{
    key: "renderAvatar",
    value: function renderAvatar() {
      if (this.props.avatarSrc) return _react.default.createElement(_avatar.default, {
        src: this.props.avatarSrc
      });
      return _react.default.createElement(_avatar.default, {
        userId: this.props.userId
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "pbg-consumer-desktop pbg-add-comment"
      }, _react.default.createElement("div", {
        className: "pbg-add-comment-avatar-placeholder"
      }, this.renderAvatar()), _react.default.createElement("div", {
        className: "pbg-add-comment-form-placeholder"
      }, _react.default.createElement(_textArea.default, _extends({}, this.props, {
        label: this.props.textLabel
      })), _react.default.createElement(_button.PrimaryButton, null, this.adaptedProps.ctaLabel)));
    }
  }]);

  return AddComment;
}(_formField.default);

;
var _default = AddComment;
exports.default = _default;