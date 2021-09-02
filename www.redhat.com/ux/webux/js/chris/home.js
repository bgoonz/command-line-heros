(function (window, $, rh, undefined) {
  Drupal.behaviors.webux = {
    attach: function (context, settings) {
      rh.webux = {};

      // jscs:disable validateIndentation

      /**
       * Form validation and styling support for dynamic form
       *
       * - dynamicForm [object literal]: adds class for styling and form validation
       *   - 3 string variables containing class names
       *   - 2 functions: init and validation
       * - interval [ method ]: waits for dynamic form script to finish loading
       *   - setInterval method that checks if the form has loaded; limited to 3s wait
       *
       */
      // Form loading, validation, + styling support for dynamic form
      rh.webux.dynamicForm = {
        formLoaded: false,
        container: $("[data-ux-form-host='eloqua']"),
        dropdowns: ".controls:has(select)",
        cta: ".form-group:has(button)",
        privacy: ".form-footer .form-group:has(a)",
        required: ".form-control[type!=hidden].required",
        group: ".form-group",
        elapsed: 0,
        // Get dynamic form container ID
        setContainer: function () {
          if (typeof dynamicForm !== "undefined") {
            if (typeof dynamicForm.options.elqFormContainerId !== "undefined") {
              this.container = $("#" + dynamicForm.options.elqFormContainerId);
            }
          }
        },
        // Get form element inside dynamic form container
        getForm: function () {
          return $("form", this.container);
        },
        // Check if script already exists on the page
        isLoaded: function () {
          return (
            $("script[src*='jquery.gatedform.min.js']").length > 0 ||
            $("script[src*='jquery.gatedform.js']").length > 0
          );
        },
        // Add the dynamic form script to the page
        addScript: function (url) {
          var myself = this;

          // Check to make sure the right container is being used
          this.setContainer();

          if (!myself.isLoaded()) {
            /* TODO this is not working in prod:
                $.getScript( url, function( data, textStatus, jqxhr ) {} ); */
            var form_js = document.createElement("script");
            form_js.type = "text/javascript";
            form_js.src = url;
            document.getElementsByTagName("head")[0].appendChild(form_js);
          }
        },
        init: function () {
          var myself = this;
          myself.formLoaded = true;
          // Add dropdown identifer to parent object so RH styles can be applied
          $(myself.dropdowns, myself.container).addClass("df-dropdown");
          // Add CTA and privacy identifiers
          $(myself.cta, myself.container).addClass("df-cta");
          $(myself.privacy, myself.container).addClass("df-privacy");
          // Add a blur validation for required input fields
          $(myself.required, myself.container).blur(function () {
            myself.validateForm($(this));
          });
        },
        validateForm: function ($el) {
          var myself = this;
          if ($el.val() !== "") {
            $el
              .parents(myself.group)
              .removeClass("df-has-error")
              .addClass("df-correct");
          } else {
            $el
              .parents(myself.group)
              .addClass("df-has-error")
              .removeClass("df-correct");
          }
        },
        formatNumber: function (number) {
          return number < 10 ? "0" + number : number;
        },
        fieldExists: function (id) {
          return this.container.find($("#" + id)).length > 0;
        },
        createHiddenField: function (name, count, value, type) {
          var num = this.formatNumber(count);
          return $("<input/>", {
            class: "form-control " + name,
            type: "hidden",
            name: "UDF_" + num + "_" + type,
            id: "UDF_" + num + "_" + type,
            value: value,
          });
        },
        setHiddenFields: function (queryObj) {
          var myself = this,
            $parent = myself.getForm().find(".form-content"),
            count = 1,
            count_str = myself.formatNumber(count);
          for (var key in queryObj) {
            // Test that the input fields don't already exist in the form
            while (
              myself.fieldExists("UDF_" + count_str + "_Question") ||
              myself.fieldExists("UDF_" + count_str + "_Answer")
            ) {
              count += 1;
              count_str = myself.formatNumber(count);
            }

            // Create the UDF inputs
            // Add the question
            myself
              .createHiddenField(key, count, key, "Question")
              .appendTo($parent);
            // Add the answer
            myself
              .createHiddenField(key, count, queryObj[key], "Answer")
              .appendTo($parent);
          }
        },
      };

      // -- Add relative path to script tag to load dynamic form (if it doesn't already exist)
      if (document.location.hostname === "localhost") {
        rh.webux.dynamicForm.addScript(
          "//www.redhat.com/forms/scripts/jquery.gatedform.js"
        );
      } else {
        rh.webux.dynamicForm.addScript("/forms/scripts/jquery.gatedform.js");
      }

      //-- Wait for the dynamic form script to finish loading
      rh.webux.checkForForm = function () {
        if (rh.webux.dynamicForm.getForm().length > 0) {
          clearInterval(rh.webux.interval);
          rh.webux.dynamicForm.init();
        } else if (rh.webux.dynamicForm.elapsed > 5000) {
          clearInterval(rh.webux.interval);
        }
        rh.webux.dynamicForm.elapsed += 1000;
      };

      rh.webux.interval = setInterval(rh.webux.checkForForm, 1000);

      /* ----- SMOOTH SCROLL ----- */
      rh.webux.smoothScroll = {
        notStrings: ":not([href=#])",
        ignoreIDs: function (ignore) {
          var myself = this;
          if (typeof ignore !== "undefined") {
            $.each(ignore.split(","), function (idx, val) {
              myself.notStrings += ":not([href='#" + val + "'])";
            });
          }
        },
        ifEmpty: function (el, propName, hash, context) {
          return el.length > 0
            ? el
            : $("[" + propName + '="' + hash.slice(1) + '"]', context);
        },
        onclick: function (hash, context) {
          var myself = this;
          var $target = $(hash, context);
          // If it can't find the value by #id, try the name property...
          $target = this.ifEmpty($target, "name", hash, context);
          // If it still can't find the value, try the unique-id attribute for FTS
          $target = this.ifEmpty($target, "data-rh-unique-id", hash, context);
          if ($target.length > 0) {
            $("html, body").animate(
              {
                scrollTop: $target.offset().top - 100,
              },
              500
            );
            return false;
          }
        },
      };

      rh.webux.smoothScroll.ignoreIDs("//@inputs");
      $("a[href^=#]" + rh.webux.smoothScroll.notStrings, context).click(
        function (event) {
          rh.webux.smoothScroll.onclick(this.hash, context);
        }
      );

      // -- Global helper functions

      // Attach a string toggle function for use on elements
      if (typeof String.prototype.toggleString == "undefined") {
        String.prototype.toggleString = function (string1, string2) {
          return String(this) === string1 ? string2 : string1;
        };
      }

      // CUSTOM JS to convert query string to JSON obj
      if (typeof rh.webux.queryToJSON == "undefined") {
        rh.webux.queryToJSON = function (input) {
          var sets = {},
            search = typeof input === "undefined" ? location.search : input,
            array =
              typeof search != "undefined" ? search.slice(1).split("&") : [""];
          $.each(
            array.filter(function (n) {
              return n !== "";
            }),
            function (idx, val) {
              var group = val.split("=");
              sets[group[0]] = decodeURIComponent(group[1] || "");
            }
          );
          return JSON.parse(JSON.stringify(sets));
        };
      }

      // Supports tab interactions and direct linking to tabset
      if (typeof rh.webux.hash == "undefined") {
        rh.webux.hash = function (location) {
          // Default to window.location
          location = location || window.location;
          return location.hash.replace(/^#/, "").split(".");
        };
      }

      // Get the height of a hidden or potentially hidden element
      if (typeof rh.webux.getTrueHeight == "undefined") {
        rh.webux.getTrueHeight = function ($el) {
          // Copy element, hide, set height auto and copy current width
          var $copy = $el
              .clone()
              .css({
                display: "block",
                position: "absolute",
                top: "-999px",
                left: "-999px",
                height: "auto",
                minHeight: "auto",
                maxHeight: "auto",
                width: $el.outerWidth() + "px",
              })
              .appendTo("body"),
            // Get the height of the clone element
            height = $copy.outerHeight();
          // Remove the cloned element
          $copy.remove();
          return height;
        };
      }

      rh.webux.slider = {
        switcher: {
          body: ".ux-band-switcher-body, [data-ux-switcher-body]",
          slide: ".ux-band-switcher-slide, [data-ux-switcher-slide]",
        },
        nav: {
          styles: ["arrows", "text", "circles"],
          parent: ".ux-slider-nav, [data-ux-switcher-nav]",
        },
        attr: {
          state: "data-ux-state", // Valid values: prev, next, current
          direction: "data-ux-direction", // Valid values: prev, next
          active: "data-ux-active", // Valid values: true/false
          to: "data-ux-slide-to", // ID of slide to switch to
          id: "data-ux-slide-id", // ID of slide, used for slide-to attr
          height: "data-ux-height", // Valid value: variable
          style: "data-ux-nav-style", // Valid values: circles, arrows, text
        },
        getID: function ($el) {
          return $el.attr(this.attr.id);
        },
        isVaryHeight: function ($parent) {
          return (
            $parent.has(this.switcher.slide).attr(this.attr.height) ==
            "variable"
          );
        },
        isCurrent: function ($slide) {
          return $slide.attr(this.attr.state) == "current";
        },
        getAllContent: function ($items) {
          return $items
            .map(function (i) {
              return this.id.toString();
            })
            .get();
        },
        getDirection: function ($from, toID) {
          var direction;
          $from.nextAll().each(function (i, next) {
            if ($(next).attr("id").toString() == toID) {
              direction = "next";
              return false;
            }
          });
          $from.prevAll().each(function (i, prev) {
            if ($(prev).attr("id").toString() == toID) {
              direction = "prev";
              return false;
            }
          });
          return direction;
        },
        slide: function ($last, $next, direction) {
          $last.attr(this.attr.state, direction.toggleString("next", "prev"));
          $next.attr(this.attr.state, "current");
          return $next;
        },
        // Set parent height based on tallest child element
        setParentHeight: function (context) {
          var myself = this,
            $slide,
            $parent,
            $body, // Element
            id, // String
            max,
            height, // Number
            isVariable,
            isCurrent; // Boolean
          $(myself.nav.parent, context).each(function (i, val) {
            id = myself.getID($(val));
            $parent = $("[" + myself.attr.id + "='" + id + "']", context);
            max = 0;
            $parent.children(myself.switcher.slide).each(function (j, slides) {
              $slide = $(slides);
              $body = $parent.has(myself.switcher.slide);
              height = $slide.height();
              isVariable = myself.isVaryHeight(
                $slide.parent(myself.switcher.body)
              );
              isCurrent = myself.isCurrent($slide);
              if (!isVariable) {
                max = height > max ? height : max;
                $body.css("min-height", max + "px");
              } else {
                if (isCurrent) {
                  $body.css("min-height", height + "px");
                }
              }
            });
          });
        },
        go: function (id, to, direction, context) {
          to = to.toString();
          var myself = this,
            // Elements
            $parts = $("[" + myself.attr.id + "='" + id + "']", context),
            $content = $parts.find(myself.switcher.slide),
            $moveFrom = $parts.find("[" + myself.attr.state + "='current']"),
            $moveTo = $parts.find("#" + to),
            $items,
            // Strings
            contentIDs = myself.getAllContent($content),
            newID, // Strings
            boolean, // Booleans
            styles = {}; // Object

          // Load up all available navigation by style into object
          $.each(myself.nav.styles, function (i, style) {
            styles[style] = $parts.parent(
              "[" + myself.attr.style + "='" + style + "']"
            );
          });

          // Update navigation styles
          $.each([styles.circles, styles.text], function (i, nav) {
            $(nav)
              .find(myself.nav.parent)
              .children()
              .each(function (j, item) {
                this.active =
                  $(item).attr(myself.attr.to) == to ? "true" : "false";
                $(item).attr(myself.attr.active, this.active);
              });
          });

          styles.arrows.each(function (i, nav) {
            // Get next switcher id and assign to the slide-to attr
            this.$arrow = $(nav, context).find(myself.nav.parent).children();
            this.loc = $.inArray(to.toString(), contentIDs);
            this.direction = this.$arrow.attr(myself.attr.direction);
            if (this.loc > -1) {
              if (this.direction == "prev") {
                this.iterate = this.loc - 1;
                this.limit = 0;
                this.active = this.iterate >= this.limit;
              } else if (this.direction == "next") {
                this.iterate = this.loc + 1;
                this.limit = contentIDs.length;
                this.active = this.iterate < this.limit;
              }
              this.newID = this.active
                ? contentIDs[this.iterate]
                : contentIDs[this.limit];
              /* Update arrow data and hide or show arrows
                    depending on content available next or prev */
              this.$arrow
                .attr(myself.attr.to, this.newID)
                .attr(myself.attr.active, this.active);
            } else {
              throw "slider[71]: Content does not exist in switcher.";
            }
          });

          // -- Update the content switcher --
          direction = myself.getDirection($moveFrom, to);
          if (typeof direction != "undefined") {
            $last = $moveFrom;
            var stack =
              direction == "prev" ? $moveFrom.prevAll() : $moveFrom.nextAll();
            var i = 0;
            var slideContent = window.setInterval(function () {
              if (i < stack.length) {
                $last = myself.slide($last, $(stack[i]), direction);
              }
              if ($(stack[i]).attr("id") == to) {
                clearInterval(slideContent);
              }
              i++;
            }, 400);
          }
          myself.setParentHeight(context);
        },
      };

      $(window)
        .load(function () {
          rh.webux.slider.setParentHeight(context);
        })
        .resize(function () {
          rh.webux.slider.setParentHeight(context);
        });

      $(rh.webux.slider.nav.parent, context)
        .children()
        .click(function () {
          var $el = $(this),
            $parent = $el.parent(rh.webux.slider.nav.parent);
          rh.webux.slider.go(
            $parent.attr(rh.webux.slider.attr.id),
            $el.attr(rh.webux.slider.attr.to),
            $el.attr(rh.webux.slider.attr.direction),
            context
          );
        });

      window.DynamicFormConfig = {
        showAdditionalFields: [],
        hideStandardFields: ["Work Phone", "Company", "Department", "Job Role"],
        CustomQuestions: [],
        offer_id: "701f2000000RTH0AAO",
        language: "en",
        FormIntro:
          "The story is still unfolding. Sign up and we'll notify you when it premieres.",
        NameOrder: "western",
        FormCallToAction: "SIGN UP",
        ThanksText: "Thanks for signing up. We will be in touch soon.",
        ShowThanksButton: "false",
        leadActivity: 0,
        disableVisitorContactLookups: false,
      };
      try {
        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
          disableOn: 700,
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false,
        });
      } catch (err) {
        // Comment the console.log so it doesn't show errors on pages that don't load magnific.
        // console.log("Magnific popup not loaded or throwing an error: " + err);
      }

      // On page load
      $("document").ready(function () {
        // Set the color on load
        var scrollTop = $(window).scrollTop();
        var docHeight = $("body").outerHeight() - $(window).outerHeight();
        var rgb1 = [2, 169, 224];
        var rgb2 = [63, 42, 124];
        var rgb3 = [0, 0, 0];
        var ranges = [0, 0, 0];
        var n = 0;
        // Load YouTube API
        var tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        var youTubePlayers = [];
        var $videos = $("iframe[src*='youtube']");
        function initYTPlayers() {
          if (YT) {
            $videos.each(function (idx, video) {
              var youTubePlayer = new YT.Player($(video).attr("id"));
              youTubePlayers.push(youTubePlayer);
            });
          }
        }
        function stopYTPlayers() {
          if (youTubePlayers.length > 0) {
            youTubePlayers.forEach(function (player) {
              if (player.pauseVideo) {
                player.pauseVideo();
              } else {
                $(player.a).attr("src", $(player.a).attr("src"));
              }
            });
          } else {
            $videos.each(function (idx, video) {
              $(video).attr("src", $(video).attr("src"));
            });
          }
        }
        function openChapter(element, event) {
          stopYTPlayers();
          // Elements
          var target_attr;
          if (typeof element !== "string") {
            var $trigger = $(element);
            target_attr = $trigger.attr("data-ux-target");
          } else {
            target_attr = element;
          }
          var $pane1 = $("#pane1");
          var $all_trigger_parents = $("[data-ux-trigger-parent]");
          // Attributes
          var $target_parent = $(
            "[data-ux-trigger-parent='" + target_attr + "']"
          );
          // States
          var pane1_inactive = $pane1.attr("data-ux-state") == "inactive";
          var target_current = rh.webux.slider.isCurrent($("#" + target_attr));
          if (event) {
            // Prevent default behavior
            event.preventDefault();
          }
          // If the pane is inactive or the target is not active, update it
          if (pane1_inactive || !target_current) {
            $pane1.attr("data-ux-state", "active");
            // Update slider to demo2 slide
            rh.webux.slider.go("demo2", target_attr, "next", context);
            $all_trigger_parents.attr("data-ux-state", "diminished");
            $target_parent.attr("data-ux-state", "selected");
          } else {
            $pane1.attr("data-ux-state", "inactive");
            $all_trigger_parents.attr("data-ux-state", "");
          }
          // Trigger window resize function
          $(window).resize();
        }

        function scrollToPane() {
          $("html, body").animate(
            {
              scrollTop: $($("#pane1")).offset().top,
            },
            500,
            "linear"
          );
        }

        while (n < 3) {
          ranges[n] = rgb1[n] - rgb2[n];
          n = n + 1;
        }
        // Attach an on-resize event
        $(window).on("resize", function () {
          // Readjust the document height
          docHeight = $("body").outerHeight() - $(window).outerHeight();
        });

        // On scroll, adjust the background color value
        $(window).on("scroll", function () {
          scrollTop = $(this).scrollTop();
          var ppl = scrollTop / docHeight;
          var n = 0;
          while (n < 3) {
            if (ppl < 0.5) {
              rgb3[n] = Math.round(rgb1[n] - ranges[n] * ppl * 2);
            } else {
              rgb3[n] = Math.round(rgb1[n] - ranges[n] * (1 - ppl) * 2);
            }
            n++;
          }
          $(".page-background-image").css(
            "background-color",
            "rgb(" + rgb3.join() + ")"
          );
        });

        // When clicking the trigger event
        $("[data-ux-usage='trigger']").on("click", function (e) {
          openChapter(this, e);
        });

        $(window).load(function () {
          initYTPlayers();
          if (window.location.hash) {
            switch (window.location.hash) {
              case "#chapter1":
                openChapter("slide1", null);
                scrollToPane();
                break;
              case "#chapter2":
                openChapter("slide2", null);
                scrollToPane();
                break;
              case "#chapter3":
                openChapter("slide3", null);
                scrollToPane();
                break;
              default:
            }
          }
        });
      });
    },
  };
})(window, jQuery, "undefined" == typeof rh ? {} : rh);
