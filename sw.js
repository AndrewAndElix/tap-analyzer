self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("tap-analyzer-v1").then((cache) => {
      return cache.addAll(["./", "./index.html", "./manifest.webmanifest"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((resp) => {
      return resp || fetch(e.request);
    })
  );
});
