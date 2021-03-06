/* ========================================================================================== */
/*  Project: Studio - Web
/*  Author: Digital Business
/*  Date: Wed Aug 18 2021 17:07:22 GMT+0000 (Coordinated Universal Time)
/*  
/*  Copyright © 2021 Red Hat, Inc.
/*  https://www.redhat.com
/* ========================================================================================== */

/*!
 * MotionPathPlugin 3.0.4
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
  function e(t) {
    return "string" == typeof t;
  }
  function n(t, e, n, r) {
    var o = t[e],
      i = 1 === r ? 6 : S(o, n, r);
    if (i && i + n + 2 < o.length)
      return t.splice(e, 0, o.slice(0, n + i + 2)), o.splice(0, n + i), 1;
  }
  function r(t, e) {
    var n = t.length,
      r = t[n - 1] || [],
      o = r.length;
    e[0] === r[o - 2] && e[1] === r[o - 1] && ((e = r.concat(e.slice(2))), n--),
      (t[n] = e);
  }
  var o = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
    i = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
    a = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
    s = /(^[#\.][a-z]|[a-y][a-z])/i,
    l = Math.PI / 180,
    h = 180 / Math.PI,
    u = Math.sin,
    f = Math.cos,
    p = Math.abs,
    c = Math.sqrt,
    g = Math.atan2,
    d = 1e8,
    v = function (t) {
      return "number" == typeof t;
    },
    y = {},
    m = {},
    x = 1e5,
    w = function (t) {
      return Math.round(((t + d) % 1) * x) / x || (t < 0 ? 0 : 1);
    },
    L = function (t) {
      return ~~(t * x + (t < 0 ? -0.5 : 0.5)) / x;
    },
    b = function (t, e) {
      return (
        (e.totalLength = t.totalLength),
        t.samples
          ? ((e.samples = t.samples.slice(0)),
            (e.lookup = t.lookup.slice(0)),
            (e.minLength = t.minLength),
            (e.resolution = t.resolution))
          : (e.totalPoints = t.totalPoints),
        e
      );
    };
  function P(t) {
    var n,
      r = (t = (e(t) && s.test(t) && document.querySelector(t)) || t)
        .getAttribute
        ? t
        : 0;
    return r && (t = t.getAttribute("d"))
      ? (r._gsPath || (r._gsPath = {}),
        (n = r._gsPath[t]) && !n._dirty ? n : (r._gsPath[t] = z(t)))
      : t
      ? e(t)
        ? z(t)
        : v(t[0])
        ? [t]
        : t
      : void 0;
  }
  function N(t) {
    var e,
      n = 0;
    for (t.reverse(); n < t.length; n += 2)
      (e = t[n]), (t[n] = t[n + 1]), (t[n + 1] = e);
    t.reversed = !t.reversed;
  }
  var M = {
    rect: "rx,ry,x,y,width,height",
    circle: "r,cx,cy",
    ellipse: "rx,ry,cx,cy",
    line: "x1,x2,y1,y2",
  };
  function C(t, e, n) {
    var r,
      o = t[e],
      i = t[e + 2],
      a = t[e + 4];
    return (
      (o += (i - o) * n),
      (o += ((i += (a - i) * n) - o) * n),
      (r = i + (a + (t[e + 6] - a) * n - i) * n - o),
      (o = t[e + 1]),
      (o += ((i = t[e + 3]) - o) * n),
      (o += ((i += ((a = t[e + 5]) - i) * n) - o) * n),
      L(g(i + (a + (t[e + 7] - a) * n - i) * n - o, r) * h)
    );
  }
  function _(t, e, o) {
    !(function (t) {
      return void 0 === t;
    })(o) || (o = 1);
    var i = o < (e = e || 0),
      a = Math.max(0, ~~(p(o - e) - 1e-8));
    if (
      (i && ((i = o), (o = e), (e = i), (i = 1), (a -= a ? 1 : 0)),
      e < 0 || o < 0)
    ) {
      var s = 1 + ~~Math.min(e, o);
      (e += s), (o += s);
    }
    var l,
      h,
      u,
      f,
      c,
      g,
      d,
      v = (function (t) {
        for (var e = [], n = 0; n < t.length; n++)
          e[n] = b(t[n], t[n].slice(0));
        return b(t, e);
      })(t.totalLength ? t : T(t)),
      x = 1 < o,
      w = R(v, e, y),
      L = R(v, o, m),
      P = L.segment,
      M = w.segment,
      _ = L.segIndex,
      A = w.segIndex,
      O = L.i,
      I = w.i,
      k = A === _,
      z = O === I && k,
      B = (k && O < I) || (z && w.t > L.t);
    if (x || a) {
      if (
        (n(v, A, I, w.t) &&
          ((l = 1),
          A++,
          z
            ? B
              ? (L.t /= w.t)
              : ((L.t = (L.t - w.t) / (1 - w.t)), _++, (O = 0))
            : A <= _ + 1 && !B && (_++, k && (O -= I))),
        L.t ? n(v, _, O, L.t) && (B && l && A++, i && _++) : (_--, i && A--),
        (f = []),
        (g = 1 + (c = v.length) * a),
        (d = A),
        i)
      )
        for (g += (c - (_ = (_ || c) - 1) + A) % c, u = 0; u < g; u++)
          r(f, v[d]), (d = (d || c) - 1);
      else for (g += (c - A + _) % c, u = 0; u < g; u++) r(f, v[d++ % c]);
      v = f;
    } else if (((h = 1 === L.t ? 6 : S(P, O, L.t)), e !== o))
      for (
        l = S(M, I, z ? w.t / L.t : w.t),
          k && (h += l),
          P.splice(O + h + 2),
          l && M.splice(0, I + l),
          u = v.length;
        u--;

      )
        (u < A || _ < u) && v.splice(u, 1);
    else
      (P.angle = C(P, O + h, 0)),
        (w = P[(O += h)]),
        (L = P[O + 1]),
        (P.length = P.totalLength = 0),
        (P.totalPoints = v.totalPoints = 8),
        P.push(w, L, w, L, w, L, w, L);
    return (
      i &&
        (function (t, e) {
          var n = t.length;
          for (e || t.reverse(); n--; ) t[n].reversed || N(t[n]);
        })(v, x || a),
      (v.totalLength = 0),
      v
    );
  }
  function A(t, e, n) {
    (e = e || 0), t.samples || ((t.samples = []), (t.lookup = []));
    var r,
      o,
      i,
      a,
      s,
      l,
      h,
      u,
      f,
      g,
      v,
      y,
      m,
      x,
      w,
      L,
      b,
      P = ~~t.resolution || 12,
      N = 1 / P,
      M = n ? e + 6 * n + 1 : t.length,
      C = t[e],
      _ = t[e + 1],
      A = e ? (e / 6) * P : 0,
      T = t.samples,
      S = t.lookup,
      R = (e ? t.minLength : d) || d,
      O = T[A + n * P - 1],
      I = e ? T[A - 1] : 0;
    for (T.length = S.length = 0, o = e + 2; o < M; o += 6) {
      if (
        ((i = t[o + 4] - C),
        (a = t[o + 2] - C),
        (s = t[o] - C),
        (u = t[o + 5] - _),
        (f = t[o + 3] - _),
        (g = t[o + 1] - _),
        (l = h = v = y = 0),
        p(i) < 1e-5 && p(u) < 1e-5 && p(s) + p(g) < 1e-5)
      )
        8 < t.length && (t.splice(o, 6), (o -= 6), (M -= 6));
      else
        for (r = 1; r <= P; r++)
          (l =
            h -
            (h =
              ((x = N * r) * x * i + 3 * (m = 1 - x) * (x * a + m * s)) * x)),
            (v = y - (y = (x * x * u + 3 * m * (x * f + m * g)) * x)),
            (L = c(v * v + l * l)) < R && (R = L),
            (I += L),
            (T[A++] = I);
      (C += i), (_ += u);
    }
    if (O) for (O -= I; A < T.length; A++) T[A] += O;
    if (T.length && R)
      for (
        t.totalLength = b = T[T.length - 1] || 0,
          t.minLength = R,
          L = w = 0,
          r = 0;
        r < b;
        r += R
      )
        S[L++] = T[w] < r ? ++w : w;
    else t.totalLength = T[0] = 0;
    return e ? I - T[e / 2 - 1] : I;
  }
  function T(t, e) {
    var n, r, o;
    for (o = n = r = 0; o < t.length; o++)
      (t[o].resolution = ~~e || 12), (r += t[o].length), (n += A(t[o]));
    return (t.totalPoints = r), (t.totalLength = n), t;
  }
  function S(t, e, n) {
    if (n <= 0 || 1 <= n) return 0;
    var r = t[e],
      o = t[e + 1],
      i = t[e + 2],
      a = t[e + 3],
      s = t[e + 4],
      l = t[e + 5],
      h = r + (i - r) * n,
      u = i + (s - i) * n,
      f = o + (a - o) * n,
      p = a + (l - a) * n,
      c = h + (u - h) * n,
      g = f + (p - f) * n,
      d = s + (t[e + 6] - s) * n,
      v = l + (t[e + 7] - l) * n;
    return (
      (u += (d - u) * n),
      (p += (v - p) * n),
      t.splice(
        e + 2,
        4,
        L(h),
        L(f),
        L(c),
        L(g),
        L(c + (u - c) * n),
        L(g + (p - g) * n),
        L(u),
        L(p),
        L(d),
        L(v)
      ),
      t.samples &&
        t.samples.splice(((e / 6) * t.resolution) | 0, 0, 0, 0, 0, 0, 0, 0),
      6
    );
  }
  function R(t, e, n) {
    (n = n || {}), t.totalLength || T(t), (e < 0 || 1 < e) && (e = w(e));
    var r,
      o,
      i,
      a,
      s,
      l,
      h = 0,
      u = t[0];
    if (1 < t.length) {
      for (i = t.totalLength * e, s = l = 0; (s += t[l++].totalLength) < i; )
        h = l;
      e = (i - (a = s - (u = t[h]).totalLength)) / (s - a) || 0;
    }
    return (
      (r = u.samples),
      (o = u.resolution),
      (i = u.totalLength * e),
      (a = (l = u.lookup[~~(i / u.minLength)] || 0) ? r[l - 1] : 0),
      (s = r[l]) < i && ((a = s), (s = r[++l])),
      (n.path = t),
      (n.segment = u),
      (n.segIndex = h),
      (n.i = 6 * ~~(l / o)),
      (n.t = (1 / o) * ((i - a) / (s - a) + (l % o))),
      n
    );
  }
  function O(t, e, n, r) {
    var o,
      i,
      a,
      s,
      l,
      h,
      u,
      f,
      p,
      c = t[0],
      g = r || {};
    if (((e < 0 || 1 < e) && (e = w(e)), 1 < t.length)) {
      for (a = t.totalLength * e, l = h = 0; (l += t[h++].totalLength) < a; )
        c = t[h];
      e = (a - (s = l - c.totalLength)) / (l - s) || 0;
    }
    return (
      (o = c.samples),
      (i = c.resolution),
      (a = c.totalLength * e),
      (s = (h = c.lookup[~~(a / c.minLength)] || 0) ? o[h - 1] : 0),
      (l = o[h]) < a && ((s = l), (l = o[++h])),
      (p = 1 - (u = (1 / i) * ((a - s) / (l - s) + (h % i)) || 0)),
      (f = c[(h = 6 * ~~(h / i))]),
      (g.x = L(
        (u * u * (c[h + 6] - f) +
          3 * p * (u * (c[h + 4] - f) + p * (c[h + 2] - f))) *
          u +
          f
      )),
      (g.y = L(
        (u * u * (c[h + 7] - (f = c[h + 1])) +
          3 * p * (u * (c[h + 5] - f) + p * (c[h + 3] - f))) *
          u +
          f
      )),
      n &&
        (g.angle = c.totalLength
          ? C(c, h, 1 <= u ? 1 - 1e-9 : u || 1e-9)
          : c.angle || 0),
      g
    );
  }
  function I(t, e, n, r, o, i, a) {
    for (var s, l, h, u, f, p = t.length; -1 < --p; )
      for (l = (s = t[p]).length, h = 0; h < l; h += 2)
        (u = s[h]),
          (f = s[h + 1]),
          (s[h] = u * e + f * r + i),
          (s[h + 1] = u * n + f * o + a);
    return (t._dirty = 1), t;
  }
  function k(t, e, n, r, o, i, a, s, h) {
    if (t !== s || e !== h) {
      (n = p(n)), (r = p(r));
      var g = (o % 360) * l,
        d = f(g),
        v = u(g),
        y = Math.PI,
        m = 2 * y,
        x = (t - s) / 2,
        w = (e - h) / 2,
        L = d * x + v * w,
        b = -v * x + d * w,
        P = L * L,
        N = b * b,
        M = P / (n * n) + N / (r * r);
      1 < M && ((n = c(M) * n), (r = c(M) * r));
      var C = n * n,
        _ = r * r,
        A = (C * _ - C * N - _ * P) / (C * N + _ * P);
      A < 0 && (A = 0);
      var T = (i === a ? -1 : 1) * c(A),
        S = ((n * b) / r) * T,
        R = ((-r * L) / n) * T,
        O = d * S - v * R + (t + s) / 2,
        I = v * S + d * R + (e + h) / 2,
        k = (L - S) / n,
        z = (b - R) / r,
        B = (-L - S) / n,
        j = (-b - R) / r,
        E = k * k + z * z,
        X = (z < 0 ? -1 : 1) * Math.acos(k / c(E)),
        Y =
          (k * j - z * B < 0 ? -1 : 1) *
          Math.acos((k * B + z * j) / c(E * (B * B + j * j)));
      isNaN(Y) && (Y = y),
        !a && 0 < Y ? (Y -= m) : a && Y < 0 && (Y += m),
        (X %= m),
        (Y %= m);
      var V,
        q = Math.ceil(p(Y) / (m / 4)),
        F = [],
        G = Y / q,
        U = ((4 / 3) * u(G / 2)) / (1 + f(G / 2)),
        Z = d * n,
        D = v * n,
        H = v * -r,
        Q = d * r;
      for (V = 0; V < q; V++)
        (L = f((o = X + V * G))),
          (b = u(o)),
          (k = f((o += G))),
          (z = u(o)),
          F.push(L - U * b, b + U * L, k + U * z, z - U * k, k, z);
      for (V = 0; V < F.length; V += 2)
        (L = F[V]),
          (b = F[V + 1]),
          (F[V] = L * Z + b * H + O),
          (F[V + 1] = L * D + b * Q + I);
      return (F[V - 2] = s), (F[V - 1] = h), F;
    }
  }
  function z(t) {
    function e(t, e, n, r) {
      (g = (n - t) / 3),
        (d = (r - e) / 3),
        u.push(t + g, e + d, n - g, r - d, n, r);
    }
    var n,
      r,
      i,
      s,
      l,
      h,
      u,
      f,
      c,
      g,
      d,
      v,
      y,
      m,
      x,
      w =
        (t + "")
          .replace(a, function (t) {
            var e = +t;
            return e < 1e-4 && -1e-4 < e ? 0 : e;
          })
          .match(o) || [],
      L = [],
      b = 0,
      P = 0,
      N = w.length,
      M = 0;
    if (!t || !isNaN(w[0]) || isNaN(w[1])) return L;
    for (n = 0; n < N; n++)
      if (
        ((y = l),
        isNaN(w[n]) ? (h = (l = w[n].toUpperCase()) !== w[n]) : n--,
        (i = +w[n + 1]),
        (s = +w[n + 2]),
        h && ((i += b), (s += P)),
        n || ((f = i), (c = s)),
        "M" === l)
      )
        u && (u.length < 8 ? (L.length -= 1) : (M += u.length)),
          (b = f = i),
          (P = c = s),
          (u = [i, s]),
          L.push(u),
          (n += 2),
          (l = "L");
      else if ("C" === l)
        h || (b = P = 0),
          (u = u || [0, 0]).push(
            i,
            s,
            b + 1 * w[n + 3],
            P + 1 * w[n + 4],
            (b += 1 * w[n + 5]),
            (P += 1 * w[n + 6])
          ),
          (n += 6);
      else if ("S" === l)
        (g = b),
          (d = P),
          ("C" !== y && "S" !== y) ||
            ((g += b - u[u.length - 4]), (d += P - u[u.length - 3])),
          h || (b = P = 0),
          u.push(g, d, i, s, (b += 1 * w[n + 3]), (P += 1 * w[n + 4])),
          (n += 4);
      else if ("Q" === l)
        (g = b + (2 / 3) * (i - b)),
          (d = P + (2 / 3) * (s - P)),
          h || (b = P = 0),
          (b += 1 * w[n + 3]),
          (P += 1 * w[n + 4]),
          u.push(g, d, b + (2 / 3) * (i - b), P + (2 / 3) * (s - P), b, P),
          (n += 4);
      else if ("T" === l)
        (g = b - u[u.length - 4]),
          (d = P - u[u.length - 3]),
          u.push(
            b + g,
            P + d,
            i + (2 / 3) * (b + 1.5 * g - i),
            s + (2 / 3) * (P + 1.5 * d - s),
            (b = i),
            (P = s)
          ),
          (n += 2);
      else if ("H" === l) e(b, P, (b = i), P), (n += 1);
      else if ("V" === l) e(b, P, b, (P = i + (h ? P - b : 0))), (n += 1);
      else if ("L" === l || "Z" === l)
        "Z" === l && ((i = f), (s = c), (u.closed = !0)),
          ("L" === l || 0.5 < p(b - i) || 0.5 < p(P - s)) &&
            (e(b, P, i, s), "L" === l && (n += 2)),
          (b = i),
          (P = s);
      else if ("A" === l) {
        if (
          ((m = w[n + 4]),
          (x = w[n + 5]),
          (g = w[n + 6]),
          (d = w[n + 7]),
          (r = 7),
          1 < m.length &&
            (m.length < 3
              ? ((d = g), (g = x), r--)
              : ((d = x), (g = m.substr(2)), (r -= 2)),
            (x = m.charAt(1)),
            (m = m.charAt(0))),
          (v = k(
            b,
            P,
            +w[n + 1],
            +w[n + 2],
            +w[n + 3],
            +m,
            +x,
            (h ? b : 0) + 1 * g,
            (h ? P : 0) + 1 * d
          )),
          (n += r),
          v)
        )
          for (r = 0; r < v.length; r++) u.push(v[r]);
        (b = u[u.length - 2]), (P = u[u.length - 1]);
      }
    return (
      (n = u.length) < 6
        ? (L.pop(), (n = 0))
        : u[0] === u[n - 2] && u[1] === u[n - 1] && (u.closed = !0),
      (L.totalPoints = M + n),
      L
    );
  }
  function B(t, e) {
    void 0 === e && (e = 1);
    for (var n = t[0], r = 0, o = [n, r], i = 2; i < t.length; i += 2)
      o.push(n, r, t[i], (r = ((t[i] - n) * e) / 2), (n = t[i]), -r);
    return o;
  }
  function j(t, e, n) {
    var r,
      o,
      i,
      a,
      s,
      l,
      h,
      p,
      d,
      v,
      y,
      m,
      x,
      w,
      b = t.length - 2,
      P = +t[0],
      N = +t[1],
      M = +t[2],
      C = +t[3],
      _ = [P, N, P, N],
      A = M - P,
      T = C - N;
    for (
      isNaN(n) && (n = Math.PI / 10), e = e || 0 === e ? +e : 1, s = 2;
      s < b;
      s += 2
    )
      (r = P),
        (o = N),
        (P = M),
        (N = C),
        (m = (l = A) * l + (p = T) * p),
        (x = (A = (M = +t[s + 2]) - P) * A + (T = (C = +t[s + 3]) - N) * T),
        (w = (h = M - r) * h + (d = C - o) * d),
        (y = ((i = Math.acos((m + x - w) / c(4 * m * x))) / Math.PI) * e),
        (v = c(m) * y),
        (y *= c(x)),
        (P === r && N === o) ||
          (n < i
            ? ((a = g(d, h)),
              _.push(
                L(P - f(a) * v),
                L(N - u(a) * v),
                L(P),
                L(N),
                L(P + f(a) * y),
                L(N + u(a) * y)
              ))
            : ((a = g(p, l)),
              _.push(L(P - f(a) * v), L(N - u(a) * v)),
              (a = g(T, A)),
              _.push(L(P), L(N), L(P + f(a) * y), L(N + u(a) * y))));
    return _.push(L(M), L(C), L(M), L(C)), _;
  }
  function E(t) {
    v(t[0]) && (t = [t]);
    var e,
      n,
      r,
      o,
      i = "",
      a = t.length;
    for (n = 0; n < a; n++) {
      for (
        o = t[n],
          i += "M" + L(o[0]) + "," + L(o[1]) + " C",
          e = o.length,
          r = 2;
        r < e;
        r++
      )
        i +=
          L(o[r++]) +
          "," +
          L(o[r++]) +
          " " +
          L(o[r++]) +
          "," +
          L(o[r++]) +
          " " +
          L(o[r++]) +
          "," +
          L(o[r]) +
          " ";
      o.closed && (i += "z");
    }
    return i;
  }
  function X(t) {
    return (
      t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
    );
  }
  function Y(t, e) {
    if (
      t.parentNode &&
      (q ||
        (function (t) {
          var e = t.ownerDocument || t;
          !(J in t.style) &&
            "msTransform" in t.style &&
            (K = (J = "msTransform") + "Origin");
          for (; e.parentNode && (e = e.parentNode); );
          return (
            (F = window),
            (H = new tt()),
            e && ((G = (q = e).documentElement), (U = e.body)),
            e
          );
        })(t))
    ) {
      var n = X(t),
        r = n
          ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
          : "http://www.w3.org/1999/xhtml",
        o = n ? (e ? "rect" : "g") : "div",
        i = 2 !== e ? 0 : 100,
        a = 3 === e ? 100 : 0,
        s = "position:absolute;display:block;pointer-events:none;",
        l = q.createElementNS
          ? q.createElementNS(r.replace(/^https/, "http"), o)
          : q.createElement(o);
      return (
        e &&
          (n
            ? ((D = D || Y(t)),
              l.setAttribute("width", 1),
              l.setAttribute("height", 1),
              l.setAttribute("transform", "translate(" + i + "," + a + ")"),
              D.appendChild(l))
            : (Z || ((Z = Y(t)).style.cssText = s),
              (l.style.cssText =
                s + "width:1px;height:1px;top:" + a + "px;left:" + i + "px"),
              Z.appendChild(l))),
        l
      );
    }
    throw "Need document and parent.";
  }
  function V(t, e, n, r, o, i, a) {
    return (t.a = e), (t.b = n), (t.c = r), (t.d = o), (t.e = i), (t.f = a), t;
  }
  var q,
    F,
    G,
    U,
    Z,
    D,
    H,
    Q,
    J = "transform",
    K = J + "Origin",
    W = [],
    $ = [],
    tt =
      (((Q = et.prototype).inverse = function () {
        var t = this.a,
          e = this.b,
          n = this.c,
          r = this.d,
          o = this.e,
          i = this.f,
          a = t * r - e * n;
        return V(
          this,
          r / a,
          -e / a,
          -n / a,
          t / a,
          (n * i - r * o) / a,
          -(t * i - e * o) / a
        );
      }),
      (Q.multiply = function (t) {
        var e = this.a,
          n = this.b,
          r = this.c,
          o = this.d,
          i = this.e,
          a = this.f,
          s = t.a,
          l = t.c,
          h = t.b,
          u = t.d,
          f = t.e,
          p = t.f;
        return V(
          this,
          s * e + h * r,
          s * n + h * o,
          l * e + u * r,
          l * n + u * o,
          i + f * e + p * r,
          a + f * n + p * o
        );
      }),
      (Q.equals = function (t) {
        var e = this.a,
          n = this.b,
          r = this.c,
          o = this.d,
          i = this.e,
          a = this.f;
        return (
          e === t.a &&
          n === t.b &&
          r === t.c &&
          o === t.d &&
          i === t.e &&
          a === t.f
        );
      }),
      (Q.apply = function (t, e) {
        void 0 === e && (e = {});
        var n = t.x,
          r = t.y,
          o = this.a,
          i = this.b,
          a = this.c,
          s = this.d,
          l = this.e,
          h = this.f;
        return (e.x = n * o + r * a + l), (e.y = n * i + r * s + h), e;
      }),
      et);
  function et(t, e, n, r, o, i) {
    void 0 === t && (t = 1),
      void 0 === e && (e = 0),
      void 0 === n && (n = 0),
      void 0 === r && (r = 1),
      void 0 === o && (o = 0),
      void 0 === i && (i = 0),
      V(this, t, e, n, r, o, i);
  }
  function nt(t, e) {
    if (!t || !t.parentNode) return new tt();
    var n = X(t) ? W : $,
      r = (function (t) {
        var e,
          n,
          r,
          o,
          i,
          a = X(t),
          s = t === a,
          l = a ? W : $;
        return t === F
          ? t
          : (l.length || l.push(Y(t, 1), Y(t, 2), Y(t, 3)),
            (e = a ? D : Z),
            a
              ? ((r = s ? { x: 0, y: 0 } : t.getBBox()),
                (n = t.transform ? t.transform.baseVal : []).length
                  ? ((o = (n = n.consolidate().matrix).a * r.x + n.c * r.y),
                    (i = n.b * r.x + n.d * r.y))
                  : ((n = H),
                    "g" === t.tagName.toLowerCase()
                      ? (o = i = 0)
                      : ((o = r.x), (i = r.y))),
                e.setAttribute(
                  "transform",
                  "matrix(" +
                    n.a +
                    "," +
                    n.b +
                    "," +
                    n.c +
                    "," +
                    n.d +
                    "," +
                    (n.e + o) +
                    "," +
                    (n.f + i) +
                    ")"
                ),
                (s ? a : t.parentNode).appendChild(e))
              : ((e.style.top = t.offsetTop + "px"),
                (e.style.left = t.offsetLeft + "px"),
                (n = F.getComputedStyle(t)),
                (e.style[J] = n[J]),
                (e.style[K] = n[K]),
                (e.style.position =
                  "fixed" === n.position ? "fixed" : "absolute"),
                t.parentNode.appendChild(e)),
            e);
      })(t),
      o = n[0].getBoundingClientRect(),
      i = n[1].getBoundingClientRect(),
      a = n[2].getBoundingClientRect(),
      s = r.parentNode,
      l = (function t(e) {
        return (
          "fixed" === F.getComputedStyle(e).position ||
          ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
        );
      })(t),
      h = new tt(
        (i.left - o.left) / 100,
        (i.top - o.top) / 100,
        (a.left - o.left) / 100,
        (a.top - o.top) / 100,
        o.left +
          (l
            ? 0
            : F.pageXOffset ||
              q.scrollLeft ||
              G.scrollLeft ||
              U.scrollLeft ||
              0),
        o.top +
          (l
            ? 0
            : F.pageYOffset || q.scrollTop || G.scrollTop || U.scrollTop || 0)
      );
    return s.removeChild(r), e ? h.inverse() : h;
  }
  function rt(t, e, n, r) {
    for (var o = e.length, i = r, a = 0; a < o; a++)
      (t[i] = parseFloat(e[a][n])), (i += 2);
    return t;
  }
  function ot(t, e, n) {
    return parseFloat(t._gsap.get(t, e, n || "px")) || 0;
  }
  function it(t) {
    var e,
      n = t[0],
      r = t[1];
    for (e = 2; e < t.length; e += 2) (n = t[e] += n), (r = t[e + 1] += r);
  }
  function at(t, e, n, r, o, i, a) {
    return (
      (e =
        "cubic" === a.type
          ? [e]
          : (e.unshift(ot(n, r, a.unitX), o ? ot(n, o, a.unitY) : 0),
            a.relative && it(e),
            [(o ? j : B)(e, a.curviness)])),
      (e = i(dt(e, n, a))),
      vt(t, n, r, e, "x", a.unitX),
      o && vt(t, n, o, e, "y", a.unitY),
      T(e, a.resolution || (0 === a.curviness ? 20 : 12))
    );
  }
  function st(t) {
    return t;
  }
  var lt,
    ht,
    ut,
    ft,
    pt = ["x", "translateX", "left", "marginLeft"],
    ct = ["y", "translateY", "top", "marginTop"],
    gt = Math.PI / 180,
    dt = function (t, e, n) {
      var r,
        o,
        i,
        a,
        s,
        l,
        h,
        u,
        f,
        p,
        c = n.align,
        g = n.matrix,
        d = n.offsetX,
        v = n.offsetY;
      return t && t.length
        ? (c &&
            ("self" === c || (s = ft(c)[0] || e) === e
              ? I(
                  t,
                  1,
                  0,
                  0,
                  1,
                  (r = ot(e, "x") - t[0][0]),
                  (o = ot(e, "y") - t[0][1])
                )
              : ((i = lt
                  .to(e, { xPercent: 0, yPercent: 0, x: 0, y: 0 })
                  .progress(1)),
                (a = nt(e)),
                i.render(-1).kill(),
                (o =
                  s.getTotalLength && "path" === s.tagName.toLowerCase()
                    ? ((l = P(s)),
                      (h = nt(s.parentNode)),
                      (r = l[0][0]),
                      l[0][1])
                    : ((h = nt(s)), (r = 0))),
                (f = h.a * r + h.c * o + h.e - a.e),
                (p = h.b * r + h.d * o + h.f - a.f),
                (r = (u = nt(e.parentNode, !0)).a * f + u.c * p),
                (o = u.b * f + u.d * p),
                (f = t[0][0]),
                (p = t[0][1]),
                h.multiply(u),
                (r -= h.a * f + h.c * p),
                (o -= h.b * f + h.d * p),
                I(t, h.a, h.b, h.c, h.d, r, o))),
          g
            ? I(t, g.a, g.b, g.c, g.d, g.e, g.f)
            : (d || v) && I(t, 1, 0, 0, 1, d || 0, v || 0),
          t)
        : P("M0,0L0,0");
    },
    vt = function (t, e, n, r, o, i) {
      var a = e._gsap,
        s = (t._pt = new ht(t._pt, e, n, 0, 0, st, 0, a.set(e, n, t)));
      (s.u = ut(a.get(e, n, i)) || 0),
        (s.path = r),
        (s.pp = o),
        t._props.push(n);
    },
    yt = {
      version: "3.0.4",
      name: "motionPath",
      register: function (t, e, n) {
        (ut = (lt = t).utils.getUnit), (ft = lt.utils.toArray), (ht = n);
      },
      init: function (t, e) {
        if (!lt) return !1;
        ("object" == typeof e && !e.style && e.path) || (e = { path: e });
        var n,
          r,
          o,
          i,
          a = [],
          s = e.path,
          l = s[0],
          h = e.autoRotate,
          u = (function (t, e) {
            return function (n) {
              return t || 1 !== e ? _(n, t, e) : n;
            };
          })(e.start, "end" in e ? e.end : 1);
        if (
          ((this.rawPaths = a),
          (this.target = t),
          (this.rotate = h || 0 === h) &&
            ((this.rOffset = parseFloat(h) || 0),
            (this.radians = !!e.useRadians),
            (this.rProp = e.rotation || "rotation"),
            (this.rSet = t._gsap.set(t, this.rProp, this)),
            (this.ru = ut(t._gsap.get(t, this.rProp)) || 0)),
          !Array.isArray(s) || "closed" in s || "number" == typeof l)
        )
          T((n = u(dt(P(e.path), t, e))), e.resolution),
            a.push(n),
            vt(this, t, e.x || "x", n, "x", e.unitX || "px"),
            vt(this, t, e.y || "y", n, "y", e.unitY || "px");
        else {
          for (r in l) ~pt.indexOf(r) ? (o = r) : ~ct.indexOf(r) && (i = r);
          for (r in (o && i
            ? a.push(
                at(
                  this,
                  rt(rt([], s, o, 0), s, i, 1),
                  t,
                  e.x || o,
                  e.y || i,
                  u,
                  e
                )
              )
            : (o = i = 0),
          l))
            r !== o &&
              r !== i &&
              a.push(at(this, rt([], s, r, 0), t, r, 0, u, e));
        }
      },
      render: function (t, e) {
        var n = e.rawPaths,
          r = n.length,
          o = e._pt;
        for (1 < t ? (t = 1) : t < 0 && (t = 0); r--; )
          O(n[r], t, !r && e.rotate, n[r]);
        for (; o; ) o.set(o.t, o.p, o.path[o.pp] + o.u, o.d, t), (o = o._next);
        e.rotate &&
          e.rSet(
            e.target,
            e.rProp,
            n[0].angle * (e.radians ? gt : 1) + e.rOffset + e.ru,
            e,
            t
          );
      },
      getLength: function (t) {
        return T(P(t)).totalLength;
      },
      sliceRawPath: _,
      getRawPath: P,
      pointsToSegment: j,
      stringToRawPath: z,
      rawPathToString: E,
      transformRawPath: I,
      convertToPath: function (t, e) {
        return ft(t).map(function (t) {
          return (function (t, e) {
            var n,
              r,
              o,
              a,
              s,
              l,
              h,
              u,
              f,
              p,
              c,
              g,
              d,
              v,
              y,
              m,
              x,
              w,
              L,
              b,
              P,
              N,
              C = t.tagName.toLowerCase(),
              _ = 0.552284749831;
            return "path" !== C && t.getBBox
              ? ((l = (function (t, e) {
                  var n,
                    r = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "path"
                    ),
                    o = [].slice.call(t.attributes),
                    i = o.length;
                  for (e = "," + e + ","; -1 < --i; )
                    (n = o[i].nodeName.toLowerCase()),
                      e.indexOf("," + n + ",") < 0 &&
                        r.setAttributeNS(null, n, o[i].nodeValue);
                  return r;
                })(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
                (N = (function (t, e) {
                  for (
                    var n = e ? e.split(",") : [], r = {}, o = n.length;
                    -1 < --o;

                  )
                    r[n[o]] = +t.getAttribute(n[o]) || 0;
                  return r;
                })(t, M[C])),
                "rect" === C
                  ? ((a = N.rx),
                    (s = N.ry),
                    (r = N.x),
                    (o = N.y),
                    (p = N.width - 2 * a),
                    (c = N.height - 2 * s),
                    (n =
                      a || s
                        ? "M" +
                          (m = (v = (d = r + a) + p) + a) +
                          "," +
                          (w = o + s) +
                          " V" +
                          (L = w + c) +
                          " C" +
                          [
                            m,
                            (b = L + s * _),
                            (y = v + a * _),
                            (P = L + s),
                            v,
                            P,
                            v - (v - d) / 3,
                            P,
                            d + (v - d) / 3,
                            P,
                            d,
                            P,
                            (g = r + a * (1 - _)),
                            P,
                            r,
                            b,
                            r,
                            L,
                            r,
                            L - (L - w) / 3,
                            r,
                            w + (L - w) / 3,
                            r,
                            w,
                            r,
                            (x = o + s * (1 - _)),
                            g,
                            o,
                            d,
                            o,
                            d + (v - d) / 3,
                            o,
                            v - (v - d) / 3,
                            o,
                            v,
                            o,
                            y,
                            o,
                            m,
                            x,
                            m,
                            w,
                          ].join(",") +
                          "z"
                        : "M" +
                          (r + p) +
                          "," +
                          o +
                          " v" +
                          c +
                          " h" +
                          -p +
                          " v" +
                          -c +
                          " h" +
                          p +
                          "z"))
                  : "circle" === C || "ellipse" === C
                  ? ((u =
                      "circle" === C
                        ? (a = s = N.r) * _
                        : ((a = N.rx), (s = N.ry) * _)),
                    (n =
                      "M" +
                      ((r = N.cx) + a) +
                      "," +
                      (o = N.cy) +
                      " C" +
                      [
                        r + a,
                        o + u,
                        r + (h = a * _),
                        o + s,
                        r,
                        o + s,
                        r - h,
                        o + s,
                        r - a,
                        o + u,
                        r - a,
                        o,
                        r - a,
                        o - u,
                        r - h,
                        o - s,
                        r,
                        o - s,
                        r + h,
                        o - s,
                        r + a,
                        o - u,
                        r + a,
                        o,
                      ].join(",") +
                      "z"))
                  : "line" === C
                  ? (n = "M" + N.x1 + "," + N.y1 + " L" + N.x2 + "," + N.y2)
                  : ("polyline" !== C && "polygon" !== C) ||
                    ((n =
                      "M" +
                      (r = (f =
                        (t.getAttribute("points") + "").match(i) ||
                        []).shift()) +
                      "," +
                      (o = f.shift()) +
                      " L" +
                      f.join(",")),
                    "polygon" === C && (n += "," + r + "," + o + "z")),
                l.setAttribute("d", E((l._gsRawPath = z(n)))),
                e &&
                  t.parentNode &&
                  (t.parentNode.insertBefore(l, t),
                  t.parentNode.removeChild(t)),
                l)
              : t;
          })(t, !1 !== e);
        });
      },
      getGlobalMatrix: nt,
      getPositionOnPath: O,
      cacheRawPathMeasurements: T,
      arrayToRawPath: function (t, e) {
        var n = rt(rt([], t, (e = e || {}).x || "x", 0), t, e.y || "y", 1);
        return (
          e.relative && it(n), ["cubic" === e.type ? n : j(n, e.curviness)]
        );
      },
    };
  !(
    lt ||
    ("undefined" != typeof window &&
      (lt = window.gsap) &&
      lt.registerPlugin &&
      lt)
  ) || lt.registerPlugin(yt),
    (t.MotionPathPlugin = yt),
    (t.default = yt),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
