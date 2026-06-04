/* TAXIMEDIA — navbar logo + hamburger + language toggle */

/* Apply logo size from admin settings */
(function(){
  fetch('/api/logo-settings')
    .then(function(r){ return r.ok ? r.json() : null; })
    .then(function(s){
      if (!s) return;
      document.querySelectorAll('.site-logo').forEach(function(img){
        if (s.src)    img.src          = s.src + '?v=' + Date.now();
        if (s.width)  img.style.width  = s.width  + 'px';
        if (s.height) img.style.height = s.height + 'px';
      });
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
