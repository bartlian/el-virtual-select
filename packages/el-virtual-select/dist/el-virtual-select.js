function Se() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  Se = function() {
    return e;
  };
  var e = {}, t = Object.prototype, r = t.hasOwnProperty, i = Object.defineProperty || function(f, s, d) {
    f[s] = d.value;
  }, n = typeof Symbol == "function" ? Symbol : {}, a = n.iterator || "@@iterator", l = n.asyncIterator || "@@asyncIterator", u = n.toStringTag || "@@toStringTag";
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
    var m = s && s.prototype instanceof S ? s : S, y = Object.create(m.prototype), O = new k(c || []);
    return i(y, "_invoke", { value: R(f, d, O) }), y;
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
  function w() {
  }
  function g() {
  }
  var _ = {};
  o(_, a, function() {
    return this;
  });
  var b = Object.getPrototypeOf, I = b && b(b(q([])));
  I && I !== t && r.call(I, a) && (_ = I);
  var $ = g.prototype = S.prototype = Object.create(_);
  function E(f) {
    ["next", "throw", "return"].forEach(function(s) {
      o(f, s, function(d) {
        return this._invoke(s, d);
      });
    });
  }
  function T(f, s) {
    function d(m, y, O, P) {
      var j = p(f[m], f, y);
      if (j.type !== "throw") {
        var D = j.arg, L = D.value;
        return L && A(L) == "object" && r.call(L, "__await") ? s.resolve(L.__await).then(function(C) {
          d("next", C, O, P);
        }, function(C) {
          d("throw", C, O, P);
        }) : s.resolve(L).then(function(C) {
          D.value = C, O(D);
        }, function(C) {
          return d("throw", C, O, P);
        });
      }
      P(j.arg);
    }
    var c;
    i(this, "_invoke", { value: function(y, O) {
      function P() {
        return new s(function(j, D) {
          d(y, O, j, D);
        });
      }
      return c = c ? c.then(P, P) : P();
    } });
  }
  function R(f, s, d) {
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
          var P = J(O, d);
          if (P) {
            if (P === v)
              continue;
            return P;
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
        var j = p(f, s, d);
        if (j.type === "normal") {
          if (c = d.done ? "completed" : "suspendedYield", j.arg === v)
            continue;
          return { value: j.arg, done: d.done };
        }
        j.type === "throw" && (c = "completed", d.method = "throw", d.arg = j.arg);
      }
    };
  }
  function J(f, s) {
    var d = s.method, c = f.iterator[d];
    if (c === void 0)
      return s.delegate = null, d === "throw" && f.iterator.return && (s.method = "return", s.arg = void 0, J(f, s), s.method === "throw") || d !== "return" && (s.method = "throw", s.arg = new TypeError("The iterator does not provide a '" + d + "' method")), v;
    var m = p(c, f.iterator, s.arg);
    if (m.type === "throw")
      return s.method = "throw", s.arg = m.arg, s.delegate = null, v;
    var y = m.arg;
    return y ? y.done ? (s[f.resultName] = y.value, s.next = f.nextLoc, s.method !== "return" && (s.method = "next", s.arg = void 0), s.delegate = null, v) : y : (s.method = "throw", s.arg = new TypeError("iterator result is not an object"), s.delegate = null, v);
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
  return w.prototype = g, i($, "constructor", { value: g, configurable: !0 }), i(g, "constructor", { value: w, configurable: !0 }), w.displayName = o(g, u, "GeneratorFunction"), e.isGeneratorFunction = function(f) {
    var s = typeof f == "function" && f.constructor;
    return !!s && (s === w || (s.displayName || s.name) === "GeneratorFunction");
  }, e.mark = function(f) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(f, g) : (f.__proto__ = g, o(f, u, "GeneratorFunction")), f.prototype = Object.create($), f;
  }, e.awrap = function(f) {
    return { __await: f };
  }, E(T.prototype), o(T.prototype, l, function() {
    return this;
  }), e.AsyncIterator = T, e.async = function(f, s, d, c, m) {
    m === void 0 && (m = Promise);
    var y = new T(h(f, s, d, c), m);
    return e.isGeneratorFunction(s) ? y : y.next().then(function(O) {
      return O.done ? O.value : y.next();
    });
  }, E($), o($, u, "Generator"), o($, a, function() {
    return this;
  }), o($, "toString", function() {
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
  }, e.values = q, k.prototype = { constructor: k, reset: function(s) {
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
    function c(D, L) {
      return O.type = "throw", O.arg = s, d.next = D, L && (d.method = "next", d.arg = void 0), !!L;
    }
    for (var m = this.tryEntries.length - 1; m >= 0; --m) {
      var y = this.tryEntries[m], O = y.completion;
      if (y.tryLoc === "root")
        return c("end");
      if (y.tryLoc <= this.prev) {
        var P = r.call(y, "catchLoc"), j = r.call(y, "finallyLoc");
        if (P && j) {
          if (this.prev < y.catchLoc)
            return c(y.catchLoc, !0);
          if (this.prev < y.finallyLoc)
            return c(y.finallyLoc);
        } else if (P) {
          if (this.prev < y.catchLoc)
            return c(y.catchLoc, !0);
        } else {
          if (!j)
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
function xe(e, t, r, i, n, a, l) {
  try {
    var u = e[a](l), o = u.value;
  } catch (h) {
    r(h);
    return;
  }
  u.done ? t(o) : Promise.resolve(o).then(i, n);
}
function Pt(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(i, n) {
      var a = e.apply(t, r);
      function l(o) {
        xe(a, i, n, l, u, "next", o);
      }
      function u(o) {
        xe(a, i, n, l, u, "throw", o);
      }
      l(void 0);
    });
  };
}
function It(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Lt(e)) || t && e && typeof e.length == "number") {
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
  var a = !0, l = !1, u;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var h = r.next();
    return a = h.done, h;
  }, e: function(h) {
    l = !0, u = h;
  }, f: function() {
    try {
      !a && r.return != null && r.return();
    } finally {
      if (l)
        throw u;
    }
  } };
}
function Lt(e, t) {
  if (e) {
    if (typeof e == "string")
      return Re(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Re(e, t);
  }
}
function Re(e, t) {
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
      Ct(e, i, r[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : De(Object(r)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(r, i));
    });
  }
  return e;
}
function Ct(e, t, r) {
  return t = Et(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Et(e) {
  var t = jt(e, "string");
  return A(t) === "symbol" ? t : String(t);
}
function jt(e, t) {
  if (A(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(e, t || "default");
    if (A(i) !== "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function A(e) {
  "@babel/helpers - typeof";
  return A = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, A(e);
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
var le = void 0;
function we() {
  we.init || (we.init = !0, le = xt() !== -1);
}
var $e = {
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
    we(), this.$nextTick(function() {
      t._w = t.$el.offsetWidth, t._h = t.$el.offsetHeight;
    });
    var r = document.createElement("object");
    this._resizeObject = r, r.setAttribute("aria-hidden", "true"), r.setAttribute("tabindex", -1), r.onload = this.addResizeHandlers, r.type = "text/html", le && this.$el.appendChild(r), r.data = "about:blank", le || this.$el.appendChild(r);
  },
  beforeDestroy: function() {
    this.removeResizeHandlers();
  }
};
function Rt(e) {
  e.component("resize-observer", $e), e.component("ResizeObserver", $e);
}
var Dt = {
  // eslint-disable-next-line no-undef
  version: "0.4.5",
  install: Rt
}, fe = null;
typeof window < "u" ? fe = window.Vue : typeof global < "u" && (fe = global.Vue);
fe && fe.use(Dt);
function ue(e) {
  return typeof Symbol == "function" && A(Symbol.iterator) === "symbol" ? ue = function(r) {
    return A(r);
  } : ue = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : A(r);
  }, ue(e);
}
function Vt(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ve(e, t) {
  for (var r = 0; r < t.length; r++) {
    var i = t[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
  }
}
function Mt(e, t, r) {
  return t && Ve(e.prototype, t), r && Ve(e, r), e;
}
function Me(e) {
  return Ft(e) || Nt(e) || Ut();
}
function Ft(e) {
  if (Array.isArray(e)) {
    for (var t = 0, r = new Array(e.length); t < e.length; t++)
      r[t] = e[t];
    return r;
  }
}
function Nt(e) {
  if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]")
    return Array.from(e);
}
function Ut() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function Bt(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function Gt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i, n, a, l = function(o) {
    for (var h = arguments.length, p = new Array(h > 1 ? h - 1 : 0), v = 1; v < h; v++)
      p[v - 1] = arguments[v];
    if (a = p, !(i && o === n)) {
      var S = r.leading;
      typeof S == "function" && (S = S(o, n)), (!i || o !== n) && S && e.apply(void 0, [o].concat(Me(a))), n = o, clearTimeout(i), i = setTimeout(function() {
        e.apply(void 0, [o].concat(Me(a))), i = 0;
      }, t);
    }
  };
  return l._clear = function() {
    clearTimeout(i), i = null;
  }, l;
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
var Ht = /* @__PURE__ */ function() {
  function e(t, r, i) {
    Vt(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(r, i);
  }
  return Mt(e, [{
    key: "createObserver",
    value: function(r, i) {
      var n = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = Bt(r), this.callback = function(u, o) {
          n.options.callback(u, o), u && n.options.once && (n.frozen = !0, n.destroyObserver());
        }, this.callback && this.options.throttle) {
          var a = this.options.throttleOptions || {}, l = a.leading;
          this.callback = Gt(this.callback, this.options.throttle, {
            leading: function(o) {
              return l === "both" || l === "visible" && o || l === "hidden" && !o;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(u) {
          var o = u[0];
          if (u.length > 1) {
            var h = u.find(function(v) {
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
  if (i)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var n = new Ht(e, i, r);
      e._vue_visibilityState = n;
    }
}
function Kt(e, t, r) {
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
  update: Kt,
  unbind: lt
};
function Wt(e) {
  e.directive("observe-visibility", ut);
}
var kt = {
  // eslint-disable-next-line no-undef
  version: "0.4.6",
  install: Wt
}, de = null;
typeof window < "u" ? de = window.Vue : typeof global < "u" && (de = global.Vue);
de && de.use(kt);
var qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ct = {
  exports: {}
};
(function(e) {
  (function(t, r) {
    e.exports ? e.exports = r() : t.Scrollparent = r();
  })(qt, function() {
    var t = /(auto|scroll)/, r = function u(o, h) {
      return o.parentNode === null ? h : u(o.parentNode, h.concat([o]));
    }, i = function(o, h) {
      return getComputedStyle(o, null).getPropertyValue(h);
    }, n = function(o) {
      return i(o, "overflow") + i(o, "overflow-y") + i(o, "overflow-x");
    }, a = function(o) {
      return t.test(n(o));
    }, l = function(o) {
      if (o instanceof HTMLElement || o instanceof SVGElement) {
        for (var h = r(o.parentNode, []), p = 0; p < h.length; p += 1)
          if (a(h[p]))
            return h[p];
        return document.scrollingElement || document.documentElement;
      }
    };
    return l;
  });
})(ct);
var Yt = ct.exports, Fe = /* @__PURE__ */ Xt(Yt), ft = {
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
  return this.items.length && A(this.items[0]) !== "object";
}
var Te = !1;
if (typeof window < "u") {
  Te = !1;
  try {
    var Jt = Object.defineProperty({}, "passive", {
      get: function() {
        Te = !0;
      }
    });
    window.addEventListener("test", null, Jt);
  } catch {
  }
}
var Zt = 0, Qt = {
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
        for (var t = {
          "-1": {
            accumulator: 0
          }
        }, r = this.items, i = this.sizeField, n = this.minItemSize, a = 1e4, l = 0, u, o = 0, h = r.length; o < h; o++)
          u = r[o][i] || n, u < a && (a = u), l += u, t[o] = {
            accumulator: l,
            size: u
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
      var l = {
        item: i,
        position: 0
      }, u = {
        id: Zt++,
        index: r,
        used: !0,
        key: n,
        type: a
      };
      return Object.defineProperty(l, "nr", {
        configurable: !1,
        value: u
      }), t.push(l), l;
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
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = this.itemSize, n = this.gridItems || 1, a = this.itemSecondarySize || i, l = this.$_computedMinItemSize, u = this.typeField, o = this.simpleArray ? null : this.keyField, h = this.items, p = h.length, v = this.sizes, S = this.$_views, w = this.$_unusedViews, g = this.pool, _, b, I, $, E;
      if (!p)
        _ = b = $ = E = I = 0;
      else if (this.$_prerender)
        _ = $ = 0, b = E = Math.min(this.prerender, h.length), I = null;
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
          for (b === -1 ? b = h.length - 1 : (b++, b > p && (b = p)), $ = _; $ < p && F + v[$].accumulator < T.start; $++)
            ;
          for (E = $; E < p && F + v[E].accumulator < T.end; E++)
            ;
        } else {
          _ = ~~(T.start / i * n);
          var d = _ % n;
          _ -= d, b = Math.ceil(T.end / i * n), $ = Math.max(0, Math.floor((T.start - F) / i * n)), E = Math.floor((T.end - F) / i * n), _ < 0 && (_ = 0), b > p && (b = p), $ < 0 && ($ = 0), E > p && (E = p), I = Math.ceil(p / n) * i;
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
        for (var P = 0, j = g.length; P < j; P++)
          c = g[P], c.nr.used && (t && (c.nr.index = h.indexOf(c.item)), (c.nr.index === -1 || c.nr.index < _ || c.nr.index >= b) && this.unuseView(c));
      for (var D = m ? null : /* @__PURE__ */ new Map(), L, C, N, ee, x = _; x < b; x++) {
        L = h[x];
        var U = o ? L[o] : L;
        if (U == null)
          throw new Error("Key is ".concat(U, " on item (keyField is '").concat(o, "')"));
        if (c = S.get(U), !i && !v[x].size) {
          c && this.unuseView(c);
          continue;
        }
        c ? (c.nr.used = !0, c.item = L) : (x === h.length - 1 && this.$emit("scroll-end"), x === 0 && this.$emit("scroll-start"), C = L[u], N = w.get(C), m ? N && N.length ? (c = N.pop(), c.item = L, c.nr.used = !0, c.nr.index = x, c.nr.key = U, c.nr.type = C) : c = this.addView(g, x, L, U, C) : (ee = D.get(C) || 0, (!N || ee >= N.length) && (c = this.addView(g, x, L, U, C), this.unuseView(c, !0), N = w.get(C)), c = N[ee], c.item = L, c.nr.used = !0, c.nr.index = x, c.nr.key = U, c.nr.type = C, D.set(C, ee + 1), ee++), S.set(U, c)), i === null ? (c.position = v[x - 1].accumulator, c.offset = 0) : (c.position = Math.floor(x / n) * i, c.offset = x % n * a);
      }
      return this.$_startIndex = _, this.$_endIndex = b, this.emitUpdate && this.$emit("update", _, b, $, E), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, 300), {
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
        var a = t.getBoundingClientRect(), l = i ? a.height : a.width, u = -(i ? a.top : a.left), o = i ? window.innerHeight : window.innerWidth;
        u < 0 && (o += u, u = 0), u + o > l && (o = l - u), n = {
          start: u,
          end: u + o
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
      this.listenerTarget && (this.listenerTarget.removeEventListener("scroll", this.handleScroll), this.listenerTarget.removeEventListener("resize", this.handleResize), this.listenerTarget = null);
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
        var l = Fe(this.$el), u = l.tagName === "HTML" ? 0 : l[r.scroll], o = l.getBoundingClientRect(), h = this.$el.getBoundingClientRect(), p = h[r.start] - o[r.start];
        i = l, n = r.scroll, a = t + u + p;
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
function je(e, t, r, i, n, a, l, u, o, h) {
  typeof l != "boolean" && (o = u, u = l, l = !1);
  var p = typeof r == "function" ? r.options : r;
  e && e.render && (p.render = e.render, p.staticRenderFns = e.staticRenderFns, p._compiled = !0, n && (p.functional = !0)), i && (p._scopeId = i);
  var v;
  if (a ? (v = function(_) {
    _ = _ || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !_ && typeof __VUE_SSR_CONTEXT__ < "u" && (_ = __VUE_SSR_CONTEXT__), t && t.call(this, o(_)), _ && _._registeredComponents && _._registeredComponents.add(a);
  }, p._ssrRegister = v) : t && (v = l ? function(g) {
    t.call(this, h(g, this.$root.$options.shadowRoot));
  } : function(g) {
    t.call(this, u(g));
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
var er = Qt, pt = function() {
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
}, tr = [];
pt._withStripped = !0;
var rr = void 0, ir = void 0, nr = void 0, ar = !1, ze = /* @__PURE__ */ je({
  render: pt,
  staticRenderFns: tr
}, rr, er, ir, ar, nr, !1, void 0, void 0, void 0), or = {
  name: "DynamicScroller",
  components: {
    RecycleScroller: ze
  },
  provide: function() {
    return typeof ResizeObserver < "u" && (this.$_resizeObserver = new ResizeObserver(function(t) {
      requestAnimationFrame(function() {
        if (Array.isArray(t)) {
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
      for (var t = [], r = this.items, i = this.keyField, n = this.simpleArray, a = this.vscrollData.sizes, l = r.length, u = 0; u < l; u++) {
        var o = r[u], h = n ? u : o[i], p = a[h];
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
      for (var i = this.$el.scrollTop, n = 0, a = 0, l = Math.min(t.length, r.length), u = 0; u < l && !(n >= i); u++)
        n += r[u].size || this.minItemSize, a += t[u].size || this.minItemSize;
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
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, i = this.simpleArray ? r ?? this.items.indexOf(t) : t[this.keyField];
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
}, sr = or, vt = function() {
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
        var l = a.item, u = a.index, o = a.active;
        return [t._t("default", null, null, {
          item: l.item,
          index: u,
          active: o,
          itemWithSize: l
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
}, lr = [];
vt._withStripped = !0;
var ur = void 0, cr = void 0, fr = void 0, dr = !1, Oe = /* @__PURE__ */ je({
  render: vt,
  staticRenderFns: lr
}, ur, sr, cr, dr, fr, !1, void 0, void 0, void 0), hr = {
  name: "DynamicScrollerItem",
  inject: ["vscrollData", "vscrollParent", "vscrollResizeObserver"],
  props: {
    // eslint-disable-next-line vue/require-prop-types
    item: {
      required: !0
    },
    watchData: {
      type: Boolean,
      default: !1
    },
    /**
     * Indicates if the view is actively used to display an item.
     */
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
      this.vscrollResizeObserver && (this.vscrollResizeObserver.unobserve(this.$el.parentNode), this.$el.parentNode.removeEventListener("resize", this.onResize));
    },
    onResize: function(t) {
      var r = t.detail.contentRect, i = r.width, n = r.height;
      this.applySize(i, n);
    }
  },
  render: function(t) {
    return t(this.tag, this.$slots.default);
  }
}, pr = hr, vr = void 0, mr = void 0, yr = void 0, _r = void 0, Ae = /* @__PURE__ */ je({}, vr, pr, mr, _r, yr, !1, void 0, void 0, void 0);
function gr(e, t) {
  e.component("".concat(t, "recycle-scroller"), ze), e.component("".concat(t, "RecycleScroller"), ze), e.component("".concat(t, "dynamic-scroller"), Oe), e.component("".concat(t, "DynamicScroller"), Oe), e.component("".concat(t, "dynamic-scroller-item"), Ae), e.component("".concat(t, "DynamicScrollerItem"), Ae);
}
var br = {
  // eslint-disable-next-line no-undef
  version: "1.1.2",
  install: function(t, r) {
    var i = Object.assign({}, {
      installComponents: !0,
      componentsPrefix: ""
    }, r);
    for (var n in i)
      typeof i[n] < "u" && (ft[n] = i[n]);
    i.installComponents && gr(t, i.componentsPrefix);
  }
}, he = null;
typeof window < "u" ? he = window.Vue : typeof global < "u" && (he = global.Vue);
he && he.use(br);
var Sr = (typeof global > "u" ? "undefined" : A(global)) == "object" && global && global.Object === Object && global, mt = Sr, wr = (typeof self > "u" ? "undefined" : A(self)) == "object" && self && self.Object === Object && self, $r = mt || wr || Function("return this")(), V = $r, Tr = V.Symbol, X = Tr, yt = Object.prototype, zr = yt.hasOwnProperty, Or = yt.toString, te = X ? X.toStringTag : void 0;
function Ar(e) {
  var t = zr.call(e, te), r = e[te];
  try {
    e[te] = void 0;
    var i = !0;
  } catch {
  }
  var n = Or.call(e);
  return i && (t ? e[te] = r : delete e[te]), n;
}
var Pr = Object.prototype, Ir = Pr.toString;
function Lr(e) {
  return Ir.call(e);
}
var Cr = "[object Null]", Er = "[object Undefined]", Ne = X ? X.toStringTag : void 0;
function oe(e) {
  return e == null ? e === void 0 ? Er : Cr : Ne && Ne in Object(e) ? Ar(e) : Lr(e);
}
function ie(e) {
  return e != null && A(e) == "object";
}
var jr = Array.isArray, pe = jr;
function _t(e) {
  var t = A(e);
  return e != null && (t == "object" || t == "function");
}
var xr = "[object AsyncFunction]", Rr = "[object Function]", Dr = "[object GeneratorFunction]", Vr = "[object Proxy]";
function gt(e) {
  if (!_t(e))
    return !1;
  var t = oe(e);
  return t == Rr || t == Dr || t == xr || t == Vr;
}
var Mr = V["__core-js_shared__"], _e = Mr, Ue = function() {
  var e = /[^.]+$/.exec(_e && _e.keys && _e.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Fr(e) {
  return !!Ue && Ue in e;
}
var Nr = Function.prototype, Ur = Nr.toString;
function K(e) {
  if (e != null) {
    try {
      return Ur.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Br = /[\\^$.*+?()[\]{}|]/g, Gr = /^\[object .+?Constructor\]$/, Hr = Function.prototype, Kr = Object.prototype, Wr = Hr.toString, kr = Kr.hasOwnProperty, qr = RegExp("^" + Wr.call(kr).replace(Br, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Xr(e) {
  if (!_t(e) || Fr(e))
    return !1;
  var t = gt(e) ? qr : Gr;
  return t.test(K(e));
}
function Yr(e, t) {
  return e == null ? void 0 : e[t];
}
function Y(e, t) {
  var r = Yr(e, t);
  return Xr(r) ? r : void 0;
}
var Jr = Y(V, "WeakMap"), Pe = Jr, Zr = 9007199254740991, Qr = /^(?:0|[1-9]\d*)$/;
function ei(e, t) {
  var r = A(e);
  return t = t ?? Zr, !!t && (r == "number" || r != "symbol" && Qr.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function bt(e, t) {
  return e === t || e !== e && t !== t;
}
var ti = 9007199254740991;
function St(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ti;
}
function ri(e) {
  return e != null && St(e.length) && !gt(e);
}
var ii = Object.prototype;
function ni(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || ii;
  return e === r;
}
function ai(e, t) {
  for (var r = -1, i = Array(e); ++r < e; )
    i[r] = t(r);
  return i;
}
var oi = "[object Arguments]";
function Be(e) {
  return ie(e) && oe(e) == oi;
}
var wt = Object.prototype, si = wt.hasOwnProperty, li = wt.propertyIsEnumerable, ui = Be(function() {
  return arguments;
}()) ? Be : function(e) {
  return ie(e) && si.call(e, "callee") && !li.call(e, "callee");
}, ci = ui;
function fi() {
  return !1;
}
var $t = (typeof exports > "u" ? "undefined" : A(exports)) == "object" && exports && !exports.nodeType && exports, Ge = $t && (typeof module > "u" ? "undefined" : A(module)) == "object" && module && !module.nodeType && module, di = Ge && Ge.exports === $t, He = di ? V.Buffer : void 0, hi = He ? He.isBuffer : void 0, pi = hi || fi, Ie = pi, vi = "[object Arguments]", mi = "[object Array]", yi = "[object Boolean]", _i = "[object Date]", gi = "[object Error]", bi = "[object Function]", Si = "[object Map]", wi = "[object Number]", $i = "[object Object]", Ti = "[object RegExp]", zi = "[object Set]", Oi = "[object String]", Ai = "[object WeakMap]", Pi = "[object ArrayBuffer]", Ii = "[object DataView]", Li = "[object Float32Array]", Ci = "[object Float64Array]", Ei = "[object Int8Array]", ji = "[object Int16Array]", xi = "[object Int32Array]", Ri = "[object Uint8Array]", Di = "[object Uint8ClampedArray]", Vi = "[object Uint16Array]", Mi = "[object Uint32Array]", z = {};
z[Li] = z[Ci] = z[Ei] = z[ji] = z[xi] = z[Ri] = z[Di] = z[Vi] = z[Mi] = !0;
z[vi] = z[mi] = z[Pi] = z[yi] = z[Ii] = z[_i] = z[gi] = z[bi] = z[Si] = z[wi] = z[$i] = z[Ti] = z[zi] = z[Oi] = z[Ai] = !1;
function Fi(e) {
  return ie(e) && St(e.length) && !!z[oe(e)];
}
function Ni(e) {
  return function(t) {
    return e(t);
  };
}
var Tt = (typeof exports > "u" ? "undefined" : A(exports)) == "object" && exports && !exports.nodeType && exports, re = Tt && (typeof module > "u" ? "undefined" : A(module)) == "object" && module && !module.nodeType && module, Ui = re && re.exports === Tt, ge = Ui && mt.process, Bi = function() {
  try {
    var e = re && re.require && re.require("util").types;
    return e || ge && ge.binding && ge.binding("util");
  } catch {
  }
}(), Ke = Bi, We = Ke && Ke.isTypedArray, Gi = We ? Ni(We) : Fi, zt = Gi, Hi = Object.prototype, Ki = Hi.hasOwnProperty;
function Wi(e, t) {
  var r = pe(e), i = !r && ci(e), n = !r && !i && Ie(e), a = !r && !i && !n && zt(e), l = r || i || n || a, u = l ? ai(e.length, String) : [], o = u.length;
  for (var h in e)
    (t || Ki.call(e, h)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    n && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    ei(h, o))) && u.push(h);
  return u;
}
function ki(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var qi = ki(Object.keys, Object), Xi = qi, Yi = Object.prototype, Ji = Yi.hasOwnProperty;
function Zi(e) {
  if (!ni(e))
    return Xi(e);
  var t = [];
  for (var r in Object(e))
    Ji.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Qi(e) {
  return ri(e) ? Wi(e) : Zi(e);
}
var en = Y(Object, "create"), ne = en;
function tn() {
  this.__data__ = ne ? ne(null) : {}, this.size = 0;
}
function rn(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var nn = "__lodash_hash_undefined__", an = Object.prototype, on = an.hasOwnProperty;
function sn(e) {
  var t = this.__data__;
  if (ne) {
    var r = t[e];
    return r === nn ? void 0 : r;
  }
  return on.call(t, e) ? t[e] : void 0;
}
var ln = Object.prototype, un = ln.hasOwnProperty;
function cn(e) {
  var t = this.__data__;
  return ne ? t[e] !== void 0 : un.call(t, e);
}
var fn = "__lodash_hash_undefined__";
function dn(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ne && t === void 0 ? fn : t, this;
}
function H(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
H.prototype.clear = tn;
H.prototype.delete = rn;
H.prototype.get = sn;
H.prototype.has = cn;
H.prototype.set = dn;
function hn() {
  this.__data__ = [], this.size = 0;
}
function me(e, t) {
  for (var r = e.length; r--; )
    if (bt(e[r][0], t))
      return r;
  return -1;
}
var pn = Array.prototype, vn = pn.splice;
function mn(e) {
  var t = this.__data__, r = me(t, e);
  if (r < 0)
    return !1;
  var i = t.length - 1;
  return r == i ? t.pop() : vn.call(t, r, 1), --this.size, !0;
}
function yn(e) {
  var t = this.__data__, r = me(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function _n(e) {
  return me(this.__data__, e) > -1;
}
function gn(e, t) {
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
M.prototype.clear = hn;
M.prototype.delete = mn;
M.prototype.get = yn;
M.prototype.has = _n;
M.prototype.set = gn;
var bn = Y(V, "Map"), ae = bn;
function Sn() {
  this.size = 0, this.__data__ = {
    hash: new H(),
    map: new (ae || M)(),
    string: new H()
  };
}
function wn(e) {
  var t = A(e);
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ye(e, t) {
  var r = e.__data__;
  return wn(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function $n(e) {
  var t = ye(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Tn(e) {
  return ye(this, e).get(e);
}
function zn(e) {
  return ye(this, e).has(e);
}
function On(e, t) {
  var r = ye(this, e), i = r.size;
  return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
}
function W(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
W.prototype.clear = Sn;
W.prototype.delete = $n;
W.prototype.get = Tn;
W.prototype.has = zn;
W.prototype.set = On;
function An(e, t) {
  for (var r = -1, i = t.length, n = e.length; ++r < i; )
    e[n + r] = t[r];
  return e;
}
function Pn() {
  this.__data__ = new M(), this.size = 0;
}
function In(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Ln(e) {
  return this.__data__.get(e);
}
function Cn(e) {
  return this.__data__.has(e);
}
var En = 200;
function jn(e, t) {
  var r = this.__data__;
  if (r instanceof M) {
    var i = r.__data__;
    if (!ae || i.length < En - 1)
      return i.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new W(i);
  }
  return r.set(e, t), this.size = r.size, this;
}
function B(e) {
  var t = this.__data__ = new M(e);
  this.size = t.size;
}
B.prototype.clear = Pn;
B.prototype.delete = In;
B.prototype.get = Ln;
B.prototype.has = Cn;
B.prototype.set = jn;
function xn(e, t) {
  for (var r = -1, i = e == null ? 0 : e.length, n = 0, a = []; ++r < i; ) {
    var l = e[r];
    t(l, r, e) && (a[n++] = l);
  }
  return a;
}
function Rn() {
  return [];
}
var Dn = Object.prototype, Vn = Dn.propertyIsEnumerable, ke = Object.getOwnPropertySymbols, Mn = ke ? function(e) {
  return e == null ? [] : (e = Object(e), xn(ke(e), function(t) {
    return Vn.call(e, t);
  }));
} : Rn, Fn = Mn;
function Nn(e, t, r) {
  var i = t(e);
  return pe(e) ? i : An(i, r(e));
}
function qe(e) {
  return Nn(e, Qi, Fn);
}
var Un = Y(V, "DataView"), Le = Un, Bn = Y(V, "Promise"), Ce = Bn, Gn = Y(V, "Set"), Ee = Gn, Xe = "[object Map]", Hn = "[object Object]", Ye = "[object Promise]", Je = "[object Set]", Ze = "[object WeakMap]", Qe = "[object DataView]", Kn = K(Le), Wn = K(ae), kn = K(Ce), qn = K(Ee), Xn = K(Pe), G = oe;
(Le && G(new Le(new ArrayBuffer(1))) != Qe || ae && G(new ae()) != Xe || Ce && G(Ce.resolve()) != Ye || Ee && G(new Ee()) != Je || Pe && G(new Pe()) != Ze) && (G = function(t) {
  var r = oe(t), i = r == Hn ? t.constructor : void 0, n = i ? K(i) : "";
  if (n)
    switch (n) {
      case Kn:
        return Qe;
      case Wn:
        return Xe;
      case kn:
        return Ye;
      case qn:
        return Je;
      case Xn:
        return Ze;
    }
  return r;
});
var et = G, Yn = V.Uint8Array, tt = Yn, Jn = "__lodash_hash_undefined__";
function Zn(e) {
  return this.__data__.set(e, Jn), this;
}
function Qn(e) {
  return this.__data__.has(e);
}
function ve(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new W(); ++t < r; )
    this.add(e[t]);
}
ve.prototype.add = ve.prototype.push = Zn;
ve.prototype.has = Qn;
function ea(e, t) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function ta(e, t) {
  return e.has(t);
}
var ra = 1, ia = 2;
function Ot(e, t, r, i, n, a) {
  var l = r & ra, u = e.length, o = t.length;
  if (u != o && !(l && o > u))
    return !1;
  var h = a.get(e), p = a.get(t);
  if (h && p)
    return h == t && p == e;
  var v = -1, S = !0, w = r & ia ? new ve() : void 0;
  for (a.set(e, t), a.set(t, e); ++v < u; ) {
    var g = e[v], _ = t[v];
    if (i)
      var b = l ? i(_, g, v, t, e, a) : i(g, _, v, e, t, a);
    if (b !== void 0) {
      if (b)
        continue;
      S = !1;
      break;
    }
    if (w) {
      if (!ea(t, function(I, $) {
        if (!ta(w, $) && (g === I || n(g, I, r, i, a)))
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
  return a.delete(e), a.delete(t), S;
}
function na(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(i, n) {
    r[++t] = [n, i];
  }), r;
}
function aa(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(i) {
    r[++t] = i;
  }), r;
}
var oa = 1, sa = 2, la = "[object Boolean]", ua = "[object Date]", ca = "[object Error]", fa = "[object Map]", da = "[object Number]", ha = "[object RegExp]", pa = "[object Set]", va = "[object String]", ma = "[object Symbol]", ya = "[object ArrayBuffer]", _a = "[object DataView]", rt = X ? X.prototype : void 0, be = rt ? rt.valueOf : void 0;
function ga(e, t, r, i, n, a, l) {
  switch (r) {
    case _a:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ya:
      return !(e.byteLength != t.byteLength || !a(new tt(e), new tt(t)));
    case la:
    case ua:
    case da:
      return bt(+e, +t);
    case ca:
      return e.name == t.name && e.message == t.message;
    case ha:
    case va:
      return e == t + "";
    case fa:
      var u = na;
    case pa:
      var o = i & oa;
      if (u || (u = aa), e.size != t.size && !o)
        return !1;
      var h = l.get(e);
      if (h)
        return h == t;
      i |= sa, l.set(e, t);
      var p = Ot(u(e), u(t), i, n, a, l);
      return l.delete(e), p;
    case ma:
      if (be)
        return be.call(e) == be.call(t);
  }
  return !1;
}
var ba = 1, Sa = Object.prototype, wa = Sa.hasOwnProperty;
function $a(e, t, r, i, n, a) {
  var l = r & ba, u = qe(e), o = u.length, h = qe(t), p = h.length;
  if (o != p && !l)
    return !1;
  for (var v = o; v--; ) {
    var S = u[v];
    if (!(l ? S in t : wa.call(t, S)))
      return !1;
  }
  var w = a.get(e), g = a.get(t);
  if (w && g)
    return w == t && g == e;
  var _ = !0;
  a.set(e, t), a.set(t, e);
  for (var b = l; ++v < o; ) {
    S = u[v];
    var I = e[S], $ = t[S];
    if (i)
      var E = l ? i($, I, S, t, e, a) : i(I, $, S, e, t, a);
    if (!(E === void 0 ? I === $ || n(I, $, r, i, a) : E)) {
      _ = !1;
      break;
    }
    b || (b = S == "constructor");
  }
  if (_ && !b) {
    var T = e.constructor, R = t.constructor;
    T != R && "constructor" in e && "constructor" in t && !(typeof T == "function" && T instanceof T && typeof R == "function" && R instanceof R) && (_ = !1);
  }
  return a.delete(e), a.delete(t), _;
}
var Ta = 1, it = "[object Arguments]", nt = "[object Array]", se = "[object Object]", za = Object.prototype, at = za.hasOwnProperty;
function Oa(e, t, r, i, n, a) {
  var l = pe(e), u = pe(t), o = l ? nt : et(e), h = u ? nt : et(t);
  o = o == it ? se : o, h = h == it ? se : h;
  var p = o == se, v = h == se, S = o == h;
  if (S && Ie(e)) {
    if (!Ie(t))
      return !1;
    l = !0, p = !1;
  }
  if (S && !p)
    return a || (a = new B()), l || zt(e) ? Ot(e, t, r, i, n, a) : ga(e, t, o, r, i, n, a);
  if (!(r & Ta)) {
    var w = p && at.call(e, "__wrapped__"), g = v && at.call(t, "__wrapped__");
    if (w || g) {
      var _ = w ? e.value() : e, b = g ? t.value() : t;
      return a || (a = new B()), n(_, b, r, i, a);
    }
  }
  return S ? (a || (a = new B()), $a(e, t, r, i, n, a)) : !1;
}
function At(e, t, r, i, n) {
  return e === t ? !0 : e == null || t == null || !ie(e) && !ie(t) ? e !== e && t !== t : Oa(e, t, r, i, At, n);
}
function Aa(e, t) {
  return At(e, t);
}
function Pa(e, t, r, i, n, a, l, u) {
  var o = typeof e == "function" ? e.options : e;
  t && (o.render = t, o.staticRenderFns = r, o._compiled = !0), i && (o.functional = !0), a && (o._scopeId = "data-v-" + a);
  var h;
  if (l ? (h = function(w) {
    w = w || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !w && typeof __VUE_SSR_CONTEXT__ < "u" && (w = __VUE_SSR_CONTEXT__), n && n.call(this, w), w && w._registeredComponents && w._registeredComponents.add(l);
  }, o._ssrRegister = h) : n && (h = u ? function() {
    n.call(this, (o.functional ? this.parent : this).$root.$options.shadowRoot);
  } : n), h)
    if (o.functional) {
      o._injectStyles = h;
      var p = o.render;
      o.render = function(w, g) {
        return h.call(g), p(w, g);
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
var Ia = {
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
      default: "请选择"
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
      default: "暂无匹配数据"
    },
    noDataText: String,
    popperClass: String,
    reserveKeyword: Boolean,
    defaultFirstOption: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: !0
    },
    // vue-virtual-scroller
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
        this.localList = t, this.rawList = t, Array.isArray(t) && t.length > 0 && (!r || Array.isArray(r) && r.length === 0) && this.showLabel();
      },
      deep: !0,
      immediate: !0
    },
    value: {
      handler: function(t) {
        Aa(t, this.localValue) || (this.localValue = t);
      },
      deep: !0
    }
  },
  data: function() {
    return {
      localValue: this.value,
      localList: [],
      rawList: [],
      // 是否展示过下拉选项
      isShownDropdown: !1,
      // 详情等场景时el-select展示使用
      chosenItemList: null
    };
  },
  mounted: function() {
    this.showLabel();
  },
  methods: {
    showLabel: function() {
      var t = this;
      return Pt(/* @__PURE__ */ Se().mark(function r() {
        var i, n, a, l;
        return Se().wrap(function(o) {
          for (; ; )
            switch (o.prev = o.next) {
              case 0:
                i = t.value, n = t.localList, a = t.valueKey, i && Array.isArray(n) && n.length > 0 && (l = n.filter(function(h) {
                  return i === h[a];
                }), t.chosenItemList = l);
              case 2:
              case "end":
                return o.stop();
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
      this.isShownDropdown || (this.isShownDropdown = !0), this.localList.length < this.rawList.length && (this.localList = this.rawList);
    },
    handleSelectChange: function(t) {
      this.localValue = t, this.$emit("input", t);
    }
  }
}, La = function() {
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
  }, "el-select", t.$attrs, !1), t.$listeners), [t.isShownDropdown ? r("DynamicScroller", {
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
        var a = n.item, l = n.index, u = n.active;
        return [r("DynamicScrollerItem", {
          attrs: {
            item: a,
            active: u,
            "data-index": l
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
  }) : t._e(), !t.isShownDropdown && t.chosenItemList ? t._l(t.chosenItemList, function(i) {
    return r("el-option", {
      key: i[t.valueKey],
      attrs: {
        value: i[t.valueKey],
        label: i[t.labelKey],
        disabled: i.disabled
      }
    }, [t._t("label", function() {
      return [t._v(t._s(i[t.labelKey]))];
    }, {
      item: i
    })], 2);
  }) : t._e()], 2);
}, Ca = [], Ea = /* @__PURE__ */ Pa(Ia, La, Ca, !1, null, "419ff6fb", null, null), ja = Ea.exports;
export {
  ja as default
};
