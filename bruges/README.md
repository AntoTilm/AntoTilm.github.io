# Bruges · 14–15 novembre 2026

Carnet du week-end publié sur https://antotilm.github.io/bruges/ : le programme heure par heure avec les anecdotes (à déplier ou à écouter), nos adresses pour manger et boire, notre avis sur la liste de notre hôte, la check-list et les infos pratiques.

En haut, le dessin de Bruges suit l'heure réelle : soleil bas de novembre, ciel doré avant 17 h, fenêtres allumées après le coucher du soleil.

## Fichiers

- `donnees.js` : **tout le contenu** (étapes, histoires, adresses, verdicts, check-list, infos, sources). C'est le seul fichier à modifier.
- `index.html` : mise en page, styles et affichage. Rien à changer normalement.
- `sw.js` : rend le site consultable hors ligne une fois ouvert. Changer `VERSION` à chaque publication (`bruges-v2`, `bruges-v3`…).
- `polices/` : Grenze Gotisch et Alegreya Sans, hébergées ici (licence SIL OFL, fichiers joints).
- `manifest.webmanifest` et `icone.svg` : pour l'ajouter à l'écran d'accueil du téléphone.

## Mettre à jour

1. Modifier `donnees.js`.
2. Dans `sw.js`, incrémenter `VERSION`.
3. Publier (le site est dans le dépôt de la page d'accueil : le workflow GitHub Pages part à chaque push sur `main`).

Pour voir le site à un autre moment du week-end, ajouter `?t=2026-11-14T16:30` à l'adresse.
