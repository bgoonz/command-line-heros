/* ========================================================================================== */
/*  Project: Studio - Web
/*  Author: Digital Business
/*  Date: Wed Aug 18 2021 17:07:22 GMT+0000 (Coordinated Universal Time)
/*  
/*  Copyright © 2021 Red Hat, Inc.
/*  https://www.redhat.com
/* ========================================================================================== */

!(function (e) {
  (e.belowthefold = function (t, o) {
    return (
      e(window).height() + e(window).scrollTop() <=
      e(t).offset().top - o.threshold
    );
  }),
    (e.abovethetop = function (t, o) {
      return (
        e(window).scrollTop() >= e(t).offset().top + e(t).height() - o.threshold
      );
    }),
    (e.rightofscreen = function (t, o) {
      return (
        e(window).width() + e(window).scrollLeft() <=
        e(t).offset().left - o.threshold
      );
    }),
    (e.leftofscreen = function (t, o) {
      return (
        e(window).scrollLeft() >=
        e(t).offset().left + e(t).width() - o.threshold
      );
    }),
    (e.inviewport = function (t, o) {
      return !(
        e.rightofscreen(t, o) ||
        e.leftofscreen(t, o) ||
        e.belowthefold(t, o) ||
        e.abovethetop(t, o)
      );
    }),
    e.extend(e.expr[":"], {
      "below-the-fold": function (t, o, n) {
        return e.belowthefold(t, { threshold: 0 });
      },
      "above-the-top": function (t, o, n) {
        return e.abovethetop(t, { threshold: 0 });
      },
      "left-of-screen": function (t, o, n) {
        return e.leftofscreen(t, { threshold: 0 });
      },
      "right-of-screen": function (t, o, n) {
        return e.rightofscreen(t, { threshold: 0 });
      },
      "in-viewport": function (t, o, n) {
        return e.inviewport(t, { threshold: 0 });
      },
    });
})(jQuery);
