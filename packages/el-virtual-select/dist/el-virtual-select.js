function Se() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  Se = function() {
    return t;
  };
  var t = {}, e = Object.prototype, r = e.hasOwnProperty, i = Object.defineProperty || function(f, s, h) {
    f[s] = h.value;
  }, n = typeof Symbol == "function" ? Symbol : {}, a = n.iterator || "@@iterator", l = n.asyncIterator || "@@asyncIterator", u = n.toStringTag || "@@toStringTag";
  function o(f, s, h) {
    return Object.defineProperty(f, s, { value: h, enumerable: !0, configurable: !0, writable: !0 }), f[s];
  }
  try {
    o({}, "");
  } catch {
    o = function(h, c, m) {
      return h[c] = m;
    };
  }
  function d(f, s, h, c) {
    var m = s && s.prototype instanceof S ? s : S, y = Object.create(m.prototype), O = new k(c || []);
    return i(y, "_invoke", { value: R(f, h, O) }), y;
  }
  function p(f, s, h) {
    try {
      return { type: "normal", arg: f.call(s, h) };
    } catch (c) {
      return { type: "throw", arg: c };
    }
  }
  t.wrap = d;
  var v = {};
  function S() {
  }
  function w() {
  }
  function g() {
  }
  var _ = {};
  o(_, a, function() {
    return this;
  });
  var b = Object.getPrototypeOf, I = b && b(b(q([])));
  I && I !== e && r.call(I, a) && (_ = I);
  var $ = g.prototype = S.prototype = Object.create(_);
  function L(f) {
    ["next", "throw", "return"].forEach(function(s) {
      o(f, s, function(h) {
        return this._invoke(s, h);
      });
    });
  }
  function T(f, s) {
    function h(m, y, O, A) {
      var E = p(f[m], f, y);
      if (E.type !== "throw") {
        var D = E.arg, P = D.value;
        return P && C(P) == "object" && r.call(P, "__await") ? s.resolve(P.__await).then(function(x) {
          h("next", x, O, A);
        }, function(x) {
          h("throw", x, O, A);
        }) : s.resolve(P).then(function(x) {
          D.value = x, O(D);
        }, function(x) {
          return h("throw", x, O, A);
        });
      }
      A(E.arg);
    }
    var c;
    i(this, "_invoke", { value: function(y, O) {
      function A() {
        return new s(function(E, D) {
          h(y, O, E, D);
        });
      }
      return c = c ? c.then(A, A) : A();
    } });
  }
  function R(f, s, h) {
    var c = "suspendedStart";
    return function(m, y) {
      if (c === "executing")
        throw new Error("Generator is already running");
      if (c === "completed") {
        if (m === "throw")
          throw y;
        return Q();
      }
      for (h.method = m, h.arg = y; ; ) {
        var O = h.delegate;
        if (O) {
          var A = J(O, h);
          if (A) {
            if (A === v)
              continue;
            return A;
          }
        }
        if (h.method === "next")
          h.sent = h._sent = h.arg;
        else if (h.method === "throw") {
          if (c === "suspendedStart")
            throw c = "completed", h.arg;
          h.dispatchException(h.arg);
        } else
          h.method === "return" && h.abrupt("return", h.arg);
        c = "executing";
        var E = p(f, s, h);
        if (E.type === "normal") {
          if (c = h.done ? "completed" : "suspendedYield", E.arg === v)
            continue;
          return { value: E.arg, done: h.done };
        }
        E.type === "throw" && (c = "completed", h.method = "throw", h.arg = E.arg);
      }
    };
  }
  function J(f, s) {
    var h = f.iterator[s.method];
    if (h === void 0) {
      if (s.delegate = null, s.method === "throw") {
        if (f.iterator.return && (s.method = "return", s.arg = void 0, J(f, s), s.method === "throw"))
          return v;
        s.method = "throw", s.arg = new TypeError("The iterator does not provide a 'throw' method");
      }
      return v;
    }
    var c = p(h, f.iterator, s.arg);
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
  function k(f) {
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
        var h = -1, c = function m() {
          for (; ++h < f.length; )
            if (r.call(f, h))
              return m.value = f[h], m.done = !1, m;
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
  return w.prototype = g, i($, "constructor", { value: g, configurable: !0 }), i(g, "constructor", { value: w, configurable: !0 }), w.displayName = o(g, u, "GeneratorFunction"), t.isGeneratorFunction = function(f) {
    var s = typeof f == "function" && f.constructor;
    return !!s && (s === w || (s.displayName || s.name) === "GeneratorFunction");
  }, t.mark = function(f) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(f, g) : (f.__proto__ = g, o(f, u, "GeneratorFunction")), f.prototype = Object.create($), f;
  }, t.awrap = function(f) {
    return { __await: f };
  }, L(T.prototype), o(T.prototype, l, function() {
    return this;
  }), t.AsyncIterator = T, t.async = function(f, s, h, c, m) {
    m === void 0 && (m = Promise);
    var y = new T(d(f, s, h, c), m);
    return t.isGeneratorFunction(s) ? y : y.next().then(function(O) {
      return O.done ? O.value : y.next();
    });
  }, L($), o($, u, "Generator"), o($, a, function() {
    return this;
  }), o($, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(f) {
    var s = Object(f), h = [];
    for (var c in s)
      h.push(c);
    return h.reverse(), function m() {
      for (; h.length; ) {
        var y = h.pop();
        if (y in s)
          return m.value = y, m.done = !1, m;
      }
      return m.done = !0, m;
    };
  }, t.values = q, k.prototype = { constructor: k, reset: function(s) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(Z), !s)
      for (var h in this)
        h.charAt(0) === "t" && r.call(this, h) && !isNaN(+h.slice(1)) && (this[h] = void 0);
  }, stop: function() {
    this.done = !0;
    var s = this.tryEntries[0].completion;
    if (s.type === "throw")
      throw s.arg;
    return this.rval;
  }, dispatchException: function(s) {
    if (this.done)
      throw s;
    var h = this;
    function c(D, P) {
      return O.type = "throw", O.arg = s, h.next = D, P && (h.method = "next", h.arg = void 0), !!P;
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
  }, abrupt: function(s, h) {
    for (var c = this.tryEntries.length - 1; c >= 0; --c) {
      var m = this.tryEntries[c];
      if (m.tryLoc <= this.prev && r.call(m, "finallyLoc") && this.prev < m.finallyLoc) {
        var y = m;
        break;
      }
    }
    y && (s === "break" || s === "continue") && y.tryLoc <= h && h <= y.finallyLoc && (y = null);
    var O = y ? y.completion : {};
    return O.type = s, O.arg = h, y ? (this.method = "next", this.next = y.finallyLoc, v) : this.complete(O);
  }, complete: function(s, h) {
    if (s.type === "throw")
      throw s.arg;
    return s.type === "break" || s.type === "continue" ? this.next = s.arg : s.type === "return" ? (this.rval = this.arg = s.arg, this.method = "return", this.next = "end") : s.type === "normal" && h && (this.next = h), v;
  }, finish: function(s) {
    for (var h = this.tryEntries.length - 1; h >= 0; --h) {
      var c = this.tryEntries[h];
      if (c.finallyLoc === s)
        return this.complete(c.completion, c.afterLoc), Z(c), v;
    }
  }, catch: function(s) {
    for (var h = this.tryEntries.length - 1; h >= 0; --h) {
      var c = this.tryEntries[h];
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
  }, delegateYield: function(s, h, c) {
    return this.delegate = { iterator: q(s), resultName: h, nextLoc: c }, this.method === "next" && (this.arg = void 0), v;
  } }, t;
}
function je(t, e, r, i, n, a, l) {
  try {
    var u = t[a](l), o = u.value;
  } catch (d) {
    r(d);
    return;
  }
  u.done ? e(o) : Promise.resolve(o).then(i, n);
}
function It(t) {
  return function() {
    var e = this, r = arguments;
    return new Promise(function(i, n) {
      var a = t.apply(e, r);
      function l(o) {
        je(a, i, n, l, u, "next", o);
      }
      function u(o) {
        je(a, i, n, l, u, "throw", o);
      }
      l(void 0);
    });
  };
}
function Pt(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!r) {
    if (Array.isArray(t) || (r = xt(t)) || e && t && typeof t.length == "number") {
      r && (t = r);
      var i = 0, n = function() {
      };
      return { s: n, n: function() {
        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
      }, e: function(d) {
        throw d;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, l = !1, u;
  return { s: function() {
    r = r.call(t);
  }, n: function() {
    var d = r.next();
    return a = d.done, d;
  }, e: function(d) {
    l = !0, u = d;
  }, f: function() {
    try {
      !a && r.return != null && r.return();
    } finally {
      if (l)
        throw u;
    }
  } };
}
function xt(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Re(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Re(t, e);
  }
}
function Re(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, i = new Array(e); r < e; r++)
    i[r] = t[r];
  return i;
}
function De(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    })), r.push.apply(r, i);
  }
  return r;
}
function ce(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? De(Object(r), !0).forEach(function(i) {
      Ct(t, i, r[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : De(Object(r)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(r, i));
    });
  }
  return t;
}
function Ct(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function C(t) {
  return C = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, C(t);
}
function Lt() {
  var t = window.navigator.userAgent, e = t.indexOf("MSIE ");
  if (e > 0)
    return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
  var r = t.indexOf("Trident/");
  if (r > 0) {
    var i = t.indexOf("rv:");
    return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10);
  }
  var n = t.indexOf("Edge/");
  return n > 0 ? parseInt(t.substring(n + 5, t.indexOf(".", n)), 10) : -1;
}
var le = void 0;
function we() {
  we.init || (we.init = !0, le = Lt() !== -1);
}
var $e = {
  render: function() {
    var e = this, r = e.$createElement, i = e._self._c || r;
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
    var e = this;
    we(), this.$nextTick(function() {
      e._w = e.$el.offsetWidth, e._h = e.$el.offsetHeight;
    });
    var r = document.createElement("object");
    this._resizeObject = r, r.setAttribute("aria-hidden", "true"), r.setAttribute("tabindex", -1), r.onload = this.addResizeHandlers, r.type = "text/html", le && this.$el.appendChild(r), r.data = "about:blank", le || this.$el.appendChild(r);
  },
  beforeDestroy: function() {
    this.removeResizeHandlers();
  }
};
function Et(t) {
  t.component("resize-observer", $e), t.component("ResizeObserver", $e);
}
var jt = {
  version: "0.4.5",
  install: Et
}, fe = null;
typeof window < "u" ? fe = window.Vue : typeof global < "u" && (fe = global.Vue);
fe && fe.use(jt);
function ue(t) {
  return typeof Symbol == "function" && C(Symbol.iterator) === "symbol" ? ue = function(r) {
    return C(r);
  } : ue = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : C(r);
  }, ue(t);
}
function Rt(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ve(t, e) {
  for (var r = 0; r < e.length; r++) {
    var i = e[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
  }
}
function Dt(t, e, r) {
  return e && Ve(t.prototype, e), r && Ve(t, r), t;
}
function Me(t) {
  return Vt(t) || Mt(t) || Ft();
}
function Vt(t) {
  if (Array.isArray(t)) {
    for (var e = 0, r = new Array(t.length); e < t.length; e++)
      r[e] = t[e];
    return r;
  }
}
function Mt(t) {
  if (Symbol.iterator in Object(t) || Object.prototype.toString.call(t) === "[object Arguments]")
    return Array.from(t);
}
function Ft() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function Nt(t) {
  var e;
  return typeof t == "function" ? e = {
    callback: t
  } : e = t, e;
}
function Ut(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i, n, a, l = function(o) {
    for (var d = arguments.length, p = new Array(d > 1 ? d - 1 : 0), v = 1; v < d; v++)
      p[v - 1] = arguments[v];
    if (a = p, !(i && o === n)) {
      var S = r.leading;
      typeof S == "function" && (S = S(o, n)), (!i || o !== n) && S && t.apply(void 0, [o].concat(Me(a))), n = o, clearTimeout(i), i = setTimeout(function() {
        t.apply(void 0, [o].concat(Me(a))), i = 0;
      }, e);
    }
  };
  return l._clear = function() {
    clearTimeout(i), i = null;
  }, l;
}
function ot(t, e) {
  if (t === e)
    return !0;
  if (ue(t) === "object") {
    for (var r in t)
      if (!ot(t[r], e[r]))
        return !1;
    return !0;
  }
  return !1;
}
var Bt = /* @__PURE__ */ function() {
  function t(e, r, i) {
    Rt(this, t), this.el = e, this.observer = null, this.frozen = !1, this.createObserver(r, i);
  }
  return Dt(t, [{
    key: "createObserver",
    value: function(r, i) {
      var n = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = Nt(r), this.callback = function(u, o) {
          n.options.callback(u, o), u && n.options.once && (n.frozen = !0, n.destroyObserver());
        }, this.callback && this.options.throttle) {
          var a = this.options.throttleOptions || {}, l = a.leading;
          this.callback = Ut(this.callback, this.options.throttle, {
            leading: function(o) {
              return l === "both" || l === "visible" && o || l === "hidden" && !o;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(u) {
          var o = u[0];
          if (u.length > 1) {
            var d = u.find(function(v) {
              return v.isIntersecting;
            });
            d && (o = d);
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
  }]), t;
}();
function st(t, e, r) {
  var i = e.value;
  if (!!i)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var n = new Bt(t, i, r);
      t._vue_visibilityState = n;
    }
}
function Gt(t, e, r) {
  var i = e.value, n = e.oldValue;
  if (!ot(i, n)) {
    var a = t._vue_visibilityState;
    if (!i) {
      lt(t);
      return;
    }
    a ? a.createObserver(i, r) : st(t, {
      value: i
    }, r);
  }
}
function lt(t) {
  var e = t._vue_visibilityState;
  e && (e.destroyObserver(), delete t._vue_visibilityState);
}
var ut = {
  bind: st,
  update: Gt,
  unbind: lt
};
function Ht(t) {
  t.directive("observe-visibility", ut);
}
var Kt = {
  version: "0.4.6",
  install: Ht
}, de = null;
typeof window < "u" ? de = window.Vue : typeof global < "u" && (de = global.Vue);
de && de.use(Kt);
var Wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ct = {
  exports: {}
};
(function(t) {
  (function(e, r) {
    t.exports ? t.exports = r() : e.Scrollparent = r();
  })(Wt, function() {
    var e = /(auto|scroll)/, r = function u(o, d) {
      return o.parentNode === null ? d : u(o.parentNode, d.concat([o]));
    }, i = function(o, d) {
      return getComputedStyle(o, null).getPropertyValue(d);
    }, n = function(o) {
      return i(o, "overflow") + i(o, "overflow-y") + i(o, "overflow-x");
    }, a = function(o) {
      return e.test(n(o));
    }, l = function(o) {
      if (o instanceof HTMLElement || o instanceof SVGElement) {
        for (var d = r(o.parentNode, []), p = 0; p < d.length; p += 1)
          if (a(d[p]))
            return d[p];
        return document.scrollingElement || document.documentElement;
      }
    };
    return l;
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
function ht() {
  return this.items.length && C(this.items[0]) !== "object";
}
var Te = !1;
if (typeof window < "u") {
  Te = !1;
  try {
    var kt = Object.defineProperty({}, "passive", {
      get: function() {
        Te = !0;
      }
    });
    window.addEventListener("test", null, kt);
  } catch {
  }
}
var qt = 0, Xt = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: $e
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
        for (var e = {
          "-1": {
            accumulator: 0
          }
        }, r = this.items, i = this.sizeField, n = this.minItemSize, a = 1e4, l = 0, u, o = 0, d = r.length; o < d; o++)
          u = r[o][i] || n, u < a && (a = u), l += u, e[o] = {
            accumulator: l,
            size: u
          };
        return this.$_computedMinItemSize = a, e;
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
    var e = this;
    this.applyPageMode(), this.$nextTick(function() {
      e.$_prerender = !1, e.updateVisibleItems(!0), e.ready = !0;
    });
  },
  activated: function() {
    var e = this, r = this.$_lastUpdateScrollPosition;
    typeof r == "number" && this.$nextTick(function() {
      e.scrollToPosition(r);
    });
  },
  beforeDestroy: function() {
    this.removeListeners();
  },
  methods: {
    addView: function(e, r, i, n, a) {
      var l = {
        item: i,
        position: 0
      }, u = {
        id: qt++,
        index: r,
        used: !0,
        key: n,
        type: a
      };
      return Object.defineProperty(l, "nr", {
        configurable: !1,
        value: u
      }), e.push(l), l;
    },
    unuseView: function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = this.$_unusedViews, n = e.nr.type, a = i.get(n);
      a || (a = [], i.set(n, a)), a.push(e), r || (e.nr.used = !1, e.position = -9999, this.$_views.delete(e.nr.key));
    },
    handleResize: function() {
      this.$emit("resize"), this.ready && this.updateVisibleItems(!1);
    },
    handleScroll: function(e) {
      var r = this;
      this.$_scrollDirty || (this.$_scrollDirty = !0, requestAnimationFrame(function() {
        r.$_scrollDirty = !1;
        var i = r.updateVisibleItems(!1, !0), n = i.continuous;
        n || (clearTimeout(r.$_refreshTimout), r.$_refreshTimout = setTimeout(r.handleScroll, 100));
      }));
    },
    handleVisibilityChange: function(e, r) {
      var i = this;
      this.ready && (e || r.boundingClientRect.width !== 0 || r.boundingClientRect.height !== 0 ? (this.$emit("visible"), requestAnimationFrame(function() {
        i.updateVisibleItems(!1);
      })) : this.$emit("hidden"));
    },
    updateVisibleItems: function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = this.itemSize, n = this.gridItems || 1, a = this.itemSecondarySize || i, l = this.$_computedMinItemSize, u = this.typeField, o = this.simpleArray ? null : this.keyField, d = this.items, p = d.length, v = this.sizes, S = this.$_views, w = this.$_unusedViews, g = this.pool, _, b, I, $, L;
      if (!p)
        _ = b = $ = L = I = 0;
      else if (this.$_prerender)
        _ = $ = 0, b = L = Math.min(this.prerender, d.length), I = null;
      else {
        var T = this.getScroll();
        if (r) {
          var R = T.start - this.$_lastUpdateScrollPosition;
          if (R < 0 && (R = -R), i === null && R < l || R < i)
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
          var k, q = 0, Q = p - 1, f = ~~(p / 2), s;
          do
            s = f, k = v[f].accumulator, k < T.start ? q = f : f < p - 1 && v[f + 1].accumulator > T.start && (Q = f), f = ~~((q + Q) / 2);
          while (f !== s);
          for (f < 0 && (f = 0), _ = f, I = v[p - 1].accumulator, b = f; b < p && v[b].accumulator < T.end; b++)
            ;
          for (b === -1 ? b = d.length - 1 : (b++, b > p && (b = p)), $ = _; $ < p && F + v[$].accumulator < T.start; $++)
            ;
          for (L = $; L < p && F + v[L].accumulator < T.end; L++)
            ;
        } else {
          _ = ~~(T.start / i * n);
          var h = _ % n;
          _ -= h, b = Math.ceil(T.end / i * n), $ = Math.max(0, Math.floor((T.start - F) / i * n)), L = Math.floor((T.end - F) / i * n), _ < 0 && (_ = 0), b > p && (b = p), $ < 0 && ($ = 0), L > p && (L = p), I = Math.ceil(p / n) * i;
        }
      }
      b - _ > ft.itemsLimit && this.itemsLimitError(), this.totalSize = I;
      var c, m = _ <= this.$_endIndex && b >= this.$_startIndex;
      if (this.$_continuous !== m) {
        if (m) {
          S.clear(), w.clear();
          for (var y = 0, O = g.length; y < O; y++)
            c = g[y], this.unuseView(c);
        }
        this.$_continuous = m;
      } else if (m)
        for (var A = 0, E = g.length; A < E; A++)
          c = g[A], c.nr.used && (e && (c.nr.index = d.indexOf(c.item)), (c.nr.index === -1 || c.nr.index < _ || c.nr.index >= b) && this.unuseView(c));
      for (var D = m ? null : /* @__PURE__ */ new Map(), P, x, N, ee, j = _; j < b; j++) {
        P = d[j];
        var U = o ? P[o] : P;
        if (U == null)
          throw new Error("Key is ".concat(U, " on item (keyField is '").concat(o, "')"));
        if (c = S.get(U), !i && !v[j].size) {
          c && this.unuseView(c);
          continue;
        }
        c ? (c.nr.used = !0, c.item = P) : (j === d.length - 1 && this.$emit("scroll-end"), j === 0 && this.$emit("scroll-start"), x = P[u], N = w.get(x), m ? N && N.length ? (c = N.pop(), c.item = P, c.nr.used = !0, c.nr.index = j, c.nr.key = U, c.nr.type = x) : c = this.addView(g, j, P, U, x) : (ee = D.get(x) || 0, (!N || ee >= N.length) && (c = this.addView(g, j, P, U, x), this.unuseView(c, !0), N = w.get(x)), c = N[ee], c.item = P, c.nr.used = !0, c.nr.index = j, c.nr.key = U, c.nr.type = x, D.set(x, ee + 1), ee++), S.set(U, c)), i === null ? (c.position = v[j - 1].accumulator, c.offset = 0) : (c.position = Math.floor(j / n) * i, c.offset = j % n * a);
      }
      return this.$_startIndex = _, this.$_endIndex = b, this.emitUpdate && this.$emit("update", _, b, $, L), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, 300), {
        continuous: m
      };
    },
    getListenerTarget: function() {
      var e = Fe(this.$el);
      return window.document && (e === window.document.documentElement || e === window.document.body) && (e = window), e;
    },
    getScroll: function() {
      var e = this.$el, r = this.direction, i = r === "vertical", n;
      if (this.pageMode) {
        var a = e.getBoundingClientRect(), l = i ? a.height : a.width, u = -(i ? a.top : a.left), o = i ? window.innerHeight : window.innerWidth;
        u < 0 && (o += u, u = 0), u + o > l && (o = l - u), n = {
          start: u,
          end: u + o
        };
      } else
        i ? n = {
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
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, Te ? {
        passive: !0
      } : !1), this.listenerTarget.addEventListener("resize", this.handleResize);
    },
    removeListeners: function() {
      !this.listenerTarget || (this.listenerTarget.removeEventListener("scroll", this.handleScroll), this.listenerTarget.removeEventListener("resize", this.handleResize), this.listenerTarget = null);
    },
    scrollToItem: function(e) {
      var r;
      this.itemSize === null ? r = e > 0 ? this.sizes[e - 1].accumulator : 0 : r = Math.floor(e / this.gridItems) * this.itemSize, this.scrollToPosition(r);
    },
    scrollToPosition: function(e) {
      var r = this.direction === "vertical" ? {
        scroll: "scrollTop",
        start: "top"
      } : {
        scroll: "scrollLeft",
        start: "left"
      }, i, n, a;
      if (this.pageMode) {
        var l = Fe(this.$el), u = l.tagName === "HTML" ? 0 : l[r.scroll], o = l.getBoundingClientRect(), d = this.$el.getBoundingClientRect(), p = d[r.start] - o[r.start];
        i = l, n = r.scroll, a = e + u + p;
      } else
        i = this.$el, n = r.scroll, a = e;
      i[n] = a;
    },
    itemsLimitError: function() {
      var e = this;
      throw setTimeout(function() {
        console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", e.$el), console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
      }), new Error("Rendered items limit reached");
    },
    sortViews: function() {
      this.pool.sort(function(e, r) {
        return e.nr.index - r.nr.index;
      });
    }
  }
};
function Ee(t, e, r, i, n, a, l, u, o, d) {
  typeof l != "boolean" && (o = u, u = l, l = !1);
  var p = typeof r == "function" ? r.options : r;
  t && t.render && (p.render = t.render, p.staticRenderFns = t.staticRenderFns, p._compiled = !0, n && (p.functional = !0)), i && (p._scopeId = i);
  var v;
  if (a ? (v = function(_) {
    _ = _ || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !_ && typeof __VUE_SSR_CONTEXT__ < "u" && (_ = __VUE_SSR_CONTEXT__), e && e.call(this, o(_)), _ && _._registeredComponents && _._registeredComponents.add(a);
  }, p._ssrRegister = v) : e && (v = l ? function(g) {
    e.call(this, d(g, this.$root.$options.shadowRoot));
  } : function(g) {
    e.call(this, u(g));
  }), v)
    if (p.functional) {
      var S = p.render;
      p.render = function(_, b) {
        return v.call(b), S(_, b);
      };
    } else {
      var w = p.beforeCreate;
      p.beforeCreate = w ? [].concat(w, v) : [v];
    }
  return r;
}
var Yt = Xt, pt = function() {
  var e, r, i = this, n = i.$createElement, a = i._self._c || n;
  return a("div", {
    directives: [{
      name: "observe-visibility",
      rawName: "v-observe-visibility",
      value: i.handleVisibilityChange,
      expression: "handleVisibilityChange"
    }],
    staticClass: "vue-recycle-scroller",
    class: (e = {
      ready: i.ready,
      "page-mode": i.pageMode
    }, e["direction-" + i.direction] = !0, e),
    on: {
      "&scroll": function(u) {
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
  }, [i._l(i.pool, function(l) {
    return a(i.itemTag, i._g({
      key: l.nr.id,
      tag: "component",
      staticClass: "vue-recycle-scroller__item-view",
      class: [i.itemClass, {
        hover: !i.skipHover && i.hoverKey === l.nr.key
      }],
      style: i.ready ? {
        transform: "translate" + (i.direction === "vertical" ? "Y" : "X") + "(" + l.position + "px) translate" + (i.direction === "vertical" ? "X" : "Y") + "(" + l.offset + "px)",
        width: i.gridItems ? (i.direction === "vertical" && i.itemSecondarySize || i.itemSize) + "px" : void 0,
        height: i.gridItems ? (i.direction === "horizontal" && i.itemSecondarySize || i.itemSize) + "px" : void 0
      } : null
    }, i.skipHover ? {} : {
      mouseenter: function() {
        i.hoverKey = l.nr.key;
      },
      mouseleave: function() {
        i.hoverKey = null;
      }
    }), [i._t("default", null, {
      item: l.item,
      index: l.nr.index,
      active: l.nr.used
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
    return typeof ResizeObserver < "u" && (this.$_resizeObserver = new ResizeObserver(function(e) {
      requestAnimationFrame(function() {
        if (!!Array.isArray(e)) {
          var r = Pt(e), i;
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
          } catch (l) {
            r.e(l);
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
      for (var e = [], r = this.items, i = this.keyField, n = this.simpleArray, a = this.vscrollData.sizes, l = r.length, u = 0; u < l; u++) {
        var o = r[u], d = n ? u : o[i], p = a[d];
        typeof p > "u" && !this.$_undefinedMap[d] && (p = 0), e.push({
          item: o,
          id: d,
          size: p
        });
      }
      return e;
    },
    listeners: function() {
      var e = {};
      for (var r in this.$listeners)
        r !== "resize" && r !== "visible" && (e[r] = this.$listeners[r]);
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
    itemsWithSize: function(e, r) {
      for (var i = this.$el.scrollTop, n = 0, a = 0, l = Math.min(e.length, r.length), u = 0; u < l && !(n >= i); u++)
        n += r[u].size || this.minItemSize, a += e[u].size || this.minItemSize;
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
      var r = this.$refs.scroller;
      r && r.scrollToItem(e);
    },
    getItemSize: function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, i = this.simpleArray ? r != null ? r : this.items.indexOf(e) : e[this.keyField];
      return this.vscrollData.sizes[i] || 0;
    },
    scrollToBottom: function() {
      var e = this;
      if (!this.$_scrollingToBottom) {
        this.$_scrollingToBottom = !0;
        var r = this.$el;
        this.$nextTick(function() {
          r.scrollTop = r.scrollHeight + 5e3;
          var i = function n() {
            r.scrollTop = r.scrollHeight + 5e3, requestAnimationFrame(function() {
              r.scrollTop = r.scrollHeight + 5e3, e.$_undefinedSizes === 0 ? e.$_scrollingToBottom = !1 : requestAnimationFrame(n);
            });
          };
          requestAnimationFrame(i);
        });
      }
    }
  }
}, ir = rr, vt = function() {
  var e = this, r = e.$createElement, i = e._self._c || r;
  return i("RecycleScroller", e._g(e._b({
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
      fn: function(a) {
        var l = a.item, u = a.index, o = a.active;
        return [e._t("default", null, null, {
          item: l.item,
          index: u,
          active: o,
          itemWithSize: l
        })];
      }
    }], null, !0)
  }, "RecycleScroller", e.$attrs, !1), e.listeners), [e._v(" "), i("template", {
    slot: "before"
  }, [e._t("before")], 2), e._v(" "), i("template", {
    slot: "after"
  }, [e._t("after")], 2), e._v(" "), i("template", {
    slot: "empty"
  }, [e._t("empty")], 2)], 2);
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
    finalActive: function(e) {
      this.size || (e ? this.vscrollParent.$_undefinedMap[this.id] || (this.vscrollParent.$_undefinedSizes++, this.vscrollParent.$_undefinedMap[this.id] = !0) : this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = !1)), this.vscrollResizeObserver ? e ? this.observeSize() : this.unobserveSize() : e && this.$_pendingVScrollUpdate === this.id && this.updateSize();
    }
  },
  created: function() {
    var e = this;
    if (!this.$isServer && (this.$_forceNextVScrollUpdate = null, this.updateWatchData(), !this.vscrollResizeObserver)) {
      var r = function(a) {
        e.$watch(function() {
          return e.sizeDependencies[a];
        }, e.onDataUpdate);
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
      var e = this;
      this.watchData && !this.vscrollResizeObserver ? this.$_watchData = this.$watch("item", function() {
        e.onDataUpdate();
      }, {
        deep: !0
      }) : this.$_watchData && (this.$_watchData(), this.$_watchData = null);
    },
    onVscrollUpdate: function(e) {
      var r = e.force;
      !this.finalActive && r && (this.$_pendingVScrollUpdate = this.id), (this.$_forceNextVScrollUpdate === this.id || r || !this.size) && this.updateSize();
    },
    onDataUpdate: function() {
      this.updateSize();
    },
    computeSize: function(e) {
      var r = this;
      this.$nextTick(function() {
        if (r.id === e) {
          var i = r.$el.offsetWidth, n = r.$el.offsetHeight;
          r.applySize(i, n);
        }
        r.$_pendingSizeUpdate = null;
      });
    },
    applySize: function(e, r) {
      var i = ~~(this.vscrollParent.direction === "vertical" ? r : e);
      i && this.size !== i && (this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = void 0), this.$set(this.vscrollData.sizes, this.id, i), this.$set(this.vscrollData.validSizes, this.id, !0), this.emitResize && this.$emit("resize", this.id));
    },
    observeSize: function() {
      !this.vscrollResizeObserver || !this.$el.parentNode || (this.vscrollResizeObserver.observe(this.$el.parentNode), this.$el.parentNode.addEventListener("resize", this.onResize));
    },
    unobserveSize: function() {
      !this.vscrollResizeObserver || (this.vscrollResizeObserver.unobserve(this.$el.parentNode), this.$el.parentNode.removeEventListener("resize", this.onResize));
    },
    onResize: function(e) {
      var r = e.detail.contentRect, i = r.width, n = r.height;
      this.applySize(i, n);
    }
  },
  render: function(e) {
    return e(this.tag, this.$slots.default);
  }
}, cr = ur, fr = void 0, dr = void 0, hr = void 0, pr = void 0, Ae = /* @__PURE__ */ Ee({}, fr, cr, dr, pr, hr, !1, void 0, void 0, void 0);
function vr(t, e) {
  t.component("".concat(e, "recycle-scroller"), ze), t.component("".concat(e, "RecycleScroller"), ze), t.component("".concat(e, "dynamic-scroller"), Oe), t.component("".concat(e, "DynamicScroller"), Oe), t.component("".concat(e, "dynamic-scroller-item"), Ae), t.component("".concat(e, "DynamicScrollerItem"), Ae);
}
var mr = {
  version: "1.1.2",
  install: function(e, r) {
    var i = Object.assign({}, {
      installComponents: !0,
      componentsPrefix: ""
    }, r);
    for (var n in i)
      typeof i[n] < "u" && (ft[n] = i[n]);
    i.installComponents && vr(e, i.componentsPrefix);
  }
}, he = null;
typeof window < "u" ? he = window.Vue : typeof global < "u" && (he = global.Vue);
he && he.use(mr);
var yr = (typeof global > "u" ? "undefined" : C(global)) == "object" && global && global.Object === Object && global, mt = yr, _r = (typeof self > "u" ? "undefined" : C(self)) == "object" && self && self.Object === Object && self, gr = mt || _r || Function("return this")(), V = gr, br = V.Symbol, X = br, yt = Object.prototype, Sr = yt.hasOwnProperty, wr = yt.toString, te = X ? X.toStringTag : void 0;
function $r(t) {
  var e = Sr.call(t, te), r = t[te];
  try {
    t[te] = void 0;
    var i = !0;
  } catch {
  }
  var n = wr.call(t);
  return i && (e ? t[te] = r : delete t[te]), n;
}
var Tr = Object.prototype, zr = Tr.toString;
function Or(t) {
  return zr.call(t);
}
var Ar = "[object Null]", Ir = "[object Undefined]", Ne = X ? X.toStringTag : void 0;
function oe(t) {
  return t == null ? t === void 0 ? Ir : Ar : Ne && Ne in Object(t) ? $r(t) : Or(t);
}
function ie(t) {
  return t != null && C(t) == "object";
}
var Pr = Array.isArray, pe = Pr;
function _t(t) {
  var e = C(t);
  return t != null && (e == "object" || e == "function");
}
var xr = "[object AsyncFunction]", Cr = "[object Function]", Lr = "[object GeneratorFunction]", Er = "[object Proxy]";
function gt(t) {
  if (!_t(t))
    return !1;
  var e = oe(t);
  return e == Cr || e == Lr || e == xr || e == Er;
}
var jr = V["__core-js_shared__"], _e = jr, Ue = function() {
  var t = /[^.]+$/.exec(_e && _e.keys && _e.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Rr(t) {
  return !!Ue && Ue in t;
}
var Dr = Function.prototype, Vr = Dr.toString;
function K(t) {
  if (t != null) {
    try {
      return Vr.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Mr = /[\\^$.*+?()[\]{}|]/g, Fr = /^\[object .+?Constructor\]$/, Nr = Function.prototype, Ur = Object.prototype, Br = Nr.toString, Gr = Ur.hasOwnProperty, Hr = RegExp("^" + Br.call(Gr).replace(Mr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Kr(t) {
  if (!_t(t) || Rr(t))
    return !1;
  var e = gt(t) ? Hr : Fr;
  return e.test(K(t));
}
function Wr(t, e) {
  return t == null ? void 0 : t[e];
}
function Y(t, e) {
  var r = Wr(t, e);
  return Kr(r) ? r : void 0;
}
var kr = Y(V, "WeakMap"), Ie = kr, qr = 9007199254740991, Xr = /^(?:0|[1-9]\d*)$/;
function Yr(t, e) {
  var r = C(t);
  return e = e == null ? qr : e, !!e && (r == "number" || r != "symbol" && Xr.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function bt(t, e) {
  return t === e || t !== t && e !== e;
}
var Jr = 9007199254740991;
function St(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Jr;
}
function Zr(t) {
  return t != null && St(t.length) && !gt(t);
}
var Qr = Object.prototype;
function ei(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || Qr;
  return t === r;
}
function ti(t, e) {
  for (var r = -1, i = Array(t); ++r < t; )
    i[r] = e(r);
  return i;
}
var ri = "[object Arguments]";
function Be(t) {
  return ie(t) && oe(t) == ri;
}
var wt = Object.prototype, ii = wt.hasOwnProperty, ni = wt.propertyIsEnumerable, ai = Be(function() {
  return arguments;
}()) ? Be : function(t) {
  return ie(t) && ii.call(t, "callee") && !ni.call(t, "callee");
}, oi = ai;
function si() {
  return !1;
}
var $t = (typeof exports > "u" ? "undefined" : C(exports)) == "object" && exports && !exports.nodeType && exports, Ge = $t && (typeof module > "u" ? "undefined" : C(module)) == "object" && module && !module.nodeType && module, li = Ge && Ge.exports === $t, He = li ? V.Buffer : void 0, ui = He ? He.isBuffer : void 0, ci = ui || si, Pe = ci, fi = "[object Arguments]", di = "[object Array]", hi = "[object Boolean]", pi = "[object Date]", vi = "[object Error]", mi = "[object Function]", yi = "[object Map]", _i = "[object Number]", gi = "[object Object]", bi = "[object RegExp]", Si = "[object Set]", wi = "[object String]", $i = "[object WeakMap]", Ti = "[object ArrayBuffer]", zi = "[object DataView]", Oi = "[object Float32Array]", Ai = "[object Float64Array]", Ii = "[object Int8Array]", Pi = "[object Int16Array]", xi = "[object Int32Array]", Ci = "[object Uint8Array]", Li = "[object Uint8ClampedArray]", Ei = "[object Uint16Array]", ji = "[object Uint32Array]", z = {};
z[Oi] = z[Ai] = z[Ii] = z[Pi] = z[xi] = z[Ci] = z[Li] = z[Ei] = z[ji] = !0;
z[fi] = z[di] = z[Ti] = z[hi] = z[zi] = z[pi] = z[vi] = z[mi] = z[yi] = z[_i] = z[gi] = z[bi] = z[Si] = z[wi] = z[$i] = !1;
function Ri(t) {
  return ie(t) && St(t.length) && !!z[oe(t)];
}
function Di(t) {
  return function(e) {
    return t(e);
  };
}
var Tt = (typeof exports > "u" ? "undefined" : C(exports)) == "object" && exports && !exports.nodeType && exports, re = Tt && (typeof module > "u" ? "undefined" : C(module)) == "object" && module && !module.nodeType && module, Vi = re && re.exports === Tt, ge = Vi && mt.process, Mi = function() {
  try {
    var t = re && re.require && re.require("util").types;
    return t || ge && ge.binding && ge.binding("util");
  } catch {
  }
}(), Ke = Mi, We = Ke && Ke.isTypedArray, Fi = We ? Di(We) : Ri, zt = Fi, Ni = Object.prototype, Ui = Ni.hasOwnProperty;
function Bi(t, e) {
  var r = pe(t), i = !r && oi(t), n = !r && !i && Pe(t), a = !r && !i && !n && zt(t), l = r || i || n || a, u = l ? ti(t.length, String) : [], o = u.length;
  for (var d in t)
    (e || Ui.call(t, d)) && !(l && (d == "length" || n && (d == "offset" || d == "parent") || a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || Yr(d, o))) && u.push(d);
  return u;
}
function Gi(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var Hi = Gi(Object.keys, Object), Ki = Hi, Wi = Object.prototype, ki = Wi.hasOwnProperty;
function qi(t) {
  if (!ei(t))
    return Ki(t);
  var e = [];
  for (var r in Object(t))
    ki.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
function Xi(t) {
  return Zr(t) ? Bi(t) : qi(t);
}
var Yi = Y(Object, "create"), ne = Yi;
function Ji() {
  this.__data__ = ne ? ne(null) : {}, this.size = 0;
}
function Zi(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Qi = "__lodash_hash_undefined__", en = Object.prototype, tn = en.hasOwnProperty;
function rn(t) {
  var e = this.__data__;
  if (ne) {
    var r = e[t];
    return r === Qi ? void 0 : r;
  }
  return tn.call(e, t) ? e[t] : void 0;
}
var nn = Object.prototype, an = nn.hasOwnProperty;
function on(t) {
  var e = this.__data__;
  return ne ? e[t] !== void 0 : an.call(e, t);
}
var sn = "__lodash_hash_undefined__";
function ln(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = ne && e === void 0 ? sn : e, this;
}
function H(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var i = t[e];
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
function me(t, e) {
  for (var r = t.length; r--; )
    if (bt(t[r][0], e))
      return r;
  return -1;
}
var cn = Array.prototype, fn = cn.splice;
function dn(t) {
  var e = this.__data__, r = me(e, t);
  if (r < 0)
    return !1;
  var i = e.length - 1;
  return r == i ? e.pop() : fn.call(e, r, 1), --this.size, !0;
}
function hn(t) {
  var e = this.__data__, r = me(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function pn(t) {
  return me(this.__data__, t) > -1;
}
function vn(t, e) {
  var r = this.__data__, i = me(r, t);
  return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this;
}
function M(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var i = t[e];
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
function _n(t) {
  var e = C(t);
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function ye(t, e) {
  var r = t.__data__;
  return _n(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function gn(t) {
  var e = ye(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function bn(t) {
  return ye(this, t).get(t);
}
function Sn(t) {
  return ye(this, t).has(t);
}
function wn(t, e) {
  var r = ye(this, t), i = r.size;
  return r.set(t, e), this.size += r.size == i ? 0 : 1, this;
}
function W(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
W.prototype.clear = yn;
W.prototype.delete = gn;
W.prototype.get = bn;
W.prototype.has = Sn;
W.prototype.set = wn;
function $n(t, e) {
  for (var r = -1, i = e.length, n = t.length; ++r < i; )
    t[n + r] = e[r];
  return t;
}
function Tn() {
  this.__data__ = new M(), this.size = 0;
}
function zn(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
function On(t) {
  return this.__data__.get(t);
}
function An(t) {
  return this.__data__.has(t);
}
var In = 200;
function Pn(t, e) {
  var r = this.__data__;
  if (r instanceof M) {
    var i = r.__data__;
    if (!ae || i.length < In - 1)
      return i.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new W(i);
  }
  return r.set(t, e), this.size = r.size, this;
}
function B(t) {
  var e = this.__data__ = new M(t);
  this.size = e.size;
}
B.prototype.clear = Tn;
B.prototype.delete = zn;
B.prototype.get = On;
B.prototype.has = An;
B.prototype.set = Pn;
function xn(t, e) {
  for (var r = -1, i = t == null ? 0 : t.length, n = 0, a = []; ++r < i; ) {
    var l = t[r];
    e(l, r, t) && (a[n++] = l);
  }
  return a;
}
function Cn() {
  return [];
}
var Ln = Object.prototype, En = Ln.propertyIsEnumerable, ke = Object.getOwnPropertySymbols, jn = ke ? function(t) {
  return t == null ? [] : (t = Object(t), xn(ke(t), function(e) {
    return En.call(t, e);
  }));
} : Cn, Rn = jn;
function Dn(t, e, r) {
  var i = e(t);
  return pe(t) ? i : $n(i, r(t));
}
function qe(t) {
  return Dn(t, Xi, Rn);
}
var Vn = Y(V, "DataView"), xe = Vn, Mn = Y(V, "Promise"), Ce = Mn, Fn = Y(V, "Set"), Le = Fn, Xe = "[object Map]", Nn = "[object Object]", Ye = "[object Promise]", Je = "[object Set]", Ze = "[object WeakMap]", Qe = "[object DataView]", Un = K(xe), Bn = K(ae), Gn = K(Ce), Hn = K(Le), Kn = K(Ie), G = oe;
(xe && G(new xe(new ArrayBuffer(1))) != Qe || ae && G(new ae()) != Xe || Ce && G(Ce.resolve()) != Ye || Le && G(new Le()) != Je || Ie && G(new Ie()) != Ze) && (G = function(e) {
  var r = oe(e), i = r == Nn ? e.constructor : void 0, n = i ? K(i) : "";
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
var et = G, Wn = V.Uint8Array, tt = Wn, kn = "__lodash_hash_undefined__";
function qn(t) {
  return this.__data__.set(t, kn), this;
}
function Xn(t) {
  return this.__data__.has(t);
}
function ve(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.__data__ = new W(); ++e < r; )
    this.add(t[e]);
}
ve.prototype.add = ve.prototype.push = qn;
ve.prototype.has = Xn;
function Yn(t, e) {
  for (var r = -1, i = t == null ? 0 : t.length; ++r < i; )
    if (e(t[r], r, t))
      return !0;
  return !1;
}
function Jn(t, e) {
  return t.has(e);
}
var Zn = 1, Qn = 2;
function Ot(t, e, r, i, n, a) {
  var l = r & Zn, u = t.length, o = e.length;
  if (u != o && !(l && o > u))
    return !1;
  var d = a.get(t), p = a.get(e);
  if (d && p)
    return d == e && p == t;
  var v = -1, S = !0, w = r & Qn ? new ve() : void 0;
  for (a.set(t, e), a.set(e, t); ++v < u; ) {
    var g = t[v], _ = e[v];
    if (i)
      var b = l ? i(_, g, v, e, t, a) : i(g, _, v, t, e, a);
    if (b !== void 0) {
      if (b)
        continue;
      S = !1;
      break;
    }
    if (w) {
      if (!Yn(e, function(I, $) {
        if (!Jn(w, $) && (g === I || n(g, I, r, i, a)))
          return w.push($);
      })) {
        S = !1;
        break;
      }
    } else if (!(g === _ || n(g, _, r, i, a))) {
      S = !1;
      break;
    }
  }
  return a.delete(t), a.delete(e), S;
}
function ea(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(i, n) {
    r[++e] = [n, i];
  }), r;
}
function ta(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(i) {
    r[++e] = i;
  }), r;
}
var ra = 1, ia = 2, na = "[object Boolean]", aa = "[object Date]", oa = "[object Error]", sa = "[object Map]", la = "[object Number]", ua = "[object RegExp]", ca = "[object Set]", fa = "[object String]", da = "[object Symbol]", ha = "[object ArrayBuffer]", pa = "[object DataView]", rt = X ? X.prototype : void 0, be = rt ? rt.valueOf : void 0;
function va(t, e, r, i, n, a, l) {
  switch (r) {
    case pa:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case ha:
      return !(t.byteLength != e.byteLength || !a(new tt(t), new tt(e)));
    case na:
    case aa:
    case la:
      return bt(+t, +e);
    case oa:
      return t.name == e.name && t.message == e.message;
    case ua:
    case fa:
      return t == e + "";
    case sa:
      var u = ea;
    case ca:
      var o = i & ra;
      if (u || (u = ta), t.size != e.size && !o)
        return !1;
      var d = l.get(t);
      if (d)
        return d == e;
      i |= ia, l.set(t, e);
      var p = Ot(u(t), u(e), i, n, a, l);
      return l.delete(t), p;
    case da:
      if (be)
        return be.call(t) == be.call(e);
  }
  return !1;
}
var ma = 1, ya = Object.prototype, _a = ya.hasOwnProperty;
function ga(t, e, r, i, n, a) {
  var l = r & ma, u = qe(t), o = u.length, d = qe(e), p = d.length;
  if (o != p && !l)
    return !1;
  for (var v = o; v--; ) {
    var S = u[v];
    if (!(l ? S in e : _a.call(e, S)))
      return !1;
  }
  var w = a.get(t), g = a.get(e);
  if (w && g)
    return w == e && g == t;
  var _ = !0;
  a.set(t, e), a.set(e, t);
  for (var b = l; ++v < o; ) {
    S = u[v];
    var I = t[S], $ = e[S];
    if (i)
      var L = l ? i($, I, S, e, t, a) : i(I, $, S, t, e, a);
    if (!(L === void 0 ? I === $ || n(I, $, r, i, a) : L)) {
      _ = !1;
      break;
    }
    b || (b = S == "constructor");
  }
  if (_ && !b) {
    var T = t.constructor, R = e.constructor;
    T != R && "constructor" in t && "constructor" in e && !(typeof T == "function" && T instanceof T && typeof R == "function" && R instanceof R) && (_ = !1);
  }
  return a.delete(t), a.delete(e), _;
}
var ba = 1, it = "[object Arguments]", nt = "[object Array]", se = "[object Object]", Sa = Object.prototype, at = Sa.hasOwnProperty;
function wa(t, e, r, i, n, a) {
  var l = pe(t), u = pe(e), o = l ? nt : et(t), d = u ? nt : et(e);
  o = o == it ? se : o, d = d == it ? se : d;
  var p = o == se, v = d == se, S = o == d;
  if (S && Pe(t)) {
    if (!Pe(e))
      return !1;
    l = !0, p = !1;
  }
  if (S && !p)
    return a || (a = new B()), l || zt(t) ? Ot(t, e, r, i, n, a) : va(t, e, o, r, i, n, a);
  if (!(r & ba)) {
    var w = p && at.call(t, "__wrapped__"), g = v && at.call(e, "__wrapped__");
    if (w || g) {
      var _ = w ? t.value() : t, b = g ? e.value() : e;
      return a || (a = new B()), n(_, b, r, i, a);
    }
  }
  return S ? (a || (a = new B()), ga(t, e, r, i, n, a)) : !1;
}
function At(t, e, r, i, n) {
  return t === e ? !0 : t == null || e == null || !ie(t) && !ie(e) ? t !== t && e !== e : wa(t, e, r, i, At, n);
}
function $a(t, e) {
  return At(t, e);
}
function Ta(t, e, r, i, n, a, l, u) {
  var o = typeof t == "function" ? t.options : t;
  e && (o.render = e, o.staticRenderFns = r, o._compiled = !0), i && (o.functional = !0), a && (o._scopeId = "data-v-" + a);
  var d;
  if (l ? (d = function(w) {
    w = w || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !w && typeof __VUE_SSR_CONTEXT__ < "u" && (w = __VUE_SSR_CONTEXT__), n && n.call(this, w), w && w._registeredComponents && w._registeredComponents.add(l);
  }, o._ssrRegister = d) : n && (d = u ? function() {
    n.call(this, (o.functional ? this.parent : this).$root.$options.shadowRoot);
  } : n), d)
    if (o.functional) {
      o._injectStyles = d;
      var p = o.render;
      o.render = function(w, g) {
        return d.call(g), p(w, g);
      };
    } else {
      var v = o.beforeCreate;
      o.beforeCreate = v ? [].concat(v, d) : [d];
    }
  return {
    exports: t,
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
      handler: function(e, r) {
        this.localList = e, this.rawList = e, Array.isArray(e) && e.length > 1 && (!r || Array.isArray(r) && r.length === 0) && this.showLabel();
      },
      deep: !0,
      immediate: !0
    },
    value: {
      handler: function(e) {
        $a(e, this.localValue) || (this.localValue = e);
      },
      deep: !0
    }
  },
  data: function() {
    return {
      localValue: this.value,
      localList: [],
      rawList: [],
      isShownDropdown: !1,
      chosenItem: null
    };
  },
  mounted: function() {
    this.showLabel();
  },
  methods: {
    showLabel: function() {
      var e = this;
      return It(/* @__PURE__ */ Se().mark(function r() {
        var i, n, a, l;
        return Se().wrap(function(o) {
          for (; ; )
            switch (o.prev = o.next) {
              case 0:
                i = e.localValue, n = e.localList, a = e.valueKey, i && Array.isArray(n) && n.length > 1 && (l = n.find(function(d) {
                  return d[a] === i;
                }), e.chosenItem = l);
              case 2:
              case "end":
                return o.stop();
            }
        }, r);
      }))();
    },
    handleScrollerVisible: function() {
      var e = this.getIndex() - (this.dropdownItemsCount - 1);
      e > 1 && this.$refs.recycleScrollerRef.scrollToItem(e);
    },
    getIndex: function() {
      var e = this;
      return this.multiple ? this.localList.findIndex(function(r) {
        return r[e.valueKey] === e.localValue[e.localValue.length - 1];
      }) : this.localList.findIndex(function(r) {
        return r[e.valueKey] === e.localValue;
      });
    },
    handleFilter: function(e) {
      var r = this;
      this.localList = this.rawList.filter(function(i) {
        return String(i[r.labelKey]).includes(e);
      });
    },
    handleSelectFocus: function() {
      this.isShownDropdown || (this.isShownDropdown = !0), this.localList.length < this.rawList.length && (this.localList = this.rawList);
    },
    handleSelectChange: function(e) {
      this.localValue = e, this.$emit("input", e);
    }
  }
}, Oa = function() {
  var e = this, r = e._self._c;
  return r("el-select", e._g(e._b({
    ref: "elSelectRef",
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
  }, "el-select", e.$attrs, !1), e.$listeners), [e.isShownDropdown ? r("DynamicScroller", {
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
        var a = n.item, l = n.index, u = n.active;
        return [r("DynamicScrollerItem", {
          attrs: {
            item: a,
            active: u,
            "data-index": l
          }
        }, [r("el-option", {
          key: a[e.valueKey],
          attrs: {
            value: a[e.valueKey],
            label: a[e.labelKey],
            disabled: a.disabled
          }
        }, [e._t("label", function() {
          return [e._v(e._s(a[e.labelKey]))];
        }, {
          item: a
        })], 2)], 1)];
      }
    }, e.localList.length === 0 ? {
      key: "after",
      fn: function() {
        return [r("p", {
          staticClass: "empty-data"
        }, [e._v(e._s(e.noMatchText))])];
      },
      proxy: !0
    } : null], null, !0)
  }) : e._e(), !e.isShownDropdown && e.chosenItem ? r("el-option", {
    key: e.chosenItem[e.valueKey],
    attrs: {
      value: e.chosenItem[e.valueKey],
      label: e.chosenItem[e.labelKey],
      disabled: e.chosenItem.disabled
    }
  }, [e._t("label", function() {
    return [e._v(e._s(e.chosenItem[e.labelKey]))];
  }, {
    item: e.chosenItem
  })], 2) : e._e()], 1);
}, Aa = [], Ia = /* @__PURE__ */ Ta(za, Oa, Aa, !1, null, "d687983b", null, null), Pa = Ia.exports;
export {
  Pa as default
};
