function ne() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var i = e.indexOf("Trident/");
  if (i > 0) {
    var s = e.indexOf("rv:");
    return parseInt(e.substring(s + 3, e.indexOf(".", s)), 10);
  }
  var r = e.indexOf("Edge/");
  return r > 0 ? parseInt(e.substring(r + 5, e.indexOf(".", r)), 10) : -1;
}
var x = void 0;
function L() {
  L.init || (L.init = !0, x = ne() !== -1);
}
var F = {
  render: function() {
    var t = this, i = t.$createElement, s = t._self._c || i;
    return s("div", { staticClass: "resize-observer", attrs: { tabindex: "-1" } });
  },
  staticRenderFns: [],
  _scopeId: "data-v-b329ee4c",
  name: "resize-observer",
  methods: {
    compareAndNotify: function() {
      (this._w !== this.$el.offsetWidth || this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.$emit("notify"));
    },
    addResizeHandlers: function() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers: function() {
      this._resizeObject && this._resizeObject.onload && (!x && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), delete this._resizeObject.onload);
    }
  },
  mounted: function() {
    var t = this;
    L(), this.$nextTick(function() {
      t._w = t.$el.offsetWidth, t._h = t.$el.offsetHeight;
    });
    var i = document.createElement("object");
    this._resizeObject = i, i.setAttribute("aria-hidden", "true"), i.setAttribute("tabindex", -1), i.onload = this.addResizeHandlers, i.type = "text/html", x && this.$el.appendChild(i), i.data = "about:blank", x || this.$el.appendChild(i);
  },
  beforeDestroy: function() {
    this.removeResizeHandlers();
  }
};
function le(e) {
  e.component("resize-observer", F), e.component("ResizeObserver", F);
}
var oe = {
  version: "0.4.5",
  install: le
}, D = null;
typeof window < "u" ? D = window.Vue : typeof global < "u" && (D = global.Vue);
D && D.use(oe);
function C(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? C = function(t) {
    return typeof t;
  } : C = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, C(e);
}
function ae(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function W(e, t) {
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
  }
}
function ce(e, t, i) {
  return t && W(e.prototype, t), i && W(e, i), e;
}
function q(e) {
  return de(e) || ue(e) || fe();
}
function de(e) {
  if (Array.isArray(e)) {
    for (var t = 0, i = new Array(e.length); t < e.length; t++)
      i[t] = e[t];
    return i;
  }
}
function ue(e) {
  if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]")
    return Array.from(e);
}
function fe() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function he(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function pe(e, t) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, r, o, a = function(n) {
    for (var c = arguments.length, h = new Array(c > 1 ? c - 1 : 0), m = 1; m < c; m++)
      h[m - 1] = arguments[m];
    if (o = h, !(s && n === r)) {
      var u = i.leading;
      typeof u == "function" && (u = u(n, r)), (!s || n !== r) && u && e.apply(void 0, [n].concat(q(o))), r = n, clearTimeout(s), s = setTimeout(function() {
        e.apply(void 0, [n].concat(q(o))), s = 0;
      }, t);
    }
  };
  return a._clear = function() {
    clearTimeout(s), s = null;
  }, a;
}
function G(e, t) {
  if (e === t)
    return !0;
  if (C(e) === "object") {
    for (var i in e)
      if (!G(e[i], t[i]))
        return !1;
    return !0;
  }
  return !1;
}
var me = /* @__PURE__ */ function() {
  function e(t, i, s) {
    ae(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(i, s);
  }
  return ce(e, [{
    key: "createObserver",
    value: function(i, s) {
      var r = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = he(i), this.callback = function(l, n) {
          r.options.callback(l, n), l && r.options.once && (r.frozen = !0, r.destroyObserver());
        }, this.callback && this.options.throttle) {
          var o = this.options.throttleOptions || {}, a = o.leading;
          this.callback = pe(this.callback, this.options.throttle, {
            leading: function(n) {
              return a === "both" || a === "visible" && n || a === "hidden" && !n;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(l) {
          var n = l[0];
          if (l.length > 1) {
            var c = l.find(function(m) {
              return m.isIntersecting;
            });
            c && (n = c);
          }
          if (r.callback) {
            var h = n.isIntersecting && n.intersectionRatio >= r.threshold;
            if (h === r.oldResult)
              return;
            r.oldResult = h, r.callback(h, n);
          }
        }, this.options.intersection), s.context.$nextTick(function() {
          r.observer && r.observer.observe(r.el);
        });
      }
    }
  }, {
    key: "destroyObserver",
    value: function() {
      this.observer && (this.observer.disconnect(), this.observer = null), this.callback && this.callback._clear && (this.callback._clear(), this.callback = null);
    }
  }, {
    key: "threshold",
    get: function() {
      return this.options.intersection && this.options.intersection.threshold || 0;
    }
  }]), e;
}();
function Y(e, t, i) {
  var s = t.value;
  if (!!s)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var r = new me(e, s, i);
      e._vue_visibilityState = r;
    }
}
function ve(e, t, i) {
  var s = t.value, r = t.oldValue;
  if (!G(s, r)) {
    var o = e._vue_visibilityState;
    if (!s) {
      J(e);
      return;
    }
    o ? o.createObserver(s, i) : Y(e, {
      value: s
    }, i);
  }
}
function J(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var Q = {
  bind: Y,
  update: ve,
  unbind: J
};
function _e(e) {
  e.directive("observe-visibility", Q);
}
var ye = {
  version: "0.4.6",
  install: _e
}, k = null;
typeof window < "u" ? k = window.Vue : typeof global < "u" && (k = global.Vue);
k && k.use(ye);
var be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Z = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports ? e.exports = i() : t.Scrollparent = i();
  })(be, function() {
    var t = /(auto|scroll)/, i = function(l, n) {
      return l.parentNode === null ? n : i(l.parentNode, n.concat([l]));
    }, s = function(l, n) {
      return getComputedStyle(l, null).getPropertyValue(n);
    }, r = function(l) {
      return s(l, "overflow") + s(l, "overflow-y") + s(l, "overflow-x");
    }, o = function(l) {
      return t.test(r(l));
    }, a = function(l) {
      if (l instanceof HTMLElement || l instanceof SVGElement) {
        for (var n = i(l.parentNode, []), c = 0; c < n.length; c += 1)
          if (o(n[c]))
            return n[c];
        return document.scrollingElement || document.documentElement;
      }
    };
    return a;
  });
})(Z);
const X = Z.exports;
var ee = {
  itemsLimit: 1e3
};
const te = {
  items: {
    type: Array,
    required: !0
  },
  keyField: {
    type: String,
    default: "id"
  },
  direction: {
    type: String,
    default: "vertical",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  listTag: {
    type: String,
    default: "div"
  },
  itemTag: {
    type: String,
    default: "div"
  }
};
function ie() {
  return this.items.length && typeof this.items[0] != "object";
}
let P = !1;
if (typeof window < "u") {
  P = !1;
  try {
    var ge = Object.defineProperty({}, "passive", {
      get() {
        P = !0;
      }
    });
    window.addEventListener("test", null, ge);
  } catch {
  }
}
let Se = 0;
var $e = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: F
  },
  directives: {
    ObserveVisibility: Q
  },
  props: {
    ...te,
    itemSize: {
      type: Number,
      default: null
    },
    gridItems: {
      type: Number,
      default: void 0
    },
    itemSecondarySize: {
      type: Number,
      default: void 0
    },
    minItemSize: {
      type: [Number, String],
      default: null
    },
    sizeField: {
      type: String,
      default: "size"
    },
    typeField: {
      type: String,
      default: "type"
    },
    buffer: {
      type: Number,
      default: 200
    },
    pageMode: {
      type: Boolean,
      default: !1
    },
    prerender: {
      type: Number,
      default: 0
    },
    emitUpdate: {
      type: Boolean,
      default: !1
    },
    skipHover: {
      type: Boolean,
      default: !1
    },
    listTag: {
      type: String,
      default: "div"
    },
    itemTag: {
      type: String,
      default: "div"
    },
    listClass: {
      type: [String, Object, Array],
      default: ""
    },
    itemClass: {
      type: [String, Object, Array],
      default: ""
    }
  },
  data() {
    return {
      pool: [],
      totalSize: 0,
      ready: !1,
      hoverKey: null
    };
  },
  computed: {
    sizes() {
      if (this.itemSize === null) {
        const e = {
          "-1": {
            accumulator: 0
          }
        }, t = this.items, i = this.sizeField, s = this.minItemSize;
        let r = 1e4, o = 0, a;
        for (let l = 0, n = t.length; l < n; l++)
          a = t[l][i] || s, a < r && (r = a), o += a, e[l] = {
            accumulator: o,
            size: a
          };
        return this.$_computedMinItemSize = r, e;
      }
      return [];
    },
    simpleArray: ie
  },
  watch: {
    items() {
      this.updateVisibleItems(!0);
    },
    pageMode() {
      this.applyPageMode(), this.updateVisibleItems(!1);
    },
    sizes: {
      handler() {
        this.updateVisibleItems(!1);
      },
      deep: !0
    },
    gridItems() {
      this.updateVisibleItems(!0);
    },
    itemSecondarySize() {
      this.updateVisibleItems(!0);
    }
  },
  created() {
    this.$_startIndex = 0, this.$_endIndex = 0, this.$_views = /* @__PURE__ */ new Map(), this.$_unusedViews = /* @__PURE__ */ new Map(), this.$_scrollDirty = !1, this.$_lastUpdateScrollPosition = 0, this.prerender && (this.$_prerender = !0, this.updateVisibleItems(!1)), this.gridItems && !this.itemSize && console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems");
  },
  mounted() {
    this.applyPageMode(), this.$nextTick(() => {
      this.$_prerender = !1, this.updateVisibleItems(!0), this.ready = !0;
    });
  },
  activated() {
    const e = this.$_lastUpdateScrollPosition;
    typeof e == "number" && this.$nextTick(() => {
      this.scrollToPosition(e);
    });
  },
  beforeDestroy() {
    this.removeListeners();
  },
  methods: {
    addView(e, t, i, s, r) {
      const o = {
        item: i,
        position: 0
      }, a = {
        id: Se++,
        index: t,
        used: !0,
        key: s,
        type: r
      };
      return Object.defineProperty(o, "nr", {
        configurable: !1,
        value: a
      }), e.push(o), o;
    },
    unuseView(e, t = !1) {
      const i = this.$_unusedViews, s = e.nr.type;
      let r = i.get(s);
      r || (r = [], i.set(s, r)), r.push(e), t || (e.nr.used = !1, e.position = -9999, this.$_views.delete(e.nr.key));
    },
    handleResize() {
      this.$emit("resize"), this.ready && this.updateVisibleItems(!1);
    },
    handleScroll(e) {
      this.$_scrollDirty || (this.$_scrollDirty = !0, requestAnimationFrame(() => {
        this.$_scrollDirty = !1;
        const {
          continuous: t
        } = this.updateVisibleItems(!1, !0);
        t || (clearTimeout(this.$_refreshTimout), this.$_refreshTimout = setTimeout(this.handleScroll, 100));
      }));
    },
    handleVisibilityChange(e, t) {
      this.ready && (e || t.boundingClientRect.width !== 0 || t.boundingClientRect.height !== 0 ? (this.$emit("visible"), requestAnimationFrame(() => {
        this.updateVisibleItems(!1);
      })) : this.$emit("hidden"));
    },
    updateVisibleItems(e, t = !1) {
      const i = this.itemSize, s = this.gridItems || 1, r = this.itemSecondarySize || i, o = this.$_computedMinItemSize, a = this.typeField, l = this.simpleArray ? null : this.keyField, n = this.items, c = n.length, h = this.sizes, m = this.$_views, u = this.$_unusedViews, $ = this.pool;
      let v, p, R, g, S;
      if (!c)
        v = p = g = S = R = 0;
      else if (this.$_prerender)
        v = g = 0, p = S = Math.min(this.prerender, n.length), R = null;
      else {
        const d = this.getScroll();
        if (t) {
          let y = d.start - this.$_lastUpdateScrollPosition;
          if (y < 0 && (y = -y), i === null && y < o || y < i)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = d.start;
        const _ = this.buffer;
        d.start -= _, d.end += _;
        let I = 0;
        if (this.$refs.before && (I = this.$refs.before.scrollHeight, d.start -= I), this.$refs.after) {
          const y = this.$refs.after.scrollHeight;
          d.end += y;
        }
        if (i === null) {
          let y, H = 0, j = c - 1, b = ~~(c / 2), K;
          do
            K = b, y = h[b].accumulator, y < d.start ? H = b : b < c - 1 && h[b + 1].accumulator > d.start && (j = b), b = ~~((H + j) / 2);
          while (b !== K);
          for (b < 0 && (b = 0), v = b, R = h[c - 1].accumulator, p = b; p < c && h[p].accumulator < d.end; p++)
            ;
          for (p === -1 ? p = n.length - 1 : (p++, p > c && (p = c)), g = v; g < c && I + h[g].accumulator < d.start; g++)
            ;
          for (S = g; S < c && I + h[S].accumulator < d.end; S++)
            ;
        } else {
          v = ~~(d.start / i * s);
          const y = v % s;
          v -= y, p = Math.ceil(d.end / i * s), g = Math.max(0, Math.floor((d.start - I) / i * s)), S = Math.floor((d.end - I) / i * s), v < 0 && (v = 0), p > c && (p = c), g < 0 && (g = 0), S > c && (S = c), R = Math.ceil(c / s) * i;
        }
      }
      p - v > ee.itemsLimit && this.itemsLimitError(), this.totalSize = R;
      let f;
      const V = v <= this.$_endIndex && p >= this.$_startIndex;
      if (this.$_continuous !== V) {
        if (V) {
          m.clear(), u.clear();
          for (let d = 0, _ = $.length; d < _; d++)
            f = $[d], this.unuseView(f);
        }
        this.$_continuous = V;
      } else if (V)
        for (let d = 0, _ = $.length; d < _; d++)
          f = $[d], f.nr.used && (e && (f.nr.index = n.indexOf(f.item)), (f.nr.index === -1 || f.nr.index < v || f.nr.index >= p) && this.unuseView(f));
      const B = V ? null : /* @__PURE__ */ new Map();
      let z, w, T, O;
      for (let d = v; d < p; d++) {
        z = n[d];
        const _ = l ? z[l] : z;
        if (_ == null)
          throw new Error(`Key is ${_} on item (keyField is '${l}')`);
        if (f = m.get(_), !i && !h[d].size) {
          f && this.unuseView(f);
          continue;
        }
        f ? (f.nr.used = !0, f.item = z) : (d === n.length - 1 && this.$emit("scroll-end"), d === 0 && this.$emit("scroll-start"), w = z[a], T = u.get(w), V ? T && T.length ? (f = T.pop(), f.item = z, f.nr.used = !0, f.nr.index = d, f.nr.key = _, f.nr.type = w) : f = this.addView($, d, z, _, w) : (O = B.get(w) || 0, (!T || O >= T.length) && (f = this.addView($, d, z, _, w), this.unuseView(f, !0), T = u.get(w)), f = T[O], f.item = z, f.nr.used = !0, f.nr.index = d, f.nr.key = _, f.nr.type = w, B.set(w, O + 1), O++), m.set(_, f)), i === null ? (f.position = h[d - 1].accumulator, f.offset = 0) : (f.position = Math.floor(d / s) * i, f.offset = d % s * r);
      }
      return this.$_startIndex = v, this.$_endIndex = p, this.emitUpdate && this.$emit("update", v, p, g, S), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, 300), {
        continuous: V
      };
    },
    getListenerTarget() {
      let e = X(this.$el);
      return window.document && (e === window.document.documentElement || e === window.document.body) && (e = window), e;
    },
    getScroll() {
      const {
        $el: e,
        direction: t
      } = this, i = t === "vertical";
      let s;
      if (this.pageMode) {
        const r = e.getBoundingClientRect(), o = i ? r.height : r.width;
        let a = -(i ? r.top : r.left), l = i ? window.innerHeight : window.innerWidth;
        a < 0 && (l += a, a = 0), a + l > o && (l = o - a), s = {
          start: a,
          end: a + l
        };
      } else
        i ? s = {
          start: e.scrollTop,
          end: e.scrollTop + e.clientHeight
        } : s = {
          start: e.scrollLeft,
          end: e.scrollLeft + e.clientWidth
        };
      return s;
    },
    applyPageMode() {
      this.pageMode ? this.addListeners() : this.removeListeners();
    },
    addListeners() {
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, P ? {
        passive: !0
      } : !1), this.listenerTarget.addEventListener("resize", this.handleResize);
    },
    removeListeners() {
      !this.listenerTarget || (this.listenerTarget.removeEventListener("scroll", this.handleScroll), this.listenerTarget.removeEventListener("resize", this.handleResize), this.listenerTarget = null);
    },
    scrollToItem(e) {
      let t;
      this.itemSize === null ? t = e > 0 ? this.sizes[e - 1].accumulator : 0 : t = Math.floor(e / this.gridItems) * this.itemSize, this.scrollToPosition(t);
    },
    scrollToPosition(e) {
      const t = this.direction === "vertical" ? {
        scroll: "scrollTop",
        start: "top"
      } : {
        scroll: "scrollLeft",
        start: "left"
      };
      let i, s, r;
      if (this.pageMode) {
        const o = X(this.$el), a = o.tagName === "HTML" ? 0 : o[t.scroll], l = o.getBoundingClientRect(), c = this.$el.getBoundingClientRect()[t.start] - l[t.start];
        i = o, s = t.scroll, r = e + a + c;
      } else
        i = this.$el, s = t.scroll, r = e;
      i[s] = r;
    },
    itemsLimitError() {
      throw setTimeout(() => {
        console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", this.$el), console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
      }), new Error("Rendered items limit reached");
    },
    sortViews() {
      this.pool.sort((e, t) => e.nr.index - t.nr.index);
    }
  }
};
function U(e, t, i, s, r, o, a, l, n, c) {
  typeof a != "boolean" && (n = l, l = a, a = !1);
  const h = typeof i == "function" ? i.options : i;
  e && e.render && (h.render = e.render, h.staticRenderFns = e.staticRenderFns, h._compiled = !0, r && (h.functional = !0)), s && (h._scopeId = s);
  let m;
  if (o ? (m = function(u) {
    u = u || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !u && typeof __VUE_SSR_CONTEXT__ < "u" && (u = __VUE_SSR_CONTEXT__), t && t.call(this, n(u)), u && u._registeredComponents && u._registeredComponents.add(o);
  }, h._ssrRegister = m) : t && (m = a ? function(u) {
    t.call(this, c(u, this.$root.$options.shadowRoot));
  } : function(u) {
    t.call(this, l(u));
  }), m)
    if (h.functional) {
      const u = h.render;
      h.render = function(v, p) {
        return m.call(p), u(v, p);
      };
    } else {
      const u = h.beforeCreate;
      h.beforeCreate = u ? [].concat(u, m) : [m];
    }
  return i;
}
const ze = $e;
var se = function() {
  var e, t, i = this, s = i.$createElement, r = i._self._c || s;
  return r(
    "div",
    {
      directives: [
        {
          name: "observe-visibility",
          rawName: "v-observe-visibility",
          value: i.handleVisibilityChange,
          expression: "handleVisibilityChange"
        }
      ],
      staticClass: "vue-recycle-scroller",
      class: (e = {
        ready: i.ready,
        "page-mode": i.pageMode
      }, e["direction-" + i.direction] = !0, e),
      on: {
        "&scroll": function(o) {
          return i.handleScroll.apply(null, arguments);
        }
      }
    },
    [
      i.$slots.before ? r(
        "div",
        { ref: "before", staticClass: "vue-recycle-scroller__slot" },
        [i._t("before")],
        2
      ) : i._e(),
      i._v(" "),
      r(
        i.listTag,
        {
          ref: "wrapper",
          tag: "component",
          staticClass: "vue-recycle-scroller__item-wrapper",
          class: i.listClass,
          style: (t = {}, t[i.direction === "vertical" ? "minHeight" : "minWidth"] = i.totalSize + "px", t)
        },
        [
          i._l(i.pool, function(o) {
            return r(
              i.itemTag,
              i._g(
                {
                  key: o.nr.id,
                  tag: "component",
                  staticClass: "vue-recycle-scroller__item-view",
                  class: [
                    i.itemClass,
                    {
                      hover: !i.skipHover && i.hoverKey === o.nr.key
                    }
                  ],
                  style: i.ready ? {
                    transform: "translate" + (i.direction === "vertical" ? "Y" : "X") + "(" + o.position + "px) translate" + (i.direction === "vertical" ? "X" : "Y") + "(" + o.offset + "px)",
                    width: i.gridItems ? (i.direction === "vertical" && i.itemSecondarySize || i.itemSize) + "px" : void 0,
                    height: i.gridItems ? (i.direction === "horizontal" && i.itemSecondarySize || i.itemSize) + "px" : void 0
                  } : null
                },
                i.skipHover ? {} : {
                  mouseenter: function() {
                    i.hoverKey = o.nr.key;
                  },
                  mouseleave: function() {
                    i.hoverKey = null;
                  }
                }
              ),
              [
                i._t("default", null, {
                  item: o.item,
                  index: o.nr.index,
                  active: o.nr.used
                })
              ],
              2
            );
          }),
          i._v(" "),
          i._t("empty")
        ],
        2
      ),
      i._v(" "),
      i.$slots.after ? r(
        "div",
        { ref: "after", staticClass: "vue-recycle-scroller__slot" },
        [i._t("after")],
        2
      ) : i._e(),
      i._v(" "),
      r("ResizeObserver", { on: { notify: i.handleResize } })
    ],
    1
  );
}, we = [];
se._withStripped = !0;
const Te = void 0, Ve = void 0, Ie = void 0, Re = !1, E = /* @__PURE__ */ U(
  { render: se, staticRenderFns: we },
  Te,
  ze,
  Ve,
  Re,
  Ie,
  !1,
  void 0,
  void 0,
  void 0
);
var Oe = {
  name: "DynamicScroller",
  components: {
    RecycleScroller: E
  },
  provide() {
    return typeof ResizeObserver < "u" && (this.$_resizeObserver = new ResizeObserver((e) => {
      requestAnimationFrame(() => {
        if (!!Array.isArray(e)) {
          for (const t of e)
            if (t.target) {
              const i = new CustomEvent("resize", {
                detail: {
                  contentRect: t.contentRect
                }
              });
              t.target.dispatchEvent(i);
            }
        }
      });
    })), {
      vscrollData: this.vscrollData,
      vscrollParent: this,
      vscrollResizeObserver: this.$_resizeObserver
    };
  },
  inheritAttrs: !1,
  props: {
    ...te,
    minItemSize: {
      type: [Number, String],
      required: !0
    }
  },
  data() {
    return {
      vscrollData: {
        active: !0,
        sizes: {},
        validSizes: {},
        keyField: this.keyField,
        simpleArray: !1
      }
    };
  },
  computed: {
    simpleArray: ie,
    itemsWithSize() {
      const e = [], {
        items: t,
        keyField: i,
        simpleArray: s
      } = this, r = this.vscrollData.sizes, o = t.length;
      for (let a = 0; a < o; a++) {
        const l = t[a], n = s ? a : l[i];
        let c = r[n];
        typeof c > "u" && !this.$_undefinedMap[n] && (c = 0), e.push({
          item: l,
          id: n,
          size: c
        });
      }
      return e;
    },
    listeners() {
      const e = {};
      for (const t in this.$listeners)
        t !== "resize" && t !== "visible" && (e[t] = this.$listeners[t]);
      return e;
    }
  },
  watch: {
    items() {
      this.forceUpdate(!1);
    },
    simpleArray: {
      handler(e) {
        this.vscrollData.simpleArray = e;
      },
      immediate: !0
    },
    direction(e) {
      this.forceUpdate(!0);
    },
    itemsWithSize(e, t) {
      const i = this.$el.scrollTop;
      let s = 0, r = 0;
      const o = Math.min(e.length, t.length);
      for (let l = 0; l < o && !(s >= i); l++)
        s += t[l].size || this.minItemSize, r += e[l].size || this.minItemSize;
      const a = r - s;
      a !== 0 && (this.$el.scrollTop += a);
    }
  },
  beforeCreate() {
    this.$_updates = [], this.$_undefinedSizes = 0, this.$_undefinedMap = {};
  },
  activated() {
    this.vscrollData.active = !0;
  },
  deactivated() {
    this.vscrollData.active = !1;
  },
  methods: {
    onScrollerResize() {
      this.$refs.scroller && this.forceUpdate(), this.$emit("resize");
    },
    onScrollerVisible() {
      this.$emit("vscroll:update", {
        force: !1
      }), this.$emit("visible");
    },
    forceUpdate(e = !0) {
      (e || this.simpleArray) && (this.vscrollData.validSizes = {}), this.$emit("vscroll:update", {
        force: !0
      });
    },
    scrollToItem(e) {
      const t = this.$refs.scroller;
      t && t.scrollToItem(e);
    },
    getItemSize(e, t = void 0) {
      const i = this.simpleArray ? t != null ? t : this.items.indexOf(e) : e[this.keyField];
      return this.vscrollData.sizes[i] || 0;
    },
    scrollToBottom() {
      if (this.$_scrollingToBottom)
        return;
      this.$_scrollingToBottom = !0;
      const e = this.$el;
      this.$nextTick(() => {
        e.scrollTop = e.scrollHeight + 5e3;
        const t = () => {
          e.scrollTop = e.scrollHeight + 5e3, requestAnimationFrame(() => {
            e.scrollTop = e.scrollHeight + 5e3, this.$_undefinedSizes === 0 ? this.$_scrollingToBottom = !1 : requestAnimationFrame(t);
          });
        };
        requestAnimationFrame(t);
      });
    }
  }
};
const xe = Oe;
var re = function() {
  var e = this, t = e.$createElement, i = e._self._c || t;
  return i(
    "RecycleScroller",
    e._g(
      e._b(
        {
          ref: "scroller",
          attrs: {
            items: e.itemsWithSize,
            "min-item-size": e.minItemSize,
            direction: e.direction,
            "key-field": "id",
            "list-tag": e.listTag,
            "item-tag": e.itemTag
          },
          on: { resize: e.onScrollerResize, visible: e.onScrollerVisible },
          scopedSlots: e._u(
            [
              {
                key: "default",
                fn: function(s) {
                  var r = s.item, o = s.index, a = s.active;
                  return [
                    e._t("default", null, null, {
                      item: r.item,
                      index: o,
                      active: a,
                      itemWithSize: r
                    })
                  ];
                }
              }
            ],
            null,
            !0
          )
        },
        "RecycleScroller",
        e.$attrs,
        !1
      ),
      e.listeners
    ),
    [
      e._v(" "),
      i("template", { slot: "before" }, [e._t("before")], 2),
      e._v(" "),
      i("template", { slot: "after" }, [e._t("after")], 2),
      e._v(" "),
      i("template", { slot: "empty" }, [e._t("empty")], 2)
    ],
    2
  );
}, Ce = [];
re._withStripped = !0;
const De = void 0, ke = void 0, Ae = void 0, Le = !1, M = /* @__PURE__ */ U(
  { render: re, staticRenderFns: Ce },
  De,
  xe,
  ke,
  Le,
  Ae,
  !1,
  void 0,
  void 0,
  void 0
);
var Fe = {
  name: "DynamicScrollerItem",
  inject: ["vscrollData", "vscrollParent", "vscrollResizeObserver"],
  props: {
    item: {
      required: !0
    },
    watchData: {
      type: Boolean,
      default: !1
    },
    active: {
      type: Boolean,
      required: !0
    },
    index: {
      type: Number,
      default: void 0
    },
    sizeDependencies: {
      type: [Array, Object],
      default: null
    },
    emitResize: {
      type: Boolean,
      default: !1
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    id() {
      if (this.vscrollData.simpleArray)
        return this.index;
      if (this.item.hasOwnProperty(this.vscrollData.keyField))
        return this.item[this.vscrollData.keyField];
      throw new Error(`keyField '${this.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`);
    },
    size() {
      return this.vscrollData.validSizes[this.id] && this.vscrollData.sizes[this.id] || 0;
    },
    finalActive() {
      return this.active && this.vscrollData.active;
    }
  },
  watch: {
    watchData: "updateWatchData",
    id() {
      this.size || this.onDataUpdate();
    },
    finalActive(e) {
      this.size || (e ? this.vscrollParent.$_undefinedMap[this.id] || (this.vscrollParent.$_undefinedSizes++, this.vscrollParent.$_undefinedMap[this.id] = !0) : this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = !1)), this.vscrollResizeObserver ? e ? this.observeSize() : this.unobserveSize() : e && this.$_pendingVScrollUpdate === this.id && this.updateSize();
    }
  },
  created() {
    if (!this.$isServer && (this.$_forceNextVScrollUpdate = null, this.updateWatchData(), !this.vscrollResizeObserver)) {
      for (const e in this.sizeDependencies)
        this.$watch(() => this.sizeDependencies[e], this.onDataUpdate);
      this.vscrollParent.$on("vscroll:update", this.onVscrollUpdate), this.vscrollParent.$on("vscroll:update-size", this.onVscrollUpdateSize);
    }
  },
  mounted() {
    this.vscrollData.active && (this.updateSize(), this.observeSize());
  },
  beforeDestroy() {
    this.vscrollParent.$off("vscroll:update", this.onVscrollUpdate), this.vscrollParent.$off("vscroll:update-size", this.onVscrollUpdateSize), this.unobserveSize();
  },
  methods: {
    updateSize() {
      this.finalActive ? this.$_pendingSizeUpdate !== this.id && (this.$_pendingSizeUpdate = this.id, this.$_forceNextVScrollUpdate = null, this.$_pendingVScrollUpdate = null, this.computeSize(this.id)) : this.$_forceNextVScrollUpdate = this.id;
    },
    updateWatchData() {
      this.watchData && !this.vscrollResizeObserver ? this.$_watchData = this.$watch("item", () => {
        this.onDataUpdate();
      }, {
        deep: !0
      }) : this.$_watchData && (this.$_watchData(), this.$_watchData = null);
    },
    onVscrollUpdate({
      force: e
    }) {
      !this.finalActive && e && (this.$_pendingVScrollUpdate = this.id), (this.$_forceNextVScrollUpdate === this.id || e || !this.size) && this.updateSize();
    },
    onDataUpdate() {
      this.updateSize();
    },
    computeSize(e) {
      this.$nextTick(() => {
        if (this.id === e) {
          const t = this.$el.offsetWidth, i = this.$el.offsetHeight;
          this.applySize(t, i);
        }
        this.$_pendingSizeUpdate = null;
      });
    },
    applySize(e, t) {
      const i = ~~(this.vscrollParent.direction === "vertical" ? t : e);
      i && this.size !== i && (this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = void 0), this.$set(this.vscrollData.sizes, this.id, i), this.$set(this.vscrollData.validSizes, this.id, !0), this.emitResize && this.$emit("resize", this.id));
    },
    observeSize() {
      !this.vscrollResizeObserver || !this.$el.parentNode || (this.vscrollResizeObserver.observe(this.$el.parentNode), this.$el.parentNode.addEventListener("resize", this.onResize));
    },
    unobserveSize() {
      !this.vscrollResizeObserver || (this.vscrollResizeObserver.unobserve(this.$el.parentNode), this.$el.parentNode.removeEventListener("resize", this.onResize));
    },
    onResize(e) {
      const {
        width: t,
        height: i
      } = e.detail.contentRect;
      this.applySize(t, i);
    }
  },
  render(e) {
    return e(this.tag, this.$slots.default);
  }
};
const Pe = Fe, Ee = void 0, Me = void 0, Ne = void 0, Ue = void 0, N = /* @__PURE__ */ U(
  {},
  Ee,
  Pe,
  Me,
  Ue,
  Ne,
  !1,
  void 0,
  void 0,
  void 0
);
function Be(e, t) {
  e.component(`${t}recycle-scroller`, E), e.component(`${t}RecycleScroller`, E), e.component(`${t}dynamic-scroller`, M), e.component(`${t}DynamicScroller`, M), e.component(`${t}dynamic-scroller-item`, N), e.component(`${t}DynamicScrollerItem`, N);
}
const He = {
  version: "1.1.2",
  install(e, t) {
    const i = Object.assign({}, {
      installComponents: !0,
      componentsPrefix: ""
    }, t);
    for (const s in i)
      typeof i[s] < "u" && (ee[s] = i[s]);
    i.installComponents && Be(e, i.componentsPrefix);
  }
};
let A = null;
typeof window < "u" ? A = window.Vue : typeof global < "u" && (A = global.Vue);
A && A.use(He);
function je(e, t, i, s, r, o, a, l) {
  var n = typeof e == "function" ? e.options : e;
  t && (n.render = t, n.staticRenderFns = i, n._compiled = !0), s && (n.functional = !0), o && (n._scopeId = "data-v-" + o);
  var c;
  if (a ? (c = function(u) {
    u = u || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !u && typeof __VUE_SSR_CONTEXT__ < "u" && (u = __VUE_SSR_CONTEXT__), r && r.call(this, u), u && u._registeredComponents && u._registeredComponents.add(a);
  }, n._ssrRegister = c) : r && (c = l ? function() {
    r.call(
      this,
      (n.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : r), c)
    if (n.functional) {
      n._injectStyles = c;
      var h = n.render;
      n.render = function($, v) {
        return c.call(v), h($, v);
      };
    } else {
      var m = n.beforeCreate;
      n.beforeCreate = m ? [].concat(m, c) : [c];
    }
  return {
    exports: e,
    options: n
  };
}
const Ke = {
  name: "ElVirtualSelect",
  components: {
    DynamicScroller: M,
    DynamicScrollerItem: N
  },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: [String, Number, Array],
    multiple: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    valueKey: {
      type: String,
      default: "value"
    },
    labelKey: {
      type: String,
      default: "label"
    },
    size: String,
    clearable: {
      type: Boolean,
      default: !0
    },
    collapseTags: {
      type: Boolean,
      default: !1
    },
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9"
    },
    filterable: {
      type: Boolean,
      default: !0
    },
    allowCreate: Boolean,
    remote: Boolean,
    remoteMethod: Function,
    loading: Boolean,
    loadingText: String,
    noMatchText: {
      type: String,
      default: "\u6682\u65E0\u5339\u914D\u6570\u636E"
    },
    noDataText: String,
    popperClass: String,
    reserveKeyword: Boolean,
    defaultFirstOption: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: !0
    },
    minItemSize: {
      type: Number,
      default: 34
    },
    listClass: String,
    itemClass: String,
    listTag: String,
    itemTag: String,
    beautifyScrollerStyle: {
      type: Boolean,
      default: !1
    },
    dropdownItemsCount: {
      type: Number,
      default: 6
    }
  },
  watch: {
    options: {
      handler: function(e) {
        this.localList = e, this.rawList = e;
      },
      deep: !0,
      immediate: !0
    }
  },
  data() {
    return {
      localValue: this.value,
      localList: [],
      rawList: []
    };
  },
  methods: {
    handleScrollerVisible() {
      const e = this.getIndex() - (this.dropdownItemsCount - 1);
      e > 1 && this.$refs.recycleScrollerRef.scrollToItem(e);
    },
    getIndex() {
      return this.multiple ? this.localList.findIndex(
        (e) => e[this.valueKey] === this.localValue[this.localValue.length - 1]
      ) : this.localList.findIndex((e) => e[this.valueKey] === this.localValue);
    },
    handleFilter(e) {
      this.localList = this.rawList.filter(
        (t) => String(t[this.labelKey]).includes(e)
      );
    },
    handleSelectFocus() {
      this.localList.length < this.rawList.length && (this.localList = this.rawList);
    },
    handleSelectChange(e) {
      this.localValue = e, this.$emit("input", e);
    }
  }
};
var We = function() {
  var t = this, i = t._self._c;
  return i("el-select", t._g(t._b({ attrs: { multiple: t.multiple, disabled: t.disabled, size: t.size, clearable: t.clearable, collapseTags: t.collapseTags, multipleLimit: t.multipleLimit, placeholder: t.placeholder, filterable: t.filterable, allowCreate: t.allowCreate, remote: t.remote, remoteMethod: t.remoteMethod, loading: t.loading, loadingText: t.loadingText, noMatchText: t.noMatchText, noDataText: t.noDataText, popperClass: t.popperClass, reserveKeyword: t.reserveKeyword, defaultFirstOption: t.defaultFirstOption, popperAppendToBody: t.popperAppendToBody, "filter-method": t.handleFilter }, on: { focus: t.handleSelectFocus, change: t.handleSelectChange }, model: { value: t.localValue, callback: function(s) {
    t.localValue = s;
  }, expression: "localValue" } }, "el-select", t.$attrs, !1), t.$listeners), [i("DynamicScroller", { ref: "recycleScrollerRef", staticClass: "scroller", class: t.beautifyScrollerStyle ? "beautify-scroller" : "", attrs: { items: t.localList, "min-item-size": t.minItemSize, "key-field": t.valueKey, "list-class": t.listClass, "item-class": t.itemClass, "list-tag": t.listTag, "item-tag": t.itemTag }, on: { visible: t.handleScrollerVisible }, scopedSlots: t._u([{ key: "default", fn: function({ item: s, index: r, active: o }) {
    return [i("DynamicScrollerItem", { attrs: { item: s, active: o, "data-index": r } }, [i("el-option", { key: s[t.valueKey], attrs: { value: s[t.valueKey], label: s[t.labelKey], disabled: s.disabled } }, [t._t("label", function() {
      return [t._v(t._s(s[t.labelKey]))];
    }, { item: s })], 2)], 1)];
  } }, t.localList.length === 0 ? { key: "after", fn: function() {
    return [i("p", { staticClass: "empty-data" }, [t._v(t._s(t.noMatchText))])];
  }, proxy: !0 } : null], null, !0) })], 1);
}, qe = [], Xe = /* @__PURE__ */ je(
  Ke,
  We,
  qe,
  !1,
  null,
  "1aeeb08b",
  null,
  null
);
const Ge = Xe.exports;
export {
  Ge as default
};
