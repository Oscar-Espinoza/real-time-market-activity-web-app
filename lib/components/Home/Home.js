"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;
var _react = _interopRequireWildcard(require("react"));
require("./home.css");
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _bs = require("react-icons/bs");
var _currencies = require("../../redux/Currencies/currencies");
var _crypto = _interopRequireDefault(require("../../crypto.jpg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint linebreak-style: ["error", "windows"] */

function Home() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.currencies;
    }),
    loading = _useSelector.loading,
    currencies = _useSelector.currencies;
  (0, _react.useEffect)(function () {
    dispatch((0, _currencies.fetchCurrencies)());
  }, [dispatch]);
  if (loading) {
    return /*#__PURE__*/_react.default.createElement("h1", null, "LOADING...");
  }
  function getBackgroundColor(i) {
    if (i % 2 === 0 && i !== 2 && i !== 6) {
      return 'dark-bg';
    }
    if (i === 3 || i === 7) {
      return 'dark-bg';
    }
    return 'light-bg';
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container home"
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "front-img-container"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _crypto.default,
    alt: "popular currencies",
    className: "front-img"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "layer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "front-text"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "2023"), /*#__PURE__*/_react.default.createElement("p", null, "Up to date!")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Over 1000"), /*#__PURE__*/_react.default.createElement("p", null, "Cryptocurrencies"))))), /*#__PURE__*/_react.default.createElement("section", {
    className: "container stats-container"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "stats-title dark-bg"
  }, "All stats"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "stats"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "stat"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "1000+"), /*#__PURE__*/_react.default.createElement("p", null, "Crypto - currencies")), /*#__PURE__*/_react.default.createElement("li", {
    className: "stat"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "100 Mil+"), /*#__PURE__*/_react.default.createElement("p", null, "Coins Supply")), /*#__PURE__*/_react.default.createElement("li", {
    className: "stat"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "1 Mil+"), /*#__PURE__*/_react.default.createElement("p", null, "History trades")), /*#__PURE__*/_react.default.createElement("li", {
    className: "stat"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "1000+"), /*#__PURE__*/_react.default.createElement("p", null, "Markets per coin")), /*#__PURE__*/_react.default.createElement("li", {
    className: "stat light-bg"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "1,682"), /*#__PURE__*/_react.default.createElement("p", null, "followers"), /*#__PURE__*/_react.default.createElement(_bs.BsArrowRightCircle, {
    className: "arrow-circle"
  })), /*#__PURE__*/_react.default.createElement("li", {
    className: "stat dark-bg"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "58"), /*#__PURE__*/_react.default.createElement("p", null, "Hire me"), /*#__PURE__*/_react.default.createElement(_bs.BsArrowRightCircle, {
    className: "arrow-circle"
  })))), /*#__PURE__*/_react.default.createElement("section", {
    className: "currencies-container"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "currencies"
  }, currencies.slice(0, 10).map(function (currency, i) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: "currency ".concat(getBackgroundColor(i)),
      key: currency.id
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: currency.name,
      className: "currency-link"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "currency-text"
    }, /*#__PURE__*/_react.default.createElement("h3", null, currency.symbol), /*#__PURE__*/_react.default.createElement("p", null, currency.name)), /*#__PURE__*/_react.default.createElement("div", {
      className: "change-percent"
    }, currency.changePercent24Hr[0] === '-' ? currency.changePercent24Hr.slice(0, 5) : "+ ".concat(currency.changePercent24Hr.slice(0, 4)), "%", ' ', /*#__PURE__*/_react.default.createElement(_bs.BsTriangleFill, {
      className: currency.changePercent24Hr[0] !== '-' ? 'positive-per' : 'negative-per'
    }), /*#__PURE__*/_react.default.createElement(_bs.BsArrowRightCircle, {
      className: "arrow-circle"
    }))));
  }))));
}