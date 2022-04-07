"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../shared/utils");

var _mixins = require("../shared/mixins");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _hoisted_1 = {
  key: 0,
  class: "subtitle"
};

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)("div", {
    class: _ctx.classes
  }, [(0, _vue.renderSlot)(_ctx.$slots, "default"), (0, _vue.createTextVNode)(" " + (0, _vue.toDisplayString)(_ctx.title) + " ", 1), _ctx.subtitle ? ((0, _vue.openBlock)(), (0, _vue.createBlock)("span", _hoisted_1, (0, _vue.toDisplayString)(_ctx.subtitle), 1)) : (0, _vue.createCommentVNode)("", true)], 2);
}

var _default = {
  name: 'f7-nav-title',
  render: render,
  props: _extends({
    title: String,
    subtitle: String,
    sliding: Boolean
  }, _mixins.colorProps),
  setup: function setup(props) {
    var classes = (0, _vue.computed)(function () {
      return (0, _utils.classNames)('title', {
        sliding: props.sliding
      }, (0, _mixins.colorClasses)(props));
    });
    return {
      classes: classes
    };
  }
};
exports.default = _default;