// Mantenha APP_VERSION igual ao APP_VERSION do index.html a cada versão publicada.
const APP_VERSION = '1.9.0';
const CACHE_PREFIX = 'diario-tecnico-pwa-';
const CACHE_NAME = CACHE_PREFIX + APP_VERSION;
const NAV_TIMEOUT_MS = 3000;

// Essenciais: se falharem, o modo offline não é instalado.
const CORE = ['./', './index.html'];

// Opcionais: um arquivo ausente não impede a instalação.
const CLUBS = ['ars','avl','bha','bla','bou','bre','bur','che','cov','cry','eve','ful','hud','lee','lei','liv','lut','mci','mid','mil','mun','new','nfo','nor','pne','qpr','shu','sou','tot','wat','whu','wol'];
const TROPHIES = ['champions','conference','copa-del-rey','copa-do-brasil','efl-cup','europa','fa-cup','generic','league','libertadores','supercup'];
// Imagens incluídas no app (escudos, logos de competições e troféus).
const BUILTIN_IMG = ["clubs/alaves.webp", "clubs/almeria.webp", "clubs/arminia.webp", "clubs/arsenal.webp", "clubs/athletic-club.webp", "clubs/atletico-de-madrid.webp", "clubs/augsburg.webp", "clubs/b-monchengladbach.webp", "clubs/barcelona.webp", "clubs/bayer-leverkusen.webp", "clubs/bayern-munchen.webp", "clubs/bochum.webp", "clubs/bologna.webp", "clubs/borussia-dortmund.webp", "clubs/braga.webp", "clubs/cadiz.webp", "clubs/celta-de-vigo.webp", "clubs/chelsea.webp", "clubs/club-brugge.webp", "clubs/eintracht-frankfurt.webp", "clubs/elche-cf.webp", "clubs/elversberg.webp", "clubs/espanyol.webp", "clubs/fc-koln.webp", "clubs/fcsb.webp", "clubs/fenerbahce.webp", "clubs/ferecvarosi.webp", "clubs/fiorentina.webp", "clubs/freiburg.webp", "clubs/granada.webp", "clubs/hamburg.webp", "clubs/hannover-96.webp", "clubs/heidenheim.webp", "clubs/hertar-berlin.webp", "clubs/hoffenheim.webp", "clubs/juventus.webp", "clubs/kaiserslautern.webp", "clubs/kobenhavn.webp", "clubs/las-palmas.webp", "clubs/levante.webp", "clubs/liverpool.webp", "clubs/lyon.webp", "clubs/mainz-05.webp", "clubs/malaga.webp", "clubs/mallorca.webp", "clubs/manchester-city.webp", "clubs/manchester-united.webp", "clubs/marseille.webp", "clubs/napoli.webp", "clubs/nice.webp", "clubs/nuremberg.webp", "clubs/osasuna.webp", "clubs/paderborn-07.webp", "clubs/paris-saint-germain.webp", "clubs/porto.webp", "clubs/psv.webp", "clubs/rayo-vallecano.webp", "clubs/rb-leipzig.webp", "clubs/rb-salzburg.webp", "clubs/real-betis.webp", "clubs/real-madrid.webp", "clubs/real-sociedad.webp", "clubs/real-valladolid.webp", "clubs/real-zaragoza.webp", "clubs/royal-antwerp-fc.webp", "clubs/sassuolo.webp", "clubs/schalke-04.webp", "clubs/sevilla.webp", "clubs/shakhtar-donetsk.webp", "clubs/shamrock-rovers.webp", "clubs/sl-benfica.webp", "clubs/slavia-praga.webp", "clubs/st-pauli.webp", "clubs/tottenham.webp", "clubs/valencia.webp", "clubs/vfb-stuttgart.webp", "clubs/villarreal.webp", "clubs/werder-bremen.webp", "clubs/wolfsburg.webp", "clubs/wolves.webp", "comps/2-bundesliga.webp", "comps/bundesliga.webp", "comps/copa-del-rey.webp", "comps/dfb-pokal.webp", "comps/la-liga-2.webp", "comps/la-liga.webp", "comps/supercopa-da-uefa.webp", "comps/supercopa-de-espana.webp", "comps/uefa-champions-league-formato-antigo.webp", "comps/uefa-europa-league-formato-antigo.webp", "trophies/2-bundesliga.webp", "trophies/bundesliga.webp", "trophies/copa-del-rey.webp", "trophies/dfb-pokal.webp", "trophies/la-liga-2.webp", "trophies/la-liga.webp", "trophies/supercopa-da-alemanha.webp", "trophies/supercopa-de-espana.webp", "trophies/uefa-champions-league-formato-antigo.webp", "trophies/uefa-champions-league.webp", "trophies/uefa-conference-league-formato-antigo.webp", "trophies/uefa-conference-league.webp", "trophies/uefa-europa-league-formato-antigo.webp", "trophies/uefa-europa-league.webp"];
const OPTIONAL = [
  ...BUILTIN_IMG.map(f => `./assets/img/${f}`),
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
