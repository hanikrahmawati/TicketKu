"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowshapeTurnUpRightCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 29.8749 37.8437 C 30.5077 37.8437 30.9999 37.5625 31.5858 37.0234 L 41.5468 27.6484 C 42.0155 27.2031 42.1796 26.7344 42.1796 26.3125 C 42.1796 25.8672 42.0390 25.3984 41.5468 24.9531 L 31.5858 15.6484 C 30.9296 15.0390 30.5312 14.7578 29.8983 14.7578 C 29.0312 14.7578 28.4218 15.4609 28.4218 16.2812 L 28.4218 21.0859 L 28.0468 21.0859 C 18.9999 21.0859 15.0390 26.8281 15.0390 36.1797 C 15.0390 37.2578 15.6718 37.8437 16.3280 37.8437 C 16.8671 37.8437 17.4530 37.7031 17.8749 36.9063 C 20.0546 32.7812 23.1483 31.5625 28.0468 31.5625 L 28.4218 31.5625 L 28.4218 36.3906 C 28.4218 37.2344 29.0312 37.8437 29.8749 37.8437 Z"
  }));
}

var _default = ArrowshapeTurnUpRightCircle;
exports["default"] = _default;