function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function QuoteBubbleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 16.0938 52.3164 C 17.0313 52.3164 17.6876 51.8476 18.7891 50.8164 L 27.2735 43.0820 L 43.0938 43.1055 C 50.0783 43.1289 53.8280 39.2383 53.8280 32.3711 L 53.8280 14.4180 C 53.8280 7.5508 50.0783 3.6836 43.0938 3.6836 L 12.9064 3.6836 C 5.9454 3.6836 2.1720 7.5273 2.1720 14.4180 L 2.1720 32.3711 C 2.1720 39.2617 5.9454 43.1055 12.9064 43.0820 L 14.0079 43.0820 L 14.0079 49.9024 C 14.0079 51.3555 14.7813 52.3164 16.0938 52.3164 Z M 16.6798 21.9414 C 16.6798 19.1055 18.8595 17.1367 21.6954 17.1367 C 24.7891 17.1367 26.8751 19.5976 26.8751 22.8086 C 26.8751 28.8320 22.0704 31.6914 19.6564 31.6914 C 18.9766 31.6914 18.4844 31.1992 18.4844 30.5898 C 18.4844 30.0273 18.7423 29.6524 19.6329 29.3945 C 21.1798 28.9727 22.9844 27.7539 23.8516 25.8086 L 23.6642 25.8086 C 23.0313 26.5820 22.0704 26.7461 21.0626 26.7461 C 18.3907 26.7461 16.6798 24.6367 16.6798 21.9414 Z M 29.4766 21.9414 C 29.4766 19.1055 31.6564 17.1367 34.4923 17.1367 C 37.5860 17.1367 39.6720 19.5976 39.6720 22.8086 C 39.6720 28.8320 34.8673 31.6914 32.4532 31.6914 C 31.7735 31.6914 31.2813 31.1992 31.2813 30.5898 C 31.2813 30.0273 31.5391 29.6524 32.4298 29.3945 C 33.9766 28.9727 35.7813 27.7539 36.6485 25.8086 L 36.4610 25.8086 C 35.8282 26.5820 34.8673 26.7461 33.8595 26.7461 C 31.1876 26.7461 29.4766 24.6367 29.4766 21.9414 Z"
  }));
}

export default QuoteBubbleFill;