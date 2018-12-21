"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.hintTypes = exports.hintClassNames = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

var _hintClassNames;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ERROR = 'error';
var CLICKABLE = 'clickable';
var hintClassNames = (_hintClassNames = {
  base: 'pbg-hint'
}, _defineProperty(_hintClassNames, ERROR, 'pbg-hint-error'), _defineProperty(_hintClassNames, CLICKABLE, 'pbg-hint-clickable'), _hintClassNames);
exports.hintClassNames = hintClassNames;
var hintTypes = {
  ERROR: ERROR,
  CLICKABLE: CLICKABLE
};
exports.hintTypes = hintTypes;

var _default = function _default(props) {
  if (props.onClick) {
    return _react.default.createElement("span", {
      className: className(props)
    }, _react.default.createElement("a", {
      onClick: props.onClick
    }, props.children));
  }

  return _react.default.createElement("span", {
    className: className(props)
  }, props.children);
};

exports.default = _default;

var className = function className(_ref) {
  var type = _ref.type;
  return !!type ? "".concat(hintClassNames.base, " ").concat(hintClassNames[type]) : hintClassNames.base;
};