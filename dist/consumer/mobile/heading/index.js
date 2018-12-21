"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H3 = exports.H2 = exports.H1 = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H1 = function H1(props) {
  return _react.default.createElement("h1", {
    className: "pbg-heading pbg-h1"
  }, props.children);
};

exports.H1 = H1;

var H2 = function H2(props) {
  return _react.default.createElement("h2", {
    className: "pbg-heading pbg-h2"
  }, props.children);
};

exports.H2 = H2;

var H3 = function H3(props) {
  return _react.default.createElement("h3", {
    className: "pbg-heading pbg-h3"
  }, props.children);
};

exports.H3 = H3;