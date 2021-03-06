/*! webrh v1.136.0 */
var rh = rh || {};
(rh.webrh = rh.webrh || {}),
  (function ($) {
    (rh.webrh.load = function (context) {
      Object.keys ||
        (Object.keys = (function () {
          "use strict";
          var hasOwnProperty = Object.prototype.hasOwnProperty,
            hasDontEnumBug = !{ toString: null }.propertyIsEnumerable(
              "toString"
            ),
            dontEnums = [
              "toString",
              "toLocaleString",
              "valueOf",
              "hasOwnProperty",
              "isPrototypeOf",
              "propertyIsEnumerable",
              "constructor",
            ],
            dontEnumsLength = dontEnums.length;
          return function (obj) {
            if (
              "function" != typeof obj &&
              ("object" != typeof obj || null === obj)
            )
              throw new TypeError("Object.keys called on non-object");
            var prop,
              i,
              result = [];
            for (prop in obj)
              hasOwnProperty.call(obj, prop) && result.push(prop);
            if (hasDontEnumBug)
              for (i = 0; i < dontEnumsLength; i++)
                hasOwnProperty.call(obj, dontEnums[i]) &&
                  result.push(dontEnums[i]);
            return result;
          };
        })()),
        (rh.webrh.utils = {
          isIE11: function () {
            return !!window.MSInputMethodContext && !!document.documentMode;
          },
          lg: function () {
            return $(window).width() >= 1200;
          },
          md: function () {
            return $(window).width() >= 992 && $(window).width() < 1200;
          },
          sm: function () {
            return $(window).width() >= 768 && $(window).width() < 992;
          },
          xs: function () {
            return $(window).width() >= 480 && $(window).width() < 768;
          },
          xxs: function () {
            return $(window).width() < 480;
          },
          getHeight: function () {
            return $(window).height();
          },
          getWidth: function () {
            return $(window).width();
          },
          getElHeight: function (element) {
            var height = 0;
            return (
              $(element).length > 0 && (height = $(element).outerHeight()),
              height
            );
          },
          breakpoints: ["xxs", "xs", "sm", "md", "lg"],
          url: {
            root: window.location.hostname,
            path: window.location.pathname.split("/"),
          },
        }),
        (rh.webrh.scrollToTop = function ($el, afterFunction) {
          $("html, body").animate(
            { scrollTop: $("body").position().top + "px" },
            1200,
            "linear",
            afterFunction
          );
        }),
        (rh.webrh.menu = {
          attr: {
            toggleID: "data-rh-toggle-id",
            state: "data-rh-state",
            expanded: "aria-expanded",
            hidden: "aria-hidden",
            selected: "aria-selected",
            toggleOpen: "data-rh-toggle-open",
            scroll: "data-rh-scroll-to",
            stickyState: "data-rh-sticky-state",
            menu: "data-rh-menu",
            menuContext: "data-rh-menu-context",
            menuType: "data-rh-menu-main-type",
            navLabel: "data-rh-navigation-label",
            navType: "data-rh-navigation-type",
            navLink: "data-rh-navigation-link-for",
            subType: "data-rh-nav-subtype",
            menuID: "data-rh-menu-id",
            hasDynamic: "data-rh-dynamic",
          },
          classes: {
            hashValue: "rh-band-header--hash-offset",
            bandLayout: "rh-band--layout",
          },
          customProps: {
            secondaryNav: { height: "--rh-secondary-nav-bar--Height--actual" },
          },
          nav: {
            $static: $("[data-rh-menu]", context),
            $dynamic: $('[data-rh-menu="dynamic"]', context),
            $drupalNav: $("#main-menu", context),
          },
          closeDropdown: function ($context) {
            var $button;
            $context.find("[" + this.attr.toggleOpen + "]").each(
              function (idx, button) {
                ($button = $(button)),
                  void 0 !== rh.webrh.toggle &&
                    "open" === rh.webrh.toggle.checkState($button) &&
                    rh.webrh.toggle.element(
                      {
                        trigger: $button,
                        target: $(
                          "#" + $button.attr(this.attr.toggleID),
                          $context
                        ),
                      },
                      !0
                    );
              }.bind(this)
            );
          },
          buildDynamic: function ($dynamic) {
            var $trigger,
              $listItem,
              $link,
              $externalLink,
              $lastChild,
              done = !1,
              hasLinks = !1,
              hasFeaturedLink = !1,
              $mainLinks = $(
                "[" + this.attr.menuContext + '="main-links"]',
                $dynamic
              ),
              $template = $('[aria-template="true"]', $mainLinks),
              $parent = $template.parent();
            return (
              $("[" + this.attr.navLabel + "]", context).each(
                function (idx, trigger) {
                  var link = { isFeatured: !1 };
                  ($trigger = $(trigger)),
                    (link.label = $trigger.attr(this.attr.navLabel)),
                    (link.hash = $trigger
                      .find("." + this.classes.hashValue)
                      .attr("id")),
                    void 0 !== link.hash && (link.hash = "#" + link.hash),
                    "featured" === $trigger.attr(this.attr.navType) &&
                      ((link.isFeatured = !0),
                      (hasFeaturedLink = !0),
                      ($externalLink = $trigger.find(
                        "[ " + this.attr.navLink + '="featured"] a'
                      )).length > 0 && (link.href = $externalLink[0].href)),
                    void 0 !== link.label &&
                      (this.setWaypoints($trigger, link),
                      ($listItem = $template
                        .clone()
                        .removeAttr("aria-template")),
                      ($link = $listItem
                        .find("a")
                        .attr(
                          "href",
                          void 0 === link.href ? link.hash : link.href
                        )
                        .attr("title", link.label)
                        .text(link.label)),
                      link.isFeatured
                        ? $link.attr(this.attr.subType, "ghost")
                        : $link.attr(this.attr.subType, "standard"),
                      hasFeaturedLink && !link.isFeatured
                        ? (($lastChild = $parent.find("li:last-child")),
                          $listItem.insertBefore($lastChild),
                          (hasLinks = !0))
                        : ($parent.append($listItem), (hasLinks = !0)));
                }.bind(this)
              ),
              hasLinks &&
                ($parent
                  .attr("aria-label", "navigation")
                  .removeAttr("aria-hidden"),
                $template.remove(),
                $dynamic
                  .attr(this.attr.menu, "initial")
                  .removeAttr("aria-hidden"),
                (done = !0)),
              done
            );
          },
          setWaypoints: function ($band, link) {
            var $hash = $(link.hash);
            $hash &&
              new Waypoint({
                element: $hash,
                handler: function (direction) {
                  "down" === direction &&
                    rh.webrh.menu.waypointEnterEvent(link.label),
                    "up" === direction &&
                      rh.webrh.menu.waypointExitEvent(link.label);
                },
              }),
              new Waypoint({
                element: $band,
                handler: function (direction) {
                  "down" === direction &&
                    rh.webrh.menu.waypointExitEvent(link.label),
                    "up" === direction &&
                      rh.webrh.menu.waypointEnterEvent(link.label);
                },
                offset: function () {
                  return -0.8 * this.element.height();
                },
              });
          },
          buildMobile: function ($menu) {
            var status = !1,
              $mobileContainer = $(
                "[" + this.attr.menuContext + '="dropdown-mobile"]',
                $menu
              ),
              mainContent = $(
                "[" + this.attr.menuContext + '="main-links"]',
                $menu
              ).html(),
              utilityContent = $(
                "[" + this.attr.menuContext + '="utility-links"]',
                $menu
              ).html(),
              fullLinkSet = "";
            return (
              void 0 !== $mobileContainer &&
                ((fullLinkSet += void 0 !== mainContent ? mainContent : ""),
                (fullLinkSet +=
                  void 0 !== utilityContent ? utilityContent : ""),
                $mobileContainer.html(fullLinkSet),
                (status = !0)),
              status
            );
          },
          waypointEnterEvent: function (title) {
            var $link;
            $.each(
              this.nav,
              function (idx, menu) {
                ($link = $(menu).find('[title="' + title + '"]'))
                  .parent()
                  .siblings()
                  .children("a")
                  .each(
                    function (idx, el) {
                      $(el).attr(this.attr.selected, !1);
                    }.bind(this)
                  ),
                  $link.attr(this.attr.selected, !0);
              }.bind(this)
            );
          },
          waypointExitEvent: function (title) {
            $.each(
              this.nav,
              function (idx, menu) {
                $(menu)
                  .find('[title="' + title + '"]')
                  .attr(this.attr.selected, !1);
              }.bind(this)
            );
          },
          setNavPosition: function ($main) {
            var bpCheck = !0;
            void 0 !== rh.webrh.utils &&
              (bpCheck =
                rh.webrh.utils.sm() ||
                rh.webrh.utils.md() ||
                rh.webrh.utils.lg()),
              bpCheck && rh.webrh.utils.getElHeight($main);
          },
          removeEmptyMenu: function ($menu) {
            $menu.remove();
          },
          checkFold: function ($menu, $window) {
            this.nav.$static.length;
            var cssObj,
              isSecondary = $menu.has(
                "[" + this.attr.menuType + '="secondary"]'
              ),
              id = $menu.attr(this.attr.menuID),
              $fixed = $menu.prev("[" + this.attr.menuID + '="' + id + '"]'),
              $toTop = $fixed.find("[" + this.attr.scroll + '="top"]'),
              printToTop = $toTop.length > 0,
              bpCheck =
                void 0 !== rh.webrh.utils
                  ? rh.webrh.utils.sm() ||
                    rh.webrh.utils.md() ||
                    rh.webrh.utils.lg()
                  : $window.outerWidth() > 768;
            void 0 !== rh.webrh.utils &&
              isSecondary &&
              rh.webrh.utils.getElHeight("#main-menu");
            (cssObj = {
              "z-index": "var(--pfe-theme--zindex--subnavigation, 95)",
            }),
              this.nav.$static.length > 1 &&
                this.nav.$static.last() !== $menu &&
                (cssObj.boxShadow = "none"),
              $fixed.css(cssObj),
              $fixed.height(),
              printToTop && $toTop.hide();
          },
          reportHeight: function ($menu) {
            var navHeight = "45px";
            $(window).innerWidth() > 768 &&
              (navHeight = $menu.outerHeight() + "px"),
              document.body.style.setProperty(
                this.customProps.secondaryNav.height,
                navHeight
              );
          },
        });
      var $window = $(window),
        menuObj = rh.webrh.menu;
      void 0 !== menuObj.nav.$dynamic &&
        menuObj.nav.$dynamic.length > 0 &&
        (menuObj.nav.$dynamic.each(function (idx, menu) {
          menuObj.buildDynamic($(menu));
        }),
        (menuObj.nav.$static = $('[data-rh-menu="initial"]', context)));
      var reset = !1;
      if (void 0 !== menuObj.nav.$static && menuObj.nav.$static.length > 0) {
        menuObj.nav.$static.each(function (idx, menu) {
          reset = menuObj.buildMobile($(menu));
        }),
          reset &&
            ((menuObj.nav.$static = $("[data-rh-menu]", context)),
            (reset = !1)),
          menuObj.nav.$static.each(function (idx, el) {
            menuObj.checkFold($(el), $window),
              menuObj.reportHeight(menuObj.nav.$static);
          }),
          $window.click(function () {
            $.each(menuObj.nav, function (idx, menu) {
              var $menu = $(menu);
              void 0 !== $menu && menuObj.closeDropdown($menu);
            });
          }),
          $.each(menuObj.nav, function (idx, menu) {
            var $menu = $(menu);
            void 0 !== $menu &&
              (menuObj.setNavPosition(menuObj.nav.$drupalNav, $(menu), 100),
              $menu.click(function (event) {
                event.stopPropagation();
              }));
          });
        $window.scroll(function () {
          null;
        });
        var resizeTimer = null;
        $window.on("resize", function () {
          var $main;
          resizeTimer && clearTimeout(resizeTimer),
            menuObj.reportHeight(menuObj.nav.$static),
            $.each(menuObj.nav, function (idx, menu) {
              "undefined" !== menuObj.nav.$drupalNav
                ? ($main = menuObj.nav.$drupalNav)
                : "undefined" !==
                    $("[" + menuObj.attr.navType + "='primary']", context) &&
                  ($main = $(
                    "[" + menuObj.attr.navType + "='primary']",
                    context
                  )),
                void 0 !== $(menu) &&
                  (resizeTimer = setTimeout(
                    menuObj.setNavPosition($main, $(menu), 100)
                  ));
            });
        });
      }
      var hasLinks = $("[" + menuObj.attr.navLabel + "]").length > 0,
        isDynamic = menuObj.nav.$dynamic.length > 0;
      if (
        (!hasLinks &&
          isDynamic &&
          menuObj.nav.$dynamic.each(function (idx, menu) {
            menuObj.removeEmptyMenu($(menu));
          }),
        (rh.webrh.skipNav = function (skipTo) {
          $(skipTo)
            .attr("tabindex", -1)
            .on("blur focusout", function () {
              $(this).removeAttr("tabindex");
            })
            .focus();
        }),
        (rh.webrh.current = function (link) {
          $(link).attr("aria-current", "page");
        }),
        $("[data-rh-skip-nav]", context).click(function () {
          rh.webrh.skipNav($(this).attr("href"));
        }),
        $(
          'a[href$="' +
            location.pathname.replace(/(en|fr|de|es|pt-br|ja|zh)\//i, "") +
            '"]',
          context
        ).each(function (idx, link) {
          rh.webrh.current(link);
        }),
        (rh.webrh.alignElement = {
          attr: {
            trigger: "data-rh-align-element",
            target: "data-rh-align-target",
            fill: "data-rh-align-fill",
            focalPoint: "data-rh-align-focal-point",
          },
          setDefault: function (number, fallback) {
            return isNaN(number) ? fallback : number;
          },
          setPosition: function ($trigger, $target) {
            var $relative,
              triggerWidth,
              focalWidth,
              relativeLeft,
              triggerLeft,
              targetLeft,
              focalLeft,
              marginTop,
              relation = $trigger.attr(this.attr.fill),
              $focalPoint = $target
                .find("[" + this.attr.focalPoint + "]")
                .first(),
              triggerMarginLeft = $trigger.css("marginLeft");
            ($relative =
              "grandparent" === relation
                ? $trigger.parent().parent()
                : "parent" === relation
                ? $trigger.parent()
                : "self" === relation
                ? $trigger
                : $target),
              (triggerWidth = parseInt($trigger.outerWidth())),
              (triggerLeft = parseInt($trigger.position().left)),
              (relativeLeft = parseInt($relative.position().left)),
              (focalWidth = $focalPoint.outerWidth()),
              (marginTop =
                -1 * parseInt($trigger.parent().css("marginBottom")) + 5),
              (targetLeft = triggerLeft - relativeLeft),
              relation
                ? ((focalLeft =
                    targetLeft + (triggerWidth / 2 - focalWidth / 2)),
                  this.positionEl(
                    $target,
                    "width",
                    parseInt($relative.outerWidth())
                  ),
                  this.positionEl($target, "marginLeft", -1 * targetLeft))
                : ((focalLeft = targetLeft - triggerWidth / 2),
                  this.positionEl($target, "marginLeft", triggerWidth / 2)),
              $focalPoint.css(
                "left",
                "calc(" + focalLeft + "px + " + triggerMarginLeft + ")"
              ),
              this.positionEl($target, "marginTop", marginTop),
              $trigger.attr(
                this.attr.trigger,
                $trigger.attr(this.attr.trigger) + " done"
              );
          },
          positionEl: function (el, cssProp, measurement) {
            $(el).css(cssProp, measurement + "px");
          },
          init: function ($eventEl) {
            var id,
              $trigger,
              $target,
              $triggers = $("[" + this.attr.trigger + "]", $eventEl);
            void 0 !== $triggers &&
              $triggers.length < 1 &&
              ($triggers = $eventEl),
              $.each(
                $triggers,
                function (idx, val) {
                  1 !==
                    ($trigger = $(val))
                      .attr(this.attr.trigger)
                      .indexOf("done") &&
                    ((id = $trigger.attr(this.attr.trigger)),
                    ($target = $(
                      "[" + this.attr.target + '="' + id + '"]',
                      context
                    ).first()),
                    $trigger.length > 0 &&
                      $target.length > 0 &&
                      this.setPosition($trigger, $target));
                }.bind(this)
              );
          },
        }),
        (rh.webrh.bq = function (target) {
          var width = $(window).width();
          $(target).each(function () {
            var $this = $(this),
              backgrounds = $this.attr("data-rh-bq").split(",");
            if (width > 768) background = backgrounds[0];
            else {
              if (2 !== backgrounds.length) return !1;
              background = backgrounds[1];
            }
            $this.css("background-image", "url(" + background + ")");
          });
        }),
        rh.webrh.bq("[data-rh-bq]"),
        rh.webrh.utils.isIE11())
      ) {
        var notString = "";
        ["carousel", "accordion-card", "menu"].forEach(function (pattern) {
          notString += ":not([class^=rh-" + pattern + "])";
        }),
          $("[data-rh-background]" + notString)
            .removeAttr("data-rh-background data-rh-theme")
            .attr({ "rh-background-removed": "", "data-rh-theme": "light" })
            .children()
            .removeAttr("data-rh-background-header data-rh-theme")
            .attr({ "rh-background-removed": "", "data-rh-theme": "light" }),
          $(".rh-band--layout[style]")
            .css("background-color", "")
            .attr({ "rh-background-removed": "", "data-rh-theme": "light" }),
          $("[data-rh-overlay]" + notString)
            .removeAttr("data-rh-overlay")
            .attr("rh-overlay-removed", "");
      }
      (rh.webrh.carousel = {
        parent: ".rh-carousel--layout",
        switcher: {
          body: ".rh-carousel-body",
          slide: ".rh-carousel-slide--layout",
        },
        nav: {
          wrapper: ".rh-carousel-navigation",
          previous: ".rh-carousel-previous",
          next: ".rh-carousel-next",
        },
        attr: {
          state: "data-rh-state",
          background: "data-rh-background",
          theme: "data-rh-theme",
        },
        animation: { easing: "swing", speed: "2s" },
        getCurrentSlide: function ($parent) {
          var $current = $(
            this.switcher.slide + "[" + this.attr.state + '="current"]',
            $parent
          );
          return (
            (void 0 === $current || $current.length < 1) &&
              ($current = $(this.switcher.slide, $parent).first()),
            $current
          );
        },
        setHeight: function ($parent) {
          var $child,
            height = 0,
            max = 0;
          $(this.switcher.slide, $parent).each(function (idx, slide) {
            ($child = $(slide).children().first()),
              (height = $child.outerHeight()),
              (max = Math.max(height, max));
          }),
            max > 0 && $parent.css("height", max + "px");
        },
        setTheme: function (theme, $el, $fallback) {
          (void 0 !== theme && theme) ||
            (theme = $fallback.attr(this.attr.theme)),
            (void 0 !== theme && theme) || (theme = "light"),
            $el.attr(this.attr.theme, theme);
        },
        slide: function ($current, direction) {
          var $newCurrent,
            travel,
            $parent = $current.closest(this.parent),
            $nav = $parent.find(this.nav.wrapper),
            stateAttr = this.attr.state,
            easing = this.animation.easing,
            duration = this.animation.speed;
          $current.css({ left: "0" }),
            "next" === direction
              ? ((travel = "-="),
                (void 0 === ($newCurrent = $current.next()) ||
                  $newCurrent.length < 1) &&
                  ($newCurrent = $current.siblings().first()),
                $newCurrent.css({ left: "100%" }))
              : ((travel = "+="),
                (void 0 === ($newCurrent = $current.prev()) ||
                  $newCurrent.length < 1) &&
                  ($newCurrent = $current.siblings().last()),
                $newCurrent.css({ left: "-100%" })),
            $newCurrent.length > 0 &&
              ($current.animate(
                { left: travel + "100%" },
                {
                  queue: !1,
                  easing: easing,
                  duration: duration,
                  complete: function () {
                    $newCurrent
                      .nextAll()
                      .attr(stateAttr, "next")
                      .attr("aria-hidden", "true"),
                      $newCurrent
                        .prevAll()
                        .attr(stateAttr, "previous")
                        .attr("aria-hidden", "true");
                  },
                }
              ),
              this.setTheme($newCurrent.attr(this.attr.theme), $nav, $parent),
              $newCurrent.animate(
                { left: travel + "100%" },
                {
                  queue: !1,
                  easing: easing,
                  duration: duration,
                  complete: function () {
                    $(this)
                      .attr(stateAttr, "current")
                      .attr("aria-hidden", "false");
                  },
                }
              ));
        },
        init: function ($parent) {
          var $current,
            $nav,
            $slides = $(this.switcher.slide, $parent),
            slideCount = $slides.length;
          void 0 !== slideCount &&
            slideCount > 1 &&
            ($(this.nav.wrapper, $parent).show(),
            this.setHeight($parent),
            $slides.attr(this.attr.state, "next").attr("aria-hidden", "true"),
            ($nav = ($current = $slides
              .first()
              .attr(this.attr.state, "current")
              .attr("aria-hidden", "false"))
              .closest(this.parent)
              .find(this.nav.wrapper)),
            this.setTheme($current.attr(this.attr.theme), $nav, $parent));
        },
        onclick: function ($button) {
          var carouselID = $button.closest(this.parent).attr("id"),
            $current = this.getCurrentSlide($("#" + carouselID)),
            direction = $button.attr("aria-label");
          void 0 !== $current &&
            $current.length > 0 &&
            this.slide($current, direction);
        },
      }),
        setTimeout(function () {
          $(rh.webrh.carousel.parent, context).each(function (idx, el) {
            rh.webrh.carousel.init($(el));
          });
        }, 1e3);
      resizeTimer = null;
      window.addEventListener("resize", function () {
        resizeTimer && clearTimeout(resizeTimer),
          $(rh.webrh.carousel.parent, context).each(function (idx, el) {
            resizeTimer = setTimeout(rh.webrh.carousel.setHeight($(el)), 500);
          });
      }),
        window.addEventListener(
          "orientationchange",
          function () {
            $(rh.webrh.carousel.parent, context).each(function (idx, el) {
              rh.webrh.carousel.setHeight($(el));
            });
          },
          !1
        ),
        $(
          rh.webrh.carousel.nav.previous + ", " + rh.webrh.carousel.nav.next,
          context
        ).click(function () {
          rh.webrh.carousel.onclick($(this));
        }),
        (rh.webrh.emphasize = {
          attr: { trigger: "data-rh-emphasis" },
          set: function ($el) {
            var state = $el.attr(this.attr.trigger);
            this.reset(),
              "inactive" === state || "background" === state
                ? $el
                    .attr(this.attr.trigger, "primary")
                    .siblings()
                    .attr(this.attr.trigger, "background")
                : this.reset();
          },
          reset: function () {
            $("[" + this.attr.trigger + "]", context).attr(
              this.attr.trigger,
              "inactive"
            );
          },
        }),
        $("[" + rh.webrh.emphasize.attr.trigger + "]", context).each(function (
          idx,
          val
        ) {
          var $val = $(val);
          $val.attr(rh.webrh.emphasize.attr.trigger, "inactive"),
            $val.click(function () {
              rh.webrh.emphasize.set($val);
            });
        }),
        $(document).click(function (evt) {
          $(evt.target).closest("[" + rh.webrh.emphasize.attr.trigger + "]")
            .length || rh.webrh.emphasize.reset();
        }),
        document.addEventListener("pfe-tabs:shown-tab", function (event) {
          var eqs = event.target.querySelectorAll("[data-eq-pts]");
          eqjs.query(eqs);
        }),
        (rh.webrh.mediaReplace = {
          hasThumbnail: function ($el) {
            return 0 !== $el.find(".rh-video-embed-thumb").length;
          },
          click: function ($img) {
            var template = $img
                .siblings(".rh-video-embed-iframe-container")
                .find("template")[0],
              iframe = document
                .importNode(template.content, !0)
                .querySelector("iframe"),
              $videoIframe = $(iframe);
            if ("URLSearchParams" in window) {
              var videoSrc = $videoIframe.attr("src"),
                url = new URL(videoSrc);
              url.searchParams.append("autoplay", 1);
              var newVideoSrc = url.href;
              $videoIframe.attr("src", newVideoSrc),
                $videoIframe.attr("allow", "autoplay");
            }
            $img.hide(),
              $img
                .siblings(".rh-video-embed-iframe-container")
                .append($videoIframe)
                .fadeIn("slow");
          },
        }),
        $(".rh-video-embed-link").click(function (e) {
          e.preventDefault(),
            rh.webrh.mediaReplace.hasThumbnail($(this)) &&
              rh.webrh.mediaReplace.click($(this));
        }),
        (rh.webrh.reveal = {
          attr: {
            trigger: "data-rh-reveal",
            count: "data-rh-reveal-by",
            state: "data-rh-state",
            container: "data-rh-reveal-container",
          },
          countHidden: function (items) {
            var myself = this,
              count = 0;
            return (
              Array.isArray(items) &&
                $.each(items, function (key, value) {
                  "hidden" === $(value).attr(myself.attr.state) && (count += 1);
                }),
              count
            );
          },
          onclick: function (id, count, $trigger) {
            var child,
              $parent = $("[" + this.attr.container + "=" + id + "]", context),
              hiddenChildren = $("[" + this.attr.state + "=hidden]", $parent);
            if ("number" == typeof count) {
              if (hiddenChildren.length > 0)
                for (var i = 0; i < count; i += 1)
                  void 0 !== (child = hiddenChildren[i]) &&
                    $(child).attr(this.attr.state, "visible");
            } else
              $("[" + this.attr.state + "=hidden]", $parent)
                .show()
                .attr(this.attr.state, "visible");
            0 === this.countHidden(hiddenChildren) && $trigger.hide();
          },
        }),
        $("[" + rh.webrh.reveal.attr.trigger + "]", context).click(function () {
          rh.webrh.reveal.onclick(
            $(this).attr(rh.webrh.reveal.attr.trigger),
            $(this).attr(rh.webrh.reveal.attr.count),
            $(this)
          );
        }),
        (rh.webrh.search = {
          meta: {
            input: "[data-rh-search-input]",
            clear: "[data-rh-search-clear]",
          },
          onkeypress: function (event) {
            var key = event.key || event.keyCode;
            if ("Enter" === key || 13 === key) return event.target.click(), !1;
          },
          onclick: function () {
            var $input = $(rh.webrh.search.meta.input, context);
            $input.val(""), $input.focus();
          },
        }),
        $(rh.webrh.search.meta.clear, context)
          .keypress(rh.webrh.search.onkeypress)
          .click(rh.webrh.search.onclick),
        (rh.webrh.setYear = function ($el, when) {
          "now" === when && $el.text(new Date().getFullYear());
        }),
        $("[data-rh-year]").each(function (index, value) {
          rh.webrh.setYear($(value), $(value).attr("data-rh-year"));
        }),
        (rh.webrh.hash = function (location) {
          var hashSplit = location.hash.replace(/^#/, "").split(".");
          "tab" === hashSplit[0] &&
            rh.webrh.switchTab(hashSplit[1], hashSplit[2]);
        }),
        (rh.webrh.switchTab = function (id, index) {
          $("[data-rh-tab-id='" + id + "']").each(function (i, v) {
            var $children = $(v).children();
            $children.attr("data-rh-active", "false"),
              $children.eq(index).attr("data-rh-active", "true");
          });
        }),
        window.location.hash && rh.webrh.hash(window.location),
        $(window).bind("hashchange", function () {
          rh.webrh.hash(location);
        }),
        (rh.webrh.themeToggle = function ($target, evt, type) {
          var currentValue = $target.attr("data-rh-" + type),
            newValue = $target.attr("data-rh-" + type + "-" + evt);
          $target.attr("data-rh-" + type + "-" + evt, currentValue),
            $target.attr("data-rh-" + type, newValue);
        }),
        $(
          "[data-rh-theme-hover], [data-rh-theme-click], [data-rh-background-hover], [data-rh-background-click]"
        ).each(function (idx, val) {
          var $target = $(val);
          $.each($target.data(), function (key) {
            var evt = key.match("Hover$")
                ? "hover"
                : key.match("Click$")
                ? "click"
                : "",
              typeKey = key.split(/[A-Z]+/)[1],
              type =
                "ackground" === typeKey
                  ? "b" + typeKey
                  : "heme" === typeKey
                  ? "t" + typeKey
                  : "";
            "hover" === evt
              ? $target.hover(function () {
                  rh.webrh.themeToggle($target, evt, type);
                })
              : "click" === evt &&
                $target.click(function () {
                  rh.webrh.themeToggle($target, evt, type);
                });
          });
        }),
        (rh.webrh.toggle = {
          attr: {
            openEvent: "data-rh-toggle-open",
            closeEvent: "data-rh-toggle-close",
            toggleID: "data-rh-toggle-id",
            toggleTarget: "data-rh-toggle-target",
            state: "data-rh-state",
            expanded: "aria-expanded",
            align: "data-rh-align-element",
            toggle: "data-rh-toggle",
          },
          isAtBreakpoint: function (bpString) {
            var atBreakpoint = !0;
            if (void 0 !== bpString && "" !== bpString) {
              var bps = bpString.split(" ");
              (atBreakpoint = !1),
                $.each(bps, function (idx, bp) {
                  $.inArray(bp, rh.webrh.utils.breakpoints) >= 0 &&
                    rh.webrh.utils[bp]() &&
                    (atBreakpoint = !0);
                });
            }
            return atBreakpoint;
          },
          changeState: function ($el, to) {
            return $el
              .attr(this.attr.state, to)
              .attr(this.attr.expanded, "open" === to);
          },
          checkState: function ($el) {
            var status = $el.attr(this.attr.state);
            return (
              "" === status &&
                (status = $el.attr(this.attr.expanded) ? "open" : "closed"),
              status
            );
          },
          scroll: function ($el) {
            $("html, body").animate({ scrollTop: $el.offset().top - 100 }, 600);
          },
          reveal: function (props) {
            var alignAttr = props.trigger.attr(this.attr.align),
              hasAlignAttr = props.trigger.has("[" + this.attr.align + "]");
            props.target.attr(this.attr.toggle, "reveal"),
              this.setState([props.target, props.trigger], "open"),
              ((void 0 !== alignAttr && "" !== alignAttr) ||
                hasAlignAttr.length > 0) &&
                rh.webrh.alignElement.init(props.trigger);
          },
          hide: function (props) {
            props.target.attr(this.attr.toggle, "hide"),
              this.setState([props.target, props.trigger], "closed");
          },
          element: function (props, change) {
            var state = this.getState(props.target),
              bpTargets = props.target.attr(this.attr.toggleTarget);
            this.isAtBreakpoint(bpTargets)
              ? "closed" === state
                ? change
                  ? this.reveal(props)
                  : this.hide(props)
                : "open" === state && change
                ? this.hide(props)
                : this.reveal(props)
              : this.reveal(props);
          },
          getState: function ($el) {
            var state = $el.attr(this.attr.state);
            return (
              void 0 === state &&
                (state = $el.attr("aria-expanded") ? "open" : "closed"),
              state
            );
          },
          setState: function ($els, state) {
            $.each(
              $els,
              function (idx, $el) {
                "open" === state
                  ? $el.attr(this.attr.state, "open").attr("aria-expanded", !0)
                  : $el
                      .attr(this.attr.state, "closed")
                      .attr("aria-expanded", !1);
              }.bind(this)
            );
          },
          reset: function ($trigger, $target) {
            var targetBps = $target.attr(this.attr.toggleTarget);
            this.isAtBreakpoint(targetBps)
              ? this.element({ trigger: $trigger, target: $target }, !1)
              : "closed" === this.checkState($target) &&
                $target.attr(this.attr.toggle, "reveal"),
              $.each(
                $("[" + this.attr.align + "]"),
                function (idx, val) {
                  $(val).attr(
                    this.attr.align,
                    $(val).attr(this.attr.align).replace(" done", "")
                  );
                }.bind(this)
              );
          },
          getTargets: function ($trigger) {
            var $target,
              eventType = $trigger.attr(this.attr.openEvent).split(" "),
              toggleID = $trigger.attr(this.attr.toggleID);
            return (
              void 0 !== toggleID &&
                "" !== toggleID &&
                ($target = $("#" + toggleID, context)).length < 1 &&
                ($target = void 0),
              void 0 === $target &&
                ($target = $trigger.siblings(
                  "[" + this.attr.toggleTarget + "]"
                )).length < 1 &&
                ($target = void 0),
              void 0 === $target &&
                ($target = $trigger.children(
                  "[" + this.attr.toggleTarget + "]"
                )).length < 1 &&
                ($target = void 0),
              { trigger: $trigger, target: $target, eventType: eventType }
            );
          },
        }),
        $("[" + rh.webrh.toggle.attr.openEvent + "]", context).each(function (
          idx,
          val
        ) {
          var props = rh.webrh.toggle.getTargets($(val));
          void 0 !== props.target &&
            (rh.webrh.toggle.element(props, !1),
            -1 !== props.eventType.indexOf("click")
              ? -1 !== props.eventType.indexOf("single")
                ? $(document).click(function (evt) {
                    $(evt.target).closest(props.trigger).length
                      ? ($(evt.target).closest(props.target).length &&
                          "open" === rh.webrh.toggle.getState(props.target) &&
                          !$(evt.target).is(
                            $("[" + rh.webrh.toggle.attr.closeEvent + "]")
                          )) ||
                        (rh.webrh.toggle.element(props, !0),
                        -1 !== props.eventType.indexOf("scroll") &&
                          rh.webrh.toggle.scroll(props.trigger))
                      : rh.webrh.toggle.hide(
                          rh.webrh.toggle.getTargets(props.trigger)
                        );
                  })
                : (props.trigger.click(function () {
                    rh.webrh.toggle.element(props, !0);
                  }),
                  props.trigger.keydown(function (e) {
                    (13 !== e.keyCode && 32 !== e.keyCode) ||
                      (e.preventDefault(), rh.webrh.toggle.element(props, !0));
                  }))
              : -1 !== props.eventType.indexOf("hover") &&
                props.trigger.hover(function () {
                  rh.webrh.toggle.element(props, !0);
                }));
        }),
        $(window).on("resize", function () {
          clearTimeout(resizeTimer),
            (resizeTimer = setTimeout(function () {
              $("[" + rh.webrh.toggle.attr.openEvent + "]", context).each(
                function (idx, val) {
                  var $trigger = $(val),
                    toggleID = $trigger.attr(rh.webrh.toggle.attr.toggleID);
                  void 0 !== toggleID && "" !== toggleID
                    ? rh.webrh.toggle.reset(
                        $trigger,
                        $("#" + toggleID, context)
                      )
                    : rh.webrh.toggle.reset(
                        $trigger,
                        $trigger.siblings(
                          "[" + rh.webrh.toggle.attr.toggleTarget + "]"
                        )
                      );
                }
              );
            }, 250));
        }),
        (rh.webrh.urlReplace = {
          attr: { trigger: "data-rh-url-replace" },
          objToParams: function (obj) {
            var param = [];
            for (var key in obj)
              obj.hasOwnProperty(key) &&
                param.push(key + "=" + encodeURIComponent(obj[key]));
            return param.join("&");
          },
          queryObj: function (url) {
            var search,
              sets = {};
            if (url.indexOf("?") > -1) {
              var array =
                void 0 !== (search = url.slice(url.indexOf("?") + 1))
                  ? search.split("&")
                  : [""];
              $.each(
                array.filter(function (n) {
                  return "" !== n;
                }),
                function (idx, val) {
                  var group = val.split("=");
                  sets[group[0]] = decodeURIComponent(group[1] || "");
                }
              );
            }
            return JSON.parse(JSON.stringify(sets));
          },
          getSummary: function () {
            var heading = $("h1");
            return void 0 !== heading
              ? heading.first().text()
              : $("title").first().text();
          },
          onLoad: function ($el, attrs) {
            var summary,
              update = !1,
              states = attrs.trim().split(" "),
              url = $el.attr("href"),
              query = this.queryObj(url),
              pseudo = document.createElement("a");
            pseudo.href = url;
            var isEmail = "mailto:" === pseudo.protocol,
              isFacebook = -1 !== pseudo.href.indexOf("facebook.com");
            -1 !== states.indexOf("summary") &&
              (summary = this.getSummary()).trim() &&
              ("twitter.com" === pseudo.host
                ? (query.text = summary.replace(/%20/g, "+"))
                : "www.linkedin.com" === pseudo.host ||
                  "www.reddit.com" === pseudo.host
                ? (query.summary = summary.replace(/%20/g, "+"))
                : isEmail && (query.subject += " " + summary),
              (update = !0)),
              -1 !== states.indexOf("link") &&
                (query.hasOwnProperty("url")
                  ? (query.url = window.location.href)
                  : query.hasOwnProperty("p[url]")
                  ? (query["p[url]"] = window.location.href)
                  : isEmail && (query.body += " " + window.location.href),
                (update = !0)),
              pseudo.origin ||
                (pseudo.origin =
                  pseudo.protocol + "//" + pseudo.hostname + "/"),
              update &&
                (isEmail
                  ? $el.attr(
                      "href",
                      pseudo.protocol +
                        "?" +
                        this.objToParams(query).replace(/\+/g, " ")
                    )
                  : isFacebook
                  ? $el.attr(
                      "href",
                      pseudo.origin +
                        pseudo.pathname +
                        "?" +
                        this.objToParams(query).replace("url=", "u=")
                    )
                  : $el.attr(
                      "href",
                      pseudo.origin +
                        pseudo.pathname +
                        "?" +
                        this.objToParams(query)
                    ));
          },
        });
      var trigger = rh.webrh.urlReplace.attr.trigger;
      $("[" + trigger + "]").each(function (index, value) {
        rh.webrh.urlReplace.onLoad($(value), $(value).attr(trigger));
      });
    }),
      "undefined" != typeof Drupal && Drupal.behaviors
        ? (Drupal.behaviors.webrh = {
            attach: function (context, settings) {
              rh.webrh.load(context);
            },
          })
        : $(document).ready(function () {
            rh.webrh.load(document);
          });
  })(jQuery);
//# sourceMappingURL=webrh.min.js.map
