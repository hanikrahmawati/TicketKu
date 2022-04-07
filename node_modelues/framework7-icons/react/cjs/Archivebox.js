"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Archivebox(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 15.1444 49.5742 L 40.8788 49.5742 C 45.4725 49.5742 47.9334 47.1836 47.9334 42.5899 L 47.9334 19.2461 C 50.2072 18.8711 51.4259 17.1602 51.4259 14.6523 L 51.4259 11.0898 C 51.4259 8.2305 49.8553 6.4258 46.9724 6.4258 L 9.0272 6.4258 C 6.2850 6.4258 4.5741 8.2305 4.5741 11.0898 L 4.5741 14.6523 C 4.5741 17.1602 5.8163 18.8711 8.0663 19.2461 L 8.0663 42.5899 C 8.0663 47.2070 10.5507 49.5742 15.1444 49.5742 Z M 9.9882 15.7774 C 8.8163 15.7774 8.3476 15.2852 8.3476 14.1133 L 8.3476 11.6289 C 8.3476 10.4571 8.8163 9.9649 9.9882 9.9649 L 46.0350 9.9649 C 47.2302 9.9649 47.6521 10.4571 47.6521 11.6289 L 47.6521 14.1133 C 47.6521 15.2852 47.2302 15.7774 46.0350 15.7774 Z M 15.1210 46.0352 C 13.0116 46.0352 11.8397 44.8867 11.8397 42.7774 L 11.8397 19.3164 L 44.1601 19.3164 L 44.1601 42.7774 C 44.1601 44.8867 42.9882 46.0352 40.9023 46.0352 Z M 20.2772 28.7617 L 35.7694 28.7617 C 36.7304 28.7617 37.4335 28.0820 37.4335 27.0508 L 37.4335 26.3008 C 37.4335 25.2696 36.7304 24.6133 35.7694 24.6133 L 20.2772 24.6133 C 19.2928 24.6133 18.6132 25.2696 18.6132 26.3008 L 18.6132 27.0508 C 18.6132 28.0820 19.2928 28.7617 20.2772 28.7617 Z"
  }));
}

var _default = Archivebox;
exports["default"] = _default;