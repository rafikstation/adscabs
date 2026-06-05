/* AdsCabs — i18n content loader
 * Reads language from localStorage, fetches /api/content?lang=XX,
 * then replaces all [data-i18n] elements with translated text.
 */
(function () {
  var STORAGE_KEY = 'adscabs_lang';
  var DEFAULT_LANG = 'nl';
  var _content = {};
  var _loading = false;

  function getLang() {
    try { return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG; }
    catch (_) { return DEFAULT_LANG; }
  }

  function setLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
  }

  function getVal(key) {
    var parts = key.split('.');
    var obj = _content;
    for (var i = 0; i < parts.length; i++) {
      if (obj == null || typeof obj !== 'object') return null;
      obj = obj[parts[i]];
    }
    return (obj != null && obj !== '') ? String(obj) : null;
  }

  function applyTranslations(lang) {
    // textContent fields
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = getVal(el.getAttribute('data-i18n'));
      if (val !== null) el.textContent = val;
    });
    // innerHTML fields (use sparingly — content is admin-controlled)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = getVal(el.getAttribute('data-i18n-html'));
      if (val !== null) el.innerHTML = val;
    });
    // placeholder attributes
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var val = getVal(el.getAttribute('data-i18n-ph'));
      if (val !== null) el.placeholder = val;
    });
    // Update active lang button highlight
    document.querySelectorAll('.lang-opt').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });
    document.documentElement.setAttribute('lang', lang);
  }

  function loadAndApply(lang) {
    if (_loading) return;
    _loading = true;
    fetch('/api/content?lang=' + lang)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        _content = data;
        _loading = false;
        applyTranslations(lang);
      })
      .catch(function () {
        _loading = false;
        // Server not available — apply active state from storage
        document.querySelectorAll('.lang-opt').forEach(function (btn) {
          btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
        });
        document.documentElement.setAttribute('lang', lang);
      });
  }

  function init() {
    var lang = getLang();
    loadAndApply(lang);

    // Intercept language toggle clicks on the entire document
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.lang-opt');
      if (!btn) return;
      var newLang = btn.getAttribute('data-lang');
      if (!newLang || newLang === getLang()) return;
      setLang(newLang);
      loadAndApply(newLang);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
