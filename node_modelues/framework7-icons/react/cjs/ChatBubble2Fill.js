"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ChatBubble2Fill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M42.1950364,4.70590037 C50.2325622,7.05798578 56,13.4885137 56,21.0515337 C56,26.1995677 53.3256367,30.8267622 49.0827722,33.9966405 L48.7137694,34.2597431 L48.1260756,34.6661104 L48.0663422,34.7054653 C46.5765241,35.8053078 47.498083,38.1200638 48.8783303,39.9705116 L49.1339041,40.3014664 C49.2204904,40.4098301 49.3083268,40.5161145 49.3969786,40.6199458 L49.6649456,40.9237066 L49.9022318,41.1800346 L50.0803516,41.3846967 C50.6153298,42.0299765 50.562871,42.3068231 49.926109,42.2403769 L49.7175544,42.2101694 C49.6045157,42.1899414 49.4783372,42.1620459 49.3390296,42.1265677 C47.7257449,41.7172882 46.4472546,41.2110785 45.3916999,40.6949439 L44.9199432,40.45634 C44.767696,40.3767817 44.6203181,40.2973053 44.4774021,40.2182276 L44.0616327,39.9825075 L43.6701911,39.7510807 L42.1442339,38.8137564 L41.8429107,38.6399208 L41.5500301,38.4827343 C40.7780995,38.0874586 40.0701543,37.8900488 39.2176494,38.0527145 L39.0491803,38.0891982 C37.8762441,38.2633863 36.6706309,38.3547919 35.4375,38.3547919 C34.7381162,38.3547919 34.0468863,38.3254083 33.3654587,38.2680281 C42.187391,34.8486247 48.3089659,27.3594362 48.3089659,18.6706341 C48.3089659,13.4293219 46.0806325,8.62426855 42.3754797,4.88628429 L42.1950364,4.70590037 Z M22.60125,0 C35.0833555,0 45.2025,8.49153689 45.2025,18.9641803 C45.2025,29.4387141 35.0833555,37.930251 22.60125,37.930251 C21.4717546,37.930251 20.3632633,37.8606749 19.279058,37.7269926 L18.6239139,37.6372439 C17.7193374,37.4216018 16.9692681,37.5679148 16.1806043,37.9264024 L15.8826691,38.0704884 L15.8826691,38.0704884 L15.5788527,38.2327105 L15.5788527,38.2327105 L15.2668923,38.4113135 L15.2668923,38.4113135 L14.4365106,38.9179687 L14.4365106,38.9179687 L13.8923518,39.2544298 L13.8923518,39.2544298 L13.3044111,39.6080014 L13.3044111,39.6080014 L12.8843559,39.8502962 L12.8843559,39.8502962 L12.4391847,40.0958077 C12.3627708,40.1368968 12.2852162,40.1780468 12.2064736,40.2192211 L11.7193856,40.4662664 C10.5478251,41.0420212 9.12495048,41.6082087 7.32139857,42.0644877 C7.22283864,42.0895188 7.13025777,42.1111063 7.04365905,42.1292255 L6.80181244,42.1731529 C5.98086794,42.2958864 5.88413878,41.9959452 6.51575156,41.2403166 L6.70607075,41.0229133 L6.70607075,41.0229133 L6.81477971,40.9056916 C6.90483001,40.8103998 6.99473189,40.7123779 7.08412638,40.6119338 L7.35042872,40.3036425 L7.35042872,40.3036425 L7.6115329,39.9826647 L7.6115329,39.9826647 L7.8652851,39.6508474 L7.8652851,39.6508474 L8.10953147,39.3100378 L8.10953147,39.3100378 L8.34211821,38.9620828 C8.37979137,38.9035975 8.41688897,38.8448914 8.45336614,38.786003 L8.66442499,38.4307932 C9.64508761,36.7063495 10.0284927,34.8933305 8.72027152,33.9302305 L7.76682092,33.2712283 L7.76682092,33.2712283 L7.60306352,33.1532889 L7.60306352,33.1532889 C2.93952357,29.678791 0,24.6069314 0,18.9641803 C0,8.49153689 10.1172541,0 22.60125,0 Z",
    transform: "translate(0 7)"
  }));
}

var _default = ChatBubble2Fill;
exports["default"] = _default;