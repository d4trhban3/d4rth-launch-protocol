// The BTC logo on the Galaxy tab. Click the tab from any other page and the logo peels off like a
// sticker, grows to 2x the size of the BTC disc on the map, and the galaxy page drops it into place.
(function () {
  var link = [].slice.call(document.querySelectorAll('nav a')).filter(function (a) { return a.textContent.trim() === 'Galaxy'; })[0];
  if (!link) return;
  var style = document.createElement('style');
  style.textContent = '.nav-btc{width:22px;height:22px;border-radius:50%;object-fit:cover;margin-right:8px;flex:none;' +
    'border:1px solid rgba(255,255,255,.85);box-sizing:border-box;vertical-align:middle;display:inline-block}' +
    'nav a .nav-btc{position:relative;top:-1px}';
  document.head.appendChild(style);
  var src = new URL('art/btc.webp', link.href).href;
  var logo = document.createElement('img');
  logo.className = 'nav-btc'; logo.alt = ''; logo.src = src;
  link.insertBefore(logo, link.firstChild);

  if (/\/galaxy\/?(index\.html)?$/.test(location.pathname)) return;      // already on the galaxy
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clone = null;
  window.addEventListener('pageshow', function (e) {                       // back button: put the sticker back
    if (clone) { clone.remove(); clone = null; }
    [].slice.call(document.body.children).forEach(function (n) { if (n.style && n.style.zIndex === '9998') n.remove(); });
    logo.style.visibility = '';
  });

  // Where the BTC disc will sit on the galaxy page, and how big it is there (estimated: the galaxy page
  // measures the real thing and eases to it).
  function estimate() {
    var W = innerWidth, H = innerHeight;
    var mobile = W <= 760;
    var inspector = mobile ? 0 : W <= 1100 ? 260 : W >= 1600 ? 345 : 300;
    var top = mobile ? 182 : 127, foot = mobile ? 86 : 37;                // phones: header + chapter bar, then footer + info bar
    var sw = W - inspector, sh = Math.max(200, H - top - foot);
    return { x: sw / 2, y: top + sh / 2, d: 0.1122 * Math.min(sw, sh) };  // measured: the disc is 11.2% of the shorter side
  }

  link.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || reduce || clone) return;
    if (!logo.getBoundingClientRect().width) return;
    e.preventDefault();
    var r = logo.getBoundingClientRect();
    var est = estimate(), size = est.d * 3;                                // 3x its galaxy size
    clone = document.createElement('img');
    clone.src = src; clone.alt = '';
    clone.style.cssText = 'position:fixed;z-index:9999;left:' + r.left + 'px;top:' + r.top + 'px;width:' + r.width + 'px;height:' + r.height +
      'px;border-radius:50%;object-fit:cover;pointer-events:none;border:1px solid rgba(255,255,255,.9);box-sizing:border-box;' +
      'will-change:transform,left,top,width,height;box-shadow:0 0 0 rgba(0,0,0,0)';
    // the site behind it fades to the galaxy's own dark as the sticker flies
    var veil = document.createElement('div');
    veil.style.cssText = 'position:fixed;inset:0;z-index:9998;background:#10100e;opacity:0;pointer-events:none;transition:opacity .8s ease .1s';
    document.body.appendChild(veil);
    document.body.appendChild(clone);
    requestAnimationFrame(function () { requestAnimationFrame(function () { veil.style.opacity = '1'; }); });
    logo.style.visibility = 'hidden';                                      // it has come off the tab
    var end = { left: est.x - size / 2, top: est.y - size / 2, w: size };
    var anim = clone.animate([
      { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px', transform: 'rotate(0deg)', boxShadow: '0 0 0 rgba(0,0,0,0)', offset: 0 },
      { left: (r.left - 6) + 'px', top: (r.top - 12) + 'px', width: (r.width * 1.25) + 'px', height: (r.height * 1.25) + 'px', transform: 'rotate(-12deg)', boxShadow: '0 8px 18px rgba(0,0,0,.5)', offset: 0.18, easing: 'cubic-bezier(.4,.06,.2,1)' },
      { left: end.left + 'px', top: end.top + 'px', width: end.w + 'px', height: end.w + 'px', transform: 'rotate(0deg)', boxShadow: '0 26px 54px rgba(0,0,0,.55)', offset: 1 }
    ], { duration: 950, fill: 'forwards' });
    var went = false;
    var go = function () {
      if (went) return; went = true;
      try { sessionStorage.setItem('d4sticker', JSON.stringify({ x: est.x, y: est.y, size: size, t: Date.now() })); } catch (err) {}
      location.href = link.href;
    };
    anim.finished.then(go, go);
    setTimeout(go, 1700);                                                  // never get stuck on this page
  });
})();
