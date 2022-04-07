"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function QuestionCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 27.5077 32.8516 C 28.6796 32.8516 29.4062 32.1250 29.4062 31.1875 L 29.4062 30.9063 C 29.4062 29.5937 30.1562 28.7734 31.7968 27.6953 C 34.0702 26.1953 35.6874 24.8125 35.6874 22.0234 C 35.6874 18.1094 32.2187 16.0234 28.2343 16.0234 C 24.2030 16.0234 21.5546 17.9219 20.9218 20.0781 C 20.8046 20.4766 20.7109 20.8516 20.7109 21.25 C 20.7109 22.2812 21.5546 22.8672 22.3280 22.8672 C 23.6640 22.8672 23.8749 22.1406 24.6249 21.2734 C 25.3983 19.9844 26.5234 19.2109 28.0936 19.2109 C 30.2265 19.2109 31.6093 20.4063 31.6093 22.2109 C 31.6093 23.8047 30.6249 24.5781 28.5858 25.9844 C 26.8983 27.1563 25.6327 28.3984 25.6327 30.6953 L 25.6327 31.0000 C 25.6327 32.2422 26.3124 32.8516 27.5077 32.8516 Z M 27.4609 39.8594 C 28.8202 39.8594 29.9921 38.7812 29.9921 37.4219 C 29.9921 36.0390 28.8436 34.9844 27.4609 34.9844 C 26.0780 34.9844 24.9296 36.0625 24.9296 37.4219 C 24.9296 38.7578 26.1014 39.8594 27.4609 39.8594 Z"
  }));
}

var _default = QuestionCircle;
exports["default"] = _default;