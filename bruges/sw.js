/* Hors ligne : garde une copie du carnet dans le téléphone.
   Changer VERSION à chaque publication pour forcer la mise à jour. */
const VERSION = "bruges-v1";
const FICHIERS = [
  "./", "index.html", "donnees.js", "icone.svg", "manifest.webmanifest",
  "polices/grenze-gotisch-latin-600-normal.woff2",
  "polices/alegreya-sans-latin-400-normal.woff2",
  "polices/alegreya-sans-latin-400-italic.woff2",
  "polices/alegreya-sans-latin-500-normal.woff2",
  "polices/alegreya-sans-latin-700-normal.woff2"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((cles) => Promise.all(cles.filter((k) => k.startsWith("bruges-") && k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

/* Réseau d'abord pour avoir les mises à jour ; si le réseau traîne plus de 3 secondes
   ou manque, on sert la copie locale. */
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(new Promise((resolve) => {
    let fini = false;
    const repondre = (r) => { if (!fini && r) { fini = true; resolve(r); } };
    const minuteur = setTimeout(() => caches.match(req, { ignoreSearch: true }).then(repondre), 3000);
    fetch(req).then((r) => {
      clearTimeout(minuteur);
      if (r && r.ok) { const copie = r.clone(); caches.open(VERSION).then((c) => c.put(req, copie)).catch(() => {}); }
      repondre(r);
    }).catch(() => {
      clearTimeout(minuteur);
      caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match("index.html")).then((r) => repondre(r || new Response("Hors ligne", { status: 503 })));
    });
  }));
});
