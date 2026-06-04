const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const CONTENT_DIR = path.join(ROOT, 'content');

// Credentials — change ADMIN_PASS via environment variable in production
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_HASH = bcrypt.hashSync(process.env.ADMIN_PASS || 'taximedia2024', 10);

// Middleware
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ extended: true, limit: '200mb' }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'tm-cms-secret-2024',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 8 * 60 * 60 * 1000 }
}));

// ── Auth helpers ──────────────────────────────────────────────────────────────
function requireAdmin(req, res, next) {
  if (req.session && req.session.admin) return next();
  res.status(401).json({ error: 'Unauthorized' });
}

// ── Auth API ──────────────────────────────────────────────────────────────────
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Missing fields' });
  const valid = username === ADMIN_USER && await bcrypt.compare(password, ADMIN_HASH);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });
  req.session.admin = true;
  res.json({ ok: true });
});

app.post('/api/auth/logout', (req, res) => {
  req.session.destroy(() => res.json({ ok: true }));
});

app.get('/api/auth/check', (req, res) => {
  res.json({ admin: !!(req.session && req.session.admin) });
});

// ── Content API ───────────────────────────────────────────────────────────────
function readContent(lang) {
  const file = path.join(CONTENT_DIR, `${lang}.json`);
  if (!fs.existsSync(file)) return {};
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return {}; }
}

function writeContent(lang, data) {
  if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });
  fs.writeFileSync(path.join(CONTENT_DIR, `${lang}.json`), JSON.stringify(data, null, 2), 'utf8');
}

// Public: serves translated content to the website
app.get('/api/content', (req, res) => {
  const lang = req.query.lang === 'en' ? 'en' : 'nl';
  res.json(readContent(lang));
});

// Admin: returns both languages at once
app.get('/api/content/all', requireAdmin, (req, res) => {
  res.json({ nl: readContent('nl'), en: readContent('en') });
});

// Admin: save content for one language
app.post('/api/content', requireAdmin, (req, res) => {
  const { lang, data } = req.body;
  if (!['nl', 'en'].includes(lang)) return res.status(400).json({ error: 'Invalid lang' });
  if (typeof data !== 'object' || data === null) return res.status(400).json({ error: 'Invalid data' });
  writeContent(lang, data);
  res.json({ ok: true });
});

// ── Hero background API ───────────────────────────────────────────────────────
const ALLOWED_HERO_PAGES = ['home', 'about', 'advertising', 'partners', 'contact'];

function readHeroBgs() {
  const file = path.join(CONTENT_DIR, 'hero-bgs.json');
  if (!fs.existsSync(file)) return {};
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return {}; }
}

function writeHeroBgs(data) {
  if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });
  fs.writeFileSync(path.join(CONTENT_DIR, 'hero-bgs.json'), JSON.stringify(data, null, 2), 'utf8');
}

// Public: get all hero backgrounds
app.get('/api/hero-bg', (req, res) => {
  res.json(readHeroBgs());
});

