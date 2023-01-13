function Ot(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = At(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var i = 0, n = function() {
      };
      return { s: n, n: function() {
        return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
      }, e: function(u) {
        throw u;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, o = !1, l;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return a = u.done, u;
  }, e: function(u) {
    o = !0, l = u;
  }, f: function() {
    try {
      !a && r.return != null && r.return();
    } finally {
      if (o)
        throw l;
    }
  } };
}
function At(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return xe(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return xe(e, t);
  }
}
function xe(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, i = new Array(t); r < t; r++)
    i[r] = e[r];
  return i;
}
function Pe(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, i);
  }
  return r;
}
function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pe(Object(r), !0).forEach(function(i) {
      It(e, i, r[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pe(Object(r)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(r, i));
    });
  }
  return e;
}
function It(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function S(e) {
  return S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, S(e);
}
function xt() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var r = e.indexOf("Trident/");
  if (r > 0) {
    var i = e.indexOf("rv:");
    return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10);
  }
  var n = e.indexOf("Edge/");
  return n > 0 ? parseInt(e.substring(n + 5, e.indexOf(".", n)), 10) : -1;
}
var Y = void 0;
function fe() {
  fe.init || (fe.init = !0, Y = xt() !== -1);
}
var de = {
  render: function() {
    var t = this, r = t.$createElement, i = t._self._c || r;
    return i("div", {
      staticClass: "resize-observer",
      attrs: {
        tabindex: "-1"
      }
    });
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
      this._resizeObject && this._resizeObject.onload && (!Y && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), delete this._resizeObject.onload);
    }
  },
  mounted: function() {
    var t = this;
    fe(), this.$nextTick(function() {
      t._w = t.$el.offsetWidth, t._h = t.$el.offsetHeight;
    });
    var r = document.createElement("object");
    this._resizeObject = r, r.setAttribute("aria-hidden", "true"), r.setAttribute("tabindex", -1), r.onload = this.addResizeHandlers, r.type = "text/html", Y && this.$el.appendChild(r), r.data = "about:blank", Y || this.$el.appendChild(r);
  },
  beforeDestroy: function() {
    this.removeResizeHandlers();
  }
};
function Pt(e) {
  e.component("resize-observer", de), e.component("ResizeObserver", de);
}
var Ct = {
  version: "0.4.5",
  install: Pt
}, Q = null;
typeof window < "u" ? Q = window.Vue : typeof global < "u" && (Q = global.Vue);
Q && Q.use(Ct);
function J(e) {
  return typeof Symbol == "function" && S(Symbol.iterator) === "symbol" ? J = function(r) {
    return S(r);
  } : J = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : S(r);
  }, J(e);
}
function Rt(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ce(e, t) {
  for (var r = 0; r < t.length; r++) {
    var i = t[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
  }
}
function jt(e, t, r) {
  return t && Ce(e.prototype, t), r && Ce(e, r), e;
}
function Re(e) {
  return Dt(e) || Et(e) || Vt();
}
function Dt(e) {
  if (Array.isArray(e)) {
    for (var t = 0, r = new Array(e.length); t < e.length; t++)
      r[t] = e[t];
    return r;
  }
}
function Et(e) {
  if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]")
    return Array.from(e);
}
function Vt() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function Lt(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function Mt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i, n, a, o = function(s) {
    for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
      c[f - 1] = arguments[f];
    if (a = c, !(i && s === n)) {
      var p = r.leading;
      typeof p == "function" && (p = p(s, n)), (!i || s !== n) && p && e.apply(void 0, [s].concat(Re(a))), n = s, clearTimeout(i), i = setTimeout(function() {
        e.apply(void 0, [s].concat(Re(a))), i = 0;
      }, t);
    }
  };
  return o._clear = function() {
    clearTimeout(i), i = null;
  }, o;
}
function et(e, t) {
  if (e === t)
    return !0;
  if (J(e) === "object") {
    for (var r in e)
      if (!et(e[r], t[r]))
        return !1;
    return !0;
  }
  return !1;
}
var Ft = /* @__PURE__ */ function() {
  function e(t, r, i) {
    Rt(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(r, i);
  }
  return jt(e, [{
    key: "createObserver",
    value: function(r, i) {
      var n = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = Lt(r), this.callback = function(l, s) {
          n.options.callback(l, s), l && n.options.once && (n.frozen = !0, n.destroyObserver());
        }, this.callback && this.options.throttle) {
          var a = this.options.throttleOptions || {}, o = a.leading;
          this.callback = Mt(this.callback, this.options.throttle, {
            leading: function(s) {
              return o === "both" || o === "visible" && s || o === "hidden" && !s;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(l) {
          var s = l[0];
          if (l.length > 1) {
            var u = l.find(function(f) {
              return f.isIntersecting;
            });
            u && (s = u);
          }
          if (n.callback) {
            var c = s.isIntersecting && s.intersectionRatio >= n.threshold;
            if (c === n.oldResult)
              return;
            n.oldResult = c, n.callback(c, s);
          }
        }, this.options.intersection), i.context.$nextTick(function() {
          n.observer && n.observer.observe(n.el);
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
function tt(e, t, r) {
  var i = t.value;
  if (!!i)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var n = new Ft(e, i, r);
      e._vue_visibilityState = n;
    }
}
function Ut(e, t, r) {
  var i = t.value, n = t.oldValue;
  if (!et(i, n)) {
    var a = e._vue_visibilityState;
    if (!i) {
      rt(e);
      return;
    }
    a ? a.createObserver(i, r) : tt(e, {
      value: i
    }, r);
  }
}
function rt(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var it = {
  bind: tt,
  update: Ut,
  unbind: rt
};
function Nt(e) {
  e.directive("observe-visibility", it);
}
var Bt = {
  version: "0.4.6",
  install: Nt
}, ee = null;
typeof window < "u" ? ee = window.Vue : typeof global < "u" && (ee = global.Vue);
ee && ee.use(Bt);
var Ht = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, nt = {
  exports: {}
};
(function(e) {
  (function(t, r) {
    e.exports ? e.exports = r() : t.Scrollparent = r();
  })(Ht, function() {
    var t = /(auto|scroll)/, r = function l(s, u) {
      return s.parentNode === null ? u : l(s.parentNode, u.concat([s]));
    }, i = function(s, u) {
      return getComputedStyle(s, null).getPropertyValue(u);
    }, n = function(s) {
      return i(s, "overflow") + i(s, "overflow-y") + i(s, "overflow-x");
    }, a = function(s) {
      return t.test(n(s));
    }, o = function(s) {
      if (s instanceof HTMLElement || s instanceof SVGElement) {
        for (var u = r(s.parentNode, []), c = 0; c < u.length; c += 1)
          if (a(u[c]))
            return u[c];
        return document.scrollingElement || document.documentElement;
      }
    };
    return o;
  });
})(nt);
var je = nt.exports, at = {
  itemsLimit: 1e3
}, st = {
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
    validator: function(t) {
      return ["vertical", "horizontal"].includes(t);
    }
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
function ot() {
  return this.items.length && S(this.items[0]) !== "object";
}
var he = !1;
if (typeof window < "u") {
  he = !1;
  try {
    var Kt = Object.defineProperty({}, "passive", {
      get: function() {
        he = !0;
      }
    });
    window.addEventListener("test", null, Kt);
  } catch {
  }
}
var Gt = 0, Wt = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: de
  },
  directives: {
    ObserveVisibility: it
  },
  props: Z(Z({}, st), {}, {
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
  }),
  data: function() {
    return {
      pool: [],
      totalSize: 0,
      ready: !1,
      hoverKey: null
    };
  },
  computed: {
    sizes: function() {
      if (this.itemSize === null) {
        for (var t = {
          "-1": {
            accumulator: 0
          }
        }, r = this.items, i = this.sizeField, n = this.minItemSize, a = 1e4, o = 0, l, s = 0, u = r.length; s < u; s++)
          l = r[s][i] || n, l < a && (a = l), o += l, t[s] = {
            accumulator: o,
            size: l
          };
        return this.$_computedMinItemSize = a, t;
      }
      return [];
    },
    simpleArray: ot
  },
  watch: {
    items: function() {
      this.updateVisibleItems(!0);
    },
    pageMode: function() {
      this.applyPageMode(), this.updateVisibleItems(!1);
    },
    sizes: {
      handler: function() {
        this.updateVisibleItems(!1);
      },
      deep: !0
    },
    gridItems: function() {
      this.updateVisibleItems(!0);
    },
    itemSecondarySize: function() {
      this.updateVisibleItems(!0);
    }
  },
  created: function() {
    this.$_startIndex = 0, this.$_endIndex = 0, this.$_views = /* @__PURE__ */ new Map(), this.$_unusedViews = /* @__PURE__ */ new Map(), this.$_scrollDirty = !1, this.$_lastUpdateScrollPosition = 0, this.prerender && (this.$_prerender = !0, this.updateVisibleItems(!1)), this.gridItems && !this.itemSize && console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems");
  },
  mounted: function() {
    var t = this;
    this.applyPageMode(), this.$nextTick(function() {
      t.$_prerender = !1, t.updateVisibleItems(!0), t.ready = !0;
    });
  },
  activated: function() {
    var t = this, r = this.$_lastUpdateScrollPosition;
    typeof r == "number" && this.$nextTick(function() {
      t.scrollToPosition(r);
    });
  },
  beforeDestroy: function() {
    this.removeListeners();
  },
  methods: {
    addView: function(t, r, i, n, a) {
      var o = {
        item: i,
        position: 0
      }, l = {
        id: Gt++,
        index: r,
        used: !0,
        key: n,
        type: a
      };
      return Object.defineProperty(o, "nr", {
        configurable: !1,
        value: l
      }), t.push(o), o;
    },
    unuseView: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = this.$_unusedViews, n = t.nr.type, a = i.get(n);
      a || (a = [], i.set(n, a)), a.push(t), r || (t.nr.used = !1, t.position = -9999, this.$_views.delete(t.nr.key));
    },
    handleResize: function() {
      this.$emit("resize"), this.ready && this.updateVisibleItems(!1);
    },
    handleScroll: function(t) {
      var r = this;
      this.$_scrollDirty || (this.$_scrollDirty = !0, requestAnimationFrame(function() {
        r.$_scrollDirty = !1;
        var i = r.updateVisibleItems(!1, !0), n = i.continuous;
        n || (clearTimeout(r.$_refreshTimout), r.$_refreshTimout = setTimeout(r.handleScroll, 100));
      }));
    },
    handleVisibilityChange: function(t, r) {
      var i = this;
      this.ready && (t || r.boundingClientRect.width !== 0 || r.boundingClientRect.height !== 0 ? (this.$emit("visible"), requestAnimationFrame(function() {
        i.updateVisibleItems(!1);
      })) : this.$emit("hidden"));
    },
    updateVisibleItems: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = this.itemSize, n = this.gridItems || 1, a = this.itemSecondarySize || i, o = this.$_computedMinItemSize, l = this.typeField, s = this.simpleArray ? null : this.keyField, u = this.items, c = u.length, f = this.sizes, p = this.$_views, _ = this.$_unusedViews, m = this.pool, d, v, $, b, w;
      if (!c)
        d = v = b = w = $ = 0;
      else if (this.$_prerender)
        d = b = 0, v = w = Math.min(this.prerender, u.length), $ = null;
      else {
        var g = this.getScroll();
        if (r) {
          var O = g.start - this.$_lastUpdateScrollPosition;
          if (O < 0 && (O = -O), i === null && O < o || O < i)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = g.start;
        var we = this.buffer;
        g.start -= we, g.end += we;
        var F = 0;
        if (this.$refs.before && (F = this.$refs.before.scrollHeight, g.start -= F), this.$refs.after) {
          var $t = this.$refs.after.scrollHeight;
          g.end += $t;
        }
        if (i === null) {
          var Te, ze = 0, Oe = c - 1, z = ~~(c / 2), Ae;
          do
            Ae = z, Te = f[z].accumulator, Te < g.start ? ze = z : z < c - 1 && f[z + 1].accumulator > g.start && (Oe = z), z = ~~((ze + Oe) / 2);
          while (z !== Ae);
          for (z < 0 && (z = 0), d = z, $ = f[c - 1].accumulator, v = z; v < c && f[v].accumulator < g.end; v++)
            ;
          for (v === -1 ? v = u.length - 1 : (v++, v > c && (v = c)), b = d; b < c && F + f[b].accumulator < g.start; b++)
            ;
          for (w = b; w < c && F + f[w].accumulator < g.end; w++)
            ;
        } else {
          d = ~~(g.start / i * n);
          var wt = d % n;
          d -= wt, v = Math.ceil(g.end / i * n), b = Math.max(0, Math.floor((g.start - F) / i * n)), w = Math.floor((g.end - F) / i * n), d < 0 && (d = 0), v > c && (v = c), b < 0 && (b = 0), w > c && (w = c), $ = Math.ceil(c / n) * i;
        }
      }
      v - d > at.itemsLimit && this.itemsLimitError(), this.totalSize = $;
      var h, D = d <= this.$_endIndex && v >= this.$_startIndex;
      if (this.$_continuous !== D) {
        if (D) {
          p.clear(), _.clear();
          for (var se = 0, Tt = m.length; se < Tt; se++)
            h = m[se], this.unuseView(h);
        }
        this.$_continuous = D;
      } else if (D)
        for (var oe = 0, zt = m.length; oe < zt; oe++)
          h = m[oe], h.nr.used && (t && (h.nr.index = u.indexOf(h.item)), (h.nr.index === -1 || h.nr.index < d || h.nr.index >= v) && this.unuseView(h));
      for (var Ie = D ? null : /* @__PURE__ */ new Map(), A, I, C, B, T = d; T < v; T++) {
        A = u[T];
        var R = s ? A[s] : A;
        if (R == null)
          throw new Error("Key is ".concat(R, " on item (keyField is '").concat(s, "')"));
        if (h = p.get(R), !i && !f[T].size) {
          h && this.unuseView(h);
          continue;
        }
        h ? (h.nr.used = !0, h.item = A) : (T === u.length - 1 && this.$emit("scroll-end"), T === 0 && this.$emit("scroll-start"), I = A[l], C = _.get(I), D ? C && C.length ? (h = C.pop(), h.item = A, h.nr.used = !0, h.nr.index = T, h.nr.key = R, h.nr.type = I) : h = this.addView(m, T, A, R, I) : (B = Ie.get(I) || 0, (!C || B >= C.length) && (h = this.addView(m, T, A, R, I), this.unuseView(h, !0), C = _.get(I)), h = C[B], h.item = A, h.nr.used = !0, h.nr.index = T, h.nr.key = R, h.nr.type = I, Ie.set(I, B + 1), B++), p.set(R, h)), i === null ? (h.position = f[T - 1].accumulator, h.offset = 0) : (h.position = Math.floor(T / n) * i, h.offset = T % n * a);
      }
      return this.$_startIndex = d, this.$_endIndex = v, this.emitUpdate && this.$emit("update", d, v, b, w), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, 300), {
        continuous: D
      };
    },
    getListenerTarget: function() {
      var t = je(this.$el);
      return window.document && (t === window.document.documentElement || t === window.document.body) && (t = window), t;
    },
    getScroll: function() {
      var t = this.$el, r = this.direction, i = r === "vertical", n;
      if (this.pageMode) {
        var a = t.getBoundingClientRect(), o = i ? a.height : a.width, l = -(i ? a.top : a.left), s = i ? window.innerHeight : window.innerWidth;
        l < 0 && (s += l, l = 0), l + s > o && (s = o - l), n = {
          start: l,
          end: l + s
        };
      } else
        i ? n = {
          start: t.scrollTop,
          end: t.scrollTop + t.clientHeight
        } : n = {
          start: t.scrollLeft,
          end: t.scrollLeft + t.clientWidth
        };
      return n;
    },
    applyPageMode: function() {
      this.pageMode ? this.addListeners() : this.removeListeners();
    },
    addListeners: function() {
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, he ? {
        passive: !0
      } : !1), this.listenerTarget.addEventListener("resize", this.handleResize);
    },
    removeListeners: function() {
      !this.listenerTarget || (this.listenerTarget.removeEventListener("scroll", this.handleScroll), this.listenerTarget.removeEventListener("resize", this.handleResize), this.listenerTarget = null);
    },
    scrollToItem: function(t) {
      var r;
      this.itemSize === null ? r = t > 0 ? this.sizes[t - 1].accumulator : 0 : r = Math.floor(t / this.gridItems) * this.itemSize, this.scrollToPosition(r);
    },
    scrollToPosition: function(t) {
      var r = this.direction === "vertical" ? {
        scroll: "scrollTop",
        start: "top"
      } : {
        scroll: "scrollLeft",
        start: "left"
      }, i, n, a;
      if (this.pageMode) {
        var o = je(this.$el), l = o.tagName === "HTML" ? 0 : o[r.scroll], s = o.getBoundingClientRect(), u = this.$el.getBoundingClientRect(), c = u[r.start] - s[r.start];
        i = o, n = r.scroll, a = t + l + c;
      } else
        i = this.$el, n = r.scroll, a = t;
      i[n] = a;
    },
    itemsLimitError: function() {
      var t = this;
      throw setTimeout(function() {
        console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", t.$el), console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
      }), new Error("Rendered items limit reached");
    },
    sortViews: function() {
      this.pool.sort(function(t, r) {
        return t.nr.index - r.nr.index;
      });
    }
  }
};
function $e(e, t, r, i, n, a, o, l, s, u) {
  typeof o != "boolean" && (s = l, l = o, o = !1);
  var c = typeof r == "function" ? r.options : r;
  e && e.render && (c.render = e.render, c.staticRenderFns = e.staticRenderFns, c._compiled = !0, n && (c.functional = !0)), i && (c._scopeId = i);
  var f;
  if (a ? (f = function(d) {
    d = d || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !d && typeof __VUE_SSR_CONTEXT__ < "u" && (d = __VUE_SSR_CONTEXT__), t && t.call(this, s(d)), d && d._registeredComponents && d._registeredComponents.add(a);
  }, c._ssrRegister = f) : t && (f = o ? function(m) {
    t.call(this, u(m, this.$root.$options.shadowRoot));
  } : function(m) {
    t.call(this, l(m));
  }), f)
    if (c.functional) {
      var p = c.render;
      c.render = function(d, v) {
        return f.call(v), p(d, v);
      };
    } else {
      var _ = c.beforeCreate;
      c.beforeCreate = _ ? [].concat(_, f) : [f];
    }
  return r;
}
var qt = Wt, lt = function() {
  var t, r, i = this, n = i.$createElement, a = i._self._c || n;
  return a("div", {
    directives: [{
      name: "observe-visibility",
      rawName: "v-observe-visibility",
      value: i.handleVisibilityChange,
      expression: "handleVisibilityChange"
    }],
    staticClass: "vue-recycle-scroller",
    class: (t = {
      ready: i.ready,
      "page-mode": i.pageMode
    }, t["direction-" + i.direction] = !0, t),
    on: {
      "&scroll": function(l) {
        return i.handleScroll.apply(null, arguments);
      }
    }
  }, [i.$slots.before ? a("div", {
    ref: "before",
    staticClass: "vue-recycle-scroller__slot"
  }, [i._t("before")], 2) : i._e(), i._v(" "), a(i.listTag, {
    ref: "wrapper",
    tag: "component",
    staticClass: "vue-recycle-scroller__item-wrapper",
    class: i.listClass,
    style: (r = {}, r[i.direction === "vertical" ? "minHeight" : "minWidth"] = i.totalSize + "px", r)
  }, [i._l(i.pool, function(o) {
    return a(i.itemTag, i._g({
      key: o.nr.id,
      tag: "component",
      staticClass: "vue-recycle-scroller__item-view",
      class: [i.itemClass, {
        hover: !i.skipHover && i.hoverKey === o.nr.key
      }],
      style: i.ready ? {
        transform: "translate" + (i.direction === "vertical" ? "Y" : "X") + "(" + o.position + "px) translate" + (i.direction === "vertical" ? "X" : "Y") + "(" + o.offset + "px)",
        width: i.gridItems ? (i.direction === "vertical" && i.itemSecondarySize || i.itemSize) + "px" : void 0,
        height: i.gridItems ? (i.direction === "horizontal" && i.itemSecondarySize || i.itemSize) + "px" : void 0
      } : null
    }, i.skipHover ? {} : {
      mouseenter: function() {
        i.hoverKey = o.nr.key;
      },
      mouseleave: function() {
        i.hoverKey = null;
      }
    }), [i._t("default", null, {
      item: o.item,
      index: o.nr.index,
      active: o.nr.used
    })], 2);
  }), i._v(" "), i._t("empty")], 2), i._v(" "), i.$slots.after ? a("div", {
    ref: "after",
    staticClass: "vue-recycle-scroller__slot"
  }, [i._t("after")], 2) : i._e(), i._v(" "), a("ResizeObserver", {
    on: {
      notify: i.handleResize
    }
  })], 1);
}, kt = [];
lt._withStripped = !0;
var Xt = void 0, Yt = void 0, Jt = void 0, Zt = !1, ve = /* @__PURE__ */ $e({
  render: lt,
  staticRenderFns: kt
}, Xt, qt, Yt, Zt, Jt, !1, void 0, void 0, void 0), Qt = {
  name: "DynamicScroller",
  components: {
    RecycleScroller: ve
  },
  provide: function() {
    return typeof ResizeObserver < "u" && (this.$_resizeObserver = new ResizeObserver(function(t) {
      requestAnimationFrame(function() {
        if (!!Array.isArray(t)) {
          var r = Ot(t), i;
          try {
            for (r.s(); !(i = r.n()).done; ) {
              var n = i.value;
              if (n.target) {
                var a = new CustomEvent("resize", {
                  detail: {
                    contentRect: n.contentRect
                  }
                });
                n.target.dispatchEvent(a);
              }
            }
          } catch (o) {
            r.e(o);
          } finally {
            r.f();
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
  props: Z(Z({}, st), {}, {
    minItemSize: {
      type: [Number, String],
      required: !0
    }
  }),
  data: function() {
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
    simpleArray: ot,
    itemsWithSize: function() {
      for (var t = [], r = this.items, i = this.keyField, n = this.simpleArray, a = this.vscrollData.sizes, o = r.length, l = 0; l < o; l++) {
        var s = r[l], u = n ? l : s[i], c = a[u];
        typeof c > "u" && !this.$_undefinedMap[u] && (c = 0), t.push({
          item: s,
          id: u,
          size: c
        });
      }
      return t;
    },
    listeners: function() {
      var t = {};
      for (var r in this.$listeners)
        r !== "resize" && r !== "visible" && (t[r] = this.$listeners[r]);
      return t;
    }
  },
  watch: {
    items: function() {
      this.forceUpdate(!1);
    },
    simpleArray: {
      handler: function(t) {
        this.vscrollData.simpleArray = t;
      },
      immediate: !0
    },
    direction: function(t) {
      this.forceUpdate(!0);
    },
    itemsWithSize: function(t, r) {
      for (var i = this.$el.scrollTop, n = 0, a = 0, o = Math.min(t.length, r.length), l = 0; l < o && !(n >= i); l++)
        n += r[l].size || this.minItemSize, a += t[l].size || this.minItemSize;
      var s = a - n;
      s !== 0 && (this.$el.scrollTop += s);
    }
  },
  beforeCreate: function() {
    this.$_updates = [], this.$_undefinedSizes = 0, this.$_undefinedMap = {};
  },
  activated: function() {
    this.vscrollData.active = !0;
  },
  deactivated: function() {
    this.vscrollData.active = !1;
  },
  methods: {
    onScrollerResize: function() {
      var t = this.$refs.scroller;
      t && this.forceUpdate(), this.$emit("resize");
    },
    onScrollerVisible: function() {
      this.$emit("vscroll:update", {
        force: !1
      }), this.$emit("visible");
    },
    forceUpdate: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      (t || this.simpleArray) && (this.vscrollData.validSizes = {}), this.$emit("vscroll:update", {
        force: !0
      });
    },
    scrollToItem: function(t) {
      var r = this.$refs.scroller;
      r && r.scrollToItem(t);
    },
    getItemSize: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, i = this.simpleArray ? r != null ? r : this.items.indexOf(t) : t[this.keyField];
      return this.vscrollData.sizes[i] || 0;
    },
    scrollToBottom: function() {
      var t = this;
      if (!this.$_scrollingToBottom) {
        this.$_scrollingToBottom = !0;
        var r = this.$el;
        this.$nextTick(function() {
          r.scrollTop = r.scrollHeight + 5e3;
          var i = function n() {
            r.scrollTop = r.scrollHeight + 5e3, requestAnimationFrame(function() {
              r.scrollTop = r.scrollHeight + 5e3, t.$_undefinedSizes === 0 ? t.$_scrollingToBottom = !1 : requestAnimationFrame(n);
            });
          };
          requestAnimationFrame(i);
        });
      }
    }
  }
}, er = Qt, ut = function() {
  var t = this, r = t.$createElement, i = t._self._c || r;
  return i("RecycleScroller", t._g(t._b({
    ref: "scroller",
    attrs: {
      items: t.itemsWithSize,
      "min-item-size": t.minItemSize,
      direction: t.direction,
      "key-field": "id",
      "list-tag": t.listTag,
      "item-tag": t.itemTag
    },
    on: {
      resize: t.onScrollerResize,
      visible: t.onScrollerVisible
    },
    scopedSlots: t._u([{
      key: "default",
      fn: function(a) {
        var o = a.item, l = a.index, s = a.active;
        return [t._t("default", null, null, {
          item: o.item,
          index: l,
          active: s,
          itemWithSize: o
        })];
      }
    }], null, !0)
  }, "RecycleScroller", t.$attrs, !1), t.listeners), [t._v(" "), i("template", {
    slot: "before"
  }, [t._t("before")], 2), t._v(" "), i("template", {
    slot: "after"
  }, [t._t("after")], 2), t._v(" "), i("template", {
    slot: "empty"
  }, [t._t("empty")], 2)], 2);
}, tr = [];
ut._withStripped = !0;
var rr = void 0, ir = void 0, nr = void 0, ar = !1, pe = /* @__PURE__ */ $e({
  render: ut,
  staticRenderFns: tr
}, rr, er, ir, ar, nr, !1, void 0, void 0, void 0), sr = {
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
    id: function() {
      if (this.vscrollData.simpleArray)
        return this.index;
      if (this.item.hasOwnProperty(this.vscrollData.keyField))
        return this.item[this.vscrollData.keyField];
      throw new Error("keyField '".concat(this.vscrollData.keyField, "' not found in your item. You should set a valid keyField prop on your Scroller"));
    },
    size: function() {
      return this.vscrollData.validSizes[this.id] && this.vscrollData.sizes[this.id] || 0;
    },
    finalActive: function() {
      return this.active && this.vscrollData.active;
    }
  },
  watch: {
    watchData: "updateWatchData",
    id: function() {
      this.size || this.onDataUpdate();
    },
    finalActive: function(t) {
      this.size || (t ? this.vscrollParent.$_undefinedMap[this.id] || (this.vscrollParent.$_undefinedSizes++, this.vscrollParent.$_undefinedMap[this.id] = !0) : this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = !1)), this.vscrollResizeObserver ? t ? this.observeSize() : this.unobserveSize() : t && this.$_pendingVScrollUpdate === this.id && this.updateSize();
    }
  },
  created: function() {
    var t = this;
    if (!this.$isServer && (this.$_forceNextVScrollUpdate = null, this.updateWatchData(), !this.vscrollResizeObserver)) {
      var r = function(a) {
        t.$watch(function() {
          return t.sizeDependencies[a];
        }, t.onDataUpdate);
      };
      for (var i in this.sizeDependencies)
        r(i);
      this.vscrollParent.$on("vscroll:update", this.onVscrollUpdate), this.vscrollParent.$on("vscroll:update-size", this.onVscrollUpdateSize);
    }
  },
  mounted: function() {
    this.vscrollData.active && (this.updateSize(), this.observeSize());
  },
  beforeDestroy: function() {
    this.vscrollParent.$off("vscroll:update", this.onVscrollUpdate), this.vscrollParent.$off("vscroll:update-size", this.onVscrollUpdateSize), this.unobserveSize();
  },
  methods: {
    updateSize: function() {
      this.finalActive ? this.$_pendingSizeUpdate !== this.id && (this.$_pendingSizeUpdate = this.id, this.$_forceNextVScrollUpdate = null, this.$_pendingVScrollUpdate = null, this.computeSize(this.id)) : this.$_forceNextVScrollUpdate = this.id;
    },
    updateWatchData: function() {
      var t = this;
      this.watchData && !this.vscrollResizeObserver ? this.$_watchData = this.$watch("item", function() {
        t.onDataUpdate();
      }, {
        deep: !0
      }) : this.$_watchData && (this.$_watchData(), this.$_watchData = null);
    },
    onVscrollUpdate: function(t) {
      var r = t.force;
      !this.finalActive && r && (this.$_pendingVScrollUpdate = this.id), (this.$_forceNextVScrollUpdate === this.id || r || !this.size) && this.updateSize();
    },
    onDataUpdate: function() {
      this.updateSize();
    },
    computeSize: function(t) {
      var r = this;
      this.$nextTick(function() {
        if (r.id === t) {
          var i = r.$el.offsetWidth, n = r.$el.offsetHeight;
          r.applySize(i, n);
        }
        r.$_pendingSizeUpdate = null;
      });
    },
    applySize: function(t, r) {
      var i = ~~(this.vscrollParent.direction === "vertical" ? r : t);
      i && this.size !== i && (this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = void 0), this.$set(this.vscrollData.sizes, this.id, i), this.$set(this.vscrollData.validSizes, this.id, !0), this.emitResize && this.$emit("resize", this.id));
    },
    observeSize: function() {
      !this.vscrollResizeObserver || !this.$el.parentNode || (this.vscrollResizeObserver.observe(this.$el.parentNode), this.$el.parentNode.addEventListener("resize", this.onResize));
    },
    unobserveSize: function() {
      !this.vscrollResizeObserver || (this.vscrollResizeObserver.unobserve(this.$el.parentNode), this.$el.parentNode.removeEventListener("resize", this.onResize));
    },
    onResize: function(t) {
      var r = t.detail.contentRect, i = r.width, n = r.height;
      this.applySize(i, n);
    }
  },
  render: function(t) {
    return t(this.tag, this.$slots.default);
  }
}, or = sr, lr = void 0, ur = void 0, cr = void 0, fr = void 0, me = /* @__PURE__ */ $e({}, lr, or, ur, fr, cr, !1, void 0, void 0, void 0);
function dr(e, t) {
  e.component("".concat(t, "recycle-scroller"), ve), e.component("".concat(t, "RecycleScroller"), ve), e.component("".concat(t, "dynamic-scroller"), pe), e.component("".concat(t, "DynamicScroller"), pe), e.component("".concat(t, "dynamic-scroller-item"), me), e.component("".concat(t, "DynamicScrollerItem"), me);
}
var hr = {
  version: "1.1.2",
  install: function(t, r) {
    var i = Object.assign({}, {
      installComponents: !0,
      componentsPrefix: ""
    }, r);
    for (var n in i)
      typeof i[n] < "u" && (at[n] = i[n]);
    i.installComponents && dr(t, i.componentsPrefix);
  }
}, te = null;
typeof window < "u" ? te = window.Vue : typeof global < "u" && (te = global.Vue);
te && te.use(hr);
var vr = (typeof global > "u" ? "undefined" : S(global)) == "object" && global && global.Object === Object && global, ct = vr, pr = (typeof self > "u" ? "undefined" : S(self)) == "object" && self && self.Object === Object && self, mr = ct || pr || Function("return this")(), x = mr, _r = x.Symbol, U = _r, ft = Object.prototype, yr = ft.hasOwnProperty, gr = ft.toString, H = U ? U.toStringTag : void 0;
function br(e) {
  var t = yr.call(e, H), r = e[H];
  try {
    e[H] = void 0;
    var i = !0;
  } catch {
  }
  var n = gr.call(e);
  return i && (t ? e[H] = r : delete e[H]), n;
}
var Sr = Object.prototype, $r = Sr.toString;
function wr(e) {
  return $r.call(e);
}
var Tr = "[object Null]", zr = "[object Undefined]", De = U ? U.toStringTag : void 0;
function k(e) {
  return e == null ? e === void 0 ? zr : Tr : De && De in Object(e) ? br(e) : wr(e);
}
function G(e) {
  return e != null && S(e) == "object";
}
var Or = Array.isArray, re = Or;
function dt(e) {
  var t = S(e);
  return e != null && (t == "object" || t == "function");
}
var Ar = "[object AsyncFunction]", Ir = "[object Function]", xr = "[object GeneratorFunction]", Pr = "[object Proxy]";
function ht(e) {
  if (!dt(e))
    return !1;
  var t = k(e);
  return t == Ir || t == xr || t == Ar || t == Pr;
}
var Cr = x["__core-js_shared__"], le = Cr, Ee = function() {
  var e = /[^.]+$/.exec(le && le.keys && le.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Rr(e) {
  return !!Ee && Ee in e;
}
var jr = Function.prototype, Dr = jr.toString;
function L(e) {
  if (e != null) {
    try {
      return Dr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Er = /[\\^$.*+?()[\]{}|]/g, Vr = /^\[object .+?Constructor\]$/, Lr = Function.prototype, Mr = Object.prototype, Fr = Lr.toString, Ur = Mr.hasOwnProperty, Nr = RegExp("^" + Fr.call(Ur).replace(Er, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Br(e) {
  if (!dt(e) || Rr(e))
    return !1;
  var t = ht(e) ? Nr : Vr;
  return t.test(L(e));
}
function Hr(e, t) {
  return e == null ? void 0 : e[t];
}
function N(e, t) {
  var r = Hr(e, t);
  return Br(r) ? r : void 0;
}
var Kr = N(x, "WeakMap"), _e = Kr, Gr = 9007199254740991, Wr = /^(?:0|[1-9]\d*)$/;
function qr(e, t) {
  var r = S(e);
  return t = t == null ? Gr : t, !!t && (r == "number" || r != "symbol" && Wr.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function vt(e, t) {
  return e === t || e !== e && t !== t;
}
var kr = 9007199254740991;
function pt(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= kr;
}
function Xr(e) {
  return e != null && pt(e.length) && !ht(e);
}
var Yr = Object.prototype;
function Jr(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Yr;
  return e === r;
}
function Zr(e, t) {
  for (var r = -1, i = Array(e); ++r < e; )
    i[r] = t(r);
  return i;
}
var Qr = "[object Arguments]";
function Ve(e) {
  return G(e) && k(e) == Qr;
}
var mt = Object.prototype, ei = mt.hasOwnProperty, ti = mt.propertyIsEnumerable, ri = Ve(function() {
  return arguments;
}()) ? Ve : function(e) {
  return G(e) && ei.call(e, "callee") && !ti.call(e, "callee");
}, ii = ri;
function ni() {
  return !1;
}
var _t = (typeof exports > "u" ? "undefined" : S(exports)) == "object" && exports && !exports.nodeType && exports, Le = _t && (typeof module > "u" ? "undefined" : S(module)) == "object" && module && !module.nodeType && module, ai = Le && Le.exports === _t, Me = ai ? x.Buffer : void 0, si = Me ? Me.isBuffer : void 0, oi = si || ni, ye = oi, li = "[object Arguments]", ui = "[object Array]", ci = "[object Boolean]", fi = "[object Date]", di = "[object Error]", hi = "[object Function]", vi = "[object Map]", pi = "[object Number]", mi = "[object Object]", _i = "[object RegExp]", yi = "[object Set]", gi = "[object String]", bi = "[object WeakMap]", Si = "[object ArrayBuffer]", $i = "[object DataView]", wi = "[object Float32Array]", Ti = "[object Float64Array]", zi = "[object Int8Array]", Oi = "[object Int16Array]", Ai = "[object Int32Array]", Ii = "[object Uint8Array]", xi = "[object Uint8ClampedArray]", Pi = "[object Uint16Array]", Ci = "[object Uint32Array]", y = {};
y[wi] = y[Ti] = y[zi] = y[Oi] = y[Ai] = y[Ii] = y[xi] = y[Pi] = y[Ci] = !0;
y[li] = y[ui] = y[Si] = y[ci] = y[$i] = y[fi] = y[di] = y[hi] = y[vi] = y[pi] = y[mi] = y[_i] = y[yi] = y[gi] = y[bi] = !1;
function Ri(e) {
  return G(e) && pt(e.length) && !!y[k(e)];
}
function ji(e) {
  return function(t) {
    return e(t);
  };
}
var yt = (typeof exports > "u" ? "undefined" : S(exports)) == "object" && exports && !exports.nodeType && exports, K = yt && (typeof module > "u" ? "undefined" : S(module)) == "object" && module && !module.nodeType && module, Di = K && K.exports === yt, ue = Di && ct.process, Ei = function() {
  try {
    var e = K && K.require && K.require("util").types;
    return e || ue && ue.binding && ue.binding("util");
  } catch {
  }
}(), Fe = Ei, Ue = Fe && Fe.isTypedArray, Vi = Ue ? ji(Ue) : Ri, gt = Vi, Li = Object.prototype, Mi = Li.hasOwnProperty;
function Fi(e, t) {
  var r = re(e), i = !r && ii(e), n = !r && !i && ye(e), a = !r && !i && !n && gt(e), o = r || i || n || a, l = o ? Zr(e.length, String) : [], s = l.length;
  for (var u in e)
    (t || Mi.call(e, u)) && !(o && (u == "length" || n && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || qr(u, s))) && l.push(u);
  return l;
}
function Ui(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Ni = Ui(Object.keys, Object), Bi = Ni, Hi = Object.prototype, Ki = Hi.hasOwnProperty;
function Gi(e) {
  if (!Jr(e))
    return Bi(e);
  var t = [];
  for (var r in Object(e))
    Ki.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Wi(e) {
  return Xr(e) ? Fi(e) : Gi(e);
}
var qi = N(Object, "create"), W = qi;
function ki() {
  this.__data__ = W ? W(null) : {}, this.size = 0;
}
function Xi(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Yi = "__lodash_hash_undefined__", Ji = Object.prototype, Zi = Ji.hasOwnProperty;
function Qi(e) {
  var t = this.__data__;
  if (W) {
    var r = t[e];
    return r === Yi ? void 0 : r;
  }
  return Zi.call(t, e) ? t[e] : void 0;
}
var en = Object.prototype, tn = en.hasOwnProperty;
function rn(e) {
  var t = this.__data__;
  return W ? t[e] !== void 0 : tn.call(t, e);
}
var nn = "__lodash_hash_undefined__";
function an(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = W && t === void 0 ? nn : t, this;
}
function V(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
V.prototype.clear = ki;
V.prototype.delete = Xi;
V.prototype.get = Qi;
V.prototype.has = rn;
V.prototype.set = an;
function sn() {
  this.__data__ = [], this.size = 0;
}
function ne(e, t) {
  for (var r = e.length; r--; )
    if (vt(e[r][0], t))
      return r;
  return -1;
}
var on = Array.prototype, ln = on.splice;
function un(e) {
  var t = this.__data__, r = ne(t, e);
  if (r < 0)
    return !1;
  var i = t.length - 1;
  return r == i ? t.pop() : ln.call(t, r, 1), --this.size, !0;
}
function cn(e) {
  var t = this.__data__, r = ne(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function fn(e) {
  return ne(this.__data__, e) > -1;
}
function dn(e, t) {
  var r = this.__data__, i = ne(r, e);
  return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
}
function P(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
P.prototype.clear = sn;
P.prototype.delete = un;
P.prototype.get = cn;
P.prototype.has = fn;
P.prototype.set = dn;
var hn = N(x, "Map"), q = hn;
function vn() {
  this.size = 0, this.__data__ = {
    hash: new V(),
    map: new (q || P)(),
    string: new V()
  };
}
function pn(e) {
  var t = S(e);
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ae(e, t) {
  var r = e.__data__;
  return pn(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function mn(e) {
  var t = ae(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function _n(e) {
  return ae(this, e).get(e);
}
function yn(e) {
  return ae(this, e).has(e);
}
function gn(e, t) {
  var r = ae(this, e), i = r.size;
  return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
}
function M(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
M.prototype.clear = vn;
M.prototype.delete = mn;
M.prototype.get = _n;
M.prototype.has = yn;
M.prototype.set = gn;
function bn(e, t) {
  for (var r = -1, i = t.length, n = e.length; ++r < i; )
    e[n + r] = t[r];
  return e;
}
function Sn() {
  this.__data__ = new P(), this.size = 0;
}
function $n(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function wn(e) {
  return this.__data__.get(e);
}
function Tn(e) {
  return this.__data__.has(e);
}
var zn = 200;
function On(e, t) {
  var r = this.__data__;
  if (r instanceof P) {
    var i = r.__data__;
    if (!q || i.length < zn - 1)
      return i.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new M(i);
  }
  return r.set(e, t), this.size = r.size, this;
}
function j(e) {
  var t = this.__data__ = new P(e);
  this.size = t.size;
}
j.prototype.clear = Sn;
j.prototype.delete = $n;
j.prototype.get = wn;
j.prototype.has = Tn;
j.prototype.set = On;
function An(e, t) {
  for (var r = -1, i = e == null ? 0 : e.length, n = 0, a = []; ++r < i; ) {
    var o = e[r];
    t(o, r, e) && (a[n++] = o);
  }
  return a;
}
function In() {
  return [];
}
var xn = Object.prototype, Pn = xn.propertyIsEnumerable, Ne = Object.getOwnPropertySymbols, Cn = Ne ? function(e) {
  return e == null ? [] : (e = Object(e), An(Ne(e), function(t) {
    return Pn.call(e, t);
  }));
} : In, Rn = Cn;
function jn(e, t, r) {
  var i = t(e);
  return re(e) ? i : bn(i, r(e));
}
function Be(e) {
  return jn(e, Wi, Rn);
}
var Dn = N(x, "DataView"), ge = Dn, En = N(x, "Promise"), be = En, Vn = N(x, "Set"), Se = Vn, He = "[object Map]", Ln = "[object Object]", Ke = "[object Promise]", Ge = "[object Set]", We = "[object WeakMap]", qe = "[object DataView]", Mn = L(ge), Fn = L(q), Un = L(be), Nn = L(Se), Bn = L(_e), E = k;
(ge && E(new ge(new ArrayBuffer(1))) != qe || q && E(new q()) != He || be && E(be.resolve()) != Ke || Se && E(new Se()) != Ge || _e && E(new _e()) != We) && (E = function(t) {
  var r = k(t), i = r == Ln ? t.constructor : void 0, n = i ? L(i) : "";
  if (n)
    switch (n) {
      case Mn:
        return qe;
      case Fn:
        return He;
      case Un:
        return Ke;
      case Nn:
        return Ge;
      case Bn:
        return We;
    }
  return r;
});
var ke = E, Hn = x.Uint8Array, Xe = Hn, Kn = "__lodash_hash_undefined__";
function Gn(e) {
  return this.__data__.set(e, Kn), this;
}
function Wn(e) {
  return this.__data__.has(e);
}
function ie(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new M(); ++t < r; )
    this.add(e[t]);
}
ie.prototype.add = ie.prototype.push = Gn;
ie.prototype.has = Wn;
function qn(e, t) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function kn(e, t) {
  return e.has(t);
}
var Xn = 1, Yn = 2;
function bt(e, t, r, i, n, a) {
  var o = r & Xn, l = e.length, s = t.length;
  if (l != s && !(o && s > l))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, p = !0, _ = r & Yn ? new ie() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < l; ) {
    var m = e[f], d = t[f];
    if (i)
      var v = o ? i(d, m, f, t, e, a) : i(m, d, f, e, t, a);
    if (v !== void 0) {
      if (v)
        continue;
      p = !1;
      break;
    }
    if (_) {
      if (!qn(t, function($, b) {
        if (!kn(_, b) && (m === $ || n(m, $, r, i, a)))
          return _.push(b);
      })) {
        p = !1;
        break;
      }
    } else if (!(m === d || n(m, d, r, i, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), p;
}
function Jn(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(i, n) {
    r[++t] = [n, i];
  }), r;
}
function Zn(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(i) {
    r[++t] = i;
  }), r;
}
var Qn = 1, ea = 2, ta = "[object Boolean]", ra = "[object Date]", ia = "[object Error]", na = "[object Map]", aa = "[object Number]", sa = "[object RegExp]", oa = "[object Set]", la = "[object String]", ua = "[object Symbol]", ca = "[object ArrayBuffer]", fa = "[object DataView]", Ye = U ? U.prototype : void 0, ce = Ye ? Ye.valueOf : void 0;
function da(e, t, r, i, n, a, o) {
  switch (r) {
    case fa:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ca:
      return !(e.byteLength != t.byteLength || !a(new Xe(e), new Xe(t)));
    case ta:
    case ra:
    case aa:
      return vt(+e, +t);
    case ia:
      return e.name == t.name && e.message == t.message;
    case sa:
    case la:
      return e == t + "";
    case na:
      var l = Jn;
    case oa:
      var s = i & Qn;
      if (l || (l = Zn), e.size != t.size && !s)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      i |= ea, o.set(e, t);
      var c = bt(l(e), l(t), i, n, a, o);
      return o.delete(e), c;
    case ua:
      if (ce)
        return ce.call(e) == ce.call(t);
  }
  return !1;
}
var ha = 1, va = Object.prototype, pa = va.hasOwnProperty;
function ma(e, t, r, i, n, a) {
  var o = r & ha, l = Be(e), s = l.length, u = Be(t), c = u.length;
  if (s != c && !o)
    return !1;
  for (var f = s; f--; ) {
    var p = l[f];
    if (!(o ? p in t : pa.call(t, p)))
      return !1;
  }
  var _ = a.get(e), m = a.get(t);
  if (_ && m)
    return _ == t && m == e;
  var d = !0;
  a.set(e, t), a.set(t, e);
  for (var v = o; ++f < s; ) {
    p = l[f];
    var $ = e[p], b = t[p];
    if (i)
      var w = o ? i(b, $, p, t, e, a) : i($, b, p, e, t, a);
    if (!(w === void 0 ? $ === b || n($, b, r, i, a) : w)) {
      d = !1;
      break;
    }
    v || (v = p == "constructor");
  }
  if (d && !v) {
    var g = e.constructor, O = t.constructor;
    g != O && "constructor" in e && "constructor" in t && !(typeof g == "function" && g instanceof g && typeof O == "function" && O instanceof O) && (d = !1);
  }
  return a.delete(e), a.delete(t), d;
}
var _a = 1, Je = "[object Arguments]", Ze = "[object Array]", X = "[object Object]", ya = Object.prototype, Qe = ya.hasOwnProperty;
function ga(e, t, r, i, n, a) {
  var o = re(e), l = re(t), s = o ? Ze : ke(e), u = l ? Ze : ke(t);
  s = s == Je ? X : s, u = u == Je ? X : u;
  var c = s == X, f = u == X, p = s == u;
  if (p && ye(e)) {
    if (!ye(t))
      return !1;
    o = !0, c = !1;
  }
  if (p && !c)
    return a || (a = new j()), o || gt(e) ? bt(e, t, r, i, n, a) : da(e, t, s, r, i, n, a);
  if (!(r & _a)) {
    var _ = c && Qe.call(e, "__wrapped__"), m = f && Qe.call(t, "__wrapped__");
    if (_ || m) {
      var d = _ ? e.value() : e, v = m ? t.value() : t;
      return a || (a = new j()), n(d, v, r, i, a);
    }
  }
  return p ? (a || (a = new j()), ma(e, t, r, i, n, a)) : !1;
}
function St(e, t, r, i, n) {
  return e === t ? !0 : e == null || t == null || !G(e) && !G(t) ? e !== e && t !== t : ga(e, t, r, i, St, n);
}
function ba(e, t) {
  return St(e, t);
}
function Sa(e, t, r, i, n, a, o, l) {
  var s = typeof e == "function" ? e.options : e;
  t && (s.render = t, s.staticRenderFns = r, s._compiled = !0), i && (s.functional = !0), a && (s._scopeId = "data-v-" + a);
  var u;
  if (o ? (u = function(_) {
    _ = _ || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !_ && typeof __VUE_SSR_CONTEXT__ < "u" && (_ = __VUE_SSR_CONTEXT__), n && n.call(this, _), _ && _._registeredComponents && _._registeredComponents.add(o);
  }, s._ssrRegister = u) : n && (u = l ? function() {
    n.call(this, (s.functional ? this.parent : this).$root.$options.shadowRoot);
  } : n), u)
    if (s.functional) {
      s._injectStyles = u;
      var c = s.render;
      s.render = function(_, m) {
        return u.call(m), c(_, m);
      };
    } else {
      var f = s.beforeCreate;
      s.beforeCreate = f ? [].concat(f, u) : [u];
    }
  return {
    exports: e,
    options: s
  };
}
var $a = {
  name: "ElVirtualSelect",
  components: {
    DynamicScroller: pe,
    DynamicScrollerItem: me
  },
  props: {
    options: {
      type: Array,
      default: function() {
        return [];
      }
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
      handler: function(t) {
        this.localList = t, this.rawList = t;
      },
      deep: !0,
      immediate: !0
    },
    value: {
      handler: function(t) {
        ba(t, this.localValue) || (this.localValue = t);
      },
      deep: !0
    }
  },
  data: function() {
    return {
      localValue: this.value,
      localList: [],
      rawList: []
    };
  },
  methods: {
    handleScrollerVisible: function() {
      var t = this.getIndex() - (this.dropdownItemsCount - 1);
      t > 1 && this.$refs.recycleScrollerRef.scrollToItem(t);
    },
    getIndex: function() {
      var t = this;
      return this.multiple ? this.localList.findIndex(function(r) {
        return r[t.valueKey] === t.localValue[t.localValue.length - 1];
      }) : this.localList.findIndex(function(r) {
        return r[t.valueKey] === t.localValue;
      });
    },
    handleFilter: function(t) {
      var r = this;
      this.localList = this.rawList.filter(function(i) {
        return String(i[r.labelKey]).includes(t);
      });
    },
    handleSelectFocus: function() {
      this.localList.length < this.rawList.length && (this.localList = this.rawList);
    },
    handleSelectChange: function(t) {
      this.localValue = t, this.$emit("input", t);
    }
  }
}, wa = function() {
  var t = this, r = t._self._c;
  return r("el-select", t._g(t._b({
    attrs: {
      multiple: t.multiple,
      disabled: t.disabled,
      size: t.size,
      clearable: t.clearable,
      collapseTags: t.collapseTags,
      multipleLimit: t.multipleLimit,
      placeholder: t.placeholder,
      filterable: t.filterable,
      allowCreate: t.allowCreate,
      remote: t.remote,
      remoteMethod: t.remoteMethod,
      loading: t.loading,
      loadingText: t.loadingText,
      noMatchText: t.noMatchText,
      noDataText: t.noDataText,
      popperClass: t.popperClass,
      reserveKeyword: t.reserveKeyword,
      defaultFirstOption: t.defaultFirstOption,
      popperAppendToBody: t.popperAppendToBody,
      "filter-method": t.handleFilter
    },
    on: {
      focus: t.handleSelectFocus,
      change: t.handleSelectChange
    },
    model: {
      value: t.localValue,
      callback: function(n) {
        t.localValue = n;
      },
      expression: "localValue"
    }
  }, "el-select", t.$attrs, !1), t.$listeners), [r("DynamicScroller", {
    ref: "recycleScrollerRef",
    staticClass: "scroller",
    class: t.beautifyScrollerStyle ? "beautify-scroller" : "",
    attrs: {
      items: t.localList,
      "min-item-size": t.minItemSize,
      "key-field": t.valueKey,
      "list-class": t.listClass,
      "item-class": t.itemClass,
      "list-tag": t.listTag,
      "item-tag": t.itemTag
    },
    on: {
      visible: t.handleScrollerVisible
    },
    scopedSlots: t._u([{
      key: "default",
      fn: function(n) {
        var a = n.item, o = n.index, l = n.active;
        return [r("DynamicScrollerItem", {
          attrs: {
            item: a,
            active: l,
            "data-index": o
          }
        }, [r("el-option", {
          key: a[t.valueKey],
          attrs: {
            value: a[t.valueKey],
            label: a[t.labelKey],
            disabled: a.disabled
          }
        }, [t._t("label", function() {
          return [t._v(t._s(a[t.labelKey]))];
        }, {
          item: a
        })], 2)], 1)];
      }
    }, t.localList.length === 0 ? {
      key: "after",
      fn: function() {
        return [r("p", {
          staticClass: "empty-data"
        }, [t._v(t._s(t.noMatchText))])];
      },
      proxy: !0
    } : null], null, !0)
  })], 1);
}, Ta = [], za = /* @__PURE__ */ Sa($a, wa, Ta, !1, null, "446a1af1", null, null), Oa = za.exports;
export {
  Oa as default
};
