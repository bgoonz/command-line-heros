/* ========================================================================================== */
/*  Project: Studio - Web
/*  Author: Digital Business
/*  Date: Wed Aug 18 2021 17:07:22 GMT+0000 (Coordinated Universal Time)
/*  
/*  Copyright © 2021 Red Hat, Inc.
/*  https://www.redhat.com
/* ========================================================================================== */

"object" == typeof navigator &&
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("Plyr", t)
      : ((e = e || self).Plyr = t());
  })(this, function () {
    "use strict";
    function e(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function i(e, i, n) {
      return i && t(e.prototype, i), n && t(e, n), e;
    }
    function n(e, t, i) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = i),
        e
      );
    }
    function a(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var i = [],
            n = !0,
            a = !1,
            s = void 0;
          try {
            for (
              var o, r = e[Symbol.iterator]();
              !(n = (o = r.next()).done) &&
              (i.push(o.value), !t || i.length !== t);
              n = !0
            );
          } catch (e) {
            (a = !0), (s = e);
          } finally {
            try {
              n || null == r.return || r.return();
            } finally {
              if (a) throw s;
            }
          }
          return i;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        })()
      );
    }
    function s(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, i = new Array(e.length); t < e.length; t++)
              i[t] = e[t];
            return i;
          }
        })(e) ||
        (function (e) {
          if (
            Symbol.iterator in Object(e) ||
            "[object Arguments]" === Object.prototype.toString.call(e)
          )
            return Array.from(e);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance"
          );
        })()
      );
    }
    var o = { addCSS: !0, thumbWidth: 15, watch: !0 };
    function r(e, t) {
      return function () {
        return Array.from(document.querySelectorAll(t)).includes(this);
      }.call(e, t);
    }
    var l = function (e) {
        return null != e ? e.constructor : null;
      },
      c = function (e, t) {
        return Boolean(e && t && e instanceof t);
      },
      u = function (e) {
        return null == e;
      },
      d = function (e) {
        return l(e) === Object;
      },
      h = function (e) {
        return l(e) === String;
      },
      p = function (e) {
        return Array.isArray(e);
      },
      m = function (e) {
        return c(e, NodeList);
      },
      f = h,
      g = p,
      y = m,
      v = function (e) {
        return c(e, Element);
      },
      b = function (e) {
        return c(e, Event);
      },
      k = function (e) {
        return (
          u(e) ||
          ((h(e) || p(e) || m(e)) && !e.length) ||
          (d(e) && !Object.keys(e).length)
        );
      };
    function w(e, t) {
      if (t < 1) {
        var i = (n = "".concat(t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/))
          ? Math.max(0, (n[1] ? n[1].length : 0) - (n[2] ? +n[2] : 0))
          : 0;
        return parseFloat(e.toFixed(i));
      }
      var n;
      return Math.round(e / t) * t;
    }
    var T = (function () {
        function t(i, n) {
          e(this, t),
            v(i)
              ? (this.element = i)
              : f(i) && (this.element = document.querySelector(i)),
            v(this.element) &&
              k(this.element.rangeTouch) &&
              ((this.config = Object.assign({}, o, n)), this.init());
        }
        return (
          i(
            t,
            [
              {
                key: "init",
                value: function () {
                  t.enabled &&
                    (this.config.addCSS &&
                      ((this.element.style.userSelect = "none"),
                      (this.element.style.webKitUserSelect = "none"),
                      (this.element.style.touchAction = "manipulation")),
                    this.listeners(!0),
                    (this.element.rangeTouch = this));
                },
              },
              {
                key: "destroy",
                value: function () {
                  t.enabled &&
                    (this.listeners(!1), (this.element.rangeTouch = null));
                },
              },
              {
                key: "listeners",
                value: function (e) {
                  var t = this,
                    i = e ? "addEventListener" : "removeEventListener";
                  ["touchstart", "touchmove", "touchend"].forEach(function (e) {
                    t.element[i](
                      e,
                      function (e) {
                        return t.set(e);
                      },
                      !1
                    );
                  });
                },
              },
              {
                key: "get",
                value: function (e) {
                  if (!t.enabled || !b(e)) return null;
                  var i,
                    n = e.target,
                    a = e.changedTouches[0],
                    s = parseFloat(n.getAttribute("min")) || 0,
                    o = parseFloat(n.getAttribute("max")) || 100,
                    r = parseFloat(n.getAttribute("step")) || 1,
                    l = o - s,
                    c = n.getBoundingClientRect(),
                    u = ((100 / c.width) * (this.config.thumbWidth / 2)) / 100;
                  return (
                    (i = (100 / c.width) * (a.clientX - c.left)) < 0
                      ? (i = 0)
                      : i > 100 && (i = 100),
                    i < 50
                      ? (i -= (100 - 2 * i) * u)
                      : i > 50 && (i += 2 * (i - 50) * u),
                    s + w(l * (i / 100), r)
                  );
                },
              },
              {
                key: "set",
                value: function (e) {
                  t.enabled &&
                    b(e) &&
                    !e.target.disabled &&
                    (e.preventDefault(),
                    (e.target.value = this.get(e)),
                    (function (e, t) {
                      if (e && t) {
                        var i = new Event(t);
                        e.dispatchEvent(i);
                      }
                    })(e.target, "touchend" === e.type ? "change" : "input"));
                },
              },
            ],
            [
              {
                key: "setup",
                value: function (e) {
                  var i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = null;
                  if (
                    (k(e) || f(e)
                      ? (n = Array.from(
                          document.querySelectorAll(
                            f(e) ? e : 'input[type="range"]'
                          )
                        ))
                      : v(e)
                      ? (n = [e])
                      : y(e)
                      ? (n = Array.from(e))
                      : g(e) && (n = e.filter(v)),
                    k(n))
                  )
                    return null;
                  var a = Object.assign({}, o, i);
                  if (f(e) && a.watch) {
                    var s = new MutationObserver(function (i) {
                      Array.from(i).forEach(function (i) {
                        Array.from(i.addedNodes).forEach(function (i) {
                          if (v(i) && r(i, e)) new t(i, a);
                        });
                      });
                    });
                    s.observe(document.body, { childList: !0, subtree: !0 });
                  }
                  return n.map(function (e) {
                    return new t(e, i);
                  });
                },
              },
              {
                key: "enabled",
                get: function () {
                  return "ontouchstart" in document.documentElement;
                },
              },
            ]
          ),
          t
        );
      })(),
      C = function (e) {
        return null != e ? e.constructor : null;
      },
      A = function (e, t) {
        return Boolean(e && t && e instanceof t);
      },
      E = function (e) {
        return null == e;
      },
      S = function (e) {
        return C(e) === Object;
      },
      P = function (e) {
        return C(e) === String;
      },
      M = function (e) {
        return Array.isArray(e);
      },
      N = function (e) {
        return A(e, NodeList);
      },
      x = function (e) {
        return (
          E(e) ||
          ((P(e) || M(e) || N(e)) && !e.length) ||
          (S(e) && !Object.keys(e).length)
        );
      },
      I = E,
      L = S,
      _ = function (e) {
        return C(e) === Number && !Number.isNaN(e);
      },
      O = P,
      q = function (e) {
        return C(e) === Boolean;
      },
      H = function (e) {
        return C(e) === Function;
      },
      D = M,
      j = N,
      F = function (e) {
        return A(e, Element);
      },
      R = function (e) {
        return A(e, Event);
      },
      V = function (e) {
        return A(e, KeyboardEvent);
      },
      B = function (e) {
        return A(e, TextTrack) || (!E(e) && P(e.kind));
      },
      U = function (e) {
        if (A(e, window.URL)) return !0;
        if (!P(e)) return !1;
        var t = e;
        (e.startsWith("http://") && e.startsWith("https://")) ||
          (t = "http://".concat(e));
        try {
          return !x(new URL(t).hostname);
        } catch (e) {
          return !1;
        }
      },
      W = x,
      z = (function () {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function () {
              return (e = !0), null;
            },
          });
          window.addEventListener("test", null, t),
            window.removeEventListener("test", null, t);
        } catch (e) {}
        return e;
      })();
    function K(e, t, i) {
      var n = this,
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
        o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (e && "addEventListener" in e && !W(t) && H(i)) {
        var r = t.split(" "),
          l = o;
        z && (l = { passive: s, capture: o }),
          r.forEach(function (t) {
            n &&
              n.eventListeners &&
              a &&
              n.eventListeners.push({
                element: e,
                type: t,
                callback: i,
                options: l,
              }),
              e[a ? "addEventListener" : "removeEventListener"](t, i, l);
          });
      }
    }
    function Y(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 ? arguments[2] : void 0,
        n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      K.call(this, e, t, i, !0, n, a);
    }
    function Q(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 ? arguments[2] : void 0,
        n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      K.call(this, e, t, i, !1, n, a);
    }
    function X(e) {
      var t = this,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 ? arguments[2] : void 0,
        a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        o = function o() {
          Q(e, i, o, a, s);
          for (var r = arguments.length, l = new Array(r), c = 0; c < r; c++)
            l[c] = arguments[c];
          n.apply(t, l);
        };
      K.call(this, e, i, o, !0, a, s);
    }
    function J(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (F(e) && !W(t)) {
        var a = new CustomEvent(t, {
          bubbles: i,
          detail: Object.assign({}, n, { plyr: this }),
        });
        e.dispatchEvent(a);
      }
    }
    function $() {
      this &&
        this.eventListeners &&
        (this.eventListeners.forEach(function (e) {
          var t = e.element,
            i = e.type,
            n = e.callback,
            a = e.options;
          t.removeEventListener(i, n, a);
        }),
        (this.eventListeners = []));
    }
    function G() {
      var e = this;
      return new Promise(function (t) {
        return e.ready
          ? setTimeout(t, 0)
          : Y.call(e, e.elements.container, "ready", t);
      }).then(function () {});
    }
    function Z(e, t) {
      return t.split(".").reduce(function (e, t) {
        return e && e[t];
      }, e);
    }
    function ee() {
      for (
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length,
          i = new Array(t > 1 ? t - 1 : 0),
          a = 1;
        a < t;
        a++
      )
        i[a - 1] = arguments[a];
      if (!i.length) return e;
      var s = i.shift();
      return L(s)
        ? (Object.keys(s).forEach(function (t) {
            L(s[t])
              ? (Object.keys(e).includes(t) || Object.assign(e, n({}, t, {})),
                ee(e[t], s[t]))
              : Object.assign(e, n({}, t, s[t]));
          }),
          ee.apply(void 0, [e].concat(i)))
        : e;
    }
    function te(e, t) {
      var i = e.length ? e : [e];
      Array.from(i)
        .reverse()
        .forEach(function (e, i) {
          var n = i > 0 ? t.cloneNode(!0) : t,
            a = e.parentNode,
            s = e.nextSibling;
          n.appendChild(e), s ? a.insertBefore(n, s) : a.appendChild(n);
        });
    }
    function ie(e, t) {
      F(e) &&
        !W(t) &&
        Object.entries(t)
          .filter(function (e) {
            var t = a(e, 2)[1];
            return !I(t);
          })
          .forEach(function (t) {
            var i = a(t, 2),
              n = i[0],
              s = i[1];
            return e.setAttribute(n, s);
          });
    }
    function ne(e, t, i) {
      var n = document.createElement(e);
      return L(t) && ie(n, t), O(i) && (n.innerText = i), n;
    }
    function ae(e, t, i, n) {
      F(t) && t.appendChild(ne(e, i, n));
    }
    function se(e) {
      j(e) || D(e)
        ? Array.from(e).forEach(se)
        : F(e) && F(e.parentNode) && e.parentNode.removeChild(e);
    }
    function oe(e) {
      if (F(e))
        for (var t = e.childNodes.length; t > 0; )
          e.removeChild(e.lastChild), (t -= 1);
    }
    function re(e, t) {
      return F(t) && F(t.parentNode) && F(e)
        ? (t.parentNode.replaceChild(e, t), e)
        : null;
    }
    function le(e, t) {
      if (!O(e) || W(e)) return {};
      var i = {},
        n = ee({}, t);
      return (
        e.split(",").forEach(function (e) {
          var t = e.trim(),
            s = t.replace(".", ""),
            o = t.replace(/[[\]]/g, "").split("="),
            r = a(o, 1)[0],
            l = o.length > 1 ? o[1].replace(/["']/g, "") : "";
          switch (t.charAt(0)) {
            case ".":
              O(n.class)
                ? (i.class = "".concat(n.class, " ").concat(s))
                : (i.class = s);
              break;
            case "#":
              i.id = t.replace("#", "");
              break;
            case "[":
              i[r] = l;
          }
        }),
        ee(n, i)
      );
    }
    function ce(e, t) {
      if (F(e)) {
        var i = t;
        q(i) || (i = !e.hidden),
          i ? e.setAttribute("hidden", "") : e.removeAttribute("hidden");
      }
    }
    function ue(e, t, i) {
      if (j(e))
        return Array.from(e).map(function (e) {
          return ue(e, t, i);
        });
      if (F(e)) {
        var n = "toggle";
        return (
          void 0 !== i && (n = i ? "add" : "remove"),
          e.classList[n](t),
          e.classList.contains(t)
        );
      }
      return !1;
    }
    function de(e, t) {
      return F(e) && e.classList.contains(t);
    }
    function he(e, t) {
      return function () {
        return Array.from(document.querySelectorAll(t)).includes(this);
      }.call(e, t);
    }
    function pe(e) {
      return this.elements.container.querySelectorAll(e);
    }
    function me(e) {
      return this.elements.container.querySelector(e);
    }
    function fe() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (F(e)) {
        var i = pe.call(
            this,
            "button:not(:disabled), input:not(:disabled), [tabindex]"
          ),
          n = i[0],
          a = i[i.length - 1],
          s = function (e) {
            if ("Tab" === e.key && 9 === e.keyCode) {
              var t = document.activeElement;
              t !== a || e.shiftKey
                ? t === n && e.shiftKey && (a.focus(), e.preventDefault())
                : (n.focus(), e.preventDefault());
            }
          };
        K.call(this, this.elements.container, "keydown", s, t, !1);
      }
    }
    function ge() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      F(e) &&
        (e.focus({ preventScroll: !0 }),
        t && ue(e, this.config.classNames.tabFocus));
    }
    var ye,
      ve,
      be,
      ke =
        ((ye = document.createElement("span")),
        (ve = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        }),
        (be = Object.keys(ve).find(function (e) {
          return void 0 !== ye.style[e];
        })),
        !!O(be) && ve[be]);
    function we(e) {
      setTimeout(function () {
        try {
          ce(e, !0), e.offsetHeight, ce(e, !1);
        } catch (e) {}
      }, 0);
    }
    var Te,
      Ce = {
        isIE:
          /* @cc_on!@ */
          !!document.documentMode,
        isEdge: window.navigator.userAgent.includes("Edge"),
        isWebkit:
          "WebkitAppearance" in document.documentElement.style &&
          !/Edge/.test(navigator.userAgent),
        isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
        isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform),
      },
      Ae = {
        "audio/ogg": "vorbis",
        "audio/wav": "1",
        "video/webm": "vp8, vorbis",
        "video/mp4": "avc1.42E01E, mp4a.40.2",
        "video/ogg": "theora",
      },
      Ee = {
        audio: "canPlayType" in document.createElement("audio"),
        video: "canPlayType" in document.createElement("video"),
        check: function (e, t, i) {
          var n = Ce.isIPhone && i && Ee.playsinline,
            a = Ee[e] || "html5" !== t;
          return {
            api: a,
            ui: a && Ee.rangeInput && ("video" !== e || !Ce.isIPhone || n),
          };
        },
        pip: !(
          Ce.isIPhone ||
          (!H(ne("video").webkitSetPresentationMode) &&
            (!document.pictureInPictureEnabled ||
              ne("video").disablePictureInPicture))
        ),
        airplay: H(window.WebKitPlaybackTargetAvailabilityEvent),
        playsinline: "playsInline" in document.createElement("video"),
        mime: function (e) {
          if (W(e)) return !1;
          var t = a(e.split("/"), 1)[0],
            i = e;
          if (!this.isHTML5 || t !== this.type) return !1;
          Object.keys(Ae).includes(i) && (i += '; codecs="'.concat(Ae[e], '"'));
          try {
            return Boolean(i && this.media.canPlayType(i).replace(/no/, ""));
          } catch (e) {
            return !1;
          }
        },
        textTracks: "textTracks" in document.createElement("video"),
        rangeInput:
          ((Te = document.createElement("input")),
          (Te.type = "range"),
          "range" === Te.type),
        touch: "ontouchstart" in document.documentElement,
        transitions: !1 !== ke,
        reducedMotion:
          "matchMedia" in window &&
          window.matchMedia("(prefers-reduced-motion)").matches,
      };
    function Se(e) {
      return (
        !!(D(e) || (O(e) && e.includes(":"))) &&
        (D(e) ? e : e.split(":")).map(Number).every(_)
      );
    }
    function Pe(e) {
      if (!D(e) || !e.every(_)) return null;
      var t = a(e, 2),
        i = t[0],
        n = t[1],
        s = (function e(t, i) {
          return 0 === i ? t : e(i, t % i);
        })(i, n);
      return [i / s, n / s];
    }
    function Me(e) {
      var t = function (e) {
          return Se(e) ? e.split(":").map(Number) : null;
        },
        i = t(e);
      if (
        (null === i && (i = t(this.config.ratio)),
        null === i &&
          !W(this.embed) &&
          D(this.embed.ratio) &&
          (i = this.embed.ratio),
        null === i && this.isHTML5)
      ) {
        var n = this.media;
        i = Pe([n.videoWidth, n.videoHeight]);
      }
      return i;
    }
    function Ne(e) {
      if (!this.isVideo) return {};
      var t = Me.call(this, e),
        i = a(D(t) ? t : [0, 0], 2),
        n = (100 / i[0]) * i[1];
      if (
        ((this.elements.wrapper.style.paddingBottom = "".concat(n, "%")),
        this.isVimeo && this.supported.ui)
      ) {
        var s = (240 - n) / 4.8;
        this.media.style.transform = "translateY(-".concat(s, "%)");
      } else this.isHTML5 && this.elements.wrapper.classList.toggle(this.config.classNames.videoFixedRatio, null !== t);
      return { padding: n, ratio: t };
    }
    var xe = {
      getSources: function () {
        var e = this;
        return this.isHTML5
          ? Array.from(this.media.querySelectorAll("source")).filter(function (
              t
            ) {
              var i = t.getAttribute("type");
              return !!W(i) || Ee.mime.call(e, i);
            })
          : [];
      },
      getQualityOptions: function () {
        return xe.getSources
          .call(this)
          .map(function (e) {
            return Number(e.getAttribute("size"));
          })
          .filter(Boolean);
      },
      extend: function () {
        if (this.isHTML5) {
          var e = this;
          Ne.call(e),
            Object.defineProperty(e.media, "quality", {
              get: function () {
                var t = xe.getSources.call(e).find(function (t) {
                  return t.getAttribute("src") === e.source;
                });
                return t && Number(t.getAttribute("size"));
              },
              set: function (t) {
                var i = xe.getSources.call(e).find(function (e) {
                  return Number(e.getAttribute("size")) === t;
                });
                if (i) {
                  var n = e.media,
                    a = n.currentTime,
                    s = n.paused,
                    o = n.preload,
                    r = n.readyState;
                  (e.media.src = i.getAttribute("src")),
                    ("none" !== o || r) &&
                      (e.once("loadedmetadata", function () {
                        (e.currentTime = a), s || e.play();
                      }),
                      e.media.load()),
                    J.call(e, e.media, "qualitychange", !1, { quality: t });
                }
              },
            });
        }
      },
      cancelRequests: function () {
        this.isHTML5 &&
          (se(xe.getSources.call(this)),
          this.media.setAttribute("src", this.config.blankVideo),
          this.media.load(),
          this.debug.log("Cancelled network requests"));
      },
    };
    function Ie(e) {
      return D(e)
        ? e.filter(function (t, i) {
            return e.indexOf(t) === i;
          })
        : e;
    }
    function Le(e) {
      for (
        var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1;
        n < t;
        n++
      )
        i[n - 1] = arguments[n];
      return W(e)
        ? e
        : e.toString().replace(/{(\d+)}/g, function (e, t) {
            return i[t].toString();
          });
    }
    function _e() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return e.replace(
        new RegExp(
          t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),
          "g"
        ),
        i.toString()
      );
    }
    function Oe() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return e.toString().replace(/\w\S*/g, function (e) {
        return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
      });
    }
    function qe() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = e.toString();
      return (
        (t = _e(t, "-", " ")), (t = _e(t, "_", " ")), _e((t = Oe(t)), " ", "")
      );
    }
    function He(e) {
      var t = document.createElement("div");
      return t.appendChild(e), t.innerHTML;
    }
    var De = {
        pip: "PIP",
        airplay: "AirPlay",
        html5: "HTML5",
        vimeo: "Vimeo",
        youtube: "YouTube",
      },
      je = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (W(e) || W(t)) return "";
        var i = Z(t.i18n, e);
        if (W(i)) return Object.keys(De).includes(e) ? De[e] : "";
        var n = { "{seektime}": t.seekTime, "{title}": t.title };
        return (
          Object.entries(n).forEach(function (e) {
            var t = a(e, 2),
              n = t[0],
              s = t[1];
            i = _e(i, n, s);
          }),
          i
        );
      },
      Fe = (function () {
        function t(i) {
          e(this, t),
            (this.enabled = i.config.storage.enabled),
            (this.key = i.config.storage.key);
        }
        return (
          i(
            t,
            [
              {
                key: "get",
                value: function (e) {
                  if (!t.supported || !this.enabled) return null;
                  var i = window.localStorage.getItem(this.key);
                  if (W(i)) return null;
                  var n = JSON.parse(i);
                  return O(e) && e.length ? n[e] : n;
                },
              },
              {
                key: "set",
                value: function (e) {
                  if (t.supported && this.enabled && L(e)) {
                    var i = this.get();
                    W(i) && (i = {}),
                      ee(i, e),
                      window.localStorage.setItem(this.key, JSON.stringify(i));
                  }
                },
              },
            ],
            [
              {
                key: "supported",
                get: function () {
                  try {
                    if (!("localStorage" in window)) return !1;
                    return (
                      window.localStorage.setItem("___test", "___test"),
                      window.localStorage.removeItem("___test"),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                },
              },
            ]
          ),
          t
        );
      })();
    function Re(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
      return new Promise(function (i, n) {
        try {
          var a = new XMLHttpRequest();
          if (!("withCredentials" in a)) return;
          a.addEventListener("load", function () {
            if ("text" === t)
              try {
                i(JSON.parse(a.responseText));
              } catch (e) {
                i(a.responseText);
              }
            else i(a.response);
          }),
            a.addEventListener("error", function () {
              throw new Error(a.status);
            }),
            a.open("GET", e, !0),
            (a.responseType = t),
            a.send();
        } catch (e) {
          n(e);
        }
      });
    }
    function Ve(e, t) {
      if (O(e)) {
        var i = O(t),
          n = function () {
            return null !== document.getElementById(t);
          },
          a = function (e, t) {
            (e.innerHTML = t),
              (i && n()) ||
                document.body.insertAdjacentElement("afterbegin", e);
          };
        if (!i || !n()) {
          var s = Fe.supported,
            o = document.createElement("div");
          if ((o.setAttribute("hidden", ""), i && o.setAttribute("id", t), s)) {
            var r = window.localStorage.getItem(
              "".concat("cache", "-").concat(t)
            );
            if (null !== r) {
              var l = JSON.parse(r);
              a(o, l.content);
            }
          }
          Re(e)
            .then(function (e) {
              W(e) ||
                (s &&
                  window.localStorage.setItem(
                    "".concat("cache", "-").concat(t),
                    JSON.stringify({ content: e })
                  ),
                a(o, e));
            })
            .catch(function () {});
        }
      }
    }
    var Be = function (e) {
        return Math.trunc((e / 60 / 60) % 60, 10);
      },
      Ue = function (e) {
        return Math.trunc((e / 60) % 60, 10);
      },
      We = function (e) {
        return Math.trunc(e % 60, 10);
      };
    function ze() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!_(e)) return ze(null, t, i);
      var n = function (e) {
          return "0".concat(e).slice(-2);
        },
        a = Be(e),
        s = Ue(e),
        o = We(e);
      return (
        (a = t || a > 0 ? "".concat(a, ":") : ""),
        ""
          .concat(i && e > 0 ? "-" : "")
          .concat(a)
          .concat(n(s), ":")
          .concat(n(o))
      );
    }
    var Ke = {
      getIconUrl: function () {
        var e =
          new URL(this.config.iconUrl, window.location).host !==
            window.location.host ||
          (Ce.isIE && !window.svg4everybody);
        return { url: this.config.iconUrl, cors: e };
      },
      findElements: function () {
        try {
          return (
            (this.elements.controls = me.call(
              this,
              this.config.selectors.controls.wrapper
            )),
            (this.elements.buttons = {
              play: pe.call(this, this.config.selectors.buttons.play),
              pause: me.call(this, this.config.selectors.buttons.pause),
              restart: me.call(this, this.config.selectors.buttons.restart),
              rewind: me.call(this, this.config.selectors.buttons.rewind),
              fastForward: me.call(
                this,
                this.config.selectors.buttons.fastForward
              ),
              mute: me.call(this, this.config.selectors.buttons.mute),
              pip: me.call(this, this.config.selectors.buttons.pip),
              airplay: me.call(this, this.config.selectors.buttons.airplay),
              settings: me.call(this, this.config.selectors.buttons.settings),
              captions: me.call(this, this.config.selectors.buttons.captions),
              fullscreen: me.call(
                this,
                this.config.selectors.buttons.fullscreen
              ),
            }),
            (this.elements.progress = me.call(
              this,
              this.config.selectors.progress
            )),
            (this.elements.inputs = {
              seek: me.call(this, this.config.selectors.inputs.seek),
              volume: me.call(this, this.config.selectors.inputs.volume),
            }),
            (this.elements.display = {
              buffer: me.call(this, this.config.selectors.display.buffer),
              currentTime: me.call(
                this,
                this.config.selectors.display.currentTime
              ),
              duration: me.call(this, this.config.selectors.display.duration),
            }),
            F(this.elements.progress) &&
              (this.elements.display.seekTooltip =
                this.elements.progress.querySelector(
                  ".".concat(this.config.classNames.tooltip)
                )),
            !0
          );
        } catch (e) {
          return (
            this.debug.warn(
              "It looks like there is a problem with your custom controls HTML",
              e
            ),
            this.toggleNativeControls(!0),
            !1
          );
        }
      },
      createIcon: function (e, t) {
        var i = Ke.getIconUrl.call(this),
          n = ""
            .concat(i.cors ? "" : i.url, "#")
            .concat(this.config.iconPrefix),
          a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        ie(a, ee(t, { role: "presentation", focusable: "false" }));
        var s = document.createElementNS("http://www.w3.org/2000/svg", "use"),
          o = "".concat(n, "-").concat(e);
        return (
          "href" in s &&
            s.setAttributeNS("http://www.w3.org/1999/xlink", "href", o),
          s.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o),
          a.appendChild(s),
          a
        );
      },
      createLabel: function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = je(e, this.config),
          n = Object.assign({}, t, {
            class: [t.class, this.config.classNames.hidden]
              .filter(Boolean)
              .join(" "),
          });
        return ne("span", n, i);
      },
      createBadge: function (e) {
        if (W(e)) return null;
        var t = ne("span", { class: this.config.classNames.menu.value });
        return (
          t.appendChild(
            ne("span", { class: this.config.classNames.menu.badge }, e)
          ),
          t
        );
      },
      createButton: function (e, t) {
        var i = this,
          n = ee({}, t),
          a = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t = e.toString();
            return (t = qe(t)).charAt(0).toLowerCase() + t.slice(1);
          })(e),
          s = {
            element: "button",
            toggle: !1,
            label: null,
            icon: null,
            labelPressed: null,
            iconPressed: null,
          };
        switch (
          (["element", "icon", "label"].forEach(function (e) {
            Object.keys(n).includes(e) && ((s[e] = n[e]), delete n[e]);
          }),
          "button" !== s.element ||
            Object.keys(n).includes("type") ||
            (n.type = "button"),
          Object.keys(n).includes("class")
            ? n.class.split(" ").some(function (e) {
                return e === i.config.classNames.control;
              }) ||
              ee(n, {
                class: ""
                  .concat(n.class, " ")
                  .concat(this.config.classNames.control),
              })
            : (n.class = this.config.classNames.control),
          e)
        ) {
          case "play":
            (s.toggle = !0),
              (s.label = "play"),
              (s.labelPressed = "pause"),
              (s.icon = "play"),
              (s.iconPressed = "pause");
            break;
          case "mute":
            (s.toggle = !0),
              (s.label = "mute"),
              (s.labelPressed = "unmute"),
              (s.icon = "volume"),
              (s.iconPressed = "muted");
            break;
          case "captions":
            (s.toggle = !0),
              (s.label = "enableCaptions"),
              (s.labelPressed = "disableCaptions"),
              (s.icon = "captions-off"),
              (s.iconPressed = "captions-on");
            break;
          case "fullscreen":
            (s.toggle = !0),
              (s.label = "enterFullscreen"),
              (s.labelPressed = "exitFullscreen"),
              (s.icon = "enter-fullscreen"),
              (s.iconPressed = "exit-fullscreen");
            break;
          case "play-large":
            (n.class += " ".concat(
              this.config.classNames.control,
              "--overlaid"
            )),
              (a = "play"),
              (s.label = "play"),
              (s.icon = "play");
            break;
          default:
            W(s.label) && (s.label = a), W(s.icon) && (s.icon = e);
        }
        var o = ne(s.element);
        return (
          s.toggle
            ? (o.appendChild(
                Ke.createIcon.call(this, s.iconPressed, {
                  class: "icon--pressed",
                })
              ),
              o.appendChild(
                Ke.createIcon.call(this, s.icon, { class: "icon--not-pressed" })
              ),
              o.appendChild(
                Ke.createLabel.call(this, s.labelPressed, {
                  class: "label--pressed",
                })
              ),
              o.appendChild(
                Ke.createLabel.call(this, s.label, {
                  class: "label--not-pressed",
                })
              ))
            : (o.appendChild(Ke.createIcon.call(this, s.icon)),
              o.appendChild(Ke.createLabel.call(this, s.label))),
          ee(n, le(this.config.selectors.buttons[a], n)),
          ie(o, n),
          "play" === a
            ? (D(this.elements.buttons[a]) || (this.elements.buttons[a] = []),
              this.elements.buttons[a].push(o))
            : (this.elements.buttons[a] = o),
          o
        );
      },
      createRange: function (e, t) {
        var i = ne(
          "input",
          ee(
            le(this.config.selectors.inputs[e]),
            {
              type: "range",
              min: 0,
              max: 100,
              step: 0.01,
              value: 0,
              autocomplete: "off",
              role: "slider",
              "aria-label": je(e, this.config),
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": 0,
            },
            t
          )
        );
        return (
          (this.elements.inputs[e] = i),
          Ke.updateRangeFill.call(this, i),
          T.setup(i),
          i
        );
      },
      createProgress: function (e, t) {
        var i = ne(
          "progress",
          ee(
            le(this.config.selectors.display[e]),
            {
              min: 0,
              max: 100,
              value: 0,
              role: "progressbar",
              "aria-hidden": !0,
            },
            t
          )
        );
        if ("volume" !== e) {
          i.appendChild(ne("span", null, "0"));
          var n = { played: "played", buffer: "buffered" }[e],
            a = n ? je(n, this.config) : "";
          i.innerText = "% ".concat(a.toLowerCase());
        }
        return (this.elements.display[e] = i), i;
      },
      createTime: function (e, t) {
        var i = le(this.config.selectors.display[e], t),
          n = ne(
            "div",
            ee(i, {
              class: ""
                .concat(i.class ? i.class : "", " ")
                .concat(this.config.classNames.display.time, " ")
                .trim(),
              "aria-label": je(e, this.config),
            }),
            "00:00"
          );
        return (this.elements.display[e] = n), n;
      },
      bindMenuItemShortcuts: function (e, t) {
        var i = this;
        Y(
          e,
          "keydown keyup",
          function (n) {
            if (
              [32, 38, 39, 40].includes(n.which) &&
              (n.preventDefault(), n.stopPropagation(), "keydown" !== n.type)
            ) {
              var a,
                s = he(e, '[role="menuitemradio"]');
              if (!s && [32, 39].includes(n.which))
                Ke.showMenuPanel.call(i, t, !0);
              else
                32 !== n.which &&
                  (40 === n.which || (s && 39 === n.which)
                    ? ((a = e.nextElementSibling),
                      F(a) || (a = e.parentNode.firstElementChild))
                    : ((a = e.previousElementSibling),
                      F(a) || (a = e.parentNode.lastElementChild)),
                  ge.call(i, a, !0));
            }
          },
          !1
        ),
          Y(e, "keyup", function (e) {
            13 === e.which && Ke.focusFirstMenuItem.call(i, null, !0);
          });
      },
      createMenuItem: function (e) {
        var t = this,
          i = e.value,
          n = e.list,
          a = e.type,
          s = e.title,
          o = e.badge,
          r = void 0 === o ? null : o,
          l = e.checked,
          c = void 0 !== l && l,
          u = le(this.config.selectors.inputs[a]),
          d = ne(
            "button",
            ee(u, {
              type: "button",
              role: "menuitemradio",
              class: ""
                .concat(this.config.classNames.control, " ")
                .concat(u.class ? u.class : "")
                .trim(),
              "aria-checked": c,
              value: i,
            })
          ),
          h = ne("span");
        (h.innerHTML = s),
          F(r) && h.appendChild(r),
          d.appendChild(h),
          Object.defineProperty(d, "checked", {
            enumerable: !0,
            get: function () {
              return "true" === d.getAttribute("aria-checked");
            },
            set: function (e) {
              e &&
                Array.from(d.parentNode.children)
                  .filter(function (e) {
                    return he(e, '[role="menuitemradio"]');
                  })
                  .forEach(function (e) {
                    return e.setAttribute("aria-checked", "false");
                  }),
                d.setAttribute("aria-checked", e ? "true" : "false");
            },
          }),
          this.listeners.bind(
            d,
            "click keyup",
            function (e) {
              if (!V(e) || 32 === e.which) {
                switch (
                  (e.preventDefault(), e.stopPropagation(), (d.checked = !0), a)
                ) {
                  case "language":
                    t.currentTrack = Number(i);
                    break;
                  case "quality":
                    t.quality = i;
                    break;
                  case "speed":
                    t.speed = parseFloat(i);
                }
                Ke.showMenuPanel.call(t, "home", V(e));
              }
            },
            a,
            !1
          ),
          Ke.bindMenuItemShortcuts.call(this, d, a),
          n.appendChild(d);
      },
      formatTime: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!_(e)) return e;
        var i = Be(this.duration) > 0;
        return ze(e, i, t);
      },
      updateTimeDisplay: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        F(e) && _(t) && (e.innerText = Ke.formatTime(t, i));
      },
      updateVolume: function () {
        this.supported.ui &&
          (F(this.elements.inputs.volume) &&
            Ke.setRange.call(
              this,
              this.elements.inputs.volume,
              this.muted ? 0 : this.volume
            ),
          F(this.elements.buttons.mute) &&
            (this.elements.buttons.mute.pressed =
              this.muted || 0 === this.volume));
      },
      setRange: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        F(e) && ((e.value = t), Ke.updateRangeFill.call(this, e));
      },
      updateProgress: function (e) {
        var t = this;
        if (this.supported.ui && R(e)) {
          var i,
            n,
            a = 0;
          if (e)
            switch (e.type) {
              case "timeupdate":
              case "seeking":
              case "seeked":
                (i = this.currentTime),
                  (n = this.duration),
                  (a =
                    0 === i || 0 === n || Number.isNaN(i) || Number.isNaN(n)
                      ? 0
                      : ((i / n) * 100).toFixed(2)),
                  "timeupdate" === e.type &&
                    Ke.setRange.call(this, this.elements.inputs.seek, a);
                break;
              case "playing":
              case "progress":
                !(function (e, i) {
                  var n = _(i) ? i : 0,
                    a = F(e) ? e : t.elements.display.buffer;
                  if (F(a)) {
                    a.value = n;
                    var s = a.getElementsByTagName("span")[0];
                    F(s) && (s.childNodes[0].nodeValue = n);
                  }
                })(this.elements.display.buffer, 100 * this.buffered);
            }
        }
      },
      updateRangeFill: function (e) {
        var t = R(e) ? e.target : e;
        if (F(t) && "range" === t.getAttribute("type")) {
          if (he(t, this.config.selectors.inputs.seek)) {
            t.setAttribute("aria-valuenow", this.currentTime);
            var i = Ke.formatTime(this.currentTime),
              n = Ke.formatTime(this.duration),
              a = je("seekLabel", this.config);
            t.setAttribute(
              "aria-valuetext",
              a.replace("{currentTime}", i).replace("{duration}", n)
            );
          } else if (he(t, this.config.selectors.inputs.volume)) {
            var s = 100 * t.value;
            t.setAttribute("aria-valuenow", s),
              t.setAttribute("aria-valuetext", "".concat(s.toFixed(1), "%"));
          } else t.setAttribute("aria-valuenow", t.value);
          Ce.isWebkit &&
            t.style.setProperty(
              "--value",
              "".concat((t.value / t.max) * 100, "%")
            );
        }
      },
      updateSeekTooltip: function (e) {
        var t = this;
        if (
          this.config.tooltips.seek &&
          F(this.elements.inputs.seek) &&
          F(this.elements.display.seekTooltip) &&
          0 !== this.duration
        ) {
          var i = 0,
            n = this.elements.progress.getBoundingClientRect(),
            a = "".concat(this.config.classNames.tooltip, "--visible"),
            s = function (e) {
              ue(t.elements.display.seekTooltip, a, e);
            };
          if (this.touch) s(!1);
          else {
            if (R(e)) i = (100 / n.width) * (e.pageX - n.left);
            else {
              if (!de(this.elements.display.seekTooltip, a)) return;
              i = parseFloat(this.elements.display.seekTooltip.style.left, 10);
            }
            i < 0 ? (i = 0) : i > 100 && (i = 100),
              Ke.updateTimeDisplay.call(
                this,
                this.elements.display.seekTooltip,
                (this.duration / 100) * i
              ),
              (this.elements.display.seekTooltip.style.left = "".concat(
                i,
                "%"
              )),
              R(e) &&
                ["mouseenter", "mouseleave"].includes(e.type) &&
                s("mouseenter" === e.type);
          }
        }
      },
      timeUpdate: function (e) {
        var t = !F(this.elements.display.duration) && this.config.invertTime;
        Ke.updateTimeDisplay.call(
          this,
          this.elements.display.currentTime,
          t ? this.duration - this.currentTime : this.currentTime,
          t
        ),
          (e && "timeupdate" === e.type && this.media.seeking) ||
            Ke.updateProgress.call(this, e);
      },
      durationUpdate: function () {
        if (
          this.supported.ui &&
          (this.config.invertTime || !this.currentTime)
        ) {
          if (this.duration >= Math.pow(2, 32))
            return (
              ce(this.elements.display.currentTime, !0),
              void ce(this.elements.progress, !0)
            );
          F(this.elements.inputs.seek) &&
            this.elements.inputs.seek.setAttribute(
              "aria-valuemax",
              this.duration
            );
          var e = F(this.elements.display.duration);
          !e &&
            this.config.displayDuration &&
            this.paused &&
            Ke.updateTimeDisplay.call(
              this,
              this.elements.display.currentTime,
              this.duration
            ),
            e &&
              Ke.updateTimeDisplay.call(
                this,
                this.elements.display.duration,
                this.duration
              ),
            Ke.updateSeekTooltip.call(this);
        }
      },
      toggleMenuButton: function (e, t) {
        ce(this.elements.settings.buttons[e], !t);
      },
      updateSetting: function (e, t, i) {
        var n = this.elements.settings.panels[e],
          a = null,
          s = t;
        if ("captions" === e) a = this.currentTrack;
        else {
          if (
            ((a = W(i) ? this[e] : i),
            W(a) && (a = this.config[e].default),
            !W(this.options[e]) && !this.options[e].includes(a))
          )
            return void this.debug.warn(
              "Unsupported value of '".concat(a, "' for ").concat(e)
            );
          if (!this.config[e].options.includes(a))
            return void this.debug.warn(
              "Disabled value of '".concat(a, "' for ").concat(e)
            );
        }
        if ((F(s) || (s = n && n.querySelector('[role="menu"]')), F(s))) {
          this.elements.settings.buttons[e].querySelector(
            ".".concat(this.config.classNames.menu.value)
          ).innerHTML = Ke.getLabel.call(this, e, a);
          var o = s && s.querySelector('[value="'.concat(a, '"]'));
          F(o) && (o.checked = !0);
        }
      },
      getLabel: function (e, t) {
        switch (e) {
          case "speed":
            return 1 === t
              ? je("normal", this.config)
              : "".concat(t, "&times;");
          case "quality":
            if (_(t)) {
              var i = je("qualityLabel.".concat(t), this.config);
              return i.length ? i : "".concat(t, "p");
            }
            return Oe(t);
          case "captions":
            return Xe.getLabel.call(this);
          default:
            return null;
        }
      },
      setQualityMenu: function (e) {
        var t = this;
        if (F(this.elements.settings.panels.quality)) {
          var i =
            this.elements.settings.panels.quality.querySelector(
              '[role="menu"]'
            );
          D(e) &&
            (this.options.quality = Ie(e).filter(function (e) {
              return t.config.quality.options.includes(e);
            }));
          var n = !W(this.options.quality) && this.options.quality.length > 1;
          if (
            (Ke.toggleMenuButton.call(this, "quality", n),
            oe(i),
            Ke.checkMenu.call(this),
            n)
          ) {
            var a = function (e) {
              var i = je("qualityBadge.".concat(e), t.config);
              return i.length ? Ke.createBadge.call(t, i) : null;
            };
            this.options.quality
              .sort(function (e, i) {
                var n = t.config.quality.options;
                return n.indexOf(e) > n.indexOf(i) ? 1 : -1;
              })
              .forEach(function (e) {
                Ke.createMenuItem.call(t, {
                  value: e,
                  list: i,
                  type: "quality",
                  title: Ke.getLabel.call(t, "quality", e),
                  badge: a(e),
                });
              }),
              Ke.updateSetting.call(this, "quality", i);
          }
        }
      },
      setCaptionsMenu: function () {
        var e = this;
        if (F(this.elements.settings.panels.captions)) {
          var t =
              this.elements.settings.panels.captions.querySelector(
                '[role="menu"]'
              ),
            i = Xe.getTracks.call(this),
            n = Boolean(i.length);
          if (
            (Ke.toggleMenuButton.call(this, "captions", n),
            oe(t),
            Ke.checkMenu.call(this),
            n)
          ) {
            var a = i.map(function (i, n) {
              return {
                value: n,
                checked: e.captions.toggled && e.currentTrack === n,
                title: Xe.getLabel.call(e, i),
                badge:
                  i.language &&
                  Ke.createBadge.call(e, i.language.toUpperCase()),
                list: t,
                type: "language",
              };
            });
            a.unshift({
              value: -1,
              checked: !this.captions.toggled,
              title: je("disabled", this.config),
              list: t,
              type: "language",
            }),
              a.forEach(Ke.createMenuItem.bind(this)),
              Ke.updateSetting.call(this, "captions", t);
          }
        }
      },
      setSpeedMenu: function (e) {
        var t = this;
        if (F(this.elements.settings.panels.speed)) {
          var i =
            this.elements.settings.panels.speed.querySelector('[role="menu"]');
          D(e)
            ? (this.options.speed = e)
            : (this.isHTML5 || this.isVimeo) &&
              (this.options.speed = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]),
            (this.options.speed = this.options.speed.filter(function (e) {
              return t.config.speed.options.includes(e);
            }));
          var n = !W(this.options.speed) && this.options.speed.length > 1;
          Ke.toggleMenuButton.call(this, "speed", n),
            oe(i),
            Ke.checkMenu.call(this),
            n &&
              (this.options.speed.forEach(function (e) {
                Ke.createMenuItem.call(t, {
                  value: e,
                  list: i,
                  type: "speed",
                  title: Ke.getLabel.call(t, "speed", e),
                });
              }),
              Ke.updateSetting.call(this, "speed", i));
        }
      },
      checkMenu: function () {
        var e = this.elements.settings.buttons,
          t =
            !W(e) &&
            Object.values(e).some(function (e) {
              return !e.hidden;
            });
        ce(this.elements.settings.menu, !t);
      },
      focusFirstMenuItem: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this.elements.settings.popup.hidden) {
          var i = e;
          F(i) ||
            (i = Object.values(this.elements.settings.panels).find(function (
              e
            ) {
              return !e.hidden;
            }));
          var n = i.querySelector('[role^="menuitem"]');
          ge.call(this, n, t);
        }
      },
      toggleMenu: function (e) {
        var t = this.elements.settings.popup,
          i = this.elements.buttons.settings;
        if (F(t) && F(i)) {
          var n = t.hidden,
            a = n;
          if (q(e)) a = e;
          else if (V(e) && 27 === e.which) a = !1;
          else if (R(e)) {
            var s = H(e.composedPath) ? e.composedPath()[0] : e.target,
              o = t.contains(s);
            if (o || (!o && e.target !== i && a)) return;
          }
          i.setAttribute("aria-expanded", a),
            ce(t, !a),
            ue(this.elements.container, this.config.classNames.menu.open, a),
            a && V(e)
              ? Ke.focusFirstMenuItem.call(this, null, !0)
              : a || n || ge.call(this, i, V(e));
        }
      },
      getMenuSize: function (e) {
        var t = e.cloneNode(!0);
        (t.style.position = "absolute"),
          (t.style.opacity = 0),
          t.removeAttribute("hidden"),
          e.parentNode.appendChild(t);
        var i = t.scrollWidth,
          n = t.scrollHeight;
        return se(t), { width: i, height: n };
      },
      showMenuPanel: function () {
        var e = this,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = this.elements.container.querySelector(
            "#plyr-settings-".concat(this.id, "-").concat(t)
          );
        if (F(n)) {
          var a = n.parentNode,
            s = Array.from(a.children).find(function (e) {
              return !e.hidden;
            });
          if (Ee.transitions && !Ee.reducedMotion) {
            (a.style.width = "".concat(s.scrollWidth, "px")),
              (a.style.height = "".concat(s.scrollHeight, "px"));
            var o = Ke.getMenuSize.call(this, n),
              r = function t(i) {
                i.target === a &&
                  ["width", "height"].includes(i.propertyName) &&
                  ((a.style.width = ""),
                  (a.style.height = ""),
                  Q.call(e, a, ke, t));
              };
            Y.call(this, a, ke, r),
              (a.style.width = "".concat(o.width, "px")),
              (a.style.height = "".concat(o.height, "px"));
          }
          ce(s, !0), ce(n, !1), Ke.focusFirstMenuItem.call(this, n, i);
        }
      },
      setDownloadUrl: function () {
        var e = this.elements.buttons.download;
        F(e) && e.setAttribute("href", this.download);
      },
      create: function (e) {
        var t = this,
          i = Ke.bindMenuItemShortcuts,
          n = Ke.createButton,
          a = Ke.createProgress,
          s = Ke.createRange,
          o = Ke.createTime,
          r = Ke.setQualityMenu,
          l = Ke.setSpeedMenu,
          c = Ke.showMenuPanel;
        (this.elements.controls = null),
          this.config.controls.includes("play-large") &&
            this.elements.container.appendChild(n.call(this, "play-large"));
        var u = ne("div", le(this.config.selectors.controls.wrapper));
        this.elements.controls = u;
        var d = { class: "plyr__controls__item" };
        return (
          Ie(this.config.controls).forEach(function (r) {
            if (
              ("restart" === r && u.appendChild(n.call(t, "restart", d)),
              "rewind" === r && u.appendChild(n.call(t, "rewind", d)),
              "play" === r && u.appendChild(n.call(t, "play", d)),
              "fast-forward" === r &&
                u.appendChild(n.call(t, "fast-forward", d)),
              "progress" === r)
            ) {
              var l = ne("div", {
                  class: "".concat(d.class, " plyr__progress__container"),
                }),
                h = ne("div", le(t.config.selectors.progress));
              if (
                (h.appendChild(
                  s.call(t, "seek", { id: "plyr-seek-".concat(e.id) })
                ),
                h.appendChild(a.call(t, "buffer")),
                t.config.tooltips.seek)
              ) {
                var p = ne(
                  "span",
                  { class: t.config.classNames.tooltip },
                  "00:00"
                );
                h.appendChild(p), (t.elements.display.seekTooltip = p);
              }
              (t.elements.progress = h),
                l.appendChild(t.elements.progress),
                u.appendChild(l);
            }
            if (
              ("current-time" === r &&
                u.appendChild(o.call(t, "currentTime", d)),
              "duration" === r && u.appendChild(o.call(t, "duration", d)),
              "mute" === r || "volume" === r)
            ) {
              var m = t.elements.volume;
              if (
                ((F(m) && u.contains(m)) ||
                  ((m = ne(
                    "div",
                    ee({}, d, {
                      class: "".concat(d.class, " plyr__volume").trim(),
                    })
                  )),
                  (t.elements.volume = m),
                  u.appendChild(m)),
                "mute" === r && m.appendChild(n.call(t, "mute")),
                "volume" === r)
              ) {
                var f = { max: 1, step: 0.05, value: t.config.volume };
                m.appendChild(
                  s.call(
                    t,
                    "volume",
                    ee(f, { id: "plyr-volume-".concat(e.id) })
                  )
                );
              }
            }
            if (
              ("captions" === r && u.appendChild(n.call(t, "captions", d)),
              "settings" === r && !W(t.config.settings))
            ) {
              var g = ne(
                "div",
                ee({}, d, {
                  class: "".concat(d.class, " plyr__menu").trim(),
                  hidden: "",
                })
              );
              g.appendChild(
                n.call(t, "settings", {
                  "aria-haspopup": !0,
                  "aria-controls": "plyr-settings-".concat(e.id),
                  "aria-expanded": !1,
                })
              );
              var y = ne("div", {
                  class: "plyr__menu__container",
                  id: "plyr-settings-".concat(e.id),
                  hidden: "",
                }),
                v = ne("div"),
                b = ne("div", { id: "plyr-settings-".concat(e.id, "-home") }),
                k = ne("div", { role: "menu" });
              b.appendChild(k),
                v.appendChild(b),
                (t.elements.settings.panels.home = b),
                t.config.settings.forEach(function (n) {
                  var a = ne(
                    "button",
                    ee(le(t.config.selectors.buttons.settings), {
                      type: "button",
                      class: ""
                        .concat(t.config.classNames.control, " ")
                        .concat(t.config.classNames.control, "--forward"),
                      role: "menuitem",
                      "aria-haspopup": !0,
                      hidden: "",
                    })
                  );
                  i.call(t, a, n),
                    Y(a, "click", function () {
                      c.call(t, n, !1);
                    });
                  var s = ne("span", null, je(n, t.config)),
                    o = ne("span", { class: t.config.classNames.menu.value });
                  (o.innerHTML = e[n]),
                    s.appendChild(o),
                    a.appendChild(s),
                    k.appendChild(a);
                  var r = ne("div", {
                      id: "plyr-settings-".concat(e.id, "-").concat(n),
                      hidden: "",
                    }),
                    l = ne("button", {
                      type: "button",
                      class: ""
                        .concat(t.config.classNames.control, " ")
                        .concat(t.config.classNames.control, "--back"),
                    });
                  l.appendChild(
                    ne("span", { "aria-hidden": !0 }, je(n, t.config))
                  ),
                    l.appendChild(
                      ne(
                        "span",
                        { class: t.config.classNames.hidden },
                        je("menuBack", t.config)
                      )
                    ),
                    Y(
                      r,
                      "keydown",
                      function (e) {
                        37 === e.which &&
                          (e.preventDefault(),
                          e.stopPropagation(),
                          c.call(t, "home", !0));
                      },
                      !1
                    ),
                    Y(l, "click", function () {
                      c.call(t, "home", !1);
                    }),
                    r.appendChild(l),
                    r.appendChild(ne("div", { role: "menu" })),
                    v.appendChild(r),
                    (t.elements.settings.buttons[n] = a),
                    (t.elements.settings.panels[n] = r);
                }),
                y.appendChild(v),
                g.appendChild(y),
                u.appendChild(g),
                (t.elements.settings.popup = y),
                (t.elements.settings.menu = g);
            }
            if (
              ("pip" === r && Ee.pip && u.appendChild(n.call(t, "pip", d)),
              "airplay" === r &&
                Ee.airplay &&
                u.appendChild(n.call(t, "airplay", d)),
              "download" === r)
            ) {
              var w = ee({}, d, {
                  element: "a",
                  href: t.download,
                  target: "_blank",
                }),
                T = t.config.urls.download;
              !U(T) &&
                t.isEmbed &&
                ee(w, { icon: "logo-".concat(t.provider), label: t.provider }),
                u.appendChild(n.call(t, "download", w));
            }
            "fullscreen" === r && u.appendChild(n.call(t, "fullscreen", d));
          }),
          this.isHTML5 && r.call(this, xe.getQualityOptions.call(this)),
          l.call(this),
          u
        );
      },
      inject: function () {
        var e = this;
        if (this.config.loadSprite) {
          var t = Ke.getIconUrl.call(this);
          t.cors && Ve(t.url, "sprite-plyr");
        }
        this.id = Math.floor(1e4 * Math.random());
        var i = null;
        this.elements.controls = null;
        var n = {
            id: this.id,
            seektime: this.config.seekTime,
            title: this.config.title,
          },
          s = !0;
        H(this.config.controls) &&
          (this.config.controls = this.config.controls.call(this, n)),
          this.config.controls || (this.config.controls = []),
          F(this.config.controls) || O(this.config.controls)
            ? (i = this.config.controls)
            : ((i = Ke.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: Xe.getLabel.call(this),
              })),
              (s = !1));
        var o,
          r = function (e) {
            var t = e;
            return (
              Object.entries(n).forEach(function (e) {
                var i = a(e, 2),
                  n = i[0],
                  s = i[1];
                t = _e(t, "{".concat(n, "}"), s);
              }),
              t
            );
          };
        if (
          (s &&
            (O(this.config.controls)
              ? (i = r(i))
              : F(i) && (i.innerHTML = r(i.innerHTML))),
          O(this.config.selectors.controls.container) &&
            (o = document.querySelector(
              this.config.selectors.controls.container
            )),
          F(o) || (o = this.elements.container),
          o[F(i) ? "insertAdjacentElement" : "insertAdjacentHTML"](
            "afterbegin",
            i
          ),
          F(this.elements.controls) || Ke.findElements.call(this),
          !W(this.elements.buttons))
        ) {
          var l = function (t) {
            var i = e.config.classNames.controlPressed;
            Object.defineProperty(t, "pressed", {
              enumerable: !0,
              get: function () {
                return de(t, i);
              },
              set: function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                ue(t, i, e);
              },
            });
          };
          Object.values(this.elements.buttons)
            .filter(Boolean)
            .forEach(function (e) {
              D(e) || j(e) ? Array.from(e).filter(Boolean).forEach(l) : l(e);
            });
        }
        if ((Ce.isEdge && we(o), this.config.tooltips.controls)) {
          var c = this.config,
            u = c.classNames,
            d = c.selectors,
            h = ""
              .concat(d.controls.wrapper, " ")
              .concat(d.labels, " .")
              .concat(u.hidden),
            p = pe.call(this, h);
          Array.from(p).forEach(function (t) {
            ue(t, e.config.classNames.hidden, !1),
              ue(t, e.config.classNames.tooltip, !0);
          });
        }
      },
    };
    function Ye(e) {
      var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        i = e;
      if (t) {
        var n = document.createElement("a");
        (n.href = i), (i = n.href);
      }
      try {
        return new URL(i);
      } catch (e) {
        return null;
      }
    }
    function Qe(e) {
      var t = new URLSearchParams();
      return (
        L(e) &&
          Object.entries(e).forEach(function (e) {
            var i = a(e, 2),
              n = i[0],
              s = i[1];
            t.set(n, s);
          }),
        t
      );
    }
    var Xe = {
        setup: function () {
          if (this.supported.ui)
            if (
              !this.isVideo ||
              this.isYouTube ||
              (this.isHTML5 && !Ee.textTracks)
            )
              D(this.config.controls) &&
                this.config.controls.includes("settings") &&
                this.config.settings.includes("captions") &&
                Ke.setCaptionsMenu.call(this);
            else {
              if (
                (F(this.elements.captions) ||
                  ((this.elements.captions = ne(
                    "div",
                    le(this.config.selectors.captions)
                  )),
                  (function (e, t) {
                    F(e) && F(t) && t.parentNode.insertBefore(e, t.nextSibling);
                  })(this.elements.captions, this.elements.wrapper)),
                Ce.isIE && window.URL)
              ) {
                var e = this.media.querySelectorAll("track");
                Array.from(e).forEach(function (e) {
                  var t = e.getAttribute("src"),
                    i = Ye(t);
                  null !== i &&
                    i.hostname !== window.location.href.hostname &&
                    ["http:", "https:"].includes(i.protocol) &&
                    Re(t, "blob")
                      .then(function (t) {
                        e.setAttribute("src", window.URL.createObjectURL(t));
                      })
                      .catch(function () {
                        se(e);
                      });
                });
              }
              var t = Ie(
                  (
                    navigator.languages || [
                      navigator.language || navigator.userLanguage || "en",
                    ]
                  ).map(function (e) {
                    return e.split("-")[0];
                  })
                ),
                i = (
                  this.storage.get("language") ||
                  this.config.captions.language ||
                  "auto"
                ).toLowerCase();
              if ("auto" === i) i = a(t, 1)[0];
              var n = this.storage.get("captions");
              if (
                (q(n) || (n = this.config.captions.active),
                Object.assign(this.captions, {
                  toggled: !1,
                  active: n,
                  language: i,
                  languages: t,
                }),
                this.isHTML5)
              ) {
                var s = this.config.captions.update
                  ? "addtrack removetrack"
                  : "removetrack";
                Y.call(this, this.media.textTracks, s, Xe.update.bind(this));
              }
              setTimeout(Xe.update.bind(this), 0);
            }
        },
        update: function () {
          var e = this,
            t = Xe.getTracks.call(this, !0),
            i = this.captions,
            n = i.active,
            a = i.language,
            s = i.meta,
            o = i.currentTrackNode,
            r = Boolean(
              t.find(function (e) {
                return e.language === a;
              })
            );
          this.isHTML5 &&
            this.isVideo &&
            t
              .filter(function (e) {
                return !s.get(e);
              })
              .forEach(function (t) {
                e.debug.log("Track added", t),
                  s.set(t, { default: "showing" === t.mode }),
                  (t.mode = "hidden"),
                  Y.call(e, t, "cuechange", function () {
                    return Xe.updateCues.call(e);
                  });
              }),
            ((r && this.language !== a) || !t.includes(o)) &&
              (Xe.setLanguage.call(this, a), Xe.toggle.call(this, n && r)),
            ue(
              this.elements.container,
              this.config.classNames.captions.enabled,
              !W(t)
            ),
            (this.config.controls || []).includes("settings") &&
              this.config.settings.includes("captions") &&
              Ke.setCaptionsMenu.call(this);
        },
        toggle: function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (this.supported.ui) {
            var i = this.captions.toggled,
              n = this.config.classNames.captions.active,
              a = I(e) ? !i : e;
            if (a !== i) {
              if (
                (t ||
                  ((this.captions.active = a),
                  this.storage.set({ captions: a })),
                !this.language && a && !t)
              ) {
                var o = Xe.getTracks.call(this),
                  r = Xe.findTrack.call(
                    this,
                    [this.captions.language].concat(s(this.captions.languages)),
                    !0
                  );
                return (
                  (this.captions.language = r.language),
                  void Xe.set.call(this, o.indexOf(r))
                );
              }
              this.elements.buttons.captions &&
                (this.elements.buttons.captions.pressed = a),
                ue(this.elements.container, n, a),
                (this.captions.toggled = a),
                Ke.updateSetting.call(this, "captions"),
                J.call(
                  this,
                  this.media,
                  a ? "captionsenabled" : "captionsdisabled"
                );
            }
          }
        },
        set: function (e) {
          var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            i = Xe.getTracks.call(this);
          if (-1 !== e)
            if (_(e))
              if (e in i) {
                if (this.captions.currentTrack !== e) {
                  this.captions.currentTrack = e;
                  var n = i[e],
                    a = n || {},
                    s = a.language;
                  (this.captions.currentTrackNode = n),
                    Ke.updateSetting.call(this, "captions"),
                    t ||
                      ((this.captions.language = s),
                      this.storage.set({ language: s })),
                    this.isVimeo && this.embed.enableTextTrack(s),
                    J.call(this, this.media, "languagechange");
                }
                Xe.toggle.call(this, !0, t),
                  this.isHTML5 && this.isVideo && Xe.updateCues.call(this);
              } else this.debug.warn("Track not found", e);
            else this.debug.warn("Invalid caption argument", e);
          else Xe.toggle.call(this, !1, t);
        },
        setLanguage: function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (O(e)) {
            var i = e.toLowerCase();
            this.captions.language = i;
            var n = Xe.getTracks.call(this),
              a = Xe.findTrack.call(this, [i]);
            Xe.set.call(this, n.indexOf(a), t);
          } else this.debug.warn("Invalid language argument", e);
        },
        getTracks: function () {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            i = Array.from((this.media || {}).textTracks || []);
          return i
            .filter(function (i) {
              return !e.isHTML5 || t || e.captions.meta.has(i);
            })
            .filter(function (e) {
              return ["captions", "subtitles"].includes(e.kind);
            });
        },
        findTrack: function (e) {
          var t,
            i = this,
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = Xe.getTracks.call(this),
            s = function (e) {
              return Number((i.captions.meta.get(e) || {}).default);
            },
            o = Array.from(a).sort(function (e, t) {
              return s(t) - s(e);
            });
          return (
            e.every(function (e) {
              return !(t = o.find(function (t) {
                return t.language === e;
              }));
            }),
            t || (n ? o[0] : void 0)
          );
        },
        getCurrentTrack: function () {
          return Xe.getTracks.call(this)[this.currentTrack];
        },
        getLabel: function (e) {
          var t = e;
          return (
            !B(t) &&
              Ee.textTracks &&
              this.captions.toggled &&
              (t = Xe.getCurrentTrack.call(this)),
            B(t)
              ? W(t.label)
                ? W(t.language)
                  ? je("enabled", this.config)
                  : e.language.toUpperCase()
                : t.label
              : je("disabled", this.config)
          );
        },
        updateCues: function (e) {
          if (this.supported.ui)
            if (F(this.elements.captions))
              if (I(e) || Array.isArray(e)) {
                var t = e;
                if (!t) {
                  var i = Xe.getCurrentTrack.call(this);
                  t = Array.from((i || {}).activeCues || [])
                    .map(function (e) {
                      return e.getCueAsHTML();
                    })
                    .map(He);
                }
                var n = t
                  .map(function (e) {
                    return e.trim();
                  })
                  .join("\n");
                if (n !== this.elements.captions.innerHTML) {
                  oe(this.elements.captions);
                  var a = ne("span", le(this.config.selectors.caption));
                  (a.innerHTML = n),
                    this.elements.captions.appendChild(a),
                    J.call(this, this.media, "cuechange");
                }
              } else this.debug.warn("updateCues: Invalid input", e);
            else this.debug.warn("No captions element to render to");
        },
      },
      Je = {
        enabled: !0,
        title: "",
        debug: !1,
        autoplay: !1,
        autopause: !0,
        playsinline: !0,
        seekTime: 10,
        volume: 1,
        muted: !1,
        duration: null,
        displayDuration: !0,
        invertTime: !0,
        toggleInvert: !0,
        ratio: null,
        clickToPlay: !0,
        hideControls: !0,
        resetOnEnd: !1,
        disableContextMenu: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "https://cdn.plyr.io/3.5.4/plyr.svg",
        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
        quality: {
          default: 576,
          options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
        },
        loop: { active: !1 },
        speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] },
        keyboard: { focused: !0, global: !1 },
        tooltips: { controls: !1, seek: !0 },
        captions: { active: !1, language: "auto", update: !1 },
        fullscreen: { enabled: !0, fallback: !0, iosNative: !1 },
        storage: { enabled: !0, key: "plyr" },
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "captions",
          "settings",
          "pip",
          "airplay",
          "fullscreen",
        ],
        settings: ["captions", "quality", "speed"],
        i18n: {
          restart: "Restart",
          rewind: "Rewind {seektime}s",
          play: "Play",
          pause: "Pause",
          fastForward: "Forward {seektime}s",
          seek: "Seek",
          seekLabel: "{currentTime} of {duration}",
          played: "Played",
          buffered: "Buffered",
          currentTime: "Current time",
          duration: "Duration",
          volume: "Volume",
          mute: "Mute",
          unmute: "Unmute",
          enableCaptions: "Enable captions",
          disableCaptions: "Disable captions",
          download: "Download",
          enterFullscreen: "Enter fullscreen",
          exitFullscreen: "Exit fullscreen",
          frameTitle: "Player for {title}",
          captions: "Captions",
          settings: "Settings",
          menuBack: "Go back to previous menu",
          speed: "Speed",
          normal: "Normal",
          quality: "Quality",
          loop: "Loop",
          start: "Start",
          end: "End",
          all: "All",
          reset: "Reset",
          disabled: "Disabled",
          enabled: "Enabled",
          advertisement: "Ad",
          qualityBadge: {
            2160: "4K",
            1440: "HD",
            1080: "HD",
            720: "HD",
            576: "SD",
            480: "SD",
          },
        },
        urls: {
          download: null,
          vimeo: {
            sdk: "https://player.vimeo.com/api/player.js",
            iframe: "https://player.vimeo.com/video/{0}?{1}",
            api: "https://vimeo.com/api/v2/video/{0}.json",
          },
          youtube: {
            sdk: "https://www.youtube.com/iframe_api",
            api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}",
          },
          googleIMA: {
            sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
          },
        },
        listeners: {
          seek: null,
          play: null,
          pause: null,
          restart: null,
          rewind: null,
          fastForward: null,
          mute: null,
          volume: null,
          captions: null,
          download: null,
          fullscreen: null,
          pip: null,
          airplay: null,
          speed: null,
          quality: null,
          loop: null,
          language: null,
        },
        events: [
          "ended",
          "progress",
          "stalled",
          "playing",
          "waiting",
          "canplay",
          "canplaythrough",
          "loadstart",
          "loadeddata",
          "loadedmetadata",
          "timeupdate",
          "volumechange",
          "play",
          "pause",
          "error",
          "seeking",
          "seeked",
          "emptied",
          "ratechange",
          "cuechange",
          "download",
          "enterfullscreen",
          "exitfullscreen",
          "captionsenabled",
          "captionsdisabled",
          "languagechange",
          "controlshidden",
          "controlsshown",
          "ready",
          "statechange",
          "qualitychange",
          "adsloaded",
          "adscontentpause",
          "adscontentresume",
          "adstarted",
          "adsmidpoint",
          "adscomplete",
          "adsallcomplete",
          "adsimpression",
          "adsclick",
        ],
        selectors: {
          editable: "input, textarea, select, [contenteditable]",
          container: ".plyr",
          controls: { container: null, wrapper: ".plyr__controls" },
          labels: "[data-plyr]",
          buttons: {
            play: '[data-plyr="play"]',
            pause: '[data-plyr="pause"]',
            restart: '[data-plyr="restart"]',
            rewind: '[data-plyr="rewind"]',
            fastForward: '[data-plyr="fast-forward"]',
            mute: '[data-plyr="mute"]',
            captions: '[data-plyr="captions"]',
            download: '[data-plyr="download"]',
            fullscreen: '[data-plyr="fullscreen"]',
            pip: '[data-plyr="pip"]',
            airplay: '[data-plyr="airplay"]',
            settings: '[data-plyr="settings"]',
            loop: '[data-plyr="loop"]',
          },
          inputs: {
            seek: '[data-plyr="seek"]',
            volume: '[data-plyr="volume"]',
            speed: '[data-plyr="speed"]',
            language: '[data-plyr="language"]',
            quality: '[data-plyr="quality"]',
          },
          display: {
            currentTime: ".plyr__time--current",
            duration: ".plyr__time--duration",
            buffer: ".plyr__progress__buffer",
            loop: ".plyr__progress__loop",
            volume: ".plyr__volume--display",
          },
          progress: ".plyr__progress",
          captions: ".plyr__captions",
          caption: ".plyr__caption",
        },
        classNames: {
          type: "plyr--{0}",
          provider: "plyr--{0}",
          video: "plyr__video-wrapper",
          embed: "plyr__video-embed",
          videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
          embedContainer: "plyr__video-embed__container",
          poster: "plyr__poster",
          posterEnabled: "plyr__poster-enabled",
          ads: "plyr__ads",
          control: "plyr__control",
          controlPressed: "plyr__control--pressed",
          playing: "plyr--playing",
          paused: "plyr--paused",
          stopped: "plyr--stopped",
          loading: "plyr--loading",
          hover: "plyr--hover",
          tooltip: "plyr__tooltip",
          cues: "plyr__cues",
          hidden: "plyr__sr-only",
          hideControls: "plyr--hide-controls",
          isIos: "plyr--is-ios",
          isTouch: "plyr--is-touch",
          uiSupported: "plyr--full-ui",
          noTransition: "plyr--no-transition",
          display: { time: "plyr__time" },
          menu: {
            value: "plyr__menu__value",
            badge: "plyr__badge",
            open: "plyr--menu-open",
          },
          captions: {
            enabled: "plyr--captions-enabled",
            active: "plyr--captions-active",
          },
          fullscreen: {
            enabled: "plyr--fullscreen-enabled",
            fallback: "plyr--fullscreen-fallback",
          },
          pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" },
          airplay: {
            supported: "plyr--airplay-supported",
            active: "plyr--airplay-active",
          },
          tabFocus: "plyr__tab-focus",
          previewThumbnails: {
            thumbContainer: "plyr__preview-thumb",
            thumbContainerShown: "plyr__preview-thumb--is-shown",
            imageContainer: "plyr__preview-thumb__image-container",
            timeContainer: "plyr__preview-thumb__time-container",
            scrubbingContainer: "plyr__preview-scrubbing",
            scrubbingContainerShown: "plyr__preview-scrubbing--is-shown",
          },
        },
        attributes: {
          embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id" },
        },
        ads: { enabled: !1, publisherId: "", tagUrl: "" },
        previewThumbnails: { enabled: !1, src: "" },
        vimeo: {
          byline: !1,
          portrait: !1,
          title: !1,
          speed: !0,
          transparent: !1,
        },
        youtube: {
          noCookie: !1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1,
        },
      },
      $e = "picture-in-picture",
      Ge = "inline",
      Ze = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
      et = "audio",
      tt = "video";
    var it = function () {},
      nt = (function () {
        function t() {
          var i =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          e(this, t),
            (this.enabled = window.console && i),
            this.enabled && this.log("Debugging enabled");
        }
        return (
          i(t, [
            {
              key: "log",
              get: function () {
                return this.enabled
                  ? Function.prototype.bind.call(console.log, console)
                  : it;
              },
            },
            {
              key: "warn",
              get: function () {
                return this.enabled
                  ? Function.prototype.bind.call(console.warn, console)
                  : it;
              },
            },
            {
              key: "error",
              get: function () {
                return this.enabled
                  ? Function.prototype.bind.call(console.error, console)
                  : it;
              },
            },
          ]),
          t
        );
      })();
    function at() {
      if (this.enabled) {
        var e = this.player.elements.buttons.fullscreen;
        F(e) && (e.pressed = this.active),
          J.call(
            this.player,
            this.target,
            this.active ? "enterfullscreen" : "exitfullscreen",
            !0
          ),
          Ce.isIos || fe.call(this.player, this.target, this.active);
      }
    }
    function st() {
      var e = this,
        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (
        (t
          ? (this.scrollPosition = {
              x: window.scrollX || 0,
              y: window.scrollY || 0,
            })
          : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y),
        (document.body.style.overflow = t ? "hidden" : ""),
        ue(this.target, this.player.config.classNames.fullscreen.fallback, t),
        Ce.isIos)
      ) {
        var i = document.head.querySelector('meta[name="viewport"]'),
          n = "viewport-fit=cover";
        i ||
          (i = document.createElement("meta")).setAttribute("name", "viewport");
        var a = O(i.content) && i.content.includes(n);
        t
          ? ((this.cleanupViewport = !a), a || (i.content += ",".concat(n)))
          : this.cleanupViewport &&
            (i.content = i.content
              .split(",")
              .filter(function (e) {
                return e.trim() !== n;
              })
              .join(",")),
          setTimeout(function () {
            return we(e.target);
          }, 100);
      }
      at.call(this);
    }
    var ot = (function () {
      function t(i) {
        var n = this;
        e(this, t),
          (this.player = i),
          (this.prefix = t.prefix),
          (this.property = t.property),
          (this.scrollPosition = { x: 0, y: 0 }),
          (this.forceFallback = "force" === i.config.fullscreen.fallback),
          Y.call(
            this.player,
            document,
            "ms" === this.prefix
              ? "MSFullscreenChange"
              : "".concat(this.prefix, "fullscreenchange"),
            function () {
              at.call(n);
            }
          ),
          Y.call(
            this.player,
            this.player.elements.container,
            "dblclick",
            function (e) {
              (F(n.player.elements.controls) &&
                n.player.elements.controls.contains(e.target)) ||
                n.toggle();
            }
          ),
          this.update();
      }
      return (
        i(
          t,
          [
            {
              key: "update",
              value: function () {
                var e;
                this.enabled
                  ? ((e = this.forceFallback
                      ? "Fallback (forced)"
                      : t.native
                      ? "Native"
                      : "Fallback"),
                    this.player.debug.log("".concat(e, " fullscreen enabled")))
                  : this.player.debug.log(
                      "Fullscreen not supported and fallback disabled"
                    );
                ue(
                  this.player.elements.container,
                  this.player.config.classNames.fullscreen.enabled,
                  this.enabled
                );
              },
            },
            {
              key: "enter",
              value: function () {
                this.enabled &&
                  (Ce.isIos && this.player.config.fullscreen.iosNative
                    ? this.target.webkitEnterFullscreen()
                    : !t.native || this.forceFallback
                    ? st.call(this, !0)
                    : this.prefix
                    ? W(this.prefix) ||
                      this.target[
                        "".concat(this.prefix, "Request").concat(this.property)
                      ]()
                    : this.target.requestFullscreen());
              },
            },
            {
              key: "exit",
              value: function () {
                if (this.enabled)
                  if (Ce.isIos && this.player.config.fullscreen.iosNative)
                    this.target.webkitExitFullscreen(), this.player.play();
                  else if (!t.native || this.forceFallback) st.call(this, !1);
                  else if (this.prefix) {
                    if (!W(this.prefix)) {
                      var e = "moz" === this.prefix ? "Cancel" : "Exit";
                      document[
                        "".concat(this.prefix).concat(e).concat(this.property)
                      ]();
                    }
                  } else
                    (document.cancelFullScreen || document.exitFullscreen).call(
                      document
                    );
              },
            },
            {
              key: "toggle",
              value: function () {
                this.active ? this.exit() : this.enter();
              },
            },
            {
              key: "usingNative",
              get: function () {
                return t.native && !this.forceFallback;
              },
            },
            {
              key: "enabled",
              get: function () {
                return (
                  (t.native || this.player.config.fullscreen.fallback) &&
                  this.player.config.fullscreen.enabled &&
                  this.player.supported.ui &&
                  this.player.isVideo
                );
              },
            },
            {
              key: "active",
              get: function () {
                return (
                  !!this.enabled &&
                  (!t.native || this.forceFallback
                    ? de(
                        this.target,
                        this.player.config.classNames.fullscreen.fallback
                      )
                    : (this.prefix
                        ? document[
                            ""
                              .concat(this.prefix)
                              .concat(this.property, "Element")
                          ]
                        : document.fullscreenElement) === this.target)
                );
              },
            },
            {
              key: "target",
              get: function () {
                return Ce.isIos && this.player.config.fullscreen.iosNative
                  ? this.player.media
                  : this.player.elements.container;
              },
            },
          ],
          [
            {
              key: "native",
              get: function () {
                return !!(
                  document.fullscreenEnabled ||
                  document.webkitFullscreenEnabled ||
                  document.mozFullScreenEnabled ||
                  document.msFullscreenEnabled
                );
              },
            },
            {
              key: "prefix",
              get: function () {
                if (H(document.exitFullscreen)) return "";
                var e = "";
                return (
                  ["webkit", "moz", "ms"].some(function (t) {
                    return (
                      !(
                        !H(document["".concat(t, "ExitFullscreen")]) &&
                        !H(document["".concat(t, "CancelFullScreen")])
                      ) && ((e = t), !0)
                    );
                  }),
                  e
                );
              },
            },
            {
              key: "property",
              get: function () {
                return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
              },
            },
          ]
        ),
        t
      );
    })();
    function rt(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return new Promise(function (i, n) {
        var a = new Image(),
          s = function () {
            delete a.onload, delete a.onerror, (a.naturalWidth >= t ? i : n)(a);
          };
        Object.assign(a, { onload: s, onerror: s, src: e });
      });
    }
    var lt = {
        addStyleHook: function () {
          ue(
            this.elements.container,
            this.config.selectors.container.replace(".", ""),
            !0
          ),
            ue(
              this.elements.container,
              this.config.classNames.uiSupported,
              this.supported.ui
            );
        },
        toggleNativeControls: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          e && this.isHTML5
            ? this.media.setAttribute("controls", "")
            : this.media.removeAttribute("controls");
        },
        build: function () {
          var e = this;
          if ((this.listeners.media(), !this.supported.ui))
            return (
              this.debug.warn(
                "Basic support only for "
                  .concat(this.provider, " ")
                  .concat(this.type)
              ),
              void lt.toggleNativeControls.call(this, !0)
            );
          F(this.elements.controls) ||
            (Ke.inject.call(this), this.listeners.controls()),
            lt.toggleNativeControls.call(this),
            this.isHTML5 && Xe.setup.call(this),
            (this.volume = null),
            (this.muted = null),
            (this.loop = null),
            (this.quality = null),
            (this.speed = null),
            Ke.updateVolume.call(this),
            Ke.timeUpdate.call(this),
            lt.checkPlaying.call(this),
            ue(
              this.elements.container,
              this.config.classNames.pip.supported,
              Ee.pip && this.isHTML5 && this.isVideo
            ),
            ue(
              this.elements.container,
              this.config.classNames.airplay.supported,
              Ee.airplay && this.isHTML5
            ),
            ue(this.elements.container, this.config.classNames.isIos, Ce.isIos),
            ue(
              this.elements.container,
              this.config.classNames.isTouch,
              this.touch
            ),
            (this.ready = !0),
            setTimeout(function () {
              J.call(e, e.media, "ready");
            }, 0),
            lt.setTitle.call(this),
            this.poster &&
              lt.setPoster.call(this, this.poster, !1).catch(function () {}),
            this.config.duration && Ke.durationUpdate.call(this);
        },
        setTitle: function () {
          var e = je("play", this.config);
          if (
            (O(this.config.title) &&
              !W(this.config.title) &&
              (e += ", ".concat(this.config.title)),
            Array.from(this.elements.buttons.play || []).forEach(function (t) {
              t.setAttribute("aria-label", e);
            }),
            this.isEmbed)
          ) {
            var t = me.call(this, "iframe");
            if (!F(t)) return;
            var i = W(this.config.title) ? "video" : this.config.title,
              n = je("frameTitle", this.config);
            t.setAttribute("title", n.replace("{title}", i));
          }
        },
        togglePoster: function (e) {
          ue(this.elements.container, this.config.classNames.posterEnabled, e);
        },
        setPoster: function (e) {
          var t = this,
            i =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
          return i && this.poster
            ? Promise.reject(new Error("Poster already set"))
            : (this.media.setAttribute("poster", e),
              G.call(this)
                .then(function () {
                  return rt(e);
                })
                .catch(function (i) {
                  throw (e === t.poster && lt.togglePoster.call(t, !1), i);
                })
                .then(function () {
                  if (e !== t.poster)
                    throw new Error(
                      "setPoster cancelled by later call to setPoster"
                    );
                })
                .then(function () {
                  return (
                    Object.assign(t.elements.poster.style, {
                      backgroundImage: "url('".concat(e, "')"),
                      backgroundSize: "",
                    }),
                    lt.togglePoster.call(t, !0),
                    e
                  );
                }));
        },
        checkPlaying: function (e) {
          var t = this;
          ue(
            this.elements.container,
            this.config.classNames.playing,
            this.playing
          ),
            ue(
              this.elements.container,
              this.config.classNames.paused,
              this.paused
            ),
            ue(
              this.elements.container,
              this.config.classNames.stopped,
              this.stopped
            ),
            Array.from(this.elements.buttons.play || []).forEach(function (e) {
              e.pressed = t.playing;
            }),
            (R(e) && "timeupdate" === e.type) || lt.toggleControls.call(this);
        },
        checkLoading: function (e) {
          var t = this;
          (this.loading = ["stalled", "waiting"].includes(e.type)),
            clearTimeout(this.timers.loading),
            (this.timers.loading = setTimeout(
              function () {
                ue(
                  t.elements.container,
                  t.config.classNames.loading,
                  t.loading
                ),
                  lt.toggleControls.call(t);
              },
              this.loading ? 250 : 0
            ));
        },
        toggleControls: function (e) {
          var t = this.elements.controls;
          if (t && this.config.hideControls) {
            var i = this.touch && this.lastSeekTime + 2e3 > Date.now();
            this.toggleControls(
              Boolean(
                e || this.loading || this.paused || t.pressed || t.hover || i
              )
            );
          }
        },
      },
      ct = (function () {
        function t(i) {
          e(this, t),
            (this.player = i),
            (this.lastKey = null),
            (this.focusTimer = null),
            (this.lastKeyDown = null),
            (this.handleKey = this.handleKey.bind(this)),
            (this.toggleMenu = this.toggleMenu.bind(this)),
            (this.setTabFocus = this.setTabFocus.bind(this)),
            (this.firstTouch = this.firstTouch.bind(this));
        }
        return (
          i(t, [
            {
              key: "handleKey",
              value: function (e) {
                var t = this.player,
                  i = t.elements,
                  n = e.keyCode ? e.keyCode : e.which,
                  a = "keydown" === e.type,
                  s = a && n === this.lastKey;
                if (
                  !(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) &&
                  _(n)
                ) {
                  if (a) {
                    var o = document.activeElement;
                    if (F(o)) {
                      var r = t.config.selectors.editable;
                      if (o !== i.inputs.seek && he(o, r)) return;
                      if (32 === e.which && he(o, 'button, [role^="menuitem"]'))
                        return;
                    }
                    switch (
                      ([
                        32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57,
                        67, 70, 73, 75, 76, 77, 79,
                      ].includes(n) &&
                        (e.preventDefault(), e.stopPropagation()),
                      n)
                    ) {
                      case 48:
                      case 49:
                      case 50:
                      case 51:
                      case 52:
                      case 53:
                      case 54:
                      case 55:
                      case 56:
                      case 57:
                        s || (t.currentTime = (t.duration / 10) * (n - 48));
                        break;
                      case 32:
                      case 75:
                        s || t.togglePlay();
                        break;
                      case 38:
                        t.increaseVolume(0.1);
                        break;
                      case 40:
                        t.decreaseVolume(0.1);
                        break;
                      case 77:
                        s || (t.muted = !t.muted);
                        break;
                      case 39:
                        t.forward();
                        break;
                      case 37:
                        t.rewind();
                        break;
                      case 70:
                        t.fullscreen.toggle();
                        break;
                      case 67:
                        s || t.toggleCaptions();
                        break;
                      case 76:
                        t.loop = !t.loop;
                    }
                    27 === n &&
                      !t.fullscreen.usingNative &&
                      t.fullscreen.active &&
                      t.fullscreen.toggle(),
                      (this.lastKey = n);
                  } else this.lastKey = null;
                }
              },
            },
            {
              key: "toggleMenu",
              value: function (e) {
                Ke.toggleMenu.call(this.player, e);
              },
            },
            {
              key: "firstTouch",
              value: function () {
                var e = this.player,
                  t = e.elements;
                (e.touch = !0),
                  ue(t.container, e.config.classNames.isTouch, !0);
              },
            },
            {
              key: "setTabFocus",
              value: function (e) {
                var t = this.player,
                  i = t.elements;
                if (
                  (clearTimeout(this.focusTimer),
                  "keydown" !== e.type || 9 === e.which)
                ) {
                  "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
                  var n,
                    a = e.timeStamp - this.lastKeyDown <= 20;
                  if ("focus" !== e.type || a)
                    (n = t.config.classNames.tabFocus),
                      ue(pe.call(t, ".".concat(n)), n, !1),
                      (this.focusTimer = setTimeout(function () {
                        var e = document.activeElement;
                        i.container.contains(e) &&
                          ue(
                            document.activeElement,
                            t.config.classNames.tabFocus,
                            !0
                          );
                      }, 10));
                }
              },
            },
            {
              key: "global",
              value: function () {
                var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0],
                  t = this.player;
                t.config.keyboard.global &&
                  K.call(t, window, "keydown keyup", this.handleKey, e, !1),
                  K.call(t, document.body, "click", this.toggleMenu, e),
                  X.call(t, document.body, "touchstart", this.firstTouch),
                  K.call(
                    t,
                    document.body,
                    "keydown focus blur",
                    this.setTabFocus,
                    e,
                    !1,
                    !0
                  );
              },
            },
            {
              key: "container",
              value: function () {
                var e = this.player,
                  t = e.config,
                  i = e.elements,
                  n = e.timers;
                !t.keyboard.global &&
                  t.keyboard.focused &&
                  Y.call(e, i.container, "keydown keyup", this.handleKey, !1),
                  Y.call(
                    e,
                    i.container,
                    "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
                    function (t) {
                      var a = i.controls;
                      a &&
                        "enterfullscreen" === t.type &&
                        ((a.pressed = !1), (a.hover = !1));
                      var s = 0;
                      ["touchstart", "touchmove", "mousemove"].includes(
                        t.type
                      ) &&
                        (lt.toggleControls.call(e, !0),
                        (s = e.touch ? 3e3 : 2e3)),
                        clearTimeout(n.controls),
                        (n.controls = setTimeout(function () {
                          return lt.toggleControls.call(e, !1);
                        }, s));
                    }
                  );
                var s = function (t) {
                    if (!t) return Ne.call(e);
                    var n = i.container.getBoundingClientRect(),
                      a = n.width,
                      s = n.height;
                    return Ne.call(e, "".concat(a, ":").concat(s));
                  },
                  o = function () {
                    window.clearTimeout(n.resized),
                      (n.resized = window.setTimeout(s, 50));
                  };
                Y.call(
                  e,
                  i.container,
                  "enterfullscreen exitfullscreen",
                  function (t) {
                    var n = e.fullscreen,
                      r = n.target,
                      l = n.usingNative;
                    if (e.isEmbed && r === i.container) {
                      var c = "enterfullscreen" === t.type,
                        u = s(c);
                      u.padding;
                      !(function (t, i, n) {
                        if (e.isVimeo) {
                          var s = e.elements.wrapper.firstChild,
                            o = a(t, 2)[1],
                            r = a(Me.call(e), 2),
                            l = r[0],
                            c = r[1];
                          (s.style.maxWidth = n
                            ? "".concat((o / c) * l, "px")
                            : null),
                            (s.style.margin = n ? "0 auto" : null);
                        }
                      })(u.ratio, 0, c),
                        l ||
                          (c
                            ? Y.call(e, window, "resize", o)
                            : Q.call(e, window, "resize", o));
                    }
                  }
                );
              },
            },
            {
              key: "media",
              value: function () {
                var e = this,
                  t = this.player,
                  i = t.elements;
                if (
                  (Y.call(
                    t,
                    t.media,
                    "timeupdate seeking seeked",
                    function (e) {
                      return Ke.timeUpdate.call(t, e);
                    }
                  ),
                  Y.call(
                    t,
                    t.media,
                    "durationchange loadeddata loadedmetadata",
                    function (e) {
                      return Ke.durationUpdate.call(t, e);
                    }
                  ),
                  Y.call(t, t.media, "canplay loadeddata", function () {
                    ce(i.volume, !t.hasAudio), ce(i.buttons.mute, !t.hasAudio);
                  }),
                  Y.call(t, t.media, "ended", function () {
                    t.isHTML5 &&
                      t.isVideo &&
                      t.config.resetOnEnd &&
                      t.restart();
                  }),
                  Y.call(
                    t,
                    t.media,
                    "progress playing seeking seeked",
                    function (e) {
                      return Ke.updateProgress.call(t, e);
                    }
                  ),
                  Y.call(t, t.media, "volumechange", function (e) {
                    return Ke.updateVolume.call(t, e);
                  }),
                  Y.call(
                    t,
                    t.media,
                    "playing play pause ended emptied timeupdate",
                    function (e) {
                      return lt.checkPlaying.call(t, e);
                    }
                  ),
                  Y.call(
                    t,
                    t.media,
                    "waiting canplay seeked playing",
                    function (e) {
                      return lt.checkLoading.call(t, e);
                    }
                  ),
                  t.supported.ui && t.config.clickToPlay && !t.isAudio)
                ) {
                  var n = me.call(t, ".".concat(t.config.classNames.video));
                  if (!F(n)) return;
                  Y.call(t, i.container, "click", function (a) {
                    ([i.container, n].includes(a.target) ||
                      n.contains(a.target)) &&
                      ((t.touch && t.config.hideControls) ||
                        (t.ended
                          ? (e.proxy(a, t.restart, "restart"),
                            e.proxy(a, t.play, "play"))
                          : e.proxy(a, t.togglePlay, "play")));
                  });
                }
                t.supported.ui &&
                  t.config.disableContextMenu &&
                  Y.call(
                    t,
                    i.wrapper,
                    "contextmenu",
                    function (e) {
                      e.preventDefault();
                    },
                    !1
                  ),
                  Y.call(t, t.media, "volumechange", function () {
                    t.storage.set({ volume: t.volume, muted: t.muted });
                  }),
                  Y.call(t, t.media, "ratechange", function () {
                    Ke.updateSetting.call(t, "speed"),
                      t.storage.set({ speed: t.speed });
                  }),
                  Y.call(t, t.media, "qualitychange", function (e) {
                    Ke.updateSetting.call(t, "quality", null, e.detail.quality);
                  }),
                  Y.call(t, t.media, "ready qualitychange", function () {
                    Ke.setDownloadUrl.call(t);
                  });
                var a = t.config.events.concat(["keyup", "keydown"]).join(" ");
                Y.call(t, t.media, a, function (e) {
                  var n = e.detail,
                    a = void 0 === n ? {} : n;
                  "error" === e.type && (a = t.media.error),
                    J.call(t, i.container, e.type, !0, a);
                });
              },
            },
            {
              key: "proxy",
              value: function (e, t, i) {
                var n = this.player,
                  a = n.config.listeners[i],
                  s = !0;
                H(a) && (s = a.call(n, e)), s && H(t) && t.call(n, e);
              },
            },
            {
              key: "bind",
              value: function (e, t, i, n) {
                var a = this,
                  s =
                    !(arguments.length > 4 && void 0 !== arguments[4]) ||
                    arguments[4],
                  o = this.player,
                  r = o.config.listeners[n],
                  l = H(r);
                Y.call(
                  o,
                  e,
                  t,
                  function (e) {
                    return a.proxy(e, i, n);
                  },
                  s && !l
                );
              },
            },
            {
              key: "controls",
              value: function () {
                var e = this,
                  t = this.player,
                  i = t.elements,
                  n = Ce.isIE ? "change" : "input";
                if (
                  (i.buttons.play &&
                    Array.from(i.buttons.play).forEach(function (i) {
                      e.bind(i, "click", t.togglePlay, "play");
                    }),
                  this.bind(i.buttons.restart, "click", t.restart, "restart"),
                  this.bind(i.buttons.rewind, "click", t.rewind, "rewind"),
                  this.bind(
                    i.buttons.fastForward,
                    "click",
                    t.forward,
                    "fastForward"
                  ),
                  this.bind(
                    i.buttons.mute,
                    "click",
                    function () {
                      t.muted = !t.muted;
                    },
                    "mute"
                  ),
                  this.bind(i.buttons.captions, "click", function () {
                    return t.toggleCaptions();
                  }),
                  this.bind(
                    i.buttons.download,
                    "click",
                    function () {
                      J.call(t, t.media, "download");
                    },
                    "download"
                  ),
                  this.bind(
                    i.buttons.fullscreen,
                    "click",
                    function () {
                      t.fullscreen.toggle();
                    },
                    "fullscreen"
                  ),
                  this.bind(
                    i.buttons.pip,
                    "click",
                    function () {
                      t.pip = "toggle";
                    },
                    "pip"
                  ),
                  this.bind(i.buttons.airplay, "click", t.airplay, "airplay"),
                  this.bind(i.buttons.settings, "click", function (e) {
                    e.stopPropagation(), Ke.toggleMenu.call(t, e);
                  }),
                  this.bind(
                    i.buttons.settings,
                    "keyup",
                    function (e) {
                      var i = e.which;
                      [13, 32].includes(i) &&
                        (13 !== i
                          ? (e.preventDefault(),
                            e.stopPropagation(),
                            Ke.toggleMenu.call(t, e))
                          : Ke.focusFirstMenuItem.call(t, null, !0));
                    },
                    null,
                    !1
                  ),
                  this.bind(i.settings.menu, "keydown", function (e) {
                    27 === e.which && Ke.toggleMenu.call(t, e);
                  }),
                  this.bind(i.inputs.seek, "mousedown mousemove", function (e) {
                    var t = i.progress.getBoundingClientRect(),
                      n = (100 / t.width) * (e.pageX - t.left);
                    e.currentTarget.setAttribute("seek-value", n);
                  }),
                  this.bind(
                    i.inputs.seek,
                    "mousedown mouseup keydown keyup touchstart touchend",
                    function (e) {
                      var i = e.currentTarget,
                        n = e.keyCode ? e.keyCode : e.which;
                      if (!V(e) || 39 === n || 37 === n) {
                        t.lastSeekTime = Date.now();
                        var a = i.hasAttribute("play-on-seeked"),
                          s = ["mouseup", "touchend", "keyup"].includes(e.type);
                        a && s
                          ? (i.removeAttribute("play-on-seeked"), t.play())
                          : !s &&
                            t.playing &&
                            (i.setAttribute("play-on-seeked", ""), t.pause());
                      }
                    }
                  ),
                  Ce.isIos)
                ) {
                  var s = pe.call(t, 'input[type="range"]');
                  Array.from(s).forEach(function (t) {
                    return e.bind(t, n, function (e) {
                      return we(e.target);
                    });
                  });
                }
                this.bind(
                  i.inputs.seek,
                  n,
                  function (e) {
                    var i = e.currentTarget,
                      n = i.getAttribute("seek-value");
                    W(n) && (n = i.value),
                      i.removeAttribute("seek-value"),
                      (t.currentTime = (n / i.max) * t.duration);
                  },
                  "seek"
                ),
                  this.bind(
                    i.progress,
                    "mouseenter mouseleave mousemove",
                    function (e) {
                      return Ke.updateSeekTooltip.call(t, e);
                    }
                  ),
                  this.bind(i.progress, "mousemove touchmove", function (e) {
                    var i = t.previewThumbnails;
                    i && i.loaded && i.startMove(e);
                  }),
                  this.bind(i.progress, "mouseleave click", function () {
                    var e = t.previewThumbnails;
                    e && e.loaded && e.endMove(!1, !0);
                  }),
                  this.bind(i.progress, "mousedown touchstart", function (e) {
                    var i = t.previewThumbnails;
                    i && i.loaded && i.startScrubbing(e);
                  }),
                  this.bind(i.progress, "mouseup touchend", function (e) {
                    var i = t.previewThumbnails;
                    i && i.loaded && i.endScrubbing(e);
                  }),
                  Ce.isWebkit &&
                    Array.from(pe.call(t, 'input[type="range"]')).forEach(
                      function (i) {
                        e.bind(i, "input", function (e) {
                          return Ke.updateRangeFill.call(t, e.target);
                        });
                      }
                    ),
                  t.config.toggleInvert &&
                    !F(i.display.duration) &&
                    this.bind(i.display.currentTime, "click", function () {
                      0 !== t.currentTime &&
                        ((t.config.invertTime = !t.config.invertTime),
                        Ke.timeUpdate.call(t));
                    }),
                  this.bind(
                    i.inputs.volume,
                    n,
                    function (e) {
                      t.volume = e.target.value;
                    },
                    "volume"
                  ),
                  this.bind(i.controls, "mouseenter mouseleave", function (e) {
                    i.controls.hover = !t.touch && "mouseenter" === e.type;
                  }),
                  this.bind(
                    i.controls,
                    "mousedown mouseup touchstart touchend touchcancel",
                    function (e) {
                      i.controls.pressed = ["mousedown", "touchstart"].includes(
                        e.type
                      );
                    }
                  ),
                  this.bind(i.controls, "focusin", function () {
                    var i = t.config,
                      n = t.elements,
                      a = t.timers;
                    ue(n.controls, i.classNames.noTransition, !0),
                      lt.toggleControls.call(t, !0),
                      setTimeout(function () {
                        ue(n.controls, i.classNames.noTransition, !1);
                      }, 0);
                    var s = e.touch ? 3e3 : 4e3;
                    clearTimeout(a.controls),
                      (a.controls = setTimeout(function () {
                        return lt.toggleControls.call(t, !1);
                      }, s));
                  }),
                  this.bind(
                    i.inputs.volume,
                    "wheel",
                    function (e) {
                      var i = e.webkitDirectionInvertedFromDevice,
                        n = a(
                          [e.deltaX, -e.deltaY].map(function (e) {
                            return i ? -e : e;
                          }),
                          2
                        ),
                        s = n[0],
                        o = n[1],
                        r = Math.sign(Math.abs(s) > Math.abs(o) ? s : o);
                      t.increaseVolume(r / 50);
                      var l = t.media.volume;
                      ((1 === r && l < 1) || (-1 === r && l > 0)) &&
                        e.preventDefault();
                    },
                    "volume",
                    !1
                  );
              },
            },
          ]),
          t
        );
      })();
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self && self;
    var ut = (function (e, t) {
      return e((t = { exports: {} }), t.exports), t.exports;
    })(function (e, t) {
      e.exports = (function () {
        var e = function () {},
          t = {},
          i = {},
          n = {};
        function a(e, t) {
          if (e) {
            var a = n[e];
            if (((i[e] = t), a)) for (; a.length; ) a[0](e, t), a.splice(0, 1);
          }
        }
        function s(t, i) {
          t.call && (t = { success: t }),
            i.length ? (t.error || e)(i) : (t.success || e)(t);
        }
        function o(t, i, n, a) {
          var s,
            r,
            l = document,
            c = n.async,
            u = (n.numRetries || 0) + 1,
            d = n.before || e,
            h = t.replace(/^(css|img)!/, "");
          (a = a || 0),
            /(^css!|\.css$)/.test(t)
              ? (((r = l.createElement("link")).rel = "stylesheet"),
                (r.href = h),
                (s = "hideFocus" in r) &&
                  r.relList &&
                  ((s = 0), (r.rel = "preload"), (r.as = "style")))
              : /(^img!|\.(png|gif|jpg|svg)$)/.test(t)
              ? ((r = l.createElement("img")).src = h)
              : (((r = l.createElement("script")).src = t),
                (r.async = void 0 === c || c)),
            (r.onload =
              r.onerror =
              r.onbeforeload =
                function (e) {
                  var l = e.type[0];
                  if (s)
                    try {
                      r.sheet.cssText.length || (l = "e");
                    } catch (e) {
                      18 != e.code && (l = "e");
                    }
                  if ("e" == l) {
                    if ((a += 1) < u) return o(t, i, n, a);
                  } else if ("preload" == r.rel && "style" == r.as)
                    return (r.rel = "stylesheet");
                  i(t, l, e.defaultPrevented);
                }),
            !1 !== d(t, r) && l.head.appendChild(r);
        }
        function r(e, i, n) {
          var r, l;
          if ((i && i.trim && (r = i), (l = (r ? n : i) || {}), r)) {
            if (r in t) throw "LoadJS";
            t[r] = !0;
          }
          function c(t, i) {
            !(function (e, t, i) {
              var n,
                a,
                s = (e = e.push ? e : [e]).length,
                r = s,
                l = [];
              for (
                n = function (e, i, n) {
                  if (("e" == i && l.push(e), "b" == i)) {
                    if (!n) return;
                    l.push(e);
                  }
                  --s || t(l);
                },
                  a = 0;
                a < r;
                a++
              )
                o(e[a], n, i);
            })(
              e,
              function (e) {
                s(l, e), t && s({ success: t, error: i }, e), a(r, e);
              },
              l
            );
          }
          if (l.returnPromise) return new Promise(c);
          c();
        }
        return (
          (r.ready = function (e, t) {
            return (
              (function (e, t) {
                e = e.push ? e : [e];
                var a,
                  s,
                  o,
                  r = [],
                  l = e.length,
                  c = l;
                for (
                  a = function (e, i) {
                    i.length && r.push(e), --c || t(r);
                  };
                  l--;

                )
                  (s = e[l]),
                    (o = i[s]) ? a(s, o) : (n[s] = n[s] || []).push(a);
              })(e, function (e) {
                s(t, e);
              }),
              r
            );
          }),
          (r.done = function (e) {
            a(e, []);
          }),
          (r.reset = function () {
            (t = {}), (i = {}), (n = {});
          }),
          (r.isDefined = function (e) {
            return e in t;
          }),
          r
        );
      })();
    });
    function dt(e) {
      return new Promise(function (t, i) {
        ut(e, { success: t, error: i });
      });
    }
    function ht(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e &&
          ((this.media.paused = !e),
          J.call(this, this.media, e ? "play" : "pause"));
    }
    var pt = {
      setup: function () {
        var e = this;
        ue(this.elements.wrapper, this.config.classNames.embed, !0),
          Ne.call(this),
          L(window.Vimeo)
            ? pt.ready.call(this)
            : dt(this.config.urls.vimeo.sdk)
                .then(function () {
                  pt.ready.call(e);
                })
                .catch(function (t) {
                  e.debug.warn("Vimeo SDK (player.js) failed to load", t);
                });
      },
      ready: function () {
        var e = this,
          t = this,
          i = t.config.vimeo,
          n = Qe(
            ee(
              {},
              {
                loop: t.config.loop.active,
                autoplay: t.autoplay,
                muted: t.muted,
                gesture: "media",
                playsinline: !this.config.fullscreen.iosNative,
              },
              i
            )
          ),
          s = t.media.getAttribute("src");
        W(s) && (s = t.media.getAttribute(t.config.attributes.embed.id));
        var o,
          r = W((o = s))
            ? null
            : _(Number(o))
            ? o
            : o.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
            ? RegExp.$2
            : o,
          l = ne("iframe"),
          c = Le(t.config.urls.vimeo.iframe, r, n);
        l.setAttribute("src", c),
          l.setAttribute("allowfullscreen", ""),
          l.setAttribute("allowtransparency", ""),
          l.setAttribute("allow", "autoplay");
        var u = ne("div", {
          poster: t.poster,
          class: t.config.classNames.embedContainer,
        });
        u.appendChild(l),
          (t.media = re(u, t.media)),
          Re(Le(t.config.urls.vimeo.api, r), "json").then(function (e) {
            if (!W(e)) {
              var i = new URL(e[0].thumbnail_large);
              (i.pathname = "".concat(i.pathname.split("_")[0], ".jpg")),
                lt.setPoster.call(t, i.href).catch(function () {});
            }
          }),
          (t.embed = new window.Vimeo.Player(l, {
            autopause: t.config.autopause,
            muted: t.muted,
          })),
          (t.media.paused = !0),
          (t.media.currentTime = 0),
          t.supported.ui && t.embed.disableTextTrack(),
          (t.media.play = function () {
            return ht.call(t, !0), t.embed.play();
          }),
          (t.media.pause = function () {
            return ht.call(t, !1), t.embed.pause();
          }),
          (t.media.stop = function () {
            t.pause(), (t.currentTime = 0);
          });
        var d = t.media.currentTime;
        Object.defineProperty(t.media, "currentTime", {
          get: function () {
            return d;
          },
          set: function (e) {
            var i = t.embed,
              n = t.media,
              a = t.paused,
              s = t.volume,
              o = a && !i.hasPlayed;
            (n.seeking = !0),
              J.call(t, n, "seeking"),
              Promise.resolve(o && i.setVolume(0))
                .then(function () {
                  return i.setCurrentTime(e);
                })
                .then(function () {
                  return o && i.pause();
                })
                .then(function () {
                  return o && i.setVolume(s);
                })
                .catch(function () {});
          },
        });
        var h = t.config.speed.selected;
        Object.defineProperty(t.media, "playbackRate", {
          get: function () {
            return h;
          },
          set: function (e) {
            t.embed
              .setPlaybackRate(e)
              .then(function () {
                (h = e), J.call(t, t.media, "ratechange");
              })
              .catch(function (e) {
                "Error" === e.name && Ke.setSpeedMenu.call(t, []);
              });
          },
        });
        var p = t.config.volume;
        Object.defineProperty(t.media, "volume", {
          get: function () {
            return p;
          },
          set: function (e) {
            t.embed.setVolume(e).then(function () {
              (p = e), J.call(t, t.media, "volumechange");
            });
          },
        });
        var m = t.config.muted;
        Object.defineProperty(t.media, "muted", {
          get: function () {
            return m;
          },
          set: function (e) {
            var i = !!q(e) && e;
            t.embed.setVolume(i ? 0 : t.config.volume).then(function () {
              (m = i), J.call(t, t.media, "volumechange");
            });
          },
        });
        var f,
          g = t.config.loop;
        Object.defineProperty(t.media, "loop", {
          get: function () {
            return g;
          },
          set: function (e) {
            var i = q(e) ? e : t.config.loop.active;
            t.embed.setLoop(i).then(function () {
              g = i;
            });
          },
        }),
          t.embed
            .getVideoUrl()
            .then(function (e) {
              (f = e), Ke.setDownloadUrl.call(t);
            })
            .catch(function (t) {
              e.debug.warn(t);
            }),
          Object.defineProperty(t.media, "currentSrc", {
            get: function () {
              return f;
            },
          }),
          Object.defineProperty(t.media, "ended", {
            get: function () {
              return t.currentTime === t.duration;
            },
          }),
          Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(
            function (i) {
              var n = a(i, 2),
                s = n[0],
                o = n[1];
              (t.embed.ratio = [s, o]), Ne.call(e);
            }
          ),
          t.embed.setAutopause(t.config.autopause).then(function (e) {
            t.config.autopause = e;
          }),
          t.embed.getVideoTitle().then(function (i) {
            (t.config.title = i), lt.setTitle.call(e);
          }),
          t.embed.getCurrentTime().then(function (e) {
            (d = e), J.call(t, t.media, "timeupdate");
          }),
          t.embed.getDuration().then(function (e) {
            (t.media.duration = e), J.call(t, t.media, "durationchange");
          }),
          t.embed.getTextTracks().then(function (e) {
            (t.media.textTracks = e), Xe.setup.call(t);
          }),
          t.embed.on("cuechange", function (e) {
            var i = e.cues,
              n = (void 0 === i ? [] : i).map(function (e) {
                return (function (e) {
                  var t = document.createDocumentFragment(),
                    i = document.createElement("div");
                  return (
                    t.appendChild(i), (i.innerHTML = e), t.firstChild.innerText
                  );
                })(e.text);
              });
            Xe.updateCues.call(t, n);
          }),
          t.embed.on("loaded", function () {
            (t.embed.getPaused().then(function (e) {
              ht.call(t, !e), e || J.call(t, t.media, "playing");
            }),
            F(t.embed.element) && t.supported.ui) &&
              t.embed.element.setAttribute("tabindex", -1);
          }),
          t.embed.on("play", function () {
            ht.call(t, !0), J.call(t, t.media, "playing");
          }),
          t.embed.on("pause", function () {
            ht.call(t, !1);
          }),
          t.embed.on("timeupdate", function (e) {
            (t.media.seeking = !1),
              (d = e.seconds),
              J.call(t, t.media, "timeupdate");
          }),
          t.embed.on("progress", function (e) {
            (t.media.buffered = e.percent),
              J.call(t, t.media, "progress"),
              1 === parseInt(e.percent, 10) &&
                J.call(t, t.media, "canplaythrough"),
              t.embed.getDuration().then(function (e) {
                e !== t.media.duration &&
                  ((t.media.duration = e),
                  J.call(t, t.media, "durationchange"));
              });
          }),
          t.embed.on("seeked", function () {
            (t.media.seeking = !1), J.call(t, t.media, "seeked");
          }),
          t.embed.on("ended", function () {
            (t.media.paused = !0), J.call(t, t.media, "ended");
          }),
          t.embed.on("error", function (e) {
            (t.media.error = e), J.call(t, t.media, "error");
          }),
          setTimeout(function () {
            return lt.build.call(t);
          }, 0);
      },
    };
    function mt(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e &&
          ((this.media.paused = !e),
          J.call(this, this.media, e ? "play" : "pause"));
    }
    function ft(e) {
      return e.noCookie
        ? "https://www.youtube-nocookie.com"
        : "http:" === window.location.protocol
        ? "http://www.youtube.com"
        : void 0;
    }
    var gt = {
        setup: function () {
          var e = this;
          ue(this.elements.wrapper, this.config.classNames.embed, !0),
            L(window.YT) && H(window.YT.Player)
              ? gt.ready.call(this)
              : (dt(this.config.urls.youtube.sdk).catch(function (t) {
                  e.debug.warn("YouTube API failed to load", t);
                }),
                (window.onYouTubeReadyCallbacks =
                  window.onYouTubeReadyCallbacks || []),
                window.onYouTubeReadyCallbacks.push(function () {
                  gt.ready.call(e);
                }),
                (window.onYouTubeIframeAPIReady = function () {
                  window.onYouTubeReadyCallbacks.forEach(function (e) {
                    e();
                  });
                }));
        },
        getTitle: function (e) {
          var t = this;
          Re(Le(this.config.urls.youtube.api, e))
            .then(function (e) {
              if (L(e)) {
                var i = e.title,
                  n = e.height,
                  a = e.width;
                (t.config.title = i),
                  lt.setTitle.call(t),
                  (t.embed.ratio = [a, n]);
              }
              Ne.call(t);
            })
            .catch(function () {
              Ne.call(t);
            });
        },
        ready: function () {
          var e = this,
            t = e.media.getAttribute("id");
          if (W(t) || !t.startsWith("youtube-")) {
            var i = e.media.getAttribute("src");
            W(i) && (i = e.media.getAttribute(this.config.attributes.embed.id));
            var n,
              a,
              s = W((n = i))
                ? null
                : n.match(
                    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
                  )
                ? RegExp.$2
                : n,
              o =
                ((a = e.provider),
                "".concat(a, "-").concat(Math.floor(1e4 * Math.random()))),
              r = ne("div", { id: o, poster: e.poster });
            e.media = re(r, e.media);
            var l = function (e) {
              return "https://i.ytimg.com/vi/"
                .concat(s, "/")
                .concat(e, "default.jpg");
            };
            rt(l("maxres"), 121)
              .catch(function () {
                return rt(l("sd"), 121);
              })
              .catch(function () {
                return rt(l("hq"));
              })
              .then(function (t) {
                return lt.setPoster.call(e, t.src);
              })
              .then(function (t) {
                t.includes("maxres") ||
                  (e.elements.poster.style.backgroundSize = "cover");
              })
              .catch(function () {});
            var c = e.config.youtube;
            e.embed = new window.YT.Player(o, {
              videoId: s,
              host: ft(c),
              playerVars: ee(
                {},
                {
                  autoplay: e.config.autoplay ? 1 : 0,
                  hl: e.config.hl,
                  controls: e.supported.ui ? 0 : 1,
                  disablekb: 1,
                  playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                  cc_load_policy: e.captions.active ? 1 : 0,
                  cc_lang_pref: e.config.captions.language,
                  widget_referrer: window ? window.location.href : null,
                },
                c
              ),
              events: {
                onError: function (t) {
                  if (!e.media.error) {
                    var i = t.data,
                      n =
                        {
                          2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                          5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                          100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                          101: "The owner of the requested video does not allow it to be played in embedded players.",
                          150: "The owner of the requested video does not allow it to be played in embedded players.",
                        }[i] || "An unknown error occured";
                    (e.media.error = { code: i, message: n }),
                      J.call(e, e.media, "error");
                  }
                },
                onPlaybackRateChange: function (t) {
                  var i = t.target;
                  (e.media.playbackRate = i.getPlaybackRate()),
                    J.call(e, e.media, "ratechange");
                },
                onReady: function (t) {
                  if (!H(e.media.play)) {
                    var i = t.target;
                    gt.getTitle.call(e, s),
                      (e.media.play = function () {
                        mt.call(e, !0), i.playVideo();
                      }),
                      (e.media.pause = function () {
                        mt.call(e, !1), i.pauseVideo();
                      }),
                      (e.media.stop = function () {
                        i.stopVideo();
                      }),
                      (e.media.duration = i.getDuration()),
                      (e.media.paused = !0),
                      (e.media.currentTime = 0),
                      Object.defineProperty(e.media, "currentTime", {
                        get: function () {
                          return Number(i.getCurrentTime());
                        },
                        set: function (t) {
                          e.paused && !e.embed.hasPlayed && e.embed.mute(),
                            (e.media.seeking = !0),
                            J.call(e, e.media, "seeking"),
                            i.seekTo(t);
                        },
                      }),
                      Object.defineProperty(e.media, "playbackRate", {
                        get: function () {
                          return i.getPlaybackRate();
                        },
                        set: function (e) {
                          i.setPlaybackRate(e);
                        },
                      });
                    var n = e.config.volume;
                    Object.defineProperty(e.media, "volume", {
                      get: function () {
                        return n;
                      },
                      set: function (t) {
                        (n = t),
                          i.setVolume(100 * n),
                          J.call(e, e.media, "volumechange");
                      },
                    });
                    var a = e.config.muted;
                    Object.defineProperty(e.media, "muted", {
                      get: function () {
                        return a;
                      },
                      set: function (t) {
                        var n = q(t) ? t : a;
                        (a = n),
                          i[n ? "mute" : "unMute"](),
                          J.call(e, e.media, "volumechange");
                      },
                    }),
                      Object.defineProperty(e.media, "currentSrc", {
                        get: function () {
                          return i.getVideoUrl();
                        },
                      }),
                      Object.defineProperty(e.media, "ended", {
                        get: function () {
                          return e.currentTime === e.duration;
                        },
                      }),
                      (e.options.speed = i.getAvailablePlaybackRates()),
                      e.supported.ui && e.media.setAttribute("tabindex", -1),
                      J.call(e, e.media, "timeupdate"),
                      J.call(e, e.media, "durationchange"),
                      clearInterval(e.timers.buffering),
                      (e.timers.buffering = setInterval(function () {
                        (e.media.buffered = i.getVideoLoadedFraction()),
                          (null === e.media.lastBuffered ||
                            e.media.lastBuffered < e.media.buffered) &&
                            J.call(e, e.media, "progress"),
                          (e.media.lastBuffered = e.media.buffered),
                          1 === e.media.buffered &&
                            (clearInterval(e.timers.buffering),
                            J.call(e, e.media, "canplaythrough"));
                      }, 200)),
                      setTimeout(function () {
                        return lt.build.call(e);
                      }, 50);
                  }
                },
                onStateChange: function (t) {
                  var i = t.target;
                  switch (
                    (clearInterval(e.timers.playing),
                    e.media.seeking &&
                      [1, 2].includes(t.data) &&
                      ((e.media.seeking = !1), J.call(e, e.media, "seeked")),
                    t.data)
                  ) {
                    case -1:
                      J.call(e, e.media, "timeupdate"),
                        (e.media.buffered = i.getVideoLoadedFraction()),
                        J.call(e, e.media, "progress");
                      break;
                    case 0:
                      mt.call(e, !1),
                        e.media.loop
                          ? (i.stopVideo(), i.playVideo())
                          : J.call(e, e.media, "ended");
                      break;
                    case 1:
                      e.config.autoplay || !e.media.paused || e.embed.hasPlayed
                        ? (mt.call(e, !0),
                          J.call(e, e.media, "playing"),
                          (e.timers.playing = setInterval(function () {
                            J.call(e, e.media, "timeupdate");
                          }, 50)),
                          e.media.duration !== i.getDuration() &&
                            ((e.media.duration = i.getDuration()),
                            J.call(e, e.media, "durationchange")))
                        : e.media.pause();
                      break;
                    case 2:
                      e.muted || e.embed.unMute(), mt.call(e, !1);
                  }
                  J.call(e, e.elements.container, "statechange", !1, {
                    code: t.data,
                  });
                },
              },
            });
          }
        },
      },
      yt = {
        setup: function () {
          this.media
            ? (ue(
                this.elements.container,
                this.config.classNames.type.replace("{0}", this.type),
                !0
              ),
              ue(
                this.elements.container,
                this.config.classNames.provider.replace("{0}", this.provider),
                !0
              ),
              this.isEmbed &&
                ue(
                  this.elements.container,
                  this.config.classNames.type.replace("{0}", "video"),
                  !0
                ),
              this.isVideo &&
                ((this.elements.wrapper = ne("div", {
                  class: this.config.classNames.video,
                })),
                te(this.media, this.elements.wrapper),
                (this.elements.poster = ne("div", {
                  class: this.config.classNames.poster,
                })),
                this.elements.wrapper.appendChild(this.elements.poster)),
              this.isHTML5
                ? xe.extend.call(this)
                : this.isYouTube
                ? gt.setup.call(this)
                : this.isVimeo && pt.setup.call(this))
            : this.debug.warn("No media element found!");
        },
      },
      vt = (function () {
        function t(i) {
          var n = this;
          e(this, t),
            (this.player = i),
            (this.config = i.config.ads),
            (this.playing = !1),
            (this.initialized = !1),
            (this.elements = { container: null, displayContainer: null }),
            (this.manager = null),
            (this.loader = null),
            (this.cuePoints = null),
            (this.events = {}),
            (this.safetyTimer = null),
            (this.countdownTimer = null),
            (this.managerPromise = new Promise(function (e, t) {
              n.on("loaded", e), n.on("error", t);
            })),
            this.load();
        }
        return (
          i(t, [
            {
              key: "load",
              value: function () {
                var e = this;
                this.enabled &&
                  (L(window.google) && L(window.google.ima)
                    ? this.ready()
                    : dt(this.player.config.urls.googleIMA.sdk)
                        .then(function () {
                          e.ready();
                        })
                        .catch(function () {
                          e.trigger(
                            "error",
                            new Error("Google IMA SDK failed to load")
                          );
                        }));
              },
            },
            {
              key: "ready",
              value: function () {
                var e,
                  t = this;
                this.enabled ||
                  ((e = this).manager && e.manager.destroy(),
                  e.elements.displayContainer &&
                    e.elements.displayContainer.destroy(),
                  e.elements.container.remove()),
                  this.startSafetyTimer(12e3, "ready()"),
                  this.managerPromise.then(function () {
                    t.clearSafetyTimer("onAdsManagerLoaded()");
                  }),
                  this.listeners(),
                  this.setupIMA();
              },
            },
            {
              key: "setupIMA",
              value: function () {
                (this.elements.container = ne("div", {
                  class: this.player.config.classNames.ads,
                })),
                  this.player.elements.container.appendChild(
                    this.elements.container
                  ),
                  google.ima.settings.setVpaidMode(
                    google.ima.ImaSdkSettings.VpaidMode.ENABLED
                  ),
                  google.ima.settings.setLocale(
                    this.player.config.ads.language
                  ),
                  google.ima.settings.setDisableCustomPlaybackForIOS10Plus(
                    this.player.config.playsinline
                  ),
                  (this.elements.displayContainer =
                    new google.ima.AdDisplayContainer(
                      this.elements.container,
                      this.player.media
                    )),
                  this.requestAds();
              },
            },
            {
              key: "requestAds",
              value: function () {
                var e = this,
                  t = this.player.elements.container;
                try {
                  (this.loader = new google.ima.AdsLoader(
                    this.elements.displayContainer
                  )),
                    this.loader.addEventListener(
                      google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
                      function (t) {
                        return e.onAdsManagerLoaded(t);
                      },
                      !1
                    ),
                    this.loader.addEventListener(
                      google.ima.AdErrorEvent.Type.AD_ERROR,
                      function (t) {
                        return e.onAdError(t);
                      },
                      !1
                    );
                  var i = new google.ima.AdsRequest();
                  (i.adTagUrl = this.tagUrl),
                    (i.linearAdSlotWidth = t.offsetWidth),
                    (i.linearAdSlotHeight = t.offsetHeight),
                    (i.nonLinearAdSlotWidth = t.offsetWidth),
                    (i.nonLinearAdSlotHeight = t.offsetHeight),
                    (i.forceNonLinearFullSlot = !1),
                    i.setAdWillPlayMuted(!this.player.muted),
                    this.loader.requestAds(i);
                } catch (e) {
                  this.onAdError(e);
                }
              },
            },
            {
              key: "pollCountdown",
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                if (!t)
                  return (
                    clearInterval(this.countdownTimer),
                    void this.elements.container.removeAttribute(
                      "data-badge-text"
                    )
                  );
                var i = function () {
                  var t = ze(Math.max(e.manager.getRemainingTime(), 0)),
                    i = ""
                      .concat(je("advertisement", e.player.config), " - ")
                      .concat(t);
                  e.elements.container.setAttribute("data-badge-text", i);
                };
                this.countdownTimer = setInterval(i, 100);
              },
            },
            {
              key: "onAdsManagerLoaded",
              value: function (e) {
                var t = this;
                if (this.enabled) {
                  var i = new google.ima.AdsRenderingSettings();
                  (i.restoreCustomPlaybackStateOnAdBreakComplete = !0),
                    (i.enablePreloading = !0),
                    (this.manager = e.getAdsManager(this.player, i)),
                    (this.cuePoints = this.manager.getCuePoints()),
                    this.manager.addEventListener(
                      google.ima.AdErrorEvent.Type.AD_ERROR,
                      function (e) {
                        return t.onAdError(e);
                      }
                    ),
                    Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
                      t.manager.addEventListener(
                        google.ima.AdEvent.Type[e],
                        function (e) {
                          return t.onAdEvent(e);
                        }
                      );
                    }),
                    this.trigger("loaded");
                }
              },
            },
            {
              key: "addCuePoints",
              value: function () {
                var e = this;
                W(this.cuePoints) ||
                  this.cuePoints.forEach(function (t) {
                    if (0 !== t && -1 !== t && t < e.player.duration) {
                      var i = e.player.elements.progress;
                      if (F(i)) {
                        var n = (100 / e.player.duration) * t,
                          a = ne("span", {
                            class: e.player.config.classNames.cues,
                          });
                        (a.style.left = "".concat(n.toString(), "%")),
                          i.appendChild(a);
                      }
                    }
                  });
              },
            },
            {
              key: "onAdEvent",
              value: function (e) {
                var t = this,
                  i = this.player.elements.container,
                  n = e.getAd(),
                  a = e.getAdData();
                switch (
                  ((function (e) {
                    var i = "ads".concat(e.replace(/_/g, "").toLowerCase());
                    J.call(t.player, t.player.media, i);
                  })(e.type),
                  e.type)
                ) {
                  case google.ima.AdEvent.Type.LOADED:
                    this.trigger("loaded"),
                      this.pollCountdown(!0),
                      n.isLinear() ||
                        ((n.width = i.offsetWidth),
                        (n.height = i.offsetHeight));
                    break;
                  case google.ima.AdEvent.Type.STARTED:
                    this.manager.setVolume(this.player.volume);
                    break;
                  case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                    this.loadAds();
                    break;
                  case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                    this.pauseContent();
                    break;
                  case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                    this.pollCountdown(), this.resumeContent();
                    break;
                  case google.ima.AdEvent.Type.LOG:
                    a.adError &&
                      this.player.debug.warn(
                        "Non-fatal ad error: ".concat(a.adError.getMessage())
                      );
                }
              },
            },
            {
              key: "onAdError",
              value: function (e) {
                this.cancel(), this.player.debug.warn("Ads error", e);
              },
            },
            {
              key: "listeners",
              value: function () {
                var e,
                  t = this,
                  i = this.player.elements.container;
                this.player.on("canplay", function () {
                  t.addCuePoints();
                }),
                  this.player.on("ended", function () {
                    t.loader.contentComplete();
                  }),
                  this.player.on("timeupdate", function () {
                    e = t.player.currentTime;
                  }),
                  this.player.on("seeked", function () {
                    var i = t.player.currentTime;
                    W(t.cuePoints) ||
                      t.cuePoints.forEach(function (n, a) {
                        e < n &&
                          n < i &&
                          (t.manager.discardAdBreak(),
                          t.cuePoints.splice(a, 1));
                      });
                  }),
                  window.addEventListener("resize", function () {
                    t.manager &&
                      t.manager.resize(
                        i.offsetWidth,
                        i.offsetHeight,
                        google.ima.ViewMode.NORMAL
                      );
                  });
              },
            },
            {
              key: "play",
              value: function () {
                var e = this,
                  t = this.player.elements.container;
                this.managerPromise || this.resumeContent(),
                  this.managerPromise
                    .then(function () {
                      e.manager.setVolume(e.player.volume),
                        e.elements.displayContainer.initialize();
                      try {
                        e.initialized ||
                          (e.manager.init(
                            t.offsetWidth,
                            t.offsetHeight,
                            google.ima.ViewMode.NORMAL
                          ),
                          e.manager.start()),
                          (e.initialized = !0);
                      } catch (t) {
                        e.onAdError(t);
                      }
                    })
                    .catch(function () {});
              },
            },
            {
              key: "resumeContent",
              value: function () {
                (this.elements.container.style.zIndex = ""),
                  (this.playing = !1),
                  this.player.media.play();
              },
            },
            {
              key: "pauseContent",
              value: function () {
                (this.elements.container.style.zIndex = 3),
                  (this.playing = !0),
                  this.player.media.pause();
              },
            },
            {
              key: "cancel",
              value: function () {
                this.initialized && this.resumeContent(),
                  this.trigger("error"),
                  this.loadAds();
              },
            },
            {
              key: "loadAds",
              value: function () {
                var e = this;
                this.managerPromise
                  .then(function () {
                    e.manager && e.manager.destroy(),
                      (e.managerPromise = new Promise(function (t) {
                        e.on("loaded", t), e.player.debug.log(e.manager);
                      })),
                      e.requestAds();
                  })
                  .catch(function () {});
              },
            },
            {
              key: "trigger",
              value: function (e) {
                for (
                  var t = this,
                    i = arguments.length,
                    n = new Array(i > 1 ? i - 1 : 0),
                    a = 1;
                  a < i;
                  a++
                )
                  n[a - 1] = arguments[a];
                var s = this.events[e];
                D(s) &&
                  s.forEach(function (e) {
                    H(e) && e.apply(t, n);
                  });
              },
            },
            {
              key: "on",
              value: function (e, t) {
                return (
                  D(this.events[e]) || (this.events[e] = []),
                  this.events[e].push(t),
                  this
                );
              },
            },
            {
              key: "startSafetyTimer",
              value: function (e, t) {
                var i = this;
                this.player.debug.log("Safety timer invoked from: ".concat(t)),
                  (this.safetyTimer = setTimeout(function () {
                    i.cancel(), i.clearSafetyTimer("startSafetyTimer()");
                  }, e));
              },
            },
            {
              key: "clearSafetyTimer",
              value: function (e) {
                I(this.safetyTimer) ||
                  (this.player.debug.log(
                    "Safety timer cleared from: ".concat(e)
                  ),
                  clearTimeout(this.safetyTimer),
                  (this.safetyTimer = null));
              },
            },
            {
              key: "enabled",
              get: function () {
                var e = this.config;
                return (
                  this.player.isHTML5 &&
                  this.player.isVideo &&
                  e.enabled &&
                  (!W(e.publisherId) || U(e.tagUrl))
                );
              },
            },
            {
              key: "tagUrl",
              get: function () {
                var e = this.config;
                if (U(e.tagUrl)) return e.tagUrl;
                var t = {
                  AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                  AV_CHANNELID: "5a0458dc28a06145e4519d21",
                  AV_URL: window.location.hostname,
                  cb: Date.now(),
                  AV_WIDTH: 640,
                  AV_HEIGHT: 480,
                  AV_CDIM2: this.publisherId,
                };
                return ""
                  .concat("https://go.aniview.com/api/adserver6/vast/", "?")
                  .concat(Qe(t));
              },
            },
          ]),
          t
        );
      })(),
      bt = (function () {
        function t(i) {
          e(this, t),
            (this.player = i),
            (this.thumbnails = []),
            (this.loaded = !1),
            (this.lastMouseMoveTime = Date.now()),
            (this.mouseDown = !1),
            (this.loadedImages = []),
            (this.elements = { thumb: {}, scrubbing: {} }),
            this.load();
        }
        return (
          i(t, [
            {
              key: "load",
              value: function () {
                var e = this;
                this.player.elements.display.seekTooltip &&
                  (this.player.elements.display.seekTooltip.hidden =
                    this.enabled),
                  this.enabled &&
                    this.getThumbnails().then(function () {
                      e.render(),
                        e.determineContainerAutoSizing(),
                        (e.loaded = !0);
                    });
              },
            },
            {
              key: "getThumbnails",
              value: function () {
                var e = this;
                return new Promise(function (t) {
                  var i = e.player.config.previewThumbnails.src;
                  if (W(i))
                    throw new Error(
                      "Missing previewThumbnails.src config attribute"
                    );
                  var n = (O(i) ? [i] : i).map(function (t) {
                    return e.getThumbnail(t);
                  });
                  Promise.all(n).then(function () {
                    e.thumbnails.sort(function (e, t) {
                      return e.height - t.height;
                    }),
                      e.player.debug.log("Preview thumbnails", e.thumbnails),
                      t();
                  });
                });
              },
            },
            {
              key: "getThumbnail",
              value: function (e) {
                var t = this;
                return new Promise(function (i) {
                  Re(e).then(function (n) {
                    var s,
                      o,
                      r = {
                        frames:
                          ((s = n),
                          (o = []),
                          s.split(/\r\n\r\n|\n\n|\r\r/).forEach(function (e) {
                            var t = {};
                            e.split(/\r\n|\n|\r/).forEach(function (e) {
                              if (_(t.startTime)) {
                                if (!W(e.trim()) && W(t.text)) {
                                  var i = e.trim().split("#xywh="),
                                    n = a(i, 1);
                                  if (((t.text = n[0]), i[1])) {
                                    var s = a(i[1].split(","), 4);
                                    (t.x = s[0]),
                                      (t.y = s[1]),
                                      (t.w = s[2]),
                                      (t.h = s[3]);
                                  }
                                }
                              } else {
                                var o = e.match(
                                  /([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/
                                );
                                o &&
                                  ((t.startTime =
                                    60 * Number(o[1] || 0) * 60 +
                                    60 * Number(o[2]) +
                                    Number(o[3]) +
                                    Number("0.".concat(o[4]))),
                                  (t.endTime =
                                    60 * Number(o[6] || 0) * 60 +
                                    60 * Number(o[7]) +
                                    Number(o[8]) +
                                    Number("0.".concat(o[9]))));
                              }
                            }),
                              t.text && o.push(t);
                          }),
                          o),
                        height: null,
                        urlPrefix: "",
                      };
                    r.frames[0].text.startsWith("/") ||
                      r.frames[0].text.startsWith("http://") ||
                      r.frames[0].text.startsWith("https://") ||
                      (r.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                    var l = new Image();
                    (l.onload = function () {
                      (r.height = l.naturalHeight),
                        (r.width = l.naturalWidth),
                        t.thumbnails.push(r),
                        i();
                    }),
                      (l.src = r.urlPrefix + r.frames[0].text);
                  });
                });
              },
            },
            {
              key: "startMove",
              value: function (e) {
                if (
                  this.loaded &&
                  R(e) &&
                  ["touchmove", "mousemove"].includes(e.type) &&
                  this.player.media.duration
                ) {
                  if ("touchmove" === e.type)
                    this.seekTime =
                      this.player.media.duration *
                      (this.player.elements.inputs.seek.value / 100);
                  else {
                    var t =
                        this.player.elements.progress.getBoundingClientRect(),
                      i = (100 / t.width) * (e.pageX - t.left);
                    (this.seekTime = this.player.media.duration * (i / 100)),
                      this.seekTime < 0 && (this.seekTime = 0),
                      this.seekTime > this.player.media.duration - 1 &&
                        (this.seekTime = this.player.media.duration - 1),
                      (this.mousePosX = e.pageX),
                      (this.elements.thumb.time.innerText = ze(this.seekTime));
                  }
                  this.showImageAtCurrentTime();
                }
              },
            },
            {
              key: "endMove",
              value: function () {
                this.toggleThumbContainer(!1, !0);
              },
            },
            {
              key: "startScrubbing",
              value: function (e) {
                (!1 !== e.button && 0 !== e.button) ||
                  ((this.mouseDown = !0),
                  this.player.media.duration &&
                    (this.toggleScrubbingContainer(!0),
                    this.toggleThumbContainer(!1, !0),
                    this.showImageAtCurrentTime()));
              },
            },
            {
              key: "endScrubbing",
              value: function () {
                var e = this;
                (this.mouseDown = !1),
                  Math.ceil(this.lastTime) ===
                  Math.ceil(this.player.media.currentTime)
                    ? this.toggleScrubbingContainer(!1)
                    : X.call(
                        this.player,
                        this.player.media,
                        "timeupdate",
                        function () {
                          e.mouseDown || e.toggleScrubbingContainer(!1);
                        }
                      );
              },
            },
            {
              key: "listeners",
              value: function () {
                var e = this;
                this.player.on("play", function () {
                  e.toggleThumbContainer(!1, !0);
                }),
                  this.player.on("seeked", function () {
                    e.toggleThumbContainer(!1);
                  }),
                  this.player.on("timeupdate", function () {
                    e.lastTime = e.player.media.currentTime;
                  });
              },
            },
            {
              key: "render",
              value: function () {
                (this.elements.thumb.container = ne("div", {
                  class:
                    this.player.config.classNames.previewThumbnails
                      .thumbContainer,
                })),
                  (this.elements.thumb.imageContainer = ne("div", {
                    class:
                      this.player.config.classNames.previewThumbnails
                        .imageContainer,
                  })),
                  this.elements.thumb.container.appendChild(
                    this.elements.thumb.imageContainer
                  );
                var e = ne("div", {
                  class:
                    this.player.config.classNames.previewThumbnails
                      .timeContainer,
                });
                (this.elements.thumb.time = ne("span", {}, "00:00")),
                  e.appendChild(this.elements.thumb.time),
                  this.elements.thumb.container.appendChild(e),
                  F(this.player.elements.progress) &&
                    this.player.elements.progress.appendChild(
                      this.elements.thumb.container
                    ),
                  (this.elements.scrubbing.container = ne("div", {
                    class:
                      this.player.config.classNames.previewThumbnails
                        .scrubbingContainer,
                  })),
                  this.player.elements.wrapper.appendChild(
                    this.elements.scrubbing.container
                  );
              },
            },
            {
              key: "showImageAtCurrentTime",
              value: function () {
                var e = this;
                this.mouseDown
                  ? this.setScrubbingContainerSize()
                  : this.setThumbContainerSizeAndPos();
                var t = this.thumbnails[0].frames.findIndex(function (t) {
                    return e.seekTime >= t.startTime && e.seekTime <= t.endTime;
                  }),
                  i = t >= 0,
                  n = 0;
                this.mouseDown || this.toggleThumbContainer(i),
                  i &&
                    (this.thumbnails.forEach(function (i, a) {
                      e.loadedImages.includes(i.frames[t].text) && (n = a);
                    }),
                    t !== this.showingThumb &&
                      ((this.showingThumb = t), this.loadImage(n)));
              },
            },
            {
              key: "loadImage",
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  i = this.showingThumb,
                  n = this.thumbnails[t],
                  a = n.urlPrefix,
                  s = n.frames[i],
                  o = n.frames[i].text,
                  r = a + o;
                if (
                  this.currentImageElement &&
                  this.currentImageElement.dataset.filename === o
                )
                  this.showImage(this.currentImageElement, s, t, i, o, !1),
                    (this.currentImageElement.dataset.index = i),
                    this.removeOldImages(this.currentImageElement);
                else {
                  this.loadingImage &&
                    this.usingSprites &&
                    (this.loadingImage.onload = null);
                  var l = new Image();
                  (l.src = r),
                    (l.dataset.index = i),
                    (l.dataset.filename = o),
                    (this.showingThumbFilename = o),
                    this.player.debug.log("Loading image: ".concat(r)),
                    (l.onload = function () {
                      return e.showImage(l, s, t, i, o, !0);
                    }),
                    (this.loadingImage = l),
                    this.removeOldImages(l);
                }
              },
            },
            {
              key: "showImage",
              value: function (e, t, i, n, a) {
                var s =
                  !(arguments.length > 5 && void 0 !== arguments[5]) ||
                  arguments[5];
                this.player.debug.log(
                  "Showing thumb: "
                    .concat(a, ". num: ")
                    .concat(n, ". qual: ")
                    .concat(i, ". newimg: ")
                    .concat(s)
                ),
                  this.setImageSizeAndOffset(e, t),
                  s &&
                    (this.currentImageContainer.appendChild(e),
                    (this.currentImageElement = e),
                    this.loadedImages.includes(a) || this.loadedImages.push(a)),
                  this.preloadNearby(n, !0)
                    .then(this.preloadNearby(n, !1))
                    .then(this.getHigherQuality(i, e, t, a));
              },
            },
            {
              key: "removeOldImages",
              value: function (e) {
                var t = this;
                Array.from(this.currentImageContainer.children).forEach(
                  function (i) {
                    if ("img" === i.tagName.toLowerCase()) {
                      var n = t.usingSprites ? 500 : 1e3;
                      if (
                        i.dataset.index !== e.dataset.index &&
                        !i.dataset.deleting
                      ) {
                        i.dataset.deleting = !0;
                        var a = t.currentImageContainer;
                        setTimeout(function () {
                          a.removeChild(i),
                            t.player.debug.log(
                              "Removing thumb: ".concat(i.dataset.filename)
                            );
                        }, n);
                      }
                    }
                  }
                );
              },
            },
            {
              key: "preloadNearby",
              value: function (e) {
                var t = this,
                  i =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                return new Promise(function (n) {
                  setTimeout(function () {
                    var a = t.thumbnails[0].frames[e].text;
                    if (t.showingThumbFilename === a) {
                      var s;
                      s = i
                        ? t.thumbnails[0].frames.slice(e)
                        : t.thumbnails[0].frames.slice(0, e).reverse();
                      var o = !1;
                      s.forEach(function (e) {
                        var i = e.text;
                        if (i !== a && !t.loadedImages.includes(i)) {
                          (o = !0),
                            t.player.debug.log(
                              "Preloading thumb filename: ".concat(i)
                            );
                          var s = t.thumbnails[0].urlPrefix + i,
                            r = new Image();
                          (r.src = s),
                            (r.onload = function () {
                              t.player.debug.log(
                                "Preloaded thumb filename: ".concat(i)
                              ),
                                t.loadedImages.includes(i) ||
                                  t.loadedImages.push(i),
                                n();
                            });
                        }
                      }),
                        o || n();
                    }
                  }, 300);
                });
              },
            },
            {
              key: "getHigherQuality",
              value: function (e, t, i, n) {
                var a = this;
                if (e < this.thumbnails.length - 1) {
                  var s = t.naturalHeight;
                  this.usingSprites && (s = i.h),
                    s < this.thumbContainerHeight &&
                      setTimeout(function () {
                        a.showingThumbFilename === n &&
                          (a.player.debug.log(
                            "Showing higher quality thumb for: ".concat(n)
                          ),
                          a.loadImage(e + 1));
                      }, 300);
                }
              },
            },
            {
              key: "toggleThumbContainer",
              value: function () {
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  i =
                    this.player.config.classNames.previewThumbnails
                      .thumbContainerShown;
                this.elements.thumb.container.classList.toggle(i, e),
                  !e &&
                    t &&
                    ((this.showingThumb = null),
                    (this.showingThumbFilename = null));
              },
            },
            {
              key: "toggleScrubbingContainer",
              value: function () {
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t =
                    this.player.config.classNames.previewThumbnails
                      .scrubbingContainerShown;
                this.elements.scrubbing.container.classList.toggle(t, e),
                  e ||
                    ((this.showingThumb = null),
                    (this.showingThumbFilename = null));
              },
            },
            {
              key: "determineContainerAutoSizing",
              value: function () {
                this.elements.thumb.imageContainer.clientHeight > 20 &&
                  (this.sizeSpecifiedInCSS = !0);
              },
            },
            {
              key: "setThumbContainerSizeAndPos",
              value: function () {
                if (!this.sizeSpecifiedInCSS) {
                  var e = Math.floor(
                    this.thumbContainerHeight * this.thumbAspectRatio
                  );
                  (this.elements.thumb.imageContainer.style.height = "".concat(
                    this.thumbContainerHeight,
                    "px"
                  )),
                    (this.elements.thumb.imageContainer.style.width = "".concat(
                      e,
                      "px"
                    ));
                }
                this.setThumbContainerPos();
              },
            },
            {
              key: "setThumbContainerPos",
              value: function () {
                var e = this.player.elements.progress.getBoundingClientRect(),
                  t = this.player.elements.container.getBoundingClientRect(),
                  i = this.elements.thumb.container,
                  n = t.left - e.left + 10,
                  a = t.right - e.left - i.clientWidth - 10,
                  s = this.mousePosX - e.left - i.clientWidth / 2;
                s < n && (s = n),
                  s > a && (s = a),
                  (i.style.left = "".concat(s, "px"));
              },
            },
            {
              key: "setScrubbingContainerSize",
              value: function () {
                (this.elements.scrubbing.container.style.width = "".concat(
                  this.player.media.clientWidth,
                  "px"
                )),
                  (this.elements.scrubbing.container.style.height = "".concat(
                    this.player.media.clientWidth / this.thumbAspectRatio,
                    "px"
                  ));
              },
            },
            {
              key: "setImageSizeAndOffset",
              value: function (e, t) {
                if (this.usingSprites) {
                  var i = this.thumbContainerHeight / t.h;
                  (e.style.height = "".concat(
                    Math.floor(e.naturalHeight * i),
                    "px"
                  )),
                    (e.style.width = "".concat(
                      Math.floor(e.naturalWidth * i),
                      "px"
                    )),
                    (e.style.left = "-".concat(t.x * i, "px")),
                    (e.style.top = "-".concat(t.y * i, "px"));
                }
              },
            },
            {
              key: "enabled",
              get: function () {
                return (
                  this.player.isHTML5 &&
                  this.player.isVideo &&
                  this.player.config.previewThumbnails.enabled
                );
              },
            },
            {
              key: "currentImageContainer",
              get: function () {
                return this.mouseDown
                  ? this.elements.scrubbing.container
                  : this.elements.thumb.imageContainer;
              },
            },
            {
              key: "usingSprites",
              get: function () {
                return Object.keys(this.thumbnails[0].frames[0]).includes("w");
              },
            },
            {
              key: "thumbAspectRatio",
              get: function () {
                return this.usingSprites
                  ? this.thumbnails[0].frames[0].w /
                      this.thumbnails[0].frames[0].h
                  : this.thumbnails[0].width / this.thumbnails[0].height;
              },
            },
            {
              key: "thumbContainerHeight",
              get: function () {
                return this.mouseDown
                  ? Math.floor(
                      this.player.media.clientWidth / this.thumbAspectRatio
                    )
                  : Math.floor(
                      this.player.media.clientWidth / this.thumbAspectRatio / 4
                    );
              },
            },
            {
              key: "currentImageElement",
              get: function () {
                return this.mouseDown
                  ? this.currentScrubbingImageElement
                  : this.currentThumbnailImageElement;
              },
              set: function (e) {
                this.mouseDown
                  ? (this.currentScrubbingImageElement = e)
                  : (this.currentThumbnailImageElement = e);
              },
            },
          ]),
          t
        );
      })(),
      kt = {
        insertElements: function (e, t) {
          var i = this;
          O(t)
            ? ae(e, this.media, { src: t })
            : D(t) &&
              t.forEach(function (t) {
                ae(e, i.media, t);
              });
        },
        change: function (e) {
          var t = this;
          Z(e, "sources.length")
            ? (xe.cancelRequests.call(this),
              this.destroy.call(
                this,
                function () {
                  (t.options.quality = []),
                    se(t.media),
                    (t.media = null),
                    F(t.elements.container) &&
                      t.elements.container.removeAttribute("class");
                  var i = e.sources,
                    n = e.type,
                    s = a(i, 1)[0],
                    o = s.provider,
                    r = void 0 === o ? Ze.html5 : o,
                    l = s.src,
                    c = "html5" === r ? n : "div",
                    u = "html5" === r ? {} : { src: l };
                  Object.assign(t, {
                    provider: r,
                    type: n,
                    supported: Ee.check(n, r, t.config.playsinline),
                    media: ne(c, u),
                  }),
                    t.elements.container.appendChild(t.media),
                    q(e.autoplay) && (t.config.autoplay = e.autoplay),
                    t.isHTML5 &&
                      (t.config.crossorigin &&
                        t.media.setAttribute("crossorigin", ""),
                      t.config.autoplay && t.media.setAttribute("autoplay", ""),
                      W(e.poster) || (t.poster = e.poster),
                      t.config.loop.active && t.media.setAttribute("loop", ""),
                      t.config.muted && t.media.setAttribute("muted", ""),
                      t.config.playsinline &&
                        t.media.setAttribute("playsinline", "")),
                    lt.addStyleHook.call(t),
                    t.isHTML5 && kt.insertElements.call(t, "source", i),
                    (t.config.title = e.title),
                    yt.setup.call(t),
                    t.isHTML5 &&
                      Object.keys(e).includes("tracks") &&
                      kt.insertElements.call(t, "track", e.tracks),
                    (t.isHTML5 || (t.isEmbed && !t.supported.ui)) &&
                      lt.build.call(t),
                    t.isHTML5 && t.media.load(),
                    t.previewThumbnails && t.previewThumbnails.load(),
                    t.fullscreen.update();
                },
                !0
              ))
            : this.debug.warn("Invalid source format");
        },
      };
    var wt,
      Tt = (function () {
        function t(i, n) {
          var a = this;
          if (
            (e(this, t),
            (this.timers = {}),
            (this.ready = !1),
            (this.loading = !1),
            (this.failed = !1),
            (this.touch = Ee.touch),
            (this.media = i),
            O(this.media) &&
              (this.media = document.querySelectorAll(this.media)),
            ((window.jQuery && this.media instanceof jQuery) ||
              j(this.media) ||
              D(this.media)) &&
              (this.media = this.media[0]),
            (this.config = ee(
              {},
              Je,
              t.defaults,
              n || {},
              (function () {
                try {
                  return JSON.parse(a.media.getAttribute("data-plyr-config"));
                } catch (e) {
                  return {};
                }
              })()
            )),
            (this.elements = {
              container: null,
              captions: null,
              buttons: {},
              display: {},
              progress: {},
              inputs: {},
              settings: { popup: null, menu: null, panels: {}, buttons: {} },
            }),
            (this.captions = {
              active: null,
              currentTrack: -1,
              meta: new WeakMap(),
            }),
            (this.fullscreen = { active: !1 }),
            (this.options = { speed: [], quality: [] }),
            (this.debug = new nt(this.config.debug)),
            this.debug.log("Config", this.config),
            this.debug.log("Support", Ee),
            !I(this.media) && F(this.media))
          )
            if (this.media.plyr) this.debug.warn("Target already setup");
            else if (this.config.enabled)
              if (Ee.check().api) {
                var s = this.media.cloneNode(!0);
                (s.autoplay = !1), (this.elements.original = s);
                var o = this.media.tagName.toLowerCase(),
                  r = null,
                  l = null;
                switch (o) {
                  case "div":
                    if (((r = this.media.querySelector("iframe")), F(r))) {
                      if (
                        ((l = Ye(r.getAttribute("src"))),
                        (this.provider = (function (e) {
                          return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
                            e
                          )
                            ? Ze.youtube
                            : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(
                                e
                              )
                            ? Ze.vimeo
                            : null;
                        })(l.toString())),
                        (this.elements.container = this.media),
                        (this.media = r),
                        (this.elements.container.className = ""),
                        l.search.length)
                      ) {
                        var c = ["1", "true"];
                        c.includes(l.searchParams.get("autoplay")) &&
                          (this.config.autoplay = !0),
                          c.includes(l.searchParams.get("loop")) &&
                            (this.config.loop.active = !0),
                          this.isYouTube
                            ? ((this.config.playsinline = c.includes(
                                l.searchParams.get("playsinline")
                              )),
                              (this.config.youtube.hl =
                                l.searchParams.get("hl")))
                            : (this.config.playsinline = !0);
                      }
                    } else
                      (this.provider = this.media.getAttribute(
                        this.config.attributes.embed.provider
                      )),
                        this.media.removeAttribute(
                          this.config.attributes.embed.provider
                        );
                    if (
                      W(this.provider) ||
                      !Object.keys(Ze).includes(this.provider)
                    )
                      return void this.debug.error(
                        "Setup failed: Invalid provider"
                      );
                    this.type = tt;
                    break;
                  case "video":
                  case "audio":
                    (this.type = o),
                      (this.provider = Ze.html5),
                      this.media.hasAttribute("crossorigin") &&
                        (this.config.crossorigin = !0),
                      this.media.hasAttribute("autoplay") &&
                        (this.config.autoplay = !0),
                      (this.media.hasAttribute("playsinline") ||
                        this.media.hasAttribute("webkit-playsinline")) &&
                        (this.config.playsinline = !0),
                      this.media.hasAttribute("muted") &&
                        (this.config.muted = !0),
                      this.media.hasAttribute("loop") &&
                        (this.config.loop.active = !0);
                    break;
                  default:
                    return void this.debug.error(
                      "Setup failed: unsupported type"
                    );
                }
                (this.supported = Ee.check(
                  this.type,
                  this.provider,
                  this.config.playsinline
                )),
                  this.supported.api
                    ? ((this.eventListeners = []),
                      (this.listeners = new ct(this)),
                      (this.storage = new Fe(this)),
                      (this.media.plyr = this),
                      F(this.elements.container) ||
                        ((this.elements.container = ne("div", { tabindex: 0 })),
                        te(this.media, this.elements.container)),
                      lt.addStyleHook.call(this),
                      yt.setup.call(this),
                      this.config.debug &&
                        Y.call(
                          this,
                          this.elements.container,
                          this.config.events.join(" "),
                          function (e) {
                            a.debug.log("event: ".concat(e.type));
                          }
                        ),
                      (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                        lt.build.call(this),
                      this.listeners.container(),
                      this.listeners.global(),
                      (this.fullscreen = new ot(this)),
                      this.config.ads.enabled && (this.ads = new vt(this)),
                      this.isHTML5 &&
                        this.config.autoplay &&
                        setTimeout(function () {
                          return a.play();
                        }, 10),
                      (this.lastSeekTime = 0),
                      this.config.previewThumbnails.enabled &&
                        (this.previewThumbnails = new bt(this)))
                    : this.debug.error("Setup failed: no support");
              } else this.debug.error("Setup failed: no support");
            else this.debug.error("Setup failed: disabled by config");
          else this.debug.error("Setup failed: no suitable element passed");
        }
        return (
          i(
            t,
            [
              {
                key: "play",
                value: function () {
                  var e = this;
                  return H(this.media.play)
                    ? (this.ads &&
                        this.ads.enabled &&
                        this.ads.managerPromise
                          .then(function () {
                            return e.ads.play();
                          })
                          .catch(function () {
                            return e.media.play();
                          }),
                      this.media.play())
                    : null;
                },
              },
              {
                key: "pause",
                value: function () {
                  this.playing && H(this.media.pause) && this.media.pause();
                },
              },
              {
                key: "togglePlay",
                value: function (e) {
                  (q(e) ? e : !this.playing) ? this.play() : this.pause();
                },
              },
              {
                key: "stop",
                value: function () {
                  this.isHTML5
                    ? (this.pause(), this.restart())
                    : H(this.media.stop) && this.media.stop();
                },
              },
              {
                key: "restart",
                value: function () {
                  this.currentTime = 0;
                },
              },
              {
                key: "rewind",
                value: function (e) {
                  this.currentTime =
                    this.currentTime - (_(e) ? e : this.config.seekTime);
                },
              },
              {
                key: "forward",
                value: function (e) {
                  this.currentTime =
                    this.currentTime + (_(e) ? e : this.config.seekTime);
                },
              },
              {
                key: "increaseVolume",
                value: function (e) {
                  var t = this.media.muted ? 0 : this.volume;
                  this.volume = t + (_(e) ? e : 0);
                },
              },
              {
                key: "decreaseVolume",
                value: function (e) {
                  this.increaseVolume(-e);
                },
              },
              {
                key: "toggleCaptions",
                value: function (e) {
                  Xe.toggle.call(this, e, !1);
                },
              },
              {
                key: "airplay",
                value: function () {
                  Ee.airplay && this.media.webkitShowPlaybackTargetPicker();
                },
              },
              {
                key: "toggleControls",
                value: function (e) {
                  if (this.supported.ui && !this.isAudio) {
                    var t = de(
                        this.elements.container,
                        this.config.classNames.hideControls
                      ),
                      i = void 0 === e ? void 0 : !e,
                      n = ue(
                        this.elements.container,
                        this.config.classNames.hideControls,
                        i
                      );
                    if (
                      (n &&
                        this.config.controls.includes("settings") &&
                        !W(this.config.settings) &&
                        Ke.toggleMenu.call(this, !1),
                      n !== t)
                    ) {
                      var a = n ? "controlshidden" : "controlsshown";
                      J.call(this, this.media, a);
                    }
                    return !n;
                  }
                  return !1;
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  Y.call(this, this.elements.container, e, t);
                },
              },
              {
                key: "once",
                value: function (e, t) {
                  X.call(this, this.elements.container, e, t);
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  Q(this.elements.container, e, t);
                },
              },
              {
                key: "destroy",
                value: function (e) {
                  var t = this,
                    i =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  if (this.ready) {
                    var n = function () {
                      (document.body.style.overflow = ""),
                        (t.embed = null),
                        i
                          ? (Object.keys(t.elements).length &&
                              (se(t.elements.buttons.play),
                              se(t.elements.captions),
                              se(t.elements.controls),
                              se(t.elements.wrapper),
                              (t.elements.buttons.play = null),
                              (t.elements.captions = null),
                              (t.elements.controls = null),
                              (t.elements.wrapper = null)),
                            H(e) && e())
                          : ($.call(t),
                            re(t.elements.original, t.elements.container),
                            J.call(t, t.elements.original, "destroyed", !0),
                            H(e) && e.call(t.elements.original),
                            (t.ready = !1),
                            setTimeout(function () {
                              (t.elements = null), (t.media = null);
                            }, 200));
                    };
                    this.stop(),
                      clearTimeout(this.timers.loading),
                      clearTimeout(this.timers.controls),
                      clearTimeout(this.timers.resized),
                      this.isHTML5
                        ? (lt.toggleNativeControls.call(this, !0), n())
                        : this.isYouTube
                        ? (clearInterval(this.timers.buffering),
                          clearInterval(this.timers.playing),
                          null !== this.embed &&
                            H(this.embed.destroy) &&
                            this.embed.destroy(),
                          n())
                        : this.isVimeo &&
                          (null !== this.embed && this.embed.unload().then(n),
                          setTimeout(n, 200));
                  }
                },
              },
              {
                key: "supports",
                value: function (e) {
                  return Ee.mime.call(this, e);
                },
              },
              {
                key: "isHTML5",
                get: function () {
                  return Boolean(this.provider === Ze.html5);
                },
              },
              {
                key: "isEmbed",
                get: function () {
                  return Boolean(this.isYouTube || this.isVimeo);
                },
              },
              {
                key: "isYouTube",
                get: function () {
                  return Boolean(this.provider === Ze.youtube);
                },
              },
              {
                key: "isVimeo",
                get: function () {
                  return Boolean(this.provider === Ze.vimeo);
                },
              },
              {
                key: "isVideo",
                get: function () {
                  return Boolean(this.type === tt);
                },
              },
              {
                key: "isAudio",
                get: function () {
                  return Boolean(this.type === et);
                },
              },
              {
                key: "playing",
                get: function () {
                  return Boolean(this.ready && !this.paused && !this.ended);
                },
              },
              {
                key: "paused",
                get: function () {
                  return Boolean(this.media.paused);
                },
              },
              {
                key: "stopped",
                get: function () {
                  return Boolean(this.paused && 0 === this.currentTime);
                },
              },
              {
                key: "ended",
                get: function () {
                  return Boolean(this.media.ended);
                },
              },
              {
                key: "currentTime",
                set: function (e) {
                  if (this.duration) {
                    var t = _(e) && e > 0;
                    (this.media.currentTime = t
                      ? Math.min(e, this.duration)
                      : 0),
                      this.debug.log(
                        "Seeking to ".concat(this.currentTime, " seconds")
                      );
                  }
                },
                get: function () {
                  return Number(this.media.currentTime);
                },
              },
              {
                key: "buffered",
                get: function () {
                  var e = this.media.buffered;
                  return _(e)
                    ? e
                    : e && e.length && this.duration > 0
                    ? e.end(0) / this.duration
                    : 0;
                },
              },
              {
                key: "seeking",
                get: function () {
                  return Boolean(this.media.seeking);
                },
              },
              {
                key: "duration",
                get: function () {
                  var e = parseFloat(this.config.duration),
                    t = (this.media || {}).duration,
                    i = _(t) && t !== 1 / 0 ? t : 0;
                  return e || i;
                },
              },
              {
                key: "volume",
                set: function (e) {
                  var t = e;
                  O(t) && (t = Number(t)),
                    _(t) || (t = this.storage.get("volume")),
                    _(t) || (t = this.config.volume),
                    t > 1 && (t = 1),
                    t < 0 && (t = 0),
                    (this.config.volume = t),
                    (this.media.volume = t),
                    !W(e) && this.muted && t > 0 && (this.muted = !1);
                },
                get: function () {
                  return Number(this.media.volume);
                },
              },
              {
                key: "muted",
                set: function (e) {
                  var t = e;
                  q(t) || (t = this.storage.get("muted")),
                    q(t) || (t = this.config.muted),
                    (this.config.muted = t),
                    (this.media.muted = t);
                },
                get: function () {
                  return Boolean(this.media.muted);
                },
              },
              {
                key: "hasAudio",
                get: function () {
                  return (
                    !this.isHTML5 ||
                    !!this.isAudio ||
                    Boolean(this.media.mozHasAudio) ||
                    Boolean(this.media.webkitAudioDecodedByteCount) ||
                    Boolean(
                      this.media.audioTracks && this.media.audioTracks.length
                    )
                  );
                },
              },
              {
                key: "speed",
                set: function (e) {
                  var t = this,
                    i = null;
                  _(e) && (i = e),
                    _(i) || (i = this.storage.get("speed")),
                    _(i) || (i = this.config.speed.selected);
                  var n = this.minimumSpeed,
                    a = this.maximumSpeed;
                  (i = (function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 255;
                    return Math.min(Math.max(e, t), i);
                  })(i, n, a)),
                    (this.config.speed.selected = i),
                    setTimeout(function () {
                      t.media.playbackRate = i;
                    }, 0);
                },
                get: function () {
                  return Number(this.media.playbackRate);
                },
              },
              {
                key: "minimumSpeed",
                get: function () {
                  return this.isYouTube
                    ? Math.min.apply(Math, s(this.options.speed))
                    : this.isVimeo
                    ? 0.5
                    : 0.0625;
                },
              },
              {
                key: "maximumSpeed",
                get: function () {
                  return this.isYouTube
                    ? Math.max.apply(Math, s(this.options.speed))
                    : this.isVimeo
                    ? 2
                    : 16;
                },
              },
              {
                key: "quality",
                set: function (e) {
                  var t = this.config.quality,
                    i = this.options.quality;
                  if (i.length) {
                    var n = [
                        !W(e) && Number(e),
                        this.storage.get("quality"),
                        t.selected,
                        t.default,
                      ].find(_),
                      a = !0;
                    if (!i.includes(n)) {
                      var s = (function (e, t) {
                        return D(e) && e.length
                          ? e.reduce(function (e, i) {
                              return Math.abs(i - t) < Math.abs(e - t) ? i : e;
                            })
                          : null;
                      })(i, n);
                      this.debug.warn(
                        "Unsupported quality option: "
                          .concat(n, ", using ")
                          .concat(s, " instead")
                      ),
                        (n = s),
                        (a = !1);
                    }
                    (t.selected = n),
                      (this.media.quality = n),
                      a && this.storage.set({ quality: n });
                  }
                },
                get: function () {
                  return this.media.quality;
                },
              },
              {
                key: "loop",
                set: function (e) {
                  var t = q(e) ? e : this.config.loop.active;
                  (this.config.loop.active = t), (this.media.loop = t);
                },
                get: function () {
                  return Boolean(this.media.loop);
                },
              },
              {
                key: "source",
                set: function (e) {
                  kt.change.call(this, e);
                },
                get: function () {
                  return this.media.currentSrc;
                },
              },
              {
                key: "download",
                get: function () {
                  var e = this.config.urls.download;
                  return U(e) ? e : this.source;
                },
                set: function (e) {
                  U(e) &&
                    ((this.config.urls.download = e),
                    Ke.setDownloadUrl.call(this));
                },
              },
              {
                key: "poster",
                set: function (e) {
                  this.isVideo
                    ? lt.setPoster.call(this, e, !1).catch(function () {})
                    : this.debug.warn("Poster can only be set for video");
                },
                get: function () {
                  return this.isVideo
                    ? this.media.getAttribute("poster")
                    : null;
                },
              },
              {
                key: "ratio",
                get: function () {
                  if (!this.isVideo) return null;
                  var e = Pe(Me.call(this));
                  return D(e) ? e.join(":") : e;
                },
                set: function (e) {
                  this.isVideo
                    ? O(e) && Se(e)
                      ? ((this.config.ratio = e), Ne.call(this))
                      : this.debug.error(
                          "Invalid aspect ratio specified (".concat(e, ")")
                        )
                    : this.debug.warn("Aspect ratio can only be set for video");
                },
              },
              {
                key: "autoplay",
                set: function (e) {
                  var t = q(e) ? e : this.config.autoplay;
                  this.config.autoplay = t;
                },
                get: function () {
                  return Boolean(this.config.autoplay);
                },
              },
              {
                key: "currentTrack",
                set: function (e) {
                  Xe.set.call(this, e, !1);
                },
                get: function () {
                  var e = this.captions,
                    t = e.toggled,
                    i = e.currentTrack;
                  return t ? i : -1;
                },
              },
              {
                key: "language",
                set: function (e) {
                  Xe.setLanguage.call(this, e, !1);
                },
                get: function () {
                  return (Xe.getCurrentTrack.call(this) || {}).language;
                },
              },
              {
                key: "pip",
                set: function (e) {
                  if (Ee.pip) {
                    var t = q(e) ? e : !this.pip;
                    H(this.media.webkitSetPresentationMode) &&
                      this.media.webkitSetPresentationMode(t ? $e : Ge),
                      H(this.media.requestPictureInPicture) &&
                        (!this.pip && t
                          ? this.media.requestPictureInPicture()
                          : this.pip && !t && document.exitPictureInPicture());
                  }
                },
                get: function () {
                  return Ee.pip
                    ? W(this.media.webkitPresentationMode)
                      ? this.media === document.pictureInPictureElement
                      : this.media.webkitPresentationMode === $e
                    : null;
                },
              },
            ],
            [
              {
                key: "supported",
                value: function (e, t, i) {
                  return Ee.check(e, t, i);
                },
              },
              {
                key: "loadSprite",
                value: function (e, t) {
                  return Ve(e, t);
                },
              },
              {
                key: "setup",
                value: function (e) {
                  var i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = null;
                  return (
                    O(e)
                      ? (n = Array.from(document.querySelectorAll(e)))
                      : j(e)
                      ? (n = Array.from(e))
                      : D(e) && (n = e.filter(F)),
                    W(n)
                      ? null
                      : n.map(function (e) {
                          return new t(e, i);
                        })
                  );
                },
              },
            ]
          ),
          t
        );
      })();
    return (Tt.defaults = ((wt = Je), JSON.parse(JSON.stringify(wt)))), Tt;
  });
