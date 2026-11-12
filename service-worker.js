// Mantenha APP_VERSION igual ao APP_VERSION do index.html a cada versão publicada.
const APP_VERSION = '1.16.0';
const CACHE_PREFIX = 'diario-tecnico-pwa-';
const CACHE_NAME = CACHE_PREFIX + APP_VERSION;
const NAV_TIMEOUT_MS = 3000;

// Essenciais: se falharem, o modo offline não é instalado.
const CORE = ['./', './index.html'];

// Opcionais: um arquivo ausente não impede a instalação.
const CLUBS = ['ars','avl','bha','bla','bou','bre','bur','che','cov','cry','eve','ful','hud','lee','lei','liv','lut','mci','mid','mil','mun','new','nfo','nor','pne','qpr','shu','sou','tot','wat','whu','wol'];
const TROPHIES = ['champions','conference','copa-del-rey','copa-do-brasil','efl-cup','europa','fa-cup','generic','league','libertadores','supercup'];
// Imagens incluídas no app (escudos, logos de competições e troféus).
const OPTIONAL = [
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  ...CLUBS.map(c => `./assets/clubs/${c}.png`),
  ...TROPHIES.map(t => `./assets/trophies/${t}.png`)
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(CORE);
    await Promise.allSettled(OPTIONAL.map(url => cache.add(url)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys
        .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
        .map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

// Abertura do app: rede primeiro, mas usa o cache se a rede demorar mais que NAV_TIMEOUT_MS
// ou falhar. A resposta da rede continua atualizando o cache para a próxima abertura.
function navigate(request) {
  return new Promise(resolve => {
    let done = false;
    const finish = response => { if (!done && response) { done = true; resolve(response); } };
    const fromCache = () => caches.match('./index.html');
    const timer = setTimeout(() => fromCache().then(finish), NAV_TIMEOUT_MS);
    fetch(request).then(response => {
      clearTimeout(timer);
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy));
        finish(response);
      } else {
        // Resposta de erro (ex.: 404 durante a publicação) nunca sobrescreve o cache.
        fromCache().then(cached => finish(cached || response));
      }
    }).catch(() => {
      clearTimeout(timer);
      fromCache().then(cached => finish(cached || Response.error()));
    });
  });
}

// Demais arquivos: responde na hora pelo cache e atualiza em segundo plano.
function staleWhileRevalidate(event, request) {
  return caches.match(request).then(cached => {
    const network = fetch(request).then(response => {
      if (response && response.ok && response.type === 'basic') {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
      }
      return response;
    });
    if (cached) {
      event.waitUntil(network.catch(() => {}));
      return cached;
    }
    return network;
  });
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(navigate(request));
    return;
  }
  event.respondWith(staleWhileRevalidate(event, request));
});
