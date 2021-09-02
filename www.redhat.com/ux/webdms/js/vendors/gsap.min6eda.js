/* ========================================================================================== */
/*  Project: Studio - Web
/*  Author: Digital Business
/*  Date: Wed Aug 18 2021 17:07:22 GMT+0000 (Coordinated Universal Time)
/*  
/*  Copyright © 2021 Red Hat, Inc.
/*  https://www.redhat.com
/* ========================================================================================== */

/*!
 * GSAP 3.5.0
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (t) {
  "use strict";
  function e(t, e) {
    (t.prototype = Object.create(e.prototype)),
      ((t.prototype.constructor = t).__proto__ = e);
  }
  function r(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function i(t) {
    return "string" == typeof t;
  }
  function n(t) {
    return "function" == typeof t;
  }
  function s(t) {
    return "number" == typeof t;
  }
  function a(t) {
    return void 0 === t;
  }
  function o(t) {
    return "object" == typeof t;
  }
  function u(t) {
    return !1 !== t;
  }
  function h() {
    return "undefined" != typeof window;
  }
  function l(t) {
    return n(t) || i(t);
  }
  function f(t) {
    return (gt = fe(t, re)) && hr;
  }
  function p(t, e) {
    return !e && void 0;
  }
  function _(t, e) {
    return (t && (re[t] = e) && gt && (gt[t] = e)) || re;
  }
  function c() {
    return 0;
  }
  function d(t) {
    var e,
      r,
      i = t[0];
    if ((o(i) || n(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
      for (r = he.length; r-- && !he[r].targetTest(i); );
      e = he[r];
    }
    for (r = t.length; r--; )
      (t[r] && (t[r]._gsap || (t[r]._gsap = new Re(t[r], e)))) ||
        t.splice(r, 1);
    return t;
  }
  function m(t) {
    return t._gsap || d(me(t))[0]._gsap;
  }
  function g(t, e, r) {
    return (r = t[e]) && n(r)
      ? t[e]()
      : (a(r) && t.getAttribute && t.getAttribute(e)) || r;
  }
  function v(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }
  function y(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }
  function w(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
    return i < r;
  }
  function T(t, e, r) {
    var i,
      n = s(t[1]),
      a = (n ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[a];
    if ((n && (o.duration = t[1]), (o.parent = r), e)) {
      for (i = o; r && !("immediateRender" in i); )
        (i = r.vars.defaults || {}), (r = u(r.vars.inherit) && r.parent);
      (o.immediateRender = u(i.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = t[a - 1]);
    }
    return o;
  }
  function x() {
    var t,
      e,
      r = ne.length,
      i = ne.slice(0);
    for (se = {}, t = ne.length = 0; t < r; t++)
      (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }
  function b(t, e, r, i) {
    ne.length && x(), t.render(e, r, i), ne.length && x();
  }
  function O(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(ee).length < 2
      ? e
      : i(t)
      ? t.trim()
      : t;
  }
  function M(t) {
    return t;
  }
  function k(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  }
  function C(t, e) {
    for (var r in e)
      r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
  }
  function A(t, e) {
    for (var r in e) t[r] = o(e[r]) ? A(t[r] || (t[r] = {}), e[r]) : e[r];
    return t;
  }
  function D(t, e) {
    var r,
      i = {};
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  }
  function S(t) {
    var e = t.parent || _t,
      r = t.keyframes ? C : k;
    if (u(t.inherit))
      for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  }
  function P(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
      s = e._next;
    n ? (n._next = s) : t[r] === e && (t[r] = s),
      s ? (s._prev = n) : t[i] === e && (t[i] = n),
      (e._next = e._prev = e.parent = null);
  }
  function z(t, e) {
    !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t),
      (t._act = 0);
  }
  function R(t, e) {
    if (!e || e._end > t._dur || e._start < 0)
      for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
    return t;
  }
  function F(t) {
    return t._repeat ? pe(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  }
  function E(t, e) {
    return (
      (t - e._start) * e._ts +
      (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  }
  function B(t) {
    return (t._end = y(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || Xt) || 0)
    ));
  }
  function L(t, e) {
    var r = t._dp;
    return (
      r &&
        r.smoothChildTiming &&
        t._ts &&
        ((t._start = y(
          t._dp._time -
            (0 < t._ts
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        B(t),
        r._dirty || R(r, t)),
      t
    );
  }
  function I(t, e) {
    var r;
    if (
      ((e._time || (e._initted && !e._dur)) &&
        ((r = E(t.rawTime(), e)),
        (!e._dur || ce(0, e.totalDuration(), r) - e._tTime > Xt) &&
          e.render(r, !0)),
      R(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (r = t; r._dp; )
          0 <= r.rawTime() && r.totalTime(r._tTime), (r = r._dp);
      t._zTime = -Xt;
    }
  }
  function Y(t, e, r, i) {
    return (
      e.parent && z(e),
      (e._start = y(r + e._delay)),
      (e._end = y(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      (function (t, e, r, i, n) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var s,
          a = t[i];
        if (n) for (s = e[n]; a && a[n] > s; ) a = a._prev;
        a
          ? ((e._next = a._next), (a._next = e))
          : ((e._next = t[r]), (t[r] = e)),
          e._next ? (e._next._prev = e) : (t[i] = e),
          (e._prev = a),
          (e.parent = e._dp = t);
      })(t, e, "_first", "_last", t._sort ? "_start" : 0),
      (t._recent = e),
      i || I(t, e),
      t
    );
  }
  function U(t, e) {
    return re.ScrollTrigger ? re.ScrollTrigger.create(e, t) : void 0;
  }
  function X(t, e, r, i) {
    return (
      Ue(t, e),
      t._initted
        ? !r &&
          t._pt &&
          ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
          yt !== be.frame
          ? (ne.push(t), (t._lazy = [e, i]), 1)
          : void 0
        : 1
    );
  }
  function N(t, e, r, i) {
    var n = t._repeat,
      s = y(e) || 0,
      a = t._tTime / t._tDur;
    return (
      a && !i && (t._time *= s / t._dur),
      (t._dur = s),
      (t._tDur = n ? (n < 0 ? 1e10 : y(s * (n + 1) + t._rDelay * n)) : s),
      a && !i ? L(t, (t._tTime = t._tDur * a)) : t.parent && B(t),
      r || R(t.parent, t),
      t
    );
  }
  function V(t) {
    return t instanceof Be ? R(t) : N(t, t._dur);
  }
  function q(t, e) {
    var r,
      n,
      s = t.labels,
      a = t._recent || _e,
      o = t.duration() >= Ut ? a.endTime(!1) : t._dur;
    return i(e) && (isNaN(e) || e in s)
      ? "<" === (r = e.charAt(0)) || ">" === r
        ? ("<" === r ? a._start : a.endTime(0 <= a._repeat)) +
          (parseFloat(e.substr(1)) || 0)
        : (r = e.indexOf("=")) < 0
        ? (e in s || (s[e] = o), s[e])
        : ((n = +(e.charAt(r - 1) + e.substr(r + 1))),
          1 < r ? q(t, e.substr(0, r - 1)) + n : o + n)
      : null == e
      ? o
      : +e;
  }
  function j(t, e) {
    return t || 0 === t ? e(t) : e;
  }
  function Q(t) {
    return (t + "").substr((parseFloat(t) + "").length);
  }
  function G(t, e) {
    return (
      t &&
      o(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && o(t[0]))) &&
      !t.nodeType &&
      t !== ct
    );
  }
  function W(t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  }
  function Z(t) {
    if (n(t)) return t;
    var e = o(t) ? t : { each: t },
      r = De(e.ease),
      s = e.from || 0,
      a = parseFloat(e.base) || 0,
      u = {},
      h = 0 < s && s < 1,
      l = isNaN(s) || h,
      f = e.axis,
      p = s,
      _ = s;
    return (
      i(s)
        ? (p = _ = { center: 0.5, edges: 0.5, end: 1 }[s] || 0)
        : !h && l && ((p = s[0]), (_ = s[1])),
      function (t, i, n) {
        var o,
          h,
          c,
          d,
          m,
          g,
          v,
          w,
          T,
          x = (n || e).length,
          b = u[x];
        if (!b) {
          if (!(T = "auto" === e.grid ? 0 : (e.grid || [1, Ut])[1])) {
            for (
              v = -Ut;
              v < (v = n[T++].getBoundingClientRect().left) && T < x;

            );
            T--;
          }
          for (
            b = u[x] = [],
              o = l ? Math.min(T, x) * p - 0.5 : s % T,
              h = l ? (x * _) / T - 0.5 : (s / T) | 0,
              w = Ut,
              g = v = 0;
            g < x;
            g++
          )
            (c = (g % T) - o),
              (d = h - ((g / T) | 0)),
              (b[g] = m = f ? Math.abs("y" === f ? d : c) : jt(c * c + d * d)),
              v < m && (v = m),
              m < w && (w = m);
          "random" === s && W(b),
            (b.max = v - w),
            (b.min = w),
            (b.v = x =
              (parseFloat(e.amount) ||
                parseFloat(e.each) *
                  (x < T
                    ? x - 1
                    : f
                    ? "y" === f
                      ? x / T
                      : T
                    : Math.max(T, x / T)) ||
                0) * ("edges" === s ? -1 : 1)),
            (b.b = x < 0 ? a - x : a),
            (b.u = Q(e.amount || e.each) || 0),
            (r = r && x < 0 ? Ae(r) : r);
        }
        return (
          (x = (b[t] - b.min) / b.max || 0), y(b.b + (r ? r(x) : x) * b.v) + b.u
        );
      }
    );
  }
  function H(t) {
    var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
    return function (r) {
      return (
        Math.floor(Math.round(parseFloat(r) / t) * t * e) / e +
        (s(r) ? 0 : Q(r))
      );
    };
  }
  function $(t, e) {
    var r,
      i,
      a = Zt(t);
    return (
      !a &&
        o(t) &&
        ((r = a = t.radius || Ut),
        t.values
          ? ((t = me(t.values)), (i = !s(t[0])) && (r *= r))
          : (t = H(t.increment))),
      j(
        e,
        a
          ? n(t)
            ? function (e) {
                return (i = t(e)), Math.abs(i - e) <= r ? i : e;
              }
            : function (e) {
                for (
                  var n,
                    a,
                    o = parseFloat(i ? e.x : e),
                    u = parseFloat(i ? e.y : 0),
                    h = Ut,
                    l = 0,
                    f = t.length;
                  f--;

                )
                  (n = i
                    ? (n = t[f].x - o) * n + (a = t[f].y - u) * a
                    : Math.abs(t[f] - o)) < h && ((h = n), (l = f));
                return (
                  (l = !r || h <= r ? t[l] : e),
                  i || l === e || s(e) ? l : l + Q(e)
                );
              }
          : H(t)
      )
    );
  }
  function J(t, e, r, i) {
    return j(Zt(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return Zt(t)
        ? t[~~(Math.random() * t.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(Math.round((t + Math.random() * (e - t)) / r) * r * i) /
              i;
    });
  }
  function K(t, e, r) {
    return j(r, function (r) {
      return t[~~e(r)];
    });
  }
  function tt(t) {
    for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
      (i = t.indexOf(")", e)),
        (n = "[" === t.charAt(e + 7)),
        (r = t.substr(e + 7, i - e - 7).match(n ? ee : Ht)),
        (a +=
          t.substr(s, e - s) + J(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
        (s = i + 1);
    return a + t.substr(s, t.length - s);
  }
  function et(t, e, r) {
    var i,
      n,
      s,
      a = t.labels,
      o = Ut;
    for (i in a)
      (n = a[i] - e) < 0 == !!r &&
        n &&
        o > (n = Math.abs(n)) &&
        ((s = i), (o = n));
    return s;
  }
  function rt(t) {
    return z(t), t.progress() < 1 && ve(t, "onInterrupt"), t;
  }
  function it(t, e, r) {
    return (
      ((6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1
        ? e + (r - e) * t * 6
        : t < 0.5
        ? r
        : 3 * t < 2
        ? e + (r - e) * (2 / 3 - t) * 6
        : e) *
        ye +
        0.5) |
      0
    );
  }
  function nt(t, e, r) {
    var i,
      n,
      a,
      o,
      u,
      h,
      l,
      f,
      p,
      _,
      c = t ? (s(t) ? [t >> 16, (t >> 8) & ye, t & ye] : 0) : we.black;
    if (!c) {
      if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), we[t]))
        c = we[t];
      else if ("#" === t.charAt(0))
        4 === t.length &&
          (t =
            "#" +
            (i = t.charAt(1)) +
            i +
            (n = t.charAt(2)) +
            n +
            (a = t.charAt(3)) +
            a),
          (c = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & ye, t & ye]);
      else if ("hsl" === t.substr(0, 3))
        if (((c = _ = t.match(Ht)), e)) {
          if (~t.indexOf("="))
            return (c = t.match($t)), r && c.length < 4 && (c[3] = 1), c;
        } else
          (o = (+c[0] % 360) / 360),
            (u = c[1] / 100),
            (i =
              2 * (h = c[2] / 100) -
              (n = h <= 0.5 ? h * (u + 1) : h + u - h * u)),
            3 < c.length && (c[3] *= 1),
            (c[0] = it(o + 1 / 3, i, n)),
            (c[1] = it(o, i, n)),
            (c[2] = it(o - 1 / 3, i, n));
      else c = t.match(Ht) || we.transparent;
      c = c.map(Number);
    }
    return (
      e &&
        !_ &&
        ((i = c[0] / ye),
        (n = c[1] / ye),
        (a = c[2] / ye),
        (h = ((l = Math.max(i, n, a)) + (f = Math.min(i, n, a))) / 2),
        l === f
          ? (o = u = 0)
          : ((p = l - f),
            (u = 0.5 < h ? p / (2 - l - f) : p / (l + f)),
            (o =
              l === i
                ? (n - a) / p + (n < a ? 6 : 0)
                : l === n
                ? (a - i) / p + 2
                : (i - n) / p + 4),
            (o *= 60)),
        (c[0] = ~~(o + 0.5)),
        (c[1] = ~~(100 * u + 0.5)),
        (c[2] = ~~(100 * h + 0.5))),
      r && c.length < 4 && (c[3] = 1),
      c
    );
  }
  function st(t) {
    var e = [],
      r = [],
      i = -1;
    return (
      t.split(Te).forEach(function (t) {
        var n = t.match(Jt) || [];
        e.push.apply(e, n), r.push((i += n.length + 1));
      }),
      (e.c = r),
      e
    );
  }
  function at(t, e, r) {
    var i,
      n,
      s,
      a,
      o = "",
      u = (t + o).match(Te),
      h = e ? "hsla(" : "rgba(",
      l = 0;
    if (!u) return t;
    if (
      ((u = u.map(function (t) {
        return (
          (t = nt(t, e, 1)) &&
          h +
            (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) +
            ")"
        );
      })),
      r && ((s = st(t)), (i = r.c).join(o) !== s.c.join(o)))
    )
      for (a = (n = t.replace(Te, "1").split(Jt)).length - 1; l < a; l++)
        o +=
          n[l] +
          (~i.indexOf(l)
            ? u.shift() || h + "0,0,0,0)"
            : (s.length ? s : u.length ? u : r).shift());
    if (!n) for (a = (n = t.split(Te)).length - 1; l < a; l++) o += n[l] + u[l];
    return o + n[a];
  }
  function ot(t) {
    var e,
      r = t.join(" ");
    if (((Te.lastIndex = 0), Te.test(r)))
      return (
        (e = xe.test(r)),
        (t[1] = at(t[1], e)),
        (t[0] = at(t[0], e, st(t[1]))),
        !0
      );
  }
  function ut(t, e) {
    for (var r, i = t._first; i; )
      i instanceof Be
        ? ut(i, e)
        : !i.vars.yoyoEase ||
          (i._yoyo && i._repeat) ||
          i._yoyo === e ||
          (i.timeline
            ? ut(i.timeline, e)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = e))),
        (i = i._next);
  }
  function ht(t, e, r, i) {
    void 0 === r &&
      (r = function (t) {
        return 1 - e(1 - t);
      }),
      void 0 === i &&
        (i = function (t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var n,
      s = { easeIn: e, easeOut: r, easeInOut: i };
    return (
      v(t, function (t) {
        for (var e in ((Me[t] = re[t] = s), (Me[(n = t.toLowerCase())] = r), s))
          Me[
            n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
          ] = Me[t + "." + e] = s[e];
      }),
      s
    );
  }
  function lt(t) {
    return function (e) {
      return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
    };
  }
  function ft(t, e, r) {
    function i(t) {
      return 1 === t ? 1 : n * Math.pow(2, -10 * t) * Gt((t - a) * s) + 1;
    }
    var n = 1 <= e ? e : 1,
      s = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
      a = (s / Nt) * (Math.asin(1 / n) || 0),
      o =
        "out" === t
          ? i
          : "in" === t
          ? function (t) {
              return 1 - i(1 - t);
            }
          : lt(i);
    return (
      (s = Nt / s),
      (o.config = function (e, r) {
        return ft(t, e, r);
      }),
      o
    );
  }
  function pt(t, e) {
    function r(t) {
      return t ? --t * t * ((e + 1) * t + e) + 1 : 0;
    }
    void 0 === e && (e = 1.70158);
    var i =
      "out" === t
        ? r
        : "in" === t
        ? function (t) {
            return 1 - r(1 - t);
          }
        : lt(r);
    return (
      (i.config = function (e) {
        return pt(t, e);
      }),
      i
    );
  }
  var _t,
    ct,
    dt,
    mt,
    gt,
    vt,
    yt,
    wt,
    Tt,
    xt,
    bt,
    Ot,
    Mt,
    kt,
    Ct,
    At,
    Dt,
    St,
    Pt,
    zt,
    Rt,
    Ft,
    Et,
    Bt,
    Lt,
    It = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Yt = { duration: 0.5, overwrite: !1, delay: 0 },
    Ut = 1e8,
    Xt = 1 / Ut,
    Nt = 2 * Math.PI,
    Vt = Nt / 4,
    qt = 0,
    jt = Math.sqrt,
    Qt = Math.cos,
    Gt = Math.sin,
    Wt = "function" == typeof ArrayBuffer ? ArrayBuffer.isView : function () {},
    Zt = Array.isArray,
    Ht = /(?:-?\.?\d|\.)+/gi,
    $t = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
    Jt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Kt = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
    te = /[+-]=-?[\.\d]+/,
    ee = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
    re = {},
    ie = {},
    ne = [],
    se = {},
    ae = {},
    oe = {},
    ue = 30,
    he = [],
    le = "",
    fe = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    pe = function (t, e) {
      return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
    },
    _e = { _start: 0, endTime: c },
    ce = function (t, e, r) {
      return r < t ? t : e < r ? e : r;
    },
    de = [].slice,
    me = function (t, e) {
      return !i(t) || e || (!dt && Oe())
        ? Zt(t)
          ? (function (t, e, r) {
              return (
                void 0 === r && (r = []),
                t.forEach(function (t) {
                  return (i(t) && !e) || G(t, 1)
                    ? r.push.apply(r, me(t))
                    : r.push(t);
                }) || r
              );
            })(t, e)
          : G(t)
          ? de.call(t, 0)
          : t
          ? [t]
          : []
        : de.call(mt.querySelectorAll(t), 0);
    },
    ge = function (t, e, r, i, n) {
      var s = e - t,
        a = i - r;
      return j(n, function (e) {
        return r + (((e - t) / s) * a || 0);
      });
    },
    ve = function (t, e, r) {
      var i,
        n,
        s = t.vars,
        a = s[e];
      if (a)
        return (
          (i = s[e + "Params"]),
          (n = s.callbackScope || t),
          r && ne.length && x(),
          i ? a.apply(n, i) : a.call(n)
        );
    },
    ye = 255,
    we = {
      aqua: [0, ye, ye],
      lime: [0, ye, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, ye],
      navy: [0, 0, 128],
      white: [ye, ye, ye],
      olive: [128, 128, 0],
      yellow: [ye, ye, 0],
      orange: [ye, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [ye, 0, 0],
      pink: [ye, 192, 203],
      cyan: [0, ye, ye],
      transparent: [ye, ye, ye, 0],
    },
    Te = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
      for (t in we) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    xe = /hsl[a]?\(/,
    be =
      ((At = Date.now),
      (Dt = 500),
      (St = 33),
      (Pt = At()),
      (zt = Pt),
      (Ft = Rt = 1e3 / 240),
      (Mt = {
        time: 0,
        frame: 0,
        tick: function () {
          Se(!0);
        },
        deltaRatio: function (t) {
          return kt / (1e3 / (t || 60));
        },
        wake: function () {
          vt &&
            (!dt &&
              h() &&
              ((ct = dt = window),
              (mt = ct.document || {}),
              (re.gsap = hr),
              (ct.gsapVersions || (ct.gsapVersions = [])).push(hr.version),
              f(gt || ct.GreenSockGlobals || (!ct.gsap && ct) || {}),
              (Ot = ct.requestAnimationFrame)),
            xt && Mt.sleep(),
            (bt =
              Ot ||
              function (t) {
                return setTimeout(t, (Ft - 1e3 * Mt.time + 1) | 0);
              }),
            (Tt = 1),
            Se(2));
        },
        sleep: function () {
          (Ot ? ct.cancelAnimationFrame : clearTimeout)(xt), (Tt = 0), (bt = c);
        },
        lagSmoothing: function (t, e) {
          (Dt = t || 1e8), (St = Math.min(e, Dt, 0));
        },
        fps: function (t) {
          (Rt = 1e3 / (t || 240)), (Ft = 1e3 * Mt.time + Rt);
        },
        add: function (t) {
          Et.indexOf(t) < 0 && Et.push(t), Oe();
        },
        remove: function (t) {
          var e;
          ~(e = Et.indexOf(t)) && Et.splice(e, 1) && e <= Ct && Ct--;
        },
        _listeners: (Et = []),
      })),
    Oe = function () {
      return !Tt && be.wake();
    },
    Me = {},
    ke = /^[\d.\-M][\d.\-,\s]/,
    Ce = /["']/g,
    Ae = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    De = function (t, e) {
      return (
        (t &&
          (n(t)
            ? t
            : Me[t] ||
              (function (t) {
                var e = (t + "").split("("),
                  r = Me[e[0]];
                return r && 1 < e.length && r.config
                  ? r.config.apply(
                      null,
                      ~t.indexOf("{")
                        ? [
                            (function (t) {
                              for (
                                var e,
                                  r,
                                  i,
                                  n = {},
                                  s = t.substr(1, t.length - 3).split(":"),
                                  a = s[0],
                                  o = 1,
                                  u = s.length;
                                o < u;
                                o++
                              )
                                (r = s[o]),
                                  (e =
                                    o !== u - 1
                                      ? r.lastIndexOf(",")
                                      : r.length),
                                  (i = r.substr(0, e)),
                                  (n[a] = isNaN(i)
                                    ? i.replace(Ce, "").trim()
                                    : +i),
                                  (a = r.substr(e + 1).trim());
                              return n;
                            })(e[1]),
                          ]
                        : (function (t) {
                            var e = t.indexOf("(") + 1,
                              r = t.indexOf(")"),
                              i = t.indexOf("(", e);
                            return t.substring(
                              e,
                              ~i && i < r ? t.indexOf(")", r + 1) : r
                            );
                          })(t)
                            .split(",")
                            .map(O)
                    )
                  : Me._CE && ke.test(t)
                  ? Me._CE("", t)
                  : r;
              })(t))) ||
        e
      );
    };
  function Se(t) {
    var e,
      r,
      i,
      n,
      s = At() - zt,
      a = !0 === t;
    if (
      (Dt < s && (Pt += s - St),
      (0 < (e = (i = (zt += s) - Pt) - Ft) || a) &&
        ((n = ++Mt.frame),
        (kt = i - 1e3 * Mt.time),
        (Mt.time = i /= 1e3),
        (Ft += e + (Rt <= e ? 4 : Rt - e)),
        (r = 1)),
      a || (xt = bt(Se)),
      r)
    )
      for (Ct = 0; Ct < Et.length; Ct++) Et[Ct](i, kt, n, t);
  }
  function Pe(t) {
    return t < Lt
      ? Bt * t * t
      : t < 0.7272727272727273
      ? Bt * Math.pow(t - 1.5 / 2.75, 2) + 0.75
      : t < 0.9090909090909092
      ? Bt * (t -= 2.25 / 2.75) * t + 0.9375
      : Bt * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
  }
  v("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    ht(
      t + ",Power" + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, r) / 2
          : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (Me.Linear.easeNone = Me.none = Me.Linear.easeIn),
    ht("Elastic", ft("in"), ft("out"), ft()),
    (Bt = 7.5625),
    (Lt = 1 / 2.75),
    ht(
      "Bounce",
      function (t) {
        return 1 - Pe(1 - t);
      },
      Pe
    ),
    ht("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    ht("Circ", function (t) {
      return -(jt(1 - t * t) - 1);
    }),
    ht("Sine", function (t) {
      return 1 === t ? 1 : 1 - Qt(t * Vt);
    }),
    ht("Back", pt("in"), pt("out"), pt()),
    (Me.SteppedEase =
      Me.steps =
      re.SteppedEase =
        {
          config: function (t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
              i = t + (e ? 0 : 1),
              n = e ? 1 : 0;
            return function (t) {
              return (((i * ce(0, 0.99999999, t)) | 0) + n) * r;
            };
          },
        }),
    (Yt.ease = Me["quad.out"]),
    v(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (le += t + "," + t + "Params,");
      }
    );
  var ze,
    Re = function (t, e) {
      (this.id = qt++),
        ((t._gsap = this).target = t),
        (this.harness = e),
        (this.get = e ? e.get : g),
        (this.set = e ? e.getSetter : He);
    },
    Fe =
      (((ze = Ee.prototype).delay = function (t) {
        return t || 0 === t
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (ze.duration = function (t) {
        return arguments.length
          ? this.totalDuration(
              0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t
            )
          : this.totalDuration() && this._dur;
      }),
      (ze.totalDuration = function (t) {
        return arguments.length
          ? ((this._dirty = 0),
            N(
              this,
              this._repeat < 0
                ? t
                : (t - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (ze.totalTime = function (t, e) {
        if ((Oe(), !arguments.length)) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (L(this, t); r.parent; )
            r.parent._time !==
              r._start +
                (0 <= r._ts
                  ? r._tTime / r._ts
                  : (r.totalDuration() - r._tTime) / -r._ts) &&
              r.totalTime(r._tTime, !0),
              (r = r.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((0 < this._ts && t < this._tDur) ||
              (this._ts < 0 && 0 < t) ||
              (!this._tDur && !t)) &&
            Y(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !e) ||
            (this._initted && Math.abs(this._zTime) === Xt) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), b(this, t, e)),
          this
        );
      }),
      (ze.time = function (t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + F(this)) % this._dur ||
                (t ? this._dur : 0),
              e
            )
          : this._time;
      }),
      (ze.totalProgress = function (t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (ze.progress = function (t, e) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                F(this),
              e
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (ze.iteration = function (t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * r, e)
          : this._repeat
          ? pe(this._tTime, r) + 1
          : 1;
      }),
      (ze.timeScale = function (t) {
        if (!arguments.length) return this._rts === -Xt ? 0 : this._rts;
        if (this._rts === t) return this;
        var e =
          this.parent && this._ts ? E(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -Xt ? 0 : this._rts),
          (function (t) {
            for (var e = t.parent; e && e.parent; )
              (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          })(this.totalTime(ce(-this._delay, this._tDur, e), !0))
        );
      }),
      (ze.paused = function (t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t)
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Oe(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      (this._tTime -= Xt) &&
                      Math.abs(this._zTime) !== Xt
                  ))),
            this)
          : this._ps;
      }),
      (ze.startTime = function (t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return (
            !e || (!e._sort && this.parent) || Y(e, this, t - this._delay), this
          );
        }
        return this._start;
      }),
      (ze.endTime = function (t) {
        return (
          this._start +
          (u(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        );
      }),
      (ze.rawTime = function (t) {
        var e = this.parent || this._dp;
        return e
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? E(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (ze.globalTime = function (t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
          (r = e._start + r / (e._ts || 1)), (e = e._dp);
        return r;
      }),
      (ze.repeat = function (t) {
        return arguments.length ? ((this._repeat = t), V(this)) : this._repeat;
      }),
      (ze.repeatDelay = function (t) {
        return arguments.length ? ((this._rDelay = t), V(this)) : this._rDelay;
      }),
      (ze.yoyo = function (t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (ze.seek = function (t, e) {
        return this.totalTime(q(this, t), u(e));
      }),
      (ze.restart = function (t, e) {
        return this.play().totalTime(t ? -this._delay : 0, u(e));
      }),
      (ze.play = function (t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (ze.reverse = function (t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (ze.pause = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (ze.resume = function () {
        return this.paused(!1);
      }),
      (ze.reversed = function (t) {
        return arguments.length
          ? (!!t !== this.reversed() &&
              this.timeScale(-this._rts || (t ? -Xt : 0)),
            this)
          : this._rts < 0;
      }),
      (ze.invalidate = function () {
        return (this._initted = 0), (this._zTime = -Xt), this;
      }),
      (ze.isActive = function () {
        var t,
          e = this.parent || this._dp,
          r = this._start;
        return !(
          e &&
          !(
            this._ts &&
            this._initted &&
            e.isActive() &&
            (t = e.rawTime(!0)) >= r &&
            t < this.endTime(!0) - Xt
          )
        );
      }),
      (ze.eventCallback = function (t, e, r) {
        var i = this.vars;
        return 1 < arguments.length
          ? (e
              ? ((i[t] = e),
                r && (i[t + "Params"] = r),
                "onUpdate" === t && (this._onUpdate = e))
              : delete i[t],
            this)
          : i[t];
      }),
      (ze.then = function (t) {
        var e = this;
        return new Promise(function (r) {
          function i() {
            var t = e.then;
            (e.then = null),
              n(s) && (s = s(e)) && (s.then || s === e) && (e.then = t),
              r(s),
              (e.then = t);
          }
          var s = n(t) ? t : M;
          (e._initted && 1 === e.totalProgress() && 0 <= e._ts) ||
          (!e._tTime && e._ts < 0)
            ? i()
            : (e._prom = i);
        });
      }),
      (ze.kill = function () {
        rt(this);
      }),
      Ee);
  function Ee(t, e) {
    var r = t.parent || _t;
    (this.vars = t),
      (this._delay = +t.delay || 0),
      (this._repeat = t.repeat || 0) &&
        ((this._rDelay = t.repeatDelay || 0),
        (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
      (this._ts = 1),
      N(this, +t.duration, 1, 1),
      (this.data = t.data),
      Tt || be.wake(),
      r && Y(r, this, e || 0 === e ? e : r._time, 1),
      t.reversed && this.reverse(),
      t.paused && this.paused(!0);
  }
  k(Fe.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -Xt,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Be = (function (t) {
    function a(e, i) {
      var n;
      return (
        void 0 === e && (e = {}),
        ((n = t.call(this, e, i) || this).labels = {}),
        (n.smoothChildTiming = !!e.smoothChildTiming),
        (n.autoRemoveChildren = !!e.autoRemoveChildren),
        (n._sort = u(e.sortChildren)),
        n.parent && I(n.parent, r(n)),
        e.scrollTrigger && U(r(n), e.scrollTrigger),
        n
      );
    }
    e(a, t);
    var o = a.prototype;
    return (
      (o.to = function (t, e, r, i) {
        return new qe(t, T(arguments, 0, this), q(this, s(e) ? i : r)), this;
      }),
      (o.from = function (t, e, r, i) {
        return new qe(t, T(arguments, 1, this), q(this, s(e) ? i : r)), this;
      }),
      (o.fromTo = function (t, e, r, i, n) {
        return new qe(t, T(arguments, 2, this), q(this, s(e) ? n : i)), this;
      }),
      (o.set = function (t, e, r) {
        return (
          (e.duration = 0),
          (e.parent = this),
          S(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new qe(t, e, q(this, r), 1),
          this
        );
      }),
      (o.call = function (t, e, r) {
        return Y(this, qe.delayedCall(0, t, e), q(this, r));
      }),
      (o.staggerTo = function (t, e, r, i, n, s, a) {
        return (
          (r.duration = e),
          (r.stagger = r.stagger || i),
          (r.onComplete = s),
          (r.onCompleteParams = a),
          (r.parent = this),
          new qe(t, r, q(this, n)),
          this
        );
      }),
      (o.staggerFrom = function (t, e, r, i, n, s, a) {
        return (
          (r.runBackwards = 1),
          (S(r).immediateRender = u(r.immediateRender)),
          this.staggerTo(t, e, r, i, n, s, a)
        );
      }),
      (o.staggerFromTo = function (t, e, r, i, n, s, a, o) {
        return (
          (i.startAt = r),
          (S(i).immediateRender = u(i.immediateRender)),
          this.staggerTo(t, e, i, n, s, a, o)
        );
      }),
      (o.render = function (t, e, r) {
        var i,
          n,
          s,
          a,
          o,
          u,
          h,
          l,
          f,
          p,
          _,
          c,
          d = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = this !== _t && m - Xt < t && 0 <= t ? m : t < Xt ? 0 : t,
          w = this._zTime < 0 != t < 0 && (this._initted || !g);
        if (v !== this._tTime || r || w) {
          if (
            (d !== this._time &&
              g &&
              ((v += this._time - d), (t += this._time - d)),
            (i = v),
            (f = this._start),
            (u = !(l = this._ts)),
            w && (g || (d = this._zTime), (!t && e) || (this._zTime = t)),
            this._repeat &&
              ((_ = this._yoyo),
              (i = y(v % (o = g + this._rDelay))),
              v === m
                ? ((a = this._repeat), (i = g))
                : ((a = ~~(v / o)) && a === v / o && ((i = g), a--),
                  g < i && (i = g)),
              (p = pe(this._tTime, o)),
              !d && this._tTime && p !== a && (p = a),
              _ && 1 & a && ((i = g - i), (c = 1)),
              a !== p && !this._lock))
          ) {
            var T = _ && 1 & p,
              x = T === (_ && 1 & a);
            if (
              (a < p && (T = !T),
              (d = T ? 0 : g),
              (this._lock = 1),
              (this.render(d || (c ? 0 : y(a * o)), e, !g)._lock = 0),
              !e && this.parent && ve(this, "onRepeat"),
              this.vars.repeatRefresh && !c && (this.invalidate()._lock = 1),
              d !== this._time || u != !this._ts)
            )
              return this;
            if (
              ((g = this._dur),
              (m = this._tDur),
              x &&
                ((this._lock = 2),
                (d = T ? g + 1e-4 : -1e-4),
                this.render(d, !0),
                this.vars.repeatRefresh && !c && this.invalidate()),
              (this._lock = 0),
              !this._ts && !u)
            )
              return this;
            ut(this, c);
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (h = (function (t, e, r) {
                var i;
                if (e < r)
                  for (i = t._first; i && i._start <= r; ) {
                    if (!i._dur && "isPause" === i.data && i._start > e)
                      return i;
                    i = i._next;
                  }
                else
                  for (i = t._last; i && i._start >= r; ) {
                    if (!i._dur && "isPause" === i.data && i._start < e)
                      return i;
                    i = i._prev;
                  }
              })(this, y(d), y(i))) &&
              (v -= i - (i = h._start)),
            (this._tTime = v),
            (this._time = i),
            (this._act = !l),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t)),
            d || !i || e || ve(this, "onStart"),
            d <= i && 0 <= t)
          )
            for (n = this._first; n; ) {
              if (
                ((s = n._next), (n._act || i >= n._start) && n._ts && h !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(
                    0 < n._ts
                      ? (i - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (i - n._start) * n._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), s && (v += this._zTime = -Xt);
                  break;
                }
              }
              n = s;
            }
          else {
            n = this._last;
            for (var b = t < 0 ? t : i; n; ) {
              if (
                ((s = n._prev), (n._act || b <= n._end) && n._ts && h !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(
                    0 < n._ts
                      ? (b - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (b - n._start) * n._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), s && (v += this._zTime = b ? -Xt : Xt);
                  break;
                }
              }
              n = s;
            }
          }
          if (
            h &&
            !e &&
            (this.pause(),
            (h.render(d <= i ? 0 : -Xt)._zTime = d <= i ? 1 : -1),
            this._ts)
          )
            return (this._start = f), B(this), this.render(t, e, r);
          this._onUpdate && !e && ve(this, "onUpdate", !0),
            ((v === m && m >= this.totalDuration()) || (!v && d)) &&
              ((f !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                this._lock ||
                ((!t && g) ||
                  !((v === m && 0 < this._ts) || (!v && this._ts < 0)) ||
                  z(this, 1),
                e ||
                  (t < 0 && !d) ||
                  (!v && !d) ||
                  (ve(this, v === m ? "onComplete" : "onReverseComplete", !0),
                  !this._prom ||
                    (v < m && 0 < this.timeScale()) ||
                    this._prom())));
        }
        return this;
      }),
      (o.add = function (t, e) {
        var r = this;
        if ((s(e) || (e = q(this, e)), !(t instanceof Fe))) {
          if (Zt(t))
            return (
              t.forEach(function (t) {
                return r.add(t, e);
              }),
              this
            );
          if (i(t)) return this.addLabel(t, e);
          if (!n(t)) return this;
          t = qe.delayedCall(0, t);
        }
        return this !== t ? Y(this, t, e) : this;
      }),
      (o.getChildren = function (t, e, r, i) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          void 0 === i && (i = -Ut);
        for (var n = [], s = this._first; s; )
          s._start >= i &&
            (s instanceof qe
              ? e && n.push(s)
              : (r && n.push(s),
                t && n.push.apply(n, s.getChildren(!0, e, r)))),
            (s = s._next);
        return n;
      }),
      (o.getById = function (t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
          if (e[r].vars.id === t) return e[r];
      }),
      (o.remove = function (t) {
        return i(t)
          ? this.removeLabel(t)
          : n(t)
          ? this.killTweensOf(t)
          : (P(this, t),
            t === this._recent && (this._recent = this._last),
            R(this));
      }),
      (o.totalTime = function (e, r) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = y(
                be.time -
                  (0 < this._ts
                    ? e / this._ts
                    : (this.totalDuration() - e) / -this._ts)
              )),
            t.prototype.totalTime.call(this, e, r),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (o.addLabel = function (t, e) {
        return (this.labels[t] = q(this, e)), this;
      }),
      (o.removeLabel = function (t) {
        return delete this.labels[t], this;
      }),
      (o.addPause = function (t, e, r) {
        var i = qe.delayedCall(0, e || c, r);
        return (
          (i.data = "isPause"), (this._hasPause = 1), Y(this, i, q(this, t))
        );
      }),
      (o.removePause = function (t) {
        var e = this._first;
        for (t = q(this, t); e; )
          e._start === t && "isPause" === e.data && z(e), (e = e._next);
      }),
      (o.killTweensOf = function (t, e, r) {
        for (var i = this.getTweensOf(t, r), n = i.length; n--; )
          Ie !== i[n] && i[n].kill(t, e);
        return this;
      }),
      (o.getTweensOf = function (t, e) {
        for (var r, i = [], n = me(t), a = this._first, o = s(e); a; )
          a instanceof qe
            ? w(a._targets, n) &&
              (o
                ? (!Ie || (a._initted && a._ts)) &&
                  a.globalTime(0) <= e &&
                  a.globalTime(a.totalDuration()) > e
                : !e || a.isActive()) &&
              i.push(a)
            : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r),
            (a = a._next);
        return i;
      }),
      (o.tweenTo = function (t, e) {
        e = e || {};
        var r = this,
          i = q(r, t),
          n = e.startAt,
          s = e.onStart,
          a = e.onStartParams,
          o = qe.to(
            r,
            k(e, {
              ease: "none",
              lazy: !1,
              time: i,
              duration:
                e.duration ||
                Math.abs(
                  (i - (n && "time" in n ? n.time : r._time)) / r.timeScale()
                ) ||
                Xt,
              onStart: function () {
                r.pause();
                var t = e.duration || Math.abs((i - r._time) / r.timeScale());
                o._dur !== t && N(o, t, 0, 1).render(o._time, !0, !0),
                  s && s.apply(o, a || []);
              },
            })
          );
        return o;
      }),
      (o.tweenFromTo = function (t, e, r) {
        return this.tweenTo(e, k({ startAt: { time: q(this, t) } }, r));
      }),
      (o.recent = function () {
        return this._recent;
      }),
      (o.nextLabel = function (t) {
        return void 0 === t && (t = this._time), et(this, q(this, t));
      }),
      (o.previousLabel = function (t) {
        return void 0 === t && (t = this._time), et(this, q(this, t), 1);
      }),
      (o.currentLabel = function (t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + Xt);
      }),
      (o.shiftChildren = function (t, e, r) {
        void 0 === r && (r = 0);
        for (var i, n = this._first, s = this.labels; n; )
          n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
        if (e) for (i in s) s[i] >= r && (s[i] += t);
        return R(this);
      }),
      (o.invalidate = function () {
        var e = this._first;
        for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
        return t.prototype.invalidate.call(this);
      }),
      (o.clear = function (t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; )
          (e = r._next), this.remove(r), (r = e);
        return (
          (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          R(this)
        );
      }),
      (o.totalDuration = function (t) {
        var e,
          r,
          i,
          n = 0,
          s = this,
          a = s._last,
          o = Ut;
        if (arguments.length)
          return s.timeScale(
            (s._repeat < 0 ? s.duration() : s.totalDuration()) /
              (s.reversed() ? -t : t)
          );
        if (s._dirty) {
          for (i = s.parent; a; )
            (e = a._prev),
              a._dirty && a.totalDuration(),
              o < (r = a._start) && s._sort && a._ts && !s._lock
                ? ((s._lock = 1), (Y(s, a, r - a._delay, 1)._lock = 0))
                : (o = r),
              r < 0 &&
                a._ts &&
                ((n -= r),
                ((!i && !s._dp) || (i && i.smoothChildTiming)) &&
                  ((s._start += r / s._ts), (s._time -= r), (s._tTime -= r)),
                s.shiftChildren(-r, !1, -1 / 0),
                (o = 0)),
              a._end > n && a._ts && (n = a._end),
              (a = e);
          N(s, s === _t && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
        }
        return s._tDur;
      }),
      (a.updateRoot = function (t) {
        if ((_t._ts && (b(_t, E(t, _t)), (yt = be.frame)), be.frame >= ue)) {
          ue += It.autoSleep || 120;
          var e = _t._first;
          if ((!e || !e._ts) && It.autoSleep && be._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || be.sleep();
          }
        }
      }),
      a
    );
  })(Fe);
  function Le(t, e, r, s, a, u) {
    var h, l, f, p;
    if (
      ae[t] &&
      !1 !==
        (h = new ae[t]()).init(
          a,
          h.rawVars
            ? e[t]
            : (function (t, e, r, s, a) {
                if (
                  (n(t) && (t = Xe(t, a, e, r, s)),
                  !o(t) || (t.style && t.nodeType) || Zt(t) || Wt(t))
                )
                  return i(t) ? Xe(t, a, e, r, s) : t;
                var u,
                  h = {};
                for (u in t) h[u] = Xe(t[u], a, e, r, s);
                return h;
              })(e[t], s, a, u, r),
          r,
          s,
          u
        ) &&
      ((r._pt = l = new nr(r._pt, a, t, 0, 1, h.render, h, 0, h.priority)),
      r !== wt)
    )
      for (f = r._ptLookup[r._targets.indexOf(a)], p = h._props.length; p--; )
        f[h._props[p]] = l;
    return h;
  }
  k(Be.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Ie,
    Ye = function (t, e, r, s, a, o, u, h, l) {
      n(s) && (s = s(a || 0, t, o));
      var f,
        p = t[e],
        _ =
          "get" !== r
            ? r
            : n(p)
            ? l
              ? t[
                  e.indexOf("set") || !n(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](l)
              : t[e]()
            : p,
        c = n(p) ? (l ? Ze : We) : Ge;
      if (
        (i(s) &&
          (~s.indexOf("random(") && (s = tt(s)),
          "=" === s.charAt(1) &&
            (s =
              parseFloat(_) +
              parseFloat(s.substr(2)) * ("-" === s.charAt(0) ? -1 : 1) +
              (Q(_) || 0))),
        _ !== s)
      )
        return isNaN(_ * s)
          ? function (t, e, r, i, n, s, a) {
              var o,
                u,
                h,
                l,
                f,
                p,
                _,
                c,
                d = new nr(this._pt, t, e, 0, 1, Ke, null, n),
                m = 0,
                g = 0;
              for (
                d.b = r,
                  d.e = i,
                  r += "",
                  (_ = ~(i += "").indexOf("random(")) && (i = tt(i)),
                  s && (s((c = [r, i]), t, e), (r = c[0]), (i = c[1])),
                  u = r.match(Kt) || [];
                (o = Kt.exec(i));

              )
                (l = o[0]),
                  (f = i.substring(m, o.index)),
                  h ? (h = (h + 1) % 5) : "rgba(" === f.substr(-5) && (h = 1),
                  l !== u[g++] &&
                    ((p = parseFloat(u[g - 1]) || 0),
                    (d._pt = {
                      _next: d._pt,
                      p: f || 1 === g ? f : ",",
                      s: p,
                      c:
                        "=" === l.charAt(1)
                          ? parseFloat(l.substr(2)) *
                            ("-" === l.charAt(0) ? -1 : 1)
                          : parseFloat(l) - p,
                      m: h && h < 4 ? Math.round : 0,
                    }),
                    (m = Kt.lastIndex));
              return (
                (d.c = m < i.length ? i.substring(m, i.length) : ""),
                (d.fp = a),
                (te.test(i) || _) && (d.e = 0),
                (this._pt = d)
              );
            }.call(this, t, e, _, s, c, h || It.stringFilter, l)
          : ((f = new nr(
              this._pt,
              t,
              e,
              +_ || 0,
              s - (_ || 0),
              "boolean" == typeof p ? Je : $e,
              0,
              c
            )),
            l && (f.fp = l),
            u && f.modifier(u, this, t),
            (this._pt = f));
    },
    Ue = function t(e, r) {
      var i,
        n,
        s,
        a,
        o,
        h,
        l,
        f,
        p,
        _,
        c,
        g,
        v,
        y = e.vars,
        w = y.ease,
        T = y.startAt,
        b = y.immediateRender,
        O = y.lazy,
        M = y.onUpdate,
        C = y.onUpdateParams,
        A = y.callbackScope,
        S = y.runBackwards,
        P = y.yoyoEase,
        R = y.keyframes,
        F = y.autoRevert,
        E = e._dur,
        B = e._startAt,
        L = e._targets,
        I = e.parent,
        Y = I && "nested" === I.data ? I.parent._targets : L,
        U = "auto" === e._overwrite,
        X = e.timeline;
      if (
        (!X || (R && w) || (w = "none"),
        (e._ease = De(w, Yt.ease)),
        (e._yEase = P ? Ae(De(!0 === P ? w : P, Yt.ease)) : 0),
        P &&
          e._yoyo &&
          !e._repeat &&
          ((P = e._yEase), (e._yEase = e._ease), (e._ease = P)),
        !X)
      ) {
        if (
          ((g = (f = L[0] ? m(L[0]).harness : 0) && y[f.prop]),
          (i = D(y, ie)),
          B && B.render(-1, !0).kill(),
          T)
        ) {
          if (
            (z(
              (e._startAt = qe.set(
                L,
                k(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: I,
                    immediateRender: !0,
                    lazy: u(O),
                    startAt: null,
                    delay: 0,
                    onUpdate: M,
                    onUpdateParams: C,
                    callbackScope: A,
                    stagger: 0,
                  },
                  T
                )
              ))
            ),
            b)
          )
            if (0 < r) F || (e._startAt = 0);
            else if (E && !(r < 0 && B)) return void (r && (e._zTime = r));
        } else if (S && E)
          if (B) F || (e._startAt = 0);
          else if (
            (r && (b = !1),
            (s = k(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: b && u(O),
                immediateRender: b,
                stagger: 0,
                parent: I,
              },
              i
            )),
            g && (s[f.prop] = g),
            z((e._startAt = qe.set(L, s))),
            b)
          ) {
            if (!r) return;
          } else t(e._startAt, Xt);
        for (
          e._pt = 0, O = (E && u(O)) || (O && !E), n = 0;
          n < L.length;
          n++
        ) {
          if (
            ((l = (o = L[n])._gsap || d(L)[n]._gsap),
            (e._ptLookup[n] = _ = {}),
            se[l.id] && x(),
            (c = Y === L ? n : Y.indexOf(o)),
            f &&
              !1 !== (p = new f()).init(o, g || i, e, c, Y) &&
              ((e._pt = a =
                new nr(e._pt, o, p.name, 0, 1, p.render, p, 0, p.priority)),
              p._props.forEach(function (t) {
                _[t] = a;
              }),
              p.priority && (h = 1)),
            !f || g)
          )
            for (s in i)
              ae[s] && (p = Le(s, i, e, c, o, Y))
                ? p.priority && (h = 1)
                : (_[s] = a =
                    Ye.call(e, o, s, "get", i[s], c, Y, 0, y.stringFilter));
          e._op && e._op[n] && e.kill(o, e._op[n]),
            U &&
              e._pt &&
              ((Ie = e),
              _t.killTweensOf(o, _, e.globalTime(0)),
              (v = !e.parent),
              (Ie = 0)),
            e._pt && O && (se[l.id] = 1);
        }
        h && ir(e), e._onInit && e._onInit(e);
      }
      (e._from = !X && !!y.runBackwards),
        (e._onUpdate = M),
        (e._initted = (!e._op || e._pt) && !v);
    },
    Xe = function (t, e, r, s, a) {
      return n(t)
        ? t.call(e, r, s, a)
        : i(t) && ~t.indexOf("random(")
        ? tt(t)
        : t;
    },
    Ne = le + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    Ve = (Ne + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
    qe = (function (t) {
      function n(e, i, n, a) {
        var h;
        "number" == typeof i && ((n.duration = i), (i = n), (n = null));
        var f,
          _,
          m,
          g,
          v,
          w,
          T,
          x,
          b = (h = t.call(this, a ? i : S(i), n) || this).vars,
          O = b.duration,
          M = b.delay,
          C = b.immediateRender,
          A = b.stagger,
          D = b.overwrite,
          P = b.keyframes,
          z = b.defaults,
          R = b.scrollTrigger,
          F = b.yoyoEase,
          E = h.parent,
          B = (Zt(e) || Wt(e) ? s(e[0]) : "length" in i) ? [e] : me(e);
        if (
          ((h._targets = B.length ? d(B) : p(0, !It.nullTargetWarn) || []),
          (h._ptLookup = []),
          (h._overwrite = D),
          P || A || l(O) || l(M))
        ) {
          if (
            ((i = h.vars),
            (f = h.timeline =
              new Be({ data: "nested", defaults: z || {} })).kill(),
            (f.parent = r(h)),
            P)
          )
            k(f.vars.defaults, { ease: "none" }),
              P.forEach(function (t) {
                return f.to(B, t, ">");
              });
          else {
            if (((g = B.length), (T = A ? Z(A) : c), o(A)))
              for (v in A) ~Ne.indexOf(v) && ((x = x || {})[v] = A[v]);
            for (_ = 0; _ < g; _++) {
              for (v in ((m = {}), i)) Ve.indexOf(v) < 0 && (m[v] = i[v]);
              (m.stagger = 0),
                F && (m.yoyoEase = F),
                x && fe(m, x),
                (w = B[_]),
                (m.duration = +Xe(O, r(h), _, w, B)),
                (m.delay = (+Xe(M, r(h), _, w, B) || 0) - h._delay),
                !A &&
                  1 === g &&
                  m.delay &&
                  ((h._delay = M = m.delay), (h._start += M), (m.delay = 0)),
                f.to(w, m, T(_, w, B));
            }
            f.duration() ? (O = M = 0) : (h.timeline = 0);
          }
          O || h.duration((O = f.duration()));
        } else h.timeline = 0;
        return (
          !0 === D && ((Ie = r(h)), _t.killTweensOf(B), (Ie = 0)),
          E && I(E, r(h)),
          (C ||
            (!O &&
              !P &&
              h._start === y(E._time) &&
              u(C) &&
              (function t(e) {
                return !e || (e._ts && t(e.parent));
              })(r(h)) &&
              "nested" !== E.data)) &&
            ((h._tTime = -Xt), h.render(Math.max(0, -M))),
          R && U(r(h), R),
          h
        );
      }
      e(n, t);
      var a = n.prototype;
      return (
        (a.render = function (t, e, r) {
          var i,
            n,
            s,
            a,
            o,
            u,
            h,
            l,
            f,
            p = this._time,
            _ = this._tDur,
            c = this._dur,
            d = _ - Xt < t && 0 <= t ? _ : t < Xt ? 0 : t;
          if (c) {
            if (
              d !== this._tTime ||
              !t ||
              r ||
              (this._startAt && this._zTime < 0 != t < 0)
            ) {
              if (((i = d), (l = this.timeline), this._repeat)) {
                if (
                  ((i = y(d % (a = c + this._rDelay))),
                  d === _
                    ? ((s = this._repeat), (i = c))
                    : ((s = ~~(d / a)) && s === d / a && ((i = c), s--),
                      c < i && (i = c)),
                  (u = this._yoyo && 1 & s) && ((f = this._yEase), (i = c - i)),
                  (o = pe(this._tTime, a)),
                  i === p && !r && this._initted)
                )
                  return this;
                s !== o &&
                  (l && this._yEase && ut(l, u),
                  !this.vars.repeatRefresh ||
                    u ||
                    this._lock ||
                    ((this._lock = r = 1),
                    (this.render(y(a * s), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (X(this, t < 0 ? t : i, r, e))
                  return (this._tTime = 0), this;
                if (c !== this._dur) return this.render(t, e, r);
              }
              for (
                this._tTime = d,
                  this._time = i,
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  this.ratio = h = (f || this._ease)(i / c),
                  this._from && (this.ratio = h = 1 - h),
                  !i || p || e || ve(this, "onStart"),
                  n = this._pt;
                n;

              )
                n.r(h, n.d), (n = n._next);
              (l && l.render(t < 0 ? t : !i && u ? -Xt : l._dur * h, e, r)) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                  ve(this, "onUpdate")),
                this._repeat &&
                  s !== o &&
                  this.vars.onRepeat &&
                  !e &&
                  this.parent &&
                  ve(this, "onRepeat"),
                (d !== this._tDur && d) ||
                  this._tTime !== d ||
                  (t < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startAt.render(t, !0, !0),
                  (!t && c) ||
                    !(
                      (d === this._tDur && 0 < this._ts) ||
                      (!d && this._ts < 0)
                    ) ||
                    z(this, 1),
                  e ||
                    (t < 0 && !p) ||
                    (!d && !p) ||
                    (ve(this, d === _ ? "onComplete" : "onReverseComplete", !0),
                    !this._prom ||
                      (d < _ && 0 < this.timeScale()) ||
                      this._prom()));
            }
          } else
            !(function (t, e, r, i) {
              var n,
                s,
                a = t.ratio,
                o =
                  e < 0 ||
                  (!e && a && !t._start && t._zTime > Xt && !t._dp._lock) ||
                  ((t._ts < 0 || t._dp._ts < 0) &&
                    "isFromStart" !== t.data &&
                    "isStart" !== t.data)
                    ? 0
                    : 1,
                u = t._rDelay,
                h = 0;
              if (
                (u &&
                  t._repeat &&
                  ((h = ce(0, t._tDur, e)),
                  pe(h, u) !== (s = pe(t._tTime, u)) &&
                    ((a = 1 - o),
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                t._initted || !X(t, e, i, r))
              )
                if (o !== a || i || t._zTime === Xt || (!e && t._zTime)) {
                  for (
                    s = t._zTime,
                      t._zTime = e || (r ? Xt : 0),
                      r = r || (e && !s),
                      t.ratio = o,
                      t._from && (o = 1 - o),
                      t._time = 0,
                      t._tTime = h,
                      r || ve(t, "onStart"),
                      n = t._pt;
                    n;

                  )
                    n.r(o, n.d), (n = n._next);
                  t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                    t._onUpdate && !r && ve(t, "onUpdate"),
                    h && t._repeat && !r && t.parent && ve(t, "onRepeat"),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === o &&
                      (o && z(t, 1),
                      r ||
                        (ve(t, o ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
            })(this, t, e, r);
          return this;
        }),
        (a.targets = function () {
          return this._targets;
        }),
        (a.invalidate = function () {
          return (
            (this._pt =
              this._op =
              this._startAt =
              this._onUpdate =
              this._act =
              this._lazy =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(),
            t.prototype.invalidate.call(this)
          );
        }),
        (a.kill = function (t, e) {
          if (
            (void 0 === e && (e = "all"),
            !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))
          )
            return rt(this);
          if (this.timeline) {
            var r = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(t, e, Ie && !0 !== Ie.vars.overwrite)
                ._first || rt(this),
              this.parent &&
                r !== this.timeline.totalDuration() &&
                N(this, (this._dur * this.timeline._tDur) / r, 0, 1),
              this
            );
          }
          var n,
            s,
            a,
            o,
            u,
            h,
            l,
            f = this._targets,
            p = t ? me(t) : f,
            _ = this._ptLookup,
            c = this._pt;
          if (
            (!e || "all" === e) &&
            (function (t, e) {
              for (
                var r = t.length, i = r === e.length;
                i && r-- && t[r] === e[r];

              );
              return r < 0;
            })(f, p)
          )
            return "all" === e && (this._pt = 0), rt(this);
          for (
            n = this._op = this._op || [],
              "all" !== e &&
                (i(e) &&
                  ((u = {}),
                  v(e, function (t) {
                    return (u[t] = 1);
                  }),
                  (e = u)),
                (e = (function (t, e) {
                  var r,
                    i,
                    n,
                    s,
                    a = t[0] ? m(t[0]).harness : 0,
                    o = a && a.aliases;
                  if (!o) return e;
                  for (i in ((r = fe({}, e)), o))
                    if ((i in r))
                      for (n = (s = o[i].split(",")).length; n--; )
                        r[s[n]] = r[i];
                  return r;
                })(f, e))),
              l = f.length;
            l--;

          )
            if (~p.indexOf(f[l]))
              for (u in ((s = _[l]),
              "all" === e
                ? ((n[l] = e), (o = s), (a = {}))
                : ((a = n[l] = n[l] || {}), (o = e)),
              o))
                (h = s && s[u]) &&
                  (("kill" in h.d && !0 !== h.d.kill(u)) || P(this, h, "_pt"),
                  delete s[u]),
                  "all" !== a && (a[u] = 1);
          return this._initted && !this._pt && c && rt(this), this;
        }),
        (n.to = function (t, e, r) {
          return new n(t, e, r);
        }),
        (n.from = function (t, e) {
          return new n(t, T(arguments, 1));
        }),
        (n.delayedCall = function (t, e, r, i) {
          return new n(e, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: e,
            onReverseComplete: e,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: i,
          });
        }),
        (n.fromTo = function (t, e, r) {
          return new n(t, T(arguments, 2));
        }),
        (n.set = function (t, e) {
          return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new n(t, e);
        }),
        (n.killTweensOf = function (t, e, r) {
          return _t.killTweensOf(t, e, r);
        }),
        n
      );
    })(Fe);
  function je(t, e, r) {
    return t.setAttribute(e, r);
  }
  function Qe(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }
  k(qe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    v("staggerTo,staggerFrom,staggerFromTo", function (t) {
      qe[t] = function () {
        var e = new Be(),
          r = de.call(arguments, 0);
        return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r);
      };
    });
  var Ge = function (t, e, r) {
      return (t[e] = r);
    },
    We = function (t, e, r) {
      return t[e](r);
    },
    Ze = function (t, e, r, i) {
      return t[e](i.fp, r);
    },
    He = function (t, e) {
      return n(t[e]) ? We : a(t[e]) && t.setAttribute ? je : Ge;
    },
    $e = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
    },
    Je = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    Ke = function (t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;
      else if (1 === t && e.e) i = e.e;
      else {
        for (; r; )
          (i =
            r.p +
            (r.m
              ? r.m(r.s + r.c * t)
              : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
            i),
            (r = r._next);
        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
    tr = function (t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    er = function (t, e, r, i) {
      for (var n, s = this._pt; s; )
        (n = s._next), s.p === i && s.modifier(t, e, r), (s = n);
    },
    rr = function (t) {
      for (var e, r, i = this._pt; i; )
        (r = i._next),
          (i.p === t && !i.op) || i.op === t
            ? P(this, i, "_pt")
            : i.dep || (e = 1),
          (i = r);
      return !e;
    },
    ir = function (t) {
      for (var e, r, i, n, s = t._pt; s; ) {
        for (e = s._next, r = i; r && r.pr > s.pr; ) r = r._next;
        (s._prev = r ? r._prev : n) ? (s._prev._next = s) : (i = s),
          (s._next = r) ? (r._prev = s) : (n = s),
          (s = e);
      }
      t._pt = i;
    },
    nr =
      ((sr.prototype.modifier = function (t, e, r) {
        (this.mSet = this.mSet || this.set),
          (this.set = Qe),
          (this.m = t),
          (this.mt = r),
          (this.tween = e);
      }),
      sr);
  function sr(t, e, r, i, n, s, a, o, u) {
    (this.t = e),
      (this.s = i),
      (this.c = n),
      (this.p = r),
      (this.r = s || $e),
      (this.d = a || this),
      (this.set = o || Ge),
      (this.pr = u || 0),
      (this._next = t) && (t._prev = this);
  }
  v(
    le +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (ie[t] = 1);
    }
  ),
    (re.TweenMax = re.TweenLite = qe),
    (re.TimelineLite = re.TimelineMax = Be),
    (_t = new Be({
      sortChildren: !1,
      defaults: Yt,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (It.stringFilter = ot);
  var ar = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
      e.forEach(function (t) {
        return (function (t) {
          var e = (t = (!t.name && t.default) || t).name,
            r = n(t),
            i =
              e && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            s = {
              init: c,
              render: tr,
              add: Ye,
              kill: rr,
              modifier: er,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: He,
              aliases: {},
              register: 0,
            };
          if ((Oe(), t !== i)) {
            if (ae[e]) return;
            k(i, k(D(t, s), a)),
              fe(i.prototype, fe(s, D(t, a))),
              (ae[(i.prop = e)] = i),
              t.targetTest && (he.push(i), (ie[e] = 1)),
              (e =
                ("css" === e
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          _(e, i), t.register && t.register(hr, i, nr);
        })(t);
      });
    },
    timeline: function (t) {
      return new Be(t);
    },
    getTweensOf: function (t, e) {
      return _t.getTweensOf(t, e);
    },
    getProperty: function (t, e, r, n) {
      i(t) && (t = me(t)[0]);
      var s = m(t || {}).get,
        a = r ? M : O;
      return (
        "native" === r && (r = ""),
        t
          ? e
            ? a(((ae[e] && ae[e].get) || s)(t, e, r, n))
            : function (e, r, i) {
                return a(((ae[e] && ae[e].get) || s)(t, e, r, i));
              }
          : t
      );
    },
    quickSetter: function (t, e, r) {
      if (1 < (t = me(t)).length) {
        var i = t.map(function (t) {
            return hr.quickSetter(t, e, r);
          }),
          n = i.length;
        return function (t) {
          for (var e = n; e--; ) i[e](t);
        };
      }
      t = t[0] || {};
      var s = ae[e],
        a = m(t),
        o = (a.harness && (a.harness.aliases || {})[e]) || e,
        u = s
          ? function (e) {
              var i = new s();
              (wt._pt = 0),
                i.init(t, r ? e + r : e, wt, 0, [t]),
                i.render(1, i),
                wt._pt && tr(1, wt);
            }
          : a.set(t, o);
      return s
        ? u
        : function (e) {
            return u(t, o, r ? e + r : e, a, 1);
          };
    },
    isTweening: function (t) {
      return 0 < _t.getTweensOf(t, !0).length;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = De(t.ease, Yt.ease)), A(Yt, t || {});
    },
    config: function (t) {
      return A(It, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        r = t.effect,
        i = t.plugins,
        n = t.defaults,
        s = t.extendTimeline;
      (i || "").split(",").forEach(function (t) {
        return t && !ae[t] && !re[t] && p();
      }),
        (oe[e] = function (t, e, i) {
          return r(me(t), k(e || {}, n), i);
        }),
        s &&
          (Be.prototype[e] = function (t, r, i) {
            return this.add(oe[e](t, o(r) ? r : (i = r) && {}, this), i);
          });
    },
    registerEase: function (t, e) {
      Me[t] = De(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? De(t, e) : Me;
    },
    getById: function (t) {
      return _t.getById(t);
    },
    exportRoot: function (t, e) {
      void 0 === t && (t = {});
      var r,
        i,
        n = new Be(t);
      for (
        n.smoothChildTiming = u(t.smoothChildTiming),
          _t.remove(n),
          n._dp = 0,
          n._time = n._tTime = _t._time,
          r = _t._first;
        r;

      )
        (i = r._next),
          (!e &&
            !r._dur &&
            r instanceof qe &&
            r.vars.onComplete === r._targets[0]) ||
            Y(n, r, r._start - r._delay),
          (r = i);
      return Y(_t, n, 0), n;
    },
    utils: {
      wrap: function t(e, r, i) {
        var n = r - e;
        return Zt(e)
          ? K(e, t(0, e.length), r)
          : j(i, function (t) {
              return ((n + ((t - e) % n)) % n) + e;
            });
      },
      wrapYoyo: function t(e, r, i) {
        var n = r - e,
          s = 2 * n;
        return Zt(e)
          ? K(e, t(0, e.length - 1), r)
          : j(i, function (t) {
              return e + (n < (t = (s + ((t - e) % s)) % s || 0) ? s - t : t);
            });
      },
      distribute: Z,
      random: J,
      snap: $,
      normalize: function (t, e, r) {
        return ge(t, e, 0, 1, r);
      },
      getUnit: Q,
      clamp: function (t, e, r) {
        return j(r, function (r) {
          return ce(t, e, r);
        });
      },
      splitColor: nt,
      toArray: me,
      mapRange: ge,
      pipe: function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function (t, e) {
        return function (r) {
          return t(parseFloat(r)) + (e || Q(r));
        };
      },
      interpolate: function t(e, r, n, s) {
        var a = isNaN(e + r)
          ? 0
          : function (t) {
              return (1 - t) * e + t * r;
            };
        if (!a) {
          var o,
            u,
            h,
            l,
            f,
            p = i(e),
            _ = {};
          if ((!0 === n && (s = 1) && (n = null), p))
            (e = { p: e }), (r = { p: r });
          else if (Zt(e) && !Zt(r)) {
            for (h = [], l = e.length, f = l - 2, u = 1; u < l; u++)
              h.push(t(e[u - 1], e[u]));
            l--,
              (a = function (t) {
                t *= l;
                var e = Math.min(f, ~~t);
                return h[e](t - e);
              }),
              (n = r);
          } else s || (e = fe(Zt(e) ? [] : {}, e));
          if (!h) {
            for (o in r) Ye.call(_, e, o, "get", r[o]);
            a = function (t) {
              return tr(t, _) || (p ? e.p : e);
            };
          }
        }
        return j(n, a);
      },
      shuffle: W,
    },
    install: f,
    effects: oe,
    ticker: be,
    updateRoot: Be.updateRoot,
    plugins: ae,
    globalTimeline: _t,
    core: {
      PropTween: nr,
      globals: _,
      Tween: qe,
      Timeline: Be,
      Animation: Fe,
      getCache: m,
      _removeLinkedListItem: P,
    },
  };
  function or(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
      r = r._next;
    return r;
  }
  function ur(t, e) {
    return {
      name: t,
      rawVars: 1,
      init: function (t, r, n) {
        n._onInit = function (t) {
          var n, s;
          if (
            (i(r) &&
              ((n = {}),
              v(r, function (t) {
                return (n[t] = 1);
              }),
              (r = n)),
            e)
          ) {
            for (s in ((n = {}), r)) n[s] = e(r[s]);
            r = n;
          }
          !(function (t, e) {
            var r,
              i,
              n,
              s = t._targets;
            for (r in e)
              for (i = s.length; i--; )
                (n = (n = t._ptLookup[i][r]) && n.d) &&
                  (n._pt && (n = or(n, r)),
                  n && n.modifier && n.modifier(e[r], t, s[i], r));
          })(t, r);
        };
      },
    };
  }
  v("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (ar[t] = qe[t]);
  }),
    be.add(Be.updateRoot),
    (wt = ar.to({}, { duration: 0 }));
  var hr =
    ar.registerPlugin(
      {
        name: "attr",
        init: function (t, e, r, i, n) {
          var s, a;
          for (s in e)
            (a = this.add(
              t,
              "setAttribute",
              (t.getAttribute(s) || 0) + "",
              e[s],
              i,
              n,
              0,
              0,
              s
            )) && (a.op = s),
              this._props.push(s);
        },
      },
      {
        name: "endArray",
        init: function (t, e) {
          for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
        },
      },
      ur("roundProps", H),
      ur("modifiers"),
      ur("snap", $)
    ) || ar;
  function lr(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function fr(t, e) {
    return e.set(
      e.t,
      e.p,
      1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
      e
    );
  }
  function pr(t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
      e
    );
  }
  function _r(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
  }
  function cr(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function dr(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function mr(t, e, r) {
    return (t.style[e] = r);
  }
  function gr(t, e, r) {
    return t.style.setProperty(e, r);
  }
  function vr(t, e, r) {
    return (t._gsap[e] = r);
  }
  function yr(t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  }
  function wr(t, e, r, i, n) {
    var s = t._gsap;
    (s.scaleX = s.scaleY = r), s.renderTransform(n, s);
  }
  function Tr(t, e, r, i, n) {
    var s = t._gsap;
    (s[e] = r), s.renderTransform(n, s);
  }
  function xr(t, e) {
    var r = qr.createElementNS
      ? qr.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : qr.createElement(t);
    return r.style ? r : qr.createElement(t);
  }
  function br(t, e, r) {
    var i = getComputedStyle(t);
    return (
      i[e] ||
      i.getPropertyValue(e.replace(yi, "-$1").toLowerCase()) ||
      i.getPropertyValue(e) ||
      (!r && br(t, ki(e) || e, 1)) ||
      ""
    );
  }
  function Or() {
    "undefined" != typeof window &&
      window.document &&
      ((Vr = window),
      (qr = Vr.document),
      (jr = qr.documentElement),
      (Gr = xr("div") || { style: {} }),
      (Wr = xr("div")),
      (bi = ki(bi)),
      (Oi = bi + "Origin"),
      (Gr.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Hr = !!ki("perspective")),
      (Qr = 1));
  }
  function Mr(t) {
    var e,
      r = xr(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      i = this.parentNode,
      n = this.nextSibling,
      s = this.style.cssText;
    if (
      (jr.appendChild(r),
      r.appendChild(this),
      (this.style.display = "block"),
      t)
    )
      try {
        (e = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = Mr);
      } catch (t) {}
    else this._gsapBBox && (e = this._gsapBBox());
    return (
      i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
      jr.removeChild(r),
      (this.style.cssText = s),
      e
    );
  }
  function kr(t, e) {
    for (var r = e.length; r--; )
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }
  function Cr(t) {
    var e;
    try {
      e = t.getBBox();
    } catch (r) {
      e = Mr.call(t, !0);
    }
    return (
      (e && (e.width || e.height)) || t.getBBox === Mr || (e = Mr.call(t, !0)),
      !e || e.width || e.x || e.y
        ? e
        : {
            x: +kr(t, ["x", "cx", "x1"]) || 0,
            y: +kr(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
    );
  }
  function Ar(t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Cr(t));
  }
  function Dr(t, e) {
    if (e) {
      var r = t.style;
      e in di && e !== Oi && (e = bi),
        r.removeProperty
          ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
              (e = "-" + e),
            r.removeProperty(e.replace(yi, "-$1").toLowerCase()))
          : r.removeAttribute(e);
    }
  }
  function Sr(t, e, r, i, n, s) {
    var a = new nr(t._pt, e, r, 0, 1, s ? dr : cr);
    return ((t._pt = a).b = i), (a.e = n), t._props.push(r), a;
  }
  function Pr(t, e, r, i) {
    var n,
      s,
      a,
      o,
      u = parseFloat(r) || 0,
      h = (r + "").trim().substr((u + "").length) || "px",
      l = Gr.style,
      f = wi.test(e),
      p = "svg" === t.tagName.toLowerCase(),
      _ = (p ? "client" : "offset") + (f ? "Width" : "Height"),
      c = "px" === i,
      d = "%" === i;
    return i === h || !u || Ci[i] || Ci[h]
      ? u
      : ("px" === h || c || (u = Pr(t, e, r, "px")),
        (o = t.getCTM && Ar(t)),
        d && (di[e] || ~e.indexOf("adius"))
          ? y((u / (o ? t.getBBox()[f ? "width" : "height"] : t[_])) * 100)
          : ((l[f ? "width" : "height"] = 100 + (c ? h : i)),
            (s =
              ~e.indexOf("adius") || ("em" === i && t.appendChild && !p)
                ? t
                : t.parentNode),
            o && (s = (t.ownerSVGElement || {}).parentNode),
            (s && s !== qr && s.appendChild) || (s = qr.body),
            (a = s._gsap) && d && a.width && f && a.time === be.time
              ? y((u / a.width) * 100)
              : ((!d && "%" !== h) || (l.position = br(t, "position")),
                s === t && (l.position = "static"),
                s.appendChild(Gr),
                (n = Gr[_]),
                s.removeChild(Gr),
                (l.position = "absolute"),
                f && d && (((a = m(s)).time = be.time), (a.width = s[_])),
                y(c ? (n * u) / 100 : n && u ? (100 / n) * u : 0))));
  }
  function zr(t, e, r, i) {
    var n;
    return (
      Qr || Or(),
      e in xi &&
        "transform" !== e &&
        ~(e = xi[e]).indexOf(",") &&
        (e = e.split(",")[0]),
      di[e] && "transform" !== e
        ? ((n = zi(t, i)),
          (n =
            "transformOrigin" !== e
              ? n[e]
              : Ri(br(t, Oi)) + " " + n.zOrigin + "px"))
        : ((n = t.style[e]) &&
            "auto" !== n &&
            !i &&
            !~(n + "").indexOf("calc(")) ||
          (n =
            (Di[e] && Di[e](t, e, r)) ||
            br(t, e) ||
            g(t, e) ||
            ("opacity" === e ? 1 : 0)),
      r && !~(n + "").indexOf(" ") ? Pr(t, e, n, r) + r : n
    );
  }
  function Rr(t, e, r, i) {
    if (!r || "none" === r) {
      var n = ki(e, t, 1),
        s = n && br(t, n, 1);
      s && s !== r
        ? ((e = n), (r = s))
        : "borderColor" === e && (r = br(t, "borderTopColor"));
    }
    var a,
      o,
      u,
      h,
      l,
      f,
      p,
      _,
      c,
      d,
      m,
      g,
      v = new nr(this._pt, t.style, e, 0, 1, Ke),
      y = 0,
      w = 0;
    if (
      ((v.b = r),
      (v.e = i),
      (r += ""),
      "auto" == (i += "") &&
        ((t.style[e] = i), (i = br(t, e) || i), (t.style[e] = r)),
      ot((a = [r, i])),
      (i = a[1]),
      (u = (r = a[0]).match(Jt) || []),
      (i.match(Jt) || []).length)
    ) {
      for (; (o = Jt.exec(i)); )
        (p = o[0]),
          (c = i.substring(y, o.index)),
          l
            ? (l = (l + 1) % 5)
            : ("rgba(" !== c.substr(-5) && "hsla(" !== c.substr(-5)) || (l = 1),
          p !== (f = u[w++] || "") &&
            ((h = parseFloat(f) || 0),
            (m = f.substr((h + "").length)),
            (g = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) &&
              (p = p.substr(2)),
            (_ = parseFloat(p)),
            (d = p.substr((_ + "").length)),
            (y = Jt.lastIndex - d.length),
            d ||
              ((d = d || It.units[e] || m),
              y === i.length && ((i += d), (v.e += d))),
            m !== d && (h = Pr(t, e, f, d) || 0),
            (v._pt = {
              _next: v._pt,
              p: c || 1 === w ? c : ",",
              s: h,
              c: g ? g * _ : _ - h,
              m: l && l < 4 ? Math.round : 0,
            }));
      v.c = y < i.length ? i.substring(y, i.length) : "";
    } else v.r = "display" === e && "none" === i ? dr : cr;
    return te.test(i) && (v.e = 0), (this._pt = v);
  }
  function Fr(t) {
    var e = t.split(" "),
      r = e[0],
      i = e[1] || "50%";
    return (
      ("top" !== r && "bottom" !== r && "left" !== i && "right" !== i) ||
        ((t = r), (r = i), (i = t)),
      (e[0] = Ai[r] || r),
      (e[1] = Ai[i] || i),
      e.join(" ")
    );
  }
  function Er(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        i,
        n,
        s = e.t,
        a = s.style,
        o = e.u,
        u = s._gsap;
      if ("all" === o || !0 === o) (a.cssText = ""), (i = 1);
      else
        for (n = (o = o.split(",")).length; -1 < --n; )
          (r = o[n]),
            di[r] && ((i = 1), (r = "transformOrigin" === r ? Oi : bi)),
            Dr(s, r);
      i &&
        (Dr(s, bi),
        u &&
          (u.svg && s.removeAttribute("transform"), zi(s, 1), (u.uncache = 1)));
    }
  }
  function Br(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }
  function Lr(t) {
    var e = br(t, bi);
    return Br(e) ? Si : e.substr(7).match($t).map(y);
  }
  function Ir(t, e) {
    var r,
      i,
      n,
      s,
      a = t._gsap || m(t),
      o = t.style,
      u = Lr(t);
    return a.svg && t.getAttribute("transform")
      ? "1,0,0,1,0,0" ===
        (u = [
          (n = t.transform.baseVal.consolidate().matrix).a,
          n.b,
          n.c,
          n.d,
          n.e,
          n.f,
        ]).join(",")
        ? Si
        : u
      : (u !== Si ||
          t.offsetParent ||
          t === jr ||
          a.svg ||
          ((n = o.display),
          (o.display = "block"),
          ((r = t.parentNode) && t.offsetParent) ||
            ((s = 1), (i = t.nextSibling), jr.appendChild(t)),
          (u = Lr(t)),
          n ? (o.display = n) : Dr(t, "display"),
          s &&
            (i
              ? r.insertBefore(t, i)
              : r
              ? r.appendChild(t)
              : jr.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }
  function Yr(t, e, r, i, n, s) {
    var a,
      o,
      u,
      h = t._gsap,
      l = n || Ir(t, !0),
      f = h.xOrigin || 0,
      p = h.yOrigin || 0,
      _ = h.xOffset || 0,
      c = h.yOffset || 0,
      d = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      w = l[5],
      T = e.split(" "),
      x = parseFloat(T[0]) || 0,
      b = parseFloat(T[1]) || 0;
    r
      ? l !== Si &&
        (o = d * v - m * g) &&
        ((u = x * (-m / o) + b * (d / o) - (d * w - m * y) / o),
        (x = x * (v / o) + b * (-g / o) + (g * w - v * y) / o),
        (b = u))
      : ((x = (a = Cr(t)).x + (~T[0].indexOf("%") ? (x / 100) * a.width : x)),
        (b = a.y + (~(T[1] || T[0]).indexOf("%") ? (b / 100) * a.height : b))),
      i || (!1 !== i && h.smooth)
        ? ((y = x - f),
          (w = b - p),
          (h.xOffset = _ + (y * d + w * g) - y),
          (h.yOffset = c + (y * m + w * v) - w))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = x),
      (h.yOrigin = b),
      (h.smooth = !!i),
      (h.origin = e),
      (h.originIsAbsolute = !!r),
      (t.style[Oi] = "0px 0px"),
      s &&
        (Sr(s, h, "xOrigin", f, x),
        Sr(s, h, "yOrigin", p, b),
        Sr(s, h, "xOffset", _, h.xOffset),
        Sr(s, h, "yOffset", c, h.yOffset)),
      t.setAttribute("data-svg-origin", x + " " + b);
  }
  function Ur(t, e, r) {
    var i = Q(e);
    return y(parseFloat(e) + parseFloat(Pr(t, "x", r + "px", i))) + i;
  }
  function Xr(t, e, r, n, s, a) {
    var o,
      u,
      h = 360,
      l = i(s),
      f = parseFloat(s) * (l && ~s.indexOf("rad") ? mi : 1),
      p = a ? f * a : f - n,
      _ = n + p + "deg";
    return (
      l &&
        ("short" === (o = s.split("_")[1]) &&
          (p %= h) != p % 180 &&
          (p += p < 0 ? h : -h),
        "cw" === o && p < 0
          ? (p = ((p + 36e9) % h) - ~~(p / h) * h)
          : "ccw" === o && 0 < p && (p = ((p - 36e9) % h) - ~~(p / h) * h)),
      (t._pt = u = new nr(t._pt, e, r, n, p, fr)),
      (u.e = _),
      (u.u = "deg"),
      t._props.push(r),
      u
    );
  }
  function Nr(t, e, r) {
    var i,
      n,
      s,
      a,
      o,
      u,
      h,
      l = Wr.style,
      f = r._gsap;
    for (n in ((l.cssText =
      getComputedStyle(r).cssText + ";position:absolute;display:block;"),
    (l[bi] = e),
    qr.body.appendChild(Wr),
    (i = zi(Wr, 1)),
    di))
      (s = f[n]) !== (a = i[n]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
        ((o = Q(s) !== (h = Q(a)) ? Pr(r, n, s, h) : parseFloat(s)),
        (u = parseFloat(a)),
        (t._pt = new nr(t._pt, f, n, o, u - o, lr)),
        (t._pt.u = h || 0),
        t._props.push(n));
    qr.body.removeChild(Wr);
  }
  (qe.version = Be.version = hr.version = "3.5.0"), (vt = 1), h() && Oe();
  var Vr,
    qr,
    jr,
    Qr,
    Gr,
    Wr,
    Zr,
    Hr,
    $r = Me.Power0,
    Jr = Me.Power1,
    Kr = Me.Power2,
    ti = Me.Power3,
    ei = Me.Power4,
    ri = Me.Linear,
    ii = Me.Quad,
    ni = Me.Cubic,
    si = Me.Quart,
    ai = Me.Quint,
    oi = Me.Strong,
    ui = Me.Elastic,
    hi = Me.Back,
    li = Me.SteppedEase,
    fi = Me.Bounce,
    pi = Me.Sine,
    _i = Me.Expo,
    ci = Me.Circ,
    di = {},
    mi = 180 / Math.PI,
    gi = Math.PI / 180,
    vi = Math.atan2,
    yi = /([A-Z])/g,
    wi = /(?:left|right|width|margin|padding|x)/i,
    Ti = /[\s,\(]\S/,
    xi = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    bi = "transform",
    Oi = bi + "Origin",
    Mi = "O,Moz,ms,Ms,Webkit".split(","),
    ki = function (t, e, r) {
      var i = (e || Gr).style,
        n = 5;
      if (t in i && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        n-- && !(Mi[n] + t in i);

      );
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Mi[n] : "") + t;
    },
    Ci = { deg: 1, rad: 1, turn: 1 },
    Ai = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Di = {
      clearProps: function (t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var s = (t._pt = new nr(t._pt, e, r, 0, 0, Er));
          return (s.u = i), (s.pr = -10), (s.tween = n), t._props.push(r), 1;
        }
      },
    },
    Si = [1, 0, 0, 1, 0, 0],
    Pi = {},
    zi = function (t, e) {
      var r = t._gsap || new Re(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i,
        n,
        s,
        a,
        o,
        u,
        h,
        l,
        f,
        p,
        _,
        c,
        d,
        m,
        g,
        v,
        w,
        T,
        x,
        b,
        O,
        M,
        k,
        C,
        A,
        D,
        S,
        P,
        z,
        R,
        F,
        E,
        B = t.style,
        L = r.scaleX < 0,
        I = "deg",
        Y = br(t, Oi) || "0";
      return (
        (i = n = s = u = h = l = f = p = _ = 0),
        (a = o = 1),
        (r.svg = !(!t.getCTM || !Ar(t))),
        (m = Ir(t, r.svg)),
        r.svg &&
          ((C = !r.uncache && t.getAttribute("data-svg-origin")),
          Yr(t, C || Y, !!C || r.originIsAbsolute, !1 !== r.smooth, m)),
        (c = r.xOrigin || 0),
        (d = r.yOrigin || 0),
        m !== Si &&
          ((T = m[0]),
          (x = m[1]),
          (b = m[2]),
          (O = m[3]),
          (i = M = m[4]),
          (n = k = m[5]),
          6 === m.length
            ? ((a = Math.sqrt(T * T + x * x)),
              (o = Math.sqrt(O * O + b * b)),
              (u = T || x ? vi(x, T) * mi : 0),
              (f = b || O ? vi(b, O) * mi + u : 0) && (o *= Math.cos(f * gi)),
              r.svg && ((i -= c - (c * T + d * b)), (n -= d - (c * x + d * O))))
            : ((E = m[6]),
              (R = m[7]),
              (S = m[8]),
              (P = m[9]),
              (z = m[10]),
              (F = m[11]),
              (i = m[12]),
              (n = m[13]),
              (s = m[14]),
              (h = (g = vi(E, z)) * mi),
              g &&
                ((C = M * (v = Math.cos(-g)) + S * (w = Math.sin(-g))),
                (A = k * v + P * w),
                (D = E * v + z * w),
                (S = M * -w + S * v),
                (P = k * -w + P * v),
                (z = E * -w + z * v),
                (F = R * -w + F * v),
                (M = C),
                (k = A),
                (E = D)),
              (l = (g = vi(-b, z)) * mi),
              g &&
                ((v = Math.cos(-g)),
                (F = O * (w = Math.sin(-g)) + F * v),
                (T = C = T * v - S * w),
                (x = A = x * v - P * w),
                (b = D = b * v - z * w)),
              (u = (g = vi(x, T)) * mi),
              g &&
                ((C = T * (v = Math.cos(g)) + x * (w = Math.sin(g))),
                (A = M * v + k * w),
                (x = x * v - T * w),
                (k = k * v - M * w),
                (T = C),
                (M = A)),
              h &&
                359.9 < Math.abs(h) + Math.abs(u) &&
                ((h = u = 0), (l = 180 - l)),
              (a = y(Math.sqrt(T * T + x * x + b * b))),
              (o = y(Math.sqrt(k * k + E * E))),
              (g = vi(M, k)),
              (f = 2e-4 < Math.abs(g) ? g * mi : 0),
              (_ = F ? 1 / (F < 0 ? -F : F) : 0)),
          r.svg &&
            ((C = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !Br(br(t, bi))),
            C && t.setAttribute("transform", C))),
        90 < Math.abs(f) &&
          Math.abs(f) < 270 &&
          (L
            ? ((a *= -1),
              (f += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((o *= -1), (f += f <= 0 ? 180 : -180))),
        (r.x =
          ((r.xPercent =
            i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)
            ? 0
            : i) + "px"),
        (r.y =
          ((r.yPercent =
            n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)
            ? 0
            : n) + "px"),
        (r.z = s + "px"),
        (r.scaleX = y(a)),
        (r.scaleY = y(o)),
        (r.rotation = y(u) + I),
        (r.rotationX = y(h) + I),
        (r.rotationY = y(l) + I),
        (r.skewX = f + I),
        (r.skewY = p + I),
        (r.transformPerspective = _ + "px"),
        (r.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (B[Oi] = Ri(Y)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = It.force3D),
        (r.renderTransform = r.svg ? Yi : Hr ? Ii : Fi),
        (r.uncache = 0),
        r
      );
    },
    Ri = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Fi = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        Ii(t, e);
    },
    Ei = "0deg",
    Bi = "0px",
    Li = ") ",
    Ii = function (t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        s = r.x,
        a = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        p = r.skewY,
        _ = r.scaleX,
        c = r.scaleY,
        d = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        w = ("auto" === m && t && 1 !== t) || !0 === m;
      if (v && (l !== Ei || h !== Ei)) {
        var T,
          x = parseFloat(h) * gi,
          b = Math.sin(x),
          O = Math.cos(x);
        (x = parseFloat(l) * gi),
          (s = Ur(g, s, b * (T = Math.cos(x)) * -v)),
          (a = Ur(g, a, -Math.sin(x) * -v)),
          (o = Ur(g, o, O * T * -v + v));
      }
      d !== Bi && (y += "perspective(" + d + Li),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        (!w && s === Bi && a === Bi && o === Bi) ||
          (y +=
            o !== Bi || w
              ? "translate3d(" + s + ", " + a + ", " + o + ") "
              : "translate(" + s + ", " + a + Li),
        u !== Ei && (y += "rotate(" + u + Li),
        h !== Ei && (y += "rotateY(" + h + Li),
        l !== Ei && (y += "rotateX(" + l + Li),
        (f === Ei && p === Ei) || (y += "skew(" + f + ", " + p + Li),
        (1 === _ && 1 === c) || (y += "scale(" + _ + ", " + c + Li),
        (g.style[bi] = y || "translate(0, 0)");
    },
    Yi = function (t, e) {
      var r,
        i,
        n,
        s,
        a,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        p = o.rotation,
        _ = o.skewX,
        c = o.skewY,
        d = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        w = o.yOrigin,
        T = o.xOffset,
        x = o.yOffset,
        b = o.forceCSS,
        O = parseFloat(l),
        M = parseFloat(f);
      (p = parseFloat(p)),
        (_ = parseFloat(_)),
        (c = parseFloat(c)) && ((_ += c = parseFloat(c)), (p += c)),
        p || _
          ? ((p *= gi),
            (_ *= gi),
            (r = Math.cos(p) * d),
            (i = Math.sin(p) * d),
            (n = Math.sin(p - _) * -m),
            (s = Math.cos(p - _) * m),
            _ &&
              ((c *= gi),
              (a = Math.tan(_ - c)),
              (n *= a = Math.sqrt(1 + a * a)),
              (s *= a),
              c &&
                ((a = Math.tan(c)), (r *= a = Math.sqrt(1 + a * a)), (i *= a))),
            (r = y(r)),
            (i = y(i)),
            (n = y(n)),
            (s = y(s)))
          : ((r = d), (s = m), (i = n = 0)),
        ((O && !~(l + "").indexOf("px")) || (M && !~(f + "").indexOf("px"))) &&
          ((O = Pr(g, "x", l, "px")), (M = Pr(g, "y", f, "px"))),
        (v || w || T || x) &&
          ((O = y(O + v - (v * r + w * n) + T)),
          (M = y(M + w - (v * i + w * s) + x))),
        (u || h) &&
          ((O = y(O + (u / 100) * (a = g.getBBox()).width)),
          (M = y(M + (h / 100) * a.height))),
        (a =
          "matrix(" +
          r +
          "," +
          i +
          "," +
          n +
          "," +
          s +
          "," +
          O +
          "," +
          M +
          ")"),
        g.setAttribute("transform", a),
        b && (g.style[bi] = a);
    };
  v("padding,margin,Width,Radius", function (t, e) {
    var r = "Right",
      i = "Bottom",
      n = "Left",
      s = (e < 3 ? ["Top", r, i, n] : ["Top" + n, "Top" + r, i + r, i + n]).map(
        function (r) {
          return e < 2 ? t + r : "border" + r + t;
        }
      );
    Di[1 < e ? "border" + t : t] = function (t, e, r, i, n) {
      var a, o;
      if (arguments.length < 4)
        return (
          (a = s.map(function (e) {
            return zr(t, e, r);
          })),
          5 === (o = a.join(" ")).split(a[0]).length ? a[0] : o
        );
      (a = (i + "").split(" ")),
        (o = {}),
        s.forEach(function (t, e) {
          return (o[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
        }),
        t.init(e, o, n);
    };
  });
  var Ui,
    Xi,
    Ni = {
      name: "css",
      register: Or,
      targetTest: function (t) {
        return t.style && t.nodeType;
      },
      init: function (t, e, r, i, n) {
        var s,
          a,
          o,
          u,
          h,
          l,
          f,
          p,
          _,
          c,
          d,
          m,
          g,
          v,
          y,
          w = this._props,
          T = t.style;
        for (f in (Qr || Or(), e))
          if (
            "autoRound" !== f &&
            ((a = e[f]), !ae[f] || !Le(f, e, r, i, t, n))
          )
            if (
              ((h = typeof a),
              (l = Di[f]),
              "function" === h && (h = typeof (a = a.call(r, i, t, n))),
              "string" === h && ~a.indexOf("random(") && (a = tt(a)),
              l)
            )
              l(this, t, f, a, r) && (y = 1);
            else if ("--" === f.substr(0, 2))
              this.add(
                T,
                "setProperty",
                getComputedStyle(t).getPropertyValue(f) + "",
                a + "",
                i,
                n,
                0,
                0,
                f
              );
            else if ("undefined" !== h) {
              if (
                ((s = zr(t, f)),
                (u = parseFloat(s)),
                (c =
                  "string" === h && "=" === a.charAt(1)
                    ? +(a.charAt(0) + "1")
                    : 0) && (a = a.substr(2)),
                (o = parseFloat(a)),
                f in xi &&
                  ("autoAlpha" === f &&
                    (1 === u &&
                      "hidden" === zr(t, "visibility") &&
                      o &&
                      (u = 0),
                    Sr(
                      this,
                      T,
                      "visibility",
                      u ? "inherit" : "hidden",
                      o ? "inherit" : "hidden",
                      !o
                    )),
                  "scale" !== f &&
                    "transform" !== f &&
                    ~(f = xi[f]).indexOf(",") &&
                    (f = f.split(",")[0])),
                (d = f in di))
              )
                if (
                  (m ||
                    ((g = t._gsap).renderTransform || zi(t),
                    (v = !1 !== e.smoothOrigin && g.smooth),
                    ((m = this._pt =
                      new nr(
                        this._pt,
                        T,
                        bi,
                        0,
                        1,
                        g.renderTransform,
                        g,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === f)
                )
                  (this._pt = new nr(
                    this._pt,
                    g,
                    "scaleY",
                    g.scaleY,
                    c ? c * o : o - g.scaleY
                  )),
                    w.push("scaleY", f),
                    (f += "X");
                else {
                  if ("transformOrigin" === f) {
                    (a = Fr(a)),
                      g.svg
                        ? Yr(t, a, 0, v, 0, this)
                        : ((_ = parseFloat(a.split(" ")[2]) || 0) !==
                            g.zOrigin && Sr(this, g, "zOrigin", g.zOrigin, _),
                          Sr(this, T, f, Ri(s), Ri(a)));
                    continue;
                  }
                  if ("svgOrigin" === f) {
                    Yr(t, a, 1, v, 0, this);
                    continue;
                  }
                  if (f in Pi) {
                    Xr(this, g, f, u, a, c);
                    continue;
                  }
                  if ("smoothOrigin" === f) {
                    Sr(this, g, "smooth", g.smooth, a);
                    continue;
                  }
                  if ("force3D" === f) {
                    g[f] = a;
                    continue;
                  }
                  if ("transform" === f) {
                    Nr(this, a, t);
                    continue;
                  }
                }
              else f in T || (f = ki(f) || f);
              if (
                d ||
                ((o || 0 === o) && (u || 0 === u) && !Ti.test(a) && f in T)
              )
                (p = (s + "").substr((u + "").length)) !==
                  (_ =
                    (a + "").substr(((o = o || 0) + "").length) ||
                    (f in It.units ? It.units[f] : p)) && (u = Pr(t, f, s, _)),
                  (this._pt = new nr(
                    this._pt,
                    d ? g : T,
                    f,
                    u,
                    c ? c * o : o - u,
                    "px" !== _ || !1 === e.autoRound || d ? lr : _r
                  )),
                  (this._pt.u = _ || 0),
                  p !== _ && ((this._pt.b = s), (this._pt.r = pr));
              else if (f in T) Rr.call(this, t, f, s, a);
              else {
                if (!(f in t)) continue;
                this.add(t, f, t[f], a, i, n);
              }
              w.push(f);
            }
        y && ir(this);
      },
      get: zr,
      aliases: xi,
      getSetter: function (t, e, r) {
        var i = xi[e];
        return (
          i && i.indexOf(",") < 0 && (e = i),
          e in di && e !== Oi && (t._gsap.x || zr(t, "x"))
            ? r && Zr === r
              ? "scale" === e
                ? yr
                : vr
              : (Zr = r || {}) && ("scale" === e ? wr : Tr)
            : t.style && !a(t.style[e])
            ? mr
            : ~e.indexOf("-")
            ? gr
            : He(t, e)
        );
      },
      core: { _removeProperty: Dr, _getMatrix: Ir },
    };
  (hr.utils.checkPrefix = ki),
    (Xi = v(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
        "," +
        (Ui = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        di[t] = 1;
      }
    )),
    v(Ui, function (t) {
      (It.units[t] = "deg"), (Pi[t] = 1);
    }),
    (xi[Xi[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Ui),
    v(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        xi[e[1]] = Xi[e[0]];
      }
    ),
    v(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        It.units[t] = "px";
      }
    ),
    hr.registerPlugin(Ni);
  var Vi = hr.registerPlugin(Ni) || hr,
    qi = Vi.core.Tween;
  (t.Back = hi),
    (t.Bounce = fi),
    (t.CSSPlugin = Ni),
    (t.Circ = ci),
    (t.Cubic = ni),
    (t.Elastic = ui),
    (t.Expo = _i),
    (t.Linear = ri),
    (t.Power0 = $r),
    (t.Power1 = Jr),
    (t.Power2 = Kr),
    (t.Power3 = ti),
    (t.Power4 = ei),
    (t.Quad = ii),
    (t.Quart = si),
    (t.Quint = ai),
    (t.Sine = pi),
    (t.SteppedEase = li),
    (t.Strong = oi),
    (t.TimelineLite = Be),
    (t.TimelineMax = Be),
    (t.TweenLite = qe),
    (t.TweenMax = qi),
    (t.default = Vi),
    (t.gsap = Vi),
    "undefined" == typeof window || window !== t
      ? Object.defineProperty(t, "__esModule", { value: !0 })
      : delete t.default;
});
