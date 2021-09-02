/**
 * TRUSTe Consent Manager API scripts.
 *
 * @url https://choices-sb.truste-svc.net/assets/test/trustarcgdpr_cm_api_gtm_banner_mockup_eu_implied.html
 */

// Validate domain.
var trustecmDomain =
  document.currentScript.getAttribute('data-domain') || 'redhat.com';
// Convert debug to boolean.
var trustecmDebug =
  document.currentScript.getAttribute('data-debug') || 'false';
trustecmDebug = trustecmDebug === 'true';
// Get browser language.
var trustecmLangcode =
  document.currentScript.getAttribute('data-langcode') || 'browser';
if (trustecmLangcode === 'browser') {
  trustecmLangcode = navigator.language || navigator.userLanguage;
}
// Truncate ISO code, or default to English.
trustecmLangcode = trustecmLangcode ? trustecmLangcode.substring(0, 2) : 'en';
// Convert asserted to boolean.
var trustecmRequireAsserted =
  document.currentScript.getAttribute('data-asserted') || 'true';
trustecmRequireAsserted = trustecmRequireAsserted === 'true';
var trustecmState = {};

// Init.
if (trustecmDomain) {
  // Run before assets (i.e. iframes) load.
  window.addEventListener(
    'DOMContentLoaded',
    function () {
      trustecmInit();
    },
    true
  );
} else {
  console.log('Missing "data-domain" attribute on script tag.');
}

/**
 * Initialize.
 */
function trustecmInit() {
  if (trustecmDebug) {
    console.log('trustecmInit');
  }
  var schemas = trustecmGetSchemas();
  trustecmRewriteElements(schemas);
  trustecmAPI();
}

/**
 * Rewrite HTML elements (ie. iframes) before load.
 *
 * @param schemas
 */