// Admin: save hero background for a page
app.post('/api/hero-bg', requireAdmin, (req, res) => {
  const { page, image } = req.body;
  if (!ALLOWED_HERO_PAGES.includes(page)) return res.status(400).json({ error: 'Invalid page' });
  if (typeof image !== 'string' || !/^data:image\//i.test(image))
    return res.status(400).json({ error: 'Invalid image' });
  const bgs = readHeroBgs();
  const prev = bgs[page];
  bgs[page] = {
    img:  image,
    zoom: (prev && typeof prev === 'object' && prev.zoom != null) ? prev.zoom : 86,
    posX: (prev && typeof prev === 'object' && prev.posX != null) ? prev.posX : 100,
    posY: (prev && typeof prev === 'object' && prev.posY != null) ? prev.posY : 50,
  };
  writeHeroBgs(bgs);
  res.json({ ok: true });
});

// Admin: update position/zoom for existing hero background
app.patch('/api/hero-bg', requireAdmin, (req, res) => {
  const { page, zoom, posX, posY } = req.body;
  if (!ALLOWED_HERO_PAGES.includes(page)) return res.status(400).json({ error: 'Invalid page' });
  const bgs = readHeroBgs();
  const current = bgs[page];
  if (!current) return res.status(404).json({ error: 'No image set' });
  const img = typeof current === 'string' ? current : current.img;
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  bgs[page] = {
    img,
    zoom: typeof zoom === 'number' ? clamp(zoom, 20, 200) : 86,
    posX: typeof posX === 'number' ? clamp(posX, 0, 100)  : 100,
    posY: typeof posY === 'number' ? clamp(posY, 0, 100)  : 50,
  };
  writeHeroBgs(bgs);
  res.json({ ok: true });
});

// Admin: remove hero background for a page
app.delete('/api/hero-bg', requireAdmin, (req, res) => {
  const { page } = req.body;
  if (!ALLOWED_HERO_PAGES.includes(page)) return res.status(400).json({ error: 'Invalid page' });
  const bgs = readHeroBgs();
  delete bgs[page];
  writeHeroBgs(bgs);
  res.json({ ok: true });
});

// ── Section slot image API ────────────────────────────────────────────────────
const ALLOWED_SLOT_IDS = ['net-taxi', 'cta-image'];

function readSlotImages() {
  const file = path.join(CONTENT_DIR, 'slot-images.json');
  if (!fs.existsSync(file)) return {};
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return {}; }
}

function writeSlotImages(data) {
  if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });
  fs.writeFileSync(path.join(CONTENT_DIR, 'slot-images.json'), JSON.stringify(data, null, 2), 'utf8');
}

// Public: get all slot images
app.get('/api/slot-image', (req, res) => {
  res.json(readSlotImages());
});

// Admin: save a slot image
app.post('/api/slot-image', requireAdmin, (req, res) => {
  const { slotId, image } = req.body;
  if (!ALLOWED_SLOT_IDS.includes(slotId)) return res.status(400).json({ error: 'Invalid slotId' });
  if (typeof image !== 'string' || !/^data:image\//i.test(image))
    return res.status(400).json({ error: 'Invalid image' });
  const imgs = readSlotImages();
  imgs[slotId] = image;
  writeSlotImages(imgs);
  res.json({ ok: true });
});

// Admin: remove a slot image
app.delete('/api/slot-image', requireAdmin, (req, res) => {
  const { slotId } = req.body;
  if (!ALLOWED_SLOT_IDS.includes(slotId)) return res.status(400).json({ error: 'Invalid slotId' });
  const imgs = readSlotImages();
  delete imgs[slotId];
  writeSlotImages(imgs);
  res.json({ ok: true });
});

// ── Screen zones API ─────────────────────────────────────────────────────────
// Coordinates are fractions of the DISPLAYED BACKGROUND IMAGE (same as original Q values)
const DEFAULT_ZONES = {
  tl: [0.6442, 0.3273], tr: [0.7632, 0.2926],
  br: [0.7608, 0.4410], bl: [0.6411, 0.4542],
  bannerFrac: 0.24,
};

function readScreenZones() {
  const file = path.join(CONTENT_DIR, 'screen-zones.json');
  if (!fs.existsSync(file)) return DEFAULT_ZONES;
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return DEFAULT_ZONES; }
}

function writeScreenZones(data) {
  if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });
  fs.writeFileSync(path.join(CONTENT_DIR, 'screen-zones.json'), JSON.stringify(data, null, 2), 'utf8');
}

app.get('/api/screen-zones', (req, res) => {
  res.json(readScreenZones());
});

