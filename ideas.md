# Idées de design — Chalet MCS Anglès

## Contexte
Livret d'accueil numérique pour un chalet de montagne dans le Tarn (Anglès, 81260).
Le document original est un guide de voyage pour les locataires Airbnb.

---

<response>
<text>
## Idée 1 — "Terroir & Pierre Sèche"
**Design Movement**: Brutalisme doux / Artisanat régional occitan
**Core Principles**:
- Authenticité brute : textures de pierre, bois, lin
- Typographie manuscrite pour les titres, serif pour le corps
- Navigation par onglets latéraux comme un vrai livret
- Palette inspirée des ocres et terres du Tarn

**Color Philosophy**: Ocre chaud (#C8A96E), brun terre (#6B4226), vert forêt (#3D5A3E), crème (#F5EDD8). Évoque les pierres du village, les forêts de chênes, les fromages de brebis.

**Layout Paradigm**: Sidebar fixe à gauche (navigation), contenu principal en scroll vertical avec sections distinctes. Pas de grille centrée — asymétrie intentionnelle.

**Signature Elements**:
- Séparateurs en forme de trait de craie
- Icônes dessinées à la main (SVG)
- Cartes de lieu avec fond texturé parchemin

**Interaction Philosophy**: Transitions douces comme tourner les pages d'un livret. Hover sur les cartes = légère élévation.

**Animation**: Entrée des sections en fade-up (200ms ease-out). Sidebar items avec underline qui s'étire.

**Typography System**: Titre : Playfair Display (serif élégant). Corps : Source Serif Pro. Labels : Space Grotesk (monospace moderne pour contraste).
</text>
<probability>0.08</probability>
</response>

<response>
<text>
## Idée 2 — "Chalet Alpin Moderne" ✅ SÉLECTIONNÉE
**Design Movement**: Hygge scandinave / Minimalisme montagnard
**Core Principles**:
- Chaleur naturelle : bois clair, lin, laine
- Navigation top-bar avec ancres de section (SPA)
- Cartes épurées avec icônes emoji natifs du document
- Fond crème légèrement texturé, pas blanc pur

**Color Philosophy**: Fond sable (#FAF7F2), vert sapin profond (#2D5016), brun châtaigne (#7C4A1E), accent doré (#D4A853). Évoque la nature, la forêt, le confort du chalet.

**Layout Paradigm**: Navigation sticky en haut. Sections en pleine largeur avec alternance fond clair/fond bois. Grille de cartes pour les adresses et activités.

**Signature Elements**:
- Hero avec photo du chalet + overlay gradient bois
- Badges de catégorie en forme de pastilles naturelles
- Timeline pour les horaires d'arrivée/départ

**Interaction Philosophy**: Scroll fluide entre sections. Cartes avec hover subtil (shadow + légère montée). Numéros de téléphone cliquables.

**Animation**: Sections entrent en fade-in-up au scroll (Intersection Observer). Navigation active qui suit le scroll.

**Typography System**: Titre : Fraunces (serif organique, chaleureux). Corps : DM Sans (lisible, neutre). Accent : DM Mono pour les adresses/téléphones.
</text>
<probability>0.07</probability>
</response>

<response>
<text>
## Idée 3 — "Guide de Voyage Illustré"
**Design Movement**: Editorial / Magazine de voyage
**Core Principles**:
- Mise en page magazine avec colonnes et ruptures visuelles
- Couleurs vives inspirées des affiches de tourisme vintage
- Sections avec grands titres illustrés
- Photos pleine largeur entre les sections

**Color Philosophy**: Bleu ciel (#4A90D9), rouge brique (#C0392B), jaune soleil (#F1C40F), blanc cassé (#FAFAFA). Palette festive et touristique.

**Layout Paradigm**: Alternance de sections 2 colonnes et pleine largeur. Titres de section en très grand format.

**Signature Elements**:
- Numérotation des sections en style magazine
- Pull-quotes pour les conseils importants
- Cartes avec coordonnées GPS stylisées

**Interaction Philosophy**: Lecture linéaire encouragée. Ancres de navigation rapide.

**Animation**: Titres qui s'écrivent au scroll. Images avec parallax léger.

**Typography System**: Titre : Abril Fatface (display bold). Corps : Lora (serif lisible). Sous-titres : Nunito Sans.
</text>
<probability>0.06</probability>
</response>

---

## Décision finale : Idée 2 — "Chalet Alpin Moderne"
Style retenu pour sa cohérence avec l'ambiance du chalet, sa lisibilité sur mobile, et son élégance naturelle.
