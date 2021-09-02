(function() {
  // cookie functions
  var trustArcHelper = {};
  var temp = location.host.split('.').reverse();
  var rootDomain = '.' + temp[1] + '.' + temp[0];
  trustArcHelper.cookieDomain = rootDomain;
  trustArcHelper.sanitizeUntrusted = function(s) {
    var str = '';
    if (typeof s == 'string') {
      str = s.replace(/[;'<\/>=\)\(]/gm, '!');
    } else if (typeof s == 'number' || typeof s == 'boolean') {
      str = s;
    }
    return str;
  };
  trustArcHelper.getCookie = function(cookieName) {
    var name = encodeURI(cookieName) + '=';
    var cookieValue = '';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1);
      if (c.indexOf(name) === 0) {
        cookieValue = c.substring(name.length, c.length);
        return decodeURIComponent(cookieValue);
      }
    }
    return cookieValue;
  };
  trustArcHelper.setCookie = function(cookieName, cookieValue, exdays) {
    // check for html markup in cookieValue
    // if html markup present, remove the markup portion
    var cookieVal = cookieValue || '';
    cookieVal = trustArcHelper.sanitizeUntrusted(cookieVal);
    // set expiration time
    var expires = '';
    if (typeof exdays != 'undefined' && exdays > 0) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      expires = '; expires=' + d.toUTCString();
    }
    document.cookie =
      encodeURI(cookieName) +
      '=' +
      encodeURIComponent(cookieVal) +
      expires +
      '; path=/; domain=' +
      trustArcHelper.cookieDomain;
  };
  trustArcHelper.loadScript = function(c, a) {
    var b = document.createElement('script');
    b.type = 'text/javascript';
    if (a && typeof a == 'function') {
      if (b.readyState) {
        b.onreadystatechange = function() {
          if (b.readyState === 'loaded' || b.readyState === 'complete') {
            b.onreadystatechange = null;
            a();
          }
        };
      } else {
        b.onload = function() {
          a();
        };
      }
    }
    b.src = c;
    document.getElementsByTagName('head')[0].appendChild(b);
  };
  // load the trust arc script
  var taCountry = '';
  var taState = '';
  if (trustArcHelper.getCookie('trustArcTesting') == 'yes') {
    taCountry = trustArcHelper.getCookie('trustArcCountry') || 'us';
    taCountry = taCountry.toLowerCase();
    if (taCountry == 'us') {
      taState = trustArcHelper.getCookie('trustArcState');
    }
  }
  if (
    document.location.pathname.indexOf('/forms') !== 0 &&
    document.location.hostname !== 'redhat.lookbookhq.com'
  ) {
    if (taState == 'ca') {
      // just used for ccpa testing
      trustArcHelper.loadScript(
        'https://consent.trustarc.com/notice?domain=redhatstage.com&c=teconsent&state=ca&js=nj&noticeType=bb&gtm=1&text=true&privacypolicylink=https://www.redhat.com/en/about/privacy-policy'
      );
    } else if (taCountry) {
      trustArcHelper.loadScript(
        'https://consent.trustarc.com/notice?domain=redhat.com&c=teconsent&country=' +
          taCountry +
          '&js=nj&noticeType=bb&gtm=1&text=true&privacypolicylink=https://www.redhat.com/en/about/privacy-policy'
      );
    } else {
      trustArcHelper.loadScript(
        'https://consent.trustarc.com/notice?domain=redhat.com&c=teconsent&js=nj&noticeType=bb&gtm=1&text=true&privacypolicylink=https://www.redhat.com/en/about/privacy-policy'
      );
    }
  }

  var _STATE = {};

  function runOnce() {
    if (
      !_STATE.hasRunOnce &&
      window.truste &&
      truste.eu &&
      truste.eu.prefclose
    ) {
      _STATE.oldValue = parseInt(truste.eu.bindMap.prefCookie);
      _STATE.oldMethod = truste.eu.prefclose;
      truste.eu.prefclose = function() {
        _STATE.oldMethod();
        if (_STATE.oldValue != parseInt(truste.eu.bindMap.prefCookie))
          setTimeout(function() {
            window.location.reload();
          }, 20);
      };
      _STATE.hasRunOnce = true;
      _STATE.i && clearInterval(_STATE.i);
    }
  }
  _STATE.i = setInterval(runOnce, 10);
  // end trust arc script
})();