app.post('/api/screen-zones', requireAdmin, (req, res) => {
  try {
    const { tl, tr, br, bl, bannerFrac } = req.body;
    if (!Array.isArray(tl) || !Array.isArray(tr) || !Array.isArray(br) || !Array.isArray(bl))
      return res.status(400).json({ error: 'Invalid zones — expected arrays' });
    const cl = v => Math.max(0, Math.min(1, parseFloat(v) || 0));
    const pt = p => [cl(p[0]), cl(p[1])];
    writeScreenZones({
      tl: pt(tl), tr: pt(tr), br: pt(br), bl: pt(bl),
      bannerFrac: Math.max(0.05, Math.min(0.6, parseFloat(bannerFrac) || 0.24)),
    });
    res.json({ ok: true });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// ── Brand logos API ───────────────────────────────────────────────────────────
function readBrandLogos() {
  const file = path.join(CONTENT_DIR, 'brand-logos.json');
  const defaults = { logos: [], size: 36, color: 'grey' };
  if (!fs.existsSync(file)) return defaults;
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (Array.isArray(data)) return { ...defaults, logos: data }; // legacy format
    return {
      logos: Array.isArray(data.logos) ? data.logos : [],
      size:  (typeof data.size === 'number' && data.size >= 16 && data.size <= 120) ? data.size : 36,
      color: ['grey', 'original', 'white'].includes(data.color) ? data.color : 'grey',
      gap:   (typeof data.gap  === 'number' && data.gap  >= 0  && data.gap  <= 100) ? data.gap  : 10,
    };
  } catch { return defaults; }
}

function writeBrandLogos(data) {
  if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });
  fs.writeFileSync(path.join(CONTENT_DIR, 'brand-logos.json'), JSON.stringify(data, null, 2), 'utf8');
}

// Public: get logos + display settings
app.get('/api/brand-logos', (req, res) => {
  res.json(readBrandLogos());
});

// Admin: save logos + display settings
app.post('/api/brand-logos', requireAdmin, (req, res) => {
  const { logos, size, color, gap } = req.body;
  if (!Array.isArray(logos)) return res.status(400).json({ error: 'Invalid' });
  const clean = logos.filter(l =>
    typeof l === 'string' &&
    /^data:image\/(svg\+xml|png)(;[^,]+)?,/.test(l)
  );
  const safeSize  = (typeof size  === 'number' && size  >= 16 && size  <= 120) ? size  : 36;
  const safeColor = ['grey', 'original', 'white'].includes(color) ? color : 'grey';
  const safeGap   = (typeof gap   === 'number' && gap   >= 0  && gap   <= 100) ? gap   : 10;
  writeBrandLogos({ logos: clean, size: safeSize, color: safeColor, gap: safeGap });
  res.json({ ok: true });
});

// ── Typography API ─────────────────────────────────────────────────────────────
const TYPO_SELECTORS = {
  'nav-link':           '.mainnav a',
  'nav-btn':            'header .btn',
  'sec-h':              '.sec-h',
  'reach-text':         '.reach-text',
  'stat-num':           '.stat .num',
  'stat-lab':           '.stat .lab',
  'page-hero-h1':       '.page-hero h1',
  'page-hero-p':        '.page-hero p',
  'page-hero-crumbs':   '.page-hero .crumbs',
  'kicker':             '.kicker',
  'sec-head-h2':        '.sec-head h2',
  'sec-head-p':         '.sec-head p',
  'sec-highlight':      '.sec-h .y, .sec-head h2 .y, .page-hero h1 .y',
  'card-h3':            '.card h3',
  'card-p':             '.card p',
  'card-rule':          '.card .rule',
  'brands-label':       '.brands-label',
  'split-h2':           '.split-body h2, .net-left h2, .cta-left h2',
  'split-p':            '.split-body p, .net-left p',
  'ticks-li':           '.ticks li',
  'step-h3':            '.step h3',
  'step-p':             '.step p',
  'cta-bg':             '.cta',
  'btn-primary-bg':     '.btn-yellow',
  'foot-h4':            '.foot-col h4',
  'foot-links':         '.foot-col a, .foot-col li, .foot-line',
  'foot-contact':       '.foot-contact .row',
  'foot-contact-icon':  '.foot-contact .row svg',
  'foot-brand':         '.foot-brand .nm',
  'foot-menu-hover':    '.foot-menu a:hover',
  'social-hover-bg':    '.socials a:hover',
  // Buttons
  'btn-size':           '.btn',
  'btn-primary-text':   '.btn-yellow',
  'btn-dark-bg':        '.btn-dark',
  'btn-dark-text':      '.btn-dark',
  'btn-outline-text':   '.btn-outline',
  'btn-outline-border': '.btn-outline',
  'btn-outline-dk-text':'.btn-outline-dark',
  'btn-outline-dk-brd': '.btn-outline-dark',
};

