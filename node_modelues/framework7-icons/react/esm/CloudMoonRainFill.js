function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function CloudMoonRainFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 45.3923 28.0745 C 52.0380 26.9029 56 21.5138 56 18.0205 C 56 17.1897 55.6165 16.5720 54.9351 16.5720 C 53.9126 16.5720 52.3578 17.9353 49.4180 17.9353 C 44.2206 17.9353 40.9191 14.8040 40.9191 10.0539 C 40.9191 7.2209 42.4315 5.1760 42.4315 4.0470 C 42.4315 3.3654 41.9839 2.9394 41.1320 2.9607 C 37.1914 3.1311 32.2070 7.5191 31.0781 13.1851 C 31.7384 13.8029 32.3774 14.6336 32.8887 15.7625 C 40.0671 16.3164 45.2645 21.7268 45.3923 28.0745 Z M 8.8399 39.0019 L 31.8875 39.0019 C 37.9157 39.0019 42.6017 34.4222 42.6017 28.5218 C 42.6017 22.6428 37.8305 18.2121 31.4615 18.1908 C 28.9693 13.4194 24.5387 10.6503 19.3838 10.6503 C 12.4611 10.6503 6.5820 16.0395 5.9430 23.0475 C 2.3218 24.1125 0 27.2011 0 30.9288 C 0 35.7215 3.5999 39.0019 8.8399 39.0019 Z M 25.6250 49.1411 L 28.3941 44.3271 C 28.7776 43.6668 28.5646 42.9212 27.9255 42.5591 C 27.2865 42.1757 26.5623 42.3887 26.1789 43.0490 L 23.3884 47.8844 C 23.0263 48.5021 23.1967 49.2476 23.8570 49.6310 C 24.4961 49.9719 25.2629 49.7588 25.6250 49.1411 Z M 8.6695 49.1624 L 11.4386 44.3484 C 11.8433 43.6881 11.6303 42.9425 10.9913 42.5804 C 10.3523 42.1970 9.6067 42.4100 9.2233 43.0703 L 6.4329 47.9057 C 6.0707 48.5234 6.2625 49.2689 6.9228 49.6524 C 7.5405 49.9931 8.3074 49.7801 8.6695 49.1624 Z M 32.2922 55.1267 L 35.0613 50.3340 C 35.4447 49.6736 35.2318 48.9281 34.5927 48.5447 C 33.9537 48.1826 33.2295 48.3956 32.8460 49.0346 L 30.0343 53.8912 C 29.6935 54.4876 29.8639 55.2332 30.5242 55.6166 C 31.1633 55.9787 31.9301 55.7657 32.2922 55.1267 Z M 15.3367 55.1480 L 18.1058 50.3553 C 18.4892 49.6949 18.2975 48.9494 17.6585 48.5660 C 16.9982 48.2039 16.2739 48.4169 15.8905 49.0559 L 13.1001 53.9125 C 12.7380 54.5090 12.9297 55.2545 13.5687 55.6379 C 14.2077 56 14.9746 55.7870 15.3367 55.1480 Z"
  }));
}

export default CloudMoonRainFill;