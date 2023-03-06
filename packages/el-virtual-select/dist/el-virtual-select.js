function Se() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  Se = function() {
    return e;
  };
  var e = {}, t = Object.prototype, r = t.hasOwnProperty, i = Object.defineProperty || function(f, s, d) {
    f[s] = d.value;
  }, n = typeof Symbol == "function" ? Symbol : {}, a = n.iterator || "@@iterator", u = n.asyncIterator || "@@asyncIterator", l = n.toStringTag || "@@toStringTag";
  function o(f, s, d) {
    return Object.defineProperty(f, s, { value: d, enumerable: !0, configurable: !0, writable: !0 }), f[s];
  }
  try {
    o({}, "");
  } catch {
    o = function(d, c, m) {
      return d[c] = m;
    };
  }
  function h(f, s, d, c) {
    var m = s && s.prototype instanceof S ? s : S, y = Object.create(m.prototype), O = new W(c || []);
    return i(y, "_invoke", { value: j(f, d, O) }), y;
  }
  function p(f, s, d) {
    try {
      return { type: "normal", arg: f.call(s, d) };
    } catch (c) {
      return { type: "throw", arg: c };
    }
  }
  e.wrap = h;
  var v = {};
  function S() {
  }
  function $() {
  }
  function g() {
  }
  var _ = {};
  o(_, a, function() {
    return this;
  });
  var b = Object.getPrototypeOf, P = b && b(b(q([])));
  P && P !== t && r.call(P, a) && (_ = P);
  var w = g.prototype = S.prototype = Object.create(_);
  function C(f) {
    ["next", "throw", "return"].forEach(function(s) {
      o(f, s, function(d) {
        return this._invoke(s, d);
      });
    });
  }
  function T(f, s) {
    function d(m, y, O, A) {
      var E = p(f[m], f, y);
      if (E.type !== "throw") {
        var D = E.arg, I = D.value;
        return I && L(I) == "object" && r.call(I, "__await") ? s.resolve(I.__await).then(function(x) {
          d("next", x, O, A);
        }, function(x) {
          d("throw", x, O, A);
        }) : s.resolve(I).then(function(x) {
          D.value = x, O(D);
        }, function(x) {
          return d("throw", x, O, A);
        });
      }
      A(E.arg);
    }
    var c;
    i(this, "_invoke", { value: function(y, O) {
      function A() {
        return new s(function(E, D) {
          d(y, O, E, D);
        });
      }
      return c = c ? c.then(A, A) : A();
    } });
  }
  function j(f, s, d) {
    var c = "suspendedStart";
    return function(m, y) {
      if (c === "executing")
        throw new Error("Generator is already running");
      if (c === "completed") {
        if (m === "throw")
          throw y;
        return Q();
      }
      for (d.method = m, d.arg = y; ; ) {
        var O = d.delegate;
        if (O) {
          var A = J(O, d);
          if (A) {
            if (A === v)
              continue;
            return A;
          }
        }
        if (d.method === "next")
          d.sent = d._sent = d.arg;
        else if (d.method === "throw") {
          if (c === "suspendedStart")
            throw c = "completed", d.arg;
          d.dispatchException(d.arg);
        } else
          d.method === "return" && d.abrupt("return", d.arg);
        c = "executing";
        var E = p(f, s, d);
        if (E.type === "normal") {
          if (c = d.done ? "completed" : "suspendedYield", E.arg === v)
            continue;
          return { value: E.arg, done: d.done };
        }
        E.type === "throw" && (c = "completed", d.method = "throw", d.arg = E.arg);
      }
    };
  }
  function J(f, s) {
    var d = f.iterator[s.method];
    if (d === void 0) {
      if (s.delegate = null, s.method === "throw") {
        if (f.iterator.return && (s.method = "return", s.arg = void 0, J(f, s), s.method === "throw"))
          return v;
        s.method = "throw", s.arg = new TypeError("The iterator does not provide a 'throw' method");
      }
      return v;
    }
    var c = p(d, f.iterator, s.arg);
    if (c.type === "throw")
      return s.method = "throw", s.arg = c.arg, s.delegate = null, v;
    var m = c.arg;
    return m ? m.done ? (s[f.resultName] = m.value, s.next = f.nextLoc, s.method !== "return" && (s.method = "next", s.arg = void 0), s.delegate = null, v) : m : (s.method = "throw", s.arg = new TypeError("iterator result is not an object"), s.delegate = null, v);
  }
  function F(f) {
    var s = { tryLoc: f[0] };
    1 in f && (s.catchLoc = f[1]), 2 in f && (s.finallyLoc = f[2], s.afterLoc = f[3]), this.tryEntries.push(s);
  }
  function Z(f) {
    var s = f.completion || {};
    s.type = "normal", delete s.arg, f.completion = s;
  }
  function W(f) {
    this.tryEntries = [{ tryLoc: "root" }], f.forEach(F, this), this.reset(!0);
  }
  function q(f) {
    if (f) {
      var s = f[a];
      if (s)
        return s.call(f);
      if (typeof f.next == "function")
        return f;
      if (!isNaN(f.length)) {
        var d = -1, c = function m() {
          for (; ++d < f.length; )
            if (r.call(f, d))
              return m.value = f[d], m.done = !1, m;
          return m.value = void 0, m.done = !0, m;
        };
        return c.next = c;
      }
    }
    return { next: Q };
  }
  function Q() {
    return { value: void 0, done: !0 };
  }
  return $.prototype = g, i(w, "constructor", { value: g, configurable: !0 }), i(g, "constructor", { value: $, configurable: !0 }), $.displayName = o(g, l, "GeneratorFunction"), e.isGeneratorFunction = function(f) {
    var s = typeof f == "function" && f.constructor;
    return !!s && (s === $ || (s.displayName || s.name) === "GeneratorFunction");
  }, e.mark = function(f) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(f, g) : (f.__proto__ = g, o(f, l, "GeneratorFunction")), f.prototype = Object.create(w), f;
  }, e.awrap = function(f) {
    return { __await: f };
  }, C(T.prototype), o(T.prototype, u, function() {
    return this;
  }), e.AsyncIterator = T, e.async = function(f, s, d, c, m) {
    m === void 0 && (m = Promise);
    var y = new T(h(f, s, d, c), m);
    return e.isGeneratorFunction(s) ? y : y.next().then(function(O) {
      return O.done ? O.value : y.next();
    });
  }, C(w), o(w, l, "Generator"), o(w, a, function() {
    return this;
  }), o(w, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(f) {
    var s = Object(f), d = [];
    for (var c in s)
      d.push(c);
    return d.reverse(), function m() {
      for (; d.length; ) {
        var y = d.pop();
        if (y in s)
          return m.value = y, m.done = !1, m;
      }
      return m.done = !0, m;
    };
  }, e.values = q, W.prototype = { constructor: W, reset: function(s) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(Z), !s)
      for (var d in this)
        d.charAt(0) === "t" && r.call(this, d) && !isNaN(+d.slice(1)) && (this[d] = void 0);
  }, stop: function() {
    this.done = !0;
    var s = this.tryEntries[0].completion;
    if (s.type === "throw")
      throw s.arg;
    return this.rval;
  }, dispatchException: function(s) {
    if (this.done)
      throw s;
    var d = this;
    function c(D, I) {
      return O.type = "throw", O.arg = s, d.next = D, I && (d.method = "next", d.arg = void 0), !!I;
    }
    for (var m = this.tryEntries.length - 1; m >= 0; --m) {
      var y = this.tryEntries[m], O = y.completion;
      if (y.tryLoc === "root")
        return c("end");
      if (y.tryLoc <= this.prev) {
        var A = r.call(y, "catchLoc"), E = r.call(y, "finallyLoc");
        if (A && E) {
          if (this.prev < y.catchLoc)
            return c(y.catchLoc, !0);
          if (this.prev < y.finallyLoc)
            return c(y.finallyLoc);
        } else if (A) {
          if (this.prev < y.catchLoc)
            return c(y.catchLoc, !0);
        } else {
          if (!E)
            throw new Error("try statement without catch or finally");
          if (this.prev < y.finallyLoc)
            return c(y.finallyLoc);
        }
      }
    }
  }, abrupt: function(s, d) {
    for (var c = this.tryEntries.length - 1; c >= 0; --c) {
      var m = this.tryEntries[c];
      if (m.tryLoc <= this.prev && r.call(m, "finallyLoc") && this.prev < m.finallyLoc) {
        var y = m;
        break;
      }
    }
    y && (s === "break" || s === "continue") && y.tryLoc <= d && d <= y.finallyLoc && (y = null);
    var O = y ? y.completion : {};
    return O.type = s, O.arg = d, y ? (this.method = "next", this.next = y.finallyLoc, v) : this.complete(O);
  }, complete: function(s, d) {
    if (s.type === "throw")
      throw s.arg;
    return s.type === "break" || s.type === "continue" ? this.next = s.arg : s.type === "return" ? (this.rval = this.arg = s.arg, this.method = "return", this.next = "end") : s.type === "normal" && d && (this.next = d), v;
  }, finish: function(s) {
    for (var d = this.tryEntries.length - 1; d >= 0; --d) {
      var c = this.tryEntries[d];
      if (c.finallyLoc === s)
        return this.complete(c.completion, c.afterLoc), Z(c), v;
    }
  }, catch: function(s) {
    for (var d = this.tryEntries.length - 1; d >= 0; --d) {
      var c = this.tryEntries[d];
      if (c.tryLoc === s) {
        var m = c.completion;
        if (m.type === "throw") {
          var y = m.arg;
          Z(c);
        }
        return y;
      }
    }
    throw new Error("illegal catch attempt");
  }, delegateYield: function(s, d, c) {
    return this.delegate = { iterator: q(s), resultName: d, nextLoc: c }, this.method === "next" && (this.arg = void 0), v;
  } }, e;
}
function Re(e, t, r, i, n, a, u) {
  try {
    var l = e[a](u), o = l.value;
  } catch (h) {
    r(h);
    return;
  }
  l.done ? t(o) : Promise.resolve(o).then(i, n);
}
function Pt(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(i, n) {
      var a = e.apply(t, r);
      function u(o) {
        Re(a, i, n, u, l, "next", o);
      }
      function l(o) {
        Re(a, i, n, u, l, "throw", o);
      }
      u(void 0);
    });
  };
}
function It(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = xt(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var i = 0, n = function() {
      };
      return { s: n, n: function() {
        return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
      }, e: function(h) {
        throw h;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, u = !1, l;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var h = r.next();
    return a = h.done, h;
  }, e: function(h) {
    u = !0, l = h;
  }, f: function() {
    try {
      !a && r.return != null && r.return();
    } finally {
      if (u)
        throw l;
    }
  } };
}
function xt(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return je(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return je(e, t);
  }
}
function je(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, i = new Array(t); r < t; r++)
    i[r] = e[r];
  return i;
}
function De(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, i);
  }
  return r;
}
function ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? De(Object(r), !0).forEach(function(i) {
      Lt(e, i, r[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : De(Object(r)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(r, i));
    });
  }
  return e;
}
function Lt(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function L(e) {
  return L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, L(e);
}
function Ct() {
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
var le = void 0;
function $e() {
  $e.init || ($e.init = !0, le = Ct() !== -1);
}
var we = {
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
      this._resizeObject && this._resizeObject.onload && (!le && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), delete this._resizeObject.onload);
    }
  },
  mounted: function() {
    var t = this;
    $e(), this.$nextTick(function() {
      t._w = t.$el.offsetWidth, t._h = t.$el.offsetHeight;
    });
    var r = document.createElement("object");
    this._resizeObject = r, r.setAttribute("aria-hidden", "true"), r.setAttribute("tabindex", -1), r.onload = this.addResizeHandlers, r.type = "text/html", le && this.$el.appendChild(r), r.data = "about:blank", le || this.$el.appendChild(r);
  },
  beforeDestroy: function() {
    this.removeResizeHandlers();
  }
};
function Et(e) {
  e.component("resize-observer", we), e.component("ResizeObserver", we);
}
var Rt = {
  version: "0.4.5",
  install: Et
}, fe = null;
typeof window < "u" ? fe = window.Vue : typeof global < "u" && (fe = global.Vue);
fe && fe.use(Rt);
function ue(e) {
  return typeof Symbol == "function" && L(Symbol.iterator) === "symbol" ? ue = function(r) {
    return L(r);
  } : ue = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : L(r);
  }, ue(e);
}
function jt(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ve(e, t) {
  for (var r = 0; r < t.length; r++) {
    var i = t[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
  }
}
function Dt(e, t, r) {
  return t && Ve(e.prototype, t), r && Ve(e, r), e;
}
function Me(e) {
  return Vt(e) || Mt(e) || Ft();
}
function Vt(e) {
  if (Array.isArray(e)) {
    for (var t = 0, r = new Array(e.length); t < e.length; t++)
      r[t] = e[t];
    return r;
  }
}
function Mt(e) {
  if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]")
    return Array.from(e);
}
function Ft() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function Nt(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function Ut(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i, n, a, u = function(o) {
    for (var h = arguments.length, p = new Array(h > 1 ? h - 1 : 0), v = 1; v < h; v++)
      p[v - 1] = arguments[v];
    if (a = p, !(i && o === n)) {
      var S = r.leading;
      typeof S == "function" && (S = S(o, n)), (!i || o !== n) && S && e.apply(void 0, [o].concat(Me(a))), n = o, clearTimeout(i), i = setTimeout(function() {
        e.apply(void 0, [o].concat(Me(a))), i = 0;
      }, t);
    }
  };
  return u._clear = function() {
    clearTimeout(i), i = null;
  }, u;
}
function ot(e, t) {
  if (e === t)
    return !0;
  if (ue(e) === "object") {
    for (var r in e)
      if (!ot(e[r], t[r]))
        return !1;
    return !0;
  }
  return !1;
}
var Bt = /* @__PURE__ */ function() {
  function e(t, r, i) {
    jt(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(r, i);
  }
  return Dt(e, [{
    key: "createObserver",
    value: function(r, i) {
      var n = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = Nt(r), this.callback = function(l, o) {
          n.options.callback(l, o), l && n.options.once && (n.frozen = !0, n.destroyObserver());
        }, this.callback && this.options.throttle) {
          var a = this.options.throttleOptions || {}, u = a.leading;
          this.callback = Ut(this.callback, this.options.throttle, {
            leading: function(o) {
              return u === "both" || u === "visible" && o || u === "hidden" && !o;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(l) {
          var o = l[0];
          if (l.length > 1) {
            var h = l.find(function(v) {
              return v.isIntersecting;
            });
            h && (o = h);
          }
          if (n.callback) {
            var p = o.isIntersecting && o.intersectionRatio >= n.threshold;
            if (p === n.oldResult)
              return;
            n.oldResult = p, n.callback(p, o);
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
function st(e, t, r) {
  var i = t.value;
  if (!!i)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var n = new Bt(e, i, r);
      e._vue_visibilityState = n;
    }
}
function Gt(e, t, r) {
  var i = t.value, n = t.oldValue;
  if (!ot(i, n)) {
    var a = e._vue_visibilityState;
    if (!i) {
      lt(e);
      return;
    }
    a ? a.createObserver(i, r) : st(e, {
      value: i
    }, r);
  }
}
function lt(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var ut = {
  bind: st,
  update: Gt,
  unbind: lt
};
function Ht(e) {
  e.directive("observe-visibility", ut);
}
var Kt = {
  version: "0.4.6",
  install: Ht
}, de = null;
typeof window < "u" ? de = window.Vue : typeof global < "u" && (de = global.Vue);
de && de.use(Kt);
var kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ct = {
  exports: {}
};
(function(e) {
  (function(t, r) {
    e.exports ? e.exports = r() : t.Scrollparent = r();
  })(kt, function() {
    var t = /(auto|scroll)/, r = function l(o, h) {
      return o.parentNode === null ? h : l(o.parentNode, h.concat([o]));
    }, i = function(o, h) {
      return getComputedStyle(o, null).getPropertyValue(h);
    }, n = function(o) {
      return i(o, "overflow") + i(o, "overflow-y") + i(o, "overflow-x");
    }, a = function(o) {
      return t.test(n(o));
    }, u = function(o) {
      if (o instanceof HTMLElement || o instanceof SVGElement) {
        for (var h = r(o.parentNode, []), p = 0; p < h.length; p += 1)
          if (a(h[p]))
            return h[p];
        return document.scrollingElement || document.documentElement;
      }
    };
    return u;
  });
})(ct);
var Fe = ct.exports, ft = {
  itemsLimit: 1e3
}, dt = {
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
function ht() {
  return this.items.length && L(this.items[0]) !== "object";
}
var Te = !1;
if (typeof window < "u") {
  Te = !1;
  try {
    var Wt = Object.defineProperty({}, "passive", {
      get: function() {
        Te = !0;
      }
    });
    window.addEventListener("test", null, Wt);
  } catch {
  }
}
var qt = 0, Xt = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: we
  },
  directives: {
    ObserveVisibility: ut
  },
  props: ce(ce({}, dt), {}, {
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
        }, r = this.items, i = this.sizeField, n = this.minItemSize, a = 1e4, u = 0, l, o = 0, h = r.length; o < h; o++)
          l = r[o][i] || n, l < a && (a = l), u += l, t[o] = {
            accumulator: u,
            size: l
          };
        return this.$_computedMinItemSize = a, t;
      }
      return [];
    },
    simpleArray: ht
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
      var u = {
        item: i,
        position: 0
      }, l = {
        id: qt++,
        index: r,
        used: !0,
        key: n,
        type: a
      };
      return Object.defineProperty(u, "nr", {
        configurable: !1,
        value: l
      }), t.push(u), u;
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
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = this.itemSize, n = this.gridItems || 1, a = this.itemSecondarySize || i, u = this.$_computedMinItemSize, l = this.typeField, o = this.simpleArray ? null : this.keyField, h = this.items, p = h.length, v = this.sizes, S = this.$_views, $ = this.$_unusedViews, g = this.pool, _, b, P, w, C;
      if (!p)
        _ = b = w = C = P = 0;
      else if (this.$_prerender)
        _ = w = 0, b = C = Math.min(this.prerender, h.length), P = null;
      else {
        var T = this.getScroll();
        if (r) {
          var j = T.start - this.$_lastUpdateScrollPosition;
          if (j < 0 && (j = -j), i === null && j < u || j < i)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = T.start;
        var J = this.buffer;
        T.start -= J, T.end += J;
        var F = 0;
        if (this.$refs.before && (F = this.$refs.before.scrollHeight, T.start -= F), this.$refs.after) {
          var Z = this.$refs.after.scrollHeight;
          T.end += Z;
        }
        if (i === null) {
          var W, q = 0, Q = p - 1, f = ~~(p / 2), s;
          do
            s = f, W = v[f].accumulator, W < T.start ? q = f : f < p - 1 && v[f + 1].accumulator > T.start && (Q = f), f = ~~((q + Q) / 2);
          while (f !== s);
          for (f < 0 && (f = 0), _ = f, P = v[p - 1].accumulator, b = f; b < p && v[b].accumulator < T.end; b++)
            ;
          for (b === -1 ? b = h.length - 1 : (b++, b > p && (b = p)), w = _; w < p && F + v[w].accumulator < T.start; w++)
            ;
          for (C = w; C < p && F + v[C].accumulator < T.end; C++)
            ;
        } else {
          _ = ~~(T.start / i * n);
          var d = _ % n;
          _ -= d, b = Math.ceil(T.end / i * n), w = Math.max(0, Math.floor((T.start - F) / i * n)), C = Math.floor((T.end - F) / i * n), _ < 0 && (_ = 0), b > p && (b = p), w < 0 && (w = 0), C > p && (C = p), P = Math.ceil(p / n) * i;
        }
      }
      b - _ > ft.itemsLimit && this.itemsLimitError(), this.totalSize = P;
      var c, m = _ <= this.$_endIndex && b >= this.$_startIndex;
      if (this.$_continuous !== m) {
        if (m) {
          S.clear(), $.clear();
          for (var y = 0, O = g.length; y < O; y++)
            c = g[y], this.unuseView(c);
        }
        this.$_continuous = m;
      } else if (m)
        for (var A = 0, E = g.length; A < E; A++)
          c = g[A], c.nr.used && (t && (c.nr.index = h.indexOf(c.item)), (c.nr.index === -1 || c.nr.index < _ || c.nr.index >= b) && this.unuseView(c));
      for (var D = m ? null : /* @__PURE__ */ new Map(), I, x, N, ee, R = _; R < b; R++) {
        I = h[R];
        var U = o ? I[o] : I;
        if (U == null)
          throw new Error("Key is ".concat(U, " on item (keyField is '").concat(o, "')"));
        if (c = S.get(U), !i && !v[R].size) {
          c && this.unuseView(c);
          continue;
        }
        c ? (c.nr.used = !0, c.item = I) : (R === h.length - 1 && this.$emit("scroll-end"), R === 0 && this.$emit("scroll-start"), x = I[l], N = $.get(x), m ? N && N.length ? (c = N.pop(), c.item = I, c.nr.used = !0, c.nr.index = R, c.nr.key = U, c.nr.type = x) : c = this.addView(g, R, I, U, x) : (ee = D.get(x) || 0, (!N || ee >= N.length) && (c = this.addView(g, R, I, U, x), this.unuseView(c, !0), N = $.get(x)), c = N[ee], c.item = I, c.nr.used = !0, c.nr.index = R, c.nr.key = U, c.nr.type = x, D.set(x, ee + 1), ee++), S.set(U, c)), i === null ? (c.position = v[R - 1].accumulator, c.offset = 0) : (c.position = Math.floor(R / n) * i, c.offset = R % n * a);
      }
      return this.$_startIndex = _, this.$_endIndex = b, this.emitUpdate && this.$emit("update", _, b, w, C), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, 300), {
        continuous: m
      };
    },
    getListenerTarget: function() {
      var t = Fe(this.$el);
      return window.document && (t === window.document.documentElement || t === window.document.body) && (t = window), t;
    },
    getScroll: function() {
      var t = this.$el, r = this.direction, i = r === "vertical", n;
      if (this.pageMode) {
        var a = t.getBoundingClientRect(), u = i ? a.height : a.width, l = -(i ? a.top : a.left), o = i ? window.innerHeight : window.innerWidth;
        l < 0 && (o += l, l = 0), l + o > u && (o = u - l), n = {
          start: l,
          end: l + o
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
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, Te ? {
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
        var u = Fe(this.$el), l = u.tagName === "HTML" ? 0 : u[r.scroll], o = u.getBoundingClientRect(), h = this.$el.getBoundingClientRect(), p = h[r.start] - o[r.start];
        i = u, n = r.scroll, a = t + l + p;
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
function Ee(e, t, r, i, n, a, u, l, o, h) {
  typeof u != "boolean" && (o = l, l = u, u = !1);
  var p = typeof r == "function" ? r.options : r;
  e && e.render && (p.render = e.render, p.staticRenderFns = e.staticRenderFns, p._compiled = !0, n && (p.functional = !0)), i && (p._scopeId = i);
  var v;
  if (a ? (v = function(_) {
    _ = _ || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !_ && typeof __VUE_SSR_CONTEXT__ < "u" && (_ = __VUE_SSR_CONTEXT__), t && t.call(this, o(_)), _ && _._registeredComponents && _._registeredComponents.add(a);
  }, p._ssrRegister = v) : t && (v = u ? function(g) {
    t.call(this, h(g, this.$root.$options.shadowRoot));
  } : function(g) {
    t.call(this, l(g));
  }), v)
    if (p.functional) {
      var S = p.render;
      p.render = function(_, b) {
        return v.call(b), S(_, b);
      };
    } else {
      var $ = p.beforeCreate;
      p.beforeCreate = $ ? [].concat($, v) : [v];
    }
  return r;
}
var Yt = Xt, pt = function() {
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
  }, [i._l(i.pool, function(u) {
    return a(i.itemTag, i._g({
      key: u.nr.id,
      tag: "component",
      staticClass: "vue-recycle-scroller__item-view",
      class: [i.itemClass, {
        hover: !i.skipHover && i.hoverKey === u.nr.key
      }],
      style: i.ready ? {
        transform: "translate" + (i.direction === "vertical" ? "Y" : "X") + "(" + u.position + "px) translate" + (i.direction === "vertical" ? "X" : "Y") + "(" + u.offset + "px)",
        width: i.gridItems ? (i.direction === "vertical" && i.itemSecondarySize || i.itemSize) + "px" : void 0,
        height: i.gridItems ? (i.direction === "horizontal" && i.itemSecondarySize || i.itemSize) + "px" : void 0
      } : null
    }, i.skipHover ? {} : {
      mouseenter: function() {
        i.hoverKey = u.nr.key;
      },
      mouseleave: function() {
        i.hoverKey = null;
      }
    }), [i._t("default", null, {
      item: u.item,
      index: u.nr.index,
      active: u.nr.used
    })], 2);
  }), i._v(" "), i._t("empty")], 2), i._v(" "), i.$slots.after ? a("div", {
    ref: "after",
    staticClass: "vue-recycle-scroller__slot"
  }, [i._t("after")], 2) : i._e(), i._v(" "), a("ResizeObserver", {
    on: {
      notify: i.handleResize
    }
  })], 1);
}, Jt = [];
pt._withStripped = !0;
var Zt = void 0, Qt = void 0, er = void 0, tr = !1, ze = /* @__PURE__ */ Ee({
  render: pt,
  staticRenderFns: Jt
}, Zt, Yt, Qt, tr, er, !1, void 0, void 0, void 0), rr = {
  name: "DynamicScroller",
  components: {
    RecycleScroller: ze
  },
  provide: function() {
    return typeof ResizeObserver < "u" && (this.$_resizeObserver = new ResizeObserver(function(t) {
      requestAnimationFrame(function() {
        if (!!Array.isArray(t)) {
          var r = It(t), i;
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
          } catch (u) {
            r.e(u);
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
  props: ce(ce({}, dt), {}, {
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
    simpleArray: ht,
    itemsWithSize: function() {
      for (var t = [], r = this.items, i = this.keyField, n = this.simpleArray, a = this.vscrollData.sizes, u = r.length, l = 0; l < u; l++) {
        var o = r[l], h = n ? l : o[i], p = a[h];
        typeof p > "u" && !this.$_undefinedMap[h] && (p = 0), t.push({
          item: o,
          id: h,
          size: p
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
      for (var i = this.$el.scrollTop, n = 0, a = 0, u = Math.min(t.length, r.length), l = 0; l < u && !(n >= i); l++)
        n += r[l].size || this.minItemSize, a += t[l].size || this.minItemSize;
      var o = a - n;
      o !== 0 && (this.$el.scrollTop += o);
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
}, ir = rr, vt = function() {
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
        var u = a.item, l = a.index, o = a.active;
        return [t._t("default", null, null, {
          item: u.item,
          index: l,
          active: o,
          itemWithSize: u
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
}, nr = [];
vt._withStripped = !0;
var ar = void 0, or = void 0, sr = void 0, lr = !1, Oe = /* @__PURE__ */ Ee({
  render: vt,
  staticRenderFns: nr
}, ar, ir, or, lr, sr, !1, void 0, void 0, void 0), ur = {
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
}, cr = ur, fr = void 0, dr = void 0, hr = void 0, pr = void 0, Ae = /* @__PURE__ */ Ee({}, fr, cr, dr, pr, hr, !1, void 0, void 0, void 0);
function vr(e, t) {
  e.component("".concat(t, "recycle-scroller"), ze), e.component("".concat(t, "RecycleScroller"), ze), e.component("".concat(t, "dynamic-scroller"), Oe), e.component("".concat(t, "DynamicScroller"), Oe), e.component("".concat(t, "dynamic-scroller-item"), Ae), e.component("".concat(t, "DynamicScrollerItem"), Ae);
}
var mr = {
  version: "1.1.2",
  install: function(t, r) {
    var i = Object.assign({}, {
      installComponents: !0,
      componentsPrefix: ""
    }, r);
    for (var n in i)
      typeof i[n] < "u" && (ft[n] = i[n]);
    i.installComponents && vr(t, i.componentsPrefix);
  }
}, he = null;
typeof window < "u" ? he = window.Vue : typeof global < "u" && (he = global.Vue);
he && he.use(mr);
var yr = (typeof global > "u" ? "undefined" : L(global)) == "object" && global && global.Object === Object && global, mt = yr, _r = (typeof self > "u" ? "undefined" : L(self)) == "object" && self && self.Object === Object && self, gr = mt || _r || Function("return this")(), V = gr, br = V.Symbol, X = br, yt = Object.prototype, Sr = yt.hasOwnProperty, $r = yt.toString, te = X ? X.toStringTag : void 0;
function wr(e) {
  var t = Sr.call(e, te), r = e[te];
  try {
    e[te] = void 0;
    var i = !0;
  } catch {
  }
  var n = $r.call(e);
  return i && (t ? e[te] = r : delete e[te]), n;
}
var Tr = Object.prototype, zr = Tr.toString;
function Or(e) {
  return zr.call(e);
}
var Ar = "[object Null]", Pr = "[object Undefined]", Ne = X ? X.toStringTag : void 0;
function oe(e) {
  return e == null ? e === void 0 ? Pr : Ar : Ne && Ne in Object(e) ? wr(e) : Or(e);
}
function ie(e) {
  return e != null && L(e) == "object";
}
var Ir = Array.isArray, pe = Ir;
function _t(e) {
  var t = L(e);
  return e != null && (t == "object" || t == "function");
}
var xr = "[object AsyncFunction]", Lr = "[object Function]", Cr = "[object GeneratorFunction]", Er = "[object Proxy]";
function gt(e) {
  if (!_t(e))
    return !1;
  var t = oe(e);
  return t == Lr || t == Cr || t == xr || t == Er;
}
var Rr = V["__core-js_shared__"], _e = Rr, Ue = function() {
  var e = /[^.]+$/.exec(_e && _e.keys && _e.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function jr(e) {
  return !!Ue && Ue in e;
}
var Dr = Function.prototype, Vr = Dr.toString;
function K(e) {
  if (e != null) {
    try {
      return Vr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Mr = /[\\^$.*+?()[\]{}|]/g, Fr = /^\[object .+?Constructor\]$/, Nr = Function.prototype, Ur = Object.prototype, Br = Nr.toString, Gr = Ur.hasOwnProperty, Hr = RegExp("^" + Br.call(Gr).replace(Mr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Kr(e) {
  if (!_t(e) || jr(e))
    return !1;
  var t = gt(e) ? Hr : Fr;
  return t.test(K(e));
}
function kr(e, t) {
  return e == null ? void 0 : e[t];
}
function Y(e, t) {
  var r = kr(e, t);
  return Kr(r) ? r : void 0;
}
var Wr = Y(V, "WeakMap"), Pe = Wr, qr = 9007199254740991, Xr = /^(?:0|[1-9]\d*)$/;
function Yr(e, t) {
  var r = L(e);
  return t = t == null ? qr : t, !!t && (r == "number" || r != "symbol" && Xr.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function bt(e, t) {
  return e === t || e !== e && t !== t;
}
var Jr = 9007199254740991;
function St(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Jr;
}
function Zr(e) {
  return e != null && St(e.length) && !gt(e);
}
var Qr = Object.prototype;
function ei(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Qr;
  return e === r;
}
function ti(e, t) {
  for (var r = -1, i = Array(e); ++r < e; )
    i[r] = t(r);
  return i;
}
var ri = "[object Arguments]";
function Be(e) {
  return ie(e) && oe(e) == ri;
}
var $t = Object.prototype, ii = $t.hasOwnProperty, ni = $t.propertyIsEnumerable, ai = Be(function() {
  return arguments;
}()) ? Be : function(e) {
  return ie(e) && ii.call(e, "callee") && !ni.call(e, "callee");
}, oi = ai;
function si() {
  return !1;
}
var wt = (typeof exports > "u" ? "undefined" : L(exports)) == "object" && exports && !exports.nodeType && exports, Ge = wt && (typeof module > "u" ? "undefined" : L(module)) == "object" && module && !module.nodeType && module, li = Ge && Ge.exports === wt, He = li ? V.Buffer : void 0, ui = He ? He.isBuffer : void 0, ci = ui || si, Ie = ci, fi = "[object Arguments]", di = "[object Array]", hi = "[object Boolean]", pi = "[object Date]", vi = "[object Error]", mi = "[object Function]", yi = "[object Map]", _i = "[object Number]", gi = "[object Object]", bi = "[object RegExp]", Si = "[object Set]", $i = "[object String]", wi = "[object WeakMap]", Ti = "[object ArrayBuffer]", zi = "[object DataView]", Oi = "[object Float32Array]", Ai = "[object Float64Array]", Pi = "[object Int8Array]", Ii = "[object Int16Array]", xi = "[object Int32Array]", Li = "[object Uint8Array]", Ci = "[object Uint8ClampedArray]", Ei = "[object Uint16Array]", Ri = "[object Uint32Array]", z = {};
z[Oi] = z[Ai] = z[Pi] = z[Ii] = z[xi] = z[Li] = z[Ci] = z[Ei] = z[Ri] = !0;
z[fi] = z[di] = z[Ti] = z[hi] = z[zi] = z[pi] = z[vi] = z[mi] = z[yi] = z[_i] = z[gi] = z[bi] = z[Si] = z[$i] = z[wi] = !1;
function ji(e) {
  return ie(e) && St(e.length) && !!z[oe(e)];
}
function Di(e) {
  return function(t) {
    return e(t);
  };
}
var Tt = (typeof exports > "u" ? "undefined" : L(exports)) == "object" && exports && !exports.nodeType && exports, re = Tt && (typeof module > "u" ? "undefined" : L(module)) == "object" && module && !module.nodeType && module, Vi = re && re.exports === Tt, ge = Vi && mt.process, Mi = function() {
  try {
    var e = re && re.require && re.require("util").types;
    return e || ge && ge.binding && ge.binding("util");
  } catch {
  }
}(), Ke = Mi, ke = Ke && Ke.isTypedArray, Fi = ke ? Di(ke) : ji, zt = Fi, Ni = Object.prototype, Ui = Ni.hasOwnProperty;
function Bi(e, t) {
  var r = pe(e), i = !r && oi(e), n = !r && !i && Ie(e), a = !r && !i && !n && zt(e), u = r || i || n || a, l = u ? ti(e.length, String) : [], o = l.length;
  for (var h in e)
    (t || Ui.call(e, h)) && !(u && (h == "length" || n && (h == "offset" || h == "parent") || a && (h == "buffer" || h == "byteLength" || h == "byteOffset") || Yr(h, o))) && l.push(h);
  return l;
}
function Gi(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Hi = Gi(Object.keys, Object), Ki = Hi, ki = Object.prototype, Wi = ki.hasOwnProperty;
function qi(e) {
  if (!ei(e))
    return Ki(e);
  var t = [];
  for (var r in Object(e))
    Wi.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Xi(e) {
  return Zr(e) ? Bi(e) : qi(e);
}
var Yi = Y(Object, "create"), ne = Yi;
function Ji() {
  this.__data__ = ne ? ne(null) : {}, this.size = 0;
}
function Zi(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Qi = "__lodash_hash_undefined__", en = Object.prototype, tn = en.hasOwnProperty;
function rn(e) {
  var t = this.__data__;
  if (ne) {
    var r = t[e];
    return r === Qi ? void 0 : r;
  }
  return tn.call(t, e) ? t[e] : void 0;
}
var nn = Object.prototype, an = nn.hasOwnProperty;
function on(e) {
  var t = this.__data__;
  return ne ? t[e] !== void 0 : an.call(t, e);
}
var sn = "__lodash_hash_undefined__";
function ln(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ne && t === void 0 ? sn : t, this;
}
function H(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
H.prototype.clear = Ji;
H.prototype.delete = Zi;
H.prototype.get = rn;
H.prototype.has = on;
H.prototype.set = ln;
function un() {
  this.__data__ = [], this.size = 0;
}
function me(e, t) {
  for (var r = e.length; r--; )
    if (bt(e[r][0], t))
      return r;
  return -1;
}
var cn = Array.prototype, fn = cn.splice;
function dn(e) {
  var t = this.__data__, r = me(t, e);
  if (r < 0)
    return !1;
  var i = t.length - 1;
  return r == i ? t.pop() : fn.call(t, r, 1), --this.size, !0;
}
function hn(e) {
  var t = this.__data__, r = me(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function pn(e) {
  return me(this.__data__, e) > -1;
}
function vn(e, t) {
  var r = this.__data__, i = me(r, e);
  return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
}
function M(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
M.prototype.clear = un;
M.prototype.delete = dn;
M.prototype.get = hn;
M.prototype.has = pn;
M.prototype.set = vn;
var mn = Y(V, "Map"), ae = mn;
function yn() {
  this.size = 0, this.__data__ = {
    hash: new H(),
    map: new (ae || M)(),
    string: new H()
  };
}
function _n(e) {
  var t = L(e);
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ye(e, t) {
  var r = e.__data__;
  return _n(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function gn(e) {
  var t = ye(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function bn(e) {
  return ye(this, e).get(e);
}
function Sn(e) {
  return ye(this, e).has(e);
}
function $n(e, t) {
  var r = ye(this, e), i = r.size;
  return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
}
function k(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
k.prototype.clear = yn;
k.prototype.delete = gn;
k.prototype.get = bn;
k.prototype.has = Sn;
k.prototype.set = $n;
function wn(e, t) {
  for (var r = -1, i = t.length, n = e.length; ++r < i; )
    e[n + r] = t[r];
  return e;
}
function Tn() {
  this.__data__ = new M(), this.size = 0;
}
function zn(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function On(e) {
  return this.__data__.get(e);
}
function An(e) {
  return this.__data__.has(e);
}
var Pn = 200;
function In(e, t) {
  var r = this.__data__;
  if (r instanceof M) {
    var i = r.__data__;
    if (!ae || i.length < Pn - 1)
      return i.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new k(i);
  }
  return r.set(e, t), this.size = r.size, this;
}
function B(e) {
  var t = this.__data__ = new M(e);
  this.size = t.size;
}
B.prototype.clear = Tn;
B.prototype.delete = zn;
B.prototype.get = On;
B.prototype.has = An;
B.prototype.set = In;
function xn(e, t) {
  for (var r = -1, i = e == null ? 0 : e.length, n = 0, a = []; ++r < i; ) {
    var u = e[r];
    t(u, r, e) && (a[n++] = u);
  }
  return a;
}
function Ln() {
  return [];
}
var Cn = Object.prototype, En = Cn.propertyIsEnumerable, We = Object.getOwnPropertySymbols, Rn = We ? function(e) {
  return e == null ? [] : (e = Object(e), xn(We(e), function(t) {
    return En.call(e, t);
  }));
} : Ln, jn = Rn;
function Dn(e, t, r) {
  var i = t(e);
  return pe(e) ? i : wn(i, r(e));
}
function qe(e) {
  return Dn(e, Xi, jn);
}
var Vn = Y(V, "DataView"), xe = Vn, Mn = Y(V, "Promise"), Le = Mn, Fn = Y(V, "Set"), Ce = Fn, Xe = "[object Map]", Nn = "[object Object]", Ye = "[object Promise]", Je = "[object Set]", Ze = "[object WeakMap]", Qe = "[object DataView]", Un = K(xe), Bn = K(ae), Gn = K(Le), Hn = K(Ce), Kn = K(Pe), G = oe;
(xe && G(new xe(new ArrayBuffer(1))) != Qe || ae && G(new ae()) != Xe || Le && G(Le.resolve()) != Ye || Ce && G(new Ce()) != Je || Pe && G(new Pe()) != Ze) && (G = function(t) {
  var r = oe(t), i = r == Nn ? t.constructor : void 0, n = i ? K(i) : "";
  if (n)
    switch (n) {
      case Un:
        return Qe;
      case Bn:
        return Xe;
      case Gn:
        return Ye;
      case Hn:
        return Je;
      case Kn:
        return Ze;
    }
  return r;
});
var et = G, kn = V.Uint8Array, tt = kn, Wn = "__lodash_hash_undefined__";
function qn(e) {
  return this.__data__.set(e, Wn), this;
}
function Xn(e) {
  return this.__data__.has(e);
}
function ve(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new k(); ++t < r; )
    this.add(e[t]);
}
ve.prototype.add = ve.prototype.push = qn;
ve.prototype.has = Xn;
function Yn(e, t) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Jn(e, t) {
  return e.has(t);
}
var Zn = 1, Qn = 2;
function Ot(e, t, r, i, n, a) {
  var u = r & Zn, l = e.length, o = t.length;
  if (l != o && !(u && o > l))
    return !1;
  var h = a.get(e), p = a.get(t);
  if (h && p)
    return h == t && p == e;
  var v = -1, S = !0, $ = r & Qn ? new ve() : void 0;
  for (a.set(e, t), a.set(t, e); ++v < l; ) {
    var g = e[v], _ = t[v];
    if (i)
      var b = u ? i(_, g, v, t, e, a) : i(g, _, v, e, t, a);
    if (b !== void 0) {
      if (b)
        continue;
      S = !1;
      break;
    }
    if ($) {
      if (!Yn(t, function(P, w) {
        if (!Jn($, w) && (g === P || n(g, P, r, i, a)))
          return $.push(w);
      })) {
        S = !1;
        break;
      }
    } else if (!(g === _ || n(g, _, r, i, a))) {
      S = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), S;
}
function ea(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(i, n) {
    r[++t] = [n, i];
  }), r;
}
function ta(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(i) {
    r[++t] = i;
  }), r;
}
var ra = 1, ia = 2, na = "[object Boolean]", aa = "[object Date]", oa = "[object Error]", sa = "[object Map]", la = "[object Number]", ua = "[object RegExp]", ca = "[object Set]", fa = "[object String]", da = "[object Symbol]", ha = "[object ArrayBuffer]", pa = "[object DataView]", rt = X ? X.prototype : void 0, be = rt ? rt.valueOf : void 0;
function va(e, t, r, i, n, a, u) {
  switch (r) {
    case pa:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ha:
      return !(e.byteLength != t.byteLength || !a(new tt(e), new tt(t)));
    case na:
    case aa:
    case la:
      return bt(+e, +t);
    case oa:
      return e.name == t.name && e.message == t.message;
    case ua:
    case fa:
      return e == t + "";
    case sa:
      var l = ea;
    case ca:
      var o = i & ra;
      if (l || (l = ta), e.size != t.size && !o)
        return !1;
      var h = u.get(e);
      if (h)
        return h == t;
      i |= ia, u.set(e, t);
      var p = Ot(l(e), l(t), i, n, a, u);
      return u.delete(e), p;
    case da:
      if (be)
        return be.call(e) == be.call(t);
  }
  return !1;
}
var ma = 1, ya = Object.prototype, _a = ya.hasOwnProperty;
function ga(e, t, r, i, n, a) {
  var u = r & ma, l = qe(e), o = l.length, h = qe(t), p = h.length;
  if (o != p && !u)
    return !1;
  for (var v = o; v--; ) {
    var S = l[v];
    if (!(u ? S in t : _a.call(t, S)))
      return !1;
  }
  var $ = a.get(e), g = a.get(t);
  if ($ && g)
    return $ == t && g == e;
  var _ = !0;
  a.set(e, t), a.set(t, e);
  for (var b = u; ++v < o; ) {
    S = l[v];
    var P = e[S], w = t[S];
    if (i)
      var C = u ? i(w, P, S, t, e, a) : i(P, w, S, e, t, a);
    if (!(C === void 0 ? P === w || n(P, w, r, i, a) : C)) {
      _ = !1;
      break;
    }
    b || (b = S == "constructor");
  }
  if (_ && !b) {
    var T = e.constructor, j = t.constructor;
    T != j && "constructor" in e && "constructor" in t && !(typeof T == "function" && T instanceof T && typeof j == "function" && j instanceof j) && (_ = !1);
  }
  return a.delete(e), a.delete(t), _;
}
var ba = 1, it = "[object Arguments]", nt = "[object Array]", se = "[object Object]", Sa = Object.prototype, at = Sa.hasOwnProperty;
function $a(e, t, r, i, n, a) {
  var u = pe(e), l = pe(t), o = u ? nt : et(e), h = l ? nt : et(t);
  o = o == it ? se : o, h = h == it ? se : h;
  var p = o == se, v = h == se, S = o == h;
  if (S && Ie(e)) {
    if (!Ie(t))
      return !1;
    u = !0, p = !1;
  }
  if (S && !p)
    return a || (a = new B()), u || zt(e) ? Ot(e, t, r, i, n, a) : va(e, t, o, r, i, n, a);
  if (!(r & ba)) {
    var $ = p && at.call(e, "__wrapped__"), g = v && at.call(t, "__wrapped__");
    if ($ || g) {
      var _ = $ ? e.value() : e, b = g ? t.value() : t;
      return a || (a = new B()), n(_, b, r, i, a);
    }
  }
  return S ? (a || (a = new B()), ga(e, t, r, i, n, a)) : !1;
}
function At(e, t, r, i, n) {
  return e === t ? !0 : e == null || t == null || !ie(e) && !ie(t) ? e !== e && t !== t : $a(e, t, r, i, At, n);
}
function wa(e, t) {
  return At(e, t);
}
function Ta(e, t, r, i, n, a, u, l) {
  var o = typeof e == "function" ? e.options : e;
  t && (o.render = t, o.staticRenderFns = r, o._compiled = !0), i && (o.functional = !0), a && (o._scopeId = "data-v-" + a);
  var h;
  if (u ? (h = function($) {
    $ = $ || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !$ && typeof __VUE_SSR_CONTEXT__ < "u" && ($ = __VUE_SSR_CONTEXT__), n && n.call(this, $), $ && $._registeredComponents && $._registeredComponents.add(u);
  }, o._ssrRegister = h) : n && (h = l ? function() {
    n.call(this, (o.functional ? this.parent : this).$root.$options.shadowRoot);
  } : n), h)
    if (o.functional) {
      o._injectStyles = h;
      var p = o.render;
      o.render = function($, g) {
        return h.call(g), p($, g);
      };
    } else {
      var v = o.beforeCreate;
      o.beforeCreate = v ? [].concat(v, h) : [h];
    }
  return {
    exports: e,
    options: o
  };
}
var za = {
  name: "ElVirtualSelect",
  components: {
    DynamicScroller: Oe,
    DynamicScrollerItem: Ae
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
      handler: function(t, r) {
        this.localList = t, this.rawList = t, Array.isArray(t) && t.length > 1 && (!r || Array.isArray(r) && r.length === 0) && this.showLabel();
      },
      deep: !0,
      immediate: !0
    },
    value: {
      handler: function(t) {
        wa(t, this.localValue) || (this.localValue = t);
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
  mounted: function() {
    this.showLabel();
  },
  methods: {
    showLabel: function() {
      var t = this;
      return Pt(/* @__PURE__ */ Se().mark(function r() {
        var i, n, a, u, l, o;
        return Se().wrap(function(p) {
          for (; ; )
            switch (p.prev = p.next) {
              case 0:
                if (i = t.localValue, n = t.localList, a = t.valueKey, u = t.labelKey, !(i && Array.isArray(n) && n.length > 1)) {
                  p.next = 8;
                  break;
                }
                if (o = (l = n.find(function(v) {
                  return v[a] === i;
                })) === null || l === void 0 ? void 0 : l[u], !o) {
                  p.next = 8;
                  break;
                }
                return p.next = 6, t.$nextTick();
              case 6:
                t.$refs.elSelectRef.selectedLabel = o, t.$refs.elSelectRef.selected.currentLabel = o;
              case 8:
              case "end":
                return p.stop();
            }
        }, r);
      }))();
    },
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
}, Oa = function() {
  var t = this, r = t._self._c;
  return r("el-select", t._g(t._b({
    ref: "elSelectRef",
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
        var a = n.item, u = n.index, l = n.active;
        return [r("DynamicScrollerItem", {
          attrs: {
            item: a,
            active: l,
            "data-index": u
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
}, Aa = [], Pa = /* @__PURE__ */ Ta(za, Oa, Aa, !1, null, "7d738022", null, null), Ia = Pa.exports;
export {
  Ia as default
};
