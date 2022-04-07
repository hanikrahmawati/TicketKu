"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Dial(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28.0118 10.3047 C 29.5352 10.3047 30.7539 9.0625 30.7539 7.5390 C 30.7539 6.0156 29.5118 4.7969 28.0118 4.7969 C 26.4649 4.7969 25.2461 6.0390 25.2461 7.5390 C 25.2461 9.0859 26.4883 10.3047 28.0118 10.3047 Z M 44.9805 17.3594 C 46.5272 17.3594 47.7229 16.1172 47.7229 14.6172 C 47.7229 13.0703 46.5042 11.8750 44.9805 11.8750 C 43.4571 11.8750 42.2383 13.0937 42.2383 14.6172 C 42.2383 16.1406 43.4805 17.3594 44.9805 17.3594 Z M 10.9961 17.4062 C 12.5196 17.4062 13.7383 16.1641 13.7383 14.6641 C 13.7383 13.1172 12.4961 11.9219 10.9961 11.9219 C 9.4492 11.9219 8.2539 13.1406 8.2539 14.6641 C 8.2539 16.1875 9.4727 17.4062 10.9961 17.4062 Z M 28.0118 47.6875 C 36.8946 47.6875 44.1368 40.4922 44.1368 31.5390 C 44.1368 22.6094 36.8946 15.4141 28.0118 15.4141 C 19.1055 15.4141 11.8633 22.6094 11.8633 31.5390 C 11.8633 40.4922 19.1055 47.6875 28.0118 47.6875 Z M 28.0118 18.9766 C 34.9258 18.9766 40.5743 24.6015 40.5743 31.5390 C 40.5743 38.4766 34.9258 44.1016 28.0118 44.1016 C 25.0586 44.1016 22.3399 43.0703 20.1836 41.3594 L 29.2071 32.3359 C 29.8633 31.6797 29.8633 30.6953 29.2071 29.9922 C 28.6212 29.3828 27.5196 29.3828 26.9102 29.9922 L 17.9102 39.0156 C 16.3399 36.9297 15.4258 34.3515 15.4258 31.5390 C 15.4258 24.6015 21.0743 18.9766 28.0118 18.9766 Z M 51.9882 34.2812 C 53.5352 34.2812 54.7304 33.0390 54.7304 31.5390 C 54.7304 29.9922 53.5117 28.7969 51.9882 28.7969 C 50.4647 28.7969 49.2459 30.0156 49.2459 31.5390 C 49.2459 33.0625 50.4882 34.2812 51.9882 34.2812 Z M 4.0118 34.2812 C 5.5352 34.2812 6.7539 33.0390 6.7539 31.5390 C 6.7539 29.9922 5.5118 28.7969 4.0118 28.7969 C 2.4649 28.7969 1.2696 30.0156 1.2696 31.5390 C 1.2696 33.0625 2.4883 34.2812 4.0118 34.2812 Z M 10.9961 51.1797 C 12.5196 51.1797 13.7383 49.9609 13.7383 48.4375 C 13.7383 46.9141 12.4961 45.6953 10.9961 45.6953 C 9.4492 45.6953 8.2539 46.9375 8.2539 48.4375 C 8.2539 49.9844 9.4727 51.1797 10.9961 51.1797 Z M 44.9571 51.2031 C 46.5042 51.2031 47.6994 49.9844 47.6994 48.4609 C 47.6994 46.9375 46.4807 45.7187 44.9571 45.7187 C 43.4336 45.7187 42.2149 46.9609 42.2149 48.4609 C 42.2149 50.0078 43.4571 51.2031 44.9571 51.2031 Z"
  }));
}

var _default = Dial;
exports["default"] = _default;