function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

function Person3(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/React.createElement("path", {
    d: "M 28.0001 27.6594 C 31.4854 27.6594 34.3263 24.5548 34.3263 20.7766 C 34.3263 17.0423 31.4998 14.0841 28.0001 14.0841 C 24.5293 14.0841 21.6736 17.0862 21.6736 20.8058 C 21.6883 24.5695 24.5293 27.6594 28.0001 27.6594 Z M 11.1297 27.9816 C 14.1464 27.9816 16.6213 25.2724 16.6213 21.9481 C 16.6213 18.6971 14.1757 16.0757 11.1297 16.0757 C 8.1130 16.0757 5.6234 18.7410 5.6381 21.9774 C 5.6527 25.2870 8.1130 27.9816 11.1297 27.9816 Z M 44.8848 27.9816 C 47.8870 27.9816 50.3619 25.2870 50.3619 21.9774 C 50.3766 18.7410 47.8870 16.0757 44.8848 16.0757 C 41.8242 16.0757 39.3786 18.6971 39.3786 21.9481 C 39.3786 25.2724 41.8536 27.9816 44.8848 27.9816 Z M 28.0001 25.4481 C 25.8619 25.4481 24.0314 23.3979 24.0314 20.8058 C 24.0314 18.2578 25.8326 16.2954 28.0001 16.2954 C 30.1820 16.2954 31.9686 18.2285 31.9686 20.7766 C 31.9686 23.3686 30.1673 25.4481 28.0001 25.4481 Z M 11.1297 25.7996 C 9.3431 25.7996 7.8201 24.0862 7.8201 21.9774 C 7.8201 19.9125 9.3284 18.2578 11.1297 18.2578 C 12.9749 18.2578 14.4540 19.8833 14.4540 21.9481 C 14.4540 24.0862 12.9309 25.7996 11.1297 25.7996 Z M 44.8848 25.7996 C 43.0691 25.7996 41.5461 24.0862 41.5461 21.9481 C 41.5461 19.8833 43.0250 18.2578 44.8848 18.2578 C 46.6861 18.2578 48.1800 19.9125 48.1800 21.9774 C 48.1800 24.0862 46.6714 25.7996 44.8848 25.7996 Z M 2.9874 41.4104 L 14.4833 41.4104 C 13.7803 41.0151 13.2385 40.1364 13.3410 39.2431 L 2.6213 39.2431 C 2.3284 39.2431 2.1820 39.1259 2.1820 38.8477 C 2.1820 35.2159 6.3263 31.8184 11.1150 31.8184 C 12.9603 31.8184 14.6150 32.2577 16.0356 33.0924 C 16.5042 32.5067 17.0314 31.9941 17.6903 31.5402 C 15.8012 30.2954 13.5314 29.6510 11.1150 29.6510 C 4.9791 29.6510 0 34.1029 0 38.9795 C 0 40.6050 .9958 41.4104 2.9874 41.4104 Z M 53.0272 41.4104 C 55.0043 41.4104 56.0000 40.6050 56.0000 38.9795 C 56.0000 34.1029 51.0208 29.6510 44.8848 29.6510 C 42.4687 29.6510 40.2133 30.2954 38.3097 31.5402 C 38.9687 31.9941 39.5103 32.5067 39.9791 33.0924 C 41.3848 32.2577 43.0544 31.8184 44.8848 31.8184 C 49.6736 31.8184 53.8181 35.2159 53.8181 38.8477 C 53.8181 39.1259 53.6861 39.2431 53.3934 39.2431 L 42.6735 39.2431 C 42.7614 40.1364 42.2341 41.0151 41.5314 41.4104 Z M 18.8033 41.4104 L 37.1968 41.4104 C 39.6276 41.4104 40.7846 40.6782 40.7846 39.0674 C 40.7846 35.2305 35.9371 29.6803 28.0001 29.6803 C 20.0481 29.6803 15.2008 35.2305 15.2008 39.0674 C 15.2008 40.6782 16.3577 41.4104 18.8033 41.4104 Z M 18.1004 39.1992 C 17.7197 39.1992 17.5586 39.0966 17.5586 38.7891 C 17.5586 36.3874 21.2782 31.8916 28.0001 31.8916 C 34.7071 31.8916 38.4267 36.3874 38.4267 38.7891 C 38.4267 39.0966 38.2803 39.1992 37.8995 39.1992 Z"
  }));
}

export default Person3;