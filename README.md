# 🏗️ BATEC Guadeloupe - Site Web Officiel

Site web professionnel pour BATEC Guadeloupe, entreprise BTP spécialisée en construction et rénovation avec garantie décennale.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055)

## 🌟 Fonctionnalités

### 🎨 Design & UX
- ✨ Design moderne et responsive (mobile-first)
- 🎭 Animations fluides avec Framer Motion
- 📱 Menu burger mobile avec overlay
- 🎯 Navigation active avec détection de page
- 🍞 Fil d'Ariane (Breadcrumb) sur toutes les pages

### 📄 Pages
- **Accueil** : Hero + Expertises BTP
- **Services** : Construction & Rénovation détaillées
- **À Propos** : Histoire & Mission de l'entreprise
- **Contact** : Formulaire + Coordonnées

### 🚀 SEO & Performance

#### Métadonnées Complètes
- 🎯 Titres optimisés avec template dynamique
- 📝 Descriptions uniques par page (155-160 caractères)
- 🔑 12+ mots-clés ciblés BTP Guadeloupe
- 🌐 Open Graph & Twitter Cards
- 📱 PWA ready avec manifest

#### Données Structurées (JSON-LD)
- 🏢 Schema.org `GeneralContractor`
- 📍 Schema.org `LocalBusiness`
- 🍞 Schema.org `BreadcrumbList`
- 🗺️ Coordonnées GPS (Baie-Mahault)
- ⏰ Horaires d'ouverture
- 📞 Informations de contact

#### Fichiers SEO
- 🗺️ `sitemap.xml` - Généré dynamiquement
- 🤖 `robots.txt` - Configuration crawlers
- 📱 `manifest.json` - PWA

### 🎬 Animations

#### Hero
- Titre : Fade in + slide up (0.8s)
- Description : Fade in + slide up avec délai (0.8s, delay 0.2s)
- Bouton : Fade in + scale up (0.6s, delay 0.4s)
- Cercle jaune : Scale + rotation (0.6s, delay 0.6s)

#### Sections
- Détection au scroll avec `useInView`
- Animations depuis gauche/droite alternées
- Délais séquentiels pour effet cascade

## 🛠️ Technologies

- **Framework** : Next.js 15 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Fonts** : Google Fonts (Protest Strike, Play)
- **Icons** : Next/Image optimisé

## 📦 Installation

```bash
# Cloner le repository
git clone [url-du-repo]

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Build & Déploiement

```bash
# Build de production
npm run build

# Démarrer en production
npm start

# Analyser le build
npm run build && npm run analyze
```

## 📁 Structure du Projet

```
batec/
├── app/
│   ├── layout.tsx          # Layout principal + SEO global
│   ├── page.tsx            # Page Accueil
│   ├── services/           # Page Services
│   ├── apropos/            # Page À Propos
│   ├── contact/            # Page Contact
│   ├── sitemap.ts          # Sitemap dynamique
│   ├── robots.ts           # Robots.txt
│   └── manifest.ts         # PWA Manifest
├── components/
│   ├── Header.tsx          # Navigation + Menu burger
│   ├── Hero.tsx            # Section Hero réutilisable
│   ├── Footer.tsx          # Footer avec CTA
│   ├── Breadcrumb.tsx      # Fil d'Ariane + Schema
│   ├── JsonLd.tsx          # Données structurées
│   ├── acceuil/            # Composants page Accueil
│   ├── services/           # Composants page Services
│   ├── apropos/            # Composants page À Propos
│   └── contact/            # Composants page Contact
├── public/
│   ├── batec-logo-*.png    # Logos
│   ├── hero-*.png          # Images Hero
│   └── *.png               # Autres images
└── SEO-GUIDE.md            # Guide SEO complet
```

## 🎯 SEO - Mots-Clés Ciblés

### Principaux
- BTP Guadeloupe
- Construction Guadeloupe
- Rénovation Guadeloupe
- Entreprise bâtiment Guadeloupe

### Locaux
- Travaux construction Baie-Mahault
- Entreprise BTP 971
- BTP Antilles

### Longue Traîne
- Garantie décennale construction Guadeloupe
- Tous corps d'état Guadeloupe
- Construction bâtiment public Guadeloupe

## 📊 Informations Entreprise

**BATEC Guadeloupe**
- 📍 1 Lot Immeuble Sud Jarry, ZAC de Houelbourg, 97122 BAIE-MAHAULT
- ☎️ 0590 69 32 66
- 📧 commercial@batec-guadeloupe.com
- 🌐 https://batec-guadeloupe.com
- 🗺️ GPS: 16.2667, -61.5833

## ✅ Checklist Post-Déploiement

### Images à Créer
- [ ] `/public/og-image.jpg` (1200x630px)
- [ ] `/public/icon-192.png` (192x192px)
- [ ] `/public/icon-512.png` (512x512px)

### Configuration
- [ ] Remplacer le code Google Search Console dans `layout.tsx`
- [ ] Vérifier le domaine dans tous les fichiers SEO
- [ ] Créer Google My Business
- [ ] Soumettre sitemap à Google Search Console

### Marketing
- [ ] Créer pages Facebook/Instagram
- [ ] Ajouter URLs réseaux sociaux dans `JsonLd.tsx`
- [ ] Optimiser fiche Google My Business
- [ ] Collecter avis clients

## 📈 Performance

- ✅ Responsive design (mobile, tablette, desktop)
- ✅ Images optimisées avec Next/Image
- ✅ Lazy loading automatique
- ✅ Animations performantes (GPU accelerated)
- ✅ SEO 100% optimisé
- ✅ PWA ready

## 🔧 Scripts Disponibles

```bash
npm run dev          # Développement
npm run build        # Build production
npm start            # Démarrer production
npm run lint         # Linter
```

## 📝 License

Propriété de BATEC Guadeloupe © 2025

## 🤝 Support

Pour toute question ou support :
- 📧 Email : commercial@batec-guadeloupe.com
- ☎️ Téléphone : 0590 69 32 66

---

**Développé avec ❤️ pour BATEC Guadeloupe**