function trustecmRewriteElements(schemas) {
  if (trustecmDebug) {
    console.log('rewriteElements', schemas);
  }
  var elements = document.querySelectorAll('iframe');
  if (elements.length <= 0) {
    return;
  }
  var types = trustecmGetTypes(),
    categories = trustecmGetCategories(),
    placeholderLabel = trustecmGetPlaceholderLabel(),
    placeholderDesc = trustecmGetPlaceholderDesc();
  placeholderLabel = trustecmGetObjectLanguage(placeholderLabel);
  placeholderDesc = trustecmGetObjectLanguage(placeholderDesc);
  // Loop through and validate all elements.
  for (var element of elements) {
    for (var key of Object.keys(schemas)) {
      var schema = schemas[key],
        tag = schema['tag'];
      // Validate tag.
      if (![tag].includes(element.tagName)) {
        continue;
      }
      // Skip entire element if has already been rewritten or processed.
      var dataTrustecm = element.getAttribute('data-trustecm');
      if (dataTrustecm === 'rewritten' || dataTrustecm === 'processed') {
        break;
      }
      // Validate domains.
      var regexValid = false,
        src = element.getAttribute('src');
      if (schema.hasOwnProperty('domains')) {
        var domains = schema['domains'].replace(/[.]/g, '\\$&'),
          regexDomainsParts = [
            /^(https?:\/\/|(\/[a-z]{2}(-[a-z]{2})?)?\/media\/oembed\?url=https?%3A\/\/)?(www\.)?/,
            '(' + domains + ')',
            /\/.+$/,
          ],
          regexDomains = new RegExp(
            regexDomainsParts[0].source +
              regexDomainsParts[1] +
              regexDomainsParts[2].source,
            'g'
          );
        if (regexDomains.test(src)) {
          regexValid = true;
        }
      }
      if (schema.hasOwnProperty('directories')) {
        var directories = schema['directories'].replace(/[\/]/g, '\\$&'),
          regexDirectoriesParts = [/^\//, '(' + directories + ')', /\/.+$/],
          regexDirectories = new RegExp(
            regexDirectoriesParts[0].source +
              regexDirectoriesParts[1] +
              regexDirectoriesParts[2].source,
            'g'
          );
        if (regexDirectories.test(src)) {
          regexValid = true;
        }
      }
      // Skip entire element if regex doesn't pass.
      if (!regexValid) {
        break;
      }
      var type = schema['type'],
        category = schema['category'],
        typeLabel = trustecmGetObjectLanguage(types[type]['label']),
        typeAction = trustecmGetObjectLanguage(types[type]['action']),
        categoryLabel = trustecmGetObjectLanguage(
          categories[category]['label']
        );
      // Replace tokens or variation.
      var placeholderDescReplace, placeholderLabelReplace;
      if (placeholderLabel.hasOwnProperty('token')) {
        placeholderLabelReplace = placeholderLabel['token'].replace(
          '%typeLabel',
          typeLabel
        );
        placeholderLabelReplace = placeholderLabelReplace.replace(
          '%typeAction',
          typeAction
        );
      } else {
        placeholderLabelReplace = placeholderLabel[type];
      }
      if (placeholderDesc.hasOwnProperty('token')) {
        placeholderDescReplace = placeholderDesc['token'].replace(
          '%categoryLabel',
          categoryLabel
        );
      } else {
        placeholderDescReplace = placeholderDesc[category];
      }
      element.setAttribute('data-trustecm', 'rewritten');
      element.setAttribute('data-src', src);
      element.setAttribute('src', 'about:blank');
      // Process tags differently.
      if (tag === 'IFRAME') {
        var classValue = element.getAttribute('class'),
          title = element.getAttribute('title');
        classValue = classValue
          ? classValue +
            ' trustecm-embed__' +
            category +
            ' trustecm-embed__' +
            category +
            '--' +
            type
          : 'trustecm-embed__' +
            category +
            ' trustecm-embed__' +
            category +
            '--' +
            type;
        title = title
          ? placeholderLabelReplace + '. ' + title
          : placeholderLabelReplace;
        element.setAttribute('class', classValue);
        element.setAttribute('title', title);
        // Add placeholder.
        var elementRect = element.getBoundingClientRect(),
          elementPos = getComputedStyle(element, null).position,
          top =
            elementPos === 'absolute'
              ? 0
              : -1 * (elementRect.height + 7) + 'px',
          height =
            elementPos === 'absolute' ? 'auto' : elementRect.height + 'px';
        // Hide by default to prevent flicker (ITMKTGCMS-1670).
        var placeholder =
          '<div class="trustecm-embed__placeholder" style="display: none; top: ' +
          top +
          ';">' +
          '<div class="trustecm-embed__placeholder--wrapper" style="height: ' +
          height +
          ';">' +
          '<div class="trustecm-embed__placeholder--inner">' +
          '<div class="trustecm-embed__placeholder--icon"></div>' +
          '<div class="trustecm-embed__placeholder--label">' +
          placeholderLabelReplace +
          '</div>' +
          '<div class="trustecm-embed__placeholder--desc">' +
          placeholderDescReplace +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>';
        element.insertAdjacentHTML('afterend', placeholder);
      }
      // Skip entire element once rewritten.
      break;
    }
  }
  // Detect placeholder wrapper resize.
  var placeholderWrappers = document.getElementsByClassName(
    'trustecm-embed__placeholder--wrapper'
  );
  if (placeholderWrappers.length > 0) {
    var resize_ob = new ResizeObserver(function (entries) {
      for (var entry of entries) {
        var entryRect = entry.contentRect,
          placeholderWrapper = entry.target,
          placeholder = placeholderWrapper.parentElement;
        if (placeholder.length <= 0) {
          break;
        }
        if (entryRect.width <= 480) {
          placeholder.setAttribute('data-size', 'mobile');
        } else if (entryRect.width <= 640) {
          placeholder.setAttribute('data-size', 'small');
        } else if (entryRect.width <= 1280) {
          placeholder.setAttribute('data-size', 'medium');
        } else {
          placeholder.setAttribute('data-size', 'large');
        }
      }
    });
    for (var placeholderWrapper of placeholderWrappers) {
      resize_ob.observe(placeholderWrapper);
    }
  }
}

/**
 * Display placeholder.
 */
function trustecmDisplayPlaceholder() {
  var placeholders = document.getElementsByClassName(
    'trustecm-embed__placeholder'
  );
  if (placeholders.length > 0) {
    for (var placeholder of placeholders) {
      placeholder.style.display = 'block';
    }
  }
}

/**
 * Get current language string from an object.
 *
 * @param object
 */
function trustecmGetObjectLanguage(object) {
  return object.hasOwnProperty(trustecmLangcode)
    ? object[trustecmLangcode]
    : object['en'];
}

/**
 * Process embeds.
 *
 * @param elements
 */
function trustecmProcessEmbeds(elements) {
  if (elements.length <= 0) {
    return;
  }
  if (trustecmDebug) {
    console.log('trustecmProcessEmbeds');
  }
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i],
      dataTrustecm = element.getAttribute('data-trustecm');
    // Skip element if has already been processed.
    if (dataTrustecm === 'processed') {
      continue;
    }
    // Skip element if hasn't been rewritten.
    if (!dataTrustecm) {
      element.setAttribute('data-trustecm', 'processed');
      continue;
    }
    var src = element.getAttribute('src'),
      dataSrc = element.getAttribute('data-src');
    element.setAttribute('src', dataSrc);
    element.setAttribute('data-src', src);
    element.setAttribute('data-trustecm', 'processed');
    // Remove placeholder, if exists.
    var placeholder = element.nextSibling;
    if (
      placeholder &&
      placeholder.className === 'trustecm-embed__placeholder'
    ) {
      element.parentNode.removeChild(placeholder);
    }
  }
}

