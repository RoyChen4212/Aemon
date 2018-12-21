"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _hint = _interopRequireDefault(require("../hint"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_NAME = 'pbg-button';

var _default = function _default(props) {
  return _react.default.createElement("div", null, _react.default.createElement("button", {
    type: buttonType(props),
    className: className(props),
    onClick: configureOnClick(props),
    disabled: props.disabled
  }, _react.default.createElement("span", null, props.children)), !!props.hint ? _react.default.createElement("div", {
    className: "pbg-button-hint-container"
  }, _react.default.createElement(_hint.default, null, props.hint)) : null);
};

exports.default = _default;

var buttonType = function buttonType(_ref) {
  var onClick = _ref.onClick;
  return !!onClick ? 'button' : 'submit';
};

var className = function className(_ref2) {
  var disabled = _ref2.disabled,
      className = _ref2.className;
  var base = "".concat(CLASS_NAME, " ").concat(className);
  return disabled ? base + ' disabled' : base;
};

var configureOnClick = function configureOnClick(_ref3) {
  var disabled = _ref3.disabled,
      onClick = _ref3.onClick;
  if (disabled) return;
  return onClick;
};