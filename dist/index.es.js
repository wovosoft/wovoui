var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source2, exclude) => {
  var target = {};
  for (var prop in source2)
    if (__hasOwnProp.call(source2, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source2[prop];
  if (source2 != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source2)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source2, prop))
        target[prop] = source2[prop];
    }
  return target;
};
import { openBlock, createBlock, resolveDynamicComponent, withCtx, normalizeClass, renderSlot, ref, reactive, resolveComponent, createElementBlock, createVNode, createTextVNode, toDisplayString, createElementVNode, defineComponent, watch, computed, createCommentVNode, mergeProps, Fragment, renderList, normalizeProps, createSlots, withDirectives, vModelCheckbox, withModifiers, guardReactiveProps, normalizeStyle, h, nextTick, Teleport, vModelSelect, provide } from "vue";
const makeString = (initial = null) => ({
  type: String,
  default: initial
});
const makeBoolean = (initial = true) => ({
  type: Boolean,
  default: initial
});
const makeNumber = (initial = 0) => ({
  type: Number,
  default: initial
});
const make = (type, initial) => ({
  type,
  default: () => initial
});
const isBoolean = (val) => typeof val === "boolean";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1f = {
  name: "AccordionHeader",
  emits: ["update:modelValue"],
  props: {
    tag: makeString("h2"),
    toggleTag: makeString("button"),
    modelValue: makeBoolean(false)
  }
};
function _sfc_render$1f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), { class: "accordion-header" }, {
    default: withCtx(() => [
      (openBlock(), createBlock(resolveDynamicComponent($props.toggleTag), {
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", !$props.modelValue)),
        class: normalizeClass(["accordion-button", { "collapsed": !$props.modelValue }]),
        type: $props.toggleTag === "button" ? "button" : null,
        "aria-expanded": $props.modelValue
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "class", "aria-expanded"]))
    ]),
    _: 3
  });
}
var AccordionHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["render", _sfc_render$1f]]);
const _sfc_main$1e = {
  name: "AccordionItem",
  emits: ["update:modelValue", "update:index"],
  components: { AccordionHeader },
  props: {
    header: makeString(),
    modelValue: makeBoolean(false),
    index: makeNumber(null)
  },
  inject: ["alwaysOpen"],
  setup(props, {}) {
    const visible = ref(props.modelValue);
    return {
      bodyClass: reactive({ show: false, collapsing: false, collapse: true }),
      visible
    };
  },
  watch: {
    visible(val) {
      this.bodyClass.show = val;
    },
    index(val) {
      this.visible = this.index === this.myIndex;
    }
  },
  mounted() {
    this.visible = this.index === this.myIndex;
  },
  computed: {
    myIndex() {
      let accordions = this.$el.parentNode.children;
      for (let x = 0; x < accordions.length; x++) {
        if (accordions[x].isSameNode(this.$el)) {
          return x;
        }
      }
    }
  },
  methods: {
    clicked() {
      this.$emit("update:index", this.myIndex);
    }
  }
};
const _hoisted_1$r = { class: "accordion-item" };
const _hoisted_2$a = { class: "accordion-body" };
function _sfc_render$1e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AccordionHeader = resolveComponent("AccordionHeader");
  return openBlock(), createElementBlock("div", _hoisted_1$r, [
    createVNode(_component_AccordionHeader, {
      modelValue: $setup.visible,
      "onUpdate:modelValue": [
        _cache[0] || (_cache[0] = ($event) => $setup.visible = $event),
        $options.clicked
      ]
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.header), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "onUpdate:modelValue"]),
    createElementVNode("div", {
      class: normalizeClass(["accordion-collapse", $setup.bodyClass])
    }, [
      createElementVNode("div", _hoisted_2$a, [
        renderSlot(_ctx.$slots, "default")
      ])
    ], 2)
  ]);
}
var AccordionItem = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["render", _sfc_render$1e]]);
const _sfc_main$1d = defineComponent({
  name: "Accordion",
  components: { AccordionItem },
  props: {
    modelValue: makeNumber(null),
    flush: makeBoolean(false),
    alwaysOpen: makeBoolean(false)
  },
  provide() {
    return {
      alwaysOpen: this.alwaysOpen
    };
  }
});
function _sfc_render$1d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["accordion", { "accordion-flush": _ctx.flush }])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Accordion = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["render", _sfc_render$1d]]);
const _sfc_main$1c = {
  name: "AccordionBody"
};
const _hoisted_1$q = { class: "accordion-body" };
function _sfc_render$1c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["accordion-collapse collapse", { "collapsing": _ctx.modelValue }])
  }, [
    createElementVNode("div", _hoisted_1$q, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2);
}
var AccordionBody = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["render", _sfc_render$1c]]);
const _sfc_main$1b = {
  props: {
    white: makeBoolean(false)
  }
};
function _sfc_render$1b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    type: "button",
    "aria-label": "Close",
    class: normalizeClass([{ "btn-close-white": $props.white }, "btn-close"])
  }, null, 2);
}
var ButtonClose = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["render", _sfc_render$1b]]);
const _sfc_main$1a = {
  emits: ["update:modelValue", "dismissed", "countdown"],
  components: { ButtonClose },
  props: {
    tag: makeString("div"),
    dismissLabel: makeString(null),
    variant: makeString("primary"),
    dismissible: makeBoolean(false),
    fade: makeBoolean(false),
    modelValue: makeBoolean(false),
    show: makeBoolean(null),
    countdown: makeNumber(null)
  },
  setup(props, context) {
    const visible = ref(false);
    const dismissHandler = ref(null);
    const countdownHandler = ref(null);
    const timoutNow = ref(0);
    watch(visible, (value) => {
      context.emit("update:modelValue", value);
      if (!value) {
        context.emit("dismissed", true);
      }
      if (value && props.countdown !== null) {
        dismissHandler.value = setTimeout(() => visible.value = false, props.countdown * 1e3);
        context.emit("countdown", props.countdown);
        timoutNow.value = props.countdown - 1;
        countdownHandler.value = setInterval(() => {
          context.emit("countdown", timoutNow.value--);
        }, 1e3);
      } else if (dismissHandler.value && !value) {
        clearTimeout(dismissHandler.value);
        clearInterval(countdownHandler.value);
      }
    });
    watch(() => props.modelValue, (value) => visible.value = value);
    watch(() => props.show, (value) => visible.value = value);
    if (props.show !== null) {
      visible.value = props.show;
    } else {
      visible.value = props.modelValue;
    }
    return {
      classes: computed(() => [
        "alert",
        {
          ["alert-" + props.variant]: !!props.variant,
          "alert-dismissible": props.dismissible
        }
      ]),
      visible
    };
  }
};
function _sfc_render$1a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ButtonClose = resolveComponent("ButtonClose");
  return $setup.visible ? (openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    key: 0,
    class: normalizeClass($setup.classes),
    role: "alert"
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default"),
      $props.dismissible ? (openBlock(), createBlock(_component_ButtonClose, {
        key: 0,
        "aria-label": $props.dismissLabel,
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.visible = false)
      }, null, 8, ["aria-label"])) : createCommentVNode("", true)
    ]),
    _: 3
  }, 8, ["class"])) : createCommentVNode("", true);
}
var Alert = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["render", _sfc_render$1a]]);
const _sfc_main$19 = {
  name: "AlertHeading",
  props: {
    tag: makeString("h4")
  },
  setup(props, context) {
    return {
      classes: computed(() => [
        "alert-heading"
      ])
    };
  }
};
function _sfc_render$19(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($setup.classes)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var AlertHeading = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["render", _sfc_render$19]]);
const _sfc_main$18 = {
  name: "AlertLink",
  props: {
    href: makeString("#")
  }
};
const _hoisted_1$p = ["href"];
function _sfc_render$18(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", {
    href: $props.href,
    class: "alert-link"
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 8, _hoisted_1$p);
}
var AlertLink = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["render", _sfc_render$18]]);
const _sfc_main$17 = {
  props: {
    tag: makeString("span"),
    variant: makeString("secondary"),
    pill: makeBoolean(false),
    href: makeString(null)
  },
  setup(props, context) {
    const attributes = reactive({});
    if (props.href) {
      attributes.href = props.href;
      attributes.target = "_self";
    }
    return {
      attributes,
      classes: computed(() => [
        "badge",
        {
          ["bg-" + props.variant]: !!props.variant,
          "rounded-pill": props.pill,
          "text-decoration-none": props.href
        }
      ])
    };
  }
};
function _sfc_render$17(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.href ? "a" : $props.tag), mergeProps($setup.attributes, { class: $setup.classes }), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
var Badge = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["render", _sfc_render$17]]);
const _sfc_main$16 = {
  name: "BreadcrumbItem",
  props: {
    tag: makeString("li"),
    active: makeBoolean(false),
    activeClass: makeString("active"),
    append: makeBoolean(false),
    ariaCurrent: makeString("location"),
    disabled: makeBoolean(false),
    exact: makeBoolean(false),
    rel: makeString(null),
    replace: makeBoolean(false),
    target: makeString("_self"),
    to: make([Object, String], null),
    href: makeString()
  },
  setup(props, context) {
    const classes = computed(() => {
      return [
        "breadcrumb-item",
        {
          "active": props.active
        }
      ];
    });
    const attributes = computed(() => {
      return {
        ariaCurrent: props.ariaCurrent
      };
    });
    return {
      classes,
      attributes,
      isRouterInstalled: computed(() => !!context.$router)
    };
  }
};
const _hoisted_1$o = ["href"];
function _sfc_render$16(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("li", mergeProps({ class: $setup.classes }, $setup.attributes), [
    $props.href ? (openBlock(), createElementBlock("a", {
      key: 0,
      href: $props.href
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 8, _hoisted_1$o)) : $setup.isRouterInstalled && $props.to ? (openBlock(), createBlock(_component_router_link, {
      key: 1,
      to: $props.to
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8, ["to"])) : renderSlot(_ctx.$slots, "default", { key: 2 })
  ], 16);
}
var BreadcrumbItem = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["render", _sfc_render$16]]);
const _sfc_main$15 = defineComponent({
  name: "Breadcrumb",
  components: { BreadcrumbItem },
  props: {
    tag: makeString("ol"),
    items: make(Array, []),
    divider: makeString("null")
  },
  setup(props) {
    return {
      classes: computed(() => [
        "breadcrumb"
      ])
    };
  }
});
function _sfc_render$15(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BreadcrumbItem = resolveComponent("BreadcrumbItem");
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    class: normalizeClass(_ctx.classes)
  }, {
    default: withCtx(() => [
      _ctx.items && Array.isArray(_ctx.items) && _ctx.items.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.items, (item, item_key) => {
        return openBlock(), createBlock(_component_BreadcrumbItem, {
          href: item.href,
          to: item.to,
          active: !!item.active,
          key: item_key
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(item.text ? item.text : item), 1)
          ]),
          _: 2
        }, 1032, ["href", "to", "active"]);
      }), 128)) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["render", _sfc_render$15]]);
var Button_vue_vue_type_style_index_0_lang = "";
const _sfc_main$14 = {
  components: { Badge },
  props: {
    tag: makeString("button"),
    href: makeString(null),
    variant: makeString("secondary"),
    size: makeString(null),
    type: makeString("button"),
    outline: makeBoolean(false),
    block: makeBoolean(false),
    pill: makeBoolean(false),
    squared: makeBoolean(false),
    disabled: makeBoolean(false),
    pressed: makeBoolean(false),
    badge: make([String, Number], null),
    badgeVariant: makeString("primary")
  },
  setup(props, context) {
    let attributes = {
      disabled: props.disabled
    };
    if (props.pressed) {
      attributes["aria-pressed"] = true;
      attributes["autocomplete"] = "off";
    }
    return {
      attributes,
      classes: computed(() => [
        "btn",
        {
          ["btn-" + (props.outline ? "outline-" : "") + props.variant]: !!props.variant,
          ["btn-" + props.size]: !!props.size,
          "btn-block": props.block,
          "rounded-pill": props.pill,
          "rounded-0": props.squared,
          active: props.pressed
        }
      ])
    };
  }
};
function _sfc_render$14(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  return openBlock(), createBlock(resolveDynamicComponent($props.href ? "a" : $props.tag), mergeProps({
    type: $props.tag === "button" ? $props.tag : null,
    class: $setup.classes
  }, $setup.attributes), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default"),
      $props.badge ? (openBlock(), createBlock(_component_Badge, {
        key: 0,
        variant: $props.badgeVariant
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.badge), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : createCommentVNode("", true)
    ]),
    _: 3
  }, 16, ["type", "class"]);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["render", _sfc_render$14]]);
const _sfc_main$13 = {
  props: {
    ariaLabel: makeString("Button Group"),
    size: makeString(null),
    vertical: makeBoolean(false),
    role: makeString("group")
  },
  setup(props, context) {
    return {
      classes: computed(() => [
        {
          "btn-group": !props.vertical,
          "btn-group-vertical": props.vertical,
          ["btn-group-" + props.size]: props.size
        }
      ])
    };
  }
};
const _hoisted_1$n = ["role", "aria-label"];
function _sfc_render$13(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($setup.classes),
    role: $props.role,
    "aria-label": $props.ariaLabel
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$n);
}
var ButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["render", _sfc_render$13]]);
const _sfc_main$12 = {
  name: "ButtonToolbar",
  props: {
    tag: makeString("div"),
    role: makeString("toolbar"),
    justified: makeBoolean(false)
  },
  setup(props) {
    return {
      classes: computed(() => [
        "btn-toolbar",
        {
          "justify-content-between": props.justified
        }
      ])
    };
  }
};
function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($setup.classes),
    role: $props.role
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "role"]);
}
var ButtonToolbar = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$12]]);
const _sfc_main$11 = {
  name: "CardHeader",
  props: {
    content: makeString(),
    variant: makeString(),
    borderVariant: makeString(),
    tag: makeString("div"),
    textVariant: makeString()
  },
  setup(props, context) {
    let classes = ref([]);
    classes.value = [
      "card-header",
      {
        ["bg-" + props.variant]: !!props.variant,
        ["text-" + props.textVariant]: !!props.textVariant,
        ["border-" + props.borderVariant]: !!props.borderVariant
      }
    ];
    return {
      classes
    };
  }
};
function _sfc_render$11(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($setup.classes)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var CardHeader = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["render", _sfc_render$11]]);
const _sfc_main$10 = {
  name: "CardTitle",
  props: {
    title: makeString(),
    tag: makeString("h4")
  },
  setup(props) {
    let classes = ref([]);
    classes.value = [
      "card-title"
    ];
    return {
      classes
    };
  }
};
function _sfc_render$10(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($setup.classes)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var CardTitle = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["render", _sfc_render$10]]);
const _sfc_main$$ = {
  name: "CardSubTitle",
  props: {
    title: makeString(),
    tag: makeString("h6"),
    textVariant: makeString("muted")
  },
  setup(props) {
    let classes = ref([]);
    classes.value = [
      "card-subtitle",
      {
        ["text-" + props.textVariant]: !!props.textVariant
      }
    ];
    return {
      classes
    };
  }
};
function _sfc_render$$(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($setup.classes)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var CardSubTitle = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["render", _sfc_render$$]]);
const _sfc_main$_ = {
  name: "CardBody",
  components: { CardSubTitle, CardTitle },
  props: {
    content: makeString(),
    variant: makeString(),
    borderVariant: makeString(),
    tag: makeString("div"),
    textVariant: makeString(),
    overlay: makeBoolean(false),
    subTitle: makeString(),
    subTitleTag: makeString("h6"),
    subTitleTextVariant: makeString("muted"),
    title: makeString(),
    titleTag: makeString("h4")
  },
  setup(props, context) {
    let classes = ref([]);
    classes.value = [
      {
        "card-body": !props.overlay,
        "card-img-overlay": props.overlay,
        ["bg-" + props.variant]: !!props.variant,
        ["text-" + props.textVariant]: !!props.textVariant,
        ["border-" + props.borderVariant]: !!props.borderVariant
      }
    ];
    return {
      classes
    };
  }
};
function _sfc_render$_(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CardTitle = resolveComponent("CardTitle");
  const _component_CardSubTitle = resolveComponent("CardSubTitle");
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($setup.classes)
  }, {
    default: withCtx(() => [
      $props.title || _ctx.$slots.title ? (openBlock(), createBlock(_component_CardTitle, {
        key: 0,
        tag: $props.titleTag
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createTextVNode(toDisplayString($props.title), 1)
          ])
        ]),
        _: 3
      }, 8, ["tag"])) : createCommentVNode("", true),
      $props.subTitle || _ctx.$slots.subTitle ? (openBlock(), createBlock(_component_CardSubTitle, {
        key: 1,
        tag: $props.subTitleTag,
        "text-variant": $props.subTitleTextVariant
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "subTitle", {}, () => [
            createTextVNode(toDisplayString($props.subTitle), 1)
          ])
        ]),
        _: 3
      }, 8, ["tag", "text-variant"])) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var CardBody = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["render", _sfc_render$_]]);
