# Atlas Aménagement — Site Premium (Noir & Or) — Multi-pages

## Pages
- / (Accueil)
- /services
- /forfait-annuel
- /prix
- /galerie
- /faq
- /contact

## Démarrage local
```bash
npm install
npm run dev
```
Ouvre http://localhost:3000

## Formulaire (très important)
Le formulaire envoie via Formspree avec une variable d'environnement:

1) Crée un formulaire sur Formspree et récupère l'endpoint (ex: https://formspree.io/f/xxxxx)
2) Copie `.env.example` vers `.env.local`
3) Mets:
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxx

## Déploiement Vercel (sans erreur)
1) Push sur GitHub
2) Vercel > Add New > Project > Import repo
3) Vercel > Project Settings > Environment Variables
   - Ajoute: NEXT_PUBLIC_FORMSPREE_ENDPOINT = ton endpoint
4) Deploy

## Galerie
Remplace les images dans `public/gallery/` par tes vraies photos (mêmes noms),
ou modifie `src/app/galerie/page.tsx`.

## Assets inclus
- Logo: public/assets/logo.png
- Offre 2026: public/assets/offre-2026.pdf
- Contrat annuel (PDF remplissable): public/assets/contrat-annuel-formulaire.pdf
