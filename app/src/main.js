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
// Native dialog supplies Escape, inert background and focus containment.
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
  let paused = reduced.matches, timer, current = 0;
  const synchronize = () => {
    clearInterval(timer);
    motion.hidden = reduced.matches;
    const stopped = paused || reduced.matches;
    motion.setAttribute('aria-label', stopped ? 'Play slideshow' : 'Pause slideshow');
    motion.querySelector('span').textContent = stopped ? 'Play photos' : 'Pause photos';
    motion.querySelector('svg').innerHTML = stopped ? '<path d="m6 3 11 7-11 7z"/>' : '<path d="M5 3h3v14H5zm7 0h3v14h-3z"/>';
    if (!stopped && !document.hidden && !navigation.open) timer = setInterval(() => {
      photos[current].classList.remove('is-current'); current = (current + 1) % photos.length; photos[current].classList.add('is-current');
    }, 8000);
  };
  motion.addEventListener('click', () => { paused = !paused; synchronize(); });
  reduced.addEventListener('change', () => { paused = reduced.matches; synchronize(); });
  document.addEventListener('visibilitychange', synchronize);
  new MutationObserver(synchronize).observe(navigation, { attributes: true, attributeFilter: ['open'] });
  synchronize();
}
