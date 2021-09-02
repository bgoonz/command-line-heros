/* ========================================================================================== */
/*  Project: Studio - Web
/*  Author: Digital Business
/*  Date: Wed Aug 18 2021 17:07:22 GMT+0000 (Coordinated Universal Time)
/*  
/*  Copyright © 2021 Red Hat, Inc.
/*  https://www.redhat.com
/* ========================================================================================== */

/*!
 * DrawSVGPlugin 3.0.4
 * https://greensock.com
 *
 * @license Copyright 2019, GreenSock. All rights reserved.
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
  function e() {
    return "undefined" != typeof window;
  }
  function i() {
    return u || (e() && (u = window.gsap) && u.registerPlugin && u);
  }
  function s(t) {
    return Math.round(1e4 * t) / 1e4;
  }
  function r(t) {
    return parseFloat(t || 0);
  }
  function n(t, e) {
    return r(t.getAttribute(e));
  }
  function o(t, e, i, s, n, o) {
    return y(Math.pow((r(i) - r(t)) * n, 2) + Math.pow((r(s) - r(e)) * o, 2));
  }
  function a(t) {
    return "non-scaling-stroke" === t.getAttribute("vector-effect");
  }
  function f(t) {
    if (!(t = l(t)[0])) return 0;
    var e,
      i,
      s,
      r,
      f,
      h,
      d,
      u = t.tagName.toLowerCase(),
      c = t.style,
      g = 1,
      _ = 1;
    a(t) &&
      ((_ = t.getScreenCTM()),
      (g = y(_.a * _.a + _.b * _.b)),
      (_ = y(_.d * _.d + _.c * _.c)));
    try {
      i = t.getBBox();
    } catch (t) {}
    var w = i || { x: 0, y: 0, width: 0, height: 0 },
      v = w.x,
      k = w.y,
      M = w.width,
      P = w.height;
    if (
      ((i && (M || P)) ||
        !x[u] ||
        ((M = n(t, x[u][0])),
        (P = n(t, x[u][1])),
        "rect" !== u && "line" !== u && ((M *= 2), (P *= 2)),
        "line" === u &&
          ((v = n(t, "x1")),
          (k = n(t, "y1")),
          (M = Math.abs(M - v)),
          (P = Math.abs(P - k)))),
      "path" === u)
    )
      (r = c.strokeDasharray),
        (c.strokeDasharray = "none"),
        (e = t.getTotalLength() || 0),
        (e *= (g + _) / 2),
        (c.strokeDasharray = r);
    else if ("rect" === u) e = 2 * M * g + 2 * P * _;
    else if ("line" === u) e = o(v, k, v + M, k + P, g, _);
    else if ("polyline" === u || "polygon" === u)
      for (
        s = t.getAttribute("points").match(p) || [],
          "polygon" === u && s.push(s[0], s[1]),
          e = 0,
          f = 2;
        f < s.length;
        f += 2
      )
        e += o(s[f - 2], s[f - 1], s[f], s[f + 1], g, _) || 0;
    else
      ("circle" !== u && "ellipse" !== u) ||
        ((h = (M / 2) * g),
        (d = (P / 2) * _),
        (e = Math.PI * (3 * (h + d) - y((3 * h + d) * (h + 3 * d)))));
    return e || 0;
  }
  function h(t, e) {
    if (!(t = l(t)[0])) return [0, 0];
    e = e || f(t) + 1;
    var i = c.getComputedStyle(t),
      s = i.strokeDasharray || "",
      n = r(i.strokeDashoffset),
      o = s.indexOf(",");
    return (
      o < 0 && (o = s.indexOf(" ")),
      e < (s = o < 0 ? e : r(s.substr(0, o)) || 1e-5) && (s = e),
      [Math.max(0, -n), Math.max(0, s - n)]
    );
  }
  function d() {
    e() &&
      ((c = window),
      (_ = u = i()),
      (l = u.utils.toArray),
      (g = -1 !== ((c.navigator || {}).userAgent || "").indexOf("Edge")));
  }
  var u,
    l,
    c,
    g,
    _,
    p = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    x = {
      rect: ["width", "height"],
      circle: ["r", "r"],
      ellipse: ["rx", "ry"],
      line: ["x2", "y2"],
    },
    y = Math.sqrt,
    w = {
      version: "3.0.4",
      name: "drawSVG",
      register: function (t) {
        (u = t), d();
      },
      init: function (t, e) {
        if (!t.getBBox) return !1;
        _ || d();
        var i,
          n,
          o,
          u,
          l = f(t) + 1;
        return (
          (this._style = t.style),
          (this._target = t),
          e + "" == "true"
            ? (e = "0 100%")
            : e
            ? -1 === (e + "").indexOf(" ") && (e = "0 " + e)
            : (e = "0 0"),
          (n = (function (t, e, i) {
            var s,
              n,
              o = t.indexOf(" ");
            return (
              (n =
                o < 0
                  ? ((s = void 0 !== i ? i + "" : t), t)
                  : ((s = t.substr(0, o)), t.substr(o + 1))),
              (s = ~s.indexOf("%") ? (r(s) / 100) * e : r(s)),
              (n = ~n.indexOf("%") ? (r(n) / 100) * e : r(n)) < s
                ? [n, s]
                : [s, n]
            );
          })(e, l, (i = h(t, l))[0])),
          (this._length = s(l + 10)),
          0 === i[0] && 0 === n[0]
            ? ((o = Math.max(1e-5, n[1] - l)),
              (this._dash = s(l + o)),
              (this._offset = s(l - i[1] + o)),
              (this._offsetPT = this.add(
                this,
                "_offset",
                this._offset,
                s(l - n[1] + o)
              )))
            : ((this._dash = s(i[1] - i[0]) || 1e-6),
              (this._offset = s(-i[0])),
              (this._dashPT = this.add(
                this,
                "_dash",
                this._dash,
                s(n[1] - n[0]) || 1e-5
              )),
              (this._offsetPT = this.add(
                this,
                "_offset",
                this._offset,
                s(-n[0])
              ))),
          g &&
            (u = c.getComputedStyle(t)).strokeLinecap !== u.strokeLinejoin &&
            ((n = r(u.strokeMiterlimit)),
            this.add(t.style, "strokeMiterlimit", n, n + 0.01)),
          (this._live = a(t) || ~(e + "").indexOf("live")),
          this._props.push("drawSVG"),
          1
        );
      },
      render: function (t, e) {
        var i,
          s,
          r,
          n,
          o = e._pt,
          a = e._style;
        if (o) {
          for (
            e._live &&
            (i = f(e._target) + 11) !== e._length &&
            ((s = i / e._length),
            (e._length = i),
            (e._offsetPT.s *= s),
            (e._offsetPT.c *= s),
            e._dashPT
              ? ((e._dashPT.s *= s), (e._dashPT.c *= s))
              : (e._dash *= s));
            o;

          )
            o.r(t, o.d), (o = o._next);
          (r = e._dash),
            (n = e._offset),
            (i = e._length),
            (a.strokeDashoffset = e._offset),
            1 !== t && t
              ? (a.strokeDasharray = r + "px," + i + "px")
              : (r - n < 0.001 && i - r <= 10 && (a.strokeDashoffset = n + 1),
                (a.strokeDasharray =
                  n < 0.001 && i - r <= 10
                    ? "none"
                    : n === r
                    ? "0px, 999999px"
                    : r + "px," + i + "px"));
        }
      },
      getLength: f,
      getPosition: h,
    };
  i() && u.registerPlugin(w),
    (t.DrawSVGPlugin = w),
    (t.default = w),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
