!(function (n, a, i) {
  "use strict";
  (n.digitalData = n.digitalData || {}),
    i.isArray(n.digitalData.event) || (n.digitalData.event = []),
    (n.redhat = n.redhat || {}),
    (n.redhat.ddo = {
      dispatchEvent: function (t) {
        return (
          t &&
            a.body &&
            i.isFunction(a.body.dispatchEvent) &&
            (i.isFunction(a.createEvent)
              ? (e = a.createEvent("Event")).initEvent(t, !0, !0)
              : CustomEvent &&
                (e = new CustomEvent(t, { buddles: !0, cancellable: !0 })),
            e && a.body.dispatchEvent(e)),
          this
        );
        var e;
      },
      addEvent: function (t) {
        if (!i.isPlainObject(t)) return this;
        var e = {
          eventInfo: i.extend(
            !0,
            {
              eventName: "",
              eventAction: "",
              timestamp: new Date(),
              processed: { adobeAnalytics: !1 },
            },
            t
          ),
        };
        return n.digitalData.event.push(e), this;
      },
      get: function (t) {
        return t ? n.digitalData : i.extend(!0, {}, n.digitalData);
      },
      set: function (t) {
        return (n.digitalData = t), this;
      },
      extend: function (t) {
        return i.extend(!0, n.digitalData, t), this;
      },
    });
})(window, document, jQuery);
