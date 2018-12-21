"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyTimeToValue = exports.applyDateToValue = exports.generateNewValue = void 0;

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateNewValue = function generateNewValue(dateStr, timeStr, timezone) {
  var date = sanitizeDateString(dateStr);
  var time = sanitizeTimeString(timeStr);
  var newDateStr = (0, _momentTimezone.default)("".concat(date, "T").concat(time, ":00")).tz(timezone).format();
  return new Date(newDateStr);
};

exports.generateNewValue = generateNewValue;

var applyDateToValue = function applyDateToValue(valueDate, dateStr, timezone) {
  if (!dateStr) return valueDate;
  var date = sanitizeDateString(dateStr);
  var time = (0, _momentTimezone.default)(valueDate).format('HH:mm');
  var newDateStr = (0, _momentTimezone.default)("".concat(date, "T").concat(time, ":00")).tz(timezone).format();
  return new Date(newDateStr);
};

exports.applyDateToValue = applyDateToValue;

var applyTimeToValue = function applyTimeToValue(valueDate, timeStr, timezone) {
  if (!timeStr) return valueDate;
  var date = (0, _momentTimezone.default)(valueDate).format('YYYY-MM-DD');
  var time = sanitizeTimeString(timeStr);
  var newDateStr = (0, _momentTimezone.default)("".concat(date, "T").concat(time, ":00")).tz(timezone).format();
  return new Date(newDateStr);
};

exports.applyTimeToValue = applyTimeToValue;

var sanitizeDateString = function sanitizeDateString(dateStr) {
  if (!dateStr) return (0, _momentTimezone.default)(new Date()).format('YYYY-MM-DD');
  var split = dateStr.indexOf('-') > 0 ? dateStr.split('-') : dateStr.split('/');
  var month = split[1].length < 2 ? "0".concat(split[1]) : split[1];
  var day = split[2].length < 2 ? "0".concat(split[2]) : split[2];
  return "".concat(split[0], "-").concat(month, "-").concat(day);
};

var sanitizeTimeString = function sanitizeTimeString(timeStr) {
  if (!timeStr) return '00:00';
  var split = timeStr.split(':');
  var hours = split[0].length < 2 ? "0".concat(split[0]) : split[0];
  var mins = split[1].length < 2 ? "0".concat(split[1]) : split[1];
  return "".concat(hours, ":").concat(mins);
};