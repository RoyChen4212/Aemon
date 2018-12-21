"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkbox = require("./checkbox.js");

Object.keys(_checkbox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _checkbox[key];
    }
  });
});