const _sfc_main$Z = {
  name: "CardFooter",
  props: {
    content: makeString(),
    variant: makeString(),
    borderVariant: makeString(),
    tag: makeString("div"),
    textVariant: makeString()
  },
  setup(props, context) {
    let classes = ref([]);
    classes.value = [
      "card-footer",
      {
        ["bg-" + props.variant]: !!props.variant,
        ["text-" + props.textVariant]: !!props.textVariant,
        ["border-" + props.borderVariant]: !!props.borderVariant
      }
    ];
    return {
      classes
    };
  }
};
function _sfc_render$Z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($setup.classes)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var CardFooter = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["render", _sfc_render$Z]]);
const _sfc_main$Y = {
  name: "CardImg",
  props: {
    src: makeString(),
    alt: makeString(),
    overlay: makeBoolean(false),
    bottom: makeBoolean(false),
    end: makeBoolean(false),
    left: makeBoolean(false),
    right: makeBoolean(false),
    start: makeBoolean(false),
    top: makeBoolean(false),
    height: make([Number, String], null),
    width: make([Number, String], null)
  },
  setup(props, context) {
    return {
      classes: computed(() => [
        {
          "card-img": props.overlay,
          "card-img-top": props.top,
          "card-img-bottom": props.bottom,
          "card-img-left": props.left || props.start,
          "card-img-right": props.right || props.end
        }
      ])
    };
  }
};
const _hoisted_1$m = ["src", "alt"];
function _sfc_render$Y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("img", {
    src: $props.src,
    class: normalizeClass($setup.classes),
    alt: $props.alt
  }, null, 10, _hoisted_1$m);
}
var CardImg = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["render", _sfc_render$Y]]);
var Card_vue_vue_type_style_index_0_lang = "";
const _sfc_main$X = {
  name: "Card",
  components: { CardImg, CardFooter, CardBody, CardHeader },
  props: {
    align: makeString(null),
    bgVariant: makeString(null),
    bodyBgVariant: makeString(null),
    bodyBorderVariant: makeString(null),
    bodyClass: make([String, Array], null),
    bodyTag: makeString("div"),
    bodyTextVariant: makeString(null),
    footer: makeString(null),
    footerBgVariant: makeString(null),
    footerTag: makeString("div"),
    footerTextVariant: makeString(null),
    footerClass: make([String, Array], null),
    footerBorderVariant: makeString(null),
    header: makeString(null),
    headerBgVariant: makeString(null),
    headerBorderVariant: makeString(null),
    headerClass: makeString(null),
    headerTag: makeString("div"),
    headerTextVariant: makeString(null),
    imgAlt: makeString(null),
    imgBottom: makeBoolean(false),
    imgEnd: makeBoolean(false),
    imgLeft: makeBoolean(false),
    imgRight: makeBoolean(false),
    imgStart: makeBoolean(false),
    imgTop: makeBoolean(false),
    imgSrc: makeString(null),
    imgWidth: makeString(null),
    imgHeight: makeString(null),
    noBody: makeBoolean(false),
    overlay: makeBoolean(false),
    subTitle: makeString(null),
    subTitleTag: makeString("h6"),
    subTitleTextVariant: makeString("muted"),
    tag: makeString("div"),
    textVariant: makeString(),
    borderVariant: makeString(),
    title: makeString(),
    titleTag: makeString("h4")
  },
  setup(props) {
    const classes = computed(() => [
      "card",
      {
        "flex-row": props.imgLeft || props.imgStart,
        "flex-row-reverse": props.imgRight || props.imgEnd,
        ["bg-" + props.bgVariant]: props.bgVariant,
        ["text-" + props.textVariant]: props.textVariant,
        ["border-" + props.borderVariant]: props.borderVariant
      }
    ]);
    const cardImageBindings = computed(() => ({
      alt: props.imgAlt,
      bottom: props.imgBottom,
      end: props.imgEnd,
      left: props.imgLeft,
      right: props.imgRight,
      start: props.imgStart,
      top: props.imgTop,
      src: props.imgSrc,
      width: props.imgWidth,
      height: props.imgHeight,
      class: {
        "card-img": props.overlay
      }
    }));
    const cardBodyBindings = computed(() => ({
      tag: props.bodyTag,
      variant: props.bodyBgVariant,
      borderVariant: props.bodyBorderVariant,
      textVariant: props.bodyTextVariant,
      overlay: props.overlay,
      title: props.title,
      titleTag: props.titleTag,
      class: props.bodyClass,
      subTitle: props.subTitle,
      subTitleTag: props.subTitleTag,
      subTitleTextVariant: props.subTitleTextVariant
    }));
    return {
      classes,
      cardImageBindings,
      cardBodyBindings
    };
  }
};
function _sfc_render$X(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CardHeader = resolveComponent("CardHeader");
  const _component_CardImg = resolveComponent("CardImg");
  const _component_CardBody = resolveComponent("CardBody");
  const _component_CardFooter = resolveComponent("CardFooter");
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($setup.classes)
  }, {
    default: withCtx(() => [
      _ctx.$slots.header || $props.header ? (openBlock(), createBlock(_component_CardHeader, {
        key: 0,
        tag: $props.headerTag,
        class: normalizeClass($props.headerClass),
        "border-variant": $props.headerBorderVariant,
        "text-variant": $props.headerTextVariant,
        variant: $props.headerBgVariant
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createTextVNode(toDisplayString($props.header), 1)
          ])
        ]),
        _: 3
      }, 8, ["tag", "class", "border-variant", "text-variant", "variant"])) : createCommentVNode("", true),
      $props.imgSrc && !$props.imgBottom ? (openBlock(), createBlock(_component_CardImg, normalizeProps(mergeProps({ key: 1 }, $setup.cardImageBindings)), null, 16)) : createCommentVNode("", true),
      !$props.noBody ? (openBlock(), createBlock(_component_CardBody, normalizeProps(mergeProps({ key: 2 }, $setup.cardBodyBindings)), createSlots({
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 2
      }, [
        _ctx.$slots.title ? {
          name: "title",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "title")
          ])
        } : void 0
      ]), 1040)) : renderSlot(_ctx.$slots, "default", { key: 3 }),
      $props.imgSrc && $props.imgBottom ? (openBlock(), createBlock(_component_CardImg, normalizeProps(mergeProps({ key: 4 }, $setup.cardImageBindings)), null, 16)) : createCommentVNode("", true),
      _ctx.$slots.footer || $props.footer ? (openBlock(), createBlock(_component_CardFooter, {
        key: 5,
        tag: $props.footerTag,
        class: normalizeClass($props.footerClass),
        "border-variant": $props.footerBorderVariant,
        "text-variant": $props.footerTextVariant,
        variant: $props.footerBgVariant
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "footer", {}, () => [
            createTextVNode(toDisplayString($props.footer), 1)
          ])
        ]),
        _: 3
      }, 8, ["tag", "class", "border-variant", "text-variant", "variant"])) : createCommentVNode("", true)
    ]),
    _: 3
  }, 8, ["class"]);
}
var Card = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["render", _sfc_render$X]]);
const _sfc_main$W = {
  name: "CardGroup",
  props: {
    tag: makeString("div"),
    deck: makeBoolean(false),
    columns: makeBoolean(false)
  },
  setup(props) {
    return {
      classes: computed(() => [
        {
          "card-group": !props.deck && !props.columns,
          "card-deck": props.deck,
          "card-columns": props.columns
        }
      ])
    };
  }
};
function _sfc_render$W(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($setup.classes)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var CardGroup = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["render", _sfc_render$W]]);
const _sfc_main$V = {
  name: "CardLink",
  props: {
    href: makeString("#")
  }
};
const _hoisted_1$l = ["href"];
function _sfc_render$V(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", {
    href: $props.href,
    class: "card-link"
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 8, _hoisted_1$l);
}
var CardLink = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$V]]);
const _sfc_main$U = {
  name: "CardText",
  props: {
    tag: makeString("p")
  },
  setup(props, context) {
    return {
      classes: computed(() => [
        "card-text"
      ])
    };
  }
};
function _sfc_render$U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($setup.classes)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var CardText = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$U]]);
const _sfc_main$T = {
  name: "Checkbox",
  emits: ["update:modelValue", "checked", "unchecked"],
  props: {
    name: makeString(null),
    id: makeString(null),
    required: makeBoolean(false),
    readonly: makeBoolean(false),
    disabled: makeBoolean(false),
    inline: makeBoolean(false),
    modelValue: {
      default: null
    },
    value: {
      default: true
    },
    uncheckedValue: {
      default: false
    },
    switch: makeBoolean(false),
    button: makeBoolean(false),
    variant: makeString("primary"),
    outline: makeBoolean(true),
    checked: makeBoolean(false)
  },
  setup(props, context) {
    const identifier = ref(null);
    if (props.id) {
      identifier.value = props.id;
    } else {
      identifier.value = "checkbox_id" + Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
    }
    const model = ref(props.modelValue);
    const classes = computed(() => [
      "form-check",
      {
        "form-switch": props.switch,
        "form-check-inline": props.inline
      }
    ]);
    const inputAttrs = ref({
      role: props.switch ? "switch" : null
    });
    const valueChanged = (e) => {
      if (e.target.checked) {
        context.emit("checked", { originalEvent: e, data: props.value, checked: true });
      } else {
        context.emit("unchecked", { originalEvent: e, data: props.uncheckedValue, checked: false });
      }
    };
    watch(() => props.modelValue, (value) => model.value = value);
    watch(model, (value) => context.emit("update:modelValue", value));
    const btnClass = computed(() => [
      "btn",
      {
        ["btn-" + (props.outline ? "outline-" : "") + props.variant]: props.variant
      }
    ]);
    return {
      identifier,
      model,
      classes,
      btnClass,
      inputAttrs,
      valueChanged
    };
  },
  watch: {
    checked(value) {
      if (value) {
        this.$emit("update:modelValue", this.value);
        if (!this.$el.querySelector("input").checked) {
          this.$el.querySelector("input").checked = true;
        }
      } else {
        this.$emit("update:modelValue", this.uncheckedValue);
        if (this.$el.querySelector("input").checked) {
          this.$el.querySelector("input").checked = false;
        }
      }
    }
  }
};
const _hoisted_1$k = ["required", "readonly", "disabled", "name", "value", "id"];
const _hoisted_2$9 = ["for"];
const _hoisted_3$5 = ["required", "readonly", "disabled", "name", "value", "id"];
const _hoisted_4$1 = ["for"];
function _sfc_render$T(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.button ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
    withDirectives(createElementVNode("input", mergeProps({
      class: "btn-check",
      onChange: _cache[0] || (_cache[0] = (...args) => $setup.valueChanged && $setup.valueChanged(...args)),
      required: $props.required,
      readonly: $props.readonly,
      disabled: $props.disabled,
      name: $props.name,
      type: "checkbox",
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.model = $event),
      value: $props.value
    }, $setup.inputAttrs, { id: $setup.identifier }), null, 16, _hoisted_1$k), [
      [vModelCheckbox, $setup.model]
    ]),
    _ctx.$slots.default ? (openBlock(), createElementBlock("label", {
      key: 0,
      class: normalizeClass($setup.btnClass),
      for: $setup.identifier
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 10, _hoisted_2$9)) : createCommentVNode("", true)
  ], 64)) : (openBlock(), createElementBlock("div", {
    key: 1,
    class: normalizeClass($setup.classes)
  }, [
    withDirectives(createElementVNode("input", mergeProps({
      class: "form-check-input",
      onChange: _cache[2] || (_cache[2] = (...args) => $setup.valueChanged && $setup.valueChanged(...args)),
      required: $props.required,
      readonly: $props.readonly,
      disabled: $props.disabled,
      name: $props.name,
      type: "checkbox",
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.model = $event),
      value: $props.value
    }, $setup.inputAttrs, { id: $setup.identifier }), null, 16, _hoisted_3$5), [
      [vModelCheckbox, $setup.model]
    ]),
    _ctx.$slots.default ? (openBlock(), createElementBlock("label", {
      key: 0,
      class: "form-check-label",
      for: $setup.identifier
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 8, _hoisted_4$1)) : createCommentVNode("", true)
  ], 2));
}
var Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$T]]);
const _sfc_main$S = {
  name: "CheckboxGroup",
  components: { Checkbox },
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      default: null
    },
    options: make(Array, []),
    textField: makeString(),
    valueField: makeString(),
    inline: makeBoolean(false),
    switch: makeBoolean(false)
  },
  setup(props, context) {
    const model = ref(props.modelValue);
    return {
      model
    };
  },
  watch: {
    modelValue(value) {
      this.model = value;
    },
    model(value) {
      this.$emit("update:modelValue", value);
    }
  }
};
const _hoisted_1$j = { role: "group" };
function _sfc_render$S(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Checkbox = resolveComponent("Checkbox");
  return openBlock(), createElementBlock("div", _hoisted_1$j, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, (option, option_key) => {
      return openBlock(), createBlock(_component_Checkbox, {
        key: option_key,
        inline: $props.inline,
        switch: _ctx.$props.switch,
        modelValue: $setup.model,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event),
        value: $props.valueField ? option[$props.valueField] : option
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.textField ? option[$props.textField] : option), 1)
        ]),
        _: 2
      }, 1032, ["inline", "switch", "modelValue", "value"]);
    }), 128))
  ]);
}
var CheckboxGroup = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$S]]);
const _sfc_main$R = {
  name: "Col",
  props: {
    tag: makeString("div"),
    col: make([Number, String], null),
    sm: make([Number, Boolean, String], null),
    md: make([Number, Boolean, String], null),
    lg: make([Number, Boolean, String], null),
    xl: make([Number, Boolean, String], null),
    alignSelf: makeString(),
    order: make([Number, String], null),
    offsetSm: make([Number, String], null),
    offsetMd: make([Number, String], null),
    offsetLg: make([Number, String], null),
    offsetXl: make([Number, String], null),
    gx: make([Number, String], null),
    gy: make([Number, String], null)
  },
  setup(props) {
    let isDefault = true;
    for (let x of [props.sm, props.md, props.lg, props.xl, props.col]) {
      if (x) {
        isDefault = false;
      }
      break;
    }
    const classes = reactive({
      "col": isDefault,
      ["col-" + props.col]: props.col,
      ["col-sm-" + props.sm]: props.sm && !isBoolean(props.sm),
      ["col-md-" + props.md]: props.md && !isBoolean(props.md),
      ["col-lg-" + props.lg]: props.lg && !isBoolean(props.lg),
      ["col-xl-" + props.xl]: props.xl && !isBoolean(props.xl),
      "col-sm": props.sm && isBoolean(props.sm),
      "col-md": props.md && isBoolean(props.md),
      "col-lg": props.lg && isBoolean(props.lg),
      "col-xl": props.xl && isBoolean(props.xl),
      ["align-self-" + props.alignSelf]: props.alignSelf,
      ["order-" + props.order]: props.order,
      ["offset-sm-" + props.offsetSm]: props.offsetSm,
      ["offset-md-" + props.offsetMd]: props.offsetMd,
      ["offset-lg-" + props.offsetLg]: props.offsetLg,
      ["offset-xl-" + props.offsetXl]: props.offsetXl,
      ["gx-" + props.gx]: props.gx,
      ["gy-" + props.gy]: props.gy
    });
    return {
      classes
    };
  }
};
function _sfc_render$R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($setup.classes)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var Col = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$R]]);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var lodash = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(module, exports) {
  (function() {
    var undefined$1;
    var VERSION = "4.17.21";
    var LARGE_ARRAY_SIZE = 200;
    var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT2 = "Invalid `variable` option passed into `_.template`";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_MEMOIZE_SIZE = 500;
    var PLACEHOLDER = "__lodash_placeholder__";
    var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
    var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    var DEFAULT_TRUNC_LENGTH2 = 30, DEFAULT_TRUNC_OMISSION2 = "...";
    var HOT_COUNT2 = 800, HOT_SPAN2 = 16;
    var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
    var INFINITY2 = 1 / 0, MAX_SAFE_INTEGER2 = 9007199254740991, MAX_INTEGER2 = 17976931348623157e292, NAN2 = 0 / 0;
    var MAX_ARRAY_LENGTH2 = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH2 - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH2 >>> 1;
    var wrapFlags = [
      ["ary", WRAP_ARY_FLAG],
      ["bind", WRAP_BIND_FLAG],
      ["bindKey", WRAP_BIND_KEY_FLAG],
      ["curry", WRAP_CURRY_FLAG],
      ["curryRight", WRAP_CURRY_RIGHT_FLAG],
      ["flip", WRAP_FLIP_FLAG],
      ["partial", WRAP_PARTIAL_FLAG],
      ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
      ["rearg", WRAP_REARG_FLAG]
    ];
    var argsTag2 = "[object Arguments]", arrayTag2 = "[object Array]", asyncTag2 = "[object AsyncFunction]", boolTag2 = "[object Boolean]", dateTag2 = "[object Date]", domExcTag2 = "[object DOMException]", errorTag2 = "[object Error]", funcTag2 = "[object Function]", genTag2 = "[object GeneratorFunction]", mapTag2 = "[object Map]", numberTag2 = "[object Number]", nullTag2 = "[object Null]", objectTag2 = "[object Object]", promiseTag = "[object Promise]", proxyTag2 = "[object Proxy]", regexpTag2 = "[object RegExp]", setTag2 = "[object Set]", stringTag2 = "[object String]", symbolTag2 = "[object Symbol]", undefinedTag2 = "[object Undefined]", weakMapTag2 = "[object WeakMap]", weakSetTag = "[object WeakSet]";
    var arrayBufferTag2 = "[object ArrayBuffer]", dataViewTag2 = "[object DataView]", float32Tag2 = "[object Float32Array]", float64Tag2 = "[object Float64Array]", int8Tag2 = "[object Int8Array]", int16Tag2 = "[object Int16Array]", int32Tag2 = "[object Int32Array]", uint8Tag2 = "[object Uint8Array]", uint8ClampedTag2 = "[object Uint8ClampedArray]", uint16Tag2 = "[object Uint16Array]", uint32Tag2 = "[object Uint32Array]";
    var reEmptyStringLeading2 = /\b__p \+= '';/g, reEmptyStringMiddle2 = /\b(__p \+=) '' \+/g, reEmptyStringTrailing2 = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml2 = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml2 = /[&<>"']/g, reHasEscapedHtml2 = RegExp(reEscapedHtml2.source), reHasUnescapedHtml2 = RegExp(reUnescapedHtml2.source);
    var reEscape2 = /<%-([\s\S]+?)%>/g, reEvaluate2 = /<%([\s\S]+?)%>/g, reInterpolate2 = /<%=([\s\S]+?)%>/g;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar2 = RegExp(reRegExpChar2.source);
    var reTrimStart2 = /^\s+/;
    var reWhitespace2 = /\s/;
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    var reAsciiWord2 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reForbiddenIdentifierChars2 = /[()=,{}\[\]\/\s]/;
    var reEscapeChar = /\\(\\)?/g;
    var reEsTemplate2 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags2 = /\w*$/;
    var reIsBadHex2 = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary2 = /^0b[01]+$/i;
    var reIsHostCtor2 = /^\[object .+?Constructor\]$/;
    var reIsOctal2 = /^0o[0-7]+$/i;
    var reIsUint2 = /^(?:0|[1-9]\d*)$/;
    var reLatin2 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var reNoMatch2 = /($^)/;
    var reUnescapedString2 = /['\n\r\u2028\u2029\\]/g;
    var rsAstralRange2 = "\\ud800-\\udfff", rsComboMarksRange2 = "\\u0300-\\u036f", reComboHalfMarksRange2 = "\\ufe20-\\ufe2f", rsComboSymbolsRange2 = "\\u20d0-\\u20ff", rsComboRange2 = rsComboMarksRange2 + reComboHalfMarksRange2 + rsComboSymbolsRange2, rsDingbatRange2 = "\\u2700-\\u27bf", rsLowerRange2 = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange2 = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange2 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange2 = "\\u2000-\\u206f", rsSpaceRange2 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange2 = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange2 = "\\ufe0e\\ufe0f", rsBreakRange2 = rsMathOpRange2 + rsNonCharRange2 + rsPunctuationRange2 + rsSpaceRange2;
    var rsApos2 = "['\u2019]", rsAstral2 = "[" + rsAstralRange2 + "]", rsBreak2 = "[" + rsBreakRange2 + "]", rsCombo2 = "[" + rsComboRange2 + "]", rsDigits2 = "\\d+", rsDingbat2 = "[" + rsDingbatRange2 + "]", rsLower2 = "[" + rsLowerRange2 + "]", rsMisc2 = "[^" + rsAstralRange2 + rsBreakRange2 + rsDigits2 + rsDingbatRange2 + rsLowerRange2 + rsUpperRange2 + "]", rsFitz2 = "\\ud83c[\\udffb-\\udfff]", rsModifier2 = "(?:" + rsCombo2 + "|" + rsFitz2 + ")", rsNonAstral2 = "[^" + rsAstralRange2 + "]", rsRegional2 = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair2 = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper2 = "[" + rsUpperRange2 + "]", rsZWJ2 = "\\u200d";
    var rsMiscLower2 = "(?:" + rsLower2 + "|" + rsMisc2 + ")", rsMiscUpper2 = "(?:" + rsUpper2 + "|" + rsMisc2 + ")", rsOptContrLower2 = "(?:" + rsApos2 + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper2 = "(?:" + rsApos2 + "(?:D|LL|M|RE|S|T|VE))?", reOptMod2 = rsModifier2 + "?", rsOptVar2 = "[" + rsVarRange2 + "]?", rsOptJoin2 = "(?:" + rsZWJ2 + "(?:" + [rsNonAstral2, rsRegional2, rsSurrPair2].join("|") + ")" + rsOptVar2 + reOptMod2 + ")*", rsOrdLower2 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper2 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq2 = rsOptVar2 + reOptMod2 + rsOptJoin2, rsEmoji2 = "(?:" + [rsDingbat2, rsRegional2, rsSurrPair2].join("|") + ")" + rsSeq2, rsSymbol2 = "(?:" + [rsNonAstral2 + rsCombo2 + "?", rsCombo2, rsRegional2, rsSurrPair2, rsAstral2].join("|") + ")";
    var reApos2 = RegExp(rsApos2, "g");
    var reComboMark2 = RegExp(rsCombo2, "g");
    var reUnicode2 = RegExp(rsFitz2 + "(?=" + rsFitz2 + ")|" + rsSymbol2 + rsSeq2, "g");
    var reUnicodeWord2 = RegExp([
      rsUpper2 + "?" + rsLower2 + "+" + rsOptContrLower2 + "(?=" + [rsBreak2, rsUpper2, "$"].join("|") + ")",
      rsMiscUpper2 + "+" + rsOptContrUpper2 + "(?=" + [rsBreak2, rsUpper2 + rsMiscLower2, "$"].join("|") + ")",
      rsUpper2 + "?" + rsMiscLower2 + "+" + rsOptContrLower2,
      rsUpper2 + "+" + rsOptContrUpper2,
      rsOrdUpper2,
      rsOrdLower2,
      rsDigits2,
      rsEmoji2
    ].join("|"), "g");
    var reHasUnicode2 = RegExp("[" + rsZWJ2 + rsAstralRange2 + rsComboRange2 + rsVarRange2 + "]");
    var reHasUnicodeWord2 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var contextProps = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ];
    var templateCounter = -1;
    var typedArrayTags2 = {};
    typedArrayTags2[float32Tag2] = typedArrayTags2[float64Tag2] = typedArrayTags2[int8Tag2] = typedArrayTags2[int16Tag2] = typedArrayTags2[int32Tag2] = typedArrayTags2[uint8Tag2] = typedArrayTags2[uint8ClampedTag2] = typedArrayTags2[uint16Tag2] = typedArrayTags2[uint32Tag2] = true;
    typedArrayTags2[argsTag2] = typedArrayTags2[arrayTag2] = typedArrayTags2[arrayBufferTag2] = typedArrayTags2[boolTag2] = typedArrayTags2[dataViewTag2] = typedArrayTags2[dateTag2] = typedArrayTags2[errorTag2] = typedArrayTags2[funcTag2] = typedArrayTags2[mapTag2] = typedArrayTags2[numberTag2] = typedArrayTags2[objectTag2] = typedArrayTags2[regexpTag2] = typedArrayTags2[setTag2] = typedArrayTags2[stringTag2] = typedArrayTags2[weakMapTag2] = false;
    var cloneableTags = {};
    cloneableTags[argsTag2] = cloneableTags[arrayTag2] = cloneableTags[arrayBufferTag2] = cloneableTags[dataViewTag2] = cloneableTags[boolTag2] = cloneableTags[dateTag2] = cloneableTags[float32Tag2] = cloneableTags[float64Tag2] = cloneableTags[int8Tag2] = cloneableTags[int16Tag2] = cloneableTags[int32Tag2] = cloneableTags[mapTag2] = cloneableTags[numberTag2] = cloneableTags[objectTag2] = cloneableTags[regexpTag2] = cloneableTags[setTag2] = cloneableTags[stringTag2] = cloneableTags[symbolTag2] = cloneableTags[uint8Tag2] = cloneableTags[uint8ClampedTag2] = cloneableTags[uint16Tag2] = cloneableTags[uint32Tag2] = true;
    cloneableTags[errorTag2] = cloneableTags[funcTag2] = cloneableTags[weakMapTag2] = false;
    var deburredLetters2 = {
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "s"
    };
    var htmlEscapes2 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    var htmlUnescapes2 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    };
    var stringEscapes2 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    };
    var freeParseFloat = parseFloat, freeParseInt2 = parseInt;
    var freeGlobal2 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    var freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
    var root2 = freeGlobal2 || freeSelf2 || Function("return this")();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal2.process;
    var nodeUtil2 = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsArrayBuffer = nodeUtil2 && nodeUtil2.isArrayBuffer, nodeIsDate = nodeUtil2 && nodeUtil2.isDate, nodeIsMap = nodeUtil2 && nodeUtil2.isMap, nodeIsRegExp2 = nodeUtil2 && nodeUtil2.isRegExp, nodeIsSet = nodeUtil2 && nodeUtil2.isSet, nodeIsTypedArray2 = nodeUtil2 && nodeUtil2.isTypedArray;
    function apply2(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function arrayAggregator(array, setter, iteratee, accumulator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        var value = array[index];
        setter(accumulator, value, iteratee(value), array);
      }
      return accumulator;
    }
    function arrayEach(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEachRight(array, iteratee) {
      var length = array == null ? 0 : array.length;
      while (length--) {
        if (iteratee(array[length], length, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEvery(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (!predicate(array[index], index, array)) {
          return false;
        }
      }
      return true;
    }
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf2(array, value, 0) > -1;
    }
    function arrayIncludesWith(array, value, comparator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    function arrayMap2(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset2 = array.length;
      while (++index < length) {
        array[offset2 + index] = values[index];
      }
      return array;
    }
    function arrayReduce2(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function arrayReduceRight(array, iteratee, accumulator, initAccum) {
      var length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[--length];
      }
      while (length--) {
        accumulator = iteratee(accumulator, array[length], length, array);
      }
      return accumulator;
    }
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    var asciiSize2 = baseProperty2("length");
    function asciiToArray2(string2) {
      return string2.split("");
    }
    function asciiWords2(string2) {
      return string2.match(reAsciiWord2) || [];
    }
    function baseFindKey(collection, predicate, eachFunc) {
      var result;
      eachFunc(collection, function(value, key, collection2) {
        if (predicate(value, key, collection2)) {
          result = key;
          return false;
        }
      });
      return result;
    }
    function baseFindIndex2(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    function baseIndexOf2(array, value, fromIndex) {
      return value === value ? strictIndexOf2(array, value, fromIndex) : baseFindIndex2(array, baseIsNaN2, fromIndex);
    }
    function baseIndexOfWith(array, value, fromIndex, comparator) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (comparator(array[index], value)) {
          return index;
        }
      }
      return -1;
    }
    function baseIsNaN2(value) {
      return value !== value;
    }
    function baseMean(array, iteratee) {
      var length = array == null ? 0 : array.length;
      return length ? baseSum(array, iteratee) / length : NAN2;
    }
    function baseProperty2(key) {
      return function(object) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function basePropertyOf2(object) {
      return function(key) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
      eachFunc(collection, function(value, index, collection2) {
        accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
      });
      return accumulator;
    }
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    function baseSum(array, iteratee) {
      var result, index = -1, length = array.length;
      while (++index < length) {
        var current = iteratee(array[index]);
        if (current !== undefined$1) {
          result = result === undefined$1 ? current : result + current;
        }
      }
      return result;
    }
    function baseTimes2(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseToPairs(object, props) {
      return arrayMap2(props, function(key) {
        return [key, object[key]];
      });
    }
    function baseTrim2(string2) {
      return string2 ? string2.slice(0, trimmedEndIndex2(string2) + 1).replace(reTrimStart2, "") : string2;
    }
    function baseUnary2(func) {
      return function(value) {
        return func(value);
      };
    }
    function baseValues2(object, props) {
      return arrayMap2(props, function(key) {
        return object[key];
      });
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function charsStartIndex2(strSymbols, chrSymbols) {
      var index = -1, length = strSymbols.length;
      while (++index < length && baseIndexOf2(chrSymbols, strSymbols[index], 0) > -1) {
      }
      return index;
    }
    function charsEndIndex2(strSymbols, chrSymbols) {
      var index = strSymbols.length;
      while (index-- && baseIndexOf2(chrSymbols, strSymbols[index], 0) > -1) {
      }
      return index;
    }
    function countHolders(array, placeholder) {
      var length = array.length, result = 0;
      while (length--) {
        if (array[length] === placeholder) {
          ++result;
        }
      }
      return result;
    }
    var deburrLetter2 = basePropertyOf2(deburredLetters2);
    var escapeHtmlChar2 = basePropertyOf2(htmlEscapes2);
    function escapeStringChar2(chr) {
      return "\\" + stringEscapes2[chr];
    }
    function getValue2(object, key) {
      return object == null ? undefined$1 : object[key];
    }
    function hasUnicode2(string2) {
      return reHasUnicode2.test(string2);
    }
    function hasUnicodeWord2(string2) {
      return reHasUnicodeWord2.test(string2);
    }
    function iteratorToArray(iterator) {
      var data, result = [];
      while (!(data = iterator.next()).done) {
        result.push(data.value);
      }
      return result;
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg2(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function replaceHolders(array, placeholder) {
      var index = -1, length = array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (value === placeholder || value === PLACEHOLDER) {
          array[index] = PLACEHOLDER;
          result[resIndex++] = index;
        }
      }
      return result;
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    function setToPairs(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = [value, value];
      });
      return result;
    }
    function strictIndexOf2(array, value, fromIndex) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function strictLastIndexOf(array, value, fromIndex) {
      var index = fromIndex + 1;
      while (index--) {
        if (array[index] === value) {
          return index;
        }
      }
      return index;
    }
    function stringSize2(string2) {
      return hasUnicode2(string2) ? unicodeSize2(string2) : asciiSize2(string2);
    }
    function stringToArray2(string2) {
      return hasUnicode2(string2) ? unicodeToArray2(string2) : asciiToArray2(string2);
    }
    function trimmedEndIndex2(string2) {
      var index = string2.length;
      while (index-- && reWhitespace2.test(string2.charAt(index))) {
      }
      return index;
    }
    var unescapeHtmlChar2 = basePropertyOf2(htmlUnescapes2);
    function unicodeSize2(string2) {
      var result = reUnicode2.lastIndex = 0;
      while (reUnicode2.test(string2)) {
        ++result;
      }
      return result;
    }
    function unicodeToArray2(string2) {
      return string2.match(reUnicode2) || [];
    }
    function unicodeWords2(string2) {
      return string2.match(reUnicodeWord2) || [];
    }
    var runInContext = function runInContext2(context) {
      context = context == null ? root2 : _.defaults(root2.Object(), context, _.pick(root2, contextProps));
      var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
      var arrayProto = Array2.prototype, funcProto2 = Function2.prototype, objectProto2 = Object2.prototype;
      var coreJsData2 = context["__core-js_shared__"];
      var funcToString2 = funcProto2.toString;
      var hasOwnProperty2 = objectProto2.hasOwnProperty;
      var idCounter = 0;
      var maskSrcKey2 = function() {
        var uid = /[^.]+$/.exec(coreJsData2 && coreJsData2.keys && coreJsData2.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var nativeObjectToString2 = objectProto2.toString;
      var objectCtorString2 = funcToString2.call(Object2);
      var oldDash = root2._;
      var reIsNative2 = RegExp2("^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      var Buffer2 = moduleExports ? context.Buffer : undefined$1, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined$1, getPrototype2 = overArg2(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable2 = objectProto2.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined$1, symIterator = Symbol2 ? Symbol2.iterator : undefined$1, symToStringTag2 = Symbol2 ? Symbol2.toStringTag : undefined$1;
      var defineProperty2 = function() {
        try {
          var func = getNative2(Object2, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      var ctxClearTimeout = context.clearTimeout !== root2.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root2.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root2.setTimeout && context.setTimeout;
      var nativeCeil2 = Math2.ceil, nativeFloor2 = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys2 = overArg2(Object2.keys, Object2), nativeMax2 = Math2.max, nativeMin = Math2.min, nativeNow2 = Date2.now, nativeParseInt2 = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
      var DataView = getNative2(context, "DataView"), Map2 = getNative2(context, "Map"), Promise2 = getNative2(context, "Promise"), Set2 = getNative2(context, "Set"), WeakMap = getNative2(context, "WeakMap"), nativeCreate = getNative2(Object2, "create");
      var metaMap = WeakMap && new WeakMap();
      var realNames = {};
      var dataViewCtorString = toSource2(DataView), mapCtorString = toSource2(Map2), promiseCtorString = toSource2(Promise2), setCtorString = toSource2(Set2), weakMapCtorString = toSource2(WeakMap);
      var symbolProto2 = Symbol2 ? Symbol2.prototype : undefined$1, symbolValueOf = symbolProto2 ? symbolProto2.valueOf : undefined$1, symbolToString2 = symbolProto2 ? symbolProto2.toString : undefined$1;
      function lodash2(value) {
        if (isObjectLike2(value) && !isArray2(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty2.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject2(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result2 = new object();
          object.prototype = undefined$1;
          return result2;
        };
      }();
      function baseLodash() {
      }
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = undefined$1;
      }
      lodash2.templateSettings = {
        "escape": reEscape2,
        "evaluate": reEvaluate2,
        "interpolate": reInterpolate2,
        "variable": "",
        "imports": {
          "_": lodash2
        }
      };
      lodash2.prototype = baseLodash.prototype;
      lodash2.prototype.constructor = lodash2;
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH2;
        this.__views__ = [];
      }
      function lazyClone() {
        var result2 = new LazyWrapper(this.__wrapped__);
        result2.__actions__ = copyArray(this.__actions__);
        result2.__dir__ = this.__dir__;
        result2.__filtered__ = this.__filtered__;
        result2.__iteratees__ = copyArray(this.__iteratees__);
        result2.__takeCount__ = this.__takeCount__;
        result2.__views__ = copyArray(this.__views__);
        return result2;
      }
      function lazyReverse() {
        if (this.__filtered__) {
          var result2 = new LazyWrapper(this);
          result2.__dir__ = -1;
          result2.__filtered__ = true;
        } else {
          result2 = this.clone();
          result2.__dir__ *= -1;
        }
        return result2;
      }
      function lazyValue() {
        var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray2(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start2 = view.start, end2 = view.end, length = end2 - start2, index = isRight ? end2 : start2 - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
        if (!isArr || !isRight && arrLength == length && takeCount == length) {
          return baseWrapperValue(array, this.__actions__);
        }
        var result2 = [];
        outer:
          while (length-- && resIndex < takeCount) {
            index += dir;
            var iterIndex = -1, value = array[index];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed2 = iteratee2(value);
              if (type == LAZY_MAP_FLAG) {
                value = computed2;
              } else if (!computed2) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result2[resIndex++] = value;
          }
        return result2;
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result2 = this.has(key) && delete this.__data__[key];
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result2 = data[key];
          return result2 === HASH_UNDEFINED ? undefined$1 : result2;
        }
        return hasOwnProperty2.call(data, key) ? data[key] : undefined$1;
      }
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== undefined$1 : hasOwnProperty2.call(data, key);
      }
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === undefined$1 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? undefined$1 : data[index][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key) {
        var result2 = getMapData(this, key)["delete"](key);
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size2 = data.size;
        data.set(key, value);
        this.size += data.size == size2 ? 0 : 1;
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function SetCache(values2) {
        var index = -1, length = values2 == null ? 0 : values2.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values2[index]);
        }
      }
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      function stackDelete(key) {
        var data = this.__data__, result2 = data["delete"](key);
        this.size = data.size;
        return result2;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys2(value, inherited) {
        var isArr = isArray2(value), isArg = !isArr && isArguments2(value), isBuff = !isArr && !isArg && isBuffer2(value), isType = !isArr && !isArg && !isBuff && isTypedArray2(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes2(value.length, String2) : [], length = result2.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex2(key, length)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function arraySample(array) {
        var length = array.length;
        return length ? array[baseRandom(0, length - 1)] : undefined$1;
      }
      function arraySampleSize(array, n) {
        return shuffleSelf(copyArray(array), baseClamp2(n, 0, array.length));
      }
      function arrayShuffle(array) {
        return shuffleSelf(copyArray(array));
      }
      function assignMergeValue(object, key, value) {
        if (value !== undefined$1 && !eq2(object[key], value) || value === undefined$1 && !(key in object)) {
          baseAssignValue2(object, key, value);
        }
      }
      function assignValue2(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty2.call(object, key) && eq2(objValue, value)) || value === undefined$1 && !(key in object)) {
          baseAssignValue2(object, key, value);
        }
      }
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq2(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseAggregator(collection, setter, iteratee2, accumulator) {
        baseEach(collection, function(value, key, collection2) {
          setter(accumulator, value, iteratee2(value), collection2);
        });
        return accumulator;
      }
      function baseAssign(object, source2) {
        return object && copyObject2(source2, keys2(source2), object);
      }
      function baseAssignIn(object, source2) {
        return object && copyObject2(source2, keysIn2(source2), object);
      }
      function baseAssignValue2(object, key, value) {
        if (key == "__proto__" && defineProperty2) {
          defineProperty2(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      function baseAt(object, paths) {
        var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
        while (++index < length) {
          result2[index] = skip ? undefined$1 : get(object, paths[index]);
        }
        return result2;
      }
      function baseClamp2(number, lower, upper) {
        if (number === number) {
          if (upper !== undefined$1) {
            number = number <= upper ? number : upper;
          }
          if (lower !== undefined$1) {
            number = number >= lower ? number : lower;
          }
        }
        return number;
      }
      function baseClone(value, bitmask, customizer, key, object, stack) {
        var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
        if (customizer) {
          result2 = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result2 !== undefined$1) {
          return result2;
        }
        if (!isObject2(value)) {
          return value;
        }
        var isArr = isArray2(value);
        if (isArr) {
          result2 = initCloneArray(value);
          if (!isDeep) {
            return copyArray(value, result2);
          }
        } else {
          var tag = getTag(value), isFunc = tag == funcTag2 || tag == genTag2;
          if (isBuffer2(value)) {
            return cloneBuffer(value, isDeep);
          }
          if (tag == objectTag2 || tag == argsTag2 || isFunc && !object) {
            result2 = isFlat || isFunc ? {} : initCloneObject(value);
            if (!isDeep) {
              return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result2 = initCloneByTag(value, tag, isDeep);
          }
        }
        stack || (stack = new Stack());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result2);
        if (isSet(value)) {
          value.forEach(function(subValue) {
            result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap(value)) {
          value.forEach(function(subValue, key2) {
            result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn2 : keys2;
        var props = isArr ? undefined$1 : keysFunc(value);
        arrayEach(props || value, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue2(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
        return result2;
      }
      function baseConforms(source2) {
        var props = keys2(source2);
        return function(object) {
          return baseConformsTo(object, source2, props);
        };
      }
      function baseConformsTo(object, source2, props) {
        var length = props.length;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (length--) {
          var key = props[length], predicate = source2[key], value = object[key];
          if (value === undefined$1 && !(key in object) || !predicate(value)) {
            return false;
          }
        }
        return true;
      }
      function baseDelay(func, wait, args) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return setTimeout2(function() {
          func.apply(undefined$1, args);
        }, wait);
      }
      function baseDifference(array, values2, iteratee2, comparator) {
        var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
        if (!length) {
          return result2;
        }
        if (iteratee2) {
          values2 = arrayMap2(values2, baseUnary2(iteratee2));
        }
        if (comparator) {
          includes2 = arrayIncludesWith;
          isCommon = false;
        } else if (values2.length >= LARGE_ARRAY_SIZE) {
          includes2 = cacheHas;
          isCommon = false;
          values2 = new SetCache(values2);
        }
        outer:
          while (++index < length) {
            var value = array[index], computed2 = iteratee2 == null ? value : iteratee2(value);
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed2 === computed2) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values2[valuesIndex] === computed2) {
                  continue outer;
                }
              }
              result2.push(value);
            } else if (!includes2(values2, computed2, comparator)) {
              result2.push(value);
            }
          }
        return result2;
      }
      var baseEach = createBaseEach(baseForOwn);
      var baseEachRight = createBaseEach(baseForOwnRight, true);
      function baseEvery(collection, predicate) {
        var result2 = true;
        baseEach(collection, function(value, index, collection2) {
          result2 = !!predicate(value, index, collection2);
          return result2;
        });
        return result2;
      }
      function baseExtremum(array, iteratee2, comparator) {
        var index = -1, length = array.length;
        while (++index < length) {
          var value = array[index], current = iteratee2(value);
          if (current != null && (computed2 === undefined$1 ? current === current && !isSymbol2(current) : comparator(current, computed2))) {
            var computed2 = current, result2 = value;
          }
        }
        return result2;
      }
      function baseFill(array, value, start2, end2) {
        var length = array.length;
        start2 = toInteger2(start2);
        if (start2 < 0) {
          start2 = -start2 > length ? 0 : length + start2;
        }
        end2 = end2 === undefined$1 || end2 > length ? length : toInteger2(end2);
        if (end2 < 0) {
          end2 += length;
        }
        end2 = start2 > end2 ? 0 : toLength(end2);
        while (start2 < end2) {
          array[start2++] = value;
        }
        return array;
      }
      function baseFilter(collection, predicate) {
        var result2 = [];
        baseEach(collection, function(value, index, collection2) {
          if (predicate(value, index, collection2)) {
            result2.push(value);
          }
        });
        return result2;
      }
      function baseFlatten(array, depth, predicate, isStrict, result2) {
        var index = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result2 || (result2 = []);
        while (++index < length) {
          var value = array[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result2);
            } else {
              arrayPush(result2, value);
            }
          } else if (!isStrict) {
            result2[result2.length] = value;
          }
        }
        return result2;
      }
      var baseFor = createBaseFor();
      var baseForRight = createBaseFor(true);
      function baseForOwn(object, iteratee2) {
        return object && baseFor(object, iteratee2, keys2);
      }
      function baseForOwnRight(object, iteratee2) {
        return object && baseForRight(object, iteratee2, keys2);
      }
      function baseFunctions(object, props) {
        return arrayFilter(props, function(key) {
          return isFunction2(object[key]);
        });
      }
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : undefined$1;
      }
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result2 = keysFunc(object);
        return isArray2(object) ? result2 : arrayPush(result2, symbolsFunc(object));
      }
      function baseGetTag2(value) {
        if (value == null) {
          return value === undefined$1 ? undefinedTag2 : nullTag2;
        }
        return symToStringTag2 && symToStringTag2 in Object2(value) ? getRawTag2(value) : objectToString2(value);
      }
      function baseGt(value, other) {
        return value > other;
      }
      function baseHas(object, key) {
        return object != null && hasOwnProperty2.call(object, key);
      }
      function baseHasIn(object, key) {
        return object != null && key in Object2(object);
      }
      function baseInRange(number, start2, end2) {
        return number >= nativeMin(start2, end2) && number < nativeMax2(start2, end2);
      }
      function baseIntersection(arrays, iteratee2, comparator) {
        var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
        while (othIndex--) {
          var array = arrays[othIndex];
          if (othIndex && iteratee2) {
            array = arrayMap2(array, baseUnary2(iteratee2));
          }
          maxLength = nativeMin(array.length, maxLength);
          caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined$1;
        }
        array = arrays[0];
        var index = -1, seen = caches[0];
        outer:
          while (++index < length && result2.length < maxLength) {
            var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (!(seen ? cacheHas(seen, computed2) : includes2(result2, computed2, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if (!(cache ? cacheHas(cache, computed2) : includes2(arrays[othIndex], computed2, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed2);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseInverter(object, setter, iteratee2, accumulator) {
        baseForOwn(object, function(value, key, object2) {
          setter(accumulator, iteratee2(value), key, object2);
        });
        return accumulator;
      }
      function baseInvoke(object, path, args) {
        path = castPath(path, object);
        object = parent(object, path);
        var func = object == null ? object : object[toKey(last(path))];
        return func == null ? undefined$1 : apply2(func, object, args);
      }
      function baseIsArguments2(value) {
        return isObjectLike2(value) && baseGetTag2(value) == argsTag2;
      }
      function baseIsArrayBuffer(value) {
        return isObjectLike2(value) && baseGetTag2(value) == arrayBufferTag2;
      }
      function baseIsDate(value) {
        return isObjectLike2(value) && baseGetTag2(value) == dateTag2;
      }
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike2(value) && !isObjectLike2(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag2 : getTag(object), othTag = othIsArr ? arrayTag2 : getTag(other);
        objTag = objTag == argsTag2 ? objectTag2 : objTag;
        othTag = othTag == argsTag2 ? objectTag2 : othTag;
        var objIsObj = objTag == objectTag2, othIsObj = othTag == objectTag2, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer2(object)) {
          if (!isBuffer2(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray2(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty2.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty2.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsMap(value) {
        return isObjectLike2(value) && getTag(value) == mapTag2;
      }
      function baseIsMatch(object, source2, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === undefined$1 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result2 = customizer(objValue, srcValue, key, object, source2, stack);
            }
            if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
              return false;
            }
          }
        }
        return true;
      }
      function baseIsNative2(value) {
        if (!isObject2(value) || isMasked2(value)) {
          return false;
        }
        var pattern = isFunction2(value) ? reIsNative2 : reIsHostCtor2;
        return pattern.test(toSource2(value));
      }
      function baseIsRegExp2(value) {
        return isObjectLike2(value) && baseGetTag2(value) == regexpTag2;
      }
      function baseIsSet(value) {
        return isObjectLike2(value) && getTag(value) == setTag2;
      }
      function baseIsTypedArray2(value) {
        return isObjectLike2(value) && isLength2(value.length) && !!typedArrayTags2[baseGetTag2(value)];
      }
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity2;
        }
        if (typeof value == "object") {
          return isArray2(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      function baseKeys2(object) {
        if (!isPrototype2(object)) {
          return nativeKeys2(object);
        }
        var result2 = [];
        for (var key in Object2(object)) {
          if (hasOwnProperty2.call(object, key) && key != "constructor") {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseKeysIn2(object) {
        if (!isObject2(object)) {
          return nativeKeysIn2(object);
        }
        var isProto = isPrototype2(object), result2 = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseLt(value, other) {
        return value < other;
      }
      function baseMap(collection, iteratee2) {
        var index = -1, result2 = isArrayLike2(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value, key, collection2) {
          result2[++index] = iteratee2(value, key, collection2);
        });
        return result2;
      }
      function baseMatches(source2) {
        var matchData = getMatchData(source2);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source2 || baseIsMatch(object, source2, matchData);
        };
      }
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get(object, path);
          return objValue === undefined$1 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      function baseMerge(object, source2, srcIndex, customizer, stack) {
        if (object === source2) {
          return;
        }
        baseFor(source2, function(srcValue, key) {
          stack || (stack = new Stack());
          if (isObject2(srcValue)) {
            baseMergeDeep(object, source2, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source2, stack) : undefined$1;
            if (newValue === undefined$1) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn2);
      }
      function baseMergeDeep(object, source2, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key), srcValue = safeGet(source2, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source2, stack) : undefined$1;
        var isCommon = newValue === undefined$1;
        if (isCommon) {
          var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer2(srcValue), isTyped = !isArr && !isBuff && isTypedArray2(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray2(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject2(srcValue) || isArguments2(srcValue)) {
            newValue = objValue;
            if (isArguments2(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject2(objValue) || isFunction2(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      function baseNth(array, n) {
        var length = array.length;
        if (!length) {
          return;
        }
        n += n < 0 ? length : 0;
        return isIndex2(n, length) ? array[n] : undefined$1;
      }
      function baseOrderBy(collection, iteratees, orders) {
        if (iteratees.length) {
          iteratees = arrayMap2(iteratees, function(iteratee2) {
            if (isArray2(iteratee2)) {
              return function(value) {
                return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
              };
            }
            return iteratee2;
          });
        } else {
          iteratees = [identity2];
        }
        var index = -1;
        iteratees = arrayMap2(iteratees, baseUnary2(getIteratee()));
        var result2 = baseMap(collection, function(value, key, collection2) {
          var criteria = arrayMap2(iteratees, function(iteratee2) {
            return iteratee2(value);
          });
          return { "criteria": criteria, "index": ++index, "value": value };
        });
        return baseSortBy(result2, function(object, other) {
          return compareMultiple(object, other, orders);
        });
      }
      function basePick(object, paths) {
        return basePickBy(object, paths, function(value, path) {
          return hasIn(object, path);
        });
      }
      function basePickBy(object, paths, predicate) {
        var index = -1, length = paths.length, result2 = {};
        while (++index < length) {
          var path = paths[index], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result2, castPath(path, object), value);
          }
        }
        return result2;
      }
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      function basePullAll(array, values2, iteratee2, comparator) {
        var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf2, index = -1, length = values2.length, seen = array;
        if (array === values2) {
          values2 = copyArray(values2);
        }
        if (iteratee2) {
          seen = arrayMap2(array, baseUnary2(iteratee2));
        }
        while (++index < length) {
          var fromIndex = 0, value = values2[index], computed2 = iteratee2 ? iteratee2(value) : value;
          while ((fromIndex = indexOf2(seen, computed2, fromIndex, comparator)) > -1) {
            if (seen !== array) {
              splice.call(seen, fromIndex, 1);
            }
            splice.call(array, fromIndex, 1);
          }
        }
        return array;
      }
      function basePullAt(array, indexes) {
        var length = array ? indexes.length : 0, lastIndex = length - 1;
        while (length--) {
          var index = indexes[length];
          if (length == lastIndex || index !== previous) {
            var previous = index;
            if (isIndex2(index)) {
              splice.call(array, index, 1);
            } else {
              baseUnset(array, index);
            }
          }
        }
        return array;
      }
      function baseRandom(lower, upper) {
        return lower + nativeFloor2(nativeRandom() * (upper - lower + 1));
      }
      function baseRange(start2, end2, step, fromRight) {
        var index = -1, length = nativeMax2(nativeCeil2((end2 - start2) / (step || 1)), 0), result2 = Array2(length);
        while (length--) {
          result2[fromRight ? length : ++index] = start2;
          start2 += step;
        }
        return result2;
      }
      function baseRepeat2(string2, n) {
        var result2 = "";
        if (!string2 || n < 1 || n > MAX_SAFE_INTEGER2) {
          return result2;
        }
        do {
          if (n % 2) {
            result2 += string2;
          }
          n = nativeFloor2(n / 2);
          if (n) {
            string2 += string2;
          }
        } while (n);
        return result2;
      }
      function baseRest2(func, start2) {
        return setToString2(overRest2(func, start2, identity2), func + "");
      }
      function baseSample(collection) {
        return arraySample(values(collection));
      }
      function baseSampleSize(collection, n) {
        var array = values(collection);
        return shuffleSelf(array, baseClamp2(n, 0, array.length));
      }
      function baseSet(object, path, value, customizer) {
        if (!isObject2(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
            if (newValue === undefined$1) {
              newValue = isObject2(objValue) ? objValue : isIndex2(path[index + 1]) ? [] : {};
            }
          }
          assignValue2(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      var baseSetData = !metaMap ? identity2 : function(func, data) {
        metaMap.set(func, data);
        return func;
      };
      var baseSetToString2 = !defineProperty2 ? identity2 : function(func, string2) {
        return defineProperty2(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant2(string2),
          "writable": true
        });
      };
      function baseShuffle(collection) {
        return shuffleSelf(values(collection));
      }
      function baseSlice2(array, start2, end2) {
        var index = -1, length = array.length;
        if (start2 < 0) {
          start2 = -start2 > length ? 0 : length + start2;
        }
        end2 = end2 > length ? length : end2;
        if (end2 < 0) {
          end2 += length;
        }
        length = start2 > end2 ? 0 : end2 - start2 >>> 0;
        start2 >>>= 0;
        var result2 = Array2(length);
        while (++index < length) {
          result2[index] = array[index + start2];
        }
        return result2;
      }
      function baseSome(collection, predicate) {
        var result2;
        baseEach(collection, function(value, index, collection2) {
          result2 = predicate(value, index, collection2);
          return !result2;
        });
        return !!result2;
      }
      function baseSortedIndex(array, value, retHighest) {
        var low = 0, high = array == null ? low : array.length;
        if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
          while (low < high) {
            var mid = low + high >>> 1, computed2 = array[mid];
            if (computed2 !== null && !isSymbol2(computed2) && (retHighest ? computed2 <= value : computed2 < value)) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return high;
        }
        return baseSortedIndexBy(array, value, identity2, retHighest);
      }
      function baseSortedIndexBy(array, value, iteratee2, retHighest) {
        var low = 0, high = array == null ? 0 : array.length;
        if (high === 0) {
          return 0;
        }
        value = iteratee2(value);
        var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol2(value), valIsUndefined = value === undefined$1;
        while (low < high) {
          var mid = nativeFloor2((low + high) / 2), computed2 = iteratee2(array[mid]), othIsDefined = computed2 !== undefined$1, othIsNull = computed2 === null, othIsReflexive = computed2 === computed2, othIsSymbol = isSymbol2(computed2);
          if (valIsNaN) {
            var setLow = retHighest || othIsReflexive;
          } else if (valIsUndefined) {
            setLow = othIsReflexive && (retHighest || othIsDefined);
          } else if (valIsNull) {
            setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
          } else if (valIsSymbol) {
            setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
          } else if (othIsNull || othIsSymbol) {
            setLow = false;
          } else {
            setLow = retHighest ? computed2 <= value : computed2 < value;
          }
          if (setLow) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return nativeMin(high, MAX_ARRAY_INDEX);
      }
      function baseSortedUniq(array, iteratee2) {
        var index = -1, length = array.length, resIndex = 0, result2 = [];
        while (++index < length) {
          var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
          if (!index || !eq2(computed2, seen)) {
            var seen = computed2;
            result2[resIndex++] = value === 0 ? 0 : value;
          }
        }
        return result2;
      }
      function baseToNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol2(value)) {
          return NAN2;
        }
        return +value;
      }
      function baseToString2(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray2(value)) {
          return arrayMap2(value, baseToString2) + "";
        }
        if (isSymbol2(value)) {
          return symbolToString2 ? symbolToString2.call(value) : "";
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY2 ? "-0" : result2;
      }
      function baseUniq(array, iteratee2, comparator) {
        var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
        if (comparator) {
          isCommon = false;
          includes2 = arrayIncludesWith;
        } else if (length >= LARGE_ARRAY_SIZE) {
          var set2 = iteratee2 ? null : createSet(array);
          if (set2) {
            return setToArray(set2);
          }
          isCommon = false;
          includes2 = cacheHas;
          seen = new SetCache();
        } else {
          seen = iteratee2 ? [] : result2;
        }
        outer:
          while (++index < length) {
            var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed2 === computed2) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed2) {
                  continue outer;
                }
              }
              if (iteratee2) {
                seen.push(computed2);
              }
              result2.push(value);
            } else if (!includes2(seen, computed2, comparator)) {
              if (seen !== result2) {
                seen.push(computed2);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseUnset(object, path) {
        path = castPath(path, object);
        object = parent(object, path);
        return object == null || delete object[toKey(last(path))];
      }
      function baseUpdate(object, path, updater, customizer) {
        return baseSet(object, path, updater(baseGet(object, path)), customizer);
      }
      function baseWhile(array, predicate, isDrop, fromRight) {
        var length = array.length, index = fromRight ? length : -1;
        while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
        }
        return isDrop ? baseSlice2(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice2(array, fromRight ? index + 1 : 0, fromRight ? length : index);
      }
      function baseWrapperValue(value, actions) {
        var result2 = value;
        if (result2 instanceof LazyWrapper) {
          result2 = result2.value();
        }
        return arrayReduce2(actions, function(result3, action) {
          return action.func.apply(action.thisArg, arrayPush([result3], action.args));
        }, result2);
      }
      function baseXor(arrays, iteratee2, comparator) {
        var length = arrays.length;
        if (length < 2) {
          return length ? baseUniq(arrays[0]) : [];
        }
        var index = -1, result2 = Array2(length);
        while (++index < length) {
          var array = arrays[index], othIndex = -1;
          while (++othIndex < length) {
            if (othIndex != index) {
              result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
            }
          }
        }
        return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
      }
      function baseZipObject(props, values2, assignFunc) {
        var index = -1, length = props.length, valsLength = values2.length, result2 = {};
        while (++index < length) {
          var value = index < valsLength ? values2[index] : undefined$1;
          assignFunc(result2, props[index], value);
        }
        return result2;
      }
      function castArrayLikeObject(value) {
        return isArrayLikeObject(value) ? value : [];
      }
      function castFunction(value) {
        return typeof value == "function" ? value : identity2;
      }
      function castPath(value, object) {
        if (isArray2(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString2(value));
      }
      var castRest = baseRest2;
      function castSlice2(array, start2, end2) {
        var length = array.length;
        end2 = end2 === undefined$1 ? length : end2;
        return !start2 && end2 >= length ? array : baseSlice2(array, start2, end2);
      }
      var clearTimeout2 = ctxClearTimeout || function(id) {
        return root2.clearTimeout(id);
      };
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result2);
        return result2;
      }
      function cloneArrayBuffer(arrayBuffer) {
        var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
        return result2;
      }
      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      function cloneRegExp(regexp) {
        var result2 = new regexp.constructor(regexp.source, reFlags2.exec(regexp));
        result2.lastIndex = regexp.lastIndex;
        return result2;
      }
      function cloneSymbol(symbol) {
        return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      function compareAscending(value, other) {
        if (value !== other) {
          var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol2(value);
          var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol2(other);
          if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
            return 1;
          }
          if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
            return -1;
          }
        }
        return 0;
      }
      function compareMultiple(object, other, orders) {
        var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
        while (++index < length) {
          var result2 = compareAscending(objCriteria[index], othCriteria[index]);
          if (result2) {
            if (index >= ordersLength) {
              return result2;
            }
            var order2 = orders[index];
            return result2 * (order2 == "desc" ? -1 : 1);
          }
        }
        return object.index - other.index;
      }
      function composeArgs(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax2(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
        while (++leftIndex < leftLength) {
          result2[leftIndex] = partials[leftIndex];
        }
        while (++argsIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[holders[argsIndex]] = args[argsIndex];
          }
        }
        while (rangeLength--) {
          result2[leftIndex++] = args[argsIndex++];
        }
        return result2;
      }
      function composeArgsRight(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax2(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
        while (++argsIndex < rangeLength) {
          result2[argsIndex] = args[argsIndex];
        }
        var offset2 = argsIndex;
        while (++rightIndex < rightLength) {
          result2[offset2 + rightIndex] = partials[rightIndex];
        }
        while (++holdersIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[offset2 + holders[holdersIndex]] = args[argsIndex++];
          }
        }
        return result2;
      }
      function copyArray(source2, array) {
        var index = -1, length = source2.length;
        array || (array = Array2(length));
        while (++index < length) {
          array[index] = source2[index];
        }
        return array;
      }
      function copyObject2(source2, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1, length = props.length;
        while (++index < length) {
          var key = props[index];
          var newValue = customizer ? customizer(object[key], source2[key], key, object, source2) : undefined$1;
          if (newValue === undefined$1) {
            newValue = source2[key];
          }
          if (isNew) {
            baseAssignValue2(object, key, newValue);
          } else {
            assignValue2(object, key, newValue);
          }
        }
        return object;
      }
      function copySymbols(source2, object) {
        return copyObject2(source2, getSymbols(source2), object);
      }
      function copySymbolsIn(source2, object) {
        return copyObject2(source2, getSymbolsIn(source2), object);
      }
      function createAggregator(setter, initializer) {
        return function(collection, iteratee2) {
          var func = isArray2(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
          return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
        };
      }
      function createAssigner2(assigner) {
        return baseRest2(function(object, sources) {
          var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
          if (guard && isIterateeCall2(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined$1 : customizer;
            length = 1;
          }
          object = Object2(object);
          while (++index < length) {
            var source2 = sources[index];
            if (source2) {
              assigner(object, source2, index, customizer);
            }
          }
          return object;
        });
      }
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee2) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike2(collection)) {
            return eachFunc(collection, iteratee2);
          }
          var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
          while (fromRight ? index-- : ++index < length) {
            if (iteratee2(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      function createBaseFor(fromRight) {
        return function(object, iteratee2, keysFunc) {
          var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee2(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      function createBind(func, bitmask, thisArg) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var fn2 = this && this !== root2 && this instanceof wrapper ? Ctor : func;
          return fn2.apply(isBind ? thisArg : this, arguments);
        }
        return wrapper;
      }
      function createCaseFirst2(methodName) {
        return function(string2) {
          string2 = toString2(string2);
          var strSymbols = hasUnicode2(string2) ? stringToArray2(string2) : undefined$1;
          var chr = strSymbols ? strSymbols[0] : string2.charAt(0);
          var trailing = strSymbols ? castSlice2(strSymbols, 1).join("") : string2.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      function createCompounder2(callback) {
        return function(string2) {
          return arrayReduce2(words2(deburr2(string2).replace(reApos2, "")), callback, "");
        };
      }
      function createCtor(Ctor) {
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return new Ctor();
            case 1:
              return new Ctor(args[0]);
            case 2:
              return new Ctor(args[0], args[1]);
            case 3:
              return new Ctor(args[0], args[1], args[2]);
            case 4:
              return new Ctor(args[0], args[1], args[2], args[3]);
            case 5:
              return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
          }
          var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
          return isObject2(result2) ? result2 : thisBinding;
        };
      }
      function createCurry(func, bitmask, arity) {
        var Ctor = createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
          while (index--) {
            args[index] = arguments[index];
          }
          var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
          length -= holders.length;
          if (length < arity) {
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined$1, args, holders, undefined$1, undefined$1, arity - length);
          }
          var fn2 = this && this !== root2 && this instanceof wrapper ? Ctor : func;
          return apply2(fn2, this, args);
        }
        return wrapper;
      }
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object2(collection);
          if (!isArrayLike2(collection)) {
            var iteratee2 = getIteratee(predicate, 3);
            collection = keys2(collection);
            predicate = function(key) {
              return iteratee2(iterable[key], key, iterable);
            };
          }
          var index = findIndexFunc(collection, predicate, fromIndex);
          return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined$1;
        };
      }
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index--) {
            var func = funcs[index];
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index = wrapper ? index : length;
          while (++index < length) {
            func = funcs[index];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray2(value)) {
              return wrapper.plant(value).value();
            }
            var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
            while (++index2 < length) {
              result2 = funcs[index2].call(this, result2);
            }
            return result2;
          };
        });
      }
      function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
        var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index = length;
          while (index--) {
            args[index] = arguments[index];
          }
          if (isCurried) {
            var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
          }
          if (partials) {
            args = composeArgs(args, partials, holders, isCurried);
          }
          if (partialsRight) {
            args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
          }
          length -= holdersCount;
          if (isCurried && length < arity) {
            var newHolders = replaceHolders(args, placeholder);
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary2, arity - length);
          }
          var thisBinding = isBind ? thisArg : this, fn2 = isBindKey ? thisBinding[func] : func;
          length = args.length;
          if (argPos) {
            args = reorder(args, argPos);
          } else if (isFlip && length > 1) {
            args.reverse();
          }
          if (isAry && ary2 < length) {
            args.length = ary2;
          }
          if (this && this !== root2 && this instanceof wrapper) {
            fn2 = Ctor || createCtor(fn2);
          }
          return fn2.apply(thisBinding, args);
        }
        return wrapper;
      }
      function createInverter(setter, toIteratee) {
        return function(object, iteratee2) {
          return baseInverter(object, setter, toIteratee(iteratee2), {});
        };
      }
      function createMathOperation(operator, defaultValue) {
        return function(value, other) {
          var result2;
          if (value === undefined$1 && other === undefined$1) {
            return defaultValue;
          }
          if (value !== undefined$1) {
            result2 = value;
          }
          if (other !== undefined$1) {
            if (result2 === undefined$1) {
              return other;
            }
            if (typeof value == "string" || typeof other == "string") {
              value = baseToString2(value);
              other = baseToString2(other);
            } else {
              value = baseToNumber(value);
              other = baseToNumber(other);
            }
            result2 = operator(value, other);
          }
          return result2;
        };
      }
      function createOver(arrayFunc) {
        return flatRest(function(iteratees) {
          iteratees = arrayMap2(iteratees, baseUnary2(getIteratee()));
          return baseRest2(function(args) {
            var thisArg = this;
            return arrayFunc(iteratees, function(iteratee2) {
              return apply2(iteratee2, thisArg, args);
            });
          });
        });
      }
      function createPadding2(length, chars) {
        chars = chars === undefined$1 ? " " : baseToString2(chars);
        var charsLength = chars.length;
        if (charsLength < 2) {
          return charsLength ? baseRepeat2(chars, length) : chars;
        }
        var result2 = baseRepeat2(chars, nativeCeil2(length / stringSize2(chars)));
        return hasUnicode2(chars) ? castSlice2(stringToArray2(result2), 0, length).join("") : result2.slice(0, length);
      }
      function createPartial(func, bitmask, thisArg, partials) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn2 = this && this !== root2 && this instanceof wrapper ? Ctor : func;
          while (++leftIndex < leftLength) {
            args[leftIndex] = partials[leftIndex];
          }
          while (argsLength--) {
            args[leftIndex++] = arguments[++argsIndex];
          }
          return apply2(fn2, isBind ? thisArg : this, args);
        }
        return wrapper;
      }
      function createRange(fromRight) {
        return function(start2, end2, step) {
          if (step && typeof step != "number" && isIterateeCall2(start2, end2, step)) {
            end2 = step = undefined$1;
          }
          start2 = toFinite2(start2);
          if (end2 === undefined$1) {
            end2 = start2;
            start2 = 0;
          } else {
            end2 = toFinite2(end2);
          }
          step = step === undefined$1 ? start2 < end2 ? 1 : -1 : toFinite2(step);
          return baseRange(start2, end2, step, fromRight);
        };
      }
      function createRelationalOperation(operator) {
        return function(value, other) {
          if (!(typeof value == "string" && typeof other == "string")) {
            value = toNumber2(value);
            other = toNumber2(other);
          }
          return operator(value, other);
        };
      }
      function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
        var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
        bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
        bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
        if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
          bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
        }
        var newData = [
          func,
          bitmask,
          thisArg,
          newPartials,
          newHolders,
          newPartialsRight,
          newHoldersRight,
          argPos,
          ary2,
          arity
        ];
        var result2 = wrapFunc.apply(undefined$1, newData);
        if (isLaziable(func)) {
          setData(result2, newData);
        }
        result2.placeholder = placeholder;
        return setWrapToString(result2, func, bitmask);
      }
      function createRound(methodName) {
        var func = Math2[methodName];
        return function(number, precision) {
          number = toNumber2(number);
          precision = precision == null ? 0 : nativeMin(toInteger2(precision), 292);
          if (precision && nativeIsFinite(number)) {
            var pair = (toString2(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
            pair = (toString2(value) + "e").split("e");
            return +(pair[0] + "e" + (+pair[1] - precision));
          }
          return func(number);
        };
      }
      var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY2) ? noop : function(values2) {
        return new Set2(values2);
      };
      function createToPairs(keysFunc) {
        return function(object) {
          var tag = getTag(object);
          if (tag == mapTag2) {
            return mapToArray(object);
          }
          if (tag == setTag2) {
            return setToPairs(object);
          }
          return baseToPairs(object, keysFunc(object));
        };
      }
      function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
        var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
        if (!isBindKey && typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var length = partials ? partials.length : 0;
        if (!length) {
          bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
          partials = holders = undefined$1;
        }
        ary2 = ary2 === undefined$1 ? ary2 : nativeMax2(toInteger2(ary2), 0);
        arity = arity === undefined$1 ? arity : toInteger2(arity);
        length -= holders ? holders.length : 0;
        if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
          var partialsRight = partials, holdersRight = holders;
          partials = holders = undefined$1;
        }
        var data = isBindKey ? undefined$1 : getData(func);
        var newData = [
          func,
          bitmask,
          thisArg,
          partials,
          holders,
          partialsRight,
          holdersRight,
          argPos,
          ary2,
          arity
        ];
        if (data) {
          mergeData(newData, data);
        }
        func = newData[0];
        bitmask = newData[1];
        thisArg = newData[2];
        partials = newData[3];
        holders = newData[4];
        arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax2(newData[9] - length, 0);
        if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
          bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
        }
        if (!bitmask || bitmask == WRAP_BIND_FLAG) {
          var result2 = createBind(func, bitmask, thisArg);
        } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
          result2 = createCurry(func, bitmask, arity);
        } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
          result2 = createPartial(func, bitmask, thisArg, partials);
        } else {
          result2 = createHybrid.apply(undefined$1, newData);
        }
        var setter = data ? baseSetData : setData;
        return setWrapToString(setter(result2, newData), func, bitmask);
      }
      function customDefaultsAssignIn2(objValue, srcValue, key, object) {
        if (objValue === undefined$1 || eq2(objValue, objectProto2[key]) && !hasOwnProperty2.call(object, key)) {
          return srcValue;
        }
        return objValue;
      }
      function customDefaultsMerge(objValue, srcValue, key, object, source2, stack) {
        if (isObject2(objValue) && isObject2(srcValue)) {
          stack.set(srcValue, objValue);
          baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
          stack["delete"](srcValue);
        }
        return objValue;
      }
      function customOmitClone(value) {
        return isPlainObject2(value) ? undefined$1 : value;
      }
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== undefined$1) {
            if (compared) {
              continue;
            }
            result2 = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result2 = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result2 = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result2;
      }
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag2:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag2:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag2:
          case dateTag2:
          case numberTag2:
            return eq2(+object, +other);
          case errorTag2:
            return object.name == other.name && object.message == other.message;
          case regexpTag2:
          case stringTag2:
            return object == other + "";
          case mapTag2:
            var convert = mapToArray;
          case setTag2:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result2;
          case symbolTag2:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty2.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result2 = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result2 = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result2 && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result2 = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result2;
      }
      function flatRest(func) {
        return setToString2(overRest2(func, undefined$1, flatten), func + "");
      }
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys2, getSymbols);
      }
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn2, getSymbolsIn);
      }
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
      function getFuncName(func) {
        var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty2.call(realNames, result2) ? array.length : 0;
        while (length--) {
          var data = array[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result2;
      }
      function getHolder(func) {
        var object = hasOwnProperty2.call(lodash2, "placeholder") ? lodash2 : func;
        return object.placeholder;
      }
      function getIteratee() {
        var result2 = lodash2.iteratee || iteratee;
        result2 = result2 === iteratee ? baseIteratee : result2;
        return arguments.length ? result2(arguments[0], arguments[1]) : result2;
      }
      function getMapData(map2, key) {
        var data = map2.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getMatchData(object) {
        var result2 = keys2(object), length = result2.length;
        while (length--) {
          var key = result2[length], value = object[key];
          result2[length] = [key, value, isStrictComparable(value)];
        }
        return result2;
      }
      function getNative2(object, key) {
        var value = getValue2(object, key);
        return baseIsNative2(value) ? value : undefined$1;
      }
      function getRawTag2(value) {
        var isOwn = hasOwnProperty2.call(value, symToStringTag2), tag = value[symToStringTag2];
        try {
          value[symToStringTag2] = undefined$1;
          var unmasked = true;
        } catch (e) {
        }
        var result2 = nativeObjectToString2.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag2] = tag;
          } else {
            delete value[symToStringTag2];
          }
        }
        return result2;
      }
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object2(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable2.call(object, symbol);
        });
      };
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result2 = [];
        while (object) {
          arrayPush(result2, getSymbols(object));
          object = getPrototype2(object);
        }
        return result2;
      };
      var getTag = baseGetTag2;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag2 || Map2 && getTag(new Map2()) != mapTag2 || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag2 || WeakMap && getTag(new WeakMap()) != weakMapTag2) {
        getTag = function(value) {
          var result2 = baseGetTag2(value), Ctor = result2 == objectTag2 ? value.constructor : undefined$1, ctorString = Ctor ? toSource2(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag2;
              case mapCtorString:
                return mapTag2;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag2;
              case weakMapCtorString:
                return weakMapTag2;
            }
          }
          return result2;
        };
      }
      function getView(start2, end2, transforms) {
        var index = -1, length = transforms.length;
        while (++index < length) {
          var data = transforms[index], size2 = data.size;
          switch (data.type) {
            case "drop":
              start2 += size2;
              break;
            case "dropRight":
              end2 -= size2;
              break;
            case "take":
              end2 = nativeMin(end2, start2 + size2);
              break;
            case "takeRight":
              start2 = nativeMax2(start2, end2 - size2);
              break;
          }
        }
        return { "start": start2, "end": end2 };
      }
      function getWrapDetails(source2) {
        var match = source2.match(reWrapDetails);
        return match ? match[1].split(reSplitDetails) : [];
      }
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length = path.length, result2 = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result2 = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result2 || ++index != length) {
          return result2;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength2(length) && isIndex2(key, length) && (isArray2(object) || isArguments2(object));
      }
      function initCloneArray(array) {
        var length = array.length, result2 = new array.constructor(length);
        if (length && typeof array[0] == "string" && hasOwnProperty2.call(array, "index")) {
          result2.index = array.index;
          result2.input = array.input;
        }
        return result2;
      }
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype2(object) ? baseCreate(getPrototype2(object)) : {};
      }
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag2:
            return cloneArrayBuffer(object);
          case boolTag2:
          case dateTag2:
            return new Ctor(+object);
          case dataViewTag2:
            return cloneDataView(object, isDeep);
          case float32Tag2:
          case float64Tag2:
          case int8Tag2:
          case int16Tag2:
          case int32Tag2:
          case uint8Tag2:
          case uint8ClampedTag2:
          case uint16Tag2:
          case uint32Tag2:
            return cloneTypedArray(object, isDeep);
          case mapTag2:
            return new Ctor();
          case numberTag2:
          case stringTag2:
            return new Ctor(object);
          case regexpTag2:
            return cloneRegExp(object);
          case setTag2:
            return new Ctor();
          case symbolTag2:
            return cloneSymbol(object);
        }
      }
      function insertWrapDetails(source2, details) {
        var length = details.length;
        if (!length) {
          return source2;
        }
        var lastIndex = length - 1;
        details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
        details = details.join(length > 2 ? ", " : " ");
        return source2.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
      }
      function isFlattenable(value) {
        return isArray2(value) || isArguments2(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      function isIndex2(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER2 : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint2.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isIterateeCall2(value, index, object) {
        if (!isObject2(object)) {
          return false;
        }
        var type = typeof index;
        if (type == "number" ? isArrayLike2(object) && isIndex2(index, object.length) : type == "string" && index in object) {
          return eq2(object[index], value);
        }
        return false;
      }
      function isKey(value, object) {
        if (isArray2(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol2(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash2[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      function isMasked2(func) {
        return !!maskSrcKey2 && maskSrcKey2 in func;
      }
      var isMaskable = coreJsData2 ? isFunction2 : stubFalse2;
      function isPrototype2(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto2;
        return value === proto;
      }
      function isStrictComparable(value) {
        return value === value && !isObject2(value);
      }
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object));
        };
      }
      function memoizeCapped(func) {
        var result2 = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result2.cache;
        return result2;
      }
      function mergeData(data, source2) {
        var bitmask = data[1], srcBitmask = source2[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
        var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source2[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source2[7].length <= source2[8] && bitmask == WRAP_CURRY_FLAG;
        if (!(isCommon || isCombo)) {
          return data;
        }
        if (srcBitmask & WRAP_BIND_FLAG) {
          data[2] = source2[2];
          newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
        }
        var value = source2[3];
        if (value) {
          var partials = data[3];
          data[3] = partials ? composeArgs(partials, value, source2[4]) : value;
          data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source2[4];
        }
        value = source2[5];
        if (value) {
          partials = data[5];
          data[5] = partials ? composeArgsRight(partials, value, source2[6]) : value;
          data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source2[6];
        }
        value = source2[7];
        if (value) {
          data[7] = value;
        }
        if (srcBitmask & WRAP_ARY_FLAG) {
          data[8] = data[8] == null ? source2[8] : nativeMin(data[8], source2[8]);
        }
        if (data[9] == null) {
          data[9] = source2[9];
        }
        data[0] = source2[0];
        data[1] = newBitmask;
        return data;
      }
      function nativeKeysIn2(object) {
        var result2 = [];
        if (object != null) {
          for (var key in Object2(object)) {
            result2.push(key);
          }
        }
        return result2;
      }
      function objectToString2(value) {
        return nativeObjectToString2.call(value);
      }
      function overRest2(func, start2, transform2) {
        start2 = nativeMax2(start2 === undefined$1 ? func.length - 1 : start2, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax2(args.length - start2, 0), array = Array2(length);
          while (++index < length) {
            array[index] = args[start2 + index];
          }
          index = -1;
          var otherArgs = Array2(start2 + 1);
          while (++index < start2) {
            otherArgs[index] = args[index];
          }
          otherArgs[start2] = transform2(array);
          return apply2(func, this, otherArgs);
        };
      }
      function parent(object, path) {
        return path.length < 2 ? object : baseGet(object, baseSlice2(path, 0, -1));
      }
      function reorder(array, indexes) {
        var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
        while (length--) {
          var index = indexes[length];
          array[length] = isIndex2(index, arrLength) ? oldArray[index] : undefined$1;
        }
        return array;
      }
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object[key];
      }
      var setData = shortOut2(baseSetData);
      var setTimeout2 = ctxSetTimeout || function(func, wait) {
        return root2.setTimeout(func, wait);
      };
      var setToString2 = shortOut2(baseSetToString2);
      function setWrapToString(wrapper, reference2, bitmask) {
        var source2 = reference2 + "";
        return setToString2(wrapper, insertWrapDetails(source2, updateWrapDetails(getWrapDetails(source2), bitmask)));
      }
      function shortOut2(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow2(), remaining = HOT_SPAN2 - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT2) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined$1, arguments);
        };
      }
      function shuffleSelf(array, size2) {
        var index = -1, length = array.length, lastIndex = length - 1;
        size2 = size2 === undefined$1 ? length : size2;
        while (++index < size2) {
          var rand = baseRandom(index, lastIndex), value = array[rand];
          array[rand] = array[index];
          array[index] = value;
        }
        array.length = size2;
        return array;
      }
      var stringToPath = memoizeCapped(function(string2) {
        var result2 = [];
        if (string2.charCodeAt(0) === 46) {
          result2.push("");
        }
        string2.replace(rePropName, function(match, number, quote, subString) {
          result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result2;
      });
      function toKey(value) {
        if (typeof value == "string" || isSymbol2(value)) {
          return value;
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY2 ? "-0" : result2;
      }
      function toSource2(func) {
        if (func != null) {
          try {
            return funcToString2.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function updateWrapDetails(details, bitmask) {
        arrayEach(wrapFlags, function(pair) {
          var value = "_." + pair[0];
          if (bitmask & pair[1] && !arrayIncludes(details, value)) {
            details.push(value);
          }
        });
        return details.sort();
      }
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result2.__actions__ = copyArray(wrapper.__actions__);
        result2.__index__ = wrapper.__index__;
        result2.__values__ = wrapper.__values__;
        return result2;
      }
      function chunk(array, size2, guard) {
        if (guard ? isIterateeCall2(array, size2, guard) : size2 === undefined$1) {
          size2 = 1;
        } else {
          size2 = nativeMax2(toInteger2(size2), 0);
        }
        var length = array == null ? 0 : array.length;
        if (!length || size2 < 1) {
          return [];
        }
        var index = 0, resIndex = 0, result2 = Array2(nativeCeil2(length / size2));
        while (index < length) {
          result2[resIndex++] = baseSlice2(array, index, index += size2);
        }
        return result2;
      }
      function compact(array) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
        while (++index < length) {
          var value = array[index];
          if (value) {
            result2[resIndex++] = value;
          }
        }
        return result2;
      }
      function concat2() {
        var length = arguments.length;
        if (!length) {
          return [];
        }
        var args = Array2(length - 1), array = arguments[0], index = length;
        while (index--) {
          args[index - 1] = arguments[index];
        }
        return arrayPush(isArray2(array) ? copyArray(array) : [array], baseFlatten(args, 1));
      }
      var difference = baseRest2(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
      });
      var differenceBy = baseRest2(function(array, values2) {
        var iteratee2 = last(values2);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
      });
      var differenceWith = baseRest2(function(array, values2) {
        var comparator = last(values2);
        if (isArrayLikeObject(comparator)) {
          comparator = undefined$1;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
      });
      function drop(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger2(n);
        return baseSlice2(array, n < 0 ? 0 : n, length);
      }
      function dropRight(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger2(n);
        n = length - n;
        return baseSlice2(array, 0, n < 0 ? 0 : n);
      }
      function dropRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
      }
      function dropWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
      }
      function fill(array, value, start2, end2) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (start2 && typeof start2 != "number" && isIterateeCall2(array, value, start2)) {
          start2 = 0;
          end2 = length;
        }
        return baseFill(array, value, start2, end2);
      }
      function findIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger2(fromIndex);
        if (index < 0) {
          index = nativeMax2(length + index, 0);
        }
        return baseFindIndex2(array, getIteratee(predicate, 3), index);
      }
      function findLastIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = length - 1;
        if (fromIndex !== undefined$1) {
          index = toInteger2(fromIndex);
          index = fromIndex < 0 ? nativeMax2(length + index, 0) : nativeMin(index, length - 1);
        }
        return baseFindIndex2(array, getIteratee(predicate, 3), index, true);
      }
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      function flattenDeep(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, INFINITY2) : [];
      }
      function flattenDepth(array, depth) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        depth = depth === undefined$1 ? 1 : toInteger2(depth);
        return baseFlatten(array, depth);
      }
      function fromPairs(pairs) {
        var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
        while (++index < length) {
          var pair = pairs[index];
          result2[pair[0]] = pair[1];
        }
        return result2;
      }
      function head(array) {
        return array && array.length ? array[0] : undefined$1;
      }
      function indexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger2(fromIndex);
        if (index < 0) {
          index = nativeMax2(length + index, 0);
        }
        return baseIndexOf2(array, value, index);
      }
      function initial(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice2(array, 0, -1) : [];
      }
      var intersection = baseRest2(function(arrays) {
        var mapped = arrayMap2(arrays, castArrayLikeObject);
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
      });
      var intersectionBy = baseRest2(function(arrays) {
        var iteratee2 = last(arrays), mapped = arrayMap2(arrays, castArrayLikeObject);
        if (iteratee2 === last(mapped)) {
          iteratee2 = undefined$1;
        } else {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
      });
      var intersectionWith = baseRest2(function(arrays) {
        var comparator = last(arrays), mapped = arrayMap2(arrays, castArrayLikeObject);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        if (comparator) {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
      });
      function join(array, separator) {
        return array == null ? "" : nativeJoin.call(array, separator);
      }
      function last(array) {
        var length = array == null ? 0 : array.length;
        return length ? array[length - 1] : undefined$1;
      }
      function lastIndexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = length;
        if (fromIndex !== undefined$1) {
          index = toInteger2(fromIndex);
          index = index < 0 ? nativeMax2(length + index, 0) : nativeMin(index, length - 1);
        }
        return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex2(array, baseIsNaN2, index, true);
      }
      function nth(array, n) {
        return array && array.length ? baseNth(array, toInteger2(n)) : undefined$1;
      }
      var pull = baseRest2(pullAll);
      function pullAll(array, values2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
      }
      function pullAllBy(array, values2, iteratee2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
      }
      function pullAllWith(array, values2, comparator) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined$1, comparator) : array;
      }
      var pullAt = flatRest(function(array, indexes) {
        var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
        basePullAt(array, arrayMap2(indexes, function(index) {
          return isIndex2(index, length) ? +index : index;
        }).sort(compareAscending));
        return result2;
      });
      function remove(array, predicate) {
        var result2 = [];
        if (!(array && array.length)) {
          return result2;
        }
        var index = -1, indexes = [], length = array.length;
        predicate = getIteratee(predicate, 3);
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result2.push(value);
            indexes.push(index);
          }
        }
        basePullAt(array, indexes);
        return result2;
      }
      function reverse(array) {
        return array == null ? array : nativeReverse.call(array);
      }
      function slice(array, start2, end2) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (end2 && typeof end2 != "number" && isIterateeCall2(array, start2, end2)) {
          start2 = 0;
          end2 = length;
        } else {
          start2 = start2 == null ? 0 : toInteger2(start2);
          end2 = end2 === undefined$1 ? length : toInteger2(end2);
        }
        return baseSlice2(array, start2, end2);
      }
      function sortedIndex(array, value) {
        return baseSortedIndex(array, value);
      }
      function sortedIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
      }
      function sortedIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index = baseSortedIndex(array, value);
          if (index < length && eq2(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function sortedLastIndex(array, value) {
        return baseSortedIndex(array, value, true);
      }
      function sortedLastIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
      }
      function sortedLastIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index = baseSortedIndex(array, value, true) - 1;
          if (eq2(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function sortedUniq(array) {
        return array && array.length ? baseSortedUniq(array) : [];
      }
      function sortedUniqBy(array, iteratee2) {
        return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function tail(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice2(array, 1, length) : [];
      }
      function take(array, n, guard) {
        if (!(array && array.length)) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger2(n);
        return baseSlice2(array, 0, n < 0 ? 0 : n);
      }
      function takeRight(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger2(n);
        n = length - n;
        return baseSlice2(array, n < 0 ? 0 : n, length);
      }
      function takeRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
      }
      function takeWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
      }
      var union = baseRest2(function(arrays) {
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
      });
      var unionBy = baseRest2(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
      });
      var unionWith = baseRest2(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
      });
      function uniq(array) {
        return array && array.length ? baseUniq(array) : [];
      }
      function uniqBy(array, iteratee2) {
        return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function uniqWith(array, comparator) {
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
      }
      function unzip(array) {
        if (!(array && array.length)) {
          return [];
        }
        var length = 0;
        array = arrayFilter(array, function(group) {
          if (isArrayLikeObject(group)) {
            length = nativeMax2(group.length, length);
            return true;
          }
        });
        return baseTimes2(length, function(index) {
          return arrayMap2(array, baseProperty2(index));
        });
      }
      function unzipWith(array, iteratee2) {
        if (!(array && array.length)) {
          return [];
        }
        var result2 = unzip(array);
        if (iteratee2 == null) {
          return result2;
        }
        return arrayMap2(result2, function(group) {
          return apply2(iteratee2, undefined$1, group);
        });
      }
      var without = baseRest2(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
      });
      var xor = baseRest2(function(arrays) {
        return baseXor(arrayFilter(arrays, isArrayLikeObject));
      });
      var xorBy = baseRest2(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
      });
      var xorWith = baseRest2(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
      });
      var zip = baseRest2(unzip);
      function zipObject(props, values2) {
        return baseZipObject(props || [], values2 || [], assignValue2);
      }
      function zipObjectDeep(props, values2) {
        return baseZipObject(props || [], values2 || [], baseSet);
      }
      var zipWith = baseRest2(function(arrays) {
        var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
        iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
        return unzipWith(arrays, iteratee2);
      });
      function chain(value) {
        var result2 = lodash2(value);
        result2.__chain__ = true;
        return result2;
      }
      function tap(value, interceptor) {
        interceptor(value);
        return value;
      }
      function thru(value, interceptor) {
        return interceptor(value);
      }
      var wrapperAt = flatRest(function(paths) {
        var length = paths.length, start2 = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
          return baseAt(object, paths);
        };
        if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex2(start2)) {
          return this.thru(interceptor);
        }
        value = value.slice(start2, +start2 + (length ? 1 : 0));
        value.__actions__.push({
          "func": thru,
          "args": [interceptor],
          "thisArg": undefined$1
        });
        return new LodashWrapper(value, this.__chain__).thru(function(array) {
          if (length && !array.length) {
            array.push(undefined$1);
          }
          return array;
        });
      });
      function wrapperChain() {
        return chain(this);
      }
      function wrapperCommit() {
        return new LodashWrapper(this.value(), this.__chain__);
      }
      function wrapperNext() {
        if (this.__values__ === undefined$1) {
          this.__values__ = toArray(this.value());
        }
        var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
        return { "done": done, "value": value };
      }
      function wrapperToIterator() {
        return this;
      }
      function wrapperPlant(value) {
        var result2, parent2 = this;
        while (parent2 instanceof baseLodash) {
          var clone2 = wrapperClone(parent2);
          clone2.__index__ = 0;
          clone2.__values__ = undefined$1;
          if (result2) {
            previous.__wrapped__ = clone2;
          } else {
            result2 = clone2;
          }
          var previous = clone2;
          parent2 = parent2.__wrapped__;
        }
        previous.__wrapped__ = value;
        return result2;
      }
      function wrapperReverse() {
        var value = this.__wrapped__;
        if (value instanceof LazyWrapper) {
          var wrapped = value;
          if (this.__actions__.length) {
            wrapped = new LazyWrapper(this);
          }
          wrapped = wrapped.reverse();
          wrapped.__actions__.push({
            "func": thru,
            "args": [reverse],
            "thisArg": undefined$1
          });
          return new LodashWrapper(wrapped, this.__chain__);
        }
        return this.thru(reverse);
      }
      function wrapperValue() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
      }
      var countBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty2.call(result2, key)) {
          ++result2[key];
        } else {
          baseAssignValue2(result2, key, 1);
        }
      });
      function every(collection, predicate, guard) {
        var func = isArray2(collection) ? arrayEvery : baseEvery;
        if (guard && isIterateeCall2(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      function filter(collection, predicate) {
        var func = isArray2(collection) ? arrayFilter : baseFilter;
        return func(collection, getIteratee(predicate, 3));
      }
      var find = createFind(findIndex);
      var findLast = createFind(findLastIndex);
      function flatMap(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), 1);
      }
      function flatMapDeep(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), INFINITY2);
      }
      function flatMapDepth(collection, iteratee2, depth) {
        depth = depth === undefined$1 ? 1 : toInteger2(depth);
        return baseFlatten(map(collection, iteratee2), depth);
      }
      function forEach(collection, iteratee2) {
        var func = isArray2(collection) ? arrayEach : baseEach;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function forEachRight(collection, iteratee2) {
        var func = isArray2(collection) ? arrayEachRight : baseEachRight;
        return func(collection, getIteratee(iteratee2, 3));
      }
      var groupBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty2.call(result2, key)) {
          result2[key].push(value);
        } else {
          baseAssignValue2(result2, key, [value]);
        }
      });
      function includes(collection, value, fromIndex, guard) {
        collection = isArrayLike2(collection) ? collection : values(collection);
        fromIndex = fromIndex && !guard ? toInteger2(fromIndex) : 0;
        var length = collection.length;
        if (fromIndex < 0) {
          fromIndex = nativeMax2(length + fromIndex, 0);
        }
        return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf2(collection, value, fromIndex) > -1;
      }
      var invokeMap = baseRest2(function(collection, path, args) {
        var index = -1, isFunc = typeof path == "function", result2 = isArrayLike2(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value) {
          result2[++index] = isFunc ? apply2(path, value, args) : baseInvoke(value, path, args);
        });
        return result2;
      });
      var keyBy = createAggregator(function(result2, value, key) {
        baseAssignValue2(result2, key, value);
      });
      function map(collection, iteratee2) {
        var func = isArray2(collection) ? arrayMap2 : baseMap;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function orderBy(collection, iteratees, orders, guard) {
        if (collection == null) {
          return [];
        }
        if (!isArray2(iteratees)) {
          iteratees = iteratees == null ? [] : [iteratees];
        }
        orders = guard ? undefined$1 : orders;
        if (!isArray2(orders)) {
          orders = orders == null ? [] : [orders];
        }
        return baseOrderBy(collection, iteratees, orders);
      }
      var partition = createAggregator(function(result2, value, key) {
        result2[key ? 0 : 1].push(value);
      }, function() {
        return [[], []];
      });
      function reduce(collection, iteratee2, accumulator) {
        var func = isArray2(collection) ? arrayReduce2 : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
      }
      function reduceRight(collection, iteratee2, accumulator) {
        var func = isArray2(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
      }
      function reject(collection, predicate) {
        var func = isArray2(collection) ? arrayFilter : baseFilter;
        return func(collection, negate(getIteratee(predicate, 3)));
      }
      function sample(collection) {
        var func = isArray2(collection) ? arraySample : baseSample;
        return func(collection);
      }
      function sampleSize(collection, n, guard) {
        if (guard ? isIterateeCall2(collection, n, guard) : n === undefined$1) {
          n = 1;
        } else {
          n = toInteger2(n);
        }
        var func = isArray2(collection) ? arraySampleSize : baseSampleSize;
        return func(collection, n);
      }
      function shuffle(collection) {
        var func = isArray2(collection) ? arrayShuffle : baseShuffle;
        return func(collection);
      }
      function size(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike2(collection)) {
          return isString(collection) ? stringSize2(collection) : collection.length;
        }
        var tag = getTag(collection);
        if (tag == mapTag2 || tag == setTag2) {
          return collection.size;
        }
        return baseKeys2(collection).length;
      }
      function some(collection, predicate, guard) {
        var func = isArray2(collection) ? arraySome : baseSome;
        if (guard && isIterateeCall2(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      var sortBy = baseRest2(function(collection, iteratees) {
        if (collection == null) {
          return [];
        }
        var length = iteratees.length;
        if (length > 1 && isIterateeCall2(collection, iteratees[0], iteratees[1])) {
          iteratees = [];
        } else if (length > 2 && isIterateeCall2(iteratees[0], iteratees[1], iteratees[2])) {
          iteratees = [iteratees[0]];
        }
        return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
      });
      var now = ctxNow || function() {
        return root2.Date.now();
      };
      function after(n, func) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n = toInteger2(n);
        return function() {
          if (--n < 1) {
            return func.apply(this, arguments);
          }
        };
      }
      function ary(func, n, guard) {
        n = guard ? undefined$1 : n;
        n = func && n == null ? func.length : n;
        return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
      }
      function before(n, func) {
        var result2;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n = toInteger2(n);
        return function() {
          if (--n > 0) {
            result2 = func.apply(this, arguments);
          }
          if (n <= 1) {
            func = undefined$1;
          }
          return result2;
        };
      }
      var bind = baseRest2(function(func, thisArg, partials) {
        var bitmask = WRAP_BIND_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bind));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(func, bitmask, thisArg, partials, holders);
      });
      var bindKey = baseRest2(function(object, key, partials) {
        var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bindKey));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(key, bitmask, object, partials, holders);
      });
      function curry(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curry.placeholder;
        return result2;
      }
      function curryRight(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curryRight.placeholder;
        return result2;
      }
      function debounce2(func, wait, options) {
        var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        wait = toNumber2(wait) || 0;
        if (isObject2(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax2(toNumber2(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = undefined$1;
          lastInvokeTime = time;
          result2 = func.apply(thisArg, args);
          return result2;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout2(timerExpired, wait);
          return leading ? invokeFunc(time) : result2;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout2(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = undefined$1;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined$1;
          return result2;
        }
        function cancel() {
          if (timerId !== undefined$1) {
            clearTimeout2(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined$1;
        }
        function flush() {
          return timerId === undefined$1 ? result2 : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === undefined$1) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout2(timerId);
              timerId = setTimeout2(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined$1) {
            timerId = setTimeout2(timerExpired, wait);
          }
          return result2;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      var defer = baseRest2(function(func, args) {
        return baseDelay(func, 1, args);
      });
      var delay = baseRest2(function(func, wait, args) {
        return baseDelay(func, toNumber2(wait) || 0, args);
      });
      function flip2(func) {
        return createWrap(func, WRAP_FLIP_FLAG);
      }
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result2 = func.apply(this, args);
          memoized.cache = cache.set(key, result2) || cache;
          return result2;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      function once(func) {
        return before(2, func);
      }
      var overArgs = castRest(function(func, transforms) {
        transforms = transforms.length == 1 && isArray2(transforms[0]) ? arrayMap2(transforms[0], baseUnary2(getIteratee())) : arrayMap2(baseFlatten(transforms, 1), baseUnary2(getIteratee()));
        var funcsLength = transforms.length;
        return baseRest2(function(args) {
          var index = -1, length = nativeMin(args.length, funcsLength);
          while (++index < length) {
            args[index] = transforms[index].call(this, args[index]);
          }
          return apply2(func, this, args);
        });
      });
      var partial = baseRest2(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partial));
        return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
      });
      var partialRight = baseRest2(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partialRight));
        return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
      });
      var rearg = flatRest(function(func, indexes) {
        return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
      });
      function rest(func, start2) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start2 = start2 === undefined$1 ? start2 : toInteger2(start2);
        return baseRest2(func, start2);
      }
      function spread(func, start2) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start2 = start2 == null ? 0 : nativeMax2(toInteger2(start2), 0);
        return baseRest2(function(args) {
          var array = args[start2], otherArgs = castSlice2(args, 0, start2);
          if (array) {
            arrayPush(otherArgs, array);
          }
          return apply2(func, this, otherArgs);
        });
      }
      function throttle(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        if (isObject2(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce2(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      function unary(func) {
        return ary(func, 1);
      }
      function wrap(value, wrapper) {
        return partial(castFunction(wrapper), value);
      }
      function castArray() {
        if (!arguments.length) {
          return [];
        }
        var value = arguments[0];
        return isArray2(value) ? value : [value];
      }
      function clone(value) {
        return baseClone(value, CLONE_SYMBOLS_FLAG);
      }
      function cloneWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
      }
      function cloneDeep(value) {
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
      }
      function cloneDeepWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
      }
      function conformsTo(object, source2) {
        return source2 == null || baseConformsTo(object, source2, keys2(source2));
      }
      function eq2(value, other) {
        return value === other || value !== value && other !== other;
      }
      var gt = createRelationalOperation(baseGt);
      var gte = createRelationalOperation(function(value, other) {
        return value >= other;
      });
      var isArguments2 = baseIsArguments2(function() {
        return arguments;
      }()) ? baseIsArguments2 : function(value) {
        return isObjectLike2(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable2.call(value, "callee");
      };
      var isArray2 = Array2.isArray;
      var isArrayBuffer = nodeIsArrayBuffer ? baseUnary2(nodeIsArrayBuffer) : baseIsArrayBuffer;
      function isArrayLike2(value) {
        return value != null && isLength2(value.length) && !isFunction2(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike2(value) && isArrayLike2(value);
      }
      function isBoolean2(value) {
        return value === true || value === false || isObjectLike2(value) && baseGetTag2(value) == boolTag2;
      }
      var isBuffer2 = nativeIsBuffer || stubFalse2;
      var isDate = nodeIsDate ? baseUnary2(nodeIsDate) : baseIsDate;
      function isElement2(value) {
        return isObjectLike2(value) && value.nodeType === 1 && !isPlainObject2(value);
      }
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike2(value) && (isArray2(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer2(value) || isTypedArray2(value) || isArguments2(value))) {
          return !value.length;
        }
        var tag = getTag(value);
        if (tag == mapTag2 || tag == setTag2) {
          return !value.size;
        }
        if (isPrototype2(value)) {
          return !baseKeys2(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty2.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      function isEqual(value, other) {
        return baseIsEqual(value, other);
      }
      function isEqualWith(value, other, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        var result2 = customizer ? customizer(value, other) : undefined$1;
        return result2 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result2;
      }
      function isError2(value) {
        if (!isObjectLike2(value)) {
          return false;
        }
        var tag = baseGetTag2(value);
        return tag == errorTag2 || tag == domExcTag2 || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject2(value);
      }
      function isFinite(value) {
        return typeof value == "number" && nativeIsFinite(value);
      }
      function isFunction2(value) {
        if (!isObject2(value)) {
          return false;
        }
        var tag = baseGetTag2(value);
        return tag == funcTag2 || tag == genTag2 || tag == asyncTag2 || tag == proxyTag2;
      }
      function isInteger(value) {
        return typeof value == "number" && value == toInteger2(value);
      }
      function isLength2(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
      }
      function isObject2(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      function isObjectLike2(value) {
        return value != null && typeof value == "object";
      }
      var isMap = nodeIsMap ? baseUnary2(nodeIsMap) : baseIsMap;
      function isMatch(object, source2) {
        return object === source2 || baseIsMatch(object, source2, getMatchData(source2));
      }
      function isMatchWith(object, source2, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseIsMatch(object, source2, getMatchData(source2), customizer);
      }
      function isNaN(value) {
        return isNumber(value) && value != +value;
      }
      function isNative(value) {
        if (isMaskable(value)) {
          throw new Error2(CORE_ERROR_TEXT);
        }
        return baseIsNative2(value);
      }
      function isNull(value) {
        return value === null;
      }
      function isNil(value) {
        return value == null;
      }
      function isNumber(value) {
        return typeof value == "number" || isObjectLike2(value) && baseGetTag2(value) == numberTag2;
      }
      function isPlainObject2(value) {
        if (!isObjectLike2(value) || baseGetTag2(value) != objectTag2) {
          return false;
        }
        var proto = getPrototype2(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString2.call(Ctor) == objectCtorString2;
      }
      var isRegExp2 = nodeIsRegExp2 ? baseUnary2(nodeIsRegExp2) : baseIsRegExp2;
      function isSafeInteger(value) {
        return isInteger(value) && value >= -MAX_SAFE_INTEGER2 && value <= MAX_SAFE_INTEGER2;
      }
      var isSet = nodeIsSet ? baseUnary2(nodeIsSet) : baseIsSet;
      function isString(value) {
        return typeof value == "string" || !isArray2(value) && isObjectLike2(value) && baseGetTag2(value) == stringTag2;
      }
      function isSymbol2(value) {
        return typeof value == "symbol" || isObjectLike2(value) && baseGetTag2(value) == symbolTag2;
      }
      var isTypedArray2 = nodeIsTypedArray2 ? baseUnary2(nodeIsTypedArray2) : baseIsTypedArray2;
      function isUndefined(value) {
        return value === undefined$1;
      }
      function isWeakMap(value) {
        return isObjectLike2(value) && getTag(value) == weakMapTag2;
      }
      function isWeakSet(value) {
        return isObjectLike2(value) && baseGetTag2(value) == weakSetTag;
      }
      var lt = createRelationalOperation(baseLt);
      var lte = createRelationalOperation(function(value, other) {
        return value <= other;
      });
      function toArray(value) {
        if (!value) {
          return [];
        }
        if (isArrayLike2(value)) {
          return isString(value) ? stringToArray2(value) : copyArray(value);
        }
        if (symIterator && value[symIterator]) {
          return iteratorToArray(value[symIterator]());
        }
        var tag = getTag(value), func = tag == mapTag2 ? mapToArray : tag == setTag2 ? setToArray : values;
        return func(value);
      }
      function toFinite2(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber2(value);
        if (value === INFINITY2 || value === -INFINITY2) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER2;
        }
        return value === value ? value : 0;
      }
      function toInteger2(value) {
        var result2 = toFinite2(value), remainder = result2 % 1;
        return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
      }
      function toLength(value) {
        return value ? baseClamp2(toInteger2(value), 0, MAX_ARRAY_LENGTH2) : 0;
      }
      function toNumber2(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol2(value)) {
          return NAN2;
        }
        if (isObject2(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject2(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim2(value);
        var isBinary = reIsBinary2.test(value);
        return isBinary || reIsOctal2.test(value) ? freeParseInt2(value.slice(2), isBinary ? 2 : 8) : reIsBadHex2.test(value) ? NAN2 : +value;
      }
      function toPlainObject(value) {
        return copyObject2(value, keysIn2(value));
      }
      function toSafeInteger(value) {
        return value ? baseClamp2(toInteger2(value), -MAX_SAFE_INTEGER2, MAX_SAFE_INTEGER2) : value === 0 ? value : 0;
      }
      function toString2(value) {
        return value == null ? "" : baseToString2(value);
      }
      var assign = createAssigner2(function(object, source2) {
        if (isPrototype2(source2) || isArrayLike2(source2)) {
          copyObject2(source2, keys2(source2), object);
          return;
        }
        for (var key in source2) {
          if (hasOwnProperty2.call(source2, key)) {
            assignValue2(object, key, source2[key]);
          }
        }
      });
      var assignIn = createAssigner2(function(object, source2) {
        copyObject2(source2, keysIn2(source2), object);
      });
      var assignInWith2 = createAssigner2(function(object, source2, srcIndex, customizer) {
        copyObject2(source2, keysIn2(source2), object, customizer);
      });
      var assignWith = createAssigner2(function(object, source2, srcIndex, customizer) {
        copyObject2(source2, keys2(source2), object, customizer);
      });
      var at = flatRest(baseAt);
      function create(prototype, properties) {
        var result2 = baseCreate(prototype);
        return properties == null ? result2 : baseAssign(result2, properties);
      }
      var defaults = baseRest2(function(object, sources) {
        object = Object2(object);
        var index = -1;
        var length = sources.length;
        var guard = length > 2 ? sources[2] : undefined$1;
        if (guard && isIterateeCall2(sources[0], sources[1], guard)) {
          length = 1;
        }
        while (++index < length) {
          var source2 = sources[index];
          var props = keysIn2(source2);
          var propsIndex = -1;
          var propsLength = props.length;
          while (++propsIndex < propsLength) {
            var key = props[propsIndex];
            var value = object[key];
            if (value === undefined$1 || eq2(value, objectProto2[key]) && !hasOwnProperty2.call(object, key)) {
              object[key] = source2[key];
            }
          }
        }
        return object;
      });
      var defaultsDeep = baseRest2(function(args) {
        args.push(undefined$1, customDefaultsMerge);
        return apply2(mergeWith, undefined$1, args);
      });
      function findKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
      }
      function findLastKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
      }
      function forIn(object, iteratee2) {
        return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn2);
      }
      function forInRight(object, iteratee2) {
        return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn2);
      }
      function forOwn(object, iteratee2) {
        return object && baseForOwn(object, getIteratee(iteratee2, 3));
      }
      function forOwnRight(object, iteratee2) {
        return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
      }
      function functions(object) {
        return object == null ? [] : baseFunctions(object, keys2(object));
      }
      function functionsIn(object) {
        return object == null ? [] : baseFunctions(object, keysIn2(object));
      }
      function get(object, path, defaultValue) {
        var result2 = object == null ? undefined$1 : baseGet(object, path);
        return result2 === undefined$1 ? defaultValue : result2;
      }
      function has(object, path) {
        return object != null && hasPath(object, path, baseHas);
      }
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      var invert = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString2.call(value);
        }
        result2[value] = key;
      }, constant2(identity2));
      var invertBy = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString2.call(value);
        }
        if (hasOwnProperty2.call(result2, value)) {
          result2[value].push(key);
        } else {
          result2[value] = [key];
        }
      }, getIteratee);
      var invoke = baseRest2(baseInvoke);
      function keys2(object) {
        return isArrayLike2(object) ? arrayLikeKeys2(object) : baseKeys2(object);
      }
      function keysIn2(object) {
        return isArrayLike2(object) ? arrayLikeKeys2(object, true) : baseKeysIn2(object);
      }
      function mapKeys(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue2(result2, iteratee2(value, key, object2), value);
        });
        return result2;
      }
      function mapValues(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue2(result2, key, iteratee2(value, key, object2));
        });
        return result2;
      }
      var merge = createAssigner2(function(object, source2, srcIndex) {
        baseMerge(object, source2, srcIndex);
      });
      var mergeWith = createAssigner2(function(object, source2, srcIndex, customizer) {
        baseMerge(object, source2, srcIndex, customizer);
      });
      var omit = flatRest(function(object, paths) {
        var result2 = {};
        if (object == null) {
          return result2;
        }
        var isDeep = false;
        paths = arrayMap2(paths, function(path) {
          path = castPath(path, object);
          isDeep || (isDeep = path.length > 1);
          return path;
        });
        copyObject2(object, getAllKeysIn(object), result2);
        if (isDeep) {
          result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
        }
        var length = paths.length;
        while (length--) {
          baseUnset(result2, paths[length]);
        }
        return result2;
      });
      function omitBy(object, predicate) {
        return pickBy(object, negate(getIteratee(predicate)));
      }
      var pick = flatRest(function(object, paths) {
        return object == null ? {} : basePick(object, paths);
      });
      function pickBy(object, predicate) {
        if (object == null) {
          return {};
        }
        var props = arrayMap2(getAllKeysIn(object), function(prop) {
          return [prop];
        });
        predicate = getIteratee(predicate);
        return basePickBy(object, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      function result(object, path, defaultValue) {
        path = castPath(path, object);
        var index = -1, length = path.length;
        if (!length) {
          length = 1;
          object = undefined$1;
        }
        while (++index < length) {
          var value = object == null ? undefined$1 : object[toKey(path[index])];
          if (value === undefined$1) {
            index = length;
            value = defaultValue;
          }
          object = isFunction2(value) ? value.call(object) : value;
        }
        return object;
      }
      function set(object, path, value) {
        return object == null ? object : baseSet(object, path, value);
      }
      function setWith(object, path, value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseSet(object, path, value, customizer);
      }
      var toPairs = createToPairs(keys2);
      var toPairsIn = createToPairs(keysIn2);
      function transform(object, iteratee2, accumulator) {
        var isArr = isArray2(object), isArrLike = isArr || isBuffer2(object) || isTypedArray2(object);
        iteratee2 = getIteratee(iteratee2, 4);
        if (accumulator == null) {
          var Ctor = object && object.constructor;
          if (isArrLike) {
            accumulator = isArr ? new Ctor() : [];
          } else if (isObject2(object)) {
            accumulator = isFunction2(Ctor) ? baseCreate(getPrototype2(object)) : {};
          } else {
            accumulator = {};
          }
        }
        (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
          return iteratee2(accumulator, value, index, object2);
        });
        return accumulator;
      }
      function unset(object, path) {
        return object == null ? true : baseUnset(object, path);
      }
      function update(object, path, updater) {
        return object == null ? object : baseUpdate(object, path, castFunction(updater));
      }
      function updateWith(object, path, updater, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
      }
      function values(object) {
        return object == null ? [] : baseValues2(object, keys2(object));
      }
      function valuesIn(object) {
        return object == null ? [] : baseValues2(object, keysIn2(object));
      }
      function clamp(number, lower, upper) {
        if (upper === undefined$1) {
          upper = lower;
          lower = undefined$1;
        }
        if (upper !== undefined$1) {
          upper = toNumber2(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== undefined$1) {
          lower = toNumber2(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp2(toNumber2(number), lower, upper);
      }
      function inRange(number, start2, end2) {
        start2 = toFinite2(start2);
        if (end2 === undefined$1) {
          end2 = start2;
          start2 = 0;
        } else {
          end2 = toFinite2(end2);
        }
        number = toNumber2(number);
        return baseInRange(number, start2, end2);
      }
      function random(lower, upper, floating) {
        if (floating && typeof floating != "boolean" && isIterateeCall2(lower, upper, floating)) {
          upper = floating = undefined$1;
        }
        if (floating === undefined$1) {
          if (typeof upper == "boolean") {
            floating = upper;
            upper = undefined$1;
          } else if (typeof lower == "boolean") {
            floating = lower;
            lower = undefined$1;
          }
        }
        if (lower === undefined$1 && upper === undefined$1) {
          lower = 0;
          upper = 1;
        } else {
          lower = toFinite2(lower);
          if (upper === undefined$1) {
            upper = lower;
            lower = 0;
          } else {
            upper = toFinite2(upper);
          }
        }
        if (lower > upper) {
          var temp = lower;
          lower = upper;
          upper = temp;
        }
        if (floating || lower % 1 || upper % 1) {
          var rand = nativeRandom();
          return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
        }
        return baseRandom(lower, upper);
      }
      var camelCase2 = createCompounder2(function(result2, word, index) {
        word = word.toLowerCase();
        return result2 + (index ? capitalize2(word) : word);
      });
      function capitalize2(string2) {
        return upperFirst2(toString2(string2).toLowerCase());
      }
      function deburr2(string2) {
        string2 = toString2(string2);
        return string2 && string2.replace(reLatin2, deburrLetter2).replace(reComboMark2, "");
      }
      function endsWith2(string2, target, position) {
        string2 = toString2(string2);
        target = baseToString2(target);
        var length = string2.length;
        position = position === undefined$1 ? length : baseClamp2(toInteger2(position), 0, length);
        var end2 = position;
        position -= target.length;
        return position >= 0 && string2.slice(position, end2) == target;
      }
      function escape2(string2) {
        string2 = toString2(string2);
        return string2 && reHasUnescapedHtml2.test(string2) ? string2.replace(reUnescapedHtml2, escapeHtmlChar2) : string2;
      }
      function escapeRegExp2(string2) {
        string2 = toString2(string2);
        return string2 && reHasRegExpChar2.test(string2) ? string2.replace(reRegExpChar2, "\\$&") : string2;
      }
      var kebabCase2 = createCompounder2(function(result2, word, index) {
        return result2 + (index ? "-" : "") + word.toLowerCase();
      });
      var lowerCase2 = createCompounder2(function(result2, word, index) {
        return result2 + (index ? " " : "") + word.toLowerCase();
      });
      var lowerFirst2 = createCaseFirst2("toLowerCase");
      function pad2(string2, length, chars) {
        string2 = toString2(string2);
        length = toInteger2(length);
        var strLength = length ? stringSize2(string2) : 0;
        if (!length || strLength >= length) {
          return string2;
        }
        var mid = (length - strLength) / 2;
        return createPadding2(nativeFloor2(mid), chars) + string2 + createPadding2(nativeCeil2(mid), chars);
      }
      function padEnd2(string2, length, chars) {
        string2 = toString2(string2);
        length = toInteger2(length);
        var strLength = length ? stringSize2(string2) : 0;
        return length && strLength < length ? string2 + createPadding2(length - strLength, chars) : string2;
      }
      function padStart2(string2, length, chars) {
        string2 = toString2(string2);
        length = toInteger2(length);
        var strLength = length ? stringSize2(string2) : 0;
        return length && strLength < length ? createPadding2(length - strLength, chars) + string2 : string2;
      }
      function parseInt2(string2, radix, guard) {
        if (guard || radix == null) {
          radix = 0;
        } else if (radix) {
          radix = +radix;
        }
        return nativeParseInt2(toString2(string2).replace(reTrimStart2, ""), radix || 0);
      }
      function repeat2(string2, n, guard) {
        if (guard ? isIterateeCall2(string2, n, guard) : n === undefined$1) {
          n = 1;
        } else {
          n = toInteger2(n);
        }
        return baseRepeat2(toString2(string2), n);
      }
      function replace2() {
        var args = arguments, string2 = toString2(args[0]);
        return args.length < 3 ? string2 : string2.replace(args[1], args[2]);
      }
      var snakeCase2 = createCompounder2(function(result2, word, index) {
        return result2 + (index ? "_" : "") + word.toLowerCase();
      });
      function split2(string2, separator, limit) {
        if (limit && typeof limit != "number" && isIterateeCall2(string2, separator, limit)) {
          separator = limit = undefined$1;
        }
        limit = limit === undefined$1 ? MAX_ARRAY_LENGTH2 : limit >>> 0;
        if (!limit) {
          return [];
        }
        string2 = toString2(string2);
        if (string2 && (typeof separator == "string" || separator != null && !isRegExp2(separator))) {
          separator = baseToString2(separator);
          if (!separator && hasUnicode2(string2)) {
            return castSlice2(stringToArray2(string2), 0, limit);
          }
        }
        return string2.split(separator, limit);
      }
      var startCase2 = createCompounder2(function(result2, word, index) {
        return result2 + (index ? " " : "") + upperFirst2(word);
      });
      function startsWith2(string2, target, position) {
        string2 = toString2(string2);
        position = position == null ? 0 : baseClamp2(toInteger2(position), 0, string2.length);
        target = baseToString2(target);
        return string2.slice(position, position + target.length) == target;
      }
      function template2(string2, options, guard) {
        var settings = lodash2.templateSettings;
        if (guard && isIterateeCall2(string2, options, guard)) {
          options = undefined$1;
        }
        string2 = toString2(string2);
        options = assignInWith2({}, options, settings, customDefaultsAssignIn2);
        var imports = assignInWith2({}, options.imports, settings.imports, customDefaultsAssignIn2), importsKeys = keys2(imports), importsValues = baseValues2(imports, importsKeys);
        var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch2, source2 = "__p += '";
        var reDelimiters = RegExp2((options.escape || reNoMatch2).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate2 ? reEsTemplate2 : reNoMatch2).source + "|" + (options.evaluate || reNoMatch2).source + "|$", "g");
        var sourceURL = "//# sourceURL=" + (hasOwnProperty2.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
        string2.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset2) {
          interpolateValue || (interpolateValue = esTemplateValue);
          source2 += string2.slice(index, offset2).replace(reUnescapedString2, escapeStringChar2);
          if (escapeValue) {
            isEscaping = true;
            source2 += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source2 += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source2 += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index = offset2 + match.length;
          return match;
        });
        source2 += "';\n";
        var variable = hasOwnProperty2.call(options, "variable") && options.variable;
        if (!variable) {
          source2 = "with (obj) {\n" + source2 + "\n}\n";
        } else if (reForbiddenIdentifierChars2.test(variable)) {
          throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT2);
        }
        source2 = (isEvaluating ? source2.replace(reEmptyStringLeading2, "") : source2).replace(reEmptyStringMiddle2, "$1").replace(reEmptyStringTrailing2, "$1;");
        source2 = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source2 + "return __p\n}";
        var result2 = attempt2(function() {
          return Function2(importsKeys, sourceURL + "return " + source2).apply(undefined$1, importsValues);
        });
        result2.source = source2;
        if (isError2(result2)) {
          throw result2;
        }
        return result2;
      }
      function toLower2(value) {
        return toString2(value).toLowerCase();
      }
      function toUpper2(value) {
        return toString2(value).toUpperCase();
      }
      function trim2(string2, chars, guard) {
        string2 = toString2(string2);
        if (string2 && (guard || chars === undefined$1)) {
          return baseTrim2(string2);
        }
        if (!string2 || !(chars = baseToString2(chars))) {
          return string2;
        }
        var strSymbols = stringToArray2(string2), chrSymbols = stringToArray2(chars), start2 = charsStartIndex2(strSymbols, chrSymbols), end2 = charsEndIndex2(strSymbols, chrSymbols) + 1;
        return castSlice2(strSymbols, start2, end2).join("");
      }
      function trimEnd2(string2, chars, guard) {
        string2 = toString2(string2);
        if (string2 && (guard || chars === undefined$1)) {
          return string2.slice(0, trimmedEndIndex2(string2) + 1);
        }
        if (!string2 || !(chars = baseToString2(chars))) {
          return string2;
        }
        var strSymbols = stringToArray2(string2), end2 = charsEndIndex2(strSymbols, stringToArray2(chars)) + 1;
        return castSlice2(strSymbols, 0, end2).join("");
      }
      function trimStart2(string2, chars, guard) {
        string2 = toString2(string2);
        if (string2 && (guard || chars === undefined$1)) {
          return string2.replace(reTrimStart2, "");
        }
        if (!string2 || !(chars = baseToString2(chars))) {
          return string2;
        }
        var strSymbols = stringToArray2(string2), start2 = charsStartIndex2(strSymbols, stringToArray2(chars));
        return castSlice2(strSymbols, start2).join("");
      }
      function truncate2(string2, options) {
        var length = DEFAULT_TRUNC_LENGTH2, omission = DEFAULT_TRUNC_OMISSION2;
        if (isObject2(options)) {
          var separator = "separator" in options ? options.separator : separator;
          length = "length" in options ? toInteger2(options.length) : length;
          omission = "omission" in options ? baseToString2(options.omission) : omission;
        }
        string2 = toString2(string2);
        var strLength = string2.length;
        if (hasUnicode2(string2)) {
          var strSymbols = stringToArray2(string2);
          strLength = strSymbols.length;
        }
        if (length >= strLength) {
          return string2;
        }
        var end2 = length - stringSize2(omission);
        if (end2 < 1) {
          return omission;
        }
        var result2 = strSymbols ? castSlice2(strSymbols, 0, end2).join("") : string2.slice(0, end2);
        if (separator === undefined$1) {
          return result2 + omission;
        }
        if (strSymbols) {
          end2 += result2.length - end2;
        }
        if (isRegExp2(separator)) {
          if (string2.slice(end2).search(separator)) {
            var match, substring = result2;
            if (!separator.global) {
              separator = RegExp2(separator.source, toString2(reFlags2.exec(separator)) + "g");
            }
            separator.lastIndex = 0;
            while (match = separator.exec(substring)) {
              var newEnd = match.index;
            }
            result2 = result2.slice(0, newEnd === undefined$1 ? end2 : newEnd);
          }
        } else if (string2.indexOf(baseToString2(separator), end2) != end2) {
          var index = result2.lastIndexOf(separator);
          if (index > -1) {
            result2 = result2.slice(0, index);
          }
        }
        return result2 + omission;
      }
      function unescape2(string2) {
        string2 = toString2(string2);
        return string2 && reHasEscapedHtml2.test(string2) ? string2.replace(reEscapedHtml2, unescapeHtmlChar2) : string2;
      }
      var upperCase2 = createCompounder2(function(result2, word, index) {
        return result2 + (index ? " " : "") + word.toUpperCase();
      });
      var upperFirst2 = createCaseFirst2("toUpperCase");
      function words2(string2, pattern, guard) {
        string2 = toString2(string2);
        pattern = guard ? undefined$1 : pattern;
        if (pattern === undefined$1) {
          return hasUnicodeWord2(string2) ? unicodeWords2(string2) : asciiWords2(string2);
        }
        return string2.match(pattern) || [];
      }
      var attempt2 = baseRest2(function(func, args) {
        try {
          return apply2(func, undefined$1, args);
        } catch (e) {
          return isError2(e) ? e : new Error2(e);
        }
      });
      var bindAll = flatRest(function(object, methodNames) {
        arrayEach(methodNames, function(key) {
          key = toKey(key);
          baseAssignValue2(object, key, bind(object[key], object));
        });
        return object;
      });
      function cond(pairs) {
        var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
        pairs = !length ? [] : arrayMap2(pairs, function(pair) {
          if (typeof pair[1] != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return [toIteratee(pair[0]), pair[1]];
        });
        return baseRest2(function(args) {
          var index = -1;
          while (++index < length) {
            var pair = pairs[index];
            if (apply2(pair[0], this, args)) {
              return apply2(pair[1], this, args);
            }
          }
        });
      }
      function conforms(source2) {
        return baseConforms(baseClone(source2, CLONE_DEEP_FLAG));
      }
      function constant2(value) {
        return function() {
          return value;
        };
      }
      function defaultTo(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      var flow = createFlow();
      var flowRight = createFlow(true);
      function identity2(value) {
        return value;
      }
      function iteratee(func) {
        return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
      }
      function matches(source2) {
        return baseMatches(baseClone(source2, CLONE_DEEP_FLAG));
      }
      function matchesProperty(path, srcValue) {
        return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
      }
      var method = baseRest2(function(path, args) {
        return function(object) {
          return baseInvoke(object, path, args);
        };
      });
      var methodOf = baseRest2(function(object, args) {
        return function(path) {
          return baseInvoke(object, path, args);
        };
      });
      function mixin(object, source2, options) {
        var props = keys2(source2), methodNames = baseFunctions(source2, props);
        if (options == null && !(isObject2(source2) && (methodNames.length || !props.length))) {
          options = source2;
          source2 = object;
          object = this;
          methodNames = baseFunctions(source2, keys2(source2));
        }
        var chain2 = !(isObject2(options) && "chain" in options) || !!options.chain, isFunc = isFunction2(object);
        arrayEach(methodNames, function(methodName) {
          var func = source2[methodName];
          object[methodName] = func;
          if (isFunc) {
            object.prototype[methodName] = function() {
              var chainAll = this.__chain__;
              if (chain2 || chainAll) {
                var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                actions.push({ "func": func, "args": arguments, "thisArg": object });
                result2.__chain__ = chainAll;
                return result2;
              }
              return func.apply(object, arrayPush([this.value()], arguments));
            };
          }
        });
        return object;
      }
      function noConflict() {
        if (root2._ === this) {
          root2._ = oldDash;
        }
        return this;
      }
      function noop() {
      }
      function nthArg(n) {
        n = toInteger2(n);
        return baseRest2(function(args) {
          return baseNth(args, n);
        });
      }
      var over = createOver(arrayMap2);
      var overEvery = createOver(arrayEvery);
      var overSome = createOver(arraySome);
      function property(path) {
        return isKey(path) ? baseProperty2(toKey(path)) : basePropertyDeep(path);
      }
      function propertyOf(object) {
        return function(path) {
          return object == null ? undefined$1 : baseGet(object, path);
        };
      }
      var range = createRange();
      var rangeRight = createRange(true);
      function stubArray() {
        return [];
      }
      function stubFalse2() {
        return false;
      }
      function stubObject() {
        return {};
      }
      function stubString() {
        return "";
      }
      function stubTrue() {
        return true;
      }
      function times(n, iteratee2) {
        n = toInteger2(n);
        if (n < 1 || n > MAX_SAFE_INTEGER2) {
          return [];
        }
        var index = MAX_ARRAY_LENGTH2, length = nativeMin(n, MAX_ARRAY_LENGTH2);
        iteratee2 = getIteratee(iteratee2);
        n -= MAX_ARRAY_LENGTH2;
        var result2 = baseTimes2(length, iteratee2);
        while (++index < n) {
          iteratee2(index);
        }
        return result2;
      }
      function toPath(value) {
        if (isArray2(value)) {
          return arrayMap2(value, toKey);
        }
        return isSymbol2(value) ? [value] : copyArray(stringToPath(toString2(value)));
      }
      function uniqueId(prefix) {
        var id = ++idCounter;
        return toString2(prefix) + id;
      }
      var add = createMathOperation(function(augend, addend) {
        return augend + addend;
      }, 0);
      var ceil = createRound("ceil");
      var divide = createMathOperation(function(dividend, divisor) {
        return dividend / divisor;
      }, 1);
      var floor = createRound("floor");
      function max2(array) {
        return array && array.length ? baseExtremum(array, identity2, baseGt) : undefined$1;
      }
      function maxBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined$1;
      }
      function mean(array) {
        return baseMean(array, identity2);
      }
      function meanBy(array, iteratee2) {
        return baseMean(array, getIteratee(iteratee2, 2));
      }
      function min2(array) {
        return array && array.length ? baseExtremum(array, identity2, baseLt) : undefined$1;
      }
      function minBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined$1;
      }
      var multiply = createMathOperation(function(multiplier, multiplicand) {
        return multiplier * multiplicand;
      }, 1);
      var round2 = createRound("round");
      var subtract = createMathOperation(function(minuend, subtrahend) {
        return minuend - subtrahend;
      }, 0);
      function sum(array) {
        return array && array.length ? baseSum(array, identity2) : 0;
      }
      function sumBy(array, iteratee2) {
        return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
      }
      lodash2.after = after;
      lodash2.ary = ary;
      lodash2.assign = assign;
      lodash2.assignIn = assignIn;
      lodash2.assignInWith = assignInWith2;
      lodash2.assignWith = assignWith;
      lodash2.at = at;
      lodash2.before = before;
      lodash2.bind = bind;
      lodash2.bindAll = bindAll;
      lodash2.bindKey = bindKey;
      lodash2.castArray = castArray;
      lodash2.chain = chain;
      lodash2.chunk = chunk;
      lodash2.compact = compact;
      lodash2.concat = concat2;
      lodash2.cond = cond;
      lodash2.conforms = conforms;
      lodash2.constant = constant2;
      lodash2.countBy = countBy;
      lodash2.create = create;
      lodash2.curry = curry;
      lodash2.curryRight = curryRight;
      lodash2.debounce = debounce2;
      lodash2.defaults = defaults;
      lodash2.defaultsDeep = defaultsDeep;
      lodash2.defer = defer;
      lodash2.delay = delay;
      lodash2.difference = difference;
      lodash2.differenceBy = differenceBy;
      lodash2.differenceWith = differenceWith;
      lodash2.drop = drop;
      lodash2.dropRight = dropRight;
      lodash2.dropRightWhile = dropRightWhile;
      lodash2.dropWhile = dropWhile;
      lodash2.fill = fill;
      lodash2.filter = filter;
      lodash2.flatMap = flatMap;
      lodash2.flatMapDeep = flatMapDeep;
      lodash2.flatMapDepth = flatMapDepth;
      lodash2.flatten = flatten;
      lodash2.flattenDeep = flattenDeep;
      lodash2.flattenDepth = flattenDepth;
      lodash2.flip = flip2;
      lodash2.flow = flow;
      lodash2.flowRight = flowRight;
      lodash2.fromPairs = fromPairs;
      lodash2.functions = functions;
      lodash2.functionsIn = functionsIn;
      lodash2.groupBy = groupBy;
      lodash2.initial = initial;
      lodash2.intersection = intersection;
      lodash2.intersectionBy = intersectionBy;
      lodash2.intersectionWith = intersectionWith;
      lodash2.invert = invert;
      lodash2.invertBy = invertBy;
      lodash2.invokeMap = invokeMap;
      lodash2.iteratee = iteratee;
      lodash2.keyBy = keyBy;
      lodash2.keys = keys2;
      lodash2.keysIn = keysIn2;
      lodash2.map = map;
      lodash2.mapKeys = mapKeys;
      lodash2.mapValues = mapValues;
      lodash2.matches = matches;
      lodash2.matchesProperty = matchesProperty;
      lodash2.memoize = memoize;
      lodash2.merge = merge;
      lodash2.mergeWith = mergeWith;
      lodash2.method = method;
      lodash2.methodOf = methodOf;
      lodash2.mixin = mixin;
      lodash2.negate = negate;
      lodash2.nthArg = nthArg;
      lodash2.omit = omit;
      lodash2.omitBy = omitBy;
      lodash2.once = once;
      lodash2.orderBy = orderBy;
      lodash2.over = over;
      lodash2.overArgs = overArgs;
      lodash2.overEvery = overEvery;
      lodash2.overSome = overSome;
      lodash2.partial = partial;
      lodash2.partialRight = partialRight;
      lodash2.partition = partition;
      lodash2.pick = pick;
      lodash2.pickBy = pickBy;
      lodash2.property = property;
      lodash2.propertyOf = propertyOf;
      lodash2.pull = pull;
      lodash2.pullAll = pullAll;
      lodash2.pullAllBy = pullAllBy;
      lodash2.pullAllWith = pullAllWith;
      lodash2.pullAt = pullAt;
      lodash2.range = range;
      lodash2.rangeRight = rangeRight;
      lodash2.rearg = rearg;
      lodash2.reject = reject;
      lodash2.remove = remove;
      lodash2.rest = rest;
      lodash2.reverse = reverse;
      lodash2.sampleSize = sampleSize;
      lodash2.set = set;
      lodash2.setWith = setWith;
      lodash2.shuffle = shuffle;
      lodash2.slice = slice;
      lodash2.sortBy = sortBy;
      lodash2.sortedUniq = sortedUniq;
      lodash2.sortedUniqBy = sortedUniqBy;
      lodash2.split = split2;
      lodash2.spread = spread;
      lodash2.tail = tail;
      lodash2.take = take;
      lodash2.takeRight = takeRight;
      lodash2.takeRightWhile = takeRightWhile;
      lodash2.takeWhile = takeWhile;
      lodash2.tap = tap;
      lodash2.throttle = throttle;
      lodash2.thru = thru;
      lodash2.toArray = toArray;
      lodash2.toPairs = toPairs;
      lodash2.toPairsIn = toPairsIn;
      lodash2.toPath = toPath;
      lodash2.toPlainObject = toPlainObject;
      lodash2.transform = transform;
      lodash2.unary = unary;
      lodash2.union = union;
      lodash2.unionBy = unionBy;
      lodash2.unionWith = unionWith;
      lodash2.uniq = uniq;
      lodash2.uniqBy = uniqBy;
      lodash2.uniqWith = uniqWith;
      lodash2.unset = unset;
      lodash2.unzip = unzip;
      lodash2.unzipWith = unzipWith;
      lodash2.update = update;
      lodash2.updateWith = updateWith;
      lodash2.values = values;
      lodash2.valuesIn = valuesIn;
      lodash2.without = without;
      lodash2.words = words2;
      lodash2.wrap = wrap;
      lodash2.xor = xor;
      lodash2.xorBy = xorBy;
      lodash2.xorWith = xorWith;
      lodash2.zip = zip;
      lodash2.zipObject = zipObject;
      lodash2.zipObjectDeep = zipObjectDeep;
      lodash2.zipWith = zipWith;
      lodash2.entries = toPairs;
      lodash2.entriesIn = toPairsIn;
      lodash2.extend = assignIn;
      lodash2.extendWith = assignInWith2;
      mixin(lodash2, lodash2);
      lodash2.add = add;
      lodash2.attempt = attempt2;
      lodash2.camelCase = camelCase2;
      lodash2.capitalize = capitalize2;
      lodash2.ceil = ceil;
      lodash2.clamp = clamp;
      lodash2.clone = clone;
      lodash2.cloneDeep = cloneDeep;
      lodash2.cloneDeepWith = cloneDeepWith;
      lodash2.cloneWith = cloneWith;
      lodash2.conformsTo = conformsTo;
      lodash2.deburr = deburr2;
      lodash2.defaultTo = defaultTo;
      lodash2.divide = divide;
      lodash2.endsWith = endsWith2;
      lodash2.eq = eq2;
      lodash2.escape = escape2;
      lodash2.escapeRegExp = escapeRegExp2;
      lodash2.every = every;
      lodash2.find = find;
      lodash2.findIndex = findIndex;
      lodash2.findKey = findKey;
      lodash2.findLast = findLast;
      lodash2.findLastIndex = findLastIndex;
      lodash2.findLastKey = findLastKey;
      lodash2.floor = floor;
      lodash2.forEach = forEach;
      lodash2.forEachRight = forEachRight;
      lodash2.forIn = forIn;
      lodash2.forInRight = forInRight;
      lodash2.forOwn = forOwn;
      lodash2.forOwnRight = forOwnRight;
      lodash2.get = get;
      lodash2.gt = gt;
      lodash2.gte = gte;
      lodash2.has = has;
      lodash2.hasIn = hasIn;
      lodash2.head = head;
      lodash2.identity = identity2;
      lodash2.includes = includes;
      lodash2.indexOf = indexOf;
      lodash2.inRange = inRange;
      lodash2.invoke = invoke;
      lodash2.isArguments = isArguments2;
      lodash2.isArray = isArray2;
      lodash2.isArrayBuffer = isArrayBuffer;
      lodash2.isArrayLike = isArrayLike2;
      lodash2.isArrayLikeObject = isArrayLikeObject;
      lodash2.isBoolean = isBoolean2;
      lodash2.isBuffer = isBuffer2;
      lodash2.isDate = isDate;
      lodash2.isElement = isElement2;
      lodash2.isEmpty = isEmpty;
      lodash2.isEqual = isEqual;
      lodash2.isEqualWith = isEqualWith;
      lodash2.isError = isError2;
      lodash2.isFinite = isFinite;
      lodash2.isFunction = isFunction2;
      lodash2.isInteger = isInteger;
      lodash2.isLength = isLength2;
      lodash2.isMap = isMap;
      lodash2.isMatch = isMatch;
      lodash2.isMatchWith = isMatchWith;
      lodash2.isNaN = isNaN;
      lodash2.isNative = isNative;
      lodash2.isNil = isNil;
      lodash2.isNull = isNull;
      lodash2.isNumber = isNumber;
      lodash2.isObject = isObject2;
      lodash2.isObjectLike = isObjectLike2;
      lodash2.isPlainObject = isPlainObject2;
      lodash2.isRegExp = isRegExp2;
      lodash2.isSafeInteger = isSafeInteger;
      lodash2.isSet = isSet;
      lodash2.isString = isString;
      lodash2.isSymbol = isSymbol2;
      lodash2.isTypedArray = isTypedArray2;
      lodash2.isUndefined = isUndefined;
      lodash2.isWeakMap = isWeakMap;
      lodash2.isWeakSet = isWeakSet;
      lodash2.join = join;
      lodash2.kebabCase = kebabCase2;
      lodash2.last = last;
      lodash2.lastIndexOf = lastIndexOf;
      lodash2.lowerCase = lowerCase2;
      lodash2.lowerFirst = lowerFirst2;
      lodash2.lt = lt;
      lodash2.lte = lte;
      lodash2.max = max2;
      lodash2.maxBy = maxBy;
      lodash2.mean = mean;
      lodash2.meanBy = meanBy;
      lodash2.min = min2;
      lodash2.minBy = minBy;
      lodash2.stubArray = stubArray;
      lodash2.stubFalse = stubFalse2;
      lodash2.stubObject = stubObject;
      lodash2.stubString = stubString;
      lodash2.stubTrue = stubTrue;
      lodash2.multiply = multiply;
      lodash2.nth = nth;
      lodash2.noConflict = noConflict;
      lodash2.noop = noop;
      lodash2.now = now;
      lodash2.pad = pad2;
      lodash2.padEnd = padEnd2;
      lodash2.padStart = padStart2;
      lodash2.parseInt = parseInt2;
      lodash2.random = random;
      lodash2.reduce = reduce;
      lodash2.reduceRight = reduceRight;
      lodash2.repeat = repeat2;
      lodash2.replace = replace2;
      lodash2.result = result;
      lodash2.round = round2;
      lodash2.runInContext = runInContext2;
      lodash2.sample = sample;
      lodash2.size = size;
      lodash2.snakeCase = snakeCase2;
      lodash2.some = some;
      lodash2.sortedIndex = sortedIndex;
      lodash2.sortedIndexBy = sortedIndexBy;
      lodash2.sortedIndexOf = sortedIndexOf;
      lodash2.sortedLastIndex = sortedLastIndex;
      lodash2.sortedLastIndexBy = sortedLastIndexBy;
      lodash2.sortedLastIndexOf = sortedLastIndexOf;
      lodash2.startCase = startCase2;
      lodash2.startsWith = startsWith2;
      lodash2.subtract = subtract;
      lodash2.sum = sum;
      lodash2.sumBy = sumBy;
      lodash2.template = template2;
      lodash2.times = times;
      lodash2.toFinite = toFinite2;
      lodash2.toInteger = toInteger2;
      lodash2.toLength = toLength;
      lodash2.toLower = toLower2;
      lodash2.toNumber = toNumber2;
      lodash2.toSafeInteger = toSafeInteger;
      lodash2.toString = toString2;
      lodash2.toUpper = toUpper2;
      lodash2.trim = trim2;
      lodash2.trimEnd = trimEnd2;
      lodash2.trimStart = trimStart2;
      lodash2.truncate = truncate2;
      lodash2.unescape = unescape2;
      lodash2.uniqueId = uniqueId;
      lodash2.upperCase = upperCase2;
      lodash2.upperFirst = upperFirst2;
      lodash2.each = forEach;
      lodash2.eachRight = forEachRight;
      lodash2.first = head;
      mixin(lodash2, function() {
        var source2 = {};
        baseForOwn(lodash2, function(func, methodName) {
          if (!hasOwnProperty2.call(lodash2.prototype, methodName)) {
            source2[methodName] = func;
          }
        });
        return source2;
      }(), { "chain": false });
      lodash2.VERSION = VERSION;
      arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
        lodash2[methodName].placeholder = lodash2;
      });
      arrayEach(["drop", "take"], function(methodName, index) {
        LazyWrapper.prototype[methodName] = function(n) {
          n = n === undefined$1 ? 1 : nativeMax2(toInteger2(n), 0);
          var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
          if (result2.__filtered__) {
            result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
          } else {
            result2.__views__.push({
              "size": nativeMin(n, MAX_ARRAY_LENGTH2),
              "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
            });
          }
          return result2;
        };
        LazyWrapper.prototype[methodName + "Right"] = function(n) {
          return this.reverse()[methodName](n).reverse();
        };
      });
      arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
        var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
        LazyWrapper.prototype[methodName] = function(iteratee2) {
          var result2 = this.clone();
          result2.__iteratees__.push({
            "iteratee": getIteratee(iteratee2, 3),
            "type": type
          });
          result2.__filtered__ = result2.__filtered__ || isFilter;
          return result2;
        };
      });
      arrayEach(["head", "last"], function(methodName, index) {
        var takeName = "take" + (index ? "Right" : "");
        LazyWrapper.prototype[methodName] = function() {
          return this[takeName](1).value()[0];
        };
      });
      arrayEach(["initial", "tail"], function(methodName, index) {
        var dropName = "drop" + (index ? "" : "Right");
        LazyWrapper.prototype[methodName] = function() {
          return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
        };
      });
      LazyWrapper.prototype.compact = function() {
        return this.filter(identity2);
      };
      LazyWrapper.prototype.find = function(predicate) {
        return this.filter(predicate).head();
      };
      LazyWrapper.prototype.findLast = function(predicate) {
        return this.reverse().find(predicate);
      };
      LazyWrapper.prototype.invokeMap = baseRest2(function(path, args) {
        if (typeof path == "function") {
          return new LazyWrapper(this);
        }
        return this.map(function(value) {
          return baseInvoke(value, path, args);
        });
      });
      LazyWrapper.prototype.reject = function(predicate) {
        return this.filter(negate(getIteratee(predicate)));
      };
      LazyWrapper.prototype.slice = function(start2, end2) {
        start2 = toInteger2(start2);
        var result2 = this;
        if (result2.__filtered__ && (start2 > 0 || end2 < 0)) {
          return new LazyWrapper(result2);
        }
        if (start2 < 0) {
          result2 = result2.takeRight(-start2);
        } else if (start2) {
          result2 = result2.drop(start2);
        }
        if (end2 !== undefined$1) {
          end2 = toInteger2(end2);
          result2 = end2 < 0 ? result2.dropRight(-end2) : result2.take(end2 - start2);
        }
        return result2;
      };
      LazyWrapper.prototype.takeRightWhile = function(predicate) {
        return this.reverse().takeWhile(predicate).reverse();
      };
      LazyWrapper.prototype.toArray = function() {
        return this.take(MAX_ARRAY_LENGTH2);
      };
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
        if (!lodashFunc) {
          return;
        }
        lodash2.prototype[methodName] = function() {
          var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray2(value);
          var interceptor = function(value2) {
            var result3 = lodashFunc.apply(lodash2, arrayPush([value2], args));
            return isTaker && chainAll ? result3[0] : result3;
          };
          if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
            isLazy = useLazy = false;
          }
          var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
          if (!retUnwrapped && useLazy) {
            value = onlyLazy ? value : new LazyWrapper(this);
            var result2 = func.apply(value, args);
            result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
            return new LodashWrapper(result2, chainAll);
          }
          if (isUnwrapped && onlyLazy) {
            return func.apply(this, args);
          }
          result2 = this.thru(interceptor);
          return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
        };
      });
      arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
        var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
        lodash2.prototype[methodName] = function() {
          var args = arguments;
          if (retUnwrapped && !this.__chain__) {
            var value = this.value();
            return func.apply(isArray2(value) ? value : [], args);
          }
          return this[chainName](function(value2) {
            return func.apply(isArray2(value2) ? value2 : [], args);
          });
        };
      });
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var lodashFunc = lodash2[methodName];
        if (lodashFunc) {
          var key = lodashFunc.name + "";
          if (!hasOwnProperty2.call(realNames, key)) {
            realNames[key] = [];
          }
          realNames[key].push({ "name": methodName, "func": lodashFunc });
        }
      });
      realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
        "name": "wrapper",
        "func": undefined$1
      }];
      LazyWrapper.prototype.clone = lazyClone;
      LazyWrapper.prototype.reverse = lazyReverse;
      LazyWrapper.prototype.value = lazyValue;
      lodash2.prototype.at = wrapperAt;
      lodash2.prototype.chain = wrapperChain;
      lodash2.prototype.commit = wrapperCommit;
      lodash2.prototype.next = wrapperNext;
      lodash2.prototype.plant = wrapperPlant;
      lodash2.prototype.reverse = wrapperReverse;
      lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
      lodash2.prototype.first = lodash2.prototype.head;
      if (symIterator) {
        lodash2.prototype[symIterator] = wrapperToIterator;
      }
      return lodash2;
    };
    var _ = runInContext();
    if (freeModule) {
      (freeModule.exports = _)._ = _;
      freeExports._ = _;
    } else {
      root2._ = _;
    }
  }).call(commonjsGlobal);
})(lodash, lodash.exports);
const collapseTransitionEnd = (e, showing, dim = "height") => {
  e.target.classList.remove("collapsing");
  e.target.classList.add("collapse");
  if (showing) {
    e.target.classList.add("show");
  } else {
    e.target.classList.remove("show");
  }
  e.target.style[dim] = "";
};
const toggleCollapse = (container, shown, dim = "height") => {
  container.style.height = "auto";
  let dimension = container[dim === "height" ? "clientHeight" : "clientWidth"] + "px";
  if (shown) {
    container.classList.add("collapsing");
    container.style[dim] = "0px";
    setTimeout(() => container.style[dim] = dimension, 0);
  } else {
    container.style[dim] = dimension;
    container.classList.add("collapsing");
    setTimeout(() => container.style[dim] = "0px", 0);
  }
};
const isObject$7 = (obj) => typeof obj === "object" && !Array.isArray(obj);
const title = (str) => lodash.exports.startCase(lodash.exports.toLower(str));
const _sfc_main$Q = {
  name: "Collapse",
  components: { Button },
  props: {
    toggleText: {
      default: null
    },
    toggleClass: make([Array, String], null),
    toggleVariant: makeString("secondary"),
    modelValue: makeBoolean(false),
    visible: makeBoolean(false),
    class: make([Array, String], null),
    id: makeString(),
    isNav: makeBoolean(false)
  },
  watch: {
    modelValue(value) {
      this.shown = value;
    },
    shown(value) {
      this.$refs.collapse.classList.remove("collapse", "show");
      this.toggleCollapse(this.$refs.collapse, value, "height");
    }
  },
  setup(props, context) {
    const shouldRender = ref(true);
    const shown = ref(props.modelValue);
    if (props.visible) {
      context.emit("update:modelValue", true);
    }
    const classes = computed(() => {
      return [
        "collapse",
        props.class,
        {
          "navbar-collapse": props.isNav
        }
      ];
    });
    return {
      classes,
      shown,
      shouldRender,
      toggleCollapse,
      collapseTransitionEnd,
      updateState: (value) => {
        shown.value = value;
        context.emit("update:modelValue", value);
      }
    };
  },
  methods: {
    listener(e) {
      if (e.detail === this.id && this.id) {
        let value = !this.shown;
        this.shown = value;
        this.$emit("update:modelValue", value);
      }
    }
  },
  mounted() {
    document.addEventListener("toggleCollapse", this.listener);
  },
  unmounted() {
    document.removeEventListener("toggleCollapse", this.listener);
  }
};
const _hoisted_1$i = ["id"];
function _sfc_render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.$slots.toggleText || $props.toggleText ? (openBlock(), createBlock(_component_Button, {
      key: 0,
      ref: "toggle",
      variant: $props.toggleVariant,
      "aria-expanded": $setup.shown,
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.updateState(!$setup.shown))
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "toggleText", {}, () => [
          createTextVNode(toDisplayString($props.toggleText), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "aria-expanded"])) : createCommentVNode("", true),
    createElementVNode("div", {
      class: normalizeClass($setup.classes),
      ref: "collapse",
      id: $props.id,
      onTransitionend: _cache[1] || (_cache[1] = withModifiers(($event) => $setup.collapseTransitionEnd($event, $setup.shown, "height"), ["self"]))
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 42, _hoisted_1$i)
  ], 64);
}
var Collapse = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$Q]]);
const _sfc_main$P = {
  name: "Container",
  props: {
    tag: makeString("div"),
    fluid: makeBoolean(false)
  },
  setup(props) {
    const classes = reactive({
      "container": !props.fluid,
      "container-fluid": props.fluid
    });
    return {
      classes
    };
  }
};
function _sfc_render$P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($setup.classes)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var Container = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$P]]);
var tableProps = {
  responsive: make([String, Boolean], false),
  variant: makeString(null),
  striped: makeBoolean(false),
  hover: makeBoolean(false),
  active: makeBoolean(false),
  bordered: makeBoolean(false),
  borderVariant: makeString(null),
  borderless: makeBoolean(false),
  small: makeBoolean(false),
  align: makeString(null),
  caption: makeString(null),
  captionTop: makeBoolean(false)
};
const _sfc_main$O = defineComponent({
  name: "Table",
  props: tableProps,
  setup(props) {
    props = reactive(props);
    const classes = computed(() => {
      return [
        "table",
        {
          ["table-" + props.variant]: props.variant,
          "table-striped": props.striped,
          "table-hover": props.hover,
          "table-active": props.active,
          "table-bordered": props.bordered,
          ["border-" + props.borderVariant]: !!props.borderVariant,
          "table-borderless": props.borderless,
          "table-sm": props.small,
          ["align-" + props.align]: !!props.align,
          "caption-top": props.captionTop
        }
      ];
    });
    const wrapperClass = computed(() => {
      return {
        "table-responsive": typeof props.responsive === "boolean" && props.responsive,
        ["table-responsive-" + props.responsive]: typeof props.responsive === "string" && props.responsive
      };
    });
    return {
      classes,
      wrapperClass
    };
  }
});
const _hoisted_1$h = { key: 0 };
const _hoisted_2$8 = { key: 0 };
function _sfc_render$O(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.responsive ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(_ctx.wrapperClass)
  }, [
    createElementVNode("table", {
      class: normalizeClass(_ctx.classes)
    }, [
      _ctx.$slots.caption || _ctx.caption ? (openBlock(), createElementBlock("caption", _hoisted_1$h, [
        renderSlot(_ctx.$slots, "caption", {}, () => [
          createTextVNode(toDisplayString(_ctx.caption), 1)
        ])
      ])) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "default")
    ], 2)
  ], 2)) : (openBlock(), createElementBlock("table", {
    key: 1,
    class: normalizeClass(_ctx.classes)
  }, [
    _ctx.$slots.caption || _ctx.caption ? (openBlock(), createElementBlock("caption", _hoisted_2$8, [
      renderSlot(_ctx.$slots, "caption", {}, () => [
        createTextVNode(toDisplayString(_ctx.caption), 1)
      ])
    ])) : createCommentVNode("", true),
    renderSlot(_ctx.$slots, "default")
  ], 2));
}
var Table = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$O]]);
const _sfc_main$N = {
  name: "THead",
  props: {
    variant: makeString(null),
    active: makeBoolean(false),
    align: makeString(null)
  },
  setup(props) {
    const classes = computed(() => {
      return [
        {
          ["table-" + props.variant]: props.variant,
          "table-active": props.active,
          ["align-" + props.align]: !!props.align
        }
      ];
    });
    return {
      classes
    };
  }
};
function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("thead", {
    class: normalizeClass($setup.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var THead = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$N]]);
