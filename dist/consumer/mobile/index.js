"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formFields = require("./form-fields");

var _button = require("./button");

var _heading = require("./heading");

var _hint = _interopRequireWildcard(require("./hint"));

var _label = _interopRequireWildcard(require("./label"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var mobile = {
  AddressField: _formFields.AddressField,
  Checkbox: _formFields.Checkbox,
  DatePicker: _formFields.DatePicker,
  DatetimePicker: _formFields.DatetimePicker,
  HistoricalPicker: _formFields.HistoricalPicker,
  PasswordField: _formFields.PasswordField,
  Picker: _formFields.Picker,
  TextField: _formFields.TextField,
  TimePicker: _formFields.TimePicker,
  NewAddressField: _formFields.NewAddressField,
  PrimaryButton: _button.PrimaryButton,
  SecondaryButton: _button.SecondaryButton,
  SmallButton: _button.SmallButton,
  LinkButton: _button.LinkButton,
  FacebookButton: _button.FacebookButton,
  SmallFacebookButton: _button.SmallFacebookButton,
  H1: _heading.H1,
  H2: _heading.H2,
  H3: _heading.H3,
  Hint: _hint.default,
  hintTypes: _hint.hintTypes,
  Label: _label.default,
  labelTypes: _label.labelTypes
};
var _default = mobile;
exports.default = _default;