/**
 * TRUSTe Consent Manager API script.
 */
function trustecmAPI() {
  if (trustecmDebug) {
    console.log('trustecmAPI', trustecmDomain);
  }
  /**
   * Different pages add the Consent Manager in different locations, so all callers of the API must wait till
   * the API is loaded. The API is loaded in two stages:
   *      1) The first stage is where the "PrivacyManagerAPI" object exists on the page and where default and
   *         page/domain specific settings can be obtained. If your requirements demand user consent, you must wait
   *         for the second stage load, but it is always recommended to wait for the second stage no matter what.
   *         The "loading" parameter will be added to all API responses when the API is in this state.
   *      2) The second stage loads the user preferences and the domain specific information. If you made a
   *         postMessage API call during the first stage, then the API will automatically send you another, updated,
   *         response if the result has changed.
   */
  function runOnce() {
    // CHECK: for API exists on the page.
    if (!trustecmState.hasRunOnce && window.PrivacyManagerAPI) {
      if (trustecmDebug) {
        console.log('runOnce');
      }
      // Register with the API for automatic updates of user preferences (for the settings you care about)
      // --OR-- if the API is loading, then this will send an update when the API is done and has loaded the user preferences.
      window.addEventListener(
        'message',
        function (e) {
          try {
            var json = JSON.parse(e.data);
            json.PrivacyManagerAPI && handleAPIResponse(json.PrivacyManagerAPI);
          } catch (e) {
            e.name !== 'SyntaxError' && console.log(e);
          }
        },
        false
      );
      var apiObject = {
        PrivacyManagerAPI: {
          self: trustecmDomain,
          action: 'getConsent',
          timestamp: new Date().getTime(),
          type: 'functional',
        },
      };
      window.top.postMessage(JSON.stringify(apiObject), '*');
      apiObject = {
        PrivacyManagerAPI: {
          self: trustecmDomain,
          action: 'getConsent',
          timestamp: new Date().getTime(),
          type: 'advertising',
        },
      };
      window.top.postMessage(JSON.stringify(apiObject), '*');
      trustecmState.hasRunOnce = true;
      trustecmState.i && clearInterval(trustecmState.i);
    }
  }
  /**
   * This function returns value of notice_behavior cookie to determine location and behavior manager based on domain.
   * When no notice_behavior cookie exists, this returns a blank string.
   */
  function getBehavior() {
    var result = '';
    var rx = new RegExp('\\s*notice_behavior\\s*=\\s*([^;]*)').exec(
      document.cookie
    );
    if (rx && rx.length > 1) {
      result = rx[1];
    }
    return result;
  }
  /**
   * This function is called whenever a user preference is initially set, is retrieved for the first time on this page, or is updated.
   * This is the gateway function which should be customized by each client (you) to determine when and how to handle the API response.
   *
   * The second half of the function determines settings from the CM API, and decides which elements on the page should be "activated" based upon those settings.
   * Elements can only be activated once. Elements can not be deactivated, once activated.
   *
   * @param response
   */
  function handleAPIResponse(response) {
    // CHECK: make sure this response is to YOU. You will actually get the messages to all API callers on this page, not just to you.
    if (!response.source || response.self !== trustecmDomain) {
      return;
    }
    if (trustecmDebug) {
      console.log('handleAPIResponse', response);
    }
    // Required trackers/cookies are always allowed, no need to ask permission.
    if (!trustecmState.hasLoadedRequired) {
      var requiredElements = document.querySelectorAll(
        '.trustecm[data-tracker-type="required"]'
      );
      activateElement(requiredElements);
      trustecmState.hasLoadedRequired = true;
    }
    // Check if behavior manager is EU.
    var isEU = /.*(,|)eu/i.test(getBehavior());
    // Case where we don't want to do anything till the user has made a preference.
    if (isEU && trustecmRequireAsserted && response.source !== 'asserted') {
      trustecmDisplayPlaceholder();
      return;
    }
    // Step 1) Get Consent Manager settings (user prefs)
    //        These API calls are DIFFERENT than the original API call ("response" parameter) so they must be called separately.
    // Step 2) Apply the settings after checking if approved
    var setting = null;
    if (!trustecmState.hasLoadedAdvertising) {
      setting = PrivacyManagerAPI.callApi(
        'getConsent',
        trustecmDomain,
        null,
        null,
        'advertising'
      );
      if (setting.consent === 'approved') {
        var advertisingElements = document.querySelectorAll(
          '.trustecm[data-tracker-type="advertising"]'
        );
        activateElement(advertisingElements);
        trustecmState.hasLoadedAdvertising = true;
      } else {
        trustecmDisplayPlaceholder();
      }
      if (trustecmDebug) {
        console.log('advertising', setting);
      }
    }
    if (!trustecmState.hasLoadedFunctional) {
      setting = PrivacyManagerAPI.callApi(
        'getConsent',
        trustecmDomain,
        null,
        null,
        'functional'
      );
      if (setting.consent === 'approved') {
        var functionalElements = document.querySelectorAll(
          '.trustecm[data-tracker-type="functional"]'
        );
        activateElement(functionalElements);
        trustecmState.hasLoadedFunctional = true;
      } else {
        trustecmDisplayPlaceholder();
      }
      if (trustecmDebug) {
        console.log('functional', setting);
      }
    }
    // No additional checking, this always fires, but only after a user has consented.
    if (!trustecmState.hasLoadedAnyConsent) {
      var anyElements = document.querySelectorAll(
        '.trustecm[data-tracker-type="any"]'
      );
      activateElement(anyElements);
      trustecmState.hasLoadedAnyConsent = true;
    }
    // Check of vendor domain and fires if that domain is approved, which is based on how that domain was categorized on the backend.
    var vendors = document.querySelectorAll(
      '.trustecm[data-tracker-type="vendor"]'
    );
    for (var i = 0; i < vendors.length; i++) {
      var currentVendor = vendors[i];
      var vDomain = currentVendor.getAttribute('vsrc');
      if (vDomain && !trustecmState['hasLoaded' + vDomain]) {
        setting = PrivacyManagerAPI.callApi(
          'getConsent',
          trustecmDomain,
          vDomain
        );
        if (setting.consent === 'approved') {
          var vendorElements = document.querySelectorAll(
            '.trustecm[data-tracker-type="vendor"][vsrc="' + vDomain + '"]'
          );
          activateElement(vendorElements);
          trustecmState['hasLoaded' + vDomain] = true;
        } else {
          trustecmDisplayPlaceholder();
        }
        if (trustecmDebug) {
          console.log('vendor', setting);
        }
      }
    }
  }
  /**
   * Activates (runs, loads, or displays) an element based upon element node name.
   *
   * @param {Array.<HTMLElement>} list
   */
  function activateElement(list) {
    if (!(list instanceof Array || list instanceof NodeList)) {
      throw 'Illegal argument - must be an array';
    }
    if (trustecmDebug) {
      console.log('activateElement', list);
    }
    for (var item, i = list.length; i-- > 0; ) {
      item = list[i];
      item.class = 'trustecm_done';
      switch (item.nodeName.toLowerCase()) {
        case 'script':
          var z = item.getAttribute('data-src');
          if (z) {
            var y = document.createElement('script');
            y.src = z;
            y.async = item.async;
            item.parentNode.insertBefore(y, item);
          } else eval(item.text || item.textContent || item.innerText);
      }
    }
  }
  trustecmState.i = setInterval(runOnce, 10);
}