const _sfc_main$M = {
  name: "Th",
  props: {
    variant: makeString(null),
    active: makeBoolean(false),
    align: makeString(null)
  },
  setup(props) {
    const classes = computed(() => {
      return [
        {
          ["table-" + props.variant]: props.variant,
          "table-active": props.active,
          ["align-" + props.align]: !!props.align
        }
      ];
    });
    return {
      classes
    };
  }
};
function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("th", {
    class: normalizeClass($setup.classes),
    scope: "col"
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Th = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$M]]);
const _sfc_main$L = {
  name: "TBody",
  props: {
    variant: makeString(null),
    active: makeBoolean(false),
    align: makeString(null)
  },
  setup(props) {
    const classes = computed(() => {
      return [
        {
          ["table-" + props.variant]: props.variant,
          "table-active": props.active,
          ["align-" + props.align]: !!props.align
        }
      ];
    });
    return {
      classes
    };
  }
};
function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("tbody", {
    class: normalizeClass($setup.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var TBody = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$L]]);
const _sfc_main$K = {
  name: "Tr",
  props: {
    variant: makeString(null),
    active: makeBoolean(false),
    align: makeString(null)
  },
  setup(props) {
    const classes = computed(() => {
      return [
        {
          ["table-" + props.variant]: props.variant,
          "table-active": props.active,
          ["align-" + props.align]: !!props.align
        }
      ];
    });
    return {
      classes
    };
  }
};
function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("tr", {
    class: normalizeClass($setup.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Tr = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$K]]);
