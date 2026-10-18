import './styles.css';
const navigation = document.querySelector('#navigation');
const opener = document.querySelector('.menu-toggle');
opener.setAttribute('aria-expanded', 'false');
opener.addEventListener('click', () => {
  navigation.showModal();
  opener.setAttribute('aria-expanded', 'true');
  document.documentElement.classList.add('nav-open');
  navigation.querySelector('.nav-close').focus();
});
navigation.querySelector('.nav-close').addEventListener('click', () => navigation.close());
navigation.addEventListener('close', () => {
  opener.setAttribute('aria-expanded', 'false');
  document.documentElement.classList.remove('nav-open');
  opener.focus();
});
// Keep Tab cycling through the navigation; native dialog supplies Escape and an inert background.
navigation.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const controls = [...navigation.querySelectorAll('button, a[href]')];
  const first = controls[0], last = controls.at(-1);
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault(); last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault(); first.focus();
  }
});
const tabs = [...document.querySelectorAll('.menu-tabs a')];
if (tabs.length) {
  document.querySelector('.menu-tabs').setAttribute('role', 'tablist');
  tabs.forEach(tab => tab.setAttribute('role', 'tab'));
  const choose = () => {
    const mode = location.hash === '#lunch' ? 'lunch' : 'dinner';
    tabs.forEach(tab => {
      const selected = tab.id === `tab-${mode}`;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      panel.hidden = !selected;
      panel.setAttribute('role', 'tabpanel');
      panel.tabIndex = 0;
    });
  };
  tabs.forEach(tab => {
    tab.addEventListener('click', event => {
      event.preventDefault(); history.replaceState(null, '', tab.getAttribute('href')); choose();
    });
    tab.addEventListener('keydown', event => {
      if (event.key === ' ') {
        event.preventDefault(); tab.click(); return;
      }
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? tabs[0] : event.key === 'End' ? tabs[1] : tabs.find(t => t !== tab);
      next.click(); next.focus();
    });
  });
  addEventListener('hashchange', choose); choose();
}
const photos = [...document.querySelectorAll('.hero-image')];
const motion = document.querySelector('.motion-toggle');
if (photos.length > 1 && motion) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const tall = matchMedia('(max-aspect-ratio: 4/5)');
  const photoLayer = photos[0].parentElement;
  let paused = false, timer, readyFrame, current = 0, slides = [];
  const showCurrent = () => {
    photos.forEach(photo => {
      const selected = photo === slides[current];
      photo.classList.toggle('is-current', selected);
      photo.setAttribute('aria-hidden', String(!selected));
    });
  };
  // Only photos displayed at this viewport shape take part; tall screens add the portrait photo first.
  const arrange = () => {
    // A breakpoint can hide the outgoing portrait immediately. Snap the replacement
    // into place before restoring normal slideshow fades, including while paused.
    cancelAnimationFrame(readyFrame);
    photoLayer.classList.remove('is-ready');
    slides = photos.filter(photo => getComputedStyle(photo).display !== 'none');
    current = 0;
    showCurrent();
    // Commit the no-transition frame before fades can be enabled again.
    getComputedStyle(slides[current]).opacity;
    readyFrame = requestAnimationFrame(() => {
      readyFrame = requestAnimationFrame(() => photoLayer.classList.add('is-ready'));
    });
  };
  const synchronize = () => {
    clearInterval(timer);
    motion.hidden = reduced.matches || slides.length < 2;
    const stopped = paused || reduced.matches;
    motion.setAttribute('aria-label', stopped ? 'Play slideshow' : 'Pause slideshow');
    motion.querySelector('span').textContent = stopped ? 'Play photos' : 'Pause photos';
    motion.querySelector('svg').innerHTML = stopped ? '<path d="m6 3 11 7-11 7z"/>' : '<path d="M5 3h3v14H5zm7 0h3v14h-3z"/>';
    if (!stopped && slides.length > 1 && !document.hidden && !navigation.open) timer = setInterval(() => {
      current = (current + 1) % slides.length; showCurrent();
    }, 8000);
  };
  motion.addEventListener('click', () => { paused = !paused; synchronize(); });
  // A system preference change must not erase a visitor's explicit pause.
  reduced.addEventListener('change', synchronize);
  tall.addEventListener('change', () => { arrange(); synchronize(); });
  document.addEventListener('visibilitychange', synchronize);
  new MutationObserver(synchronize).observe(navigation, { attributes: true, attributeFilter: ['open'] });
  arrange();
  synchronize();
}
