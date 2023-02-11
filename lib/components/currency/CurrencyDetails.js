"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CurrencyDetails;
var _react = _interopRequireDefault(require("react"));
var _bs = require("react-icons/bs");
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
require("./CurrencyDetails.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint linebreak-style: ["error", "windows"] */

function CurrencyDetails() {
  var _useParams = (0, _reactRouterDom.useParams)(),
    currencyName = _useParams.currencyName;
  var currency = (0, _reactRedux.useSelector)(function (state) {
    return state.currencies.currencies.find(function (currency) {
      return currency.name === currencyName;
    });
  });
  function nFormatter(num, digits) {
    var lookup = [{
      value: 1,
      symbol: ''
    }, {
      value: 1e3,
      symbol: ' Thousand'
    }, {
      value: 1e6,
      symbol: ' Million'
    }, {
      value: 1e9,
      symbol: ' Billion'
    }, {
      value: 1e12,
      symbol: 'Tril'
    }, {
      value: 1e15,
      symbol: 'P'
    }, {
      value: 1e18,
      symbol: 'E'
    }];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol : '0';
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "currency-detail"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "back-home-btn"
  }, /*#__PURE__*/_react.default.createElement(_bs.BsArrowLeftCircle, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "currency-title"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title-img"
  }, /*#__PURE__*/_react.default.createElement(_bs.BsCurrencyExchange, null)), /*#__PURE__*/_react.default.createElement("h2", {
    className: "title"
  }, currency.name, ' ', "(", currency.symbol, ")", ' ', /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", null, Math.floor(Math.random() * 6000) + 1000, ' ', "Views"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "stats-separator dark-bg"
  }, "Stats for", ' ', currency.name), /*#__PURE__*/_react.default.createElement("div", {
    className: "currency-details-list"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "currency-details-row light-bg"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "currency-details-left"
  }, "Rank:"), /*#__PURE__*/_react.default.createElement("div", {
    className: "currency-details-right"
  }, currency.rank)), /*#__PURE__*/_react.default.createElement("div", {
    className: "currency-details-row dark-bg"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "currency-details-left"
  }, "Supply:"), /*#__PURE__*/_react.default.createElement("div", {
    className: "currency-details-right"
  }, nFormatter(currency.supply))), /*#__PURE__*/_react.default.createElement("div", {
    className: "currency-details-row light-bg"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "currency-details-left"
  }, "Max Supply:"), /*#__PURE__*/_react.default.createElement("div", {
    className: "currency-details-right"
  }, currency.maxSupply ? nFormatter(currency.maxSupply) : 'No defined cap')), /*#__PURE__*/_react.default.createElement("div", {
    className: "currency-details-row dark-bg"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "currency-details-left"
  }, "Market Cap (USD):"), /*#__PURE__*/_react.default.createElement("div", {
    className: "currency-details-right"
  }, nFormatter(currency.marketCapUsd))), /*#__PURE__*/_react.default.createElement("div", {
    className: "currency-details-row light-bg"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "currency-details-left"
  }, "Change (24hr):"), /*#__PURE__*/_react.default.createElement("div", {
    className: "currency-details-right"
  }, currency.changePercent24Hr[0] === '-' ? currency.changePercent24Hr.slice(0, 5) : "+ ".concat(currency.changePercent24Hr.slice(0, 4)), "%", ' ', /*#__PURE__*/_react.default.createElement(_bs.BsTriangleFill, {
    className: currency.changePercent24Hr[0] !== '-' ? 'positive-per' : 'negative-per'
  })))));
}