const _sfc_main$J = {
  name: "Td",
  props: {
    variant: makeString(null),
    active: makeBoolean(false),
    align: makeString(null)
  },
  setup(props) {
    const classes = computed(() => {
      return [
        {
          ["table-" + props.variant]: props.variant,
          "table-active": props.active,
          ["align-" + props.align]: !!props.align
        }
      ];
    });
    return {
      classes
    };
  }
};
function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("td", {
    class: normalizeClass($setup.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Td = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$J]]);
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$3 = freeGlobal || freeSelf || Function("return this")();
var _root = root$3;
var root$2 = _root;
var Symbol$4 = root$2.Symbol;
var _Symbol = Symbol$4;
function arrayMap$2(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var _arrayMap = arrayMap$2;
var isArray$2 = Array.isArray;
var isArray_1 = isArray$2;
var Symbol$3 = _Symbol;
var objectProto$b = Object.prototype;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
var nativeObjectToString$1 = objectProto$b.toString;
var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$9.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$a = Object.prototype;
var nativeObjectToString = objectProto$a.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$2 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag$7(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$7;
function isObjectLike$7(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$7;
var baseGetTag$6 = _baseGetTag, isObjectLike$6 = isObjectLike_1;
var symbolTag = "[object Symbol]";
function isSymbol$2(value) {
  return typeof value == "symbol" || isObjectLike$6(value) && baseGetTag$6(value) == symbolTag;
}
var isSymbol_1 = isSymbol$2;
var Symbol$1 = _Symbol, arrayMap$1 = _arrayMap, isArray$1 = isArray_1, isSymbol$1 = isSymbol_1;
var INFINITY$1 = 1 / 0;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString$9(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap$1(value, baseToString$9) + "";
  }
  if (isSymbol$1(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _baseToString = baseToString$9;
var baseToString$8 = _baseToString;
function toString$n(value) {
  return value == null ? "" : baseToString$8(value);
}
var toString_1 = toString$n;
function baseSlice$1(array, start2, end2) {
  var index = -1, length = array.length;
  if (start2 < 0) {
    start2 = -start2 > length ? 0 : length + start2;
  }
  end2 = end2 > length ? length : end2;
  if (end2 < 0) {
    end2 += length;
  }
  length = start2 > end2 ? 0 : end2 - start2 >>> 0;
  start2 >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start2];
  }
  return result;
}
var _baseSlice = baseSlice$1;
var baseSlice = _baseSlice;
function castSlice$7(array, start2, end2) {
  var length = array.length;
  end2 = end2 === void 0 ? length : end2;
  return !start2 && end2 >= length ? array : baseSlice(array, start2, end2);
}
var _castSlice = castSlice$7;
var rsAstralRange$3 = "\\ud800-\\udfff", rsComboMarksRange$4 = "\\u0300-\\u036f", reComboHalfMarksRange$4 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$4 = "\\u20d0-\\u20ff", rsComboRange$4 = rsComboMarksRange$4 + reComboHalfMarksRange$4 + rsComboSymbolsRange$4, rsVarRange$3 = "\\ufe0e\\ufe0f";
var rsZWJ$3 = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ$3 + rsAstralRange$3 + rsComboRange$4 + rsVarRange$3 + "]");
function hasUnicode$6(string2) {
  return reHasUnicode.test(string2);
}
var _hasUnicode = hasUnicode$6;
function asciiToArray$1(string2) {
  return string2.split("");
}
var _asciiToArray = asciiToArray$1;
var rsAstralRange$2 = "\\ud800-\\udfff", rsComboMarksRange$3 = "\\u0300-\\u036f", reComboHalfMarksRange$3 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$3 = "\\u20d0-\\u20ff", rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3, rsVarRange$2 = "\\ufe0e\\ufe0f";
var rsAstral$1 = "[" + rsAstralRange$2 + "]", rsCombo$3 = "[" + rsComboRange$3 + "]", rsFitz$2 = "\\ud83c[\\udffb-\\udfff]", rsModifier$2 = "(?:" + rsCombo$3 + "|" + rsFitz$2 + ")", rsNonAstral$2 = "[^" + rsAstralRange$2 + "]", rsRegional$2 = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair$2 = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ$2 = "\\u200d";
var reOptMod$2 = rsModifier$2 + "?", rsOptVar$2 = "[" + rsVarRange$2 + "]?", rsOptJoin$2 = "(?:" + rsZWJ$2 + "(?:" + [rsNonAstral$2, rsRegional$2, rsSurrPair$2].join("|") + ")" + rsOptVar$2 + reOptMod$2 + ")*", rsSeq$2 = rsOptVar$2 + reOptMod$2 + rsOptJoin$2, rsSymbol$1 = "(?:" + [rsNonAstral$2 + rsCombo$3 + "?", rsCombo$3, rsRegional$2, rsSurrPair$2, rsAstral$1].join("|") + ")";
var reUnicode$1 = RegExp(rsFitz$2 + "(?=" + rsFitz$2 + ")|" + rsSymbol$1 + rsSeq$2, "g");
function unicodeToArray$1(string2) {
  return string2.match(reUnicode$1) || [];
}
var _unicodeToArray = unicodeToArray$1;
var asciiToArray = _asciiToArray, hasUnicode$5 = _hasUnicode, unicodeToArray = _unicodeToArray;
function stringToArray$7(string2) {
  return hasUnicode$5(string2) ? unicodeToArray(string2) : asciiToArray(string2);
}
var _stringToArray = stringToArray$7;
var castSlice$6 = _castSlice, hasUnicode$4 = _hasUnicode, stringToArray$6 = _stringToArray, toString$m = toString_1;
function createCaseFirst$2(methodName) {
  return function(string2) {
    string2 = toString$m(string2);
    var strSymbols = hasUnicode$4(string2) ? stringToArray$6(string2) : void 0;
    var chr = strSymbols ? strSymbols[0] : string2.charAt(0);
    var trailing = strSymbols ? castSlice$6(strSymbols, 1).join("") : string2.slice(1);
    return chr[methodName]() + trailing;
  };
}
var _createCaseFirst = createCaseFirst$2;
var createCaseFirst$1 = _createCaseFirst;
var upperFirst$2 = createCaseFirst$1("toUpperCase");
var upperFirst_1 = upperFirst$2;
var toString$l = toString_1, upperFirst$1 = upperFirst_1;
function capitalize$1(string2) {
  return upperFirst$1(toString$l(string2).toLowerCase());
}
var capitalize_1 = capitalize$1;
function arrayReduce$1(array, iteratee, accumulator, initAccum) {
  var index = -1, length = array == null ? 0 : array.length;
  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}
var _arrayReduce = arrayReduce$1;
function basePropertyOf$3(object) {
  return function(key) {
    return object == null ? void 0 : object[key];
  };
}
var _basePropertyOf = basePropertyOf$3;
var basePropertyOf$2 = _basePropertyOf;
var deburredLetters = {
  "\xC0": "A",
  "\xC1": "A",
  "\xC2": "A",
  "\xC3": "A",
  "\xC4": "A",
  "\xC5": "A",
  "\xE0": "a",
  "\xE1": "a",
  "\xE2": "a",
  "\xE3": "a",
  "\xE4": "a",
  "\xE5": "a",
  "\xC7": "C",
  "\xE7": "c",
  "\xD0": "D",
  "\xF0": "d",
  "\xC8": "E",
  "\xC9": "E",
  "\xCA": "E",
  "\xCB": "E",
  "\xE8": "e",
  "\xE9": "e",
  "\xEA": "e",
  "\xEB": "e",
  "\xCC": "I",
  "\xCD": "I",
  "\xCE": "I",
  "\xCF": "I",
  "\xEC": "i",
  "\xED": "i",
  "\xEE": "i",
  "\xEF": "i",
  "\xD1": "N",
  "\xF1": "n",
  "\xD2": "O",
  "\xD3": "O",
  "\xD4": "O",
  "\xD5": "O",
  "\xD6": "O",
  "\xD8": "O",
  "\xF2": "o",
  "\xF3": "o",
  "\xF4": "o",
  "\xF5": "o",
  "\xF6": "o",
  "\xF8": "o",
  "\xD9": "U",
  "\xDA": "U",
  "\xDB": "U",
  "\xDC": "U",
  "\xF9": "u",
  "\xFA": "u",
  "\xFB": "u",
  "\xFC": "u",
  "\xDD": "Y",
  "\xFD": "y",
  "\xFF": "y",
  "\xC6": "Ae",
  "\xE6": "ae",
  "\xDE": "Th",
  "\xFE": "th",
  "\xDF": "ss",
  "\u0100": "A",
  "\u0102": "A",
  "\u0104": "A",
  "\u0101": "a",
  "\u0103": "a",
  "\u0105": "a",
  "\u0106": "C",
  "\u0108": "C",
  "\u010A": "C",
  "\u010C": "C",
  "\u0107": "c",
  "\u0109": "c",
  "\u010B": "c",
  "\u010D": "c",
  "\u010E": "D",
  "\u0110": "D",
  "\u010F": "d",
  "\u0111": "d",
  "\u0112": "E",
  "\u0114": "E",
  "\u0116": "E",
  "\u0118": "E",
  "\u011A": "E",
  "\u0113": "e",
  "\u0115": "e",
  "\u0117": "e",
  "\u0119": "e",
  "\u011B": "e",
  "\u011C": "G",
  "\u011E": "G",
  "\u0120": "G",
  "\u0122": "G",
  "\u011D": "g",
  "\u011F": "g",
  "\u0121": "g",
  "\u0123": "g",
  "\u0124": "H",
  "\u0126": "H",
  "\u0125": "h",
  "\u0127": "h",
  "\u0128": "I",
  "\u012A": "I",
  "\u012C": "I",
  "\u012E": "I",
  "\u0130": "I",
  "\u0129": "i",
  "\u012B": "i",
  "\u012D": "i",
  "\u012F": "i",
  "\u0131": "i",
  "\u0134": "J",
  "\u0135": "j",
  "\u0136": "K",
  "\u0137": "k",
  "\u0138": "k",
  "\u0139": "L",
  "\u013B": "L",
  "\u013D": "L",
  "\u013F": "L",
  "\u0141": "L",
  "\u013A": "l",
  "\u013C": "l",
  "\u013E": "l",
  "\u0140": "l",
  "\u0142": "l",
  "\u0143": "N",
  "\u0145": "N",
  "\u0147": "N",
  "\u014A": "N",
  "\u0144": "n",
  "\u0146": "n",
  "\u0148": "n",
  "\u014B": "n",
  "\u014C": "O",
  "\u014E": "O",
  "\u0150": "O",
  "\u014D": "o",
  "\u014F": "o",
  "\u0151": "o",
  "\u0154": "R",
  "\u0156": "R",
  "\u0158": "R",
  "\u0155": "r",
  "\u0157": "r",
  "\u0159": "r",
  "\u015A": "S",
  "\u015C": "S",
  "\u015E": "S",
  "\u0160": "S",
  "\u015B": "s",
  "\u015D": "s",
  "\u015F": "s",
  "\u0161": "s",
  "\u0162": "T",
  "\u0164": "T",
  "\u0166": "T",
  "\u0163": "t",
  "\u0165": "t",
  "\u0167": "t",
  "\u0168": "U",
  "\u016A": "U",
  "\u016C": "U",
  "\u016E": "U",
  "\u0170": "U",
  "\u0172": "U",
  "\u0169": "u",
  "\u016B": "u",
  "\u016D": "u",
  "\u016F": "u",
  "\u0171": "u",
  "\u0173": "u",
  "\u0174": "W",
  "\u0175": "w",
  "\u0176": "Y",
  "\u0177": "y",
  "\u0178": "Y",
  "\u0179": "Z",
  "\u017B": "Z",
  "\u017D": "Z",
  "\u017A": "z",
  "\u017C": "z",
  "\u017E": "z",
  "\u0132": "IJ",
  "\u0133": "ij",
  "\u0152": "Oe",
  "\u0153": "oe",
  "\u0149": "'n",
  "\u017F": "s"
};
var deburrLetter$1 = basePropertyOf$2(deburredLetters);
var _deburrLetter = deburrLetter$1;
var deburrLetter = _deburrLetter, toString$k = toString_1;
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var rsComboMarksRange$2 = "\\u0300-\\u036f", reComboHalfMarksRange$2 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$2 = "\\u20d0-\\u20ff", rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2;
var rsCombo$2 = "[" + rsComboRange$2 + "]";
var reComboMark = RegExp(rsCombo$2, "g");
function deburr$1(string2) {
  string2 = toString$k(string2);
  return string2 && string2.replace(reLatin, deburrLetter).replace(reComboMark, "");
}
var deburr_1 = deburr$1;
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function asciiWords$1(string2) {
  return string2.match(reAsciiWord) || [];
}
var _asciiWords = asciiWords$1;
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function hasUnicodeWord$1(string2) {
  return reHasUnicodeWord.test(string2);
}
var _hasUnicodeWord = hasUnicodeWord$1;
var rsAstralRange$1 = "\\ud800-\\udfff", rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange$1 = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos$1 = "['\u2019]", rsBreak = "[" + rsBreakRange + "]", rsCombo$1 = "[" + rsComboRange$1 + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange$1 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz$1 = "\\ud83c[\\udffb-\\udfff]", rsModifier$1 = "(?:" + rsCombo$1 + "|" + rsFitz$1 + ")", rsNonAstral$1 = "[^" + rsAstralRange$1 + "]", rsRegional$1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair$1 = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ$1 = "\\u200d";
var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos$1 + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos$1 + "(?:D|LL|M|RE|S|T|VE))?", reOptMod$1 = rsModifier$1 + "?", rsOptVar$1 = "[" + rsVarRange$1 + "]?", rsOptJoin$1 = "(?:" + rsZWJ$1 + "(?:" + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join("|") + ")" + rsOptVar$1 + reOptMod$1 + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1, rsEmoji = "(?:" + [rsDingbat, rsRegional$1, rsSurrPair$1].join("|") + ")" + rsSeq$1;
var reUnicodeWord = RegExp([
  rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
  rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
  rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
  rsUpper + "+" + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join("|"), "g");
function unicodeWords$1(string2) {
  return string2.match(reUnicodeWord) || [];
}
var _unicodeWords = unicodeWords$1;
var asciiWords = _asciiWords, hasUnicodeWord = _hasUnicodeWord, toString$j = toString_1, unicodeWords = _unicodeWords;
function words$1(string2, pattern, guard) {
  string2 = toString$j(string2);
  pattern = guard ? void 0 : pattern;
  if (pattern === void 0) {
    return hasUnicodeWord(string2) ? unicodeWords(string2) : asciiWords(string2);
  }
  return string2.match(pattern) || [];
}
var words_1 = words$1;
var arrayReduce = _arrayReduce, deburr = deburr_1, words = words_1;
var rsApos = "['\u2019]";
var reApos = RegExp(rsApos, "g");
function createCompounder$6(callback) {
  return function(string2) {
    return arrayReduce(words(deburr(string2).replace(reApos, "")), callback, "");
  };
}
var _createCompounder = createCompounder$6;
var capitalize = capitalize_1, createCompounder$5 = _createCompounder;
var camelCase = createCompounder$5(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});
var camelCase_1 = camelCase;
function baseClamp$2(number, lower, upper) {
  if (number === number) {
    if (upper !== void 0) {
      number = number <= upper ? number : upper;
    }
    if (lower !== void 0) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}
var _baseClamp = baseClamp$2;
var reWhitespace = /\s/;
function trimmedEndIndex$2(string2) {
  var index = string2.length;
  while (index-- && reWhitespace.test(string2.charAt(index))) {
  }
  return index;
}
var _trimmedEndIndex = trimmedEndIndex$2;
var trimmedEndIndex$1 = _trimmedEndIndex;
var reTrimStart$2 = /^\s+/;
function baseTrim$2(string2) {
  return string2 ? string2.slice(0, trimmedEndIndex$1(string2) + 1).replace(reTrimStart$2, "") : string2;
}
var _baseTrim = baseTrim$2;
function isObject$6(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$6;
var baseTrim$1 = _baseTrim, isObject$5 = isObject_1, isSymbol = isSymbol_1;
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$5(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$5(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim$1(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$1;
var toNumber = toNumber_1;
var INFINITY = 1 / 0, MAX_INTEGER = 17976931348623157e292;
function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_1 = toFinite$1;
var toFinite = toFinite_1;
function toInteger$7(value) {
  var result = toFinite(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
var toInteger_1 = toInteger$7;
var baseClamp$1 = _baseClamp, baseToString$7 = _baseToString, toInteger$6 = toInteger_1, toString$i = toString_1;
function endsWith(string2, target, position) {
  string2 = toString$i(string2);
  target = baseToString$7(target);
  var length = string2.length;
  position = position === void 0 ? length : baseClamp$1(toInteger$6(position), 0, length);
  var end2 = position;
  position -= target.length;
  return position >= 0 && string2.slice(position, end2) == target;
}
var endsWith_1 = endsWith;
var basePropertyOf$1 = _basePropertyOf;
var htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var escapeHtmlChar$1 = basePropertyOf$1(htmlEscapes);
var _escapeHtmlChar = escapeHtmlChar$1;
var escapeHtmlChar = _escapeHtmlChar, toString$h = toString_1;
var reUnescapedHtml = /[&<>"']/g, reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
function escape$2(string2) {
  string2 = toString$h(string2);
  return string2 && reHasUnescapedHtml.test(string2) ? string2.replace(reUnescapedHtml, escapeHtmlChar) : string2;
}
var _escape = escape$2;
var toString$g = toString_1;
var reRegExpChar$1 = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar$1.source);
function escapeRegExp(string2) {
  string2 = toString$g(string2);
  return string2 && reHasRegExpChar.test(string2) ? string2.replace(reRegExpChar$1, "\\$&") : string2;
}
var escapeRegExp_1 = escapeRegExp;
var createCompounder$4 = _createCompounder;
var kebabCase = createCompounder$4(function(result, word, index) {
  return result + (index ? "-" : "") + word.toLowerCase();
});
var kebabCase_1 = kebabCase;
var createCompounder$3 = _createCompounder;
var lowerCase = createCompounder$3(function(result, word, index) {
  return result + (index ? " " : "") + word.toLowerCase();
});
var lowerCase_1 = lowerCase;
var createCaseFirst = _createCaseFirst;
var lowerFirst = createCaseFirst("toLowerCase");
var lowerFirst_1 = lowerFirst;
var MAX_SAFE_INTEGER$2 = 9007199254740991;
var nativeFloor$1 = Math.floor;
function baseRepeat$2(string2, n) {
  var result = "";
  if (!string2 || n < 1 || n > MAX_SAFE_INTEGER$2) {
    return result;
  }
  do {
    if (n % 2) {
      result += string2;
    }
    n = nativeFloor$1(n / 2);
    if (n) {
      string2 += string2;
    }
  } while (n);
  return result;
}
var _baseRepeat = baseRepeat$2;
function baseProperty$1(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var _baseProperty = baseProperty$1;
var baseProperty = _baseProperty;
var asciiSize$1 = baseProperty("length");
var _asciiSize = asciiSize$1;
var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d";
var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeSize$1(string2) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string2)) {
    ++result;
  }
  return result;
}
var _unicodeSize = unicodeSize$1;
var asciiSize = _asciiSize, hasUnicode$3 = _hasUnicode, unicodeSize = _unicodeSize;
function stringSize$5(string2) {
  return hasUnicode$3(string2) ? unicodeSize(string2) : asciiSize(string2);
}
var _stringSize = stringSize$5;
var baseRepeat$1 = _baseRepeat, baseToString$6 = _baseToString, castSlice$5 = _castSlice, hasUnicode$2 = _hasUnicode, stringSize$4 = _stringSize, stringToArray$5 = _stringToArray;
var nativeCeil$1 = Math.ceil;
function createPadding$3(length, chars) {
  chars = chars === void 0 ? " " : baseToString$6(chars);
  var charsLength = chars.length;
  if (charsLength < 2) {
    return charsLength ? baseRepeat$1(chars, length) : chars;
  }
  var result = baseRepeat$1(chars, nativeCeil$1(length / stringSize$4(chars)));
  return hasUnicode$2(chars) ? castSlice$5(stringToArray$5(result), 0, length).join("") : result.slice(0, length);
}
var _createPadding = createPadding$3;
var createPadding$2 = _createPadding, stringSize$3 = _stringSize, toInteger$5 = toInteger_1, toString$f = toString_1;
var nativeCeil = Math.ceil, nativeFloor = Math.floor;
function pad(string2, length, chars) {
  string2 = toString$f(string2);
  length = toInteger$5(length);
  var strLength = length ? stringSize$3(string2) : 0;
  if (!length || strLength >= length) {
    return string2;
  }
  var mid = (length - strLength) / 2;
  return createPadding$2(nativeFloor(mid), chars) + string2 + createPadding$2(nativeCeil(mid), chars);
}
var pad_1 = pad;
var createPadding$1 = _createPadding, stringSize$2 = _stringSize, toInteger$4 = toInteger_1, toString$e = toString_1;
function padEnd(string2, length, chars) {
  string2 = toString$e(string2);
  length = toInteger$4(length);
  var strLength = length ? stringSize$2(string2) : 0;
  return length && strLength < length ? string2 + createPadding$1(length - strLength, chars) : string2;
}
var padEnd_1 = padEnd;
var createPadding = _createPadding, stringSize$1 = _stringSize, toInteger$3 = toInteger_1, toString$d = toString_1;
function padStart(string2, length, chars) {
  string2 = toString$d(string2);
  length = toInteger$3(length);
  var strLength = length ? stringSize$1(string2) : 0;
  return length && strLength < length ? createPadding(length - strLength, chars) + string2 : string2;
}
var padStart_1 = padStart;
var root$1 = _root, toString$c = toString_1;
var reTrimStart$1 = /^\s+/;
var nativeParseInt = root$1.parseInt;
function parseInt$1(string2, radix, guard) {
  if (guard || radix == null) {
    radix = 0;
  } else if (radix) {
    radix = +radix;
  }
  return nativeParseInt(toString$c(string2).replace(reTrimStart$1, ""), radix || 0);
}
var _parseInt = parseInt$1;
function eq$3(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$3;
var baseGetTag$5 = _baseGetTag, isObject$4 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$2(value) {
  if (!isObject$4(value)) {
    return false;
  }
  var tag = baseGetTag$5(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$2;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength$2(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
var isLength_1 = isLength$2;
var isFunction$1 = isFunction_1, isLength$1 = isLength_1;
function isArrayLike$3(value) {
  return value != null && isLength$1(value.length) && !isFunction$1(value);
}
var isArrayLike_1 = isArrayLike$3;
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$2(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$2;
var eq$2 = eq_1, isArrayLike$2 = isArrayLike_1, isIndex$1 = _isIndex, isObject$3 = isObject_1;
function isIterateeCall$4(value, index, object) {
  if (!isObject$3(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike$2(object) && isIndex$1(index, object.length) : type == "string" && index in object) {
    return eq$2(object[index], value);
  }
  return false;
}
var _isIterateeCall = isIterateeCall$4;
var baseRepeat = _baseRepeat, isIterateeCall$3 = _isIterateeCall, toInteger$2 = toInteger_1, toString$b = toString_1;
function repeat(string2, n, guard) {
  if (guard ? isIterateeCall$3(string2, n, guard) : n === void 0) {
    n = 1;
  } else {
    n = toInteger$2(n);
  }
  return baseRepeat(toString$b(string2), n);
}
var repeat_1 = repeat;
var toString$a = toString_1;
function replace() {
  var args = arguments, string2 = toString$a(args[0]);
  return args.length < 3 ? string2 : string2.replace(args[1], args[2]);
}
var replace_1 = replace;
var createCompounder$2 = _createCompounder;
var snakeCase = createCompounder$2(function(result, word, index) {
  return result + (index ? "_" : "") + word.toLowerCase();
});
var snakeCase_1 = snakeCase;
var baseGetTag$4 = _baseGetTag, isObjectLike$5 = isObjectLike_1;
var regexpTag$1 = "[object RegExp]";
function baseIsRegExp$1(value) {
  return isObjectLike$5(value) && baseGetTag$4(value) == regexpTag$1;
}
var _baseIsRegExp = baseIsRegExp$1;
function baseUnary$2(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$2;
var _nodeUtil = { exports: {} };
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsRegExp = _baseIsRegExp, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtil.exports;
var nodeIsRegExp = nodeUtil$1 && nodeUtil$1.isRegExp;
var isRegExp$2 = nodeIsRegExp ? baseUnary$1(nodeIsRegExp) : baseIsRegExp;
var isRegExp_1 = isRegExp$2;
var baseToString$5 = _baseToString, castSlice$4 = _castSlice, hasUnicode$1 = _hasUnicode, isIterateeCall$2 = _isIterateeCall, isRegExp$1 = isRegExp_1, stringToArray$4 = _stringToArray, toString$9 = toString_1;
var MAX_ARRAY_LENGTH = 4294967295;
function split(string2, separator, limit) {
  if (limit && typeof limit != "number" && isIterateeCall$2(string2, separator, limit)) {
    separator = limit = void 0;
  }
  limit = limit === void 0 ? MAX_ARRAY_LENGTH : limit >>> 0;
  if (!limit) {
    return [];
  }
  string2 = toString$9(string2);
  if (string2 && (typeof separator == "string" || separator != null && !isRegExp$1(separator))) {
    separator = baseToString$5(separator);
    if (!separator && hasUnicode$1(string2)) {
      return castSlice$4(stringToArray$4(string2), 0, limit);
    }
  }
  return string2.split(separator, limit);
}
var split_1 = split;
var createCompounder$1 = _createCompounder, upperFirst = upperFirst_1;
var startCase = createCompounder$1(function(result, word, index) {
  return result + (index ? " " : "") + upperFirst(word);
});
var startCase_1 = startCase;
var baseClamp = _baseClamp, baseToString$4 = _baseToString, toInteger$1 = toInteger_1, toString$8 = toString_1;
function startsWith$1(string2, target, position) {
  string2 = toString$8(string2);
  position = position == null ? 0 : baseClamp(toInteger$1(position), 0, string2.length);
  target = baseToString$4(target);
  return string2.slice(position, position + target.length) == target;
}
var startsWith_1 = startsWith$1;
var root = _root;
var coreJsData$1 = root["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$1;
var isFunction = isFunction_1, isMasked = _isMasked, isObject$2 = isObject_1, toSource = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$9 = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$8).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
  if (!isObject$2(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$1(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$1;
var getNative = _getNative;
var defineProperty$2 = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$2;
var defineProperty$1 = _defineProperty;
function baseAssignValue$2(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$2;
var baseAssignValue$1 = _baseAssignValue, eq$1 = eq_1;
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function assignValue$1(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$7.call(object, key) && eq$1(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignValue = assignValue$1;
var assignValue = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$1(source2, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source2[key], key, object, source2) : void 0;
    if (newValue === void 0) {
      newValue = source2[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$1;
function identity$2(value) {
  return value;
}
var identity_1 = identity$2;
function apply$2(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$2;
var apply$1 = _apply;
var nativeMax = Math.max;
function overRest$1(func, start2, transform) {
  start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start2, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start2 + index];
    }
    index = -1;
    var otherArgs = Array(start2 + 1);
    while (++index < start2) {
      otherArgs[index] = args[index];
    }
    otherArgs[start2] = transform(array);
    return apply$1(func, this, otherArgs);
  };
}
var _overRest = overRest$1;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
var constant = constant_1, defineProperty = _defineProperty, identity$1 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string2) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string2),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$1 = shortOut(baseSetToString);
var _setToString = setToString$1;
var identity = identity_1, overRest = _overRest, setToString = _setToString;
function baseRest$2(func, start2) {
  return setToString(overRest(func, start2, identity), func + "");
}
var _baseRest = baseRest$2;
var baseRest$1 = _baseRest, isIterateeCall$1 = _isIterateeCall;
function createAssigner$1(assigner) {
  return baseRest$1(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall$1(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source2 = sources[index];
      if (source2) {
        assigner(object, source2, index, customizer);
      }
    }
    return object;
  });
}
var _createAssigner = createAssigner$1;
function baseTimes$1(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var _baseTimes = baseTimes$1;
var baseGetTag$3 = _baseGetTag, isObjectLike$4 = isObjectLike_1;
var argsTag$1 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$4(value) && baseGetTag$3(value) == argsTag$1;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$3 = isObjectLike_1;
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
var propertyIsEnumerable = objectProto$7.propertyIsEnumerable;
var isArguments$1 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$3(value) && hasOwnProperty$6.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_1 = isArguments$1;
var isBuffer$1 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$1, isBuffer$1.exports);
var baseGetTag$2 = _baseGetTag, isLength = isLength_1, isObjectLike$2 = isObjectLike_1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag$1 = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$2(value) && isLength(value.length) && !!typedArrayTags[baseGetTag$2(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$1;
var baseTimes = _baseTimes, isArguments = isArguments_1, isArray = isArray_1, isBuffer = isBuffer$1.exports, isIndex = _isIndex, isTypedArray = isTypedArray_1;
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$5.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$2;
var objectProto$5 = Object.prototype;
function isPrototype$2(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$5;
  return value === proto;
}
var _isPrototype = isPrototype$2;
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$1 = isObject_1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$1(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$1(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$4.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike$1 = isArrayLike_1;
function keysIn$1(object) {
  return isArrayLike$1(object) ? arrayLikeKeys$1(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$1;
var copyObject = _copyObject, createAssigner = _createAssigner, keysIn = keysIn_1;
var assignInWith$1 = createAssigner(function(object, source2, srcIndex, customizer) {
  copyObject(source2, keysIn(source2), object, customizer);
});
var assignInWith_1 = assignInWith$1;
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var getPrototype$1 = overArg$1(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$1;
var baseGetTag$1 = _baseGetTag, getPrototype = _getPrototype, isObjectLike$1 = isObjectLike_1;
var objectTag = "[object Object]";
var funcProto = Function.prototype, objectProto$3 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$1(value) {
  if (!isObjectLike$1(value) || baseGetTag$1(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$3.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject$1;
var baseGetTag = _baseGetTag, isObjectLike = isObjectLike_1, isPlainObject = isPlainObject_1;
var domExcTag = "[object DOMException]", errorTag = "[object Error]";
function isError$2(value) {
  if (!isObjectLike(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
}
var isError_1 = isError$2;
var apply = _apply, baseRest = _baseRest, isError$1 = isError_1;
var attempt$1 = baseRest(function(func, args) {
  try {
    return apply(func, void 0, args);
  } catch (e) {
    return isError$1(e) ? e : new Error(e);
  }
});
var attempt_1 = attempt$1;
var arrayMap = _arrayMap;
function baseValues$1(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}
var _baseValues = baseValues$1;
var eq = eq_1;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function customDefaultsAssignIn$1(objValue, srcValue, key, object) {
  if (objValue === void 0 || eq(objValue, objectProto$2[key]) && !hasOwnProperty$2.call(object, key)) {
    return srcValue;
  }
  return objValue;
}
var _customDefaultsAssignIn = customDefaultsAssignIn$1;
var stringEscapes = {
  "\\": "\\",
  "'": "'",
  "\n": "n",
  "\r": "r",
  "\u2028": "u2028",
  "\u2029": "u2029"
};
function escapeStringChar$1(chr) {
  return "\\" + stringEscapes[chr];
}
var _escapeStringChar = escapeStringChar$1;
var overArg = _overArg;
var nativeKeys$1 = overArg(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$1.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike = isArrayLike_1;
function keys$1(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var keys_1 = keys$1;
var reInterpolate$2 = /<%=([\s\S]+?)%>/g;
var _reInterpolate = reInterpolate$2;
var reEscape$1 = /<%-([\s\S]+?)%>/g;
var _reEscape = reEscape$1;
var reEvaluate$1 = /<%([\s\S]+?)%>/g;
var _reEvaluate = reEvaluate$1;
var escape$1 = _escape, reEscape = _reEscape, reEvaluate = _reEvaluate, reInterpolate$1 = _reInterpolate;
var templateSettings$1 = {
  "escape": reEscape,
  "evaluate": reEvaluate,
  "interpolate": reInterpolate$1,
  "variable": "",
  "imports": {
    "_": { "escape": escape$1 }
  }
};
var templateSettings_1 = templateSettings$1;
var assignInWith = assignInWith_1, attempt = attempt_1, baseValues = _baseValues, customDefaultsAssignIn = _customDefaultsAssignIn, escapeStringChar = _escapeStringChar, isError = isError_1, isIterateeCall = _isIterateeCall, keys = keys_1, reInterpolate = _reInterpolate, templateSettings = templateSettings_1, toString$7 = toString_1;
var INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
var reNoMatch = /($^)/;
var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function template(string2, options, guard) {
  var settings = templateSettings.imports._.templateSettings || templateSettings;
  if (guard && isIterateeCall(string2, options, guard)) {
    options = void 0;
  }
  string2 = toString$7(string2);
  options = assignInWith({}, options, settings, customDefaultsAssignIn);
  var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
  var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source2 = "__p += '";
  var reDelimiters = RegExp((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
  var sourceURL = hasOwnProperty.call(options, "sourceURL") ? "//# sourceURL=" + (options.sourceURL + "").replace(/\s/g, " ") + "\n" : "";
  string2.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset2) {
    interpolateValue || (interpolateValue = esTemplateValue);
    source2 += string2.slice(index, offset2).replace(reUnescapedString, escapeStringChar);
    if (escapeValue) {
      isEscaping = true;
      source2 += "' +\n__e(" + escapeValue + ") +\n'";
    }
    if (evaluateValue) {
      isEvaluating = true;
      source2 += "';\n" + evaluateValue + ";\n__p += '";
    }
    if (interpolateValue) {
      source2 += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
    }
    index = offset2 + match.length;
    return match;
  });
  source2 += "';\n";
  var variable = hasOwnProperty.call(options, "variable") && options.variable;
  if (!variable) {
    source2 = "with (obj) {\n" + source2 + "\n}\n";
  } else if (reForbiddenIdentifierChars.test(variable)) {
    throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
  }
  source2 = (isEvaluating ? source2.replace(reEmptyStringLeading, "") : source2).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
  source2 = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source2 + "return __p\n}";
  var result = attempt(function() {
    return Function(importsKeys, sourceURL + "return " + source2).apply(void 0, importsValues);
  });
  result.source = source2;
  if (isError(result)) {
    throw result;
  }
  return result;
}
var template_1 = template;
var toString$6 = toString_1;
function toLower(value) {
  return toString$6(value).toLowerCase();
}
var toLower_1 = toLower;
var toString$5 = toString_1;
function toUpper(value) {
  return toString$5(value).toUpperCase();
}
var toUpper_1 = toUpper;
function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
  var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
var _baseFindIndex = baseFindIndex$1;
function baseIsNaN$1(value) {
  return value !== value;
}
var _baseIsNaN = baseIsNaN$1;
function strictIndexOf$1(array, value, fromIndex) {
  var index = fromIndex - 1, length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
var _strictIndexOf = strictIndexOf$1;
var baseFindIndex = _baseFindIndex, baseIsNaN = _baseIsNaN, strictIndexOf = _strictIndexOf;
function baseIndexOf$2(array, value, fromIndex) {
  return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}
var _baseIndexOf = baseIndexOf$2;
var baseIndexOf$1 = _baseIndexOf;
function charsEndIndex$2(strSymbols, chrSymbols) {
  var index = strSymbols.length;
  while (index-- && baseIndexOf$1(chrSymbols, strSymbols[index], 0) > -1) {
  }
  return index;
}
var _charsEndIndex = charsEndIndex$2;
var baseIndexOf = _baseIndexOf;
function charsStartIndex$2(strSymbols, chrSymbols) {
  var index = -1, length = strSymbols.length;
  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
  }
  return index;
}
var _charsStartIndex = charsStartIndex$2;
var baseToString$3 = _baseToString, baseTrim = _baseTrim, castSlice$3 = _castSlice, charsEndIndex$1 = _charsEndIndex, charsStartIndex$1 = _charsStartIndex, stringToArray$3 = _stringToArray, toString$4 = toString_1;
function trim(string2, chars, guard) {
  string2 = toString$4(string2);
  if (string2 && (guard || chars === void 0)) {
    return baseTrim(string2);
  }
  if (!string2 || !(chars = baseToString$3(chars))) {
    return string2;
  }
  var strSymbols = stringToArray$3(string2), chrSymbols = stringToArray$3(chars), start2 = charsStartIndex$1(strSymbols, chrSymbols), end2 = charsEndIndex$1(strSymbols, chrSymbols) + 1;
  return castSlice$3(strSymbols, start2, end2).join("");
}
var trim_1 = trim;
var baseToString$2 = _baseToString, castSlice$2 = _castSlice, charsEndIndex = _charsEndIndex, stringToArray$2 = _stringToArray, toString$3 = toString_1, trimmedEndIndex = _trimmedEndIndex;
function trimEnd(string2, chars, guard) {
  string2 = toString$3(string2);
  if (string2 && (guard || chars === void 0)) {
    return string2.slice(0, trimmedEndIndex(string2) + 1);
  }
  if (!string2 || !(chars = baseToString$2(chars))) {
    return string2;
  }
  var strSymbols = stringToArray$2(string2), end2 = charsEndIndex(strSymbols, stringToArray$2(chars)) + 1;
  return castSlice$2(strSymbols, 0, end2).join("");
}
var trimEnd_1 = trimEnd;
var baseToString$1 = _baseToString, castSlice$1 = _castSlice, charsStartIndex = _charsStartIndex, stringToArray$1 = _stringToArray, toString$2 = toString_1;
var reTrimStart = /^\s+/;
function trimStart(string2, chars, guard) {
  string2 = toString$2(string2);
  if (string2 && (guard || chars === void 0)) {
    return string2.replace(reTrimStart, "");
  }
  if (!string2 || !(chars = baseToString$1(chars))) {
    return string2;
  }
  var strSymbols = stringToArray$1(string2), start2 = charsStartIndex(strSymbols, stringToArray$1(chars));
  return castSlice$1(strSymbols, start2).join("");
}
var trimStart_1 = trimStart;
var baseToString = _baseToString, castSlice = _castSlice, hasUnicode = _hasUnicode, isObject = isObject_1, isRegExp = isRegExp_1, stringSize = _stringSize, stringToArray = _stringToArray, toInteger = toInteger_1, toString$1 = toString_1;
var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
var reFlags = /\w*$/;
function truncate(string2, options) {
  var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
  if (isObject(options)) {
    var separator = "separator" in options ? options.separator : separator;
    length = "length" in options ? toInteger(options.length) : length;
    omission = "omission" in options ? baseToString(options.omission) : omission;
  }
  string2 = toString$1(string2);
  var strLength = string2.length;
  if (hasUnicode(string2)) {
    var strSymbols = stringToArray(string2);
    strLength = strSymbols.length;
  }
  if (length >= strLength) {
    return string2;
  }
  var end2 = length - stringSize(omission);
  if (end2 < 1) {
    return omission;
  }
  var result = strSymbols ? castSlice(strSymbols, 0, end2).join("") : string2.slice(0, end2);
  if (separator === void 0) {
    return result + omission;
  }
  if (strSymbols) {
    end2 += result.length - end2;
  }
  if (isRegExp(separator)) {
    if (string2.slice(end2).search(separator)) {
      var match, substring = result;
      if (!separator.global) {
        separator = RegExp(separator.source, toString$1(reFlags.exec(separator)) + "g");
      }
      separator.lastIndex = 0;
      while (match = separator.exec(substring)) {
        var newEnd = match.index;
      }
      result = result.slice(0, newEnd === void 0 ? end2 : newEnd);
    }
  } else if (string2.indexOf(baseToString(separator), end2) != end2) {
    var index = result.lastIndexOf(separator);
    if (index > -1) {
      result = result.slice(0, index);
    }
  }
  return result + omission;
}
var truncate_1 = truncate;
var basePropertyOf = _basePropertyOf;
var htmlUnescapes = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
};
var unescapeHtmlChar$1 = basePropertyOf(htmlUnescapes);
var _unescapeHtmlChar = unescapeHtmlChar$1;
var toString = toString_1, unescapeHtmlChar = _unescapeHtmlChar;
var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reHasEscapedHtml = RegExp(reEscapedHtml.source);
function unescape(string2) {
  string2 = toString(string2);
  return string2 && reHasEscapedHtml.test(string2) ? string2.replace(reEscapedHtml, unescapeHtmlChar) : string2;
}
var _unescape = unescape;
var createCompounder = _createCompounder;
var upperCase = createCompounder(function(result, word, index) {
  return result + (index ? " " : "") + word.toUpperCase();
});
var upperCase_1 = upperCase;
var string = {
  "camelCase": camelCase_1,
  "capitalize": capitalize_1,
  "deburr": deburr_1,
  "endsWith": endsWith_1,
  "escape": _escape,
  "escapeRegExp": escapeRegExp_1,
  "kebabCase": kebabCase_1,
  "lowerCase": lowerCase_1,
  "lowerFirst": lowerFirst_1,
  "pad": pad_1,
  "padEnd": padEnd_1,
  "padStart": padStart_1,
  "parseInt": _parseInt,
  "repeat": repeat_1,
  "replace": replace_1,
  "snakeCase": snakeCase_1,
  "split": split_1,
  "startCase": startCase_1,
  "startsWith": startsWith_1,
  "template": template_1,
  "templateSettings": templateSettings_1,
  "toLower": toLower_1,
  "toUpper": toUpper_1,
  "trim": trim_1,
  "trimEnd": trimEnd_1,
  "trimStart": trimStart_1,
  "truncate": truncate_1,
  "unescape": _unescape,
  "upperCase": upperCase_1,
  "upperFirst": upperFirst_1,
  "words": words_1
};
const _sfc_main$I = {
  name: "Icon",
  props: {
    icon: makeString(null),
    variant: makeString(null)
  },
  setup(props, { slots }) {
    return {
      theIcon: computed(() => props.icon || slots.default.toString().trim())
    };
  }
};
function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("i", {
    class: normalizeClass(["bi", { ["bi-" + $setup.theIcon]: $setup.theIcon, ["text-" + $props.variant]: $props.variant }])
  }, null, 2);
}
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$I]]);
const _sfc_main$H = defineComponent({
  name: "DataTable",
  emits: ["update:selectedRows"],
  components: { Icon, Tr, TBody, Th, Td, THead, Table },
  props: __spreadProps(__spreadValues({}, tableProps), {
    selectedRows: make(Array, []),
    filter: makeString(null),
    fields: make(Array, []),
    items: make([Array, Promise, Function], [])
  }),
  setup(props, context) {
    props = reactive(props);
    const sorting = ref({
      sortBy: null,
      sort: null
    });
    const applySorting = (th) => {
      if (typeof th === "object" && th.sortable === true) {
        if (sorting.value.sortBy === th.key) {
          sorting.value.sort = sorting.value.sort === "asc" ? "desc" : "asc";
        } else {
          sorting.value.sortBy = th.key;
          sorting.value.sort = sorting.value.sort === "asc" ? "desc" : "asc";
        }
      }
    };
    const classes = computed(() => []);
    const _a = props, { items, fields } = _a, otherProps = __objRest(_a, ["items", "fields"]);
    const getLabel = (th) => {
      if (isObject$7(th)) {
        if (th.hasOwnProperty("label")) {
          return th.label;
        } else if (th.hasOwnProperty("key")) {
          return title(th.key);
        }
      } else if (typeof th === "string") {
        return title(th);
      }
      return th;
    };
    const filterableColumns = computed(() => {
      let cols = [];
      props.fields.forEach((i) => {
        if (typeof i === "string") {
          cols.push(i);
        } else if (isObject$7(i) && i.sortable !== false) {
          cols.push(getKey(i));
        }
      });
      return cols;
    });
    const getValue2 = (row, th, th_index) => {
      let key = getKey(th);
      if (isObject$7(th)) {
        if (th.hasOwnProperty("formatter")) {
          return th.formatter(row, key);
        }
        return row[key];
      } else if (typeof th === "string") {
        return row[key];
      }
      return row[th_index];
    };
    const getKey = (th) => {
      if (isObject$7(th)) {
        return th.key;
      } else if (typeof th === "string") {
        return string.lowerCase(th);
      }
      return th;
    };
    const itemsSorted = computed(() => {
      if (sorting.value.sortBy) {
        return lodash.exports.orderBy(props.items, sorting.value.sortBy, sorting.value.sort);
      }
      if (Array.isArray(props.items)) {
        if (filterableColumns.value.length && props.filter) {
          return props.items.filter((row) => {
            if (Array.isArray(row)) {
              console.log(row);
            } else if (isObject$7(row)) {
              return filterableColumns.value.reduce((cond, col) => cond || row[col].toString().search(props.filter) > -1, false);
            }
            return true;
          });
        }
        return props.items;
      }
      return props.items;
    });
    const clearSorting = () => {
      sorting.value.sortBy = null;
      sorting.value.sort = null;
    };
    const selectRow = (row) => {
    };
    const unselectAllRows = () => context.emit("update:selectedRows", []);
    const selectAllRows = () => context.emit("update:selectedRows", itemsSorted.value);
    const selectedAllRows = computed(() => itemsSorted.value.length === props.selectedRows.length);
    return {
      classes,
      otherProps,
      getLabel,
      getValue: getValue2,
      getKey,
      sorting,
      applySorting,
      itemsSorted,
      clearSorting,
      filterableColumns,
      selectRow,
      selectAllRows,
      unselectAllRows,
      selectedAllRows
    };
  }
});
function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_Th = resolveComponent("Th");
  const _component_THead = resolveComponent("THead");
  const _component_Td = resolveComponent("Td");
  const _component_Tr = resolveComponent("Tr");
  const _component_TBody = resolveComponent("TBody");
  const _component_Table = resolveComponent("Table");
  return openBlock(), createBlock(_component_Table, normalizeProps(guardReactiveProps(_ctx.otherProps)), {
    default: withCtx(() => [
      createVNode(_component_THead, null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.fields, (th, th_index) => {
            return openBlock(), createBlock(_component_Th, {
              onClick: ($event) => _ctx.applySorting(th),
              style: normalizeStyle({ "cursor": th.sortable === true ? "pointer" : null }),
              key: th_index
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "head(" + th.key + ")", {
                  column: th.key,
                  field: th,
                  index: th_index,
                  label: _ctx.getLabel(th),
                  sortBy: _ctx.sorting.sortBy,
                  sort: _ctx.sorting.sort,
                  unselectAllRows: _ctx.unselectAllRows,
                  selectAllRows: _ctx.selectAllRows,
                  selectedAllRows: _ctx.selectedAllRows
                }, () => [
                  createTextVNode(toDisplayString(_ctx.getLabel(th)), 1)
                ]),
                typeof th === "object" && th.sortable === true ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  icon: _ctx.sorting.sortBy === th.key && _ctx.sorting.sort === "asc" ? "sort-down" : "sort-up"
                }, null, 8, ["icon"])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1032, ["onClick", "style"]);
          }), 128))
        ]),
        _: 3
      }),
      createVNode(_component_TBody, null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.itemsSorted, (row, row_index) => {
            return openBlock(), createBlock(_component_Tr, { key: row_index }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.fields, (th, th_index) => {
                  return openBlock(), createBlock(_component_Td, { key: th_index }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "cell(" + _ctx.getKey(th) + ")", {
                        item: row,
                        index: row_index,
                        field: th,
                        rowSelected: false,
                        detailsShowing: false,
                        sortBy: _ctx.sorting.sortBy,
                        sort: _ctx.sorting.sort,
                        selectRow: _ctx.selectRow,
                        selectedRows: _ctx.selectedRows,
                        value: _ctx.getValue(row, th, th_index)
                      }, () => [
                        createTextVNode(toDisplayString(_ctx.getValue(row, th, th_index)), 1)
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 3
      })
    ]),
    _: 3
  }, 16);
}
var DataTable = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$H]]);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function getBoundingClientRect(element, includeScale) {
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys2) {
  return keys2.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets;
  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref4) {
  var state = _ref4.state, options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = popperOffsets2[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets2[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets2[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets2[mainAxis] + maxOffset - offsetModifierValue;
    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets2[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }
  state.modifiersData[name] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
var dropdownProps = {
  tag: makeString("div"),
  menuTag: makeString("ul"),
  toggleTag: makeString("button"),
  size: makeString(),
  text: makeString(),
  variant: makeString("secondary"),
  splitVariant: makeString("secondary"),
  block: makeBoolean(false),
  disabled: makeBoolean(false),
  dir: makeString("bottom"),
  align: makeString("start"),
  menuDark: makeBoolean(false),
  menuClass: make([String, Array], []),
  split: makeBoolean(false)
};
const _sfc_main$G = {
  name: "DropdownMenu",
  props: {
    tag: makeString("ul"),
    dark: makeBoolean(false),
    show: makeBoolean(false)
  },
  computed: {
    classes() {
      return [
        "dropdown-menu",
        {
          "dropdown-menu-dark": this.dark,
          "show": this.show
        }
      ];
    }
  }
};
function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($options.classes)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var DropdownMenu = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$G]]);
const _sfc_main$F = {
  name: "Dropdown",
  components: { Button, DropdownMenu },
  props: dropdownProps,
  setup(props) {
    return {
      classes: computed(() => [
        {
          "btn-group": !props.block,
          "dropdown": props.block,
          "dropend": props.dir === "right",
          "dropstart": props.dir === "left",
          "dropup": props.dir === "top"
        }
      ]),
      popperOptions: computed(() => ({
        placement: props.align ? [props.dir, props.align].join("-") : "bottom-start",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 5]
            }
          }
        ]
      }))
    };
  },
  data() {
    return {
      shouldOpen: false,
      toggleAriaExpanded: false,
      popperInstance: null
    };
  },
  mounted() {
    this.popperInstance = createPopper(this.$refs.toggle.$el, this.$refs.menu.$el, this.popperOptions);
  },
  methods: {
    clickOutside(e) {
      if (e.target !== this.$refs.toggle.$el) {
        this.shouldOpen = false;
      }
    }
  },
  watch: {
    shouldOpen(value) {
      this.popperInstance.update();
      this.toggleAriaExpanded = value;
      if (value) {
        document.addEventListener("click", this.clickOutside);
      } else {
        document.removeEventListener("click", this.clickOutside);
      }
    }
  }
};
const _hoisted_1$g = {
  key: 0,
  class: "visually-hidden"
};
function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  const _component_DropdownMenu = resolveComponent("DropdownMenu");
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    class: normalizeClass($setup.classes)
  }, {
    default: withCtx(() => [
      _ctx.split ? (openBlock(), createBlock(_component_Button, {
        key: 0,
        disabled: _ctx.disabled,
        variant: _ctx.splitVariant,
        block: _ctx.block,
        size: _ctx.size
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "button-content", {}, () => [
            createTextVNode(toDisplayString(_ctx.text), 1)
          ])
        ]),
        _: 3
      }, 8, ["disabled", "variant", "block", "size"])) : createCommentVNode("", true),
      createVNode(_component_Button, {
        ref: "toggle",
        tag: _ctx.toggleTag,
        block: _ctx.block,
        disabled: _ctx.disabled,
        variant: _ctx.variant,
        size: _ctx.size,
        class: normalizeClass(["dropdown-toggle", { "show": $data.shouldOpen, "dropdown-toggle-split": _ctx.split }]),
        onClick: _cache[0] || (_cache[0] = ($event) => $data.shouldOpen = !$data.shouldOpen),
        "aria-expanded": $data.toggleAriaExpanded
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "button-content", {}, () => [
            _ctx.split ? (openBlock(), createElementBlock("span", _hoisted_1$g, "Toggle Dropdown")) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(_ctx.text), 1)
            ], 64))
          ])
        ]),
        _: 3
      }, 8, ["tag", "block", "disabled", "variant", "size", "class", "aria-expanded"]),
      createVNode(_component_DropdownMenu, {
        ref: "menu",
        show: $data.shouldOpen,
        tag: _ctx.menuTag,
        class: normalizeClass(_ctx.menuClass),
        dark: _ctx.menuDark
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["show", "tag", "class", "dark"])
    ]),
    _: 3
  }, 8, ["class"]);
}
var Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$F]]);
const _sfc_main$E = defineComponent({
  name: "DropdownButton",
  props: {
    active: makeBoolean(false),
    disabled: makeBoolean(false)
  }
});
const _hoisted_1$f = { role: "menuitem" };
function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", _hoisted_1$f, [
    createElementVNode("button", {
      class: normalizeClass(["dropdown-item", { "active": _ctx.active, "disabled": _ctx.disabled }]),
      type: "button"
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)
  ]);
}
var DropdownButton = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$E]]);
const _sfc_main$D = {
  name: "DropdownDivider"
};
const _hoisted_1$e = { role: "presentation" };
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("hr", {
  role: "separator",
  "aria-orientation": "horizontal",
  class: "dropdown-divider"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$7
];
function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", _hoisted_1$e, _hoisted_3$4);
}
var DropdownDivider = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$D]]);
const _sfc_main$C = {
  name: "DropdownItem",
  props: {
    href: makeString("#"),
    active: makeBoolean(false),
    disabled: makeBoolean(false),
    isText: makeBoolean(false)
  }
};
const _hoisted_1$d = { role: "presentation" };
const _hoisted_2$6 = {
  key: 0,
  class: "dropdown-item-text"
};
const _hoisted_3$3 = ["href"];
function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", _hoisted_1$d, [
    $props.isText ? (openBlock(), createElementBlock("p", _hoisted_2$6, [
      renderSlot(_ctx.$slots, "default")
    ])) : (openBlock(), createElementBlock("a", {
      key: 1,
      class: normalizeClass(["dropdown-item", { "active": $props.active, "disabled": $props.disabled }]),
      href: $props.href
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 10, _hoisted_3$3))
  ]);
}
var DropdownItem = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$C]]);
const _sfc_main$B = {
  name: "FormLabel",
  props: {
    horizontal: makeBoolean(false),
    sm: makeNumber(null),
    md: makeNumber(null),
    lg: makeNumber(null),
    xl: makeNumber(null)
  },
  setup(props) {
    const classes = reactive({
      "form-label": !props.horizontal,
      "col-form-label": props.horizontal,
      ["col-sm-" + props.sm]: props.horizontal && props.sm,
      ["col-md-" + props.md]: props.horizontal && props.md,
      ["col-lg-" + props.lg]: props.horizontal && props.lg,
      ["col-xl-" + props.xl]: props.horizontal && props.xl
    });
    return {
      classes
    };
  }
};
function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass($setup.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var FormLabel = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$B]]);
const _sfc_main$A = {
  name: "FormGroup",
  components: { FormLabel },
  props: {
    floating: makeBoolean(false),
    label: makeString(),
    labelFor: makeString(),
    horizontal: makeBoolean(false),
    labelSm: makeNumber(null),
    labelMd: makeNumber(null),
    labelLg: makeNumber(null),
    labelXl: makeNumber(null),
    contentSm: makeNumber(null),
    contentMd: makeNumber(null),
    contentLg: makeNumber(null),
    contentXl: makeNumber(null)
  },
  setup(props) {
    const classes = reactive([
      "form-group",
      {
        "row": props.horizontal,
        "form-floating": props.floating
      }
    ]);
    const contentClasses = ref({});
    if (props.horizontal) {
      contentClasses.value = {
        ["col-sm-" + props.contentSm]: !!props.contentSm,
        ["col-md-" + props.contentMd]: !!props.contentMd,
        ["col-lg-" + props.contentLg]: !!props.contentLg,
        ["col-xl-" + props.contentXl]: !!props.contentXl
      };
    }
    return {
      classes,
      contentClasses
    };
  }
};
function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormLabel = resolveComponent("FormLabel");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($setup.classes),
    role: "group"
  }, [
    $props.floating && !$props.horizontal ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("", true),
    $props.label || _ctx.$slots.label ? (openBlock(), createBlock(_component_FormLabel, {
      key: 1,
      horizontal: $props.horizontal,
      sm: $props.labelSm,
      md: $props.labelMd,
      lg: $props.labelLg,
      xl: $props.labelXl,
      for: $props.labelFor
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "label", {}, () => [
          createTextVNode(toDisplayString($props.label), 1)
        ])
      ]),
      _: 3
    }, 8, ["horizontal", "sm", "md", "lg", "xl", "for"])) : createCommentVNode("", true),
    !$props.floating && !$props.horizontal ? renderSlot(_ctx.$slots, "default", { key: 2 }) : createCommentVNode("", true),
    $props.horizontal ? (openBlock(), createElementBlock("div", {
      key: 3,
      class: normalizeClass($setup.contentClasses)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)) : createCommentVNode("", true)
  ], 2);
}
var FormGroup = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$A]]);
const _sfc_main$z = {
  name: "Grid",
  props: {
    tag: makeString("div")
  }
};
function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), { class: "grid" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  });
}
var Grid = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$z]]);
const _sfc_main$y = {
  name: "GridCol",
  props: {
    tag: makeString("div"),
    col: make([Number, String], null),
    sm: make([Number, String], null),
    md: make([Number, String], null),
    lg: make([Number, String], null),
    xl: make([Number, String], null),
    start: make([Number, String], null)
  },
  setup(props) {
    const classes = reactive({
      ["g-start-" + props.start]: props.start,
      ["g-col-" + props.col]: props.col,
      ["g-col-sm-" + props.sm]: props.sm,
      ["g-col-md-" + props.md]: props.md,
      ["g-col-lg-" + props.lg]: props.lg,
      ["g-col-xl-" + props.xl]: props.xl
    });
    return {
      classes
    };
  }
};
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($setup.classes)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var GridCol = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$y]]);
var deepFreezeEs6 = { exports: {} };
function deepFreeze(obj) {
  if (obj instanceof Map) {
    obj.clear = obj.delete = obj.set = function() {
      throw new Error("map is read-only");
    };
  } else if (obj instanceof Set) {
    obj.add = obj.clear = obj.delete = function() {
      throw new Error("set is read-only");
    };
  }
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach(function(name) {
    var prop = obj[name];
    if (typeof prop == "object" && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });
  return obj;
}
deepFreezeEs6.exports = deepFreeze;
deepFreezeEs6.exports.default = deepFreeze;
var deepFreeze$1 = deepFreezeEs6.exports;
class Response {
  constructor(mode) {
    if (mode.data === void 0)
      mode.data = {};
    this.data = mode.data;
    this.isMatchIgnored = false;
  }
  ignoreMatch() {
    this.isMatchIgnored = true;
  }
}
function escapeHTML(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function inherit$1(original, ...objects) {
  const result = Object.create(null);
  for (const key in original) {
    result[key] = original[key];
  }
  objects.forEach(function(obj) {
    for (const key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}
const SPAN_CLOSE = "</span>";
const emitsWrappingTags = (node) => {
  return !!node.kind;
};
const expandScopeName = (name, { prefix }) => {
  if (name.includes(".")) {
    const pieces = name.split(".");
    return [
      `${prefix}${pieces.shift()}`,
      ...pieces.map((x, i) => `${x}${"_".repeat(i + 1)}`)
    ].join(" ");
  }
  return `${prefix}${name}`;
};
class HTMLRenderer {
  constructor(parseTree, options) {
    this.buffer = "";
    this.classPrefix = options.classPrefix;
    parseTree.walk(this);
  }
  addText(text) {
    this.buffer += escapeHTML(text);
  }
  openNode(node) {
    if (!emitsWrappingTags(node))
      return;
    let scope = node.kind;
    if (node.sublanguage) {
      scope = `language-${scope}`;
    } else {
      scope = expandScopeName(scope, { prefix: this.classPrefix });
    }
    this.span(scope);
  }
  closeNode(node) {
    if (!emitsWrappingTags(node))
      return;
    this.buffer += SPAN_CLOSE;
  }
  value() {
    return this.buffer;
  }
  span(className) {
    this.buffer += `<span class="${className}">`;
  }
}
class TokenTree {
  constructor() {
    this.rootNode = { children: [] };
    this.stack = [this.rootNode];
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  add(node) {
    this.top.children.push(node);
  }
  openNode(kind) {
    const node = { kind, children: [] };
    this.add(node);
    this.stack.push(node);
  }
  closeNode() {
    if (this.stack.length > 1) {
      return this.stack.pop();
    }
    return void 0;
  }
  closeAllNodes() {
    while (this.closeNode())
      ;
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }
  walk(builder) {
    return this.constructor._walk(builder, this.rootNode);
  }
  static _walk(builder, node) {
    if (typeof node === "string") {
      builder.addText(node);
    } else if (node.children) {
      builder.openNode(node);
      node.children.forEach((child) => this._walk(builder, child));
      builder.closeNode(node);
    }
    return builder;
  }
  static _collapse(node) {
    if (typeof node === "string")
      return;
    if (!node.children)
      return;
    if (node.children.every((el) => typeof el === "string")) {
      node.children = [node.children.join("")];
    } else {
      node.children.forEach((child) => {
        TokenTree._collapse(child);
      });
    }
  }
}
class TokenTreeEmitter extends TokenTree {
  constructor(options) {
    super();
    this.options = options;
  }
  addKeyword(text, kind) {
    if (text === "") {
      return;
    }
    this.openNode(kind);
    this.addText(text);
    this.closeNode();
  }
  addText(text) {
    if (text === "") {
      return;
    }
    this.add(text);
  }
  addSublanguage(emitter, name) {
    const node = emitter.root;
    node.kind = name;
    node.sublanguage = true;
    this.add(node);
  }
  toHTML() {
    const renderer = new HTMLRenderer(this, this.options);
    return renderer.value();
  }
  finalize() {
    return true;
  }
}
function source(re) {
  if (!re)
    return null;
  if (typeof re === "string")
    return re;
  return re.source;
}
function lookahead(re) {
  return concat("(?=", re, ")");
}
function anyNumberOfTimes(re) {
  return concat("(?:", re, ")*");
}
function optional(re) {
  return concat("(?:", re, ")?");
}
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}
function stripOptionsFromArgs(args) {
  const opts = args[args.length - 1];
  if (typeof opts === "object" && opts.constructor === Object) {
    args.splice(args.length - 1, 1);
    return opts;
  } else {
    return {};
  }
}
function either(...args) {
  const opts = stripOptionsFromArgs(args);
  const joined = "(" + (opts.capture ? "" : "?:") + args.map((x) => source(x)).join("|") + ")";
  return joined;
}
function countMatchGroups(re) {
  return new RegExp(re.toString() + "|").exec("").length - 1;
}
function startsWith(re, lexeme) {
  const match = re && re.exec(lexeme);
  return match && match.index === 0;
}
const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function _rewriteBackreferences(regexps, { joinWith }) {
  let numCaptures = 0;
  return regexps.map((regex) => {
    numCaptures += 1;
    const offset2 = numCaptures;
    let re = source(regex);
    let out = "";
    while (re.length > 0) {
      const match = BACKREF_RE.exec(re);
      if (!match) {
        out += re;
        break;
      }
      out += re.substring(0, match.index);
      re = re.substring(match.index + match[0].length);
      if (match[0][0] === "\\" && match[1]) {
        out += "\\" + String(Number(match[1]) + offset2);
      } else {
        out += match[0];
        if (match[0] === "(") {
          numCaptures++;
        }
      }
    }
    return out;
  }).map((re) => `(${re})`).join(joinWith);
}
const MATCH_NOTHING_RE = /\b\B/;
const IDENT_RE = "[a-zA-Z]\\w*";
const UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
const NUMBER_RE = "\\b\\d+(\\.\\d+)?";
const C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
const BINARY_NUMBER_RE = "\\b(0b[01]+)";
const RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
const SHEBANG = (opts = {}) => {
  const beginShebang = /^#![ ]*\//;
  if (opts.binary) {
    opts.begin = concat(beginShebang, /.*\b/, opts.binary, /\b.*/);
  }
  return inherit$1({
    scope: "meta",
    begin: beginShebang,
    end: /$/,
    relevance: 0,
    "on:begin": (m, resp) => {
      if (m.index !== 0)
        resp.ignoreMatch();
    }
  }, opts);
};
const BACKSLASH_ESCAPE = {
  begin: "\\\\[\\s\\S]",
  relevance: 0
};
const APOS_STRING_MODE = {
  scope: "string",
  begin: "'",
  end: "'",
  illegal: "\\n",
  contains: [BACKSLASH_ESCAPE]
};
const QUOTE_STRING_MODE = {
  scope: "string",
  begin: '"',
  end: '"',
  illegal: "\\n",
  contains: [BACKSLASH_ESCAPE]
};
const PHRASAL_WORDS_MODE = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
};
const COMMENT = function(begin, end2, modeOptions = {}) {
  const mode = inherit$1({
    scope: "comment",
    begin,
    end: end2,
    contains: []
  }, modeOptions);
  mode.contains.push({
    scope: "doctag",
    begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: true,
    relevance: 0
  });
  const ENGLISH_WORD = either("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
  mode.contains.push({
    begin: concat(/[ ]+/, "(", ENGLISH_WORD, /[.]?[:]?([.][ ]|[ ])/, "){3}")
  });
  return mode;
};
const C_LINE_COMMENT_MODE = COMMENT("//", "$");
const C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
const HASH_COMMENT_MODE = COMMENT("#", "$");
const NUMBER_MODE = {
  scope: "number",
  begin: NUMBER_RE,
  relevance: 0
};
const C_NUMBER_MODE = {
  scope: "number",
  begin: C_NUMBER_RE,
  relevance: 0
};
const BINARY_NUMBER_MODE = {
  scope: "number",
  begin: BINARY_NUMBER_RE,
  relevance: 0
};
const REGEXP_MODE = {
  begin: /(?=\/[^/\n]*\/)/,
  contains: [{
    scope: "regexp",
    begin: /\//,
    end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      BACKSLASH_ESCAPE,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [BACKSLASH_ESCAPE]
      }
    ]
  }]
};
const TITLE_MODE = {
  scope: "title",
  begin: IDENT_RE,
  relevance: 0
};
const UNDERSCORE_TITLE_MODE = {
  scope: "title",
  begin: UNDERSCORE_IDENT_RE,
  relevance: 0
};
const METHOD_GUARD = {
  begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
  relevance: 0
};
const END_SAME_AS_BEGIN = function(mode) {
  return Object.assign(mode, {
    "on:begin": (m, resp) => {
      resp.data._beginMatch = m[1];
    },
    "on:end": (m, resp) => {
      if (resp.data._beginMatch !== m[1])
        resp.ignoreMatch();
    }
  });
};
var MODES = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MATCH_NOTHING_RE,
  IDENT_RE,
  UNDERSCORE_IDENT_RE,
  NUMBER_RE,
  C_NUMBER_RE,
  BINARY_NUMBER_RE,
  RE_STARTERS_RE,
  SHEBANG,
  BACKSLASH_ESCAPE,
  APOS_STRING_MODE,
  QUOTE_STRING_MODE,
  PHRASAL_WORDS_MODE,
  COMMENT,
  C_LINE_COMMENT_MODE,
  C_BLOCK_COMMENT_MODE,
  HASH_COMMENT_MODE,
  NUMBER_MODE,
  C_NUMBER_MODE,
  BINARY_NUMBER_MODE,
  REGEXP_MODE,
  TITLE_MODE,
  UNDERSCORE_TITLE_MODE,
  METHOD_GUARD,
  END_SAME_AS_BEGIN
});
function skipIfHasPrecedingDot(match, response) {
  const before = match.input[match.index - 1];
  if (before === ".") {
    response.ignoreMatch();
  }
}
function scopeClassName(mode, _parent) {
  if (mode.className !== void 0) {
    mode.scope = mode.className;
    delete mode.className;
  }
}
function beginKeywords(mode, parent) {
  if (!parent)
    return;
  if (!mode.beginKeywords)
    return;
  mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
  mode.__beforeBegin = skipIfHasPrecedingDot;
  mode.keywords = mode.keywords || mode.beginKeywords;
  delete mode.beginKeywords;
  if (mode.relevance === void 0)
    mode.relevance = 0;
}
function compileIllegal(mode, _parent) {
  if (!Array.isArray(mode.illegal))
    return;
  mode.illegal = either(...mode.illegal);
}
function compileMatch(mode, _parent) {
  if (!mode.match)
    return;
  if (mode.begin || mode.end)
    throw new Error("begin & end are not supported with match");
  mode.begin = mode.match;
  delete mode.match;
}
function compileRelevance(mode, _parent) {
  if (mode.relevance === void 0)
    mode.relevance = 1;
}
const beforeMatchExt = (mode, parent) => {
  if (!mode.beforeMatch)
    return;
  if (mode.starts)
    throw new Error("beforeMatch cannot be used with starts");
  const originalMode = Object.assign({}, mode);
  Object.keys(mode).forEach((key) => {
    delete mode[key];
  });
  mode.keywords = originalMode.keywords;
  mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
  mode.starts = {
    relevance: 0,
    contains: [
      Object.assign(originalMode, { endsParent: true })
    ]
  };
  mode.relevance = 0;
  delete originalMode.beforeMatch;
};
const COMMON_KEYWORDS = [
  "of",
  "and",
  "for",
  "in",
  "not",
  "or",
  "if",
  "then",
  "parent",
  "list",
  "value"
];
const DEFAULT_KEYWORD_SCOPE = "keyword";
function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
  const compiledKeywords = Object.create(null);
  if (typeof rawKeywords === "string") {
    compileList(scopeName, rawKeywords.split(" "));
  } else if (Array.isArray(rawKeywords)) {
    compileList(scopeName, rawKeywords);
  } else {
    Object.keys(rawKeywords).forEach(function(scopeName2) {
      Object.assign(compiledKeywords, compileKeywords(rawKeywords[scopeName2], caseInsensitive, scopeName2));
    });
  }
  return compiledKeywords;
  function compileList(scopeName2, keywordList) {
    if (caseInsensitive) {
      keywordList = keywordList.map((x) => x.toLowerCase());
    }
    keywordList.forEach(function(keyword) {
      const pair = keyword.split("|");
      compiledKeywords[pair[0]] = [scopeName2, scoreForKeyword(pair[0], pair[1])];
    });
  }
}
function scoreForKeyword(keyword, providedScore) {
  if (providedScore) {
    return Number(providedScore);
  }
  return commonKeyword(keyword) ? 0 : 1;
}
function commonKeyword(keyword) {
  return COMMON_KEYWORDS.includes(keyword.toLowerCase());
}
const seenDeprecations = {};
const error = (message) => {
  console.error(message);
};
const warn = (message, ...args) => {
  console.log(`WARN: ${message}`, ...args);
};
const deprecated = (version2, message) => {
  if (seenDeprecations[`${version2}/${message}`])
    return;
  console.log(`Deprecated as of ${version2}. ${message}`);
  seenDeprecations[`${version2}/${message}`] = true;
};
const MultiClassError = new Error();
function remapScopeNames(mode, regexes, { key }) {
  let offset2 = 0;
  const scopeNames = mode[key];
  const emit = {};
  const positions = {};
  for (let i = 1; i <= regexes.length; i++) {
    positions[i + offset2] = scopeNames[i];
    emit[i + offset2] = true;
    offset2 += countMatchGroups(regexes[i - 1]);
  }
  mode[key] = positions;
  mode[key]._emit = emit;
  mode[key]._multi = true;
}
function beginMultiClass(mode) {
  if (!Array.isArray(mode.begin))
    return;
  if (mode.skip || mode.excludeBegin || mode.returnBegin) {
    error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
    throw MultiClassError;
  }
  if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
    error("beginScope must be object");
    throw MultiClassError;
  }
  remapScopeNames(mode, mode.begin, { key: "beginScope" });
  mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
}
function endMultiClass(mode) {
  if (!Array.isArray(mode.end))
    return;
  if (mode.skip || mode.excludeEnd || mode.returnEnd) {
    error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
    throw MultiClassError;
  }
  if (typeof mode.endScope !== "object" || mode.endScope === null) {
    error("endScope must be object");
    throw MultiClassError;
  }
  remapScopeNames(mode, mode.end, { key: "endScope" });
  mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
}
function scopeSugar(mode) {
  if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
    mode.beginScope = mode.scope;
    delete mode.scope;
  }
}
function MultiClass(mode) {
  scopeSugar(mode);
  if (typeof mode.beginScope === "string") {
    mode.beginScope = { _wrap: mode.beginScope };
  }
  if (typeof mode.endScope === "string") {
    mode.endScope = { _wrap: mode.endScope };
  }
  beginMultiClass(mode);
  endMultiClass(mode);
}
function compileLanguage(language) {
  function langRe(value, global2) {
    return new RegExp(source(value), "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global2 ? "g" : ""));
  }
  class MultiRegex {
    constructor() {
      this.matchIndexes = {};
      this.regexes = [];
      this.matchAt = 1;
      this.position = 0;
    }
    addRule(re, opts) {
      opts.position = this.position++;
      this.matchIndexes[this.matchAt] = opts;
      this.regexes.push([opts, re]);
      this.matchAt += countMatchGroups(re) + 1;
    }
    compile() {
      if (this.regexes.length === 0) {
        this.exec = () => null;
      }
      const terminators = this.regexes.map((el) => el[1]);
      this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
      this.lastIndex = 0;
    }
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const match = this.matcherRe.exec(s);
      if (!match) {
        return null;
      }
      const i = match.findIndex((el, i2) => i2 > 0 && el !== void 0);
      const matchData = this.matchIndexes[i];
      match.splice(0, i);
      return Object.assign(match, matchData);
    }
  }
  class ResumableMultiRegex {
    constructor() {
      this.rules = [];
      this.multiRegexes = [];
      this.count = 0;
      this.lastIndex = 0;
      this.regexIndex = 0;
    }
    getMatcher(index) {
      if (this.multiRegexes[index])
        return this.multiRegexes[index];
      const matcher = new MultiRegex();
      this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
      matcher.compile();
      this.multiRegexes[index] = matcher;
      return matcher;
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    addRule(re, opts) {
      this.rules.push([re, opts]);
      if (opts.type === "begin")
        this.count++;
    }
    exec(s) {
      const m = this.getMatcher(this.regexIndex);
      m.lastIndex = this.lastIndex;
      let result = m.exec(s);
      if (this.resumingScanAtSamePosition()) {
        if (result && result.index === this.lastIndex)
          ;
        else {
          const m2 = this.getMatcher(0);
          m2.lastIndex = this.lastIndex + 1;
          result = m2.exec(s);
        }
      }
      if (result) {
        this.regexIndex += result.position + 1;
        if (this.regexIndex === this.count) {
          this.considerAll();
        }
      }
      return result;
    }
  }
  function buildModeRegex(mode) {
    const mm = new ResumableMultiRegex();
    mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
    if (mode.terminatorEnd) {
      mm.addRule(mode.terminatorEnd, { type: "end" });
    }
    if (mode.illegal) {
      mm.addRule(mode.illegal, { type: "illegal" });
    }
    return mm;
  }
  function compileMode(mode, parent) {
    const cmode = mode;
    if (mode.isCompiled)
      return cmode;
    [
      scopeClassName,
      compileMatch,
      MultiClass,
      beforeMatchExt
    ].forEach((ext) => ext(mode, parent));
    language.compilerExtensions.forEach((ext) => ext(mode, parent));
    mode.__beforeBegin = null;
    [
      beginKeywords,
      compileIllegal,
      compileRelevance
    ].forEach((ext) => ext(mode, parent));
    mode.isCompiled = true;
    let keywordPattern = null;
    if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
      mode.keywords = Object.assign({}, mode.keywords);
      keywordPattern = mode.keywords.$pattern;
      delete mode.keywords.$pattern;
    }
    keywordPattern = keywordPattern || /\w+/;
    if (mode.keywords) {
      mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
    }
    cmode.keywordPatternRe = langRe(keywordPattern, true);
    if (parent) {
      if (!mode.begin)
        mode.begin = /\B|\b/;
      cmode.beginRe = langRe(cmode.begin);
      if (!mode.end && !mode.endsWithParent)
        mode.end = /\B|\b/;
      if (mode.end)
        cmode.endRe = langRe(cmode.end);
      cmode.terminatorEnd = source(cmode.end) || "";
      if (mode.endsWithParent && parent.terminatorEnd) {
        cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
      }
    }
    if (mode.illegal)
      cmode.illegalRe = langRe(mode.illegal);
    if (!mode.contains)
      mode.contains = [];
    mode.contains = [].concat(...mode.contains.map(function(c) {
      return expandOrCloneMode(c === "self" ? mode : c);
    }));
    mode.contains.forEach(function(c) {
      compileMode(c, cmode);
    });
    if (mode.starts) {
      compileMode(mode.starts, parent);
    }
    cmode.matcher = buildModeRegex(cmode);
    return cmode;
  }
  if (!language.compilerExtensions)
    language.compilerExtensions = [];
  if (language.contains && language.contains.includes("self")) {
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  }
  language.classNameAliases = inherit$1(language.classNameAliases || {});
  return compileMode(language);
}
function dependencyOnParent(mode) {
  if (!mode)
    return false;
  return mode.endsWithParent || dependencyOnParent(mode.starts);
}
function expandOrCloneMode(mode) {
  if (mode.variants && !mode.cachedVariants) {
    mode.cachedVariants = mode.variants.map(function(variant) {
      return inherit$1(mode, { variants: null }, variant);
    });
  }
  if (mode.cachedVariants) {
    return mode.cachedVariants;
  }
  if (dependencyOnParent(mode)) {
    return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
  }
  if (Object.isFrozen(mode)) {
    return inherit$1(mode);
  }
  return mode;
}
var version = "11.4.0";
class HTMLInjectionError extends Error {
  constructor(reason, html) {
    super(reason);
    this.name = "HTMLInjectionError";
    this.html = html;
  }
}
const escape = escapeHTML;
const inherit = inherit$1;
const NO_MATCH = Symbol("nomatch");
const MAX_KEYWORD_HITS = 7;
const HLJS = function(hljs) {
  const languages = Object.create(null);
  const aliases = Object.create(null);
  const plugins = [];
  let SAFE_MODE = true;
  const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
  const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
  let options = {
    ignoreUnescapedHTML: false,
    throwUnescapedHTML: false,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: "hljs-",
    cssSelector: "pre code",
    languages: null,
    __emitter: TokenTreeEmitter
  };
  function shouldNotHighlight(languageName) {
    return options.noHighlightRe.test(languageName);
  }
  function blockLanguage(block) {
    let classes = block.className + " ";
    classes += block.parentNode ? block.parentNode.className : "";
    const match = options.languageDetectRe.exec(classes);
    if (match) {
      const language = getLanguage(match[1]);
      if (!language) {
        warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
        warn("Falling back to no-highlight mode for this block.", block);
      }
      return language ? match[1] : "no-highlight";
    }
    return classes.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
  }
  function highlight2(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
    let code = "";
    let languageName = "";
    if (typeof optionsOrCode === "object") {
      code = codeOrLanguageName;
      ignoreIllegals = optionsOrCode.ignoreIllegals;
      languageName = optionsOrCode.language;
    } else {
      deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
      deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
      languageName = codeOrLanguageName;
      code = optionsOrCode;
    }
    if (ignoreIllegals === void 0) {
      ignoreIllegals = true;
    }
    const context = {
      code,
      language: languageName
    };
    fire("before:highlight", context);
    const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
    result.code = context.code;
    fire("after:highlight", result);
    return result;
  }
  function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
    const keywordHits = Object.create(null);
    function keywordData(mode, matchText) {
      return mode.keywords[matchText];
    }
    function processKeywords() {
      if (!top2.keywords) {
        emitter.addText(modeBuffer);
        return;
      }
      let lastIndex = 0;
      top2.keywordPatternRe.lastIndex = 0;
      let match = top2.keywordPatternRe.exec(modeBuffer);
      let buf = "";
      while (match) {
        buf += modeBuffer.substring(lastIndex, match.index);
        const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
        const data = keywordData(top2, word);
        if (data) {
          const [kind, keywordRelevance] = data;
          emitter.addText(buf);
          buf = "";
          keywordHits[word] = (keywordHits[word] || 0) + 1;
          if (keywordHits[word] <= MAX_KEYWORD_HITS)
            relevance += keywordRelevance;
          if (kind.startsWith("_")) {
            buf += match[0];
          } else {
            const cssClass = language.classNameAliases[kind] || kind;
            emitter.addKeyword(match[0], cssClass);
          }
        } else {
          buf += match[0];
        }
        lastIndex = top2.keywordPatternRe.lastIndex;
        match = top2.keywordPatternRe.exec(modeBuffer);
      }
      buf += modeBuffer.substr(lastIndex);
      emitter.addText(buf);
    }
    function processSubLanguage() {
      if (modeBuffer === "")
        return;
      let result2 = null;
      if (typeof top2.subLanguage === "string") {
        if (!languages[top2.subLanguage]) {
          emitter.addText(modeBuffer);
          return;
        }
        result2 = _highlight(top2.subLanguage, modeBuffer, true, continuations[top2.subLanguage]);
        continuations[top2.subLanguage] = result2._top;
      } else {
        result2 = highlightAuto(modeBuffer, top2.subLanguage.length ? top2.subLanguage : null);
      }
      if (top2.relevance > 0) {
        relevance += result2.relevance;
      }
      emitter.addSublanguage(result2._emitter, result2.language);
    }
    function processBuffer() {
      if (top2.subLanguage != null) {
        processSubLanguage();
      } else {
        processKeywords();
      }
      modeBuffer = "";
    }
    function emitMultiClass(scope, match) {
      let i = 1;
      while (match[i] !== void 0) {
        if (!scope._emit[i]) {
          i++;
          continue;
        }
        const klass = language.classNameAliases[scope[i]] || scope[i];
        const text = match[i];
        if (klass) {
          emitter.addKeyword(text, klass);
        } else {
          modeBuffer = text;
          processKeywords();
          modeBuffer = "";
        }
        i++;
      }
    }
    function startNewMode(mode, match) {
      if (mode.scope && typeof mode.scope === "string") {
        emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
      }
      if (mode.beginScope) {
        if (mode.beginScope._wrap) {
          emitter.addKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
          modeBuffer = "";
        } else if (mode.beginScope._multi) {
          emitMultiClass(mode.beginScope, match);
          modeBuffer = "";
        }
      }
      top2 = Object.create(mode, { parent: { value: top2 } });
      return top2;
    }
    function endOfMode(mode, match, matchPlusRemainder) {
      let matched = startsWith(mode.endRe, matchPlusRemainder);
      if (matched) {
        if (mode["on:end"]) {
          const resp = new Response(mode);
          mode["on:end"](match, resp);
          if (resp.isMatchIgnored)
            matched = false;
        }
        if (matched) {
          while (mode.endsParent && mode.parent) {
            mode = mode.parent;
          }
          return mode;
        }
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, match, matchPlusRemainder);
      }
    }
    function doIgnore(lexeme) {
      if (top2.matcher.regexIndex === 0) {
        modeBuffer += lexeme[0];
        return 1;
      } else {
        resumeScanAtSamePosition = true;
        return 0;
      }
    }
    function doBeginMatch(match) {
      const lexeme = match[0];
      const newMode = match.rule;
      const resp = new Response(newMode);
      const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
      for (const cb of beforeCallbacks) {
        if (!cb)
          continue;
        cb(match, resp);
        if (resp.isMatchIgnored)
          return doIgnore(lexeme);
      }
      if (newMode.skip) {
        modeBuffer += lexeme;
      } else {
        if (newMode.excludeBegin) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (!newMode.returnBegin && !newMode.excludeBegin) {
          modeBuffer = lexeme;
        }
      }
      startNewMode(newMode, match);
      return newMode.returnBegin ? 0 : lexeme.length;
    }
    function doEndMatch(match) {
      const lexeme = match[0];
      const matchPlusRemainder = codeToHighlight.substr(match.index);
      const endMode = endOfMode(top2, match, matchPlusRemainder);
      if (!endMode) {
        return NO_MATCH;
      }
      const origin = top2;
      if (top2.endScope && top2.endScope._wrap) {
        processBuffer();
        emitter.addKeyword(lexeme, top2.endScope._wrap);
      } else if (top2.endScope && top2.endScope._multi) {
        processBuffer();
        emitMultiClass(top2.endScope, match);
      } else if (origin.skip) {
        modeBuffer += lexeme;
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (origin.excludeEnd) {
          modeBuffer = lexeme;
        }
      }
      do {
        if (top2.scope) {
          emitter.closeNode();
        }
        if (!top2.skip && !top2.subLanguage) {
          relevance += top2.relevance;
        }
        top2 = top2.parent;
      } while (top2 !== endMode.parent);
      if (endMode.starts) {
        startNewMode(endMode.starts, match);
      }
      return origin.returnEnd ? 0 : lexeme.length;
    }
    function processContinuations() {
      const list = [];
      for (let current = top2; current !== language; current = current.parent) {
        if (current.scope) {
          list.unshift(current.scope);
        }
      }
      list.forEach((item) => emitter.openNode(item));
    }
    let lastMatch = {};
    function processLexeme(textBeforeMatch, match) {
      const lexeme = match && match[0];
      modeBuffer += textBeforeMatch;
      if (lexeme == null) {
        processBuffer();
        return 0;
      }
      if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
        modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
        if (!SAFE_MODE) {
          const err = new Error(`0 width match regex (${languageName})`);
          err.languageName = languageName;
          err.badRule = lastMatch.rule;
          throw err;
        }
        return 1;
      }
      lastMatch = match;
      if (match.type === "begin") {
        return doBeginMatch(match);
      } else if (match.type === "illegal" && !ignoreIllegals) {
        const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top2.scope || "<unnamed>") + '"');
        err.mode = top2;
        throw err;
      } else if (match.type === "end") {
        const processed = doEndMatch(match);
        if (processed !== NO_MATCH) {
          return processed;
        }
      }
      if (match.type === "illegal" && lexeme === "") {
        return 1;
      }
      if (iterations > 1e5 && iterations > match.index * 3) {
        const err = new Error("potential infinite loop, way more iterations than matches");
        throw err;
      }
      modeBuffer += lexeme;
      return lexeme.length;
    }
    const language = getLanguage(languageName);
    if (!language) {
      error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
      throw new Error('Unknown language: "' + languageName + '"');
    }
    const md = compileLanguage(language);
    let result = "";
    let top2 = continuation || md;
    const continuations = {};
    const emitter = new options.__emitter(options);
    processContinuations();
    let modeBuffer = "";
    let relevance = 0;
    let index = 0;
    let iterations = 0;
    let resumeScanAtSamePosition = false;
    try {
      top2.matcher.considerAll();
      for (; ; ) {
        iterations++;
        if (resumeScanAtSamePosition) {
          resumeScanAtSamePosition = false;
        } else {
          top2.matcher.considerAll();
        }
        top2.matcher.lastIndex = index;
        const match = top2.matcher.exec(codeToHighlight);
        if (!match)
          break;
        const beforeMatch = codeToHighlight.substring(index, match.index);
        const processedCount = processLexeme(beforeMatch, match);
        index = match.index + processedCount;
      }
      processLexeme(codeToHighlight.substr(index));
      emitter.closeAllNodes();
      emitter.finalize();
      result = emitter.toHTML();
      return {
        language: languageName,
        value: result,
        relevance,
        illegal: false,
        _emitter: emitter,
        _top: top2
      };
    } catch (err) {
      if (err.message && err.message.includes("Illegal")) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: true,
          relevance: 0,
          _illegalBy: {
            message: err.message,
            index,
            context: codeToHighlight.slice(index - 100, index + 100),
            mode: err.mode,
            resultSoFar: result
          },
          _emitter: emitter
        };
      } else if (SAFE_MODE) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: false,
          relevance: 0,
          errorRaised: err,
          _emitter: emitter,
          _top: top2
        };
      } else {
        throw err;
      }
    }
  }
  function justTextHighlightResult(code) {
    const result = {
      value: escape(code),
      illegal: false,
      relevance: 0,
      _top: PLAINTEXT_LANGUAGE,
      _emitter: new options.__emitter(options)
    };
    result._emitter.addText(code);
    return result;
  }
  function highlightAuto(code, languageSubset) {
    languageSubset = languageSubset || options.languages || Object.keys(languages);
    const plaintext = justTextHighlightResult(code);
    const results = languageSubset.filter(getLanguage).filter(autoDetection).map((name) => _highlight(name, code, false));
    results.unshift(plaintext);
    const sorted = results.sort((a, b) => {
      if (a.relevance !== b.relevance)
        return b.relevance - a.relevance;
      if (a.language && b.language) {
        if (getLanguage(a.language).supersetOf === b.language) {
          return 1;
        } else if (getLanguage(b.language).supersetOf === a.language) {
          return -1;
        }
      }
      return 0;
    });
    const [best, secondBest] = sorted;
    const result = best;
    result.secondBest = secondBest;
    return result;
  }
  function updateClassName(element, currentLang, resultLang) {
    const language = currentLang && aliases[currentLang] || resultLang;
    element.classList.add("hljs");
    element.classList.add(`language-${language}`);
  }
  function highlightElement(element) {
    let node = null;
    const language = blockLanguage(element);
    if (shouldNotHighlight(language))
      return;
    fire("before:highlightElement", { el: element, language });
    if (element.children.length > 0) {
      if (!options.ignoreUnescapedHTML) {
        console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
        console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
        console.warn("The element with unescaped HTML:");
        console.warn(element);
      }
      if (options.throwUnescapedHTML) {
        const err = new HTMLInjectionError("One of your code blocks includes unescaped HTML.", element.innerHTML);
        throw err;
      }
    }
    node = element;
    const text = node.textContent;
    const result = language ? highlight2(text, { language, ignoreIllegals: true }) : highlightAuto(text);
    element.innerHTML = result.value;
    updateClassName(element, language, result.language);
    element.result = {
      language: result.language,
      re: result.relevance,
      relevance: result.relevance
    };
    if (result.secondBest) {
      element.secondBest = {
        language: result.secondBest.language,
        relevance: result.secondBest.relevance
      };
    }
    fire("after:highlightElement", { el: element, result, text });
  }
  function configure(userOptions) {
    options = inherit(options, userOptions);
  }
  const initHighlighting = () => {
    highlightAll();
    deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };
  function initHighlightingOnLoad() {
    highlightAll();
    deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }
  let wantsHighlight = false;
  function highlightAll() {
    if (document.readyState === "loading") {
      wantsHighlight = true;
      return;
    }
    const blocks = document.querySelectorAll(options.cssSelector);
    blocks.forEach(highlightElement);
  }
  function boot() {
    if (wantsHighlight)
      highlightAll();
  }
  if (typeof window !== "undefined" && window.addEventListener) {
    window.addEventListener("DOMContentLoaded", boot, false);
  }
  function registerLanguage(languageName, languageDefinition) {
    let lang = null;
    try {
      lang = languageDefinition(hljs);
    } catch (error$1) {
      error("Language definition for '{}' could not be registered.".replace("{}", languageName));
      if (!SAFE_MODE) {
        throw error$1;
      } else {
        error(error$1);
      }
      lang = PLAINTEXT_LANGUAGE;
    }
    if (!lang.name)
      lang.name = languageName;
    languages[languageName] = lang;
    lang.rawDefinition = languageDefinition.bind(null, hljs);
    if (lang.aliases) {
      registerAliases(lang.aliases, { languageName });
    }
  }
  function unregisterLanguage(languageName) {
    delete languages[languageName];
    for (const alias of Object.keys(aliases)) {
      if (aliases[alias] === languageName) {
        delete aliases[alias];
      }
    }
  }
  function listLanguages() {
    return Object.keys(languages);
  }
  function getLanguage(name) {
    name = (name || "").toLowerCase();
    return languages[name] || languages[aliases[name]];
  }
  function registerAliases(aliasList, { languageName }) {
    if (typeof aliasList === "string") {
      aliasList = [aliasList];
    }
    aliasList.forEach((alias) => {
      aliases[alias.toLowerCase()] = languageName;
    });
  }
  function autoDetection(name) {
    const lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }
  function upgradePluginAPI(plugin) {
    if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
      plugin["before:highlightElement"] = (data) => {
        plugin["before:highlightBlock"](Object.assign({ block: data.el }, data));
      };
    }
    if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
      plugin["after:highlightElement"] = (data) => {
        plugin["after:highlightBlock"](Object.assign({ block: data.el }, data));
      };
    }
  }
  function addPlugin(plugin) {
    upgradePluginAPI(plugin);
    plugins.push(plugin);
  }
  function fire(event, args) {
    const cb = event;
    plugins.forEach(function(plugin) {
      if (plugin[cb]) {
        plugin[cb](args);
      }
    });
  }
  function deprecateHighlightBlock(el) {
    deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
    deprecated("10.7.0", "Please use highlightElement now.");
    return highlightElement(el);
  }
  Object.assign(hljs, {
    highlight: highlight2,
    highlightAuto,
    highlightAll,
    highlightElement,
    highlightBlock: deprecateHighlightBlock,
    configure,
    initHighlighting,
    initHighlightingOnLoad,
    registerLanguage,
    unregisterLanguage,
    listLanguages,
    getLanguage,
    registerAliases,
    autoDetection,
    inherit,
    addPlugin
  });
  hljs.debugMode = function() {
    SAFE_MODE = false;
  };
  hljs.safeMode = function() {
    SAFE_MODE = true;
  };
  hljs.versionString = version;
  hljs.regex = {
    concat,
    lookahead,
    either,
    optional,
    anyNumberOfTimes
  };
  for (const key in MODES) {
    if (typeof MODES[key] === "object") {
      deepFreeze$1(MODES[key]);
    }
  }
  Object.assign(hljs, MODES);
  return hljs;
};
var highlight = HLJS({});
var core = highlight;
highlight.HighlightJS = highlight;
highlight.default = highlight;
function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
var Highlight = defineComponent({
  props: {
    code: {
      type: String,
      required: true
    },
    language: {
      type: String,
      default: ""
    },
    autodetect: {
      type: Boolean,
      default: true
    },
    ignoreIllegals: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const language = ref(props.language);
    watch(() => props.language, (newLanguage) => {
      language.value = newLanguage;
    });
    const autodetect = computed(() => props.autodetect || !language.value);
    const cannotDetectLanguage = computed(() => !autodetect.value && !core.getLanguage(language.value));
    const className = computed(() => {
      if (cannotDetectLanguage.value) {
        return "";
      } else {
        return `hljs ${language.value}`;
      }
    });
    const highlightedCode = computed(() => {
      var _a;
      if (cannotDetectLanguage.value) {
        console.warn(`The language "${language.value}" you specified could not be found.`);
        return escapeHtml(props.code);
      }
      if (autodetect.value) {
        const result = core.highlightAuto(props.code);
        language.value = (_a = result.language) != null ? _a : "";
        return result.value;
      } else {
        const result = core.highlight(props.code, {
          language: language.value,
          ignoreIllegals: props.ignoreIllegals
        });
        return result.value;
      }
    });
    return {
      className,
      highlightedCode
    };
  },
  render() {
    return h("pre", {}, [
      h("code", {
        class: ["border", "mt-3", this.className],
        innerHTML: this.highlightedCode
      })
    ]);
  }
});
const _sfc_main$x = {
  emits: ["update:modelValue"],
  props: {
    type: makeString("text"),
    size: makeString(),
    plain: makeBoolean(false),
    state: makeBoolean(null),
    modelValue: make([Number, String], null)
  },
  setup(props, context) {
    const attributes = ref({});
    if (props.state !== null) {
      attributes.value = {
        "aria-invalid": props.state === false
      };
    }
    return {
      attributes,
      classes: computed(() => [
        {
          ["form-control" + (props.plain ? "-plaintext" : "")]: props.type !== "range",
          "form-range": props.type === "range",
          "is-valid": props.state === true,
          "is-invalid": props.state === false,
          ["form-control-" + props.size]: !!props.size,
          "form-control-color": props.type === "color"
        }
      ])
    };
  }
};
const _hoisted_1$c = ["type", "value"];
function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", mergeProps({
    type: $props.type,
    value: $props.modelValue,
    onInput: _cache[0] || (_cache[0] = (e) => _ctx.$emit("update:modelValue", $props.type === "number" ? Number(e.target.value) : e.target.value)),
    class: $setup.classes
  }, $setup.attributes), null, 16, _hoisted_1$c);
}
var Input = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$x]]);
const _sfc_main$w = {
  name: "InputGroupText",
  props: {
    tag: makeString("span")
  }
};
function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), { class: "input-group-text" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  });
}
var InputGroupText = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$w]]);
var InputGroup_vue_vue_type_style_index_0_lang = "";
const _sfc_main$v = {
  components: { InputGroupText },
  props: {
    tag: makeString("div"),
    size: makeString(),
    prepend: makeString(null),
    append: makeString(null),
    noWrap: makeBoolean(false)
  },
  setup(props) {
    return {
      classes: computed(() => [
        "input-group",
        {
          ["input-group-" + props.size]: !!props.size,
          "flex-nowrap": props.noWrap
        }
      ])
    };
  }
};
function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_InputGroupText = resolveComponent("InputGroupText");
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($setup.classes),
    role: "group"
  }, {
    default: withCtx(() => [
      _ctx.$slots.prepend || $props.prepend ? renderSlot(_ctx.$slots, "prepend", { key: 0 }, () => [
        $props.prepend ? (openBlock(), createBlock(_component_InputGroupText, { key: 0 }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($props.prepend), 1)
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "default"),
      _ctx.$slots.append || $props.append ? renderSlot(_ctx.$slots, "append", { key: 1 }, () => [
        $props.append ? (openBlock(), createBlock(_component_InputGroupText, { key: 0 }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($props.append), 1)
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]) : createCommentVNode("", true)
    ]),
    _: 3
  }, 8, ["class"]);
}
var InputGroup = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$v]]);
const _sfc_main$u = {
  name: "Link",
  props: {
    href: makeString("#"),
    target: makeString("_self")
  }
};
const _hoisted_1$b = ["href", "target"];
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", {
    href: $props.href,
    target: $props.target
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 8, _hoisted_1$b);
}
var Link = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$u]]);
const _sfc_main$t = {
  name: "ListGroup",
  props: {
    tag: makeString("ul"),
    flush: makeBoolean(false),
    numbered: makeBoolean(false),
    horizontal: {
      type: [Boolean, String],
      default: false
    }
  },
  setup(props) {
    let classes = ref([]);
    classes.value = [
      "list-group",
      {
        "list-group-flush": props.flush,
        "list-group-numbered": props.numbered,
        ["list-group-horizontal" + (typeof props.horizontal === "string" ? "-" + props.horizontal : "")]: props.horizontal
      }
    ];
    return {
      classes
    };
  }
};
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($setup.classes)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var ListGroup = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$t]]);
const _sfc_main$s = {
  name: "ListGroupItem",
  props: {
    tag: makeString("li"),
    active: makeBoolean(false),
    disabled: makeBoolean(false),
    href: makeString(null),
    to: { default: () => null },
    button: makeBoolean(false),
    variant: makeString(null)
  },
  setup(props, context) {
    const attributes = ref({});
    if (props.active) {
      attributes.value["aria-current"] = props.active;
    }
    if (props.disabled) {
      attributes.value["aria-disabled"] = props.disabled;
    }
    const theTag = ref(props.tag);
    if (props.href) {
      theTag.value = "a";
      attributes.value.href = props.href;
    }
    if (props.to) {
      theTag.value = "a";
      attributes.value.to = props.to;
    }
    if (props.button) {
      theTag.value = "button";
    }
    const classes = computed(() => [
      "list-group-item",
      {
        "active": props.active,
        "disabled": props.disabled,
        "list-group-item-action": props.button || theTag.value === "a",
        ["list-group-item-" + props.variant]: !!props.variant
      }
    ]);
    return {
      classes,
      attributes,
      theTag
    };
  }
};
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return $props.to ? (openBlock(), createBlock(_component_router_link, mergeProps({
    key: 0,
    to: $props.to,
    class: $setup.classes
  }, $setup.attributes), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "class"])) : (openBlock(), createBlock(resolveDynamicComponent($setup.theTag), mergeProps({
    key: 1,
    class: $setup.classes
  }, $setup.attributes), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]));
}
var ListGroupItem = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$s]]);
const _sfc_main$r = {
  name: "ModalBody"
};
const _hoisted_1$a = { class: "modal-body" };
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$a, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var ModalBody = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$r]]);
const _sfc_main$q = {
  name: "ModalHeader",
  props: {
    tag: makeString("div")
  }
};
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), { class: "modal-header" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  });
}
var ModalHeader = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$q]]);
const _sfc_main$p = {
  name: "ModalTitle",
  props: {
    tag: makeString("h5")
  }
};
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), { class: "modal-title" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  });
}
var ModalTitle = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$p]]);
const _sfc_main$o = {
  name: "ModalFooter"
};
const _hoisted_1$9 = { class: "modal-footer" };
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$9, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var ModalFooter = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$o]]);
const _sfc_main$n = {
  name: "Modal",
  components: { Button, ModalFooter, ModalTitle, ModalHeader, ModalBody, ButtonClose },
  emits: ["update:modelValue", "close", "ok", "showing", "hiding", "shown", "hidden", "stateChanged"],
  props: {
    animation: makeString("fade"),
    modelValue: makeBoolean(false),
    noClose: makeBoolean(false),
    noBody: makeBoolean(false),
    title: makeString(),
    titleTag: makeString("h5"),
    titleClass: make([Array, String, Object], null),
    titleAttrs: make(Object, null),
    noHeader: makeBoolean(false),
    header: makeString(),
    headerTag: makeString("div"),
    headerClass: make([Array, String, Object], null),
    headerAttrs: make(Object, null),
    noFooter: makeBoolean(false),
    okTitle: makeString("Ok"),
    closeTitle: makeString("Close"),
    okButtonOptions: make(Object, null),
    closeButtonOptions: make(Object, null),
    noOkButton: makeBoolean(false),
    noCloseButton: makeBoolean(false),
    static: makeBoolean(false),
    noBackdrop: makeBoolean(false),
    buttonSize: makeString(),
    scrollable: makeBoolean(false),
    centered: makeBoolean(false),
    size: makeString(),
    fullscreen: make([Boolean, String], false)
  },
  setup(props, context) {
    const shouldShowBackdrop = ref(false);
    const shown = ref(props.modelValue);
    const classes = computed(() => {
      return [
        "modal",
        {
          "fade": props.animation === "fade" || !props.animation,
          "modal-dialog-scrollable": props.scrollable,
          "modal-dialog-centered": props.centered
        }
      ];
    });
    const dialogClass = computed(() => {
      return [
        "modal-dialog",
        {
          ["modal-" + props.size]: !!props.size,
          ["modal-fullscreen" + (typeof props.fullscreen === "string" ? "-" + props.fullscreen : "")]: !!props.fullscreen
        }
      ];
    });
    watch(() => props.modelValue, (value) => shown.value = value);
    watch(shown, (value) => context.emit("update:modelValue", value));
    const toggleState = (value = null) => {
      if (typeof value === "boolean") {
        if (value) {
          context.emit("showing", true);
        } else {
          context.emit("hiding", true);
        }
        shown.value = value;
        if (value) {
          context.emit("shown", true);
        } else {
          context.emit("hidden", true);
        }
        context.emit("stateChanged", value);
      }
    };
    const show = () => toggleState(true);
    const hide2 = () => toggleState(false);
    const toggle = () => toggleState(!shown.value);
    return {
      classes,
      dialogClass,
      shouldShowBackdrop,
      shown,
      toggle,
      toggleState,
      show,
      hide: hide2,
      close() {
        context.emit("close", true);
        nextTick(() => toggleState(false));
      },
      ok() {
        context.emit("ok", true);
        nextTick(() => toggleState(false));
      }
    };
  },
  methods: {
    clickedOutside() {
      if (this.static && this.shown) {
        let modal = this.$refs.modal;
        modal.classList.add("modal-static");
        modal.style.display = "block";
        modal.style.overflowY = "hidden";
        setTimeout(() => {
          modal.style.overflowY = "";
          modal.classList.remove("modal-static");
        }, 300);
      } else if (!this.shown) {
        this.hide();
      }
    }
  },
  watch: {
    shown(shown) {
      let modal = this.$refs.modal;
      if (shown) {
        if (!document.body.hasAttribute("data-count-modal")) {
          document.body.setAttribute("data-count-modal", "1");
        } else {
          document.body.setAttribute("data-count-modal", (Number(document.body.getAttribute("data-count-modal")) + 1).toString());
        }
        let count = Number(document.body.getAttribute("data-count-modal"));
        if (count > 1) {
          modal.style.zIndex = (1155 * count).toString();
          setTimeout(() => this.$refs.backdrop.style.zIndex = (1155 * count - 105).toString(), 0);
        }
        this.shouldShowBackdrop = true;
        document.body.classList.add("modal-open");
        document.body.style.paddingRight = "17px";
        document.body.style.overflow = "hidden";
        setTimeout(() => this.$refs.backdrop.classList.add("show"), 0);
        modal.style.display = "block";
        setTimeout(() => modal.classList.add("show"), 150);
      } else {
        if (document.body.hasAttribute("data-count-modal")) {
          if (Number(document.body.getAttribute("data-count-modal")) > 1) {
            document.body.setAttribute("data-count-modal", (Number(document.body.getAttribute("data-count-modal")) - 1).toString());
          } else {
            document.body.removeAttribute("data-count-modal");
          }
        }
        modal.style.zIndex = "";
        this.$refs.backdrop.style.zIndex = "";
        let count = Number(document.body.getAttribute("data-count-modal"));
        if (count < 1) {
          document.body.classList.remove("modal-open");
          document.body.style.paddingRight = "";
          document.body.style.overflow = "";
        }
        modal.classList.remove("show");
        setTimeout(() => modal.style.display = "none", 150);
        setTimeout(() => {
          this.$refs.backdrop.classList.remove("show");
          setTimeout(() => this.shouldShowBackdrop = false, 150);
        }, 150);
      }
    }
  }
};
const _hoisted_1$8 = ["aria-hidden", "role"];
const _hoisted_2$5 = { class: "modal-content" };
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ModalTitle = resolveComponent("ModalTitle");
  const _component_ButtonClose = resolveComponent("ButtonClose");
  const _component_ModalHeader = resolveComponent("ModalHeader");
  const _component_ModalBody = resolveComponent("ModalBody");
  const _component_Button = resolveComponent("Button");
  const _component_ModalFooter = resolveComponent("ModalFooter");
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    createElementVNode("div", {
      ref: "modal",
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.clickedOutside && $options.clickedOutside(...args), ["self"])),
      class: normalizeClass($setup.classes),
      tabindex: "-1",
      "aria-hidden": $setup.shown,
      role: $setup.shown ? "dialog" : null
    }, [
      createElementVNode("div", {
        class: normalizeClass($setup.dialogClass)
      }, [
        createElementVNode("div", _hoisted_2$5, [
          !$props.noHeader && (_ctx.$slots.header || $props.header || $props.title) ? (openBlock(), createBlock(_component_ModalHeader, mergeProps({
            key: 0,
            tag: $props.headerTag,
            class: $props.headerClass
          }, $props.headerAttrs), {
            default: withCtx(() => [
              _ctx.$slots.header || $props.title ? renderSlot(_ctx.$slots, "header", { key: 0 }, () => [
                _ctx.$slots.title || $props.title ? (openBlock(), createBlock(_component_ModalTitle, mergeProps({
                  key: 0,
                  tag: $props.titleTag
                }, $props.titleAttrs, { class: $props.titleClass }), {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "title", {}, () => [
                      createTextVNode(toDisplayString($props.title), 1)
                    ])
                  ]),
                  _: 3
                }, 16, ["tag", "class"])) : createCommentVNode("", true)
              ]) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString($props.header), 1)
              ], 64)),
              !$props.noClose ? (openBlock(), createBlock(_component_ButtonClose, {
                key: 2,
                onClick: $setup.close
              }, null, 8, ["onClick"])) : createCommentVNode("", true)
            ]),
            _: 3
          }, 16, ["tag", "class"])) : createCommentVNode("", true),
          !$props.noBody ? (openBlock(), createBlock(_component_ModalBody, { key: 1 }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          })) : renderSlot(_ctx.$slots, "default", { key: 2 }),
          !$props.noFooter ? (openBlock(), createBlock(_component_ModalFooter, { key: 3 }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "footer", {}, () => [
                !$props.noCloseButton ? (openBlock(), createBlock(_component_Button, mergeProps({
                  key: 0,
                  variant: "secondary"
                }, $props.closeButtonOptions, {
                  size: $props.buttonSize,
                  onClick: $setup.close
                }), {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($props.closeTitle), 1)
                  ]),
                  _: 1
                }, 16, ["size", "onClick"])) : createCommentVNode("", true),
                !$props.noOkButton ? (openBlock(), createBlock(_component_Button, mergeProps({
                  key: 1,
                  variant: "primary"
                }, $props.okButtonOptions, {
                  size: $props.buttonSize,
                  onClick: $setup.ok
                }), {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($props.okTitle), 1)
                  ]),
                  _: 1
                }, 16, ["size", "onClick"])) : createCommentVNode("", true)
              ])
            ]),
            _: 3
          })) : createCommentVNode("", true)
        ])
      ], 2)
    ], 10, _hoisted_1$8),
    !$props.noBackdrop && $setup.shouldShowBackdrop ? (openBlock(), createElementBlock("div", {
      key: 0,
      ref: "backdrop",
      onClick: _cache[1] || (_cache[1] = (...args) => $setup.hide && $setup.hide(...args)),
      class: "modal-backdrop fade"
    }, null, 512)) : createCommentVNode("", true)
  ]);
}
var Modal = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n]]);
var navProps = {
  tag: makeString("ul"),
  align: makeString(null),
  vertical: makeBoolean(false),
  pills: makeBoolean(false),
  fill: makeBoolean(false),
  justified: makeBoolean(false),
  small: makeBoolean(false),
  tabs: makeBoolean(false)
};
const _sfc_main$m = {
  name: "Nav",
  props: navProps,
  setup(props) {
    const classes = computed(() => {
      return [
        "nav",
        {
          "small": props.small,
          "nav-tabs": props.tabs,
          "nav-pills": props.pills,
          "nav-fill": props.fill,
          "nav-justified": props.justified,
          "flex-column": props.vertical,
          "justify-content-center": props.align === "center",
          "justify-content-end": props.align === "right" || props.align === "end",
          "justify-content-start": props.align === "left" || props.align === "start"
        }
      ];
    });
    return {
      classes
    };
  }
};
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    class: normalizeClass($setup.classes)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var Nav = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m]]);
const _sfc_main$l = {
  name: "NavbarBrand",
  props: {
    tag: makeString("a"),
    href: makeString("#")
  },
  setup(props) {
    const classes = computed(() => {
      return [
        "navbar-brand"
      ];
    });
    const attributes = computed(() => {
      return {
        "href": props.tag === "a" ? props.href : null
      };
    });
    return {
      classes,
      attributes
    };
  }
};
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), mergeProps({ class: $setup.classes }, $setup.attributes), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
var NavbarBrand = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l]]);
const _sfc_main$k = {
  name: "NavbarToggler",
  props: {
    target: makeString()
  },
  methods: {
    toggleNavbar() {
      if (this.target) {
        let event = new CustomEvent("toggleCollapse", {
          detail: this.target,
          bubbles: false
        });
        document.dispatchEvent(event);
      }
    }
  }
};
const _hoisted_1$7 = /* @__PURE__ */ createElementVNode("span", { class: "navbar-toggler-icon" }, null, -1);
const _hoisted_2$4 = [
  _hoisted_1$7
];
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: "navbar-toggler",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleNavbar && $options.toggleNavbar(...args)),
    type: "button",
    "aria-expanded": "false"
  }, _hoisted_2$4);
}
var NavbarToggler = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k]]);
const _sfc_main$j = {
  name: "Navbar",
  components: { NavbarBrand, Container, NavbarToggler },
  props: {
    brand: makeString(),
    brandUrl: makeString("#"),
    toggler: makeString(),
    tag: makeString("nav"),
    type: makeString("light"),
    variant: makeString("light"),
    fluid: makeBoolean(true),
    toggleable: make([Boolean, String], false),
    sticky: makeBoolean(false),
    print: makeBoolean(false),
    fixed: make([Boolean, String], false)
  },
  setup(props) {
    const classes = computed(() => {
      return [
        "navbar",
        {
          ["navbar-" + props.type]: !!props.type,
          ["bg-" + props.variant]: !!props.variant,
          "navbar-expand": props.toggleable === false,
          ["navbar-expand-" + props.toggleable]: typeof props.toggleable === "string",
          ["navbar-fixed-" + props.fixed]: typeof props.fixed === "string",
          "sticky-top": props.sticky,
          "d-print": props.print
        }
      ];
    });
    return {
      classes
    };
  }
};
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavbarBrand = resolveComponent("NavbarBrand");
  const _component_NavbarToggler = resolveComponent("NavbarToggler");
  const _component_Container = resolveComponent("Container");
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($setup.classes)
  }, {
    default: withCtx(() => [
      createVNode(_component_Container, { fluid: $props.fluid }, {
        default: withCtx(() => [
          _ctx.$slots.brand || $props.brand ? (openBlock(), createBlock(_component_NavbarBrand, {
            key: 0,
            href: $props.brandUrl
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "brand", {}, () => [
                createTextVNode(toDisplayString($props.brand), 1)
              ])
            ]),
            _: 3
          }, 8, ["href"])) : createCommentVNode("", true),
          $props.toggler ? (openBlock(), createBlock(_component_NavbarToggler, {
            key: 1,
            target: $props.toggler
          }, null, 8, ["target"])) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["fluid"])
    ]),
    _: 3
  }, 8, ["class"]);
}
var Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j]]);
const _sfc_main$i = {
  name: "NavbarNav",
  components: { Nav },
  props: navProps
};
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Nav = resolveComponent("Nav");
  return openBlock(), createBlock(_component_Nav, mergeProps(_ctx.$props, { class: "navbar-nav" }), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var NavbarNav = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i]]);
