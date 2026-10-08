const CACHE = "okc-resource-connect-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./resources.json",
  "./manifest.webmanifest",
  "./README.md"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});
