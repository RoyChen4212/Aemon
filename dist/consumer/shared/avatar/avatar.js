"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _defaults = _interopRequireDefault(require("./defaults"));

require("./style.css");

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

var Avatar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Avatar, _React$PureComponent);

  function Avatar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Avatar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Avatar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      hasError: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleError", function () {
      _this.setState({
        hasError: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getFallbackImageProps", function () {
      var userId = _this.props.userId;
      var colors = _defaults.default.colors,
          shapes = _defaults.default.shapes;

      if (!userId) {
        return {
          color: colors[0],
          shape: shapes[0]
        };
      }

      var index = parseInt(userId, 16);
      return {
        color: colors[index % colors.length],
        shape: shapes[index % shapes.length]
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderFallbackAvatar", function () {
      var _this$props = _this.props,
          className = _this$props.className,
          size = _this$props.size;

      var _this$getFallbackImag = _this.getFallbackImageProps(),
          color = _this$getFallbackImag.color,
          shape = _this$getFallbackImag.shape;

      return _react.default.createElement("svg", {
        className: (0, _classnames.default)('pbg-avatar', className),
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 51 51"
      }, _react.default.createElement("path", {
        d: shape,
        fill: color,
        fillRule: "evenodd"
      }));
    });

    return _this;
  }

  _createClass(Avatar, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          size = _this$props2.size,
          src = _this$props2.src;
      var hasError = this.state.hasError;
      if (!src || hasError) return this.renderFallbackAvatar();
      return _react.default.createElement("img", {
        className: (0, _classnames.default)('pbg-avatar', className),
        height: size,
        src: src,
        width: size,
        onError: this.handleError
      });
    }
  }]);

  return Avatar;
}(_react.default.PureComponent);

_defineProperty(Avatar, "DEFAULT_SIZE", 35);

_defineProperty(Avatar, "propTypes", {
  className: _propTypes.default.string,
  size: _propTypes.default.number.isRequired,
  src: _propTypes.default.string
});

_defineProperty(Avatar, "defaultProps", {
  className: '',
  size: Avatar.DEFAULT_SIZE
});

var _default = Avatar;
exports.default = _default;