// Keys where the stored colour applies to 'background' instead of 'color'
const TYPO_BG_KEYS = new Set(['card-rule', 'cta-bg', 'btn-primary-bg', 'social-hover-bg', 'btn-dark-bg']);
// Keys where the stored colour applies to 'border-color' instead of 'color'
const TYPO_BORDER_KEYS = new Set(['btn-outline-border', 'btn-outline-dk-brd']);

const TYPO_FONT_MAP = {
  'sans':   '"Helvetica Neue", Helvetica, Arial, sans-serif',
  'serif':  'Georgia, "Times New Roman", Times, serif',
  'mono':   '"Courier New", Courier, monospace',
  'caveat': "'Caveat', cursive",
  'anton':  "'Anton', sans-serif",
  'caslon': "'Libre Caslon Display', serif",
};

function readTypography() {
  const file = path.join(CONTENT_DIR, 'typography.json');
  if (!fs.existsSync(file)) return {};
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return {}; }
}

function writeTypography(data) {
  if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });
  fs.writeFileSync(path.join(CONTENT_DIR, 'typography.json'), JSON.stringify(data, null, 2), 'utf8');
}

function generateTypoCss(typo) {
  let css = '/* Typography overrides — Taxi Media CMS */\n';
  for (const [key, val] of Object.entries(typo)) {
    const sel = TYPO_SELECTORS[key];
    if (!sel || typeof val !== 'object') continue;
    const rules = [];
    if (val.size && /^\d+(\.\d+)?$/.test(String(val.size))) rules.push(`font-size: ${val.size}px`);
    if (val.font && TYPO_FONT_MAP[val.font]) rules.push(`font-family: ${TYPO_FONT_MAP[val.font]}`);
    if (val.color && /^#[0-9a-fA-F]{3,8}$/.test(val.color)) {
      const prop = TYPO_BG_KEYS.has(key) ? 'background'
                 : TYPO_BORDER_KEYS.has(key) ? 'border-color'
                 : 'color';
      rules.push(`${prop}: ${val.color}`);
    }
    if (rules.length) css += `${sel} { ${rules.join('; ')}; }\n`;
  }
  return css;
}

// Public: get typography settings as JSON
app.get('/api/typography', (req, res) => {
  res.json(readTypography());
});

// Public: serve generated CSS overrides
app.get('/typography-overrides.css', (req, res) => {
  res.type('text/css').send(generateTypoCss(readTypography()));
});

