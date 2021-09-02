/* ========================================================================================== */
/*  Project: Studio - Web
/*  Author: Digital Business
/*  Date: Wed Aug 18 2021 17:07:22 GMT+0000 (Coordinated Universal Time)
/*  
/*  Copyright © 2021 Red Hat, Inc.
/*  https://www.redhat.com
/* ========================================================================================== */

!(function (o) {
  o("document").ready(function () {
    if (o(".hub-hero").length) {
      var r = gsap.timeline({ paused: !0 }),
        e = o(".hub-hero [id*='container-']");
      r.from(
        ".hub-hero #larger-orbit #orbit-01",
        {
          duration: 1,
          drawSVG: 0,
          fill: "rgba(231,231,231,0)",
          ease: "sine.out",
        },
        0
      ),
        r.from(
          ".hub-hero #larger-orbit #orbit-02",
          {
            duration: 1,
            drawSVG: 0,
            fill: "rgba(231,231,231,0)",
            ease: "sine.out",
          },
          0.25
        ),
        r.from(
          ".hub-hero #larger-orbit #orbit-03",
          {
            duration: 1,
            drawSVG: 0,
            fill: "rgba(231,231,231,0)",
            ease: "sine.out",
          },
          0.5
        ),
        r.from(
          ".hub-hero #larger-orbit #tl-large-block",
          { duration: 1, opacity: 0, ease: "power2.inOut" },
          1
        ),
        r.from(
          ".hub-hero #larger-orbit #tl-small-block",
          { duration: 1, opacity: 0, ease: "power2.inOut" },
          1
        ),
        r.from(
          ".hub-hero #larger-orbit #bl-large-block",
          { duration: 1, opacity: 0, ease: "power2.inOut" },
          1.25
        ),
        r.from(
          ".hub-hero #larger-orbit #bl-small-block",
          { duration: 1, opacity: 0, ease: "power2.inOut" },
          1.25
        ),
        r.from(
          ".hub-hero #larger-orbit #mini-orbit-planet",
          { duration: 1, opacity: 0, ease: "power2.inOut" },
          1.5
        ),
        r.from(
          ".hub-hero #larger-orbit",
          {
            rotate: "+360",
            transformOrigin: "50% 50%",
            duration: 8,
            repeat: -1,
            ease: "none",
          },
          0.51
        ),
        r.from(
          ".hub-hero #larger-orbit #mini-orbit-planet",
          {
            rotate: "360_ccw",
            transformOrigin: "50% 50%",
            duration: 10,
            repeat: -1,
            ease: "none",
          },
          0.51
        ),
        r.from(
          ".hub-hero #tl-box",
          { duration: 1, drawSVG: 0, ease: "power2.inOut" },
          1.75
        ),
        r.from(
          ".hub-hero #br-box",
          { duration: 1, drawSVG: 0, ease: "power2.inOut" },
          2
        ),
        r.from(
          ".hub-hero #key-cloud #key-cloud-outline",
          {
            duration: 1,
            drawSVG: 0,
            fill: "rgba(231,231,231,0)",
            ease: "sine.out",
          },
          2.25
        ),
        r.from(
          ".hub-hero #key-cloud #red-cloud",
          { duration: 1, opacity: 0, ease: "power2.inOut" },
          2.5
        ),
        r.from(
          ".hub-hero #key-cloud #keyhole",
          { duration: 1, opacity: 0, ease: "power2.inOut" },
          2.75
        ),
        r.from(
          ".hub-hero #top-cloud #top-cloud-outline",
          {
            duration: 1,
            drawSVG: 0,
            fill: "rgba(231,231,231,0)",
            ease: "sine.out",
          },
          2.25
        ),
        r.from(
          ".hub-hero #top-cloud #white-cloud",
          { duration: 1, opacity: 0, ease: "power2.inOut" },
          2.5
        ),
        r.from(
          ".hub-hero #right-server-stack",
          { duration: 1, opacity: 0, ease: "power2.inOut" },
          2.75
        ),
        r.from(
          ".hub-hero #left-server-stack",
          { duration: 1, opacity: 0, ease: "power2.inOut" },
          3
        ),
        r.from(
          ".hub-hero #main-window",
          { duration: 1, opacity: 0, ease: "power2.inOut" },
          3.25
        ),
        o(window).on("load", function () {
          r.play();
        });
    }
    if (o(".hybrid-cloud-hero").length) {
      var a = gsap.timeline({ paused: !0 });
      e = o(".hybrid-cloud-hero [id*='container-']");
      MotionPathPlugin.convertToPath("#red-outline"),
        gsap.set(".hybrid-cloud-hero #circle", {
          rotate: "-120",
          transformOrigin: "50% 50%",
        }),
        a.from(
          ".hybrid-cloud-hero #app",
          {
            duration: 1.5,
            opacity: 0,
            scale: 0.75,
            transformOrigin: "50% 50%",
            ease: "back.inOut",
          },
          2
        ),
        a.from(
          ".hybrid-cloud-hero #circle #red-outline",
          { duration: 2.75, drawSVG: 0, ease: "sine.out" },
          1
        ),
        a.from(
          ".hybrid-cloud-hero #gray-cloud .cloud",
          {
            duration: 1,
            drawSVG: 0,
            fill: "rgba(231,231,231,0)",
            ease: "power2.inOut",
          },
          0.75
        ),
        a.from(
          ".hybrid-cloud-hero #gray-cloud .line",
          { duration: 1, drawSVG: 0, ease: "power2.inOut" },
          1
        ),
        a.from(
          ".hybrid-cloud-hero #secure-cloud .cloud",
          {
            duration: 1,
            drawSVG: 0,
            fill: "rgba(255,255,255,0)",
            ease: "power2.inOut",
          },
          1.25
        ),
        a.from(
          ".hybrid-cloud-hero #secure-cloud .keyhole",
          { duration: 1, opacity: 0, ease: "power2.inOut" },
          1.5
        ),
        a.from(
          ".hybrid-cloud-hero #gray-server",
          { duration: 1, opacity: 0, ease: "power2.inOut" },
          1.5
        ),
        a.from(
          ".hybrid-cloud-hero #gray-server #dashes",
          { duration: 2, strokeDasharray: "800", ease: "expo.out" },
          1
        ),
        a.from(
          ".hybrid-cloud-hero #white-server",
          { duration: 1, opacity: 0, ease: "power2.inOut" },
          2
        ),
        a.from(e, { duration: 1, opacity: 0, stagger: 3, ease: "none" }, 2.5),
        a.to(
          e,
          {
            motionPath: {
              path: "#red-outline",
              align: "#red-outline",
              offsetX: 8,
              offsetY: 30,
            },
            duration: function () {
              return 15 + 3 * Math.random();
            },
            transformOrigin: "50% 50%",
            stagger: { repeat: -1, each: 3 },
            ease: "none",
          },
          2.5
        ),
        o(window).on("load", function () {
          a.play();
        });
    }
    if (o(".automation-hero").length) {
      var t = gsap.timeline({ paused: !0 }),
        i = o(".automation-hero #track [id*='circle-']");
      t.from(
        ".automation-hero #app-screens",
        {
          duration: 1,
          opacity: 0,
          scale: 0.75,
          transformOrigin: "50% 50%",
          ease: "back.inOut",
        },
        0
      ),
        t.from(
          ".automation-hero #track #motion-path",
          { duration: 3, drawSVG: 0, ease: "sine.inOut" },
          0.6
        ),
        t.from(
          i,
          {
            duration: 0.5,
            transformOrigin: "50% 50%",
            scale: 0,
            stagger: 0.3,
            ease: "back.out",
          },
          1.1
        ),
        t.from(
          ".automation-hero #white-circle #semi-right",
          { duration: 0.75, drawSVG: 0, ease: "power1.in" },
          1.5
        ),
        t.from(
          ".automation-hero #white-circle #semi-left",
          { duration: 1.2, drawSVG: 0, ease: "power1.out" },
          2.25
        ),
        t.from(
          ".automation-hero #red-cloud",
          {
            duration: 0.75,
            drawSVG: 0,
            fill: "rgba(255,0,0,0)",
            ease: "power2.inOut",
          },
          1.5
        ),
        t.from(
          ".automation-hero #gray-cloud #cloud",
          {
            duration: 0.75,
            drawSVG: 0,
            fill: "rgba(231,231,231,0)",
            ease: "power2.inOut",
          },
          2
        ),
        t.from(
          ".automation-hero #gray-cloud #line",
          { duration: 0.75, drawSVG: 0, ease: "power2.inOut" },
          2.25
        ),
        t.from(
          ".automation-hero #code-1",
          { duration: 1.5, opacity: 0, ease: "power2.inOut" },
          1.5
        ),
        t.to(
          ".automation-hero #code-1",
          {
            motionPath: {
              path: "#motion-path",
              align: "#motion-path",
              offsetX: -30,
              offsetY: -30,
            },
            transformOrigin: "50% 50%",
            duration: 11.5,
            repeat: -1,
            ease: "none",
          },
          0
        ),
        t.from(
          ".automation-hero #code-2",
          { duration: 1.5, opacity: 0, ease: "power2.inOut" },
          4
        ),
        t.to(
          ".automation-hero #code-2",
          {
            motionPath: {
              path: "#motion-path",
              align: "#motion-path",
              offsetX: -30,
              offsetY: -30,
            },
            transformOrigin: "50% 50%",
            duration: 12,
            repeat: -1,
            ease: "none",
          },
          4
        ),
        o(window).on("load", function () {
          t.play();
        });
    }
    if (o(".cloud-native-hero").length) {
      MotionPathPlugin.convertToPath("#white-circle");
      var n = gsap.timeline({ paused: !0 });
      n.from(
        ".cloud-native-hero #red-cloud",
        {
          duration: 0.75,
          drawSVG: 0,
          fill: "rgba(255,0,0,0)",
          ease: "power2.inOut",
        },
        0
      ),
        n.from(
          ".cloud-native-hero #api",
          {
            duration: 0.75,
            transformOrigin: "50% 50%",
            scale: 0,
            opacity: 0,
            ease: "power2.inOut",
          },
          0.25
        ),
        n.from(
          ".cloud-native-hero #gray-cloud",
          { duration: 0.75, opacity: 0, x: "-80px", ease: "power5.inOut" },
          0.75
        ),
        n.from(
          ".cloud-native-hero #gray-cloud .cloud",
          { duration: 0.75, drawSVG: 0, ease: "power5.inOut" },
          0.85
        ),
        n.from(
          ".cloud-native-hero #container-1",
          {
            duration: 0.5,
            transformOrigin: "50% 50%",
            rotate: "90deg",
            scale: 0,
            ease: "power5.inOut",
          },
          1
        ),
        n.from(
          ".cloud-native-hero #monitor",
          {
            duration: 1,
            opacity: 0,
            scale: 0.75,
            transformOrigin: "50% 50%",
            ease: "back.inOut",
          },
          1
        ),
        n.from(
          ".cloud-native-hero #container-2",
          { duration: 1.5, opacity: 0, ease: "power5.inOut" },
          1.5
        ),
        n.to(
          ".cloud-native-hero #container-2",
          {
            motionPath: {
              path: "#white-circle",
              align: "#container-2",
              alignOrigin: [0.5, 0.5],
            },
            duration: 14,
            repeat: -1,
            ease: "none",
          },
          0
        ),
        n.from(
          ".cloud-native-hero #container-3",
          { duration: 1.5, opacity: 0, ease: "power5.inOut" },
          2
        ),
        n.to(
          ".cloud-native-hero #container-3",
          {
            motionPath: {
              path: "#white-circle",
              align: "#container-3",
              alignOrigin: [1, 1],
            },
            duration: 15,
            repeat: -1,
            ease: "none",
          },
          2
        ),
        o(window).on("load", function () {
          n.play();
        });
    }
  });
})(jQuery);
