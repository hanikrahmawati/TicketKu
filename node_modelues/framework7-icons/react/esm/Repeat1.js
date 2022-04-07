function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Repeat1(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 51.0625 22.4102 C 52.5160 22.4102 53.3128 21.6133 53.3128 20.1133 L 53.3128 9.2149 C 53.3128 7.5273 52.2347 6.4023 50.5940 6.4023 C 49.2112 6.4023 48.4144 6.8476 47.3128 7.6914 L 44.3126 10.0117 C 43.7735 10.4336 43.5626 10.9023 43.5626 11.4180 C 43.5626 12.1680 44.1251 12.8008 45.0860 12.8008 C 45.4609 12.8008 45.8363 12.6836 46.1641 12.4023 L 48.5780 10.4570 L 48.7657 10.4570 L 48.7657 20.1133 C 48.7657 21.6133 49.5860 22.4102 51.0625 22.4102 Z M 2.3829 26.4180 C 2.3829 27.8476 3.5314 28.9961 4.9611 28.9961 C 6.4142 28.9961 7.5626 27.8476 7.5626 26.4180 L 7.5626 24.8711 C 7.5626 21.1445 10.1173 18.6836 13.9611 18.6836 L 26.6173 18.6836 L 26.6173 23.5820 C 26.6173 24.8476 27.4376 25.6445 28.7267 25.6445 C 29.2892 25.6445 29.8751 25.4336 30.3204 25.0586 L 39.1798 17.7461 C 40.2345 16.8789 40.2111 15.4961 39.1798 14.6055 L 30.3204 7.2461 C 29.8751 6.8945 29.2892 6.6602 28.7267 6.6602 C 27.4376 6.6602 26.6173 7.4805 26.6173 8.7461 L 26.6173 13.5976 L 14.4532 13.5976 C 7.0938 13.5976 2.3829 17.8398 2.3829 24.4961 Z M 24.3438 32.6992 C 24.3438 31.4336 23.5470 30.6367 22.2579 30.6367 C 21.6954 30.6367 21.1095 30.8476 20.6642 31.1992 L 11.8048 38.5117 C 10.7501 39.3789 10.7501 40.7617 11.8048 41.6523 L 20.6642 49.0117 C 21.1095 49.3867 21.6954 49.5977 22.2579 49.5977 C 23.5470 49.5977 24.3438 48.8008 24.3438 47.5352 L 24.3438 42.6367 L 41.5470 42.6367 C 48.9064 42.6367 53.6171 38.3711 53.6171 31.7383 L 53.6171 29.8164 C 53.6171 28.3633 52.4689 27.2149 51.0160 27.2149 C 49.5860 27.2149 48.4374 28.3633 48.4374 29.8164 L 48.4374 31.3633 C 48.4374 35.0664 45.8828 37.5508 42.0392 37.5508 L 24.3438 37.5508 Z"
  }));
}

export default Repeat1;