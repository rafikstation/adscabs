(function () {
  var page = (location.pathname.split('/').pop().replace('.html', '') || 'home');

  function getHeroBgEl() {
    return document.querySelector('.page-hero') || document.querySelector('.hero-bg');
  }

  function getHeroContainer() {
    return document.querySelector('.page-hero') || document.querySelector('.hero');
  }

  function applyBg(img, zoom, posX, posY) {
    var el = getHeroBgEl();
    if (!el) return;
    if (img) {
      el.style.backgroundImage = 'url(' + JSON.stringify(img) + ')';
      // Let CSS handle background-size/position for full responsive behaviour
      el.classList.add('has-bg-image');
      window._heroBgCfg = { zoom: zoom != null ? zoom : 86, posX: posX != null ? posX : 100, posY: posY != null ? posY : 50 };
      if (window._taxiWarp) window._taxiWarp();
    } else {
      el.style.backgroundImage = '';
      el.classList.remove('has-bg-image');
      window._heroBgCfg = null;
      if (window._taxiWarp) window._taxiWarp();
    }
  }

  function toDataUrl(file) {
    return new Promise(function (resolve, reject) {
      var MAX = 1600;
      var reader = new FileReader();
      reader.onerror = reject;
      reader.onload = function () {
        var img = new Image();
        img.onerror = reject;
        img.onload = function () {
          var scale = Math.min(1, MAX / Math.max(img.width, img.height));
          var w = Math.round(img.width * scale);
          var h = Math.round(img.height * scale);
          var canvas = document.createElement('canvas');
          canvas.width = w; canvas.height = h;
          canvas.getContext('2d').drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/webp', 0.88));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  async function init() {
    // Load current bg
    try {
      var r = await fetch('/api/hero-bg');
      if (r.ok) {
        var bgs = await r.json();
        var bg = bgs[page];
        if (bg) {
          var bgImg  = typeof bg === 'string' ? bg : bg.img;
          var bgZoom = (bg && typeof bg === 'object' && bg.zoom != null) ? bg.zoom : null;
          var bgPosX = (bg && typeof bg === 'object' && bg.posX != null) ? bg.posX : null;
          var bgPosY = (bg && typeof bg === 'object' && bg.posY != null) ? bg.posY : null;
          applyBg(bgImg, bgZoom, bgPosX, bgPosY);
        }
      }
    } catch (_) {}

    // Show upload controls only for admin
    try {
      var ar = await fetch('/api/auth/check');
      var authData = await ar.json();
      if (!authData.admin) return;
    } catch (_) { return; }

    var hero = getHeroContainer();
    if (!hero) return;

    // Upload label
    var label = document.createElement('label');
    label.className = 'hero-bg-upload-btn';
    label.title = 'Upload hero background image';
    label.innerHTML =
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
      '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' +
      '<path d="m21 15-5-5L5 21"/></svg>' +
      '<span>Set background</span>' +
      '<input type="file" accept="image/png,image/jpeg,image/webp,image/avif" hidden>';

    var input = label.querySelector('input');
    var labelText = label.querySelector('span');

    input.addEventListener('change', async function () {
      var file = this.files[0];
      if (!file) return;
      labelText.textContent = 'Uploading…';
      try {
        var dataUrl = await toDataUrl(file);
        var resp = await fetch('/api/hero-bg', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ page: page, image: dataUrl })
        });
        if (resp.ok) applyBg(dataUrl);
      } catch (_) {}
      labelText.textContent = 'Set background';
      this.value = '';
    });

    // Remove button
    var removeBtn = document.createElement('button');
    removeBtn.className = 'hero-bg-remove-btn';
    removeBtn.type = 'button';
    removeBtn.title = 'Remove background image';
    removeBtn.innerHTML =
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
      '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

    removeBtn.addEventListener('click', async function () {
      try {
        await fetch('/api/hero-bg', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ page: page })
        });
        applyBg(null);
      } catch (_) {}
    });

    var wrap = document.createElement('div');
    wrap.className = 'hero-bg-controls';
    wrap.appendChild(label);
    wrap.appendChild(removeBtn);
    hero.appendChild(wrap);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
