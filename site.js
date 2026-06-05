/* TAXIMEDIA — navbar logo + hamburger + language toggle */

/* Apply logo — cached values applied synchronously first (no flash),
   then refreshed from API and cache updated for next visit.          */
(function(){
  // Step 1: apply cached logo instantly — no network, no flash
  try {
    var cs = localStorage.getItem('site_logo_src');
    var cw = localStorage.getItem('site_logo_w');
    var ch = localStorage.getItem('site_logo_h');
    if (cs) document.querySelectorAll('.site-logo').forEach(function(img){
      img.src = cs;
      if (cw) img.style.width  = cw + 'px';
      if (ch) img.style.height = ch + 'px';
    });
  } catch(e) {}

  // Step 2: refresh from API and update cache for future visits
  fetch('/api/logo-settings')
    .then(function(r){ return r.ok ? r.json() : null; })
    .then(function(s){
      if (!s) return;
      document.querySelectorAll('.site-logo').forEach(function(img){
        if (s.src)    img.src          = s.src;
        if (s.width)  img.style.width  = s.width  + 'px';
        if (s.height) img.style.height = s.height + 'px';
      });
      try {
        if (s.src)    localStorage.setItem('site_logo_src', s.src);
        if (s.width)  localStorage.setItem('site_logo_w',   s.width);
        if (s.height) localStorage.setItem('site_logo_h',   s.height);
      } catch(e) {}
    }).catch(function(){});
})();

(function(){
  // Language toggle (syncs every .lang-toggle on the page)
  var toggles = document.querySelectorAll('.lang-toggle');
  function setLang(lang){
    document.querySelectorAll('.lang-toggle .lang-opt').forEach(function(b){
      b.classList.toggle('is-active', b.dataset.lang === lang);
    });
    document.documentElement.setAttribute('lang', lang);
  }
  toggles.forEach(function(t){
    t.addEventListener('click', function(e){
      var b = e.target.closest('.lang-opt');
      if(b) setLang(b.dataset.lang);
    });
  });

  // Mobile hamburger menu
  var btn = document.getElementById('navToggle');
  var menu = document.getElementById('mobileMenu');
  if(btn && menu){
    function close(){ btn.classList.remove('open'); menu.classList.remove('open'); btn.setAttribute('aria-expanded','false'); }
    btn.addEventListener('click', function(){
      var open = menu.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('.mobile-nav a, .btn').forEach(function(el){ el.addEventListener('click', close); });
    window.addEventListener('resize', function(){ if(window.innerWidth > 900) close(); });
  }
})();
