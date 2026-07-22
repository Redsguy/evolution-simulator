const CACHE_NAME = "evolution-v1";

const FILES = [
    "./",
    "index.html",
    "game.html",
    "manifest.json",
    "evolution-simulator/icon-192.png",
    "evolution-simulator/icon-512.png"
];


self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(FILES))
    );
});


self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
});
