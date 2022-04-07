"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BoldItalicUnderline(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 47.4948 35.8484 C 52.7557 35.8484 56.0000 32.6918 56.0000 28.1031 L 56.0000 15.5791 C 56.0000 14.7608 55.4592 14.2347 54.6409 14.2347 C 53.8224 14.2347 53.2962 14.7608 53.2962 15.5791 L 53.2962 27.8839 C 53.2962 31.1428 51.1626 33.3495 47.4948 33.3495 C 43.8414 33.3495 41.6931 31.1428 41.6931 27.8839 L 41.6931 15.5791 C 41.6931 14.7608 41.1376 14.2347 40.3193 14.2347 C 39.5011 14.2347 38.9896 14.7608 38.9896 15.5791 L 38.9896 28.1031 C 38.9896 32.6918 42.2336 35.8484 47.4948 35.8484 Z M 20.7077 35.4685 L 29.9436 35.4685 C 30.6304 35.4685 31.1126 35.0447 31.1126 34.3578 C 31.1126 33.7002 30.6451 33.2764 29.9582 33.2764 L 26.6699 33.2764 L 30.2360 16.7629 L 33.4946 16.7629 C 34.1815 16.7629 34.6637 16.3391 34.6637 15.6522 C 34.6637 14.9946 34.1962 14.5708 33.5093 14.5708 L 24.2442 14.5708 C 23.5573 14.5708 23.0897 14.9946 23.0897 15.6522 C 23.0897 16.3391 23.5720 16.7629 24.2588 16.7629 L 27.5322 16.7629 L 23.9665 33.2764 L 20.6931 33.2764 C 20.0062 33.2764 19.5386 33.7002 19.5386 34.3578 C 19.5386 35.0447 20.0208 35.4685 20.7077 35.4685 Z M 2.4697 35.4685 L 10.0981 35.4685 C 14.5553 35.4685 17.3757 33.1156 17.3757 29.5060 C 17.3757 26.6563 15.3298 24.5958 12.3486 24.4351 L 12.3486 24.3181 C 14.7745 23.9820 16.4258 22.1553 16.4258 19.8317 C 16.4258 16.5729 13.9415 14.5708 9.8789 14.5708 L 2.4697 14.5708 C .9060 14.5708 0 15.4915 0 17.0990 L 0 32.9549 C 0 34.5478 .9060 35.4685 2.4697 35.4685 Z M 4.8225 23.2514 L 4.8225 18.0050 L 8.4175 18.0050 C 10.4634 18.0050 11.6764 18.9403 11.6764 20.5478 C 11.6764 22.2430 10.3319 23.2514 8.0522 23.2514 Z M 4.8225 32.0927 L 4.8225 26.2910 L 8.4906 26.2910 C 11.0626 26.2910 12.4801 27.2848 12.4801 29.1553 C 12.4801 31.0697 11.1064 32.0927 8.5929 32.0927 Z M 39.8515 40.3348 L 55.1377 40.3348 C 55.6199 40.3348 56.0000 39.9695 56.0000 39.4726 C 56.0000 38.9758 55.6199 38.5958 55.1377 38.5958 L 39.8515 38.5958 C 39.3840 38.5958 38.9896 38.9758 38.9896 39.4726 C 38.9896 39.9695 39.3840 40.3348 39.8515 40.3348 Z"
  }));
}

var _default = BoldItalicUnderline;
exports["default"] = _default;