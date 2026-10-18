import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const menu = JSON.parse(readFileSync(join(root, 'src/menu.json'), 'utf8'));
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const order = 'https://www.orchardmarketcafe.com/order';
const maps = 'https://maps.google.com/?daddr=39.3988381,-76.5684423';
const inquiry = 'https://www.orchardmarketcafe.com/Contact-Us';
const arrow = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
// Use the same natural-proportion food photos on phones and desktop.
const active = (page, path) => page === path ? ' aria-current="page"' : '';
const logo = '<span class="wordmark">Orchard<span>Market &amp; Cafe</span></span>';
const titles = { home: 'Orchard Market & Cafe | Persian cuisine in Towson', menu: 'Menu | Orchard Market & Cafe', visit: 'Visit | Orchard Market & Cafe' };
const descriptions = { home: 'Persian and Middle Eastern cuisine at Orchard Market & Cafe in Towson. Explore the menu, order online or plan your visit.', menu: 'Explore the complete Orchard Market & Cafe menu, from lunch pita sandwiches to kebobs, khoreshes and Persian fusion dishes.', visit: 'Find Orchard Market & Cafe at 8815 Orchard Tree Ln, Towson, MD. Dining and carryout hours, directions, phone and inquiries.' };
function shell(page, body) {
return `<!doctype html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow"><meta name="description" content="${escape(descriptions[page])}">
<meta name="theme-color" content="#141612"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${escape(titles[page])}</title>
<meta property="og:site_name" content="Orchard Market &amp; Cafe"><meta property="og:type" content="website"><meta property="og:title" content="${escape(titles[page])}"><meta property="og:description" content="${escape(descriptions[page])}"><meta name="twitter:card" content="summary">
${page === 'home' ? '<link rel="preload" as="image" href="/images/lamb-kebob.webp">' : ''}</head><body class="${page}-page">
<a class="skip-link" href="#main">Skip to content</a><header class="site-header">
<button class="menu-toggle" aria-label="Open navigation" aria-haspopup="dialog" aria-controls="navigation"><svg viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M2 5h24M2 14h24M2 23h24"/></svg></button>
<a class="header-brand" href="/" aria-label="Orchard Market and Cafe home"${active(page,'home')}>${page === 'home' ? '<img src="/images/orchard-mark.jpg" width="30" height="43" alt="Orchard Market &amp; Cafe logo">' : logo}</a>
<a class="outlined" href="/visit/"${active(page,'visit')}>Visit us</a></header>
<dialog id="navigation" aria-label="Main navigation"><button class="nav-close" aria-label="Close navigation"><svg viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="m5 5 18 18M23 5 5 23"/></svg></button>
<nav class="nav-links" aria-label="Main"><a href="/"${active(page,'home')}>Home</a><a href="${order}">Order online ${arrow}</a><a href="/menu/"${active(page,'menu')}>Menu</a><a href="/visit/"${active(page,'visit')}>Visit</a></nav>
<div class="nav-details"><a href="${maps}">8815 Orchard Tree Ln<br>Towson, MD 21286</a><a href="tel:+14103397700">(410) 339-7700</a><span>Tuesday–Sunday · 11am–9pm</span></div></dialog>
${body}<footer class="action-bar" aria-label="Quick actions"><a href="${order}">Order online ${arrow}</a><span aria-hidden="true"></span><a href="/menu/"${active(page,'menu')}>Menu ${arrow}</a></footer>
<script type="module" src="/src/main.js"></script></body></html>`;
}
const home = `<main id="main" class="home-stage" tabindex="-1"><div class="hero-images"><img class="hero-image is-current" src="/images/lamb-kebob.webp" width="2048" height="1152" alt="Lamb kebob with grilled vegetables, basmati rice and dipping sauces" fetchpriority="high"><img class="hero-image" src="/images/chicken-panir-sabzi.webp" width="2048" height="1152" alt="Chicken Panir Sabzi in feta and herb sauce, served with basmati rice" loading="lazy"></div><div class="hero-shade"></div>
<div class="home-intro"><h1>${logo}</h1><p>Persian &amp; Middle Eastern cuisine.<br>A place at the table in Towson.</p><a class="home-address" href="${maps}">8815 Orchard Tree Ln, Towson, MD 21286</a></div>
<div class="home-bottom"><p>Tuesday–Sunday · 11am–9pm</p><button class="motion-toggle" hidden aria-label="Pause slideshow"><svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M5 3h3v14H5zm7 0h3v14h-3z"/></svg><span>Pause photos</span></button></div></main>`;
const labels = {'LUNCH PITA POCKET SANDWICHES':'Pita pocket sandwiches','LUNCH PORTION ENTREES':'Lunch entrées','WARM APPETIZERS':'Warm appetizers','CHILLED APPETIZERS':'Chilled appetizers','CLASSIC KHORESHES & STEWS':'Classic khoreshes & stews','PERSIAN FUSION ENTREES':'Persian fusion entrées','CLASSIC SHISH KEBOBS':'Classic shish kebobs','FOR OUR VEGETARIANS':'Vegetarian dishes','PERSIAN FUSION SEAFOOD':'Persian fusion seafood','FOR OUR VEGAN VEGETARIANS':'Salads & sides','SPECIALS':'Specials'};
function panel(mode) {
const items = menu.items.filter(i => i.category.startsWith('LUNCH') === (mode === 'lunch'));
return `<section class="menu-panel" id="panel-${mode}" aria-labelledby="tab-${mode}"><h2 class="sr-only">${mode === 'lunch' ? 'Lunch' : 'Dinner & specials'}</h2>${[...new Set(items.map(i=>i.category))].map(category => `<section class="menu-category"><h3>${labels[category]}</h3><div class="menu-grid">${items.filter(i=>i.category===category).map(i=>`<article class="menu-item" data-menu-key="${i.item_key}" data-source-category="${escape(category)}"><div class="item-title"><h4>${escape(i.name)}</h4><span class="item-price" data-menu-price>${escape(i.price)}</span></div><p>${escape(i.description)}</p></article>`).join('')}</div></section>`).join('')}</section>`;
}
const menuBody = `<main id="main" class="menu-main" tabindex="-1"><h1 class="sr-only">The Orchard menu</h1><div class="menu-tabs" aria-label="Menu selection"><a id="tab-lunch" href="#lunch" aria-controls="panel-lunch">Lunch</a><a id="tab-dinner" href="#dinner" aria-controls="panel-dinner">Dinner &amp; specials</a></div>${panel('lunch')}${panel('dinner')}<p class="menu-note">Menu prices are as published. For current availability and options, <a href="${order}">order online ${arrow}</a>. Please ask the restaurant about ingredients and dietary needs.</p></main>`;
const visit = `<main id="main" class="visit-main" tabindex="-1"><h1 class="section-heading">Visit Orchard</h1><p class="visit-intro">Persian and Middle Eastern cuisine on Orchard Tree Lane in Towson. Join us for lunch or dinner, or take your favorites home.</p><div class="visit-grid"><div class="visit-details"><section><h2>Find us</h2><address>8815 Orchard Tree Ln<br>Towson, MD 21286</address><a class="text-link" href="${maps}">Get directions ${arrow}</a></section><section><h2>Hours</h2><dl class="hours"><div><dt>Dining</dt><dd>Tuesday–Sunday<br>11am–9pm</dd></div><div><dt>Carryout</dt><dd>Tuesday–Sunday<br>11am–8:30pm</dd></div><div><dt>Monday</dt><dd>Closed</dd></div></dl></section><section><h2>Get in touch</h2><a class="phone-link" href="tel:+14103397700">(410) 339-7700</a><a class="text-link" href="${inquiry}">Send an inquiry ${arrow}</a></section></div><figure class="storefront"><img src="/images/orchard-storefront.webp" width="960" height="720" alt="Orchard Market &amp; Cafe storefront with its yellow awning and restaurant signs"><figcaption>Orchard Market &amp; Cafe, Towson</figcaption></figure></div></main>`;
for (const [page, body, file] of [['home',home,'index.html'],['menu',menuBody,'menu/index.html'],['visit',visit,'visit/index.html']]) { mkdirSync(dirname(join(root,file)),{recursive:true});writeFileSync(join(root,file),shell(page,body)); }
console.log(`Generated Home, Menu (${menu.items.length} listings), Visit.`);
