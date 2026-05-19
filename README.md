# 🌐 Voxel Portfolio 3D — Du Diagnostic Automobile au Développement Web

Bienvenue sur le dépôt de mon portfolio interactif en 3D ! Construit dans un style graphique rétro/Voxel inspiré de Minecraft, ce projet retrace de manière ludique et visuelle mon parcours de reconversion professionnelle : **14 ans d'expertise dans le diagnostic des systèmes automobiles complexes** vers le métier de **Développeur Web Fullstack** (formé à la Wild Code School).

Le projet se présente comme un "serious game" où le visiteur contrôle un personnage sur une route et découvre des bâtiments et des panneaux d'affichage qui matérialisent mes compétences et mes étapes de vie.

---

## 🗺️ Le Parcours Visuel

Le projet est structuré comme une chronologie interactive le long d'une route :
1. **Le Passé (Le Garage Auto) :** À gauche de la route, représentant mes 14 ans d'expérience. En face (à droite), un grand panneau liste mes compétences en diagnostic, électricité et logique algorithmique automobile.
2. **Le Présent (Le Bureau Wild Code School) :** Plus loin à droite, un bâtiment moderne et vitré abrite une table de co-working avec des ordinateurs portables émissifs. En face (à gauche), un panneau liste mes compétences tech (React, TypeScript, Node.js).
3. **Le Futur (L'Alternance) :** Au fond de la route, un bâtiment mystérieux et asymétrique surmonté d'un point d'interrogation géant en 3D symbolise ma recherche active d'une alternance.

---

## 🛠️ Stack Technique

Ce projet utilise l'écosystème moderne de la 3D sur le Web :
* **[React](https://react.dev/)** & **[TypeScript](https://www.typescriptlang.org/)** — Pour une structure de code robuste et typée.
* **[Three.js](https://threejs.org/)** — La bibliothèque 3D de référence pour le Web.
* **[React Three Fiber (R3F)](https://r3f.docs.pmnd.rs/)** — Le wrapper React pour manipuler la scène Three.js de manière déclarative.
* **[@react-three/drei](https://github.com/pmndrs/drei)** — Pour les utilitaires avancés (chargement de textures, gestion des textes en 3D avec `<Text>`).

---

## 📂 Structure des Composants 3D

Le code est modulaire et découpé en composants réutilisables situés dans le dossier `src/components/` :

```text
src/
├── components/
│   ├── ControlOverlay.tsx   # Interface HTML fixe (Overlay) guidant l'utilisateur
│   ├── ExperienceSign.tsx   # Panneau 3D géant (Expérience Pro Auto) incliné à -15°
│   ├── FutureBuilding.tsx   # Bâtiment voxel asymétrique + Point d'interrogation 3D
│   ├── Garage.tsx           # Le garage auto (briques texturées, pont élévateur, voiture)
│   ├── Office.tsx           # Le bureau Wild Code School (murs vitrés, laptops émissifs)
│   ├── Player.tsx           # Logique de déplacement du joueur au clavier
│   └── SkillsSign.tsx       # Panneau 3D géant (Compétences Tech) incliné à +15°
└── App.tsx                  # Assemblage de la scène Canvas et de l'UI globale