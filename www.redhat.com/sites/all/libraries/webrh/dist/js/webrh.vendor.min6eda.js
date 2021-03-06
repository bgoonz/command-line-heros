/*! eq.js (with polyfills) v1.9.0 (c) 2013-2016 Sam Richard with thanks to the Financial Times, MIT license */
!(function () {
  "getPrototypeOf" in Object ||
    (Object.getPrototypeOf = function (t) {
      if (t !== Object(t))
        throw new TypeError("Object.getPrototypeOf called on non-object");
      return t.constructor ? t.constructor.prototype : null;
    }),
    "requestAnimationFrame" in this ||
      !(function (t) {
        "use strict";
        var e = Date.now();
        (t.requestAnimationFrame = function (t) {
          if ("function" != typeof t)
            throw new TypeError(t + "is not a function");
          var n = Date.now(),
            o = 16 + e - n;
          return (
            0 > o && (o = 0),
            (e = n),
            setTimeout(function () {
              (e = Date.now()), t(performance.now());
            }, o)
          );
        }),
          (t.cancelAnimationFrame = function (t) {
            clearTimeout(t);
          });
      })(this),
    (function (t) {
      if (!("Event" in t)) return !1;
      if ("function" == typeof t.Event) return !0;
      try {
        return new Event("click"), !0;
      } catch (e) {
        return !1;
      }
    })(this) ||
      (this.Event = function (t, e) {
        if (!t) throw new Error("Not enough arguments");
        var n = document.createEvent("Event"),
          o = e && void 0 !== e.bubbles ? e.bubbles : !1,
          r = e && void 0 !== e.cancelable ? e.cancelable : !1;
        return n.initEvent(t, o, r), n;
      }),
    ("CustomEvent" in this &&
      ("function" == typeof this.CustomEvent ||
        this.CustomEvent.toString().indexOf("CustomEventConstructor") > -1)) ||
      ((this.CustomEvent = function (t, e) {
        if (!t)
          throw Error(
            'TypeError: Failed to construct "CustomEvent": An event name must be provided.'
          );
        var n;
        e = e || { bubbles: !1, cancelable: !1, detail: null };
        try {
          (n = document.createEvent("CustomEvent")),
            n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail);
        } catch (o) {
          (n = document.createEvent("Event")),
            n.initEvent(t, e.bubbles, e.cancelable),
            (n.detail = e.detail);
        }
        return n;
      }),
      (CustomEvent.prototype = Event.prototype)),
    "addEventListener" in this ||
      document.attachEvent("onreadystatechange", function () {
        "complete" === document.readyState &&
          document.dispatchEvent(
            new Event("DOMContentLoaded", { bubbles: !0 })
          );
      }),
    "getComputedStyle" in this ||
      !(function (t) {
        function e(t, n, o) {
          var r,
            i = (t.document &&
              t.currentStyle[n].match(/([\d\.]+)(%|cm|em|in|mm|pc|pt|)/)) || [
              0,
              0,
              "",
            ],
            u = i[1],
            c = i[2];
          return (
            (o = o
              ? /%|em/.test(c) && t.parentElement
                ? e(t.parentElement, "fontSize", null)
                : 16
              : o),
            (r =
              "fontSize" == n
                ? o
                : /width/i.test(n)
                ? t.clientWidth
                : t.clientHeight),
            "%" == c
              ? (u / 100) * r
              : "cm" == c
              ? 0.3937 * u * 96
              : "em" == c
              ? u * o
              : "in" == c
              ? 96 * u
              : "mm" == c
              ? (0.3937 * u * 96) / 10
              : "pc" == c
              ? (12 * u * 96) / 72
              : "pt" == c
              ? (96 * u) / 72
              : u
          );
        }
        function n(t, e) {
          var n = "border" == e ? "Width" : "",
            o = e + "Top" + n,
            r = e + "Right" + n,
            i = e + "Bottom" + n,
            u = e + "Left" + n;
          t[e] = (
            t[o] == t[r] && t[o] == t[i] && t[o] == t[u]
              ? [t[o]]
              : t[o] == t[i] && t[u] == t[r]
              ? [t[o], t[r]]
              : t[u] == t[r]
              ? [t[o], t[r], t[i]]
              : [t[o], t[r], t[i], t[u]]
          ).join(" ");
        }
        function o(t) {
          var o,
            r = this,
            i = t.currentStyle,
            u = e(t, "fontSize"),
            c = function (t) {
              return "-" + t.toLowerCase();
            };
          for (o in i)
            if (
              (Array.prototype.push.call(
                r,
                "styleFloat" == o ? "float" : o.replace(/[A-Z]/, c)
              ),
              "width" == o)
            )
              r[o] = t.offsetWidth + "px";
            else if ("height" == o) r[o] = t.offsetHeight + "px";
            else if ("styleFloat" == o) r["float"] = i[o];
            else if (/margin.|padding.|border.+W/.test(o) && "auto" != r[o])
              r[o] = Math.round(e(t, o, u)) + "px";
            else if (/^outline/.test(o))
              try {
                r[o] = i[o];
              } catch (a) {
                (r.outlineColor = i.color),
                  (r.outlineStyle = r.outlineStyle || "none"),
                  (r.outlineWidth = r.outlineWidth || "0px"),
                  (r.outline = [
                    r.outlineColor,
                    r.outlineWidth,
                    r.outlineStyle,
                  ].join(" "));
              }
            else r[o] = i[o];
          n(r, "margin"),
            n(r, "padding"),
            n(r, "border"),
            (r.fontSize = Math.round(u) + "px");
        }
        (o.prototype = {
          constructor: o,
          getPropertyPriority: function () {
            throw new Error("NotSupportedError: DOM Exception 9");
          },
          getPropertyValue: function (t) {
            return this[
              t.replace(/-\w/g, function (t) {
                return t[1].toUpperCase();
              })
            ];
          },
          item: function (t) {
            return this[t];
          },
          removeProperty: function () {
            throw new Error("NoModificationAllowedError: DOM Exception 7");
          },
          setProperty: function () {
            throw new Error("NoModificationAllowedError: DOM Exception 7");
          },
          getPropertyCSSValue: function () {
            throw new Error("NotSupportedError: DOM Exception 9");
          },
        }),
          (t.getComputedStyle = function (t) {
            return new o(t);
          });
      })(this),
    "forEach" in Array.prototype ||
      (Array.prototype.forEach = function (t) {
        if (void 0 === this || null === this)
          throw new TypeError(this + "is not an object");
        if (!(t instanceof Function))
          throw new TypeError(t + " is not a function");
        for (
          var e = Object(this),
            n = arguments[1],
            o = e instanceof String ? e.split("") : e,
            r = Math.max(Math.min(o.length, 9007199254740991), 0) || 0,
            i = -1;
          ++i < r;

        )
          i in o && t.call(n, o[i], i, e);
      });
})(),
  (function (t) {
    "use strict";
    function e() {
      (this.nodes = []),
        (this.eqsLength = 0),
        (this.widths = []),
        (this.points = []),
        (this.callback = void 0);
    }
    function n(t, e, n) {
      t.addEventListener
        ? t.addEventListener(e, n, !1)
        : t.attachEvent("on" + e, function () {
            return n.call(t, window.event);
          });
    }
    function o(t) {
      return window
        .getComputedStyle(t, ":before")
        .getPropertyValue("content")
        .slice(1, -1);
    }
    var r = function (t, e) {
      return [].slice.call(t).concat([].slice.call(e));
    };
    (e.prototype.query = function (e, n) {
      var r,
        i = Object.getPrototypeOf(t);
      n && "function" == typeof n && (i.callback = n),
        e && "number" != typeof e
          ? (r = e.length)
          : ((e = i.nodes), (r = i.nodesLength));
      var u,
        c = [],
        a = [];
      for (u = 0; r > u; u++) {
        var l = e[u].getBoundingClientRect(),
          s = l.width;
        void 0 === s && (s = l.right - l.left), c.push(s);
        try {
          a.push(i.sortObj(e[u].getAttribute("data-eq-pts")));
        } catch (f) {
          try {
            a.push(i.sortObj(o(e[u])));
          } catch (d) {
            a.push([{ key: "", value: 0 }]);
          }
        }
      }
      (i.widths = c),
        (i.points = a),
        e && "number" != typeof e
          ? i.nodeWrites(e, c, a)
          : n && "function" != typeof n
          ? i.nodeWrites()
          : window.requestAnimationFrame(i.nodeWrites);
    }),
      (e.prototype.nodeWrites = function (e) {
        var n,
          o,
          r,
          i,
          u,
          c,
          a,
          l = Object.getPrototypeOf(t),
          s = l.widths,
          f = l.points;
        for (
          e && "number" != typeof e
            ? (i = e.length)
            : ((e = l.nodes), (i = l.nodesLength)),
            n = 0;
          i > n;
          n++
        ) {
          var d = s[n],
            p = e[n],
            h = f[n],
            y = [],
            v = h.length;
          if (d < h[0].value) a = null;
          else if (d >= h[v - 1].value) {
            for (r = 0; v > r; r++) y.push(h[r].key);
            a = y.join(" ");
          } else
            for (o = 0; v > o; o++) {
              var m = h[o],
                b = h[o + 1];
              if ((y.push(m.key), 0 === o && d < m.value)) {
                a = null;
                break;
              }
              if (void 0 !== b && void 0 === b.value) {
                y.push(b.key), (a = y.join(" "));
                break;
              }
              if (d >= m.value && d < b.value) {
                a = y.join(" ");
                break;
              }
            }
          null === a
            ? p.removeAttribute("data-eq-state")
            : p.setAttribute("data-eq-state", a),
            (c = new CustomEvent("eqResize", { detail: a, bubbles: !0 })),
            p.dispatchEvent(c);
        }
        l.callback && ((u = l.callback), (l.callback = void 0), u(e));
      }),
      (e.prototype.refreshNodes = function () {
        var e = Object.getPrototypeOf(t),
          n = [];
        (e.nodes = document.querySelectorAll("[data-eq-pts]")),
          (n = o(document.querySelector("html")).split(", ")),
          n.forEach(function (t) {
            "" !== t && (e.nodes = r(e.nodes, document.querySelectorAll(t)));
          }),
          (e.nodesLength = e.nodes.length);
      }),
      (e.prototype.sortObj = function (t) {
        for (var e = [], n = t.split(","), o = 0; o < n.length; o++) {
          var r = n[o].split(":");
          e.push({
            key: r[0].replace(/^\s+|\s+$/g, ""),
            value: parseFloat(r[1]),
          });
        }
        return e.sort(function (t, e) {
          return t.value - e.value;
        });
      }),
      (e.prototype.definePts = function (t, e) {
        return (
          (e = e ? e : {}),
          (e = JSON.stringify(e)),
          (e = e.substring(1, e.length - 1)),
          (e = e.replace(/:/g, ": ")),
          (e = e.replace(/,/g, ", ")),
          (e = e.replace(/"/g, "")),
          t.setAttribute("data-eq-pts", e),
          e
        );
      }),
      (e.prototype.all = function (e) {
        var n = Object.getPrototypeOf(t),
          o = e ? !0 : !1;
        n.refreshNodes(),
          o ? n.query(void 0, e) : window.requestAnimationFrame(n.query);
      }),
      (t = t || new e()),
      n(window, "DOMContentLoaded", function () {
        t.all(!1);
      }),
      n(window, "load", function () {
        t.all(!0);
      }),
      n(window, "resize", function () {
        t.all(!0);
      }),
      "undefined" != typeof module && module.exports
        ? (module.exports = t)
        : "function" == typeof define && define.amd
        ? define("eqjs", function () {
            return t;
          })
        : (window.eqjs = t);
  })(window.eqjs);
//# sourceMappingURL=eq.polyfilled.min.js.map

/*!
Waypoints - 4.0.1
Copyright ?? 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!(function () {
  "use strict";
  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] &&
        (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1);
  }
  var e = 0,
    i = {};
  (t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (t.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (t.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key];
    }),
    (t.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (t.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (t.prototype.next = function () {
      return this.group.next(this);
    }),
    (t.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (t.invokeAll = function (t) {
      var e = [];
      for (var o in i) e.push(i[o]);
      for (var n = 0, r = e.length; r > n; n++) e[n][t]();
    }),
    (t.destroyAll = function () {
      t.invokeAll("destroy");
    }),
    (t.disableAll = function () {
      t.invokeAll("disable");
    }),
    (t.enableAll = function () {
      t.Context.refreshAll();
      for (var e in i) i[e].enabled = !0;
      return this;
    }),
    (t.refreshAll = function () {
      t.Context.refreshAll();
    }),
    (t.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (t.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (t.adapters = []),
    (t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (t.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = t);
})(),
  (function () {
    "use strict";
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        n.windowContext ||
          ((n.windowContext = !0), (n.windowContext = new e(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || n.isTouch) &&
            ((e.didScroll = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        n.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll,
            r = n ? o.forward : o.backward;
          for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s];
            if (null !== a.triggerPoint) {
              var l = o.oldScroll < a.triggerPoint,
                h = o.newScroll >= a.triggerPoint,
                p = l && h,
                u = !l && !h;
              (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
            }
          }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? n.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? n.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var r in t) {
          var s = t[r];
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              u,
              c,
              d = this.waypoints[r][a],
              f = d.options.offset,
              w = d.triggerPoint,
              y = 0,
              g = null == w;
            d.element !== d.element.window &&
              (y = d.adapter.offset()[s.offsetProp]),
              "function" == typeof f
                ? (f = f.apply(d))
                : "string" == typeof f &&
                  ((f = parseFloat(f)),
                  d.options.offset.indexOf("%") > -1 &&
                    (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (d.triggerPoint = Math.floor(y + l - f)),
              (h = w < s.oldScroll),
              (p = d.triggerPoint >= s.oldScroll),
              (u = h && p),
              (c = !h && !p),
              !g && u
                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                : !g && c
                ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                : g &&
                  s.oldScroll >= d.triggerPoint &&
                  (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
          }
        }
        return (
          n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (e.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        r && r(), e.refreshAll();
      }),
      (n.requestAnimationFrame = function (e) {
        var i =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t;
        i.call(window, e);
      }),
      (n.Context = e);
  })(),
  (function () {
    "use strict";
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this);
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = "up" === i || "left" === i;
          o.sort(n ? e : t);
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r];
            (a.options.continuous || r === o.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
          o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t);
      }),
      (n.Group = i);
  })(),
  (function () {
    "use strict";
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o];
      }),
      i.adapters.push({ name: "jquery", Adapter: t }),
      (i.Adapter = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      return function () {
        var i = [],
          o = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
          this.each(function () {
            var n = t.extend({}, o, { element: this });
            "string" == typeof n.context &&
              (n.context = t(this).closest(n.context)[0]),
              i.push(new e(n));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();
