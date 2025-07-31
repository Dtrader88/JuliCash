// ---- REEMPLAZA EL CONTENIDO COMPLETO DE service-worker.js CON ESTO ----

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('julicash-v2').then(cache => { // <-- EL CAMBIO ESTÁ AQUÍ
      return cache.addAll([
        '/',
        '/index.html',
        'style.css', // <-- IMPORTANTE: Añadimos style.css al caché
        '/manifest.json',
        '/icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
