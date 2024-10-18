# Mon Memory Game

Ce projet est un moyen ludique d'aborder React.

### 🧠 Le principe du jeu Memory

est de **réussir à retourner toutes les cartes**.
On commence par un plateau avec des cartes tournées face cachée.

L'objectif est de trouver le jumeau de la carte retournée. Si on ne le trouve pas, on doit remettre les cartes face cachées.

Si le jumeau est trouvé, on laisse les cartes retournées et on en retourne une autre, etc.

### 🎤 Démonstration en image :

![](/public/demonstration_small.gif)

### 🎯 L'objectif ici est de surtout comprendre :

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
4. Faire un peu de CSS pour que les cartes soient disposées en lignes et colonnes et pas juste en une seule ligne
    > 💭 Commentaires : pour rester dans la simplicité, je suis partie sur un `deck` de 12 cartes (4 cartes par ligne et 3 lignes). Mon CSS est "en dur" sur cette prise de décision

### Étape 2 : premières intéractions

Ici on va travailler l'intéraction avec les cartes

1.  Pour démarrer, lorsqu'on clique sur une carte, on doit pouvoir afficher dans la console, sa valeur
2.  Afficher toutes les cartes tournées face cachée. Dans mon exemple, j'ai décidé que la valeur affichée serait un `X` lorsque la carte est face cachée.
3.  Lorsqu'on clique sur une carte, celle-ci doit se retourner face visible

### Étape 3 : le compteur

Pour continuer dans le travail de la notion d'état :

1.  Mettre un compteur en place pour comptabiliser le nombre de fois qu'on clique sur une carte
2.  Le compteur ne doit pas augmenter si on clique sur une carte déjà retournée

### Étape 4 : la notion de paire

Nous allons mettre en place le mécanisme de retournement des cartes

1. Faire en sorte qu'une fois que 2 cartes sont révélées, de les retourner face cachée

    > 💭 Commentaires : ce n'est pas grave si c'est la bonne paire, on retourne quand même. On gèrera le système de garder les paires visibles ensuite.

2. Mettre en place un `setTimeout()` à 500 milliseconds de délai pour laisser un petit temps d'attente avant de retourner les 2 cartes cliquées

## Conseils

Evidemment le code fourni dans ce repo est la/une solution 🤪

Essayez de faire les étapes sans regarder ce que j'ai fait sinon ça n'a pas de sens.

Il est fortement recommandé de lire de la documentation sur React, de faire vos recherches pour comprendre les différentes notions et d'avoir testé des morceaux de code sur le côté pour travailler chaque concept.

Et attention à l'utilisation de l'IA qui peut vous emmener vers la mauvaise route (à avoir challengé pour le fun) 😉

## Pistes d'amélioration possible

-   Convertir le projet avec de la POO
-   Apporter de la UI
-   Intégrer TypeScript
