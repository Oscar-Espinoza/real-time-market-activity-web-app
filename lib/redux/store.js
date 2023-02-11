"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _currencies = _interopRequireDefault(require("./Currencies/currencies"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var store = (0, _toolkit.configureStore)({
  reducer: {
    currencies: _currencies.default
  }
});
var _default = store;
exports.default = _default;