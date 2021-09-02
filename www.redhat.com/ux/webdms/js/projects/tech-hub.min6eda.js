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
    e('a[data-toggle="tab"]').on("shown.bs.tab", function (a) {
      var t = a.target.getAttribute("data-key");
      e(".categ-info").removeClass("active"),
        e('.tech-grid [class*="cell"]').removeClass("active"),
        e(".product").removeClass("active"),
        e(".tech-cards").removeClass("active"),
        e("." + t).addClass("active");
    });
  });
})(jQuery);