const _sfc_main$h = {
  name: "NavLink",
  props: {
    ariaCurrent: makeString(null),
    active: makeBoolean(false),
    disabled: makeBoolean(false),
    href: makeString(null),
    target: makeString("_self"),
    tag: makeString("a"),
    to: make(Object, null)
  },
  setup(props) {
    const classes = computed(() => {
      return [
        "nav-link",
        {
          active: props.active,
          disabled: props.disabled
        }
      ];
    });
    const linkAttributes = computed(() => {
      return {
        href: props.tag === "a" ? props.href : null,
        ariaCurrent: props.ariaCurrent,
        target: props.target === "a" || props.href ? props.target : null
      };
    });
    return {
      classes,
      linkAttributes
    };
  }
};
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return $props.to ? (openBlock(), createBlock(_component_router_link, mergeProps({
    key: 0,
    to: $props.to,
    class: $setup.classes
  }, $setup.linkAttributes), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "class"])) : (openBlock(), createBlock(resolveDynamicComponent($props.tag), mergeProps({
    key: 1,
    class: $setup.classes
  }, $setup.linkAttributes), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]));
}
var NavLink = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h]]);
const _sfc_main$g = {
  name: "NavItem",
  components: { NavLink },
  props: {
    tag: makeString("li"),
    linkTag: makeString("a"),
    ariaCurrent: makeString(null),
    href: makeString("#"),
    to: make(Object, null),
    target: makeString("_self"),
    active: makeBoolean(false),
    disabled: makeBoolean(false)
  },
  setup(props) {
    const classes = computed(() => {
      return [
        "nav-item"
      ];
    });
    const attributes = computed(() => {
      return {};
    });
    return {
      classes,
      attributes
    };
  }
};
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavLink = resolveComponent("NavLink");
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), mergeProps({ class: $setup.classes }, $setup.attributes), {
    default: withCtx(() => [
      createVNode(_component_NavLink, {
        tag: $props.linkTag,
        target: $props.target,
        href: $props.href,
        to: $props.to,
        active: $props.active,
        disabled: $props.disabled,
        "aria-current": $props.ariaCurrent
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["tag", "target", "href", "to", "active", "disabled", "aria-current"])
    ]),
    _: 3
  }, 16, ["class"]);
}
var NavItem = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g]]);
const _sfc_main$f = {
  name: "NavItemDropdown",
  components: { Dropdown },
  props: __spreadProps(__spreadValues({}, dropdownProps), {
    tag: makeString("li")
  })
};
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Dropdown = resolveComponent("Dropdown");
  return openBlock(), createBlock(_component_Dropdown, mergeProps(_ctx.$props, { class: "nav-item" }), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var NavItemDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f]]);
