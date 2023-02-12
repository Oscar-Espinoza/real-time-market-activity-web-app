"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./App.css");
var _reactRouterDom = require("react-router-dom");
var _Home = _interopRequireDefault(require("./components/Home/Home"));
var _CurrencyDetails = _interopRequireDefault(require("./components/currency/CurrencyDetails"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_Home.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/:currencyName",
    element: /*#__PURE__*/React.createElement(_CurrencyDetails.default, null)
  })));
}
var _default = App;
exports.default = _default;