/**
 * Get element schemas.
 */
function trustecmGetSchemas() {
  return {
    youtube: {
      tag: 'IFRAME',
      domains: 'youtube.com|youtu.be',
      type: 'video',
      category: 'advertising',
    },
    vimeo: {
      tag: 'IFRAME',
      domains: 'player.vimeo.com|vimeo.com',
      type: 'video',
      category: 'functional',
    },
    jwplayer: {
      tag: 'IFRAME',
      domains: 'cdn.jwplayer.com|jwplayer.com',
      directories:
        'rol/vtc/rvideo_class_player|rol-stage/vtc/rvideo_class_player|rol-rhu/vtc/rvideo_class_player',
      type: 'video',
      category: 'functional',
    },
  };
}

/**
 * Get element types.
 */
function trustecmGetTypes() {
  return {
    video: {
      label: {
        en: 'video',
        de: '',
        es: '',
        fr: '',
        it: '',
        ja: '',
        ko: '',
        pt: '',
        zh: '',
      },
      action: {
        en: 'play',
        de: '',
        es: '',
        fr: '',
        it: '',
        ja: '',
        ko: '',
        pt: '',
        zh: '',
      },
    },
  };
}

/**
 * Get element categories.
 */
function trustecmGetCategories() {
  return {
    advertising: {
      label: {
        en: 'Advertising',
        de: 'Werbe-',
        es: 'Publicitarias',
        fr: 'publicitaires',
        it: 'pubblicitari',
        ja: '「広告',
        ko: '광고',
        pt: 'publicitários',
        zh: '广告',
      },
    },
    functional: {
      label: {
        en: 'Functional',
        de: 'Funktionale ',
        es: 'Funcionales',
        fr: 'fonctionnels',
        it: 'funzionali',
        ja: '「機能',
        ko: '기능',
        pt: 'funcionais',
        zh: '功能',
      },
    },
  };
}

