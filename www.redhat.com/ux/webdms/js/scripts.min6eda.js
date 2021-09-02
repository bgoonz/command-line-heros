/* ========================================================================================== */
/*  Project: Studio - Web
/*  Author: Digital Business
/*  Date: Wed Aug 18 2021 17:07:22 GMT+0000 (Coordinated Universal Time)
/*  
/*  Copyright © 2021 Red Hat, Inc.
/*  https://www.redhat.com
/* ========================================================================================== */

/*!
 * Bootstrap v4.0.0 (https://getbootstrap.com)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
function throttle(t, e) {
  var n,
    i,
    r,
    o = null,
    s = 0,
    a = function () {
      (s = Date.now()), (o = null), (r = t.apply(n, i)), o || (n = i = null);
    };
  return function () {
    var l = Date.now(),
      c = e - (l - s);
    return (
      (n = this),
      (i = arguments),
      c <= 0 || c > e
        ? (o && (clearTimeout(o), (o = null)),
          (s = l),
          (r = t.apply(n, i)),
          o || (n = i = null))
        : o || (o = setTimeout(a, c)),
      r
    );
  };
}
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery"], e)
    : e((t.bootstrap = {}), t.jQuery);
})(this, function (t, e) {
  "use strict";
  function n(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function i(t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t;
  }
  function r() {
    return (r =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }).apply(this, arguments);
  }
  for (
    var o = (function (t) {
        var e = !1;
        function n(e) {
          var n = this,
            r = !1;
          return (
            t(this).one(i.TRANSITION_END, function () {
              r = !0;
            }),
            setTimeout(function () {
              r || i.triggerTransitionEnd(n);
            }, e),
            this
          );
        }
        var i = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (t) {
            do {
              t += ~~(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
          },
          getSelectorFromElement: function (e) {
            var n = e.getAttribute("data-target");
            (n && "#" !== n) || (n = e.getAttribute("href") || ""),
              "#" === n.charAt(0) &&
                (n = (function (e) {
                  return (e =
                    "function" == typeof t.escapeSelector
                      ? t.escapeSelector(e).substr(1)
                      : e.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                })(n));
            try {
              return t(document).find(n).length > 0 ? n : null;
            } catch (t) {
              return null;
            }
          },
          reflow: function (t) {
            return t.offsetHeight;
          },
          triggerTransitionEnd: function (n) {
            t(n).trigger(e.end);
          },
          supportsTransitionEnd: function () {
            return Boolean(e);
          },
          isElement: function (t) {
            return (t[0] || t).nodeType;
          },
          typeCheckConfig: function (t, e, n) {
            for (var r in n)
              if (Object.prototype.hasOwnProperty.call(n, r)) {
                var o = n[r],
                  s = e[r],
                  a =
                    s && i.isElement(s)
                      ? "element"
                      : ((l = s),
                        {}.toString
                          .call(l)
                          .match(/\s([a-zA-Z]+)/)[1]
                          .toLowerCase());
                if (!new RegExp(o).test(a))
                  throw new Error(
                    t.toUpperCase() +
                      ': Option "' +
                      r +
                      '" provided type "' +
                      a +
                      '" but expected type "' +
                      o +
                      '".'
                  );
              }
            var l;
          },
        };
        return (
          (e = ("undefined" == typeof window || !window.QUnit) && {
            end: "transitionend",
          }),
          (t.fn.emulateTransitionEnd = n),
          i.supportsTransitionEnd() &&
            (t.event.special[i.TRANSITION_END] = {
              bindType: e.end,
              delegateType: e.end,
              handle: function (e) {
                if (t(e.target).is(this))
                  return e.handleObj.handler.apply(this, arguments);
              },
            }),
          i
        );
      })((e = e && e.hasOwnProperty("default") ? e.default : e)),
      s = (function (t) {
        var e = "alert",
          n = t.fn[e],
          r = {
            CLOSE: "close.bs.alert",
            CLOSED: "closed.bs.alert",
            CLICK_DATA_API: "click.bs.alert.data-api",
          },
          s = "alert",
          a = "fade",
          l = "show",
          c = (function () {
            function e(t) {
              this._element = t;
            }
            var n = e.prototype;
            return (
              (n.close = function (t) {
                t = t || this._element;
                var e = this._getRootElement(t);
                this._triggerCloseEvent(e).isDefaultPrevented() ||
                  this._removeElement(e);
              }),
              (n.dispose = function () {
                t.removeData(this._element, "bs.alert"), (this._element = null);
              }),
              (n._getRootElement = function (e) {
                var n = o.getSelectorFromElement(e),
                  i = !1;
                return (
                  n && (i = t(n)[0]), i || (i = t(e).closest("." + s)[0]), i
                );
              }),
              (n._triggerCloseEvent = function (e) {
                var n = t.Event(r.CLOSE);
                return t(e).trigger(n), n;
              }),
              (n._removeElement = function (e) {
                var n = this;
                t(e).removeClass(l),
                  o.supportsTransitionEnd() && t(e).hasClass(a)
                    ? t(e)
                        .one(o.TRANSITION_END, function (t) {
                          return n._destroyElement(e, t);
                        })
                        .emulateTransitionEnd(150)
                    : this._destroyElement(e);
              }),
              (n._destroyElement = function (e) {
                t(e).detach().trigger(r.CLOSED).remove();
              }),
              (e._jQueryInterface = function (n) {
                return this.each(function () {
                  var i = t(this),
                    r = i.data("bs.alert");
                  r || ((r = new e(this)), i.data("bs.alert", r)),
                    "close" === n && r[n](this);
                });
              }),
              (e._handleDismiss = function (t) {
                return function (e) {
                  e && e.preventDefault(), t.close(this);
                };
              }),
              i(e, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
              ]),
              e
            );
          })();
        return (
          t(document).on(
            r.CLICK_DATA_API,
            '[data-dismiss="alert"]',
            c._handleDismiss(new c())
          ),
          (t.fn[e] = c._jQueryInterface),
          (t.fn[e].Constructor = c),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = n), c._jQueryInterface;
          }),
          c
        );
      })(e),
      a = (function (t) {
        var e = "button",
          n = t.fn[e],
          r = "active",
          o = "btn",
          s = "focus",
          a = '[data-toggle^="button"]',
          l = '[data-toggle="buttons"]',
          c = "input",
          h = ".active",
          f = ".btn",
          u = {
            CLICK_DATA_API: "click.bs.button.data-api",
            FOCUS_BLUR_DATA_API:
              "focus.bs.button.data-api blur.bs.button.data-api",
          },
          d = (function () {
            function e(t) {
              this._element = t;
            }
            var n = e.prototype;
            return (
              (n.toggle = function () {
                var e = !0,
                  n = !0,
                  i = t(this._element).closest(l)[0];
                if (i) {
                  var o = t(this._element).find(c)[0];
                  if (o) {
                    if ("radio" === o.type)
                      if (o.checked && t(this._element).hasClass(r)) e = !1;
                      else {
                        var s = t(i).find(h)[0];
                        s && t(s).removeClass(r);
                      }
                    if (e) {
                      if (
                        o.hasAttribute("disabled") ||
                        i.hasAttribute("disabled") ||
                        o.classList.contains("disabled") ||
                        i.classList.contains("disabled")
                      )
                        return;
                      (o.checked = !t(this._element).hasClass(r)),
                        t(o).trigger("change");
                    }
                    o.focus(), (n = !1);
                  }
                }
                n &&
                  this._element.setAttribute(
                    "aria-pressed",
                    !t(this._element).hasClass(r)
                  ),
                  e && t(this._element).toggleClass(r);
              }),
              (n.dispose = function () {
                t.removeData(this._element, "bs.button"),
                  (this._element = null);
              }),
              (e._jQueryInterface = function (n) {
                return this.each(function () {
                  var i = t(this).data("bs.button");
                  i || ((i = new e(this)), t(this).data("bs.button", i)),
                    "toggle" === n && i[n]();
                });
              }),
              i(e, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
              ]),
              e
            );
          })();
        return (
          t(document)
            .on(u.CLICK_DATA_API, a, function (e) {
              e.preventDefault();
              var n = e.target;
              t(n).hasClass(o) || (n = t(n).closest(f)),
                d._jQueryInterface.call(t(n), "toggle");
            })
            .on(u.FOCUS_BLUR_DATA_API, a, function (e) {
              var n = t(e.target).closest(f)[0];
              t(n).toggleClass(s, /^focus(in)?$/.test(e.type));
            }),
          (t.fn[e] = d._jQueryInterface),
          (t.fn[e].Constructor = d),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = n), d._jQueryInterface;
          }),
          d
        );
      })(e),
      l = (function (t) {
        var e = "carousel",
          n = "bs.carousel",
          s = "." + n,
          a = t.fn[e],
          l = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
          },
          c = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
          },
          h = "next",
          f = "prev",
          u = "left",
          d = "right",
          p = {
            SLIDE: "slide" + s,
            SLID: "slid" + s,
            KEYDOWN: "keydown" + s,
            MOUSEENTER: "mouseenter" + s,
            MOUSELEAVE: "mouseleave" + s,
            TOUCHEND: "touchend" + s,
            LOAD_DATA_API: "load" + s + ".data-api",
            CLICK_DATA_API: "click" + s + ".data-api",
          },
          g = "carousel",
          m = "active",
          _ = "slide",
          v = "carousel-item-right",
          b = "carousel-item-left",
          y = "carousel-item-next",
          E = "carousel-item-prev",
          w = ".active",
          C = ".active.carousel-item",
          T = ".carousel-item",
          D = ".carousel-item-next, .carousel-item-prev",
          I = ".carousel-indicators",
          A = "[data-slide], [data-slide-to]",
          S = '[data-ride="carousel"]',
          O = (function () {
            function a(e, n) {
              (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._config = this._getConfig(n)),
                (this._element = t(e)[0]),
                (this._indicatorsElement = t(this._element).find(I)[0]),
                this._addEventListeners();
            }
            var A = a.prototype;
            return (
              (A.next = function () {
                this._isSliding || this._slide(h);
              }),
              (A.nextWhenVisible = function () {
                !document.hidden &&
                  t(this._element).is(":visible") &&
                  "hidden" !== t(this._element).css("visibility") &&
                  this.next();
              }),
              (A.prev = function () {
                this._isSliding || this._slide(f);
              }),
              (A.pause = function (e) {
                e || (this._isPaused = !0),
                  t(this._element).find(D)[0] &&
                    o.supportsTransitionEnd() &&
                    (o.triggerTransitionEnd(this._element), this.cycle(!0)),
                  clearInterval(this._interval),
                  (this._interval = null);
              }),
              (A.cycle = function (t) {
                t || (this._isPaused = !1),
                  this._interval &&
                    (clearInterval(this._interval), (this._interval = null)),
                  this._config.interval &&
                    !this._isPaused &&
                    (this._interval = setInterval(
                      (document.visibilityState
                        ? this.nextWhenVisible
                        : this.next
                      ).bind(this),
                      this._config.interval
                    ));
              }),
              (A.to = function (e) {
                var n = this;
                this._activeElement = t(this._element).find(C)[0];
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                  if (this._isSliding)
                    t(this._element).one(p.SLID, function () {
                      return n.to(e);
                    });
                  else {
                    if (i === e) return this.pause(), void this.cycle();
                    var r = e > i ? h : f;
                    this._slide(r, this._items[e]);
                  }
              }),
              (A.dispose = function () {
                t(this._element).off(s),
                  t.removeData(this._element, n),
                  (this._items = null),
                  (this._config = null),
                  (this._element = null),
                  (this._interval = null),
                  (this._isPaused = null),
                  (this._isSliding = null),
                  (this._activeElement = null),
                  (this._indicatorsElement = null);
              }),
              (A._getConfig = function (t) {
                return (t = r({}, l, t)), o.typeCheckConfig(e, t, c), t;
              }),
              (A._addEventListeners = function () {
                var e = this;
                this._config.keyboard &&
                  t(this._element).on(p.KEYDOWN, function (t) {
                    return e._keydown(t);
                  }),
                  "hover" === this._config.pause &&
                    (t(this._element)
                      .on(p.MOUSEENTER, function (t) {
                        return e.pause(t);
                      })
                      .on(p.MOUSELEAVE, function (t) {
                        return e.cycle(t);
                      }),
                    ("ontouchstart" in document.documentElement) &&
                      t(this._element).on(p.TOUCHEND, function () {
                        e.pause(),
                          e.touchTimeout && clearTimeout(e.touchTimeout),
                          (e.touchTimeout = setTimeout(function (t) {
                            return e.cycle(t);
                          }, 500 + e._config.interval));
                      }));
              }),
              (A._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName))
                  switch (t.which) {
                    case 37:
                      t.preventDefault(), this.prev();
                      break;
                    case 39:
                      t.preventDefault(), this.next();
                  }
              }),
              (A._getItemIndex = function (e) {
                return (
                  (this._items = t.makeArray(t(e).parent().find(T))),
                  this._items.indexOf(e)
                );
              }),
              (A._getItemByDirection = function (t, e) {
                var n = t === h,
                  i = t === f,
                  r = this._getItemIndex(e),
                  o = this._items.length - 1;
                if (((i && 0 === r) || (n && r === o)) && !this._config.wrap)
                  return e;
                var s = (r + (t === f ? -1 : 1)) % this._items.length;
                return -1 === s
                  ? this._items[this._items.length - 1]
                  : this._items[s];
              }),
              (A._triggerSlideEvent = function (e, n) {
                var i = this._getItemIndex(e),
                  r = this._getItemIndex(t(this._element).find(C)[0]),
                  o = t.Event(p.SLIDE, {
                    relatedTarget: e,
                    direction: n,
                    from: r,
                    to: i,
                  });
                return t(this._element).trigger(o), o;
              }),
              (A._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                  t(this._indicatorsElement).find(w).removeClass(m);
                  var n =
                    this._indicatorsElement.children[this._getItemIndex(e)];
                  n && t(n).addClass(m);
                }
              }),
              (A._slide = function (e, n) {
                var i,
                  r,
                  s,
                  a = this,
                  l = t(this._element).find(C)[0],
                  c = this._getItemIndex(l),
                  f = n || (l && this._getItemByDirection(e, l)),
                  g = this._getItemIndex(f),
                  w = Boolean(this._interval);
                if (
                  (e === h
                    ? ((i = b), (r = y), (s = u))
                    : ((i = v), (r = E), (s = d)),
                  f && t(f).hasClass(m))
                )
                  this._isSliding = !1;
                else if (
                  !this._triggerSlideEvent(f, s).isDefaultPrevented() &&
                  l &&
                  f
                ) {
                  (this._isSliding = !0),
                    w && this.pause(),
                    this._setActiveIndicatorElement(f);
                  var T = t.Event(p.SLID, {
                    relatedTarget: f,
                    direction: s,
                    from: c,
                    to: g,
                  });
                  o.supportsTransitionEnd() && t(this._element).hasClass(_)
                    ? (t(f).addClass(r),
                      o.reflow(f),
                      t(l).addClass(i),
                      t(f).addClass(i),
                      t(l)
                        .one(o.TRANSITION_END, function () {
                          t(f)
                            .removeClass(i + " " + r)
                            .addClass(m),
                            t(l).removeClass(m + " " + r + " " + i),
                            (a._isSliding = !1),
                            setTimeout(function () {
                              return t(a._element).trigger(T);
                            }, 0);
                        })
                        .emulateTransitionEnd(600))
                    : (t(l).removeClass(m),
                      t(f).addClass(m),
                      (this._isSliding = !1),
                      t(this._element).trigger(T)),
                    w && this.cycle();
                }
              }),
              (a._jQueryInterface = function (e) {
                return this.each(function () {
                  var i = t(this).data(n),
                    o = r({}, l, t(this).data());
                  "object" == typeof e && (o = r({}, o, e));
                  var s = "string" == typeof e ? e : o.slide;
                  if (
                    (i || ((i = new a(this, o)), t(this).data(n, i)),
                    "number" == typeof e)
                  )
                    i.to(e);
                  else if ("string" == typeof s) {
                    if (void 0 === i[s])
                      throw new TypeError('No method named "' + s + '"');
                    i[s]();
                  } else o.interval && (i.pause(), i.cycle());
                });
              }),
              (a._dataApiClickHandler = function (e) {
                var i = o.getSelectorFromElement(this);
                if (i) {
                  var s = t(i)[0];
                  if (s && t(s).hasClass(g)) {
                    var l = r({}, t(s).data(), t(this).data()),
                      c = this.getAttribute("data-slide-to");
                    c && (l.interval = !1),
                      a._jQueryInterface.call(t(s), l),
                      c && t(s).data(n).to(c),
                      e.preventDefault();
                  }
                }
              }),
              i(a, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return l;
                  },
                },
              ]),
              a
            );
          })();
        return (
          t(document).on(p.CLICK_DATA_API, A, O._dataApiClickHandler),
          t(window).on(p.LOAD_DATA_API, function () {
            t(S).each(function () {
              var e = t(this);
              O._jQueryInterface.call(e, e.data());
            });
          }),
          (t.fn[e] = O._jQueryInterface),
          (t.fn[e].Constructor = O),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = a), O._jQueryInterface;
          }),
          O
        );
      })(e),
      c = (function (t) {
        var e = "collapse",
          n = "bs.collapse",
          s = t.fn[e],
          a = { toggle: !0, parent: "" },
          l = { toggle: "boolean", parent: "(string|element)" },
          c = {
            SHOW: "show.bs.collapse",
            SHOWN: "shown.bs.collapse",
            HIDE: "hide.bs.collapse",
            HIDDEN: "hidden.bs.collapse",
            CLICK_DATA_API: "click.bs.collapse.data-api",
          },
          h = "show",
          f = "collapse",
          u = "collapsing",
          d = "collapsed",
          p = "width",
          g = "height",
          m = ".show, .collapsing",
          _ = '[data-toggle="collapse"]',
          v = (function () {
            function s(e, n) {
              (this._isTransitioning = !1),
                (this._element = e),
                (this._config = this._getConfig(n)),
                (this._triggerArray = t.makeArray(
                  t(
                    '[data-toggle="collapse"][href="#' +
                      e.id +
                      '"],[data-toggle="collapse"][data-target="#' +
                      e.id +
                      '"]'
                  )
                ));
              for (var i = t(_), r = 0; r < i.length; r++) {
                var s = i[r],
                  a = o.getSelectorFromElement(s);
                null !== a &&
                  t(a).filter(e).length > 0 &&
                  ((this._selector = a), this._triggerArray.push(s));
              }
              (this._parent = this._config.parent ? this._getParent() : null),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._element,
                    this._triggerArray
                  ),
                this._config.toggle && this.toggle();
            }
            var v = s.prototype;
            return (
              (v.toggle = function () {
                t(this._element).hasClass(h) ? this.hide() : this.show();
              }),
              (v.show = function () {
                var e,
                  i,
                  r = this;
                if (
                  !this._isTransitioning &&
                  !t(this._element).hasClass(h) &&
                  (this._parent &&
                    0 ===
                      (e = t.makeArray(
                        t(this._parent)
                          .find(m)
                          .filter('[data-parent="' + this._config.parent + '"]')
                      )).length &&
                    (e = null),
                  !(
                    e &&
                    (i = t(e).not(this._selector).data(n)) &&
                    i._isTransitioning
                  ))
                ) {
                  var a = t.Event(c.SHOW);
                  if ((t(this._element).trigger(a), !a.isDefaultPrevented())) {
                    e &&
                      (s._jQueryInterface.call(
                        t(e).not(this._selector),
                        "hide"
                      ),
                      i || t(e).data(n, null));
                    var l = this._getDimension();
                    t(this._element).removeClass(f).addClass(u),
                      (this._element.style[l] = 0),
                      this._triggerArray.length > 0 &&
                        t(this._triggerArray)
                          .removeClass(d)
                          .attr("aria-expanded", !0),
                      this.setTransitioning(!0);
                    var p = function () {
                      t(r._element).removeClass(u).addClass(f).addClass(h),
                        (r._element.style[l] = ""),
                        r.setTransitioning(!1),
                        t(r._element).trigger(c.SHOWN);
                    };
                    if (o.supportsTransitionEnd()) {
                      var g = "scroll" + (l[0].toUpperCase() + l.slice(1));
                      t(this._element)
                        .one(o.TRANSITION_END, p)
                        .emulateTransitionEnd(600),
                        (this._element.style[l] = this._element[g] + "px");
                    } else p();
                  }
                }
              }),
              (v.hide = function () {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(h)) {
                  var n = t.Event(c.HIDE);
                  if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                    var i = this._getDimension();
                    if (
                      ((this._element.style[i] =
                        this._element.getBoundingClientRect()[i] + "px"),
                      o.reflow(this._element),
                      t(this._element)
                        .addClass(u)
                        .removeClass(f)
                        .removeClass(h),
                      this._triggerArray.length > 0)
                    )
                      for (var r = 0; r < this._triggerArray.length; r++) {
                        var s = this._triggerArray[r],
                          a = o.getSelectorFromElement(s);
                        if (null !== a)
                          t(a).hasClass(h) ||
                            t(s).addClass(d).attr("aria-expanded", !1);
                      }
                    this.setTransitioning(!0);
                    var l = function () {
                      e.setTransitioning(!1),
                        t(e._element)
                          .removeClass(u)
                          .addClass(f)
                          .trigger(c.HIDDEN);
                    };
                    (this._element.style[i] = ""),
                      o.supportsTransitionEnd()
                        ? t(this._element)
                            .one(o.TRANSITION_END, l)
                            .emulateTransitionEnd(600)
                        : l();
                  }
                }
              }),
              (v.setTransitioning = function (t) {
                this._isTransitioning = t;
              }),
              (v.dispose = function () {
                t.removeData(this._element, n),
                  (this._config = null),
                  (this._parent = null),
                  (this._element = null),
                  (this._triggerArray = null),
                  (this._isTransitioning = null);
              }),
              (v._getConfig = function (t) {
                return (
                  ((t = r({}, a, t)).toggle = Boolean(t.toggle)),
                  o.typeCheckConfig(e, t, l),
                  t
                );
              }),
              (v._getDimension = function () {
                return t(this._element).hasClass(p) ? p : g;
              }),
              (v._getParent = function () {
                var e = this,
                  n = null;
                o.isElement(this._config.parent)
                  ? ((n = this._config.parent),
                    void 0 !== this._config.parent.jquery &&
                      (n = this._config.parent[0]))
                  : (n = t(this._config.parent)[0]);
                var i =
                  '[data-toggle="collapse"][data-parent="' +
                  this._config.parent +
                  '"]';
                return (
                  t(n)
                    .find(i)
                    .each(function (t, n) {
                      e._addAriaAndCollapsedClass(s._getTargetFromElement(n), [
                        n,
                      ]);
                    }),
                  n
                );
              }),
              (v._addAriaAndCollapsedClass = function (e, n) {
                if (e) {
                  var i = t(e).hasClass(h);
                  n.length > 0 &&
                    t(n).toggleClass(d, !i).attr("aria-expanded", i);
                }
              }),
              (s._getTargetFromElement = function (e) {
                var n = o.getSelectorFromElement(e);
                return n ? t(n)[0] : null;
              }),
              (s._jQueryInterface = function (e) {
                return this.each(function () {
                  var i = t(this),
                    o = i.data(n),
                    l = r({}, a, i.data(), "object" == typeof e && e);
                  if (
                    (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1),
                    o || ((o = new s(this, l)), i.data(n, o)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === o[e])
                      throw new TypeError('No method named "' + e + '"');
                    o[e]();
                  }
                });
              }),
              i(s, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return a;
                  },
                },
              ]),
              s
            );
          })();
        return (
          t(document).on(c.CLICK_DATA_API, _, function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var i = t(this),
              r = o.getSelectorFromElement(this);
            t(r).each(function () {
              var e = t(this),
                r = e.data(n) ? "toggle" : i.data();
              v._jQueryInterface.call(e, r);
            });
          }),
          (t.fn[e] = v._jQueryInterface),
          (t.fn[e].Constructor = v),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = s), v._jQueryInterface;
          }),
          v
        );
      })(e),
      h = "undefined" != typeof window && "undefined" != typeof document,
      f = ["Edge", "Trident", "Firefox"],
      u = 0,
      d = 0;
    d < f.length;
    d += 1
  )
    if (h && navigator.userAgent.indexOf(f[d]) >= 0) {
      u = 1;
      break;
    }
  var p =
    h && window.Promise
      ? function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              window.Promise.resolve().then(function () {
                (e = !1), t();
              }));
          };
        }
      : function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              setTimeout(function () {
                (e = !1), t();
              }, u));
          };
        };
  function g(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }
  function m(t, e) {
    if (1 !== t.nodeType) return [];
    var n = getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function _(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }
  function v(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;
      case "#document":
        return t.body;
    }
    var e = m(t),
      n = e.overflow,
      i = e.overflowX,
      r = e.overflowY;
    return /(auto|scroll)/.test(n + r + i) ? t : v(_(t));
  }
  function b(t) {
    var e = t && t.offsetParent,
      n = e && e.nodeName;
    return n && "BODY" !== n && "HTML" !== n
      ? -1 !== ["TD", "TABLE"].indexOf(e.nodeName) &&
        "static" === m(e, "position")
        ? b(e)
        : e
      : t
      ? t.ownerDocument.documentElement
      : document.documentElement;
  }
  function y(t) {
    return null !== t.parentNode ? y(t.parentNode) : t;
  }
  function E(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? t : e,
      r = n ? e : t,
      o = document.createRange();
    o.setStart(i, 0), o.setEnd(r, 0);
    var s,
      a,
      l = o.commonAncestorContainer;
    if ((t !== l && e !== l) || i.contains(r))
      return "BODY" === (a = (s = l).nodeName) ||
        ("HTML" !== a && b(s.firstElementChild) !== s)
        ? b(l)
        : l;
    var c = y(t);
    return c.host ? E(c.host, e) : E(t, y(e).host);
  }
  function w(t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
      n = "top" === e ? "scrollTop" : "scrollLeft",
      i = t.nodeName;
    if ("BODY" === i || "HTML" === i) {
      var r = t.ownerDocument.documentElement,
        o = t.ownerDocument.scrollingElement || r;
      return o[n];
    }
    return t[n];
  }
  function C(t, e) {
    var n = "x" === e ? "Left" : "Top",
      i = "Left" === n ? "Right" : "Bottom";
    return (
      parseFloat(t["border" + n + "Width"], 10) +
      parseFloat(t["border" + i + "Width"], 10)
    );
  }
  var T = void 0,
    D = function () {
      return (
        void 0 === T && (T = -1 !== navigator.appVersion.indexOf("MSIE 10")), T
      );
    };
  function I(t, e, n, i) {
    return Math.max(
      e["offset" + t],
      e["scroll" + t],
      n["client" + t],
      n["offset" + t],
      n["scroll" + t],
      D()
        ? n["offset" + t] +
            i["margin" + ("Height" === t ? "Top" : "Left")] +
            i["margin" + ("Height" === t ? "Bottom" : "Right")]
        : 0
    );
  }
  function A() {
    var t = document.body,
      e = document.documentElement,
      n = D() && getComputedStyle(e);
    return { height: I("Height", t, e, n), width: I("Width", t, e, n) };
  }
  var S = function (t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    },
    O = (function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    })(),
    N = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    },
    k =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      };
  function x(t) {
    return k({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }
  function P(t) {
    var e = {};
    if (D())
      try {
        e = t.getBoundingClientRect();
        var n = w(t, "top"),
          i = w(t, "left");
        (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
      } catch (t) {}
    else e = t.getBoundingClientRect();
    var r = {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top,
      },
      o = "HTML" === t.nodeName ? A() : {},
      s = o.width || t.clientWidth || r.right - r.left,
      a = o.height || t.clientHeight || r.bottom - r.top,
      l = t.offsetWidth - s,
      c = t.offsetHeight - a;
    if (l || c) {
      var h = m(t);
      (l -= C(h, "x")), (c -= C(h, "y")), (r.width -= l), (r.height -= c);
    }
    return x(r);
  }
  function L(t, e) {
    var n = D(),
      i = "HTML" === e.nodeName,
      r = P(t),
      o = P(e),
      s = v(t),
      a = m(e),
      l = parseFloat(a.borderTopWidth, 10),
      c = parseFloat(a.borderLeftWidth, 10),
      h = x({
        top: r.top - o.top - l,
        left: r.left - o.left - c,
        width: r.width,
        height: r.height,
      });
    if (((h.marginTop = 0), (h.marginLeft = 0), !n && i)) {
      var f = parseFloat(a.marginTop, 10),
        u = parseFloat(a.marginLeft, 10);
      (h.top -= l - f),
        (h.bottom -= l - f),
        (h.left -= c - u),
        (h.right -= c - u),
        (h.marginTop = f),
        (h.marginLeft = u);
    }
    return (
      (n ? e.contains(s) : e === s && "BODY" !== s.nodeName) &&
        (h = (function (t, e) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = w(e, "top"),
            r = w(e, "left"),
            o = n ? -1 : 1;
          return (
            (t.top += i * o),
            (t.bottom += i * o),
            (t.left += r * o),
            (t.right += r * o),
            t
          );
        })(h, e)),
      h
    );
  }
  function H(t, e, n, i) {
    var r = { top: 0, left: 0 },
      o = E(t, e);
    if ("viewport" === i)
      r = (function (t) {
        var e = t.ownerDocument.documentElement,
          n = L(t, e),
          i = Math.max(e.clientWidth, window.innerWidth || 0),
          r = Math.max(e.clientHeight, window.innerHeight || 0),
          o = w(e),
          s = w(e, "left");
        return x({
          top: o - n.top + n.marginTop,
          left: s - n.left + n.marginLeft,
          width: i,
          height: r,
        });
      })(o);
    else {
      var s = void 0;
      "scrollParent" === i
        ? "BODY" === (s = v(_(e))).nodeName &&
          (s = t.ownerDocument.documentElement)
        : (s = "window" === i ? t.ownerDocument.documentElement : i);
      var a = L(s, o);
      if (
        "HTML" !== s.nodeName ||
        (function t(e) {
          var n = e.nodeName;
          return (
            "BODY" !== n &&
            "HTML" !== n &&
            ("fixed" === m(e, "position") || t(_(e)))
          );
        })(o)
      )
        r = a;
      else {
        var l = A(),
          c = l.height,
          h = l.width;
        (r.top += a.top - a.marginTop),
          (r.bottom = c + a.top),
          (r.left += a.left - a.marginLeft),
          (r.right = h + a.left);
      }
    }
    return (r.left += n), (r.top += n), (r.right -= n), (r.bottom -= n), r;
  }
  function j(t) {
    return t.width * t.height;
  }
  function M(t, e, n, i, r) {
    var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var s = H(n, i, o, r),
      a = {
        top: { width: s.width, height: e.top - s.top },
        right: { width: s.right - e.right, height: s.height },
        bottom: { width: s.width, height: s.bottom - e.bottom },
        left: { width: e.left - s.left, height: s.height },
      },
      l = Object.keys(a)
        .map(function (t) {
          return k({ key: t }, a[t], { area: j(a[t]) });
        })
        .sort(function (t, e) {
          return e.area - t.area;
        }),
      c = l.filter(function (t) {
        var e = t.width,
          i = t.height;
        return e >= n.clientWidth && i >= n.clientHeight;
      }),
      h = c.length > 0 ? c[0].key : l[0].key,
      f = t.split("-")[1];
    return h + (f ? "-" + f : "");
  }
  function W(t, e, n) {
    return L(n, E(e, n));
  }
  function R(t) {
    var e = getComputedStyle(t),
      n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
      i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }
  function U(t) {
    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }
  function B(t, e, n) {
    n = n.split("-")[0];
    var i = R(t),
      r = { width: i.width, height: i.height },
      o = -1 !== ["right", "left"].indexOf(n),
      s = o ? "top" : "left",
      a = o ? "left" : "top",
      l = o ? "height" : "width",
      c = o ? "width" : "height";
    return (
      (r[s] = e[s] + e[l] / 2 - i[l] / 2),
      (r[a] = n === a ? e[a] - i[c] : e[U(a)]),
      r
    );
  }
  function F(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function K(t, e, n) {
    return (
      (void 0 === n
        ? t
        : t.slice(
            0,
            (function (t, e, n) {
              if (Array.prototype.findIndex)
                return t.findIndex(function (t) {
                  return t[e] === n;
                });
              var i = F(t, function (t) {
                return t[e] === n;
              });
              return t.indexOf(i);
            })(t, "name", n)
          )
      ).forEach(function (t) {
        t.function;
        var n = t.function || t.fn;
        t.enabled &&
          g(n) &&
          ((e.offsets.popper = x(e.offsets.popper)),
          (e.offsets.reference = x(e.offsets.reference)),
          (e = n(e, t)));
      }),
      e
    );
  }
  function Q() {
    if (!this.state.isDestroyed) {
      var t = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      (t.offsets.reference = W(this.state, this.popper, this.reference)),
        (t.placement = M(
          this.options.placement,
          t.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (t.originalPlacement = t.placement),
        (t.offsets.popper = B(this.popper, t.offsets.reference, t.placement)),
        (t.offsets.popper.position = "absolute"),
        (t = K(this.modifiers, t)),
        this.state.isCreated
          ? this.options.onUpdate(t)
          : ((this.state.isCreated = !0), this.options.onCreate(t));
    }
  }
  function Y(t, e) {
    return t.some(function (t) {
      var n = t.name;
      return t.enabled && n === e;
    });
  }
  function V(t) {
    for (
      var e = [!1, "ms", "Webkit", "Moz", "O"],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length - 1;
      i++
    ) {
      var r = e[i],
        o = r ? "" + r + n : t;
      if (void 0 !== document.body.style[o]) return o;
    }
    return null;
  }
  function q() {
    return (
      (this.state.isDestroyed = !0),
      Y(this.modifiers, "applyStyle") &&
        (this.popper.removeAttribute("x-placement"),
        (this.popper.style.left = ""),
        (this.popper.style.position = ""),
        (this.popper.style.top = ""),
        (this.popper.style[V("transform")] = "")),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function z(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function Z(t, e, n, i) {
    (n.updateBound = i),
      z(t).addEventListener("resize", n.updateBound, { passive: !0 });
    var r = v(t);
    return (
      (function t(e, n, i, r) {
        var o = "BODY" === e.nodeName,
          s = o ? e.ownerDocument.defaultView : e;
        s.addEventListener(n, i, { passive: !0 }),
          o || t(v(s.parentNode), n, i, r),
          r.push(s);
      })(r, "scroll", n.updateBound, n.scrollParents),
      (n.scrollElement = r),
      (n.eventsEnabled = !0),
      n
    );
  }
  function J() {
    this.state.eventsEnabled ||
      (this.state = Z(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function G() {
    var t, e;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((t = this.reference),
        (e = this.state),
        z(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function (t) {
          t.removeEventListener("scroll", e.updateBound);
        }),
        (e.updateBound = null),
        (e.scrollParents = []),
        (e.scrollElement = null),
        (e.eventsEnabled = !1),
        e)));
  }
  function $(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function X(t, e) {
    Object.keys(e).forEach(function (n) {
      var i = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
        $(e[n]) &&
        (i = "px"),
        (t.style[n] = e[n] + i);
    });
  }
  function tt(t, e, n) {
    var i = F(t, function (t) {
        return t.name === e;
      }),
      r =
        !!i &&
        t.some(function (t) {
          return t.name === n && t.enabled && t.order < i.order;
        });
    if (!r);
    return r;
  }
  var et = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    nt = et.slice(3);
  function it(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = nt.indexOf(t),
      i = nt.slice(n + 1).concat(nt.slice(0, n));
    return e ? i.reverse() : i;
  }
  var rt = "flip",
    ot = "clockwise",
    st = "counterclockwise";
  function at(t, e, n, i) {
    var r = [0, 0],
      o = -1 !== ["right", "left"].indexOf(i),
      s = t.split(/(\+|\-)/).map(function (t) {
        return t.trim();
      }),
      a = s.indexOf(
        F(s, function (t) {
          return -1 !== t.search(/,|\s/);
        })
      );
    s[a] && s[a].indexOf(",");
    var l = /\s*,\s*|\s+/,
      c =
        -1 !== a
          ? [
              s.slice(0, a).concat([s[a].split(l)[0]]),
              [s[a].split(l)[1]].concat(s.slice(a + 1)),
            ]
          : [s];
    return (
      (c = c.map(function (t, i) {
        var r = (1 === i ? !o : o) ? "height" : "width",
          s = !1;
        return t
          .reduce(function (t, e) {
            return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
              ? ((t[t.length - 1] = e), (s = !0), t)
              : s
              ? ((t[t.length - 1] += e), (s = !1), t)
              : t.concat(e);
          }, [])
          .map(function (t) {
            return (function (t, e, n, i) {
              var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                o = +r[1],
                s = r[2];
              if (!o) return t;
              if (0 === s.indexOf("%")) {
                var a = void 0;
                switch (s) {
                  case "%p":
                    a = n;
                    break;
                  case "%":
                  case "%r":
                  default:
                    a = i;
                }
                return (x(a)[e] / 100) * o;
              }
              if ("vh" === s || "vw" === s) {
                return (
                  (("vh" === s
                    ? Math.max(
                        document.documentElement.clientHeight,
                        window.innerHeight || 0
                      )
                    : Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0
                      )) /
                    100) *
                  o
                );
              }
              return o;
            })(t, r, e, n);
          });
      })).forEach(function (t, e) {
        t.forEach(function (n, i) {
          $(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1));
        });
      }),
      r
    );
  }
  var lt = {
      placement: "bottom",
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];
            if (i) {
              var r = t.offsets,
                o = r.reference,
                s = r.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                h = {
                  start: N({}, l, o[l]),
                  end: N({}, l, o[l] + o[c] - s[c]),
                };
              t.offsets.popper = k({}, s, h[i]);
            }
            return t;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (t, e) {
            var n = e.offset,
              i = t.placement,
              r = t.offsets,
              o = r.popper,
              s = r.reference,
              a = i.split("-")[0],
              l = void 0;
            return (
              (l = $(+n) ? [+n, 0] : at(n, o, s, a)),
              "left" === a
                ? ((o.top += l[0]), (o.left -= l[1]))
                : "right" === a
                ? ((o.top += l[0]), (o.left += l[1]))
                : "top" === a
                ? ((o.left += l[0]), (o.top -= l[1]))
                : "bottom" === a && ((o.left += l[0]), (o.top += l[1])),
              (t.popper = o),
              t
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (t, e) {
            var n = e.boundariesElement || b(t.instance.popper);
            t.instance.reference === n && (n = b(n));
            var i = H(t.instance.popper, t.instance.reference, e.padding, n);
            e.boundaries = i;
            var r = e.priority,
              o = t.offsets.popper,
              s = {
                primary: function (t) {
                  var n = o[t];
                  return (
                    o[t] < i[t] &&
                      !e.escapeWithReference &&
                      (n = Math.max(o[t], i[t])),
                    N({}, t, n)
                  );
                },
                secondary: function (t) {
                  var n = "right" === t ? "left" : "top",
                    r = o[n];
                  return (
                    o[t] > i[t] &&
                      !e.escapeWithReference &&
                      (r = Math.min(
                        o[n],
                        i[t] - ("right" === t ? o.width : o.height)
                      )),
                    N({}, n, r)
                  );
                },
              };
            return (
              r.forEach(function (t) {
                var e =
                  -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                o = k({}, o, s[e](t));
              }),
              (t.offsets.popper = o),
              t
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (t) {
            var e = t.offsets,
              n = e.popper,
              i = e.reference,
              r = t.placement.split("-")[0],
              o = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(r),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
            return (
              n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]),
              n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])),
              t
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (t, e) {
            var n;
            if (!tt(t.instance.modifiers, "arrow", "keepTogether")) return t;
            var i = e.element;
            if ("string" == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i)) return t;
            var r = t.placement.split("-")[0],
              o = t.offsets,
              s = o.popper,
              a = o.reference,
              l = -1 !== ["left", "right"].indexOf(r),
              c = l ? "height" : "width",
              h = l ? "Top" : "Left",
              f = h.toLowerCase(),
              u = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = R(i)[c];
            a[d] - p < s[f] && (t.offsets.popper[f] -= s[f] - (a[d] - p)),
              a[f] + p > s[d] && (t.offsets.popper[f] += a[f] + p - s[d]),
              (t.offsets.popper = x(t.offsets.popper));
            var g = a[f] + a[c] / 2 - p / 2,
              _ = m(t.instance.popper),
              v = parseFloat(_["margin" + h], 10),
              b = parseFloat(_["border" + h + "Width"], 10),
              y = g - t.offsets.popper[f] - v - b;
            return (
              (y = Math.max(Math.min(s[c] - p, y), 0)),
              (t.arrowElement = i),
              (t.offsets.arrow =
                (N((n = {}), f, Math.round(y)), N(n, u, ""), n)),
              t
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (t, e) {
            if (Y(t.instance.modifiers, "inner")) return t;
            if (t.flipped && t.placement === t.originalPlacement) return t;
            var n = H(
                t.instance.popper,
                t.instance.reference,
                e.padding,
                e.boundariesElement
              ),
              i = t.placement.split("-")[0],
              r = U(i),
              o = t.placement.split("-")[1] || "",
              s = [];
            switch (e.behavior) {
              case rt:
                s = [i, r];
                break;
              case ot:
                s = it(i);
                break;
              case st:
                s = it(i, !0);
                break;
              default:
                s = e.behavior;
            }
            return (
              s.forEach(function (a, l) {
                if (i !== a || s.length === l + 1) return t;
                (i = t.placement.split("-")[0]), (r = U(i));
                var c = t.offsets.popper,
                  h = t.offsets.reference,
                  f = Math.floor,
                  u =
                    ("left" === i && f(c.right) > f(h.left)) ||
                    ("right" === i && f(c.left) < f(h.right)) ||
                    ("top" === i && f(c.bottom) > f(h.top)) ||
                    ("bottom" === i && f(c.top) < f(h.bottom)),
                  d = f(c.left) < f(n.left),
                  p = f(c.right) > f(n.right),
                  g = f(c.top) < f(n.top),
                  m = f(c.bottom) > f(n.bottom),
                  _ =
                    ("left" === i && d) ||
                    ("right" === i && p) ||
                    ("top" === i && g) ||
                    ("bottom" === i && m),
                  v = -1 !== ["top", "bottom"].indexOf(i),
                  b =
                    !!e.flipVariations &&
                    ((v && "start" === o && d) ||
                      (v && "end" === o && p) ||
                      (!v && "start" === o && g) ||
                      (!v && "end" === o && m));
                (u || _ || b) &&
                  ((t.flipped = !0),
                  (u || _) && (i = s[l + 1]),
                  b &&
                    (o = (function (t) {
                      return "end" === t ? "start" : "start" === t ? "end" : t;
                    })(o)),
                  (t.placement = i + (o ? "-" + o : "")),
                  (t.offsets.popper = k(
                    {},
                    t.offsets.popper,
                    B(t.instance.popper, t.offsets.reference, t.placement)
                  )),
                  (t = K(t.instance.modifiers, t, "flip")));
              }),
              t
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              r = i.popper,
              o = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
            return (
              (r[s ? "left" : "top"] =
                o[n] - (a ? r[s ? "width" : "height"] : 0)),
              (t.placement = U(e)),
              (t.offsets.popper = x(r)),
              t
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (t) {
            if (!tt(t.instance.modifiers, "hide", "preventOverflow")) return t;
            var e = t.offsets.reference,
              n = F(t.instance.modifiers, function (t) {
                return "preventOverflow" === t.name;
              }).boundaries;
            if (
              e.bottom < n.top ||
              e.left > n.right ||
              e.top > n.bottom ||
              e.right < n.left
            ) {
              if (!0 === t.hide) return t;
              (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === t.hide) return t;
              (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
            }
            return t;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (t, e) {
            var n = e.x,
              i = e.y,
              r = t.offsets.popper,
              o = F(t.instance.modifiers, function (t) {
                return "applyStyle" === t.name;
              }).gpuAcceleration,
              s = void 0 !== o ? o : e.gpuAcceleration,
              a = P(b(t.instance.popper)),
              l = { position: r.position },
              c = {
                left: Math.floor(r.left),
                top: Math.floor(r.top),
                bottom: Math.floor(r.bottom),
                right: Math.floor(r.right),
              },
              h = "bottom" === n ? "top" : "bottom",
              f = "right" === i ? "left" : "right",
              u = V("transform"),
              d = void 0,
              p = void 0;
            if (
              ((p = "bottom" === h ? -a.height + c.bottom : c.top),
              (d = "right" === f ? -a.width + c.right : c.left),
              s && u)
            )
              (l[u] = "translate3d(" + d + "px, " + p + "px, 0)"),
                (l[h] = 0),
                (l[f] = 0),
                (l.willChange = "transform");
            else {
              var g = "bottom" === h ? -1 : 1,
                m = "right" === f ? -1 : 1;
              (l[h] = p * g), (l[f] = d * m), (l.willChange = h + ", " + f);
            }
            var _ = { "x-placement": t.placement };
            return (
              (t.attributes = k({}, _, t.attributes)),
              (t.styles = k({}, l, t.styles)),
              (t.arrowStyles = k({}, t.offsets.arrow, t.arrowStyles)),
              t
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (t) {
            var e, n;
            return (
              X(t.instance.popper, t.styles),
              (e = t.instance.popper),
              (n = t.attributes),
              Object.keys(n).forEach(function (t) {
                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
              }),
              t.arrowElement &&
                Object.keys(t.arrowStyles).length &&
                X(t.arrowElement, t.arrowStyles),
              t
            );
          },
          onLoad: function (t, e, n, i, r) {
            var o = W(0, e, t),
              s = M(
                n.placement,
                o,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              e.setAttribute("x-placement", s),
              X(e, { position: "absolute" }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    ct = (function () {
      function t(e, n) {
        var i = this,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        S(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(i.update);
          }),
          (this.update = p(this.update.bind(this))),
          (this.options = k({}, t.Defaults, r)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = e && e.jquery ? e[0] : e),
          (this.popper = n && n.jquery ? n[0] : n),
          (this.options.modifiers = {}),
          Object.keys(k({}, t.Defaults.modifiers, r.modifiers)).forEach(
            function (e) {
              i.options.modifiers[e] = k(
                {},
                t.Defaults.modifiers[e] || {},
                r.modifiers ? r.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (t) {
              return k({ name: t }, i.options.modifiers[t]);
            })
            .sort(function (t, e) {
              return t.order - e.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              g(t.onLoad) &&
              t.onLoad(i.reference, i.popper, i.options, t, i.state);
          }),
          this.update();
        var o = this.options.eventsEnabled;
        o && this.enableEventListeners(), (this.state.eventsEnabled = o);
      }
      return (
        O(t, [
          {
            key: "update",
            value: function () {
              return Q.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return q.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return J.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return G.call(this);
            },
          },
        ]),
        t
      );
    })();
  (ct.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
    (ct.placements = et),
    (ct.Defaults = lt);
  var ht = (function (t) {
      var e = "dropdown",
        n = "bs.dropdown",
        s = "." + n,
        a = t.fn[e],
        l = new RegExp("38|40|27"),
        c = {
          HIDE: "hide" + s,
          HIDDEN: "hidden" + s,
          SHOW: "show" + s,
          SHOWN: "shown" + s,
          CLICK: "click" + s,
          CLICK_DATA_API: "click" + s + ".data-api",
          KEYDOWN_DATA_API: "keydown" + s + ".data-api",
          KEYUP_DATA_API: "keyup" + s + ".data-api",
        },
        h = "disabled",
        f = "show",
        u = "dropup",
        d = "dropright",
        p = "dropleft",
        g = "dropdown-menu-right",
        m = "dropdown-menu-left",
        _ = "position-static",
        v = '[data-toggle="dropdown"]',
        b = ".dropdown form",
        y = ".dropdown-menu",
        E = ".navbar-nav",
        w = ".dropdown-menu .dropdown-item:not(.disabled)",
        C = "top-start",
        T = "top-end",
        D = "bottom-start",
        I = "bottom-end",
        A = "right-start",
        S = "left-start",
        O = { offset: 0, flip: !0, boundary: "scrollParent" },
        N = {
          offset: "(number|string|function)",
          flip: "boolean",
          boundary: "(string|element)",
        },
        k = (function () {
          function a(t, e) {
            (this._element = t),
              (this._popper = null),
              (this._config = this._getConfig(e)),
              (this._menu = this._getMenuElement()),
              (this._inNavbar = this._detectNavbar()),
              this._addEventListeners();
          }
          var b = a.prototype;
          return (
            (b.toggle = function () {
              if (!this._element.disabled && !t(this._element).hasClass(h)) {
                var e = a._getParentFromElement(this._element),
                  n = t(this._menu).hasClass(f);
                if ((a._clearMenus(), !n)) {
                  var i = { relatedTarget: this._element },
                    r = t.Event(c.SHOW, i);
                  if ((t(e).trigger(r), !r.isDefaultPrevented())) {
                    if (!this._inNavbar) {
                      if (void 0 === ct)
                        throw new TypeError(
                          "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                        );
                      var o = this._element;
                      t(e).hasClass(u) &&
                        (t(this._menu).hasClass(m) ||
                          t(this._menu).hasClass(g)) &&
                        (o = e),
                        "scrollParent" !== this._config.boundary &&
                          t(e).addClass(_),
                        (this._popper = new ct(
                          o,
                          this._menu,
                          this._getPopperConfig()
                        ));
                    }
                    "ontouchstart" in document.documentElement &&
                      0 === t(e).closest(E).length &&
                      t("body").children().on("mouseover", null, t.noop),
                      this._element.focus(),
                      this._element.setAttribute("aria-expanded", !0),
                      t(this._menu).toggleClass(f),
                      t(e).toggleClass(f).trigger(t.Event(c.SHOWN, i));
                  }
                }
              }
            }),
            (b.dispose = function () {
              t.removeData(this._element, n),
                t(this._element).off(s),
                (this._element = null),
                (this._menu = null),
                null !== this._popper &&
                  (this._popper.destroy(), (this._popper = null));
            }),
            (b.update = function () {
              (this._inNavbar = this._detectNavbar()),
                null !== this._popper && this._popper.scheduleUpdate();
            }),
            (b._addEventListeners = function () {
              var e = this;
              t(this._element).on(c.CLICK, function (t) {
                t.preventDefault(), t.stopPropagation(), e.toggle();
              });
            }),
            (b._getConfig = function (n) {
              return (
                (n = r(
                  {},
                  this.constructor.Default,
                  t(this._element).data(),
                  n
                )),
                o.typeCheckConfig(e, n, this.constructor.DefaultType),
                n
              );
            }),
            (b._getMenuElement = function () {
              if (!this._menu) {
                var e = a._getParentFromElement(this._element);
                this._menu = t(e).find(y)[0];
              }
              return this._menu;
            }),
            (b._getPlacement = function () {
              var e = t(this._element).parent(),
                n = D;
              return (
                e.hasClass(u)
                  ? ((n = C), t(this._menu).hasClass(g) && (n = T))
                  : e.hasClass(d)
                  ? (n = A)
                  : e.hasClass(p)
                  ? (n = S)
                  : t(this._menu).hasClass(g) && (n = I),
                n
              );
            }),
            (b._detectNavbar = function () {
              return t(this._element).closest(".navbar").length > 0;
            }),
            (b._getPopperConfig = function () {
              var t = this,
                e = {};
              return (
                "function" == typeof this._config.offset
                  ? (e.fn = function (e) {
                      return (
                        (e.offsets = r(
                          {},
                          e.offsets,
                          t._config.offset(e.offsets) || {}
                        )),
                        e
                      );
                    })
                  : (e.offset = this._config.offset),
                {
                  placement: this._getPlacement(),
                  modifiers: {
                    offset: e,
                    flip: { enabled: this._config.flip },
                    preventOverflow: {
                      boundariesElement: this._config.boundary,
                    },
                  },
                }
              );
            }),
            (a._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data(n);
                if (
                  (i ||
                    ((i = new a(this, "object" == typeof e ? e : null)),
                    t(this).data(n, i)),
                  "string" == typeof e)
                ) {
                  if (void 0 === i[e])
                    throw new TypeError('No method named "' + e + '"');
                  i[e]();
                }
              });
            }),
            (a._clearMenus = function (e) {
              if (
                !e ||
                (3 !== e.which && ("keyup" !== e.type || 9 === e.which))
              )
                for (var i = t.makeArray(t(v)), r = 0; r < i.length; r++) {
                  var o = a._getParentFromElement(i[r]),
                    s = t(i[r]).data(n),
                    l = { relatedTarget: i[r] };
                  if (s) {
                    var h = s._menu;
                    if (
                      t(o).hasClass(f) &&
                      !(
                        e &&
                        (("click" === e.type &&
                          /input|textarea/i.test(e.target.tagName)) ||
                          ("keyup" === e.type && 9 === e.which)) &&
                        t.contains(o, e.target)
                      )
                    ) {
                      var u = t.Event(c.HIDE, l);
                      t(o).trigger(u),
                        u.isDefaultPrevented() ||
                          ("ontouchstart" in document.documentElement &&
                            t("body").children().off("mouseover", null, t.noop),
                          i[r].setAttribute("aria-expanded", "false"),
                          t(h).removeClass(f),
                          t(o).removeClass(f).trigger(t.Event(c.HIDDEN, l)));
                    }
                  }
                }
            }),
            (a._getParentFromElement = function (e) {
              var n,
                i = o.getSelectorFromElement(e);
              return i && (n = t(i)[0]), n || e.parentNode;
            }),
            (a._dataApiKeydownHandler = function (e) {
              if (
                !(/input|textarea/i.test(e.target.tagName)
                  ? 32 === e.which ||
                    (27 !== e.which &&
                      ((40 !== e.which && 38 !== e.which) ||
                        t(e.target).closest(y).length))
                  : !l.test(e.which)) &&
                (e.preventDefault(),
                e.stopPropagation(),
                !this.disabled && !t(this).hasClass(h))
              ) {
                var n = a._getParentFromElement(this),
                  i = t(n).hasClass(f);
                if (
                  (i || (27 === e.which && 32 === e.which)) &&
                  (!i || (27 !== e.which && 32 !== e.which))
                ) {
                  var r = t(n).find(w).get();
                  if (0 !== r.length) {
                    var o = r.indexOf(e.target);
                    38 === e.which && o > 0 && o--,
                      40 === e.which && o < r.length - 1 && o++,
                      o < 0 && (o = 0),
                      r[o].focus();
                  }
                } else {
                  if (27 === e.which) {
                    var s = t(n).find(v)[0];
                    t(s).trigger("focus");
                  }
                  t(this).trigger("click");
                }
              }
            }),
            i(a, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return O;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return N;
                },
              },
            ]),
            a
          );
        })();
      return (
        t(document)
          .on(c.KEYDOWN_DATA_API, v, k._dataApiKeydownHandler)
          .on(c.KEYDOWN_DATA_API, y, k._dataApiKeydownHandler)
          .on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, k._clearMenus)
          .on(c.CLICK_DATA_API, v, function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              k._jQueryInterface.call(t(this), "toggle");
          })
          .on(c.CLICK_DATA_API, b, function (t) {
            t.stopPropagation();
          }),
        (t.fn[e] = k._jQueryInterface),
        (t.fn[e].Constructor = k),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = a), k._jQueryInterface;
        }),
        k
      );
    })(e),
    ft = (function (t) {
      var e = "modal",
        n = ".bs.modal",
        s = t.fn[e],
        a = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        l = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean",
        },
        c = {
          HIDE: "hide" + n,
          HIDDEN: "hidden" + n,
          SHOW: "show" + n,
          SHOWN: "shown" + n,
          FOCUSIN: "focusin" + n,
          RESIZE: "resize" + n,
          CLICK_DISMISS: "click.dismiss" + n,
          KEYDOWN_DISMISS: "keydown.dismiss" + n,
          MOUSEUP_DISMISS: "mouseup.dismiss" + n,
          MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
          CLICK_DATA_API: "click" + n + ".data-api",
        },
        h = "modal-scrollbar-measure",
        f = "modal-backdrop",
        u = "modal-open",
        d = "fade",
        p = "show",
        g = ".modal-dialog",
        m = '[data-toggle="modal"]',
        _ = '[data-dismiss="modal"]',
        v = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        b = ".sticky-top",
        y = ".navbar-toggler",
        E = (function () {
          function s(e, n) {
            (this._config = this._getConfig(n)),
              (this._element = e),
              (this._dialog = t(e).find(g)[0]),
              (this._backdrop = null),
              (this._isShown = !1),
              (this._isBodyOverflowing = !1),
              (this._ignoreBackdropClick = !1),
              (this._originalBodyPadding = 0),
              (this._scrollbarWidth = 0);
          }
          var m = s.prototype;
          return (
            (m.toggle = function (t) {
              return this._isShown ? this.hide() : this.show(t);
            }),
            (m.show = function (e) {
              var n = this;
              if (!this._isTransitioning && !this._isShown) {
                o.supportsTransitionEnd() &&
                  t(this._element).hasClass(d) &&
                  (this._isTransitioning = !0);
                var i = t.Event(c.SHOW, { relatedTarget: e });
                t(this._element).trigger(i),
                  this._isShown ||
                    i.isDefaultPrevented() ||
                    ((this._isShown = !0),
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    t(document.body).addClass(u),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(this._element).on(c.CLICK_DISMISS, _, function (t) {
                      return n.hide(t);
                    }),
                    t(this._dialog).on(c.MOUSEDOWN_DISMISS, function () {
                      t(n._element).one(c.MOUSEUP_DISMISS, function (e) {
                        t(e.target).is(n._element) &&
                          (n._ignoreBackdropClick = !0);
                      });
                    }),
                    this._showBackdrop(function () {
                      return n._showElement(e);
                    }));
              }
            }),
            (m.hide = function (e) {
              var n = this;
              if (
                (e && e.preventDefault(),
                !this._isTransitioning && this._isShown)
              ) {
                var i = t.Event(c.HIDE);
                if (
                  (t(this._element).trigger(i),
                  this._isShown && !i.isDefaultPrevented())
                ) {
                  this._isShown = !1;
                  var r =
                    o.supportsTransitionEnd() && t(this._element).hasClass(d);
                  r && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(document).off(c.FOCUSIN),
                    t(this._element).removeClass(p),
                    t(this._element).off(c.CLICK_DISMISS),
                    t(this._dialog).off(c.MOUSEDOWN_DISMISS),
                    r
                      ? t(this._element)
                          .one(o.TRANSITION_END, function (t) {
                            return n._hideModal(t);
                          })
                          .emulateTransitionEnd(300)
                      : this._hideModal();
                }
              }
            }),
            (m.dispose = function () {
              t.removeData(this._element, "bs.modal"),
                t(window, document, this._element, this._backdrop).off(n),
                (this._config = null),
                (this._element = null),
                (this._dialog = null),
                (this._backdrop = null),
                (this._isShown = null),
                (this._isBodyOverflowing = null),
                (this._ignoreBackdropClick = null),
                (this._scrollbarWidth = null);
            }),
            (m.handleUpdate = function () {
              this._adjustDialog();
            }),
            (m._getConfig = function (t) {
              return (t = r({}, a, t)), o.typeCheckConfig(e, t, l), t;
            }),
            (m._showElement = function (e) {
              var n = this,
                i = o.supportsTransitionEnd() && t(this._element).hasClass(d);
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                document.body.appendChild(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                (this._element.scrollTop = 0),
                i && o.reflow(this._element),
                t(this._element).addClass(p),
                this._config.focus && this._enforceFocus();
              var r = t.Event(c.SHOWN, { relatedTarget: e }),
                s = function () {
                  n._config.focus && n._element.focus(),
                    (n._isTransitioning = !1),
                    t(n._element).trigger(r);
                };
              i
                ? t(this._dialog)
                    .one(o.TRANSITION_END, s)
                    .emulateTransitionEnd(300)
                : s();
            }),
            (m._enforceFocus = function () {
              var e = this;
              t(document)
                .off(c.FOCUSIN)
                .on(c.FOCUSIN, function (n) {
                  document !== n.target &&
                    e._element !== n.target &&
                    0 === t(e._element).has(n.target).length &&
                    e._element.focus();
                });
            }),
            (m._setEscapeEvent = function () {
              var e = this;
              this._isShown && this._config.keyboard
                ? t(this._element).on(c.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide());
                  })
                : this._isShown || t(this._element).off(c.KEYDOWN_DISMISS);
            }),
            (m._setResizeEvent = function () {
              var e = this;
              this._isShown
                ? t(window).on(c.RESIZE, function (t) {
                    return e.handleUpdate(t);
                  })
                : t(window).off(c.RESIZE);
            }),
            (m._hideModal = function () {
              var e = this;
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                (this._isTransitioning = !1),
                this._showBackdrop(function () {
                  t(document.body).removeClass(u),
                    e._resetAdjustments(),
                    e._resetScrollbar(),
                    t(e._element).trigger(c.HIDDEN);
                });
            }),
            (m._removeBackdrop = function () {
              this._backdrop &&
                (t(this._backdrop).remove(), (this._backdrop = null));
            }),
            (m._showBackdrop = function (e) {
              var n = this,
                i = t(this._element).hasClass(d) ? d : "";
              if (this._isShown && this._config.backdrop) {
                var r = o.supportsTransitionEnd() && i;
                if (
                  ((this._backdrop = document.createElement("div")),
                  (this._backdrop.className = f),
                  i && t(this._backdrop).addClass(i),
                  t(this._backdrop).appendTo(document.body),
                  t(this._element).on(c.CLICK_DISMISS, function (t) {
                    n._ignoreBackdropClick
                      ? (n._ignoreBackdropClick = !1)
                      : t.target === t.currentTarget &&
                        ("static" === n._config.backdrop
                          ? n._element.focus()
                          : n.hide());
                  }),
                  r && o.reflow(this._backdrop),
                  t(this._backdrop).addClass(p),
                  !e)
                )
                  return;
                if (!r) return void e();
                t(this._backdrop)
                  .one(o.TRANSITION_END, e)
                  .emulateTransitionEnd(150);
              } else if (!this._isShown && this._backdrop) {
                t(this._backdrop).removeClass(p);
                var s = function () {
                  n._removeBackdrop(), e && e();
                };
                o.supportsTransitionEnd() && t(this._element).hasClass(d)
                  ? t(this._backdrop)
                      .one(o.TRANSITION_END, s)
                      .emulateTransitionEnd(150)
                  : s();
              } else e && e();
            }),
            (m._adjustDialog = function () {
              var t =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              !this._isBodyOverflowing &&
                t &&
                (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing &&
                  !t &&
                  (this._element.style.paddingRight =
                    this._scrollbarWidth + "px");
            }),
            (m._resetAdjustments = function () {
              (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
            }),
            (m._checkScrollbar = function () {
              var t = document.body.getBoundingClientRect();
              (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
                (this._scrollbarWidth = this._getScrollbarWidth());
            }),
            (m._setScrollbar = function () {
              var e = this;
              if (this._isBodyOverflowing) {
                t(v).each(function (n, i) {
                  var r = t(i)[0].style.paddingRight,
                    o = t(i).css("padding-right");
                  t(i)
                    .data("padding-right", r)
                    .css(
                      "padding-right",
                      parseFloat(o) + e._scrollbarWidth + "px"
                    );
                }),
                  t(b).each(function (n, i) {
                    var r = t(i)[0].style.marginRight,
                      o = t(i).css("margin-right");
                    t(i)
                      .data("margin-right", r)
                      .css(
                        "margin-right",
                        parseFloat(o) - e._scrollbarWidth + "px"
                      );
                  }),
                  t(y).each(function (n, i) {
                    var r = t(i)[0].style.marginRight,
                      o = t(i).css("margin-right");
                    t(i)
                      .data("margin-right", r)
                      .css(
                        "margin-right",
                        parseFloat(o) + e._scrollbarWidth + "px"
                      );
                  });
                var n = document.body.style.paddingRight,
                  i = t("body").css("padding-right");
                t("body")
                  .data("padding-right", n)
                  .css(
                    "padding-right",
                    parseFloat(i) + this._scrollbarWidth + "px"
                  );
              }
            }),
            (m._resetScrollbar = function () {
              t(v).each(function (e, n) {
                var i = t(n).data("padding-right");
                void 0 !== i &&
                  t(n).css("padding-right", i).removeData("padding-right");
              }),
                t(b + ", " + y).each(function (e, n) {
                  var i = t(n).data("margin-right");
                  void 0 !== i &&
                    t(n).css("margin-right", i).removeData("margin-right");
                });
              var e = t("body").data("padding-right");
              void 0 !== e &&
                t("body").css("padding-right", e).removeData("padding-right");
            }),
            (m._getScrollbarWidth = function () {
              var t = document.createElement("div");
              (t.className = h), document.body.appendChild(t);
              var e = t.getBoundingClientRect().width - t.clientWidth;
              return document.body.removeChild(t), e;
            }),
            (s._jQueryInterface = function (e, n) {
              return this.each(function () {
                var i = t(this).data("bs.modal"),
                  o = r(
                    {},
                    s.Default,
                    t(this).data(),
                    "object" == typeof e && e
                  );
                if (
                  (i || ((i = new s(this, o)), t(this).data("bs.modal", i)),
                  "string" == typeof e)
                ) {
                  if (void 0 === i[e])
                    throw new TypeError('No method named "' + e + '"');
                  i[e](n);
                } else o.show && i.show(n);
              });
            }),
            i(s, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return a;
                },
              },
            ]),
            s
          );
        })();
      return (
        t(document).on(c.CLICK_DATA_API, m, function (e) {
          var n,
            i = this,
            s = o.getSelectorFromElement(this);
          s && (n = t(s)[0]);
          var a = t(n).data("bs.modal")
            ? "toggle"
            : r({}, t(n).data(), t(this).data());
          ("A" !== this.tagName && "AREA" !== this.tagName) ||
            e.preventDefault();
          var l = t(n).one(c.SHOW, function (e) {
            e.isDefaultPrevented() ||
              l.one(c.HIDDEN, function () {
                t(i).is(":visible") && i.focus();
              });
          });
          E._jQueryInterface.call(t(n), a, this);
        }),
        (t.fn[e] = E._jQueryInterface),
        (t.fn[e].Constructor = E),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = s), E._jQueryInterface;
        }),
        E
      );
    })(e),
    ut = (function (t) {
      var e = "tooltip",
        n = ".bs.tooltip",
        s = t.fn[e],
        a = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        l = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)",
        },
        c = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left",
        },
        h = {
          animation: !0,
          template:
            '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: 0,
          container: !1,
          fallbackPlacement: "flip",
          boundary: "scrollParent",
        },
        f = "show",
        u = "out",
        d = {
          HIDE: "hide" + n,
          HIDDEN: "hidden" + n,
          SHOW: "show" + n,
          SHOWN: "shown" + n,
          INSERTED: "inserted" + n,
          CLICK: "click" + n,
          FOCUSIN: "focusin" + n,
          FOCUSOUT: "focusout" + n,
          MOUSEENTER: "mouseenter" + n,
          MOUSELEAVE: "mouseleave" + n,
        },
        p = "fade",
        g = "show",
        m = ".tooltip-inner",
        _ = ".arrow",
        v = "hover",
        b = "focus",
        y = "click",
        E = "manual",
        w = (function () {
          function s(t, e) {
            if (void 0 === ct)
              throw new TypeError(
                "Bootstrap tooltips require Popper.js (https://popper.js.org)"
              );
            (this._isEnabled = !0),
              (this._timeout = 0),
              (this._hoverState = ""),
              (this._activeTrigger = {}),
              (this._popper = null),
              (this.element = t),
              (this.config = this._getConfig(e)),
              (this.tip = null),
              this._setListeners();
          }
          var w = s.prototype;
          return (
            (w.enable = function () {
              this._isEnabled = !0;
            }),
            (w.disable = function () {
              this._isEnabled = !1;
            }),
            (w.toggleEnabled = function () {
              this._isEnabled = !this._isEnabled;
            }),
            (w.toggle = function (e) {
              if (this._isEnabled)
                if (e) {
                  var n = this.constructor.DATA_KEY,
                    i = t(e.currentTarget).data(n);
                  i ||
                    ((i = new this.constructor(
                      e.currentTarget,
                      this._getDelegateConfig()
                    )),
                    t(e.currentTarget).data(n, i)),
                    (i._activeTrigger.click = !i._activeTrigger.click),
                    i._isWithActiveTrigger()
                      ? i._enter(null, i)
                      : i._leave(null, i);
                } else {
                  if (t(this.getTipElement()).hasClass(g))
                    return void this._leave(null, this);
                  this._enter(null, this);
                }
            }),
            (w.dispose = function () {
              clearTimeout(this._timeout),
                t.removeData(this.element, this.constructor.DATA_KEY),
                t(this.element).off(this.constructor.EVENT_KEY),
                t(this.element).closest(".modal").off("hide.bs.modal"),
                this.tip && t(this.tip).remove(),
                (this._isEnabled = null),
                (this._timeout = null),
                (this._hoverState = null),
                (this._activeTrigger = null),
                null !== this._popper && this._popper.destroy(),
                (this._popper = null),
                (this.element = null),
                (this.config = null),
                (this.tip = null);
            }),
            (w.show = function () {
              var e = this;
              if ("none" === t(this.element).css("display"))
                throw new Error("Please use show on visible elements");
              var n = t.Event(this.constructor.Event.SHOW);
              if (this.isWithContent() && this._isEnabled) {
                t(this.element).trigger(n);
                var i = t.contains(
                  this.element.ownerDocument.documentElement,
                  this.element
                );
                if (n.isDefaultPrevented() || !i) return;
                var r = this.getTipElement(),
                  a = o.getUID(this.constructor.NAME);
                r.setAttribute("id", a),
                  this.element.setAttribute("aria-describedby", a),
                  this.setContent(),
                  this.config.animation && t(r).addClass(p);
                var l =
                    "function" == typeof this.config.placement
                      ? this.config.placement.call(this, r, this.element)
                      : this.config.placement,
                  c = this._getAttachment(l);
                this.addAttachmentClass(c);
                var h =
                  !1 === this.config.container
                    ? document.body
                    : t(this.config.container);
                t(r).data(this.constructor.DATA_KEY, this),
                  t.contains(
                    this.element.ownerDocument.documentElement,
                    this.tip
                  ) || t(r).appendTo(h),
                  t(this.element).trigger(this.constructor.Event.INSERTED),
                  (this._popper = new ct(this.element, r, {
                    placement: c,
                    modifiers: {
                      offset: { offset: this.config.offset },
                      flip: { behavior: this.config.fallbackPlacement },
                      arrow: { element: _ },
                      preventOverflow: {
                        boundariesElement: this.config.boundary,
                      },
                    },
                    onCreate: function (t) {
                      t.originalPlacement !== t.placement &&
                        e._handlePopperPlacementChange(t);
                    },
                    onUpdate: function (t) {
                      e._handlePopperPlacementChange(t);
                    },
                  })),
                  t(r).addClass(g),
                  "ontouchstart" in document.documentElement &&
                    t("body").children().on("mouseover", null, t.noop);
                var f = function () {
                  e.config.animation && e._fixTransition();
                  var n = e._hoverState;
                  (e._hoverState = null),
                    t(e.element).trigger(e.constructor.Event.SHOWN),
                    n === u && e._leave(null, e);
                };
                o.supportsTransitionEnd() && t(this.tip).hasClass(p)
                  ? t(this.tip)
                      .one(o.TRANSITION_END, f)
                      .emulateTransitionEnd(s._TRANSITION_DURATION)
                  : f();
              }
            }),
            (w.hide = function (e) {
              var n = this,
                i = this.getTipElement(),
                r = t.Event(this.constructor.Event.HIDE),
                s = function () {
                  n._hoverState !== f &&
                    i.parentNode &&
                    i.parentNode.removeChild(i),
                    n._cleanTipClass(),
                    n.element.removeAttribute("aria-describedby"),
                    t(n.element).trigger(n.constructor.Event.HIDDEN),
                    null !== n._popper && n._popper.destroy(),
                    e && e();
                };
              t(this.element).trigger(r),
                r.isDefaultPrevented() ||
                  (t(i).removeClass(g),
                  "ontouchstart" in document.documentElement &&
                    t("body").children().off("mouseover", null, t.noop),
                  (this._activeTrigger[y] = !1),
                  (this._activeTrigger[b] = !1),
                  (this._activeTrigger[v] = !1),
                  o.supportsTransitionEnd() && t(this.tip).hasClass(p)
                    ? t(i).one(o.TRANSITION_END, s).emulateTransitionEnd(150)
                    : s(),
                  (this._hoverState = ""));
            }),
            (w.update = function () {
              null !== this._popper && this._popper.scheduleUpdate();
            }),
            (w.isWithContent = function () {
              return Boolean(this.getTitle());
            }),
            (w.addAttachmentClass = function (e) {
              t(this.getTipElement()).addClass("bs-tooltip-" + e);
            }),
            (w.getTipElement = function () {
              return (
                (this.tip = this.tip || t(this.config.template)[0]), this.tip
              );
            }),
            (w.setContent = function () {
              var e = t(this.getTipElement());
              this.setElementContent(e.find(m), this.getTitle()),
                e.removeClass(p + " " + g);
            }),
            (w.setElementContent = function (e, n) {
              var i = this.config.html;
              "object" == typeof n && (n.nodeType || n.jquery)
                ? i
                  ? t(n).parent().is(e) || e.empty().append(n)
                  : e.text(t(n).text())
                : e[i ? "html" : "text"](n);
            }),
            (w.getTitle = function () {
              var t = this.element.getAttribute("data-original-title");
              return (
                t ||
                  (t =
                    "function" == typeof this.config.title
                      ? this.config.title.call(this.element)
                      : this.config.title),
                t
              );
            }),
            (w._getAttachment = function (t) {
              return c[t.toUpperCase()];
            }),
            (w._setListeners = function () {
              var e = this;
              this.config.trigger.split(" ").forEach(function (n) {
                if ("click" === n)
                  t(e.element).on(
                    e.constructor.Event.CLICK,
                    e.config.selector,
                    function (t) {
                      return e.toggle(t);
                    }
                  );
                else if (n !== E) {
                  var i =
                      n === v
                        ? e.constructor.Event.MOUSEENTER
                        : e.constructor.Event.FOCUSIN,
                    r =
                      n === v
                        ? e.constructor.Event.MOUSELEAVE
                        : e.constructor.Event.FOCUSOUT;
                  t(e.element)
                    .on(i, e.config.selector, function (t) {
                      return e._enter(t);
                    })
                    .on(r, e.config.selector, function (t) {
                      return e._leave(t);
                    });
                }
                t(e.element)
                  .closest(".modal")
                  .on("hide.bs.modal", function () {
                    return e.hide();
                  });
              }),
                this.config.selector
                  ? (this.config = r({}, this.config, {
                      trigger: "manual",
                      selector: "",
                    }))
                  : this._fixTitle();
            }),
            (w._fixTitle = function () {
              var t = typeof this.element.getAttribute("data-original-title");
              (this.element.getAttribute("title") || "string" !== t) &&
                (this.element.setAttribute(
                  "data-original-title",
                  this.element.getAttribute("title") || ""
                ),
                this.element.setAttribute("title", ""));
            }),
            (w._enter = function (e, n) {
              var i = this.constructor.DATA_KEY;
              (n = n || t(e.currentTarget).data(i)) ||
                ((n = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig()
                )),
                t(e.currentTarget).data(i, n)),
                e && (n._activeTrigger["focusin" === e.type ? b : v] = !0),
                t(n.getTipElement()).hasClass(g) || n._hoverState === f
                  ? (n._hoverState = f)
                  : (clearTimeout(n._timeout),
                    (n._hoverState = f),
                    n.config.delay && n.config.delay.show
                      ? (n._timeout = setTimeout(function () {
                          n._hoverState === f && n.show();
                        }, n.config.delay.show))
                      : n.show());
            }),
            (w._leave = function (e, n) {
              var i = this.constructor.DATA_KEY;
              (n = n || t(e.currentTarget).data(i)) ||
                ((n = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig()
                )),
                t(e.currentTarget).data(i, n)),
                e && (n._activeTrigger["focusout" === e.type ? b : v] = !1),
                n._isWithActiveTrigger() ||
                  (clearTimeout(n._timeout),
                  (n._hoverState = u),
                  n.config.delay && n.config.delay.hide
                    ? (n._timeout = setTimeout(function () {
                        n._hoverState === u && n.hide();
                      }, n.config.delay.hide))
                    : n.hide());
            }),
            (w._isWithActiveTrigger = function () {
              for (var t in this._activeTrigger)
                if (this._activeTrigger[t]) return !0;
              return !1;
            }),
            (w._getConfig = function (n) {
              return (
                "number" ==
                  typeof (n = r(
                    {},
                    this.constructor.Default,
                    t(this.element).data(),
                    n
                  )).delay && (n.delay = { show: n.delay, hide: n.delay }),
                "number" == typeof n.title && (n.title = n.title.toString()),
                "number" == typeof n.content &&
                  (n.content = n.content.toString()),
                o.typeCheckConfig(e, n, this.constructor.DefaultType),
                n
              );
            }),
            (w._getDelegateConfig = function () {
              var t = {};
              if (this.config)
                for (var e in this.config)
                  this.constructor.Default[e] !== this.config[e] &&
                    (t[e] = this.config[e]);
              return t;
            }),
            (w._cleanTipClass = function () {
              var e = t(this.getTipElement()),
                n = e.attr("class").match(a);
              null !== n && n.length > 0 && e.removeClass(n.join(""));
            }),
            (w._handlePopperPlacementChange = function (t) {
              this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(t.placement));
            }),
            (w._fixTransition = function () {
              var e = this.getTipElement(),
                n = this.config.animation;
              null === e.getAttribute("x-placement") &&
                (t(e).removeClass(p),
                (this.config.animation = !1),
                this.hide(),
                this.show(),
                (this.config.animation = n));
            }),
            (s._jQueryInterface = function (e) {
              return this.each(function () {
                var n = t(this).data("bs.tooltip"),
                  i = "object" == typeof e && e;
                if (
                  (n || !/dispose|hide/.test(e)) &&
                  (n || ((n = new s(this, i)), t(this).data("bs.tooltip", n)),
                  "string" == typeof e)
                ) {
                  if (void 0 === n[e])
                    throw new TypeError('No method named "' + e + '"');
                  n[e]();
                }
              });
            }),
            i(s, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return h;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return e;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return "bs.tooltip";
                },
              },
              {
                key: "Event",
                get: function () {
                  return d;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return n;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return l;
                },
              },
            ]),
            s
          );
        })();
      return (
        (t.fn[e] = w._jQueryInterface),
        (t.fn[e].Constructor = w),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = s), w._jQueryInterface;
        }),
        w
      );
    })(e),
    dt = (function (t) {
      var e = "popover",
        n = ".bs.popover",
        o = t.fn[e],
        s = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        a = r({}, ut.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        }),
        l = r({}, ut.DefaultType, { content: "(string|element|function)" }),
        c = "fade",
        h = "show",
        f = ".popover-header",
        u = ".popover-body",
        d = {
          HIDE: "hide" + n,
          HIDDEN: "hidden" + n,
          SHOW: "show" + n,
          SHOWN: "shown" + n,
          INSERTED: "inserted" + n,
          CLICK: "click" + n,
          FOCUSIN: "focusin" + n,
          FOCUSOUT: "focusout" + n,
          MOUSEENTER: "mouseenter" + n,
          MOUSELEAVE: "mouseleave" + n,
        },
        p = (function (r) {
          var o, p;
          function g() {
            return r.apply(this, arguments) || this;
          }
          (p = r),
            ((o = g).prototype = Object.create(p.prototype)),
            (o.prototype.constructor = o),
            (o.__proto__ = p);
          var m = g.prototype;
          return (
            (m.isWithContent = function () {
              return this.getTitle() || this._getContent();
            }),
            (m.addAttachmentClass = function (e) {
              t(this.getTipElement()).addClass("bs-popover-" + e);
            }),
            (m.getTipElement = function () {
              return (
                (this.tip = this.tip || t(this.config.template)[0]), this.tip
              );
            }),
            (m.setContent = function () {
              var e = t(this.getTipElement());
              this.setElementContent(e.find(f), this.getTitle());
              var n = this._getContent();
              "function" == typeof n && (n = n.call(this.element)),
                this.setElementContent(e.find(u), n),
                e.removeClass(c + " " + h);
            }),
            (m._getContent = function () {
              return (
                this.element.getAttribute("data-content") || this.config.content
              );
            }),
            (m._cleanTipClass = function () {
              var e = t(this.getTipElement()),
                n = e.attr("class").match(s);
              null !== n && n.length > 0 && e.removeClass(n.join(""));
            }),
            (g._jQueryInterface = function (e) {
              return this.each(function () {
                var n = t(this).data("bs.popover"),
                  i = "object" == typeof e ? e : null;
                if (
                  (n || !/destroy|hide/.test(e)) &&
                  (n || ((n = new g(this, i)), t(this).data("bs.popover", n)),
                  "string" == typeof e)
                ) {
                  if (void 0 === n[e])
                    throw new TypeError('No method named "' + e + '"');
                  n[e]();
                }
              });
            }),
            i(g, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return a;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return e;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return "bs.popover";
                },
              },
              {
                key: "Event",
                get: function () {
                  return d;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return n;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return l;
                },
              },
            ]),
            g
          );
        })(ut);
      return (
        (t.fn[e] = p._jQueryInterface),
        (t.fn[e].Constructor = p),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = o), p._jQueryInterface;
        }),
        p
      );
    })(e),
    pt = (function (t) {
      var e = "scrollspy",
        n = t.fn[e],
        s = { offset: 10, method: "auto", target: "" },
        a = { offset: "number", method: "string", target: "(string|element)" },
        l = {
          ACTIVATE: "activate.bs.scrollspy",
          SCROLL: "scroll.bs.scrollspy",
          LOAD_DATA_API: "load.bs.scrollspy.data-api",
        },
        c = "dropdown-item",
        h = "active",
        f = '[data-spy="scroll"]',
        u = ".active",
        d = ".nav, .list-group",
        p = ".nav-link",
        g = ".nav-item",
        m = ".list-group-item",
        _ = ".dropdown",
        v = ".dropdown-item",
        b = ".dropdown-toggle",
        y = "offset",
        E = "position",
        w = (function () {
          function n(e, n) {
            var i = this;
            (this._element = e),
              (this._scrollElement = "BODY" === e.tagName ? window : e),
              (this._config = this._getConfig(n)),
              (this._selector =
                this._config.target +
                " " +
                p +
                "," +
                this._config.target +
                " " +
                m +
                "," +
                this._config.target +
                " " +
                v),
              (this._offsets = []),
              (this._targets = []),
              (this._activeTarget = null),
              (this._scrollHeight = 0),
              t(this._scrollElement).on(l.SCROLL, function (t) {
                return i._process(t);
              }),
              this.refresh(),
              this._process();
          }
          var f = n.prototype;
          return (
            (f.refresh = function () {
              var e = this,
                n = this._scrollElement === this._scrollElement.window ? y : E,
                i = "auto" === this._config.method ? n : this._config.method,
                r = i === E ? this._getScrollTop() : 0;
              (this._offsets = []),
                (this._targets = []),
                (this._scrollHeight = this._getScrollHeight()),
                t
                  .makeArray(t(this._selector))
                  .map(function (e) {
                    var n,
                      s = o.getSelectorFromElement(e);
                    if ((s && (n = t(s)[0]), n)) {
                      var a = n.getBoundingClientRect();
                      if (a.width || a.height) return [t(n)[i]().top + r, s];
                    }
                    return null;
                  })
                  .filter(function (t) {
                    return t;
                  })
                  .sort(function (t, e) {
                    return t[0] - e[0];
                  })
                  .forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1]);
                  });
            }),
            (f.dispose = function () {
              t.removeData(this._element, "bs.scrollspy"),
                t(this._scrollElement).off(".bs.scrollspy"),
                (this._element = null),
                (this._scrollElement = null),
                (this._config = null),
                (this._selector = null),
                (this._offsets = null),
                (this._targets = null),
                (this._activeTarget = null),
                (this._scrollHeight = null);
            }),
            (f._getConfig = function (n) {
              if ("string" != typeof (n = r({}, s, n)).target) {
                var i = t(n.target).attr("id");
                i || ((i = o.getUID(e)), t(n.target).attr("id", i)),
                  (n.target = "#" + i);
              }
              return o.typeCheckConfig(e, n, a), n;
            }),
            (f._getScrollTop = function () {
              return this._scrollElement === window
                ? this._scrollElement.pageYOffset
                : this._scrollElement.scrollTop;
            }),
            (f._getScrollHeight = function () {
              return (
                this._scrollElement.scrollHeight ||
                Math.max(
                  document.body.scrollHeight,
                  document.documentElement.scrollHeight
                )
              );
            }),
            (f._getOffsetHeight = function () {
              return this._scrollElement === window
                ? window.innerHeight
                : this._scrollElement.getBoundingClientRect().height;
            }),
            (f._process = function () {
              var t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                n = this._config.offset + e - this._getOffsetHeight();
              if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i);
              } else {
                if (
                  this._activeTarget &&
                  t < this._offsets[0] &&
                  this._offsets[0] > 0
                )
                  return (this._activeTarget = null), void this._clear();
                for (var r = this._offsets.length; r--; ) {
                  this._activeTarget !== this._targets[r] &&
                    t >= this._offsets[r] &&
                    (void 0 === this._offsets[r + 1] ||
                      t < this._offsets[r + 1]) &&
                    this._activate(this._targets[r]);
                }
              }
            }),
            (f._activate = function (e) {
              (this._activeTarget = e), this._clear();
              var n = this._selector.split(",");
              n = n.map(function (t) {
                return (
                  t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                );
              });
              var i = t(n.join(","));
              i.hasClass(c)
                ? (i.closest(_).find(b).addClass(h), i.addClass(h))
                : (i.addClass(h),
                  i
                    .parents(d)
                    .prev(p + ", " + m)
                    .addClass(h),
                  i.parents(d).prev(g).children(p).addClass(h)),
                t(this._scrollElement).trigger(l.ACTIVATE, {
                  relatedTarget: e,
                });
            }),
            (f._clear = function () {
              t(this._selector).filter(u).removeClass(h);
            }),
            (n._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data("bs.scrollspy");
                if (
                  (i ||
                    ((i = new n(this, "object" == typeof e && e)),
                    t(this).data("bs.scrollspy", i)),
                  "string" == typeof e)
                ) {
                  if (void 0 === i[e])
                    throw new TypeError('No method named "' + e + '"');
                  i[e]();
                }
              });
            }),
            i(n, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
              {
                key: "Default",
                get: function () {
                  return s;
                },
              },
            ]),
            n
          );
        })();
      return (
        t(window).on(l.LOAD_DATA_API, function () {
          for (var e = t.makeArray(t(f)), n = e.length; n--; ) {
            var i = t(e[n]);
            w._jQueryInterface.call(i, i.data());
          }
        }),
        (t.fn[e] = w._jQueryInterface),
        (t.fn[e].Constructor = w),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = n), w._jQueryInterface;
        }),
        w
      );
    })(e),
    gt = (function (t) {
      var e = t.fn.tab,
        n = {
          HIDE: "hide.bs.tab",
          HIDDEN: "hidden.bs.tab",
          SHOW: "show.bs.tab",
          SHOWN: "shown.bs.tab",
          CLICK_DATA_API: "click.bs.tab.data-api",
        },
        r = "dropdown-menu",
        s = "active",
        a = "disabled",
        l = "fade",
        c = "show",
        h = ".dropdown",
        f = ".nav, .list-group",
        u = ".active",
        d = "> li > .active",
        p = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        g = ".dropdown-toggle",
        m = "> .dropdown-menu .active",
        _ = (function () {
          function e(t) {
            this._element = t;
          }
          var p = e.prototype;
          return (
            (p.show = function () {
              var e = this;
              if (
                !(
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                    t(this._element).hasClass(s)) ||
                  t(this._element).hasClass(a)
                )
              ) {
                var i,
                  r,
                  l = t(this._element).closest(f)[0],
                  c = o.getSelectorFromElement(this._element);
                if (l) {
                  var h = "UL" === l.nodeName ? d : u;
                  r = (r = t.makeArray(t(l).find(h)))[r.length - 1];
                }
                var p = t.Event(n.HIDE, { relatedTarget: this._element }),
                  g = t.Event(n.SHOW, { relatedTarget: r });
                if (
                  (r && t(r).trigger(p),
                  t(this._element).trigger(g),
                  !g.isDefaultPrevented() && !p.isDefaultPrevented())
                ) {
                  c && (i = t(c)[0]), this._activate(this._element, l);
                  var m = function () {
                    var i = t.Event(n.HIDDEN, { relatedTarget: e._element }),
                      o = t.Event(n.SHOWN, { relatedTarget: r });
                    t(r).trigger(i), t(e._element).trigger(o);
                  };
                  i ? this._activate(i, i.parentNode, m) : m();
                }
              }
            }),
            (p.dispose = function () {
              t.removeData(this._element, "bs.tab"), (this._element = null);
            }),
            (p._activate = function (e, n, i) {
              var r = this,
                s = ("UL" === n.nodeName ? t(n).find(d) : t(n).children(u))[0],
                a = i && o.supportsTransitionEnd() && s && t(s).hasClass(l),
                c = function () {
                  return r._transitionComplete(e, s, i);
                };
              s && a
                ? t(s).one(o.TRANSITION_END, c).emulateTransitionEnd(150)
                : c();
            }),
            (p._transitionComplete = function (e, n, i) {
              if (n) {
                t(n).removeClass(c + " " + s);
                var a = t(n.parentNode).find(m)[0];
                a && t(a).removeClass(s),
                  "tab" === n.getAttribute("role") &&
                    n.setAttribute("aria-selected", !1);
              }
              if (
                (t(e).addClass(s),
                "tab" === e.getAttribute("role") &&
                  e.setAttribute("aria-selected", !0),
                o.reflow(e),
                t(e).addClass(c),
                e.parentNode && t(e.parentNode).hasClass(r))
              ) {
                var l = t(e).closest(h)[0];
                l && t(l).find(g).addClass(s),
                  e.setAttribute("aria-expanded", !0);
              }
              i && i();
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this),
                  r = i.data("bs.tab");
                if (
                  (r || ((r = new e(this)), i.data("bs.tab", r)),
                  "string" == typeof n)
                ) {
                  if (void 0 === r[n])
                    throw new TypeError('No method named "' + n + '"');
                  r[n]();
                }
              });
            }),
            i(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
            ]),
            e
          );
        })();
      return (
        t(document).on(n.CLICK_DATA_API, p, function (e) {
          e.preventDefault(), _._jQueryInterface.call(t(this), "show");
        }),
        (t.fn.tab = _._jQueryInterface),
        (t.fn.tab.Constructor = _),
        (t.fn.tab.noConflict = function () {
          return (t.fn.tab = e), _._jQueryInterface;
        }),
        _
      );
    })(e);
  !(function (t) {
    if (void 0 === t)
      throw new TypeError(
        "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
      );
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (
      (e[0] < 2 && e[1] < 9) ||
      (1 === e[0] && 9 === e[1] && e[2] < 1) ||
      e[0] >= 4
    )
      throw new Error(
        "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
      );
  })(e),
    (t.Util = o),
    (t.Alert = s),
    (t.Button = a),
    (t.Carousel = l),
    (t.Collapse = c),
    (t.Dropdown = ht),
    (t.Modal = ft),
    (t.Popover = dt),
    (t.Scrollspy = pt),
    (t.Tab = gt),
    (t.Tooltip = ut),
    Object.defineProperty(t, "__esModule", { value: !0 });
}),
  (function (t) {
    var e,
      n = [],
      i = !1;
    function r(o) {
      clearTimeout(e),
        t(o).hasClass("reveal_visible") ||
          (o ? n.push(o) : (i = !1),
          i || (t(n.shift()).addClass("reveal_visible"), (i = !0)),
          n.length && (e = setTimeout(r, 125)));
    }
    t(document).ready(function () {
      t(".reveal").length &&
        t(".reveal").waypoint({
          handler: function (t) {
            "down" == t && r(this.element);
          },
          offset: "100%",
        });
    }),
      t(document).ready(function () {
        t("#mobile-utility-nav .tray").addClass("collapse"),
          t(".scroll").on("click touchend", function (e) {
            var n = t(this.hash),
              i = t(this).data("scroll-top") || 80;
            e.preventDefault(),
              0 === t(this).data("scroll-top")
                ? t("html, body").animate({ scrollTop: n.offset().top }, 1e3)
                : t("html, body").animate(
                    { scrollTop: n.offset().top - i },
                    1e3
                  );
          });
        var e = t(
          "[data-bg-image], [data-bg-image-sm], [data-bg-image-md], [data-bg-image-lg], [data-bg-image-xl]"
        );
        function n() {
          e.each(function () {
            window.matchMedia("(min-width: 1200px)").matches &&
            void 0 !== t(this).data("bg-image-xl")
              ? t(this).css(
                  "background-image",
                  "url(" + t(this).data("bg-image-xl") + ")"
                )
              : window.matchMedia("(min-width: 992px)").matches &&
                void 0 !== t(this).data("bg-image-lg")
              ? t(this).css(
                  "background-image",
                  "url(" + t(this).data("bg-image-lg") + ")"
                )
              : window.matchMedia("(min-width: 768px)").matches &&
                void 0 !== t(this).data("bg-image-md")
              ? t(this).css(
                  "background-image",
                  "url(" + t(this).data("bg-image-md") + ")"
                )
              : window.matchMedia("(min-width: 576px)").matches &&
                void 0 !== t(this).data("bg-image-sm")
              ? t(this).css(
                  "background-image",
                  "url(" + t(this).data("bg-image-sm") + ")"
                )
              : void 0 !== t(this).data("bg-image")
              ? t(this).css(
                  "background-image",
                  "url(" + t(this).data("bg-image") + ")"
                )
              : t(this).css("background-image", "");
          });
        }
        n(),
          t(window).on("resize", throttle(n, 500)),
          t("img.svg").each(function () {
            var e = t(this),
              n = e.attr("id"),
              i = e.attr("class"),
              r = e.attr("src"),
              o = e.attr("width"),
              s = e.attr("height");
            t.get(
              r,
              function (r) {
                var a = t(r).find("svg");
                void 0 !== n && (a = a.attr("id", n)),
                  void 0 !== i && (a = a.attr("class", i)),
                  void 0 !== o && (a = a.attr("style", "width: " + o + "px;")),
                  void 0 !== s && (a = a.attr("style", "height: " + s + "px;")),
                  "undefined" !== s &&
                    (a = a.attr(
                      "style",
                      "width: " + o + "px; height: " + s + "px;"
                    )),
                  !(a = a.removeAttr("xmlns:a")).attr("viewBox") &&
                    a.attr("height") &&
                    a.attr("width") &&
                    a.attr(
                      "viewBox",
                      "0 0 " + a.attr("height") + " " + a.attr("width")
                    ),
                  e.replaceWith(a);
              },
              "xml"
            );
          }),
          t(".video-modal").each(function () {
            t(this).on("show.bs.modal", function () {
              var e = t(this).find("iframe.embed-responsive-item"),
                n = e.data("src");
              e.attr("src", n);
            }),
              t(this).on("hide.bs.modal", function () {
                t(this).find("iframe.embed-responsive-item").attr("src", "");
              });
          });
        var i = t("#sticky-nav");
        if (i.length) {
          var r = i.outerHeight(),
            o = i.offset().top,
            s = t("body"),
            a = t("#main-menu, #main-nav-wrap"),
            l = a.outerHeight() || null;
          t(window).on(
            "scroll",
            throttle(function () {
              var e = t(window).scrollTop();
              if (
                (e > o && i.is(":visible")
                  ? (s.css("margin-top", r), i.addClass("sticky"))
                  : (s.css("margin-top", ""), i.removeClass("sticky")),
                a.length &&
                  (a.hasClass("pfe-sticky") ||
                    a.hasClass("scroll-to-fixed-fixed")))
              )
                if (e > o - l) {
                  var n = e - o,
                    c = l - Math.abs(n);
                  a.css("top", n <= 0 ? -c : -a.outerHeight());
                } else a.css("top", 0);
            }, 20)
          ),
            t(window).on(
              "resize",
              throttle(function () {
                (o = i.offset().top),
                  (l = a.outerHeight() || null),
                  (r = i.outerHeight()),
                  s.toggleClass("scrolled", s.scrollTop() > l);
              }, 125)
            ),
            t(window).on("load", function () {
              (o = i.offset().top), (l = a.outerHeight() || null);
            });
        }
        if (t(".resource-carousel").length) {
          t(".resource-carousel").each(function () {
            var e = t(this).attr("id"),
              n = t("#" + e)
                .parents("section")
                .find(".carousel-nav");
            t("#" + e).slick({
              appendArrows: n,
              infinite: !1,
              slidesToShow: 3,
              nextArrow:
                '<button class="next" title="Next"><i class="fa fa-angle-right font-size-36"></i></button>',
              prevArrow:
                '<button class="prev mr-1" title="Previous"><i class="fa fa-angle-left font-size-36"></i></button>',
              responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 768, settings: { slidesToShow: 1 } },
              ],
            });
          });
          t(window).on(
            "resize",
            throttle(function () {
              t(".resource-carousel").each(function () {
                var e = t(this).attr("id");
                t("#" + e).slick("setPosition");
              });
            }, 600)
          );
        }
        t(".video-poster-replace").length &&
          t(".video-poster-replace .poster").on("click", function (e) {
            var n = t(this)
                .siblings(".video-embed")
                .find(".embed-responsive-item"),
              i = n.is("video") ? n.find("source") : null,
              r = t(this).parent(".video-poster-replace");
            e.preventDefault(),
              i
                ? (i.attr("src", i.data("src")), n[0].load())
                : n.attr("src", n.data("src")),
              r.addClass("video-poster-replaced"),
              r.trigger({ type: "rh.dms.video-poster-replaced" });
          }),
          t(".accordion-panel").length &&
            (t(".accordion-panel").on("show.bs.collapse", function (e) {
              t(e.currentTarget).addClass("showing");
            }),
            t(".accordion-panel").on("shown.bs.collapse", function (e) {
              t(e.currentTarget).removeClass("showing");
            })),
          t(".card-vslide").on("click", function () {
            t(this).toggleClass("active");
          });
        var c = t(".card-half-slide");
        c.each(function (t) {
          (int = 3 * t + 1), c.eq(int).addClass("default").addClass("active");
        }),
          c.hover(
            function () {
              t(this)
                .parents(".row")
                .find(".card-half-slide")
                .removeClass("active"),
                t(this).addClass("active");
            },
            function () {
              t(this)
                .parents(".row")
                .find(".card-half-slide")
                .removeClass("active"),
                t(this)
                  .parents(".row")
                  .find(".card-half-slide.default")
                  .addClass("active");
            }
          );
      });
  })(jQuery);
