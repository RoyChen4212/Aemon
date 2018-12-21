"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmallFacebookButton = exports.FacebookButton = exports.LinkButton = exports.SmallButton = exports.SecondaryButton = exports.PrimaryButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = _interopRequireDefault(require("./button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PrimaryButton = function PrimaryButton(props) {
  return _react.default.createElement(_button.default, _extends({}, props, {
    className: "pbg-button-primary"
  }), props.children);
};

exports.PrimaryButton = PrimaryButton;

var SecondaryButton = function SecondaryButton(props) {
  return _react.default.createElement(_button.default, _extends({}, props, {
    className: "pbg-button-secondary"
  }), props.children);
};

exports.SecondaryButton = SecondaryButton;

var SmallButton = function SmallButton(props) {
  return _react.default.createElement(_button.default, _extends({}, props, {
    className: "pbg-button-small"
  }), props.children);
};

exports.SmallButton = SmallButton;

var LinkButton = function LinkButton(props) {
  return _react.default.createElement(_button.default, _extends({}, props, {
    className: "pbg-button-link"
  }), props.children);
};

exports.LinkButton = LinkButton;

var FacebookButton = function FacebookButton(props) {
  return _react.default.createElement(_button.default, _extends({}, props, {
    className: "pbg-button-facebook"
  }), props.children);
};

exports.FacebookButton = FacebookButton;

var SmallFacebookButton = function SmallFacebookButton(props) {
  return _react.default.createElement(_button.default, _extends({}, props, {
    className: "pbg-button-facebook-small"
  }), props.children);
};

exports.SmallFacebookButton = SmallFacebookButton;