/**
 * Get element placeholder label.
 */
function trustecmGetPlaceholderLabel() {
  return {
    en: {
      token: "This %typeLabel can't %typeAction due to privacy settings",
    },
    de: {
      video:
        'Dieses Video kann aufgrund der Datenschutzeinstellungen nicht abgespielt werden.',
    },
    es: {
      video:
        'Este video no se puede reproducir debido a la configuración de privacidad',
    },
    fr: {
      video:
        'Il est impossible de lire cette vidéo en raison de vos paramètres de confidentialité',
    },
    it: {
      video:
        'Per riprodurre il video, modifica le tue preferenze sulla privacy',
    },
    ja: {
      video: 'この動画はプライバシー設定により再生できません。',
    },
    ko: {
      video: '개인정보보호 설정에 의해 이 동영상을 재생할 수 없습니다',
    },
    pt: {
      video:
        'Este vídeo não pode ser reproduzido devido às configurações de privacidade.',
    },
    zh: {
      video: '由于隐私设置，该视频无法播放',
    },
  };
}

/**
 * Get element placeholder description.
 */
function trustecmGetPlaceholderDesc() {
  return {
    en: {
      token:
        'To change your settings, select the "Cookie Preferences" link in the footer and opt in to "%categoryLabel Cookies."',
    },
    de: {
      token:
        'Um Ihre Einstellungen zu ändern, wählen Sie den Link „Cookie-Einstellungen“ in der Fußzeile und aktivieren Sie die Option „%categoryLabelCookies“.',
    },
    es: {
      token:
        'Para cambiar su configuración, seleccione el enlace "Preferencias de cookies" en el pie de página y luego seleccione "Cookies %categoryLabel".',
    },
    fr: {
      token:
        "Pour modifier vos paramètres, cliquez sur le lien « Préférences en matière de cookie » dans le pied de page et activez l'option « Cookies %categoryLabel ».",
    },
    it: {
      token:
        'Per modificare le preferenze, clicca su "Preferenze dei cookie" in fondo alla pagina e abilita l\'opzione "Cookie %categoryLabel" nella finestra delle preferenze.',
    },
    ja: {
      token:
        '設定を変更するには、ページ下部の「Cookie 選択設定」をクリックし、%categoryLabel Cookie」を「イン」(許可) に設定してください。',
    },
    ko: {
      token:
        '설정을 변경하려면, 페이지 하단의 "쿠키 기본 설정"을 클릭하고 "%categoryLabel 쿠키"를 허용하십시오.',
    },
    pt: {
      token:
        'Para alterar suas configurações, clique no link “Preferências de Cookies” no rodapé da página e selecione "Sim" na seção “Cookies %categoryLabel”.',
    },
    zh: {
      token:
        '要更改您的设置，请选择页脚的“Cookie 偏好设置”链接，并选择“%categoryLabel Cookie”。',
    },
  };
}
