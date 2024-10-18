# Mon Memory Game

Ce projet est un moyen ludique d'aborder React.

Le principe du jeu du Memory est de **réussir à retourner toutes les cartes**.
On commence par un plateau avec des cartes tournées face cachée.

L'objectif est de trouver le jumeau de la carte retournée. Si on ne le trouve pas, on doit remettre les cartes face cachées.

Si le jumeau est trouvé, on laisse les cartes retournées et on en retourne une autre, etc.

Ci-dessous une démonstration en image :

![](/public/demonstration_small.gif)

🎯 L'objectif ici est de surtout comprendre :

-   L'organisation d'un projet React (initié avec ViteJS)
-   L'initialisation d'un Prettier dans son projet
-   Manipuler du `JSX`
-   Ce qu'est un `Composant`
-   Ce que sont les `props` et leur utilité
-   Ce qu'est un `State`
-   Les notions de déstructuration et de décomposition en JavaScript

et d'utiliser une fois `useEffect()`

## Enoncé pas à pas

🏗️ **en construction**

1. Initier le projet avec ViteJS
2. Lire et commencer à se familiariser avec la structure du projet React
3. Supprimer les morceaux de code inutiles (pour information j'ai gardé le CSS par flemme 😬 mais vous pouvez faire le votre)

### Étape 1 : mise en place du contexte

1. Créer une fonction qui permet de créer le `deck` (paquet de cartes)
    > 💭 Commentaires : Ici, je suis restée simple pour ne pas perdre l'objectif de s'entraîner sur du React mais vous pouvez plus tard vous lancez dans un `deck` plus poussé
    > Le `deck` doit contenir des doublons, sinon on n'est plus sur du Memory 😅
2. Créer une fonction `shuffle()` qui permet de mélanger le paquet de cartes
3. Afficher les cartes en manipulant du `JSX` et `map()`

## Conseils

Evidemment le code fourni dans ce repo est la/une solution 🤪

Essayez de faire les étapes sans regarder ce que j'ai fait sinon ça n'a pas de sens.

Il est fortement recommandé de lire de la documentation sur React, de faire vos recherches pour comprendre les différentes notions et d'avoir testé des morceaux de code sur le côté pour travailler chaque concept.

Et attention à l'utilisation de l'IA qui peut vous emmener vers la mauvaise route (à avoir challengé pour le fun) 😉

## Pistes d'amélioration possible

-   Convertir le projet avec de la POO
-   Apporter de la UI
-   Intégrer TypeScript
