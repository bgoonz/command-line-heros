/*! webrh v1.136.0 */
!(function () {
  "use strict";
  !(function () {
    if (
      void 0 === window.Reflect ||
      void 0 === window.customElements ||
      window.customElements.polyfillWrapFlushCallback
    )
      return;
    const a = HTMLElement;
    (window.HTMLElement = {
      HTMLElement: function () {
        return Reflect.construct(a, [], this.constructor);
      },
    }.HTMLElement),
      (HTMLElement.prototype = a.prototype),
      (HTMLElement.prototype.constructor = HTMLElement),
      Object.setPrototypeOf(HTMLElement, a);
  })();
})(),
  function () {
    "use strict";
    var v;
    function ba(a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    }
    var ca =
        "function" == typeof Object.defineProperties
          ? Object.defineProperty
          : function (a, b, c) {
              a != Array.prototype && a != Object.prototype && (a[b] = c.value);
            },
      da =
        "undefined" != typeof window && window === this
          ? this
          : "undefined" != typeof global && null != global
          ? global
          : this;
    function ea() {
      (ea = function () {}), da.Symbol || (da.Symbol = ha);
    }
    function ia(a, b) {
      (this.a = a),
        ca(this, "description", { configurable: !0, writable: !0, value: b });
    }
    ia.prototype.toString = function () {
      return this.a;
    };
    var oa,
      ha = (function () {
        var b = 0;
        return function a(c) {
          if (this instanceof a)
            throw new TypeError("Symbol is not a constructor");
          return new ia("jscomp_symbol_" + (c || "") + "_" + b++, c);
        };
      })();
    function ja() {
      ea();
      var a = da.Symbol.iterator;
      a || (a = da.Symbol.iterator = da.Symbol("Symbol.iterator")),
        "function" != typeof Array.prototype[a] &&
          ca(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
              return (
                (a = ba(this)),
                ja(),
                ((a = { next: a })[da.Symbol.iterator] = function () {
                  return this;
                }),
                a
              );
              var a;
            },
          }),
        (ja = function () {});
    }
    function na(a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : { next: ba(a) };
    }
    function x(a) {
      if (!(a instanceof Array)) {
        a = na(a);
        for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
        a = c;
      }
      return a;
    }
    if ("function" == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
    else {
      var pa;
      a: {
        var ra = {};
        try {
          (ra.__proto__ = { Pa: !0 }), (pa = ra.Pa);
          break a;
        } catch (a) {}
        pa = !1;
      }
      oa = pa
        ? function (a, b) {
            if (((a.__proto__ = b), a.__proto__ !== b))
              throw new TypeError(a + " is not extensible");
            return a;
          }
        : null;
    }
    var sa = oa;
    function ta() {
      (this.l = !1),
        (this.b = null),
        (this.Ea = void 0),
        (this.a = 1),
        (this.Y = 0),
        (this.c = null);
    }
    function ua(a) {
      if (a.l) throw new TypeError("Generator is already running");
      a.l = !0;
    }
    function xa(a, b) {
      (a.c = { Sa: b, Wa: !0 }), (a.a = a.Y);
    }
    function Aa(a, b) {
      return (a.a = 3), { value: b };
    }
    function Da(a, b, c, d) {
      try {
        var e = b.call(a.a.b, c);
        if (!(e instanceof Object))
          throw new TypeError("Iterator result " + e + " is not an object");
        if (!e.done) return (a.a.l = !1), e;
        var f = e.value;
      } catch (g) {
        return (a.a.b = null), xa(a.a, g), Ea(a);
      }
      return (a.a.b = null), d.call(a.a, f), Ea(a);
    }
    function Ea(a) {
      for (; a.a.a; )
        try {
          var b = a.b(a.a);
          if (b) return (a.a.l = !1), { value: b.value, done: !1 };
        } catch (c) {
          (a.a.Ea = void 0), xa(a.a, c);
        }
      if (((a.a.l = !1), a.a.c)) {
        if (((b = a.a.c), (a.a.c = null), b.Wa)) throw b.Sa;
        return { value: b.return, done: !0 };
      }
      return { value: void 0, done: !0 };
    }
    function Fa(a) {
      (this.next = function (b) {
        return (
          ua(a.a),
          a.a.b ? (b = Da(a, a.a.b.next, b, a.a.J)) : (a.a.J(b), (b = Ea(a))),
          b
        );
      }),
        (this.throw = function (b) {
          return (
            ua(a.a),
            a.a.b
              ? (b = Da(a, a.a.b.throw, b, a.a.J))
              : (xa(a.a, b), (b = Ea(a))),
            b
          );
        }),
        (this.return = function (b) {
          return (function (a, b) {
            ua(a.a);
            var c = a.a.b;
            return c
              ? Da(
                  a,
                  "return" in c
                    ? c.return
                    : function (d) {
                        return { value: d, done: !0 };
                      },
                  b,
                  a.a.return
                )
              : (a.a.return(b), Ea(a));
          })(a, b);
        }),
        ja(),
        (this[Symbol.iterator] = function () {
          return this;
        });
    }
    function Ga(a, b) {
      return (
        (b = new Fa(
          new (function (a) {
            (this.a = new ta()), (this.b = a);
          })(b)
        )),
        sa && sa(b, a.prototype),
        b
      );
    }
    (ta.prototype.J = function (a) {
      this.Ea = a;
    }),
      (ta.prototype.return = function (a) {
        (this.c = { return: a }), (this.a = this.Y);
      }),
      Array.from ||
        (Array.from = function (a) {
          return [].slice.call(a);
        }),
      Object.assign ||
        (Object.assign = function (a) {
          for (var d, b = [].slice.call(arguments, 1), c = 0; c < b.length; c++)
            if ((d = b[c]))
              for (var e = a, f = Object.keys(d), g = 0; g < f.length; g++) {
                var h = f[g];
                e[h] = d[h];
              }
          return a;
        });
    var Ha = setTimeout;
    function Ia() {}
    function A(a) {
      if (!(this instanceof A))
        throw new TypeError("Promises must be constructed via new");
      if ("function" != typeof a) throw new TypeError("not a function");
      (this.I = 0),
        (this.za = !1),
        (this.C = void 0),
        (this.W = []),
        Ka(a, this);
    }
    function La(a, b) {
      for (; 3 === a.I; ) a = a.C;
      0 === a.I
        ? a.W.push(b)
        : ((a.za = !0),
          Ma(function () {
            var c = 1 === a.I ? b.Ya : b.Za;
            if (null === c) (1 === a.I ? Na : Oa)(b.va, a.C);
            else {
              try {
                var d = c(a.C);
              } catch (e) {
                return void Oa(b.va, e);
              }
              Na(b.va, d);
            }
          }));
    }
    function Na(a, b) {
      try {
        if (b === a)
          throw new TypeError("A promise cannot be resolved with itself.");
        if (b && ("object" == typeof b || "function" == typeof b)) {
          var c = b.then;
          if (b instanceof A) return (a.I = 3), (a.C = b), void Pa(a);
          if ("function" == typeof c)
            return void Ka(
              (function (a, b) {
                return function () {
                  a.apply(b, arguments);
                };
              })(c, b),
              a
            );
        }
        (a.I = 1), (a.C = b), Pa(a);
      } catch (d) {
        Oa(a, d);
      }
    }
    function Oa(a, b) {
      (a.I = 2), (a.C = b), Pa(a);
    }
    function Pa(a) {
      2 === a.I &&
        0 === a.W.length &&
        Ma(function () {
          a.za ||
            ("undefined" != typeof console &&
              console &&
              console.warn("Possible Unhandled Promise Rejection:", a.C));
        });
      for (var b = 0, c = a.W.length; b < c; b++) La(a, a.W[b]);
      a.W = null;
    }
    function Ka(a, b) {
      var c = !1;
      try {
        a(
          function (d) {
            c || ((c = !0), Na(b, d));
          },
          function (d) {
            c || ((c = !0), Oa(b, d));
          }
        );
      } catch (d) {
        c || ((c = !0), Oa(b, d));
      }
    }
    function Sa(a) {
      return a && "object" == typeof a && a.constructor === A
        ? a
        : new A(function (b) {
            b(a);
          });
    }
    (A.prototype.catch = function (a) {
      return this.then(null, a);
    }),
      (A.prototype.then = function (a, b) {
        var c = new this.constructor(Ia);
        return (
          La(
            this,
            new (function (a, b, c) {
              (this.Ya = "function" == typeof a ? a : null),
                (this.Za = "function" == typeof b ? b : null),
                (this.va = c);
            })(a, b, c)
          ),
          c
        );
      }),
      (A.prototype.finally = function (a) {
        var b = this.constructor;
        return this.then(
          function (c) {
            return b.resolve(a()).then(function () {
              return c;
            });
          },
          function (c) {
            return b.resolve(a()).then(function () {
              return b.reject(c);
            });
          }
        );
      });
    var a,
      b,
      f,
      c,
      d,
      e,
      Ma =
        ("function" == typeof setImmediate &&
          function (a) {
            setImmediate(a);
          }) ||
        function (a) {
          Ha(a, 0);
        };
    if (!window.Promise) {
      (window.Promise = A),
        (A.prototype.then = A.prototype.then),
        (A.all = function (a) {
          return new A(function (b, c) {
            function d(h, k) {
              try {
                if (k && ("object" == typeof k || "function" == typeof k)) {
                  var l = k.then;
                  if ("function" == typeof l)
                    return void l.call(
                      k,
                      function (m) {
                        d(h, m);
                      },
                      c
                    );
                }
                (e[h] = k), 0 == --f && b(e);
              } catch (m) {
                c(m);
              }
            }
            if (!a || void 0 === a.length)
              return c(new TypeError("Promise.all accepts an array"));
            var e = Array.prototype.slice.call(a);
            if (0 === e.length) return b([]);
            for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g]);
          });
        }),
        (A.race = function (a) {
          return new A(function (b, c) {
            if (!a || void 0 === a.length)
              return c(new TypeError("Promise.race accepts an array"));
            for (var d = 0, e = a.length; d < e; d++) Sa(a[d]).then(b, c);
          });
        }),
        (A.resolve = Sa),
        (A.reject = function (a) {
          return new A(function (b, c) {
            c(a);
          });
        });
      var Va = document.createTextNode(""),
        Xa = [];
      new MutationObserver(function () {
        for (var a = Xa.length, b = 0; b < a; b++) Xa[b]();
        Xa.splice(0, a);
      }).observe(Va, { characterData: !0 }),
        (Ma = function (a) {
          Xa.push(a), (Va.textContent = 0 < Va.textContent.length ? "" : "a");
        });
    }
    !(function (a, b) {
      if (!(b in a)) {
        var c = typeof global == typeof c ? window : global,
          d = 0,
          e = "" + Math.random(),
          f = "__symbol@@" + e,
          g = a.getOwnPropertyNames,
          h = a.getOwnPropertyDescriptor,
          k = a.create,
          l = a.keys,
          m = a.freeze || a,
          q = a.defineProperty,
          H = a.defineProperties,
          C = h(a, "getOwnPropertyNames"),
          t = a.prototype,
          F = t.hasOwnProperty,
          E = t.propertyIsEnumerable,
          M = t.toString,
          y = function (I, u, G) {
            F.call(I, f) ||
              q(I, f, {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: {},
              }),
              (I[f]["@@" + u] = G);
          },
          w = function () {},
          wa = function (I) {
            return I != f && !F.call(ka, I);
          },
          fa = function (I) {
            return I != f && F.call(ka, I);
          },
          va = function (I) {
            var u = "" + I;
            return fa(u)
              ? F.call(this, u) && this[f]["@@" + u]
              : E.call(this, I);
          },
          n = function (I) {
            return (
              q(t, I, {
                enumerable: !1,
                configurable: !0,
                get: w,
                set: function (u) {
                  za(this, I, {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: u,
                  }),
                    y(this, I, !0);
                },
              }),
              m((ka[I] = q(a(I), "constructor", hc)))
            );
          },
          J = function G(u) {
            if (this instanceof G)
              throw new TypeError("Symbol is not a constructor");
            return n("__symbol:".concat(u || "", e, ++d));
          },
          ka = k(null),
          hc = { value: J },
          hb = function (u) {
            return ka[u];
          },
          Wa = function (u, G, p) {
            var r = "" + G;
            if (fa(r)) {
              if (((G = za), p.enumerable)) {
                var B = k(p);
                B.enumerable = !1;
              } else B = p;
              G(u, r, B), y(u, r, !!p.enumerable);
            } else q(u, G, p);
            return u;
          },
          ib = function (u) {
            return g(u).filter(fa).map(hb);
          };
        (C.value = Wa),
          q(a, "defineProperty", C),
          (C.value = ib),
          q(a, b, C),
          (C.value = function (u) {
            return g(u).filter(wa);
          }),
          q(a, "getOwnPropertyNames", C),
          (C.value = function (u, G) {
            var p = ib(G);
            return (
              p.length
                ? l(G)
                    .concat(p)
                    .forEach(function (r) {
                      va.call(G, r) && Wa(u, r, G[r]);
                    })
                : H(u, G),
              u
            );
          }),
          q(a, "defineProperties", C),
          (C.value = va),
          q(t, "propertyIsEnumerable", C),
          (C.value = J),
          q(c, "Symbol", C),
          (C.value = function (u) {
            return (u = "__symbol:".concat("__symbol:", u, e)) in t
              ? ka[u]
              : n(u);
          }),
          q(J, "for", C),
          (C.value = function (u) {
            if (wa(u)) throw new TypeError(u + " is not a symbol");
            if (
              F.call(ka, u) &&
              "__symbol:" === (u = u.slice(10)).slice(0, 10) &&
              (u = u.slice(10)) !== e
            )
              return 0 < (u = u.slice(0, u.length - e.length)).length
                ? u
                : void 0;
          }),
          q(J, "keyFor", C),
          (C.value = function (u, G) {
            var p = h(u, G);
            return p && fa(G) && (p.enumerable = va.call(u, G)), p;
          }),
          q(a, "getOwnPropertyDescriptor", C),
          (C.value = function (u, G) {
            return 1 === arguments.length || void 0 === G
              ? k(u)
              : (function (I, u) {
                  var G = k(I);
                  return (
                    g(u).forEach(function (p) {
                      va.call(u, p) && Wa(G, p, u[p]);
                    }),
                    G
                  );
                })(u, G);
          }),
          q(a, "create", C),
          (C.value = function () {
            var u = M.call(this);
            return "[object String]" === u && fa(this) ? "[object Symbol]" : u;
          }),
          q(t, "toString", C);
        try {
          if (
            !0 !==
            k(
              q({}, "__symbol:", {
                get: function () {
                  return q(this, "__symbol:", { value: !0 })["__symbol:"];
                },
              })
            )["__symbol:"]
          )
            throw "IE11";
          var za = q;
        } catch (u) {
          za = function (G, p, r) {
            var B = h(t, p);
            delete t[p], q(G, p, r), q(t, p, B);
          };
        }
      }
    })(Object, "getOwnPropertySymbols"),
      (a = Object),
      (b = Symbol),
      (c = a.defineProperty),
      (d = a.prototype),
      (e = d.toString),
      "iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag"
        .split(" ")
        .forEach(function (g) {
          if (!(g in b))
            switch ((c(b, g, { value: b(g) }), g)) {
              case "toStringTag":
                ((f = a.getOwnPropertyDescriptor(d, "toString")).value =
                  function () {
                    var h = e.call(this),
                      k = null != this ? this[b.toStringTag] : this;
                    return null == k ? h : "[object " + k + "]";
                  }),
                  c(d, "toString", f);
            }
        }),
      (function (a, b, c) {
        function d() {
          return this;
        }
        b[a] ||
          (b[a] = function () {
            var e = 0,
              f = this,
              g = {
                next: function () {
                  var h = f.length <= e;
                  return h ? { done: h } : { done: h, value: f[e++] };
                },
              };
            return (g[a] = d), g;
          }),
          c[a] ||
            (c[a] = function () {
              var e = String.fromCodePoint,
                f = this,
                g = 0,
                h = f.length,
                k = {
                  next: function () {
                    var l = h <= g,
                      m = l ? "" : e(f.codePointAt(g));
                    return (
                      (g += m.length), l ? { done: l } : { done: l, value: m }
                    );
                  },
                };
              return (k[a] = d), k;
            });
      })(Symbol.iterator, Array.prototype, String.prototype);
    var Ya = Object.prototype.toString;
    (Object.prototype.toString = function () {
      return void 0 === this
        ? "[object Undefined]"
        : null === this
        ? "[object Null]"
        : Ya.call(this);
    }),
      (Object.keys = function (a) {
        return Object.getOwnPropertyNames(a).filter(function (b) {
          return (b = Object.getOwnPropertyDescriptor(a, b)) && b.enumerable;
        });
      }),
      ea(),
      ja(),
      (String.prototype[Symbol.iterator] && String.prototype.codePointAt) ||
        (ea(),
        ja(),
        (String.prototype[Symbol.iterator] = function b() {
          var c,
            d = this;
          return Ga(b, function (e) {
            if ((1 == e.a && (c = 0), 3 != e.a))
              return (
                c < d.length ? (e = Aa(e, d[c])) : ((e.a = 0), (e = void 0)), e
              );
            c++, (e.a = 2);
          });
        })),
      ea(),
      ja(),
      Set.prototype[Symbol.iterator] ||
        (ea(),
        ja(),
        (Set.prototype[Symbol.iterator] = function b() {
          var c,
            e,
            d = this;
          return Ga(b, function (f) {
            if (
              (1 == f.a &&
                ((c = []),
                d.forEach(function (g) {
                  c.push(g);
                }),
                (e = 0)),
              3 != f.a)
            )
              return (
                e < c.length ? (f = Aa(f, c[e])) : ((f.a = 0), (f = void 0)), f
              );
            e++, (f.a = 2);
          });
        })),
      ea(),
      ja(),
      Map.prototype[Symbol.iterator] ||
        (ea(),
        ja(),
        (Map.prototype[Symbol.iterator] = function b() {
          var c,
            e,
            d = this;
          return Ga(b, function (f) {
            if (
              (1 == f.a &&
                ((c = []),
                d.forEach(function (g, h) {
                  c.push([h, g]);
                }),
                (e = 0)),
              3 != f.a)
            )
              return (
                e < c.length ? (f = Aa(f, c[e])) : ((f.a = 0), (f = void 0)), f
              );
            e++, (f.a = 2);
          });
        }));
    var Za = document.createEvent("Event");
    if (
      (Za.initEvent("foo", !0, !0), Za.preventDefault(), !Za.defaultPrevented)
    ) {
      var $a = Event.prototype.preventDefault;
      Event.prototype.preventDefault = function () {
        this.cancelable &&
          ($a.call(this),
          Object.defineProperty(this, "defaultPrevented", {
            get: function () {
              return !0;
            },
            configurable: !0,
          }));
      };
    }
    var ab = /Trident/.test(navigator.userAgent);
    if (!window.Event || (ab && "function" != typeof window.Event)) {
      var bb = window.Event;
      if (
        ((window.Event = function (a, b) {
          b = b || {};
          var c = document.createEvent("Event");
          return c.initEvent(a, !!b.bubbles, !!b.cancelable), c;
        }),
        bb)
      ) {
        for (var cb in bb) window.Event[cb] = bb[cb];
        window.Event.prototype = bb.prototype;
      }
    }
    if (
      ((!window.CustomEvent ||
        (ab && "function" != typeof window.CustomEvent)) &&
        ((window.CustomEvent = function (a, b) {
          b = b || {};
          var c = document.createEvent("CustomEvent");
          return c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail), c;
        }),
        (window.CustomEvent.prototype = window.Event.prototype)),
      !window.MouseEvent || (ab && "function" != typeof window.MouseEvent))
    ) {
      var db = window.MouseEvent;
      if (
        ((window.MouseEvent = function (a, b) {
          b = b || {};
          var c = document.createEvent("MouseEvent");
          return (
            c.initMouseEvent(
              a,
              !!b.bubbles,
              !!b.cancelable,
              b.view || window,
              b.detail,
              b.screenX,
              b.screenY,
              b.clientX,
              b.clientY,
              b.ctrlKey,
              b.altKey,
              b.shiftKey,
              b.metaKey,
              b.button,
              b.relatedTarget
            ),
            c
          );
        }),
        db)
      )
        for (var eb in db) window.MouseEvent[eb] = db[eb];
      window.MouseEvent.prototype = db.prototype;
    }
    Object.getOwnPropertyDescriptor(Node.prototype, "baseURI") ||
      Object.defineProperty(Node.prototype, "baseURI", {
        get: function () {
          var a = (this.ownerDocument || this).querySelector("base[href]");
          return (a && a.href) || window.location.href;
        },
        configurable: !0,
        enumerable: !0,
      });
    var fb,
      gb,
      jb = Element.prototype,
      kb =
        null !== (fb = Object.getOwnPropertyDescriptor(jb, "attributes")) &&
        void 0 !== fb
          ? fb
          : Object.getOwnPropertyDescriptor(Node.prototype, "attributes"),
      lb =
        null !== (gb = null === kb || void 0 === kb ? void 0 : kb.get) &&
        void 0 !== gb
          ? gb
          : function () {
              return this.attributes;
            },
      mb = Array.prototype.map;
    jb.hasOwnProperty("getAttributeNames") ||
      (jb.getAttributeNames = function () {
        return mb.call(lb.call(this), function (a) {
          return a.name;
        });
      });
    var pb,
      qb = Element.prototype;
    qb.hasOwnProperty("matches") ||
      (qb.matches =
        null !== (pb = qb.webkitMatchesSelector) && void 0 !== pb
          ? pb
          : qb.msMatchesSelector);
    var rb = Node.prototype.appendChild;
    function sb(a) {
      (a = a.prototype).hasOwnProperty("append") ||
        Object.defineProperty(a, "append", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function (b) {
            for (var c = [], d = 0; d < arguments.length; ++d)
              c[d] = arguments[d];
            for (d = (c = na(c)).next(); !d.done; d = c.next())
              (d = d.value),
                rb.call(
                  this,
                  "string" == typeof d ? document.createTextNode(d) : d
                );
          },
        });
    }
    sb(Document), sb(DocumentFragment), sb(Element);
    var tb,
      ub,
      vb = Node.prototype.insertBefore,
      wb =
        null !==
          (ub =
            null ===
              (tb = Object.getOwnPropertyDescriptor(
                Node.prototype,
                "firstChild"
              )) || void 0 === tb
              ? void 0
              : tb.get) && void 0 !== ub
          ? ub
          : function () {
              return this.firstChild;
            };
    function xb(a) {
      (a = a.prototype).hasOwnProperty("prepend") ||
        Object.defineProperty(a, "prepend", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function (b) {
            for (var c = [], d = 0; d < arguments.length; ++d)
              c[d] = arguments[d];
            d = wb.call(this);
            for (var e = (c = na(c)).next(); !e.done; e = c.next())
              (e = e.value),
                vb.call(
                  this,
                  "string" == typeof e ? document.createTextNode(e) : e,
                  d
                );
          },
        });
    }
    xb(Document), xb(DocumentFragment), xb(Element);
    var yb,
      zb,
      Ab = Node.prototype.appendChild,
      Bb = Node.prototype.removeChild,
      Cb =
        null !==
          (zb =
            null ===
              (yb = Object.getOwnPropertyDescriptor(
                Node.prototype,
                "firstChild"
              )) || void 0 === yb
              ? void 0
              : yb.get) && void 0 !== zb
          ? zb
          : function () {
              return this.firstChild;
            };
    function Db(a) {
      (a = a.prototype).hasOwnProperty("replaceChildren") ||
        Object.defineProperty(a, "replaceChildren", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function (b) {
            for (var c = [], d = 0; d < arguments.length; ++d)
              c[d] = arguments[d];
            for (; null !== (d = Cb.call(this)); ) Bb.call(this, d);
            for (d = (c = na(c)).next(); !d.done; d = c.next())
              (d = d.value),
                Ab.call(
                  this,
                  "string" == typeof d ? document.createTextNode(d) : d
                );
          },
        });
    }
    Db(Document), Db(DocumentFragment), Db(Element);
    var Eb,
      Fb,
      Gb,
      Hb,
      Ib = Node.prototype.insertBefore,
      Jb =
        null !==
          (Fb =
            null ===
              (Eb = Object.getOwnPropertyDescriptor(
                Node.prototype,
                "parentNode"
              )) || void 0 === Eb
              ? void 0
              : Eb.get) && void 0 !== Fb
          ? Fb
          : function () {
              return this.parentNode;
            },
      Kb =
        null !==
          (Hb =
            null ===
              (Gb = Object.getOwnPropertyDescriptor(
                Node.prototype,
                "nextSibling"
              )) || void 0 === Gb
              ? void 0
              : Gb.get) && void 0 !== Hb
          ? Hb
          : function () {
              return this.nextSibling;
            };
    function Lb(a) {
      (a = a.prototype).hasOwnProperty("after") ||
        Object.defineProperty(a, "after", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function (b) {
            for (var c = [], d = 0; d < arguments.length; ++d)
              c[d] = arguments[d];
            if (null !== (d = Jb.call(this)))
              for (
                var e = Kb.call(this), f = (c = na(c)).next();
                !f.done;
                f = c.next()
              )
                (f = f.value),
                  Ib.call(
                    d,
                    "string" == typeof f ? document.createTextNode(f) : f,
                    e
                  );
          },
        });
    }
    Lb(CharacterData), Lb(Element);
    var Mb,
      Nb,
      Ob = Node.prototype.insertBefore,
      Pb =
        null !==
          (Nb =
            null ===
              (Mb = Object.getOwnPropertyDescriptor(
                Node.prototype,
                "parentNode"
              )) || void 0 === Mb
              ? void 0
              : Mb.get) && void 0 !== Nb
          ? Nb
          : function () {
              return this.parentNode;
            };
    function Qb(a) {
      (a = a.prototype).hasOwnProperty("before") ||
        Object.defineProperty(a, "before", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function (b) {
            for (var c = [], d = 0; d < arguments.length; ++d)
              c[d] = arguments[d];
            if (null !== (d = Pb.call(this)))
              for (var e = (c = na(c)).next(); !e.done; e = c.next())
                (e = e.value),
                  Ob.call(
                    d,
                    "string" == typeof e ? document.createTextNode(e) : e,
                    this
                  );
          },
        });
    }
    Qb(CharacterData), Qb(Element);
    var Rb,
      Sb,
      Tb = Node.prototype.removeChild,
      Ub =
        null !==
          (Sb =
            null ===
              (Rb = Object.getOwnPropertyDescriptor(
                Node.prototype,
                "parentNode"
              )) || void 0 === Rb
              ? void 0
              : Rb.get) && void 0 !== Sb
          ? Sb
          : function () {
              return this.parentNode;
            };
    function Vb(a) {
      (a = a.prototype).hasOwnProperty("remove") ||
        Object.defineProperty(a, "remove", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function () {
            var b = Ub.call(this);
            b && Tb.call(b, this);
          },
        });
    }
    Vb(CharacterData), Vb(Element);
    var Wb,
      Xb,
      Yb = Node.prototype.insertBefore,
      Zb = Node.prototype.removeChild,
      $b =
        null !==
          (Xb =
            null ===
              (Wb = Object.getOwnPropertyDescriptor(
                Node.prototype,
                "parentNode"
              )) || void 0 === Wb
              ? void 0
              : Wb.get) && void 0 !== Xb
          ? Xb
          : function () {
              return this.parentNode;
            };
    function ac(a) {
      (a = a.prototype).hasOwnProperty("replaceWith") ||
        Object.defineProperty(a, "replaceWith", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function (b) {
            for (var c = [], d = 0; d < arguments.length; ++d)
              c[d] = arguments[d];
            if (null !== (d = $b.call(this))) {
              for (var e = (c = na(c)).next(); !e.done; e = c.next())
                (e = e.value),
                  Yb.call(
                    d,
                    "string" == typeof e ? document.createTextNode(e) : e,
                    this
                  );
              Zb.call(d, this);
            }
          },
        });
    }
    ac(CharacterData), ac(Element);
    var bc = window.Element.prototype,
      cc = window.HTMLElement.prototype,
      dc = window.SVGElement.prototype;
    !cc.hasOwnProperty("classList") ||
      bc.hasOwnProperty("classList") ||
      dc.hasOwnProperty("classList") ||
      Object.defineProperty(
        bc,
        "classList",
        Object.getOwnPropertyDescriptor(cc, "classList")
      );
    var ec = document.createElement("style");
    ec.textContent =
      "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
    var fc = document.querySelector("head");
    fc.insertBefore(ec, fc.firstChild);
    var gc = window;
    gc.WebComponents = gc.WebComponents || { flags: {} };
    var ic = document.querySelector('script[src*="webcomponents-bundle"]'),
      jc = /wc-(.+)/,
      kc = {};
    if (!kc.noOpts) {
      if (
        (location.search
          .slice(1)
          .split("&")
          .forEach(function (a) {
            var b;
            (a = a.split("="))[0] &&
              (b = a[0].match(jc)) &&
              (kc[b[1]] = a[1] || !0);
          }),
        ic)
      )
        for (var lc = 0, mc = void 0; (mc = ic.attributes[lc]); lc++)
          "src" !== mc.name && (kc[mc.name] = mc.value || !0);
      var nc = {};
      kc.log &&
        kc.log.split &&
        kc.log.split(",").forEach(function (a) {
          nc[a] = !0;
        }),
        (kc.log = nc);
    }
    gc.WebComponents.flags = kc;
    var oc = kc.shadydom;
    if (oc) {
      (gc.ShadyDOM = gc.ShadyDOM || {}), (gc.ShadyDOM.force = oc);
      var pc = kc.noPatch;
      gc.ShadyDOM.noPatch = "true" === pc || pc;
    }
    var qc = kc.register || kc.ce;
    function rc() {}
    function D(a) {
      return a.__shady || (a.__shady = new rc()), a.__shady;
    }
    function L(a) {
      return a && a.__shady;
    }
    qc && window.customElements && (gc.customElements.forcePolyfill = qc),
      (function () {
        function a() {}
        function b(p, r) {
          if (!p.childNodes.length) return [];
          switch (p.nodeType) {
            case Node.DOCUMENT_NODE:
              return F.call(p, r);
            case Node.DOCUMENT_FRAGMENT_NODE:
              return E.call(p, r);
            default:
              return t.call(p, r);
          }
        }
        var c = "undefined" == typeof HTMLTemplateElement,
          d = !(
            document.createDocumentFragment().cloneNode() instanceof
            DocumentFragment
          ),
          e = !1;
        /Trident/.test(navigator.userAgent) &&
          (function () {
            function p(z, R) {
              if (z instanceof DocumentFragment)
                for (var nb; (nb = z.firstChild); ) B.call(this, nb, R);
              else B.call(this, z, R);
              return z;
            }
            e = !0;
            var r = Node.prototype.cloneNode;
            (Node.prototype.cloneNode = function (z) {
              return (
                (z = r.call(this, z)),
                this instanceof DocumentFragment &&
                  (z.__proto__ = DocumentFragment.prototype),
                z
              );
            }),
              (DocumentFragment.prototype.querySelectorAll =
                HTMLElement.prototype.querySelectorAll),
              (DocumentFragment.prototype.querySelector =
                HTMLElement.prototype.querySelector),
              Object.defineProperties(DocumentFragment.prototype, {
                nodeType: {
                  get: function () {
                    return Node.DOCUMENT_FRAGMENT_NODE;
                  },
                  configurable: !0,
                },
                localName: { get: function () {}, configurable: !0 },
                nodeName: {
                  get: function () {
                    return "#document-fragment";
                  },
                  configurable: !0,
                },
              });
            var B = Node.prototype.insertBefore;
            Node.prototype.insertBefore = p;
            var K = Node.prototype.appendChild;
            Node.prototype.appendChild = function (z) {
              return (
                z instanceof DocumentFragment
                  ? p.call(this, z, null)
                  : K.call(this, z),
                z
              );
            };
            var aa = Node.prototype.removeChild,
              la = Node.prototype.replaceChild;
            (Node.prototype.replaceChild = function (z, R) {
              return (
                z instanceof DocumentFragment
                  ? (p.call(this, z, R), aa.call(this, R))
                  : la.call(this, z, R),
                R
              );
            }),
              (Document.prototype.createDocumentFragment = function () {
                var z = this.createElement("df");
                return (z.__proto__ = DocumentFragment.prototype), z;
              });
            var ya = Document.prototype.importNode;
            Document.prototype.importNode = function (z, R) {
              return (
                (R = ya.call(this, z, R || !1)),
                z instanceof DocumentFragment &&
                  (R.__proto__ = DocumentFragment.prototype),
                R
              );
            };
          })();
        var f = Node.prototype.cloneNode,
          g = Document.prototype.createElement,
          h = Document.prototype.importNode,
          k = Node.prototype.removeChild,
          l = Node.prototype.appendChild,
          m = Node.prototype.replaceChild,
          q = DOMParser.prototype.parseFromString,
          H = Object.getOwnPropertyDescriptor(
            window.HTMLElement.prototype,
            "innerHTML"
          ) || {
            get: function () {
              return this.innerHTML;
            },
            set: function (p) {
              this.innerHTML = p;
            },
          },
          C = Object.getOwnPropertyDescriptor(
            window.Node.prototype,
            "childNodes"
          ) || {
            get: function () {
              return this.childNodes;
            },
          },
          t = Element.prototype.querySelectorAll,
          F = Document.prototype.querySelectorAll,
          E = DocumentFragment.prototype.querySelectorAll,
          M = (function () {
            if (!c) {
              var p = document.createElement("template"),
                r = document.createElement("template");
              return (
                r.content.appendChild(document.createElement("div")),
                p.content.appendChild(r),
                0 === (p = p.cloneNode(!0)).content.childNodes.length ||
                  0 === p.content.firstChild.content.childNodes.length ||
                  d
              );
            }
          })();
        if (c) {
          var y = document.implementation.createHTMLDocument("template"),
            W = !0,
            w = document.createElement("style");
          w.textContent = "template{display:none;}";
          var wa = document.head;
          wa.insertBefore(w, wa.firstElementChild),
            (a.prototype = Object.create(HTMLElement.prototype));
          var fa = !document.createElement("div").hasOwnProperty("innerHTML");
          a.U = function (p) {
            if (
              !p.content &&
              p.namespaceURI === document.documentElement.namespaceURI
            ) {
              p.content = y.createDocumentFragment();
              for (var r; (r = p.firstChild); ) l.call(p.content, r);
              if (fa) p.__proto__ = a.prototype;
              else if (
                ((p.cloneNode = function (B) {
                  return a.b(this, B);
                }),
                W)
              )
                try {
                  n(p), J(p);
                } catch (B) {
                  W = !1;
                }
              a.a(p.content);
            }
          };
          var va = {
              option: ["select"],
              thead: ["table"],
              col: ["colgroup", "table"],
              tr: ["tbody", "table"],
              th: ["tr", "tbody", "table"],
              td: ["tr", "tbody", "table"],
            },
            n = function (p) {
              Object.defineProperty(p, "innerHTML", {
                get: function () {
                  return za(this);
                },
                set: function (r) {
                  var B =
                    va[
                      (/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(r) || [
                        "",
                        "",
                      ])[1].toLowerCase()
                    ];
                  if (B)
                    for (var K = 0; K < B.length; K++)
                      r = "<" + B[K] + ">" + r + "</" + B[K] + ">";
                  for (y.body.innerHTML = r, a.a(y); this.content.firstChild; )
                    k.call(this.content, this.content.firstChild);
                  if (((r = y.body), B))
                    for (K = 0; K < B.length; K++) r = r.lastChild;
                  for (; r.firstChild; ) l.call(this.content, r.firstChild);
                },
                configurable: !0,
              });
            },
            J = function (p) {
              Object.defineProperty(p, "outerHTML", {
                get: function () {
                  return "<template>" + this.innerHTML + "</template>";
                },
                set: function (r) {
                  if (!this.parentNode)
                    throw Error(
                      "Failed to set the 'outerHTML' property on 'Element': This element has no parent node."
                    );
                  for (
                    y.body.innerHTML = r,
                      r = this.ownerDocument.createDocumentFragment();
                    y.body.firstChild;

                  )
                    l.call(r, y.body.firstChild);
                  m.call(this.parentNode, r, this);
                },
                configurable: !0,
              });
            };
          n(a.prototype),
            J(a.prototype),
            (a.a = function (p) {
              for (
                var K, r = 0, B = (p = b(p, "template")).length;
                r < B && (K = p[r]);
                r++
              )
                a.U(K);
            }),
            document.addEventListener("DOMContentLoaded", function () {
              a.a(document);
            }),
            (Document.prototype.createElement = function () {
              var p = g.apply(this, arguments);
              return "template" === p.localName && a.U(p), p;
            }),
            (DOMParser.prototype.parseFromString = function () {
              var p = q.apply(this, arguments);
              return a.a(p), p;
            }),
            Object.defineProperty(HTMLElement.prototype, "innerHTML", {
              get: function () {
                return za(this);
              },
              set: function (p) {
                H.set.call(this, p), a.a(this);
              },
              configurable: !0,
              enumerable: !0,
            });
          var ka = /[&\u00A0"]/g,
            hc = /[&\u00A0<>]/g,
            hb = function (p) {
              switch (p) {
                case "&":
                  return "&amp;";
                case "<":
                  return "&lt;";
                case ">":
                  return "&gt;";
                case '"':
                  return "&quot;";
                case " ":
                  return "&nbsp;";
              }
            },
            Wa = (w = function (p) {
              for (var r = {}, B = 0; B < p.length; B++) r[p[B]] = !0;
              return r;
            })(
              "area base br col command embed hr img input keygen link meta param source track wbr".split(
                " "
              )
            ),
            ib = w(
              "style script xmp iframe noembed noframes plaintext noscript".split(
                " "
              )
            ),
            za = function (p, r) {
              "template" === p.localName && (p = p.content);
              for (
                var ya,
                  B = "",
                  K = r ? r(p) : C.get.call(p),
                  aa = 0,
                  la = K.length;
                aa < la && (ya = K[aa]);
                aa++
              ) {
                a: {
                  var z = ya,
                    R = p,
                    nb = r;
                  switch (z.nodeType) {
                    case Node.ELEMENT_NODE:
                      for (
                        var Gc = z.localName,
                          ob = "<" + Gc,
                          zh = z.attributes,
                          qe = 0;
                        (R = zh[qe]);
                        qe++
                      )
                        ob +=
                          " " + R.name + '="' + R.value.replace(ka, hb) + '"';
                      (ob += ">"),
                        (z = Wa[Gc] ? ob : ob + za(z, nb) + "</" + Gc + ">");
                      break a;
                    case Node.TEXT_NODE:
                      (z = z.data),
                        (z = R && ib[R.localName] ? z : z.replace(hc, hb));
                      break a;
                    case Node.COMMENT_NODE:
                      z = "\x3c!--" + z.data + "--\x3e";
                      break a;
                    default:
                      throw (window.console.error(z), Error("not implemented"));
                  }
                }
                B += z;
              }
              return B;
            };
        }
        if (c || M) {
          a.b = function (p, r) {
            var B = f.call(p, !1);
            return (
              this.U && this.U(B),
              r &&
                (l.call(B.content, f.call(p.content, !0)),
                I(B.content, p.content)),
              B
            );
          };
          var I = function (p, r) {
              if (r.querySelectorAll && 0 !== (r = b(r, "template")).length)
                for (
                  var aa, la, B = 0, K = (p = b(p, "template")).length;
                  B < K;
                  B++
                )
                  (la = r[B]),
                    (aa = p[B]),
                    a && a.U && a.U(la),
                    m.call(aa.parentNode, u.call(la, !0), aa);
            },
            u = (Node.prototype.cloneNode = function (p) {
              if (!e && d && this instanceof DocumentFragment) {
                if (!p) return this.ownerDocument.createDocumentFragment();
                var r = G.call(this.ownerDocument, this, !0);
              } else
                r =
                  this.nodeType === Node.ELEMENT_NODE &&
                  "template" === this.localName &&
                  this.namespaceURI == document.documentElement.namespaceURI
                    ? a.b(this, p)
                    : f.call(this, p);
              return p && I(r, this), r;
            }),
            G = (Document.prototype.importNode = function (p, r) {
              if (((r = r || !1), "template" === p.localName)) return a.b(p, r);
              var B = h.call(this, p, r);
              if (r) {
                I(B, p),
                  (p = b(
                    B,
                    'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]'
                  ));
                for (var K, aa = 0; aa < p.length; aa++) {
                  (K = p[aa]),
                    ((r = g.call(document, "script")).textContent =
                      K.textContent);
                  for (var z, la = K.attributes, ya = 0; ya < la.length; ya++)
                    (z = la[ya]), r.setAttribute(z.name, z.value);
                  m.call(K.parentNode, r, K);
                }
              }
              return B;
            });
        }
        c && (window.HTMLTemplateElement = a);
      })(),
      (rc.prototype.toJSON = function () {
        return {};
      });
    var N = window.ShadyDOM || {};
    N.Ua = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
    var sc = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
    function tc(a) {
      return (a = L(a)) && void 0 !== a.firstChild;
    }
    function O(a) {
      return a instanceof ShadowRoot;
    }
    function uc(a) {
      return (a = (a = L(a)) && a.root) && vc(a);
    }
    (N.B = !!(sc && sc.configurable && sc.get)),
      (N.sa = N.force || !N.Ua),
      (N.D = N.noPatch || !1),
      (N.aa = N.preferPerformance),
      (N.ua = "on-demand" === N.D),
      (N.Ia = navigator.userAgent.match("Trident"));
    var wc = Element.prototype,
      xc =
        wc.matches ||
        wc.matchesSelector ||
        wc.mozMatchesSelector ||
        wc.msMatchesSelector ||
        wc.oMatchesSelector ||
        wc.webkitMatchesSelector,
      yc = document.createTextNode(""),
      zc = 0,
      Ac = [];
    function Bc(a) {
      Ac.push(a), (yc.textContent = zc++);
    }
    new MutationObserver(function () {
      for (; Ac.length; )
        try {
          Ac.shift()();
        } catch (a) {
          throw ((yc.textContent = zc++), a);
        }
    }).observe(yc, { characterData: !0 });
    var Cc = document.contains
      ? function (a, b) {
          return a.__shady_native_contains(b);
        }
      : function (a, b) {
          return (
            a === b ||
            (a.documentElement && a.documentElement.__shady_native_contains(b))
          );
        };
    function Dc(a, b) {
      for (; b; ) {
        if (b == a) return !0;
        b = b.__shady_parentNode;
      }
      return !1;
    }
    function Ec(a) {
      for (var b = a.length - 1; 0 <= b; b--) {
        var c = a[b],
          d = c.getAttribute("id") || c.getAttribute("name");
        d && "length" !== d && isNaN(d) && (a[d] = c);
      }
      return (
        (a.item = function (e) {
          return a[e];
        }),
        (a.namedItem = function (e) {
          if ("length" !== e && isNaN(e) && a[e]) return a[e];
          for (var f = na(a), g = f.next(); !g.done; g = f.next())
            if (
              ((g = g.value).getAttribute("id") || g.getAttribute("name")) == e
            )
              return g;
          return null;
        }),
        a
      );
    }
    function Fc(a) {
      var b = [];
      for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling)
        b.push(a);
      return b;
    }
    function Hc(a) {
      var b = [];
      for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b.push(a);
      return b;
    }
    function Ic(a, b, c) {
      if (((c.configurable = !0), c.value)) a[b] = c.value;
      else
        try {
          Object.defineProperty(a, b, c);
        } catch (d) {}
    }
    function P(a, b, c, d) {
      for (var e in ((c = void 0 === c ? "" : c), b))
        (d && 0 <= d.indexOf(e)) || Ic(a, c + e, b[e]);
    }
    function Jc(a, b) {
      for (var c in b) c in a && Ic(a, c, b[c]);
    }
    function Q(a) {
      var b = {};
      return (
        Object.getOwnPropertyNames(a).forEach(function (c) {
          b[c] = Object.getOwnPropertyDescriptor(a, c);
        }),
        b
      );
    }
    function Kc(a, b) {
      for (var e, c = Object.getOwnPropertyNames(b), d = 0; d < c.length; d++)
        a[(e = c[d])] = b[e];
    }
    function Lc(a) {
      return a instanceof Node ? a : document.createTextNode("" + a);
    }
    function Mc(a) {
      for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
      if (1 === b.length) return Lc(b[0]);
      c = document.createDocumentFragment();
      for (var d = (b = na(b)).next(); !d.done; d = b.next())
        c.appendChild(Lc(d.value));
      return c;
    }
    var Oc,
      Nc = [];
    function Pc(a) {
      Oc || ((Oc = !0), Bc(Qc)), Nc.push(a);
    }
    function Qc() {
      Oc = !1;
      for (var a = !!Nc.length; Nc.length; ) Nc.shift()();
      return a;
    }
    function Rc() {
      (this.a = !1),
        (this.addedNodes = []),
        (this.removedNodes = []),
        (this.ja = new Set());
    }
    (Qc.list = Nc),
      (Rc.prototype.flush = function () {
        if (this.a) {
          this.a = !1;
          var a = this.takeRecords();
          a.length &&
            this.ja.forEach(function (b) {
              b(a);
            });
        }
      }),
      (Rc.prototype.takeRecords = function () {
        if (this.addedNodes.length || this.removedNodes.length) {
          var a = [
            { addedNodes: this.addedNodes, removedNodes: this.removedNodes },
          ];
          return (this.addedNodes = []), (this.removedNodes = []), a;
        }
        return [];
      });
    var Wc = /[&\u00A0"]/g,
      Xc = /[&\u00A0<>]/g;
    function Yc(a) {
      switch (a) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"':
          return "&quot;";
        case " ":
          return "&nbsp;";
      }
    }
    function Zc(a) {
      for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;
      return b;
    }
    var $c = Zc(
        "area base br col command embed hr img input keygen link meta param source track wbr".split(
          " "
        )
      ),
      ad = Zc(
        "style script xmp iframe noembed noframes plaintext noscript".split(" ")
      );
    function bd(a, b) {
      "template" === a.localName && (a = a.content);
      for (
        var c = "",
          d = b ? b(a) : a.childNodes,
          e = 0,
          f = d.length,
          g = void 0;
        e < f && (g = d[e]);
        e++
      ) {
        a: {
          var h = g,
            k = a,
            l = b;
          switch (h.nodeType) {
            case Node.ELEMENT_NODE:
              for (
                var C, m = "<" + (k = h.localName), q = h.attributes, H = 0;
                (C = q[H]);
                H++
              )
                m += " " + C.name + '="' + C.value.replace(Wc, Yc) + '"';
              (m += ">"), (h = $c[k] ? m : m + bd(h, l) + "</" + k + ">");
              break a;
            case Node.TEXT_NODE:
              (h = h.data), (h = k && ad[k.localName] ? h : h.replace(Xc, Yc));
              break a;
            case Node.COMMENT_NODE:
              h = "\x3c!--" + h.data + "--\x3e";
              break a;
            default:
              throw (window.console.error(h), Error("not implemented"));
          }
        }
        c += h;
      }
      return c;
    }
    var cd = N.B,
      dd = {
        querySelector: function (a) {
          return this.__shady_native_querySelector(a);
        },
        querySelectorAll: function (a) {
          return this.__shady_native_querySelectorAll(a);
        },
      },
      ed = {};
    function fd(a) {
      ed[a] = function (b) {
        return b["__shady_native_" + a];
      };
    }
    function gd(a, b) {
      for (var c in (P(a, b, "__shady_native_"), b)) fd(c);
    }
    function S(a, b) {
      b = void 0 === b ? [] : b;
      for (var c = 0; c < b.length; c++) {
        var d = b[c],
          e = Object.getOwnPropertyDescriptor(a, d);
        e &&
          (Object.defineProperty(a, "__shady_native_" + d, e),
          e.value ? dd[d] || (dd[d] = e.value) : fd(d));
      }
    }
    var hd = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
      id = document.createTreeWalker(
        document,
        NodeFilter.SHOW_ELEMENT,
        null,
        !1
      ),
      jd = document.implementation.createHTMLDocument("inert");
    function kd(a) {
      for (var b; (b = a.__shady_native_firstChild); )
        a.__shady_native_removeChild(b);
    }
    var ld = [
        "firstElementChild",
        "lastElementChild",
        "children",
        "childElementCount",
      ],
      md = [
        "querySelector",
        "querySelectorAll",
        "append",
        "prepend",
        "replaceChildren",
      ];
    var od = Q({
        get childNodes() {
          return this.__shady_childNodes;
        },
        get firstChild() {
          return this.__shady_firstChild;
        },
        get lastChild() {
          return this.__shady_lastChild;
        },
        get childElementCount() {
          return this.__shady_childElementCount;
        },
        get children() {
          return this.__shady_children;
        },
        get firstElementChild() {
          return this.__shady_firstElementChild;
        },
        get lastElementChild() {
          return this.__shady_lastElementChild;
        },
        get shadowRoot() {
          return this.__shady_shadowRoot;
        },
      }),
      pd = Q({
        get textContent() {
          return this.__shady_textContent;
        },
        set textContent(a) {
          this.__shady_textContent = a;
        },
        get innerHTML() {
          return this.__shady_innerHTML;
        },
        set innerHTML(a) {
          return (this.__shady_innerHTML = a);
        },
      }),
      qd = Q({
        get parentElement() {
          return this.__shady_parentElement;
        },
        get parentNode() {
          return this.__shady_parentNode;
        },
        get nextSibling() {
          return this.__shady_nextSibling;
        },
        get previousSibling() {
          return this.__shady_previousSibling;
        },
        get nextElementSibling() {
          return this.__shady_nextElementSibling;
        },
        get previousElementSibling() {
          return this.__shady_previousElementSibling;
        },
        get className() {
          return this.__shady_className;
        },
        set className(a) {
          return (this.__shady_className = a);
        },
      });
    function rd(a) {
      for (var b in a) {
        var c = a[b];
        c && (c.enumerable = !1);
      }
    }
    rd(od), rd(pd), rd(qd);
    var sd = N.B || !0 === N.D,
      td = sd
        ? function () {}
        : function (a) {
            var b = D(a);
            b.Ka || ((b.Ka = !0), Jc(a, qd));
          },
      ud = sd
        ? function () {}
        : function (a) {
            var b = D(a);
            b.Ja ||
              ((b.Ja = !0),
              Jc(a, od),
              (window.customElements &&
                window.customElements.polyfillWrapFlushCallback &&
                !N.D) ||
                Jc(a, pd));
          },
      vd = "__eventWrappers" + Date.now(),
      wd = (function () {
        var a = Object.getOwnPropertyDescriptor(Event.prototype, "composed");
        return a
          ? function (b) {
              return a.get.call(b);
            }
          : null;
      })(),
      xd = (function () {
        function a() {}
        var b = !1,
          c = {
            get capture() {
              return (b = !0), !1;
            },
          };
        return (
          window.addEventListener("test", a, c),
          window.removeEventListener("test", a, c),
          b
        );
      })();
    function yd(a) {
      if (a && "object" == typeof a)
        var b = !!a.capture,
          c = !!a.once,
          d = !!a.passive,
          e = a.O;
      else (b = !!a), (d = c = !1);
      return { Ga: e, capture: b, once: c, passive: d, Fa: xd ? a : b };
    }
    var zd = {
        blur: !0,
        focus: !0,
        focusin: !0,
        focusout: !0,
        click: !0,
        dblclick: !0,
        mousedown: !0,
        mouseenter: !0,
        mouseleave: !0,
        mousemove: !0,
        mouseout: !0,
        mouseover: !0,
        mouseup: !0,
        wheel: !0,
        beforeinput: !0,
        input: !0,
        keydown: !0,
        keyup: !0,
        compositionstart: !0,
        compositionupdate: !0,
        compositionend: !0,
        touchstart: !0,
        touchend: !0,
        touchmove: !0,
        touchcancel: !0,
        pointerover: !0,
        pointerenter: !0,
        pointerdown: !0,
        pointermove: !0,
        pointerup: !0,
        pointercancel: !0,
        pointerout: !0,
        pointerleave: !0,
        gotpointercapture: !0,
        lostpointercapture: !0,
        dragstart: !0,
        drag: !0,
        dragenter: !0,
        dragleave: !0,
        dragover: !0,
        drop: !0,
        dragend: !0,
        DOMActivate: !0,
        DOMFocusIn: !0,
        DOMFocusOut: !0,
        keypress: !0,
      },
      Ad = {
        DOMAttrModified: !0,
        DOMAttributeNameChanged: !0,
        DOMCharacterDataModified: !0,
        DOMElementNameChanged: !0,
        DOMNodeInserted: !0,
        DOMNodeInsertedIntoDocument: !0,
        DOMNodeRemoved: !0,
        DOMNodeRemovedFromDocument: !0,
        DOMSubtreeModified: !0,
      };
    function Bd(a) {
      return a instanceof Node ? a.__shady_getRootNode() : a;
    }
    function Cd(a, b) {
      var c = [],
        d = a;
      for (a = Bd(a); d; )
        c.push(d),
          (d = d.__shady_assignedSlot
            ? d.__shady_assignedSlot
            : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
              d.host &&
              (b || d !== a)
            ? d.host
            : d.__shady_parentNode);
      return c[c.length - 1] === document && c.push(window), c;
    }
    function Ed(a, b) {
      if (!O) return a;
      a = Cd(a, !0);
      for (var d, f, c = 0, e = void 0, g = void 0; c < b.length; c++)
        if (
          ((f = Bd((d = b[c]))) !== e && ((g = a.indexOf(f)), (e = f)),
          !O(f) || -1 < g)
        )
          return d;
    }
    function Fd(a) {
      function b(c, d) {
        return ((c = new a(c, d)).__composed = d && !!d.composed), c;
      }
      return (b.__proto__ = a), (b.prototype = a.prototype), b;
    }
    var Gd = { focus: !0, blur: !0 };
    function Hd(a) {
      return a.__target !== a.target || a.__relatedTarget !== a.relatedTarget;
    }
    function Id(a, b, c) {
      if ((c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]))
        for (
          var e, d = 0;
          (e = c[d]) &&
          (!Hd(a) || a.target !== a.relatedTarget) &&
          (e.call(b, a), !a.__immediatePropagationStopped);
          d++
        );
    }
    function Jd(a) {
      var b = a.composedPath(),
        c = b.map(function (k) {
          return Ed(k, b);
        }),
        d = a.bubbles;
      Object.defineProperty(a, "currentTarget", {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return g;
        },
      });
      var e = Event.CAPTURING_PHASE;
      Object.defineProperty(a, "eventPhase", {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return e;
        },
      });
      for (var f = b.length - 1; 0 <= f; f--) {
        var g = b[f];
        if (
          ((e = g === c[f] ? Event.AT_TARGET : Event.CAPTURING_PHASE),
          Id(a, g, "capture"),
          a.ma)
        )
          return;
      }
      for (f = 0; f < b.length; f++) {
        var h = (g = b[f]) === c[f];
        if (
          (h || d) &&
          ((e = h ? Event.AT_TARGET : Event.BUBBLING_PHASE),
          Id(a, g, "bubble"),
          a.ma)
        )
          return;
      }
      (e = 0), (g = null);
    }
    function Kd(a, b, c, d, e, f) {
      for (var g = 0; g < a.length; g++) {
        var h = a[g],
          k = h.type,
          l = h.capture,
          m = h.once,
          q = h.passive;
        if (b === h.node && c === k && d === l && e === m && f === q) return g;
      }
      return -1;
    }
    function Ld(a) {
      return (
        Qc(),
        !N.aa && this instanceof Node && !Cc(document, this)
          ? (a.__target || Md(a, this), Jd(a))
          : this.__shady_native_dispatchEvent(a)
      );
    }
    function Nd(a, b, c) {
      var d = yd(c),
        e = d.capture,
        f = d.once,
        g = d.passive,
        h = d.Ga;
      if (((d = d.Fa), b)) {
        var k = typeof b;
        if (
          ("function" === k || "object" === k) &&
          ("object" !== k ||
            (b.handleEvent && "function" == typeof b.handleEvent))
        ) {
          if (Ad[a]) return this.__shady_native_addEventListener(a, b, d);
          var l = h || this;
          if ((h = b[vd])) {
            if (-1 < Kd(h, l, a, e, f, g)) return;
          } else b[vd] = [];
          (h = function (m) {
            if (
              (f && this.__shady_removeEventListener(a, b, c),
              m.__target || Md(m),
              l !== this)
            ) {
              var q = Object.getOwnPropertyDescriptor(m, "currentTarget");
              Object.defineProperty(m, "currentTarget", {
                get: function () {
                  return l;
                },
                configurable: !0,
              });
              var H = Object.getOwnPropertyDescriptor(m, "eventPhase");
              Object.defineProperty(m, "eventPhase", {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return e ? Event.CAPTURING_PHASE : Event.BUBBLING_PHASE;
                },
              });
            }
            if (
              ((m.__previousCurrentTarget = m.currentTarget),
              ((!O(l) && "slot" !== l.localName) ||
                -1 != m.composedPath().indexOf(l)) &&
                (m.composed || -1 < m.composedPath().indexOf(l)))
            )
              if (Hd(m) && m.target === m.relatedTarget)
                m.eventPhase === Event.BUBBLING_PHASE &&
                  m.stopImmediatePropagation();
              else if (
                m.eventPhase === Event.CAPTURING_PHASE ||
                m.bubbles ||
                m.target === l ||
                l instanceof Window
              ) {
                var C =
                  "function" === k
                    ? b.call(l, m)
                    : b.handleEvent && b.handleEvent(m);
                return (
                  l !== this &&
                    (q
                      ? (Object.defineProperty(m, "currentTarget", q),
                        (q = null))
                      : delete m.currentTarget,
                    H
                      ? (Object.defineProperty(m, "eventPhase", H), (H = null))
                      : delete m.eventPhase),
                  C
                );
              }
          }),
            b[vd].push({
              node: l,
              type: a,
              capture: e,
              once: f,
              passive: g,
              lb: h,
            }),
            (this.__handlers = this.__handlers || {}),
            (this.__handlers[a] = this.__handlers[a] || {
              capture: [],
              bubble: [],
            }),
            this.__handlers[a][e ? "capture" : "bubble"].push(h),
            Gd[a] || this.__shady_native_addEventListener(a, h, d);
        }
      }
    }
    function Od(a, b, c) {
      if (b) {
        var d = yd(c);
        c = d.capture;
        var e = d.once,
          f = d.passive,
          g = d.Ga;
        if (((d = d.Fa), Ad[a]))
          return this.__shady_native_removeEventListener(a, b, d);
        var h = g || this;
        g = void 0;
        var k = null;
        try {
          k = b[vd];
        } catch (l) {}
        k &&
          -1 < (e = Kd(k, h, a, c, e, f)) &&
          ((g = k.splice(e, 1)[0].lb), k.length || (b[vd] = void 0)),
          this.__shady_native_removeEventListener(a, g || b, d),
          g &&
            this.__handlers &&
            this.__handlers[a] &&
            -1 <
              (b = (a = this.__handlers[a][c ? "capture" : "bubble"]).indexOf(
                g
              )) &&
            a.splice(b, 1);
      }
    }
    var Qd = Q({
      get composed() {
        return (
          void 0 === this.__composed &&
            (wd
              ? (this.__composed =
                  "focusin" === this.type ||
                  "focusout" === this.type ||
                  wd(this))
              : !1 !== this.isTrusted && (this.__composed = zd[this.type])),
          this.__composed || !1
        );
      },
      composedPath: function () {
        return (
          this.__composedPath ||
            (this.__composedPath = Cd(this.__target, this.composed)),
          this.__composedPath
        );
      },
      get target() {
        return Ed(
          this.currentTarget || this.__previousCurrentTarget,
          this.composedPath()
        );
      },
      get relatedTarget() {
        return this.__relatedTarget
          ? (this.__relatedTargetComposedPath ||
              (this.__relatedTargetComposedPath = Cd(this.__relatedTarget, !0)),
            Ed(
              this.currentTarget || this.__previousCurrentTarget,
              this.__relatedTargetComposedPath
            ))
          : null;
      },
      stopPropagation: function () {
        Event.prototype.stopPropagation.call(this), (this.ma = !0);
      },
      stopImmediatePropagation: function () {
        Event.prototype.stopImmediatePropagation.call(this),
          (this.ma = this.__immediatePropagationStopped = !0);
      },
    });
    function Md(a, b) {
      if (
        ((b = void 0 === b ? a.target : b),
        (a.__target = b),
        (a.__relatedTarget = a.relatedTarget),
        N.B)
      ) {
        if (
          !(b = Object.getPrototypeOf(a)).hasOwnProperty("__shady_patchedProto")
        ) {
          var c = Object.create(b);
          (c.__shady_sourceProto = b), P(c, Qd), (b.__shady_patchedProto = c);
        }
        a.__proto__ = b.__shady_patchedProto;
      } else P(a, Qd);
    }
    var Rd = Fd(Event),
      Sd = Fd(CustomEvent),
      Td = Fd(MouseEvent);
    var Vd = Object.getOwnPropertyNames(Element.prototype).filter(function (a) {
        return "on" === a.substring(0, 2);
      }),
      Wd = Object.getOwnPropertyNames(HTMLElement.prototype).filter(function (
        a
      ) {
        return "on" === a.substring(0, 2);
      });
    function Xd(a) {
      return {
        set: function (b) {
          var c = D(this),
            d = a.substring(2);
          c.N || (c.N = {}),
            c.N[a] && this.removeEventListener(d, c.N[a]),
            this.__shady_addEventListener(d, b),
            (c.N[a] = b);
        },
        get: function () {
          var b = L(this);
          return b && b.N && b.N[a];
        },
        configurable: !0,
      };
    }
    function Yd(a, b) {
      return { index: a, ba: [], ia: b };
    }
    function Zd(a, b, c, d) {
      var e = 0,
        f = 0,
        g = 0,
        h = 0,
        k = Math.min(b - e, d - f);
      if (0 == e && 0 == f)
        a: {
          for (g = 0; g < k; g++) if (a[g] !== c[g]) break a;
          g = k;
        }
      if (b == a.length && d == c.length) {
        h = a.length;
        for (var l = c.length, m = 0; m < k - g && $d(a[--h], c[--l]); ) m++;
        h = m;
      }
      if (((f += g), (d -= h), 0 == (b -= h) - (e += g) && 0 == d - f))
        return [];
      if (e == b) {
        for (b = Yd(e, 0); f < d; ) b.ba.push(c[f++]);
        return [b];
      }
      if (f == d) return [Yd(e, b - e)];
      for (
        d = d - (g = f) + 1, h = b - (k = e) + 1, b = Array(d), l = 0;
        l < d;
        l++
      )
        (b[l] = Array(h)), (b[l][0] = l);
      for (l = 0; l < h; l++) b[0][l] = l;
      for (l = 1; l < d; l++)
        for (m = 1; m < h; m++)
          if (a[k + m - 1] === c[g + l - 1]) b[l][m] = b[l - 1][m - 1];
          else {
            var q = b[l - 1][m] + 1,
              H = b[l][m - 1] + 1;
            b[l][m] = q < H ? q : H;
          }
      for (
        k = b.length - 1, g = b[0].length - 1, d = b[k][g], a = [];
        0 < k || 0 < g;

      )
        0 == k
          ? (a.push(2), g--)
          : 0 == g
          ? (a.push(3), k--)
          : ((h = b[k - 1][g - 1]),
            (q =
              (l = b[k - 1][g]) < (m = b[k][g - 1])
                ? l < h
                  ? l
                  : h
                : m < h
                ? m
                : h) == h
              ? (h == d ? a.push(0) : (a.push(1), (d = h)), k--, g--)
              : q == l
              ? (a.push(3), k--, (d = l))
              : (a.push(2), g--, (d = m)));
      for (a.reverse(), b = void 0, k = [], g = 0; g < a.length; g++)
        switch (a[g]) {
          case 0:
            b && (k.push(b), (b = void 0)), e++, f++;
            break;
          case 1:
            b || (b = Yd(e, 0)), b.ia++, e++, b.ba.push(c[f]), f++;
            break;
          case 2:
            b || (b = Yd(e, 0)), b.ia++, e++;
            break;
          case 3:
            b || (b = Yd(e, 0)), b.ba.push(c[f]), f++;
        }
      return b && k.push(b), k;
    }
    function $d(a, b) {
      return a === b;
    }
    var ae = Q({
        dispatchEvent: Ld,
        addEventListener: Nd,
        removeEventListener: Od,
      }),
      be = null;
    function ce() {
      return (
        be || (be = window.ShadyCSS && window.ShadyCSS.ScopingShim), be || null
      );
    }
    function de(a, b, c) {
      var d = ce();
      return !(!d || "class" !== b) && (d.setElementClass(a, c), !0);
    }
    function ee(a, b) {
      var c = ce();
      c && c.unscopeNode(a, b);
    }
    function ge(a) {
      if (a.nodeType !== Node.ELEMENT_NODE) return "";
      var b = ce();
      return b ? b.currentScopeForNode(a) : "";
    }
    function he(a, b) {
      if (a)
        for (
          a.nodeType === Node.ELEMENT_NODE && b(a), a = a.__shady_firstChild;
          a;
          a = a.__shady_nextSibling
        )
          a.nodeType === Node.ELEMENT_NODE && he(a, b);
    }
    var ie = window.document,
      je = N.aa,
      ke = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
      le = ke && ke.get;
    function me(a) {
      for (var b; (b = a.__shady_firstChild); ) a.__shady_removeChild(b);
    }
    function pe(a, b, c) {
      if ((a = (a = L(a)) && a.Z)) {
        if (b)
          if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
            for (var d = 0, e = b.childNodes.length; d < e; d++)
              a.addedNodes.push(b.childNodes[d]);
          else a.addedNodes.push(b);
        c && a.removedNodes.push(c),
          (function (a) {
            a.a ||
              ((a.a = !0),
              Bc(function () {
                a.flush();
              }));
          })(a);
      }
    }
    var xe = Q({
        get parentNode() {
          var a = L(this);
          return void 0 !== (a = a && a.parentNode)
            ? a
            : this.__shady_native_parentNode;
        },
        get firstChild() {
          var a = L(this);
          return void 0 !== (a = a && a.firstChild)
            ? a
            : this.__shady_native_firstChild;
        },
        get lastChild() {
          var a = L(this);
          return void 0 !== (a = a && a.lastChild)
            ? a
            : this.__shady_native_lastChild;
        },
        get nextSibling() {
          var a = L(this);
          return void 0 !== (a = a && a.nextSibling)
            ? a
            : this.__shady_native_nextSibling;
        },
        get previousSibling() {
          var a = L(this);
          return void 0 !== (a = a && a.previousSibling)
            ? a
            : this.__shady_native_previousSibling;
        },
        get childNodes() {
          if (tc(this)) {
            var a = L(this);
            if (!a.childNodes) {
              a.childNodes = [];
              for (
                var b = this.__shady_firstChild;
                b;
                b = b.__shady_nextSibling
              )
                a.childNodes.push(b);
            }
            var c = a.childNodes;
          } else c = this.__shady_native_childNodes;
          return (
            (c.item = function (d) {
              return c[d];
            }),
            c
          );
        },
        get parentElement() {
          var a = L(this);
          return (
            (a = a && a.parentNode) &&
              a.nodeType !== Node.ELEMENT_NODE &&
              (a = null),
            void 0 !== a ? a : this.__shady_native_parentElement
          );
        },
        get isConnected() {
          if (le && le.call(this)) return !0;
          if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
          var a = this.ownerDocument;
          if (null === a || Cc(a, this)) return !0;
          for (a = this; a && !(a instanceof Document); )
            a = a.__shady_parentNode || (O(a) ? a.host : void 0);
          return !!(a && a instanceof Document);
        },
        get textContent() {
          if (tc(this)) {
            for (
              var a = [], b = this.__shady_firstChild;
              b;
              b = b.__shady_nextSibling
            )
              b.nodeType !== Node.COMMENT_NODE && a.push(b.__shady_textContent);
            return a.join("");
          }
          return this.__shady_native_textContent;
        },
        set textContent(a) {
          switch (((void 0 !== a && null !== a) || (a = ""), this.nodeType)) {
            case Node.ELEMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
              if (!tc(this) && N.B) {
                var b = this.__shady_firstChild;
                (b != this.__shady_lastChild ||
                  (b && b.nodeType != Node.TEXT_NODE)) &&
                  me(this),
                  (this.__shady_native_textContent = a);
              } else
                me(this),
                  (0 < a.length || this.nodeType === Node.ELEMENT_NODE) &&
                    this.__shady_insertBefore(document.createTextNode(a));
              break;
            default:
              this.nodeValue = a;
          }
        },
        insertBefore: function (a, b) {
          if (this.ownerDocument !== ie && a.ownerDocument !== ie)
            return this.__shady_native_insertBefore(a, b), a;
          if (a === this)
            throw Error(
              "Failed to execute 'appendChild' on 'Node': The new child element contains the parent."
            );
          if (b) {
            var c = L(b);
            if (
              (void 0 !== (c = c && c.parentNode) && c !== this) ||
              (void 0 === c && b.__shady_native_parentNode !== this)
            )
              throw Error(
                "Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node."
              );
          }
          if (b === a) return a;
          pe(this, a);
          var d = [],
            e = (c = re(this)) ? c.host.localName : ge(this),
            f = a.__shady_parentNode;
          if (f) {
            var g = ge(a),
              h = !!c || !re(a) || (je && void 0 !== this.__noInsertionPoint);
            f.__shady_removeChild(a, h);
          }
          f = !0;
          var k =
              (!je ||
                (void 0 === a.__noInsertionPoint &&
                  void 0 === this.__noInsertionPoint)) &&
              !(function fe(a, b) {
                var c = ce();
                if (!c) return !0;
                if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  for (
                    c = !0, a = a.__shady_firstChild;
                    a;
                    a = a.__shady_nextSibling
                  )
                    c = c && fe(a, b);
                  return c;
                }
                return (
                  a.nodeType !== Node.ELEMENT_NODE ||
                  c.currentScopeForNode(a) === b
                );
              })(a, e),
            l =
              c &&
              !a.__noInsertionPoint &&
              (!je || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
          return (
            (l || k) &&
              (k && (g = g || ge(a)),
              he(a, function (m) {
                if ((l && "slot" === m.localName && d.push(m), k)) {
                  var q = g;
                  ce() && (q && ee(m, q), (q = ce()) && q.scopeNode(m, e));
                }
              })),
            d.length && (se(c), c.c.push.apply(c.c, x(d)), te(c)),
            tc(this) &&
              ((function (a, b, c) {
                jf(b, 2);
                var d = D(b);
                if (
                  (void 0 !== d.firstChild && (d.childNodes = null),
                  a.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
                )
                  for (
                    a = a.__shady_native_firstChild;
                    a;
                    a = a.__shady_native_nextSibling
                  )
                    kf(a, b, d, c);
                else kf(a, b, d, c);
              })(a, this, b),
              (h = L(this)).root
                ? ((f = !1), uc(this) && te(h.root))
                : c && "slot" === this.localName && ((f = !1), te(c))),
            f
              ? ((c = O(this) ? this.host : this),
                b
                  ? ((b = (function oe(a) {
                      var b = a;
                      if (a && "slot" === a.localName) {
                        var c = L(a);
                        (c = c && c.V) &&
                          (b = c.length ? c[0] : oe(a.__shady_nextSibling));
                      }
                      return b;
                    })(b)),
                    c.__shady_native_insertBefore(a, b))
                  : c.__shady_native_appendChild(a))
              : a.ownerDocument !== this.ownerDocument &&
                this.ownerDocument.adoptNode(a),
            a
          );
        },
        appendChild: function (a) {
          if (this != a || !O(a)) return this.__shady_insertBefore(a);
        },
        removeChild: function (a, b) {
          if (((b = void 0 !== b && b), this.ownerDocument !== ie))
            return this.__shady_native_removeChild(a);
          if (a.__shady_parentNode !== this)
            throw Error(
              "The node to be removed is not a child of this node: " + a
            );
          pe(this, null, a);
          var c = re(a),
            d =
              c &&
              (function (a, b) {
                if (a.a) {
                  Je(a);
                  var d,
                    c = a.b;
                  for (d in c)
                    for (var e = c[d], f = 0; f < e.length; f++) {
                      var g = e[f];
                      if (Dc(b, g)) {
                        e.splice(f, 1);
                        var h = a.a.indexOf(g);
                        if (
                          (0 <= h &&
                            (a.a.splice(h, 1),
                            (h = L(g.__shady_parentNode)) && h.da && h.da--),
                          f--,
                          (g = L(g)),
                          (h = g.V))
                        )
                          for (var k = 0; k < h.length; k++) {
                            var l = h[k],
                              m = l.__shady_native_parentNode;
                            m && m.__shady_native_removeChild(l);
                          }
                        (g.V = []), (g.assignedNodes = []), (h = !0);
                      }
                    }
                  return h;
                }
              })(c, a),
            e = L(this);
          if (
            tc(this) &&
            ((function (a, b) {
              var c = D(a);
              (b = D(b)),
                a === b.firstChild && (b.firstChild = c.nextSibling),
                a === b.lastChild && (b.lastChild = c.previousSibling),
                (a = c.previousSibling);
              var d = c.nextSibling;
              a && (D(a).nextSibling = d),
                d && (D(d).previousSibling = a),
                (c.parentNode = c.previousSibling = c.nextSibling = void 0),
                void 0 !== b.childNodes && (b.childNodes = null);
            })(a, this),
            uc(this))
          ) {
            te(e.root);
            var f = !0;
          }
          if (ce() && !b && c && a.nodeType !== Node.TEXT_NODE) {
            var g = ge(a);
            he(a, function (h) {
              ee(h, g);
            });
          }
          return (
            (function ne(a) {
              var b = L(a);
              if (b && void 0 !== b.la)
                for (b = a.__shady_firstChild; b; b = b.__shady_nextSibling)
                  ne(b);
              (a = L(a)) && (a.la = void 0);
            })(a),
            c &&
              ((b = "slot" === this.localName) && (f = !0), (d || b) && te(c)),
            f ||
              ((f = O(this) ? this.host : this),
              ((!e.root && "slot" !== a.localName) ||
                f === a.__shady_native_parentNode) &&
                f.__shady_native_removeChild(a)),
            a
          );
        },
        replaceChild: function (a, b) {
          return (
            this.__shady_insertBefore(a, b), this.__shady_removeChild(b), a
          );
        },
        cloneNode: function (a) {
          if ("template" == this.localName)
            return this.__shady_native_cloneNode(a);
          var b = this.__shady_native_cloneNode(!1);
          if (a && b.nodeType !== Node.ATTRIBUTE_NODE) {
            a = this.__shady_firstChild;
            for (var c; a; a = a.__shady_nextSibling)
              (c = a.__shady_cloneNode(!0)), b.__shady_appendChild(c);
          }
          return b;
        },
        getRootNode: function (a) {
          if (this && this.nodeType) {
            var b = D(this),
              c = b.la;
            return (
              void 0 === c &&
                (O(this)
                  ? ((c = this), (b.la = c))
                  : ((c = (c = this.__shady_parentNode)
                      ? c.__shady_getRootNode(a)
                      : this),
                    document.documentElement.__shady_native_contains(this) &&
                      (b.la = c))),
              c
            );
          }
        },
        contains: function (a) {
          return Dc(this, a);
        },
      }),
      ze = Q({
        get assignedSlot() {
          var a = this.__shady_parentNode;
          return (
            (a = a && a.__shady_shadowRoot) && ye(a),
            ((a = L(this)) && a.assignedSlot) || null
          );
        },
      });
    function Ae(a, b, c) {
      var d = [];
      return (
        (function Be(a, b, c, d) {
          for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
            var e;
            if ((e = a.nodeType === Node.ELEMENT_NODE)) {
              var f = b,
                g = c,
                h = d,
                k = f((e = a));
              k && h.push(e),
                g && g(k) ? (e = k) : (Be(e, f, g, h), (e = void 0));
            }
            if (e) break;
          }
        })(a, b, c, d),
        d
      );
    }
    var Ce = {
        get firstElementChild() {
          var a = L(this);
          if (a && void 0 !== a.firstChild) {
            for (
              a = this.__shady_firstChild;
              a && a.nodeType !== Node.ELEMENT_NODE;

            )
              a = a.__shady_nextSibling;
            return a;
          }
          return this.__shady_native_firstElementChild;
        },
        get lastElementChild() {
          var a = L(this);
          if (a && void 0 !== a.lastChild) {
            for (
              a = this.__shady_lastChild;
              a && a.nodeType !== Node.ELEMENT_NODE;

            )
              a = a.__shady_previousSibling;
            return a;
          }
          return this.__shady_native_lastElementChild;
        },
        get children() {
          return tc(this)
            ? Ec(
                Array.prototype.filter.call(Hc(this), function (a) {
                  return a.nodeType === Node.ELEMENT_NODE;
                })
              )
            : this.__shady_native_children;
        },
        get childElementCount() {
          var a = this.__shady_children;
          return a ? a.length : 0;
        },
      },
      De = Q(
        ((Ce.append = function (a) {
          for (var b = [], c = 0; c < arguments.length; ++c)
            b[c] = arguments[c];
          this.__shady_insertBefore(Mc.apply(null, x(b)), null);
        }),
        (Ce.prepend = function (a) {
          for (var b = [], c = 0; c < arguments.length; ++c)
            b[c] = arguments[c];
          this.__shady_insertBefore(
            Mc.apply(null, x(b)),
            this.__shady_firstChild
          );
        }),
        (Ce.replaceChildren = function (a) {
          for (var b = [], c = 0; c < arguments.length; ++c)
            b[c] = arguments[c];
          for (; null !== (c = this.__shady_firstChild); )
            this.__shady_removeChild(c);
          this.__shady_insertBefore(Mc.apply(null, x(b)), null);
        }),
        Ce)
      ),
      Ee = Q({
        querySelector: function (a) {
          return (
            Ae(
              this,
              function (b) {
                return xc.call(b, a);
              },
              function (b) {
                return !!b;
              }
            )[0] || null
          );
        },
        querySelectorAll: function (a, b) {
          if (b) {
            b = Array.prototype.slice.call(
              this.__shady_native_querySelectorAll(a)
            );
            var c = this.__shady_getRootNode();
            return Ec(
              b.filter(function (d) {
                return d.__shady_getRootNode() == c;
              })
            );
          }
          return Ec(
            Ae(this, function (d) {
              return xc.call(d, a);
            })
          );
        },
      }),
      Fe = N.aa && !N.D ? Kc({}, De) : De;
    Kc(De, Ee);
    var Ge = Q({
        after: function (a) {
          for (var b = [], c = 0; c < arguments.length; ++c)
            b[c] = arguments[c];
          if (null !== (c = this.__shady_parentNode)) {
            var d = this.__shady_nextSibling;
            c.__shady_insertBefore(Mc.apply(null, x(b)), d);
          }
        },
        before: function (a) {
          for (var b = [], c = 0; c < arguments.length; ++c)
            b[c] = arguments[c];
          null !== (c = this.__shady_parentNode) &&
            c.__shady_insertBefore(Mc.apply(null, x(b)), this);
        },
        remove: function () {
          var a = this.__shady_parentNode;
          null !== a && a.__shady_removeChild(this);
        },
        replaceWith: function (a) {
          for (var b = [], c = 0; c < arguments.length; ++c)
            b[c] = arguments[c];
          if (null !== (c = this.__shady_parentNode)) {
            var d = this.__shady_nextSibling;
            c.__shady_removeChild(this),
              c.__shady_insertBefore(Mc.apply(null, x(b)), d);
          }
        },
      }),
      He = window.document;
    function Ie(a, b) {
      if ("slot" === b) uc((a = a.__shady_parentNode)) && te(L(a).root);
      else if ("slot" === a.localName && "name" === b && (b = re(a))) {
        if (b.a) {
          Je(b);
          var c = a.La,
            d = Ke(a);
          if (d !== c) {
            var e = (c = b.b[c]).indexOf(a);
            0 <= e && c.splice(e, 1),
              (c = b.b[d] || (b.b[d] = [])).push(a),
              1 < c.length && (b.b[d] = Le(c));
          }
        }
        te(b);
      }
    }
    var Me = Q({
      get previousElementSibling() {
        var a = L(this);
        if (a && void 0 !== a.previousSibling) {
          for (
            a = this.__shady_previousSibling;
            a && a.nodeType !== Node.ELEMENT_NODE;

          )
            a = a.__shady_previousSibling;
          return a;
        }
        return this.__shady_native_previousElementSibling;
      },
      get nextElementSibling() {
        var a = L(this);
        if (a && void 0 !== a.nextSibling) {
          for (
            a = this.__shady_nextSibling;
            a && a.nodeType !== Node.ELEMENT_NODE;

          )
            a = a.__shady_nextSibling;
          return a;
        }
        return this.__shady_native_nextElementSibling;
      },
      get slot() {
        return this.getAttribute("slot");
      },
      set slot(a) {
        this.__shady_setAttribute("slot", a);
      },
      get className() {
        return this.getAttribute("class") || "";
      },
      set className(a) {
        this.__shady_setAttribute("class", a);
      },
      setAttribute: function (a, b) {
        this.ownerDocument !== He
          ? this.__shady_native_setAttribute(a, b)
          : de(this, a, b) ||
            (this.__shady_native_setAttribute(a, b), Ie(this, a));
      },
      removeAttribute: function (a) {
        this.ownerDocument !== He
          ? this.__shady_native_removeAttribute(a)
          : de(this, a, "")
          ? "" === this.getAttribute(a) &&
            this.__shady_native_removeAttribute(a)
          : (this.__shady_native_removeAttribute(a), Ie(this, a));
      },
    });
    N.aa ||
      Vd.forEach(function (a) {
        Me[a] = Xd(a);
      });
    var Re = Q({
      attachShadow: function (a) {
        if (!this) throw Error("Must provide a host.");
        if (!a) throw Error("Not enough arguments.");
        if (a.shadyUpgradeFragment && !N.Ia) {
          var b = a.shadyUpgradeFragment;
          if (
            ((b.__proto__ = ShadowRoot.prototype),
            Ne(b, this, a),
            Oe(b, b),
            (a = b.__noInsertionPoint ? null : b.querySelectorAll("slot")),
            (b.__noInsertionPoint = void 0),
            a && a.length)
          ) {
            var c = b;
            se(c), c.c.push.apply(c.c, x(a)), te(b);
          }
          b.host.__shady_native_appendChild(b);
        } else b = new Pe(Qe, this, a);
        return (this.__CE_shadowRoot = b);
      },
      get shadowRoot() {
        var a = L(this);
        return (a && a.bb) || null;
      },
    });
    Kc(Me, Re);
    var Se = document.implementation.createHTMLDocument("inert"),
      Te = Q({
        get innerHTML() {
          return tc(this)
            ? bd("template" === this.localName ? this.content : this, Hc)
            : this.__shady_native_innerHTML;
        },
        set innerHTML(a) {
          if ("template" === this.localName) this.__shady_native_innerHTML = a;
          else {
            me(this);
            var b = this.localName || "div";
            for (
              b =
                this.namespaceURI && this.namespaceURI !== Se.namespaceURI
                  ? Se.createElementNS(this.namespaceURI, b)
                  : Se.createElement(b),
                N.B ? (b.__shady_native_innerHTML = a) : (b.innerHTML = a);
              (a = b.__shady_firstChild);

            )
              this.__shady_insertBefore(a);
          }
        },
      }),
      Ue = Q({
        blur: function () {
          var a = L(this);
          (a = (a = a && a.root) && a.activeElement)
            ? a.__shady_blur()
            : this.__shady_native_blur();
        },
      });
    N.aa ||
      Wd.forEach(function (a) {
        Ue[a] = Xd(a);
      });
    var Ve = Q({
        assignedNodes: function (a) {
          if ("slot" === this.localName) {
            var b = this.__shady_getRootNode();
            return (
              b && O(b) && ye(b),
              ((b = L(this)) && (a && a.flatten ? b.V : b.assignedNodes)) || []
            );
          }
        },
        addEventListener: function (a, b, c) {
          if ("slot" !== this.localName || "slotchange" === a)
            Nd.call(this, a, b, c);
          else {
            "object" != typeof c && (c = { capture: !!c });
            var d = this.__shady_parentNode;
            if (!d)
              throw Error(
                "ShadyDOM cannot attach event to slot unless it has a `parentNode`"
              );
            (c.O = this), d.__shady_addEventListener(a, b, c);
          }
        },
        removeEventListener: function (a, b, c) {
          if ("slot" !== this.localName || "slotchange" === a)
            Od.call(this, a, b, c);
          else {
            "object" != typeof c && (c = { capture: !!c });
            var d = this.__shady_parentNode;
            if (!d)
              throw Error(
                "ShadyDOM cannot attach event to slot unless it has a `parentNode`"
              );
            (c.O = this), d.__shady_removeEventListener(a, b, c);
          }
        },
      }),
      We = Q({
        getElementById: function (a) {
          return "" === a
            ? null
            : Ae(
                this,
                function (b) {
                  return b.id == a;
                },
                function (b) {
                  return !!b;
                }
              )[0] || null;
        },
      }),
      Xe = Q({
        get activeElement() {
          var a = N.B
            ? document.__shady_native_activeElement
            : document.activeElement;
          if (!a || !a.nodeType) return null;
          var b = !!O(this);
          if (
            !(
              this === document ||
              (b && this.host !== a && this.host.__shady_native_contains(a))
            )
          )
            return null;
          for (b = re(a); b && b !== this; ) b = re((a = b.host));
          return this === document ? (b ? null : a) : b === this ? a : null;
        },
      }),
      Ye = window.document,
      Ze = Q({
        importNode: function (a, b) {
          if (a.ownerDocument !== Ye || "template" === a.localName)
            return this.__shady_native_importNode(a, b);
          var c = this.__shady_native_importNode(a, !1);
          if (b)
            for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling)
              (b = this.__shady_importNode(a, !0)), c.__shady_appendChild(b);
          return c;
        },
      }),
      $e = Q({
        dispatchEvent: Ld,
        addEventListener: Nd.bind(window),
        removeEventListener: Od.bind(window),
      }),
      af = {};
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") &&
      (af.parentElement = xe.parentElement),
      Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") &&
        (af.contains = xe.contains),
      Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") &&
        (af.children = De.children),
      Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") &&
        (af.innerHTML = Te.innerHTML),
      Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") &&
        (af.className = Me.className);
    var bf = {
        EventTarget: [ae],
        Node: [xe, window.EventTarget ? null : ae],
        Text: [ze],
        Comment: [ze],
        CDATASection: [ze],
        ProcessingInstruction: [ze],
        Element: [
          Me,
          De,
          Ge,
          ze,
          !N.B || "innerHTML" in Element.prototype ? Te : null,
          window.HTMLSlotElement ? null : Ve,
        ],
        HTMLElement: [Ue, af],
        HTMLSlotElement: [Ve],
        DocumentFragment: [Fe, We],
        Document: [Ze, Fe, We, Xe],
        Window: [$e],
        CharacterData: [Ge],
      },
      cf = N.B ? null : ["innerHTML", "textContent"];
    function df(a, b, c, d) {
      b.forEach(function (e) {
        return a && e && P(a, e, c, d);
      });
    }
    function ef(a) {
      var c,
        b = a ? null : cf;
      for (c in bf) df(window[c] && window[c].prototype, bf[c], a, b);
    }
    function ff(a) {
      return (
        (a.__shady_protoIsPatched = !0),
        df(a, bf.EventTarget),
        df(a, bf.Node),
        df(a, bf.Element),
        df(a, bf.HTMLElement),
        df(a, bf.HTMLSlotElement),
        a
      );
    }
    ["Text", "Comment", "CDATASection", "ProcessingInstruction"].forEach(
      function (a) {
        var b = window[a],
          c = Object.create(b.prototype);
        (c.__shady_protoIsPatched = !0),
          df(c, bf.EventTarget),
          df(c, bf.Node),
          bf[a] && df(c, bf[a]),
          (b.prototype.__shady_patchedProto = c);
      }
    );
    var gf = N.ua,
      hf = N.B;
    function jf(a, b) {
      if (gf && !a.__shady_protoIsPatched && !O(a)) {
        var c = Object.getPrototypeOf(a),
          d =
            c.hasOwnProperty("__shady_patchedProto") && c.__shady_patchedProto;
        d || (ff((d = Object.create(c))), (c.__shady_patchedProto = d)),
          Object.setPrototypeOf(a, d);
      }
      hf || (1 === b ? td(a) : 2 === b && ud(a));
    }
    function kf(a, b, c, d) {
      jf(a, 1), (d = d || null);
      var e = D(a),
        f = d ? D(d) : null;
      (e.previousSibling = d ? f.previousSibling : b.__shady_lastChild),
        (f = L(e.previousSibling)) && (f.nextSibling = a),
        (f = L((e.nextSibling = d))) && (f.previousSibling = a),
        (e.parentNode = b),
        d
          ? d === c.firstChild && (c.firstChild = a)
          : ((c.lastChild = a), c.firstChild || (c.firstChild = a)),
        (c.childNodes = null);
    }
    function Oe(a, b) {
      var c = D(a);
      if (b || void 0 === c.firstChild) {
        c.childNodes = null;
        var d = (c.firstChild = a.__shady_native_firstChild);
        for (
          c.lastChild = a.__shady_native_lastChild, jf(a, 2), c = d, d = void 0;
          c;
          c = c.__shady_native_nextSibling
        ) {
          var e = D(c);
          (e.parentNode = b || a),
            (e.nextSibling = c.__shady_native_nextSibling),
            (e.previousSibling = d || null),
            (d = c),
            jf(c, 1);
        }
      }
    }
    var lf = Q({
      addEventListener: function (a, b, c) {
        "object" != typeof c && (c = { capture: !!c }),
          (c.O = c.O || this),
          this.host.__shady_addEventListener(a, b, c);
      },
      removeEventListener: function (a, b, c) {
        "object" != typeof c && (c = { capture: !!c }),
          (c.O = c.O || this),
          this.host.__shady_removeEventListener(a, b, c);
      },
    });
    function mf(a, b) {
      P(a, lf, b),
        P(a, Xe, b),
        P(a, Te, b),
        P(a, De, b),
        N.D && !b
          ? (P(a, xe, b), P(a, We, b))
          : N.B || (P(a, qd), P(a, od), P(a, pd));
    }
    var of,
      Qe = {},
      nf = N.deferConnectionCallbacks && "loading" === document.readyState;
    function pf(a) {
      var b = [];
      do {
        b.unshift(a);
      } while ((a = a.__shady_parentNode));
      return b;
    }
    function Pe(a, b, c) {
      if (a !== Qe) throw new TypeError("Illegal constructor");
      (this.a = null), Ne(this, b, c);
    }
    function Ne(a, b, c) {
      if (
        ((a.host = b),
        (a.mode = c && c.mode),
        Oe(a.host),
        ((b = D(a.host)).root = a),
        (b.bb = "closed" !== a.mode ? a : null),
        ((b = D(a)).firstChild =
          b.lastChild =
          b.parentNode =
          b.nextSibling =
          b.previousSibling =
            null),
        N.preferPerformance)
      )
        for (; (b = a.host.__shady_native_firstChild); )
          a.host.__shady_native_removeChild(b);
      else te(a);
    }
    function te(a) {
      a.T ||
        ((a.T = !0),
        Pc(function () {
          return ye(a);
        }));
    }
    function ye(a) {
      var b;
      if ((b = a.T)) {
        for (var c; a; )
          a.T && (c = a),
            (O((a = (b = a).host.__shady_getRootNode())) &&
              (b = L(b.host)) &&
              0 < b.da) ||
              (a = void 0);
        b = c;
      }
      (c = b) && c._renderSelf();
    }
    function qf(a, b, c) {
      var d = D(b),
        e = d.oa;
      (d.oa = null),
        c || (c = (a = a.b[b.__shady_slot || "__catchall"]) && a[0]),
        c
          ? (D(c).assignedNodes.push(b), (d.assignedSlot = c))
          : (d.assignedSlot = void 0),
        e !== d.assignedSlot && d.assignedSlot && (D(d.assignedSlot).ra = !0);
    }
    function rf(a, b, c) {
      for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++)
        if ("slot" == e.localName) {
          var f = L(e).assignedNodes;
          f && f.length && rf(a, b, f);
        } else b.push(c[d]);
    }
    function sf(a, b) {
      b.__shady_native_dispatchEvent(new Event("slotchange")),
        (b = L(b)).assignedSlot && sf(a, b.assignedSlot);
    }
    function se(a) {
      (a.c = a.c || []), (a.a = a.a || []), (a.b = a.b || {});
    }
    function Je(a) {
      if (a.c && a.c.length) {
        for (var c, b = a.c, d = 0; d < b.length; d++) {
          var e = b[d];
          Oe(e);
          var f = e.__shady_parentNode;
          Oe(f),
            ((f = L(f)).da = (f.da || 0) + 1),
            (f = Ke(e)),
            a.b[f] ? (((c = c || {})[f] = !0), a.b[f].push(e)) : (a.b[f] = [e]),
            a.a.push(e);
        }
        if (c) for (var g in c) a.b[g] = Le(a.b[g]);
        a.c = [];
      }
    }
    function Ke(a) {
      var b = a.name || a.getAttribute("name") || "__catchall";
      return (a.La = b);
    }
    function Le(a) {
      return a.sort(function (b, c) {
        b = pf(b);
        for (var d = pf(c), e = 0; e < b.length; e++) {
          c = b[e];
          var f = d[e];
          if (c !== f)
            return (b = Hc(c.__shady_parentNode)).indexOf(c) - b.indexOf(f);
        }
      });
    }
    function vc(a) {
      return Je(a), !(!a.a || !a.a.length);
    }
    if (
      ((Pe.prototype._renderSelf = function () {
        var a = nf;
        if (((nf = !0), (this.T = !1), this.a)) {
          Je(this);
          for (var c, b = 0; b < this.a.length; b++) {
            var d = L((c = this.a[b])),
              e = d.assignedNodes;
            if (((d.assignedNodes = []), (d.V = []), (d.Ba = e)))
              for (d = 0; d < e.length; d++) {
                var f = L(e[d]);
                (f.oa = f.assignedSlot),
                  f.assignedSlot === c && (f.assignedSlot = null);
              }
          }
          for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling)
            qf(this, b);
          for (b = 0; b < this.a.length; b++) {
            if (!(e = L((c = this.a[b]))).assignedNodes.length)
              for (d = c.__shady_firstChild; d; d = d.__shady_nextSibling)
                qf(this, d, c);
            if (
              ((d = (d = L(c.__shady_parentNode)) && d.root) &&
                (vc(d) || d.T) &&
                d._renderSelf(),
              rf(this, e.V, e.assignedNodes),
              (d = e.Ba))
            ) {
              for (f = 0; f < d.length; f++) L(d[f]).oa = null;
              (e.Ba = null), d.length > e.assignedNodes.length && (e.ra = !0);
            }
            e.ra && ((e.ra = !1), sf(this, c));
          }
          for (c = this.a, b = [], e = 0; e < c.length; e++)
            ((f = L((d = c[e].__shady_parentNode))) && f.root) ||
              !(0 > b.indexOf(d)) ||
              b.push(d);
          for (c = 0; c < b.length; c++) {
            for (
              e = (f = b[c]) === this ? this.host : f,
                d = [],
                f = f.__shady_firstChild;
              f;
              f = f.__shady_nextSibling
            )
              if ("slot" == f.localName)
                for (var g = L(f).V, h = 0; h < g.length; h++) d.push(g[h]);
              else d.push(f);
            (f = Fc(e)), (g = Zd(d, d.length, f, f.length));
            for (var k = (h = 0), l = void 0; h < g.length && (l = g[h]); h++) {
              for (var m = 0, q = void 0; m < l.ba.length && (q = l.ba[m]); m++)
                q.__shady_native_parentNode === e &&
                  e.__shady_native_removeChild(q),
                  f.splice(l.index + k, 1);
              k -= l.ia;
            }
            for (k = 0, l = void 0; k < g.length && (l = g[k]); k++)
              for (h = f[l.index], m = l.index; m < l.index + l.ia; m++)
                (q = d[m]),
                  e.__shady_native_insertBefore(q, h),
                  f.splice(m, 0, q);
          }
        }
        if (!N.preferPerformance && !this.Aa)
          for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling)
            (c = L(b)),
              b.__shady_native_parentNode !== this.host ||
                ("slot" !== b.localName && c.assignedSlot) ||
                this.host.__shady_native_removeChild(b);
        (this.Aa = !0), (nf = a), of && of();
      }),
      (function (a) {
        (a.__proto__ = DocumentFragment.prototype),
          mf(a, "__shady_"),
          mf(a),
          Object.defineProperties(a, {
            nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: !0 },
            nodeName: { value: "#document-fragment", configurable: !0 },
            nodeValue: { value: null, configurable: !0 },
          }),
          ["localName", "namespaceURI", "prefix"].forEach(function (b) {
            Object.defineProperty(a, b, { value: void 0, configurable: !0 });
          }),
          ["ownerDocument", "baseURI", "isConnected"].forEach(function (b) {
            Object.defineProperty(a, b, {
              get: function () {
                return this.host[b];
              },
              configurable: !0,
            });
          });
      })(Pe.prototype),
      window.customElements &&
        window.customElements.define &&
        N.sa &&
        !N.preferPerformance)
    ) {
      var tf = new Map();
      (of = function () {
        var a = [];
        tf.forEach(function (d, e) {
          a.push([e, d]);
        }),
          tf.clear();
        for (var b = 0; b < a.length; b++) {
          var c = a[b][0];
          a[b][1]
            ? c.__shadydom_connectedCallback()
            : c.__shadydom_disconnectedCallback();
        }
      }),
        nf &&
          document.addEventListener(
            "readystatechange",
            function () {
              (nf = !1), of();
            },
            { once: !0 }
          );
      var vf = window.customElements.define,
        wf = function (a, b) {
          var c = b.prototype.connectedCallback,
            d = b.prototype.disconnectedCallback;
          vf.call(
            window.customElements,
            a,
            (function (a, b, c) {
              var d = 0,
                e = "__isConnected" + d++;
              return (
                (b || c) &&
                  ((a.prototype.connectedCallback =
                    a.prototype.__shadydom_connectedCallback =
                      function () {
                        nf
                          ? tf.set(this, !0)
                          : this[e] || ((this[e] = !0), b && b.call(this));
                      }),
                  (a.prototype.disconnectedCallback =
                    a.prototype.__shadydom_disconnectedCallback =
                      function () {
                        nf
                          ? this.isConnected || tf.set(this, !1)
                          : this[e] && ((this[e] = !1), c && c.call(this));
                      })),
                a
              );
            })(b, c, d)
          ),
            (b.prototype.connectedCallback = c),
            (b.prototype.disconnectedCallback = d);
        };
      (window.customElements.define = wf),
        Object.defineProperty(
          window.CustomElementRegistry.prototype,
          "define",
          { value: wf, configurable: !0 }
        );
    }
    function re(a) {
      if (O((a = a.__shady_getRootNode()))) return a;
    }
    function xf(a) {
      this.node = a;
    }
    function yf(a) {
      Object.defineProperty(xf.prototype, a, {
        get: function () {
          return this.node["__shady_" + a];
        },
        set: function (b) {
          this.node["__shady_" + a] = b;
        },
        configurable: !0,
      });
    }
    ((v = xf.prototype).addEventListener = function (a, b, c) {
      return this.node.__shady_addEventListener(a, b, c);
    }),
      (v.removeEventListener = function (a, b, c) {
        return this.node.__shady_removeEventListener(a, b, c);
      }),
      (v.appendChild = function (a) {
        return this.node.__shady_appendChild(a);
      }),
      (v.insertBefore = function (a, b) {
        return this.node.__shady_insertBefore(a, b);
      }),
      (v.removeChild = function (a) {
        return this.node.__shady_removeChild(a);
      }),
      (v.replaceChild = function (a, b) {
        return this.node.__shady_replaceChild(a, b);
      }),
      (v.cloneNode = function (a) {
        return this.node.__shady_cloneNode(a);
      }),
      (v.getRootNode = function (a) {
        return this.node.__shady_getRootNode(a);
      }),
      (v.contains = function (a) {
        return this.node.__shady_contains(a);
      }),
      (v.dispatchEvent = function (a) {
        return this.node.__shady_dispatchEvent(a);
      }),
      (v.setAttribute = function (a, b) {
        this.node.__shady_setAttribute(a, b);
      }),
      (v.getAttribute = function (a) {
        return this.node.__shady_native_getAttribute(a);
      }),
      (v.hasAttribute = function (a) {
        return this.node.__shady_native_hasAttribute(a);
      }),
      (v.removeAttribute = function (a) {
        this.node.__shady_removeAttribute(a);
      }),
      (v.attachShadow = function (a) {
        return this.node.__shady_attachShadow(a);
      }),
      (v.focus = function () {
        this.node.__shady_native_focus();
      }),
      (v.blur = function () {
        this.node.__shady_blur();
      }),
      (v.importNode = function (a, b) {
        if (this.node.nodeType === Node.DOCUMENT_NODE)
          return this.node.__shady_importNode(a, b);
      }),
      (v.getElementById = function (a) {
        if (this.node.nodeType === Node.DOCUMENT_NODE)
          return this.node.__shady_getElementById(a);
      }),
      (v.querySelector = function (a) {
        return this.node.__shady_querySelector(a);
      }),
      (v.querySelectorAll = function (a, b) {
        return this.node.__shady_querySelectorAll(a, b);
      }),
      (v.assignedNodes = function (a) {
        if ("slot" === this.node.localName)
          return this.node.__shady_assignedNodes(a);
      }),
      (v.append = function (a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        return this.node.__shady_append.apply(this.node, x(b));
      }),
      (v.prepend = function (a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        return this.node.__shady_prepend.apply(this.node, x(b));
      }),
      (v.after = function (a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        return this.node.__shady_after.apply(this.node, x(b));
      }),
      (v.before = function (a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        return this.node.__shady_before.apply(this.node, x(b));
      }),
      (v.remove = function () {
        return this.node.__shady_remove();
      }),
      (v.replaceWith = function (a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        return this.node.__shady_replaceWith.apply(this.node, x(b));
      }),
      da.Object.defineProperties(xf.prototype, {
        activeElement: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            if (O(this.node) || this.node.nodeType === Node.DOCUMENT_NODE)
              return this.node.__shady_activeElement;
          },
        },
        _activeElement: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.activeElement;
          },
        },
        host: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            if (O(this.node)) return this.node.host;
          },
        },
        parentNode: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_parentNode;
          },
        },
        firstChild: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_firstChild;
          },
        },
        lastChild: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_lastChild;
          },
        },
        nextSibling: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_nextSibling;
          },
        },
        previousSibling: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_previousSibling;
          },
        },
        childNodes: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_childNodes;
          },
        },
        parentElement: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_parentElement;
          },
        },
        firstElementChild: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_firstElementChild;
          },
        },
        lastElementChild: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_lastElementChild;
          },
        },
        nextElementSibling: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_nextElementSibling;
          },
        },
        previousElementSibling: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_previousElementSibling;
          },
        },
        children: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_children;
          },
        },
        childElementCount: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_childElementCount;
          },
        },
        shadowRoot: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_shadowRoot;
          },
        },
        assignedSlot: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_assignedSlot;
          },
        },
        isConnected: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_isConnected;
          },
        },
        innerHTML: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_innerHTML;
          },
          set: function (a) {
            this.node.__shady_innerHTML = a;
          },
        },
        textContent: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_textContent;
          },
          set: function (a) {
            this.node.__shady_textContent = a;
          },
        },
        slot: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_slot;
          },
          set: function (a) {
            this.node.__shady_slot = a;
          },
        },
        className: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_className;
          },
          set: function (a) {
            return (this.node.__shady_className = a);
          },
        },
      }),
      Vd.forEach(function (a) {
        return yf(a);
      }),
      Wd.forEach(function (a) {
        return yf(a);
      });
    var zf = new WeakMap();
    function Af(a) {
      if (O(a) || a instanceof xf) return a;
      var b = zf.get(a);
      return b || ((b = new xf(a)), zf.set(a, b)), b;
    }
    if (N.sa) {
      var Bf = N.B
          ? function (a) {
              return a;
            }
          : function (a) {
              return ud(a), td(a), a;
            },
        ShadyDOM = {
          inUse: N.sa,
          patch: Bf,
          isShadyRoot: O,
          enqueue: Pc,
          flush: Qc,
          flushInitial: function (a) {
            !a.Aa && a.T && ye(a);
          },
          settings: N,
          filterMutations: function (a, b) {
            var c = b.getRootNode();
            return a
              .map(function (d) {
                var e = c === d.target.getRootNode();
                if (e && d.addedNodes) {
                  if (
                    (e = [].slice.call(d.addedNodes).filter(function (f) {
                      return c === f.getRootNode();
                    })).length
                  )
                    return (
                      (d = Object.create(d)),
                      Object.defineProperty(d, "addedNodes", {
                        value: e,
                        configurable: !0,
                      }),
                      d
                    );
                } else if (e) return d;
              })
              .filter(function (d) {
                return d;
              });
          },
          observeChildren: function (a, b) {
            var c = D(a);
            c.Z || (c.Z = new Rc()), c.Z.ja.add(b);
            var d = c.Z;
            return {
              Ma: b,
              S: d,
              Na: a,
              takeRecords: function () {
                return d.takeRecords();
              },
            };
          },
          unobserveChildren: function (a) {
            var b = a && a.S;
            b && (b.ja.delete(a.Ma), b.ja.size || (D(a.Na).Z = null));
          },
          deferConnectionCallbacks: N.deferConnectionCallbacks,
          preferPerformance: N.preferPerformance,
          handlesDynamicScoping: !0,
          wrap: N.D ? Af : Bf,
          wrapIfNeeded:
            !0 === N.D
              ? Af
              : function (a) {
                  return a;
                },
          Wrapper: xf,
          composedPath: function (a) {
            return (
              a.__composedPath || (a.__composedPath = Cd(a.target, !0)),
              a.__composedPath
            );
          },
          noPatch: N.D,
          patchOnDemand: N.ua,
          nativeMethods: dd,
          nativeTree: ed,
          patchElementProto: ff,
        };
      (window.ShadyDOM = ShadyDOM),
        (function () {
          var a = ["dispatchEvent", "addEventListener", "removeEventListener"];
          window.EventTarget
            ? S(window.EventTarget.prototype, a)
            : (S(Node.prototype, a), S(Window.prototype, a)),
            cd
              ? S(
                  Node.prototype,
                  "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(
                    " "
                  )
                )
              : gd(Node.prototype, {
                  parentNode: {
                    get: function () {
                      return (hd.currentNode = this), hd.parentNode();
                    },
                  },
                  firstChild: {
                    get: function () {
                      return (hd.currentNode = this), hd.firstChild();
                    },
                  },
                  lastChild: {
                    get: function () {
                      return (hd.currentNode = this), hd.lastChild();
                    },
                  },
                  previousSibling: {
                    get: function () {
                      return (hd.currentNode = this), hd.previousSibling();
                    },
                  },
                  nextSibling: {
                    get: function () {
                      return (hd.currentNode = this), hd.nextSibling();
                    },
                  },
                  childNodes: {
                    get: function () {
                      var b = [];
                      hd.currentNode = this;
                      for (var c = hd.firstChild(); c; )
                        b.push(c), (c = hd.nextSibling());
                      return b;
                    },
                  },
                  parentElement: {
                    get: function () {
                      return (id.currentNode = this), id.parentNode();
                    },
                  },
                  textContent: {
                    get: function () {
                      switch (this.nodeType) {
                        case Node.ELEMENT_NODE:
                        case Node.DOCUMENT_FRAGMENT_NODE:
                          for (
                            var d,
                              b = document.createTreeWalker(
                                this,
                                NodeFilter.SHOW_TEXT,
                                null,
                                !1
                              ),
                              c = "";
                            (d = b.nextNode());

                          )
                            c += d.nodeValue;
                          return c;
                        default:
                          return this.nodeValue;
                      }
                    },
                    set: function (b) {
                      switch (
                        ((void 0 !== b && null !== b) || (b = ""),
                        this.nodeType)
                      ) {
                        case Node.ELEMENT_NODE:
                        case Node.DOCUMENT_FRAGMENT_NODE:
                          kd(this),
                            (0 < b.length ||
                              this.nodeType === Node.ELEMENT_NODE) &&
                              this.__shady_native_insertBefore(
                                document.createTextNode(b),
                                void 0
                              );
                          break;
                        default:
                          this.nodeValue = b;
                      }
                    },
                  },
                }),
            S(
              Node.prototype,
              "appendChild insertBefore removeChild replaceChild cloneNode contains".split(
                " "
              )
            ),
            S(HTMLElement.prototype, ["parentElement", "contains"]),
            (a = {
              firstElementChild: {
                get: function () {
                  return (id.currentNode = this), id.firstChild();
                },
              },
              lastElementChild: {
                get: function () {
                  return (id.currentNode = this), id.lastChild();
                },
              },
              children: {
                get: function () {
                  var b = [];
                  id.currentNode = this;
                  for (var c = id.firstChild(); c; )
                    b.push(c), (c = id.nextSibling());
                  return Ec(b);
                },
              },
              childElementCount: {
                get: function () {
                  return this.children ? this.children.length : 0;
                },
              },
            }),
            cd
              ? (S(Element.prototype, ld),
                S(Element.prototype, [
                  "previousElementSibling",
                  "nextElementSibling",
                  "innerHTML",
                  "className",
                ]),
                S(HTMLElement.prototype, [
                  "children",
                  "innerHTML",
                  "className",
                ]))
              : (gd(Element.prototype, a),
                gd(Element.prototype, {
                  previousElementSibling: {
                    get: function () {
                      return (id.currentNode = this), id.previousSibling();
                    },
                  },
                  nextElementSibling: {
                    get: function () {
                      return (id.currentNode = this), id.nextSibling();
                    },
                  },
                  innerHTML: {
                    get: function () {
                      return bd(this, Fc);
                    },
                    set: function (b) {
                      var c =
                        "template" === this.localName ? this.content : this;
                      kd(c);
                      var d = this.localName || "div";
                      for (
                        (d =
                          this.namespaceURI &&
                          this.namespaceURI !== jd.namespaceURI
                            ? jd.createElementNS(this.namespaceURI, d)
                            : jd.createElement(d)).innerHTML = b,
                          b = "template" === this.localName ? d.content : d;
                        (d = b.__shady_native_firstChild);

                      )
                        c.__shady_native_insertBefore(d, void 0);
                    },
                  },
                  className: {
                    get: function () {
                      return this.getAttribute("class") || "";
                    },
                    set: function (b) {
                      this.setAttribute("class", b);
                    },
                  },
                })),
            S(
              Element.prototype,
              "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(
                " "
              )
            ),
            S(Element.prototype, md),
            S(HTMLElement.prototype, ["focus", "blur"]),
            window.HTMLTemplateElement &&
              S(window.HTMLTemplateElement.prototype, ["innerHTML"]),
            cd
              ? S(DocumentFragment.prototype, ld)
              : gd(DocumentFragment.prototype, a),
            S(DocumentFragment.prototype, md),
            cd
              ? (S(Document.prototype, ld),
                S(Document.prototype, ["activeElement"]))
              : gd(Document.prototype, a),
            S(Document.prototype, ["importNode", "getElementById"]),
            S(Document.prototype, md);
        })(),
        ef("__shady_"),
        Object.defineProperty(document, "_activeElement", Xe.activeElement),
        P(Window.prototype, $e, "__shady_"),
        N.D
          ? N.ua && P(Element.prototype, Re)
          : (ef(),
            (function () {
              if (
                !wd &&
                Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")
              ) {
                var a = function () {
                  var b = new MouseEvent("click", {
                    bubbles: !0,
                    cancelable: !0,
                    composed: !0,
                  });
                  this.__shady_dispatchEvent(b);
                };
                Element.prototype.click
                  ? (Element.prototype.click = a)
                  : HTMLElement.prototype.click &&
                    (HTMLElement.prototype.click = a);
              }
            })()),
        (function () {
          for (var a in Gd)
            window.__shady_native_addEventListener(
              a,
              function (b) {
                b.__target || (Md(b), Jd(b));
              },
              !0
            );
        })(),
        (window.Event = Rd),
        (window.CustomEvent = Sd),
        (window.MouseEvent = Td),
        (window.ShadowRoot = Pe);
    }
    var Cf = window.Document.prototype.createElement,
      Df = window.Document.prototype.createElementNS,
      Ef = window.Document.prototype.importNode,
      Ff = window.Document.prototype.prepend,
      Gf = window.Document.prototype.append,
      Hf = window.DocumentFragment.prototype.prepend,
      If = window.DocumentFragment.prototype.append,
      Jf = window.Node.prototype.cloneNode,
      Kf = window.Node.prototype.appendChild,
      Lf = window.Node.prototype.insertBefore,
      Mf = window.Node.prototype.removeChild,
      Nf = window.Node.prototype.replaceChild,
      Of = Object.getOwnPropertyDescriptor(
        window.Node.prototype,
        "textContent"
      ),
      Pf = window.Element.prototype.attachShadow,
      Qf = Object.getOwnPropertyDescriptor(
        window.Element.prototype,
        "innerHTML"
      ),
      Rf = window.Element.prototype.getAttribute,
      Sf = window.Element.prototype.setAttribute,
      Tf = window.Element.prototype.removeAttribute,
      Uf = window.Element.prototype.getAttributeNS,
      Vf = window.Element.prototype.setAttributeNS,
      Wf = window.Element.prototype.removeAttributeNS,
      Xf = window.Element.prototype.insertAdjacentElement,
      Yf = window.Element.prototype.insertAdjacentHTML,
      Zf = window.Element.prototype.prepend,
      $f = window.Element.prototype.append,
      ag = window.Element.prototype.before,
      bg = window.Element.prototype.after,
      cg = window.Element.prototype.replaceWith,
      dg = window.Element.prototype.remove,
      eg = window.HTMLElement,
      fg = Object.getOwnPropertyDescriptor(
        window.HTMLElement.prototype,
        "innerHTML"
      ),
      gg = window.HTMLElement.prototype.insertAdjacentElement,
      hg = window.HTMLElement.prototype.insertAdjacentHTML,
      ig = new Set();
    function jg(a) {
      var b = ig.has(a);
      return (a = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a)), !b && a;
    }
    "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph"
      .split(" ")
      .forEach(function (a) {
        return ig.add(a);
      });
    var kg = document.contains
      ? document.contains.bind(document)
      : document.documentElement.contains.bind(document.documentElement);
    function T(a) {
      var b = a.isConnected;
      if (void 0 !== b) return b;
      if (kg(a)) return !0;
      for (; a && !(a.__CE_isImportDocument || a instanceof Document); )
        a =
          a.parentNode ||
          (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
      return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
    }
    function lg(a) {
      var b = a.children;
      if (b) return Array.prototype.slice.call(b);
      for (b = [], a = a.firstChild; a; a = a.nextSibling)
        a.nodeType === Node.ELEMENT_NODE && b.push(a);
      return b;
    }
    function mg(a, b) {
      for (; b && b !== a && !b.nextSibling; ) b = b.parentNode;
      return b && b !== a ? b.nextSibling : null;
    }
    function og() {
      var a = !(
          null === pg ||
          void 0 === pg ||
          !pg.noDocumentConstructionObserver
        ),
        b = !(null === pg || void 0 === pg || !pg.shadyDomFastWalk);
      (this.X = []),
        (this.a = []),
        (this.R = !1),
        (this.shadyDomFastWalk = b),
        (this.jb = !a);
    }
    function qg(a, b, c, d) {
      var e = window.ShadyDom;
      if (a.shadyDomFastWalk && e && e.inUse) {
        if ((b.nodeType === Node.ELEMENT_NODE && c(b), b.querySelectorAll))
          for (
            a = e.nativeMethods.querySelectorAll.call(b, "*"), b = 0;
            b < a.length;
            b++
          )
            c(a[b]);
      } else
        !(function ng(a, b, c) {
          for (var d = a; d; ) {
            if (d.nodeType === Node.ELEMENT_NODE) {
              var e = d;
              b(e);
              var f = e.localName;
              if ("link" === f && "import" === e.getAttribute("rel")) {
                if (
                  ((d = e.import),
                  void 0 === c && (c = new Set()),
                  d instanceof Node && !c.has(d))
                )
                  for (c.add(d), d = d.firstChild; d; d = d.nextSibling)
                    ng(d, b, c);
                d = mg(a, e);
                continue;
              }
              if ("template" === f) {
                d = mg(a, e);
                continue;
              }
              if ((e = e.__CE_shadowRoot))
                for (e = e.firstChild; e; e = e.nextSibling) ng(e, b, c);
            }
            d = d.firstChild ? d.firstChild : mg(a, d);
          }
        })(b, c, d);
    }
    function tg(a, b) {
      a.R &&
        qg(a, b, function (c) {
          return ug(a, c);
        });
    }
    function ug(a, b) {
      if (a.R && !b.__CE_patched) {
        b.__CE_patched = !0;
        for (var c = 0; c < a.X.length; c++) a.X[c](b);
        for (c = 0; c < a.a.length; c++) a.a[c](b);
      }
    }
    function vg(a, b) {
      var c = [];
      for (
        qg(a, b, function (e) {
          return c.push(e);
        }),
          b = 0;
        b < c.length;
        b++
      ) {
        var d = c[b];
        1 === d.__CE_state ? a.connectedCallback(d) : wg(a, d);
      }
    }
    function xg(a, b) {
      var c = [];
      for (
        qg(a, b, function (e) {
          return c.push(e);
        }),
          b = 0;
        b < c.length;
        b++
      ) {
        var d = c[b];
        1 === d.__CE_state && a.disconnectedCallback(d);
      }
    }
    function yg(a, b, c) {
      var d = (c = void 0 === c ? {} : c).kb,
        e =
          c.upgrade ||
          function (g) {
            return wg(a, g);
          },
        f = [];
      for (
        qg(
          a,
          b,
          function (g) {
            if (
              (a.R && ug(a, g),
              "link" === g.localName && "import" === g.getAttribute("rel"))
            ) {
              var h = g.import;
              h instanceof Node &&
                ((h.__CE_isImportDocument = !0),
                (h.__CE_registry = document.__CE_registry)),
                h && "complete" === h.readyState
                  ? (h.__CE_documentLoadHandled = !0)
                  : g.addEventListener("load", function () {
                      var k = g.import;
                      if (!k.__CE_documentLoadHandled) {
                        k.__CE_documentLoadHandled = !0;
                        var l = new Set();
                        d &&
                          (d.forEach(function (m) {
                            return l.add(m);
                          }),
                          l.delete(k)),
                          yg(a, k, { kb: l, upgrade: e });
                      }
                    });
            } else f.push(g);
          },
          d
        ),
          b = 0;
        b < f.length;
        b++
      )
        e(f[b]);
    }
    function wg(a, b) {
      try {
        var c = b.ownerDocument,
          d = c.__CE_registry,
          e =
            d && (c.defaultView || c.__CE_isImportDocument)
              ? zg(d, b.localName)
              : void 0;
        if (e && void 0 === b.__CE_state) {
          e.constructionStack.push(b);
          try {
            try {
              if (new e.constructorFunction() !== b)
                throw Error(
                  "The custom element constructor did not produce the element being upgraded."
                );
            } finally {
              e.constructionStack.pop();
            }
          } catch (k) {
            throw ((b.__CE_state = 2), k);
          }
          if (
            ((b.__CE_state = 1),
            (b.__CE_definition = e),
            e.attributeChangedCallback && b.hasAttributes())
          ) {
            var f = e.observedAttributes;
            for (e = 0; e < f.length; e++) {
              var g = f[e],
                h = b.getAttribute(g);
              null !== h && a.attributeChangedCallback(b, g, null, h, null);
            }
          }
          T(b) && a.connectedCallback(b);
        }
      } catch (k) {
        Ag(k);
      }
    }
    function Bg(a, b, c, d) {
      var e = b.__CE_registry;
      if (
        e &&
        (null === d || "http://www.w3.org/1999/xhtml" === d) &&
        (e = zg(e, c))
      )
        try {
          var f = new e.constructorFunction();
          if (void 0 === f.__CE_state || void 0 === f.__CE_definition)
            throw Error(
              "Failed to construct '" +
                c +
                "': The returned value was not constructed with the HTMLElement constructor."
            );
          if ("http://www.w3.org/1999/xhtml" !== f.namespaceURI)
            throw Error(
              "Failed to construct '" +
                c +
                "': The constructed element's namespace must be the HTML namespace."
            );
          if (f.hasAttributes())
            throw Error(
              "Failed to construct '" +
                c +
                "': The constructed element must not have any attributes."
            );
          if (null !== f.firstChild)
            throw Error(
              "Failed to construct '" +
                c +
                "': The constructed element must not have any children."
            );
          if (null !== f.parentNode)
            throw Error(
              "Failed to construct '" +
                c +
                "': The constructed element must not have a parent node."
            );
          if (f.ownerDocument !== b)
            throw Error(
              "Failed to construct '" +
                c +
                "': The constructed element's owner document is incorrect."
            );
          if (f.localName !== c)
            throw Error(
              "Failed to construct '" +
                c +
                "': The constructed element's local name is incorrect."
            );
          return f;
        } catch (g) {
          return (
            Ag(g),
            (b = null === d ? Cf.call(b, c) : Df.call(b, d, c)),
            Object.setPrototypeOf(b, HTMLUnknownElement.prototype),
            (b.__CE_state = 2),
            (b.__CE_definition = void 0),
            ug(a, b),
            b
          );
        }
      return ug(a, (b = null === d ? Cf.call(b, c) : Df.call(b, d, c))), b;
    }
    function Ag(a) {
      var b = a.message,
        c = a.sourceURL || a.fileName || "",
        d = a.line || a.lineNumber || 0,
        e = a.column || a.columnNumber || 0,
        f = void 0;
      void 0 === ErrorEvent.prototype.initErrorEvent
        ? (f = new ErrorEvent("error", {
            cancelable: !0,
            message: b,
            filename: c,
            lineno: d,
            colno: e,
            error: a,
          }))
        : ((f = document.createEvent("ErrorEvent")).initErrorEvent(
            "error",
            !1,
            !0,
            b,
            c,
            d
          ),
          (f.preventDefault = function () {
            Object.defineProperty(this, "defaultPrevented", {
              configurable: !0,
              get: function () {
                return !0;
              },
            });
          })),
        void 0 === f.error &&
          Object.defineProperty(f, "error", {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return a;
            },
          }),
        window.dispatchEvent(f),
        f.defaultPrevented || console.error(a);
    }
    function Cg() {
      var a = this;
      (this.C = void 0),
        (this.Ca = new Promise(function (b) {
          a.a = b;
        }));
    }
    function Dg(a) {
      var b = document;
      (this.S = void 0),
        (this.M = a),
        (this.a = b),
        yg(this.M, this.a),
        "loading" === this.a.readyState &&
          ((this.S = new MutationObserver(this.b.bind(this))),
          this.S.observe(this.a, { childList: !0, subtree: !0 }));
    }
    function Eg(a) {
      a.S && a.S.disconnect();
    }
    function U(a) {
      (this.fa = new Map()),
        (this.ga = new Map()),
        (this.xa = new Map()),
        (this.na = !1),
        (this.qa = new Map()),
        (this.ea = function (b) {
          return b();
        }),
        (this.P = !1),
        (this.ha = []),
        (this.M = a),
        (this.ya = a.jb ? new Dg(a) : void 0);
    }
    function Fg(a, b) {
      if (!jg(b))
        throw new SyntaxError("The element name '" + b + "' is not valid.");
      if (zg(a, b))
        throw Error(
          "A custom element with name '" + b + "' has already been defined."
        );
      if (a.na) throw Error("A custom element is already being defined.");
    }
    function Hg(a, b, c) {
      var d;
      a.na = !0;
      try {
        var e = c.prototype;
        if (!(e instanceof Object))
          throw new TypeError(
            "The custom element constructor's prototype is not an object."
          );
        var f = function (m) {
            var q = e[m];
            if (void 0 !== q && !(q instanceof Function))
              throw Error("The '" + m + "' callback must be a function.");
            return q;
          },
          g = f("connectedCallback"),
          h = f("disconnectedCallback"),
          k = f("adoptedCallback"),
          l =
            ((d = f("attributeChangedCallback")) && c.observedAttributes) || [];
      } catch (m) {
        throw m;
      } finally {
        a.na = !1;
      }
      return (
        (c = {
          localName: b,
          constructorFunction: c,
          connectedCallback: g,
          disconnectedCallback: h,
          adoptedCallback: k,
          attributeChangedCallback: d,
          observedAttributes: l,
          constructionStack: [],
        }),
        a.ga.set(b, c),
        a.xa.set(c.constructorFunction, c),
        c
      );
    }
    function Gg(a) {
      if (!1 !== a.P) {
        a.P = !1;
        for (var b = [], c = a.ha, d = new Map(), e = 0; e < c.length; e++)
          d.set(c[e], []);
        for (
          yg(a.M, document, {
            upgrade: function (k) {
              if (void 0 === k.__CE_state) {
                var l = k.localName,
                  m = d.get(l);
                m ? m.push(k) : a.ga.has(l) && b.push(k);
              }
            },
          }),
            e = 0;
          e < b.length;
          e++
        )
          wg(a.M, b[e]);
        for (e = 0; e < c.length; e++) {
          for (var f = c[e], g = d.get(f), h = 0; h < g.length; h++)
            wg(a.M, g[h]);
          (f = a.qa.get(f)) && f.resolve(void 0);
        }
        c.length = 0;
      }
    }
    function zg(a, b) {
      var c = a.ga.get(b);
      if (c) return c;
      if ((c = a.fa.get(b))) {
        a.fa.delete(b);
        try {
          return Hg(a, b, c());
        } catch (d) {
          Ag(d);
        }
      }
    }
    function Ig(a, b, c) {
      function d(e) {
        return function (f) {
          for (var g = [], h = 0; h < arguments.length; ++h)
            g[h] = arguments[h];
          h = [];
          for (var k = [], l = 0; l < g.length; l++) {
            var m = g[l];
            if (
              (m instanceof Element && T(m) && k.push(m),
              m instanceof DocumentFragment)
            )
              for (m = m.firstChild; m; m = m.nextSibling) h.push(m);
            else h.push(m);
          }
          for (e.apply(this, g), g = 0; g < k.length; g++) xg(a, k[g]);
          if (T(this))
            for (g = 0; g < h.length; g++)
              (k = h[g]) instanceof Element && vg(a, k);
        };
      }
      void 0 !== c.prepend && (b.prepend = d(c.prepend)),
        void 0 !== c.append && (b.append = d(c.append));
    }
    function Lg(a) {
      function b(e, f) {
        Object.defineProperty(e, "innerHTML", {
          enumerable: f.enumerable,
          configurable: !0,
          get: f.get,
          set: function (g) {
            var h = this,
              k = void 0;
            if (
              (T(this) &&
                ((k = []),
                qg(a, this, function (q) {
                  q !== h && k.push(q);
                })),
              f.set.call(this, g),
              k)
            )
              for (var l = 0; l < k.length; l++) {
                var m = k[l];
                1 === m.__CE_state && a.disconnectedCallback(m);
              }
            return (
              this.ownerDocument.__CE_registry ? yg(a, this) : tg(a, this), g
            );
          },
        });
      }
      function c(e, f) {
        e.insertAdjacentElement = function (g, h) {
          var k = T(h);
          return (g = f.call(this, g, h)), k && xg(a, h), T(g) && vg(a, h), g;
        };
      }
      function d(e, f) {
        function g(h, k) {
          for (var l = []; h !== k; h = h.nextSibling) l.push(h);
          for (k = 0; k < l.length; k++) yg(a, l[k]);
        }
        e.insertAdjacentHTML = function (h, k) {
          if ("beforebegin" === (h = h.toLowerCase())) {
            var l = this.previousSibling;
            f.call(this, h, k), g(l || this.parentNode.firstChild, this);
          } else if ("afterbegin" === h)
            (l = this.firstChild), f.call(this, h, k), g(this.firstChild, l);
          else if ("beforeend" === h)
            (l = this.lastChild),
              f.call(this, h, k),
              g(l || this.firstChild, null);
          else {
            if ("afterend" !== h)
              throw new SyntaxError(
                "The value provided (" +
                  String(h) +
                  ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'."
              );
            (l = this.nextSibling), f.call(this, h, k), g(this.nextSibling, l);
          }
        };
      }
      Pf &&
        (Element.prototype.attachShadow = function (e) {
          if (((e = Pf.call(this, e)), a.R && !e.__CE_patched)) {
            e.__CE_patched = !0;
            for (var f = 0; f < a.X.length; f++) a.X[f](e);
          }
          return (this.__CE_shadowRoot = e);
        }),
        Qf && Qf.get
          ? b(Element.prototype, Qf)
          : fg && fg.get
          ? b(HTMLElement.prototype, fg)
          : (function (a, b) {
              (a.R = !0), a.a.push(b);
            })(a, function (e) {
              b(e, {
                enumerable: !0,
                configurable: !0,
                get: function () {
                  return Jf.call(this, !0).innerHTML;
                },
                set: function (f) {
                  var g = "template" === this.localName,
                    h = g ? this.content : this,
                    k = Df.call(document, this.namespaceURI, this.localName);
                  for (k.innerHTML = f; 0 < h.childNodes.length; )
                    Mf.call(h, h.childNodes[0]);
                  for (f = g ? k.content : k; 0 < f.childNodes.length; )
                    Kf.call(h, f.childNodes[0]);
                },
              });
            }),
        (Element.prototype.setAttribute = function (e, f) {
          if (1 !== this.__CE_state) return Sf.call(this, e, f);
          var g = Rf.call(this, e);
          Sf.call(this, e, f),
            (f = Rf.call(this, e)),
            a.attributeChangedCallback(this, e, g, f, null);
        }),
        (Element.prototype.setAttributeNS = function (e, f, g) {
          if (1 !== this.__CE_state) return Vf.call(this, e, f, g);
          var h = Uf.call(this, e, f);
          Vf.call(this, e, f, g),
            (g = Uf.call(this, e, f)),
            a.attributeChangedCallback(this, f, h, g, e);
        }),
        (Element.prototype.removeAttribute = function (e) {
          if (1 !== this.__CE_state) return Tf.call(this, e);
          var f = Rf.call(this, e);
          Tf.call(this, e),
            null !== f && a.attributeChangedCallback(this, e, f, null, null);
        }),
        (Element.prototype.removeAttributeNS = function (e, f) {
          if (1 !== this.__CE_state) return Wf.call(this, e, f);
          var g = Uf.call(this, e, f);
          Wf.call(this, e, f);
          var h = Uf.call(this, e, f);
          g !== h && a.attributeChangedCallback(this, f, g, h, e);
        }),
        gg ? c(HTMLElement.prototype, gg) : Xf && c(Element.prototype, Xf),
        hg ? d(HTMLElement.prototype, hg) : Yf && d(Element.prototype, Yf),
        Ig(a, Element.prototype, { prepend: Zf, append: $f }),
        (function (a) {
          function b(d) {
            return function (e) {
              for (var f = [], g = 0; g < arguments.length; ++g)
                f[g] = arguments[g];
              g = [];
              for (var h = [], k = 0; k < f.length; k++) {
                var l = f[k];
                if (
                  (l instanceof Element && T(l) && h.push(l),
                  l instanceof DocumentFragment)
                )
                  for (l = l.firstChild; l; l = l.nextSibling) g.push(l);
                else g.push(l);
              }
              for (d.apply(this, f), f = 0; f < h.length; f++) xg(a, h[f]);
              if (T(this))
                for (f = 0; f < g.length; f++)
                  (h = g[f]) instanceof Element && vg(a, h);
            };
          }
          var c = Element.prototype;
          void 0 !== ag && (c.before = b(ag)),
            void 0 !== bg && (c.after = b(bg)),
            void 0 !== cg &&
              (c.replaceWith = function (d) {
                for (var e = [], f = 0; f < arguments.length; ++f)
                  e[f] = arguments[f];
                f = [];
                for (var g = [], h = 0; h < e.length; h++) {
                  var k = e[h];
                  if (
                    (k instanceof Element && T(k) && g.push(k),
                    k instanceof DocumentFragment)
                  )
                    for (k = k.firstChild; k; k = k.nextSibling) f.push(k);
                  else f.push(k);
                }
                for (h = T(this), cg.apply(this, e), e = 0; e < g.length; e++)
                  xg(a, g[e]);
                if (h)
                  for (xg(a, this), e = 0; e < f.length; e++)
                    (g = f[e]) instanceof Element && vg(a, g);
              }),
            void 0 !== dg &&
              (c.remove = function () {
                var d = T(this);
                dg.call(this), d && xg(a, this);
              });
        })(a);
    }
    (og.prototype.connectedCallback = function (a) {
      var b = a.__CE_definition;
      if (b.connectedCallback)
        try {
          b.connectedCallback.call(a);
        } catch (c) {
          Ag(c);
        }
    }),
      (og.prototype.disconnectedCallback = function (a) {
        var b = a.__CE_definition;
        if (b.disconnectedCallback)
          try {
            b.disconnectedCallback.call(a);
          } catch (c) {
            Ag(c);
          }
      }),
      (og.prototype.attributeChangedCallback = function (a, b, c, d, e) {
        var f = a.__CE_definition;
        if (f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b))
          try {
            f.attributeChangedCallback.call(a, b, c, d, e);
          } catch (g) {
            Ag(g);
          }
      }),
      (Cg.prototype.resolve = function (a) {
        if (this.C) throw Error("Already resolved.");
        (this.C = a), this.a(a);
      }),
      (Dg.prototype.b = function (a) {
        var b = this.a.readyState;
        for (
          ("interactive" !== b && "complete" !== b) || Eg(this), b = 0;
          b < a.length;
          b++
        )
          for (var c = a[b].addedNodes, d = 0; d < c.length; d++)
            yg(this.M, c[d]);
      }),
      ((v = U.prototype).$a = function (a, b) {
        var c = this;
        if (!(b instanceof Function))
          throw new TypeError(
            "Custom element constructor getters must be functions."
          );
        Fg(this, a),
          this.fa.set(a, b),
          this.ha.push(a),
          this.P ||
            ((this.P = !0),
            this.ea(function () {
              return Gg(c);
            }));
      }),
      (v.define = function (a, b) {
        var c = this;
        if (!(b instanceof Function))
          throw new TypeError("Custom element constructors must be functions.");
        Fg(this, a),
          Hg(this, a, b),
          this.ha.push(a),
          this.P ||
            ((this.P = !0),
            this.ea(function () {
              return Gg(c);
            }));
      }),
      (v.upgrade = function (a) {
        yg(this.M, a);
      }),
      (v.get = function (a) {
        if ((a = zg(this, a))) return a.constructorFunction;
      }),
      (v.whenDefined = function (a) {
        if (!jg(a))
          return Promise.reject(
            new SyntaxError("'" + a + "' is not a valid custom element name.")
          );
        var b = this.qa.get(a);
        if (b) return b.Ca;
        (b = new Cg()), this.qa.set(a, b);
        var c = this.ga.has(a) || this.fa.has(a);
        return (
          (a = -1 === this.ha.indexOf(a)), c && a && b.resolve(void 0), b.Ca
        );
      }),
      (v.polyfillWrapFlushCallback = function (a) {
        this.ya && Eg(this.ya);
        var b = this.ea;
        this.ea = function (c) {
          return a(function () {
            return b(c);
          });
        };
      }),
      (window.CustomElementRegistry = U),
      (U.prototype.define = U.prototype.define),
      (U.prototype.upgrade = U.prototype.upgrade),
      (U.prototype.get = U.prototype.get),
      (U.prototype.whenDefined = U.prototype.whenDefined),
      (U.prototype.polyfillDefineLazy = U.prototype.$a),
      (U.prototype.polyfillWrapFlushCallback =
        U.prototype.polyfillWrapFlushCallback);
    var Mg = {};
    var pg = window.customElements;
    function Pg() {
      var a = new og();
      !(function (a) {
        function b() {
          var c = this.constructor,
            d = document.__CE_registry.xa.get(c);
          if (!d)
            throw Error(
              "Failed to construct a custom element: The constructor was not registered with `customElements`."
            );
          var e = d.constructionStack;
          if (0 === e.length)
            return (
              (e = Cf.call(document, d.localName)),
              Object.setPrototypeOf(e, c.prototype),
              (e.__CE_state = 1),
              (e.__CE_definition = d),
              ug(a, e),
              e
            );
          var f = e.length - 1,
            g = e[f];
          if (g === Mg)
            throw Error(
              "Failed to construct '" +
                d.localName +
                "': This element was already constructed."
            );
          return (
            (e[f] = Mg), Object.setPrototypeOf(g, c.prototype), ug(a, g), g
          );
        }
        (b.prototype = eg.prototype),
          Object.defineProperty(HTMLElement.prototype, "constructor", {
            writable: !0,
            configurable: !0,
            enumerable: !1,
            value: b,
          }),
          (window.HTMLElement = b);
      })(a),
        (function (a) {
          (Document.prototype.createElement = function (b) {
            return Bg(a, this, b, null);
          }),
            (Document.prototype.importNode = function (b, c) {
              return (
                (b = Ef.call(this, b, !!c)),
                this.__CE_registry ? yg(a, b) : tg(a, b),
                b
              );
            }),
            (Document.prototype.createElementNS = function (b, c) {
              return Bg(a, this, c, b);
            }),
            Ig(a, Document.prototype, { prepend: Ff, append: Gf });
        })(a),
        Ig(a, DocumentFragment.prototype, { prepend: Hf, append: If }),
        (function (a) {
          function b(c, d) {
            Object.defineProperty(c, "textContent", {
              enumerable: d.enumerable,
              configurable: !0,
              get: d.get,
              set: function (e) {
                if (this.nodeType === Node.TEXT_NODE) d.set.call(this, e);
                else {
                  var f = void 0;
                  if (this.firstChild) {
                    var g = this.childNodes,
                      h = g.length;
                    if (0 < h && T(this)) {
                      f = Array(h);
                      for (var k = 0; k < h; k++) f[k] = g[k];
                    }
                  }
                  if ((d.set.call(this, e), f))
                    for (e = 0; e < f.length; e++) xg(a, f[e]);
                }
              },
            });
          }
          (Node.prototype.insertBefore = function (c, d) {
            if (c instanceof DocumentFragment) {
              var e = lg(c);
              if (((c = Lf.call(this, c, d)), T(this)))
                for (d = 0; d < e.length; d++) vg(a, e[d]);
              return c;
            }
            return (
              (e = c instanceof Element && T(c)),
              (d = Lf.call(this, c, d)),
              e && xg(a, c),
              T(this) && vg(a, c),
              d
            );
          }),
            (Node.prototype.appendChild = function (c) {
              if (c instanceof DocumentFragment) {
                var d = lg(c);
                if (((c = Kf.call(this, c)), T(this)))
                  for (var e = 0; e < d.length; e++) vg(a, d[e]);
                return c;
              }
              return (
                (d = c instanceof Element && T(c)),
                (e = Kf.call(this, c)),
                d && xg(a, c),
                T(this) && vg(a, c),
                e
              );
            }),
            (Node.prototype.cloneNode = function (c) {
              return (
                (c = Jf.call(this, !!c)),
                this.ownerDocument.__CE_registry ? yg(a, c) : tg(a, c),
                c
              );
            }),
            (Node.prototype.removeChild = function (c) {
              var d = c instanceof Element && T(c),
                e = Mf.call(this, c);
              return d && xg(a, c), e;
            }),
            (Node.prototype.replaceChild = function (c, d) {
              if (c instanceof DocumentFragment) {
                var e = lg(c);
                if (((c = Nf.call(this, c, d)), T(this)))
                  for (xg(a, d), d = 0; d < e.length; d++) vg(a, e[d]);
                return c;
              }
              e = c instanceof Element && T(c);
              var f = Nf.call(this, c, d),
                g = T(this);
              return g && xg(a, d), e && xg(a, c), g && vg(a, c), f;
            }),
            Of && Of.get
              ? b(Node.prototype, Of)
              : (function (a, b) {
                  (a.R = !0), a.X.push(b);
                })(a, function (c) {
                  b(c, {
                    enumerable: !0,
                    configurable: !0,
                    get: function () {
                      for (
                        var d = [], e = this.firstChild;
                        e;
                        e = e.nextSibling
                      )
                        e.nodeType !== Node.COMMENT_NODE &&
                          d.push(e.textContent);
                      return d.join("");
                    },
                    set: function (d) {
                      for (; this.firstChild; ) Mf.call(this, this.firstChild);
                      null != d &&
                        "" !== d &&
                        Kf.call(this, document.createTextNode(d));
                    },
                  });
                });
        })(a),
        Lg(a),
        (a = new U(a)),
        (document.__CE_registry = a),
        Object.defineProperty(window, "customElements", {
          configurable: !0,
          enumerable: !0,
          value: a,
        });
    }
    function Qg() {
      (this.end = this.start = 0),
        (this.rules = this.parent = this.previous = null),
        (this.cssText = this.parsedCssText = ""),
        (this.atRule = !1),
        (this.type = 0),
        (this.parsedSelector = this.selector = this.keyframesName = "");
    }
    function Rg(a) {
      var b = (a = a.replace(Sg, "").replace(Tg, "")),
        c = new Qg();
      (c.start = 0), (c.end = b.length);
      for (var d = c, e = 0, f = b.length; e < f; e++)
        if ("{" === b[e]) {
          d.rules || (d.rules = []);
          var g = d,
            h = g.rules[g.rules.length - 1] || null;
          ((d = new Qg()).start = e + 1),
            (d.parent = g),
            (d.previous = h),
            g.rules.push(d);
        } else "}" === b[e] && ((d.end = e + 1), (d = d.parent || c));
      return (function Ug(a, b) {
        var c = b.substring(a.start, a.end - 1);
        a.parsedCssText = a.cssText = c.trim();
        a.parent &&
          ((c = b.substring(
            a.previous ? a.previous.end : a.parent.start,
            a.start - 1
          )),
          (c = (function (a) {
            return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (b, c) {
              for (c = 6 - (b = c).length; c--; ) b = "0" + b;
              return "\\" + b;
            });
          })(c)),
          (c = c.replace(Wg, " ")),
          (c = c.substring(c.lastIndexOf(";") + 1)),
          (c = a.parsedSelector = a.selector = c.trim()),
          (a.atRule = 0 === c.indexOf("@")),
          a.atRule
            ? 0 === c.indexOf("@media")
              ? (a.type = Xg)
              : c.match(Yg) &&
                ((a.type = Zg), (a.keyframesName = a.selector.split(Wg).pop()))
            : (a.type = 0 === c.indexOf("--") ? $g : ah));
        if ((c = a.rules))
          for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++)
            Ug(f, b);
        return a;
      })(c, a);
    }
    (pg &&
      !pg.forcePolyfill &&
      "function" == typeof pg.define &&
      "function" == typeof pg.get) ||
      Pg(),
      (window.__CE_installPolyfill = Pg);
    var gh,
      ih,
      ah = 1,
      Zg = 7,
      Xg = 4,
      $g = 1e3,
      Sg = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
      Tg = /@import[^;]*;/gim,
      ch = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      dh = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      eh = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      fh = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      Yg = /^@[^\s]*keyframes/,
      Wg = /\s+/g,
      V = !(window.ShadyDOM && window.ShadyDOM.inUse);
    function hh(a) {
      gh =
        (!a || !a.shimcssproperties) &&
        (V ||
          !(
            navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) ||
            !window.CSS ||
            !CSS.supports ||
            !CSS.supports("box-shadow", "0 0 0 var(--foo)")
          ));
    }
    window.ShadyCSS &&
      void 0 !== window.ShadyCSS.cssBuild &&
      (ih = window.ShadyCSS.cssBuild);
    var jh = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
    window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss
      ? (gh = window.ShadyCSS.nativeCss)
      : window.ShadyCSS
      ? (hh(window.ShadyCSS), (window.ShadyCSS = void 0))
      : hh(window.WebComponents && window.WebComponents.flags);
    var X = gh,
      kh =
        /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      lh = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      mh = /(--[\w-]+)\s*([:,;)]|$)/gi,
      nh = /(animation\s*:)|(animation-name\s*:)/,
      oh = /@media\s(.*)/,
      ph = /\{[^}]*\}/g,
      qh = new Set();
    function rh(a, b) {
      return a
        ? ("string" == typeof a && (a = Rg(a)),
          b && sh(a, b),
          (function bh(a, b, c) {
            c = void 0 === c ? "" : c;
            var d = "";
            if (a.cssText || a.rules) {
              var f,
                e = a.rules;
              if (
                ((f = e) &&
                  (f = !(
                    (f = e[0]) &&
                    f.selector &&
                    0 === f.selector.indexOf("--")
                  )),
                f)
              ) {
                f = 0;
                for (var g = e.length, h = void 0; f < g && (h = e[f]); f++)
                  d = bh(h, b, d);
              } else
                (b = b
                  ? a.cssText
                  : (b = (b = a.cssText).replace(ch, "").replace(dh, ""))
                      .replace(eh, "")
                      .replace(fh, "")),
                  (d = b.trim()) && (d = "  " + d + "\n");
            }
            return (
              d &&
                (a.selector && (c += a.selector + " {\n"),
                (c += d),
                a.selector && (c += "}\n\n")),
              c
            );
          })(a, X))
        : "";
    }
    function th(a) {
      return (
        !a.__cssRules && a.textContent && (a.__cssRules = Rg(a.textContent)),
        a.__cssRules || null
      );
    }
    function uh(a) {
      return !!a.parent && a.parent.type === Zg;
    }
    function sh(a, b, c, d) {
      if (a) {
        var e = !1,
          f = a.type;
        if (d && f === Xg) {
          var g = a.selector.match(oh);
          g && (window.matchMedia(g[1]).matches || (e = !0));
        }
        if (
          (f === ah ? b(a) : c && f === Zg ? c(a) : f === $g && (e = !0),
          (a = a.rules) && !e)
        )
          for (e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++)
            sh(g, b, c, d);
      }
    }
    function vh(a, b, c, d) {
      var e = document.createElement("style");
      return (
        b && e.setAttribute("scope", b), (e.textContent = a), wh(e, c, d), e
      );
    }
    var xh = null;
    function yh(a) {
      a = document.createComment(" Shady DOM styles for " + a + " ");
      var b = document.head;
      return (
        b.insertBefore(a, (xh ? xh.nextSibling : null) || b.firstChild),
        (xh = a)
      );
    }
    function wh(a, b, c) {
      (b = b || document.head).insertBefore(
        a,
        (c && c.nextSibling) || b.firstChild
      ),
        xh
          ? a.compareDocumentPosition(xh) ===
              Node.DOCUMENT_POSITION_PRECEDING && (xh = a)
          : (xh = a);
    }
    function Ah(a, b) {
      for (var c = 0, d = a.length; b < d; b++)
        if ("(" === a[b]) c++;
        else if (")" === a[b] && 0 == --c) return b;
      return -1;
    }
    function Ch(a, b) {
      V
        ? a.setAttribute("class", b)
        : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
    }
    var Dh =
      (window.ShadyDOM && window.ShadyDOM.wrap) ||
      function (a) {
        return a;
      };
    function Eh(a) {
      var b = a.localName,
        c = "";
      return (
        b
          ? -1 < b.indexOf("-") ||
            ((c = b), (b = (a.getAttribute && a.getAttribute("is")) || ""))
          : ((b = a.is), (c = a.extends)),
        { is: b, ca: c }
      );
    }
    function Fh(a) {
      for (var b = [], c = "", d = 0; 0 <= d && d < a.length; d++)
        if ("(" === a[d]) {
          var e = Ah(a, d);
          (c += a.slice(d, e + 1)), (d = e);
        } else "," === a[d] ? (b.push(c), (c = "")) : (c += a[d]);
      return c && b.push(c), b;
    }
    function Gh(a) {
      if (void 0 !== ih) return ih;
      if (void 0 === a.__cssBuild) {
        var b = a.getAttribute("css-build");
        if (b) a.__cssBuild = b;
        else {
          if (
            "" !==
            (b =
              (b =
                "template" === a.localName
                  ? a.content.firstChild
                  : a.firstChild) instanceof Comment &&
              "css-build" === (b = b.textContent.trim().split(":"))[0]
                ? b[1]
                : "")
          ) {
            var c =
              "template" === a.localName ? a.content.firstChild : a.firstChild;
            c.parentNode.removeChild(c);
          }
          a.__cssBuild = b;
        }
      }
      return a.__cssBuild || "";
    }
    function Hh(a) {
      return (
        !("" === (a = void 0 === a ? "" : a) || !X) &&
        (V ? "shadow" === a : "shady" === a)
      );
    }
    function Ih() {}
    function Kh(a, b, c) {
      var d;
      if (
        (b.nodeType === Node.ELEMENT_NODE && c(b),
        (d =
          "template" === b.localName
            ? (b.content || b._content || b).childNodes
            : b.children || b.childNodes))
      )
        for (b = 0; b < d.length; b++) Kh(a, d[b], c);
    }
    function Mh(a, b, c) {
      if (b)
        if (a.classList)
          c
            ? (a.classList.remove("style-scope"), a.classList.remove(b))
            : (a.classList.add("style-scope"), a.classList.add(b));
        else if (a.getAttribute) {
          var d = a.getAttribute("class");
          c
            ? d && Ch(a, (b = d.replace("style-scope", "").replace(b, "")))
            : Ch(a, (d ? d + " " : "") + "style-scope " + b);
        }
    }
    function Nh(a, b, c) {
      Kh(Lh, a, function (d) {
        Mh(d, b, !0), Mh(d, c);
      });
    }
    function Oh(a, b) {
      Kh(Lh, a, function (c) {
        Mh(c, b || "", !0);
      });
    }
    function Ph(a, b, c, d, e) {
      var f = Lh;
      return (
        "" === (e = void 0 === e ? "" : e) &&
          (V || "shady" === (void 0 === d ? "" : d)
            ? (e = rh(b, c))
            : (e =
                (function (a, b, c, d, e) {
                  var f = Rh(c, d);
                  return (
                    (c = c ? "." + c : ""),
                    rh(b, function (g) {
                      g.c ||
                        ((g.selector = g.w = Sh(a, g, a.b, c, f)), (g.c = !0)),
                        e && e(g, c, f);
                    })
                  );
                })(f, b, (a = Eh(a)).is, a.ca, c) + "\n\n")),
        e.trim()
      );
    }
    function Rh(a, b) {
      return b ? "[is=" + a + "]" : a;
    }
    function Sh(a, b, c, d, e) {
      var f = Fh(b.selector);
      if (!uh(b)) {
        b = 0;
        for (var g = f.length, h = void 0; b < g && (h = f[b]); b++)
          f[b] = c.call(a, h, d, e);
      }
      return f
        .filter(function (k) {
          return !!k;
        })
        .join(",");
    }
    function Th(a) {
      return a.replace(Uh, function (b, c, d) {
        return (
          -1 < d.indexOf("+")
            ? (d = d.replace(/\+/g, "___"))
            : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+")),
          ":" + c + "(" + d + ")"
        );
      });
    }
    function ci(a, b) {
      a = a.split(/(\[.+?\])/);
      for (var c = [], d = 0; d < a.length; d++)
        if (1 == d % 2) c.push(a[d]);
        else {
          var e = a[d];
          ("" === e && d === a.length - 1) ||
            (((e = e.split(":"))[0] += b), c.push(e.join(":")));
        }
      return c.join("");
    }
    function gi(a) {
      ":root" === a.selector && (a.selector = "html");
    }
    (Ih.prototype.b = function (a, b, c) {
      var d = !1;
      a = a.trim();
      var e = Uh.test(a);
      e &&
        (a = Th(
          (a = a.replace(Uh, function (h, k, l) {
            return ":" + k + "(" + l.replace(/\s/g, "") + ")";
          }))
        ));
      var f = Wh.test(a);
      if (f) {
        var g = (function (a) {
          for (var c, b = []; (c = a.match(Wh)); ) {
            var d = c.index,
              e = Ah(a, d);
            if (-1 === e) throw Error(c.input + " selector missing ')'");
            (c = a.slice(d, e + 1)), (a = a.replace(c, "")), b.push(c);
          }
          return { wa: a, matches: b };
        })(a);
        (a = g.wa), (g = g.matches);
      }
      return (
        (a = (a = a.replace(Yh, ":host $1")).replace(Zh, function (h, k, l) {
          return (
            d ||
              ((h = (function (a, b, c, d) {
                var e = a.indexOf("::slotted");
                if (
                  (0 <= a.indexOf(":host")
                    ? (a = (function (a, b) {
                        var c = a.match(ei);
                        return (c = (c && c[2].trim()) || "")
                          ? c[0].match(fi)
                            ? a.replace(ei, function (d, e, f) {
                                return b + f;
                              })
                            : c.split(fi)[0] === b
                            ? c
                            : "should_not_match"
                          : a.replace(":host", b);
                      })(a, d))
                    : 0 !== e && (a = c ? ci(a, c) : a),
                  (c = !1),
                  0 <= e && ((b = ""), (c = !0)),
                  c)
                ) {
                  var f = !0;
                  c &&
                    (a = a.replace(di, function (g, h) {
                      return " > " + h;
                    }));
                }
                return { value: a, Qa: b, stop: f };
              })(l, k, b, c)),
              (d = d || h.stop),
              (k = h.Qa),
              (l = h.value)),
            k + l
          );
        })),
        f &&
          (a = (function (a, b) {
            var c = a.split("");
            return b.reduce(function (d, e, f) {
              return d + e + c[f + 1];
            }, c[0]);
          })(a, g)),
        e && (a = Th(a)),
        a.replace(ai, function (h, k, l, m) {
          return (
            '[dir="' + l + '"] ' + k + m + ", " + k + '[dir="' + l + '"]' + m
          );
        })
      );
    }),
      (Ih.prototype.c = function (a) {
        return a.match(":host")
          ? ""
          : a.match("::slotted")
          ? this.b(a, ":not(.style-scope)")
          : ci(a.trim(), ":not(.style-scope)");
      }),
      da.Object.defineProperties(Ih.prototype, {
        a: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return "style-scope";
          },
        },
      });
    var Uh = /:(nth[-\w]+)\(([^)]+)\)/,
      Zh = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
      fi = /[[.:#*]/,
      Yh = /^(::slotted)/,
      ei = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      di = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      ai = /(.*):dir\((?:(ltr|rtl))\)(.*)/,
      Wh = /:(?:matches|any|-(?:webkit|moz)-any)/,
      Lh = new Ih();
    function hi(a, b, c, d, e) {
      (this.H = a || null),
        (this.b = b || null),
        (this.ta = c || []),
        (this.F = null),
        (this.cssBuild = e || ""),
        (this.ca = d || ""),
        (this.a = this.G = this.L = null);
    }
    function ii(a) {
      return a ? a.__styleInfo : null;
    }
    function ji(a, b) {
      return (a.__styleInfo = b);
    }
    function ki(a) {
      var b =
        this.matches ||
        this.matchesSelector ||
        this.mozMatchesSelector ||
        this.msMatchesSelector ||
        this.oMatchesSelector ||
        this.webkitMatchesSelector;
      return b && b.call(this, a);
    }
    (hi.prototype.c = function () {
      return this.H;
    }),
      (hi.prototype._getStyleRules = hi.prototype.c);
    var li = /:host\s*>\s*/,
      mi = navigator.userAgent.match("Trident");
    function ni() {}
    function pi(a) {
      if (!a.v) {
        var b = {},
          c = {};
        qi(a, c) && ((b.K = c), (a.rules = null)),
          (b.cssText = a.parsedCssText.replace(ph, "").replace(kh, "")),
          (a.v = b);
      }
    }
    function qi(a, b) {
      var c = a.v;
      if (!c) {
        c = a.parsedCssText;
        for (var d; (a = kh.exec(c)); )
          ("inherit" === (d = (a[2] || a[3]).trim()) && "unset" === d) ||
            (b[a[1].trim()] = d),
            (d = !0);
        return d;
      }
      if (c.K) return Object.assign(b, c.K), !0;
    }
    function ri(a, b, c) {
      return (
        b &&
          (b =
            0 <= b.indexOf(";")
              ? si(a, b, c)
              : (function Bh(a, b) {
                  var c = a.indexOf("var(");
                  if (-1 === c) return b(a, "", "", "");
                  var d = Ah(a, c + 3),
                    e = a.substring(c + 4, d);
                  return (
                    (c = a.substring(0, c)),
                    (a = Bh(a.substring(d + 1), b)),
                    -1 === (d = e.indexOf(","))
                      ? b(c, e.trim(), "", a)
                      : b(
                          c,
                          e.substring(0, d).trim(),
                          e.substring(d + 1).trim(),
                          a
                        )
                  );
                })(b, function (d, e, f, g) {
                  return e
                    ? ((e = ri(a, c[e], c)) && "initial" !== e
                        ? "apply-shim-inherit" === e && (e = "inherit")
                        : (e = ri(a, c[f] || f, c) || f),
                      d + (e || "") + g)
                    : d + g;
                })),
        (b && b.trim()) || ""
      );
    }
    function si(a, b, c) {
      b = b.split(";");
      for (var e, f, d = 0; d < b.length; d++)
        if ((e = b[d])) {
          if (((lh.lastIndex = 0), (f = lh.exec(e)))) e = ri(a, c[f[1]], c);
          else if (-1 !== (f = e.indexOf(":"))) {
            var g = e.substring(f);
            (g = ri(a, (g = g.trim()), c) || g), (e = e.substring(0, f) + g);
          }
          b[d] =
            e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || "";
        }
      return b.join(";");
    }
    function vi(a, b, c) {
      var d = {},
        e = {};
      return (
        sh(
          b,
          function (f) {
            !(function (a, b, c, d) {
              if ((b.v || pi(b), b.v.K)) {
                var e = Eh(a);
                (a = e.is), (e = e.ca), (e = a ? Rh(a, e) : "html");
                var f = b.parsedSelector,
                  g = !!f.match(li) || ("html" === e && -1 < f.indexOf("html")),
                  h = 0 === f.indexOf(":host") && !g;
                "shady" === c &&
                  (h =
                    !(g = f === e + " > *." + e || -1 !== f.indexOf("html")) &&
                    0 === f.indexOf(e)),
                  (g || h) &&
                    ((c = e),
                    h &&
                      (b.w || (b.w = Sh(Lh, b, Lh.b, a ? "." + a : "", e)),
                      (c = b.w || e)),
                    g && "html" === e && (c = b.w || b.J),
                    d({ wa: c, Xa: h, mb: g }));
              }
            })(a, f, c, function (g) {
              ki.call(a._element || a, g.wa) && (g.Xa ? qi(f, d) : qi(f, e));
            });
          },
          null,
          !0
        ),
        { cb: e, Va: d }
      );
    }
    function wi(a, b, c, d) {
      var e = Eh(b),
        f = Rh(e.is, e.ca),
        g = new RegExp(
          "(?:^|[^.#[:])" +
            (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) +
            "($|[.:[\\s>+~])"
        ),
        h = ii(b);
      (e = h.H), (h = h.cssBuild);
      var k = (function (a, b) {
        a = a.b;
        var c = {};
        if (!V && a)
          for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
            var f = e,
              g = b;
            (f.l = new RegExp("\\b" + f.keyframesName + "(?!\\B|-)", "g")),
              (f.a = f.keyframesName + "-" + g),
              (f.w = f.w || f.selector),
              (f.selector = f.w.replace(f.keyframesName, f.a)),
              (c[e.keyframesName] = yi(e));
          }
        return c;
      })(e, d);
      return Ph(
        b,
        e,
        function (l) {
          var m = "";
          if (
            (l.v || pi(l),
            l.v.cssText && (m = si(a, l.v.cssText, c)),
            (l.cssText = m),
            !V && !uh(l) && l.cssText)
          ) {
            var q = (m = l.cssText);
            if ((null == l.Da && (l.Da = nh.test(m)), l.Da))
              if (null == l.ka)
                for (var H in ((l.ka = []), k))
                  m !== (q = (q = k[H])(m)) && ((m = q), l.ka.push(H));
              else {
                for (H = 0; H < l.ka.length; ++H) m = (q = k[l.ka[H]])(m);
                q = m;
              }
            (l.cssText = q), (l.w = l.w || l.selector), (m = "." + d), (q = 0);
            for (
              var C = (H = Fh(l.w)).length, t = void 0;
              q < C && (t = H[q]);
              q++
            )
              H[q] = t.match(g) ? t.replace(f, m) : m + " " + t;
            l.selector = H.join(",");
          }
        },
        h
      );
    }
    function yi(a) {
      return function (b) {
        return b.replace(a.l, a.a);
      };
    }
    function zi(a, b) {
      var c = Ai,
        d = th(a);
      a.textContent = rh(d, function (e) {
        var f = (e.cssText = e.parsedCssText);
        e.v &&
          e.v.cssText &&
          ((f = f.replace(ch, "").replace(dh, "")), (e.cssText = si(c, f, b)));
      });
    }
    da.Object.defineProperties(ni.prototype, {
      a: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return "x-scope";
        },
      },
    });
    var Ai = new ni(),
      Bi = {},
      Ci = window.customElements;
    if (Ci && !V && !jh) {
      var Di = Ci.define;
      Ci.define = function (a, b, c) {
        Bi[a] || (Bi[a] = yh(a)), Di.call(Ci, a, b, c);
      };
    }
    function Ei() {
      this.cache = {};
    }
    function Fi() {}
    Ei.prototype.store = function (a, b, c, d) {
      var e = this.cache[a] || [];
      e.push({ K: b, styleElement: c, G: d }),
        100 < e.length && e.shift(),
        (this.cache[a] = e);
    };
    var Gi = new RegExp(Lh.a + "\\s*([^\\s]*)");
    function Hi(a) {
      return (a = (
        a.classList && a.classList.value
          ? a.classList.value
          : a.getAttribute("class") || ""
      ).match(Gi))
        ? a[1]
        : "";
    }
    function Ii(a) {
      var b = Dh(a).getRootNode();
      return b === a || b === a.ownerDocument
        ? ""
        : (a = b.host)
        ? Eh(a).is
        : "";
    }
    function Ji(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (c.target !== document.documentElement && c.target !== document.head)
          for (var d = 0; d < c.addedNodes.length; d++) {
            var e = c.addedNodes[d];
            if (e.nodeType === Node.ELEMENT_NODE) {
              var f = e.getRootNode(),
                g = Hi(e);
              if (
                g &&
                f === e.ownerDocument &&
                (("style" !== e.localName && "template" !== e.localName) ||
                  "" === Gh(e))
              )
                Oh(e, g);
              else if (f instanceof ShadowRoot)
                for (
                  (f = Ii(e)) !== g && Nh(e, g, f),
                    e = window.ShadyDOM.nativeMethods.querySelectorAll.call(
                      e,
                      ":not(." + Lh.a + ")"
                    ),
                    g = 0;
                  g < e.length;
                  g++
                ) {
                  var h = Ii((f = e[g]));
                  h && Mh(f, h);
                }
            }
          }
      }
    }
    if (!(V || (window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping))) {
      var Ki = new MutationObserver(Ji),
        Li = function (a) {
          Ki.observe(a, { childList: !0, subtree: !0 });
        };
      if (
        window.customElements &&
        !window.customElements.polyfillWrapFlushCallback
      )
        Li(document);
      else {
        var Mi = function () {
          Li(document.body);
        };
        window.HTMLImports
          ? window.HTMLImports.whenReady(Mi)
          : requestAnimationFrame(function () {
              if ("loading" === document.readyState) {
                var a = function () {
                  Mi(), document.removeEventListener("readystatechange", a);
                };
                document.addEventListener("readystatechange", a);
              } else Mi();
            });
      }
      Fi = function () {
        Ji(Ki.takeRecords());
      };
    }
    var Ni = {},
      Oi = Promise.resolve();
    function Pi(a) {
      (a = Ni[a]) &&
        ((a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0),
        (a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0),
        (a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1));
    }
    function Qi(a) {
      return a._applyShimCurrentVersion === a._applyShimNextVersion;
    }
    var Si = {},
      Ti = new Ei();
    function Y() {
      (this.Y = {}), (this.c = document.documentElement);
      var a = new Qg();
      (a.rules = []),
        (this.l = ji(this.c, new hi(a))),
        (this.J = !1),
        (this.a = this.b = null);
    }
    function Vi(a) {
      var b = Eh(a),
        c = b.is;
      b = b.ca;
      var d = Bi[c] || null,
        e = Ni[c];
      if (e)
        return (
          ji(a, (b = new hi((c = e._styleAst), d, e.a, b, (e = Gh(e))))), b
        );
    }
    function Ui(a) {
      if (!a.b && window.ShadyCSS && window.ShadyCSS.ApplyShim) {
        (a.b = window.ShadyCSS.ApplyShim), (a.b.invalidCallback = Pi);
        var b = !0;
      } else b = !1;
      return (
        (function (a) {
          !a.a &&
            window.ShadyCSS &&
            window.ShadyCSS.CustomStyleInterface &&
            ((a.a = window.ShadyCSS.CustomStyleInterface),
            (a.a.transformCallback = function (b) {
              a.Ha(b);
            }),
            (a.a.validateCallback = function () {
              requestAnimationFrame(function () {
                (a.a.enqueued || a.J) && a.flushCustomStyles();
              });
            }));
        })(a),
        b
      );
    }
    function Zi(a, b, c) {
      var d = Eh(b).is;
      if (c.F) {
        var f,
          e = c.F;
        for (f in e)
          null === f ? b.style.removeProperty(f) : b.style.setProperty(f, e[f]);
      }
      (!(e = Ni[d]) && b !== a.c) ||
        (e && "" !== Gh(e)) ||
        !e ||
        !e._style ||
        Qi(e) ||
        ((Qi(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) &&
          (Ui(a),
          a.b && a.b.transformRules(e._styleAst, d),
          (e._style.textContent = Ph(b, c.H)),
          (function (a) {
            (a._applyShimValidatingVersion = a._applyShimNextVersion),
              a._validating ||
                ((a._validating = !0),
                Oi.then(function () {
                  (a._applyShimCurrentVersion = a._applyShimNextVersion),
                    (a._validating = !1);
                }));
          })(e)),
        V &&
          (a = b.shadowRoot) &&
          (a = a.querySelector("style")) &&
          (a.textContent = Ph(b, c.H)),
        (c.H = e._styleAst));
    }
    function $i(a, b) {
      return (b = Dh(b).getRootNode().host)
        ? ii(b) || Vi(b)
          ? b
          : $i(a, b)
        : a.c;
    }
    function Yi(a, b, c) {
      var d = $i(a, b),
        e = ii(d),
        f = e.L;
      for (var g in (d === a.c || f || (Yi(a, d, e), (f = e.L)),
      (a = Object.create(f || null)),
      (d = vi(b, c.H, c.cssBuild)),
      (b = (function (a, b) {
        var c = {},
          d = [];
        return (
          sh(
            a,
            function (e) {
              e.v || pi(e);
              var f = e.w || e.parsedSelector;
              b &&
                e.v.K &&
                f &&
                ki.call(b, f) &&
                (qi(e, c),
                (e = e.index),
                (f = parseInt(e / 32, 10)),
                (d[f] = (d[f] || 0) | (1 << e % 32)));
            },
            null,
            !0
          ),
          { K: c, key: d }
        );
      })(e.H, b).K),
      Object.assign(a, d.Va, b, d.cb),
      (b = c.F)))
        ((e = b[g]) || 0 === e) && (a[g] = e);
      for (g = Ai, b = Object.getOwnPropertyNames(a), e = 0; e < b.length; e++)
        a[(d = b[e])] = ri(g, a[d], a);
      c.L = a;
    }
    ((v = Y.prototype).flush = function () {
      Fi();
    }),
      (v.Ta = function (a) {
        return th(a);
      }),
      (v.hb = function (a) {
        return rh(a);
      }),
      (v.prepareTemplate = function (a, b, c) {
        this.prepareTemplateDom(a, b), this.prepareTemplateStyles(a, b, c);
      }),
      (v.prepareTemplateStyles = function (a, b, c) {
        if (!a._prepared && !jh) {
          V || Bi[b] || (Bi[b] = yh(b)),
            (a._prepared = !0),
            (a.name = b),
            (a.extends = c),
            (Ni[b] = a);
          var d = Gh(a),
            e = Hh(d);
          c = { is: b, extends: c };
          for (
            var f = [], g = a.content.querySelectorAll("style"), h = 0;
            h < g.length;
            h++
          ) {
            var k = g[h];
            if (k.hasAttribute("shady-unscoped")) {
              if (!V) {
                var l = k.textContent;
                if (!qh.has(l)) {
                  qh.add(l);
                  var m = document.createElement("style");
                  m.setAttribute("shady-unscoped", ""),
                    (m.textContent = l),
                    document.head.appendChild(m);
                }
                k.parentNode.removeChild(k);
              }
            } else f.push(k.textContent), k.parentNode.removeChild(k);
          }
          (f = f.join("").trim() + (Si[b] || "")),
            Ui(this),
            e ||
              ((g = !d) &&
                ((g = lh.test(f) || kh.test(f)),
                (lh.lastIndex = 0),
                (kh.lastIndex = 0)),
              (h = Rg(f)),
              g && X && this.b && this.b.transformRules(h, b),
              (a._styleAst = h)),
            (g = []),
            X ||
              (g = (function (a) {
                var b = {},
                  c = [],
                  d = 0;
                for (var e in (sh(
                  a,
                  function (f) {
                    pi(f), (f.index = d++), (f = f.v.cssText);
                    for (var g; (g = mh.exec(f)); ) {
                      var h = g[1];
                      ":" !== g[2] && (b[h] = !0);
                    }
                  },
                  function (f) {
                    c.push(f);
                  }
                ),
                (a.b = c),
                (a = []),
                b))
                  a.push(e);
                return a;
              })(a._styleAst)),
            (g.length && !X) ||
              ((h = V ? a.content : null),
              (b = Bi[b] || null),
              (d = (d = Ph(c, a._styleAst, null, d, e ? f : "")).length
                ? vh(d, c.is, h, b)
                : null),
              (a._style = d)),
            (a.a = g);
        }
      }),
      (v.ab = function (a, b) {
        Si[b] = a.join(" ");
      }),
      (v.prepareTemplateDom = function (a, b) {
        if (!jh) {
          var c = Gh(a);
          V ||
            "shady" === c ||
            a._domPrepared ||
            ((a._domPrepared = !0),
            (function (a, b) {
              Kh(Lh, a, function (c) {
                Mh(c, b || "");
              });
            })(a.content, b));
        }
      }),
      (v.flushCustomStyles = function () {
        if (!jh) {
          var a = Ui(this);
          if (this.a) {
            var b = this.a.processStyles();
            if ((a || this.a.enqueued) && !Hh(this.l.cssBuild)) {
              if (X) {
                if (!this.l.cssBuild)
                  for (a = 0; a < b.length; a++) {
                    var c = this.a.getStyleForCustomStyle(b[a]);
                    if (c && X && this.b) {
                      var d = th(c);
                      Ui(this),
                        this.b.transformRules(d),
                        (c.textContent = rh(d));
                    }
                  }
              } else {
                for (
                  (function (a, b) {
                    (b = b
                      .map(function (c) {
                        return a.a.getStyleForCustomStyle(c);
                      })
                      .filter(function (c) {
                        return !!c;
                      })).sort(function (c, d) {
                      return (c = d.compareDocumentPosition(c)) &
                        Node.DOCUMENT_POSITION_FOLLOWING
                        ? 1
                        : c & Node.DOCUMENT_POSITION_PRECEDING
                        ? -1
                        : 0;
                    }),
                      (a.l.H.rules = b.map(function (c) {
                        return th(c);
                      }));
                  })(this, b),
                    Yi(this, this.c, this.l),
                    a = 0;
                  a < b.length;
                  a++
                )
                  (c = this.a.getStyleForCustomStyle(b[a])) && zi(c, this.l.L);
                this.J && this.styleDocument();
              }
              this.a.enqueued = !1;
            }
          }
        }
      }),
      (v.styleElement = function (a, b) {
        if (jh) {
          if (b) {
            ii(a) || ji(a, new hi(null));
            var c = ii(a);
            (c.F = c.F || {}), Object.assign(c.F, b), Zi(this, a, c);
          }
        } else if ((c = ii(a) || Vi(a)))
          if (
            (a !== this.c && (this.J = !0),
            b && ((c.F = c.F || {}), Object.assign(c.F, b)),
            X)
          )
            Zi(this, a, c);
          else if ((this.flush(), Yi(this, a, c), c.ta && c.ta.length)) {
            var d;
            b = Eh(a).is;
            a: {
              if ((d = Ti.cache[b]))
                for (var e = d.length - 1; 0 <= e; e--) {
                  var f = d[e];
                  b: {
                    for (var g = c.ta, h = 0; h < g.length; h++) {
                      var k = g[h];
                      if (f.K[k] !== c.L[k]) {
                        g = !1;
                        break b;
                      }
                    }
                    g = !0;
                  }
                  if (g) {
                    d = f;
                    break a;
                  }
                }
              d = void 0;
            }
            (g = d ? d.styleElement : null),
              (e = c.G),
              (f = d && d.G) ||
                (f = b + "-" + (f = this.Y[b] = (this.Y[b] || 0) + 1)),
              (c.G = f),
              (f = c.G),
              (h = Ai),
              (h = g ? g.textContent || "" : wi(h, a, c.L, f));
            var l = (k = ii(a)).a;
            l &&
              !V &&
              l !== g &&
              (l._useCount--,
              0 >= l._useCount && l.parentNode && l.parentNode.removeChild(l)),
              V
                ? k.a
                  ? ((k.a.textContent = h), (g = k.a))
                  : h && (g = vh(h, f, a.shadowRoot, k.b))
                : g
                ? g.parentNode ||
                  (mi && -1 < h.indexOf("@media") && (g.textContent = h),
                  wh(g, null, k.b))
                : h && (g = vh(h, f, null, k.b)),
              g &&
                ((g._useCount = g._useCount || 0),
                k.a != g && g._useCount++,
                (k.a = g)),
              (f = g),
              V ||
                ((g = c.G),
                (k = h = a.getAttribute("class") || ""),
                e &&
                  (k = h.replace(
                    new RegExp("\\s*x-scope\\s*" + e + "\\s*", "g"),
                    " "
                  )),
                h !== (k += (k ? " " : "") + "x-scope " + g) && Ch(a, k)),
              d || Ti.store(b, c.L, f, c.G);
          }
      }),
      (v.styleDocument = function (a) {
        this.styleSubtree(this.c, a);
      }),
      (v.styleSubtree = function (a, b) {
        var c = Dh(a),
          d = c.shadowRoot,
          e = a === this.c;
        if (((d || e) && this.styleElement(a, b), (a = e ? c : d)))
          for (
            a = Array.from(a.querySelectorAll("*")).filter(function (f) {
              return Dh(f).shadowRoot;
            }),
              b = 0;
            b < a.length;
            b++
          )
            this.styleSubtree(a[b]);
      }),
      (v.Ha = function (a) {
        var b = this,
          c = Gh(a);
        if ((c !== this.l.cssBuild && (this.l.cssBuild = c), !Hh(c))) {
          var d = th(a);
          sh(d, function (e) {
            if (V) gi(e);
            else {
              var f = Lh;
              (e.selector = e.parsedSelector),
                gi(e),
                (e.selector = e.w = Sh(f, e, f.c, void 0, void 0));
            }
            X && "" === c && (Ui(b), b.b && b.b.transformRule(e));
          }),
            X ? (a.textContent = rh(d)) : this.l.H.rules.push(d);
        }
      }),
      (v.getComputedStyleValue = function (a, b) {
        var c;
        return (
          X || (c = (ii(a) || ii($i(this, a))).L[b]),
          (c = c || window.getComputedStyle(a).getPropertyValue(b))
            ? c.trim()
            : ""
        );
      }),
      (v.gb = function (a, b) {
        var d,
          c = Dh(a).getRootNode();
        if (
          ((d = b ? ("string" == typeof b ? b : String(b)).split(/\s/) : []),
          !(b = c.host && c.host.localName) && (c = a.getAttribute("class")))
        ) {
          c = c.split(/\s/);
          for (var e = 0; e < c.length; e++)
            if (c[e] === Lh.a) {
              b = c[e + 1];
              break;
            }
        }
        b && d.push(Lh.a, b),
          X || ((b = ii(a)) && b.G && d.push(Ai.a, b.G)),
          Ch(a, d.join(" "));
      }),
      (v.Oa = function (a) {
        return ii(a);
      }),
      (v.fb = function (a, b) {
        Mh(a, b);
      }),
      (v.ib = function (a, b) {
        Mh(a, b, !0);
      }),
      (v.eb = function (a) {
        return Ii(a);
      }),
      (v.Ra = function (a) {
        return Hi(a);
      }),
      (Y.prototype.flush = Y.prototype.flush),
      (Y.prototype.prepareTemplate = Y.prototype.prepareTemplate),
      (Y.prototype.styleElement = Y.prototype.styleElement),
      (Y.prototype.styleDocument = Y.prototype.styleDocument),
      (Y.prototype.styleSubtree = Y.prototype.styleSubtree),
      (Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue),
      (Y.prototype.setElementClass = Y.prototype.gb),
      (Y.prototype._styleInfoForNode = Y.prototype.Oa),
      (Y.prototype.transformCustomStyleForDocument = Y.prototype.Ha),
      (Y.prototype.getStyleAst = Y.prototype.Ta),
      (Y.prototype.styleAstToString = Y.prototype.hb),
      (Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles),
      (Y.prototype.scopeNode = Y.prototype.fb),
      (Y.prototype.unscopeNode = Y.prototype.ib),
      (Y.prototype.scopeForNode = Y.prototype.eb),
      (Y.prototype.currentScopeForNode = Y.prototype.Ra),
      (Y.prototype.prepareAdoptedCssText = Y.prototype.ab),
      Object.defineProperties(Y.prototype, {
        nativeShadow: {
          get: function () {
            return V;
          },
        },
        nativeCss: {
          get: function () {
            return X;
          },
        },
      });
    var aj,
      bj,
      Z = new Y();
    window.ShadyCSS &&
      ((aj = window.ShadyCSS.ApplyShim),
      (bj = window.ShadyCSS.CustomStyleInterface)),
      (window.ShadyCSS = {
        ScopingShim: Z,
        prepareTemplate: function (a, b, c) {
          Z.flushCustomStyles(), Z.prepareTemplate(a, b, c);
        },
        prepareTemplateDom: function (a, b) {
          Z.prepareTemplateDom(a, b);
        },
        prepareTemplateStyles: function (a, b, c) {
          Z.flushCustomStyles(), Z.prepareTemplateStyles(a, b, c);
        },
        styleSubtree: function (a, b) {
          Z.flushCustomStyles(), Z.styleSubtree(a, b);
        },
        styleElement: function (a) {
          Z.flushCustomStyles(), Z.styleElement(a);
        },
        styleDocument: function (a) {
          Z.flushCustomStyles(), Z.styleDocument(a);
        },
        flushCustomStyles: function () {
          Z.flushCustomStyles();
        },
        getComputedStyleValue: function (a, b) {
          return Z.getComputedStyleValue(a, b);
        },
        nativeCss: X,
        nativeShadow: V,
        cssBuild: ih,
        disableRuntime: jh,
      }),
      aj && (window.ShadyCSS.ApplyShim = aj),
      bj && (window.ShadyCSS.CustomStyleInterface = bj),
      (function (a) {
        function b(t) {
          return "" == t && (f.call(this), (this.h = !0)), t.toLowerCase();
        }
        function c(t) {
          var F = t.charCodeAt(0);
          return 32 < F && 127 > F && -1 == [34, 35, 60, 62, 63, 96].indexOf(F)
            ? t
            : encodeURIComponent(t);
        }
        function d(t) {
          var F = t.charCodeAt(0);
          return 32 < F && 127 > F && -1 == [34, 35, 60, 62, 96].indexOf(F)
            ? t
            : encodeURIComponent(t);
        }
        function e(t, F, E) {
          function M(ka) {
            va.push(ka);
          }
          var y = F || "scheme start",
            W = 0,
            w = "",
            wa = !1,
            fa = !1,
            va = [];
          a: for (; (void 0 != t[W - 1] || 0 == W) && !this.h; ) {
            var n = t[W];
            switch (y) {
              case "scheme start":
                if (!n || !q.test(n)) {
                  if (F) {
                    M("Invalid scheme.");
                    break a;
                  }
                  (w = ""), (y = "no scheme");
                  continue;
                }
                (w += n.toLowerCase()), (y = "scheme");
                break;
              case "scheme":
                if (n && H.test(n)) w += n.toLowerCase();
                else {
                  if (":" != n) {
                    if (F) {
                      void 0 != n &&
                        M("Code point not allowed in scheme: " + n);
                      break a;
                    }
                    (w = ""), (W = 0), (y = "no scheme");
                    continue;
                  }
                  if (((this.g = w), (w = ""), F)) break a;
                  void 0 !== l[this.g] && (this.A = !0),
                    (y =
                      "file" == this.g
                        ? "relative"
                        : this.A && E && E.g == this.g
                        ? "relative or authority"
                        : this.A
                        ? "authority first slash"
                        : "scheme data");
                }
                break;
              case "scheme data":
                "?" == n
                  ? ((this.o = "?"), (y = "query"))
                  : "#" == n
                  ? ((this.u = "#"), (y = "fragment"))
                  : void 0 != n &&
                    "\t" != n &&
                    "\n" != n &&
                    "\r" != n &&
                    (this.pa += c(n));
                break;
              case "no scheme":
                if (E && void 0 !== l[E.g]) {
                  y = "relative";
                  continue;
                }
                M("Missing scheme."), f.call(this), (this.h = !0);
                break;
              case "relative or authority":
                if ("/" != n || "/" != t[W + 1]) {
                  M("Expected /, got: " + n), (y = "relative");
                  continue;
                }
                y = "authority ignore slashes";
                break;
              case "relative":
                if (
                  ((this.A = !0),
                  "file" != this.g && (this.g = E.g),
                  void 0 == n)
                ) {
                  (this.i = E.i),
                    (this.m = E.m),
                    (this.j = E.j.slice()),
                    (this.o = E.o),
                    (this.s = E.s),
                    (this.f = E.f);
                  break a;
                }
                if ("/" == n || "\\" == n)
                  "\\" == n && M("\\ is an invalid code point."),
                    (y = "relative slash");
                else if ("?" == n)
                  (this.i = E.i),
                    (this.m = E.m),
                    (this.j = E.j.slice()),
                    (this.o = "?"),
                    (this.s = E.s),
                    (this.f = E.f),
                    (y = "query");
                else {
                  if ("#" != n) {
                    y = t[W + 1];
                    var J = t[W + 2];
                    ("file" != this.g ||
                      !q.test(n) ||
                      (":" != y && "|" != y) ||
                      (void 0 != J &&
                        "/" != J &&
                        "\\" != J &&
                        "?" != J &&
                        "#" != J)) &&
                      ((this.i = E.i),
                      (this.m = E.m),
                      (this.s = E.s),
                      (this.f = E.f),
                      (this.j = E.j.slice()),
                      this.j.pop()),
                      (y = "relative path");
                    continue;
                  }
                  (this.i = E.i),
                    (this.m = E.m),
                    (this.j = E.j.slice()),
                    (this.o = E.o),
                    (this.u = "#"),
                    (this.s = E.s),
                    (this.f = E.f),
                    (y = "fragment");
                }
                break;
              case "relative slash":
                if ("/" != n && "\\" != n) {
                  "file" != this.g &&
                    ((this.i = E.i),
                    (this.m = E.m),
                    (this.s = E.s),
                    (this.f = E.f)),
                    (y = "relative path");
                  continue;
                }
                "\\" == n && M("\\ is an invalid code point."),
                  (y =
                    "file" == this.g
                      ? "file host"
                      : "authority ignore slashes");
                break;
              case "authority first slash":
                if ("/" != n) {
                  M("Expected '/', got: " + n),
                    (y = "authority ignore slashes");
                  continue;
                }
                y = "authority second slash";
                break;
              case "authority second slash":
                if (((y = "authority ignore slashes"), "/" != n)) {
                  M("Expected '/', got: " + n);
                  continue;
                }
                break;
              case "authority ignore slashes":
                if ("/" != n && "\\" != n) {
                  y = "authority";
                  continue;
                }
                M("Expected authority, got: " + n);
                break;
              case "authority":
                if ("@" == n) {
                  for (
                    wa && (M("@ already seen."), (w += "%40")), wa = !0, n = 0;
                    n < w.length;
                    n++
                  )
                    "\t" == (J = w[n]) || "\n" == J || "\r" == J
                      ? M("Invalid whitespace in authority.")
                      : ":" == J && null === this.f
                      ? (this.f = "")
                      : ((J = c(J)),
                        null !== this.f ? (this.f += J) : (this.s += J));
                  w = "";
                } else {
                  if (
                    void 0 == n ||
                    "/" == n ||
                    "\\" == n ||
                    "?" == n ||
                    "#" == n
                  ) {
                    (W -= w.length), (w = ""), (y = "host");
                    continue;
                  }
                  w += n;
                }
                break;
              case "file host":
                if (
                  void 0 == n ||
                  "/" == n ||
                  "\\" == n ||
                  "?" == n ||
                  "#" == n
                ) {
                  2 != w.length || !q.test(w[0]) || (":" != w[1] && "|" != w[1])
                    ? (0 != w.length && ((this.i = b.call(this, w)), (w = "")),
                      (y = "relative path start"))
                    : (y = "relative path");
                  continue;
                }
                "\t" == n || "\n" == n || "\r" == n
                  ? M("Invalid whitespace in file host.")
                  : (w += n);
                break;
              case "host":
              case "hostname":
                if (":" != n || fa) {
                  if (
                    void 0 == n ||
                    "/" == n ||
                    "\\" == n ||
                    "?" == n ||
                    "#" == n
                  ) {
                    if (
                      ((this.i = b.call(this, w)),
                      (w = ""),
                      (y = "relative path start"),
                      F)
                    )
                      break a;
                    continue;
                  }
                  "\t" != n && "\n" != n && "\r" != n
                    ? ("[" == n ? (fa = !0) : "]" == n && (fa = !1), (w += n))
                    : M("Invalid code point in host/hostname: " + n);
                } else if (
                  ((this.i = b.call(this, w)),
                  (w = ""),
                  (y = "port"),
                  "hostname" == F)
                )
                  break a;
                break;
              case "port":
                if (/[0-9]/.test(n)) w += n;
                else {
                  if (
                    void 0 == n ||
                    "/" == n ||
                    "\\" == n ||
                    "?" == n ||
                    "#" == n ||
                    F
                  ) {
                    if (
                      ("" != w &&
                        ((w = parseInt(w, 10)) != l[this.g] &&
                          (this.m = w + ""),
                        (w = "")),
                      F)
                    )
                      break a;
                    y = "relative path start";
                    continue;
                  }
                  "\t" == n || "\n" == n || "\r" == n
                    ? M("Invalid code point in port: " + n)
                    : (f.call(this), (this.h = !0));
                }
                break;
              case "relative path start":
                if (
                  ("\\" == n && M("'\\' not allowed in path."),
                  (y = "relative path"),
                  "/" != n && "\\" != n)
                )
                  continue;
                break;
              case "relative path":
                void 0 != n &&
                "/" != n &&
                "\\" != n &&
                (F || ("?" != n && "#" != n))
                  ? "\t" != n && "\n" != n && "\r" != n && (w += c(n))
                  : ("\\" == n && M("\\ not allowed in relative path."),
                    (J = m[w.toLowerCase()]) && (w = J),
                    ".." == w
                      ? (this.j.pop(), "/" != n && "\\" != n && this.j.push(""))
                      : "." == w && "/" != n && "\\" != n
                      ? this.j.push("")
                      : "." != w &&
                        ("file" == this.g &&
                          0 == this.j.length &&
                          2 == w.length &&
                          q.test(w[0]) &&
                          "|" == w[1] &&
                          (w = w[0] + ":"),
                        this.j.push(w)),
                    (w = ""),
                    "?" == n
                      ? ((this.o = "?"), (y = "query"))
                      : "#" == n && ((this.u = "#"), (y = "fragment")));
                break;
              case "query":
                F || "#" != n
                  ? void 0 != n &&
                    "\t" != n &&
                    "\n" != n &&
                    "\r" != n &&
                    (this.o += d(n))
                  : ((this.u = "#"), (y = "fragment"));
                break;
              case "fragment":
                void 0 != n &&
                  "\t" != n &&
                  "\n" != n &&
                  "\r" != n &&
                  (this.u += n);
            }
            W++;
          }
        }
        function f() {
          (this.s = this.pa = this.g = ""),
            (this.f = null),
            (this.m = this.i = ""),
            (this.j = []),
            (this.u = this.o = ""),
            (this.A = this.h = !1);
        }
        function g(t, F) {
          void 0 === F || F instanceof g || (F = new g(String(F))),
            (this.a = t),
            f.call(this),
            e.call(
              this,
              this.a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, ""),
              null,
              F
            );
        }
        var h = !1;
        try {
          var k = new URL("b", "http://a");
          (k.pathname = "c%20d"), (h = "http://a/c%20d" === k.href);
        } catch (t) {}
        if (!h) {
          var l = Object.create(null);
          (l.ftp = 21),
            (l.file = 0),
            (l.gopher = 70),
            (l.http = 80),
            (l.https = 443),
            (l.ws = 80),
            (l.wss = 443);
          var m = Object.create(null);
          (m["%2e"] = "."),
            (m[".%2e"] = ".."),
            (m["%2e."] = ".."),
            (m["%2e%2e"] = "..");
          var q = /[a-zA-Z]/,
            H = /[a-zA-Z0-9\+\-\.]/;
          g.prototype = {
            toString: function () {
              return this.href;
            },
            get href() {
              if (this.h) return this.a;
              var t = "";
              return (
                ("" == this.s && null == this.f) ||
                  (t = this.s + (null != this.f ? ":" + this.f : "") + "@"),
                this.protocol +
                  (this.A ? "//" + t + this.host : "") +
                  this.pathname +
                  this.o +
                  this.u
              );
            },
            set href(t) {
              f.call(this), e.call(this, t);
            },
            get protocol() {
              return this.g + ":";
            },
            set protocol(t) {
              this.h || e.call(this, t + ":", "scheme start");
            },
            get host() {
              return this.h ? "" : this.m ? this.i + ":" + this.m : this.i;
            },
            set host(t) {
              !this.h && this.A && e.call(this, t, "host");
            },
            get hostname() {
              return this.i;
            },
            set hostname(t) {
              !this.h && this.A && e.call(this, t, "hostname");
            },
            get port() {
              return this.m;
            },
            set port(t) {
              !this.h && this.A && e.call(this, t, "port");
            },
            get pathname() {
              return this.h ? "" : this.A ? "/" + this.j.join("/") : this.pa;
            },
            set pathname(t) {
              !this.h &&
                this.A &&
                ((this.j = []), e.call(this, t, "relative path start"));
            },
            get search() {
              return this.h || !this.o || "?" == this.o ? "" : this.o;
            },
            set search(t) {
              !this.h &&
                this.A &&
                ((this.o = "?"),
                "?" == t[0] && (t = t.slice(1)),
                e.call(this, t, "query"));
            },
            get hash() {
              return this.h || !this.u || "#" == this.u ? "" : this.u;
            },
            set hash(t) {
              this.h ||
                (t
                  ? ((this.u = "#"),
                    "#" == t[0] && (t = t.slice(1)),
                    e.call(this, t, "fragment"))
                  : (this.u = ""));
            },
            get origin() {
              var t;
              if (this.h || !this.g) return "";
              switch (this.g) {
                case "data":
                case "file":
                case "javascript":
                case "mailto":
                  return "null";
              }
              return (t = this.host) ? this.g + "://" + t : "";
            },
          };
          var C = a.URL;
          C &&
            ((g.createObjectURL = function (t) {
              return C.createObjectURL.apply(C, arguments);
            }),
            (g.revokeObjectURL = function (t) {
              C.revokeObjectURL(t);
            })),
            (a.URL = g);
        }
      })(window);
    var cj = window.customElements,
      dj = !1,
      ej = null;
    function fj() {
      window.HTMLTemplateElement.bootstrap &&
        window.HTMLTemplateElement.bootstrap(window.document),
        ej && ej(),
        (dj = !0),
        (window.WebComponents.ready = !0),
        document.dispatchEvent(
          new CustomEvent("WebComponentsReady", { bubbles: !0 })
        );
    }
    cj.polyfillWrapFlushCallback &&
      cj.polyfillWrapFlushCallback(function (a) {
        (ej = a), dj && a();
      }),
      "complete" !== document.readyState
        ? (window.addEventListener("load", fj),
          window.addEventListener("DOMContentLoaded", function () {
            window.removeEventListener("load", fj), fj();
          }))
        : fj();
  }.call(this),
  (window.PfeConfig = {
    IconSets: [
      {
        name: "web",
        path: "https://static.redhat.com/libs/redhat/rh-iconfont/4/svg",
      },
      {
        name: "rh",
        path: "https://static.redhat.com/libs/redhat/rh-iconfont/4/svg",
      },
    ],
  }),
  window.addEventListener("DOMContentLoaded", function () {
    !(function (global, factory) {
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = factory())
        : "function" == typeof define && define.amd
        ? define(factory)
        : ((global = global || self).PFElement = factory());
    })(this, function () {
      "use strict";
      var logger = function () {
        return null;
      };
      function handleWebComponentsReady() {
        logger("[reveal] web components ready"),
          logger("[reveal] elements ready, revealing the body"),
          window.document.body.removeAttribute("unresolved");
      }
      function isValidDefaultType(definition) {
        return (
          definition.hasOwnProperty("default") &&
          definition.default.constructor === definition.type
        );
      }
      Array.prototype.includes ||
        Object.defineProperty(Array.prototype, "includes", {
          value: function (valueToFind, fromIndex) {
            if (null == this)
              throw new TypeError('"this" is null or not defined');
            var o = Object(this),
              len = o.length >>> 0;
            if (0 === len) return !1;
            var x,
              y,
              n = 0 | fromIndex,
              k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            for (; k < len; ) {
              if (
                (x = o[k]) === (y = valueToFind) ||
                ("number" == typeof x &&
                  "number" == typeof y &&
                  isNaN(x) &&
                  isNaN(y))
              )
                return !0;
              k++;
            }
            return !1;
          },
        }),
        Object.entries ||
          (Object.entries = function (obj) {
            for (
              var ownProps = Object.keys(obj),
                i = ownProps.length,
                resArray = new Array(i);
              i--;

            )
              resArray[i] = [ownProps[i], obj[ownProps[i]]];
            return resArray;
          }),
        String.prototype.startsWith ||
          Object.defineProperty(String.prototype, "startsWith", {
            value: function (search, rawPos) {
              var pos = rawPos > 0 ? 0 | rawPos : 0;
              return this.substring(pos, pos + search.length) === search;
            },
          }),
        Element.prototype.closest ||
          (Element.prototype.closest = function (s) {
            var el = this;
            do {
              if (el.matches(s)) return el;
              el = el.parentElement || el.parentNode;
            } while (null !== el && 1 === el.nodeType);
            return null;
          }),
        Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
        Array.prototype.find ||
          Object.defineProperty(Array.prototype, "find", {
            value: function (predicate) {
              if (null == this)
                throw new TypeError('"this" is null or not defined');
              var o = Object(this),
                len = o.length >>> 0;
              if ("function" != typeof predicate)
                throw new TypeError("predicate must be a function");
              for (var thisArg = arguments[1], k = 0; k < len; ) {
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) return kValue;
                k++;
              }
            },
            configurable: !0,
            writable: !0,
          });
      var _typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (obj) {
                return typeof obj;
              }
            : function (obj) {
                return obj &&
                  "function" == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              },
        classCallCheck = function (instance, Constructor) {
          if (!(instance instanceof Constructor))
            throw new TypeError("Cannot call a class as a function");
        },
        createClass = (function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              (descriptor.enumerable = descriptor.enumerable || !1),
                (descriptor.configurable = !0),
                "value" in descriptor && (descriptor.writable = !0),
                Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            return (
              protoProps && defineProperties(Constructor.prototype, protoProps),
              staticProps && defineProperties(Constructor, staticProps),
              Constructor
            );
          };
        })(),
        defineProperty = function (obj, key, value) {
          return (
            key in obj
              ? Object.defineProperty(obj, key, {
                  value: value,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (obj[key] = value),
            obj
          );
        },
        _extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          },
        possibleConstructorReturn = function (self, call) {
          if (!self)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !call || ("object" != typeof call && "function" != typeof call)
            ? self
            : call;
        },
        slicedToArray = (function () {
          return function (arr, i) {
            if (Array.isArray(arr)) return arr;
            if (Symbol.iterator in Object(arr))
              return (function (arr, i) {
                var _arr = [],
                  _n = !0,
                  _d = !1,
                  _e = void 0;
                try {
                  for (
                    var _s, _i = arr[Symbol.iterator]();
                    !(_n = (_s = _i.next()).done) &&
                    (_arr.push(_s.value), !i || _arr.length !== i);
                    _n = !0
                  );
                } catch (err) {
                  (_d = !0), (_e = err);
                } finally {
                  try {
                    !_n && _i.return && _i.return();
                  } finally {
                    if (_d) throw _e;
                  }
                }
                return _arr;
              })(arr, i);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          };
        })(),
        toConsumableArray = function (arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
              arr2[i] = arr[i];
            return arr2;
          }
          return Array.from(arr);
        },
        PFElement = (function (_HTMLElement) {
          function PFElement(pfeClass) {
            var _ref =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              _ref$type = _ref.type,
              type = void 0 === _ref$type ? null : _ref$type,
              _ref$delayRender = _ref.delayRender,
              delayRender = void 0 !== _ref$delayRender && _ref$delayRender;
            classCallCheck(this, PFElement);
            var _this = possibleConstructorReturn(
              this,
              (PFElement.__proto__ || Object.getPrototypeOf(PFElement)).call(
                this
              )
            );
            return (
              (_this._pfeClass = pfeClass),
              (_this.tag = pfeClass.tag),
              (_this._parseObserver = _this._parseObserver.bind(_this)),
              (_this.isIE11 = /MSIE|Trident|Edge\//.test(
                window.navigator.userAgent
              )),
              (_this._pfeClass.instances &&
                _this._pfeClass.instances.length >= 0) ||
                (_this._pfeClass.instances = []),
              _this.id
                ? _this.id.startsWith("pfe-") && !_this.id.startsWith(_this.tag)
                  ? (_this._markId = _this.id.replace("pfe", _this.tag))
                  : (_this._markId = _this.tag + "-" + _this.id)
                : (_this._markId = _this.randomId.replace("pfe", _this.tag)),
              (_this._markCount = 0),
              (_this.schemaProps = pfeClass.schemaProperties),
              (_this.slots = pfeClass.slots),
              (_this.template = document.createElement("template")),
              type &&
                _this._pfeClass.allProperties.type &&
                (_this._pfeClass.allProperties.type.default = type),
              _this._initializeProperties(),
              _this.attachShadow({ mode: "open" }),
              (_this._rendered = !1),
              delayRender || _this.render(),
              _this
            );
          }
          return (
            (function (subClass, superClass) {
              if ("function" != typeof superClass && null !== superClass)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof superClass
                );
              (subClass.prototype = Object.create(
                superClass && superClass.prototype,
                {
                  constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                }
              )),
                superClass &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(subClass, superClass)
                    : (subClass.__proto__ = superClass));
            })(PFElement, HTMLElement),
            createClass(
              PFElement,
              [
                {
                  key: "log",
                  value: function () {
                    for (
                      var _len = arguments.length, msgs = Array(_len), _key = 0;
                      _key < _len;
                      _key++
                    )
                      msgs[_key] = arguments[_key];
                    PFElement.log.apply(
                      PFElement,
                      [
                        "[" + this.tag + (this.id ? "#" + this.id : "") + "]",
                      ].concat(msgs)
                    );
                  },
                },
                {
                  key: "warn",
                  value: function () {
                    for (
                      var _len2 = arguments.length,
                        msgs = Array(_len2),
                        _key2 = 0;
                      _key2 < _len2;
                      _key2++
                    )
                      msgs[_key2] = arguments[_key2];
                    PFElement.warn.apply(
                      PFElement,
                      [
                        "[" + this.tag + (this.id ? "#" + this.id : "") + "]",
                      ].concat(msgs)
                    );
                  },
                },
                {
                  key: "error",
                  value: function () {
                    for (
                      var _len3 = arguments.length,
                        msgs = Array(_len3),
                        _key3 = 0;
                      _key3 < _len3;
                      _key3++
                    )
                      msgs[_key3] = arguments[_key3];
                    PFElement.error.apply(
                      PFElement,
                      [
                        "[" + this.tag + (this.id ? "#" + this.id : "") + "]",
                      ].concat(msgs)
                    );
                  },
                },
                {
                  key: "hasLightDOM",
                  value: function () {
                    return (
                      this.children.length || this.textContent.trim().length
                    );
                  },
                },
                {
                  key: "hasSlot",
                  value: function (name) {
                    var _this2 = this;
                    if (name)
                      return "string" == typeof name
                        ? []
                            .concat(toConsumableArray(this.children))
                            .filter(function (child) {
                              return (
                                child.hasAttribute("slot") &&
                                child.getAttribute("slot") === name
                              );
                            }).length > 0
                        : Array.isArray(name)
                        ? name.reduce(function (n) {
                            return (
                              []
                                .concat(toConsumableArray(_this2.children))
                                .filter(function (child) {
                                  return (
                                    child.hasAttribute("slot") &&
                                    child.getAttribute("slot") === n
                                  );
                                }).length > 0
                            );
                          })
                        : void this.warn(
                            "Did not recognize the type of the name provided to hasSlot; this function can accept a string or an array."
                          );
                    this.warn(
                      "Please provide at least one slot name for which to search."
                    );
                  },
                },
                {
                  key: "getSlot",
                  value: function () {
                    var name =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "unassigned";
                    return "unassigned" !== name
                      ? []
                          .concat(toConsumableArray(this.children))
                          .filter(function (child) {
                            return (
                              child.hasAttribute("slot") &&
                              child.getAttribute("slot") === name
                            );
                          })
                      : []
                          .concat(toConsumableArray(this.children))
                          .filter(function (child) {
                            return !child.hasAttribute("slot");
                          });
                  },
                },
                {
                  key: "cssVariable",
                  value: function (name, value) {
                    var element =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : this;
                    return (
                      (name = "--" !== name.substr(0, 2) ? "--" + name : name),
                      value
                        ? (element.style.setProperty(name, value), value)
                        : window
                            .getComputedStyle(element)
                            .getPropertyValue(name)
                            .trim() || null
                    );
                  },
                },
                {
                  key: "contextUpdate",
                  value: function () {
                    var _this3 = this,
                      lightEls = []
                        .concat(toConsumableArray(this.querySelectorAll("*")))
                        .filter(function (item) {
                          return (
                            "pfe-" === item.tagName.toLowerCase().slice(0, 4)
                          );
                        })
                        .filter(function (item) {
                          return item.parentElement
                            ? item.parentElement.closest(
                                "[" +
                                  _this3._pfeClass._getCache("prop2attr")
                                    .pfelement +
                                  "]"
                              ) === _this3
                            : void 0;
                        }),
                      shadowEls = []
                        .concat(
                          toConsumableArray(
                            this.shadowRoot.querySelectorAll("*")
                          )
                        )
                        .filter(function (item) {
                          return (
                            "pfe-" === item.tagName.toLowerCase().slice(0, 4)
                          );
                        })
                        .filter(function (item) {
                          return item.parentElement &&
                            item.parentElement.closest(
                              "[" +
                                _this3._pfeClass._getCache("prop2attr")
                                  .pfelement +
                                "]"
                            )
                            ? item.parentElement.closest(
                                "[" +
                                  _this3._pfeClass._getCache("prop2attr")
                                    .pfelement +
                                  "]"
                              ) === _this3
                            : item.getRootNode().host === _this3;
                        }),
                      nestedEls = lightEls.concat(shadowEls);
                    0 !== nestedEls.length &&
                      nestedEls.map(function (child) {
                        _this3.log(
                          "Update context of " + child.tagName.toLowerCase()
                        ),
                          Promise.all([
                            customElements.whenDefined(
                              child.tagName.toLowerCase()
                            ),
                          ]).then(function () {
                            child.resetContext(_this3.on);
                          });
                      });
                  },
                },
                {
                  key: "resetContext",
                  value: function (fallback) {
                    if (!this.isIE11) {
                      var value =
                        this.context || this.contextVariable || fallback;
                      this.on !== value &&
                        (this.on || value) &&
                        (this.log(
                          "Resetting context from " +
                            this.on +
                            " to " +
                            (value || "null")
                        ),
                        (this.on = value));
                    }
                  },
                },
                {
                  key: "version",
                  get: function () {
                    return this._pfeClass.version;
                  },
                },
                {
                  key: "randomId",
                  get: function () {
                    return "pfe-" + Math.random().toString(36).substr(2, 9);
                  },
                },
                {
                  key: "contextVariable",
                  set: function (value) {
                    this.cssVariable("context", value);
                  },
                  get: function () {
                    return (
                      this.cssVariable("context") || this.cssVariable("theme")
                    );
                  },
                },
              ],
              [
                {
                  key: "debugLog",
                  value: function () {
                    var preference =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    if (null !== preference)
                      try {
                        localStorage.pfeLog = !!preference;
                      } catch (e) {
                        return (
                          (PFElement._debugLog = !!preference),
                          PFElement._debugLog
                        );
                      }
                    return (
                      "true" === localStorage.pfeLog || PFElement._debugLog
                    );
                  },
                },
                {
                  key: "trackPerformance",
                  value: function () {
                    var preference =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    return (
                      null !== preference &&
                        (PFElement._trackPerformance = !!preference),
                      PFElement._trackPerformance
                    );
                  },
                },
                {
                  key: "log",
                  value: function () {
                    var _console;
                    PFElement.debugLog() &&
                      (_console = console).log.apply(_console, arguments);
                  },
                },
                {
                  key: "warn",
                  value: function () {
                    var _console2;
                    (_console2 = console).warn.apply(_console2, arguments);
                  },
                },
                {
                  key: "error",
                  value: function () {
                    for (
                      var _len4 = arguments.length,
                        msgs = Array(_len4),
                        _key4 = 0;
                      _key4 < _len4;
                      _key4++
                    )
                      msgs[_key4] = arguments[_key4];
                    throw new Error([].concat(msgs).join(" "));
                  },
                },
                {
                  key: "config",
                  get: function () {
                    return window.PfeConfig || {};
                  },
                },
                {
                  key: "PfeTypes",
                  get: function () {
                    return {
                      Container: "container",
                      Content: "content",
                      Combo: "combo",
                    };
                  },
                },
                {
                  key: "version",
                  get: function () {
                    return "1.10.0";
                  },
                },
                {
                  key: "properties",
                  get: function () {
                    return {
                      pfelement: {
                        title: "Upgraded flag",
                        type: Boolean,
                        default: !0,
                        observer: "_upgradeObserver",
                      },
                      on: {
                        title: "Context",
                        description:
                          "Describes the visual context (backgrounds).",
                        type: String,
                        values: ["light", "dark", "saturated"],
                        default: function (el) {
                          return el.contextVariable;
                        },
                        observer: "_onObserver",
                      },
                      context: {
                        title: "Context hook",
                        description:
                          "Lets you override the system-set context.",
                        type: String,
                        values: ["light", "dark", "saturated"],
                        observer: "_contextObserver",
                      },
                      oldTheme: {
                        type: String,
                        values: ["light", "dark", "saturated"],
                        alias: "context",
                        attr: "pfe-theme",
                      },
                      _style: {
                        title: "Custom styles",
                        type: String,
                        attr: "style",
                        observer: "_inlineStyleObserver",
                      },
                      type: {
                        title: "Component type",
                        type: String,
                        values: ["container", "content", "combo"],
                      },
                    };
                  },
                },
                {
                  key: "observedAttributes",
                  get: function () {
                    var _this4 = this,
                      properties = this.allProperties;
                    if (properties) {
                      var oa = Object.keys(properties)
                        .filter(function (prop) {
                          return (
                            properties[prop].observer ||
                            properties[prop].cascade ||
                            properties[prop].alias
                          );
                        })
                        .map(function (p) {
                          return _this4._convertPropNameToAttrName(p);
                        });
                      return [].concat(toConsumableArray(oa));
                    }
                  },
                },
              ]
            ),
            createClass(
              PFElement,
              [
                {
                  key: "connectedCallback",
                  value: function () {
                    var _this5 = this;
                    this._initializeAttributeDefaults(),
                      window.ShadyCSS && window.ShadyCSS.styleElement(this),
                      this._pfeClass.instances.push(this),
                      PFElement.allInstances.push(this),
                      "object" === _typeof(this.slots) &&
                        ((this._slotsObserver = new MutationObserver(
                          function () {
                            return _this5._initializeSlots(
                              _this5.tag,
                              _this5.slots
                            );
                          }
                        )),
                        this._initializeSlots(this.tag, this.slots));
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    var _this6 = this;
                    this._cascadeObserver && this._cascadeObserver.disconnect(),
                      this._slotsObserver && this._slotsObserver.disconnect();
                    var classIdx = this._pfeClass.instances.find(function (
                      item
                    ) {
                      return item !== _this6;
                    });
                    delete this._pfeClass.instances[classIdx];
                    var globalIdx = PFElement.allInstances.find(function (
                      item
                    ) {
                      return item !== _this6;
                    });
                    delete PFElement.allInstances[globalIdx];
                  },
                },
                {
                  key: "attributeChangedCallback",
                  value: function (attr, oldVal, newVal) {
                    if (this._pfeClass.allProperties) {
                      var propName = this._pfeClass._attr2prop(attr),
                        propDef = this._pfeClass.allProperties[propName];
                      if (propDef) {
                        if (propDef.alias) {
                          var aliasedPropDef =
                              this._pfeClass.allProperties[propDef.alias],
                            aliasedAttr = this._pfeClass._prop2attr(
                              propDef.alias
                            );
                          this.getAttribute(aliasedAttr) !== newVal &&
                            (this[propDef.alias] = this._castPropertyValue(
                              aliasedPropDef,
                              newVal
                            ));
                        }
                        propDef.observer &&
                          this[propDef.observer](
                            this._castPropertyValue(propDef, oldVal),
                            this._castPropertyValue(propDef, newVal)
                          ),
                          propDef.cascade &&
                            this._copyAttribute(
                              attr,
                              this._pfeClass._convertSelectorsToArray(
                                propDef.cascade
                              )
                            );
                      }
                    }
                  },
                },
                {
                  key: "render",
                  value: function () {
                    if (
                      ((this.shadowRoot.innerHTML = ""),
                      (this.template.innerHTML = this.html),
                      window.ShadyCSS &&
                        window.ShadyCSS.prepareTemplate(
                          this.template,
                          this.tag
                        ),
                      this.shadowRoot.appendChild(
                        this.template.content.cloneNode(!0)
                      ),
                      this.log("render"),
                      this.cascadeProperties(),
                      this.contextUpdate(),
                      PFElement.trackPerformance())
                    )
                      try {
                        performance.mark(this._markId + "-rendered"),
                          this._markCount < 1 &&
                            ((this._markCount = this._markCount + 1),
                            performance.measure(
                              this._markId + "-from-navigation-to-first-render",
                              void 0,
                              this._markId + "-rendered"
                            ),
                            performance.measure(
                              this._markId + "-from-defined-to-first-render",
                              this._markId + "-defined",
                              this._markId + "-rendered"
                            ));
                      } catch (err) {
                        this.log(
                          "Performance marks are not supported by this browser."
                        );
                      }
                    "object" === _typeof(this.slots) &&
                      this._slotsObserver &&
                      this._slotsObserver.observe(this, { childList: !0 }),
                      this._cascadeObserver &&
                        this._cascadeObserver.observe(this, {
                          attributes: !0,
                          childList: !0,
                          subtree: !0,
                        }),
                      (this._rendered = !0);
                  },
                },
                {
                  key: "emitEvent",
                  value: function (name) {
                    var _ref2 =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      _ref2$bubbles = _ref2.bubbles,
                      bubbles = void 0 === _ref2$bubbles || _ref2$bubbles,
                      _ref2$cancelable = _ref2.cancelable,
                      cancelable =
                        void 0 !== _ref2$cancelable && _ref2$cancelable,
                      _ref2$composed = _ref2.composed,
                      composed = void 0 === _ref2$composed || _ref2$composed,
                      _ref2$detail = _ref2.detail,
                      detail = void 0 === _ref2$detail ? {} : _ref2$detail;
                    detail
                      ? this.log("Custom event: " + name, detail)
                      : this.log("Custom event: " + name),
                      this.dispatchEvent(
                        new CustomEvent(name, {
                          bubbles: bubbles,
                          cancelable: cancelable,
                          composed: composed,
                          detail: detail,
                        })
                      );
                  },
                },
                {
                  key: "cascadeProperties",
                  value: function (nodeList) {
                    var _this7 = this,
                      cascade = this._pfeClass._getCache("cascadingProperties");
                    if (cascade) {
                      this._cascadeObserver &&
                        this._cascadeObserver.disconnect();
                      var selectors = Object.keys(cascade);
                      if (
                        (nodeList &&
                          ((selectors = []),
                          []
                            .concat(toConsumableArray(nodeList))
                            .forEach(function (nodeItem) {
                              Object.keys(cascade).map(function (selector) {
                                nodeItem.matches &&
                                  nodeItem.matches(selector) &&
                                  selectors.push(selector);
                              });
                            })),
                        selectors)
                      ) {
                        var components = selectors
                          .filter(function (item) {
                            return "pfe-" === item.slice(0, "pfe".length + 1);
                          })
                          .map(function (name) {
                            return customElements.whenDefined(name);
                          });
                        components
                          ? Promise.all(components).then(function () {
                              _this7._copyAttributes(selectors, cascade);
                            })
                          : this._copyAttributes(selectors, cascade);
                      }
                      this._rendered &&
                        this._cascadeObserver &&
                        this._cascadeObserver.observe(this, {
                          attributes: !0,
                          childList: !0,
                          subtree: !0,
                        });
                    }
                  },
                },
                {
                  key: "_upgradeObserver",
                  value: function () {
                    this.classList.add("PFElement");
                  },
                },
                {
                  key: "_contextObserver",
                  value: function (oldValue, newValue) {
                    newValue &&
                      ((oldValue && oldValue !== newValue) || !oldValue) &&
                      (this.log("Running the context observer"),
                      (this.on = newValue),
                      this.cssVariable("context", newValue));
                  },
                },
                {
                  key: "_onObserver",
                  value: function (oldValue, newValue) {
                    ((oldValue && oldValue !== newValue) ||
                      (newValue && !oldValue)) &&
                      (this.log("Context update"), this.contextUpdate());
                  },
                },
                {
                  key: "_inlineStyleObserver",
                  value: function (oldValue, newValue) {
                    if (oldValue !== newValue)
                      if (newValue) {
                        this.log(
                          "Style observer activated on " + this.tag,
                          "" + (newValue || "null")
                        );
                        var match =
                          /--[\w|-]*(?:context|theme):\s*(?:\"*(light|dark|saturated)\"*)/gi.exec(
                            newValue
                          );
                        if (!match) return;
                        var newContext = match[1];
                        newContext === this.on ||
                          this.context ||
                          (this.on = newContext);
                      } else this.resetContext();
                  },
                },
                {
                  key: "_parseObserver",
                  value: function (mutationsList) {
                    var _iteratorNormalCompletion = !0,
                      _didIteratorError = !1,
                      _iteratorError = void 0;
                    try {
                      for (
                        var _step, _iterator = mutationsList[Symbol.iterator]();
                        !(_iteratorNormalCompletion = (_step = _iterator.next())
                          .done);
                        _iteratorNormalCompletion = !0
                      ) {
                        var mutation = _step.value;
                        "childList" === mutation.type &&
                          mutation.addedNodes.length &&
                          this.cascadeProperties(mutation.addedNodes);
                      }
                    } catch (err) {
                      (_didIteratorError = !0), (_iteratorError = err);
                    } finally {
                      try {
                        !_iteratorNormalCompletion &&
                          _iterator.return &&
                          _iterator.return();
                      } finally {
                        if (_didIteratorError) throw _iteratorError;
                      }
                    }
                  },
                },
                {
                  key: "_castPropertyValue",
                  value: function (propDef, attrValue) {
                    var _attrValue$null$NaN$u, _attrValue$undefined$;
                    switch (propDef.type) {
                      case Number:
                        return ((_attrValue$null$NaN$u = {}),
                        defineProperty(
                          _attrValue$null$NaN$u,
                          attrValue,
                          Number(attrValue)
                        ),
                        defineProperty(_attrValue$null$NaN$u, "null", null),
                        defineProperty(_attrValue$null$NaN$u, "NaN", NaN),
                        defineProperty(
                          _attrValue$null$NaN$u,
                          "undefined",
                          void 0
                        ),
                        _attrValue$null$NaN$u)[attrValue];
                      case Boolean:
                        return null !== attrValue;
                      case String:
                        return ((_attrValue$undefined$ = {}),
                        defineProperty(
                          _attrValue$undefined$,
                          attrValue,
                          attrValue
                        ),
                        defineProperty(
                          _attrValue$undefined$,
                          "undefined",
                          void 0
                        ),
                        _attrValue$undefined$)[attrValue];
                      default:
                        return attrValue;
                    }
                  },
                },
                {
                  key: "_assignValueToAttribute",
                  value: function (obj, attr, value) {
                    (obj.type === Boolean && !value) ||
                    null === value ||
                    void 0 === value
                      ? this.removeAttribute(attr)
                      : obj.type === Boolean && "boolean" == typeof value
                      ? this.setAttribute(attr, "")
                      : (obj.values &&
                          this._validateAttributeValue(obj, attr, value),
                        this.setAttribute(attr, value));
                  },
                },
                {
                  key: "_initializeSlots",
                  value: function (tag, slots) {
                    var _this8 = this;
                    this.log("Validate slots..."),
                      this._slotsObserver && this._slotsObserver.disconnect(),
                      Object.keys(slots).forEach(function (slot) {
                        var slotObj = slots[slot];
                        if (
                          "object" ===
                          (void 0 === slotObj ? "undefined" : _typeof(slotObj))
                        ) {
                          var slotExists = !1,
                            result = [];
                          slotObj.namedSlot
                            ? ((result = _this8.getSlot(tag + "--" + slot))
                                .length > 0 &&
                                ((slotObj.nodes = result), (slotExists = !0)),
                              (result = _this8.getSlot("" + slot)).length > 0 &&
                                ((slotObj.nodes = result), (slotExists = !0)))
                            : (result = []
                                .concat(toConsumableArray(_this8.children))
                                .filter(function (child) {
                                  return !child.hasAttribute("slot");
                                })).length > 0 &&
                              ((slotObj.nodes = result), (slotExists = !0)),
                            slotExists
                              ? _this8.setAttribute("has_" + slot, "")
                              : _this8.removeAttribute("has_" + slot);
                        }
                      }),
                      this.log("Slots validated."),
                      this._slotsObserver &&
                        this._slotsObserver.observe(this, { childList: !0 });
                  },
                },
                {
                  key: "_initializeProperties",
                  value: function () {
                    var _this9 = this,
                      properties = this._pfeClass.allProperties,
                      hasCascade = !1;
                    Object.keys(properties).length > 0 &&
                      this.log("Initialize properties");
                    var _loop = function (propName) {
                      var propDef = properties[propName];
                      if (void 0 !== _this9[propName])
                        _this9.log(
                          'Property "' +
                            propName +
                            '" on ' +
                            _this9.constructor.name +
                            " cannot be defined because the property name is reserved"
                        );
                      else {
                        var attrName = _this9._pfeClass._prop2attr(propName);
                        propDef.cascade && (hasCascade = !0),
                          Object.defineProperty(_this9, propName, {
                            get: function () {
                              var attrValue = _this9.getAttribute(attrName);
                              return _this9._castPropertyValue(
                                propDef,
                                attrValue
                              );
                            },
                            set: function (rawNewVal) {
                              return (
                                _this9._assignValueToAttribute(
                                  propDef,
                                  attrName,
                                  rawNewVal
                                ),
                                rawNewVal
                              );
                            },
                            writeable: !0,
                            enumerable: !0,
                            configurable: !1,
                          });
                      }
                    };
                    for (var propName in properties) _loop(propName);
                    hasCascade &&
                      (this._cascadeObserver = new MutationObserver(
                        this._parseObserver
                      ));
                  },
                },
                {
                  key: "_initializeAttributeDefaults",
                  value: function () {
                    var properties = this._pfeClass.allProperties;
                    for (var propName in properties) {
                      var _propDef = properties[propName],
                        attrName = this._pfeClass._prop2attr(propName);
                      if (_propDef.hasOwnProperty("default")) {
                        var value = _propDef.default;
                        "function" == typeof _propDef.default &&
                          (value = _propDef.default(this)),
                          this.hasAttribute(attrName) ||
                            this._assignValueToAttribute(
                              _propDef,
                              attrName,
                              value
                            );
                      }
                    }
                  },
                },
                {
                  key: "_validateAttributeValue",
                  value: function (propDef, attr, value) {
                    return (
                      Array.isArray(propDef.values) &&
                        propDef.values.length > 0 &&
                        !propDef.values.includes(value) &&
                        this.warn(
                          value +
                            " is not a valid value for " +
                            attr +
                            ". Please provide one of the following values: " +
                            propDef.values.join(", ")
                        ),
                      value
                    );
                  },
                },
                {
                  key: "_copyAttributes",
                  value: function (selectors, set) {
                    var _this10 = this;
                    selectors.forEach(function (selector) {
                      set[selector].forEach(function (attr) {
                        _this10._copyAttribute(attr, selector);
                      });
                    });
                  },
                },
                {
                  key: "_copyAttribute",
                  value: function (name, to) {
                    var recipients = [].concat(
                        toConsumableArray(this.querySelectorAll(to)),
                        toConsumableArray(this.shadowRoot.querySelectorAll(to))
                      ),
                      value = this.getAttribute(name),
                      fname =
                        null == value ? "removeAttribute" : "setAttribute",
                      _iteratorNormalCompletion2 = !0,
                      _didIteratorError2 = !1,
                      _iteratorError2 = void 0;
                    try {
                      for (
                        var _step2, _iterator2 = recipients[Symbol.iterator]();
                        !(_iteratorNormalCompletion2 = (_step2 =
                          _iterator2.next()).done);
                        _iteratorNormalCompletion2 = !0
                      ) {
                        _step2.value[fname](name, value);
                      }
                    } catch (err) {
                      (_didIteratorError2 = !0), (_iteratorError2 = err);
                    } finally {
                      try {
                        !_iteratorNormalCompletion2 &&
                          _iterator2.return &&
                          _iterator2.return();
                      } finally {
                        if (_didIteratorError2) throw _iteratorError2;
                      }
                    }
                  },
                },
              ],
              [
                {
                  key: "_validateProperties",
                  value: function () {
                    for (var propName in this.allProperties) {
                      var _propDef2 = this.allProperties[propName];
                      [String, Number, Boolean].includes(
                        _propDef2.type || String
                      ) ||
                        this.error(
                          'Property "' +
                            propName +
                            '" on ' +
                            this.name +
                            " must have type String, Number, or Boolean."
                        ),
                        /^[a-z_]/.test(propName) ||
                          this.error(
                            "Property " +
                              this.name +
                              "." +
                              propName +
                              " defined, but prop names must begin with a lower-case letter or an underscore"
                          );
                      var isFunction = "function" == typeof _propDef2.default;
                      !_propDef2.default ||
                        isValidDefaultType(_propDef2) ||
                        isFunction ||
                        this.error(
                          "[" +
                            this.name +
                            "] The default value `" +
                            _propDef2.default +
                            "` does not match the assigned type " +
                            _propDef2.type.name +
                            " for the '" +
                            propName +
                            "' property"
                        );
                    }
                  },
                },
                {
                  key: "_prop2attr",
                  value: function (propName) {
                    return this._getCache("prop2attr")[propName];
                  },
                },
                {
                  key: "_attr2prop",
                  value: function (attrName) {
                    return this._getCache("attr2prop")[attrName];
                  },
                },
                {
                  key: "_convertPropNameToAttrName",
                  value: function (propName) {
                    var propDef = this.allProperties[propName];
                    return propDef.attr
                      ? propDef.attr
                      : propName
                          .replace(/^_/, "")
                          .replace(/^[A-Z]/, function (l) {
                            return l.toLowerCase();
                          })
                          .replace(/[A-Z]/g, function (l) {
                            return "-" + l.toLowerCase();
                          });
                  },
                },
                {
                  key: "_convertAttrNameToPropName",
                  value: function (attrName) {
                    for (var prop in this.allProperties)
                      if (this.allProperties[prop].attr === attrName)
                        return prop;
                    return attrName.replace(/-([A-Za-z])/g, function (l) {
                      return l[1].toUpperCase();
                    });
                  },
                },
                {
                  key: "_convertSelectorsToArray",
                  value: function (selectors) {
                    if (selectors) {
                      if ("string" == typeof selectors)
                        return selectors.split(",");
                      if (
                        "object" ===
                        (void 0 === selectors
                          ? "undefined"
                          : _typeof(selectors))
                      )
                        return selectors;
                      this.warn(
                        "selectors should be provided as a string, array, or object; received: " +
                          (void 0 === selectors
                            ? "undefined"
                            : _typeof(selectors)) +
                          "."
                      );
                    }
                  },
                },
                {
                  key: "_parsePropertiesForCascade",
                  value: function (mergedProperties) {
                    var _this11 = this,
                      cascadingProperties = {},
                      _loop2 = function (propName, config) {
                        var cascadeTo = _this11._convertSelectorsToArray(
                          config.cascade
                        );
                        cascadeTo &&
                          cascadeTo.map(function (nodeItem) {
                            var attr = _this11._prop2attr(propName);
                            cascadingProperties[nodeItem]
                              ? cascadingProperties[nodeItem].push(attr)
                              : (cascadingProperties[nodeItem] = [attr]);
                          });
                      },
                      _iteratorNormalCompletion3 = !0,
                      _didIteratorError3 = !1,
                      _iteratorError3 = void 0;
                    try {
                      for (
                        var _step3,
                          _iterator3 =
                            Object.entries(mergedProperties)[Symbol.iterator]();
                        !(_iteratorNormalCompletion3 = (_step3 =
                          _iterator3.next()).done);
                        _iteratorNormalCompletion3 = !0
                      ) {
                        var _ref3 = _step3.value,
                          _ref4 = slicedToArray(_ref3, 2);
                        _loop2(_ref4[0], _ref4[1]);
                      }
                    } catch (err) {
                      (_didIteratorError3 = !0), (_iteratorError3 = err);
                    } finally {
                      try {
                        !_iteratorNormalCompletion3 &&
                          _iterator3.return &&
                          _iterator3.return();
                      } finally {
                        if (_didIteratorError3) throw _iteratorError3;
                      }
                    }
                    return cascadingProperties;
                  },
                },
                {
                  key: "create",
                  value: function (pfe) {
                    if (
                      (pfe._createCache(),
                      pfe._populateCache(pfe),
                      pfe._validateProperties(),
                      window.customElements.define(pfe.tag, pfe),
                      PFElement.trackPerformance())
                    )
                      try {
                        performance.mark(this._markId + "-defined");
                      } catch (err) {
                        this.log(
                          "Performance marks are not supported by this browser."
                        );
                      }
                  },
                },
                {
                  key: "_createCache",
                  value: function () {
                    this._cache = {
                      properties: {},
                      globalProperties: {},
                      componentProperties: {},
                      cascadingProperties: {},
                      attr2prop: {},
                      prop2attr: {},
                    };
                  },
                },
                {
                  key: "_setCache",
                  value: function (namespace, object) {
                    this._cache[namespace] = object;
                  },
                },
                {
                  key: "_getCache",
                  value: function (namespace) {
                    return namespace ? this._cache[namespace] : this._cache;
                  },
                },
                {
                  key: "_populateCache",
                  value: function (pfe) {
                    var mergedProperties = _extends(
                      {},
                      pfe.properties,
                      PFElement.properties
                    );
                    pfe._setCache("componentProperties", pfe.properties),
                      pfe._setCache("globalProperties", PFElement.properties),
                      pfe._setCache("properties", mergedProperties);
                    var prop2attr = {},
                      attr2prop = {};
                    for (var propName in mergedProperties) {
                      var attrName = this._convertPropNameToAttrName(propName);
                      (prop2attr[propName] = attrName),
                        (attr2prop[attrName] = propName);
                    }
                    pfe._setCache("attr2prop", attr2prop),
                      pfe._setCache("prop2attr", prop2attr);
                    var cascadingProperties =
                      this._parsePropertiesForCascade(mergedProperties);
                    Object.keys(cascadingProperties) &&
                      pfe._setCache("cascadingProperties", cascadingProperties);
                  },
                },
                {
                  key: "allProperties",
                  get: function () {
                    return this._getCache("properties");
                  },
                },
                {
                  key: "cascadingProperties",
                  get: function () {
                    return this._getCache("cascadingProperties");
                  },
                },
                {
                  key: "breakpoint",
                  get: function () {
                    return {
                      xs: "0px",
                      sm: "576px",
                      md: "768px",
                      lg: "992px",
                      xl: "1200px",
                      "2xl": "1450px",
                    };
                  },
                },
              ]
            ),
            PFElement
          );
        })();
      return (
        (PFElement.allInstances = []),
        (function (logFunction) {
          logger = logFunction;
          var polyfillPresent = window.WebComponents,
            polyfillReady = polyfillPresent && window.WebComponents.ready;
          !polyfillPresent || polyfillReady
            ? handleWebComponentsReady()
            : window.addEventListener(
                "WebComponentsReady",
                handleWebComponentsReady
              );
        })(PFElement.log),
        PFElement
      );
    }),
      (function (global, factory) {
        "object" == typeof exports && "undefined" != typeof module
          ? factory(exports, require("../../pfelement/dist/pfelement.umd"))
          : "function" == typeof define && define.amd
          ? define(["exports", "../../pfelement/dist/pfelement.umd"], factory)
          : factory(
              ((global = global || self).PfeCollapse = {}),
              global.PFElement
            );
      })(this, function (exports, PFElement) {
        "use strict";
        PFElement =
          PFElement &&
          Object.prototype.hasOwnProperty.call(PFElement, "default")
            ? PFElement.default
            : PFElement;
        var classCallCheck = function (instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError("Cannot call a class as a function");
          },
          createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                (descriptor.enumerable = descriptor.enumerable || !1),
                  (descriptor.configurable = !0),
                  "value" in descriptor && (descriptor.writable = !0),
                  Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
              );
            };
          })(),
          get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
              var parent = Object.getPrototypeOf(object);
              return null === parent ? void 0 : get(parent, property, receiver);
            }
            if ("value" in desc) return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0;
          },
          inherits = function (subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }
            )),
              superClass &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(subClass, superClass)
                  : (subClass.__proto__ = superClass));
          },
          possibleConstructorReturn = function (self, call) {
            if (!self)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !call ||
              ("object" != typeof call && "function" != typeof call)
              ? self
              : call;
          };
        function generateId() {
          return Math.random().toString(36).substr(2, 9);
        }
        var PfeCollapseToggle = (function (_PFElement) {
            function PfeCollapseToggle(pfeClass) {
              var _ref =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                _ref$setTabIndex = _ref.setTabIndex,
                setTabIndex = void 0 === _ref$setTabIndex || _ref$setTabIndex,
                _ref$addKeydownHandle = _ref.addKeydownHandler,
                addKeydownHandler =
                  void 0 === _ref$addKeydownHandle || _ref$addKeydownHandle;
              classCallCheck(this, PfeCollapseToggle);
              var _this = possibleConstructorReturn(
                this,
                (
                  PfeCollapseToggle.__proto__ ||
                  Object.getPrototypeOf(PfeCollapseToggle)
                ).call(this, pfeClass || PfeCollapseToggle)
              );
              return (
                (_this.controlledPanel = !1),
                (_this._setTabIndex = setTabIndex),
                (_this._addKeydownHandler = addKeydownHandler),
                _this.addEventListener("click", _this._clickHandler),
                addKeydownHandler &&
                  _this.addEventListener("keydown", _this._keydownHandler),
                _this
              );
            }
            return (
              inherits(PfeCollapseToggle, PFElement),
              createClass(
                PfeCollapseToggle,
                [
                  {
                    key: "html",
                    get: function () {
                      return "\n<style>:host{display:block;cursor:default} /*# sourceMappingURL=pfe-collapse-toggle.min.css.map */</style>\n<slot></slot>";
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-collapse-toggle.html";
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-collapse-toggle.scss";
                    },
                  },
                  {
                    key: "expanded",
                    get: function () {
                      return "true" === this.getAttribute("aria-expanded");
                    },
                    set: function (val) {
                      var value = Boolean(val);
                      this.setAttribute("aria-expanded", value);
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "slots",
                    get: function () {
                      return {
                        default: {
                          title: "Default",
                          type: "array",
                          namedSlot: !1,
                          items: {
                            oneOf: [
                              { $ref: "pfe-collapsibe-toggle" },
                              { $ref: "pfe-collapse-panel" },
                            ],
                          },
                        },
                      };
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-collapse-toggle";
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        ariaExpanded: {
                          title: "Aria expanded",
                          type: String,
                          prefix: !1,
                          values: ["true", "false"],
                        },
                        ariaControls: {
                          title: "Aria controls",
                          type: String,
                          prefix: !1,
                          observer: "_ariaControlsChanged",
                        },
                      };
                    },
                  },
                ]
              ),
              createClass(PfeCollapseToggle, [
                {
                  key: "connectedCallback",
                  value: function () {
                    get(
                      PfeCollapseToggle.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeCollapseToggle.prototype),
                      "connectedCallback",
                      this
                    ).call(this),
                      (this.expanded = !1),
                      (this.id =
                        this.id || PfeCollapseToggle.tag + "-" + generateId()),
                      this.setAttribute("role", "button"),
                      this._setTabIndex && this.setAttribute("tabindex", 0),
                      this.controlledPanel ||
                        this._connectPanel(this.getAttribute("aria-controls"));
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    get(
                      PfeCollapseToggle.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeCollapseToggle.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this),
                      this.removeEventListener("click", this._clickHandler),
                      this._addKeydownHandler &&
                        this.removeEventListener(
                          "keydown",
                          this._keydownHandler
                        );
                  },
                },
                {
                  key: "_ariaControlsChanged",
                  value: function (oldVal, newVal) {
                    newVal && this._connectPanel(newVal);
                  },
                },
                {
                  key: "toggle",
                  value: function () {
                    this.hasAttribute("disabled") ||
                      ((this.expanded = !this.expanded),
                      this.controlledPanel ||
                        this._connectPanel(this.getAttribute("aria-controls")),
                      this.controlledPanel
                        ? ((this.controlledPanel.expanded = this.expanded),
                          this.emitEvent(PfeCollapse.events.change, {
                            detail: {
                              expanded: this.expanded,
                              toggle: this,
                              panel: this.controlledPanel,
                            },
                          }))
                        : this.warn(
                            "This toggle doesn't have a panel associated with it"
                          ));
                  },
                },
                {
                  key: "_clickHandler",
                  value: function () {
                    this.toggle();
                  },
                },
                {
                  key: "_keydownHandler",
                  value: function (event) {
                    switch (event.key) {
                      case " ":
                      case "Spacebar":
                      case "Enter":
                        this.toggle();
                    }
                  },
                },
                {
                  key: "_connectPanel",
                  value: function (id) {
                    this.getRootNode
                      ? (this.controlledPanel =
                          this.getRootNode().querySelector("#" + id))
                      : (this.controlledPanel = document.querySelector(
                          "#" + id
                        ));
                  },
                },
              ]),
              PfeCollapseToggle
            );
          })(),
          PfeCollapsePanel = (function (_PFElement2) {
            function PfeCollapsePanel(pfeClass) {
              return (
                classCallCheck(this, PfeCollapsePanel),
                possibleConstructorReturn(
                  this,
                  (
                    PfeCollapsePanel.__proto__ ||
                    Object.getPrototypeOf(PfeCollapsePanel)
                  ).call(this, pfeClass || PfeCollapsePanel)
                )
              );
            }
            return (
              inherits(PfeCollapsePanel, PFElement),
              createClass(
                PfeCollapsePanel,
                [
                  {
                    key: "html",
                    get: function () {
                      return "\n<style>:host{display:none;overflow:hidden;will-change:height}:host([expanded]){display:block;position:relative}:host(.animating){display:block;-webkit-transition:height .3s ease-in-out;transition:height .3s ease-in-out} /*# sourceMappingURL=pfe-collapse-panel.min.css.map */</style>\n<slot></slot>";
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-collapse-panel.html";
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-collapse-panel.scss";
                    },
                  },
                  {
                    key: "animates",
                    get: function () {
                      return "false" !== this.animation;
                    },
                  },
                  {
                    key: "expanded",
                    get: function () {
                      return (
                        this.hasAttribute("expanded") ||
                        this.hasAttribute("pfe-expanded")
                      );
                    },
                    set: function (val) {
                      if (Boolean(val)) {
                        if (
                          (this.setAttribute("pfe-expanded", ""),
                          this.setAttribute("expanded", ""),
                          this.animates)
                        ) {
                          var height = this.getBoundingClientRect().height;
                          this._fireAnimationEvent("opening"),
                            this._animate(0, height);
                        }
                      } else if (
                        this.hasAttribute("expanded") ||
                        this.hasAttribute("pfe-expanded")
                      ) {
                        var _height = this.getBoundingClientRect().height;
                        this.removeAttribute("expanded"),
                          this.removeAttribute("pfe-expanded"),
                          this.animates &&
                            (this._fireAnimationEvent("closing"),
                            this._animate(_height, 0));
                      }
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "slots",
                    get: function () {
                      return {
                        default: {
                          title: "Default",
                          type: "array",
                          namedSlot: !1,
                          items: {
                            oneOf: [
                              { $ref: "pfe-collapsibe-toggle" },
                              { $ref: "pfe-collapse-panel" },
                            ],
                          },
                        },
                      };
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-collapse-panel";
                    },
                  },
                  {
                    key: "events",
                    get: function () {
                      return {
                        animationStart: this.tag + ":animation-start",
                        animationEnd: this.tag + ":animation-end",
                      };
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        animation: {
                          title: "Animation",
                          type: String,
                          values: ["false"],
                        },
                        oldAnimation: {
                          alias: "animation",
                          attr: "pfe-animation",
                        },
                      };
                    },
                  },
                ]
              ),
              createClass(PfeCollapsePanel, [
                {
                  key: "connectedCallback",
                  value: function () {
                    get(
                      PfeCollapsePanel.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeCollapsePanel.prototype),
                      "connectedCallback",
                      this
                    ).call(this),
                      (this.expanded = !1),
                      (this.id =
                        this.id || PfeCollapsePanel.tag + "-" + generateId());
                  },
                },
                {
                  key: "_animate",
                  value: function (start, end) {
                    var _this3 = this;
                    this.classList.add("animating"),
                      (this.style.height = start + "px"),
                      requestAnimationFrame(function () {
                        requestAnimationFrame(function () {
                          (_this3.style.height = end + "px"),
                            _this3.classList.add("animating"),
                            _this3.addEventListener(
                              "transitionend",
                              _this3._transitionEndHandler
                            );
                        });
                      });
                  },
                },
                {
                  key: "_transitionEndHandler",
                  value: function (event) {
                    (event.target.style.height = ""),
                      event.target.classList.remove("animating"),
                      event.target.removeEventListener(
                        "transitionend",
                        this._transitionEndHandler
                      ),
                      this.emitEvent(PfeCollapsePanel.events.animationEnd, {
                        detail: { expanded: this.expanded, panel: this },
                      });
                  },
                },
                {
                  key: "_fireAnimationEvent",
                  value: function (state) {
                    this.emitEvent(PfeCollapsePanel.events.animationStart, {
                      detail: { state: state, panel: this },
                    });
                  },
                },
              ]),
              PfeCollapsePanel
            );
          })(),
          PfeCollapse = (function (_PFElement3) {
            function PfeCollapse(pfeClass) {
              classCallCheck(this, PfeCollapse);
              var _this4 = possibleConstructorReturn(
                this,
                (
                  PfeCollapse.__proto__ || Object.getPrototypeOf(PfeCollapse)
                ).call(this, pfeClass || PfeCollapse)
              );
              return (
                (_this4._toggle = null),
                (_this4._panel = null),
                (_this4._linkControls = _this4._linkControls.bind(_this4)),
                (_this4._changeHandler = _this4._changeHandler.bind(_this4)),
                (_this4._observer = new MutationObserver(_this4._linkControls)),
                _this4.addEventListener(
                  PfeCollapse.events.change,
                  _this4._changeHandler
                ),
                _this4.addEventListener(
                  PfeCollapse.events.animationStart,
                  _this4._animationStartHandler
                ),
                _this4.addEventListener(
                  PfeCollapse.events.animationEnd,
                  _this4._animationEndHandler
                ),
                _this4
              );
            }
            return (
              inherits(PfeCollapse, PFElement),
              createClass(
                PfeCollapse,
                [
                  {
                    key: "html",
                    get: function () {
                      return "\n<style>:host{display:block}:host([hidden]){display:none}:host(.animating),:host([expanded]){display:block} /*# sourceMappingURL=pfe-collapse.min.css.map */</style>\n<slot></slot>";
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-collapse.html";
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-collapse.scss";
                    },
                  },
                  {
                    key: "schemaUrl",
                    get: function () {
                      return "pfe-collapse.json";
                    },
                  },
                  {
                    key: "animates",
                    get: function () {
                      return "false" !== this.animation;
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "slots",
                    get: function () {
                      return {
                        default: {
                          title: "Default",
                          type: "array",
                          namedSlot: !1,
                          items: {
                            oneOf: [
                              { $ref: "pfe-collapsibe-toggle" },
                              { $ref: "pfe-collapse-panel" },
                            ],
                          },
                        },
                      };
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-collapse";
                    },
                  },
                  {
                    key: "events",
                    get: function () {
                      return { change: this.tag + ":change" };
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        animation: {
                          title: "Animation",
                          type: String,
                          values: ["false"],
                          observer: "_animationChanged",
                        },
                        oldAnimation: {
                          alias: "animation",
                          attr: "pfe-animation",
                        },
                      };
                    },
                  },
                ]
              ),
              createClass(PfeCollapse, [
                {
                  key: "connectedCallback",
                  value: function () {
                    var _this5 = this;
                    get(
                      PfeCollapse.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeCollapse.prototype),
                      "connectedCallback",
                      this
                    ).call(this),
                      Promise.all([
                        customElements.whenDefined(PfeCollapsePanel.tag),
                        customElements.whenDefined(PfeCollapseToggle.tag),
                      ]).then(function () {
                        _this5.hasLightDOM() && _this5._linkControls(),
                          _this5._observer.observe(_this5, { childList: !0 });
                      });
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    get(
                      PfeCollapse.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeCollapse.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this),
                      this.removeEventListener(
                        PfeCollapse.events.change,
                        this._changeHandler
                      ),
                      this.removeEventListener(
                        PfeCollapse.events.animationStart,
                        this._animationStartHandler
                      ),
                      this.removeEventListener(
                        PfeCollapse.events.animationEnd,
                        this._animationEndHandler
                      ),
                      this._observer.disconnect();
                  },
                },
                {
                  key: "_animationChanged",
                  value: function (oldVal, newVal) {
                    newVal &&
                      (("false" !== newVal && "true" !== newVal) ||
                        (this._panel && (this._panel.animation = newVal)));
                  },
                },
                {
                  key: "toggle",
                  value: function () {
                    this._toggle.toggle();
                  },
                },
                {
                  key: "_linkControls",
                  value: function () {
                    (this._toggle = this.querySelector(PfeCollapseToggle.tag)),
                      (this._panel = this.querySelector(PfeCollapsePanel.tag)),
                      this._toggle.setAttribute(
                        "aria-controls",
                        this._panel.id
                      );
                  },
                },
                {
                  key: "_animationStartHandler",
                  value: function () {
                    this.classList.add("animating");
                  },
                },
                {
                  key: "_animationEndHandler",
                  value: function () {
                    this.classList.remove("animating");
                  },
                },
                { key: "_changeHandler", value: function (event) {} },
              ]),
              PfeCollapse
            );
          })();
        PFElement.create(PfeCollapse),
          PFElement.create(PfeCollapseToggle),
          PFElement.create(PfeCollapsePanel),
          (exports.PfeCollapse = PfeCollapse),
          (exports.PfeCollapsePanel = PfeCollapsePanel),
          (exports.PfeCollapseToggle = PfeCollapseToggle),
          Object.defineProperty(exports, "__esModule", { value: !0 });
      }),
      (function (global, factory) {
        "object" == typeof exports && "undefined" != typeof module
          ? (module.exports = factory(
              require("../../pfelement/dist/pfelement.umd")
            ))
          : "function" == typeof define && define.amd
          ? define(["../../pfelement/dist/pfelement.umd"], factory)
          : ((global = global || self).PfeClipboard = factory(
              global.PFElement
            ));
      })(this, function (PFElement) {
        "use strict";
        PFElement =
          PFElement &&
          Object.prototype.hasOwnProperty.call(PFElement, "default")
            ? PFElement.default
            : PFElement;
        var classCallCheck = function (instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError("Cannot call a class as a function");
          },
          createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                (descriptor.enumerable = descriptor.enumerable || !1),
                  (descriptor.configurable = !0),
                  "value" in descriptor && (descriptor.writable = !0),
                  Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
              );
            };
          })(),
          get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
              var parent = Object.getPrototypeOf(object);
              return null === parent ? void 0 : get(parent, property, receiver);
            }
            if ("value" in desc) return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0;
          },
          possibleConstructorReturn = function (self, call) {
            if (!self)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !call ||
              ("object" != typeof call && "function" != typeof call)
              ? self
              : call;
          },
          PfeClipboard = (function (_PFElement) {
            function PfeClipboard() {
              return (
                classCallCheck(this, PfeClipboard),
                possibleConstructorReturn(
                  this,
                  (
                    PfeClipboard.__proto__ ||
                    Object.getPrototypeOf(PfeClipboard)
                  ).call(this, PfeClipboard, { type: PfeClipboard.PfeType })
                )
              );
            }
            return (
              (function (subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof superClass
                  );
                (subClass.prototype = Object.create(
                  superClass && superClass.prototype,
                  {
                    constructor: {
                      value: subClass,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  }
                )),
                  superClass &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(subClass, superClass)
                      : (subClass.__proto__ = superClass));
              })(PfeClipboard, PFElement),
              createClass(
                PfeClipboard,
                [
                  {
                    key: "html",
                    get: function () {
                      return (
                        "\n<style>:host{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;color:#06c!important;color:var(--pfe-clipboard--Color,var(--pfe-broadcasted--link,#06c))!important;cursor:pointer;padding:6px 16px;padding:var(--pfe-clipboard--Padding,6px 16px);font-weight:300;font-weight:var(--pfe-clipboard--FontWeight,var(--pfe-theme--font-weight--light,300));font-size:1rem;font-size:var(--pfe-clipboard--FontSize,var(--pf-global--FontSize--md,1rem))}:host([hidden]){display:none}.pfe-clipboard__icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:1em;width:var(--pfe-clipboard--icon--Width,var(--pfe-theme--icon-size,1em));height:auto;height:var(--pfe-clipboard--icon--Height,auto);margin:0 .4825rem 0 0;margin:var(--pfe-clipboard--icon--Margin,0 .4825rem 0 0);--pfe-icon--Color:var(--pfe-clipboard--icon--Color, var(--pfe-theme--color--text--muted, #6a6e73))}.pfe-clipboard__icon svg{fill:#6a6e73!important;fill:var(--pfe-clipboard--icon--Color,var(--pfe-theme--color--text--muted,#6a6e73))!important}.pfe-clipboard__text{color:#06c!important;color:var(--pfe-clipboard--Color,var(--pfe-broadcasted--link,#06c))!important}.pfe-clipboard__text--success{color:#3e8635!important;color:var(--pfe-clipboard--text--success--Color,var(--pfe-theme--color--feedback--success,#3e8635))!important}.pfe-clipboard[copied] .pfe-clipboard__text,:host([copied]) .pfe-clipboard__text{display:none!important}.pfe-clipboard:not([copied]) .pfe-clipboard__text--success,:host(:not([copied])) .pfe-clipboard__text--success{display:none!important}.pfe-clipboard__icon>*,::slotted([slot=icon]){width:100%}:host(:not([aria-disabled=true]).focus-within),:host(:not([aria-disabled=true]):focus){--pfe-clipboard--Color:var(--pfe-clipboard--Color--focus, var(--pfe-broadcasted--link--focus, #004080))}:host(:not([aria-disabled=true])) ::slotted(:hover),:host(:not([aria-disabled=true]):hover){--pfe-clipboard--Color:var(--pfe-clipboard--Color--hover, var(--pfe-broadcasted--link--hover, #004080))}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host{display:inline-block}.pfe-clipboard__icon{display:inline-block;margin-right:0}.pfe-clipboard__text{display:inline-block}.pfe-clipboard__text--success{display:inline-block}} /*# sourceMappingURL=pfe-clipboard.min.css.map */</style>\n\x3c!-- icon slot --\x3e\n" +
                        (this.noIcon
                          ? ""
                          : '\n    <div class="pfe-clipboard__icon">\n        <slot name="icon" id="icon">\n            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15.277 16"><g transform="translate(-2.077 -1.807)"><path class="a" d="M15.34,2.879a3.86,3.86,0,0,0-5.339,0L6.347,6.545a3.769,3.769,0,0,0,0,5.339.81.81,0,0,0,1.132,0,.823.823,0,0,0,0-1.145A2.144,2.144,0,0,1,7.5,7.677l3.641-3.654a2.161,2.161,0,1,1,3.049,3.062l-.8.8a.811.811,0,1,0,1.145,1.132l.8-.8a3.769,3.769,0,0,0,0-5.339Z" transform="translate(0.906 0)"/><path class="a" d="M10.482,6.822a.823.823,0,0,0,0,1.145,2.161,2.161,0,0,1,0,3.049L7.343,14.155a2.161,2.161,0,0,1-3.062,0,2.187,2.187,0,0,1,0-3.062l.193-.116a.823.823,0,0,0,0-1.145.811.811,0,0,0-1.132,0l-.193.193a3.86,3.86,0,0,0,0,5.339,3.86,3.86,0,0,0,5.339,0l3.126-3.139A3.731,3.731,0,0,0,12.72,9.562a3.769,3.769,0,0,0-1.094-2.74A.823.823,0,0,0,10.482,6.822Z" transform="translate(0 1.37)"/></g></svg>\n        </slot>\n    </div>\n') +
                        '\n<div class="pfe-clipboard__text">\n    <slot name="text" id="text">Copy URL</slot>\n</div>\n<div class="pfe-clipboard__text--success" role="alert">\n    <slot name="text--success" id="text--success">Copied</slot>\n</div>'
                      );
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-clipboard.html";
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-clipboard.scss";
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-clipboard";
                    },
                  },
                  {
                    key: "meta",
                    get: function () {
                      return {
                        title: "Clipboard",
                        description: "Copy current URL to clipboard.",
                      };
                    },
                  },
                  {
                    key: "events",
                    get: function () {
                      return { copied: this.tag + ":copied" };
                    },
                  },
                  {
                    key: "PfeType",
                    get: function () {
                      return PFElement.PfeTypes.Content;
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        noIcon: {
                          title: "No icon",
                          type: Boolean,
                          observer: "_noIconChanged",
                        },
                        copiedDuration: {
                          title: "Success message duration (in seconds)",
                          type: Number,
                          default: 3,
                        },
                        role: { type: String, default: "button" },
                        tabindex: { type: Number, default: 0 },
                      };
                    },
                  },
                  {
                    key: "slots",
                    get: function () {
                      return {
                        icon: {
                          title: "Icon",
                          description:
                            "This field can accept an SVG, pfe-icon component, or other format for displaying an icon.",
                          slotName: "icon",
                          slotClass: "pfe-clipboard__icon",
                          slotId: "icon",
                        },
                        text: {
                          title: "Default text",
                          slotName: "text",
                          slotClass: "pfe-clipboard__text",
                          slotId: "text",
                        },
                        textSuccess: {
                          title: "Success message",
                          description:
                            "Shown when the URL is successfully copied to the clipboard.",
                          slotName: "text--success",
                          slotClass: "pfe-clipboard__text--success",
                          slotId: "text--success",
                        },
                      };
                    },
                  },
                ]
              ),
              createClass(PfeClipboard, [
                {
                  key: "connectedCallback",
                  value: function () {
                    get(
                      PfeClipboard.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeClipboard.prototype),
                      "connectedCallback",
                      this
                    ).call(this),
                      this.addEventListener(
                        "click",
                        this._clickHandler.bind(this)
                      ),
                      this.addEventListener(
                        "keydown",
                        this._keydownHandler.bind(this)
                      );
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    this.removeEventListener(
                      "click",
                      this._clickHandler.bind(this)
                    ),
                      this.removeEventListener(
                        "keydown",
                        this._keydownHandler.bind(this)
                      ),
                      this.shadowRoot.removeEventListener(
                        "slotchange",
                        this._slotchangeHandler.bind(this)
                      ),
                      get(
                        PfeClipboard.prototype.__proto__ ||
                          Object.getPrototypeOf(PfeClipboard.prototype),
                        "disconnectedCallback",
                        this
                      ).call(this);
                  },
                },
                {
                  key: "_noIconChanged",
                  value: function (previousValue) {
                    this._rendered &&
                      this.noIcon !== previousValue &&
                      this.render();
                  },
                },
                {
                  key: "_clickHandler",
                  value: function (event) {
                    var _this2 = this;
                    this.copyURLToClipboard()
                      .then(function (url) {
                        _this2.emitEvent(PfeClipboard.events.copied, {
                          detail: { url: url },
                        }),
                          _this2.setAttribute("copied", ""),
                          setTimeout(function () {
                            _this2.removeAttribute("copied");
                          }, _this2._formattedCopiedTimeout());
                      })
                      .catch(function (error) {
                        _this2.warn(error);
                      });
                  },
                },
                {
                  key: "_formattedCopiedTimeout",
                  value: function () {
                    var copiedDuration = Number(1e3 * this.copiedDuration);
                    return copiedDuration > -1
                      ? copiedDuration
                      : (this.warn(
                          "copied-duration must be a valid number. Defaulting to 3 seconds."
                        ),
                        3e3);
                  },
                },
                {
                  key: "_keydownHandler",
                  value: function (event) {
                    switch (event.key || event.keyCode) {
                      case "Enter":
                        this._clickHandler(event);
                        break;
                      case " ":
                        event.stopPropagation(),
                          event.preventDefault(),
                          this._clickHandler(event);
                    }
                  },
                },
                {
                  key: "copyURLToClipboard",
                  value: function () {
                    return new Promise(function (resolve, reject) {
                      var url = window.location.href;
                      if (navigator.clipboard)
                        navigator.clipboard.writeText(url).then(resolve(url));
                      else if (document.queryCommandEnabled("copy")) {
                        var dummy = document.createElement("input");
                        document.body.appendChild(dummy),
                          (dummy.value = url),
                          dummy.select(),
                          document.execCommand("copy"),
                          document.body.removeChild(dummy),
                          resolve(url);
                      } else
                        reject(
                          new Error(
                            "Your browser does not support copying to the clipboard."
                          )
                        );
                    });
                  },
                },
              ]),
              PfeClipboard
            );
          })();
        return PFElement.create(PfeClipboard), PfeClipboard;
      }),
      (function (global, factory) {
        "object" == typeof exports && "undefined" != typeof module
          ? (module.exports = factory(
              require("../../pfelement/dist/pfelement.umd")
            ))
          : "function" == typeof define && define.amd
          ? define(["../../pfelement/dist/pfelement.umd"], factory)
          : ((global = global || self).PfeAccordion = factory(
              global.PFElement
            ));
      })(this, function (PFElement) {
        "use strict";
        (PFElement =
          PFElement &&
          Object.prototype.hasOwnProperty.call(PFElement, "default")
            ? PFElement.default
            : PFElement),
          Array.prototype.findIndex ||
            Object.defineProperty(Array.prototype, "findIndex", {
              value: function (predicate) {
                if (null == this)
                  throw new TypeError('"this" is null or not defined');
                var o = Object(this),
                  len = o.length >>> 0;
                if ("function" != typeof predicate)
                  throw new TypeError("predicate must be a function");
                for (var thisArg = arguments[1], k = 0; k < len; ) {
                  var kValue = o[k];
                  if (predicate.call(thisArg, kValue, k, o)) return k;
                  k++;
                }
                return -1;
              },
            });
        var classCallCheck = function (instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError("Cannot call a class as a function");
          },
          createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                (descriptor.enumerable = descriptor.enumerable || !1),
                  (descriptor.configurable = !0),
                  "value" in descriptor && (descriptor.writable = !0),
                  Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
              );
            };
          })(),
          get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
              var parent = Object.getPrototypeOf(object);
              return null === parent ? void 0 : get(parent, property, receiver);
            }
            if ("value" in desc) return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0;
          },
          inherits = function (subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }
            )),
              superClass &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(subClass, superClass)
                  : (subClass.__proto__ = superClass));
          },
          possibleConstructorReturn = function (self, call) {
            if (!self)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !call ||
              ("object" != typeof call && "function" != typeof call)
              ? self
              : call;
          },
          toConsumableArray = function (arr) {
            if (Array.isArray(arr)) {
              for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
                arr2[i] = arr[i];
              return arr2;
            }
            return Array.from(arr);
          },
          PfeAccordionHeader = (function (_PFElement) {
            function PfeAccordionHeader() {
              classCallCheck(this, PfeAccordionHeader);
              var _this = possibleConstructorReturn(
                this,
                (
                  PfeAccordionHeader.__proto__ ||
                  Object.getPrototypeOf(PfeAccordionHeader)
                ).call(this, PfeAccordionHeader)
              );
              return (
                (_this._init = _this._init.bind(_this)),
                (_this._clickHandler = _this._clickHandler.bind(_this)),
                (_this._observer = new MutationObserver(_this._init)),
                (_this._slotObserver = new MutationObserver(_this._init)),
                (_this._getHeaderElement = _this._getHeaderElement.bind(_this)),
                (_this._createButton = _this._createButton.bind(_this)),
                _this
              );
            }
            return (
              inherits(PfeAccordionHeader, PFElement),
              createClass(
                PfeAccordionHeader,
                [
                  {
                    key: "html",
                    get: function () {
                      return '\n<style>:host{-webkit-transition:-webkit-transform .3s cubic-bezier(.465,.183,.153,.946);transition:-webkit-transform .3s cubic-bezier(.465,.183,.153,.946);transition:transform .3s cubic-bezier(.465,.183,.153,.946);transition:transform .3s cubic-bezier(.465,.183,.153,.946),-webkit-transform .3s cubic-bezier(.465,.183,.153,.946);-webkit-transition:-webkit-transform .3s var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));transition:-webkit-transform .3s var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));transition:transform .3s var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));transition:transform .3s var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946)),-webkit-transform .3s var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));display:block}:host([hidden]){display:none}:host>*{margin:0}:host button{--pfe-accordion--BorderBottomWidth:0;--pfe-accordion--ZIndex:3;--pfe-accordion__trigger--Padding:var(--pfe-accordion__base--Padding, var(--pfe-theme--container-spacer, 1rem)) 50px var(--pfe-accordion__base--Padding, var(--pfe-theme--container-spacer, 1rem)) calc(var(--pfe-accordion__base--Padding, var(--pfe-theme--container-spacer, 1rem)) * 1.5);margin:0;width:100%;width:var(--pfe-accordion--Width,100%);max-width:100%;height:auto;position:relative;background-color:transparent;background-color:var(--pfe-accordion--BackgroundColor,transparent);color:#3c3f42;color:var(--pfe-accordion--Color,var(--pfe-broadcasted--text,#3c3f42));border-width:0;border-style:solid;border-style:var(--pfe-theme--surface--border-style,solid);border-color:#d2d2d2;border-color:var(--pfe-accordion--BorderColor,var(--pfe-theme--color--surface--border,#d2d2d2));border-top-width:1px;border-top-width:var(--pfe-accordion--BorderTopWidth,var(--pfe-theme--surface--border-width,1px));border-right-width:0;border-right-width:var(--pfe-accordion--BorderRightWidth,0);border-bottom-width:1px;border-bottom-width:var(--pfe-accordion--BorderBottomWidth,var(--pfe-theme--surface--border-width,1px));border-left-width:4px;border-left-width:var(--pfe-accordion--BorderLeftWidth,var(--pfe-theme--surface--border-width--heavy,4px));border-left-color:transparent;border-left-color:var(--pfe-accordion--BorderColor--accent,transparent);-webkit-box-shadow:var(--pfe-accordion--BoxShadow);box-shadow:var(--pfe-accordion--BoxShadow);z-index:var(--pfe-accordion--ZIndex);cursor:pointer;font-family:inherit;font-size:calc(1rem * 1.1);font-size:var(--pfe-accordion--FontSize--header,calc(var(--pfe-theme--font-size,1rem) * 1.1));font-weight:700;font-weight:var(--pfe-theme--font-weight--bold,700);text-align:left;text-align:var(--pfe-accordion--TextAlign,left);line-height:1.5;line-height:var(--pfe-theme--line-height,1.5);padding:var(--pfe-accordion__trigger--Padding)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host button{border-top-width:1px;border-right-width:0;border-bottom-width:1px;border-left-width:4px}}:host button:focus,:host button:hover{--pfe-accordion--BorderColor--accent:var(--pfe-accordion--accent, var(--pfe-theme--color--ui-accent, #06c))}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host button:focus,:host button:hover{border-left-color:#06c}}:host button:hover{outline:0;border-left-width:4px;border-left-width:var(--pfe-theme--surface--border-width--heavy,4px)}:host button:focus{outline:0;text-decoration:underline}:host button::-moz-focus-inner{border:0}@supports (-ms-ime-align:auto){:host button{text-align:left}}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host button{padding:16px 24px;background-color:#fff!important;color:#151515!important}:host button:hover{border-left-color:#06c}}:host button[aria-expanded=true]{--pfe-accordion--BorderColor:var(--pfe-theme--color--surface--border, #d2d2d2);--pfe-accordion--BorderRightWidth:var(--pfe-theme--surface--border-width, 1px);--pfe-accordion--BorderLeftWidth:var(--pfe-theme--surface--border-width--heavy, 4px);--pfe-accordion--BackgroundColor:white;--pfe-accordion--Color:var(--pfe-theme--color--text, #151515);--pfe-accordion--BorderColor--accent:var(--pfe-accordion--accent, var(--pfe-theme--color--ui-accent, #06c));--pfe-accordion--BoxShadow:0 5px var(--pfe-theme--surface--border-width--heavy, 4px) rgba(140, 140, 140, 0.35);--pfe-accordion--ZIndex:3}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host button[aria-expanded=true]{border-bottom-width:0;border-left-color:#06c;border-right-color:#d2d2d2}}:host(:not([disclosure=true])) button::after{content:"";position:absolute;top:calc(1rem + .4em);top:calc(var(--pfe-theme--container-spacer,1rem) + .4em);display:block;border-style:solid;border-style:var(--pfe-theme--surface--border-style,solid);height:.4em;width:.4em;-webkit-transition:-webkit-transform .15s;transition:-webkit-transform .15s;transition:transform .15s;transition:transform .15s,-webkit-transform .15s;border-width:0 .1em .1em 0;-webkit-transform:rotate(45deg);transform:rotate(45deg);right:calc(1rem * 1.3125);right:calc(var(--pfe-theme--container-spacer,1rem) * 1.3125)}:host(:not([disclosure=true])) button[aria-expanded=true]::after{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}:host(:last-of-type) button:not([aria-expanded=true]){--pfe-accordion--BorderBottomWidth:var(--pfe-theme--surface--border-width, 1px)}:host(:last-of-type.animating) button{--pfe-accordion--BorderBottomWidth:0}:host([on=dark]) button[aria-expanded=true]{--pfe-accordion--BackgroundColor:rgba(247, 247, 249, 0.1);--pfe-accordion--Color:var(--pfe-broadcasted--text, #3c3f42);--pfe-accordion--BorderColor--accent:var(--pfe-theme--color--ui-accent--on-dark, #73bcf7);--pfe-accordion--BoxShadow:none}:host([on=saturated]) button[aria-expanded=true]{--pfe-accordion--BackgroundColor:rgba(0, 0, 0, 0.2);--pfe-accordion--Color:var(--pfe-broadcasted--text, #3c3f42);--pfe-accordion--BorderColor--accent:var(--pfe-theme--color--ui-accent--on-saturated, #fff);--pfe-accordion--BoxShadow:none}:host([disclosure=true]) button{padding-left:calc(1rem * 3);padding-left:calc(var(--pfe-accordion__base--Padding,var(--pfe-theme--container-spacer,1rem)) * 3)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([disclosure=true]) button{padding:16px 24px 16px 47px;border-right-color:#d2d2d2;border-left-color:#d2d2d2;border-left-width:1px}}:host([disclosure=true]) button::before{content:"";position:absolute;top:calc(1rem + .55em);top:calc(var(--pfe-theme--container-spacer,1rem) + .55em);display:block;border-style:solid;border-style:var(--pfe-theme--surface--border-style,solid);height:.4em;width:.4em;-webkit-transition:-webkit-transform .15s;transition:-webkit-transform .15s;transition:transform .15s;transition:transform .15s,-webkit-transform .15s;border-width:0 .1em .1em 0;-webkit-transform:rotate(45deg);transform:rotate(45deg);left:calc(1rem * 1.3125);left:calc(var(--pfe-theme--container-spacer,1rem) * 1.3125);-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}:host([disclosure=true]) button[aria-expanded=true]::before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}:host([disclosure=true]) button:not([aria-expanded=true]):hover,:host([disclosure=true]) button[aria-expanded=true]{padding-left:calc(1rem * 3 - 4px + 1px);padding-left:calc(var(--pfe-accordion__base--Padding,var(--pfe-theme--container-spacer,1rem)) * 3 - var(--pfe-theme--surface--border-width--heavy,4px) + var(--pfe-theme--surface--border-width,1px))}:host([disclosure=true]) button:not([aria-expanded=true]):hover::before,:host([disclosure=true]) button[aria-expanded=true]::before{margin-left:calc((4px - 1px) * -1);margin-left:calc((var(--pfe-theme--surface--border-width--heavy,4px) - var(--pfe-theme--surface--border-width,1px)) * -1)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([disclosure=true]) button:not([aria-expanded=true]):hover,:host([disclosure=true]) button[aria-expanded=true]{border-left-color:#06c;border-left-width:4px;border-right-color:#d2d2d2}} /*# sourceMappingURL=pfe-accordion-header.min.css.map */</style>\n';
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-accordion-header.scss";
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-accordion-header.html";
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-accordion-header";
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        _id: {
                          type: String,
                          default: function (el) {
                            return "" + el.randomId.replace("pfe", el.tag);
                          },
                          prefix: !1,
                        },
                        ariaControls: { type: String, prefix: !1 },
                        oldPfeId: {
                          type: String,
                          alias: "_id",
                          attr: "pfe-id",
                        },
                        expanded: {
                          title: "Expanded",
                          type: Boolean,
                          cascade: "#pfe-accordion-header--button",
                          observer: "_expandedChanged",
                        },
                      };
                    },
                  },
                  {
                    key: "events",
                    get: function () {
                      return { change: "pfe-accordion:change" };
                    },
                  },
                ]
              ),
              createClass(PfeAccordionHeader, [
                {
                  key: "connectedCallback",
                  value: function () {
                    get(
                      PfeAccordionHeader.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeAccordionHeader.prototype),
                      "connectedCallback",
                      this
                    ).call(this),
                      this.hasLightDOM() && this._init(),
                      this.addEventListener("click", this._clickHandler),
                      this._observer.observe(this, { childList: !0 });
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    get(
                      PfeAccordionHeader.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeAccordionHeader.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this),
                      this.removeEventListener("click", this._clickHandler),
                      this._observer.disconnect();
                  },
                },
                {
                  key: "_init",
                  value: function () {
                    window.ShadyCSS && this._observer.disconnect();
                    var existingButton = this.shadowRoot.querySelector(
                        "#" + this.tag + "--button"
                      ),
                      button = existingButton || this._createButton(),
                      existingHeader = existingButton
                        ? existingButton.parentElement
                        : null,
                      header = this._getHeaderElement();
                    if (header) {
                      var wrapperTag = document.createElement(
                        header.tagName.toLowerCase() || "h3"
                      );
                      existingHeader &&
                      existingHeader.tagName === header.tagName
                        ? (wrapperTag = existingHeader)
                        : existingHeader &&
                          existingHeader.tagName !== header.tagName &&
                          existingHeader.remove(),
                        (button.innerText = header.innerText),
                        wrapperTag.appendChild(button),
                        this.shadowRoot.appendChild(wrapperTag);
                    } else button.innerText = this.textContent.trim();
                    window.ShadyCSS &&
                      this._observer.observe(this, { childList: !0 });
                  },
                },
                {
                  key: "_getHeaderElement",
                  value: function () {
                    var _this2 = this;
                    if (this.firstElementChild || this.firstChild) {
                      if (
                        this.firstElementChild &&
                        this.firstElementChild.tagName
                      ) {
                        if ("SLOT" === this.firstElementChild.tagName) {
                          var slotted = this.firstElementChild.assignedNodes();
                          if (
                            (0 === slotted.length &&
                              (slotted = [].concat(
                                toConsumableArray(
                                  this.firstElementChild.children
                                )
                              )),
                            0 === slotted.length)
                          )
                            return void this.warn(
                              "No heading information exists within this slot."
                            );
                          slotted.length > 1 &&
                            this.warn("Heading currently only supports 1 tag.");
                          var htags = slotted.filter(function (slot) {
                            return (
                              slot.tagName.match(/^H[1-6]/) ||
                              "P" === slot.tagName
                            );
                          });
                          return htags.length > 0
                            ? (slotted.forEach(function (slot) {
                                return _this2._slotObserver.observe(slot, {
                                  characterData: !0,
                                  childList: !0,
                                  subtree: !0,
                                });
                              }),
                              htags[0])
                            : void 0;
                        }
                        if (
                          this.firstElementChild.tagName.match(/^H[1-6]/) ||
                          "P" === this.firstElementChild.tagName
                        )
                          return this.firstElementChild;
                        this.warn(
                          "Heading should contain at least 1 heading tag for correct semantics."
                        );
                      }
                    } else this.warn("No header content provided");
                  },
                },
                {
                  key: "_createButton",
                  value: function () {
                    var expanded =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "false",
                      button = document.createElement("button");
                    return (
                      (button.type = "button"),
                      button.setAttribute("aria-expanded", expanded),
                      (button.id = this.tag + "--button"),
                      button
                    );
                  },
                },
                {
                  key: "_clickHandler",
                  value: function (event) {
                    this.emitEvent(PfeAccordionHeader.events.change, {
                      detail: { expanded: !this.expanded },
                    });
                  },
                },
                {
                  key: "_expandedChanged",
                  value: function () {
                    this.setAttribute("aria-expanded", this.expanded);
                    var button = this.shadowRoot.querySelector(
                      "#" + this.tag + "--button"
                    );
                    button &&
                      button.setAttribute("aria-expanded", this.expanded);
                  },
                },
              ]),
              PfeAccordionHeader
            );
          })(),
          PfeAccordionPanel = (function (_PFElement) {
            function PfeAccordionPanel() {
              return (
                classCallCheck(this, PfeAccordionPanel),
                possibleConstructorReturn(
                  this,
                  (
                    PfeAccordionPanel.__proto__ ||
                    Object.getPrototypeOf(PfeAccordionPanel)
                  ).call(this, PfeAccordionPanel)
                )
              );
            }
            return (
              inherits(PfeAccordionPanel, PFElement),
              createClass(
                PfeAccordionPanel,
                [
                  {
                    key: "html",
                    get: function () {
                      return '\n<style>.container{position:relative;display:block;width:100%;padding:1rem;padding:var(--pfe-theme--container-spacer,1rem)}:host{display:none;overflow:hidden;will-change:height;border-color:transparent;opacity:0;margin:0;width:100%;width:var(--pfe-accordion--Width,100%);max-width:100%;height:auto;position:relative;background-color:transparent;background-color:var(--pfe-accordion--BackgroundColor,transparent);color:#3c3f42;color:var(--pfe-accordion--Color,var(--pfe-broadcasted--text,#3c3f42));border-width:0;border-style:solid;border-style:var(--pfe-theme--surface--border-style,solid);border-color:#d2d2d2;border-color:var(--pfe-accordion--BorderColor,var(--pfe-theme--color--surface--border,#d2d2d2));border-top-width:1px;border-top-width:var(--pfe-accordion--BorderTopWidth,var(--pfe-theme--surface--border-width,1px));border-right-width:0;border-right-width:var(--pfe-accordion--BorderRightWidth,0);border-bottom-width:1px;border-bottom-width:var(--pfe-accordion--BorderBottomWidth,var(--pfe-theme--surface--border-width,1px));border-left-width:4px;border-left-width:var(--pfe-accordion--BorderLeftWidth,var(--pfe-theme--surface--border-width--heavy,4px));border-left-color:transparent;border-left-color:var(--pfe-accordion--BorderColor--accent,transparent);-webkit-box-shadow:var(--pfe-accordion--BoxShadow);box-shadow:var(--pfe-accordion--BoxShadow);z-index:var(--pfe-accordion--ZIndex);-webkit-box-sizing:border-box;box-sizing:border-box}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host{border-top-width:1px;border-right-width:0;border-bottom-width:1px;border-left-width:4px}}:host:focus,:host:hover{--pfe-accordion--BorderColor--accent:var(--pfe-accordion--accent, var(--pfe-theme--color--ui-accent, #06c))}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host:focus,:host:hover{border-left-color:#06c}}:host *,:host ::after,:host ::before{-webkit-box-sizing:border-box;box-sizing:border-box}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host{background-color:#fff!important;color:#151515!important}}:host(.animating){display:block;-webkit-transition:height .3s ease-in-out;transition:height .3s ease-in-out}.container{--pfe-accordion--BoxShadow:none;padding:var(--pfe-accordion__panel-container--Padding);padding:0 calc(1rem * 3) 1rem calc(1rem * 1.5);padding:var(--pfe-accordion__panel-container--Padding,0 var(--pfe-accordion__panel--Padding,calc(var(--pfe-accordion__base--Padding,var(--pfe-theme--container-spacer,1rem)) * 3)) var(--pfe-accordion__base--Padding,var(--pfe-theme--container-spacer,1rem)) var(--pfe-accordion__panel--Padding,calc(var(--pfe-accordion__base--Padding,var(--pfe-theme--container-spacer,1rem)) * 1.5)))}.container::after{clear:both;content:"";display:table}:host([disclosure=true]) .container{padding:0 calc(1rem * 3) calc(1rem) calc(1rem * 1.5);padding:var(--pfe-accordion__panel-container--Padding,0 calc(var(--pfe-accordion__base--Padding,var(--pfe-theme--container-spacer,1rem)) * 3) calc(var(--pfe-accordion__base--Padding,var(--pfe-theme--container-spacer,1rem))) calc(var(--pfe-accordion__base--Padding,var(--pfe-theme--container-spacer,1rem)) * 1.5))}pfe-jump-links-nav .container{padding:0;padding:var(--pfe-accordion__panel-container--Padding,0);--pfe-accordion__panel-container--Padding:0}@media (max-width:767px){pfe-jump-links-nav .container{padding:0;padding:var(--pfe-accordion__panel-container--Padding,0)}}:host(:last-of-type[expanded]){margin-bottom:0}:host(.animating),:host([expanded]){--pfe-accordion--BorderColor:var(--pfe-theme--color--surface--border, #d2d2d2);--pfe-accordion--BorderRightWidth:var(--pfe-theme--surface--border-width, 1px);--pfe-accordion--BorderLeftWidth:var(--pfe-theme--surface--border-width--heavy, 4px);--pfe-accordion--BackgroundColor:white;--pfe-accordion--Color:var(--pfe-theme--color--text, #151515);--pfe-accordion--BorderColor--accent:var(--pfe-accordion--accent, var(--pfe-theme--color--ui-accent, #06c));--pfe-accordion--BoxShadow:0 5px var(--pfe-theme--surface--border-width--heavy, 4px) rgba(140, 140, 140, 0.35);--pfe-accordion--ZIndex:3;--pfe-accordion--accent:var(--pfe-theme--color--ui-accent, #06c);--pfe-accordion--BorderTopWidth:0;--pfe-accordion--BoxShadow:0 5px var(--pfe-theme--surface--border-width--heavy, 4px) rgba(140, 140, 140, 0.35);display:block;position:relative;opacity:1}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host(.animating),:host([expanded]){border-top-width:0;border-left-color:#06c;border-left-color:var(--pfe-theme--color--ui-accent,#06c);border-right-color:#d2d2d2;border-right-color:var(--pfe-theme--color--surface--border,#d2d2d2)}}:host([on=dark].animating),:host([on=dark][expanded]){--pfe-accordion--BackgroundColor:rgba(247, 247, 249, 0.1);--pfe-accordion--Color:var(--pfe-broadcasted--text, #3c3f42);--pfe-accordion--BorderColor--accent:var(--pfe-theme--color--ui-accent--on-dark, #73bcf7);--pfe-accordion--BoxShadow:none;--pfe-accordion--accent:var(--pfe-theme--color--ui-accent, #06c);--pfe-accordion--BorderTopWidth:0;--pfe-accordion--BoxShadow:none}:host([on=saturated].animating),:host([on=saturated][expanded]){--pfe-accordion--BackgroundColor:rgba(0, 0, 0, 0.2);--pfe-accordion--Color:var(--pfe-broadcasted--text, #3c3f42);--pfe-accordion--BorderColor--accent:var(--pfe-theme--color--ui-accent--on-saturated, #fff);--pfe-accordion--BoxShadow:none;--pfe-accordion--accent:var(--pfe-theme--color--ui-accent, #06c);--pfe-accordion--BorderTopWidth:0;--pfe-accordion--BoxShadow:none} /*# sourceMappingURL=pfe-accordion-panel.min.css.map */</style>\n<div tabindex="-1">\n  <div class="container">\n    <slot></slot>\n  </div>\n</div>';
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-accordion-panel.scss";
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-accordion-panel.html";
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-accordion-panel";
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        _id: {
                          type: String,
                          default: function (el) {
                            return "" + el.randomId.replace("pfe", el.tag);
                          },
                          prefix: !1,
                        },
                        role: { type: String, default: "region", prefix: !1 },
                        oldPfeId: {
                          type: String,
                          alias: "_id",
                          attr: "pfe-id",
                        },
                        expanded: {
                          title: "Expanded",
                          type: Boolean,
                          default: !1,
                        },
                        ariaLabelledby: { type: String, prefix: !1 },
                      };
                    },
                  },
                ]
              ),
              createClass(PfeAccordionPanel, [
                {
                  key: "connectedCallback",
                  value: function () {
                    get(
                      PfeAccordionPanel.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeAccordionPanel.prototype),
                      "connectedCallback",
                      this
                    ).call(this);
                  },
                },
              ]),
              PfeAccordionPanel
            );
          })(),
          PfeAccordion = (function (_PFElement) {
            function PfeAccordion() {
              classCallCheck(this, PfeAccordion);
              var _this = possibleConstructorReturn(
                this,
                (
                  PfeAccordion.__proto__ || Object.getPrototypeOf(PfeAccordion)
                ).call(this, PfeAccordion, { type: PfeAccordion.PfeType })
              );
              return (
                (_this._manualDisclosure = null),
                (_this._updateHistory = !0),
                (_this.expanded = []),
                (_this._init = _this._init.bind(_this)),
                (_this._observer = new MutationObserver(_this._init)),
                (_this._updateStateFromURL =
                  _this._updateStateFromURL.bind(_this)),
                (_this._getIndexesFromURL =
                  _this._getIndexesFromURL.bind(_this)),
                (_this._updateURLHistory = _this._updateURLHistory.bind(_this)),
                _this
              );
            }
            return (
              inherits(PfeAccordion, PFElement),
              createClass(
                PfeAccordion,
                [
                  {
                    key: "html",
                    get: function () {
                      return "\n<style>:host{--pfe-accordion--BorderColor--accent:transparent;--pfe-accordion--BorderColor:var(--pfe-theme--color--surface--border, #d2d2d2);--pfe-accordion--BorderTopWidth:var(--pfe-theme--surface--border-width, 1px);--pfe-accordion--BorderRightWidth:0;--pfe-accordion--BorderBottomWidth:var(--pfe-theme--surface--border-width, 1px);--pfe-accordion--BorderLeftWidth:var(--pfe-theme--surface--border-width--heavy, 4px);--pfe-accordion--Color:var(--pfe-broadcasted--text, #3c3f42);--pfe-accordion--TextAlign:left;--pfe-accordion--accent:var(--pfe-theme--color--ui-accent, #06c);--pfe-accordion__base--Padding:var(--pfe-theme--container-spacer, 1rem);display:block;position:relative;overflow:hidden;margin:0;color:#3c3f42;color:var(--pfe-accordion--Color,var(--pfe-broadcasted--text,#3c3f42))}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host{background-color:#fff!important;color:#151515!important}}:host([on=dark]){--pfe-accordion--accent:var(--pfe-theme--color--ui-accent--on-dark, #73bcf7)}:host([on=saturated]){--pfe-accordion--accent:var(--pfe-theme--color--ui-accent--on-saturated, #fff)}:host([disclosure=true]){--pfe-accordion--BorderRightWidth:var(--pfe-theme--surface--border-width, 1px);--pfe-accordion--BorderLeftWidth:var(--pfe-theme--surface--border-width, 1px);--pfe-accordion--BorderColor--accent:var(--pfe-theme--color--surface--border, #d2d2d2)}:host([hidden]){display:none} /*# sourceMappingURL=pfe-accordion.min.css.map */</style>\n<slot></slot>";
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-accordion.scss";
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-accordion.html";
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-accordion";
                    },
                  },
                  {
                    key: "meta",
                    get: function () {
                      return {
                        title: "Accordion",
                        description:
                          "This element renders content sets in an expandable format.",
                      };
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        disclosure: {
                          title: "Disclosure",
                          type: String,
                          values: ["true", "false"],
                          cascade: [
                            "pfe-accordion-header",
                            "pfe-accordion-panel",
                          ],
                        },
                        oldDisclosure: {
                          type: String,
                          alias: "disclosure",
                          attr: "pfe-disclosure",
                        },
                        expandedIndex: {
                          title: "Expanded index(es)",
                          type: String,
                          observer: "_expandedIndexHandler",
                        },
                        history: {
                          title: "History",
                          type: Boolean,
                          default: !1,
                          observer: "_historyHandler",
                        },
                      };
                    },
                  },
                  {
                    key: "slots",
                    get: function () {
                      return {
                        default: {
                          type: "array",
                          namedSlot: !1,
                          items: {
                            oneOf: [
                              { $ref: "pfe-accordion-header" },
                              { $ref: "pfe-accordion-panel" },
                            ],
                          },
                        },
                      };
                    },
                  },
                  {
                    key: "events",
                    get: function () {
                      return {
                        change: this.tag + ":change",
                        expand: this.tag + ":expand",
                        collapse: this.tag + ":collapse",
                      };
                    },
                  },
                  {
                    key: "PfeType",
                    get: function () {
                      return PFElement.PfeTypes.Container;
                    },
                  },
                  {
                    key: "contentTemplate",
                    get: function () {
                      return '\n    <pfe-accordion-header content-type="header"></pfe-accordion-header>\n    <pfe-accordion-panel content-type="panel"></pfe-accordion-panel>\n    ';
                    },
                  },
                ]
              ),
              createClass(PfeAccordion, [
                {
                  key: "connectedCallback",
                  value: function () {
                    get(
                      PfeAccordion.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeAccordion.prototype),
                      "connectedCallback",
                      this
                    ).call(this),
                      this.hasLightDOM() &&
                        ((this._manualDisclosure =
                          this.getAttribute("disclosure") ||
                          this.getAttribute("pfe-disclosure")),
                        Promise.all([
                          customElements.whenDefined(PfeAccordionHeader.tag),
                          customElements.whenDefined(PfeAccordionPanel.tag),
                        ]).then(this._init)),
                      this.addEventListener(
                        PfeAccordion.events.change,
                        this._changeHandler
                      ),
                      this.addEventListener("keydown", this._keydownHandler),
                      this._observer.observe(this, { childList: !0 });
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    get(
                      PfeAccordion.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeAccordion.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this),
                      this.removeEventListener(
                        PfeAccordion.events.change,
                        this._changeHandler
                      ),
                      this.removeEventListener("keydown", this._keydownHandler),
                      this._observer.disconnect(),
                      window.removeEventListener(
                        "popstate",
                        this._updateStateFromURL
                      );
                  },
                },
                {
                  key: "toggle",
                  value: function (index) {
                    this._allHeaders()[index].expanded
                      ? this.collapse(index)
                      : this.expand(index);
                  },
                },
                {
                  key: "expand",
                  value: function (_index) {
                    if (void 0 !== _index && null !== _index) {
                      var index = parseInt(_index, 10),
                        header = this._allHeaders()[index];
                      if (header) {
                        var panel = this._panelForHeader(header);
                        header &&
                          panel &&
                          (this._expandHeader(header),
                          this._expandPanel(panel),
                          header.focus(),
                          this.emitEvent(PfeAccordion.events.expand));
                      }
                    }
                  },
                },
                {
                  key: "expandAll",
                  value: function () {
                    var _this2 = this,
                      headers = this._allHeaders(),
                      panels = this._allPanels();
                    headers.forEach(function (header) {
                      return _this2._expandHeader(header);
                    }),
                      panels.forEach(function (panel) {
                        return _this2._expandPanel(panel);
                      });
                  },
                },
                {
                  key: "collapse",
                  value: function (index) {
                    var headers = this._allHeaders(),
                      panels = this._allPanels(),
                      header = headers[index],
                      panel = panels[index];
                    header &&
                      panel &&
                      (this._collapseHeader(header),
                      this._collapsePanel(panel),
                      this.emitEvent(PfeAccordion.events.collapse));
                  },
                },
                {
                  key: "collapseAll",
                  value: function () {
                    var _this3 = this,
                      headers = this._allHeaders(),
                      panels = this._allPanels();
                    headers.forEach(function (header) {
                      return _this3._collapseHeader(header);
                    }),
                      panels.forEach(function (panel) {
                        return _this3._collapsePanel(panel);
                      });
                  },
                },
                {
                  key: "_init",
                  value: function () {
                    var _this4 = this,
                      headers = this._allHeaders();
                    headers.forEach(function (header) {
                      var panel = _this4._panelForHeader(header);
                      panel &&
                        ((header.ariaControls = panel._id),
                        (panel.ariaLabelledby = header._id));
                    }),
                      this._manualDisclosure ||
                        (1 === headers.length
                          ? (this.disclosure = "true")
                          : headers.length > 1 && (this.disclosure = "false")),
                      this.isIE11 || this._updateStateFromURL();
                  },
                },
                {
                  key: "_changeHandler",
                  value: function (evt) {
                    if (!this.classList.contains("animating")) {
                      var index = this._getIndex(evt.target);
                      evt.detail.expanded
                        ? this.expand(index)
                        : this.collapse(index),
                        this._updateURLHistory();
                    }
                  },
                },
                {
                  key: "_historyHandler",
                  value: function () {
                    this.history
                      ? window.addEventListener(
                          "popstate",
                          this._updateStateFromURL
                        )
                      : window.removeEventListener(
                          "popstate",
                          this._updateStateFromURL
                        );
                  },
                },
                {
                  key: "_expandHeader",
                  value: function (header) {
                    var index = this._getIndex(header);
                    this.expanded.indexOf(index) < 0 &&
                      index > -1 &&
                      this.expanded.push(index),
                      (header.expanded = !0);
                  },
                },
                {
                  key: "_expandPanel",
                  value: function (panel) {
                    if (panel) {
                      if (!panel.expanded) {
                        panel.expanded = !0;
                        var height = panel.getBoundingClientRect().height;
                        this._animate(panel, 0, height);
                      }
                    } else
                      this.error(
                        "Trying to expand a panel that doesn't exist."
                      );
                  },
                },
                {
                  key: "_collapseHeader",
                  value: function (header) {
                    var index = this._getIndex(header),
                      idx = this.expanded.indexOf(index);
                    idx >= 0 && this.expanded.splice(idx, 1),
                      (header.expanded = !1);
                  },
                },
                {
                  key: "_collapsePanel",
                  value: function (panel) {
                    if (panel) {
                      if (panel.expanded) {
                        var height = panel.getBoundingClientRect().height;
                        (panel.expanded = !1), this._animate(panel, height, 0);
                      }
                    } else
                      this.error(
                        "Trying to collapse a panel that doesn't exist"
                      );
                  },
                },
                {
                  key: "_animate",
                  value: function (panel, start, end) {
                    var _this5 = this;
                    if (panel) {
                      var header = panel.previousElementSibling;
                      header && header.classList.add("animating"),
                        panel.classList.add("animating"),
                        (panel.style.height = start + "px"),
                        requestAnimationFrame(function () {
                          requestAnimationFrame(function () {
                            (panel.style.height = end + "px"),
                              panel.addEventListener(
                                "transitionend",
                                _this5._transitionEndHandler
                              );
                          });
                        });
                    }
                  },
                },
                {
                  key: "_keydownHandler",
                  value: function (evt) {
                    var currentHeader = evt.target;
                    if (this._isHeader(currentHeader)) {
                      var newHeader = void 0;
                      switch (evt.key) {
                        case "ArrowDown":
                        case "Down":
                        case "ArrowRight":
                        case "Right":
                          newHeader = this._nextHeader();
                          break;
                        case "ArrowUp":
                        case "Up":
                        case "ArrowLeft":
                        case "Left":
                          newHeader = this._previousHeader();
                          break;
                        case "Home":
                          newHeader = this._firstHeader();
                          break;
                        case "End":
                          newHeader = this._lastHeader();
                          break;
                        default:
                          return;
                      }
                      if (newHeader) {
                        newHeader.shadowRoot.querySelector("button").focus();
                        var index = this._getIndex(newHeader);
                        this.expand(index), (this._setFocus = !0);
                      }
                    }
                  },
                },
                {
                  key: "_transitionEndHandler",
                  value: function (evt) {
                    var header = evt.target.previousElementSibling;
                    header && header.classList.remove("animating"),
                      (evt.target.style.height = ""),
                      evt.target.classList.remove("animating"),
                      evt.target.removeEventListener(
                        "transitionend",
                        this._transitionEndHandler
                      );
                  },
                },
                {
                  key: "_allHeaders",
                  value: function () {
                    return this.isIE11
                      ? this.children.filter(function (el) {
                          return (
                            "pfe-accordion-header" === el.tagName.toLowerCase()
                          );
                        })
                      : [].concat(
                          toConsumableArray(
                            this.querySelectorAll(
                              ":scope > pfe-accordion-header"
                            )
                          )
                        );
                  },
                },
                {
                  key: "_allPanels",
                  value: function () {
                    return this.isIE11
                      ? this.children.filter(function (el) {
                          return (
                            "pfe-accordion-panel" === el.tagName.toLowerCase()
                          );
                        })
                      : [].concat(
                          toConsumableArray(
                            this.querySelectorAll(
                              ":scope > pfe-accordion-panel"
                            )
                          )
                        );
                  },
                },
                {
                  key: "_panelForHeader",
                  value: function (header) {
                    var next = header.nextElementSibling;
                    if (next) {
                      if (next.tagName.toLowerCase() === PfeAccordionPanel.tag)
                        return next;
                      this.error(
                        "Sibling element to a header needs to be a panel"
                      );
                    }
                  },
                },
                {
                  key: "_previousHeader",
                  value: function () {
                    var headers = this._allHeaders();
                    return headers[
                      (headers.findIndex(function (header) {
                        return header === document.activeElement;
                      }) -
                        1 +
                        headers.length) %
                        headers.length
                    ];
                  },
                },
                {
                  key: "_nextHeader",
                  value: function () {
                    var headers = this._allHeaders();
                    return headers[
                      (headers.findIndex(function (header) {
                        return header === document.activeElement;
                      }) +
                        1) %
                        headers.length
                    ];
                  },
                },
                {
                  key: "_firstHeader",
                  value: function () {
                    return this._allHeaders()[0];
                  },
                },
                {
                  key: "_lastHeader",
                  value: function () {
                    var headers = this._allHeaders();
                    return headers[headers.length - 1];
                  },
                },
                {
                  key: "_isHeader",
                  value: function (element) {
                    return (
                      element.tagName.toLowerCase() === PfeAccordionHeader.tag
                    );
                  },
                },
                {
                  key: "_isPanel",
                  value: function (element) {
                    return (
                      element.tagName.toLowerCase() === PfeAccordionPanel.tag
                    );
                  },
                },
                {
                  key: "_expandedIndexHandler",
                  value: function (oldVal, newVal) {
                    var _this6 = this;
                    oldVal !== newVal &&
                      newVal
                        .split(",")
                        .map(function (idx) {
                          return parseInt(idx, 10) - 1;
                        })
                        .reverse()
                        .map(function (index) {
                          return _this6.expand(index);
                        });
                  },
                },
                {
                  key: "_getIndex",
                  value: function (_el) {
                    return this._isHeader(_el)
                      ? this._allHeaders().findIndex(function (header) {
                          return header.id === _el.id;
                        })
                      : this._isPanel(_el)
                      ? this._allPanels().findIndex(function (panel) {
                          return panel.id === _el.id;
                        })
                      : (this.warn(
                          "The _getIndex method expects to receive a header or panel element."
                        ),
                        -1);
                  },
                },
                {
                  key: "_getIndexesFromURL",
                  value: function () {
                    if (!window.URLSearchParams) return [];
                    var urlParams = new URLSearchParams(window.location.search);
                    if (urlParams && urlParams.has(this.id)) {
                      var indexes = urlParams.get(this.id).split("-");
                      return indexes.length < 0
                        ? []
                        : indexes.map(function (item) {
                            return parseInt(item.trim(), 10) - 1;
                          });
                    }
                  },
                },
                {
                  key: "_updateURLHistory",
                  value: function () {
                    if (
                      this.history &&
                      this._updateHistory &&
                      window.URLSearchParams
                    )
                      if (this.id) {
                        var urlParams = new URLSearchParams(
                            window.location.search
                          ),
                          openIndexes = this.expanded
                            .map(function (item) {
                              return item + 1;
                            })
                            .sort(function (a, b) {
                              return a - b;
                            })
                            .join("-");
                        this.expanded.length > 0
                          ? urlParams.set(this.id, openIndexes)
                          : urlParams.delete(this.id),
                          history.replaceState(
                            {},
                            "",
                            window.location.pathname +
                              (urlParams ? "?" + urlParams.toString() : "") +
                              window.location.hash
                          );
                      } else
                        this.error(
                          "The history feature cannot update the URL without an ID added to the pfe-accordion tag."
                        );
                  },
                },
                {
                  key: "_updateStateFromURL",
                  value: function () {
                    var _this7 = this,
                      indexesFromURL = this._getIndexesFromURL() || [];
                    (this._updateHistory = !1),
                      indexesFromURL.forEach(function (idx) {
                        return _this7.expand(idx);
                      }),
                      (this._updateHistory = !0);
                  },
                },
              ]),
              PfeAccordion
            );
          })();
        return (
          PFElement.create(PfeAccordionHeader),
          PFElement.create(PfeAccordionPanel),
          PFElement.create(PfeAccordion),
          PfeAccordion
        );
      }),
      (function (global, factory) {
        "object" == typeof exports && "undefined" != typeof module
          ? (module.exports = factory(
              require("../../pfelement/dist/pfelement.umd")
            ))
          : "function" == typeof define && define.amd
          ? define(["../../pfelement/dist/pfelement.umd"], factory)
          : ((global = global || self).PfeTabs = factory(global.PFElement));
      })(this, function (PFElement) {
        "use strict";
        (PFElement =
          PFElement &&
          Object.prototype.hasOwnProperty.call(PFElement, "default")
            ? PFElement.default
            : PFElement),
          Array.prototype.findIndex ||
            Object.defineProperty(Array.prototype, "findIndex", {
              value: function (predicate) {
                if (null == this)
                  throw new TypeError('"this" is null or not defined');
                var o = Object(this),
                  len = o.length >>> 0;
                if ("function" != typeof predicate)
                  throw new TypeError("predicate must be a function");
                for (var thisArg = arguments[1], k = 0; k < len; ) {
                  var kValue = o[k];
                  if (predicate.call(thisArg, kValue, k, o)) return k;
                  k++;
                }
                return -1;
              },
              configurable: !0,
              writable: !0,
            });
        var classCallCheck = function (instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError("Cannot call a class as a function");
          },
          createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                (descriptor.enumerable = descriptor.enumerable || !1),
                  (descriptor.configurable = !0),
                  "value" in descriptor && (descriptor.writable = !0),
                  Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
              );
            };
          })(),
          get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
              var parent = Object.getPrototypeOf(object);
              return null === parent ? void 0 : get(parent, property, receiver);
            }
            if ("value" in desc) return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0;
          },
          inherits = function (subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }
            )),
              superClass &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(subClass, superClass)
                  : (subClass.__proto__ = superClass));
          },
          possibleConstructorReturn = function (self, call) {
            if (!self)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !call ||
              ("object" != typeof call && "function" != typeof call)
              ? self
              : call;
          },
          toConsumableArray = function (arr) {
            if (Array.isArray(arr)) {
              for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
                arr2[i] = arr[i];
              return arr2;
            }
            return Array.from(arr);
          },
          TAB_CONTENT_MUTATION_CONFIG = {
            characterData: !0,
            childList: !0,
            subtree: !0,
          },
          PfeTab = (function (_PFElement) {
            function PfeTab() {
              classCallCheck(this, PfeTab);
              var _this = possibleConstructorReturn(
                this,
                (PfeTab.__proto__ || Object.getPrototypeOf(PfeTab)).call(
                  this,
                  PfeTab,
                  { type: PfeTab.PfeType }
                )
              );
              return (
                _this._tabItem,
                (_this._init = _this._init.bind(_this)),
                (_this._setTabContent = _this._setTabContent.bind(_this)),
                (_this._getTabElement = _this._getTabElement.bind(_this)),
                (_this._observer = new MutationObserver(_this._init)),
                _this
              );
            }
            return (
              inherits(PfeTab, PFElement),
              createClass(
                PfeTab,
                [
                  {
                    key: "html",
                    get: function () {
                      return '\n<style>:host{text-align:left;position:relative;display:block;cursor:pointer;margin:0 0 calc(1px * -1);margin:var(--pfe-tabs__tab--Margin,0 0 calc(var(--pfe-theme--ui--border-width,1px) * -1));padding:1rem calc(1rem * 2) 1rem calc(1rem * 2);padding:var(--pfe-tabs__tab--PaddingTop,var(--pfe-theme--container-padding,1rem)) var(--pfe-tabs__tab--PaddingRight,calc(var(--pfe-theme--container-padding,1rem) * 2)) var(--pfe-tabs__tab--PaddingBottom,var(--pfe-theme--container-padding,1rem)) var(--pfe-tabs__tab--PaddingLeft,calc(var(--pfe-theme--container-padding,1rem) * 2));border-style:solid;border-style:var(--pfe-theme--ui--border-style,solid);border-width:1px;border-width:var(--pfe-theme--ui--border-width,1px);border-color:transparent;border-bottom-width:3px;border-bottom-width:var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px));background-color:none;background-color:var(--pfe-tabs--BackgroundColor--inactive,none);text-align:center;text-align:var(--pfe-tabs__tab--TextAlign,center);text-transform:none;text-transform:var(--pfe-tabs__tab--TextTransform,none);color:#6a6e73;color:var(--pfe-tabs--Color,var(--pfe-theme--color--text--muted,#6a6e73));font-size:1rem;font-size:var(--pfe-tabs__tab--FontSize,var(--pf-global--FontSize--md,1rem));font-family:"Red Hat Text",RedHatText,Overpass,Overpass,Arial,sans-serif;font-family:var(--pfe-tabs__tab--LineHeight, var(--pfe-theme--font-family, "Red Hat Text", "RedHatText", "Overpass", Overpass, Arial, sans-serif));line-height:1.5;line-height:var(--pfe-tabs__tab--LineHeight,var(--pfe-theme--line-height,1.5));font-weight:400;font-weight:var(--pfe-tabs__tab--FontWeight,var(--pfe-theme--font-weight--normal,400));--pf-c--FontSize:var(--pfe-tabs--FontSize)}:host #tab{display:inline-block}:host #tab *{font-size:inherit;font-weight:inherit;color:inherit;margin:0}:host([aria-selected=true]){background-color:transparent;background-color:var(--pfe-tabs--BackgroundColor,transparent);border-bottom-color:#06c;border-bottom-color:var(--pfe-tabs--BorderColor,var(--pfe-tabs--highlight,var(--pfe-theme--color--ui-accent,#06c)))}:host([aria-selected=true]) #tab *{color:#151515;color:var(--pfe-tabs--Color--focus,var(--pfe-tabs--focus,var(--pfe-theme--color--text,#151515)))}:host(:active),:host(:focus),:host(:hover){background-color:transparent;background-color:var(--pfe-tabs--BackgroundColor,transparent);border-bottom-color:#b8bbbe;border-bottom-color:var(--pfe-tabs--BorderColor--hover,#b8bbbe)}:host(:active) #tab *,:host(:focus) #tab *,:host(:hover) #tab *{color:#151515;color:var(--pfe-tabs--Color--focus,var(--pfe-tabs--focus,var(--pfe-theme--color--text,#151515)))}:host([variant=earth][vertical]) #tab{display:inline-block}@media screen and (min-width:768px){:host([vertical]){border-bottom-color:transparent;border-bottom-width:0;border-left-color:#d2d2d2;border-left-color:var(--pfe-theme--color--surface--border,#d2d2d2);border-left-width:1px;border-left-width:var(--pfe-theme--ui--border-width,1px);padding:1rem;padding:var(--pfe-theme--container-padding,1rem);--pfe-tabs--Margin:0 calc(var(--pfe-theme--ui--border-width, 1px) * -1) 0 0}:host([vertical][aria-selected=true]){border-left-color:#06c;border-left-color:var(--pfe-tabs--BorderColor,var(--pfe-tabs--highlight,var(--pfe-theme--color--ui-accent,#06c)));border-left-width:3px}:host([vertical]:not([variant=earth])){border-left:1px solid #d2d2d2;border-left:var(--pfe-theme--ui--border-width,1px) var(--pfe-theme--ui--border-style,solid) var(--pfe-theme--color--surface--border,#d2d2d2);text-align:left!important}:host([vertical]:not([variant=earth])[aria-selected=true]){border-right:3px solid transparent;border-right:var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px)) var(--pfe-theme--ui--border-style,solid) transparent;border-left:3px solid #06c;border-left:var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px)) var(--pfe-theme--ui--border-style,solid) var(--pfe-tabs--BorderColor,var(--pfe-tabs--highlight,var(--pfe-theme--color--ui-accent,#06c)));padding-left:calc(1rem - 2px);padding-left:calc(var(--pfe-theme--container-padding,1rem) - 2px)}:host([vertical]:not([variant=earth])[aria-selected=false]){border-right:3px solid transparent;border-right:var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px)) var(--pfe-theme--ui--border-style,solid) transparent}:host([vertical]:not([variant=earth])[aria-selected=false]:hover){border-right:3px solid transparent;border-right:var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px)) var(--pfe-theme--ui--border-style,solid) transparent;border-bottom:0;border-left:3px solid #b8bbbe;border-left:var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px)) var(--pfe-theme--ui--border-style,solid) var(--pfe-tabs--BorderColor--hover,#b8bbbe);padding-left:calc(1rem - 2px);padding-left:calc(var(--pfe-theme--container-padding,1rem) - 2px)}}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([variant=earth]){background-color:#f0f0f0;color:#6a6e73}}:host(:not([vertical])[variant=earth]:not([aria-selected=true]):first-of-type){border-left-color:transparent}:host(:not([vertical])[variant=earth]:not([aria-selected=true]):last-of-type){border-right-color:transparent}:host([variant=earth][aria-selected=false]){background-color:#f0f0f0;background-color:var(--pfe-tabs--BackgroundColor--inactive,var(--pfe-theme--color--surface--lighter,#f0f0f0));border-color:#d2d2d2;border-color:var(--pfe-theme--color--surface--border,#d2d2d2);border-top-width:3px;border-top-width:var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px));border-top-color:transparent;border-bottom-color:#b8bbbe;border-bottom-color:var(--pfe-tabs--BorderColor--hover,#b8bbbe);border-bottom-width:1px;border-bottom-width:var(--pfe-theme--ui--border-width,1px)}:host([variant=earth][aria-selected=false]:hover){border-top-color:#b8bbbe;border-top-color:var(--pfe-tabs--BorderColor--hover,#b8bbbe)}:host([variant=earth][aria-selected=true]){background-color:#fff;background-color:var(--pfe-tabs--BackgroundColor,var(--pfe-theme--color--surface--lightest,#fff));border-bottom:0;border-left-color:#d2d2d2;border-left-color:var(--pfe-theme--color--surface--border,#d2d2d2);border-right-color:#d2d2d2;border-right-color:var(--pfe-theme--color--surface--border,#d2d2d2);border-top:solid #06c 3px;border-top:solid var(--pfe-tabs--BorderColor,var(--pfe-tabs--highlight,var(--pfe-theme--color--ui-accent,#06c))) var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px))}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([variant=earth][aria-selected=true]){color:#6a6e73;background-color:#fff;border-left:1px solid #d2d2d2;border-top:3px solid #06c;border-top:var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px)) solid var(--pfe-tabs--BorderColor,var(--pfe-tabs--highlight,var(--pfe-theme--color--ui-accent,#06c)));border-bottom:0}}:host([variant=earth][aria-selected=true]:last-of-type){border-right:1px solid #d2d2d2;border-right:var(--pfe-theme--ui--border-width,1px) var(--pfe-theme--ui--border-style,solid) var(--pfe-theme--color--surface--border,#d2d2d2)}@media screen and (min-width:768px){:host([vertical][variant=earth]){border-top:1px solid #d2d2d2;border-top:var(--pfe-theme--ui--border-width,1px) var(--pfe-theme--ui--border-style,solid) var(--pfe-theme--color--surface--border,#d2d2d2);border-bottom:1px solid #d2d2d2;border-bottom:var(--pfe-theme--ui--border-width,1px) var(--pfe-theme--ui--border-style,solid) var(--pfe-theme--color--surface--border,#d2d2d2);border-left-width:3px;border-left-width:var(--pfe-theme--ui--border-width--active,3px);text-align:left}:host([vertical][variant=earth][aria-selected=false]:first-of-type){border-top-color:transparent;border-left:3px solid transparent;border-left:var(--pfe-tabs--BorderWidth,var(--pfe-theme--ui--border-width--active,3px)) var(--pfe-theme--ui--border-style,solid) transparent}:host([vertical][variant=earth][aria-selected=false]:last-of-type){border-bottom-color:transparent}:host([vertical][variant=earth][aria-selected=false]){border-right:0;border-bottom-color:transparent;border-left-color:transparent}:host([vertical][variant=earth][aria-selected=false]:hover){border-left-color:#b8bbbe;border-left-color:var(--pfe-tabs--BorderColor--hover,#b8bbbe);border-top-color:#d2d2d2;border-top-color:var(--pfe-theme--color--surface--border,#d2d2d2)}:host([vertical][variant=earth][aria-selected=false]:first-of-type:hover){border-left-color:#d2d2d2;border-left-color:var(--pfe-theme--color--surface--border,#d2d2d2);border-top-color:transparent}:host([vertical][variant=earth][aria-selected=true]){border-top-color:#d2d2d2;border-top-color:var(--pfe-theme--color--surface--border,#d2d2d2);border-left-color:#06c;border-left-color:var(--pfe-tabs--BorderColor,var(--pfe-tabs--highlight,var(--pfe-theme--color--ui-accent,#06c)));border-right-color:transparent;margin-right:-1px}}:host([on=dark][variant=earth]){--pfe-tabs--Color:var(--pfe-theme--color--text--on-dark, #fff);--pfe-tabs--Color--focus:var(--pfe-theme--color--text--on-dark, #fff);border-right-color:#6a6e73;border-right-color:var(--pfe-theme--color--surface--border--darker,#6a6e73);border-left-color:#6a6e73;border-left-color:var(--pfe-theme--color--surface--border--darker,#6a6e73)}:host([on=dark][variant=earth][aria-selected=false]){--pfe-tabs--Color:var(--pfe-theme--color--text--muted--on-dark, #d2d2d2);--pfe-tabs--BackgroundColor--inactive:var(--pfe-theme--color--surface--darker, #3c3f42)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([on=dark][variant=earth][aria-selected=false]){background-color:#fff!important;background-color:var(--pfe-theme--color--surface--lightest,#fff)!important}:host([on=dark][variant=earth][aria-selected=false]) #tab *{color:#151515!important}}:host([on=dark][variant=earth][aria-selected=true]){--pfe-tabs--Color--focus:var(--pfe-theme--color--text--on-dark, #fff);--pfe-tabs--BackgroundColor:var(--pfe-theme--color--surface--darkest, #151515)}:host([variant=earth][on=saturated][aria-selected=false]){--pfe-tabs--BackgroundColor:var(--pfe-theme--color--surface--lighter, #f0f0f0)}:host([variant=earth][on=saturated][aria-selected=true]){--pfe-tabs--BackgroundColor:var(--pfe-theme--color--surface--lightest, #fff)}:host([on=saturated]:not([variant=earth])){--pfe-tabs--Color:var(--pfe-theme--color--text--on-saturated, #fff);--pfe-tabs--Color--focus:var(--pfe-theme--color--text--on-saturated, #fff)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([on=saturated]:not([variant=earth])){background-color:transparent}:host([on=saturated]:not([variant=earth])) #tab *{color:#151515!important}}:host([on=saturated]:not([variant=earth])[aria-selected=true]){--pfe-tabs--Color--focus:var(--pfe-theme--color--text--on-saturated, #fff);--pfe-tabs--BorderColor:var(--pfe-theme--color--ui-base--on-saturated, #fff)}:host([on=saturated]:not([variant=earth])[aria-selected=false]){--pfe-tabs--Color:var(--pfe-theme--color--text--muted--on-saturated, #d2d2d2)}:host([on=saturated]:not([variant=earth])[aria-selected=false]:hover){--pfe-tabs--BorderColor:var(--pfe-theme--color--surface--border, #d2d2d2)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([on=saturated]:not([variant=earth])[aria-selected=true]:last-of-type){border-left:0!important}}:host([on=dark]:not([variant=earth])){--pfe-tabs--Color:var(--pfe-theme--color--text--on-dark, #fff);--pfe-tabs--Color--focus:var(--pfe-theme--color--text--on-dark, #fff)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([on=dark]:not([variant=earth])) #tab *{color:#151515!important}}:host([on=dark]:not([variant=earth])[aria-selected=false]){--pfe-tabs--Color:var(--pfe-theme--color--text--muted--on-saturated, #d2d2d2)}:host([on=dark]:not([variant=earth])[aria-selected=false]:hover){--pfe-tabs--BorderColor:var(--pfe-theme--color--surface--lightest, #fff);border-bottom-color:#f0f0f0;border-bottom-color:var(--pfe-theme--color--surface--base,#f0f0f0);--pfe-tabs__tab--BorderBottom:var(--pfe-tabs--BorderWidth, var(--pfe-theme--ui--border-width--active, 3px)) var(--pfe-theme--ui--border-style, solid) var(--pfe-theme--color--surface--border, #d2d2d2)}:host([on=dark]:not([variant=earth])[vertical][aria-selected=false]:hover){border-bottom-color:transparent} /*# sourceMappingURL=pfe-tab.min.css.map */</style>\n<span id="tab"></span>';
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-tab.scss";
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-tab.html";
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-tab";
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        selected: {
                          title: "Selected tab",
                          type: String,
                          default: "false",
                          attr: "aria-selected",
                          values: ["true", "false"],
                          observer: "_selectedHandler",
                        },
                        controls: {
                          title: "Connected panel ID",
                          type: String,
                          attr: "aria-controls",
                        },
                        role: { type: String, default: "tab" },
                        tabindex: { type: Number, default: -1 },
                        variant: {
                          title: "Variant",
                          type: String,
                          enum: ["wind", "earth"],
                        },
                        oldPfeId: {
                          type: String,
                          attr: "pfe-id",
                          observer: "_oldPfeIdChanged",
                        },
                      };
                    },
                  },
                  {
                    key: "PfeType",
                    get: function () {
                      return PFElement.PfeTypes.Content;
                    },
                  },
                ]
              ),
              createClass(PfeTab, [
                {
                  key: "connectedCallback",
                  value: function () {
                    get(
                      PfeTab.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeTab.prototype),
                      "connectedCallback",
                      this
                    ).call(this),
                      (this._tabItem = this.shadowRoot.querySelector("#tab")),
                      this.hasLightDOM() && this._init(),
                      this._observer.observe(this, TAB_CONTENT_MUTATION_CONFIG);
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    get(
                      PfeTab.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeTab.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this),
                      this._observer.disconnect();
                  },
                },
                {
                  key: "_selectedHandler",
                  value: function () {
                    "true" === this.selected
                      ? (this.tabindex = 0)
                      : (this.tabindex = -1);
                  },
                },
                {
                  key: "_oldPfeIdChanged",
                  value: function (oldVal, newVal) {
                    this.id || (this.id = newVal);
                  },
                },
                {
                  key: "_init",
                  value: function () {
                    window.ShadyCSS && this._observer.disconnect(),
                      (this.role = "tab"),
                      this._setTabContent(),
                      this.id || (this.id = this.randomId),
                      window.ShadyCSS &&
                        this._observer.observe(
                          this,
                          TAB_CONTENT_MUTATION_CONFIG
                        );
                  },
                },
                {
                  key: "_getTabElement",
                  value: function () {
                    if (this.firstElementChild || this.firstChild) {
                      if (
                        this.firstElementChild &&
                        this.firstElementChild.tagName
                      ) {
                        if ("SLOT" === this.firstElementChild.tagName) {
                          var slotted = this.firstElementChild.assignedNodes();
                          if (0 === slotted.length)
                            return void this.warn(
                              "No heading information exists within this slot."
                            );
                          slotted.length > 1 &&
                            this.warn(
                              "Tab heading currently only supports 1 heading tag."
                            );
                          var htags = slotted.filter(function (slot) {
                            return (
                              slot.tagName.match(/^H[1-6]/) ||
                              "P" === slot.tagName
                            );
                          });
                          return htags.length > 0 ? htags[0] : void 0;
                        }
                        if (
                          this.firstElementChild.tagName.match(/^H[1-6]/) ||
                          "P" === this.firstElementChild.tagName
                        )
                          return this.firstElementChild;
                        this.warn(
                          "Tab heading should contain at least 1 heading tag for correct semantics."
                        );
                      }
                    } else this.warn("No tab content provided");
                  },
                },
                {
                  key: "_setTabContent",
                  value: function () {
                    var label = "",
                      isTag = !1,
                      tabElement = this._getTabElement();
                    if (
                      (tabElement &&
                        ((label = tabElement.textContent
                          .trim()
                          .replace(/\s+/g, " ")),
                        (isTag = !0)),
                      tabElement ||
                        (this.textContent.trim().replace(/\s+/g, " ") &&
                          (label = this.textContent
                            .trim()
                            .replace(/\s+/g, " "))),
                      label)
                    ) {
                      var semantics = "h3";
                      isTag && (semantics = tabElement.tagName.toLowerCase());
                      var heading = document.createElement(semantics);
                      (heading.textContent = label),
                        this._tabItem &&
                          ((this._tabItem.innerHTML = ""),
                          this._tabItem.appendChild(heading));
                    } else
                      this.warn(
                        "There does not appear to be any content in the tab region."
                      );
                  },
                },
              ]),
              PfeTab
            );
          })(),
          TAB_PANEL_MUTATION_CONFIG = { childList: !0, subtree: !0 },
          PfeTabPanel = (function (_PFElement) {
            function PfeTabPanel() {
              classCallCheck(this, PfeTabPanel);
              var _this = possibleConstructorReturn(
                this,
                (
                  PfeTabPanel.__proto__ || Object.getPrototypeOf(PfeTabPanel)
                ).call(this, PfeTabPanel, { type: PfeTabPanel.PfeType })
              );
              return (
                (_this._init = _this._init.bind(_this)),
                (_this._observer = new MutationObserver(_this._init)),
                _this
              );
            }
            return (
              inherits(PfeTabPanel, PFElement),
              createClass(
                PfeTabPanel,
                [
                  {
                    key: "html",
                    get: function () {
                      return '\n<style>:host{display:block;color:#3c3f42;color:var(--pfe-broadcasted--text,#3c3f42)}:host(:focus){outline:0}:host [tabindex]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%}:host .container{margin:0;width:100%;background-color:transparent;background-color:var(--pfe-tabs__panel--BackgroundColor,transparent);border-top:0;border-top:var(--pfe-tabs__panel--BorderTop,0);border-right:0;border-right:var(--pfe-tabs__panel--BorderRight,0);border-bottom:0;border-bottom:var(--pfe-tabs__panel--BorderBottom,0);border-left:0;border-left:var(--pfe-tabs__panel--BorderLeft,0);padding-top:calc(1rem * 3);padding-top:var(--pfe-tabs__panel--PaddingTop,calc(var(--pfe-theme--container-padding,1rem) * 3))}@media screen and (min-width:1200px){:host .container{padding-top:calc(1rem * 3);padding-top:var(--pfe-tabs__panel--PaddingTop,calc(var(--pfe-theme--container-padding,1rem) * 3));padding-right:0;padding-right:var(--pfe-tabs__panel--PaddingRight,0);padding-bottom:0;padding-bottom:var(--pfe-tabs__panel--PaddingBottom,0);padding-left:0;padding-left:var(--pfe-tabs__panel--PaddingLeft,0)}}:host .container::after{clear:both;content:"";display:table}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host .container{padding:1em;background-color:#fff!important;color:#151515!important}}:host([hidden]){display:none}:host([variant=earth]){background-color:#fff;background-color:var(--pfe-tabs__panel--BackgroundColor,var(--pfe-theme--color--surface--lightest,#fff))}:host([variant=earth]) .container{padding-top:calc(1rem * 3);padding-top:var(--pfe-tabs__panel--PaddingTop,calc(var(--pfe-theme--container-padding,1rem) * 3));padding-right:calc(1rem * 3);padding-right:var(--pfe-tabs__panel--PaddingRight,calc(var(--pfe-theme--container-padding,1rem) * 3));padding-bottom:calc(1rem * 3);padding-bottom:var(--pfe-tabs__panel--PaddingBottom,calc(var(--pfe-theme--container-padding,1rem) * 3));padding-left:calc(1rem * 3);padding-left:var(--pfe-tabs__panel--PaddingLeft,calc(var(--pfe-theme--container-padding,1rem) * 3))}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([variant=earth]) .container{background-color:#fff;padding:1em;border-right:1px solid #d2d2d2;border-bottom:1px solid #d2d2d2;border-left:1px solid #d2d2d2}}@media screen and (min-width:768px){:host([variant=wind][vertical]) .container{padding-top:0;padding-top:var(--pfe-tabs__panel--PaddingTop,0);padding-bottom:0;padding-bottom:var(--pfe-tabs__panel--PaddingBottom,0);padding-right:0;padding-right:var(--pfe-tabs__panel--PaddingRight,0);margin:0 calc(1rem - 2px);margin:0 calc(var(--pfe-theme--container-spacer,1rem) - 2px)}}@media screen and (min-width:768px) and (-ms-high-contrast:active),screen and (min-width:768px) and (-ms-high-contrast:none){:host([variant=wind][vertical]) .container{padding:1em 0 1em 2em}}@media screen and (min-width:768px){:host([variant=earth][vertical]){border-top:0;border-top:var(--pfe-tabs--BorderTop,0);border-left:1px solid #d2d2d2;border-left:var(--pfe-tabs--BorderLeft,var(--pfe-theme--ui--border-width,1px) var(--pfe-theme--ui--border-style,solid) var(--pfe-theme--color--surface--border,#d2d2d2));height:100%;background-color:#fff;background-color:var(--pfe-tabs__panel--BackgroundColor,var(--pfe-theme--color--surface--lightest,#fff))}:host([variant=earth][vertical]) .container{padding-left:calc(1rem * 3);padding-left:var(--pfe-tabs__panel--PaddingLeft,calc(var(--pfe-theme--container-padding,1rem) * 3))}}@media screen and (min-width:768px) and (-ms-high-contrast:active),screen and (min-width:768px) and (-ms-high-contrast:none){:host([variant=earth][vertical]) .container{border-top:1px solid #d2d2d2}}:host([variant=earth]) .container{padding-top:calc(1rem * 3);padding-top:var(--pfe-tabs__panel--PaddingTop,calc(var(--pfe-theme--container-padding,1rem) * 3));padding-right:calc(1rem * 3);padding-right:var(--pfe-tabs__panel--PaddingRight,calc(var(--pfe-theme--container-padding,1rem) * 3));padding-bottom:calc(1rem * 3);padding-bottom:var(--pfe-tabs__panel--PaddingBottom,calc(var(--pfe-theme--container-padding,1rem) * 3));padding-left:calc(1rem * 3);padding-left:var(--pfe-tabs__panel--PaddingLeft,calc(var(--pfe-theme--container-padding,1rem) * 3))}:host([on=dark][variant=earth]){background-color:#151515;background-color:var(--pfe-tabs__panel--BackgroundColor,var(--pfe-theme--color--surface--darkest,#151515));--pfe-broadcasted--text:var(--pfe-theme--color--text--on-dark, #fff);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted--on-dark, #d2d2d2);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-dark, #73bcf7);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-dark, #bee1f4);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-dark, #bee1f4);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-dark, #bee1f4);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-dark, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-dark, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-dark, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-dark, none)}:host([on=saturated][variant=earth]){background-color:#fff;background-color:var(--pfe-tabs__panel--BackgroundColor,var(--pfe-theme--color--surface--lightest,#fff));--pfe-broadcasted--text:var(--pfe-theme--color--text, #151515);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted, #6a6e73);--pfe-broadcasted--link:var(--pfe-theme--color--link, #06c);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover, #004080);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus, #004080);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited, #6753ac);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited, none)}:host([on=saturated]:not([variant=earth])){--pfe-broadcasted--text:var(--pfe-theme--color--text--on-saturated, #fff);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted--on-saturated, #d2d2d2);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-saturated, #fff);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-saturated, #fafafa);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-saturated, #fafafa);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-saturated, #d2d2d2);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-saturated, underline);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-saturated, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-saturated, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-saturated, underline)}:host([on=dark]:not([variant=earth])){--pfe-broadcasted--text:var(--pfe-theme--color--text--on-dark, #fff);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted--on-dark, #d2d2d2);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-dark, #73bcf7);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-dark, #bee1f4);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-dark, #bee1f4);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-dark, #bee1f4);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-dark, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-dark, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-dark, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-dark, none)} /*# sourceMappingURL=pfe-tab-panel.min.css.map */</style>\n<div tabindex="-1" role="tabpanel">\n  <div class="container">\n    <slot></slot>\n  </div>\n</div>';
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-tab-panel.scss";
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-tab-panel.html";
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-tab-panel";
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        selected: {
                          title: "Selected tab",
                          type: Boolean,
                          default: !1,
                          attr: "aria-selected",
                          observer: "_selectedHandler",
                        },
                        hidden: {
                          title: "Visibility",
                          type: Boolean,
                          default: !1,
                        },
                        role: { type: String, default: "tabpanel" },
                        tabindex: { type: Number, default: 0 },
                        labelledby: { type: String, attr: "aria-labelledby" },
                        variant: {
                          title: "Variant",
                          type: String,
                          enum: ["wind", "earth"],
                        },
                        oldPfeId: {
                          type: String,
                          attr: "pfe-id",
                          observer: "_oldPfeIdChanged",
                        },
                      };
                    },
                  },
                  {
                    key: "PfeType",
                    get: function () {
                      return PFElement.PfeTypes.Container;
                    },
                  },
                ]
              ),
              createClass(PfeTabPanel, [
                {
                  key: "connectedCallback",
                  value: function () {
                    get(
                      PfeTabPanel.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeTabPanel.prototype),
                      "connectedCallback",
                      this
                    ).call(this),
                      this.hasLightDOM() && this._init(),
                      this._observer.observe(this, TAB_PANEL_MUTATION_CONFIG);
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    get(
                      PfeTabPanel.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeTabPanel.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this),
                      this._observer.disconnect();
                  },
                },
                {
                  key: "_init",
                  value: function () {
                    window.ShadyCSS && this._observer.disconnect(),
                      this.id || (this.id = this.randomId),
                      (this.role = "tabpanel"),
                      this.previousElementSibling &&
                        "true" !== this.previousElementSibling.selected &&
                        (this.hidden = !0),
                      window.ShadyCSS &&
                        this._observer.observe(this, TAB_PANEL_MUTATION_CONFIG);
                  },
                },
                {
                  key: "_oldPfeIdChanged",
                  value: function (oldVal, newVal) {
                    this.id || (this.id = newVal);
                  },
                },
              ]),
              PfeTabPanel
            );
          })(),
          KEYCODE_DOWN = 40,
          KEYCODE_LEFT = 37,
          KEYCODE_RIGHT = 39,
          KEYCODE_UP = 38,
          KEYCODE_HOME = 36,
          KEYCODE_END = 35,
          CAN_USE_URLSEARCHPARAMS = !!window.URLSearchParams,
          TABS_MUTATION_CONFIG = { childList: !0, subtree: !0 },
          PfeTabs = (function (_PFElement) {
            function PfeTabs() {
              classCallCheck(this, PfeTabs);
              var _this = possibleConstructorReturn(
                this,
                (PfeTabs.__proto__ || Object.getPrototypeOf(PfeTabs)).call(
                  this,
                  PfeTabs,
                  { type: PfeTabs.PfeType }
                )
              );
              return (
                (_this._linked = !1),
                (_this._init = _this._init.bind(_this)),
                (_this._onClick = _this._onClick.bind(_this)),
                (_this._linkPanels = _this._linkPanels.bind(_this)),
                (_this._popstateEventHandler =
                  _this._popstateEventHandler.bind(_this)),
                (_this._observer = new MutationObserver(_this._init)),
                (_this._updateHistory = !0),
                _this
              );
            }
            return (
              inherits(PfeTabs, PFElement),
              createClass(
                PfeTabs,
                [
                  {
                    key: "html",
                    get: function () {
                      return '\n<style>@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host{color:#151515!important}}:host{display:block;display:var(--pfe-tabs--Display,block);padding:0;padding:var(--pfe-tabs--Padding,0)}:host .tabs{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;flex-direction:var(--pfe-tabs__tabs--FlexDirection,row);width:auto;width:var(--pfe-tabs__tabs--Width,auto);border-top:0;border-top:var(--pfe-tabs__tabs--BorderTop,0);border-right:0;border-right:var(--pfe-tabs__tabs--BorderRight,0);border-bottom:1px solid #d2d2d2;border-bottom:var(--pfe-tabs__tabs--BorderBottom,var(--pfe-theme--ui--border-width,1px) var(--pfe-theme--ui--border-style,solid) var(--pfe-tabs__tabs--BorderColor,var(--pfe-theme--color--surface--border,#d2d2d2)));border-left:0;border-left:var(--pfe-tabs__tabs--BorderLeft,0);padding:0;padding:var(--pfe-tabs__tabs--Padding,0)}:host .panels{width:auto;width:var(--pfe-tabs__panels--Width,auto)}:host(:not([vertical])[tab-align=center]) .tabs{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}@media screen and (min-width:768px){:host([vertical]){--pfe-tabs--Display:flex;--pfe-tabs__tabs--FlexDirection:column;--pfe-tabs__tabs--Width:20%;--pfe-tabs__tabs--BorderRight:var(--pfe-theme--ui--border-width, 1px) var(--pfe-theme--ui--border-style, solid) var(--pfe-tabs--BorderColor);--pfe-tabs__tabs--BorderBottom:0;--pfe-tabs__panels--Width:80%;--pfe-tabs__panels--PaddingRight:var(--pfe-theme--container-padding, 1rem)}}@media screen and (min-width:768px) and (-ms-high-contrast:active),screen and (min-width:768px) and (-ms-high-contrast:none){:host([vertical]){display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}:host([vertical]) .tabs{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:22.22%;border-right:1px solid #d2d2d2;border-right:1px solid var(--pfe-theme--color--surface--border,#d2d2d2);border-bottom:0}:host([vertical]) .panels{width:77.8%;padding-right:1em}}@media screen and (min-width:768px) and (-ms-high-contrast:active),screen and (min-width:768px) and (-ms-high-contrast:none){:host([vertical][variant=earth]) .tabs{padding:1em 0 0 0}}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host(:not([variant=earth])){background-color:#fff;background-color:var(--pfe-theme--color--surface--lightest,#fff);color:#151515;color:var(--pfe-theme--color--text,#151515)}}:host([variant=earth]){--pfe-tabs__tabs--PaddingLeft:var(--pfe-theme--container-padding, 1rem)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([variant=earth]) .tabs{padding-left:1em}}:host([on=dark]){--pfe-broadcasted--text:var(--pfe-theme--color--text--on-dark, #fff);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted--on-dark, #d2d2d2);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-dark, #73bcf7);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-dark, #bee1f4);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-dark, #bee1f4);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-dark, #bee1f4);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-dark, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-dark, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-dark, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-dark, none)}:host([on=saturated]){--pfe-broadcasted--text:var(--pfe-theme--color--text--on-saturated, #fff);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted--on-saturated, #d2d2d2);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-saturated, #fff);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-saturated, #fafafa);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-saturated, #fafafa);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-saturated, #d2d2d2);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-saturated, underline);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-saturated, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-saturated, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-saturated, underline)}:host([on=light]){--pfe-broadcasted--text:var(--pfe-theme--color--text, #151515);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted, #6a6e73);--pfe-broadcasted--link:var(--pfe-theme--color--link, #06c);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover, #004080);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus, #004080);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited, #6753ac);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited, none)}:host([vertical]) .tabs-prefix,:host([vertical]) .tabs-suffix{left:0;top:0;content:" ";height:calc(1rem * 2);height:calc(var(--pfe-theme--container-padding,1rem) * 2);width:1px;position:relative}@media screen and (min-width:768px){:host([vertical]:not([variant=earth])) .tabs-prefix,:host([vertical]:not([variant=earth])) .tabs-suffix{background-color:#d2d2d2;background-color:var(--pfe-tabs__tabs--BorderColor,var(--pfe-theme--color--surface--border,#d2d2d2))}}:host(:not([vertical])[variant=earth]) .tabs-prefix{left:0;top:0;content:" ";height:1px;width:1rem;width:var(--pfe-theme--container-padding,1rem);position:relative}@media screen and (min-width:768px){:host(:not([vertical])[variant=earth]) .tabs-prefix{width:calc(1rem * 2);width:calc(var(--pfe-theme--container-padding,1rem) * 2)}}:host([hidden]){display:none} /*# sourceMappingURL=pfe-tabs.min.css.map */</style>\n<div class="tabs">\n  <div class="tabs-prefix"></div>\n  <slot name="tab"></slot>\n  <div class="tabs-suffix"></div>\n</div>\n<div class="panels">\n  <slot name="panel"></slot>\n</div>';
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-tabs.scss";
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-tabs.html";
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-tabs";
                    },
                  },
                  {
                    key: "meta",
                    get: function () {
                      return {
                        title: "Tabs",
                        description: "This element creates a tabbed interface.",
                      };
                    },
                  },
                  {
                    key: "contentTemplate",
                    get: function () {
                      return '\n      <pfe-tab content-type="header" slot="tab"></pfe-tab>\n      <pfe-tab-panel content-type="panel" slot="panel"></pfe-tab-panel>\n    ';
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        vertical: {
                          title: "Vertical orientation",
                          type: Boolean,
                          default: !1,
                          cascade: "pfe-tab,pfe-tab-panel",
                          observer: "_verticalHandler",
                        },
                        orientation: {
                          title: "Orientation",
                          type: String,
                          attr: "aria-orientation",
                          default: "horizontal",
                          values: ["horizontal", "vertical"],
                        },
                        selectedIndex: {
                          title: "Index of the selected tab",
                          type: Number,
                          observer: "_selectedIndexHandler",
                        },
                        tabAlign: {
                          title: "Tab alignment",
                          type: String,
                          enum: ["center"],
                        },
                        controls: { type: String, attr: "aria-controls" },
                        variant: {
                          title: "Variant",
                          type: String,
                          enum: ["wind", "earth"],
                          default: "wind",
                          cascade: "pfe-tab,pfe-tab-panel",
                        },
                        tabHistory: {
                          title: "Tab History",
                          type: Boolean,
                          default: !1,
                          observer: "_tabHistoryHandler",
                        },
                        role: { type: String, default: "tablist" },
                        oldVariant: {
                          type: String,
                          attr: "pfe-variant",
                          alias: "variant",
                        },
                        oldTabHistory: {
                          type: Boolean,
                          alias: "tabHistory",
                          attr: "pfe-tab-history",
                        },
                        oldPfeId: {
                          type: String,
                          attr: "pfe-id",
                          observer: "_oldPfeIdChanged",
                        },
                      };
                    },
                  },
                  {
                    key: "slots",
                    get: function () {
                      return {
                        tab: {
                          title: "Tab",
                          type: "array",
                          namedSlot: !0,
                          items: { $ref: "pfe-tab" },
                        },
                        panel: {
                          title: "Panel",
                          type: "array",
                          namedSlot: !0,
                          items: { $ref: "pfe-tab-panel" },
                        },
                      };
                    },
                  },
                  {
                    key: "events",
                    get: function () {
                      return {
                        hiddenTab: this.tag + ":hidden-tab",
                        shownTab: this.tag + ":shown-tab",
                      };
                    },
                  },
                  {
                    key: "PfeType",
                    get: function () {
                      return PFElement.PfeTypes.Combo;
                    },
                  },
                ]
              ),
              createClass(PfeTabs, [
                {
                  key: "connectedCallback",
                  value: function () {
                    var _this2 = this;
                    Promise.all([
                      customElements.whenDefined(PfeTab.tag),
                      customElements.whenDefined(PfeTabPanel.tag),
                    ]).then(function () {
                      get(
                        PfeTabs.prototype.__proto__ ||
                          Object.getPrototypeOf(PfeTabs.prototype),
                        "connectedCallback",
                        _this2
                      ).call(_this2),
                        _this2.hasLightDOM() && _this2._init(),
                        _this2._observer.observe(_this2, TABS_MUTATION_CONFIG),
                        _this2.addEventListener("keydown", _this2._onKeyDown),
                        _this2.addEventListener("click", _this2._onClick);
                    });
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    var _this3 = this;
                    get(
                      PfeTabs.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeTabs.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this),
                      this.removeEventListener("keydown", this._onKeyDown),
                      this._allTabs().forEach(function (tab) {
                        return tab.removeEventListener(
                          "click",
                          _this3._onClick
                        );
                      }),
                      this._observer.disconnect(),
                      this.tabHistory &&
                        window.removeEventListener(
                          "popstate",
                          this._popstateEventHandler
                        );
                  },
                },
                {
                  key: "_verticalHandler",
                  value: function () {
                    this.vertical
                      ? (this.orientation = "vertical")
                      : (this.orientation = "horizontal");
                  },
                },
                {
                  key: "_selectedIndexHandler",
                  value: function (oldVal, newVal) {
                    var _this4 = this;
                    Promise.all([
                      customElements.whenDefined(PfeTab.tag),
                      customElements.whenDefined(PfeTabPanel.tag),
                    ]).then(function () {
                      _this4._linkPanels(),
                        _this4.selectIndex(newVal),
                        (_this4._updateHistory = !0);
                    });
                  },
                },
                {
                  key: "_tabHistoryHandler",
                  value: function () {
                    this.tabHistory
                      ? window.addEventListener(
                          "popstate",
                          this._popstateEventHandler
                        )
                      : window.removeEventListener(
                          "popstate",
                          this._popstateEventHandler
                        );
                  },
                },
                {
                  key: "_oldPfeIdChanged",
                  value: function (oldVal, newVal) {
                    !this.id && newVal && (this.id = newVal);
                  },
                },
                {
                  key: "select",
                  value: function (newTab) {
                    newTab &&
                      (newTab.tagName.toLowerCase() === PfeTab.tag
                        ? (this.selectedIndex = this._getTabIndex(newTab))
                        : this.warn(
                            "the tab must be a " + PfeTab.tag + " element"
                          ));
                  },
                },
                {
                  key: "selectIndex",
                  value: function (_index) {
                    if (void 0 !== _index && null !== _index) {
                      var index = parseInt(_index, 10),
                        tabs = this._allTabs(),
                        tab = tabs[index];
                      if (tabs.length > 0 && !tab)
                        this.warn("tab " + _index + " does not exist");
                      else if (tabs || tab) {
                        if (
                          this.selected &&
                          this.tabHistory &&
                          this._updateHistory &&
                          CAN_USE_URLSEARCHPARAMS
                        ) {
                          var pathname = window.location.pathname,
                            urlParams = new URLSearchParams(
                              window.location.search
                            ),
                            hash = window.location.hash;
                          urlParams.set(this.id, tab.id),
                            history.pushState(
                              {},
                              "",
                              pathname + "?" + urlParams.toString() + hash
                            );
                        }
                        return this._selectTab(tab), tab;
                      }
                    }
                  },
                },
                {
                  key: "_init",
                  value: function () {
                    var tabIndexFromURL = this._getTabIndexFromURL();
                    (this._linked = !1),
                      this._linkPanels(),
                      window.ShadyCSS && this._observer.disconnect(),
                      (this.role = "tablist"),
                      tabIndexFromURL > -1 &&
                        ((this._setFocus = !0),
                        (this.selectedIndex = tabIndexFromURL)),
                      this.selectedIndex || (this.selectedIndex = 0),
                      window.ShadyCSS &&
                        this._observer.observe(this, TABS_MUTATION_CONFIG);
                  },
                },
                {
                  key: "_linkPanels",
                  value: function () {
                    var _this5 = this;
                    this._linked ||
                      (window.ShadyCSS && this._observer.disconnect(),
                      this._allTabs().forEach(function (tab) {
                        var panel = tab.nextElementSibling;
                        panel.tagName.toLowerCase() === PfeTabPanel.tag
                          ? ((tab.controls = panel.id),
                            (panel.labelledby = tab.id),
                            tab.addEventListener("click", _this5._onClick))
                          : _this5.warn(
                              "not a sibling of a <" + PfeTabPanel.tag + ">"
                            );
                      }),
                      (this._linked = !0),
                      window.ShadyCSS &&
                        this._observer.observe(this, TABS_MUTATION_CONFIG));
                  },
                },
                {
                  key: "_allPanels",
                  value: function () {
                    return []
                      .concat(toConsumableArray(this.children))
                      .filter(function (child) {
                        return child.matches(PfeTabPanel.tag);
                      });
                  },
                },
                {
                  key: "_allTabs",
                  value: function () {
                    return []
                      .concat(toConsumableArray(this.children))
                      .filter(function (child) {
                        return child.matches(PfeTab.tag);
                      });
                  },
                },
                {
                  key: "_panelForTab",
                  value: function (tab) {
                    if (tab && tab.controls)
                      return this.querySelector("#" + tab.controls);
                  },
                },
                {
                  key: "_prevTab",
                  value: function () {
                    var tabs = this._allTabs();
                    return tabs[
                      (tabs.findIndex(function (tab) {
                        return "true" === tab.selected;
                      }) -
                        1 +
                        tabs.length) %
                        tabs.length
                    ];
                  },
                },
                {
                  key: "_firstTab",
                  value: function () {
                    return this._allTabs()[0];
                  },
                },
                {
                  key: "_lastTab",
                  value: function () {
                    var tabs = this._allTabs();
                    return tabs[tabs.length - 1];
                  },
                },
                {
                  key: "_nextTab",
                  value: function () {
                    var tabs = this._allTabs();
                    return tabs[
                      (tabs.findIndex(function (tab) {
                        return "true" === tab.selected;
                      }) +
                        1) %
                        tabs.length
                    ];
                  },
                },
                {
                  key: "_getTabIndex",
                  value: function (_tab) {
                    return _tab
                      ? this._allTabs().findIndex(function (tab) {
                          return tab.id === _tab.id;
                        })
                      : (this.warn(
                          "No tab was provided to _getTabIndex; required to return the index value."
                        ),
                        0);
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    var tabs = this._allTabs(),
                      panels = this._allPanels();
                    tabs.forEach(function (tab) {
                      return (tab.selected = "false");
                    }),
                      panels.forEach(function (panel) {
                        return (panel.hidden = !0);
                      });
                  },
                },
                {
                  key: "_selectTab",
                  value: function (newTab) {
                    if (newTab) {
                      this.reset();
                      var newPanel = this._panelForTab(newTab),
                        newTabSelected = !1;
                      newPanel ||
                        this.warn(
                          "No panel was found for the selected tab" +
                            (newTab.id ? ": pfe-tab#" + newTab.id : "")
                        ),
                        this.selected &&
                          this.selected !== newTab &&
                          ((newTabSelected = !0),
                          this.emitEvent(PfeTabs.events.hiddenTab, {
                            detail: { tab: this.selected },
                          })),
                        (newTab.selected = "true"),
                        (newPanel.hidden = !1),
                        (this.selected = newTab),
                        newTabSelected &&
                          (this._setFocus && newTab.focus(),
                          this.emitEvent(PfeTabs.events.shownTab, {
                            detail: { tab: this.selected },
                          })),
                        (this._setFocus = !1);
                    }
                  },
                },
                {
                  key: "_onKeyDown",
                  value: function (event) {
                    if (
                      this._allTabs().find(function (tab) {
                        return tab === event.target;
                      }) &&
                      !event.altKey
                    ) {
                      var newTab = void 0;
                      switch (event.keyCode) {
                        case KEYCODE_LEFT:
                        case KEYCODE_UP:
                          newTab = this._prevTab();
                          break;
                        case KEYCODE_RIGHT:
                        case KEYCODE_DOWN:
                          newTab = this._nextTab();
                          break;
                        case KEYCODE_HOME:
                          newTab = this._firstTab();
                          break;
                        case KEYCODE_END:
                          newTab = this._lastTab();
                          break;
                        default:
                          return;
                      }
                      event.preventDefault(),
                        newTab
                          ? ((this.selectedIndex = this._getTabIndex(newTab)),
                            (this._setFocus = !0))
                          : this.warn("No new tab could be found.");
                    }
                  },
                },
                {
                  key: "_onClick",
                  value: function (event) {
                    this._allTabs().find(function (tab) {
                      return tab === event.currentTarget;
                    }) &&
                      (this.selectedIndex = this._getTabIndex(
                        event.currentTarget
                      ));
                  },
                },
                {
                  key: "_getTabIndexFromURL",
                  value: function () {
                    var urlParams = void 0;
                    if (CAN_USE_URLSEARCHPARAMS) {
                      var tabsetInUrl =
                        (urlParams = new URLSearchParams(
                          window.location.search
                        )).has("" + this.id) || urlParams.has("pfe-" + this.id);
                      if (urlParams && tabsetInUrl) {
                        var id =
                          urlParams.get("" + this.id) ||
                          urlParams.get("pfe-" + this.id);
                        return this._allTabs().findIndex(function (tab) {
                          return tab.id === id;
                        });
                      }
                    }
                    return -1;
                  },
                },
                {
                  key: "_popstateEventHandler",
                  value: function () {
                    var tabIndexFromURL = this._getTabIndexFromURL();
                    (this._updateHistory = !1),
                      tabIndexFromURL > -1 &&
                        (this.selectedIndex = tabIndexFromURL);
                  },
                },
              ]),
              PfeTabs
            );
          })();
        return (
          PFElement.create(PfeTab),
          PFElement.create(PfeTabPanel),
          PFElement.create(PfeTabs),
          PfeTabs
        );
      }),
      (function (global, factory) {
        "object" == typeof exports && "undefined" != typeof module
          ? (module.exports = factory(
              require("../../pfelement/dist/pfelement.umd")
            ))
          : "function" == typeof define && define.amd
          ? define(["../../pfelement/dist/pfelement.umd"], factory)
          : ((global = global || self).PfeIcon = factory(global.PFElement));
      })(this, function (PFElement) {
        "use strict";
        (PFElement =
          PFElement &&
          Object.prototype.hasOwnProperty.call(PFElement, "default")
            ? PFElement.default
            : PFElement),
          (function () {
            if ("function" == typeof window.CustomEvent) return !1;
            window.CustomEvent = function (event, params) {
              params = params || { bubbles: !1, cancelable: !1, detail: null };
              var evt = document.createEvent("CustomEvent");
              return (
                evt.initCustomEvent(
                  event,
                  params.bubbles,
                  params.cancelable,
                  params.detail
                ),
                evt
              );
            };
          })();
        var classCallCheck = function (instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError("Cannot call a class as a function");
          },
          createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                (descriptor.enumerable = descriptor.enumerable || !1),
                  (descriptor.configurable = !0),
                  "value" in descriptor && (descriptor.writable = !0),
                  Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
              );
            };
          })(),
          possibleConstructorReturn = function (self, call) {
            if (!self)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !call ||
              ("object" != typeof call && "function" != typeof call)
              ? self
              : call;
          },
          slicedToArray = (function () {
            return function (arr, i) {
              if (Array.isArray(arr)) return arr;
              if (Symbol.iterator in Object(arr))
                return (function (arr, i) {
                  var _arr = [],
                    _n = !0,
                    _d = !1,
                    _e = void 0;
                  try {
                    for (
                      var _s, _i = arr[Symbol.iterator]();
                      !(_n = (_s = _i.next()).done) &&
                      (_arr.push(_s.value), !i || _arr.length !== i);
                      _n = !0
                    );
                  } catch (err) {
                    (_d = !0), (_e = err);
                  } finally {
                    try {
                      !_n && _i.return && _i.return();
                    } finally {
                      if (_d) throw _e;
                    }
                  }
                  return _arr;
                })(arr, i);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          PfeIconSet = (function () {
            function PfeIconSet(name, path, resolveIconName) {
              classCallCheck(this, PfeIconSet),
                (this.name = name),
                (this.path = path),
                (this._resolveIconName = resolveIconName);
            }
            return (
              createClass(PfeIconSet, [
                {
                  key: "resolveIconName",
                  value: function (iconName) {
                    return this._resolveIconName(
                      iconName,
                      this.name,
                      this.path
                    );
                  },
                },
              ]),
              PfeIconSet
            );
          })();
        var PfeIcon = (function (_PFElement) {
          function PfeIcon() {
            classCallCheck(this, PfeIcon);
            var _this = possibleConstructorReturn(
              this,
              (PfeIcon.__proto__ || Object.getPrototypeOf(PfeIcon)).call(
                this,
                PfeIcon,
                { type: PfeIcon.PfeType }
              )
            );
            return (
              (_this._iconLoad = _this._iconLoad.bind(_this)),
              (_this._iconLoadError = _this._iconLoadError.bind(_this)),
              (_this.image = _this.shadowRoot.querySelector("svg image")),
              _this.image &&
                (_this.image.addEventListener("load", _this._iconLoad),
                _this.image.addEventListener("error", _this._iconLoadError)),
              document.body.addEventListener(
                PfeIcon.EVENTS.ADD_ICON_SET,
                function () {
                  return _this.updateIcon();
                }
              ),
              _this
            );
          }
          return (
            (function (subClass, superClass) {
              if ("function" != typeof superClass && null !== superClass)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof superClass
                );
              (subClass.prototype = Object.create(
                superClass && superClass.prototype,
                {
                  constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                }
              )),
                superClass &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(subClass, superClass)
                    : (subClass.__proto__ = superClass));
            })(PfeIcon, PFElement),
            createClass(
              PfeIcon,
              [
                {
                  key: "_iconLoad",
                  value: function () {
                    this.classList.remove("load-failed");
                  },
                },
                {
                  key: "_iconLoadError",
                  value: function (e) {
                    this.classList.add("load-failed"),
                      this.hasLightDOM() && this.classList.add("has-fallback");
                  },
                },
                {
                  key: "_colorChanged",
                  value: function () {
                    this.resetContext();
                  },
                },
                {
                  key: "html",
                  get: function () {
                    return '\n<style>@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host{color:#151515!important}}:host([on=dark]){--pfe-broadcasted--text:var(--pfe-theme--color--text--on-dark, #fff);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted--on-dark, #d2d2d2);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-dark, #73bcf7);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-dark, #bee1f4);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-dark, #bee1f4);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-dark, #bee1f4);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-dark, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-dark, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-dark, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-dark, none)}:host([on=saturated]){--pfe-broadcasted--text:var(--pfe-theme--color--text--on-saturated, #fff);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted--on-saturated, #d2d2d2);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-saturated, #fff);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-saturated, #fafafa);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-saturated, #fafafa);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-saturated, #d2d2d2);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-saturated, underline);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-saturated, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-saturated, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-saturated, underline)}:host([on=light]){--pfe-broadcasted--text:var(--pfe-theme--color--text, #151515);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted, #6a6e73);--pfe-broadcasted--link:var(--pfe-theme--color--link, #06c);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover, #004080);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus, #004080);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited, #6753ac);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited, none)}:host{--context:var(--pfe-icon--context, light);position:relative;display:inline-block;-webkit-box-sizing:content-box!important;box-sizing:content-box!important;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important;height:-webkit-fit-content!important;height:-moz-fit-content!important;height:fit-content!important;line-height:0;max-width:1em;max-width:var(--pfe-icon--size,var(--pfe-theme--icon-size,1em));max-height:1em;max-height:var(--pfe-icon--size,var(--pfe-theme--icon-size,1em))}:host svg{width:1em;width:var(--pfe-icon--size,var(--pfe-theme--icon-size,1em));height:1em;height:var(--pfe-icon--size,var(--pfe-theme--icon-size,1em))}:host([block]){display:block;margin-bottom:1rem;margin-bottom:var(--pfe-icon--spacing,var(--pfe-theme--container-spacer,1rem));margin-top:1rem;margin-top:var(--pfe-icon--spacing,var(--pfe-theme--container-spacer,1rem))}:host([block]):first-child{margin-top:0}:host(:not(.load-failed)){vertical-align:middle;border-radius:50%;background-color:transparent;background-color:var(--pfe-icon--BackgroundColor,transparent);border:1px solid transparent;border:var(--pfe-icon--BorderWidth,var(--pfe-theme--ui--border-width,1px)) var(--pfe-theme--ui--border-style,solid) var(--pfe-icon--BorderColor,var(--pfe-icon--BackgroundColor,transparent));padding:0;padding:var(--pfe-icon--Padding,0)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host(:not(.load-failed)){background-color:#fff!important}:host(:not(.load-failed)) svg filter feFlood{flood-color:#000!important}}@supports (-ms-accelerator:true){:host(:not(.load-failed)){background-color:#fff!important}:host(:not(.load-failed)) svg filter feFlood{flood-color:#000!important}}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host(:not(.load-failed)) svg image{-webkit-filter:none;filter:none}}:host(:not(.load-failed)) filter feFlood{flood-color:#3c3f42;flood-color:var(--pfe-icon--color,var(--pfe-icon--Color,var(--pfe-broadcasted--text,#3c3f42)))}:host(:not(.load-failed)) .pfe-icon--fallback{display:none}:host([size="2x"]){max-width:2em;max-width:var(--pfe-icon--size,2em);max-height:2em;max-height:var(--pfe-icon--size,2em)}:host([size="2x"]) svg{width:2em;width:var(--pfe-icon--size,2em);height:2em;height:var(--pfe-icon--size,2em)}:host([size="3x"]){max-width:3em;max-width:var(--pfe-icon--size,3em);max-height:3em;max-height:var(--pfe-icon--size,3em)}:host([size="3x"]) svg{width:3em;width:var(--pfe-icon--size,3em);height:3em;height:var(--pfe-icon--size,3em)}:host([size="4x"]){max-width:4em;max-width:var(--pfe-icon--size,4em);max-height:4em;max-height:var(--pfe-icon--size,4em)}:host([size="4x"]) svg{width:4em;width:var(--pfe-icon--size,4em);height:4em;height:var(--pfe-icon--size,4em)}:host([size=xl]){max-width:100px;max-width:var(--pfe-icon--size,100px);max-height:100px;max-height:var(--pfe-icon--size,100px)}:host([size=xl]) svg{width:100px;width:var(--pfe-icon--size,100px);height:100px;height:var(--pfe-icon--size,100px)}:host([size=lg]){max-width:64px;max-width:var(--pfe-icon--size,64px);max-height:64px;max-height:var(--pfe-icon--size,64px)}:host([size=lg]) svg{width:64px;width:var(--pfe-icon--size,64px);height:64px;height:var(--pfe-icon--size,64px)}:host([size=md]){max-width:32px;max-width:var(--pfe-icon--size,32px);max-height:32px;max-height:var(--pfe-icon--size,32px)}:host([size=md]) svg{width:32px;width:var(--pfe-icon--size,32px);height:32px;height:var(--pfe-icon--size,32px)}:host([size=sm]){max-width:14px;max-width:var(--pfe-icon--size,14px);max-height:14px;max-height:var(--pfe-icon--size,14px)}:host([size=sm]) svg{width:14px;width:var(--pfe-icon--size,14px);height:14px;height:var(--pfe-icon--size,14px)}:host([circled]:not([circled=false])){padding:.5em;padding:var(--pfe-icon--Padding,.5em);background-color:#fff;background-color:var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--surface--lightest,#fff));border-color:#d2d2d2;border-color:var(--pfe-icon--BorderColor,var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--surface--border,#d2d2d2)))}:host([color=critical]:not([circled])) filter feFlood,:host([color=critical][circled=false]) filter feFlood{flood-color:#a30000;flood-color:var(--pfe-icon--color,var(--pfe-icon--Color,var(--pfe-theme--color--feedback--critical,#a30000)))}:host([color=critical][circled]:not([circled=false])){background-color:#a30000;background-color:var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--feedback--critical,#a30000));border-color:#a30000;border-color:var(--pfe-icon--BorderColor,var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--feedback--critical,#a30000)));--pfe-icon--context:dark}:host([color=important]:not([circled])) filter feFlood,:host([color=important][circled=false]) filter feFlood{flood-color:#c9190b;flood-color:var(--pfe-icon--color,var(--pfe-icon--Color,var(--pfe-theme--color--feedback--important,#c9190b)))}:host([color=important][circled]:not([circled=false])){background-color:#c9190b;background-color:var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--feedback--important,#c9190b));border-color:#c9190b;border-color:var(--pfe-icon--BorderColor,var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--feedback--important,#c9190b)));--pfe-icon--context:dark}:host([color=moderate]:not([circled])) filter feFlood,:host([color=moderate][circled=false]) filter feFlood{flood-color:#f0ab00;flood-color:var(--pfe-icon--color,var(--pfe-icon--Color,var(--pfe-theme--color--feedback--moderate,#f0ab00)))}:host([color=moderate][circled]:not([circled=false])){background-color:#f0ab00;background-color:var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--feedback--moderate,#f0ab00));border-color:#f0ab00;border-color:var(--pfe-icon--BorderColor,var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--feedback--moderate,#f0ab00)))}:host([color=success]:not([circled])) filter feFlood,:host([color=success][circled=false]) filter feFlood{flood-color:#3e8635;flood-color:var(--pfe-icon--color,var(--pfe-icon--Color,var(--pfe-theme--color--feedback--success,#3e8635)))}:host([color=success][circled]:not([circled=false])){background-color:#3e8635;background-color:var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--feedback--success,#3e8635));border-color:#3e8635;border-color:var(--pfe-icon--BorderColor,var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--feedback--success,#3e8635)));--pfe-icon--context:dark}:host([color=info]:not([circled])) filter feFlood,:host([color=info][circled=false]) filter feFlood{flood-color:#06c;flood-color:var(--pfe-icon--color,var(--pfe-icon--Color,var(--pfe-theme--color--feedback--info,#06c)))}:host([color=info][circled]:not([circled=false])){background-color:#06c;background-color:var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--feedback--info,#06c));border-color:#06c;border-color:var(--pfe-icon--BorderColor,var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--feedback--info,#06c)));--pfe-icon--context:dark}:host([color=default]:not([circled])) filter feFlood,:host([color=default][circled=false]) filter feFlood{flood-color:#4f5255;flood-color:var(--pfe-icon--color,var(--pfe-icon--Color,var(--pfe-theme--color--feedback--default,#4f5255)))}:host([color=default][circled]:not([circled=false])){background-color:#4f5255;background-color:var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--feedback--default,#4f5255));border-color:#4f5255;border-color:var(--pfe-icon--BorderColor,var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--feedback--default,#4f5255)));--pfe-icon--context:dark}:host([color=lightest]:not([circled])) filter feFlood,:host([color=lightest][circled=false]) filter feFlood{flood-color:#fff;flood-color:var(--pfe-icon--color,var(--pfe-icon--Color,var(--pfe-theme--color--surface--lightest,#fff)))}:host([color=lightest][circled]:not([circled=false])){--pfe-icon--context:var(--pfe-theme--color--surface--lightest--context, light);background-color:#fff;background-color:var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--surface--lightest,#fff));border-color:#fff;border-color:var(--pfe-icon--BorderColor,var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--surface--lightest,#fff)))}:host([color=base]:not([circled])) filter feFlood,:host([color=base][circled=false]) filter feFlood{flood-color:#f0f0f0;flood-color:var(--pfe-icon--color,var(--pfe-icon--Color,var(--pfe-theme--color--surface--base,#f0f0f0)))}:host([color=base][circled]:not([circled=false])){--pfe-icon--context:var(--pfe-theme--color--surface--base--context, light);background-color:#f0f0f0;background-color:var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--surface--base,#f0f0f0));border-color:#f0f0f0;border-color:var(--pfe-icon--BorderColor,var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--surface--base,#f0f0f0)))}:host([color=darker]:not([circled])) filter feFlood,:host([color=darker][circled=false]) filter feFlood{flood-color:#3c3f42;flood-color:var(--pfe-icon--color,var(--pfe-icon--Color,var(--pfe-theme--color--surface--darker,#3c3f42)))}:host([color=darker][circled]:not([circled=false])){--pfe-icon--context:var(--pfe-theme--color--surface--darker--context, dark);background-color:#3c3f42;background-color:var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--surface--darker,#3c3f42));border-color:#3c3f42;border-color:var(--pfe-icon--BorderColor,var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--surface--darker,#3c3f42)))}:host([color=darkest]:not([circled])) filter feFlood,:host([color=darkest][circled=false]) filter feFlood{flood-color:#151515;flood-color:var(--pfe-icon--color,var(--pfe-icon--Color,var(--pfe-theme--color--surface--darkest,#151515)))}:host([color=darkest][circled]:not([circled=false])){--pfe-icon--context:var(--pfe-theme--color--surface--darkest--context, dark);background-color:#151515;background-color:var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--surface--darkest,#151515));border-color:#151515;border-color:var(--pfe-icon--BorderColor,var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--surface--darkest,#151515)))}:host([color=complement]:not([circled])) filter feFlood,:host([color=complement][circled=false]) filter feFlood{flood-color:#002952;flood-color:var(--pfe-icon--color,var(--pfe-icon--Color,var(--pfe-theme--color--surface--complement,#002952)))}:host([color=complement][circled]:not([circled=false])){--pfe-icon--context:var(--pfe-theme--color--surface--complement--context, saturated);background-color:#002952;background-color:var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--surface--complement,#002952));border-color:#002952;border-color:var(--pfe-icon--BorderColor,var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--surface--complement,#002952)))}:host([color=accent]:not([circled])) filter feFlood,:host([color=accent][circled=false]) filter feFlood{flood-color:#004080;flood-color:var(--pfe-icon--color,var(--pfe-icon--Color,var(--pfe-theme--color--surface--accent,#004080)))}:host([color=accent][circled]:not([circled=false])){--pfe-icon--context:var(--pfe-theme--color--surface--accent--context, saturated);background-color:#004080;background-color:var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--surface--accent,#004080));border-color:#004080;border-color:var(--pfe-icon--BorderColor,var(--pfe-icon--BackgroundColor,var(--pfe-theme--color--surface--accent,#004080)))}:host(.load-failed) svg image,:host(.load-failed.has-fallback) svg,:host(.load-failed[on-fail=collapse]) svg{display:none}:host(.load-failed[on-fail=collapse]){max-width:0;max-width:var(--pfe-icon--size,0);max-height:0;max-height:var(--pfe-icon--size,0)}:host(.load-failed[on-fail=collapse]) svg{width:0;width:var(--pfe-icon--size,0);height:0;height:var(--pfe-icon--size,0)} /*# sourceMappingURL=pfe-icon.min.css.map */</style>\n<div class="pfe-icon--fallback">\n  <slot></slot>\n</div>\n<svg xmlns="http://www.w3.org/2000/svg">\n  <filter color-interpolation-filters="sRGB" x="0" y="0" height="100%" width="100%">\n    <feFlood result="COLOR" />\n    <feComposite operator="in" in="COLOR" in2="SourceAlpha" />\n  </filter>\n  <image xlink:href="" width="100%" height="100%"></image>\n</svg>';
                  },
                },
                {
                  key: "templateUrl",
                  get: function () {
                    return "pfe-icon.html";
                  },
                },
                {
                  key: "styleUrl",
                  get: function () {
                    return "pfe-icon.scss";
                  },
                },
                {
                  key: "schemaUrl",
                  get: function () {
                    return "pfe-icon.json";
                  },
                },
                {
                  key: "upgraded",
                  get: function () {
                    return this.image.hasAttribute("xlink:href");
                  },
                },
              ],
              [
                {
                  key: "version",
                  get: function () {
                    return "1.10.0";
                  },
                },
                {
                  key: "tag",
                  get: function () {
                    return "pfe-icon";
                  },
                },
                {
                  key: "PfeType",
                  get: function () {
                    return PFElement.PfeTypes.Content;
                  },
                },
                {
                  key: "properties",
                  get: function () {
                    return {
                      icon: {
                        type: String,
                        observer: "updateIcon",
                        prefix: !1,
                      },
                      size: {
                        type: String,
                        values: [
                          "xl",
                          "lg",
                          "md",
                          "sm",
                          "1x",
                          "2x",
                          "3x",
                          "4x",
                        ],
                        default: "1x",
                      },
                      color: {
                        type: String,
                        values: [
                          "complement",
                          "accent",
                          "lightest",
                          "base",
                          "darker",
                          "darkest",
                          "critical",
                          "important",
                          "moderate",
                          "success",
                          "info",
                        ],
                        observer: "_colorChanged",
                      },
                      onFail: { type: String, values: ["collapse"] },
                      circled: { type: Boolean },
                      block: { type: Boolean },
                      oldColor: {
                        type: String,
                        alias: "color",
                        attr: "pfe-color",
                      },
                      oldSize: {
                        type: String,
                        alias: "size",
                        attr: "pfe-size",
                      },
                      oldCircled: {
                        type: Boolean,
                        alias: "circled",
                        attr: "pfe-circled",
                      },
                      oldBlock: {
                        type: Boolean,
                        alias: "block",
                        attr: "data-block",
                      },
                    };
                  },
                },
                {
                  key: "EVENTS",
                  get: function () {
                    return { ADD_ICON_SET: this.tag + ":add-icon-set" };
                  },
                },
              ]
            ),
            createClass(
              PfeIcon,
              [
                {
                  key: "disconnectedCallback",
                  value: function () {
                    (function get(object, property, receiver) {
                      null === object && (object = Function.prototype);
                      var desc = Object.getOwnPropertyDescriptor(
                        object,
                        property
                      );
                      if (void 0 === desc) {
                        var parent = Object.getPrototypeOf(object);
                        return null === parent
                          ? void 0
                          : get(parent, property, receiver);
                      }
                      if ("value" in desc) return desc.value;
                      var getter = desc.get;
                      return void 0 !== getter ? getter.call(receiver) : void 0;
                    })(
                      PfeIcon.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeIcon.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this),
                      this.image &&
                        (this.image.removeEventListener("load", this._iconLoad),
                        this.image.removeEventListener(
                          "error",
                          this._iconLoadError
                        ));
                  },
                },
                {
                  key: "updateIcon",
                  value: function () {
                    var el,
                      randomId,
                      set = PfeIcon.getIconSet(this.icon).set;
                    if (set) {
                      var iconPath = set.resolveIconName(this.icon);
                      this.image.setAttribute("xlink:href", iconPath),
                        (el = this),
                        (randomId =
                          "filter-" + Math.random().toString().slice(2, 10)),
                        (el.shadowRoot.querySelector("svg image").style.filter =
                          "url(#" + randomId + ")"),
                        el.shadowRoot
                          .querySelector("svg filter")
                          .setAttribute("id", randomId);
                    }
                  },
                },
              ],
              [
                {
                  key: "getIconSet",
                  value: function (iconName) {
                    var set = void 0;
                    if (iconName) {
                      var _iconName$split = iconName.split("-"),
                        setName = slicedToArray(_iconName$split, 1)[0];
                      set = this._iconSets[setName];
                    }
                    return { set: set };
                  },
                },
                {
                  key: "addIconSet",
                  value: function (name, path, resolveIconName) {
                    var resolveFunction = void 0;
                    "function" == typeof resolveIconName
                      ? (resolveFunction = resolveIconName)
                      : void 0 === resolveIconName &&
                        this._iconSets[name] &&
                        "function" ==
                          typeof this._iconSets[name]._resolveIconName
                      ? (resolveFunction =
                          this._iconSets[name]._resolveIconName)
                      : "function" != typeof resolveIconName &&
                        void 0 !== resolveIconName
                      ? PfeIcon.warn(
                          "[" +
                            this.tag +
                            "]: The third input to addIconSet should be a function that parses and returns the icon's filename."
                        )
                      : PfeIcon.warn(
                          "[" +
                            this.tag +
                            "]: The set " +
                            name +
                            " needs a resolve function for the icon names."
                        ),
                      (this._iconSets[name] = new PfeIconSet(
                        name,
                        path,
                        resolveFunction
                      )),
                      document.body.dispatchEvent(
                        new CustomEvent(this.EVENTS.ADD_ICON_SET, {
                          bubbles: !1,
                          detail: { set: this._iconSets[name] },
                        })
                      );
                  },
                },
              ]
            ),
            PfeIcon
          );
        })();
        return (
          (PfeIcon._iconSets = {}),
          (function (_ref) {
            var PfeIcon = _ref.PfeIcon,
              config = _ref.config;
            if (!config.IconSets || 0 !== config.IconSets.length) {
              var resolveDefaultIconName = function (
                name,
                iconSetName,
                iconSetPath
              ) {
                var _regex$exec = new RegExp(
                  "^" + iconSetName + "(-icon)?-(.*)"
                ).exec(name);
                return (
                  iconSetPath +
                  "/" +
                  iconSetName +
                  "-icon-" +
                  slicedToArray(_regex$exec, 3)[2] +
                  ".svg"
                );
              };
              (
                config.IconSets || [
                  {
                    name: "web",
                    path: "https://access.redhat.com/webassets/avalon/j/lib/rh-iconfont-svgs",
                  },
                  {
                    name: "rh",
                    path: "https://access.redhat.com/webassets/avalon/j/lib/rh-iconfont-svgs",
                  },
                ]
              ).forEach(function (set) {
                set.resolveIconName &&
                  "function" == typeof set.resolveIconName &&
                  (resolveDefaultIconName = set.resolveIconName),
                  PfeIcon.addIconSet(
                    set.name,
                    set.path,
                    resolveDefaultIconName
                  );
              });
            }
          })({ PfeIcon: PfeIcon, config: PFElement.config }),
          PFElement.create(PfeIcon),
          PfeIcon
        );
      }),
      (function (global, factory) {
        "object" == typeof exports && "undefined" != typeof module
          ? (module.exports = factory(
              require("../../pfelement/dist/pfelement.umd")
            ))
          : "function" == typeof define && define.amd
          ? define(["../../pfelement/dist/pfelement.umd"], factory)
          : ((global = global || self).PfeCta = factory(global.PFElement));
      })(this, function (PFElement) {
        "use strict";
        (PFElement =
          PFElement &&
          Object.prototype.hasOwnProperty.call(PFElement, "default")
            ? PFElement.default
            : PFElement),
          "function" != typeof Object.assign &&
            Object.defineProperty(Object, "assign", {
              value: function (target, varArgs) {
                if (null === target || void 0 === target)
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                for (
                  var to = Object(target), index = 1;
                  index < arguments.length;
                  index++
                ) {
                  var nextSource = arguments[index];
                  if (null !== nextSource && void 0 !== nextSource)
                    for (var nextKey in nextSource)
                      Object.prototype.hasOwnProperty.call(
                        nextSource,
                        nextKey
                      ) && (to[nextKey] = nextSource[nextKey]);
                }
                return to;
              },
              writable: !0,
              configurable: !0,
            });
        var classCallCheck = function (instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError("Cannot call a class as a function");
          },
          createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                (descriptor.enumerable = descriptor.enumerable || !1),
                  (descriptor.configurable = !0),
                  "value" in descriptor && (descriptor.writable = !0),
                  Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
              );
            };
          })(),
          get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
              var parent = Object.getPrototypeOf(object);
              return null === parent ? void 0 : get(parent, property, receiver);
            }
            if ("value" in desc) return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0;
          },
          possibleConstructorReturn = function (self, call) {
            if (!self)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !call ||
              ("object" != typeof call && "function" != typeof call)
              ? self
              : call;
          },
          PfeCta = (function (_PFElement) {
            function PfeCta() {
              classCallCheck(this, PfeCta);
              var _this = possibleConstructorReturn(
                this,
                (PfeCta.__proto__ || Object.getPrototypeOf(PfeCta)).call(
                  this,
                  PfeCta
                )
              );
              return (
                (_this.cta = null),
                (_this._init = _this._init.bind(_this)),
                (_this._focusHandler = _this._focusHandler.bind(_this)),
                (_this._blurHandler = _this._blurHandler.bind(_this)),
                (_this._clickHandler = _this._clickHandler.bind(_this)),
                (_this._keyupHandler = _this._keyupHandler.bind(_this)),
                _this
              );
            }
            return (
              (function (subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof superClass
                  );
                (subClass.prototype = Object.create(
                  superClass && superClass.prototype,
                  {
                    constructor: {
                      value: subClass,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  }
                )),
                  superClass &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(subClass, superClass)
                      : (subClass.__proto__ = superClass));
              })(PfeCta, PFElement),
              createClass(
                PfeCta,
                [
                  {
                    key: "click",
                    value: function (event) {
                      this.emitEvent(PfeCta.events.select, {
                        detail: Object.assign(this.data, {
                          originEvent: event,
                        }),
                      });
                    },
                  },
                  {
                    key: "html",
                    get: function () {
                      return (
                        '\n<style>.pfe-cta--wrapper button,.pfe-cta--wrapper input,::slotted(button),::slotted(input){background-color:transparent;border:none;margin:0;padding:0;text-align:left}:host{display:inline-block;position:relative;z-index:0;vertical-align:middle;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content;max-width:var(--pfe-cta--MaxWidth,-webkit-max-content);max-width:var(--pfe-cta--MaxWidth,-moz-max-content);max-width:var(--pfe-cta--MaxWidth,max-content);background-color:transparent;background-color:var(--pfe-cta--BackgroundColor,transparent);border-radius:0;border-radius:var(--pfe-cta--BorderRadius,0);border:1px solid transparent;border:var(--pfe-theme--ui--border-width,1px) var(--pfe-theme--ui--border-style,solid) var(--pfe-cta--BorderColor,transparent);cursor:pointer}::slotted(*){white-space:normal;display:inline;padding:.6rem 0!important;padding:var(--pfe-cta--Padding,.6rem 0)!important;color:#06c!important;color:var(--pfe-cta--Color,var(--pfe-broadcasted--link,#06c))!important;font-family:"Red Hat Display",RedHatDisplay,Overpass,Overpass,Arial,sans-serif;font-family:var(--pfe-cta--FontFamily, var(--pfe-theme--font-family--heading, "Red Hat Display", "RedHatDisplay", "Overpass", Overpass, Arial, sans-serif));font-size:1.125rem;font-size:var(--pfe-cta--FontSize,var(--pf-global--FontSize--lg,1.125rem));font-weight:700;font-weight:var(--pfe-cta--FontWeight,var(--pfe-theme--font-weight--bold,700));line-height:1.5;line-height:var(--pfe-cta--LineHeight,var(--pfe-theme--line-height,1.5));text-decoration:none!important;-webkit-text-decoration:var(--pfe-cta--TextDecoration,none)!important;text-decoration:var(--pfe-cta--TextDecoration,none)!important}:host([priority]) ::slotted(*){font-size:1rem;font-size:var(--pfe-cta--FontSize--priority,var(--pf-global--FontSize--md,1rem));text-align:center}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([priority]) ::slotted(*) a{color:#06c!important;color:var(--pfe-cta--Color,var(--pfe-broadcasted--link,#06c))!important}}:host([aria-disabled=true]) ::slotted(*){cursor:default!important;font-size:1rem;font-size:var(--pfe-cta--FontSize,var(--pf-global--FontSize--md,1rem))}:host([aria-disabled=true]) ::slotted(*),:host([priority]) ::slotted(*){padding:1rem calc(1rem * 2)!important;padding:var(--pfe-cta--Padding,var(--pfe-theme--container-padding,1rem) calc(var(--pfe-theme--container-padding,1rem) * 2))!important}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([aria-disabled=true]) ::slotted(*),:host([priority]) ::slotted(*){padding:1rem 2rem!important}}:host(:not([aria-disabled=true])) ::slotted(:focus),:host(:not([aria-disabled=true]).focus-within),:host(:not([aria-disabled=true]).focus-within) ::slotted(*),:host(:not([aria-disabled=true]):focus){outline:0!important}.pfe-cta--wrapper{display:block;white-space:nowrap;min-width:100%}:host([aria-disabled=true]) .pfe-cta--wrapper,:host([priority]) .pfe-cta--wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%}@media all and (min--moz-device-pixel-ratio:0){:host(:not([priority]):not([aria-disabled=true])) .pfe-cta--wrapper{max-width:calc(100% - 1ch - 13px);max-width:calc(100% - 1ch - var(--pfe-cta__arrow--size,13px))}}.pfe-cta--inner{display:block;height:calc(100% - 4px);width:calc(100% - 4px);-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;top:2px;left:2px;z-index:-1;border:1px solid transparent;border:var(--pfe-theme--surface--border-width,1px) var(--pfe-theme--surface--border-style,solid) var(--pfe-cta__inner--BorderColor,transparent);border-radius:2px;outline:0}.pfe-cta--arrow{display:inline;display:var(--pfe-cta__arrow--Display,inline);padding:0 3px;padding:var(--pfe-cta__arrow--Padding,0 3px);fill:#06c;fill:var(--pfe-cta--Color,var(--pfe-broadcasted--link,#06c));width:13px;width:var(--pfe-cta__arrow--size,13px);height:13px;height:var(--pfe-cta__arrow--size,13px);-webkit-transition:padding .3s cubic-bezier(.465,.183,.153,.946);transition:padding .3s cubic-bezier(.465,.183,.153,.946);-webkit-transition:padding var(--pfe-theme--animation-speed,.3s) var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));transition:padding var(--pfe-theme--animation-speed,.3s) var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));margin-bottom:-1px}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.pfe-cta--arrow{width:18px}}@supports (-ms-ime-align:auto){.pfe-cta--arrow{width:18px}}:host([priority]) svg{display:none}:host([priority=primary]){--pfe-cta--BorderRadius:var(--pfe-theme--ui--border-radius, 2px);--pfe-cta--BackgroundColor:var(--pfe-theme--color--ui-accent, #06c);--pfe-cta--BorderColor:var(--pfe-theme--color--ui-accent, #06c);--pfe-cta--Color:var(--pfe-theme--color--ui-accent--text, #fff);--pfe-cta--BackgroundColor--hover:var(--pfe-theme--color--ui-accent--hover, #004080);--pfe-cta--BorderColor--hover:var(--pfe-theme--color--ui-accent--hover, #004080);--pfe-cta--Color--hover:var(--pfe-theme--color--ui-accent--text, #fff);--pfe-cta--BackgroundColor--focus:var(--pfe-theme--color--ui-accent, #06c);--pfe-cta--BorderColor--focus:var(--pfe-theme--color--ui-accent, #06c);--pfe-cta--Color--focus:var(--pfe-theme--color--ui-accent--text, #fff);--pfe-cta__arrow--Display:none;--pfe-cta__inner--BorderColor--focus:var(--pfe-theme--color--ui-accent--text, #fff)}:host([priority=secondary]){--pfe-cta--BorderRadius:var(--pfe-theme--ui--border-radius, 2px);--pfe-cta--BackgroundColor:transparent;--pfe-cta--BorderColor:var(--pfe-broadcasted--text, #3c3f42);--pfe-cta--Color:var(--pfe-broadcasted--text, #3c3f42);--pfe-cta--BackgroundColor--hover:var(--pfe-broadcasted--text, #3c3f42);--pfe-cta--BorderColor--hover:var(--pfe-broadcasted--text, #3c3f42);--pfe-cta--Color--hover:var(--pfe-theme--color--ui-base--text, #fff);--pfe-cta--BackgroundColor--focus:var(--pfe-theme--color--surface--lighter, #f0f0f0);--pfe-cta--BorderColor--focus:var(--pfe-theme--color--ui-base, #6a6e73);--pfe-cta--Color--focus:var(--pfe-theme--color--ui-base, #6a6e73);--pfe-cta__arrow--Display:none;--pfe-cta__inner--BorderColor--focus:var(--pfe-theme--color--ui-base, #6a6e73)}:host([priority=primary][on=dark]),:host([priority=primary][on=saturated]){--pfe-cta--BackgroundColor:var(--pfe-theme--color--surface--lightest, #fff);--pfe-cta--BorderColor:var(--pfe-theme--color--surface--lightest, #fff);--pfe-cta--Color:var(--pfe-theme--color--text, #151515);--pfe-cta--BackgroundColor--hover:var(--pfe-theme--color--surface--lighter, #f0f0f0);--pfe-cta--BorderColor--hover:var(--pfe-theme--color--surface--lighter, #f0f0f0);--pfe-cta--Color--hover:var(--pfe-theme--color--text, #151515);--pfe-cta--BackgroundColor--focus:var(--pfe-theme--color--surface--lightest, #fff);--pfe-cta--BorderColor--focus:var(--pfe-theme--color--surface--lightest, #fff);--pfe-cta--Color--focus:var(--pfe-theme--color--text, #151515);--pfe-cta__inner--BorderColor--focus:var(--pfe-theme--color--surface--darkest, #151515)}:host([priority=secondary][on=dark]),:host([priority=secondary][on=saturated]){--pfe-cta--BackgroundColor:transparent;--pfe-cta--BorderColor:var(--pfe-theme--color--surface--lightest, #fff);--pfe-cta--Color:var(--pfe-theme--color--text--on-dark, #fff);--pfe-cta--BackgroundColor--hover:var(--pfe-theme--color--surface--lighter, #f0f0f0);--pfe-cta--BorderColor--hover:var(--pfe-theme--color--surface--lighter, #f0f0f0);--pfe-cta--Color--hover:var(--pfe-theme--color--text, #151515);--pfe-cta--BackgroundColor--focus:var(--pfe-theme--color--surface--lightest, #fff);--pfe-cta--BorderColor--focus:var(--pfe-theme--color--surface--lightest, #fff);--pfe-cta--Color--focus:var(--pfe-theme--color--text, #151515);--pfe-cta__inner--BorderColor--focus:var(--pfe-theme--color--surface--darkest, #151515)}:host([priority=secondary][color=accent]){--pfe-cta--BackgroundColor:transparent;--pfe-cta--BorderColor:var(--pfe-theme--color--ui-accent, #06c);--pfe-cta--Color:var(--pfe-theme--color--ui-accent, #06c);--pfe-cta--BackgroundColor--hover:var(--pfe-theme--color--ui-accent, #06c);--pfe-cta--BorderColor--hover:var(--pfe-theme--color--ui-accent, #06c);--pfe-cta--Color--hover:var(--pfe-theme--color--ui-accent--text, #fff);--pfe-cta--BackgroundColor--focus:var(--pfe-theme--color--surface--lighter, #f0f0f0);--pfe-cta--BorderColor--focus:var(--pfe-theme--color--ui-accent, #06c);--pfe-cta--Color--focus:var(--pfe-theme--color--ui-accent, #06c);--pfe-cta__inner--BorderColor--focus:var(--pfe-theme--color--ui-accent, #06c)}:host([priority=primary][color=base]){--pfe-cta--BackgroundColor:var(--pfe-theme--color--ui-base, #6a6e73);--pfe-cta--BorderColor:var(--pfe-theme--color--ui-base, #6a6e73);--pfe-cta--Color:var(--pfe-theme--color--ui-base--text, #fff);--pfe-cta--BackgroundColor--hover:var(--pfe-theme--color--ui-base--hover, #151515);--pfe-cta--BorderColor--hover:var(--pfe-theme--color--ui-base--hover, #151515);--pfe-cta--Color--hover:var(--pfe-theme--color--ui-base--text, #fff);--pfe-cta--BackgroundColor--focus:var(--pfe-theme--color--ui-base, #6a6e73);--pfe-cta--BorderColor--focus:var(--pfe-theme--color--surface--darker, #3c3f42);--pfe-cta--Color--focus:var(--pfe-theme--color--ui-base--text, #fff);--pfe-cta__inner--BorderColor--focus:var(--pfe-theme--color--ui-base--text, #fff)}:host([priority=secondary][color=base]){--pfe-cta--BackgroundColor:transparent;--pfe-cta--BorderColor:var(--pfe-theme--color--ui-base, #6a6e73);--pfe-cta--Color:var(--pfe-theme--color--ui-base, #6a6e73);--pfe-cta--BackgroundColor--hover:var(--pfe-theme--color--ui-base--hover, #151515);--pfe-cta--BorderColor--hover:var(--pfe-theme--color--ui-base--hover, #151515);--pfe-cta--Color--hover:var(--pfe-theme--color--ui-base--text, #fff);--pfe-cta--BackgroundColor--focus:rgba(40, 151, 240, 0.2);--pfe-cta--BorderColor--focus:var(--pfe-theme--color--ui-base, #6a6e73);--pfe-cta--Color--focus:var(--pfe-theme--color--ui-base, #6a6e73);--pfe-cta__inner--BorderColor--focus:var(--pfe-theme--color--ui-base, #6a6e73)}:host([priority=secondary][variant=wind]){--pfe-cta--BackgroundColor:transparent;--pfe-cta--BorderColor:var(--pfe-theme--color--surface--border, #d2d2d2);--pfe-cta--Color:var(--pfe-broadcasted--link, #06c);--pfe-cta--FontWeight:var(--pfe-theme--font-weight--normal, 400);--pfe-cta--BackgroundColor--hover:var(--pfe-theme--color--surface--border--lightest, #f5f5f5);--pfe-cta--BorderColor--hover:var(--pfe-theme--color--surface--border, #d2d2d2);--pfe-cta--Color--hover:var(--pfe-theme--color--link--hover, #004080);--pfe-cta--TextDecoration--hover:var(--pfe-theme--link-decoration--hover, underline);--pfe-cta--Color--focus:var(--pfe-theme--color--link--hover, #004080);--pfe-cta--BorderColor--focus:var(--pfe-theme--color--surface--border, #d2d2d2);--pfe-cta__inner--BorderColor--focus:var(--pfe-cta--BorderColor--focus, transparent)}:host([aria-disabled=true]){--pfe-cta__arrow--Display:none;--pfe-cta--BackgroundColor:var(--pfe-theme--color--ui-disabled, #d2d2d2);--pfe-cta--BorderColor:var(--pfe-theme--color--ui-disabled, #d2d2d2);--pfe-cta--Color:var(--pfe-theme--color--ui-disabled--text, #6a6e73)}:host(:not([aria-disabled=true]).focus-within),:host(:not([aria-disabled=true]):focus){--pfe-cta--BackgroundColor:var(--pfe-cta--BackgroundColor--focus, rgba(40, 151, 240, 0.2));--pfe-cta--BorderColor:var(--pfe-cta--BorderColor--focus, transparent);--pfe-cta--Color:var(--pfe-cta--Color--focus, var(--pfe-broadcasted--link--focus, #004080));--pfe-cta--TextDecoration:var(--pfe-cta--TextDecoration--focus, none);--pfe-cta__inner--BorderColor:var(--pfe-cta__inner--BorderColor--focus, transparent)}:host(:not([aria-disabled=true])) ::slotted(:hover),:host(:not([aria-disabled=true]):hover){--pfe-cta--BackgroundColor:var(--pfe-cta--BackgroundColor--hover, transparent);--pfe-cta--BorderColor:var(--pfe-cta--BorderColor--hover, transparent);--pfe-cta--Color:var(--pfe-cta--Color--hover, var(--pfe-broadcasted--link--hover, #004080));--pfe-cta--TextDecoration:var(--pfe-cta--TextDecoration--hover, none);--pfe-cta__inner--BorderColor:var(--pfe-cta__inner--BorderColor--hover, transparent);--pfe-cta__arrow--Padding:0 0 0 6px} /*# sourceMappingURL=pfe-cta.min.css.map */</style>\n<span class="pfe-cta--wrapper">\n  <slot></slot>' +
                        (this.isDefault
                          ? '&#160;<svg class="pfe-cta--arrow" xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 31.56 31.56" focusable="false" width="1em">\n    <path d="M15.78 0l-3.1 3.1 10.5 10.49H0v4.38h23.18l-10.5 10.49 3.1 3.1 15.78-15.78L15.78 0z" /></svg>'
                          : "") +
                        '\n  <span class="pfe-cta--inner"></span>\n</span>'
                      );
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-cta.scss";
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-cta.html";
                    },
                  },
                  {
                    key: "schemaUrl",
                    get: function () {
                      return "pfe-cta.json";
                    },
                  },
                  {
                    key: "isDefault",
                    get: function () {
                      return !this.hasAttribute("priority");
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "schemaProperties",
                    get: function () {
                      return {
                        priority: {
                          title: "Priority",
                          type: "string",
                          prefixed: !0,
                          enum: ["primary", "secondary"],
                          observer: "_basicAttributeChanged",
                        },
                        color: {
                          title: "Color",
                          type: "string",
                          prefixed: !0,
                          enum: ["accent", "base", "complement", "lightest"],
                          observer: "_basicAttributeChanged",
                        },
                        variant: {
                          title: "Style variant",
                          type: "string",
                          prefixed: !0,
                          enum: ["wind"],
                          observer: "_basicAttributeChanged",
                        },
                      };
                    },
                  },
                  {
                    key: "slots",
                    get: function () {
                      return {
                        link: {
                          title: "Link",
                          type: "array",
                          maxItems: 1,
                          namedSlot: !1,
                          items: { oneOf: [{ $ref: "a" }, { $ref: "button" }] },
                        },
                      };
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-cta";
                    },
                  },
                  {
                    key: "PfeType",
                    get: function () {
                      return PFElement.PfeTypes.Content;
                    },
                  },
                  {
                    key: "events",
                    get: function () {
                      return { select: this.tag + ":select" };
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        priority: {
                          title: "Priority",
                          type: String,
                          values: ["primary", "secondary"],
                        },
                        oldPriority: {
                          alias: "priority",
                          attr: "pfe-priority",
                        },
                        color: {
                          title: "Color",
                          type: String,
                          values: ["accent", "base", "complement", "lightest"],
                        },
                        oldColor: { alias: "color", attr: "pfe-color" },
                        variant: {
                          title: "Style variant",
                          type: String,
                          values: ["wind"],
                        },
                        oldVariant: { alias: "variant", attr: "pfe-variant" },
                      };
                    },
                  },
                ]
              ),
              createClass(PfeCta, [
                {
                  key: "connectedCallback",
                  value: function () {
                    get(
                      PfeCta.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeCta.prototype),
                      "connectedCallback",
                      this
                    ).call(this),
                      (this._slot = this.shadowRoot.querySelector("slot")),
                      this._slot.addEventListener("slotchange", this._init),
                      this.hasLightDOM() && this._init();
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    get(
                      PfeCta.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeCta.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this),
                      this._slot.removeEventListener("slotchange", this._init),
                      this.cta &&
                        (this.cta.removeEventListener(
                          "focus",
                          this._focusHandler
                        ),
                        this.cta.removeEventListener("blur", this._blurHandler),
                        this.cta.removeEventListener(
                          "click",
                          this._clickHandler
                        ),
                        this.cta.removeEventListener(
                          "keyup",
                          this._keyupHandler
                        ));
                  },
                },
                {
                  key: "_init",
                  value: function () {
                    var _this2 = this,
                      supportedTag = !1;
                    this.firstElementChild &&
                      ["a", "button"].forEach(function (tag) {
                        _this2.firstElementChild.tagName.toLowerCase() ===
                          tag && (supportedTag = !0);
                      }),
                      this.firstElementChild && supportedTag
                        ? "button" ===
                            this.firstElementChild.tagName.toLowerCase() &&
                          null === this.priority &&
                          "true" !== this.getAttribute("aria-disabled")
                          ? this.warn(
                              "Button tag is not supported semantically by the default link styles"
                            )
                          : ((this.cta = this.firstElementChild),
                            (this.data = {
                              href: this.cta.href,
                              text: this.cta.text,
                              title: this.cta.title,
                              color: this.color,
                            }),
                            (this.data.type = this.priority),
                            this.variant &&
                              (this.data.type =
                                this.data.type + " " + this.variant),
                            this.getAttribute("aria-disabled") &&
                              (this.data.type = "disabled"),
                            this.cta.addEventListener(
                              "focus",
                              this._focusHandler
                            ),
                            this.cta.addEventListener(
                              "blur",
                              this._blurHandler
                            ),
                            this.cta.addEventListener(
                              "click",
                              this._clickHandler
                            ),
                            this.cta.addEventListener(
                              "keyup",
                              this._keyupHandler
                            ))
                        : this.warn(
                            "The first child in the light DOM must be a supported call-to-action tag (<a>, <button>)"
                          );
                  },
                },
                {
                  key: "_focusHandler",
                  value: function (event) {
                    this.classList.add("focus-within");
                  },
                },
                {
                  key: "_blurHandler",
                  value: function (event) {
                    this.classList.remove("focus-within");
                  },
                },
                {
                  key: "_keyupHandler",
                  value: function (event) {
                    switch (event.key || event.keyCode) {
                      case "Enter":
                      case 13:
                        this.click(event);
                    }
                  },
                },
                {
                  key: "_clickHandler",
                  value: function (event) {
                    this.click(event);
                  },
                },
              ]),
              PfeCta
            );
          })();
        return PFElement.create(PfeCta), PfeCta;
      }),
      (function (global, factory) {
        "object" == typeof exports && "undefined" != typeof module
          ? (module.exports = factory(
              require("../../pfelement/dist/pfelement.umd"),
              require("../../pfe-icon/dist/pfe-icon.umd")
            ))
          : "function" == typeof define && define.amd
          ? define(
              [
                "../../pfelement/dist/pfelement.umd",
                "../../pfe-icon/dist/pfe-icon.umd",
              ],
              factory
            )
          : ((global = global || self).PfeNavigation = factory(
              global.PFElement,
              global.PfeIcon
            ));
      })(this, function (PFElement, pfeIcon_umd) {
        "use strict";
        (PFElement =
          PFElement &&
          Object.prototype.hasOwnProperty.call(PFElement, "default")
            ? PFElement.default
            : PFElement),
          (pfeIcon_umd =
            pfeIcon_umd &&
            Object.prototype.hasOwnProperty.call(pfeIcon_umd, "default")
              ? pfeIcon_umd.default
              : pfeIcon_umd),
          Array.prototype.filter ||
            (Array.prototype.filter = function (func, thisArg) {
              if (
                ("Function" != typeof func && "function" != typeof func) ||
                !this
              )
                throw new TypeError();
              var kValue,
                len = this.length >>> 0,
                res = new Array(len),
                t = this,
                c = 0,
                i = -1;
              if (void 0 === thisArg)
                for (; ++i !== len; )
                  i in this &&
                    ((kValue = t[i]), func(t[i], i, t) && (res[c++] = kValue));
              else
                for (; ++i !== len; )
                  i in this &&
                    ((kValue = t[i]),
                    func.call(thisArg, t[i], i, t) && (res[c++] = kValue));
              return (res.length = c), res;
            }),
          "path" in Event.prototype ||
            Object.defineProperty(Event.prototype, "path", {
              get: function () {
                for (var path = [], currentElem = this.target; currentElem; )
                  path.push(currentElem),
                    (currentElem = currentElem.parentElement);
                return (
                  -1 === path.indexOf(window) &&
                    -1 === path.indexOf(document) &&
                    path.push(document),
                  -1 === path.indexOf(window) && path.push(window),
                  path
                );
              },
            });
        var classCallCheck = function (instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError("Cannot call a class as a function");
          },
          createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                (descriptor.enumerable = descriptor.enumerable || !1),
                  (descriptor.configurable = !0),
                  "value" in descriptor && (descriptor.writable = !0),
                  Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
              );
            };
          })(),
          get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
              var parent = Object.getPrototypeOf(object);
              return null === parent ? void 0 : get(parent, property, receiver);
            }
            if ("value" in desc) return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0;
          },
          inherits = function (subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }
            )),
              superClass &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(subClass, superClass)
                  : (subClass.__proto__ = superClass));
          },
          possibleConstructorReturn = function (self, call) {
            if (!self)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !call ||
              ("object" != typeof call && "function" != typeof call)
              ? self
              : call;
          },
          toConsumableArray = function (arr) {
            if (Array.isArray(arr)) {
              for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
                arr2[i] = arr[i];
              return arr2;
            }
            return Array.from(arr);
          },
          PfeNavigationItem = (function (_PFElement) {
            function PfeNavigationItem() {
              classCallCheck(this, PfeNavigationItem);
              var _this = possibleConstructorReturn(
                this,
                (
                  PfeNavigationItem.__proto__ ||
                  Object.getPrototypeOf(PfeNavigationItem)
                ).call(this, PfeNavigationItem)
              );
              return (
                (_this._handlersAdded = !1),
                (_this.nested = !1),
                (_this.expanded = !1),
                (_this.trigger = null),
                (_this.tray = null),
                (_this.directLink = null),
                (_this.linkUrl = null),
                (_this.nestedItems = []),
                (_this._trigger = _this.shadowRoot.querySelector(
                  "." + _this.tag + "__trigger"
                )),
                (_this._icon = _this.shadowRoot.querySelector("pfe-icon")),
                (_this._tray = _this.shadowRoot.querySelector(
                  "." + _this.tag + "__tray"
                )),
                (_this.close = _this.close.bind(_this)),
                (_this.open = _this.open.bind(_this)),
                (_this.toggle = _this.toggle.bind(_this)),
                (_this._init__trigger = _this._init__trigger.bind(_this)),
                (_this._init__tray = _this._init__tray.bind(_this)),
                (_this._keydownHandler = _this._keydownHandler.bind(_this)),
                (_this._keyupHandler = _this._keyupHandler.bind(_this)),
                (_this._navigateToUrl = _this._navigateToUrl.bind(_this)),
                (_this._directLinkHandler =
                  _this._directLinkHandler.bind(_this)),
                _this
              );
            }
            return (
              inherits(PfeNavigationItem, PFElement),
              createClass(
                PfeNavigationItem,
                [
                  {
                    key: "open",
                    value: function (event) {
                      var _this2 = this;
                      event && event.preventDefault(),
                        this.navigationWrapper &&
                          ((this.navigationWrapper._activeNavigationItems =
                            this.navigationWrapper._activeNavigationItems.filter(
                              function (item) {
                                var stayOpen = item === _this2.parent;
                                return stayOpen || item.close(), stayOpen;
                              }
                            )),
                          this.navigationWrapper._activeNavigationItems.push(
                            this
                          ),
                          (this.expanded = !0),
                          (this.navigationWrapper.overlay = !0)),
                        this.dispatchEvent(
                          new CustomEvent(this.tag + ":open", {
                            detail: {},
                            bubbles: !0,
                            composed: !0,
                          })
                        );
                    },
                  },
                  {
                    key: "close",
                    value: function (event) {
                      var _this3 = this;
                      event && event.preventDefault(),
                        (this.navigationWrapper._activeNavigationItems =
                          this.navigationWrapper._activeNavigationItems.filter(
                            function (item) {
                              var close =
                                _this3.nestedItems &&
                                _this3.nestedItems.includes(item);
                              return (
                                close && item.close(), !close && item !== _this3
                              );
                            }
                          )),
                        (this.expanded = !1),
                        (this.navigationWrapper.overlay =
                          this.navigationWrapper._activeNavigationItems.length >
                          0),
                        this.focus(),
                        this.dispatchEvent(
                          new CustomEvent(this.tag + ":close", {
                            detail: {},
                            bubbles: !0,
                            composed: !0,
                          })
                        );
                    },
                  },
                  {
                    key: "toggle",
                    value: function (event) {
                      event && event.preventDefault(),
                        this.visible && !this.expanded
                          ? this.open(event)
                          : this.close(event);
                    },
                  },
                  {
                    key: "html",
                    get: function () {
                      return (
                        '\n<style>:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__tray{position:relative;display:block;width:100%;padding:1rem;padding:var(--pfe-theme--container-spacer,1rem)}:host{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;line-height:1.2;height:100%;min-width:auto;min-width:var(--pfe-navigation--MinWidth,auto)}@media screen and (max-width:1200px){:host{width:100%}}@media screen and (min-width:500px){:host{--pfe-navigation__trigger--Padding:var(--pfe-theme--container-padding, 1rem)}}:host([aria-current=location]){--pfe-navigation--BorderTopColor:var(--pfe-theme--color--ui-accent, #06c)}:host(.expanded){--pfe-navigation__trigger-icon--Visible:visible;--pfe-navigation--BorderColor:var(--pfe-theme--color--surface--lightest, #fff);--pfe-navigation--BorderTopColor:var(--pfe-theme--color--ui-accent, #06c);--pfe-navigation--BackgroundColor:var(--pfe-theme--color--surface--lightest, #fff);--pfe-navigation--Color:var(--pfe-theme--color--text, #151515)}:host([pfe-icon]){--pfe-navigation--MinWidth:50px;--pfe-navigation__trigger--FontSize:12px;--pfe-navigation__trigger--Padding:calc(var(--pfe-theme--container-padding, 1rem) * .625);--pfe-navigation__trigger-icon--Visible:hidden;-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto;width:auto;min-width:65px}@media screen and (min-width:640px){:host([pfe-icon]){width:70px}}@media screen and (max-height:500px){:host([pfe-icon]){--pfe-navigation__trigger--Padding:calc(var(--pfe-theme--container-padding, 1rem) / 3) calc(var(--pfe-theme--container-padding, 1rem) *.5)}}@media screen and (min-width:1024px){:host([pfe-icon]){-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto}}:host(:not([pfe-icon])){--pfe-navigation__trigger--Padding:calc(var(--pfe-theme--container-padding, 1rem) * .75)}:host(:not([has_tray])),:host(:not([pfe-icon]):not([is_nested]):not(.expanded)){--pfe-navigation__trigger-icon--Visible:hidden}:host([is_nested]:not([parent_hidden])){display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 auto;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;max-width:100%;max-width:var(--pfe-navigation--Width,100%)}.pfe-navigation-item__trigger{--pfe-theme--link--text-decoration:none;--pfe-theme--link--text-decoration--hover:none;--pfe-theme--link--text-decoration--focus:none;--pfe-broadcasted--text:var(--pfe-navigation--Color, var(--pfe-theme--color--text--on-dark, #fff));--pfe-broadcasted--link:var(--pfe-navigation--Color, var(--pfe-theme--color--text--on-dark, #fff));--pfe-broadcasted--link--hover:var(--pfe-navigation--Color, var(--pfe-theme--color--text--on-dark, #fff));--pfe-broadcasted--link--focus:var(--pfe-navigation--Color, var(--pfe-theme--color--text--on-dark, #fff));--pfe-broadcasted--link--visited:var(--pfe-navigation--Color, var(--pfe-theme--color--text--on-dark, #fff));--pf-c--title--m-4xl--FontSize:var(--pfe-navigation__trigger--FontSize, var(--pf-global--FontSize--md, 1rem));--pf-c--title--m-3xl--FontSize:var(--pfe-navigation__trigger--FontSize, var(--pf-global--FontSize--md, 1rem));--pf-c--title--m-2xl--FontSize:var(--pfe-navigation__trigger--FontSize, var(--pf-global--FontSize--md, 1rem));--pf-c--title--m--font-weight--normal:var(--pfe-navigation--FontWeight, var(--pfe-theme--font-weight--light, 300));border-width:1px;border-width:var(--pfe-theme--surface--border-width,1px);border-style:dashed;border-color:transparent;border-color:var(--pfe-navigation--BorderColor,transparent);border-top-width:4px;border-top-width:var(--pfe-theme--surface--border-width--heavy,4px);border-top-style:solid;border-top-style:var(--pfe-theme--surface--border-style,solid);border-top-color:transparent;border-top-color:var(--pfe-navigation--BorderTopColor,transparent);background-color:transparent;background-color:var(--pfe-navigation--BackgroundColor,transparent);color:#fff;color:var(--pfe-navigation--Color,var(--pfe-theme--color--text--on-dark,#fff));padding:calc(1rem * .5);padding:var(--pfe-navigation__trigger--Padding,calc(var(--pfe-theme--container-padding,1rem) * .5));position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all cubic-bezier(.465,.183,.153,.946);transition:all cubic-bezier(.465,.183,.153,.946);-webkit-transition:all var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));transition:all var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));outline:0;cursor:pointer}.pfe-navigation-item__trigger:hover{--pfe-navigation--BorderTopColor:var(--pfe-theme--color--ui-accent, #06c);--pfe-navigation__trigger-icon--Visible:visible}:host([variant=wind]) .pfe-navigation-item__trigger:hover{--pfe-navigation--Color:var(--pfe-theme--color--link--hover, #004080)}:host([has_tray]:not([pfe-icon]):not([is_nested]):not(.expanded)) .pfe-navigation-item__trigger:hover{--pfe-navigation__trigger-icon--Visible:visible;border-top-color:#fff;border-top-color:var(--pfe-navigation--Color,var(--pfe-theme--color--text--on-dark,#fff))}@media screen and (min-width:1200px){:host([has_tray]:not(.expanded)) .pfe-navigation-item__trigger:hover{--pfe-navigation__trigger-icon--Visible:visible}}.pfe-navigation-item__trigger:focus{--pfe-navigation--BorderTopColor:var(--pfe-theme--color--ui-accent, #06c);--pfe-navigation--BorderColor:var(--pfe-theme--color--surface--lightest, #fff)}:host([variant=wind]) .pfe-navigation-item__trigger:focus{--pfe-navigation--Color:var(--pfe-theme--color--link--focus, #004080)}:host(:not([pfe-icon])) .pfe-navigation-item__trigger::after{display:block;content:" ";visibility:hidden;visibility:var(--pfe-navigation__trigger-icon--Visible,hidden);border-style:solid;border-style:var(--pfe-theme--surface--border-style,solid);border-width:6px 6px 0;border-color:transparent;border-top-color:#4f5255;border-top-color:var(--pfe-theme--color--feedback--default,#4f5255);-webkit-transform:rotate(0);transform:rotate(0);position:absolute;bottom:calc(1rem / 2);bottom:calc(var(--pfe-theme--container-spacer,1rem)/ 2)}:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__trigger{--pfe-navigation--Color:var(--pfe-theme--color--text, #151515);--pfe-broadcasted--text:var(--pfe-navigation__tray--Color, var(--pfe-theme--color--text, #151515));--pfe-broadcasted--text--muted:var(--pfe-navigation__tray--Color, var(--pfe-theme--color--text, #151515));--pfe-broadcasted--link:var(--pfe-navigation__tray--Color, var(--pfe-theme--color--text, #151515));--pfe-broadcasted--link-decoration:var(--pfe-navigation__tray--Color, var(--pfe-theme--color--text, #151515));--pfe-navigation--BorderColor--accent:transparent;--pfe-navigation--BorderColor:var(--pfe-theme--color--surface--border, #d2d2d2);--pfe-navigation--BorderTopWidth:var(--pfe-theme--surface--border-width, 1px);--pfe-navigation--BorderRightWidth:0;--pfe-navigation--BorderBottomWidth:var(--pfe-theme--surface--border-width, 1px);--pfe-navigation--BorderLeftWidth:var(--pfe-theme--surface--border-width--heavy, 4px);--pfe-navigation--Color:var(--pfe-broadcasted--text, #3c3f42);--pfe-navigation--TextAlign:left;--pfe-navigation--accent:var(--pfe-theme--color--ui-accent, #06c);--pfe-navigation__base--Padding:var(--pfe-theme--container-spacer, 1rem);--pfe-navigation--BorderBottomWidth:0;--pfe-navigation--ZIndex:3;--pfe-navigation__trigger--Padding:var(--pfe-navigation__base--Padding) 50px var(--pfe-navigation__base--Padding) calc(var(--pfe-navigation__base--Padding) * 1.5);margin:0;width:100%;width:var(--pfe-navigation--Width,100%);max-width:100%;height:auto;position:relative;background-color:transparent;background-color:var(--pfe-navigation--BackgroundColor,transparent);color:#fff;color:var(--pfe-navigation--Color,var(--pfe-theme--color--text--on-dark,#fff));border-width:0;border-style:solid;border-style:var(--pfe-theme--surface--border-style,solid);border-color:transparent;border-color:var(--pfe-navigation--BorderColor,transparent);border-top-width:1px;border-top-width:var(--pfe-navigation--BorderTopWidth,var(--pfe-theme--surface--border-width,1px));border-right-width:0;border-right-width:var(--pfe-navigation--BorderRightWidth,0);border-bottom-width:1px;border-bottom-width:var(--pfe-navigation--BorderBottomWidth,var(--pfe-theme--surface--border-width,1px));border-left-width:4px;border-left-width:var(--pfe-navigation--BorderLeftWidth,var(--pfe-theme--surface--border-width--heavy,4px));border-left-color:var(--pfe-navigation--BorderColor--accent);-webkit-box-shadow:var(--pfe-navigation--BoxShadow);box-shadow:var(--pfe-navigation--BoxShadow);z-index:var(--pfe-navigation--ZIndex);cursor:pointer;font-family:inherit;font-size:calc(1rem * 1.1);font-size:var(--pfe-navigation--FontSize--header,calc(var(--pfe-theme--font-size,1rem) * 1.1));font-weight:700;font-weight:var(--pfe-theme--font-weight--bold,700);text-align:left;text-align:var(--pfe-navigation--TextAlign,left);line-height:1.5;line-height:var(--pfe-theme--line-height,1.5);padding:calc(1rem * .5);padding:var(--pfe-navigation__trigger--Padding,calc(var(--pfe-theme--container-padding,1rem) * .5));-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__trigger{border-top-width:1px;border-right-width:0;border-bottom-width:1px;border-left-width:4px}}:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__trigger:focus,:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__trigger:hover{--pfe-navigation--BorderColor--accent:var(--pfe-navigation--accent)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__trigger:focus,:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__trigger:hover{border-left-color:#06c}}:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__trigger:hover{outline:0;border-left-width:4px;border-left-width:var(--pfe-theme--surface--border-width--heavy,4px)}:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__trigger:focus{outline:0;text-decoration:underline}:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__trigger::-moz-focus-inner{border:0}:host([is_nested].expanded:not([parent_hidden])) .pfe-navigation-item__trigger{--pfe-navigation--BorderColor:var(--pfe-theme--color--surface--border, #d2d2d2);--pfe-navigation--BorderRightWidth:var(--pfe-theme--surface--border-width, 1px);--pfe-navigation--BorderLeftWidth:var(--pfe-theme--surface--border-width--heavy, 4px);--pfe-navigation--BackgroundColor:white;--pfe-navigation--Color:var(--pfe-theme--color--text, #151515);--pfe-navigation--BorderColor--accent:var(--pfe-navigation--accent);--pfe-navigation--BoxShadow:0 5px var(--pfe-theme--surface--border-width--heavy, 4px) rgba(140, 140, 140, 0.35);--pfe-navigation--ZIndex:3}:host([is_nested][last]:not(.expanded):not([parent_hidden])) .pfe-navigation-item__trigger{--pfe-navigation--BorderBottomWidth:var(--pfe-theme--surface--border-width, 1px)}:host([is_nested]:not(.expanded):not([parent_hidden])) .pfe-navigation-item__trigger::after{content:"";position:absolute;top:calc(1rem + 0px);top:calc(var(--pfe-theme--container-spacer,1rem) + 0px);display:block;border-style:solid;border-style:var(--pfe-theme--surface--border-style,solid);height:.4em;width:.4em;-webkit-transition:-webkit-transform .15s;transition:-webkit-transform .15s;transition:transform .15s;transition:transform .15s,-webkit-transform .15s;border-width:0 .1em .1em 0;-webkit-transform:rotate(45deg);transform:rotate(45deg);right:calc(1rem * 1.3125);right:calc(var(--pfe-theme--container-spacer,1rem) * 1.3125)}:host([is_nested].expanded:not([parent_hidden])) .pfe-navigation-item__trigger::after{content:"";position:absolute;top:calc(1rem + 4px);top:calc(var(--pfe-theme--container-spacer,1rem) + 4px);display:block;border-style:solid;border-style:var(--pfe-theme--surface--border-style,solid);height:.4em;width:.4em;-webkit-transition:-webkit-transform .15s;transition:-webkit-transform .15s;transition:transform .15s;transition:transform .15s,-webkit-transform .15s;border-width:.1em .1em 0 0;border-bottom:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);top:calc(1rem + 4px);top:calc(var(--pfe-theme--container-spacer,1rem) + 4px);right:calc(1rem * 1.3125);right:calc(var(--pfe-theme--container-spacer,1rem) * 1.3125)}:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__trigger::after{--pfe-navigation__trigger-icon--Visible:visible;border-color:#fff;border-color:var(--pfe-navigation--Color,var(--pfe-theme--color--text--on-dark,#fff))}:host([is_nested]:not([has_tray]):not([parent_hidden])) .pfe-navigation-item__trigger::after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}:host([variant=wind]) .pfe-navigation-item__trigger{--pfe-navigation__trigger--Padding:calc(var(--pfe-theme--container-padding, 1rem) / 2) 0 calc(var(--pfe-theme--container-padding, 1rem) / 2) calc(var(--pfe-theme--container-spacer, 1rem) * 1.5);--pfe-navigation--Color:pfe-var(link);--pfe-navigation--BackgroundColor:transparent!important;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;border:none}.pfe-navigation-item__trigger pfe-icon{--pfe-icon--Color:var(--pfe-navigation--Color, var(--pfe-theme--color--text--on-dark, #fff))}:host([variant=wind]) .pfe-navigation-item__trigger pfe-icon{margin-bottom:0;margin-right:calc(1rem / 2);margin-right:calc(var(--pfe-theme--container-spacer,1rem)/ 2)}.pfe-navigation-item__trigger pfe-icon[icon=web-plus]{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}::slotted([slot=trigger]){font-family:"Red Hat Text",RedHatText,Overpass,Overpass,Arial,sans-serif;font-family:var(--pfe-theme--font-family, "Red Hat Text", "RedHatText", "Overpass", Overpass, Arial, sans-serif);font-size:1rem!important;font-size:var(--pfe-navigation__trigger--FontSize,var(--pf-global--FontSize--md,1rem))!important;font-weight:300;font-weight:var(--pfe-navigation--FontWeight,var(--pfe-theme--font-weight--light,300));color:#fff;color:var(--pfe-navigation--Color,var(--pfe-theme--color--text--on-dark,#fff));z-index:2;line-height:1.1;margin:0!important;max-width:100%;text-align:center}@media screen and (min-width:0){::slotted([slot=trigger]){max-width:100%}}@media screen and (min-width:1200px){::slotted([slot=trigger]){max-width:190px}}:host([pfe-icon]) ::slotted([slot=trigger]){margin:.25em 0 0 0!important;max-width:100px}::slotted(*){font-size:inherit!important;font-weight:300!important;font-weight:var(--pfe-navigation--FontWeight,var(--pfe-theme--font-weight--light,300))!important}.pfe-navigation-item__tray{--pfe-navigation--FontWeight:var(--pfe-theme--color--text, #151515);--pfe-broadcasted--text:var(--pfe-theme--color--text, #151515);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted, #6a6e73);--pfe-broadcasted--link:var(--pfe-theme--color--link, #06c);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover, #004080);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus, #004080);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited, #6753ac);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited, none);-webkit-transition:all cubic-bezier(.465,.183,.153,.946);transition:all cubic-bezier(.465,.183,.153,.946);-webkit-transition:all var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));transition:all var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));-webkit-box-sizing:border-box;box-sizing:border-box;display:none;visibility:hidden}.pfe-navigation-item__tray[aria-expanded=true]{display:block;visibility:visible}:host([show_links]:not([parent_hidden])) .pfe-navigation-item__tray{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;visibility:visible;width:100%;padding-right:40px}:host(:not([pfe-icon=web-mobile-menu]):not([is_nested])) .pfe-navigation-item__tray,:host([is_nested][parent_hidden]) .pfe-navigation-item__tray,:host([pfe-icon=web-mobile-menu]:not([show_links])) .pfe-navigation-item__tray{position:absolute;top:100%;left:0;background-color:#fff;background-color:var(--pfe-navigation__tray--BackgroundColor,var(--pfe-theme--color--surface--lightest,#fff));color:#151515;color:var(--pfe-navigation__tray--Color,var(--pfe-theme--color--text,#151515));padding:var(--pfe-navigation__tray--Padding);width:100%;max-height:calc(100vh - 84px);max-height:calc(100vh - var(--pfe-navigation--Height,84px));overflow-x:hidden;overflow-y:scroll;padding-right:9px}:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__tray{display:none;overflow:hidden;will-change:height;border-color:transparent;opacity:0;margin:0;width:100%;width:var(--pfe-navigation--Width,100%);max-width:100%;height:auto;position:relative;background-color:transparent;background-color:var(--pfe-navigation--BackgroundColor,transparent);color:#fff;color:var(--pfe-navigation--Color,var(--pfe-theme--color--text--on-dark,#fff));border-width:0;border-style:solid;border-style:var(--pfe-theme--surface--border-style,solid);border-color:transparent;border-color:var(--pfe-navigation--BorderColor,transparent);border-top-width:1px;border-top-width:var(--pfe-navigation--BorderTopWidth,var(--pfe-theme--surface--border-width,1px));border-right-width:0;border-right-width:var(--pfe-navigation--BorderRightWidth,0);border-bottom-width:1px;border-bottom-width:var(--pfe-navigation--BorderBottomWidth,var(--pfe-theme--surface--border-width,1px));border-left-width:4px;border-left-width:var(--pfe-navigation--BorderLeftWidth,var(--pfe-theme--surface--border-width--heavy,4px));border-left-color:var(--pfe-navigation--BorderColor--accent);-webkit-box-shadow:var(--pfe-navigation--BoxShadow);box-shadow:var(--pfe-navigation--BoxShadow);z-index:var(--pfe-navigation--ZIndex);--pfe-navigation--BoxShadow:none;padding:var(--pfe-navigation__panel-container--Padding);padding:calc(var(--pfe-navigation--Padding--vertical)/ 2) calc(var(--pfe-navigation--Padding--horizontal) * 1.75)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__tray{border-top-width:1px;border-right-width:0;border-bottom-width:1px;border-left-width:4px}}:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__tray:focus,:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__tray:hover{--pfe-navigation--BorderColor--accent:var(--pfe-navigation--accent)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__tray:focus,:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__tray:hover{border-left-color:#06c}}:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__tray *,:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__tray ::after,:host([is_nested]:not([parent_hidden])) .pfe-navigation-item__tray ::before{-webkit-box-sizing:border-box;box-sizing:border-box}:host([is_nested].expanded:not([parent_hidden])) .pfe-navigation-item__tray{--pfe-navigation--BorderColor:var(--pfe-theme--color--surface--border, #d2d2d2);--pfe-navigation--BorderRightWidth:var(--pfe-theme--surface--border-width, 1px);--pfe-navigation--BorderLeftWidth:var(--pfe-theme--surface--border-width--heavy, 4px);--pfe-navigation--BackgroundColor:white;--pfe-navigation--Color:var(--pfe-theme--color--text, #151515);--pfe-navigation--BorderColor--accent:var(--pfe-navigation--accent);--pfe-navigation--BoxShadow:0 5px var(--pfe-theme--surface--border-width--heavy, 4px) rgba(140, 140, 140, 0.35);--pfe-navigation--ZIndex:3;--pfe-navigation--accent:var(--pfe-theme--color--ui-accent, #06c);--pfe-navigation--BorderTopWidth:0;--pfe-navigation--BoxShadow:0 5px var(--pfe-theme--surface--border-width--heavy, 4px) rgba(140, 140, 140, 0.35);display:block;position:relative;opacity:1}::slotted([slot=tray]){display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}:host(:not(.expanded):not([show_links])) .pfe-navigation-item__tray,:host([hidden]) .pfe-navigation-item__tray,:host([hidden]) .pfe-navigation-item__trigger,:host([hidden]:not([show_tray])),:host([show_links])>.pfe-navigation-item__trigger{display:none;visibility:hidden}:host([show_links]) ::slotted([slot=tray][hidden]),:host([show_tray]){display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;visibility:visible;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}:host([is_nested]) ::slotted([slot=trigger]){text-align:left}:host([is_nested]) [slot=trigger]>a{color:#151515!important;color:var(--pfe-theme--color--text,#151515)!important}:host([pfe-icon=web-mobile-menu]){-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-flex:0;-webkit-flex:0 1 99%;-ms-flex:0 1 99%;flex:0 1 99%}:host([is_nested][parent_hidden][pfe-full-width]) .pfe-navigation-item__tray{padding:var(--pfe-navigation__tray--Padding) 0 var(--pfe-navigation__tray--Padding)} /*# sourceMappingURL=pfe-navigation-item.min.css.map */</style>\n<div class="pfe-navigation-item__trigger" aria-expanded="false" tabindex="0">\n    ' +
                        (this.hasIcon
                          ? '<pfe-icon icon="' + this.iconName + '"></pfe-icon>'
                          : "") +
                        '\n    <slot name="trigger"></slot>\n</div>\n' +
                        (this.hasSlot("tray")
                          ? '<div class="pfe-navigation-item__tray">\n    <slot name="tray"></slot>\n</div>'
                          : "")
                      );
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-navigation-item.html";
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-navigation-item.scss";
                    },
                  },
                  {
                    key: "schemaUrl",
                    get: function () {
                      return "pfe-navigation-item.json";
                    },
                  },
                  {
                    key: "hasIcon",
                    get: function () {
                      return this.hasAttribute("pfe-icon");
                    },
                  },
                  {
                    key: "iconName",
                    get: function () {
                      return this.getAttribute("pfe-icon");
                    },
                  },
                  {
                    key: "nested",
                    get: function () {
                      return this.hasAttribute("is_nested");
                    },
                    set: function (isNested) {
                      (isNested = Boolean(isNested))
                        ? this.setAttribute("is_nested", "")
                        : this.removeAttribute("is_nested");
                    },
                  },
                  {
                    key: "expanded",
                    get: function () {
                      return this.classList.contains("expanded");
                    },
                    set: function (isExpanded) {
                      (isExpanded = Boolean(isExpanded))
                        ? (this.classList.add("expanded"),
                          "web-mobile-menu" === this.iconName &&
                            this._icon &&
                            this._icon.setAttribute("icon", "web-plus"),
                          this._trigger &&
                            this._trigger.setAttribute("aria-expanded", !0),
                          this.tray && this.tray.removeAttribute("hidden"),
                          this._tray &&
                            this._tray.setAttribute("aria-expanded", !0))
                        : (this.classList.remove("expanded"),
                          "web-mobile-menu" === this.iconName &&
                            this._icon &&
                            this._icon.setAttribute("icon", "web-mobile-menu"),
                          this._trigger &&
                            this._trigger.setAttribute("aria-expanded", !1),
                          this.tray && this.tray.setAttribute("hidden", ""),
                          this._tray &&
                            this._tray.setAttribute("aria-expanded", !1));
                    },
                  },
                  {
                    key: "visible",
                    get: function () {
                      return !this.hasAttribute("hidden");
                    },
                    set: function (isVisible) {
                      (isVisible = Boolean(isVisible))
                        ? this.removeAttribute("hidden")
                        : this.setAttribute("hidden", "");
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "schemaProperties",
                    get: function () {
                      return {
                        icon: {
                          title: "Icon name",
                          type: "string",
                          prefixed: !0,
                        },
                      };
                    },
                  },
                  {
                    key: "slots",
                    get: function () {
                      return {
                        trigger: {
                          title: "Navigation trigger",
                          type: "array",
                          namedSlot: !0,
                          items: { title: "Item", oneOf: [{ $ref: "raw" }] },
                        },
                        tray: {
                          title: "Navigation tray",
                          type: "array",
                          namedSlot: !0,
                          items: { title: "Item", oneOf: [{ $ref: "raw" }] },
                        },
                      };
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-navigation-item";
                    },
                  },
                  {
                    key: "PfeType",
                    get: function () {
                      return PFElement.PfeTypes.Container;
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        fullWidth: {
                          title: "Full Width",
                          type: Boolean,
                          cascade: [".pfe-navigation-item__tray"],
                        },
                        pfeFullWidth: {
                          type: Boolean,
                          prefix: !1,
                          cascade: [".pfe-navigation-item__tray"],
                          alias: "fullWidth",
                        },
                      };
                    },
                  },
                ]
              ),
              createClass(PfeNavigationItem, [
                {
                  key: "connectedCallback",
                  value: function () {
                    get(
                      PfeNavigationItem.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeNavigationItem.prototype),
                      "connectedCallback",
                      this
                    ).call(this),
                      this._init__trigger(),
                      this._init__tray(),
                      this.trigger &&
                        this.trigger.addEventListener(
                          "slotchange",
                          this._init__trigger
                        ),
                      this.tray &&
                        this.tray.addEventListener(
                          "slotchange",
                          this._init__tray
                        );
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    get(
                      PfeNavigationItem.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeNavigationItem.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this),
                      this.trigger.removeEventListener(
                        "slotchange",
                        this._init
                      ),
                      this.tray
                        ? (this.tray.removeEventListener(
                            "slotchange",
                            this._init
                          ),
                          this.removeEventListener(
                            "keydown",
                            this._keydownHandler
                          ),
                          this.removeEventListener("keyup", this._exit),
                          this._trigger.removeEventListener(
                            "click",
                            this.toggle
                          ),
                          this._trigger.removeEventListener(
                            "keyup",
                            this._keyupHandler
                          ))
                        : (this._trigger.removeEventListener(
                            "click",
                            this._navigateToUrl
                          ),
                          this._trigger.removeEventListener(
                            "keyup",
                            this._directLinkHandler
                          ));
                  },
                },
                {
                  key: "_init__trigger",
                  value: function () {
                    if (
                      ([]
                        .concat(toConsumableArray(this.children))
                        .filter(function (child) {
                          return !child.hasAttribute("slot");
                        })
                        .map(function (item) {
                          return item.setAttribute("slot", "trigger");
                        }),
                      (this.trigger = this.querySelector('[slot="trigger"]')),
                      this.trigger)
                    ) {
                      if (
                        ((this.directLink = this.trigger.querySelector("a")),
                        !this.directLink && "SLOT" === this.trigger.tagName)
                      ) {
                        var slottedContent = this.trigger.assignedNodes();
                        slottedContent.length > 0 &&
                          "A" === slottedContent[0].tagName &&
                          (this.directLink = slottedContent[0]);
                      }
                      this.directLink
                        ? (this.directLink.setAttribute("tabindex", "-1"),
                          (this.linkUrl = this.directLink.href))
                        : (this.linkUrl = "#"),
                        this._trigger.addEventListener(
                          "click",
                          this._navigateToUrl
                        ),
                        this._trigger.addEventListener(
                          "keyup",
                          this._directLinkHandler
                        );
                    }
                  },
                },
                {
                  key: "_init__tray",
                  value: function () {
                    var _this4 = this;
                    if (
                      ((this.tray = this.querySelector('[slot="tray"]')),
                      this.tray)
                    ) {
                      this.nestedItems = this.nestedItems.concat(
                        [].concat(
                          toConsumableArray(
                            this.tray.querySelectorAll("" + this.tag)
                          )
                        )
                      );
                      var array = [];
                      window.ShadyCSS ||
                        []
                          .concat(
                            toConsumableArray(
                              this.tray.querySelectorAll("slot")
                            )
                          )
                          .forEach(function (slot) {
                            []
                              .concat(
                                toConsumableArray(slot.assignedElements())
                              )
                              .forEach(function (node) {
                                array = array.concat(
                                  [].concat(
                                    toConsumableArray(
                                      node.querySelectorAll("" + _this4.tag)
                                    )
                                  )
                                );
                              });
                          }),
                        (this.nestedItems = this.nestedItems.concat(
                          array.filter(function (el) {
                            return !_this4.nestedItems.includes(el);
                          })
                        )),
                        this._init__handlers();
                    }
                  },
                },
                {
                  key: "_init__handlers",
                  value: function () {
                    this._trigger.removeEventListener(
                      "click",
                      this._navigateToUrl
                    ),
                      this._trigger.removeEventListener(
                        "keyup",
                        this._directLinkHandler
                      ),
                      this._handlersAdded ||
                        (this._trigger.addEventListener("click", this.toggle),
                        this.addEventListener("keyup", this._exit),
                        this.addEventListener("keydown", this._keydownHandler),
                        this._trigger.addEventListener(
                          "keyup",
                          this._keyupHandler
                        ),
                        (this._handlersAdded = !0));
                  },
                },
                {
                  key: "_navigateToUrl",
                  value: function (event) {
                    event.preventDefault(),
                      (window.location.href = this.linkUrl);
                  },
                },
                {
                  key: "_directLinkHandler",
                  value: function (event) {
                    switch (event.key || event.keyCode) {
                      case "Spacebar":
                      case " ":
                      case 32:
                      case "Enter":
                      case 13:
                        this._navigateToUrl(event);
                        break;
                      default:
                        return;
                    }
                  },
                },
                {
                  key: "_keydownHandler",
                  value: function (event) {
                    var key = event.key || event.keyCode,
                      clicked =
                        event.path && event.path.length > 0
                          ? event.path[0]
                          : this;
                    switch (key) {
                      case "Spacebar":
                      case " ":
                      case 32:
                        ["INPUT", "TEXTAREA", "SELECT"].includes(
                          clicked.tagName
                        ) || event.preventDefault();
                    }
                  },
                },
                {
                  key: "_keyupHandler",
                  value: function (event) {
                    var key = event.key || event.keyCode,
                      clicked =
                        event.path && event.path.length > 0
                          ? event.path[0]
                          : this;
                    switch (key) {
                      case "Spacebar":
                      case " ":
                      case 32:
                        ["INPUT", "TEXTAREA", "SELECT"].includes(
                          clicked.tagName
                        ) || this.toggle(event);
                        break;
                      case "Enter":
                      case 13:
                        ["A"].includes(clicked.tagName) || this.toggle(event);
                    }
                  },
                },
                {
                  key: "_exit",
                  value: function (event) {
                    switch (event.key || event.keyCode) {
                      case "Esc":
                      case "Escape":
                      case 27:
                        this.close(event);
                    }
                  },
                },
              ]),
              PfeNavigationItem
            );
          })(),
          PfeNavigationMain = (function (_PFElement) {
            function PfeNavigationMain() {
              classCallCheck(this, PfeNavigationMain);
              var _this = possibleConstructorReturn(
                this,
                (
                  PfeNavigationMain.__proto__ ||
                  Object.getPrototypeOf(PfeNavigationMain)
                ).call(this, PfeNavigationMain)
              );
              return (_this._init = _this._init.bind(_this)), _this;
            }
            return (
              inherits(PfeNavigationMain, PFElement),
              createClass(
                PfeNavigationMain,
                [
                  {
                    key: "html",
                    get: function () {
                      return "\n<style>:host{height:100%}::slotted(*){margin:0;padding:0;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap}:host([show_content]) ::slotted(*){-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}::slotted(ul){list-style-type:none}:host([show_content]) ::slotted(ul){display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap} /*# sourceMappingURL=pfe-navigation-main.min.css.map */</style>\n<slot></slot>";
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-navigation-main.html";
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-navigation-main.scss";
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-navigation-main";
                    },
                  },
                  {
                    key: "PfeType",
                    get: function () {
                      return PFElement.PfeTypes.Container;
                    },
                  },
                  {
                    key: "observedAttributes",
                    get: function () {
                      return ["show_content"];
                    },
                  },
                ]
              ),
              createClass(PfeNavigationMain, [
                {
                  key: "connectedCallback",
                  value: function () {
                    get(
                      PfeNavigationMain.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeNavigationMain.prototype),
                      "connectedCallback",
                      this
                    ).call(this),
                      this._init(),
                      this.addEventListener("slotchange", this._init);
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    get(
                      PfeNavigationMain.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeNavigationMain.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this),
                      this.removeEventListener("slotchange", this._init);
                  },
                },
                {
                  key: "_init",
                  value: function () {
                    (this.navItems = [].concat(
                      toConsumableArray(
                        this.querySelectorAll("pfe-navigation-item")
                      )
                    )),
                      (this.first =
                        this.navItems.length > 0 ? this.navItems[0] : null),
                      (this.last = this.navItems[this.navItems.length - 1]),
                      this.setAttribute("role", "navigation"),
                      this.setAttribute("aria-label", "Main"),
                      this.navItems.forEach(function (item) {
                        item.nested = !0;
                      }),
                      this.first && this.first.setAttribute("first", ""),
                      this.last && this.last.setAttribute("last", "");
                  },
                },
              ]),
              PfeNavigationMain
            );
          })(),
          PfeNavigation = (function (_PFElement) {
            function PfeNavigation() {
              classCallCheck(this, PfeNavigation);
              var _this = possibleConstructorReturn(
                this,
                (
                  PfeNavigation.__proto__ ||
                  Object.getPrototypeOf(PfeNavigation)
                ).call(this, PfeNavigation)
              );
              return (
                (_this._init = _this._init.bind(_this)),
                (_this._setVisibility = _this._setVisibility.bind(_this)),
                (_this._resizeHandler = _this._resizeHandler.bind(_this)),
                (_this._stickyHandler = _this._stickyHandler.bind(_this)),
                (_this._outsideListener = _this._outsideListener.bind(_this)),
                (_this._menuItemClickHandler =
                  _this._menuItemClickHandler.bind(_this)),
                (_this._overlayClickHandler =
                  _this._overlayClickHandler.bind(_this)),
                (_this._observer = new MutationObserver(_this._init)),
                (_this._overlay = _this.shadowRoot.querySelector(
                  "." + _this.tag + "__overlay"
                )),
                (_this._wrapper = _this.shadowRoot.querySelector(
                  "." + _this.tag + "__wrapper"
                )),
                (_this._menuItem = _this.shadowRoot.querySelector(
                  PfeNavigationItem.tag + '[pfe-icon="web-mobile-menu"]'
                )),
                (_this._slots = {
                  language: _this.shadowRoot.querySelector(
                    PfeNavigationItem.tag + '[pfe-icon="web-user"]'
                  ),
                  login: _this.shadowRoot.querySelector(
                    PfeNavigationItem.tag + '[pfe-icon="web-globe"]'
                  ),
                }),
                (_this._activeNavigationItems = []),
                (_this.overlay = !1),
                _this._menuItem.shadowRoot
                  .querySelector(".pfe-navigation-item__trigger")
                  .addEventListener("click", _this._menuItemClickHandler),
                _this._overlay.addEventListener(
                  "click",
                  _this._overlayClickHandler
                ),
                _this
              );
            }
            return (
              inherits(PfeNavigation, PFElement),
              createClass(
                PfeNavigation,
                [
                  {
                    key: "html",
                    get: function () {
                      return (
                        '\n<style>.pfe-navigation__skip{position:absolute;overflow:hidden;clip:rect(0,0,0,0);height:1px;width:1px;margin:-1px;padding:0;border:0}:host{--pfe-navigation--sm-mobile:500px;--pfe-navigation--lg-mobile:640px;--pfe-navigation--sm-desktop:1024px;--pfe-navigation--Padding--vertical:var(--pfe-theme--container-padding, 1rem);--pfe-navigation--Padding--horizontal:var(--pfe-theme--container-padding, 1rem);--pfe-navigation--BackgroundColor:var(--pfe-theme--color--surface--darkest, #151515);--pfe-navigation--Color:var(--pfe-theme--color--text--on-dark, #fff);--pfe-navigation--BorderTopColor:transparent;--pfe-navigation--BorderColor:transparent;--pfe-navigation--MaxHeight:72px;--pfe-navigation--MobileMenuHeight:60px;--pfe-navigation--MaxWidth:calc(var(--pfe-theme--container-padding, 1rem) * 4);--pfe-navigation--icon:none;--pfe-navigation__overlay--BackgroundColor:var(--pfe-theme--color--overlay, rgba(37, 37, 37, 0.5));--pfe-navigation__trigger--FontSize:16px;--pfe-navigation__trigger--FontWeight:100;--pfe-navigation__tray--Padding:var(--pfe-theme--container-padding, 1rem);--pfe-navigation__logo--MinWidth:135px;--pfe-navigation--Padding:0 var(--pfe-navigation--Padding--horizontal, var(--pfe-theme--container-padding, 1rem));--pfe-navigation--Border:var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) var(--pfe-navigation--BorderColor, transparent);display:block;--pfe-accordion__base--Padding:var(--pfe-theme--container-spacer, 16px);--pfe-accordion__panel-container--Padding:0 calc(var(--pfe-accordion__base--Padding) * 3) var(--pfe-accordion__base--Padding) calc(var(--pfe-accordion__base--Padding) * 1.5);z-index:0;z-index:var(--pfe-theme--zindex--content,0);width:100%}@media print{:host{--pfe-navigation--Padding:calc(var(--pfe-navigation--Padding--vertical, var(--pfe-theme--container-padding, 1rem)) / 2) var(--pfe-navigation--Padding--horizontal, var(--pfe-theme--container-padding, 1rem))}}:host(.pfe-sticky){position:-webkit-sticky;position:sticky;top:0;left:0;z-index:95;z-index:var(--pfe-theme--zindex--navigation,95)}@media screen and (min-width:768px){:host([pfe-full-width]) .pfe-navigation__container{--pfe-navigation--Width:calc(100% - var(--pfe-navigation--Padding--horizontal, var(--pfe-theme--container-padding, 1rem)) * 4)}}@media screen and (min-width:992px){:host([pfe-full-width]) .pfe-navigation__container{--pfe-navigation--Width:calc(100% - var(--pfe-navigation--Padding--horizontal, var(--pfe-theme--container-padding, 1rem)) * 4)}}@media screen and (min-width:1200px){:host([pfe-full-width]) .pfe-navigation__container{--pfe-navigation--Width:calc(100% - var(--pfe-navigation--Padding--horizontal, var(--pfe-theme--container-padding, 1rem)) * 8)}}pfe-icon{--pfe-icon--Color:var(--pfe-navigation--Color, var(--pfe-theme--color--text--on-dark, #fff))}::slotted([slot=logo]){margin:0!important;max-width:100%;max-height:72px;max-height:var(--pfe-navigation--MaxHeight,72px);min-width:135px;min-width:var(--pfe-navigation__logo--MinWidth,135px);display:block}::slotted([slot=mobile-language]),::slotted([slot=mobile-login]){color:#06c;color:var(--pfe-broadcasted--link,#06c);text-decoration:none;-webkit-text-decoration:var(--pfe-broadcasted--link-decoration,none);text-decoration:var(--pfe-broadcasted--link-decoration,none)}::slotted([slot=mobile-menu--label]){font-family:var(--pfe-navigation--font-family);font-size:var(--pfe-navigation--FontSize);font-weight:var(--pfe-navigation--FontWeight);color:#fff;color:var(--pfe-navigation--Color,var(--pfe-theme--color--text--on-dark,#fff));margin-bottom:0}.pfe-navigation__wrapper{--pfe-broadcasted--text:var(--pfe-theme--color--text--on-dark, #fff);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted--on-dark, #d2d2d2);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-dark, #73bcf7);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-dark, #bee1f4);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-dark, #bee1f4);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-dark, #bee1f4);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-dark, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-dark, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-dark, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-dark, none);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;z-index:95;z-index:var(--pfe-theme--zindex--navigation,95);background-color:#151515;background-color:var(--pfe-navigation--BackgroundColor,var(--pfe-theme--color--surface--darkest,#151515));color:#fff;color:var(--pfe-navigation--Color,var(--pfe-theme--color--text--on-dark,#fff));min-height:72px;min-height:var(--pfe-navigation--MaxHeight,72px)}@media only screen and (max-height:500px){.pfe-navigation__wrapper{min-height:60px;min-height:var(--pfe-navigation--MobileMenuHeight,60px)}}.pfe-navigation__container{width:100%;margin:0 auto;padding:0 1rem;padding:0 var(--pfe-navigation--Padding--horizontal,var(--pfe-theme--container-padding,1rem));display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-sizing:border-box;box-sizing:border-box}@media screen and (min-width:768px){.pfe-navigation__container{padding:0;max-width:var(--pfe-navigation--Width)}}@media screen and (min-width:768px){.pfe-navigation__container{--pfe-navigation--Width:calc(768px - var(--pfe-navigation--MaxWidth, calc(var(--pfe-theme--container-padding, 1rem) * 4)))}}@media screen and (min-width:992px){.pfe-navigation__container{--pfe-navigation--Width:calc(992px - var(--pfe-navigation--MaxWidth, calc(var(--pfe-theme--container-padding, 1rem) * 4)))}}@media screen and (min-width:1200px){.pfe-navigation__container{--pfe-navigation--Width:calc(1200px - var(--pfe-navigation--MaxWidth, calc(var(--pfe-theme--container-padding, 1rem) * 4)))}}.pfe-navigation__overlay{display:block;background-color:rgba(37,37,37,.5);background-color:var(--pfe-navigation__overlay--BackgroundColor,var(--pfe-theme--color--overlay,rgba(37,37,37,.5)));position:fixed;top:0;left:0;width:100%;height:100%;z-index:90;z-index:var(--pfe-theme--zindex--overlay,90)}.pfe-navigation__overlay[hidden]{display:none}.pfe-navigation__logo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:155px;width:var(--pfe-navigation__logo--MinWidth,155px);-webkit-box-flex:0;-webkit-flex:0 0 135px;-ms-flex:0 0 135px;flex:0 0 135px;-webkit-flex:0 0 var(--pfe-navigation__logo--MinWidth,135px);-ms-flex:0 0 var(--pfe-navigation__logo--MinWidth,135px);flex:0 0 var(--pfe-navigation__logo--MinWidth,135px);padding-top:1rem;padding-top:var(--pfe-navigation--Padding--vertical,var(--pfe-theme--container-padding,1rem));padding-bottom:1rem;padding-bottom:var(--pfe-navigation--Padding--vertical,var(--pfe-theme--container-padding,1rem));padding-right:calc(1rem + 9px);padding-right:calc(var(--pfe-theme--container-padding,1rem) + 9px)}@media screen and (min-width:768px){.pfe-navigation__logo{padding-right:calc(1rem * 3);padding-right:calc(var(--pfe-theme--container-padding,1rem) * 3)}}@media screen and (max-height:500px){.pfe-navigation__logo{padding-top:calc(1rem/2);padding-top:calc(var(--pfe-navigation--Padding--vertical,var(--pfe-theme--container-padding,1rem))/ 2);padding-bottom:calc(1rem/2);padding-bottom:calc(var(--pfe-navigation--Padding--vertical,var(--pfe-theme--container-padding,1rem))/ 2)}}@media screen and (min-width:640px){.pfe-navigation__logo{-webkit-box-flex:0;-webkit-flex:0 1 10%;-ms-flex:0 1 10%;flex:0 1 10%}}.pfe-navigation__logo>*{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.pfe-navigation__logo{-webkit-box-flex:1;-webkit-flex:1 0 15%;-ms-flex:1 0 15%;flex:1 0 15%}}.pfe-navigation__skip{display:block;margin:0 -2em -1px -1px}.pfe-navigation__main{display:-ms-grid;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));height:100%;width:100%}.pfe-navigation__main--menu-label{color:#fff;color:var(--pfe-navigation--Color,var(--pfe-theme--color--text--on-dark,#fff))}[show_login][show_language] .pfe-navigation__main,[show_search] .pfe-navigation__main{grid-gap:1rem;grid-gap:var(--pfe-theme--container-spacer,1rem)}.pfe-navigation__main ::slotted(:not([hidden])){display:block;grid-column:1/-1}.pfe-navigation__utility{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto}@media screen and (min-width:1024px){.pfe-navigation__utility{-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto;margin-left:auto}} /*# sourceMappingURL=pfe-navigation.min.css.map */</style>\n<div class="pfe-navigation__wrapper">\n  <div class="pfe-navigation__container">\n    ' +
                        (this.hasSlot("logo")
                          ? '<div class="pfe-navigation__logo">\n      <slot name="logo" tabindex="2"></slot>\n    </div>'
                          : "") +
                        "\n    " +
                        (this.hasSlot("skip")
                          ? '<div class="pfe-navigation__skip">\n      <slot name="skip" tabindex="1"></slot>\n    </div>'
                          : "") +
                        '\n    <pfe-navigation-item pfe-icon="web-mobile-menu">\n      ' +
                        (this.hasAttribute("pfe-menu-label")
                          ? '<h2 slot="trigger" class="pfe-navigation__main--menu-label">' +
                            this.getAttribute("pfe-menu-label") +
                            "</h2>"
                          : '<span slot="trigger"></span>') +
                        '\n      <div slot="tray">\n        <div class="pfe-navigation__main">\n          <slot name="mobile-search"></slot>\n          <slot></slot>\n          ' +
                        (this.hasSlot("mobile-login")
                          ? '<pfe-navigation-item pfe-icon="web-user" variant="wind" hidden>\n            <slot name="mobile-login"></slot>\n          </pfe-navigation-item>'
                          : "") +
                        "\n          " +
                        (this.hasSlot("mobile-language")
                          ? '<pfe-navigation-item pfe-icon="web-globe" variant="wind" hidden>\n            <slot name="mobile-language"></slot>\n          </pfe-navigation-item>'
                          : "") +
                        "\n        </div>\n      </div>\n    </pfe-navigation-item>\n    " +
                        (this.hasSlot("language") ||
                        this.hasSlot("search") ||
                        this.hasSlot("login") ||
                        this.hasSlot("site-switcher")
                          ? '<div class="pfe-navigation__utility">\n      <slot name="language"></slot>\n      <slot name="search"></slot>\n      <slot name="login"></slot>\n      <slot name="site-switcher"></slot>\n    </div>'
                          : "") +
                        '\n  </div>\n</div>\n<div class="pfe-navigation__overlay" hidden></div>'
                      );
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-navigation.html";
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-navigation.scss";
                    },
                  },
                  {
                    key: "schemaUrl",
                    get: function () {
                      return "pfe-navigation.json";
                    },
                  },
                  {
                    key: "overlay",
                    get: function () {
                      return !this._overlay.hasAttribute("hidden");
                    },
                    set: function (state) {
                      state
                        ? (this._overlay.removeAttribute("hidden"),
                          this._wrapper.setAttribute("expanded", ""))
                        : (this._overlay.setAttribute("hidden", ""),
                          this._wrapper.removeAttribute("expanded"));
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "schemaProperties",
                    get: function () {
                      return {
                        sticky: {
                          title: "Sticky navigation",
                          type: "boolean",
                          default: !0,
                          prefixed: !0,
                        },
                        "full-width": {
                          title: "Full width navigation",
                          type: "boolean",
                          default: !1,
                          prefixed: !0,
                        },
                        "close-on-click": {
                          title: "Close navigation on click event",
                          type: "string",
                          enum: ["external"],
                          default: "external",
                          prefixed: !0,
                        },
                        "menu-label": {
                          title: "Mobile menu label",
                          type: "string",
                          default: "Menu",
                          prefixed: !0,
                        },
                      };
                    },
                  },
                  {
                    key: "slots",
                    get: function () {
                      return {
                        skip: {
                          title: "Skip navigation",
                          type: "array",
                          namedSlot: !0,
                          items: { title: "Item", oneOf: [{ $ref: "raw" }] },
                        },
                        logo: {
                          title: "Logo",
                          type: "array",
                          namedSlot: !0,
                          items: { title: "Item", oneOf: [{ $ref: "raw" }] },
                        },
                        search: {
                          title: "Search",
                          type: "array",
                          namedSlot: !0,
                          items: {
                            title: "Item",
                            oneOf: [{ $ref: "pfe-navigation-item" }],
                          },
                        },
                        "mobile-search": {
                          title: "Mobile search functionality",
                          type: "array",
                          namedSlot: !0,
                          items: { title: "Item", oneOf: [{ $ref: "raw" }] },
                        },
                        main: {
                          title: "Main navigation",
                          type: "array",
                          namedSlot: !1,
                          items: {
                            title: "Item",
                            oneOf: [{ $ref: "nav" }, { $ref: "raw" }],
                          },
                        },
                        language: {
                          title: "Language switcher",
                          type: "array",
                          namedSlot: !0,
                          items: {
                            title: "Item",
                            oneOf: [{ $ref: "pfe-navigation-item" }],
                          },
                        },
                        "mobile-language": {
                          title: "Mobile link to language page",
                          type: "array",
                          namedSlot: !0,
                          items: { title: "Item", oneOf: [{ $ref: "a" }] },
                        },
                        login: {
                          title: "Log in",
                          type: "array",
                          namedSlot: !0,
                          items: {
                            title: "Item",
                            oneOf: [{ $ref: "pfe-navigation-item" }],
                          },
                        },
                        "mobile-login": {
                          title: "Mobile link to log in page",
                          type: "array",
                          namedSlot: !0,
                          items: { title: "Item", oneOf: [{ $ref: "a" }] },
                        },
                        "site-switcher": {
                          title: "Site switcher",
                          type: "array",
                          namedSlot: !0,
                          items: {
                            title: "Item",
                            oneOf: [{ $ref: "pfe-navigation-item" }],
                          },
                        },
                      };
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-navigation";
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        fullWidth: {
                          title: "Full Width",
                          type: Boolean,
                          cascade: ["pfe-navigation-item"],
                        },
                        pfeFullWidth: {
                          type: Boolean,
                          cascade: ["pfe-navigation-item"],
                          prefix: !1,
                          alias: "fullWidth",
                        },
                      };
                    },
                  },
                ]
              ),
              createClass(PfeNavigation, [
                {
                  key: "connectedCallback",
                  value: function () {
                    var _this2 = this;
                    get(
                      PfeNavigation.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeNavigation.prototype),
                      "connectedCallback",
                      this
                    ).call(this),
                      Promise.all([
                        customElements.whenDefined(PfeNavigationItem.tag),
                        customElements.whenDefined(PfeNavigationMain.tag),
                      ]).then(function () {
                        _this2.hasLightDOM()
                          ? ((_this2.breakpoints = {
                              main: [0, 1023],
                              search: [640],
                              "mobile-search": [0, 639],
                              language: [640],
                              "mobile-language": [0, 639],
                              login: [640],
                              "mobile-login": [0, 639],
                            }),
                            _this2._init(),
                            window.addEventListener(
                              "resize",
                              _this2._resizeHandler
                            ))
                          : console.error(
                              "This component does not have any light DOM children.  Please check documentation for requirements."
                            ),
                          _this2._observer.observe(_this2, { childList: !0 });
                      });
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    get(
                      PfeNavigation.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeNavigation.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this),
                      window.removeEventListener("resize", this._resizeHandler),
                      this.hasAttribute("pfe-close-on-click") &&
                        "external" ===
                          this.getAttribute("pfe-close-on-click") &&
                        document.removeEventListener(
                          "click",
                          this._outsideListener
                        ),
                      this.hasAttribute("pfe-sticky") &&
                        "false" != this.getAttribute("pfe-sticky") &&
                        window.removeEventListener(
                          "scroll",
                          this._stickyHandler
                        ),
                      this._menuItem.shadowRoot
                        .querySelector(".pfe-navigation-item__trigger")
                        .removeEventListener(
                          "click",
                          this._menuItemClickHandler
                        ),
                      this._overlay.removeEventListener(
                        "click",
                        this._overlayClickHandler
                      ),
                      this._observer.disconnect();
                  },
                },
                {
                  key: "_resizeHandler",
                  value: function (event) {
                    var _this3 = this;
                    this._setVisibility(this.offsetWidth),
                      this._activeNavigationItems.forEach(function (item) {
                        item.expanded && !item.visible
                          ? ((item.expanded = !1),
                            (_this3._activeNavigationItems =
                              _this3._activeNavigationItems.filter(function (
                                i
                              ) {
                                return i !== item;
                              })))
                          : item.expanded &&
                            item.parent &&
                            item.parent.visible &&
                            item.parent === _this3._menuItem &&
                            window.innerWidth <= _this3.breakpoints.main[1] &&
                            ((item.parent.expanded = !0),
                            _this3._activeNavigationItems.includes(
                              item.parent
                            ) ||
                              _this3._activeNavigationItems.push(item.parent));
                      }),
                      (this.overlay = this._activeNavigationItems.length > 0),
                      this._reportHeight();
                  },
                },
                {
                  key: "_stickyHandler",
                  value: function () {
                    window.pageYOffset >= this.top
                      ? this.classList.add("pfe-sticky")
                      : this.classList.remove("pfe-sticky");
                  },
                },
                {
                  key: "_outsideListener",
                  value: function (event) {
                    var isSelf = event.target === this,
                      isChild = event.target.closest("pfe-navigation"),
                      insideWrapper = event.target.tagName.includes("-")
                        ? event.target.shadowRoot.querySelector(
                            "pfe-navigation"
                          )
                        : null;
                    isSelf ||
                      isChild ||
                      insideWrapper ||
                      this._activeNavigationItems.map(function (item) {
                        return item.close();
                      });
                  },
                },
                {
                  key: "_setVisibility",
                  value: function (width) {
                    var _this4 = this;
                    Object.keys(this.breakpoints).forEach(function (label) {
                      var bps = _this4.breakpoints[label],
                        start = bps[0],
                        end = bps[1],
                        isVisible = !1;
                      _this4.slots[label] &&
                        _this4.slots[label].nodes &&
                        _this4.slots[label].nodes.length > 0 &&
                        (width >= start &&
                          (!end || (end && width <= end)) &&
                          (isVisible = !0),
                        _this4.slots[label].nodes.forEach(function (node) {
                          switch (label) {
                            case "main":
                              isVisible
                                ? (node.removeAttribute("show_content"),
                                  _this4._menuItem.removeAttribute(
                                    "show_links"
                                  ))
                                : (node.setAttribute("show_content", ""),
                                  _this4._menuItem.setAttribute(
                                    "show_links",
                                    ""
                                  ),
                                  (_this4._menuItem.expanded = !1),
                                  _this4._menuItem.tray.removeAttribute(
                                    "hidden"
                                  ),
                                  (_this4._activeNavigationItems =
                                    _this4._activeNavigationItems.filter(
                                      function (item) {
                                        return item !== _this4._menuItem;
                                      }
                                    ))),
                                node.navItems.forEach(function (item) {
                                  isVisible
                                    ? item.removeAttribute("parent_hidden")
                                    : item.setAttribute("parent_hidden", "");
                                });
                              break;
                            case (label.match(/^mobile/) || {}).input:
                              isVisible
                                ? (_this4._menuItem.setAttribute(
                                    "show_" + label.slice(7),
                                    ""
                                  ),
                                  _this4._slots[label.slice(7)] &&
                                    _this4._slots[
                                      label.slice(7)
                                    ].removeAttribute("hidden"),
                                  node.removeAttribute("hidden"))
                                : (_this4._menuItem.removeAttribute(
                                    "show_" + label.slice(7)
                                  ),
                                  _this4._slots[label.slice(7)] &&
                                    _this4._slots[label.slice(7)].setAttribute(
                                      "hidden",
                                      ""
                                    ),
                                  node.setAttribute("hidden", ""));
                              break;
                            default:
                              node.visible = isVisible;
                          }
                        }));
                    });
                  },
                },
                {
                  key: "_init",
                  value: function () {
                    var _this5 = this;
                    window.ShadyCSS && this._observer.disconnect(),
                      (this.top = this.getBoundingClientRect().top || 0),
                      (this.navItems = [].concat(
                        toConsumableArray(
                          this.querySelectorAll("pfe-navigation-item")
                        )
                      )),
                      this._menuItem && this.navItems.push(this._menuItem),
                      this.navItems.forEach(function (item) {
                        item.navigationWrapper = _this5;
                      });
                    var mainNav = this.querySelector("pfe-navigation-main");
                    mainNav &&
                      mainNav.navItems &&
                      mainNav.navItems.forEach(function (item) {
                        item.parent = _this5._menuItem;
                      }),
                      this._setVisibility(this.offsetWidth),
                      this.hasAttribute("pfe-sticky") &&
                        "false" != this.getAttribute("pfe-sticky") &&
                        (this._stickyHandler(),
                        window.addEventListener("scroll", this._stickyHandler)),
                      this.hasAttribute("pfe-close-on-click") &&
                        "external" ===
                          this.getAttribute("pfe-close-on-click") &&
                        document.addEventListener(
                          "click",
                          this._outsideListener
                        ),
                      this._reportHeight(),
                      window.ShadyCSS &&
                        setTimeout(function () {
                          _this5._observer.observe(_this5, {
                            childList: !0,
                            subtree: !0,
                            characterData: !0,
                          });
                        }, 0);
                  },
                },
                {
                  key: "_menuItemClickHandler",
                  value: function (event) {
                    "false" ===
                      event.currentTarget.getAttribute("aria-expanded") &&
                      (this._activeNavigationItems.map(function (item) {
                        return item.close();
                      }),
                      (this.overlay = !1));
                  },
                },
                {
                  key: "_overlayClickHandler",
                  value: function (event) {
                    this._activeNavigationItems.map(function (item) {
                      return item.close();
                    }),
                      (this.overlay = !1);
                  },
                },
                {
                  key: "_reportHeight",
                  value: function () {
                    var cssVarName = "--" + this.tag + "--Height--actual",
                      height = this.clientHeight + "px";
                    document.body.style.setProperty(cssVarName, height);
                  },
                },
              ]),
              PfeNavigation
            );
          })();
        return (
          PFElement.create(PfeNavigationItem),
          PFElement.create(PfeNavigationMain),
          PFElement.create(PfeNavigation),
          PfeNavigation
        );
      }),
      (function (global, factory) {
        "object" == typeof exports && "undefined" != typeof module
          ? (module.exports = factory(
              require("../../pfelement/dist/pfelement.umd")
            ))
          : "function" == typeof define && define.amd
          ? define(["../../pfelement/dist/pfelement.umd"], factory)
          : ((global = global || self).PfeBand = factory(global.PFElement));
      })(this, function (PFElement) {
        "use strict";
        PFElement =
          PFElement &&
          Object.prototype.hasOwnProperty.call(PFElement, "default")
            ? PFElement.default
            : PFElement;
        var classCallCheck = function (instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError("Cannot call a class as a function");
          },
          createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                (descriptor.enumerable = descriptor.enumerable || !1),
                  (descriptor.configurable = !0),
                  "value" in descriptor && (descriptor.writable = !0),
                  Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
              );
            };
          })(),
          possibleConstructorReturn = function (self, call) {
            if (!self)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !call ||
              ("object" != typeof call && "function" != typeof call)
              ? self
              : call;
          },
          PfeBand = (function (_PFElement) {
            function PfeBand() {
              return (
                classCallCheck(this, PfeBand),
                possibleConstructorReturn(
                  this,
                  (PfeBand.__proto__ || Object.getPrototypeOf(PfeBand)).call(
                    this,
                    PfeBand,
                    { type: PfeBand.PfeType }
                  )
                )
              );
            }
            return (
              (function (subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof superClass
                  );
                (subClass.prototype = Object.create(
                  superClass && superClass.prototype,
                  {
                    constructor: {
                      value: subClass,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  }
                )),
                  superClass &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(subClass, superClass)
                      : (subClass.__proto__ = superClass));
              })(PfeBand, PFElement),
              createClass(
                PfeBand,
                [
                  {
                    key: "html",
                    get: function () {
                      return (
                        '\n<style>@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([color=accent]),:host([color=base]),:host([color=complement]),:host([color=darker]),:host([color=darkest]),:host([color=lighter]),:host([color=lightest]){background-color:#fff!important;color:#151515!important}}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host{color:#151515!important}}:host{--context:var(--pfe-band--context, light);display:block;border:1px solid transparent;border:var(--pfe-band--Border,var(--pfe-theme--surface--border-width,1px) var(--pfe-theme--surface--border-style,solid) transparent);background-color:#f0f0f0;background-color:var(--pfe-band--BackgroundColor,var(--pfe-theme--color--surface--base,#f0f0f0));background-position:center center;background-position:var(--pfe-band--BackgroundPosition,center center);color:#3c3f42;color:var(--pfe-broadcasted--text,#3c3f42);padding:calc(calc(1rem * 4)/ 2) calc(1rem * 1);padding:calc(var(--pfe-band--Padding--vertical,calc(var(--pfe-theme--container-spacer,1rem) * 4))/ 2) var(--pfe-band--Padding--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 1))}@media (min-width:576px){:host{padding:calc(1rem * 4) calc(1rem * 1);padding:var(--pfe-band--Padding,var(--pfe-band--Padding--vertical,calc(var(--pfe-theme--container-spacer,1rem) * 4)) var(--pfe-band--Padding--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 1)))}}:host *,:host ::after,:host ::before{-webkit-box-sizing:border-box;box-sizing:border-box}@media print{:host{background-color:#fff!important;background-image:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}}@media print{:host{border-radius:3px;border:1px solid #d2d2d2;padding:2rem 1rem}}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host{background-color:#fff!important;background-image:none!important;color:#151515!important;padding:2rem 1rem}}@media screen and (-ms-high-contrast:active) and (min-width:576px),screen and (-ms-high-contrast:none) and (min-width:576px){:host{padding:4rem 1rem}}:host([on=dark]){--pfe-broadcasted--text:var(--pfe-theme--color--text--on-dark, #fff);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted--on-dark, #d2d2d2);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-dark, #73bcf7);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-dark, #bee1f4);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-dark, #bee1f4);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-dark, #bee1f4);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-dark, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-dark, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-dark, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-dark, none)}:host([on=saturated]){--pfe-broadcasted--text:var(--pfe-theme--color--text--on-saturated, #fff);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted--on-saturated, #d2d2d2);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-saturated, #fff);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-saturated, #fafafa);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-saturated, #fafafa);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-saturated, #d2d2d2);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-saturated, underline);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-saturated, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-saturated, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-saturated, underline)}:host([on=light]){--pfe-broadcasted--text:var(--pfe-theme--color--text, #151515);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted, #6a6e73);--pfe-broadcasted--link:var(--pfe-theme--color--link, #06c);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover, #004080);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus, #004080);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited, #6753ac);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited, none)}:host([color=darker]){--pfe-band--BackgroundColor:var(--pfe-theme--color--surface--darker, #3c3f42);--pfe-band--context:var(--pfe-theme--color--surface--darker--context, dark)}:host([color=darkest]){--pfe-band--BackgroundColor:var(--pfe-theme--color--surface--darkest, #151515);--pfe-band--context:var(--pfe-theme--color--surface--darkest--context, dark)}:host([color=base]){--pfe-band--BackgroundColor:var(--pfe-theme--color--surface--base, #f0f0f0);--pfe-band--context:var(--pfe-theme--color--surface--base--context, light)}:host([color=lighter]){--pfe-band--BackgroundColor:var(--pfe-theme--color--surface--lighter, #f0f0f0);--pfe-band--context:var(--pfe-theme--color--surface--lighter--context, light)}:host([color=lightest]){--pfe-band--BackgroundColor:var(--pfe-theme--color--surface--lightest, #fff);--pfe-band--context:var(--pfe-theme--color--surface--lightest--context, light)}:host([color=accent]){--pfe-band--BackgroundColor:var(--pfe-theme--color--surface--accent, #004080);--pfe-band--context:var(--pfe-theme--color--surface--accent--context, saturated)}:host([color=complement]){--pfe-band--BackgroundColor:var(--pfe-theme--color--surface--complement, #002952);--pfe-band--context:var(--pfe-theme--color--surface--complement--context, saturated)}:host([size=small]){padding:calc(calc(1rem * 4)/ 4) calc(1rem * 1);padding:calc(var(--pfe-band--Padding--vertical,calc(var(--pfe-theme--container-spacer,1rem) * 4))/ 4) var(--pfe-band--Padding--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 1))}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([size=small]){padding:1rem}}.pfe-band__container{margin:0 auto}:host(:not([full-width])) .pfe-band__container{max-width:auto;max-width:var(--pfe-band--Width,auto)}@media screen and (min-width:768px){:host(:not([full-width])) .pfe-band__container{max-width:calc(768px - (calc(1rem * 1) * 4));max-width:var(--pfe-band--Width,calc(768px - (var(--pfe-band--Padding--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 1)) * 4)))}}@media screen and (min-width:992px){:host(:not([full-width])) .pfe-band__container{max-width:calc(992px - (calc(1rem * 1) * 4));max-width:var(--pfe-band--Width,calc(992px - (var(--pfe-band--Padding--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 1)) * 4)))}}@media screen and (min-width:1200px){:host(:not([full-width])) .pfe-band__container{max-width:calc(1200px - (calc(1rem * 1) * 4));max-width:var(--pfe-band--Width,calc(1200px - (var(--pfe-band--Padding--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 1)) * 4)))}}@supports (display:grid){.pfe-band__container{display:-ms-grid;display:grid;-ms-grid-rows:auto;grid-template-rows:auto;-ms-grid-columns:auto;grid-template-columns:auto;grid-template-areas:"body";grid-row-gap:1rem;grid-row-gap:var(--pfe-band--gutter--vertical,var(--pfe-theme--container-spacer,1rem));row-gap:1rem;row-gap:var(--pfe-band--gutter--vertical,var(--pfe-theme--container-spacer,1rem));grid-column-gap:calc(1rem * 3);grid-column-gap:var(--pfe-band--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3));-webkit-column-gap:calc(1rem * 3);-moz-column-gap:calc(1rem * 3);column-gap:calc(1rem * 3);-webkit-column-gap:var(--pfe-band--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3));-moz-column-gap:var(--pfe-band--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3));column-gap:var(--pfe-band--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3))}:host([has_header]) .pfe-band__container{grid-template-areas:"header" "body"}:host([has_aside]) .pfe-band__container{grid-template-areas:"body" "aside"}@media (max-width:767px){:host([has_aside][aside-mobile=top]) .pfe-band__container{grid-template-areas:"aside" "body"}}@media (min-width:768px){:host([has_aside]) .pfe-band__container{grid-template-areas:"body aside"}:host([has_aside][aside-desktop=left]) .pfe-band__container{grid-template-areas:"aside body"}}:host([has_footer]) .pfe-band__container{grid-template-areas:"body" "footer"}:host([has_header][has_aside]) .pfe-band__container{grid-template-areas:"header" "body" "aside"}@media (max-width:767px){:host([has_header][has_aside][aside-mobile=top]) .pfe-band__container{grid-template-areas:"aside" "header" "body"}}@media (min-width:768px){:host([has_header][has_aside]) .pfe-band__container{grid-template-areas:"header header" "body aside"}:host([has_header][has_aside][aside-desktop=left]) .pfe-band__container{grid-template-areas:"header header" "aside body"}:host([has_header][has_aside][aside-height=full]) .pfe-band__container{grid-template-areas:"header aside" "body aside"}:host([has_header][has_aside][aside-desktop=left][aside-height=full]) .pfe-band__container{grid-template-areas:"aside header" "aside body"}}:host([has_header][has_footer]) .pfe-band__container{grid-template-areas:"header" "body" "footer"}:host([has_footer][has_aside]) .pfe-band__container{grid-template-areas:"body" "aside" "footer"}@media (max-width:767px){:host([has_footer][has_aside][aside-mobile=top]) .pfe-band__container{grid-template-areas:"aside" "body" "footer"}}@media (min-width:768px){:host([has_footer][has_aside]) .pfe-band__container{grid-template-areas:"body aside" "footer footer"}:host([has_footer][has_aside][aside-desktop=left]) .pfe-band__container{grid-template-areas:"aside body" "footer footer"}:host([has_footer][has_aside][aside-height=full]) .pfe-band__container{grid-template-areas:"body aside" "footer aside"}:host([has_footer][has_aside][aside-desktop=left][aside-height=full]) .pfe-band__container{grid-template-areas:"aside body" "aside footer"}}:host([has_header][has_aside][has_footer]) .pfe-band__container{grid-template-areas:"header" "body" "footer" "aside"}@media (max-width:767px){:host([has_header][has_aside][has_footer][aside-mobile=top]) .pfe-band__container{grid-template-areas:"aside" "header" "body" "footer"}}@media (min-width:768px){:host([has_header][has_aside][has_footer]) .pfe-band__container{grid-template-areas:"header header" "body aside" "footer footer"}:host([has_header][has_aside][has_footer][aside-desktop=left]) .pfe-band__container{grid-template-areas:"header header" "aside body" "footer footer"}:host([has_header][has_aside][has_footer][aside-height=full]) .pfe-band__container{grid-template-areas:"header aside" "body aside" "footer aside"}:host([has_header][has_aside][has_footer][aside-desktop=left][aside-height=full]) .pfe-band__container{grid-template-areas:"aside header" "aside body" "aside footer"}}@media (min-width:768px){.pfe-band__container{-ms-grid-rows:auto;grid-template-rows:auto;-ms-grid-columns:1fr;grid-template-columns:1fr}.pfe-band__container>:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}:host([has_aside]) .pfe-band__container{-ms-grid-rows:auto;grid-template-rows:auto;-ms-grid-columns:1fr 240px;grid-template-columns:1fr 240px;-ms-grid-columns:1fr var(--pfe-band--Width__aside--sm,240px);grid-template-columns:1fr var(--pfe-band--Width__aside--sm,240px)}:host([has_aside]) .pfe-band__container>:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}:host([has_aside]) .pfe-band__container>:nth-child(2){-ms-grid-row:1;-ms-grid-column:2}:host([has_aside]) .pfe-band__container>:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}:host([has_aside]) .pfe-band__container>:nth-child(2){-ms-grid-row:1;-ms-grid-column:2}:host([has_aside][aside-desktop=left]) .pfe-band__container{-ms-grid-rows:auto;grid-template-rows:auto;-ms-grid-columns:240px 1fr;grid-template-columns:240px 1fr;-ms-grid-columns:var(--pfe-band--Width__aside--sm,240px) 1fr;grid-template-columns:var(--pfe-band--Width__aside--sm,240px) 1fr}:host([has_aside][aside-desktop=left]) .pfe-band__container>:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}:host([has_aside][aside-desktop=left]) .pfe-band__container>:nth-child(2){-ms-grid-row:1;-ms-grid-column:2}:host([has_aside][aside-desktop=left]) .pfe-band__container>:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}:host([has_aside][aside-desktop=left]) .pfe-band__container>:nth-child(2){-ms-grid-row:1;-ms-grid-column:2}}@media (min-width:992px){:host([has_aside]) .pfe-band__container{-ms-grid-rows:auto;grid-template-rows:auto;-ms-grid-columns:1fr 300px;grid-template-columns:1fr 300px;-ms-grid-columns:var(--pfe-band--layout,1fr var(--pfe-band--Width__aside--lg,300px));grid-template-columns:var(--pfe-band--layout,1fr var(--pfe-band--Width__aside--lg,300px))}:host([has_aside]) .pfe-band__container>:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}:host([has_aside]) .pfe-band__container>:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}:host([has_aside]) .pfe-band__container>:nth-child(2){-ms-grid-row:1;-ms-grid-column:2}:host([has_aside][aside-desktop=left]) .pfe-band__container{-ms-grid-rows:auto;grid-template-rows:auto;-ms-grid-columns:300px 1fr;grid-template-columns:300px 1fr;-ms-grid-columns:var(--pfe-band--layout,var(--pfe-band--Width__aside--lg,300px) 1fr);grid-template-columns:var(--pfe-band--layout,var(--pfe-band--Width__aside--lg,300px) 1fr)}:host([has_aside][aside-desktop=left]) .pfe-band__container>:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}:host([has_aside][aside-desktop=left]) .pfe-band__container>:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}:host([has_aside][aside-desktop=left]) .pfe-band__container>:nth-child(2){-ms-grid-row:1;-ms-grid-column:2}}}:host([full-width]) .pfe-band__container{max-width:100%;max-width:var(--pfe-band--Width,100%)}@media screen and (min-width:768px){:host([full-width]) .pfe-band__container{width:calc(100% - calc(1rem * 1) * 4);width:calc(100% - var(--pfe-band--Padding--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 1)) * 4)}}@media screen and (min-width:992px){:host([full-width]) .pfe-band__container{width:calc(100% - calc(1rem * 1) * 4);width:calc(100% - var(--pfe-band--Padding--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 1)) * 4)}}@media screen and (min-width:1200px){:host([full-width]) .pfe-band__container{width:calc(100% - calc(1rem * 1) * 8);width:calc(100% - var(--pfe-band--Padding--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 1)) * 8)}}.pfe-band__container,.pfe-band__wrapper{width:100%;margin-bottom:calc(-1 * 1rem);margin-bottom:calc(-1 * var(--pfe-band--gutter--vertical,var(--pfe-theme--container-spacer,1rem)));margin-right:calc(-1 * 1rem);margin-right:calc(-1 * var(--pfe-band--gutter--vertical,var(--pfe-theme--container-spacer,1rem)))}@supports (display:grid){.pfe-band__container,.pfe-band__wrapper{margin:0 auto}}:host([full-width]) .pfe-band__wrapper{max-width:100%;max-width:var(--pfe-band--Width,100%)}.pfe-band__aside{height:100%}slot[name=pfe-band--aside]{display:block;height:100%}.pfe-band__header{margin-bottom:1rem;margin-bottom:var(--pfe-band__header--gutter--vertical,var(--pfe-theme--container-spacer,1rem));margin-right:1rem;margin-right:var(--pfe-band__header--gutter--vertical,var(--pfe-theme--container-spacer,1rem))}@supports (display:grid){.pfe-band__header{-ms-grid-row:1;-ms-grid-column:1;grid-area:header;margin-bottom:0;margin-right:0}:host([has_header][has_aside]) .pfe-band__container>.pfe-band__header{-ms-grid-row:1;-ms-grid-column:1}:host([has_header][has_footer]) .pfe-band__container>.pfe-band__header{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:1}:host([has_header][has_aside][has_footer]) .pfe-band__container>.pfe-band__header{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:1}:host([use-grid]) .pfe-band__header{display:-ms-grid;display:grid;-ms-grid-rows:auto;grid-template-rows:auto;-ms-grid-columns:1fr;grid-template-columns:1fr;-ms-grid-columns:var(--pfe-band__header--layout,1fr);grid-template-columns:var(--pfe-band__header--layout,1fr);grid-row-gap:1rem;grid-row-gap:var(--pfe-band__header--gutter--vertical,var(--pfe-theme--container-spacer,1rem));row-gap:1rem;row-gap:var(--pfe-band__header--gutter--vertical,var(--pfe-theme--container-spacer,1rem));grid-column-gap:calc(1rem * 3);grid-column-gap:var(--pfe-band__header--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3));-webkit-column-gap:calc(1rem * 3);-moz-column-gap:calc(1rem * 3);column-gap:calc(1rem * 3);-webkit-column-gap:var(--pfe-band__header--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3));-moz-column-gap:var(--pfe-band__header--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3));column-gap:var(--pfe-band__header--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3))}:host([use-grid]) .pfe-band__header>:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}:host([use-grid]) .pfe-band__header>:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}}.pfe-band__body{margin-bottom:1rem;margin-bottom:var(--pfe-band__body--gutter--vertical,var(--pfe-theme--container-spacer,1rem));margin-right:1rem;margin-right:var(--pfe-band__body--gutter--vertical,var(--pfe-theme--container-spacer,1rem))}@supports (display:grid){.pfe-band__body{-ms-grid-row:1;-ms-grid-column:1;grid-area:body;margin-bottom:0;margin-right:0}:host([has_header]) .pfe-band__container>.pfe-band__body{-ms-grid-row:2;-ms-grid-column:1}:host([has_aside]) .pfe-band__container>.pfe-band__body{-ms-grid-row:1;-ms-grid-column:1}:host([has_footer]) .pfe-band__container>.pfe-band__body{-ms-grid-row:1;-ms-grid-column:1}:host([has_header][has_aside]) .pfe-band__container>.pfe-band__body{-ms-grid-row:2;-ms-grid-column:1}:host([has_header][has_footer]) .pfe-band__container>.pfe-band__body{-ms-grid-row:2;-ms-grid-column:1}:host([has_footer][has_aside]) .pfe-band__container>.pfe-band__body{-ms-grid-row:1;-ms-grid-column:1}:host([has_header][has_aside][has_footer]) .pfe-band__container>.pfe-band__body{-ms-grid-row:2;-ms-grid-column:1}:host([use-grid]) .pfe-band__body{display:-ms-grid;display:grid;-ms-grid-rows:auto;grid-template-rows:auto;-ms-grid-columns:1fr;grid-template-columns:1fr;-ms-grid-columns:var(--pfe-band__body--layout,1fr);grid-template-columns:var(--pfe-band__body--layout,1fr);grid-row-gap:1rem;grid-row-gap:var(--pfe-band__body--gutter--vertical,var(--pfe-theme--container-spacer,1rem));row-gap:1rem;row-gap:var(--pfe-band__body--gutter--vertical,var(--pfe-theme--container-spacer,1rem));grid-column-gap:calc(1rem * 3);grid-column-gap:var(--pfe-band__body--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3));-webkit-column-gap:calc(1rem * 3);-moz-column-gap:calc(1rem * 3);column-gap:calc(1rem * 3);-webkit-column-gap:var(--pfe-band__body--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3));-moz-column-gap:var(--pfe-band__body--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3));column-gap:var(--pfe-band__body--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3))}:host([use-grid]) .pfe-band__body>:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}:host([use-grid]) .pfe-band__body>:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}}.pfe-band__footer{margin-bottom:1rem;margin-bottom:var(--pfe-band__footer--gutter--vertical,var(--pfe-theme--container-spacer,1rem));margin-right:1rem;margin-right:var(--pfe-band__footer--gutter--vertical,var(--pfe-theme--container-spacer,1rem))}@supports (display:grid){.pfe-band__footer{-ms-grid-row:2;-ms-grid-column:1;grid-area:footer;margin-bottom:0;margin-right:0}:host([has_header][has_footer]) .pfe-band__container>.pfe-band__footer{-ms-grid-row:3;-ms-grid-column:1}:host([has_footer][has_aside]) .pfe-band__container>.pfe-band__footer{-ms-grid-row:3;-ms-grid-column:1}:host([has_header][has_aside][has_footer]) .pfe-band__container>.pfe-band__footer{-ms-grid-row:3;-ms-grid-column:1;-ms-grid-column-span:1}:host([use-grid]) .pfe-band__footer{display:-ms-grid;display:grid;-ms-grid-rows:auto;grid-template-rows:auto;-ms-grid-columns:1fr;grid-template-columns:1fr;-ms-grid-columns:var(--pfe-band__footer--layout,1fr);grid-template-columns:var(--pfe-band__footer--layout,1fr);grid-row-gap:1rem;grid-row-gap:var(--pfe-band__footer--gutter--vertical,var(--pfe-theme--container-spacer,1rem));row-gap:1rem;row-gap:var(--pfe-band__footer--gutter--vertical,var(--pfe-theme--container-spacer,1rem));grid-column-gap:calc(1rem * 3);grid-column-gap:var(--pfe-band__footer--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3));-webkit-column-gap:calc(1rem * 3);-moz-column-gap:calc(1rem * 3);column-gap:calc(1rem * 3);-webkit-column-gap:var(--pfe-band__footer--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3));-moz-column-gap:var(--pfe-band__footer--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3));column-gap:var(--pfe-band__footer--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3))}:host([use-grid]) .pfe-band__footer>:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}:host([use-grid]) .pfe-band__footer>:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}}.pfe-band__aside{margin-bottom:1rem;margin-bottom:var(--pfe-band__aside--gutter--vertical,var(--pfe-theme--container-spacer,1rem));margin-right:1rem;margin-right:var(--pfe-band__aside--gutter--vertical,var(--pfe-theme--container-spacer,1rem))}@supports (display:grid){.pfe-band__aside{-ms-grid-row:2;-ms-grid-column:1;grid-area:aside;margin-bottom:0;margin-right:0}:host([has_header][has_aside]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:3;-ms-grid-column:1}:host([has_footer][has_aside]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:2;-ms-grid-row-span:1;-ms-grid-column:1}:host([has_header][has_aside][has_footer]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:4;-ms-grid-row-span:1;-ms-grid-column:1}@media (max-width:767px){:host([has_header][has_aside][aside-mobile=top]) .pfe-band__container>.pfe-band__header{-ms-grid-row:2;-ms-grid-column:1}:host([has_header][has_aside][has_footer][aside-mobile=top]) .pfe-band__container>.pfe-band__header{-ms-grid-row:2;-ms-grid-column:1;-ms-grid-column-span:1}:host([has_aside][aside-mobile=top]) .pfe-band__container>.pfe-band__body{-ms-grid-row:2;-ms-grid-column:1}:host([has_header][has_aside][aside-mobile=top]) .pfe-band__container>.pfe-band__body{-ms-grid-row:3;-ms-grid-column:1}:host([has_footer][has_aside][aside-mobile=top]) .pfe-band__container>.pfe-band__body{-ms-grid-row:2;-ms-grid-column:1}:host([has_header][has_aside][has_footer][aside-mobile=top]) .pfe-band__container>.pfe-band__body{-ms-grid-row:3;-ms-grid-column:1}:host([has_footer][has_aside][aside-mobile=top]) .pfe-band__container>.pfe-band__footer{-ms-grid-row:3;-ms-grid-column:1}:host([has_header][has_aside][has_footer][aside-mobile=top]) .pfe-band__container>.pfe-band__footer{-ms-grid-row:4;-ms-grid-column:1;-ms-grid-column-span:1}:host([has_aside][aside-mobile=top]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:1;-ms-grid-column:1}:host([has_header][has_aside][aside-mobile=top]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:1;-ms-grid-column:1}:host([has_footer][has_aside][aside-mobile=top]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:1;-ms-grid-row-span:1;-ms-grid-column:1}:host([has_header][has_aside][has_footer][aside-mobile=top]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:1;-ms-grid-row-span:1;-ms-grid-column:1}}@media (min-width:768px){:host([has_header][has_aside]) .pfe-band__container>.pfe-band__header{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2}:host([has_header][has_aside][aside-desktop=left]) .pfe-band__container>.pfe-band__header{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2}:host([has_header][has_aside][aside-height=full]) .pfe-band__container>.pfe-band__header{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:1}:host([has_header][has_aside][aside-desktop=left][aside-height=full]) .pfe-band__container>.pfe-band__header{-ms-grid-row:1;-ms-grid-column:2;-ms-grid-column-span:1}:host([has_header][has_aside][has_footer]) .pfe-band__container>.pfe-band__header{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2}:host([has_header][has_aside][has_footer][aside-desktop=left]) .pfe-band__container>.pfe-band__header{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2}:host([has_header][has_aside][has_footer][aside-height=full]) .pfe-band__container>.pfe-band__header{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:1}:host([has_header][has_aside][has_footer][aside-desktop=left][aside-height=full]) .pfe-band__container>.pfe-band__header{-ms-grid-row:1;-ms-grid-column:2;-ms-grid-column-span:1}:host([has_aside]) .pfe-band__container>.pfe-band__body{-ms-grid-row:1;-ms-grid-column:1}:host([has_aside][aside-desktop=left]) .pfe-band__container>.pfe-band__body{-ms-grid-row:1;-ms-grid-column:2}:host([has_header][has_aside]) .pfe-band__container>.pfe-band__body{-ms-grid-row:2;-ms-grid-column:1}:host([has_header][has_aside][aside-desktop=left]) .pfe-band__container>.pfe-band__body{-ms-grid-row:2;-ms-grid-column:2}:host([has_header][has_aside][aside-height=full]) .pfe-band__container>.pfe-band__body{-ms-grid-row:2;-ms-grid-column:1}:host([has_header][has_aside][aside-desktop=left][aside-height=full]) .pfe-band__container>.pfe-band__body{-ms-grid-row:2;-ms-grid-column:2}:host([has_footer][has_aside]) .pfe-band__container>.pfe-band__body{-ms-grid-row:1;-ms-grid-column:1}:host([has_footer][has_aside][aside-desktop=left]) .pfe-band__container>.pfe-band__body{-ms-grid-row:1;-ms-grid-column:2}:host([has_footer][has_aside][aside-height=full]) .pfe-band__container>.pfe-band__body{-ms-grid-row:1;-ms-grid-column:1}:host([has_footer][has_aside][aside-desktop=left][aside-height=full]) .pfe-band__container>.pfe-band__body{-ms-grid-row:1;-ms-grid-column:2}:host([has_header][has_aside][has_footer]) .pfe-band__container>.pfe-band__body{-ms-grid-row:2;-ms-grid-column:1}:host([has_header][has_aside][has_footer][aside-desktop=left]) .pfe-band__container>.pfe-band__body{-ms-grid-row:2;-ms-grid-column:2}:host([has_header][has_aside][has_footer][aside-height=full]) .pfe-band__container>.pfe-band__body{-ms-grid-row:2;-ms-grid-column:1}:host([has_header][has_aside][has_footer][aside-desktop=left][aside-height=full]) .pfe-band__container>.pfe-band__body{-ms-grid-row:2;-ms-grid-column:2}:host([has_footer][has_aside]) .pfe-band__container>.pfe-band__footer{-ms-grid-row:2;-ms-grid-column:1;-ms-grid-column-span:2}:host([has_footer][has_aside][aside-desktop=left]) .pfe-band__container>.pfe-band__footer{-ms-grid-row:2;-ms-grid-column:1;-ms-grid-column-span:2}:host([has_footer][has_aside][aside-height=full]) .pfe-band__container>.pfe-band__footer{-ms-grid-row:2;-ms-grid-column:1;-ms-grid-column-span:1}:host([has_footer][has_aside][aside-desktop=left][aside-height=full]) .pfe-band__container>.pfe-band__footer{-ms-grid-row:2;-ms-grid-column:2;-ms-grid-column-span:1}:host([has_header][has_aside][has_footer]) .pfe-band__container>.pfe-band__footer{-ms-grid-row:3;-ms-grid-column:1;-ms-grid-column-span:2}:host([has_header][has_aside][has_footer][aside-desktop=left]) .pfe-band__container>.pfe-band__footer{-ms-grid-row:3;-ms-grid-column:1;-ms-grid-column-span:2}:host([has_header][has_aside][has_footer][aside-height=full]) .pfe-band__container>.pfe-band__footer{-ms-grid-row:3;-ms-grid-column:1;-ms-grid-column-span:1}:host([has_header][has_aside][has_footer][aside-desktop=left][aside-height=full]) .pfe-band__container>.pfe-band__footer{-ms-grid-row:3;-ms-grid-column:2;-ms-grid-column-span:1}.pfe-band__aside{-ms-grid-row:1;-ms-grid-column:2}:host([has_aside][aside-desktop=left]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:1;-ms-grid-column:1}:host([has_header][has_aside]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:2;-ms-grid-column:2}:host([has_header][has_aside][aside-desktop=left]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:2;-ms-grid-column:1}:host([has_header][has_aside][aside-height=full]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:2}:host([has_header][has_aside][aside-desktop=left][aside-height=full]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:1}:host([has_footer][has_aside]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:1;-ms-grid-row-span:1;-ms-grid-column:2}:host([has_footer][has_aside][aside-desktop=left]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:1;-ms-grid-row-span:1;-ms-grid-column:1}:host([has_footer][has_aside][aside-height=full]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:2}:host([has_footer][has_aside][aside-desktop=left][aside-height=full]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:1}:host([has_header][has_aside][has_footer]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:2;-ms-grid-row-span:1;-ms-grid-column:2}:host([has_header][has_aside][has_footer][aside-desktop=left]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:2;-ms-grid-row-span:1;-ms-grid-column:1}:host([has_header][has_aside][has_footer][aside-height=full]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:1;-ms-grid-row-span:3;-ms-grid-column:2}:host([has_header][has_aside][has_footer][aside-desktop=left][aside-height=full]) .pfe-band__container>.pfe-band__aside{-ms-grid-row:1;-ms-grid-row-span:3;-ms-grid-column:1}}:host([use-grid]) .pfe-band__aside{display:-ms-grid;display:grid;-ms-grid-rows:auto;grid-template-rows:auto;-ms-grid-columns:1fr;grid-template-columns:1fr;-ms-grid-columns:var(--pfe-band__aside--layout,1fr);grid-template-columns:var(--pfe-band__aside--layout,1fr);grid-row-gap:1rem;grid-row-gap:var(--pfe-band__aside--gutter--vertical,var(--pfe-theme--container-spacer,1rem));row-gap:1rem;row-gap:var(--pfe-band__aside--gutter--vertical,var(--pfe-theme--container-spacer,1rem));grid-column-gap:calc(1rem * 3);grid-column-gap:var(--pfe-band__aside--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3));-webkit-column-gap:calc(1rem * 3);-moz-column-gap:calc(1rem * 3);column-gap:calc(1rem * 3);-webkit-column-gap:var(--pfe-band__aside--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3));-moz-column-gap:var(--pfe-band__aside--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3));column-gap:var(--pfe-band__aside--gutter--horizontal,calc(var(--pfe-theme--container-spacer,1rem) * 3))}:host([use-grid]) .pfe-band__aside>:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}:host([use-grid]) .pfe-band__aside>:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.pfe-band__container::after{clear:both;content:"";display:table}.pfe-band__body,.pfe-band__footer,.pfe-band__header{float:left}:host([aside-mobile=top]) .pfe-band__body,:host([aside-mobile=top]) .pfe-band__footer,:host([aside-mobile=top]) .pfe-band__header{float:right}:host(:not([aside-height=full])) .pfe-band__body,:host(:not([aside-height=full])) .pfe-band__footer,:host(:not([aside-height=full])) .pfe-band__header{width:60%}.pfe-band__footer{clear:both}.pfe-band__aside{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;float:right;width:35%;margin:0 1.9%}:host([aside-desktop=left]) .pfe-band__aside{float:left}.pfe-band__wrapper{width:60%;float:left}:host([aside-desktop=left]) .pfe-band__wrapper{float:right}} /*# sourceMappingURL=pfe-band.min.css.map */</style>\n<section class="pfe-band__container">\n  ' +
                        (this.hasSlot("pfe-band--aside") &&
                        "top" === this.asidePosition.mobile
                          ? '<aside class="pfe-band__aside">\n    <slot name="pfe-band--aside"></slot>\n  </aside>'
                          : "") +
                        "\n  " +
                        ("full" === this.asideHeight
                          ? '<div class="pfe-band__wrapper">'
                          : "") +
                        "\n    " +
                        (this.hasSlot("pfe-band--header")
                          ? '<header class="pfe-band__header">\n      <slot name="pfe-band--header"></slot>\n    </header>'
                          : "") +
                        '\n    <article class="pfe-band__body">\n      <slot></slot>\n    </article>\n    ' +
                        ("full" !== this.asideHeight &&
                        this.hasSlot("pfe-band--aside") &&
                        "top" !== this.asidePosition.mobile
                          ? '<aside\n      class="pfe-band__aside">\n      <slot name="pfe-band--aside"></slot>\n    </aside>'
                          : "") +
                        "\n    " +
                        (this.hasSlot("pfe-band--footer")
                          ? '<footer class="pfe-band__footer">\n      <slot name="pfe-band--footer"></slot>\n    </footer>'
                          : "") +
                        "\n    " +
                        ("full" === this.asideHeight ? "</div>" : "") +
                        "\n  " +
                        ("full" === this.asideHeight &&
                        this.hasSlot("pfe-band--aside") &&
                        "top" !== this.asidePosition.mobile
                          ? '<aside\n    class="pfe-band__aside">\n    <slot name="pfe-band--aside"></slot>\n  </aside>'
                          : "") +
                        "\n</section>"
                      );
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-band.html";
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-band.scss";
                    },
                  },
                  {
                    key: "asidePosition",
                    get: function () {
                      return {
                        desktop: this.asideDesktop,
                        mobile: this.asideMobile,
                        height: this.asideHeight,
                      };
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-band";
                    },
                  },
                  {
                    key: "meta",
                    get: function () {
                      return {
                        title: "Band",
                        description:
                          "This element creates a header, body, footer, and aside region in which to place content or other components.",
                      };
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        imgSrc: {
                          title: "Background image",
                          type: String,
                          observer: "_imgSrcChanged",
                        },
                        oldImgSrc: { alias: "imgSrc", attr: "pfe-img-src" },
                        color: {
                          title: "Background color",
                          type: String,
                          values: [
                            "lightest",
                            "base",
                            "darker",
                            "darkest",
                            "complement",
                            "accent",
                          ],
                          default: "base",
                          observer: "_colorChanged",
                        },
                        oldColor: { alias: "color", attr: "pfe-color" },
                        asideDesktop: {
                          title: "side positioning (desktop)",
                          type: String,
                          values: ["right", "left"],
                          default: "right",
                        },
                        oldAsideDesktop: {
                          alias: "asideDesktop",
                          attr: "pfe-aside-desktop",
                        },
                        asideMobile: {
                          title: "Aside positioning (mobile)",
                          type: String,
                          values: ["top", "bottom"],
                          default: "bottom",
                        },
                        oldAsideMobile: {
                          alias: "asideMobile",
                          attr: "pfe-aside-mobile",
                        },
                        asideHeight: {
                          title: "Aside height",
                          type: String,
                          values: ["full", "body"],
                          default: "body",
                        },
                        oldAsideHeight: {
                          alias: "asideHeight",
                          attr: "pfe-aside-height",
                        },
                        size: {
                          title: "Padding size",
                          type: String,
                          values: ["small"],
                        },
                        oldSize: { alias: "size", attr: "pfe-size" },
                        useGrid: {
                          title:
                            "Default grid on for the light DOM regions (header, body, footer, aside)",
                          type: Boolean,
                          default: !1,
                        },
                      };
                    },
                  },
                  {
                    key: "slots",
                    get: function () {
                      return {
                        header: {
                          title: "Header",
                          type: "array",
                          namedSlot: !0,
                          maxItems: 3,
                          items: { $ref: "raw" },
                        },
                        body: {
                          title: "Body",
                          type: "array",
                          namedSlot: !1,
                          items: {
                            oneOf: [{ $ref: "pfe-card" }, { $ref: "raw" }],
                          },
                        },
                        footer: {
                          title: "Footer",
                          type: "array",
                          namedSlot: !0,
                          maxItems: 3,
                          items: {
                            oneOf: [{ $ref: "pfe-cta" }, { $ref: "raw" }],
                          },
                        },
                        aside: {
                          title: "Aside",
                          type: "array",
                          namedSlot: !0,
                          maxItems: 5,
                          items: {
                            oneOf: [{ $ref: "pfe-card" }, { $ref: "raw" }],
                          },
                        },
                      };
                    },
                  },
                  {
                    key: "PfeType",
                    get: function () {
                      return PFElement.PfeTypes.Container;
                    },
                  },
                ]
              ),
              createClass(PfeBand, [
                {
                  key: "_colorChanged",
                  value: function () {
                    this.resetContext();
                  },
                },
                {
                  key: "_imgSrcChanged",
                  value: function (oldVal, newVal) {
                    this.style.backgroundImage = newVal
                      ? "url('" + newVal + "')"
                      : "";
                  },
                },
              ]),
              PfeBand
            );
          })();
        return PFElement.create(PfeBand), PfeBand;
      }),
      (function (global, factory) {
        "object" == typeof exports && "undefined" != typeof module
          ? (module.exports = factory(
              require("../../pfelement/dist/pfelement.umd")
            ))
          : "function" == typeof define && define.amd
          ? define(["../../pfelement/dist/pfelement.umd"], factory)
          : ((global = global || self).PfeCard = factory(global.PFElement));
      })(this, function (PFElement) {
        "use strict";
        PFElement =
          PFElement &&
          Object.prototype.hasOwnProperty.call(PFElement, "default")
            ? PFElement.default
            : PFElement;
        var classCallCheck = function (instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError("Cannot call a class as a function");
          },
          createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                (descriptor.enumerable = descriptor.enumerable || !1),
                  (descriptor.configurable = !0),
                  "value" in descriptor && (descriptor.writable = !0),
                  Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
              );
            };
          })(),
          possibleConstructorReturn = function (self, call) {
            if (!self)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !call ||
              ("object" != typeof call && "function" != typeof call)
              ? self
              : call;
          },
          PfeCard = (function (_PFElement) {
            function PfeCard() {
              return (
                classCallCheck(this, PfeCard),
                possibleConstructorReturn(
                  this,
                  (PfeCard.__proto__ || Object.getPrototypeOf(PfeCard)).call(
                    this,
                    PfeCard,
                    { type: PfeCard.PfeType }
                  )
                )
              );
            }
            return (
              (function (subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof superClass
                  );
                (subClass.prototype = Object.create(
                  superClass && superClass.prototype,
                  {
                    constructor: {
                      value: subClass,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  }
                )),
                  superClass &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(subClass, superClass)
                      : (subClass.__proto__ = superClass));
              })(PfeCard, PFElement),
              createClass(
                PfeCard,
                [
                  {
                    key: "html",
                    get: function () {
                      return '\n<style>@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host([color=accent]),:host([color=base]),:host([color=complement]),:host([color=darker]),:host([color=darkest]),:host([color=lighter]),:host([color=lightest]){background-color:#fff!important;color:#151515!important}}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host{color:#151515!important}}:host{--context:var(--pfe-card--context, var(--pfe-theme--color--surface--base--context, light));display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;justify-items:flex-start;-webkit-align-self:stretch;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;padding:calc(1rem * 2) calc(1rem * 2) calc(1rem * 2) calc(1rem * 2);padding:var(--pfe-card--Padding,var(--pfe-card--PaddingTop,calc(var(--pfe-theme--container-spacer,1rem) * 2)) var(--pfe-card--PaddingRight,calc(var(--pfe-theme--container-spacer,1rem) * 2)) var(--pfe-card--PaddingBottom,calc(var(--pfe-theme--container-spacer,1rem) * 2)) var(--pfe-card--PaddingLeft,calc(var(--pfe-theme--container-spacer,1rem) * 2)));border:0 solid #d2d2d2;border:var(--pfe-card--Border,var(--pfe-card--BorderWidth,0) var(--pfe-card--BorderStyle,solid) var(--pfe-card--BorderColor,var(--pfe-theme--color--surface--border,#d2d2d2)));border-radius:3px;border-radius:var(--pfe-card--BorderRadius,var(--pfe-theme--surface--border-radius,3px));overflow:hidden;background-color:#f0f0f0;background-color:var(--pfe-card--BackgroundColor,var(--pfe-theme--color--surface--base,#f0f0f0));background-position:center center;background-position:var(--pfe-card--BackgroundPosition,center center);color:#3c3f42;color:var(--pfe-broadcasted--text,#3c3f42)}@media print{:host{background-color:#fff!important;background-image:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}}@media print{:host{border-radius:3px;border:1px solid #d2d2d2}}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host{background-color:#fff!important;background-color:var(--pfe-theme--color--surface--lightest,#fff)!important;color:#151515!important;color:var(--pfe-theme--color--text,#151515)!important;background-image:none!important;border-radius:3px;border:1px solid #d2d2d2;padding:1rem;padding:var(--pfe-theme--container-spacer,1rem)}}:host([color=darker]){--pfe-card--BackgroundColor:var(--pfe-theme--color--surface--darker, #3c3f42);--pfe-card--context:var(--pfe-theme--color--surface--darker--context, dark)}:host([color=darkest]){--pfe-card--BackgroundColor:var(--pfe-theme--color--surface--darkest, #151515);--pfe-card--context:var(--pfe-theme--color--surface--darkest--context, dark)}:host([color=base]){--pfe-card--BackgroundColor:var(--pfe-theme--color--surface--base, #f0f0f0);--pfe-card--context:var(--pfe-theme--color--surface--base--context, light)}:host([color=lighter]){--pfe-card--BackgroundColor:var(--pfe-theme--color--surface--lighter, #f0f0f0);--pfe-card--context:var(--pfe-theme--color--surface--lighter--context, light)}:host([color=lightest]){--pfe-card--BackgroundColor:var(--pfe-theme--color--surface--lightest, #fff);--pfe-card--context:var(--pfe-theme--color--surface--lightest--context, light)}:host([color=accent]){--pfe-card--BackgroundColor:var(--pfe-theme--color--surface--accent, #004080);--pfe-card--context:var(--pfe-theme--color--surface--accent--context, saturated)}:host([color=complement]){--pfe-card--BackgroundColor:var(--pfe-theme--color--surface--complement, #002952);--pfe-card--context:var(--pfe-theme--color--surface--complement--context, saturated)}:host([on=dark]){--pfe-broadcasted--text:var(--pfe-theme--color--text--on-dark, #fff);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted--on-dark, #d2d2d2);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-dark, #73bcf7);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-dark, #bee1f4);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-dark, #bee1f4);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-dark, #bee1f4);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-dark, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-dark, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-dark, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-dark, none)}:host([on=saturated]){--pfe-broadcasted--text:var(--pfe-theme--color--text--on-saturated, #fff);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted--on-saturated, #d2d2d2);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-saturated, #fff);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-saturated, #fafafa);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-saturated, #fafafa);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-saturated, #d2d2d2);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-saturated, underline);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-saturated, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-saturated, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-saturated, underline)}:host([on=light]){--pfe-broadcasted--text:var(--pfe-theme--color--text, #151515);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted, #6a6e73);--pfe-broadcasted--link:var(--pfe-theme--color--link, #06c);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover, #004080);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus, #004080);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited, #6753ac);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited, none)}:host([size=small]){--pfe-card--PaddingTop:var(--pfe-theme--container-spacer, 1rem);--pfe-card--PaddingRight:var(--pfe-theme--container-spacer, 1rem);--pfe-card--PaddingBottom:var(--pfe-theme--container-spacer, 1rem);--pfe-card--PaddingLeft:var(--pfe-theme--container-spacer, 1rem)}:host([border]:not([border=false])){--pfe-card--BorderWidth:1px}.pfe-card__body ::slotted([overflow~=top]),.pfe-card__body ::slotted([pfe-overflow~=top]),.pfe-card__footer ::slotted([overflow~=top]),.pfe-card__footer ::slotted([pfe-overflow~=top]),.pfe-card__header ::slotted([overflow~=top]),.pfe-card__header ::slotted([pfe-overflow~=top]){z-index:1;margin-top:-2rem;margin-top:calc(-1 * calc(1rem * 2))!important;margin-top:calc(-1 * var(--pfe-card--PaddingTop,calc(var(--pfe-theme--container-spacer,1rem) * 2)))!important}:host([has_header]) .pfe-card__body ::slotted([overflow~=top]),:host([has_header]) .pfe-card__body ::slotted([pfe-overflow~=top]),:host([has_header]) .pfe-card__footer ::slotted([overflow~=top]),:host([has_header]) .pfe-card__footer ::slotted([pfe-overflow~=top]),:host([has_header]) .pfe-card__header ::slotted([overflow~=top]),:host([has_header]) .pfe-card__header ::slotted([pfe-overflow~=top]){padding-top:1rem;padding-top:var(--pfe-card--spacing,var(--pfe-theme--container-spacer,1rem))}.pfe-card__body ::slotted([overflow~=right]),.pfe-card__body ::slotted([pfe-overflow~=right]),.pfe-card__footer ::slotted([overflow~=right]),.pfe-card__footer ::slotted([pfe-overflow~=right]),.pfe-card__header ::slotted([overflow~=right]),.pfe-card__header ::slotted([pfe-overflow~=right]){margin-right:-2rem;margin-right:calc(-1 * calc(1rem * 2));margin-right:calc(-1 * var(--pfe-card--PaddingRight,calc(var(--pfe-theme--container-spacer,1rem) * 2)))}.pfe-card__body ::slotted([overflow~=bottom]),.pfe-card__body ::slotted([pfe-overflow~=bottom]),.pfe-card__footer ::slotted([overflow~=bottom]),.pfe-card__footer ::slotted([pfe-overflow~=bottom]),.pfe-card__header ::slotted([overflow~=bottom]),.pfe-card__header ::slotted([pfe-overflow~=bottom]){margin-bottom:-2rem;margin-bottom:calc(-1 * calc(calc(1rem * 2) + 3px));margin-bottom:calc(-1 * calc(var(--pfe-card--PaddingBottom,calc(var(--pfe-theme--container-spacer,1rem) * 2)) + var(--pfe-card--BorderRadius,var(--pfe-theme--surface--border-radius,3px))));-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end}.pfe-card__body ::slotted([overflow~=left]),.pfe-card__body ::slotted([pfe-overflow~=left]),.pfe-card__footer ::slotted([overflow~=left]),.pfe-card__footer ::slotted([pfe-overflow~=left]),.pfe-card__header ::slotted([overflow~=left]),.pfe-card__header ::slotted([pfe-overflow~=left]){margin-left:-2rem;margin-left:calc(-1 * calc(1rem * 2));margin-left:calc(-1 * var(--pfe-card--PaddingLeft,calc(var(--pfe-theme--container-spacer,1rem) * 2)))}.pfe-card__body ::slotted(img),.pfe-card__footer ::slotted(img),.pfe-card__header ::slotted(img){max-width:100%!important;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;-o-object-fit:cover;object-fit:cover}.pfe-card__body ::slotted(img:not[overflow]),.pfe-card__body ::slotted(img:not[pfe-overflow]),.pfe-card__footer ::slotted(img:not[overflow]),.pfe-card__footer ::slotted(img:not[pfe-overflow]),.pfe-card__header ::slotted(img:not[overflow]),.pfe-card__header ::slotted(img:not[pfe-overflow]){-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start}.pfe-card__body ::slotted(img[overflow]),.pfe-card__body ::slotted(img[pfe-overflow]),.pfe-card__footer ::slotted(img[overflow]),.pfe-card__footer ::slotted(img[pfe-overflow]),.pfe-card__header ::slotted(img[overflow]),.pfe-card__header ::slotted(img[pfe-overflow]){max-width:unset!important}.pfe-card__body ::slotted(img[overflow~=right]),.pfe-card__body ::slotted(img[pfe-overflow~=right]),.pfe-card__footer ::slotted(img[overflow~=right]),.pfe-card__footer ::slotted(img[pfe-overflow~=right]),.pfe-card__header ::slotted(img[overflow~=right]),.pfe-card__header ::slotted(img[pfe-overflow~=right]){width:calc(100% + 2rem)!important;width:calc(100% + calc(1rem * 2))!important;width:calc(100% + var(--pfe-card--PaddingRight,calc(var(--pfe-theme--container-spacer,1rem) * 2)))!important}.pfe-card__body ::slotted(img[overflow~=left]),.pfe-card__body ::slotted(img[pfe-overflow~=left]),.pfe-card__footer ::slotted(img[overflow~=left]),.pfe-card__footer ::slotted(img[pfe-overflow~=left]),.pfe-card__header ::slotted(img[overflow~=left]),.pfe-card__header ::slotted(img[pfe-overflow~=left]){width:calc(100% + 2rem)!important;width:calc(100% + calc(1rem * 2))!important;width:calc(100% + var(--pfe-card--PaddingLeft,calc(var(--pfe-theme--container-spacer,1rem) * 2)))!important}.pfe-card__body ::slotted(img[overflow~=right][overflow~=left]),.pfe-card__body ::slotted(img[pfe-overflow~=right][pfe-overflow~=left]),.pfe-card__footer ::slotted(img[overflow~=right][overflow~=left]),.pfe-card__footer ::slotted(img[pfe-overflow~=right][pfe-overflow~=left]),.pfe-card__header ::slotted(img[overflow~=right][overflow~=left]),.pfe-card__header ::slotted(img[pfe-overflow~=right][pfe-overflow~=left]){width:calc(100% + 4rem)!important;width:calc(100% + calc(1rem * 2) + calc(1rem * 2))!important;width:calc(100% + var(--pfe-card--PaddingRight,calc(var(--pfe-theme--container-spacer,1rem) * 2)) + var(--pfe-card--PaddingLeft,calc(var(--pfe-theme--container-spacer,1rem) * 2)))!important}.pfe-card__header{z-index:2;background-color:rgba(0,0,0,.09);background-color:var(--pfe-card__header--BackgroundColor,rgba(0,0,0,var(--pfe-theme--opacity,.09)));color:#3c3f42;color:var(--pfe-card__header--Color,var(--pfe-broadcasted--text,#3c3f42));margin-top:calc(calc(1rem * 2) * -1)!important;margin-top:calc(var(--pfe-card--PaddingTop,calc(var(--pfe-theme--container-spacer,1rem) * 2)) * -1)!important;margin-right:calc(calc(1rem * 2) * -1);margin-right:calc(var(--pfe-card--PaddingRight,calc(var(--pfe-theme--container-spacer,1rem) * 2)) * -1);margin-bottom:1rem;margin-bottom:var(--pfe-card--spacing--vertical,var(--pfe-card--spacing,var(--pfe-theme--container-spacer,1rem)));margin-left:calc(calc(1rem * 2) * -1);margin-left:calc(var(--pfe-card--PaddingLeft,calc(var(--pfe-theme--container-spacer,1rem) * 2)) * -1);padding-top:1rem;padding-top:var(--pfe-card--spacing--vertical,var(--pfe-card--spacing,var(--pfe-theme--container-spacer,1rem)));padding-right:calc(1rem * 2);padding-right:var(--pfe-card--PaddingRight,calc(var(--pfe-theme--container-spacer,1rem) * 2));padding-left:calc(1rem * 2);padding-left:var(--pfe-card--PaddingLeft,calc(var(--pfe-theme--container-spacer,1rem) * 2));padding-bottom:1rem;padding-bottom:var(--pfe-card--spacing--vertical,var(--pfe-card--spacing,var(--pfe-theme--container-spacer,1rem)))}:host([on=dark]) .pfe-card__header{background-color:rgba(255,255,255,.09);background-color:var(--pfe-card__header--BackgroundColor--dark,rgba(255,255,255,var(--pfe-theme--opacity,.09)))}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.pfe-card__header{background-color:#fff!important;color:#151515!important}}:host(:not([has_body]):not([has_footer])) .pfe-card__header{margin-bottom:calc(1rem * 2);margin-bottom:var(--pfe-card--PaddingBottom,calc(var(--pfe-theme--container-spacer,1rem) * 2))}.pfe-card__header ::slotted([overflow~=top]),.pfe-card__header ::slotted([pfe-overflow~=top]){--pfe-card__overflow--MarginTop:calc(var(--pfe-card--PaddingTop, calc(var(--pfe-theme--container-spacer, 1rem) * 2)) * -1)}:host(:not([has_header])) .pfe-card__header{display:none}:host([has_body],[has_footer]) .pfe-card__header ::slotted([overflow~=bottom]),:host([has_body],[has_footer]) .pfe-card__header ::slotted([pfe-overflow~=bottom]){--pfe-card__overflow--MarginBottom:calc(var(--pfe-card--spacing--vertical, var(--pfe-card--spacing, var(--pfe-theme--container-spacer, 1rem))) * -1)}.pfe-card__header ::slotted([overflow~=bottom]),.pfe-card__header ::slotted([pfe-overflow~=bottom]){--pfe-card__overflow--MarginBottom:calc(var(--pfe-card--PaddingBottom, calc(var(--pfe-theme--container-spacer, 1rem) * 2)) * -1)}.pfe-card__header ::slotted(h1){margin-bottom:0}.pfe-card__header ::slotted(h2){margin-bottom:0}.pfe-card__header ::slotted(h3){margin-bottom:0}.pfe-card__header ::slotted(h4){margin-bottom:0}.pfe-card__header ::slotted(h5){margin-bottom:0}.pfe-card__header ::slotted(h6){margin-bottom:0}:host(:not([has_header])) .pfe-card__body ::slotted([overflow~=top]),:host(:not([has_header])) .pfe-card__body ::slotted([pfe-overflow~=top]){--pfe-card__overflow--MarginTop:calc(var(--pfe-card--PaddingTop, calc(var(--pfe-theme--container-spacer, 1rem) * 2)) * -1)}.pfe-card__body ::slotted([overflow~=top]),.pfe-card__body ::slotted([pfe-overflow~=top]){z-index:1;--pfe-card__overflow--MarginTop:calc(var(--pfe-card--spacing--vertical, var(--pfe-card--spacing, var(--pfe-theme--container-spacer, 1rem))) * -1)}.pfe-card__body ::slotted([overflow~=bottom]),.pfe-card__body ::slotted([pfe-overflow~=bottom]){--pfe-card__overflow--MarginBottom:calc(var(--pfe-card--PaddingBottom, calc(var(--pfe-theme--container-spacer, 1rem) * 2)) * -1)}:host([has_footer]) .pfe-card__body ::slotted([overflow~=bottom]),:host([has_footer]) .pfe-card__body ::slotted([pfe-overflow~=bottom]){--pfe-card__overflow--MarginBottom:calc(var(--pfe-card--spacing--vertical, var(--pfe-card--spacing, var(--pfe-theme--container-spacer, 1rem))) * -1)}:host(:not([has_footer])) .pfe-card__body{margin-bottom:0}.pfe-card__footer{margin-top:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;flex-direction:var(--pfe-card__footer--Row,row);-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-wrap:var(--pfe-card__footer--Wrap,wrap);-ms-flex-wrap:var(--pfe-card__footer--Wrap,wrap);flex-wrap:var(--pfe-card__footer--Wrap,wrap);-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;-webkit-box-align:var(--pfe-card__footer--AlignItems,baseline);-webkit-align-items:var(--pfe-card__footer--AlignItems,baseline);-ms-flex-align:var(--pfe-card__footer--AlignItems,baseline);align-items:var(--pfe-card__footer--AlignItems,baseline)}.pfe-card__footer ::slotted([overflow~=bottom]),.pfe-card__footer ::slotted([pfe-overflow~=bottom]){--pfe-card__overflow--MarginBottom:calc(var(--pfe-card--PaddingBottom, calc(var(--pfe-theme--container-spacer, 1rem) * 2)) * -1)}:host(:not([has_footer])) .pfe-card__footer{display:none}.pfe-card__body,.pfe-card__header{margin-bottom:1rem;margin-bottom:var(--pfe-card--spacing--vertical,var(--pfe-card--spacing,var(--pfe-theme--container-spacer,1rem)))}.pfe-card__body ::slotted(p:first-child),.pfe-card__header ::slotted(p:first-child){margin-top:0}.pfe-card__body ::slotted(h1:first-child),.pfe-card__header ::slotted(h1:first-child){margin-top:0}.pfe-card__body ::slotted(h2:first-child),.pfe-card__header ::slotted(h2:first-child){margin-top:0}.pfe-card__body ::slotted(h3:first-child),.pfe-card__header ::slotted(h3:first-child){margin-top:0}.pfe-card__body ::slotted(h4:first-child),.pfe-card__header ::slotted(h4:first-child){margin-top:0}.pfe-card__body ::slotted(h5:first-child),.pfe-card__header ::slotted(h5:first-child){margin-top:0}.pfe-card__body ::slotted(h6:first-child),.pfe-card__header ::slotted(h6:first-child){margin-top:0} /*# sourceMappingURL=pfe-card.min.css.map */</style>\n\x3c!-- pfe-card --\x3e\n<div class="pfe-card__header">\n  <slot name="pfe-card--header"></slot>\n</div>\n<div class="pfe-card__body">\n  <slot></slot>\n</div>\n<div class="pfe-card__footer">\n  <slot name="pfe-card--footer"></slot>\n</div>';
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-card.html";
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-card.scss";
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-card";
                    },
                  },
                  {
                    key: "meta",
                    get: function () {
                      return {
                        title: "Card",
                        description:
                          "This element creates a header, body, and footer region in which to place content or other components.",
                      };
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        color: {
                          title: "Background color",
                          type: String,
                          values: [
                            "lightest",
                            "base",
                            "darker",
                            "darkest",
                            "complement",
                            "accent",
                          ],
                          default: "base",
                          observer: "_colorChanged",
                        },
                        oldColor: {
                          type: String,
                          prefix: !1,
                          alias: "color",
                          attr: "pfe-color",
                        },
                        imgSrc: {
                          title: "Background image",
                          type: String,
                          observer: "_imageSrcChanged",
                        },
                        pfeImgSrc: {
                          type: String,
                          prefix: !1,
                          alias: "imgSrc",
                        },
                        size: {
                          title: "Padding size",
                          type: String,
                          values: ["small"],
                        },
                        pfeSize: {
                          type: String,
                          values: ["small"],
                          prefix: !1,
                          alias: "size",
                        },
                        border: { title: "Border", type: Boolean },
                        oldBorder: { alias: "border", attr: "pfe-border" },
                      };
                    },
                  },
                  {
                    key: "slots",
                    get: function () {
                      return {
                        header: {
                          title: "Header",
                          type: "array",
                          namedSlot: !0,
                          maxItems: 3,
                          items: { $ref: "raw" },
                        },
                        body: {
                          title: "Body",
                          type: "array",
                          namedSlot: !1,
                          items: { $ref: "raw" },
                        },
                        footer: {
                          title: "Footer",
                          type: "array",
                          namedSlot: !0,
                          maxItems: 3,
                          items: {
                            oneOf: [{ $ref: "pfe-cta" }, { $ref: "raw" }],
                          },
                        },
                      };
                    },
                  },
                  {
                    key: "PfeType",
                    get: function () {
                      return PFElement.PfeTypes.Container;
                    },
                  },
                ]
              ),
              createClass(PfeCard, [
                {
                  key: "_colorChanged",
                  value: function () {
                    this.resetContext();
                  },
                },
                {
                  key: "_imageSrcChanged",
                  value: function (oldValue, newValue) {
                    this.style.backgroundImage = newValue
                      ? "url('" + newValue + "')"
                      : "";
                  },
                },
              ]),
              PfeCard
            );
          })();
        return PFElement.create(PfeCard), PfeCard;
      }),
      (function (global, factory) {
        "object" == typeof exports && "undefined" != typeof module
          ? (module.exports = factory(
              require("../../pfelement/dist/pfelement.umd")
            ))
          : "function" == typeof define && define.amd
          ? define(["../../pfelement/dist/pfelement.umd"], factory)
          : ((global = global || self).PfeCodeblock = factory(
              global.PFElement
            ));
      })(this, function (PFElement) {
        "use strict";
        (PFElement =
          PFElement &&
          Object.prototype.hasOwnProperty.call(PFElement, "default")
            ? PFElement.default
            : PFElement),
          Array.prototype.includes ||
            Object.defineProperty(Array.prototype, "includes", {
              value: function (valueToFind, fromIndex) {
                if (null == this)
                  throw new TypeError('"this" is null or not defined');
                var o = Object(this),
                  len = o.length >>> 0;
                if (0 === len) return !1;
                var x,
                  y,
                  n = 0 | fromIndex,
                  k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
                for (; k < len; ) {
                  if (
                    (x = o[k]) === (y = valueToFind) ||
                    ("number" == typeof x &&
                      "number" == typeof y &&
                      isNaN(x) &&
                      isNaN(y))
                  )
                    return !0;
                  k++;
                }
                return !1;
              },
            });
        var commonjsGlobal =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : {};
        var module,
          prism =
            ((function (module) {
              var Prism = (function (_self) {
                var lang = /\blang(?:uage)?-([\w-]+)\b/i,
                  uniqueId = 0,
                  _ = {
                    manual: _self.Prism && _self.Prism.manual,
                    disableWorkerMessageHandler:
                      _self.Prism && _self.Prism.disableWorkerMessageHandler,
                    util: {
                      encode: function encode(tokens) {
                        return tokens instanceof Token
                          ? new Token(
                              tokens.type,
                              encode(tokens.content),
                              tokens.alias
                            )
                          : Array.isArray(tokens)
                          ? tokens.map(encode)
                          : tokens
                              .replace(/&/g, "&amp;")
                              .replace(/</g, "&lt;")
                              .replace(/\u00a0/g, " ");
                      },
                      type: function (o) {
                        return Object.prototype.toString.call(o).slice(8, -1);
                      },
                      objId: function (obj) {
                        return (
                          obj.__id ||
                            Object.defineProperty(obj, "__id", {
                              value: ++uniqueId,
                            }),
                          obj.__id
                        );
                      },
                      clone: function deepClone(o, visited) {
                        var clone, id;
                        switch (((visited = visited || {}), _.util.type(o))) {
                          case "Object":
                            if (((id = _.util.objId(o)), visited[id]))
                              return visited[id];
                            for (var key in ((clone = {}),
                            (visited[id] = clone),
                            o))
                              o.hasOwnProperty(key) &&
                                (clone[key] = deepClone(o[key], visited));
                            return clone;
                          case "Array":
                            return (
                              (id = _.util.objId(o)),
                              visited[id]
                                ? visited[id]
                                : ((clone = []),
                                  (visited[id] = clone),
                                  o.forEach(function (v, i) {
                                    clone[i] = deepClone(v, visited);
                                  }),
                                  clone)
                            );
                          default:
                            return o;
                        }
                      },
                      getLanguage: function (element) {
                        for (; element && !lang.test(element.className); )
                          element = element.parentElement;
                        return element
                          ? (element.className.match(lang) || [
                              ,
                              "none",
                            ])[1].toLowerCase()
                          : "none";
                      },
                      currentScript: function () {
                        if ("undefined" == typeof document) return null;
                        if ("currentScript" in document)
                          return document.currentScript;
                        try {
                          throw new Error();
                        } catch (err) {
                          var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(
                            err.stack
                          ) || [])[1];
                          if (src) {
                            var scripts =
                              document.getElementsByTagName("script");
                            for (var i in scripts)
                              if (scripts[i].src == src) return scripts[i];
                          }
                          return null;
                        }
                      },
                      isActive: function (
                        element,
                        className,
                        defaultActivation
                      ) {
                        for (var no = "no-" + className; element; ) {
                          var classList = element.classList;
                          if (classList.contains(className)) return !0;
                          if (classList.contains(no)) return !1;
                          element = element.parentElement;
                        }
                        return !!defaultActivation;
                      },
                    },
                    languages: {
                      extend: function (id, redef) {
                        var lang = _.util.clone(_.languages[id]);
                        for (var key in redef) lang[key] = redef[key];
                        return lang;
                      },
                      insertBefore: function (inside, before, insert, root) {
                        var grammar = (root = root || _.languages)[inside],
                          ret = {};
                        for (var token in grammar)
                          if (grammar.hasOwnProperty(token)) {
                            if (token == before)
                              for (var newToken in insert)
                                insert.hasOwnProperty(newToken) &&
                                  (ret[newToken] = insert[newToken]);
                            insert.hasOwnProperty(token) ||
                              (ret[token] = grammar[token]);
                          }
                        var old = root[inside];
                        return (
                          (root[inside] = ret),
                          _.languages.DFS(_.languages, function (key, value) {
                            value === old && key != inside && (this[key] = ret);
                          }),
                          ret
                        );
                      },
                      DFS: function DFS(o, callback, type, visited) {
                        visited = visited || {};
                        var objId = _.util.objId;
                        for (var i in o)
                          if (o.hasOwnProperty(i)) {
                            callback.call(o, i, o[i], type || i);
                            var property = o[i],
                              propertyType = _.util.type(property);
                            "Object" !== propertyType ||
                            visited[objId(property)]
                              ? "Array" !== propertyType ||
                                visited[objId(property)] ||
                                ((visited[objId(property)] = !0),
                                DFS(property, callback, i, visited))
                              : ((visited[objId(property)] = !0),
                                DFS(property, callback, null, visited));
                          }
                      },
                    },
                    plugins: {},
                    highlightAll: function (async, callback) {
                      _.highlightAllUnder(document, async, callback);
                    },
                    highlightAllUnder: function (container, async, callback) {
                      var env = {
                        callback: callback,
                        container: container,
                        selector:
                          'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                      };
                      _.hooks.run("before-highlightall", env),
                        (env.elements = Array.prototype.slice.apply(
                          env.container.querySelectorAll(env.selector)
                        )),
                        _.hooks.run("before-all-elements-highlight", env);
                      for (var element, i = 0; (element = env.elements[i++]); )
                        _.highlightElement(element, !0 === async, env.callback);
                    },
                    highlightElement: function (element, async, callback) {
                      var language = _.util.getLanguage(element),
                        grammar = _.languages[language];
                      element.className =
                        element.className
                          .replace(lang, "")
                          .replace(/\s+/g, " ") +
                        " language-" +
                        language;
                      var parent = element.parentElement;
                      parent &&
                        "pre" === parent.nodeName.toLowerCase() &&
                        (parent.className =
                          parent.className
                            .replace(lang, "")
                            .replace(/\s+/g, " ") +
                          " language-" +
                          language);
                      var env = {
                        element: element,
                        language: language,
                        grammar: grammar,
                        code: element.textContent,
                      };
                      function insertHighlightedCode(highlightedCode) {
                        (env.highlightedCode = highlightedCode),
                          _.hooks.run("before-insert", env),
                          (env.element.innerHTML = env.highlightedCode),
                          _.hooks.run("after-highlight", env),
                          _.hooks.run("complete", env),
                          callback && callback.call(env.element);
                      }
                      if ((_.hooks.run("before-sanity-check", env), !env.code))
                        return (
                          _.hooks.run("complete", env),
                          void (callback && callback.call(env.element))
                        );
                      if ((_.hooks.run("before-highlight", env), env.grammar))
                        if (async && _self.Worker) {
                          var worker = new Worker(_.filename);
                          (worker.onmessage = function (evt) {
                            insertHighlightedCode(evt.data);
                          }),
                            worker.postMessage(
                              JSON.stringify({
                                language: env.language,
                                code: env.code,
                                immediateClose: !0,
                              })
                            );
                        } else
                          insertHighlightedCode(
                            _.highlight(env.code, env.grammar, env.language)
                          );
                      else insertHighlightedCode(_.util.encode(env.code));
                    },
                    highlight: function (text, grammar, language) {
                      var env = {
                        code: text,
                        grammar: grammar,
                        language: language,
                      };
                      return (
                        _.hooks.run("before-tokenize", env),
                        (env.tokens = _.tokenize(env.code, env.grammar)),
                        _.hooks.run("after-tokenize", env),
                        Token.stringify(_.util.encode(env.tokens), env.language)
                      );
                    },
                    tokenize: function (text, grammar) {
                      var rest = grammar.rest;
                      if (rest) {
                        for (var token in rest) grammar[token] = rest[token];
                        delete grammar.rest;
                      }
                      var tokenList = new (function () {
                        var head = { value: null, prev: null, next: null },
                          tail = { value: null, prev: head, next: null };
                        (head.next = tail),
                          (this.head = head),
                          (this.tail = tail),
                          (this.length = 0);
                      })();
                      return (
                        addAfter(tokenList, tokenList.head, text),
                        (function matchGrammar(
                          text,
                          tokenList,
                          grammar,
                          startNode,
                          startPos,
                          rematch
                        ) {
                          for (var token in grammar)
                            if (
                              grammar.hasOwnProperty(token) &&
                              grammar[token]
                            ) {
                              var patterns = grammar[token];
                              patterns = Array.isArray(patterns)
                                ? patterns
                                : [patterns];
                              for (var j = 0; j < patterns.length; ++j) {
                                if (rematch && rematch.cause == token + "," + j)
                                  return;
                                var patternObj = patterns[j],
                                  inside = patternObj.inside,
                                  lookbehind = !!patternObj.lookbehind,
                                  greedy = !!patternObj.greedy,
                                  alias = patternObj.alias;
                                if (greedy && !patternObj.pattern.global) {
                                  var flags = patternObj.pattern
                                    .toString()
                                    .match(/[imsuy]*$/)[0];
                                  patternObj.pattern = RegExp(
                                    patternObj.pattern.source,
                                    flags + "g"
                                  );
                                }
                                for (
                                  var pattern =
                                      patternObj.pattern || patternObj,
                                    currentNode = startNode.next,
                                    pos = startPos;
                                  currentNode !== tokenList.tail &&
                                  !(rematch && pos >= rematch.reach);
                                  pos += currentNode.value.length,
                                    currentNode = currentNode.next
                                ) {
                                  var str = currentNode.value;
                                  if (tokenList.length > text.length) return;
                                  if (!(str instanceof Token)) {
                                    var match,
                                      removeCount = 1;
                                    if (greedy) {
                                      if (
                                        !(match = matchPattern(
                                          pattern,
                                          pos,
                                          text,
                                          lookbehind
                                        ))
                                      )
                                        break;
                                      var from = match.index,
                                        to = match.index + match[0].length,
                                        p = pos;
                                      for (
                                        p += currentNode.value.length;
                                        from >= p;

                                      )
                                        (currentNode = currentNode.next),
                                          (p += currentNode.value.length);
                                      if (
                                        ((p -= currentNode.value.length),
                                        (pos = p),
                                        currentNode.value instanceof Token)
                                      )
                                        continue;
                                      for (
                                        var k = currentNode;
                                        k !== tokenList.tail &&
                                        (p < to || "string" == typeof k.value);
                                        k = k.next
                                      )
                                        removeCount++, (p += k.value.length);
                                      removeCount--,
                                        (str = text.slice(pos, p)),
                                        (match.index -= pos);
                                    } else if (
                                      !(match = matchPattern(
                                        pattern,
                                        0,
                                        str,
                                        lookbehind
                                      ))
                                    )
                                      continue;
                                    var from = match.index,
                                      matchStr = match[0],
                                      before = str.slice(0, from),
                                      after = str.slice(from + matchStr.length),
                                      reach = pos + str.length;
                                    rematch &&
                                      reach > rematch.reach &&
                                      (rematch.reach = reach);
                                    var removeFrom = currentNode.prev;
                                    before &&
                                      ((removeFrom = addAfter(
                                        tokenList,
                                        removeFrom,
                                        before
                                      )),
                                      (pos += before.length)),
                                      removeRange(
                                        tokenList,
                                        removeFrom,
                                        removeCount
                                      );
                                    var wrapped = new Token(
                                      token,
                                      inside
                                        ? _.tokenize(matchStr, inside)
                                        : matchStr,
                                      alias,
                                      matchStr
                                    );
                                    (currentNode = addAfter(
                                      tokenList,
                                      removeFrom,
                                      wrapped
                                    )),
                                      after &&
                                        addAfter(tokenList, currentNode, after),
                                      removeCount > 1 &&
                                        matchGrammar(
                                          text,
                                          tokenList,
                                          grammar,
                                          currentNode.prev,
                                          pos,
                                          {
                                            cause: token + "," + j,
                                            reach: reach,
                                          }
                                        );
                                  }
                                }
                              }
                            }
                        })(text, tokenList, grammar, tokenList.head, 0),
                        (function (list) {
                          var array = [],
                            node = list.head.next;
                          for (; node !== list.tail; )
                            array.push(node.value), (node = node.next);
                          return array;
                        })(tokenList)
                      );
                    },
                    hooks: {
                      all: {},
                      add: function (name, callback) {
                        var hooks = _.hooks.all;
                        (hooks[name] = hooks[name] || []),
                          hooks[name].push(callback);
                      },
                      run: function (name, env) {
                        var callbacks = _.hooks.all[name];
                        if (callbacks && callbacks.length)
                          for (
                            var callback, i = 0;
                            (callback = callbacks[i++]);

                          )
                            callback(env);
                      },
                    },
                    Token: Token,
                  };
                function Token(type, content, alias, matchedStr) {
                  (this.type = type),
                    (this.content = content),
                    (this.alias = alias),
                    (this.length = 0 | (matchedStr || "").length);
                }
                function matchPattern(pattern, pos, text, lookbehind) {
                  pattern.lastIndex = pos;
                  var match = pattern.exec(text);
                  if (match && lookbehind && match[1]) {
                    var lookbehindLength = match[1].length;
                    (match.index += lookbehindLength),
                      (match[0] = match[0].slice(lookbehindLength));
                  }
                  return match;
                }
                function addAfter(list, node, value) {
                  var next = node.next,
                    newNode = { value: value, prev: node, next: next };
                  return (
                    (node.next = newNode),
                    (next.prev = newNode),
                    list.length++,
                    newNode
                  );
                }
                function removeRange(list, node, count) {
                  for (
                    var next = node.next, i = 0;
                    i < count && next !== list.tail;
                    i++
                  )
                    next = next.next;
                  (node.next = next), (next.prev = node), (list.length -= i);
                }
                if (
                  ((_self.Prism = _),
                  (Token.stringify = function stringify(o, language) {
                    if ("string" == typeof o) return o;
                    if (Array.isArray(o)) {
                      var s = "";
                      return (
                        o.forEach(function (e) {
                          s += stringify(e, language);
                        }),
                        s
                      );
                    }
                    var env = {
                        type: o.type,
                        content: stringify(o.content, language),
                        tag: "span",
                        classes: ["token", o.type],
                        attributes: {},
                        language: language,
                      },
                      aliases = o.alias;
                    aliases &&
                      (Array.isArray(aliases)
                        ? Array.prototype.push.apply(env.classes, aliases)
                        : env.classes.push(aliases)),
                      _.hooks.run("wrap", env);
                    var attributes = "";
                    for (var name in env.attributes)
                      attributes +=
                        " " +
                        name +
                        '="' +
                        (env.attributes[name] || "").replace(/"/g, "&quot;") +
                        '"';
                    return (
                      "<" +
                      env.tag +
                      ' class="' +
                      env.classes.join(" ") +
                      '"' +
                      attributes +
                      ">" +
                      env.content +
                      "</" +
                      env.tag +
                      ">"
                    );
                  }),
                  !_self.document)
                )
                  return _self.addEventListener
                    ? (_.disableWorkerMessageHandler ||
                        _self.addEventListener(
                          "message",
                          function (evt) {
                            var message = JSON.parse(evt.data),
                              lang = message.language,
                              code = message.code,
                              immediateClose = message.immediateClose;
                            _self.postMessage(
                              _.highlight(code, _.languages[lang], lang)
                            ),
                              immediateClose && _self.close();
                          },
                          !1
                        ),
                      _)
                    : _;
                var script = _.util.currentScript();
                function highlightAutomaticallyCallback() {
                  _.manual || _.highlightAll();
                }
                if (
                  (script &&
                    ((_.filename = script.src),
                    script.hasAttribute("data-manual") && (_.manual = !0)),
                  !_.manual)
                ) {
                  var readyState = document.readyState;
                  "loading" === readyState ||
                  ("interactive" === readyState && script && script.defer)
                    ? document.addEventListener(
                        "DOMContentLoaded",
                        highlightAutomaticallyCallback
                      )
                    : window.requestAnimationFrame
                    ? window.requestAnimationFrame(
                        highlightAutomaticallyCallback
                      )
                    : window.setTimeout(highlightAutomaticallyCallback, 16);
                }
                return _;
              })(
                "undefined" != typeof window
                  ? window
                  : "undefined" != typeof WorkerGlobalScope &&
                    self instanceof WorkerGlobalScope
                  ? self
                  : {}
              );
              module.exports && (module.exports = Prism),
                void 0 !== commonjsGlobal && (commonjsGlobal.Prism = Prism),
                (Prism.languages.markup = {
                  comment: /<!--[\s\S]*?-->/,
                  prolog: /<\?[\s\S]+?\?>/,
                  doctype: {
                    pattern:
                      /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                    greedy: !0,
                    inside: {
                      "internal-subset": {
                        pattern: /(\[)[\s\S]+(?=\]>$)/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: null,
                      },
                      string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
                      punctuation: /^<!|>$|[[\]]/,
                      "doctype-tag": /^DOCTYPE/,
                      name: /[^\s<>'"]+/,
                    },
                  },
                  cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
                  tag: {
                    pattern:
                      /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                    greedy: !0,
                    inside: {
                      tag: {
                        pattern: /^<\/?[^\s>\/]+/,
                        inside: {
                          punctuation: /^<\/?/,
                          namespace: /^[^\s>\/:]+:/,
                        },
                      },
                      "attr-value": {
                        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                        inside: {
                          punctuation: [
                            { pattern: /^=/, alias: "attr-equals" },
                            /"|'/,
                          ],
                        },
                      },
                      punctuation: /\/?>/,
                      "attr-name": {
                        pattern: /[^\s>\/]+/,
                        inside: { namespace: /^[^\s>\/:]+:/ },
                      },
                    },
                  },
                  entity: [
                    { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
                    /&#x?[\da-f]{1,8};/i,
                  ],
                }),
                (Prism.languages.markup.tag.inside["attr-value"].inside.entity =
                  Prism.languages.markup.entity),
                (Prism.languages.markup.doctype.inside[
                  "internal-subset"
                ].inside = Prism.languages.markup),
                Prism.hooks.add("wrap", function (env) {
                  "entity" === env.type &&
                    (env.attributes.title = env.content.replace(/&amp;/, "&"));
                }),
                Object.defineProperty(
                  Prism.languages.markup.tag,
                  "addInlined",
                  {
                    value: function (tagName, lang) {
                      var includedCdataInside = {};
                      (includedCdataInside["language-" + lang] = {
                        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                        lookbehind: !0,
                        inside: Prism.languages[lang],
                      }),
                        (includedCdataInside.cdata = /^<!\[CDATA\[|\]\]>$/i);
                      var inside = {
                        "included-cdata": {
                          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                          inside: includedCdataInside,
                        },
                      };
                      inside["language-" + lang] = {
                        pattern: /[\s\S]+/,
                        inside: Prism.languages[lang],
                      };
                      var def = {};
                      (def[tagName] = {
                        pattern: RegExp(
                          /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                            /__/g,
                            function () {
                              return tagName;
                            }
                          ),
                          "i"
                        ),
                        lookbehind: !0,
                        greedy: !0,
                        inside: inside,
                      }),
                        Prism.languages.insertBefore("markup", "cdata", def);
                    },
                  }
                ),
                (Prism.languages.html = Prism.languages.markup),
                (Prism.languages.mathml = Prism.languages.markup),
                (Prism.languages.svg = Prism.languages.markup),
                (Prism.languages.xml = Prism.languages.extend("markup", {})),
                (Prism.languages.ssml = Prism.languages.xml),
                (Prism.languages.atom = Prism.languages.xml),
                (Prism.languages.rss = Prism.languages.xml),
                (function (Prism) {
                  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
                  (Prism.languages.css = {
                    comment: /\/\*[\s\S]*?\*\//,
                    atrule: {
                      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                      inside: {
                        rule: /^@[\w-]+/,
                        "selector-function-argument": {
                          pattern:
                            /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                          lookbehind: !0,
                          alias: "selector",
                        },
                        keyword: {
                          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                          lookbehind: !0,
                        },
                      },
                    },
                    url: {
                      pattern: RegExp(
                        "\\burl\\((?:" +
                          string.source +
                          "|" +
                          /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                          ")\\)",
                        "i"
                      ),
                      greedy: !0,
                      inside: {
                        function: /^url/i,
                        punctuation: /^\(|\)$/,
                        string: {
                          pattern: RegExp("^" + string.source + "$"),
                          alias: "url",
                        },
                      },
                    },
                    selector: RegExp(
                      "[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
                        string.source +
                        ")*(?=\\s*\\{)"
                    ),
                    string: { pattern: string, greedy: !0 },
                    property:
                      /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                    important: /!important\b/i,
                    function: /[-a-z0-9]+(?=\()/i,
                    punctuation: /[(){};:,]/,
                  }),
                    (Prism.languages.css.atrule.inside.rest =
                      Prism.languages.css);
                  var markup = Prism.languages.markup;
                  markup &&
                    (markup.tag.addInlined("style", "css"),
                    Prism.languages.insertBefore(
                      "inside",
                      "attr-value",
                      {
                        "style-attr": {
                          pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
                          lookbehind: !0,
                          inside: {
                            "attr-value": {
                              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                              inside: {
                                style: {
                                  pattern: /(["'])[\s\S]+(?=["']$)/,
                                  lookbehind: !0,
                                  alias: "language-css",
                                  inside: Prism.languages.css,
                                },
                                punctuation: [
                                  { pattern: /^=/, alias: "attr-equals" },
                                  /"|'/,
                                ],
                              },
                            },
                            "attr-name": /^style/i,
                          },
                        },
                      },
                      markup.tag
                    ));
                })(Prism),
                (Prism.languages.clike = {
                  comment: [
                    {
                      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                      lookbehind: !0,
                      greedy: !0,
                    },
                    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
                  ],
                  string: {
                    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0,
                  },
                  "class-name": {
                    pattern:
                      /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
                    lookbehind: !0,
                    inside: { punctuation: /[.\\]/ },
                  },
                  keyword:
                    /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
                  boolean: /\b(?:true|false)\b/,
                  function: /\w+(?=\()/,
                  number:
                    /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                  punctuation: /[{}[\];(),.:]/,
                }),
                (Prism.languages.javascript = Prism.languages.extend("clike", {
                  "class-name": [
                    Prism.languages.clike["class-name"],
                    {
                      pattern:
                        /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
                      lookbehind: !0,
                    },
                  ],
                  keyword: [
                    {
                      pattern: /((?:^|})\s*)(?:catch|finally)\b/,
                      lookbehind: !0,
                    },
                    {
                      pattern:
                        /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                      lookbehind: !0,
                    },
                  ],
                  function:
                    /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                  number:
                    /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
                  operator:
                    /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
                })),
                (Prism.languages.javascript["class-name"][0].pattern =
                  /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
                Prism.languages.insertBefore("javascript", "keyword", {
                  regex: {
                    pattern:
                      /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                      "regex-source": {
                        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                        lookbehind: !0,
                        alias: "language-regex",
                        inside: Prism.languages.regex,
                      },
                      "regex-flags": /[a-z]+$/,
                      "regex-delimiter": /^\/|\/$/,
                    },
                  },
                  "function-variable": {
                    pattern:
                      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                    alias: "function",
                  },
                  parameter: [
                    {
                      pattern:
                        /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                      lookbehind: !0,
                      inside: Prism.languages.javascript,
                    },
                    {
                      pattern:
                        /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                      inside: Prism.languages.javascript,
                    },
                    {
                      pattern:
                        /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                      lookbehind: !0,
                      inside: Prism.languages.javascript,
                    },
                    {
                      pattern:
                        /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                      lookbehind: !0,
                      inside: Prism.languages.javascript,
                    },
                  ],
                  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
                }),
                Prism.languages.insertBefore("javascript", "string", {
                  "template-string": {
                    pattern:
                      /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
                    greedy: !0,
                    inside: {
                      "template-punctuation": {
                        pattern: /^`|`$/,
                        alias: "string",
                      },
                      interpolation: {
                        pattern:
                          /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                        lookbehind: !0,
                        inside: {
                          "interpolation-punctuation": {
                            pattern: /^\${|}$/,
                            alias: "punctuation",
                          },
                          rest: Prism.languages.javascript,
                        },
                      },
                      string: /[\s\S]+/,
                    },
                  },
                }),
                Prism.languages.markup &&
                  Prism.languages.markup.tag.addInlined("script", "javascript"),
                (Prism.languages.js = Prism.languages.javascript),
                (function () {
                  if (
                    "undefined" != typeof self &&
                    self.Prism &&
                    self.document
                  ) {
                    Element.prototype.matches ||
                      (Element.prototype.matches =
                        Element.prototype.msMatchesSelector ||
                        Element.prototype.webkitMatchesSelector);
                    var Prism = window.Prism,
                      EXTENSIONS = {
                        js: "javascript",
                        py: "python",
                        rb: "ruby",
                        ps1: "powershell",
                        psm1: "powershell",
                        sh: "bash",
                        bat: "batch",
                        h: "c",
                        tex: "latex",
                      },
                      SELECTOR =
                        'pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',
                      lang = /\blang(?:uage)?-([\w-]+)\b/i;
                    Prism.hooks.add("before-highlightall", function (env) {
                      env.selector += ", " + SELECTOR;
                    }),
                      Prism.hooks.add("before-sanity-check", function (env) {
                        var pre = env.element;
                        if (pre.matches(SELECTOR)) {
                          (env.code = ""),
                            pre.setAttribute("data-src-status", "loading");
                          var code = pre.appendChild(
                            document.createElement("CODE")
                          );
                          code.textContent = "Loading…";
                          var src = pre.getAttribute("data-src"),
                            language = env.language;
                          if ("none" === language) {
                            var extension = (/\.(\w+)$/.exec(src) || [
                              ,
                              "none",
                            ])[1];
                            language = EXTENSIONS[extension] || extension;
                          }
                          setLanguageClass(code, language),
                            setLanguageClass(pre, language);
                          var autoloader = Prism.plugins.autoloader;
                          autoloader && autoloader.loadLanguages(language);
                          var xhr = new XMLHttpRequest();
                          xhr.open("GET", src, !0),
                            (xhr.onreadystatechange = function () {
                              var status, message;
                              4 == xhr.readyState &&
                                (xhr.status < 400 && xhr.responseText
                                  ? (pre.setAttribute(
                                      "data-src-status",
                                      "loaded"
                                    ),
                                    (code.textContent = xhr.responseText),
                                    Prism.highlightElement(code))
                                  : (pre.setAttribute(
                                      "data-src-status",
                                      "failed"
                                    ),
                                    xhr.status >= 400
                                      ? (code.textContent =
                                          ((status = xhr.status),
                                          (message = xhr.statusText),
                                          "✖ Error " +
                                            status +
                                            " while fetching file: " +
                                            message))
                                      : (code.textContent =
                                          "✖ Error: File does not exist or is empty")));
                            }),
                            xhr.send(null);
                        }
                      }),
                      (Prism.plugins.fileHighlight = {
                        highlight: function (container) {
                          for (
                            var element,
                              elements = (
                                container || document
                              ).querySelectorAll(SELECTOR),
                              i = 0;
                            (element = elements[i++]);

                          )
                            Prism.highlightElement(element);
                        },
                      });
                    var logged = !1;
                    Prism.fileHighlight = function () {
                      logged ||
                        (console.warn(
                          "Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."
                        ),
                        (logged = !0)),
                        Prism.plugins.fileHighlight.highlight.apply(
                          this,
                          arguments
                        );
                    };
                  }
                  function setLanguageClass(element, language) {
                    var className = element.className;
                    (className =
                      className.replace(lang, " ") + " language-" + language),
                      (element.className = className
                        .replace(/\s+/g, " ")
                        .trim());
                  }
                })();
            })((module = { exports: {} }), module.exports),
            module.exports),
          classCallCheck = function (instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError("Cannot call a class as a function");
          },
          createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                (descriptor.enumerable = descriptor.enumerable || !1),
                  (descriptor.configurable = !0),
                  "value" in descriptor && (descriptor.writable = !0),
                  Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
              );
            };
          })(),
          get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
              var parent = Object.getPrototypeOf(object);
              return null === parent ? void 0 : get(parent, property, receiver);
            }
            if ("value" in desc) return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0;
          },
          possibleConstructorReturn = function (self, call) {
            if (!self)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !call ||
              ("object" != typeof call && "function" != typeof call)
              ? self
              : call;
          },
          observerConfig = { childList: !0, subtree: !0, characterData: !0 },
          PfeCodeblock = (function (_PFElement) {
            function PfeCodeblock() {
              classCallCheck(this, PfeCodeblock);
              var _this = possibleConstructorReturn(
                this,
                (
                  PfeCodeblock.__proto__ || Object.getPrototypeOf(PfeCodeblock)
                ).call(this, PfeCodeblock, { type: PfeCodeblock.PfeType })
              );
              return (
                (_this._codeblock = null),
                (_this._codeblockRender = null),
                (_this._codeblockRenderOuterPreTag = null),
                (_this._codeblockContainer = null),
                (_this._readyStateChangeHandler =
                  _this._readyStateChangeHandler.bind(_this)),
                (_this._observer = new MutationObserver(function (
                  mutationList,
                  observer
                ) {
                  _this._codeblockContainer.textContent
                    ? (window.ShadyCSS && observer.disconnect(),
                      (_this.codeblock = _this._codeblockContainer.textContent),
                      window.ShadyCSS && _this._muationObserve())
                    : (_this._codeblockRender.innerHTML = "");
                })),
                _this
              );
            }
            return (
              (function (subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof superClass
                  );
                (subClass.prototype = Object.create(
                  superClass && superClass.prototype,
                  {
                    constructor: {
                      value: subClass,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  }
                )),
                  superClass &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(subClass, superClass)
                      : (subClass.__proto__ = superClass));
              })(PfeCodeblock, PFElement),
              createClass(
                PfeCodeblock,
                [
                  {
                    key: "html",
                    get: function () {
                      return '\n<style>:host code[class*=language-],:host pre[class*=language-]{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;color:#6a6e73;background:#f5f5f5;font-family:"Overpass Mono",Consolas,Monaco,"Andale Mono",monospace;font-family:var(--pfe-theme--font-family--code, "Overpass Mono", Consolas, Monaco, "Andale Mono", monospace);font-size:1em;line-height:1.5em;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}:host code[class*=language-] ::-moz-selection,:host code[class*=language-]::-moz-selection,:host pre[class*=language-] ::-moz-selection,:host pre[class*=language-]::-moz-selection{background:#cceae7;color:#263238}:host code[class*=language-] ::selection,:host code[class*=language-]::selection,:host pre[class*=language-] ::selection,:host pre[class*=language-]::selection{background:#cceae7;color:#263238}:host :not(pre)>code[class*=language-]{white-space:normal;border-radius:.2em;padding:.1em}:host pre[class*=language-]{overflow:auto;position:relative;margin:.5em 0;padding:1.25em 1em}:host .language-css>code,:host .language-sass>code,:host .language-scss>code{color:#b300b3}:host [class*=language-] .namespace{opacity:.7}:host .token.atrule{color:#40199a}:host .token.attr-name{color:#06c}:host .token.attr-value{color:#b300b3}:host .token.attribute{color:#b300b3}:host .token.boolean{color:#40199a}:host .token.builtin{color:#06c}:host .token.cdata{color:#06c}:host .token.char{color:#06c}:host .token.class{color:#06c}:host .token.class-name{color:#06c}:host .token.comment{color:#6a6e73}:host .token.constant{color:#40199a}:host .token.deleted{color:#c9190b}:host .token.doctype{color:#6a6e73}:host .token.entity{color:#c9190b}:host .token.function{color:#40199a}:host .token.hexcode{color:#b300b3}:host .token.id{color:#40199a;font-weight:700}:host .token.important{color:#40199a;font-weight:700}:host .token.inserted{color:#06c}:host .token.keyword{color:#40199a}:host .token.number{color:#b300b3}:host .token.operator{color:#06c}:host .token.prolog{color:#6a6e73}:host .token.property{color:#06c}:host .token.pseudo-class{color:#b300b3}:host .token.pseudo-element{color:#b300b3}:host .token.punctuation{color:#06c}:host .token.regex{color:#06c}:host .token.selector{color:#c9190b}:host .token.string{color:#b300b3}:host .token.symbol{color:#40199a}:host .token.tag{color:#c9190b}:host .token.unit{color:#b300b3}:host .token.url{color:#c9190b}:host .token.variable{color:#c9190b}:host([code-theme=dark]) code[class*=language-],:host([code-theme=dark]) pre[class*=language-]{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;color:#d2d2d2;background:#3c3f42;font-family:"Overpass Mono",Consolas,Monaco,"Andale Mono",monospace;font-family:var(--pfe-theme--font-family--code, "Overpass Mono", Consolas, Monaco, "Andale Mono", monospace);font-size:1em;line-height:1.5em;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}:host([code-theme=dark]) code[class*=language-] ::-moz-selection,:host([code-theme=dark]) code[class*=language-]::-moz-selection,:host([code-theme=dark]) pre[class*=language-] ::-moz-selection,:host([code-theme=dark]) pre[class*=language-]::-moz-selection{background:#363636}:host([code-theme=dark]) code[class*=language-] ::selection,:host([code-theme=dark]) code[class*=language-]::selection,:host([code-theme=dark]) pre[class*=language-] ::selection,:host([code-theme=dark]) pre[class*=language-]::selection{background:#363636}:host([code-theme=dark]) :not(pre)>code[class*=language-]{white-space:normal;border-radius:.2em;padding:.1em}:host([code-theme=dark]) pre[class*=language-]{overflow:auto;position:relative;margin:.5em 0;padding:1.25em 1em}:host([code-theme=dark]) pre[class*=language-].line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}:host([code-theme=dark]) .language-css>code,:host([code-theme=dark]) .language-sass>code,:host([code-theme=dark]) .language-scss>code{color:#ace12e}:host([code-theme=dark]) [class*=language-] .namespace{opacity:.7}:host([code-theme=dark]) .token.atrule{color:#b2a3ff}:host([code-theme=dark]) .token.attr-name{color:#ace12e}:host([code-theme=dark]) .token.attr-value{color:#ace12e}:host([code-theme=dark]) .token.attribute{color:#ace12e}:host([code-theme=dark]) .token.boolean{color:#b2a3ff}:host([code-theme=dark]) .token.builtin{color:#ace12e}:host([code-theme=dark]) .token.cdata{color:#73bcf7}:host([code-theme=dark]) .token.char{color:#73bcf7}:host([code-theme=dark]) .token.class{color:#ace12e}:host([code-theme=dark]) .token.class-name{color:#73bcf7}:host([code-theme=dark]) .token.comment{color:#d2d2d2}:host([code-theme=dark]) .token.constant{color:#b2a3ff}:host([code-theme=dark]) .token.deleted{color:#ff8a80}:host([code-theme=dark]) .token.doctype{color:#d2d2d2}:host([code-theme=dark]) .token.entity{color:#ff8a80}:host([code-theme=dark]) .token.function{color:#b2a3ff}:host([code-theme=dark]) .token.hexcode{color:#73bcf7}:host([code-theme=dark]) .token.id{color:#b2a3ff;font-weight:700}:host([code-theme=dark]) .token.important{color:#b2a3ff;font-weight:700}:host([code-theme=dark]) .token.inserted{color:#73bcf7}:host([code-theme=dark]) .token.keyword{color:#b2a3ff}:host([code-theme=dark]) .token.number{color:#ace12e}:host([code-theme=dark]) .token.operator{color:#73bcf7}:host([code-theme=dark]) .token.prolog{color:#d2d2d2}:host([code-theme=dark]) .token.property{color:#73bcf7}:host([code-theme=dark]) .token.pseudo-class{color:#ace12e}:host([code-theme=dark]) .token.pseudo-element{color:#ace12e}:host([code-theme=dark]) .token.punctuation{color:#73bcf7}:host([code-theme=dark]) .token.regex{color:#73bcf7}:host([code-theme=dark]) .token.selector{color:#ff8a80}:host([code-theme=dark]) .token.string{color:#ace12e}:host([code-theme=dark]) .token.symbol{color:#b2a3ff}:host([code-theme=dark]) .token.tag{color:#ff8a80}:host([code-theme=dark]) .token.unit{color:#ace12e}:host([code-theme=dark]) .token.url{color:#ff8a80}:host([code-theme=dark]) .token.variable{color:#ff8a80}pre[class*=language-].line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}pre[class*=language-].line-numbers>code{position:relative;white-space:inherit}.line-numbers .line-numbers-rows{position:absolute;pointer-events:none;top:0;font-size:100%;left:-3.8em;width:3em;letter-spacing:-1px;border-right:1px solid #999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.line-numbers-rows>span{display:block;counter-increment:linenumber}.line-numbers-rows>span:before{content:counter(linenumber);color:#999;display:block;padding-right:.8em;text-align:right}:host{display:block}:host([hidden]){display:none} /*# sourceMappingURL=pfe-codeblock.min.css.map */</style>\n<slot></slot>';
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-codeblock.html";
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-codeblock.scss";
                    },
                  },
                  {
                    key: "codeblock",
                    get: function () {
                      return this._codeblock;
                    },
                    set: function (text) {
                      text &&
                        ((this._codeblock = text), this.renderCodeblock());
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-codeblock";
                    },
                  },
                  {
                    key: "meta",
                    get: function () {
                      return {
                        title: "Codeblock",
                        description:
                          "Render code in a styled and formatted way",
                      };
                    },
                  },
                  {
                    key: "events",
                    get: function () {
                      return {};
                    },
                  },
                  {
                    key: "PfeType",
                    get: function () {
                      return PFElement.PfeTypes.Content;
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        codeLanguage: {
                          title: "Code Language",
                          type: String,
                          values: [
                            "markup",
                            "html",
                            "xml",
                            "svg",
                            "mathml",
                            "css",
                            "clike",
                            "javascript",
                            "js",
                          ],
                          default: "markup",
                          observer: "_attributeChanged",
                        },
                        codeLineNumbers: {
                          title: "Enable Line Numbers",
                          type: Boolean,
                          default: !1,
                          observer: "_attributeChanged",
                        },
                        codeLineNumberStart: {
                          title: "Set Line Number Start Value",
                          type: Number,
                          default: 1,
                          observer: "_attributeChanged",
                        },
                        codeTheme: {
                          title: "Code Theme",
                          type: String,
                          values: ["dark", "light"],
                          default: "light",
                          observer: "_attributeChanged",
                        },
                      };
                    },
                  },
                  {
                    key: "slots",
                    get: function () {
                      return {};
                    },
                  },
                ]
              ),
              createClass(PfeCodeblock, [
                {
                  key: "lineNumberCssClass",
                  value: function () {
                    return this.codeLineNumbers ? " line-numbers" : "";
                  },
                },
                {
                  key: "codePrismLanguage",
                  value: function () {
                    return "language-" + this.codeLanguage;
                  },
                },
                {
                  key: "codePrismLanguageLoad",
                  value: function () {
                    return prism.languages[this.codeLanguage];
                  },
                },
                {
                  key: "appliedCssClasss",
                  value: function () {
                    return this.codePrismLanguage() + this.lineNumberCssClass();
                  },
                },
                {
                  key: "setComponentClasses",
                  value: function () {
                    this._codeblockRender.setAttribute(
                      "class",
                      this.codePrismLanguage()
                    ),
                      this._codeblockRenderOuterPreTag.setAttribute(
                        "class",
                        this.appliedCssClasss()
                      ),
                      1 !== this.codeLineNumberStart &&
                        (this._codeblockRenderOuterPreTag.style.counterReset =
                          "linenumber " + (this.codeLineNumberStart - 1));
                  },
                },
                {
                  key: "connectedCallback",
                  value: function () {
                    get(
                      PfeCodeblock.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeCodeblock.prototype),
                      "connectedCallback",
                      this
                    ).call(this),
                      (this._codeblockRenderOuterPreTag =
                        document.createElement("pre")),
                      (this._codeblockRender = document.createElement("code")),
                      this._codeblockRender.setAttribute(
                        "codeblock-render",
                        ""
                      ),
                      this.setComponentClasses(),
                      this._codeblockRenderOuterPreTag.appendChild(
                        this._codeblockRender
                      ),
                      this.shadowRoot.appendChild(
                        this._codeblockRenderOuterPreTag
                      ),
                      this._codeblockContainer ||
                        ((this._codeblockContainer = this.querySelector(
                          "[codeblock-container]"
                        )),
                        (this._codeblockContainer.style.display = "none"),
                        this._init());
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    this._observer.disconnect();
                  },
                },
                {
                  key: "attributeChangedCallback",
                  value: function (attr, oldValue, newValue) {
                    get(
                      PfeCodeblock.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeCodeblock.prototype),
                      "attributeChangedCallback",
                      this
                    ).call(this, attr, oldValue, newValue);
                  },
                },
                {
                  key: "_readyStateChangeHandler",
                  value: function (event) {
                    "complete" === event.target.readyState &&
                      (document.removeEventListener(
                        "readystatechange",
                        this._readyStateChangeHandler
                      ),
                      this._init());
                  },
                },
                {
                  key: "_attributeChanged",
                  value: function () {
                    null !== this._codeblockRender &&
                      null !== this._codeblockRenderOuterPreTag &&
                      this.updateCodeblock();
                  },
                },
                {
                  key: "_init",
                  value: function () {
                    if (this._codeblockContainer.textContent) {
                      var tmpCodeblockObject = this.trimWhitespaceLines(
                        this._codeblockContainer.textContent
                      );
                      this.codeblock = tmpCodeblockObject.stringValue;
                    }
                    this._muationObserve();
                  },
                },
                {
                  key: "trimWhitespaceLines",
                  value: function (stringToTrim) {
                    if (!stringToTrim) return "";
                    var returnValue = { stringValue: "", lineCount: 0 },
                      tmpTrimArray = stringToTrim.trim().split("\n"),
                      tmpLineCount = tmpTrimArray.length;
                    return (
                      (returnValue.stringValue = tmpTrimArray.join("\n")),
                      (returnValue.lineCount = tmpLineCount),
                      returnValue
                    );
                  },
                },
                {
                  key: "processLineNumbers",
                  value: function (htmlStringToProcess) {
                    if (!htmlStringToProcess) return "";
                    for (
                      var returnHtmlString =
                          htmlStringToProcess +
                          '<span class="line-numbers-rows" aria-hidden="true">',
                        i = 0,
                        len =
                          this.trimWhitespaceLines(
                            htmlStringToProcess
                          ).lineCount;
                      i < len;
                      i++
                    )
                      returnHtmlString += "<span></span>";
                    return (returnHtmlString += "</span>");
                  },
                },
                {
                  key: "updateCodeblock",
                  value: function () {
                    this.setComponentClasses(), this.renderCodeblock();
                  },
                },
                {
                  key: "renderCodeblock",
                  value: function () {
                    if (
                      ((this._codeblockRender.innerHTML = prism.highlight(
                        this._codeblock,
                        this.codePrismLanguageLoad(),
                        this.codePrismLanguage()
                      )),
                      this.codeLineNumbers)
                    ) {
                      var htmlString = this.processLineNumbers(
                        this._codeblockRender.innerHTML
                      );
                      this._codeblockRender.innerHTML = htmlString;
                    }
                  },
                },
                {
                  key: "_muationObserve",
                  value: function () {
                    this._observer.observe(
                      this._codeblockContainer,
                      observerConfig
                    );
                  },
                },
              ]),
              PfeCodeblock
            );
          })();
        return PFElement.create(PfeCodeblock), PfeCodeblock;
      }),
      (function (global, factory) {
        "object" == typeof exports && "undefined" != typeof module
          ? (module.exports = factory(
              require("../../pfelement/dist/pfelement.umd"),
              require("../../pfe-icon/dist/pfe-icon.umd")
            ))
          : "function" == typeof define && define.amd
          ? define(
              [
                "../../pfelement/dist/pfelement.umd",
                "../../pfe-icon/dist/pfe-icon.umd",
              ],
              factory
            )
          : ((global = global || self).PfeIconPanel = factory(
              global.PFElement
            ));
      })(this, function (PFElement) {
        "use strict";
        PFElement =
          PFElement &&
          Object.prototype.hasOwnProperty.call(PFElement, "default")
            ? PFElement.default
            : PFElement;
        var classCallCheck = function (instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError("Cannot call a class as a function");
          },
          createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                (descriptor.enumerable = descriptor.enumerable || !1),
                  (descriptor.configurable = !0),
                  "value" in descriptor && (descriptor.writable = !0),
                  Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
              );
            };
          })(),
          possibleConstructorReturn = function (self, call) {
            if (!self)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !call ||
              ("object" != typeof call && "function" != typeof call)
              ? self
              : call;
          },
          PfeIconPanel = (function (_PFElement) {
            function PfeIconPanel() {
              return (
                classCallCheck(this, PfeIconPanel),
                possibleConstructorReturn(
                  this,
                  (
                    PfeIconPanel.__proto__ ||
                    Object.getPrototypeOf(PfeIconPanel)
                  ).call(this, PfeIconPanel)
                )
              );
            }
            return (
              (function (subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof superClass
                  );
                (subClass.prototype = Object.create(
                  superClass && superClass.prototype,
                  {
                    constructor: {
                      value: subClass,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  }
                )),
                  superClass &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(subClass, superClass)
                      : (subClass.__proto__ = superClass));
              })(PfeIconPanel, PFElement),
              createClass(
                PfeIconPanel,
                [
                  {
                    key: "html",
                    get: function () {
                      return (
                        '\n<style>:host{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:calc(-1 * 1rem);margin-top:calc(-1 * var(--pfe-theme--container-spacer,1rem));margin-right:calc(-1 * 1rem);margin-right:calc(-1 * var(--pfe-theme--container-spacer,1rem))}@media (min-width:576px){:host{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){::slotted(*){max-width:100%}}:host([stacked]),:host([stacked]:not([stacked=false])){-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.pfe-icon-panel__content{margin-top:1rem;margin-top:var(--pfe-theme--container-spacer,1rem);margin-left:0}@media (min-width:576px){.pfe-icon-panel__content{margin-top:0;margin-left:1rem;margin-left:var(--pfe-theme--container-spacer,1rem)}}.pfe-icon-panel__footer{margin-top:1.5rem;margin-top:var(--pfe-theme--content-spacer,1.5rem)} /*# sourceMappingURL=pfe-icon-panel.min.css.map */</style>\n<pfe-icon size="' +
                        ("true" === this.getAttribute("pfe-circled")
                          ? "lg"
                          : "xl") +
                        '"></pfe-icon>\n<div class="pfe-icon-panel__content">\n  <slot class="pfe-icon-panel__header" name="pfe-icon-panel--header"></slot>\n  <slot class="pfe-icon-panel__body"></slot>\n  <slot class="pfe-icon-panel__footer" name="pfe-icon-panel--footer"></slot>\n</div>'
                      );
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-icon-panel.scss";
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-icon-panel.html";
                    },
                  },
                  {
                    key: "schemaUrl",
                    get: function () {
                      return "pfe-icon-panel.json";
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "schemaProperties",
                    get: function () {
                      return {
                        icon: { title: "Icon", type: "string", prefixed: !1 },
                        color: {
                          title: "Color",
                          type: "string",
                          enum: [
                            "complement",
                            "accent",
                            "lightest",
                            "base",
                            "darker",
                            "darkest",
                            "critical",
                            "important",
                            "moderate",
                            "success",
                            "info",
                          ],
                          default: "darker",
                          prefixed: !0,
                        },
                        centered: {
                          title: "Centered",
                          type: "boolean",
                          prefixed: !0,
                          default: !1,
                        },
                        stacked: {
                          title: "Stacked",
                          type: "boolean",
                          prefixed: !0,
                          default: !1,
                        },
                        circled: {
                          title: "Circled",
                          type: "boolean",
                          default: !0,
                          prefixed: !0,
                        },
                      };
                    },
                  },
                  {
                    key: "slots",
                    get: function () {
                      return {
                        header: {
                          title: "Header",
                          type: "array",
                          namedSlot: !0,
                          items: {
                            title: "Header item",
                            oneOf: [{ $ref: "raw" }],
                          },
                        },
                        body: {
                          title: "Body",
                          type: "array",
                          namedSlot: !1,
                          items: {
                            title: "Body item",
                            oneOf: [{ $ref: "raw" }],
                          },
                        },
                        footer: {
                          title: "Footer",
                          type: "array",
                          namedSlot: !0,
                          maxItems: 3,
                          items: {
                            title: "Footer item",
                            oneOf: [{ $ref: "raw" }],
                          },
                        },
                      };
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-icon-panel";
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        icon: {
                          title: "Icon",
                          type: String,
                          attr: "icon",
                          cascade: ["pfe-icon"],
                        },
                        circled: {
                          title: "Circled",
                          type: Boolean,
                          cascade: ["pfe-icon"],
                        },
                        oldCircled: { alias: "circled", attr: "pfe-circled" },
                        color: {
                          title: "Color",
                          type: String,
                          values: [
                            "complement",
                            "accent",
                            "lightest",
                            "base",
                            "darker",
                            "darkest",
                            "critical",
                            "important",
                            "moderate",
                            "success",
                            "info",
                          ],
                          default: "darker",
                          cascade: ["pfe-icon"],
                        },
                        oldColor: { alias: "color", attr: "pfe-color" },
                        stacked: { title: "Stacked", type: Boolean },
                        oldStacked: { alias: "stacked", attr: "pfe-stacked" },
                        centered: { title: "Centered", type: Boolean },
                        oldCentered: {
                          alias: "centered",
                          attr: "pfe-centered",
                        },
                      };
                    },
                  },
                ]
              ),
              PfeIconPanel
            );
          })();
        return PFElement.create(PfeIconPanel), PfeIconPanel;
      }),
      (function (global, factory) {
        "object" == typeof exports && "undefined" != typeof module
          ? (module.exports = factory(
              require("../../pfelement/dist/pfelement.umd"),
              require("../../pfe-accordion/dist/pfe-accordion.umd")
            ))
          : "function" == typeof define && define.amd
          ? define(
              [
                "../../pfelement/dist/pfelement.umd",
                "../../pfe-accordion/dist/pfe-accordion.umd",
              ],
              factory
            )
          : ((global = global || self).PfeJumpLinks = factory(
              global.PFElement,
              global.PfeAccordion
            ));
      })(this, function (PFElement, pfeAccordion_umd) {
        "use strict";
        (PFElement =
          PFElement &&
          Object.prototype.hasOwnProperty.call(PFElement, "default")
            ? PFElement.default
            : PFElement),
          (pfeAccordion_umd =
            pfeAccordion_umd &&
            Object.prototype.hasOwnProperty.call(pfeAccordion_umd, "default")
              ? pfeAccordion_umd.default
              : pfeAccordion_umd),
          Array.prototype.findIndex ||
            Object.defineProperty(Array.prototype, "findIndex", {
              value: function (predicate) {
                if (null == this)
                  throw new TypeError('"this" is null or not defined');
                var o = Object(this),
                  len = o.length >>> 0;
                if ("function" != typeof predicate)
                  throw new TypeError("predicate must be a function");
                for (var thisArg = arguments[1], k = 0; k < len; ) {
                  var kValue = o[k];
                  if (predicate.call(thisArg, kValue, k, o)) return k;
                  k++;
                }
                return -1;
              },
            }),
          Element.prototype.closest ||
            (Element.prototype.closest = function (s) {
              var el = this;
              do {
                if (el.matches(s)) return el;
                el = el.parentElement || el.parentNode;
              } while (null !== el && 1 === el.nodeType);
              return null;
            });
        var classCallCheck = function (instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError("Cannot call a class as a function");
          },
          createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                (descriptor.enumerable = descriptor.enumerable || !1),
                  (descriptor.configurable = !0),
                  "value" in descriptor && (descriptor.writable = !0),
                  Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
              );
            };
          })(),
          get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
              var parent = Object.getPrototypeOf(object);
              return null === parent ? void 0 : get(parent, property, receiver);
            }
            if ("value" in desc) return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0;
          },
          inherits = function (subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }
            )),
              superClass &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(subClass, superClass)
                  : (subClass.__proto__ = superClass));
          },
          possibleConstructorReturn = function (self, call) {
            if (!self)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !call ||
              ("object" != typeof call && "function" != typeof call)
              ? self
              : call;
          },
          toConsumableArray = function (arr) {
            if (Array.isArray(arr)) {
              for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
                arr2[i] = arr[i];
              return arr2;
            }
            return Array.from(arr);
          },
          PfeJumpLinksNav = (function (_PFElement) {
            function PfeJumpLinksNav() {
              classCallCheck(this, PfeJumpLinksNav);
              var _this = possibleConstructorReturn(
                this,
                (
                  PfeJumpLinksNav.__proto__ ||
                  Object.getPrototypeOf(PfeJumpLinksNav)
                ).call(this, PfeJumpLinksNav, { type: PfeJumpLinksNav.PfeType })
              );
              return (
                _this.currentActive,
                (_this.isBuilding = !1),
                (_this.isVisible = !1),
                (_this.update = !1),
                _this._panel,
                _this._sections,
                (_this._clicked = !1),
                (_this.build = _this.build.bind(_this)),
                (_this.rebuild = _this.rebuild.bind(_this)),
                (_this.active = _this.active.bind(_this)),
                (_this.inactive = _this.inactive.bind(_this)),
                (_this.clearActive = _this.clearActive.bind(_this)),
                (_this.getActive = _this.getActive.bind(_this)),
                (_this.closeAccordion = _this.closeAccordion.bind(_this)),
                (_this.scrollToSection = _this.scrollToSection.bind(_this)),
                (_this.updateItem = _this.updateItem.bind(_this)),
                (_this.updateLightDOM = _this.updateLightDOM.bind(_this)),
                (_this._buildWrapper = _this._buildWrapper.bind(_this)),
                (_this._buildItem = _this._buildItem.bind(_this)),
                (_this._isValidLightDom = _this._isValidLightDom.bind(_this)),
                (_this._reportHeight = _this._reportHeight.bind(_this)),
                (_this._updateOffset = _this._updateOffset.bind(_this)),
                (_this._checkVisible = _this._checkVisible.bind(_this)),
                (_this._stickyHandler = _this._stickyHandler.bind(_this)),
                (_this._clickHandler = _this._clickHandler.bind(_this)),
                (_this._scrollHandler = _this._scrollHandler.bind(_this)),
                (_this._resizeHandler = _this._resizeHandler.bind(_this)),
                (_this._mutationHandler = _this._mutationHandler.bind(_this)),
                (_this._panelChangedHandler =
                  _this._panelChangedHandler.bind(_this)),
                (_this._observer = new MutationObserver(
                  _this._mutationHandler
                )),
                _this
              );
            }
            return (
              inherits(PfeJumpLinksNav, PFElement),
              createClass(
                PfeJumpLinksNav,
                [
                  {
                    key: "html",
                    get: function () {
                      return (
                        '\n<style>slot[name=heading][sr-only]{position:absolute;overflow:hidden;clip:rect(0,0,0,0);height:1px;width:1px;margin:-1px;padding:0;border:0}:host{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Red Hat Text",RedHatText,Overpass,Overpass,Arial,sans-serif;font-family:var(--pfe-theme--font-family, "Red Hat Text", "RedHatText", "Overpass", Overpass, Arial, sans-serif);font-weight:400;font-weight:var(--pfe-theme--font-weight--normal,400);display:block;position:-webkit-sticky;position:sticky;z-index:80;z-index:var(--pfe-theme--zindex--jumplinks,80);top:0;padding:0}@media (min-width:992px){:host([horizontal][color=darkest]){background-color:#151515;background-color:var(--pfe-theme--color--surface--darkest,#151515);--context:var(--pfe-theme--color--surface--darkest--context, dark);--pfe-broadcasted--text:var(--pfe-theme--color--text--on-dark, #fff);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted--on-dark, #d2d2d2);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-dark, #73bcf7);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-dark, #bee1f4);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-dark, #bee1f4);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-dark, #bee1f4);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-dark, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-dark, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-dark, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-dark, none)}}@media (min-width:992px){:host([horizontal][color=darker]){background-color:#3c3f42;background-color:var(--pfe-theme--color--surface--darker,#3c3f42);--context:var(--pfe-theme--color--surface--darker--context, dark);--pfe-broadcasted--text:var(--pfe-theme--color--text--on-dark, #fff);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted--on-dark, #d2d2d2);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-dark, #73bcf7);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-dark, #bee1f4);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-dark, #bee1f4);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-dark, #bee1f4);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-dark, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-dark, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-dark, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-dark, none)}}@media (min-width:992px){:host([horizontal][color=lightest]){background-color:#fff;background-color:var(--pfe-theme--color--surface--lightest,#fff);--context:var(--pfe-theme--color--surface--lightest--context, light);--pfe-broadcasted--text:var(--pfe-theme--color--text, #151515);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted, #6a6e73);--pfe-broadcasted--link:var(--pfe-theme--color--link, #06c);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover, #004080);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus, #004080);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited, #6753ac);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited, none)}}@media (min-width:992px){:host([horizontal][color=lighter]){background-color:#f0f0f0;background-color:var(--pfe-theme--color--surface--lighter,#f0f0f0);--context:var(--pfe-theme--color--surface--lighter--context, light);--pfe-broadcasted--text:var(--pfe-theme--color--text, #151515);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted, #6a6e73);--pfe-broadcasted--link:var(--pfe-theme--color--link, #06c);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover, #004080);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus, #004080);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited, #6753ac);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited, none)}}:host([stuck][horizontal]){-webkit-box-shadow:0 .0625rem .125rem 0 rgba(3,3,3,.12),0 0 .125rem 0 rgba(3,3,3,.06) 0 .0625rem .125rem 0 rgba(3,3,3,.2);box-shadow:0 .0625rem .125rem 0 rgba(3,3,3,.12),0 0 .125rem 0 rgba(3,3,3,.06) 0 .0625rem .125rem 0 rgba(3,3,3,.2);-webkit-box-shadow:var(--pfe-theme--box-shadow--sm,0 .0625rem .125rem 0 rgba(3,3,3,.12),0 0 .125rem 0 rgba(3,3,3,.06)0 .0625rem .125rem 0 rgba(3,3,3,.2));box-shadow:var(--pfe-theme--box-shadow--sm,0 .0625rem .125rem 0 rgba(3,3,3,.12),0 0 .125rem 0 rgba(3,3,3,.06)0 .0625rem .125rem 0 rgba(3,3,3,.2))}.pfe-jump-links-nav__heading{margin-top:0;margin-bottom:.5rem;margin-bottom:var(--pfe-theme--content-spacer--body--sm,.5rem)}.pfe-jump-links-nav__heading h3,::slotted([slot=heading]){color:#3c3f42;color:var(--pfe-broadcasted--text,#3c3f42);margin:0;font-size:.875rem;font-size:var(--pfe-jump-links__heading--FontSize,var(--pf-global--FontSize--sm,.875rem));font-weight:400;font-weight:var(--pfe-theme--font-weight--normal,400);text-transform:uppercase;text-transform:var(--pfe-jump-links__heading--TextTransform,uppercase)}slot[name=logo]{display:none}slot[name=cta]{display:none}nav{visibility:visible;margin:0;list-style:none;padding:0}pfe-accordion-panel nav{width:100%}@media (min-width:992px){:host([horizontal][no-header]) nav{padding-top:1px;padding-bottom:0}}#container{padding:32px 0}pfe-accordion-panel #container{padding:24px 0}ul{padding:0;margin:0;border-left:1px solid #d2d2d2;border-left:var(--pfe-theme--surface--border-width,1px) var(--pfe-theme--surface--border-style,solid) var(--pfe-theme--color--ui-disabled,#d2d2d2)}li{display:block;position:relative;margin-left:calc(1px * -1);margin-left:calc(var(--pfe-theme--surface--border-width,1px) * -1)}.sub-nav li{margin-left:0}li[expand] ul{height:auto;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}li[expand] .sub-nav{display:table;height:auto}li::before{position:absolute;content:"";top:0;left:0;width:4px;width:var(--pfe-theme--surface--border-width--heavy,4px);height:100%;background-color:transparent}li::before else{height:4px;height:var(--pfe-theme--surface--border-width--heavy,4px);width:100%}li :hover::before,li:not([expand]) li:hover::before{background-color:#d2d2d2;background-color:var(--pfe-theme--color--ui-disabled,#d2d2d2)}li[active]::before,li[expand]::before{background-color:#06c;background-color:var(--pfe-jump-links--accent,var(--pfe-jump-links--BorderColor,var(--pfe-theme--color--ui-accent,#06c)));z-index:2}a{position:relative;color:#6a6e73;color:var(--pfe-theme--color--ui-disabled--text,#6a6e73);font-size:1rem;font-size:var(--pfe-jump-links--FontSize,var(--pf-global--FontSize--md,1rem));text-decoration:none;line-height:1.5;line-height:var(--pfe-theme--line-height,1.5);padding:calc(calc(1.5rem / 6) * 2) calc(calc(1.5rem / 3) * 2);padding:calc(var(--pfe-jump-links__link--vertical-spacer,calc(var(--pfe-theme--content-spacer,1.5rem)/ 6)) * 2) calc(var(--pfe-jump-links__link--horizontal-spacer,calc(var(--pfe-theme--content-spacer,1.5rem)/ 3)) * 2)}a,a:focus+ul>li>a,li:hover a,li[expand] a{display:table}li>a:hover,li[active]>a{color:#3c3f42;color:var(--pfe-broadcasted--text,#3c3f42)}:host([on=dark]) a{color:#d2d2d2;color:var(--pfe-theme--color--text--muted--on-dark,#d2d2d2)}:host([on=saturated]) a{color:#d2d2d2;color:var(--pfe-theme--color--text--muted--on-saturated,#d2d2d2)}.has-sub-section a{padding-bottom:calc(1.5rem / 6);padding-bottom:var(--pfe-jump-links__link--vertical-spacer,calc(var(--pfe-theme--content-spacer,1.5rem)/ 6))}.sub-section a{margin-left:calc(1rem * .75);margin-left:calc(var(--pfe-theme--container-spacer,1rem) * .75);font-size:calc(1rem * .85);font-size:calc(var(--pfe-jump-links--FontSize,var(--pf-global--FontSize--md,1rem)) * .85);padding:calc(1.5rem / 6) calc(calc(1.5rem / 3) * 2);padding:var(--pfe-jump-links__link--vertical-spacer,calc(var(--pfe-theme--content-spacer,1.5rem)/ 6)) calc(var(--pfe-jump-links__link--horizontal-spacer,calc(var(--pfe-theme--content-spacer,1.5rem)/ 3)) * 2)}@media (min-width:992px){.sub-section a{display:none}}.sub-section a:last-child{padding-bottom:calc(1.5rem / 3);padding-bottom:var(--pfe-jump-links__link--horizontal-spacer,calc(var(--pfe-theme--content-spacer,1.5rem)/ 3))}a:focus:focus-visible{outline:0}a:focus:focus-visible::after{position:absolute;content:"";top:0;left:0;width:calc(100% - 4px);width:calc(100% - var(--pfe-theme--surface--border-width--heavy,4px));height:calc(100% - 4px);height:calc(100% - var(--pfe-theme--surface--border-width--heavy,4px));border-radius:3px;border-radius:var(--pfe-theme--surface--border-radius,3px);border:2px solid #06c;border:2px var(--pfe-theme--surface--border-style,solid) var(--pfe-theme--color--link,#06c)}ul ul{margin:0;padding:0;overflow-y:hidden;-webkit-transition:-webkit-box-flex 1s linear,-webkit-flex 1s linear;transition:-webkit-box-flex 1s linear,-webkit-flex 1s linear;transition:flex 1s linear;transition:flex 1s linear,-webkit-box-flex 1s linear,-webkit-flex 1s linear,-ms-flex 1s linear}ul ul,ul ul li{border-left:none!important}pfe-accordion{border:1px solid #d2d2d2;border:var(--pfe-theme--surface--border-width,1px) var(--pfe-theme--surface--border-style,solid) var(--pfe-theme--color--ui-disabled,#d2d2d2);--context:light;--pfe-accordion--BackgroundColor:var(--pfe-theme--color--surface--lightest, #fff)}:host([color=darkest]) pfe-accordion{--context:dark;--pfe-accordion--BackgroundColor:var(--pfe-theme--color--surface--darkest, #151515);--pfe-theme--color--ui-accent--on-dark:transparent}pfe-accordion,pfe-accordion-panel.animating,pfe-accordion-panel[expanded]{--pfe-accordion--accent:transparent;--pfe-accordion--BorderColor:transparent;--pfe-accordion--BorderColor--accent:transparent;--pfe-accordion--BorderTopWidth:0;--pfe-accordion--BorderBottomWidth:0;--pfe-accordion--panel-container--Padding:0 0 0 calc(var(--pfe-accordion__base--Padding,var(--pfe-theme--container-spacer,1rem)) * 1.5)}@media screen and (min-width:992px){:host([horizontal]){width:100%;background-color:#fff;background-color:var(--pfe-jump-links--BackgroundColor,var(--pfe-theme--color--surface--lightest,#fff));--context:var(--pfe-jump-links--context, var(--pfe-theme--color--surface--lightest--context, light));z-index:calc(80 + 1);z-index:calc(var(--pfe-theme--zindex--jumplinks,80) + 1);border:none;padding:0}:host([horizontal]) .pfe-jump-links-nav__heading{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:block;margin:0;padding-bottom:1rem;padding-bottom:var(--pfe-theme--container-padding,1rem);border-bottom:1px solid #d2d2d2;border-bottom:var(--pfe-theme--surface--border-width,1px) var(--pfe-theme--surface--border-style,solid) var(--pfe-theme--color--surface--border,#d2d2d2)}:host([horizontal]) .pfe-jump-links-nav__heading h3,:host([horizontal]) ::slotted([slot=heading]){text-align:center;text-align:var(--pfe-jump-links__heading--TextAlign,center)}:host([horizontal]) ::slotted([slot=logo]){position:absolute;max-height:calc(1rem * 3.5);max-height:calc(var(--pfe-theme--container-spacer,1rem) * 3.5);max-width:calc(1rem * 14);max-width:calc(var(--pfe-theme--container-spacer,1rem) * 14);top:1rem;top:var(--pfe-theme--container-spacer,1rem);left:calc(1rem * 4);left:calc(var(--pfe-theme--container-spacer,1rem) * 4)}:host([horizontal]) ::slotted([slot=cta]){position:absolute;top:calc(1rem * 1);top:calc(var(--pfe-theme--container-spacer,1rem) * 1);right:calc(1rem * 4);right:calc(var(--pfe-theme--container-spacer,1rem) * 4)}}@media screen and (min-width:992px){:host([horizontal]) nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;padding-top:32px;padding-bottom:8px;max-width:calc(992px - (var(--pfe-jump-links--Padding--horizontal) * 4));max-width:var(--pfe-jump-links--Width,calc(992px - (var(--pfe-jump-links--Padding--horizontal) * 4)))}}@media screen and (min-width:1200px){:host([horizontal]) nav{max-width:calc(1200px - (var(--pfe-jump-links--Padding--horizontal) * 4));max-width:var(--pfe-jump-links--Width,calc(1200px - (var(--pfe-jump-links--Padding--horizontal) * 4)))}}@media screen and (min-width:992px){:host([horizontal]) #container{padding:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;justify-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}:host([horizontal]) ul{border:none;text-align:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;width:auto;margin:0 auto}:host([horizontal]) li{margin-left:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-top:calc(1px * -1);margin-top:calc(var(--pfe-theme--surface--border-width,1px) * -1)}:host([horizontal]) li::before{height:4px;height:var(--pfe-theme--surface--border-width--heavy,4px);width:100%}:host([horizontal]) a{padding:16px;text-decoration:none;font-size:16px;color:var(--pfe-broadcasted--text--muted,)}:host([horizontal]) a:hover,:host([horizontal]) a[active]{color:#3c3f42;color:var(--pfe-broadcasted--text,#3c3f42)}}:host([hidden]){display:none!important} /*# sourceMappingURL=pfe-jump-links-nav.min.css.map */</style>\n' +
                        (this.isMobile
                          ? '\n<pfe-accordion>\n  <pfe-accordion-header>\n    <slot class="pfe-jump-links-nav__heading" name="heading">\n      <h3>' +
                            (this.srText || "Jump to section") +
                            "</h3>\n    </slot>\n  </pfe-accordion-header>\n  <pfe-accordion-panel>\n"
                          : "") +
                        "\n\n<nav>\n  " +
                        (this.isMobile
                          ? ""
                          : '<slot class="pfe-jump-links-nav__heading" name="heading"' +
                            (this.noHeader ? " sr-only" : "") +
                            ">\n    <h3>" +
                            (this.srText || "Jump to section") +
                            "</h3>\n  </slot>") +
                        "\n  " +
                        (this.horizontal
                          ? '<slot class="pfe-jump-links-nav__logo" name="logo"></slot>'
                          : "") +
                        '\n  <div id="container"></div>\n  ' +
                        (this.horizontal
                          ? '<slot class="pfe-jump-links-nav__cta" name="cta"></slot>'
                          : "") +
                        "\n</nav>\n\n" +
                        (this.isMobile
                          ? "\n  </pfe-accordion-panel>\n</pfe-accordion>\n"
                          : "")
                      );
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-jump-links-nav.html";
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-jump-links-nav.scss";
                    },
                  },
                  {
                    key: "events",
                    get: function () {
                      return PfeJumpLinksNav.events;
                    },
                  },
                  {
                    key: "isMobile",
                    get: function () {
                      if (this.mobileBreakpoint)
                        return window.matchMedia(
                          "(max-width: " + this.mobileBreakpoint + ")"
                        ).matches;
                      var data =
                        PFElement.breakpoint.lg.match(/([0-9]+)([a-z]*)/);
                      return data.length < 1
                        ? "991px"
                        : window.matchMedia(
                            "(max-width: " +
                              (Number.parseInt(data[1], 10) - 1) +
                              data[2] +
                              ")"
                          ).matches;
                    },
                  },
                  {
                    key: "header",
                    get: function () {
                      return this.getSlot([
                        "heading",
                        "pfe-jump-links-nav--heading",
                      ])[0];
                    },
                  },
                  {
                    key: "cta",
                    get: function () {
                      return this.getSlot([
                        "link",
                        "pfe-jump-links-nav--link",
                      ])[0];
                    },
                  },
                  {
                    key: "logo",
                    get: function () {
                      return this.getSlot([
                        "logo",
                        "pfe-jump-links-nav--logo",
                      ])[0];
                    },
                  },
                  {
                    key: "container",
                    get: function () {
                      return this.shadowRoot.querySelector("#container");
                    },
                  },
                  {
                    key: "panel",
                    set: function (NodeItem) {
                      NodeItem &&
                        ((this._panel = NodeItem),
                        this._panel.hasAttribute("scrolltarget") ||
                          this._panel.setAttribute("scrolltarget", this.id),
                        this.emitEvent(PfeJumpLinksNav.events.change));
                    },
                    get: function () {
                      var _this2 = this;
                      if (this._panel) return this._panel;
                      if (this.id) {
                        var target = document.querySelector(
                          '[scrolltarget="' +
                            this.id +
                            '"],[pfe-c-scrolltarget="' +
                            this.id +
                            '"]'
                        );
                        if (target) return target;
                      }
                      var panels = [];
                      Promise.all([
                        customElements.whenDefined("pfe-jump-links-panel"),
                      ]).then(function () {
                        var panelWithId = (panels =
                          customElements.get("pfe-jump-links-panel")
                            .instances || []).filter(function (panel) {
                          return (
                            panel.getAttribute("scrolltarget") === _this2.id
                          );
                        });
                        return 1 === panelWithId.length
                          ? panelWithId[0]
                          : 1 === panels.length
                          ? ((_this2.id = _this2.randomId),
                            panels[0].setAttribute("scrolltarget", _this2.id),
                            panels[0])
                          : void (panels.length > 1
                              ? _this2.warn(
                                  "Cannot locate which panel is connected to this navigation element." +
                                    (_this2.id
                                      ? ' Please add scrolltarget="' +
                                        _this2.id +
                                        '" to the appropriate panel.'
                                      : "")
                                )
                              : _this2.warn(
                                  "Cannot locate any panels on this page. Please see documentation for connecting the navigation and panel."
                                ));
                      });
                    },
                  },
                  {
                    key: "sections",
                    set: function (NodeList) {
                      (this._sections = NodeList),
                        this.emitEvent(PfeJumpLinksNav.events.change);
                    },
                    get: function () {
                      if (this._sections) return this._sections;
                      var panel = this.panel;
                      if (panel || !this.autobuild) {
                        if (!this.autobuild) {
                          var ids = []
                            .concat(
                              toConsumableArray(
                                this.querySelectorAll("ul > li > a[href]")
                              )
                            )
                            .map(function (link) {
                              return (
                                '[id="' + link.href.split("#").pop() + '"]'
                              );
                            });
                          return (
                            panel.querySelectorAll(ids.join(",")) ||
                            document.querySelectorAll(ids.join(","))
                          );
                        }
                        return (
                          panel.querySelectorAll(
                            ".pfe-jump-links-panel__section"
                          ) ||
                          panel.shadowRoot.querySelectorAll(
                            ".pfe-jump-links-panel__section"
                          ) ||
                          panel.querySelectorAll("[id]")
                        );
                      }
                    },
                  },
                  {
                    key: "links",
                    get: function () {
                      return [].concat(
                        toConsumableArray(this.container.querySelectorAll("a"))
                      );
                    },
                  },
                  {
                    key: "items",
                    get: function () {
                      return [].concat(
                        toConsumableArray(
                          this.shadowRoot.querySelectorAll(
                            "." + this.tag + "__item"
                          )
                        )
                      );
                    },
                  },
                  {
                    key: "offsetValue",
                    get: function () {
                      if (this.offset) return this.offset;
                      var offsetVariable =
                        this.cssVariable("pfe-jump-links--offset") ||
                        this.cssVariable("pfe-jump-links-panel--offset");
                      if (
                        offsetVariable &&
                        (offsetVariable = this._castPropertyValue(
                          { type: Number },
                          Number.parseInt(offsetVariable, 10)
                        )) &&
                        offsetVariable >= 0
                      )
                        return offsetVariable;
                      var height = 0,
                        navHeightVariable = this.cssVariable(
                          "pfe-navigation--Height--actual"
                        );
                      if (
                        (navHeightVariable &&
                          (navHeightVariable = this._castPropertyValue(
                            { type: Number },
                            Number.parseInt(navHeightVariable, 10)
                          )) &&
                          navHeightVariable > 0 &&
                          (height = navHeightVariable),
                        this.stuck && (this.isMobile || this.horizontal))
                      )
                        return height;
                      var stickyJumpLinks = this.cssVariable(
                        "pfe-jump-links--Height--actual"
                      );
                      return (
                        stickyJumpLinks &&
                          (stickyJumpLinks = this._castPropertyValue(
                            { type: Number },
                            Number.parseInt(stickyJumpLinks, 10)
                          )) &&
                          stickyJumpLinks > 0 &&
                          (height += stickyJumpLinks),
                        height
                      );
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-jump-links-nav";
                    },
                  },
                  {
                    key: "PfeType",
                    get: function () {
                      return PFElement.PfeTypes.Content;
                    },
                  },
                  {
                    key: "events",
                    get: function () {
                      return {
                        activeNavItem: "pfe-jump-links-panel:active-navItem",
                        change: "pfe-jump-links-panel:change",
                        stuck: "pfe-jump-links-nav:stuck",
                        resize: "resize",
                        scroll: "scroll",
                        keyup: "keyup",
                      };
                    },
                  },
                  {
                    key: "observer",
                    get: function () {
                      return { childList: !0, subtree: !0, characterData: !0 };
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        autobuild: { title: "Autobuild", type: Boolean },
                        horizontal: {
                          title: "Horizontal",
                          type: Boolean,
                          default: !1,
                        },
                        srText: {
                          title: "Screen reader text",
                          type: String,
                          default: "Jump to section",
                        },
                        color: {
                          title: "Color",
                          type: String,
                          default: "lightest",
                          values: ["lightest", "darkest"],
                        },
                        offset: { title: "Offset", type: Number },
                        mobileBreakpoint: {
                          title: "Mobile breakpoint (max-width)",
                          type: String,
                        },
                        accordionCollapseTiming: {
                          title:
                            "Number of ms to wait before collapsing the accordion on click",
                          type: Number,
                          default: 750,
                        },
                        stuck: {
                          title: "Stickiness state",
                          type: Boolean,
                          attr: "stuck",
                          observer: "_stickyHandler",
                        },
                        noHeader: {
                          title: "Opt-out of the header region",
                          type: Boolean,
                        },
                        oldAutobuild: {
                          alias: "autobuild",
                          attr: "pfe-c-autobuild",
                        },
                        oldHorizontal: {
                          alias: "horizontal",
                          attr: "pfe-c-horizontal",
                        },
                        oldColor: { alias: "color", attr: "pfe-color" },
                      };
                    },
                  },
                ]
              ),
              createClass(PfeJumpLinksNav, [
                {
                  key: "connectedCallback",
                  value: function () {
                    if (
                      (get(
                        PfeJumpLinksNav.prototype.__proto__ ||
                          Object.getPrototypeOf(PfeJumpLinksNav.prototype),
                        "connectedCallback",
                        this
                      ).call(this),
                      this.isIE11)
                    )
                      this.setAttribute("hidden", "");
                    else {
                      this._attachListeners(PfeJumpLinksNav.events),
                        !this.autobuild && this._isValidLightDom()
                          ? this.updateLightDOM()
                          : this.autobuild && this.build();
                      var menu = this.querySelector("ul, ol");
                      if (menu) {
                        this._toShadowDOM(menu), this._updateOffset();
                        var visible = this._checkVisible(),
                          idx = this.getActive();
                        visible && idx >= 0
                          ? this.active(idx)
                          : visible && this.active(0);
                      } else this.warn("Navigation could not be built.");
                      this._observer.observe(this, PfeJumpLinksNav.observer);
                    }
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    get(
                      PfeJumpLinksNav.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeJumpLinksNav.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this),
                      this._dettachListeners(PfeJumpLinksNav.events);
                  },
                },
                {
                  key: "build",
                  value: function () {
                    var sections =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.sections;
                    if (sections) {
                      (sections = [].concat(toConsumableArray(sections))),
                        (this.isBuilding = !0);
                      for (
                        var child = void 0,
                          wrapper = this._buildWrapper(),
                          currentWrapper = wrapper,
                          previousWrapper = currentWrapper,
                          i = 0;
                        i < sections.length;
                        i++
                      ) {
                        var sectionHeading = sections[i],
                          is_subsection =
                            sectionHeading.classList.contains("sub-section"),
                          has_subsection =
                            sectionHeading.classList.contains(
                              "has-sub-section"
                            ),
                          id = sectionHeading.id;
                        if (!id) {
                          var spacer = sectionHeading.previousElementSibling;
                          spacer &&
                          spacer.classList.contains(
                            "pfe-jump-links__section--spacer"
                          ) &&
                          spacer.id
                            ? (id = spacer.id)
                            : ((sectionHeading.id = this.randomId.replace(
                                "pfe-",
                                "pfe-jump-links--"
                              )),
                              (id = sectionHeading.id));
                        }
                        (child = this._buildItem(
                          {
                            target: id,
                            content:
                              sectionHeading.getAttribute("nav-label") ||
                              sectionHeading.textContent,
                            subsection: has_subsection,
                          },
                          is_subsection
                        )),
                          currentWrapper.appendChild(child),
                          has_subsection &&
                            ((previousWrapper = currentWrapper),
                            (currentWrapper = this._buildWrapper("sub-nav")),
                            child.appendChild(currentWrapper)),
                          sections[i + 1] &&
                            !sections[i + 1].classList.contains(
                              "sub-section"
                            ) &&
                            (currentWrapper = previousWrapper || wrapper);
                      }
                      (this.isBuilding = !1),
                        (this.innerHTML = ""),
                        this.appendChild(wrapper);
                    }
                  },
                },
                {
                  key: "closeAccordion",
                  value: function () {
                    if (this.isMobile) {
                      var accordion =
                        this.shadowRoot.querySelector("pfe-accordion");
                      setTimeout(function () {
                        Promise.all([
                          customElements.whenDefined("pfe-accordion"),
                        ]).then(function () {
                          accordion.collapseAll();
                        });
                      }, this.accordionCollapseTiming);
                    }
                  },
                },
                {
                  key: "rebuild",
                  value: function () {
                    var _this3 = this;
                    if (this.isBuilding) setTimeout(this.rebuild, 10);
                    else {
                      ((this.isMobile &&
                        !this.shadowRoot.querySelector("pfe-accordion")) ||
                        (!this.isMobile &&
                          this.shadowRoot.querySelector("pfe-accordion"))) &&
                        this.render();
                      var menu = void 0;
                      (menu =
                        this.autobuild && this.update
                          ? this.build()
                          : this.querySelector("ul")) &&
                        this.container.innerHTML !==
                          menu.outerHTML.toString() &&
                        (this.container.innerHTML = menu.outerHTML.toString()),
                        this._updateOffset(),
                        this.active(this.getActive()),
                        this.items.forEach(function (item) {
                          item
                            .querySelector("a")
                            .addEventListener("click", _this3._clickHandler);
                        });
                    }
                    this.update = !1;
                  },
                },
                {
                  key: "active",
                  value: function (item) {
                    var idx = void 0,
                      items = this.items;
                    if (
                      !(
                        (idx =
                          "number" == typeof item
                            ? item
                            : items.findIndex(function (el) {
                                return el === item;
                              })) < 0 || idx >= items.length
                      ) &&
                      items[idx]
                    ) {
                      this.clearActive(), (this.currentActive = idx);
                      var li = items[idx].closest("li"),
                        parentli = li.closest("ul").closest("li"),
                        is_subsection = li.classList.contains("sub-section"),
                        has_subsection =
                          li.classList.contains("has-sub-section");
                      li.setAttribute("active", ""),
                        has_subsection
                          ? li.setAttribute("expand", "")
                          : is_subsection &&
                            parentli.setAttribute("expand", ""),
                        this.emitEvent(PfeJumpLinksNav.events.activeNavItem, {
                          detail: { activeNavItem: idx },
                        });
                    }
                  },
                },
                {
                  key: "getActive",
                  value: function () {
                    if (this.sections) {
                      var sections = [].concat(
                          toConsumableArray(this.sections)
                        ),
                        offset = this.offsetValue,
                        matches = sections.filter(function (section, idx) {
                          var viewportHeight =
                              window.innerHeight ||
                              document.documentElement.clientHeight,
                            next = sections[idx + 1],
                            nextTop = next
                              ? next.getBoundingClientRect().top
                              : 0,
                            sectionTop = section.getBoundingClientRect().top;
                          return (
                            sectionTop >= 0 &&
                            sectionTop <= viewportHeight &&
                            (!next ||
                              (nextTop >= offset &&
                                offset - sectionTop < nextTop - offset))
                          );
                        });
                      if (matches && 0 !== matches.length)
                        return sections.indexOf(matches[0]);
                    }
                  },
                },
                {
                  key: "inactive",
                  value: function (item) {
                    var idx = void 0,
                      items = this.items;
                    if (
                      !(
                        (idx =
                          "number" == typeof item
                            ? item
                            : items.findIndex(function (el) {
                                return el === item;
                              })) < 0 || idx >= items.length
                      ) &&
                      items[idx]
                    ) {
                      var li = items[idx].closest("li"),
                        parentli = li.closest("ul").closest("li"),
                        is_subsection = li.classList.contains("sub-section"),
                        has_subsection =
                          li.classList.contains("has-sub-section");
                      li.removeAttribute("active"),
                        has_subsection
                          ? li.removeAttribute("expand")
                          : is_subsection && parentli.removeAttribute("expand");
                    }
                  },
                },
                {
                  key: "clearActive",
                  value: function () {
                    var _this4 = this;
                    this.items.forEach(function (item) {
                      return _this4.inactive(item);
                    });
                  },
                },
                {
                  key: "_attachListeners",
                  value: function (events) {
                    this.autobuild &&
                      document.addEventListener(
                        PfeJumpLinksNav.events.change,
                        this._panelChangedHandler
                      ),
                      window.addEventListener(
                        events.resize,
                        this._resizeHandler
                      ),
                      window.addEventListener(
                        events.scroll,
                        this._scrollHandler
                      ),
                      window.addEventListener(events.stuck, this._updateOffset);
                  },
                },
                {
                  key: "_dettachListeners",
                  value: function (events) {
                    this._observer.disconnect(),
                      document.removeEventListener(
                        events.change,
                        this._panelChangedHandler
                      ),
                      window.removeEventListener(
                        events.resize,
                        this._resizeHandler
                      ),
                      window.removeEventListener(
                        events.scroll,
                        this._scrollHandler
                      ),
                      window.removeEventListener(
                        events.keyup,
                        this._keyboardHandler
                      ),
                      window.removeEventListener(
                        events.stuck,
                        this._updateOffset
                      );
                  },
                },
                {
                  key: "_buildItem",
                  value: function (data) {
                    var isSubSection =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      item = document.createElement("li");
                    item.className = this.tag + "__item";
                    var link = document.createElement("a");
                    return (
                      (link.className = this.tag + "__link"),
                      (link.href = "#" + data.target),
                      link.setAttribute("data-target", data.target),
                      (link.innerHTML = data.content),
                      data.subsection && item.classList.add("has-sub-section"),
                      isSubSection && item.classList.add("sub-section"),
                      item.appendChild(link),
                      item
                    );
                  },
                },
                {
                  key: "_buildWrapper",
                  value: function () {
                    var className =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "pfe-jump-links-nav",
                      wrapper = document.createElement("ul");
                    return (wrapper.className = className), wrapper;
                  },
                },
                {
                  key: "_siblingJumpLinks",
                  value: function () {
                    var _this5 = this,
                      filterMethod =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : function (item) {
                              return item !== _this5;
                            };
                    return PfeJumpLinksNav.instances.filter(filterMethod);
                  },
                },
                {
                  key: "_reportHeight",
                  value: function () {
                    var height = 0,
                      stuckItems = this._siblingJumpLinks(function (item) {
                        return item.stuck && (item.horizontal || item.isMobile);
                      });
                    stuckItems.length > 0 &&
                      (height =
                        stuckItems[
                          stuckItems.length - 1
                        ].getBoundingClientRect().height);
                    var currentHeight = this.cssVariable(
                      "pfe-jump-links--Height--actual",
                      null,
                      document.body
                    );
                    (currentHeight &&
                      Number.parseInt(currentHeight, 10) === height) ||
                      this.cssVariable(
                        "pfe-jump-links--Height--actual",
                        height + "px",
                        document.body
                      );
                  },
                },
                {
                  key: "_isValidLightDom",
                  value: function () {
                    var valid = !0;
                    return (
                      (this.hasLightDOM() &&
                        (this.querySelector("ul") ||
                          this.querySelector("ol"))) ||
                        this.autobuild ||
                        (this.warn(
                          "This component requires a list in the light DOM to .\nAlternatively, add the `autobuild` attribute to dynamically generate the list from the provided panel."
                        ),
                        (valid = !1)),
                      this.logo &&
                        !this.horizontal &&
                        this.warn(
                          "The logo slot is NOT supported in vertical jump links."
                        ),
                      this.cta &&
                        !this.horizontal &&
                        this.warn(
                          "The link slot is NOT supported in vertical jump links."
                        ),
                      Number.isInteger(Number(this.customVar)) &&
                        this.warn(
                          "Using an integer with a unit is not supported for custom property --pfe-jump-links-panel--offset. The component strips the unit using parseInt(). For example so 1rem would become 1 and behave as if you had entered 1px. Values with a pixel unit will behave correctly."
                        ),
                      valid
                    );
                  },
                },
                {
                  key: "updateItem",
                  value: function (item) {
                    var _this6 = this,
                      nested =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                    (item.classList =
                      this.tag + "__item" + (nested ? " sub-section" : "")),
                      (item.querySelector("a").classList = this.tag + "__link");
                    var nestedList = item.querySelector("ul");
                    nestedList &&
                      (item.classList.add("has-sub-section"),
                      nestedList
                        .querySelectorAll(":scope > li")
                        .forEach(function (item) {
                          return _this6.updateItem(item, !0);
                        }));
                  },
                },
                {
                  key: "updateLightDOM",
                  value: function () {
                    var _this7 = this,
                      menu = this.querySelector("ul");
                    (menu.classList = this.tag),
                      menu
                        .querySelectorAll(":scope > li")
                        .forEach(function (item) {
                          return _this7.updateItem(item);
                        });
                  },
                },
                {
                  key: "_toShadowDOM",
                  value: function (menu) {
                    var _this8 = this;
                    this.container.innerHTML !== menu.outerHTML.toString() &&
                      (this.container.innerHTML = menu.outerHTML.toString()),
                      this.links.forEach(function (link) {
                        link.addEventListener("click", _this8._clickHandler);
                      });
                  },
                },
                {
                  key: "_checkVisible",
                  value: function () {
                    return (
                      (this.isVisible =
                        this.getBoundingClientRect().top <=
                          document.documentElement.clientHeight &&
                        this.getBoundingClientRect().right >= 0 &&
                        this.getBoundingClientRect().bottom >= 0 &&
                        this.getBoundingClientRect().left <=
                          document.documentElement.clientWidth),
                      this.isVisible
                    );
                  },
                },
                {
                  key: "_updateOffset",
                  value: function () {
                    this._reportHeight(),
                      this.horizontal
                        ? (this.style.top = this.offsetValue + "px")
                        : (this.style.top = this.offsetValue + 20 + "px");
                  },
                },
                {
                  key: "_clickHandler",
                  value: function (evt) {
                    var link = evt.target,
                      li = link.closest("." + this.tag + "__item");
                    if ((this.active(li), this.sections)) {
                      var idx = []
                        .concat(toConsumableArray(this.sections))
                        .findIndex(function (item) {
                          return item.id === link.hash.replace("#", "");
                        });
                      idx < 0 ||
                        (evt.preventDefault(),
                        (this._clicked = !0),
                        history.replaceState({}, "", link.href),
                        this.scrollToSection(idx));
                    }
                  },
                },
                {
                  key: "scrollToSection",
                  value: function (idx) {
                    var _this9 = this,
                      section = this.sections[idx],
                      offset = this.offsetValue;
                    this.stuck = !(this.getBoundingClientRect().top !== offset);
                    var scrollTarget =
                      window.pageYOffset + section.getBoundingClientRect().top;
                    if (
                      !section.classList.contains(
                        "pfe-jump-links__section--spacer"
                      )
                    ) {
                      scrollTarget -= offset;
                      var height = 0;
                      if (
                        (this.horizontal &&
                          (height = this.getBoundingClientRect().height),
                        this.isMobile)
                      )
                        height =
                          this.shadowRoot
                            .querySelector("pfe-accordion-header")
                            .getBoundingClientRect().height -
                          this.getBoundingClientRect().height;
                      height > 0 && (scrollTarget -= height);
                    }
                    var itemOffset = 20;
                    if (section.hasAttribute("offset")) {
                      var sectionOffsetProp = this._castPropertyValue(
                        { type: Number },
                        Number.parseInt(section.getAttribute("offset"), 10)
                      );
                      sectionOffsetProp && (itemOffset = sectionOffsetProp);
                    } else
                      this.panel &&
                        this.panel.offset &&
                        (itemOffset = this.panel.offset);
                    (scrollTarget -= itemOffset) < 0 && (scrollTarget = 0),
                      window.scroll({ top: scrollTarget, behavior: "smooth" }),
                      this.closeAccordion(),
                      (this.stuck = !(
                        this.getBoundingClientRect().top !== offset
                      )),
                      setTimeout(function () {
                        section.focus(), (_this9._clicked = !1);
                      }, 1e3);
                  },
                },
                {
                  key: "_stickyHandler",
                  value: function (oldVal, newVal) {
                    oldVal !== newVal &&
                      (this._reportHeight(),
                      this.emitEvent(PfeJumpLinksNav.events.stuck, {
                        detail: { stuck: newVal },
                      }));
                  },
                },
                {
                  key: "_scrollHandler",
                  value: function () {
                    var _this10 = this;
                    this._clicked ||
                      (clearTimeout(this._scrollHandler._tId),
                      (this._scrollHandler._tId = setTimeout(function () {
                        if ((_this10._checkVisible(), _this10.isVisible)) {
                          _this10.stuck = !(
                            _this10.getBoundingClientRect().top !==
                            _this10.offsetValue
                          );
                          var currentIdx = _this10.getActive();
                          currentIdx >= 0 &&
                            currentIdx !== _this10.currentActive &&
                            ((_this10.currentActive = currentIdx),
                            _this10.active(currentIdx));
                        }
                      }, 10)));
                  },
                },
                {
                  key: "_resizeHandler",
                  value: function () {
                    this.rebuild();
                  },
                },
                {
                  key: "_mutationHandler",
                  value: function () {
                    this.autobuild || ((this.update = !0), this.rebuild());
                  },
                },
                {
                  key: "_panelChangedHandler",
                  value: function () {
                    this.autobuild &&
                      ((this.update = !0),
                      (this._sections = null),
                      this.rebuild());
                  },
                },
              ]),
              PfeJumpLinksNav
            );
          })(),
          PfeJumpLinksPanel = (function (_PFElement) {
            function PfeJumpLinksPanel() {
              classCallCheck(this, PfeJumpLinksPanel);
              var _this = possibleConstructorReturn(
                this,
                (
                  PfeJumpLinksPanel.__proto__ ||
                  Object.getPrototypeOf(PfeJumpLinksPanel)
                ).call(this, PfeJumpLinksPanel, {
                  type: PfeJumpLinksPanel.PfeType,
                })
              );
              return (
                (_this._init = _this._init.bind(_this)),
                (_this._makeSpacers = _this._makeSpacers.bind(_this)),
                (_this._isValidMarkup = _this._isValidMarkup.bind(_this)),
                (_this._observer = new MutationObserver(function () {
                  _this._init(),
                    _this.emitEvent(PfeJumpLinksPanel.events.change, {});
                })),
                _this
              );
            }
            return (
              inherits(PfeJumpLinksPanel, PFElement),
              createClass(
                PfeJumpLinksPanel,
                [
                  {
                    key: "html",
                    get: function () {
                      return "<slot></slot>";
                    },
                  },
                  {
                    key: "sections",
                    get: function () {
                      return this.querySelectorAll(
                        "." + this.tag + "__section"
                      );
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-jump-links-panel";
                    },
                  },
                  {
                    key: "events",
                    get: function () {
                      return { change: this.tag + ":change" };
                    },
                  },
                  {
                    key: "observer",
                    get: function () {
                      return { childList: !0, subtree: !0 };
                    },
                  },
                  {
                    key: "PfeType",
                    get: function () {
                      return PFElement.PfeTypes.Content;
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        offset: { title: "Offset", type: Number },
                        scrolltarget: { title: "Scroll target", type: String },
                        spacers: {
                          title: "Inject spacers",
                          type: Boolean,
                          default: !1,
                          observer: "_makeSpacers",
                        },
                        oldOffset: { alias: "offset", attr: "pfe-c-offset" },
                        oldScrolltarget: {
                          alias: "scrolltarget",
                          attr: "pfe-c-scrolltarget",
                        },
                      };
                    },
                  },
                ]
              ),
              createClass(PfeJumpLinksPanel, [
                {
                  key: "connectedCallback",
                  value: function () {
                    get(
                      PfeJumpLinksPanel.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeJumpLinksPanel.prototype),
                      "connectedCallback",
                      this
                    ).call(this),
                      this._init();
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    get(
                      PfeJumpLinksPanel.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeJumpLinksPanel.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this),
                      this._observer.disconnect();
                  },
                },
                {
                  key: "_isValidMarkup",
                  value: function () {
                    0 === [].concat(toConsumableArray(this.sections)).length &&
                      this.warn(
                        "This panel does not contain any headings labeled with the " +
                          this.tag +
                          "__section class. Please add that class and an ID to any heading you would like surfaced in the jump links navigation."
                      );
                  },
                },
                {
                  key: "_makeSpacers",
                  value: function () {
                    this.spacers &&
                      (!this.sections ||
                        [].concat(toConsumableArray(this.sections)).length <=
                          0 ||
                        (this._observer.disconnect(),
                        []
                          .concat(toConsumableArray(this.sections))
                          .forEach(function (section) {
                            var parentEl = section.parentNode,
                              spacer = section.previousElementSibling;
                            (spacer &&
                              spacer.classList.contains(
                                "pfe-jump-links__section--spacer"
                              )) ||
                              ((spacer =
                                document.createElement("div")).classList.add(
                                "pfe-jump-links__section--spacer"
                              ),
                              parentEl.insertBefore(spacer, section)),
                              !section.id ||
                                (spacer.id && spacer.id === section.id) ||
                                ((spacer.id = section.id),
                                section.removeAttribute("id"),
                                section.setAttribute("data-target", spacer.id)),
                              (spacer.style.marginTop =
                                "calc(-1 * (var(--pfe-navigation--Height--actual, 0px) + var(--pfe-jump-links--Height--actual, 0px)))"),
                              (spacer.style.height =
                                "calc(var(--pfe-navigation--Height--actual, 0px) + var(--pfe-jump-links--Height--actual, 0px))");
                          }),
                        this._observer.observe(
                          this,
                          PfeJumpLinksPanel.observer
                        )));
                  },
                },
                {
                  key: "_init",
                  value: function () {
                    this._isValidMarkup(), this._makeSpacers();
                  },
                },
              ]),
              PfeJumpLinksPanel
            );
          })();
        return (
          PFElement.create(PfeJumpLinksNav),
          PFElement.create(PfeJumpLinksPanel),
          {
            PfeJumpLinksNav: PfeJumpLinksNav,
            PfeJumpLinksPanel: PfeJumpLinksPanel,
          }
        );
      }),
      (function (global, factory) {
        "object" == typeof exports && "undefined" != typeof module
          ? (module.exports = factory(
              require("../../pfelement/dist/pfelement.umd")
            ))
          : "function" == typeof define && define.amd
          ? define(["../../pfelement/dist/pfelement.umd"], factory)
          : ((global = global || self).PfeModal = factory(global.PFElement));
      })(this, function (PFElement) {
        "use strict";
        (PFElement =
          PFElement &&
          Object.prototype.hasOwnProperty.call(PFElement, "default")
            ? PFElement.default
            : PFElement),
          Array.prototype.filter ||
            (Array.prototype.filter = function (func, thisArg) {
              if (
                ("Function" != typeof func && "function" != typeof func) ||
                !this
              )
                throw new TypeError();
              var kValue,
                len = this.length >>> 0,
                res = new Array(len),
                t = this,
                c = 0,
                i = -1;
              if (void 0 === thisArg)
                for (; ++i !== len; )
                  i in this &&
                    ((kValue = t[i]), func(t[i], i, t) && (res[c++] = kValue));
              else
                for (; ++i !== len; )
                  i in this &&
                    ((kValue = t[i]),
                    func.call(thisArg, t[i], i, t) && (res[c++] = kValue));
              return (res.length = c), res;
            });
        var classCallCheck = function (instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError("Cannot call a class as a function");
          },
          createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                (descriptor.enumerable = descriptor.enumerable || !1),
                  (descriptor.configurable = !0),
                  "value" in descriptor && (descriptor.writable = !0),
                  Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
              );
            };
          })(),
          get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
              var parent = Object.getPrototypeOf(object);
              return null === parent ? void 0 : get(parent, property, receiver);
            }
            if ("value" in desc) return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0;
          },
          possibleConstructorReturn = function (self, call) {
            if (!self)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !call ||
              ("object" != typeof call && "function" != typeof call)
              ? self
              : call;
          },
          PfeModal = (function (_PFElement) {
            function PfeModal() {
              classCallCheck(this, PfeModal);
              var _this = possibleConstructorReturn(
                this,
                (PfeModal.__proto__ || Object.getPrototypeOf(PfeModal)).call(
                  this,
                  PfeModal,
                  { type: PfeModal.PfeType }
                )
              );
              return (
                (_this.header_id = _this.randomId),
                (_this.isOpen = !1),
                (_this._keydownHandler = _this._keydownHandler.bind(_this)),
                (_this.toggle = _this.toggle.bind(_this)),
                (_this.open = _this.open.bind(_this)),
                (_this.close = _this.close.bind(_this)),
                (_this._init = _this._init.bind(_this)),
                (_this._modalWindow = _this.shadowRoot.querySelector(
                  "." + _this.tag + "__window"
                )),
                (_this._modalCloseButton = _this.shadowRoot.querySelector(
                  "." + _this.tag + "__close"
                )),
                (_this._overlay = _this.shadowRoot.querySelector(
                  "." + _this.tag + "__overlay"
                )),
                (_this._container = _this.shadowRoot.querySelector(
                  "." + _this.tag + "__container"
                )),
                (_this._outer = _this.shadowRoot.querySelector(
                  "." + _this.tag + "__outer"
                )),
                (_this._observer = new MutationObserver(_this._init)),
                _this
              );
            }
            return (
              (function (subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof superClass
                  );
                (subClass.prototype = Object.create(
                  superClass && superClass.prototype,
                  {
                    constructor: {
                      value: subClass,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  }
                )),
                  superClass &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(subClass, superClass)
                      : (subClass.__proto__ = superClass));
              })(PfeModal, PFElement),
              createClass(
                PfeModal,
                [
                  {
                    key: "html",
                    get: function () {
                      return '\n<style>.pfe-modal__close{background-color:transparent;border:none;margin:0;padding:0;text-align:left}:host{display:block;position:relative}.pfe-modal__outer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:fixed;height:100%;width:100%;top:0;left:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:99;z-index:var(--pfe-theme--zindex--modal,99)}.pfe-modal__outer[hidden]{display:none}.pfe-modal__overlay{position:fixed;height:100%;width:100%;top:0;left:0;background-color:rgba(21,21,21,.5);background-color:var(--pfe-modal__overlay--BackgroundColor,var(--pfe-theme--color--overlay,rgba(21,21,21,.5)));cursor:pointer}.pfe-modal__overlay[hidden]{display:none}.pfe-modal__window{--context:var(--pfe-modal--context, light);--pfe-broadcasted--text:var(--pfe-theme--color--text, #151515);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted, #6a6e73);--pfe-broadcasted--link:var(--pfe-theme--color--link, #06c);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover, #004080);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus, #004080);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited, #6753ac);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited, none);position:relative;max-width:94vw;max-width:var(--pfe-modal--MaxWidth--mobile,94vw);min-width:50vw;min-width:var(--pfe-modal--MinWidth,50vw);max-height:90vh;max-height:var(--pfe-modal--MaxHeight,90vh);margin:0 auto;-webkit-box-shadow:0 .1875rem .4375rem .1875rem rgba(3,3,3,.13),0 .6875rem 1.5rem 1rem rgba(3,3,3,.12);box-shadow:0 .1875rem .4375rem .1875rem rgba(3,3,3,.13),0 .6875rem 1.5rem 1rem rgba(3,3,3,.12);-webkit-box-shadow:var(--pfe-theme--box-shadow--lg,0 .1875rem .4375rem .1875rem rgba(3,3,3,.13),0 .6875rem 1.5rem 1rem rgba(3,3,3,.12));box-shadow:var(--pfe-theme--box-shadow--lg,0 .1875rem .4375rem .1875rem rgba(3,3,3,.13),0 .6875rem 1.5rem 1rem rgba(3,3,3,.12));background-color:#fff;background-color:var(--pfe-theme--color--surface--lightest,#fff);color:#151515;color:var(--pfe-theme--color--text,#151515);border-radius:2px;border-radius:var(--pfe-theme--ui--border-radius,2px)}@media screen and (min-width:640px){.pfe-modal__window{max-width:70vw;max-width:var(--pfe-modal--MaxWidth,70vw)}}.pfe-modal__container{position:relative;max-height:inherit}.pfe-modal__container[hidden]{display:none}.pfe-modal__content{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:90vh;max-height:var(--pfe-modal--MaxHeight,90vh);padding:calc(1rem * 2) calc(1rem * 3.5) calc(1rem * 2) calc(1rem * 2);padding:var(--pfe-modal--Padding,calc(var(--pfe-theme--container-padding,1rem) * 2) calc(var(--pfe-theme--container-padding,1rem) * 3.5) calc(var(--pfe-theme--container-padding,1rem) * 2) calc(var(--pfe-theme--container-padding,1rem) * 2));-webkit-box-sizing:border-box;box-sizing:border-box}@media screen and (max-height:640px){.pfe-modal__content{padding:1rem calc(1rem * 3) 1rem 1rem;padding:var(--pfe-modal--Padding,var(--pfe-theme--container-padding,1rem) calc(var(--pfe-theme--container-padding,1rem) * 3) var(--pfe-theme--container-padding,1rem) var(--pfe-theme--container-padding,1rem))}}:host(:not([has_header])) .pfe-modal__content ::slotted(:nth-child(1)),:host(:not([has_header])) .pfe-modal__content ::slotted(:nth-child(2)){margin-top:0!important}.pfe-modal__content ::slotted([slot=pfe-modal--header]){margin-top:0!important}.pfe-modal__close{position:absolute;top:calc(1rem * .25);top:calc(var(--pfe-theme--container-padding,1rem) * .25);right:calc(1rem * .25);right:calc(var(--pfe-theme--container-padding,1rem) * .25);cursor:pointer;line-height:.5;padding:1rem;padding:var(--pfe-theme--container-padding,1rem)}@media screen and (min-width:640px){.pfe-modal__close{top:1rem;top:var(--pfe-theme--container-padding,1rem);right:1rem;right:var(--pfe-theme--container-padding,1rem)}}@media screen and (max-height:640px) and (min-width:640px){.pfe-modal__close{top:calc(1rem / 2);top:calc(var(--pfe-theme--container-padding,1rem)/ 2);right:calc(1rem / 2);right:calc(var(--pfe-theme--container-padding,1rem)/ 2)}}.pfe-modal__close>svg{fill:#151515;fill:var(--pfe-theme--color--text,#151515);height:20px;height:var(--pfe-theme--ui--element--size,20px);width:20px;width:var(--pfe-theme--ui--element--size,20px);height:calc(20px - 4px);height:var(--pfe-modal__close--size,calc(var(--pfe-theme--ui--element--size,20px) - 4px));width:calc(20px - 4px);width:var(--pfe-modal__close--size,calc(var(--pfe-theme--ui--element--size,20px) - 4px))} /*# sourceMappingURL=pfe-modal.min.css.map */</style>\n<slot name="pfe-modal--trigger"></slot>\n<section class="pfe-modal__outer" hidden>\n\t<div class="pfe-modal__overlay"></div>\n\t<div class="pfe-modal__window" tabindex="0" role="dialog" hidden>\n\t\t<div class="pfe-modal__container">\n\t\t\t<div class="pfe-modal__content">\n\t\t\t\t<slot name="pfe-modal--header"></slot>\n\t\t\t\t<slot></slot>\n\t\t\t</div>\n\t\t\t<button class="pfe-modal__close" aria-label="Close dialog">\n\t\t\t\t<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="-11 11 22 23">\n\t\t\t\t\t<path d="M30 16.669v-1.331c0-0.363-0.131-0.675-0.394-0.938s-0.575-0.394-0.938-0.394h-10.669v-10.65c0-0.362-0.131-0.675-0.394-0.938s-0.575-0.394-0.938-0.394h-1.331c-0.363 0-0.675 0.131-0.938 0.394s-0.394 0.575-0.394 0.938v10.644h-10.675c-0.362 0-0.675 0.131-0.938 0.394s-0.394 0.575-0.394 0.938v1.331c0 0.363 0.131 0.675 0.394 0.938s0.575 0.394 0.938 0.394h10.669v10.644c0 0.363 0.131 0.675 0.394 0.938 0.262 0.262 0.575 0.394 0.938 0.394h1.331c0.363 0 0.675-0.131 0.938-0.394s0.394-0.575 0.394-0.938v-10.637h10.669c0.363 0 0.675-0.131 0.938-0.394 0.269-0.262 0.4-0.575 0.4-0.938z" transform="rotate(45)"/>\n\t\t\t\t</svg>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</section>';
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-modal.html";
                    },
                  },
                  {
                    key: "schemaUrl",
                    get: function () {
                      return "pfe-modal.json";
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-modal.scss";
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "slots",
                    get: function () {
                      return {
                        trigger: {
                          title: "Trigger",
                          type: "array",
                          namedSlot: !0,
                          items: { oneOf: [{ $ref: "raw" }] },
                        },
                        header: {
                          title: "Header",
                          type: "array",
                          namedSlot: !0,
                          items: { oneOf: [{ $ref: "raw" }] },
                        },
                        body: {
                          title: "Body",
                          type: "array",
                          namedSlot: !1,
                          items: { oneOf: [{ $ref: "raw" }] },
                        },
                      };
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-modal";
                    },
                  },
                  {
                    key: "PfeType",
                    get: function () {
                      return PFElement.PfeTypes.Container;
                    },
                  },
                  {
                    key: "events",
                    get: function () {
                      return {
                        open: this.tag + ":open",
                        close: this.tag + ":close",
                      };
                    },
                  },
                ]
              ),
              createClass(PfeModal, [
                {
                  key: "connectedCallback",
                  value: function () {
                    get(
                      PfeModal.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeModal.prototype),
                      "connectedCallback",
                      this
                    ).call(this),
                      this._init(),
                      this.addEventListener("keydown", this._keydownHandler),
                      this._modalCloseButton.addEventListener(
                        "keydown",
                        this._keydownHandler
                      ),
                      this._modalCloseButton.addEventListener(
                        "click",
                        this.close
                      ),
                      this._overlay.addEventListener("click", this.close),
                      this._observer.observe(this, { childList: !0 });
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    get(
                      PfeModal.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeModal.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this),
                      this.removeEventListener("keydown", this._keydownHandler),
                      this._modalCloseButton.removeEventListener(
                        "click",
                        this.close
                      ),
                      this._modalCloseButton.removeEventListener(
                        "click",
                        this.close
                      ),
                      this._overlay.removeEventListener("click", this.close),
                      this.trigger &&
                        this.trigger.removeEventListener("click", this.open),
                      this._observer.disconnect();
                  },
                },
                {
                  key: "_init",
                  value: function () {
                    if (
                      (window.ShadyCSS && this._observer.disconnect(),
                      (this.trigger = this.querySelector(
                        '[slot="' + this.tag + '--trigger"]'
                      )),
                      (this.header = this.querySelector(
                        '[slot="' + this.tag + '--header"]'
                      )),
                      (this.body = [].concat(
                        (function (arr) {
                          if (Array.isArray(arr)) {
                            for (
                              var i = 0, arr2 = Array(arr.length);
                              i < arr.length;
                              i++
                            )
                              arr2[i] = arr[i];
                            return arr2;
                          }
                          return Array.from(arr);
                        })(this.querySelectorAll("*:not([slot])"))
                      )),
                      this.trigger &&
                        (this.trigger.addEventListener("click", this.open),
                        this.removeAttribute("hidden")),
                      this.header)
                    )
                      (this.header.id = this.header_id),
                        this._modalWindow.setAttribute(
                          "aria-labelledby",
                          this.header_id
                        );
                    else {
                      var headings = this.body.filter(function (el) {
                        return "H" === el.tagName.slice(0, 1);
                      });
                      headings.length > 0
                        ? ((headings[0].id = this.header_id),
                          this._modalWindow.setAttribute(
                            "aria-labelledby",
                            this.header_id
                          ))
                        : this.trigger &&
                          this._modalWindow.setAttribute(
                            "aria-label",
                            this.trigger.innerText
                          );
                    }
                    window.ShadyCSS &&
                      this._observer.observe(this, { childList: !0 });
                  },
                },
                {
                  key: "_keydownHandler",
                  value: function (event) {
                    var target = event.target || window.event.srcElement;
                    switch (event.key || event.keyCode) {
                      case "Tab":
                      case 9:
                        return void (
                          target === this._modalCloseButton &&
                          (event.preventDefault(), this._modalWindow.focus())
                        );
                      case "Escape":
                      case "Esc":
                      case 27:
                        return void this.close(event);
                      case "Enter":
                      case 13:
                        return void (
                          target === this.trigger && this.open(event)
                        );
                    }
                  },
                },
                {
                  key: "toggle",
                  value: function (event) {
                    return (
                      this.isOpen ? this.close(event) : this.open(event), this
                    );
                  },
                },
                {
                  key: "open",
                  value: function (event) {
                    event &&
                      (event.preventDefault(),
                      (this.trigger = event
                        ? event.target
                        : window.event.srcElement));
                    var detail = { open: !0 };
                    return (
                      event && this.trigger && (detail.trigger = this.trigger),
                      (this.isOpen = !0),
                      this._modalWindow.removeAttribute("hidden"),
                      this._overlay.removeAttribute("hidden"),
                      this._outer.removeAttribute("hidden"),
                      (document.body.style.overflow = "hidden"),
                      this._modalWindow.focus(),
                      this.emitEvent(PfeModal.events.open, { detail: detail }),
                      this
                    );
                  },
                },
                {
                  key: "close",
                  value: function (event) {
                    return (
                      event && event.preventDefault(),
                      (this.isOpen = !1),
                      this._modalWindow.setAttribute("hidden", !0),
                      this._overlay.setAttribute("hidden", !0),
                      this._outer.setAttribute("hidden", !0),
                      (document.body.style.overflow = "auto"),
                      this.trigger &&
                        (this.trigger.focus(), (this.trigger = null)),
                      this.emitEvent(PfeModal.events.close, {
                        detail: { open: !1 },
                      }),
                      this
                    );
                  },
                },
              ]),
              PfeModal
            );
          })();
        return PFElement.create(PfeModal), PfeModal;
      }),
      (function (global, factory) {
        "object" == typeof exports && "undefined" != typeof module
          ? (module.exports = factory(
              require("../../pfelement/dist/pfelement.umd"),
              require("../../pfe-accordion/dist/pfe-accordion.umd"),
              require("../../pfe-tabs/dist/pfe-tabs.umd")
            ))
          : "function" == typeof define && define.amd
          ? define(
              [
                "../../pfelement/dist/pfelement.umd",
                "../../pfe-accordion/dist/pfe-accordion.umd",
                "../../pfe-tabs/dist/pfe-tabs.umd",
              ],
              factory
            )
          : ((global = global || self).PfeContentSet = factory(
              global.PFElement,
              global.PfeAccordion,
              global.PfeTabs
            ));
      })(this, function (PFElement, PfeAccordion, PfeTabs) {
        "use strict";
        (PFElement =
          PFElement &&
          Object.prototype.hasOwnProperty.call(PFElement, "default")
            ? PFElement.default
            : PFElement),
          (PfeAccordion =
            PfeAccordion &&
            Object.prototype.hasOwnProperty.call(PfeAccordion, "default")
              ? PfeAccordion.default
              : PfeAccordion),
          (PfeTabs =
            PfeTabs && Object.prototype.hasOwnProperty.call(PfeTabs, "default")
              ? PfeTabs.default
              : PfeTabs),
          window.NodeList &&
            !NodeList.prototype.forEach &&
            (NodeList.prototype.forEach = function (callback, thisArg) {
              thisArg = thisArg || window;
              for (var i = 0; i < this.length; i++)
                callback.call(thisArg, this[i], i, this);
            });
        var classCallCheck = function (instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError("Cannot call a class as a function");
          },
          createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                (descriptor.enumerable = descriptor.enumerable || !1),
                  (descriptor.configurable = !0),
                  "value" in descriptor && (descriptor.writable = !0),
                  Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
              );
            };
          })(),
          get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
              var parent = Object.getPrototypeOf(object);
              return null === parent ? void 0 : get(parent, property, receiver);
            }
            if ("value" in desc) return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0;
          },
          possibleConstructorReturn = function (self, call) {
            if (!self)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !call ||
              ("object" != typeof call && "function" != typeof call)
              ? self
              : call;
          },
          toConsumableArray = function (arr) {
            if (Array.isArray(arr)) {
              for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
                arr2[i] = arr[i];
              return arr2;
            }
            return Array.from(arr);
          },
          CONTENT_MUTATION_CONFIG = {
            characterData: !1,
            childList: !0,
            subtree: !1,
          },
          PfeContentSet = (function (_PFElement) {
            function PfeContentSet() {
              classCallCheck(this, PfeContentSet);
              var _this = possibleConstructorReturn(
                this,
                (
                  PfeContentSet.__proto__ ||
                  Object.getPrototypeOf(PfeContentSet)
                ).call(this, PfeContentSet, { type: PfeContentSet.PfeType })
              );
              return (
                (_this.build = _this.build.bind(_this)),
                (_this._mutationHandler = _this._mutationHandler.bind(_this)),
                (_this._alignmentHandler = _this._alignmentHandler.bind(_this)),
                (_this._resizeHandler = _this._resizeHandler.bind(_this)),
                (_this._build = _this._build.bind(_this)),
                (_this._buildSets = _this._buildSets.bind(_this)),
                (_this._isHeader = _this._isHeader.bind(_this)),
                (_this._isPanel = _this._isPanel.bind(_this)),
                (_this._addNodes = _this._addNodes.bind(_this)),
                (_this._removeNodes = _this._removeNodes.bind(_this)),
                (_this._findConnection = _this._findConnection.bind(_this)),
                (_this._addNode = _this._addNode.bind(_this)),
                (_this._removeNode = _this._removeNode.bind(_this)),
                (_this._updateNode = _this._updateNode.bind(_this)),
                (_this._copyToId = _this._copyToId.bind(_this)),
                (_this._updateBreakpoint = _this._updateBreakpoint.bind(_this)),
                (_this._observer = new MutationObserver(
                  _this._mutationHandler
                )),
                _this
              );
            }
            return (
              (function (subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof superClass
                  );
                (subClass.prototype = Object.create(
                  superClass && superClass.prototype,
                  {
                    constructor: {
                      value: subClass,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  }
                )),
                  superClass &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(subClass, superClass)
                      : (subClass.__proto__ = superClass));
              })(PfeContentSet, PFElement),
              createClass(
                PfeContentSet,
                [
                  {
                    key: "html",
                    get: function () {
                      return '\n<style>:host{display:block}::slotted([hidden]),:host([hidden]),[hidden]{display:none!important}:host([align=center]),:host([align=right]){text-align:left} /*# sourceMappingURL=pfe-content-set.min.css.map */</style>\n<div id="container"></div>';
                    },
                  },
                  {
                    key: "styleUrl",
                    get: function () {
                      return "pfe-content-set.scss";
                    },
                  },
                  {
                    key: "templateUrl",
                    get: function () {
                      return "pfe-content-set.html";
                    },
                  },
                  {
                    key: "breakpointValue",
                    get: function () {
                      return parseInt(this.breakpoint.replace(/\D/g, ""));
                    },
                  },
                  {
                    key: "isTab",
                    get: function () {
                      return this.parentNode
                        ? this.parentNode.offsetWidth > this.breakpointValue
                        : window.outerWidth > this.breakpointValue;
                    },
                  },
                  {
                    key: "viewAll",
                    get: function () {
                      return this.view;
                    },
                  },
                  {
                    key: "view",
                    get: function () {
                      if (this._rendered)
                        return this.shadowRoot.querySelector(this.expectedTag);
                    },
                  },
                  {
                    key: "expectedTag",
                    get: function () {
                      return this.isIE11
                        ? "pfe-accordion"
                        : this.isTab
                        ? "pfe-tabs"
                        : "pfe-accordion";
                    },
                  },
                  {
                    key: "tabs",
                    get: function () {
                      return this.querySelector('pfe-tabs[slot="_view"]');
                    },
                  },
                  {
                    key: "accordion",
                    get: function () {
                      return this.querySelector('pfe-accordion[slot="_view"]');
                    },
                  },
                  {
                    key: "hasValidLightDOM",
                    get: function () {
                      var _this2 = this;
                      if (this.hasLightDOM()) {
                        var valid = !1;
                        return (
                          []
                            .concat(toConsumableArray(this.children))
                            .forEach(function (node) {
                              "#text" !== node.nodeName &&
                                (_this2._isHeader(node) ||
                                  _this2._isPanel(node) ||
                                  (node.tagName &&
                                    node.tagName.toLowerCase() ===
                                      _this2.expectedTag)) &&
                                (valid = !0);
                            }),
                          valid
                        );
                      }
                      return !1;
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.10.0";
                    },
                  },
                  {
                    key: "tag",
                    get: function () {
                      return "pfe-content-set";
                    },
                  },
                  {
                    key: "meta",
                    get: function () {
                      return {
                        title: "Content set",
                        description:
                          "This element creates a flexible component that renders an accordion or tabset depending on screen size.",
                      };
                    },
                  },
                  {
                    key: "pfeType",
                    get: function () {
                      return PFElement.pfeType.combo;
                    },
                  },
                  {
                    key: "properties",
                    get: function () {
                      return {
                        vertical: {
                          title: "Vertical orientation",
                          type: Boolean,
                          default: !1,
                          cascade: "pfe-tabs",
                        },
                        selectedIndex: {
                          title: "Index of the selected tab",
                          type: Number,
                          cascade: "pfe-tabs",
                        },
                        tabAlign: {
                          title: "Tab alignment",
                          type: String,
                          enum: ["center"],
                          cascade: "pfe-tabs",
                        },
                        variant: {
                          title: "Variant",
                          type: String,
                          enum: ["wind", "earth"],
                          default: "wind",
                          cascade: "pfe-tabs",
                        },
                        oldVariant: {
                          type: String,
                          attr: "pfe-variant",
                          alias: "variant",
                        },
                        oldTabHistory: {
                          type: Boolean,
                          alias: "tabHistory",
                          attr: "pfe-tab-history",
                        },
                        tabHistory: {
                          title: "Tab History",
                          type: Boolean,
                          default: !1,
                          cascade: "pfe-tabs",
                        },
                        disclosure: {
                          title: "Disclosure",
                          type: String,
                          values: ["true", "false"],
                          cascade: "pfe-accordion",
                        },
                        oldDisclosure: {
                          type: String,
                          alias: "disclosure",
                          attr: "pfe-disclosure",
                        },
                        breakpoint: {
                          title: "Custom breakpoint",
                          type: String,
                          default: "700",
                          observer: "_updateBreakpoint",
                        },
                        oldBreakpoint: {
                          type: String,
                          alias: "breakpoint",
                          attr: "pfe-breakpoint",
                        },
                        align: {
                          type: String,
                          enum: ["center"],
                          observer: "_alignmentHandler",
                        },
                        oldAlign: { attr: "pfe-align", alias: "align" },
                        pfeId: {
                          type: String,
                          attr: "pfe-id",
                          observer: "_copyToId",
                        },
                      };
                    },
                  },
                  {
                    key: "slots",
                    get: function () {
                      return {
                        default: {
                          title: "Default",
                          type: "array",
                          namedSlot: !1,
                          items: { $ref: "raw" },
                        },
                      };
                    },
                  },
                ]
              ),
              createClass(PfeContentSet, [
                {
                  key: "connectedCallback",
                  value: function () {
                    var _this3 = this;
                    get(
                      PfeContentSet.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeContentSet.prototype),
                      "connectedCallback",
                      this
                    ).call(this),
                      this.hasValidLightDOM && this._build(),
                      this.isIE11 ||
                        (window.addEventListener("resize", function () {
                          clearTimeout(_this3._resizeHandler._tId),
                            (_this3._resizeHandler._tId = setTimeout(
                              _this3._resizeHandler,
                              100
                            ));
                        }),
                        this._observer.observe(this, CONTENT_MUTATION_CONFIG));
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    var _this4 = this;
                    get(
                      PfeContentSet.prototype.__proto__ ||
                        Object.getPrototypeOf(PfeContentSet.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this),
                      this.isIE11 ||
                        (this._observer.disconnect(),
                        window.removeEventListener("resize", function () {
                          clearTimeout(_this4._resizeHandler._tId),
                            (_this4._resizeHandler._tId = setTimeout(
                              _this4._resizeHandler,
                              100
                            ));
                        }));
                  },
                },
                {
                  key: "build",
                  value: function () {
                    return this._build();
                  },
                },
                {
                  key: "_mutationHandler",
                  value: function (mutationsList) {
                    if (this.isIE11 || !mutationsList) this._build();
                    else {
                      var _iteratorNormalCompletion = !0,
                        _didIteratorError = !1,
                        _iteratorError = void 0;
                      try {
                        for (
                          var _step,
                            _iterator = mutationsList[Symbol.iterator]();
                          !(_iteratorNormalCompletion = (_step =
                            _iterator.next()).done);
                          _iteratorNormalCompletion = !0
                        ) {
                          var mutation = _step.value;
                          if ("childList" === mutation.type) {
                            if (
                              mutation.addedNodes &&
                              mutation.addedNodes.length > 0
                            ) {
                              var nodes = mutation.addedNodes;
                              nodes.length > 0 && this._addNodes(nodes);
                            }
                            if (
                              mutation.removedNodes &&
                              mutation.removedNodes.length > 0
                            ) {
                              var _nodes = mutation.removedNodes;
                              _nodes.length > 0 && this._removeNodes(_nodes);
                            }
                          }
                        }
                      } catch (err) {
                        (_didIteratorError = !0), (_iteratorError = err);
                      } finally {
                        try {
                          !_iteratorNormalCompletion &&
                            _iterator.return &&
                            _iterator.return();
                        } finally {
                          if (_didIteratorError) throw _iteratorError;
                        }
                      }
                    }
                  },
                },
                {
                  key: "_isHeader",
                  value: function (el) {
                    return (
                      void 0 !== el.hasAttribute &&
                      !(
                        !el.hasAttribute(this.tag + "--header") &&
                        !el.tagName.match(/H[1-6]/)
                      )
                    );
                  },
                },
                {
                  key: "_isPanel",
                  value: function (el) {
                    return (
                      void 0 !== el.previousElementSibling &&
                      !!this._isHeader(el.previousElementSibling)
                    );
                  },
                },
                {
                  key: "_addNodes",
                  value: function (list) {
                    this._build(list);
                  },
                },
                {
                  key: "_removeNodes",
                  value: function (list) {
                    var _this5 = this;
                    list.forEach(function (item) {
                      return _this5._removeNode(item);
                    }),
                      this.view &&
                        (this.view.hasChildNodes()
                          ? this.view.removeAttribute("hidden")
                          : this.view.setAttribute("hidden", ""));
                  },
                },
                {
                  key: "_findConnection",
                  value: function (node) {
                    var connection = null;
                    if (!this.view) return connection;
                    if (
                      "#text" !== node.nodeName &&
                      node.hasAttribute("slot")
                    ) {
                      var _id = node.getAttribute("slot");
                      _id &&
                        (connection = this.view.querySelector(
                          '[name="' + _id + '"]'
                        ));
                    }
                    return (
                      connection ||
                        this.warn(
                          'no slot could be found with [name="' + id + '"]'
                        ),
                      connection
                    );
                  },
                },
                {
                  key: "_addNode",
                  value: function (node) {
                    this.view && this._build();
                  },
                },
                {
                  key: "_removeNode",
                  value: function (node) {
                    if (this.view) {
                      var connection = this._findConnection(node);
                      if (connection) {
                        var header = void 0,
                          panel = void 0,
                          el = connection.parentElement;
                        "header" === el.getAttribute("content-type") &&
                        el.nextElementSibling &&
                        "panel" ===
                          el.nextElementSibling.getAttribute("content-type")
                          ? ((header = el), (panel = el.nextElementSibling))
                          : "panel" === el.getAttribute("content-type") &&
                            el.previousElementSibling &&
                            "header" ===
                              el.previousElementSibling.getAttribute(
                                "content-type"
                              ) &&
                            ((header = el.previousElementSibling),
                            (panel = el)),
                          header && header.remove(),
                          panel && panel.remove();
                      } else this._build();
                    }
                  },
                },
                {
                  key: "_updateNode",
                  value: function (node, textContent) {
                    if (this.view) {
                      var connection = this._findConnection(node);
                      connection
                        ? textContent
                          ? (connection.textContent = textContent)
                          : (connection.innerHTML = node.innerHTML)
                        : this._build();
                    }
                  },
                },
                {
                  key: "_build",
                  value: function () {
                    var _this6 = this,
                      addedNodes = this.children;
                    addedNodes.length > 0
                      ? Promise.all([
                          customElements.whenDefined(this.expectedTag),
                        ]).then(function () {
                          var template =
                              "pfe-tabs" === _this6.expectedTag
                                ? PfeTabs.contentTemplate
                                : PfeAccordion.contentTemplate,
                            sets = _this6._buildSets(addedNodes, template);
                          sets.id = _this6.id || _this6.randomId;
                          var container =
                            _this6.shadowRoot.querySelector("#container");
                          sets &&
                            container &&
                            (_this6.isIE11
                              ? ((container.innerHTML = ""),
                                container.appendChild(sets),
                                []
                                  .concat(
                                    toConsumableArray(
                                      _this6.querySelectorAll(
                                        "[pfe-content-set--header]"
                                      )
                                    )
                                  )
                                  .map(function (item) {
                                    item.style.display = "none";
                                  }))
                              : (_this6._observer.disconnect(),
                                (container.innerHTML = sets.outerHTML),
                                _this6.resetContext()),
                            _this6.cascadeProperties(),
                            _this6.removeAttribute("hidden"),
                            _this6.isIE11 ||
                              _this6._observer.observe(
                                _this6,
                                CONTENT_MUTATION_CONFIG
                              ));
                        })
                      : this.setAttribute("hidden", "");
                  },
                },
                {
                  key: "_buildSets",
                  value: function (sets, template) {
                    for (
                      var _this7 = this,
                        tagElement = document.createElement(this.expectedTag),
                        _loop = function (i) {
                          var header = sets[i],
                            panel = sets[i + 1],
                            wrapper = document.createElement("template");
                          wrapper.innerHTML = template.trim();
                          var templateMarkup = wrapper.content.cloneNode(!0);
                          header ||
                            _this7.warn(
                              "no element found at position " +
                                i +
                                " of the light DOM input."
                            ),
                            panel ||
                              _this7.warn(
                                "no element found at position " +
                                  (i + 1) +
                                  " of the light DOM input."
                              ),
                            header &&
                              _this7._isHeader(header) &&
                              panel &&
                              _this7._isPanel(panel) &&
                              [header, panel].forEach(function (region, idx) {
                                var section = 0 === idx ? "header" : "panel",
                                  piece = templateMarkup
                                    .querySelector(
                                      '[content-type="' + section + '"]'
                                    )
                                    .cloneNode(!0),
                                  slot = document.createElement("slot");
                                (slot.name = _this7.randomId.replace(
                                  "pfe-",
                                  section + "-"
                                )),
                                  piece.appendChild(slot),
                                  region.setAttribute("slot", slot.name),
                                  (region.id ||
                                    region.getAttribute("pfe-id")) &&
                                    (piece.id =
                                      region.id ||
                                      region.getAttribute("pfe-id")),
                                  tagElement.appendChild(piece);
                              });
                        },
                        i = 0;
                      i < sets.length;
                      i += 2
                    )
                      _loop(i);
                    return tagElement;
                  },
                },
                {
                  key: "_copyToId",
                  value: function (oldVal, newVal) {
                    oldVal === newVal || this.id || (this.id = newVal);
                  },
                },
                {
                  key: "_alignmentHandler",
                  value: function (oldVal, newVal) {
                    oldVal !== newVal && (this.tabAlign = newVal);
                  },
                },
                {
                  key: "_resizeHandler",
                  value: function () {
                    (!this.view ||
                      (this.view && this.view.tag !== this.expectedTag)) &&
                      this._build();
                  },
                },
                {
                  key: "_updateBreakpoint",
                  value: function () {
                    (!this.view ||
                      (this.view && this.view.tag !== this.expectedTag)) &&
                      this._build();
                  },
                },
              ]),
              PfeContentSet
            );
          })();
        return PFElement.create(PfeContentSet), PfeContentSet;
      }),
      (function (global, factory) {
        "object" == typeof exports && "undefined" != typeof module
          ? (module.exports = factory(
              require("../../pfelement/dist/pfelement.umd")
            ))
          : "function" == typeof define && define.amd
          ? define(["../../pfelement/dist/pfelement.umd"], factory)
          : ((global = global || self).PfeReadtime = factory(global.PFElement));
      })(this, function (PFElement) {
        "use strict";
        PFElement =
          PFElement &&
          Object.prototype.hasOwnProperty.call(PFElement, "default")
            ? PFElement.default
            : PFElement;
        var classCallCheck = function (instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError("Cannot call a class as a function");
          },
          createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                (descriptor.enumerable = descriptor.enumerable || !1),
                  (descriptor.configurable = !0),
                  "value" in descriptor && (descriptor.writable = !0),
                  Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
              );
            };
          })(),
          possibleConstructorReturn = function (self, call) {
            if (!self)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !call ||
              ("object" != typeof call && "function" != typeof call)
              ? self
              : call;
          };
        function getEstimatedWPM(language) {
          switch (language) {
            case "en":
            case "ko":
              return 228;
            case "zh":
              return 158;
            case "fr":
              return 195;
            case "ja":
              return 193;
            case "de":
              return 179;
            case "it":
              return 188;
            case "pt-br":
              return 181;
            case "es":
              return 218;
            default:
              return 228;
          }
        }
        var PfeReadtime = (function (_PFElement) {
          function PfeReadtime() {
            classCallCheck(this, PfeReadtime);
            var _this = possibleConstructorReturn(
              this,
              (
                PfeReadtime.__proto__ || Object.getPrototypeOf(PfeReadtime)
              ).call(this, PfeReadtime, {
                type: PfeReadtime.PfeType,
                delayRender: !0,
              })
            );
            return (
              (_this._forChangeHandler = _this._forChangeHandler.bind(_this)),
              (_this._langChangedHandler =
                _this._langChangedHandler.bind(_this)),
              _this
            );
          }
          return (
            (function (subClass, superClass) {
              if ("function" != typeof superClass && null !== superClass)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof superClass
                );
              (subClass.prototype = Object.create(
                superClass && superClass.prototype,
                {
                  constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                }
              )),
                superClass &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(subClass, superClass)
                    : (subClass.__proto__ = superClass));
            })(PfeReadtime, PFElement),
            createClass(
              PfeReadtime,
              [
                {
                  key: "html",
                  get: function () {
                    return (
                      '\n<style>:host{font-size:1rem;font-size:var(--pfe-readtime--FontSize,var(--pf-global--FontSize--md,1rem))}:host([hidden]){display:none} /*# sourceMappingURL=pfe-readtime.min.css.map */</style>\n<span class="pfe-readtime__text">' +
                      this.readString +
                      "</span>"
                    );
                  },
                },
                {
                  key: "templateUrl",
                  get: function () {
                    return "pfe-readtime.html";
                  },
                },
                {
                  key: "styleUrl",
                  get: function () {
                    return "pfe-readtime.scss";
                  },
                },
                {
                  key: "readtime",
                  get: function () {
                    return Math.floor(this.wordCount / this.wpm) || 0;
                  },
                },
                {
                  key: "readString",
                  get: function () {
                    if (!(this.readtime <= 0))
                      return (
                        this.removeAttribute("hidden"),
                        this.templateString && this.templateString.match(/%t/)
                          ? this.templateString.replace("%t", this.readtime)
                          : "" + this.readtime + this.templateString
                      );
                    this.setAttribute("hidden", "");
                  },
                },
              ],
              [
                {
                  key: "version",
                  get: function () {
                    return "1.10.0";
                  },
                },
                {
                  key: "tag",
                  get: function () {
                    return "pfe-readtime";
                  },
                },
                {
                  key: "meta",
                  get: function () {
                    return {
                      title: "Readtime",
                      description:
                        "This element will collect a word count on a given section and calculate the readtime based on that count.",
                    };
                  },
                },
                {
                  key: "PfeType",
                  get: function () {
                    return PFElement.PfeTypes.Content;
                  },
                },
                {
                  key: "properties",
                  get: function () {
                    return {
                      wpm: {
                        title: "Words per minute",
                        type: Number,
                        default: function (el) {
                          return getEstimatedWPM(el._lang);
                        },
                        observer: "render",
                      },
                      wordCount: {
                        title: "Number of words in the content",
                        type: Number,
                        default: 0,
                        observer: "render",
                      },
                      templateString: {
                        title: "Template for printing the readtime",
                        description:
                          "Translatable string for printing out the readtime in a readable format. Use %t as a stand-in for the calculated value.",
                        attr: "template",
                        type: String,
                        default: function (el) {
                          return el.textContent.trim() || "%t-minute readtime";
                        },
                        observer: "render",
                      },
                      _lang: {
                        title: "Language of content",
                        type: String,
                        attr: "lang",
                        enum: [
                          "en",
                          "ko",
                          "zh",
                          "fr",
                          "ja",
                          "de",
                          "it",
                          "pt-br",
                          "es",
                        ],
                        default: function () {
                          return document.documentElement.lang || "en";
                        },
                        observer: "_langChangedHandler",
                      },
                      for: {
                        title: "Element containing content",
                        type: String,
                        observer: "_forChangeHandler",
                      },
                    };
                  },
                },
              ]
            ),
            createClass(PfeReadtime, [
              {
                key: "connectedCallback",
                value: function () {
                  (function get(object, property, receiver) {
                    null === object && (object = Function.prototype);
                    var desc = Object.getOwnPropertyDescriptor(
                      object,
                      property
                    );
                    if (void 0 === desc) {
                      var parent = Object.getPrototypeOf(object);
                      return null === parent
                        ? void 0
                        : get(parent, property, receiver);
                    }
                    if ("value" in desc) return desc.value;
                    var getter = desc.get;
                    return void 0 !== getter ? getter.call(receiver) : void 0;
                  })(
                    PfeReadtime.prototype.__proto__ ||
                      Object.getPrototypeOf(PfeReadtime.prototype),
                    "connectedCallback",
                    this
                  ).call(this),
                    this.render();
                },
              },
              {
                key: "_forChangeHandler",
                value: function (oldVal, newVal) {
                  if (newVal !== oldVal) {
                    var target =
                      document.querySelector(newVal) ||
                      document.querySelector("#" + newVal);
                    if (target) {
                      if (
                        ((this.content = target),
                        target.hasAttribute("word-count"))
                      ) {
                        var wcAttr = target.getAttribute("word-count");
                        Number(wcAttr) >= 0 &&
                          (this.wordCount = Number(wcAttr));
                      } else
                        target.textContent.trim() &&
                          (this.wordCount =
                            target.textContent.split(/\b\w+\b/).length);
                      this.render();
                    }
                  }
                },
              },
              {
                key: "_langChangedHandler",
                value: function (oldVal, newVal) {
                  newVal !== oldVal &&
                    ((this.wpm = getEstimatedWPM(newVal)), this.render());
                },
              },
            ]),
            PfeReadtime
          );
        })();
        return PFElement.create(PfeReadtime), PfeReadtime;
      });
  });
//# sourceMappingURL=webrh.webcomponents.min.js.map
