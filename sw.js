const CACHE_NAME = 'che101-calc-v1';
const ASSETS = [
  '/CHE101-Calculator/',
  '/CHE101-Calculator/index.html',
  '/CHE101-Calculator/manifest.json',
  '/CHE101-Calculator/icon-192.png',
  '/CHE101-Calculator/icon-512.png'
];

// Install Service Worker and cache core files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Serve cached files when offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});