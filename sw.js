const CACHE_NAME = 'grimorio-v5';
const ASSETS = [
    './',
    './index.html',
    './css/style.css',
    './js/app.js',
    './js/tarot.js',
    './js/gods.js',
    './js/herbs.js',
    './js/moon.js',
    './js/notes.js',
    './js/images.js',
    './manifest.json',
    './img/icon.svg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cached) => {
            return cached || fetch(event.request).then((response) => {
                if (response && response.status === 200 && response.type === 'basic') {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
                }
                return response;
            });
        }).catch(() => caches.match('./index.html'))
    );
});
