(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return (
      '<div id="' +
      id +
      '" class="progress" aria-live="polite"><div class="progress__label">&nbsp;</div><div class="progress__track"><div class="progress__bar"></div></div><div class="progress__percentage"></div><div class="progress__description">&nbsp;</div></div>'
    );
  };
  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || "GET";
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;
    this.element = $(Drupal.theme("progressBar", id));
  };
  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element)
          .find("div.progress__bar")
          .css("width", percentage + "%");
        $(this.element)
          .find("div.progress__percentage")
          .html(percentage + "%");
      }
      $("div.progress__description", this.element).html(message);
      $("div.progress__label", this.element).html(label);
      if (this.updateCallback) this.updateCallback(percentage, message, this);
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);
      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) clearTimeout(this.timer);
      if (this.uri) {
        var pb = this,
          uri = this.uri;
        if (uri.indexOf("?") === -1) {
          uri += "?";
        } else uri += "&";
        uri += "_format=json";
        $.ajax({
          type: this.method,
          url: uri,
          data: "",
          dataType: "json",
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }
            pb.setProgress(
              progress.percentage,
              progress.message,
              progress.label
            );
            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError("<pre>" + e.message + "</pre>");
          },
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(
        string
      );
      $(this.element).before(error).hide();
      if (this.errorCallback) this.errorCallback(this);
    },
  });
})(jQuery, Drupal);
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
      arr2[i] = arr[i];
    return arr2;
  } else return Array.from(arr);
}
(function ($, window, Drupal, drupalSettings) {
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === "undefined")
          elementSettings.selector = "#" + base;
        $(elementSettings.selector)
          .once("drupal-ajax")
          .each(function () {
            elementSettings.element = this;
            elementSettings.base = base;
            Drupal.ajax(elementSettings);
          });
      }
      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });
      Drupal.ajax.bindAjaxLinks(document.body);
      $(".use-ajax-submit")
        .once("ajax")
        .each(function () {
          var elementSettings = {};
          elementSettings.url = $(this.form).attr("action");
          elementSettings.setClick = true;
          elementSettings.event = "click";
          elementSettings.progress = { type: "throbber" };
          elementSettings.base = $(this).attr("id");
          elementSettings.element = this;
          Drupal.ajax(elementSettings);
        });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === "unload")
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
    },
  };
  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode = void 0,
      statusText = void 0,
      responseText = void 0;
    if (xmlhttp.status) {
      statusCode =
        "\n" +
        Drupal.t("An AJAX HTTP error occurred.") +
        "\n" +
        Drupal.t("HTTP Result Code: !status", { "!status": xmlhttp.status });
    } else
      statusCode =
        "\n" + Drupal.t("An AJAX HTTP request terminated abnormally.");
    statusCode += "\n" + Drupal.t("Debugging information follows.");
    var pathText = "\n" + Drupal.t("Path: !uri", { "!uri": uri });
    statusText = "";
    try {
      statusText =
        "\n" +
        Drupal.t("StatusText: !statusText", {
          "!statusText": $.trim(xmlhttp.statusText),
        });
    } catch (e) {}
    responseText = "";
    try {
      responseText =
        "\n" +
        Drupal.t("ResponseText: !responseText", {
          "!responseText": $.trim(xmlhttp.responseText),
        });
    } catch (e) {}
    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, "");
    responseText = responseText.replace(/[\n]+\s+/g, "\n");
    var readyStateText =
      xmlhttp.status === 0
        ? "\n" +
          Drupal.t("ReadyState: !readyState", {
            "!readyState": xmlhttp.readyState,
          })
        : "";
    customMessage = customMessage
      ? "\n" +
        Drupal.t("CustomMessage: !customMessage", {
          "!customMessage": customMessage,
        })
      : "";
    this.message =
      statusCode +
      pathText +
      statusText +
      customMessage +
      responseText +
      readyStateText;
    this.name = "AjaxError";
  };
  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;
  Drupal.ajax = function (settings) {
    if (arguments.length !== 1)
      throw new Error(
        "Drupal.ajax() function must be called with one configuration object only"
      );
    var base = settings.base || false,
      element = settings.element || false;
    delete settings.base;
    delete settings.element;
    if (!settings.progress && !element) settings.progress = false;
    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);
    return ajax;
  };
  Drupal.ajax.instances = [];
  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return (
        instance &&
        instance.element !== false &&
        !document.body.contains(instance.element)
      );
    });
  };
  Drupal.ajax.bindAjaxLinks = function (element) {
    $(element)
      .find(".use-ajax")
      .once("ajax")
      .each(function (i, ajaxLink) {
        var $linkElement = $(ajaxLink),
          elementSettings = {
            progress: { type: "throbber" },
            dialogType: $linkElement.data("dialog-type"),
            dialog: $linkElement.data("dialog-options"),
            dialogRenderer: $linkElement.data("dialog-renderer"),
            base: $linkElement.attr("id"),
            element: ajaxLink,
          },
          href = $linkElement.attr("href");
        if (href) {
          elementSettings.url = href;
          elementSettings.event = "click";
        }
        Drupal.ajax(elementSettings);
      });
  };
  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? "mousedown" : null,
      keypress: true,
      selector: base ? "#" + base : null,
      effect: "none",
      speed: "none",
      method: "replaceWith",
      progress: { type: "throbber", message: Drupal.t("Please wait...") },
      submit: { js: true },
    };
    $.extend(this, defaults, elementSettings);
    this.commands = new Drupal.AjaxCommands();
    this.instanceIndex = false;
    if (this.wrapper) this.wrapper = "#" + this.wrapper;
    this.element = element;
    this.element_settings = elementSettings;
    this.elementSettings = elementSettings;
    if (this.element && this.element.form) this.$form = $(this.element.form);
    if (!this.url) {
      var $element = $(this.element);
      if ($element.is("a")) {
        this.url = $element.attr("href");
      } else if (this.element && element.form)
        this.url = this.$form.attr("action");
    }
    var originalUrl = this.url;
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, "/ajax$1");
    if (drupalSettings.ajaxTrustedUrl[originalUrl])
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    var ajax = this;
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(
        formValues,
        elementSettings,
        options
      ) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === "string") response = $.parseJSON(response);
        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url])
          if (xmlhttprequest.getResponseHeader("X-Drupal-Ajax-Token") !== "1") {
            var customMessage = Drupal.t(
              "The response failed verification so will not be processed."
            );
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === "error" || status === "parsererror")
          return ajax.error(xmlhttprequest, ajax.url);
      },
      dataType: "json",
      jsonp: false,
      type: "POST",
    };
    if (elementSettings.dialog)
      ajax.options.data.dialogOptions = elementSettings.dialog;
    if (ajax.options.url.indexOf("?") === -1) {
      ajax.options.url += "?";
    } else ajax.options.url += "&";
    var wrapper = "drupal_" + (elementSettings.dialogType || "ajax");
    if (elementSettings.dialogRenderer)
      wrapper += "." + elementSettings.dialogRenderer;
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + "=" + wrapper;
    $(ajax.element).on(elementSettings.event, function (event) {
      if (
        !drupalSettings.ajaxTrustedUrl[ajax.url] &&
        !Drupal.url.isLocal(ajax.url)
      )
        throw new Error(
          Drupal.t("The callback URL is not local and not trusted: !url", {
            "!url": ajax.url,
          })
        );
      return ajax.eventResponse(this, event);
    });
    if (elementSettings.keypress)
      $(ajax.element).on("keypress", function (event) {
        return ajax.keypressResponse(this, event);
      });
    if (elementSettings.prevent)
      $(ajax.element).on(elementSettings.prevent, false);
  };
  Drupal.ajax.WRAPPER_FORMAT = "_wrapper_format";
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = "_drupal_ajax";
  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) return;
    try {
      this.beforeSerialize(this.element, this.options);
      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert(
        "An error occurred while attempting to process " +
          this.options.url +
          ": " +
          e.message
      );
      return $.Deferred().reject();
    }
  };
  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;
    if (
      event.which === 13 ||
      (event.which === 32 &&
        element.type !== "text" &&
        element.type !== "textarea" &&
        element.type !== "tel" &&
        element.type !== "number")
    ) {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };
  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();
    var ajax = this;
    if (ajax.ajaxing) return;
    try {
      if (ajax.$form) {
        if (ajax.setClick) element.form.clk = element;
        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert(
        "An error occurred while attempting to process " +
          ajax.options.url +
          ": " +
          e.message
      );
    }
  };
  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, "serialize");
    }
    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;
    var pageState = drupalSettings.ajaxPageState;
    options.data["ajax_page_state[theme]"] = pageState.theme;
    options.data["ajax_page_state[theme_token]"] = pageState.theme_token;
    options.data["ajax_page_state[libraries]"] = pageState.libraries;
  };
  Drupal.Ajax.prototype.beforeSubmit = function (
    formValues,
    element,
    options
  ) {};
  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};
      options.extraData.ajax_iframe_upload = "1";
      var v = $.fieldValue(this.element);
      if (v !== null) options.extraData[this.element.name] = v;
    }
    $(this.element).prop("disabled", true);
    if (!this.progress || !this.progress.type) return;
    var progressIndicatorMethod =
      "setProgressIndicator" +
      this.progress.type.slice(0, 1).toUpperCase() +
      this.progress.type.slice(1).toLowerCase();
    if (
      progressIndicatorMethod in this &&
      typeof this[progressIndicatorMethod] === "function"
    )
      this[progressIndicatorMethod].call(this);
  };
  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup =
        typeof message === "string"
          ? Drupal.theme("ajaxProgressMessage", message)
          : "",
      throbber = '<div class="throbber">&nbsp;</div>';
    return (
      '<div class="ajax-progress ajax-progress-throbber">' +
      throbber +
      messageMarkup +
      "</div>"
    );
  };
  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };
  Drupal.theme.ajaxProgressMessage = function (message) {
    return '<div class="message">' + message + "</div>";
  };
  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append(
      $element
    );
  };
  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar(
      "ajax-progress-" + this.element.id,
      $.noop,
      this.progress.method,
      $.noop
    );
    if (this.progress.message)
      progressBar.setProgress(-1, this.progress.message);
    if (this.progress.url)
      progressBar.startMonitoring(
        this.progress.url,
        this.progress.interval || 1500
      );
    this.progress.element = $(
      Drupal.theme("ajaxProgressBar", progressBar.element)
    );
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(
      Drupal.theme("ajaxProgressThrobber", this.progress.message)
    );
    $(this.element).after(this.progress.element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme("ajaxProgressIndicatorFullscreen"));
    $("body").append(this.progress.element);
  };
  Drupal.Ajax.prototype.success = function (response, status) {
    var _this = this;
    if (this.progress.element) $(this.progress.element).remove();
    if (this.progress.object) this.progress.object.stopMonitoring();
    $(this.element).prop("disabled", false);
    var elementParents = $(this.element)
        .parents("[data-drupal-selector]")
        .addBack()
        .toArray(),
      focusChanged = false;
    Object.keys(response || {}).forEach(function (i) {
      if (response[i].command && _this.commands[response[i].command]) {
        _this.commands[response[i].command](_this, response[i], status);
        if (response[i].command === "invoke" && response[i].method === "focus")
          focusChanged = true;
      }
    });
    if (
      !focusChanged &&
      this.element &&
      !$(this.element).data("disable-refocus")
    ) {
      var target = false;
      for (var n = elementParents.length - 1; !target && n >= 0; n--)
        target = document.querySelector(
          '[data-drupal-selector="' +
            elementParents[n].getAttribute("data-drupal-selector") +
            '"]'
        );
      if (target) $(target).trigger("focus");
    }
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    this.settings = null;
  };
  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect,
      speed = response.speed || this.speed,
      effect = {};
    if (type === "none") {
      effect.showEffect = "show";
      effect.hideEffect = "hide";
      effect.showSpeed = "";
    } else if (type === "fade") {
      effect.showEffect = "fadeIn";
      effect.hideEffect = "fadeOut";
      effect.showSpeed = speed;
    } else {
      effect.showEffect = type + "Toggle";
      effect.hideEffect = type + "Toggle";
      effect.showSpeed = speed;
    }
    return effect;
  };
  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) $(this.progress.element).remove();
    if (this.progress.object) this.progress.object.stopMonitoring();
    $(this.wrapper).show();
    $(this.element).prop("disabled", false);
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };
  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== "none" &&
      $newContent.filter(function (i) {
        return !(
          $newContent[i].nodeName === "#comment" ||
          ($newContent[i].nodeName === "#text" &&
            /^(\s|\n|\r)*$/.test($newContent[i].textContent))
        );
      }).length > 1
      ? Drupal.theme("ajaxWrapperMultipleRootElements", $newContent)
      : $newContent;
  };
  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $("<div></div>").append($elements);
  };
  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper),
        method = response.method || ajax.method,
        effect = ajax.getEffect(response),
        settings = response.settings || ajax.settings || drupalSettings,
        $newContent = $($.parseHTML(response.data, document, true));
      $newContent = Drupal.theme(
        "ajaxWrapperNewContent",
        $newContent,
        ajax,
        response
      );
      switch (method) {
        case "html":
        case "replaceWith":
        case "replaceAll":
        case "empty":
        case "remove":
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }
      $wrapper[method]($newContent);
      if (effect.showEffect !== "show") $newContent.hide();
      var $ajaxNewContent = $newContent.find(".ajax-new-content");
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== "show")
        $newContent[effect.showEffect](effect.showSpeed);
      if ($newContent.parents("html").length)
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE)
            Drupal.attachBehaviors(element, settings);
        });
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector)
        .each(function () {
          Drupal.detachBehaviors(this, settings);
        })
        .remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass("ajax-changed")) {
        $element.addClass("ajax-changed");
        if (response.asterisk)
          $element
            .find(response.asterisk)
            .append(
              ' <abbr class="ajax-changed" title="' +
                Drupal.t("Changed") +
                '">*</abbr> '
            );
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text, response.title);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else Drupal.announce(response.text);
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;
      if (ajaxSettings)
        Drupal.ajax.expired().forEach(function (instance) {
          if (instance.selector) {
            var selector = instance.selector.replace("#", "");
            if (selector in ajaxSettings) delete ajaxSettings[selector];
          }
        });
      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else ajax.settings = response.settings;
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply(
        $element,
        _toConsumableArray(response.args)
      );
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector)
        .find("> tbody > tr:visible, > tr:visible")
        .removeClass("odd even")
        .filter(":even")
        .addClass("odd")
        .end()
        .filter(":odd")
        .addClass("even");
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(
        response.new
      );
    },
    add_css: function add_css(ajax, response, status) {
      $("head").prepend(response.data);
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(
        document.querySelector(response.messageWrapperQuerySelector)
      );
      if (response.clearPrevious) messages.clear();
      messages.add(response.message, response.messageOptions);
    },
  };
})(jQuery, window, Drupal, drupalSettings);
(function (Drupal) {
  Drupal.theme.ajaxProgressBar = function ($element) {
    return $element.addClass("ajax-progress ajax-progress-bar");
  };
})(Drupal);
(function ($, Drupal, drupalSettings) {
  "use strict";
  Drupal.behaviors.rhdc_site_switcher = {
    attach: function (context, settings) {
      if (context == document) {
        var ranAjaxForSiteSwitcher = false,
          $utilityPanelContent = $(
            "[slot=site-switcher] .pfe-navigation-item__tray--container",
            context
          ),
          siteSwitcherUrl =
            "https://www.redhat.com/" +
            drupalSettings.path.pathPrefix +
            "cms/ajax/site-switcher";
        document.addEventListener("pfe-navigation-item:open", function (event) {
          if (event.target && event.target.slot === "site-switcher") {
            event.preventDefault();
            var successCb = function (data) {
                if (data && typeof data !== "undefined")
                  $utilityPanelContent.html(data);
              },
              errorCb = function () {
                $.ajax({
                  url: siteSwitcherUrl,
                  method: "GET",
                  dataType: "html",
                  success: successCb,
                });
              };
            if (
              $utilityPanelContent.children().length < 1 &&
              !ranAjaxForSiteSwitcher
            ) {
              $.ajax({
                url: siteSwitcherUrl,
                method: "GET",
                dataType: "html",
                success: successCb,
                error: errorCb,
              });
              ranAjaxForSiteSwitcher = true;
            }
          }
        });
      }
    },
  };
})(jQuery, Drupal, drupalSettings);
!(function () {
  "use strict";
  function n(n) {
    return (
      (e = this),
      (t = void 0),
      (o = function () {
        var e;
        return (function (n, e) {
          var t,
            r,
            o,
            l,
            u = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (l = { next: a(0), throw: a(1), return: a(2) }),
            "function" == typeof Symbol &&
              (l[Symbol.iterator] = function () {
                return this;
              }),
            l
          );
          function a(l) {
            return function (a) {
              return (function (l) {
                if (t) throw new TypeError("Generator is already executing.");
                for (; u; )
                  try {
                    if (
                      ((t = 1),
                      r &&
                        (o =
                          2 & l[0]
                            ? r.return
                            : l[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, l[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (l = [2 & l[0], o.value]), l[0])) {
                      case 0:
                      case 1:
                        o = l;
                        break;
                      case 4:
                        return u.label++, { value: l[1], done: !1 };
                      case 5:
                        u.label++, (r = l[1]), (l = [0]);
                        continue;
                      case 7:
                        (l = u.ops.pop()), u.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (o = (o = u.trys).length > 0 && o[o.length - 1]) ||
                            (6 !== l[0] && 2 !== l[0])
                          )
                        ) {
                          u = 0;
                          continue;
                        }
                        if (
                          3 === l[0] &&
                          (!o || (l[1] > o[0] && l[1] < o[3]))
                        ) {
                          u.label = l[1];
                          break;
                        }
                        if (6 === l[0] && u.label < o[1]) {
                          (u.label = o[1]), (o = l);
                          break;
                        }
                        if (o && u.label < o[2]) {
                          (u.label = o[2]), u.ops.push(l);
                          break;
                        }
                        o[2] && u.ops.pop(), u.trys.pop();
                        continue;
                    }
                    l = e.call(n, u);
                  } catch (n) {
                    (l = [6, n]), (r = 0);
                  } finally {
                    t = o = 0;
                  }
                if (5 & l[0]) throw l[1];
                return { value: l[0] ? l[1] : void 0, done: !0 };
              })([l, a]);
            };
          }
        })(this, function (t) {
          return [
            2,
            (e = document.cookie.match("(^|;) ?" + n + "=([^;]*)(;|$)"))
              ? e[2]
              : null,
          ];
        });
      }),
      new ((r = void 0) || (r = Promise))(function (n, l) {
        function u(n) {
          try {
            i(o.next(n));
          } catch (n) {
            l(n);
          }
        }
        function a(n) {
          try {
            i(o.throw(n));
          } catch (n) {
            l(n);
          }
        }
        function i(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value),
              t instanceof r
                ? t
                : new r(function (n) {
                    n(t);
                  })).then(u, a);
        }
        i((o = o.apply(e, t || [])).next());
      })
    );
    var e, t, r, o;
  }
  !(function (e) {
    e.behaviors.rhbUser = {
      attach: function (e) {
        return (
          (t = this),
          (r = void 0),
          (l = function () {
            var t, r, o, l, u;
            return (function (n, e) {
              var t,
                r,
                o,
                l,
                u = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (l = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (l[Symbol.iterator] = function () {
                    return this;
                  }),
                l
              );
              function a(l) {
                return function (a) {
                  return (function (l) {
                    if (t)
                      throw new TypeError("Generator is already executing.");
                    for (; u; )
                      try {
                        if (
                          ((t = 1),
                          r &&
                            (o =
                              2 & l[0]
                                ? r.return
                                : l[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, l[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (l = [2 & l[0], o.value]), l[0])
                        ) {
                          case 0:
                          case 1:
                            o = l;
                            break;
                          case 4:
                            return u.label++, { value: l[1], done: !1 };
                          case 5:
                            u.label++, (r = l[1]), (l = [0]);
                            continue;
                          case 7:
                            (l = u.ops.pop()), u.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = u.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== l[0] && 2 !== l[0])
                              )
                            ) {
                              u = 0;
                              continue;
                            }
                            if (
                              3 === l[0] &&
                              (!o || (l[1] > o[0] && l[1] < o[3]))
                            ) {
                              u.label = l[1];
                              break;
                            }
                            if (6 === l[0] && u.label < o[1]) {
                              (u.label = o[1]), (o = l);
                              break;
                            }
                            if (o && u.label < o[2]) {
                              (u.label = o[2]), u.ops.push(l);
                              break;
                            }
                            o[2] && u.ops.pop(), u.trys.pop();
                            continue;
                        }
                        l = e.call(n, u);
                      } catch (n) {
                        (l = [6, n]), (r = 0);
                      } finally {
                        t = o = 0;
                      }
                    if (5 & l[0]) throw l[1];
                    return { value: l[0] ? l[1] : void 0, done: !0 };
                  })([l, a]);
                };
              }
            })(this, function (a) {
              switch (a.label) {
                case 0:
                  return e instanceof HTMLDocument ? [4, n("rh_user")] : [2];
                case 1:
                  return (
                    (t = !!a.sent()),
                    (r = e.querySelectorAll(".rhb-account-trigger--loggedin")),
                    (o = e.querySelectorAll(".rhb-account-trigger--loggedout")),
                    t
                      ? ((null == o ? void 0 : o.length) &&
                          (o[0].style.display = "none"),
                        (l = e.getElementById("rhb-account-tray--loggedout")) &&
                          (l.style.display = "none"))
                      : ((null == r ? void 0 : r.length) &&
                          (r[0].style.display = "none"),
                        (u = e.getElementById("rhb-account-tray--loggedin")) &&
                          (u.style.display = "none")),
                    [2]
                  );
              }
            });
          }),
          new ((o = void 0) || (o = Promise))(function (n, e) {
            function u(n) {
              try {
                i(l.next(n));
              } catch (n) {
                e(n);
              }
            }
            function a(n) {
              try {
                i(l.throw(n));
              } catch (n) {
                e(n);
              }
            }
            function i(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof o
                    ? t
                    : new o(function (n) {
                        n(t);
                      })).then(u, a);
            }
            i((l = l.apply(t, r || [])).next());
          })
        );
        var t, r, o, l;
      },
    };
  })(Drupal);
})();
(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.rhdc_search = {
    attach: function (context, settings) {
      $(
        'form#rhdc_search_form, form[slot="mobile-search"], form[slot="lang-404-search"]',
        context
      )
        .once("rhdc_search_submit")
        .submit(function (e) {
          e.preventDefault();
          var keys = $(this).find('input[name="search_field"]').val().trim();
          window.location =
            "https://www.redhat.com/" +
            drupalSettings.path.pathPrefix +
            "search/" +
            encodeURIComponent(keys);
        });
    },
  };
  Drupal.behaviors.rhdc_search_autocomplete = {
    attach: function (context, settings) {
      $("form#rhdc_search_form", context)
        .once("rhdc_search_suggestions")
        .each(function () {
          suggestionsInit("#rhdc_search_form", ".form-wrapper", "search_field");
        });
      $('form[slot="mobile-search"] input[name="search_field"]').one(
        "keypress",
        function () {
          suggestionsInit(
            'form[slot="mobile-search"]',
            ".form-wrapper",
            "search_field"
          );
        }
      );
      $('form[slot="lang-404-search"] input[name="search_field"]').one(
        "keypress",
        function () {
          suggestionsInit(
            'form[slot="lang-404-search"]',
            ".form-wrapper",
            "search_field"
          );
        }
      );
      function suggestionsInit(formSelector, wrapperSelector, inputName) {
        var $form = $(formSelector),
          $wrapper = $form.find(wrapperSelector).first(),
          $input = $form.find('input[name="' + inputName + '"]'),
          $container = $wrapper.find(".search-autocomplete__container"),
          $overlay = $form.next(".search-autocomplete__overlay"),
          xhr;
        if (!$overlay.length)
          $overlay = $("<div>")
            .addClass("search-autocomplete__overlay")
            .insertAfter($form);
        if (!$container.length)
          $container = $("<div>")
            .addClass("search-autocomplete__container")
            .appendTo($wrapper);
        $input
          .on("keyup", function (e) {
            var keys = $(this).val().trim(),
              base_url =
                "https://www.redhat.com/" + drupalSettings.path.pathPrefix,
              url =
                base_url + "search/autocomplete/" + encodeURIComponent(keys);
            if (keys && keys.length >= 3 && keys !== $container.data("keys")) {
              $container.data("keys", keys);
              if (xhr && xhr.abort) xhr.abort();
              xhr = $.getJSON(url);
              xhr.then(function (data) {
                var items = [];
                if (data && data.results && data.results.length) {
                  showSuggestions();
                  for (var i = 0; i < data.results.length; i++) {
                    var row = data.results[i],
                      $div = $("<div>").addClass("search-autocomplete__item"),
                      href = base_url + "search/" + encodeURIComponent(row);
                    $("<a>").attr("href", href).text(row).appendTo($div);
                    items.push($div);
                  }
                  $container.empty().append(items);
                } else $container.data("keys", false);
              });
            }
          })
          .on("focus", function (e) {
            if ($container.data("keys") === $(this).val().trim())
              showSuggestions();
          })
          .on("blur", function (e) {
            if (!$container.hasClass("search-autocomplete-container--active"))
              hideSuggestions();
          });
        $overlay.on("click", function (e) {
          hideSuggestions();
        });
        $container
          .on("mouseenter", function (e) {
            $(this).addClass("search-autocomplete-container--active");
          })
          .on("mouseleave", function (e) {
            $(this).removeClass("search-autocomplete-container--active");
            if (!$input.is(":focus")) hideSuggestions();
          });
        function hideSuggestions() {
          $overlay.fadeOut();
          $container.slideUp();
        }
        function showSuggestions() {
          var $panel = $container.closest("#search-panel"),
            height = $panel.height(),
            timeout = $panel.length && height === 0 ? 600 : 0;
          setTimeout(function () {
            if (height || height === 0)
              $panel.data("height", height).height("auto");
            $container.slideDown();
            $overlay.fadeIn();
          }, timeout);
        }
      }
    },
  };
})(jQuery, Drupal, drupalSettings);
