"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function RectangleGrid3x2(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 43.4921 26.0664 L 48.7888 26.0664 C 51.7657 26.0664 53.2657 24.5664 53.2657 21.4727 L 53.2657 10.9961 C 53.2657 7.9023 51.7657 6.4258 48.7888 6.4258 L 43.4921 6.4258 C 40.5155 6.4258 39.0155 7.9023 39.0155 10.9961 L 39.0155 21.4727 C 39.0155 24.5664 40.5155 26.0664 43.4921 26.0664 Z M 7.2108 26.0664 L 12.5077 26.0664 C 15.4843 26.0664 16.9843 24.5664 16.9843 21.4727 L 16.9843 10.9961 C 16.9843 7.9023 15.4843 6.4258 12.5077 6.4258 L 7.2108 6.4258 C 4.2343 6.4258 2.7343 7.9023 2.7343 10.9961 L 2.7343 21.4727 C 2.7343 24.5664 4.2343 26.0664 7.2108 26.0664 Z M 25.3515 26.0664 L 30.6484 26.0664 C 33.6249 26.0664 35.1249 24.5664 35.1249 21.4727 L 35.1249 10.9961 C 35.1249 7.9023 33.6249 6.4258 30.6484 6.4258 L 25.3515 6.4258 C 22.3749 6.4258 20.8749 7.9023 20.8749 10.9961 L 20.8749 21.4727 C 20.8749 24.5664 22.3749 26.0664 25.3515 26.0664 Z M 7.2577 22.7617 C 6.4374 22.7617 6.0389 22.3398 6.0389 21.4727 L 6.0389 10.9961 C 6.0389 10.1523 6.4374 9.7305 7.2577 9.7305 L 12.4374 9.7305 C 13.2577 9.7305 13.6796 10.1523 13.6796 10.9961 L 13.6796 21.4727 C 13.6796 22.3398 13.2577 22.7617 12.4374 22.7617 Z M 25.4218 22.7617 C 24.5780 22.7617 24.1796 22.3398 24.1796 21.4727 L 24.1796 10.9961 C 24.1796 10.1523 24.5780 9.7305 25.4218 9.7305 L 30.6015 9.7305 C 31.4218 9.7305 31.8202 10.1523 31.8202 10.9961 L 31.8202 21.4727 C 31.8202 22.3398 31.4218 22.7617 30.6015 22.7617 Z M 43.5155 22.7617 C 42.7187 22.7617 42.3202 22.3398 42.3202 21.4727 L 42.3202 10.9961 C 42.3202 10.1523 42.7187 9.7305 43.5155 9.7305 L 48.7187 9.7305 C 49.5625 9.7305 49.9609 10.1523 49.9609 10.9961 L 49.9609 21.4727 C 49.9609 22.3398 49.5625 22.7617 48.7187 22.7617 Z M 7.2108 49.5742 L 12.5077 49.5742 C 15.4843 49.5742 16.9843 48.0977 16.9843 45.0039 L 16.9843 34.5039 C 16.9843 31.4336 15.4843 29.9336 12.5077 29.9336 L 7.2108 29.9336 C 4.2343 29.9336 2.7343 31.4336 2.7343 34.5039 L 2.7343 45.0039 C 2.7343 48.0977 4.2343 49.5742 7.2108 49.5742 Z M 25.3515 49.5742 L 30.6484 49.5742 C 33.6249 49.5742 35.1249 48.0977 35.1249 45.0039 L 35.1249 34.5039 C 35.1249 31.4336 33.6249 29.9336 30.6484 29.9336 L 25.3515 29.9336 C 22.3749 29.9336 20.8749 31.4336 20.8749 34.5039 L 20.8749 45.0039 C 20.8749 48.0977 22.3749 49.5742 25.3515 49.5742 Z M 43.4921 49.5742 L 48.7888 49.5742 C 51.7657 49.5742 53.2657 48.0977 53.2657 45.0039 L 53.2657 34.5039 C 53.2657 31.4336 51.7657 29.9336 48.7888 29.9336 L 43.4921 29.9336 C 40.5155 29.9336 39.0155 31.4336 39.0155 34.5039 L 39.0155 45.0039 C 39.0155 48.0977 40.5155 49.5742 43.4921 49.5742 Z M 7.2577 46.2695 C 6.4374 46.2695 6.0389 45.8477 6.0389 45.0039 L 6.0389 34.5274 C 6.0389 33.6602 6.4374 33.2383 7.2577 33.2383 L 12.4374 33.2383 C 13.2577 33.2383 13.6796 33.6602 13.6796 34.5274 L 13.6796 45.0039 C 13.6796 45.8477 13.2577 46.2695 12.4374 46.2695 Z M 25.4218 46.2695 C 24.5780 46.2695 24.1796 45.8477 24.1796 45.0039 L 24.1796 34.5274 C 24.1796 33.6602 24.5780 33.2383 25.4218 33.2383 L 30.6015 33.2383 C 31.4218 33.2383 31.8202 33.6602 31.8202 34.5274 L 31.8202 45.0039 C 31.8202 45.8477 31.4218 46.2695 30.6015 46.2695 Z M 43.5155 46.2695 C 42.7187 46.2695 42.3202 45.8477 42.3202 45.0039 L 42.3202 34.5274 C 42.3202 33.6602 42.7187 33.2383 43.5155 33.2383 L 48.7187 33.2383 C 49.5625 33.2383 49.9609 33.6602 49.9609 34.5274 L 49.9609 45.0039 C 49.9609 45.8477 49.5625 46.2695 48.7187 46.2695 Z"
  }));
}

var _default = RectangleGrid3x2;
exports["default"] = _default;