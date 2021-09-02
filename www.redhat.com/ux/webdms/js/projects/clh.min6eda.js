/* ========================================================================================== */
/*  Project: Studio - Web
/*  Author: Digital Business
/*  Date: Wed Aug 18 2021 17:07:22 GMT+0000 (Coordinated Universal Time)
/*  
/*  Copyright © 2021 Red Hat, Inc.
/*  https://www.redhat.com
/* ========================================================================================== */

!(function (e) {
  e(document).ready(function () {
    e("[data-viewport]").waypoint({
      offset: "100%",
      handler: function (o) {
        var s = this.element ? this.element : this;
        "down" == o && e(s).addClass("viewport-in"),
          "up" == o && e(s).removeClass("viewport-in");
      },
    });
  }),
    e(document).ready(function () {
      if (e(".clh-audio audio").length) Plyr.setup(".clh-audio audio");
    }),
    e('[data-toggle="tooltip"]').tooltip({ boundary: "viewport" }),
    e(document).ready(function () {
      var o = e("<div class='clh-nav-shelf-screen'></div>").appendTo("body"),
        s = e(".clh-nav-shelf"),
        t = e(".clh-nav-toggle-wrapper").find(".btn-toggle");
      function n() {
        o.removeClass("shelf-open"),
          e(".btn-toggle").removeClass("active"),
          s.find(".accordion-panel").collapse("hide"),
          s.removeClass("shelf-open"),
          e("body").css("overflow", "auto");
      }
      e(".accordion-panel").on("show.bs.collapse", function () {
        e(this)
          .parent(".nav-group-wrapper")
          .css("backgroundPosition", "left 0px");
      }),
        e(".accordion-panel").on("hide.bs.collapse", function () {
          e(this)
            .parent(".nav-group-wrapper")
            .css("backgroundPosition", "left 100px");
        }),
        e("[data-toggle='nav-shelf']").on("click", function (a) {
          return (
            a.preventDefault(),
            s.hasClass("shelf-open")
              ? n()
              : (null != (l = e(this).data("toggle-panel")) &&
                  e(l).length > 0 &&
                  e(l).collapse("show"),
                o.on("click", function () {
                  n();
                }),
                t.addClass("active"),
                s.addClass("shelf-open"),
                o.addClass("shelf-open"),
                void e("body").css("overflow", "hidden"))
          );
          var l;
        });
    }),
    e(document).ready(function () {
      "transcript-tray" === window.location.hash.substr(1) &&
        (e(".tab-show-notes, .tab-content #show-notes").removeClass("active"),
        e(".tab-content #show-notes").removeClass("show"),
        e(".tab-transcript, .tab-content #transcript-tray").addClass("active"),
        e(".tab-content #transcript-tray").addClass("show"));
    }),
    e(".guest-carousel").length &&
      e(".guest-carousel").slick({
        appendArrows: ".carousel-nav",
        appendDots: ".carousel-dots",
        dots: !0,
        infinite: !1,
        mobileFirst: !0,
        nextArrow: ".carousel-next",
        prevArrow: ".carousel-prev",
        responsive: [
          { breakpoint: 320, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          { breakpoint: 639, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 991, settings: { slidesToShow: 4, slidesToScroll: 1 } },
        ],
        slidesToScroll: 1,
        slidesToShow: 4,
        speed: 500,
        zIndex: 1e3,
      }),
    e(".modal-carousel").length &&
      e(".modal-carousel").slick({
        appendArrows: ".carousel-nav",
        infinite: !1,
        mobileFirst: !0,
        nextArrow: ".carousel-next",
        prevArrow: ".carousel-prev",
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500,
        zIndex: 1e3,
      });
})(jQuery);