// Admin: save typography settings
app.post('/api/typography', requireAdmin, (req, res) => {
  const { data } = req.body;
  if (typeof data !== 'object' || data === null) return res.status(400).json({ error: 'Invalid data' });
  // Validate keys and values
  const clean = {};
  for (const [key, val] of Object.entries(data)) {
    if (!TYPO_SELECTORS[key] || typeof val !== 'object') continue;
    clean[key] = {};
    if (val.size && /^\d+(\.\d+)?$/.test(String(val.size))) clean[key].size = String(val.size);
    if (val.font && TYPO_FONT_MAP[val.font]) clean[key].font = val.font;
    if (val.color && /^#[0-9a-fA-F]{3,8}$/.test(val.color)) clean[key].color = val.color;
  }
  writeTypography(clean);
  res.json({ ok: true });
});


// ── Hero screen media (videos + banner images for the LCD overlay) ───────────
const ASSETS_DIR = path.join(ROOT, 'assets');
const VALID_VIDEO_SLOTS  = [1, 2, 3, 4, 5];
const VALID_BANNER_SLOTS = [2, 3, 4, 5];

function heroMediaPath(slot, type) {
  if (slot === 'default') {
    return type === 'video'
      ? path.join(ASSETS_DIR, 'default.mp4')
      : path.join(ASSETS_DIR, 'default-banner.png');
  }
  const n = parseInt(slot, 10);
  if (type === 'video'  && VALID_VIDEO_SLOTS.includes(n))  return path.join(ASSETS_DIR, `${n}.mp4`);
  if (type === 'banner' && VALID_BANNER_SLOTS.includes(n)) return path.join(ASSETS_DIR, `${n}.png`);
  return null;
}

app.get('/api/hero-media', (req, res) => {
  const videos  = {};
  const banners = {};
  for (const s of VALID_VIDEO_SLOTS)  videos[s]  = fs.existsSync(path.join(ASSETS_DIR, `${s}.mp4`));
  for (const s of VALID_BANNER_SLOTS) banners[s] = fs.existsSync(path.join(ASSETS_DIR, `${s}.png`));
  res.json({
    videos, banners,
    defaults: {
      video:  fs.existsSync(path.join(ASSETS_DIR, 'default.mp4')),
      banner: fs.existsSync(path.join(ASSETS_DIR, 'default-banner.png')),
    }
  });
});

app.post('/api/hero-media', requireAdmin, (req, res) => {
  try {
    const { slot, type, data } = req.body;
    if (!data || typeof data !== 'string') return res.status(400).json({ error: 'Missing data' });
    const filePath = heroMediaPath(slot, type);
    if (!filePath) return res.status(400).json({ error: 'Invalid slot or type' });
    const base64 = data.replace(/^data:[^;]+;base64,/, '');
    const buffer = Buffer.from(base64, 'base64');
    if (!fs.existsSync(ASSETS_DIR)) fs.mkdirSync(ASSETS_DIR, { recursive: true });
    fs.writeFileSync(filePath, buffer);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/hero-media', requireAdmin, (req, res) => {
  try {
    const { slot, type } = req.body;
    const filePath = heroMediaPath(slot, type);
    if (!filePath) return res.status(400).json({ error: 'Invalid slot or type' });
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── Admin panel (protected static files) ─────────────────────────────────────
// Login page is public; dashboard requires auth
app.use('/admin', (req, res, next) => {
  const publicPaths = ['/', '/index.html'];
  if (publicPaths.includes(req.path)) return next();
  if (!(req.session && req.session.admin)) return res.redirect('/admin/');
  next();
});
app.use('/admin', express.static(path.join(ROOT, 'admin')));


// ── Design tokens (colour palette overrides) ─────────────────────────────────
const DESIGN_TOKENS_FILE = path.join(CONTENT_DIR, 'design-tokens.json');

function readDesignTokens() {
  if (!fs.existsSync(DESIGN_TOKENS_FILE)) return {};
  try { return JSON.parse(fs.readFileSync(DESIGN_TOKENS_FILE, 'utf8')); } catch { return {}; }
}

// Public: serve as CSS custom-property overrides
app.get('/design-tokens.css', (req, res) => {
  const tokens = readDesignTokens();
  const entries = Object.entries(tokens).filter(([k, v]) =>
    /^--[a-z][a-z0-9-]*$/.test(k) && /^#[0-9a-fA-F]{3,8}$/.test(v)
  );
  let css = entries.length ? `:root{\n${entries.map(([k,v])=>`  ${k}:${v};`).join('\n')}\n}\n` : '';
  // Cascade primary colour to non-hero sections automatically
  const primary = tokens['--color-primary'];
  if (primary) css += `.brands,.reach,.network,.cta,footer,.section{--yellow:${primary};}\n`;
  res.type('text/css').set('Cache-Control','no-cache').send(css);
});

// Admin: save token overrides
app.post('/api/admin/design-tokens', requireAdmin, (req, res) => {
  const { tokens } = req.body;
  if (!tokens || typeof tokens !== 'object') return res.status(400).json({ error: 'Invalid' });
  const clean = {};
  for (const [k, v] of Object.entries(tokens)) {
    if (/^--[a-z][a-z0-9-]*$/.test(k) && /^#[0-9a-fA-F]{3,8}$/.test(v)) clean[k] = v;
  }
  if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });
  fs.writeFileSync(DESIGN_TOKENS_FILE, JSON.stringify(clean, null, 2));
  res.json({ ok: true });
});

// Admin: read current token overrides
app.get('/api/admin/design-tokens', requireAdmin, (req, res) => res.json(readDesignTokens()));

// ── Logo settings (upload + size) ────────────────────────────────────────────
const LOGO_SETTINGS_FILE = path.join(CONTENT_DIR, 'logo-settings.json');
const LOGO_DIR = path.join(ROOT, 'public', 'logos');

function readLogoSettings() {
  if (!fs.existsSync(LOGO_SETTINGS_FILE)) return { src: null, width: 130, height: 36 };
  try { return JSON.parse(fs.readFileSync(LOGO_SETTINGS_FILE, 'utf8')); }
  catch { return { src: null, width: 130, height: 36 }; }
}
function writeLogoSettings(data) {
  if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });
  fs.writeFileSync(LOGO_SETTINGS_FILE, JSON.stringify(data, null, 2));
}

app.use('/logos', express.static(LOGO_DIR));

app.get('/api/logo-settings', (req, res) => res.json(readLogoSettings()));

app.post('/api/admin/logo-upload', requireAdmin, (req, res) => {
  try {
    const { data } = req.body;
    if (!data || !/^data:image\//i.test(data)) return res.status(400).json({ error: 'Invalid image' });
    const m = data.match(/^data:image\/([^;]+)/i);
    const ext = m ? m[1].replace('svg+xml','svg').replace('jpeg','jpg') : 'png';
    if (!fs.existsSync(LOGO_DIR)) fs.mkdirSync(LOGO_DIR, { recursive: true });
    const filename = `site-logo.${ext}`;
    const b64 = data.replace(/^data:[^;]+;base64,/, '');
    fs.writeFileSync(path.join(LOGO_DIR, filename), Buffer.from(b64, 'base64'));
    const url = `/logos/${filename}`;
    const s = readLogoSettings(); s.src = url; writeLogoSettings(s);
    res.json({ url });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/admin/logo-upload', requireAdmin, (req, res) => {
  try {
    const s = readLogoSettings();
    if (s.src) {
      const f = path.join(ROOT, s.src.startsWith('/') ? s.src.slice(1) : s.src);
      if (fs.existsSync(f)) fs.unlinkSync(f);
      s.src = null; writeLogoSettings(s);
    }
    res.json({ ok: true });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/admin/logo-settings', requireAdmin, (req, res) => {
  try {
    const s = readLogoSettings();
    if (req.body.width  !== undefined) s.width  = Math.max(40,  Math.min(400, parseInt(req.body.width)  || 130));
    if (req.body.height !== undefined) s.height = Math.max(16,  Math.min(100, parseInt(req.body.height) || 36));
    writeLogoSettings(s);
    res.json({ ok: true });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// ── Brand assets (logos, identity files) ─────────────────────────────────────
app.use('/brand', express.static(path.join(ROOT, 'brand')));

// ── Website static files ──────────────────────────────────────────────────────
app.use(express.static(ROOT, { index: 'index.html' }));

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log('');
  console.log('  ╔══════════════════════════════════════════╗');
  console.log('  ║       TAXI MEDIA — CMS Server            ║');
  console.log('  ╠══════════════════════════════════════════╣');
  console.log(`  ║  Website :  http://localhost:${PORT}         ║`);
  console.log(`  ║  Admin   :  http://localhost:${PORT}/admin   ║`);
  console.log('  ║  Login   :  admin / taximedia2024        ║');
  console.log('  ╚══════════════════════════════════════════╝');
  console.log('');
});