const _sfc_main$e = {
  name: "OffCanvasTitle",
  props: {
    tag: makeString("h5")
  }
};
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), { class: "offcanvas-title" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  });
}
var OffCanvasTitle = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e]]);
const _sfc_main$d = {
  name: "OffCanvasHeader",
  emits: ["update:modelValue"],
  components: {
    OffCanvasTitle,
    ButtonClose
  },
  props: {
    modelValue: makeBoolean(false),
    tag: makeString("div"),
    title: makeString(),
    showClose: makeBoolean(true)
  },
  setup(props) {
    const classes = computed(() => {
      return [
        "offcanvas-header"
      ];
    });
    return {
      classes
    };
  }
};
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_OffCanvasTitle = resolveComponent("OffCanvasTitle");
  const _component_ButtonClose = resolveComponent("ButtonClose");
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($setup.classes)
  }, {
    default: withCtx(() => [
      _ctx.$slots.title || $props.title ? (openBlock(), createBlock(_component_OffCanvasTitle, { key: 0 }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createTextVNode(toDisplayString($props.title), 1)
          ])
        ]),
        _: 3
      })) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "default"),
      $props.showClose ? (openBlock(), createBlock(_component_ButtonClose, {
        key: 1,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", false))
      })) : createCommentVNode("", true)
    ]),
    _: 3
  }, 8, ["class"]);
}
var OffCanvasHeader = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
const _sfc_main$c = {
  name: "OffCanvasBody",
  props: {
    tag: makeString("div")
  }
};
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), { class: "offcanvas-body" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  });
}
var OffCanvasBody = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
const _sfc_main$b = {
  name: "OffCanvas",
  components: { OffCanvasBody, OffCanvasHeader, ButtonClose },
  emits: ["update:modelValue", "beforeShow", "beforeHide", "shown", "hidden"],
  props: {
    tabIndex: makeNumber(-1),
    id: makeString(),
    modelValue: makeBoolean(false),
    placement: makeString("start"),
    header: makeString(),
    headerClass: make([Array, Object, String], null),
    headerStyle: make([Object, String], null),
    title: makeString(),
    tag: makeString("div"),
    backdrop: makeBoolean(true)
  },
  setup(props) {
    const shown = ref(false);
    const showBackdrop = ref(false);
    return {
      shown,
      showBackdrop
    };
  },
  computed: {
    classes() {
      let placement = null;
      if (this.placement === "left" || this.placement === "start") {
        placement = "start";
      } else if (this.placement === "right" || this.placement === "end") {
        placement = "end";
      } else {
        placement = this.placement;
      }
      return [
        "offcanvas",
        {
          "show": this.shown,
          ["offcanvas-" + placement]: !!placement
        }
      ];
    }
  },
  watch: {
    modelValue(value) {
      this.shown = value;
    },
    shown(value) {
      var _a;
      this.$emit("update:modelValue", value);
      if (value) {
        this.showBackdrop = true;
        this.$nextTick(function() {
          var _a2;
          this.$emit("beforeShow", value);
          (_a2 = this.$refs.backdrop) == null ? void 0 : _a2.classList.add("show");
          this.$refs.theCanvas.style.visibility = "visible";
        });
      } else {
        (_a = this.$refs.backdrop) == null ? void 0 : _a.classList.remove("show");
        this.$emit("beforeHide", value);
      }
    }
  },
  methods: {
    transitionEnded() {
      if (!this.shown) {
        this.$refs.theCanvas.style.visibility = "hidden";
        this.showBackdrop = false;
        this.$emit("hidden", this.shown);
      } else {
        this.$emit("shown", this.shown);
      }
    },
    globalEventListener(e) {
      if (e.detail === this.id && this.id) {
        this.shown = !this.shown;
      }
    },
    show() {
      this.shown = true;
    },
    hide() {
      this.shown = false;
    },
    toggle() {
      this.shown = !this.shown;
    }
  },
  mounted() {
    this.transitionEnded();
    window.addEventListener("toggleOffCanvas", this.globalEventListener);
  },
  beforeUnmount() {
    window.removeEventListener("toggleOffCanvas", this.globalEventListener);
  }
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_OffCanvasHeader = resolveComponent("OffCanvasHeader");
  const _component_OffCanvasBody = resolveComponent("OffCanvasBody");
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    (openBlock(), createBlock(resolveDynamicComponent($props.tag), {
      ref: "theCanvas",
      onTransitionend: withModifiers($options.transitionEnded, ["self"]),
      class: normalizeClass($options.classes),
      tabindex: $props.tabIndex,
      "aria-labelledby": $props.id
    }, {
      default: withCtx(() => [
        _ctx.$slots.header || $props.header ? (openBlock(), createBlock(_component_OffCanvasHeader, {
          key: 0,
          style: normalizeStyle($props.headerStyle),
          class: normalizeClass($props.headerClass),
          modelValue: $setup.shown,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.shown = $event),
          title: $props.title
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "header", {}, () => [
              createTextVNode(toDisplayString($props.header), 1)
            ])
          ]),
          _: 3
        }, 8, ["style", "class", "modelValue", "title"])) : createCommentVNode("", true),
        createVNode(_component_OffCanvasBody, null, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["onTransitionend", "class", "tabindex", "aria-labelledby"])),
    $setup.showBackdrop && $props.backdrop ? (openBlock(), createElementBlock("div", {
      key: 0,
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.shown = false),
      ref: "backdrop",
      class: "offcanvas-backdrop fade"
    }, null, 512)) : createCommentVNode("", true)
  ]);
}
var OffCanvas = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
const _sfc_main$a = {
  name: "Popover",
  props: {
    target: {
      type: String,
      required: true
    },
    header: makeString(),
    modelValue: makeBoolean(false),
    placement: makeString("top"),
    triggers: make(String, "click")
  },
  setup(props) {
    const shown = ref(false);
    const bsDir = (placement) => {
      if (["auto", "auto-start", "auto-end", "top", "top-start", "top-end"].includes(placement)) {
        return "top";
      } else if (["bottom", "bottom-start", "bottom-end"].includes(placement)) {
        return "bottom";
      } else if (["right", "right-start", "right-end"].includes(placement)) {
        return "end";
      } else if (["left", "left-start", "left-end"].includes(placement)) {
        return "start";
      }
      return "top";
    };
    const dir = ref("top");
    dir.value = bsDir(props.placement);
    const classes = computed(() => {
      return [
        "popover",
        "fade",
        {
          show: shown.value,
          ["bs-popover-" + dir.value]: !!dir.value
        }
      ];
    });
    const events = computed(() => {
      return typeof props.triggers === "string" ? [props.triggers] : props.triggers;
    });
    const topLogger = {
      name: "topLogger",
      enabled: true,
      phase: "main",
      fn({ state }) {
        dir.value = bsDir(state.placement);
      }
    };
    const popperOptions = computed(() => ({
      placement: ["auto", "auto-start", "auto-end"].includes(props.placement) ? "top" : props.placement,
      modifiers: [
        topLogger,
        {
          name: "offset",
          enabled: true,
          options: {
            offset: (d) => {
              return [0, 10];
            }
          }
        }
      ]
    }));
    return {
      shown,
      classes,
      events,
      popper: ref(null),
      popperOptions
    };
  },
  watch: {
    modelValue(value) {
      this.shown = value;
    },
    shown(value) {
      this.$emit("update:modelValue", value);
      this.$nextTick(() => {
        if (value) {
          this.initPopper();
          let the = this;
          setTimeout(() => document.addEventListener("click", the.clickOutside), 0);
        } else {
          this.destroyPopper();
        }
      });
    }
  },
  mounted() {
    let target = document.getElementById(this.target);
    let the = this;
    target.addEventListener(this.triggers, () => the.shown = !the.shown);
  },
  beforeUnmount() {
    this.destroyPopper();
  },
  methods: {
    destroyPopper() {
      this.popper.destroy();
    },
    initPopper() {
      let target = document.getElementById(this.target);
      this.popper = createPopper(target, this.$refs.popover, this.popperOptions);
    },
    clickOutside(e) {
      let isTarget = document.getElementById(this.target).isSameNode(e.target);
      let isFromPopover = this.$refs.popover && (this.$refs.popover.isSameNode(e.target) || this.$refs.popover.contains(e.target));
      if (this.shown && !isTarget && !isFromPopover) {
        this.shown = false;
        document.removeEventListener("click", this.clickOutside);
      }
    }
  }
};
const _hoisted_1$6 = /* @__PURE__ */ createElementVNode("div", {
  "data-popper-arrow": "",
  class: "popover-arrow"
}, null, -1);
const _hoisted_2$3 = {
  key: 0,
  class: "popover-header"
};
const _hoisted_3$2 = { class: "popover-body" };
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    $setup.shown ? (openBlock(), createElementBlock("div", {
      key: 0,
      ref: "popover",
      class: normalizeClass($setup.classes),
      role: "tooltip"
    }, [
      _hoisted_1$6,
      _ctx.$slots.header || $props.header ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
        renderSlot(_ctx.$slots, "header", {}, () => [
          createTextVNode(toDisplayString($props.header), 1)
        ])
      ])) : createCommentVNode("", true),
      createElementVNode("div", _hoisted_3$2, [
        renderSlot(_ctx.$slots, "default")
      ])
    ], 2)) : createCommentVNode("", true)
  ]);
}
var Popover = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
const _sfc_main$9 = {
  name: "Radio",
  props: {
    name: makeString(null),
    id: makeString(null),
    modelValue: {
      default: null
    },
    value: {
      default: null
    }
  },
  setup(props, context) {
    const identifier = ref(null);
    if (props.id) {
      identifier.value = props.id;
    } else {
      identifier.value = "radio_id" + Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
    }
    const isChecked = computed(() => props.modelValue === props.value);
    return {
      identifier,
      isChecked
    };
  }
};
const _hoisted_1$5 = { class: "form-check" };
const _hoisted_2$2 = ["name", "id", "value", "checked"];
const _hoisted_3$1 = ["for"];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    createElementVNode("input", {
      class: "form-check-input",
      type: "radio",
      name: $props.name,
      id: $setup.identifier,
      value: $props.value,
      checked: $setup.isChecked,
      onChange: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", $props.value))
    }, null, 40, _hoisted_2$2),
    createElementVNode("label", {
      class: "form-check-label",
      for: $setup.identifier
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 8, _hoisted_3$1)
  ]);
}
var Radio = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
const _sfc_main$8 = {
  name: "Range",
  props: {
    min: makeNumber(null),
    max: makeNumber(null),
    step: makeNumber(1),
    modelValue: makeNumber(0)
  },
  setup(props) {
    return {
      classes: computed(() => [
        "form-range"
      ])
    };
  }
};
const _hoisted_1$4 = ["value", "min", "max", "step"];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", {
    value: $props.modelValue,
    onInput: _cache[0] || (_cache[0] = (e) => _ctx.$emit("update:modelValue", Number(e.target.value))),
    min: $props.min,
    max: $props.max,
    step: $props.step,
    type: "range",
    class: normalizeClass($setup.classes)
  }, null, 42, _hoisted_1$4);
}
var Range = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
var Rating_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = {
  name: "Rating",
  components: { Icon },
  props: {
    min: makeNumber(1),
    max: makeNumber(5),
    modelValue: makeNumber(1),
    variant: makeString(null)
  },
  setup(props, context) {
    const value = ref(props.modelValue);
    watch(value, (v) => context.emit("update:modelValue", v));
    watch(() => props.modelValue, (v) => value.value = v);
    const items = computed(() => {
      let its = [];
      for (let i = props.min; i <= props.max; i++) {
        its.push(i);
      }
      return its;
    });
    return {
      items,
      value
    };
  }
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  return openBlock(), createElementBlock("div", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.items, (i) => {
      return openBlock(), createBlock(_component_Icon, {
        icon: $setup.value >= i ? "star-fill" : "star",
        onClick: ($event) => $setup.value = i,
        variant: $props.variant,
        class: "me-1 wu-rating"
      }, null, 8, ["icon", "onClick", "variant"]);
    }), 256))
  ]);
}
var Rating = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const _sfc_main$6 = {
  name: "Row",
  props: {
    tag: makeString("div"),
    cols: make([String, Number], null),
    sm: make([Number, Boolean], null),
    md: make([Number, Boolean], null),
    lg: make([Number, Boolean], null),
    xl: make([Number, Boolean], null),
    alignItems: makeString(),
    justifyContent: makeString(),
    g: make([Number, String], null),
    gSm: make([Number, String], null),
    gMd: make([Number, String], null),
    gLg: make([Number, String], null),
    gXl: make([Number, String], null)
  },
  setup(props) {
    const classes = reactive([
      "row",
      {
        ["row-cols-" + props.cols]: props.cols,
        ["row-cols-sm-" + props.sm]: props.sm,
        ["row-cols-md-" + props.md]: props.md,
        ["row-cols-lg-" + props.lg]: props.lg,
        ["row-cols-xl-" + props.xl]: props.xl,
        ["align-items-" + props.alignItems]: props.alignItems,
        ["justify-content-" + props.justifyContent]: props.justifyContent,
        ["g-" + props.g]: props.g,
        ["g-sm-" + props.gSm]: props.gSm,
        ["g-md-" + props.gMd]: props.gMd,
        ["g-lg-" + props.gLg]: props.gLg,
        ["g-xl-" + props.gXl]: props.gXl
      }
    ]);
    return {
      classes
    };
  }
};
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($setup.classes)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var Row = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const _sfc_main$5 = {
  props: {
    multiple: false,
    size: makeString(),
    options: make(Array, []),
    valueField: make([Function, String], null),
    textField: make([Function, String], null),
    disabledField: makeString("disabled"),
    labelField: makeString("label"),
    modelValue: {
      default: null
    }
  },
  setup(props, context) {
    const model = ref(null);
    watch(model, (val) => context.emit("update:modelValue", val));
    watch(() => props.modelValue, (value) => model.value = value);
    const getEntity = (o, k) => {
      if (typeof props[k] === "string" || props[k] === null) {
        if (!isObject$7(o)) {
          return o;
        }
        return o[props[k] === null ? "text" : props[k]];
      } else if (typeof props[k] === "function") {
        return props[k](o);
      }
      return o;
    };
    return {
      getEntity,
      isDisabledOption: (o) => o.hasOwnProperty(props.disabledField) ? o[props.disabledField] : false,
      model,
      classes: computed(() => [
        "form-select",
        {
          ["form-select-" + props.size]: !!props.size
        }
      ])
    };
  }
};
const _hoisted_1$3 = ["multiple"];
const _hoisted_2$1 = ["label"];
const _hoisted_3 = ["value", "disabled"];
const _hoisted_4 = ["value", "disabled"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("select", {
    class: normalizeClass($setup.classes),
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event),
    multiple: $props.multiple
  }, [
    renderSlot(_ctx.$slots, "first"),
    renderSlot(_ctx.$slots, "default"),
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, (o, ok) => {
      return openBlock(), createElementBlock(Fragment, { key: ok }, [
        o.hasOwnProperty("options") ? (openBlock(), createElementBlock("optgroup", {
          key: 0,
          label: o[$props.labelField]
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(o.options, (gi, gi_key) => {
            return openBlock(), createElementBlock("option", {
              key: gi_key,
              value: $setup.getEntity(gi, "valueField"),
              disabled: $setup.isDisabledOption(gi)
            }, [
              renderSlot(_ctx.$slots, "text", {}, () => [
                createTextVNode(toDisplayString($setup.getEntity(gi, "textField")), 1)
              ])
            ], 8, _hoisted_3);
          }), 128))
        ], 8, _hoisted_2$1)) : (openBlock(), createElementBlock("option", {
          key: 1,
          value: $setup.getEntity(o, "valueField"),
          disabled: $setup.isDisabledOption(o)
        }, [
          renderSlot(_ctx.$slots, "text", {}, () => [
            createTextVNode(toDisplayString($setup.getEntity(o, "textField")), 1)
          ])
        ], 8, _hoisted_4))
      ], 64);
    }), 128)),
    renderSlot(_ctx.$slots, "last")
  ], 10, _hoisted_1$3)), [
    [vModelSelect, $setup.model]
  ]);
}
var Select = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = {
  name: "SpinButton",
  components: { Icon, Button, InputGroup },
  props: {
    modelValue: makeNumber(0),
    step: makeNumber(1),
    min: makeNumber(1),
    max: makeNumber(100),
    buttonVariant: makeString("secondary"),
    size: makeString(null),
    formatter: {
      type: Function,
      default: (v) => v
    }
  },
  setup(props, context) {
    const model = ref(props.modelValue);
    watch(model, (v) => context.emit("update:modelValue", v));
    watch(() => props.modelValue, (v) => model.value = v);
    return {
      model,
      updateValue: (type) => {
        if (type === "increment" && model.value + props.step <= props.max) {
          model.value += props.step;
        } else if (type === "decrement" && model.value - props.step >= props.min) {
          model.value -= props.step;
        }
      }
    };
  }
};
const _hoisted_1$2 = ["aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_Button = resolveComponent("Button");
  const _component_InputGroup = resolveComponent("InputGroup");
  return openBlock(), createBlock(_component_InputGroup, null, {
    prepend: withCtx(() => [
      createVNode(_component_Button, {
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.updateValue("decrement")),
        variant: $props.buttonVariant,
        size: $props.size,
        "aria-label": "Decrement"
      }, {
        default: withCtx(() => [
          createVNode(_component_Icon, { icon: "dash" })
        ]),
        _: 1
      }, 8, ["variant", "size"])
    ]),
    append: withCtx(() => [
      createVNode(_component_Button, {
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.updateValue("increment")),
        variant: $props.buttonVariant,
        size: $props.size,
        "aria-label": "Increment"
      }, {
        default: withCtx(() => [
          createVNode(_component_Icon, { icon: "plus" })
        ]),
        _: 1
      }, 8, ["variant", "size"])
    ]),
    default: withCtx(() => [
      createElementVNode("output", {
        role: "spinbutton",
        "aria-valuemin": $props.min,
        "aria-valuemax": $props.max,
        "aria-valuenow": $setup.model,
        "aria-valuetext": $setup.model,
        class: normalizeClass([{ ["form-control-" + $props.size]: $props.size }, "form-control text-center"])
      }, toDisplayString($props.formatter($setup.model)), 11, _hoisted_1$2)
    ]),
    _: 1
  });
}
var SpinButton = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = {
  emits: ["update:active"],
  props: {
    active: makeBoolean(false),
    title: makeString()
  },
  inject: ["registerTab", "unregisterTab"],
  setup(props, context) {
    const visible = ref(props.active);
    watch(() => props.active, (value) => visible.value = value);
    return {
      classes: computed(() => ["tab-pane", "fade"]),
      updateVisible: (value) => visible.value = value,
      visible
    };
  },
  mounted() {
    this.registerTab(this);
    this.applyVisibility(this.visible);
  },
  unmounted() {
    this.unregisterTab(this);
  },
  watch: {
    visible(value) {
      this.$emit("update:active", value);
      this.applyVisibility(value);
    }
  },
  methods: {
    applyVisibility(value) {
      if (value) {
        this.$el.classList.add("active");
        setTimeout(() => this.$el.classList.add("show"), 150);
      } else {
        this.$el.classList.remove("show");
        setTimeout(() => this.$el.classList.remove("active"), 0);
      }
    }
  }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($setup.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Tab = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {
  emits: ["update:modelValue"],
  components: { NavItem, Nav },
  props: {
    modelValue: makeNumber(0),
    card: makeBoolean(false),
    pills: makeBoolean(false),
    fill: makeBoolean(false),
    justified: makeBoolean(false),
    align: makeString(),
    end: makeBoolean(false),
    vertical: makeBoolean(false)
  },
  setup(props, context) {
    const tabsMap = ref([]);
    provide("registerTab", (tab) => {
      let index = tabsMap.value.indexOf(tab);
      if (index < 0) {
        tabsMap.value.push(tab);
      } else {
        tabsMap.value[index] = tab;
      }
    });
    provide("unregisterTab", (tab) => {
      let index = tabsMap.value.indexOf(tab);
      if (index > -1) {
        tabsMap.value.splice(index, 1);
      }
    });
    const active = ref(props.modelValue);
    watch(() => props.modelValue, (value) => active.value = value);
    watch(active, (value) => {
      context.emit("update:modelValue", value);
      tabsMap.value.filter((tab) => tab.visible).forEach((tab) => tab.visible = false);
      tabsMap.value[value].updateVisible(true);
    });
    return {
      tabsMap,
      classes: computed(() => {
        return {
          card: props.card,
          "d-flex": props.vertical,
          "align-items-start": props.vertical
        };
      }),
      active
    };
  }
};
const _hoisted_1$1 = {
  key: 0,
  class: "tab-content"
};
const _hoisted_2 = {
  key: 1,
  class: "tab-content"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavItem = resolveComponent("NavItem");
  const _component_Nav = resolveComponent("Nav");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($setup.classes)
  }, [
    $props.end ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("", true),
    createElementVNode("div", {
      class: normalizeClass({ "card-header": $props.card })
    }, [
      createVNode(_component_Nav, {
        tabs: true,
        pills: $props.pills,
        fill: $props.fill,
        justified: $props.justified,
        align: $props.align,
        vertical: $props.vertical,
        class: normalizeClass({ "card-header-pills": $props.pills })
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.tabsMap, (tab, tab_index) => {
            return openBlock(), createBlock(_component_NavItem, {
              role: "presentation",
              key: tab_index,
              tag: "li",
              active: tab_index === $setup.active,
              onClick: ($event) => $setup.active = tab_index,
              "link-tag": "button"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(tab.title), 1)
              ]),
              _: 2
            }, 1032, ["active", "onClick"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["pills", "fill", "justified", "align", "vertical", "class"])
    ], 2),
    !$props.end ? (openBlock(), createElementBlock("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("", true)
  ], 2);
}
var Tabs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  name: "Textarea",
  props: {
    size: makeString(),
    modelValue: makeString()
  },
  setup(props) {
    return {
      classes: computed(() => [
        "form-control",
        {
          ["form-control-" + props.size]: !!props.size
        }
      ])
    };
  }
};
const _hoisted_1 = ["value"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("textarea", {
    class: normalizeClass($setup.classes),
    value: $props.modelValue,
    onInput: _cache[0] || (_cache[0] = (e) => _ctx.$emit("update:modelValue", e.target.value))
  }, null, 42, _hoisted_1);
}
var Textarea = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = defineComponent({
  name: "TFoot",
  props: {
    variant: makeString(null),
    active: makeBoolean(false),
    align: makeString(null)
  },
  setup(props) {
    const classes = computed(() => {
      return [
        {
          ["table-" + props.variant]: props.variant,
          "table-active": props.active,
          ["align-" + props.align]: !!props.align
        }
      ];
    });
    return {
      classes
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("tfoot", {
    class: normalizeClass(_ctx.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var TFoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Accordion, AccordionBody, AccordionHeader, AccordionItem, Alert, AlertHeading, AlertLink, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonClose, ButtonGroup, ButtonToolbar, Card, CardBody, CardFooter, CardGroup, CardHeader, CardImg, CardLink, CardSubTitle, CardText, CardTitle, Checkbox, CheckboxGroup, Col, Collapse, Container, DataTable, DataTable as Datatable, Dropdown, DropdownButton, DropdownDivider, DropdownItem, DropdownMenu, FormGroup, FormLabel, Grid, GridCol, Highlight, Icon, Input, InputGroup, InputGroupText, Link, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Nav, NavItem, NavItemDropdown, NavLink, Navbar, NavbarBrand, NavbarNav, NavbarToggler, OffCanvas, OffCanvasBody, OffCanvasHeader, OffCanvasTitle, Popover, Radio, Range, Rating, Row, Select, SpinButton, TBody, TFoot, THead, Tab, Table, Tabs, Td, Textarea, Th, Tr };
