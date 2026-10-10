
const CACHE = "okc-resource-connect-v4";

const ASSETS = [
  "./",
  "./index.html",
  "./resources.json",
  "./manifest.webmanifest",
  "./sw.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key =>
              key.startsWith("okc-resource-connect-") &&
              key !== CACHE
            )
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);

  if (
    request.method !== "GET" ||
    url.origin !== self.location.origin
  ) {
    return;
  }

  const isPageOrData =
    request.mode === "navigate" ||
    url.pathname.endsWith("/index.html") ||
    url.pathname.endsWith("/resources.json");

  if (isPageOrData) {
    event.respondWith(
      fetch(request, { cache: "no-cache" })
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE)
              .then(cache => cache.put(request, copy));
          }
          return response;
        })
        .catch(() =>
          caches.match(request)
            .then(cached =>
              cached || caches.match("./index.html")
            )
        )
    );
    return;
  }

  event.respondWith(
    caches.match(request)
      .then(cached =>
        cached ||
        fetch(request).then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE)
              .then(cache => cache.put(request, copy));
          }
          return response;
        })
      )
  );
});
