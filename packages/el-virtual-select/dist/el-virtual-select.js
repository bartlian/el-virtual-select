import ye from "@babel/runtime/helpers/defineProperty";
function ge(t, e) {
  var i = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!i) {
    if (Array.isArray(t) || (i = be(t)) || e && t && typeof t.length == "number") {
      i && (t = i);
      var r = 0, n = function() {
      };
      return { s: n, n: function() {
        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
      }, e: function(u) {
        throw u;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var l = !0, o = !1, a;
  return { s: function() {
    i = i.call(t);
  }, n: function() {
    var u = i.next();
    return l = u.done, u;
  }, e: function(u) {
    o = !0, a = u;
  }, f: function() {
    try {
      !l && i.return != null && i.return();
    } finally {
      if (o)
        throw a;
    }
  } };
}
function be(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Z(t, e);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    if (i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set")
      return Array.from(t);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
      return Z(t, e);
  }
}
function Z(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var i = 0, r = new Array(e); i < e; i++)
    r[i] = t[i];
  return r;
}
function ee(t, e) {
  var i = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    })), i.push.apply(i, r);
  }
  return i;
}
function P(t) {
  for (var e = 1; e < arguments.length; e++) {
    var i = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ee(Object(i), !0).forEach(function(r) {
      ye(t, r, i[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ee(Object(i)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(i, r));
    });
  }
  return t;
}
function Se() {
  var t = window.navigator.userAgent, e = t.indexOf("MSIE ");
  if (e > 0)
    return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
  var i = t.indexOf("Trident/");
  if (i > 0) {
    var r = t.indexOf("rv:");
    return parseInt(t.substring(r + 3, t.indexOf(".", r)), 10);
  }
  var n = t.indexOf("Edge/");
  return n > 0 ? parseInt(t.substring(n + 5, t.indexOf(".", n)), 10) : -1;
}
var D = void 0;
function U() {
  U.init || (U.init = !0, D = Se() !== -1);
}
var N = {
  render: function() {
    var e = this, i = e.$createElement, r = e._self._c || i;
    return r("div", {
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
      this._resizeObject && this._resizeObject.onload && (!D && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), delete this._resizeObject.onload);
    }
  },
  mounted: function() {
    var e = this;
    U(), this.$nextTick(function() {
      e._w = e.$el.offsetWidth, e._h = e.$el.offsetHeight;
    });
    var i = document.createElement("object");
    this._resizeObject = i, i.setAttribute("aria-hidden", "true"), i.setAttribute("tabindex", -1), i.onload = this.addResizeHandlers, i.type = "text/html", D && this.$el.appendChild(i), i.data = "about:blank", D || this.$el.appendChild(i);
  },
  beforeDestroy: function() {
    this.removeResizeHandlers();
  }
};
function $e(t) {
  t.component("resize-observer", N), t.component("ResizeObserver", N);
}
var ze = {
  version: "0.4.5",
  install: $e
}, k = null;
typeof window < "u" ? k = window.Vue : typeof global < "u" && (k = global.Vue);
k && k.use(ze);
function A(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? A = function(i) {
    return typeof i;
  } : A = function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, A(t);
}
function we(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function te(t, e) {
  for (var i = 0; i < e.length; i++) {
    var r = e[i];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function Te(t, e, i) {
  return e && te(t.prototype, e), i && te(t, i), t;
}
function ie(t) {
  return Oe(t) || Ve(t) || Ie();
}
function Oe(t) {
  if (Array.isArray(t)) {
    for (var e = 0, i = new Array(t.length); e < t.length; e++)
      i[e] = t[e];
    return i;
  }
}
function Ve(t) {
  if (Symbol.iterator in Object(t) || Object.prototype.toString.call(t) === "[object Arguments]")
    return Array.from(t);
}
function Ie() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function Re(t) {
  var e;
  return typeof t == "function" ? e = {
    callback: t
  } : e = t, e;
}
function xe(t, e) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r, n, l, o = function(s) {
    for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
      c[f - 1] = arguments[f];
    if (l = c, !(r && s === n)) {
      var g = i.leading;
      typeof g == "function" && (g = g(s, n)), (!r || s !== n) && g && t.apply(void 0, [s].concat(ie(l))), n = s, clearTimeout(r), r = setTimeout(function() {
        t.apply(void 0, [s].concat(ie(l))), r = 0;
      }, e);
    }
  };
  return o._clear = function() {
    clearTimeout(r), r = null;
  }, o;
}
function ne(t, e) {
  if (t === e)
    return !0;
  if (A(t) === "object") {
    for (var i in t)
      if (!ne(t[i], e[i]))
        return !1;
    return !0;
  }
  return !1;
}
var Ce = /* @__PURE__ */ function() {
  function t(e, i, r) {
    we(this, t), this.el = e, this.observer = null, this.frozen = !1, this.createObserver(i, r);
  }
  return Te(t, [{
    key: "createObserver",
    value: function(i, r) {
      var n = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = Re(i), this.callback = function(a, s) {
          n.options.callback(a, s), a && n.options.once && (n.frozen = !0, n.destroyObserver());
        }, this.callback && this.options.throttle) {
          var l = this.options.throttleOptions || {}, o = l.leading;
          this.callback = xe(this.callback, this.options.throttle, {
            leading: function(s) {
              return o === "both" || o === "visible" && s || o === "hidden" && !s;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(a) {
          var s = a[0];
          if (a.length > 1) {
            var u = a.find(function(f) {
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
        }, this.options.intersection), r.context.$nextTick(function() {
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
  }]), t;
}();
function se(t, e, i) {
  var r = e.value;
  if (!!r)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var n = new Ce(t, r, i);
      t._vue_visibilityState = n;
    }
}
function De(t, e, i) {
  var r = e.value, n = e.oldValue;
  if (!ne(r, n)) {
    var l = t._vue_visibilityState;
    if (!r) {
      le(t);
      return;
    }
    l ? l.createObserver(r, i) : se(t, {
      value: r
    }, i);
  }
}
function le(t) {
  var e = t._vue_visibilityState;
  e && (e.destroyObserver(), delete t._vue_visibilityState);
}
var ae = {
  bind: se,
  update: De,
  unbind: le
};
function Ae(t) {
  t.directive("observe-visibility", ae);
}
var Pe = {
  version: "0.4.6",
  install: Ae
}, L = null;
typeof window < "u" ? L = window.Vue : typeof global < "u" && (L = global.Vue);
L && L.use(Pe);
var ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, oe = {
  exports: {}
};
(function(t) {
  (function(e, i) {
    t.exports ? t.exports = i() : e.Scrollparent = i();
  })(ke, function() {
    var e = /(auto|scroll)/, i = function a(s, u) {
      return s.parentNode === null ? u : a(s.parentNode, u.concat([s]));
    }, r = function(s, u) {
      return getComputedStyle(s, null).getPropertyValue(u);
    }, n = function(s) {
      return r(s, "overflow") + r(s, "overflow-y") + r(s, "overflow-x");
    }, l = function(s) {
      return e.test(n(s));
    }, o = function(s) {
      if (s instanceof HTMLElement || s instanceof SVGElement) {
        for (var u = i(s.parentNode, []), c = 0; c < u.length; c += 1)
          if (l(u[c]))
            return u[c];
        return document.scrollingElement || document.documentElement;
      }
    };
    return o;
  });
})(oe);
var re = oe.exports, ue = {
  itemsLimit: 1e3
}, ce = {
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
    validator: function(e) {
      return ["vertical", "horizontal"].includes(e);
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
function de() {
  return this.items.length && typeof this.items[0] != "object";
}
var j = !1;
if (typeof window < "u") {
  j = !1;
  try {
    var Le = Object.defineProperty({}, "passive", {
      get: function() {
        j = !0;
      }
    });
    window.addEventListener("test", null, Le);
  } catch {
  }
}
var Fe = 0, Ee = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: N
  },
  directives: {
    ObserveVisibility: ae
  },
  props: P(P({}, ce), {}, {
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
        for (var e = {
          "-1": {
            accumulator: 0
          }
        }, i = this.items, r = this.sizeField, n = this.minItemSize, l = 1e4, o = 0, a, s = 0, u = i.length; s < u; s++)
          a = i[s][r] || n, a < l && (l = a), o += a, e[s] = {
            accumulator: o,
            size: a
          };
        return this.$_computedMinItemSize = l, e;
      }
      return [];
    },
    simpleArray: de
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
    var e = this;
    this.applyPageMode(), this.$nextTick(function() {
      e.$_prerender = !1, e.updateVisibleItems(!0), e.ready = !0;
    });
  },
  activated: function() {
    var e = this, i = this.$_lastUpdateScrollPosition;
    typeof i == "number" && this.$nextTick(function() {
      e.scrollToPosition(i);
    });
  },
  beforeDestroy: function() {
    this.removeListeners();
  },
  methods: {
    addView: function(e, i, r, n, l) {
      var o = {
        item: r,
        position: 0
      }, a = {
        id: Fe++,
        index: i,
        used: !0,
        key: n,
        type: l
      };
      return Object.defineProperty(o, "nr", {
        configurable: !1,
        value: a
      }), e.push(o), o;
    },
    unuseView: function(e) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = this.$_unusedViews, n = e.nr.type, l = r.get(n);
      l || (l = [], r.set(n, l)), l.push(e), i || (e.nr.used = !1, e.position = -9999, this.$_views.delete(e.nr.key));
    },
    handleResize: function() {
      this.$emit("resize"), this.ready && this.updateVisibleItems(!1);
    },
    handleScroll: function(e) {
      var i = this;
      this.$_scrollDirty || (this.$_scrollDirty = !0, requestAnimationFrame(function() {
        i.$_scrollDirty = !1;
        var r = i.updateVisibleItems(!1, !0), n = r.continuous;
        n || (clearTimeout(i.$_refreshTimout), i.$_refreshTimout = setTimeout(i.handleScroll, 100));
      }));
    },
    handleVisibilityChange: function(e, i) {
      var r = this;
      this.ready && (e || i.boundingClientRect.width !== 0 || i.boundingClientRect.height !== 0 ? (this.$emit("visible"), requestAnimationFrame(function() {
        r.updateVisibleItems(!1);
      })) : this.$emit("hidden"));
    },
    updateVisibleItems: function(e) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = this.itemSize, n = this.gridItems || 1, l = this.itemSecondarySize || r, o = this.$_computedMinItemSize, a = this.typeField, s = this.simpleArray ? null : this.keyField, u = this.items, c = u.length, f = this.sizes, g = this.$_views, p = this.$_unusedViews, m = this.pool, h, v, R, S, $;
      if (!c)
        h = v = S = $ = R = 0;
      else if (this.$_prerender)
        h = S = 0, v = $ = Math.min(this.prerender, u.length), R = null;
      else {
        var _ = this.getScroll();
        if (i) {
          var x = _.start - this.$_lastUpdateScrollPosition;
          if (x < 0 && (x = -x), r === null && x < o || x < r)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = _.start;
        var q = this.buffer;
        _.start -= q, _.end += q;
        var I = 0;
        if (this.$refs.before && (I = this.$refs.before.scrollHeight, _.start -= I), this.$refs.after) {
          var ve = this.$refs.after.scrollHeight;
          _.end += ve;
        }
        if (r === null) {
          var X, G = 0, Y = c - 1, b = ~~(c / 2), J;
          do
            J = b, X = f[b].accumulator, X < _.start ? G = b : b < c - 1 && f[b + 1].accumulator > _.start && (Y = b), b = ~~((G + Y) / 2);
          while (b !== J);
          for (b < 0 && (b = 0), h = b, R = f[c - 1].accumulator, v = b; v < c && f[v].accumulator < _.end; v++)
            ;
          for (v === -1 ? v = u.length - 1 : (v++, v > c && (v = c)), S = h; S < c && I + f[S].accumulator < _.start; S++)
            ;
          for ($ = S; $ < c && I + f[$].accumulator < _.end; $++)
            ;
        } else {
          h = ~~(_.start / r * n);
          var pe = h % n;
          h -= pe, v = Math.ceil(_.end / r * n), S = Math.max(0, Math.floor((_.start - I) / r * n)), $ = Math.floor((_.end - I) / r * n), h < 0 && (h = 0), v > c && (v = c), S < 0 && (S = 0), $ > c && ($ = c), R = Math.ceil(c / n) * r;
        }
      }
      v - h > ue.itemsLimit && this.itemsLimitError(), this.totalSize = R;
      var d, V = h <= this.$_endIndex && v >= this.$_startIndex;
      if (this.$_continuous !== V) {
        if (V) {
          g.clear(), p.clear();
          for (var E = 0, me = m.length; E < me; E++)
            d = m[E], this.unuseView(d);
        }
        this.$_continuous = V;
      } else if (V)
        for (var M = 0, _e = m.length; M < _e; M++)
          d = m[M], d.nr.used && (e && (d.nr.index = u.indexOf(d.item)), (d.nr.index === -1 || d.nr.index < h || d.nr.index >= v) && this.unuseView(d));
      for (var Q = V ? null : /* @__PURE__ */ new Map(), z, w, T, C, y = h; y < v; y++) {
        z = u[y];
        var O = s ? z[s] : z;
        if (O == null)
          throw new Error("Key is ".concat(O, " on item (keyField is '").concat(s, "')"));
        if (d = g.get(O), !r && !f[y].size) {
          d && this.unuseView(d);
          continue;
        }
        d ? (d.nr.used = !0, d.item = z) : (y === u.length - 1 && this.$emit("scroll-end"), y === 0 && this.$emit("scroll-start"), w = z[a], T = p.get(w), V ? T && T.length ? (d = T.pop(), d.item = z, d.nr.used = !0, d.nr.index = y, d.nr.key = O, d.nr.type = w) : d = this.addView(m, y, z, O, w) : (C = Q.get(w) || 0, (!T || C >= T.length) && (d = this.addView(m, y, z, O, w), this.unuseView(d, !0), T = p.get(w)), d = T[C], d.item = z, d.nr.used = !0, d.nr.index = y, d.nr.key = O, d.nr.type = w, Q.set(w, C + 1), C++), g.set(O, d)), r === null ? (d.position = f[y - 1].accumulator, d.offset = 0) : (d.position = Math.floor(y / n) * r, d.offset = y % n * l);
      }
      return this.$_startIndex = h, this.$_endIndex = v, this.emitUpdate && this.$emit("update", h, v, S, $), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, 300), {
        continuous: V
      };
    },
    getListenerTarget: function() {
      var e = re(this.$el);
      return window.document && (e === window.document.documentElement || e === window.document.body) && (e = window), e;
    },
    getScroll: function() {
      var e = this.$el, i = this.direction, r = i === "vertical", n;
      if (this.pageMode) {
        var l = e.getBoundingClientRect(), o = r ? l.height : l.width, a = -(r ? l.top : l.left), s = r ? window.innerHeight : window.innerWidth;
        a < 0 && (s += a, a = 0), a + s > o && (s = o - a), n = {
          start: a,
          end: a + s
        };
      } else
        r ? n = {
          start: e.scrollTop,
          end: e.scrollTop + e.clientHeight
        } : n = {
          start: e.scrollLeft,
          end: e.scrollLeft + e.clientWidth
        };
      return n;
    },
    applyPageMode: function() {
      this.pageMode ? this.addListeners() : this.removeListeners();
    },
    addListeners: function() {
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, j ? {
        passive: !0
      } : !1), this.listenerTarget.addEventListener("resize", this.handleResize);
    },
    removeListeners: function() {
      !this.listenerTarget || (this.listenerTarget.removeEventListener("scroll", this.handleScroll), this.listenerTarget.removeEventListener("resize", this.handleResize), this.listenerTarget = null);
    },
    scrollToItem: function(e) {
      var i;
      this.itemSize === null ? i = e > 0 ? this.sizes[e - 1].accumulator : 0 : i = Math.floor(e / this.gridItems) * this.itemSize, this.scrollToPosition(i);
    },
    scrollToPosition: function(e) {
      var i = this.direction === "vertical" ? {
        scroll: "scrollTop",
        start: "top"
      } : {
        scroll: "scrollLeft",
        start: "left"
      }, r, n, l;
      if (this.pageMode) {
        var o = re(this.$el), a = o.tagName === "HTML" ? 0 : o[i.scroll], s = o.getBoundingClientRect(), u = this.$el.getBoundingClientRect(), c = u[i.start] - s[i.start];
        r = o, n = i.scroll, l = e + a + c;
      } else
        r = this.$el, n = i.scroll, l = e;
      r[n] = l;
    },
    itemsLimitError: function() {
      var e = this;
      throw setTimeout(function() {
        console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", e.$el), console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
      }), new Error("Rendered items limit reached");
    },
    sortViews: function() {
      this.pool.sort(function(e, i) {
        return e.nr.index - i.nr.index;
      });
    }
  }
};
function K(t, e, i, r, n, l, o, a, s, u) {
  typeof o != "boolean" && (s = a, a = o, o = !1);
  var c = typeof i == "function" ? i.options : i;
  t && t.render && (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0, n && (c.functional = !0)), r && (c._scopeId = r);
  var f;
  if (l ? (f = function(h) {
    h = h || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !h && typeof __VUE_SSR_CONTEXT__ < "u" && (h = __VUE_SSR_CONTEXT__), e && e.call(this, s(h)), h && h._registeredComponents && h._registeredComponents.add(l);
  }, c._ssrRegister = f) : e && (f = o ? function(m) {
    e.call(this, u(m, this.$root.$options.shadowRoot));
  } : function(m) {
    e.call(this, a(m));
  }), f)
    if (c.functional) {
      var g = c.render;
      c.render = function(h, v) {
        return f.call(v), g(h, v);
      };
    } else {
      var p = c.beforeCreate;
      c.beforeCreate = p ? [].concat(p, f) : [f];
    }
  return i;
}
var Me = Ee, fe = function() {
  var e, i, r = this, n = r.$createElement, l = r._self._c || n;
  return l("div", {
    directives: [{
      name: "observe-visibility",
      rawName: "v-observe-visibility",
      value: r.handleVisibilityChange,
      expression: "handleVisibilityChange"
    }],
    staticClass: "vue-recycle-scroller",
    class: (e = {
      ready: r.ready,
      "page-mode": r.pageMode
    }, e["direction-" + r.direction] = !0, e),
    on: {
      "&scroll": function(a) {
        return r.handleScroll.apply(null, arguments);
      }
    }
  }, [r.$slots.before ? l("div", {
    ref: "before",
    staticClass: "vue-recycle-scroller__slot"
  }, [r._t("before")], 2) : r._e(), r._v(" "), l(r.listTag, {
    ref: "wrapper",
    tag: "component",
    staticClass: "vue-recycle-scroller__item-wrapper",
    class: r.listClass,
    style: (i = {}, i[r.direction === "vertical" ? "minHeight" : "minWidth"] = r.totalSize + "px", i)
  }, [r._l(r.pool, function(o) {
    return l(r.itemTag, r._g({
      key: o.nr.id,
      tag: "component",
      staticClass: "vue-recycle-scroller__item-view",
      class: [r.itemClass, {
        hover: !r.skipHover && r.hoverKey === o.nr.key
      }],
      style: r.ready ? {
        transform: "translate" + (r.direction === "vertical" ? "Y" : "X") + "(" + o.position + "px) translate" + (r.direction === "vertical" ? "X" : "Y") + "(" + o.offset + "px)",
        width: r.gridItems ? (r.direction === "vertical" && r.itemSecondarySize || r.itemSize) + "px" : void 0,
        height: r.gridItems ? (r.direction === "horizontal" && r.itemSecondarySize || r.itemSize) + "px" : void 0
      } : null
    }, r.skipHover ? {} : {
      mouseenter: function() {
        r.hoverKey = o.nr.key;
      },
      mouseleave: function() {
        r.hoverKey = null;
      }
    }), [r._t("default", null, {
      item: o.item,
      index: o.nr.index,
      active: o.nr.used
    })], 2);
  }), r._v(" "), r._t("empty")], 2), r._v(" "), r.$slots.after ? l("div", {
    ref: "after",
    staticClass: "vue-recycle-scroller__slot"
  }, [r._t("after")], 2) : r._e(), r._v(" "), l("ResizeObserver", {
    on: {
      notify: r.handleResize
    }
  })], 1);
}, Ue = [];
fe._withStripped = !0;
var Ne = void 0, je = void 0, Be = void 0, He = !1, B = /* @__PURE__ */ K({
  render: fe,
  staticRenderFns: Ue
}, Ne, Me, je, He, Be, !1, void 0, void 0, void 0), We = {
  name: "DynamicScroller",
  components: {
    RecycleScroller: B
  },
  provide: function() {
    return typeof ResizeObserver < "u" && (this.$_resizeObserver = new ResizeObserver(function(e) {
      requestAnimationFrame(function() {
        if (!!Array.isArray(e)) {
          var i = ge(e), r;
          try {
            for (i.s(); !(r = i.n()).done; ) {
              var n = r.value;
              if (n.target) {
                var l = new CustomEvent("resize", {
                  detail: {
                    contentRect: n.contentRect
                  }
                });
                n.target.dispatchEvent(l);
              }
            }
          } catch (o) {
            i.e(o);
          } finally {
            i.f();
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
  props: P(P({}, ce), {}, {
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
    simpleArray: de,
    itemsWithSize: function() {
      for (var e = [], i = this.items, r = this.keyField, n = this.simpleArray, l = this.vscrollData.sizes, o = i.length, a = 0; a < o; a++) {
        var s = i[a], u = n ? a : s[r], c = l[u];
        typeof c > "u" && !this.$_undefinedMap[u] && (c = 0), e.push({
          item: s,
          id: u,
          size: c
        });
      }
      return e;
    },
    listeners: function() {
      var e = {};
      for (var i in this.$listeners)
        i !== "resize" && i !== "visible" && (e[i] = this.$listeners[i]);
      return e;
    }
  },
  watch: {
    items: function() {
      this.forceUpdate(!1);
    },
    simpleArray: {
      handler: function(e) {
        this.vscrollData.simpleArray = e;
      },
      immediate: !0
    },
    direction: function(e) {
      this.forceUpdate(!0);
    },
    itemsWithSize: function(e, i) {
      for (var r = this.$el.scrollTop, n = 0, l = 0, o = Math.min(e.length, i.length), a = 0; a < o && !(n >= r); a++)
        n += i[a].size || this.minItemSize, l += e[a].size || this.minItemSize;
      var s = l - n;
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
      var e = this.$refs.scroller;
      e && this.forceUpdate(), this.$emit("resize");
    },
    onScrollerVisible: function() {
      this.$emit("vscroll:update", {
        force: !1
      }), this.$emit("visible");
    },
    forceUpdate: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      (e || this.simpleArray) && (this.vscrollData.validSizes = {}), this.$emit("vscroll:update", {
        force: !0
      });
    },
    scrollToItem: function(e) {
      var i = this.$refs.scroller;
      i && i.scrollToItem(e);
    },
    getItemSize: function(e) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, r = this.simpleArray ? i != null ? i : this.items.indexOf(e) : e[this.keyField];
      return this.vscrollData.sizes[r] || 0;
    },
    scrollToBottom: function() {
      var e = this;
      if (!this.$_scrollingToBottom) {
        this.$_scrollingToBottom = !0;
        var i = this.$el;
        this.$nextTick(function() {
          i.scrollTop = i.scrollHeight + 5e3;
          var r = function n() {
            i.scrollTop = i.scrollHeight + 5e3, requestAnimationFrame(function() {
              i.scrollTop = i.scrollHeight + 5e3, e.$_undefinedSizes === 0 ? e.$_scrollingToBottom = !1 : requestAnimationFrame(n);
            });
          };
          requestAnimationFrame(r);
        });
      }
    }
  }
}, Ke = We, he = function() {
  var e = this, i = e.$createElement, r = e._self._c || i;
  return r("RecycleScroller", e._g(e._b({
    ref: "scroller",
    attrs: {
      items: e.itemsWithSize,
      "min-item-size": e.minItemSize,
      direction: e.direction,
      "key-field": "id",
      "list-tag": e.listTag,
      "item-tag": e.itemTag
    },
    on: {
      resize: e.onScrollerResize,
      visible: e.onScrollerVisible
    },
    scopedSlots: e._u([{
      key: "default",
      fn: function(l) {
        var o = l.item, a = l.index, s = l.active;
        return [e._t("default", null, null, {
          item: o.item,
          index: a,
          active: s,
          itemWithSize: o
        })];
      }
    }], null, !0)
  }, "RecycleScroller", e.$attrs, !1), e.listeners), [e._v(" "), r("template", {
    slot: "before"
  }, [e._t("before")], 2), e._v(" "), r("template", {
    slot: "after"
  }, [e._t("after")], 2), e._v(" "), r("template", {
    slot: "empty"
  }, [e._t("empty")], 2)], 2);
}, qe = [];
he._withStripped = !0;
var Xe = void 0, Ge = void 0, Ye = void 0, Je = !1, H = /* @__PURE__ */ K({
  render: he,
  staticRenderFns: qe
}, Xe, Ke, Ge, Je, Ye, !1, void 0, void 0, void 0), Qe = {
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
    finalActive: function(e) {
      this.size || (e ? this.vscrollParent.$_undefinedMap[this.id] || (this.vscrollParent.$_undefinedSizes++, this.vscrollParent.$_undefinedMap[this.id] = !0) : this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = !1)), this.vscrollResizeObserver ? e ? this.observeSize() : this.unobserveSize() : e && this.$_pendingVScrollUpdate === this.id && this.updateSize();
    }
  },
  created: function() {
    var e = this;
    if (!this.$isServer && (this.$_forceNextVScrollUpdate = null, this.updateWatchData(), !this.vscrollResizeObserver)) {
      var i = function(l) {
        e.$watch(function() {
          return e.sizeDependencies[l];
        }, e.onDataUpdate);
      };
      for (var r in this.sizeDependencies)
        i(r);
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
      var e = this;
      this.watchData && !this.vscrollResizeObserver ? this.$_watchData = this.$watch("item", function() {
        e.onDataUpdate();
      }, {
        deep: !0
      }) : this.$_watchData && (this.$_watchData(), this.$_watchData = null);
    },
    onVscrollUpdate: function(e) {
      var i = e.force;
      !this.finalActive && i && (this.$_pendingVScrollUpdate = this.id), (this.$_forceNextVScrollUpdate === this.id || i || !this.size) && this.updateSize();
    },
    onDataUpdate: function() {
      this.updateSize();
    },
    computeSize: function(e) {
      var i = this;
      this.$nextTick(function() {
        if (i.id === e) {
          var r = i.$el.offsetWidth, n = i.$el.offsetHeight;
          i.applySize(r, n);
        }
        i.$_pendingSizeUpdate = null;
      });
    },
    applySize: function(e, i) {
      var r = ~~(this.vscrollParent.direction === "vertical" ? i : e);
      r && this.size !== r && (this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = void 0), this.$set(this.vscrollData.sizes, this.id, r), this.$set(this.vscrollData.validSizes, this.id, !0), this.emitResize && this.$emit("resize", this.id));
    },
    observeSize: function() {
      !this.vscrollResizeObserver || !this.$el.parentNode || (this.vscrollResizeObserver.observe(this.$el.parentNode), this.$el.parentNode.addEventListener("resize", this.onResize));
    },
    unobserveSize: function() {
      !this.vscrollResizeObserver || (this.vscrollResizeObserver.unobserve(this.$el.parentNode), this.$el.parentNode.removeEventListener("resize", this.onResize));
    },
    onResize: function(e) {
      var i = e.detail.contentRect, r = i.width, n = i.height;
      this.applySize(r, n);
    }
  },
  render: function(e) {
    return e(this.tag, this.$slots.default);
  }
}, Ze = Qe, et = void 0, tt = void 0, it = void 0, rt = void 0, W = /* @__PURE__ */ K({}, et, Ze, tt, rt, it, !1, void 0, void 0, void 0);
function nt(t, e) {
  t.component("".concat(e, "recycle-scroller"), B), t.component("".concat(e, "RecycleScroller"), B), t.component("".concat(e, "dynamic-scroller"), H), t.component("".concat(e, "DynamicScroller"), H), t.component("".concat(e, "dynamic-scroller-item"), W), t.component("".concat(e, "DynamicScrollerItem"), W);
}
var st = {
  version: "1.1.2",
  install: function(e, i) {
    var r = Object.assign({}, {
      installComponents: !0,
      componentsPrefix: ""
    }, i);
    for (var n in r)
      typeof r[n] < "u" && (ue[n] = r[n]);
    r.installComponents && nt(e, r.componentsPrefix);
  }
}, F = null;
typeof window < "u" ? F = window.Vue : typeof global < "u" && (F = global.Vue);
F && F.use(st);
function lt(t, e, i, r, n, l, o, a) {
  var s = typeof t == "function" ? t.options : t;
  e && (s.render = e, s.staticRenderFns = i, s._compiled = !0), r && (s.functional = !0), l && (s._scopeId = "data-v-" + l);
  var u;
  if (o ? (u = function(p) {
    p = p || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !p && typeof __VUE_SSR_CONTEXT__ < "u" && (p = __VUE_SSR_CONTEXT__), n && n.call(this, p), p && p._registeredComponents && p._registeredComponents.add(o);
  }, s._ssrRegister = u) : n && (u = a ? function() {
    n.call(this, (s.functional ? this.parent : this).$root.$options.shadowRoot);
  } : n), u)
    if (s.functional) {
      s._injectStyles = u;
      var c = s.render;
      s.render = function(p, m) {
        return u.call(m), c(p, m);
      };
    } else {
      var f = s.beforeCreate;
      s.beforeCreate = f ? [].concat(f, u) : [u];
    }
  return {
    exports: t,
    options: s
  };
}
var at = {
  name: "ElVirtualSelect",
  components: {
    DynamicScroller: H,
    DynamicScrollerItem: W
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
      handler: function(e) {
        this.localList = e, this.rawList = e;
      },
      deep: !0,
      immediate: !0
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
      var e = this.getIndex() - (this.dropdownItemsCount - 1);
      e > 1 && this.$refs.recycleScrollerRef.scrollToItem(e);
    },
    getIndex: function() {
      var e = this;
      return this.multiple ? this.localList.findIndex(function(i) {
        return i[e.valueKey] === e.localValue[e.localValue.length - 1];
      }) : this.localList.findIndex(function(i) {
        return i[e.valueKey] === e.localValue;
      });
    },
    handleFilter: function(e) {
      var i = this;
      this.localList = this.rawList.filter(function(r) {
        return String(r[i.labelKey]).includes(e);
      });
    },
    handleSelectFocus: function() {
      this.localList.length < this.rawList.length && (this.localList = this.rawList);
    },
    handleSelectChange: function(e) {
      this.localValue = e, this.$emit("input", e);
    }
  }
}, ot = function() {
  var e = this, i = e._self._c;
  return i("el-select", e._g(e._b({
    attrs: {
      multiple: e.multiple,
      disabled: e.disabled,
      size: e.size,
      clearable: e.clearable,
      collapseTags: e.collapseTags,
      multipleLimit: e.multipleLimit,
      placeholder: e.placeholder,
      filterable: e.filterable,
      allowCreate: e.allowCreate,
      remote: e.remote,
      remoteMethod: e.remoteMethod,
      loading: e.loading,
      loadingText: e.loadingText,
      noMatchText: e.noMatchText,
      noDataText: e.noDataText,
      popperClass: e.popperClass,
      reserveKeyword: e.reserveKeyword,
      defaultFirstOption: e.defaultFirstOption,
      popperAppendToBody: e.popperAppendToBody,
      "filter-method": e.handleFilter
    },
    on: {
      focus: e.handleSelectFocus,
      change: e.handleSelectChange
    },
    model: {
      value: e.localValue,
      callback: function(n) {
        e.localValue = n;
      },
      expression: "localValue"
    }
  }, "el-select", e.$attrs, !1), e.$listeners), [i("DynamicScroller", {
    ref: "recycleScrollerRef",
    staticClass: "scroller",
    class: e.beautifyScrollerStyle ? "beautify-scroller" : "",
    attrs: {
      items: e.localList,
      "min-item-size": e.minItemSize,
      "key-field": e.valueKey,
      "list-class": e.listClass,
      "item-class": e.itemClass,
      "list-tag": e.listTag,
      "item-tag": e.itemTag
    },
    on: {
      visible: e.handleScrollerVisible
    },
    scopedSlots: e._u([{
      key: "default",
      fn: function(n) {
        var l = n.item, o = n.index, a = n.active;
        return [i("DynamicScrollerItem", {
          attrs: {
            item: l,
            active: a,
            "data-index": o
          }
        }, [i("el-option", {
          key: l[e.valueKey],
          attrs: {
            value: l[e.valueKey],
            label: l[e.labelKey],
            disabled: l.disabled
          }
        }, [e._t("label", function() {
          return [e._v(e._s(l[e.labelKey]))];
        }, {
          item: l
        })], 2)], 1)];
      }
    }, e.localList.length === 0 ? {
      key: "after",
      fn: function() {
        return [i("p", {
          staticClass: "empty-data"
        }, [e._v(e._s(e.noMatchText))])];
      },
      proxy: !0
    } : null], null, !0)
  })], 1);
}, ut = [], ct = /* @__PURE__ */ lt(at, ot, ut, !1, null, "1aeeb08b", null, null), ft = ct.exports;
export {
  ft as default
};
