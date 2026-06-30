# Portfolio — Hamidou Sylla

Stack identique à RentalCar : React 19 + Vite + Tailwind v4.

## Démarrer en local

```bash
npm install
npm run dev
```

## Ce qu'il faut personnaliser

Tout le contenu est centralisé en haut de `src/App.jsx`, dans les objets :

- `PROFILE` — nom, rôle, email, liens GitHub/LinkedIn
- `STACK_STATUS` — le panneau "terminal" affiché dans le hero
- `MIGRATION` — la frise de ton parcours technique (Angular/Spring Boot → Node/React)
- `PROJECTS` — RentalCar et AgriPoultry (ajoute tes vraies URLs de démo)
- `EXPERIENCE` — PRODAC, Sonatel, freelance

Pas besoin de toucher au reste du JSX pour une première version.

## Idées d'amélioration (optionnel, pas urgent)

- Ajouter des captures d'écran de RentalCar dans la section Projets
- Ajouter un favicon et une image Open Graph
- Brancher un vrai formulaire de contact (Formspree gratuit, ou ton API Express existante)

## Déploiement sur Vercel

1. Pousse ce dossier sur un nouveau repo GitHub (ex: `portfolio`)
2. Sur [vercel.com](https://vercel.com), "Add New Project" → importe le repo
3. Framework preset : Vite (détecté automatiquement)
4. Déploie — tu auras une URL `https://ton-projet.vercel.app` en moins de 2 minutes

C'est exactement le même processus que pour le frontend de RentalCar.
