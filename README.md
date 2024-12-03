# PROJET OMELETTE
 

## Créez un objet personnage avec les propriétés et méthodes suivantes :

- nom (string)
- lieu (string)
- argent (number)
- mainDroite (tableau)
- mainGauche (tableau)
- seDeplacer(lieu) (méthode)
- payerArticle(article) (méthode)
- couper(ingredient, outil) (méthode)
 

## Créez un lieu "maison" avec les propriétés :

- nom: (string)
- personnes : (tableau)
 

## Créez un outil (couteau / mouleur) pour découper les ingrédients achetés avec les propriétés :

- nom (string)
- action (string)
 

## Créez des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...) avec les propriétés :

- nom (string)
- etats (tableau de strings) qui correspond aux états actuels de l'ingrédient. des exemple de valeurs possibles sont avec les valeurs 'entier', 'coupé', ‘moulu’
- prix (number)
 

## Créez un lieu "epicerie" avec les propriétés :

- nom (string)
- personnes = [] (tableau des personnes présentes dans l'épicerie)
- paniers (tableau d'objets "panier" avec une propriété "type" égale à panier et le contenu du panier, égal à un tableau vide)
- Les "ingrédients" créés précédemment contenus dans un tableau.
 

## Créez un outil (poêle).

- nom (string)
- contenu : tableau vide
- cuire() (méthode)
 

## Créez un objet  bol avec les attribut suivant:

- contenu : (tableau d'ingrédient)
- melanger(nomDuMelange) : (methode)
- melanger remplace tout ce qui est contenu dans l'attribut contenu par un nouvelle ingrédient avec nomDuMelange comme nom, ‘pas cuit’ comme état et 0 comme prix


# Methode
 
- Ajoutez une méthode cuire() à la poêle qui, après 4 secondes, met l'état 'cuit' à this.contenu[0]. 
- Vous pouvez utiliser la fonction setTimeout(() => {}, 4000). **Cette méthode remplacera this.contenu par [l'objet newMelange].**

 
# Début de l'omelette 
 

## Pour indiquer que le personnage est à la maison :

- Utilisez la méthode seDeplacer avec l'objet maison en paramètre.
- Affichez un message tel que : console.log(personnage.nom + " est actuellement à la " + personnage.lieu);
 

## Pour aller à l'épicerie acheter les ingrédients pour l'omelette :

- Répétez la première étape en changeant le paramètre de la méthode seDeplacer par l'épicerie.
- Le personnage prend un des paniers dans l'épicerie (récupère le panier dans les objets de l'épicerie et le met dans sa main droite).
- Affichez un message du type : console.log(${personnage.nom} a pris un panier);
 
## Créez une boucle qui prend chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en fait une COPIE dans le panier du personnage.

- Affichez un message à chaque ingrédient pris.
- Payez chaque ingrédient récupéré dans le panier avec la fonction payerArticle().
- Affichez un message sur l'argent restant sur le personnage.
 
## Retournez à la maison (pour pouvoir cuisiner) :

- Utilisez la méthode seDeplacer avec l'objet maison en paramètre.
- Affichez un message.
 
## Mettez chaque ingrédient dans le bol (1 à 1 avec une boucle) :

- Vérifiez que les ingrédients ne se trouvent plus dans le panier.
- Affichez un message pour chaque ingrédient mis dans le bol.
 
## Retournez à l'épicerie pour rapporter le panier :

- Utilisez la méthode seDeplacer avec l'objet épicerie en paramètre.
- Enlevez le panier de la main droite du personnage et remettez-le dans les paniers de l'épicerie.
- Affichez un message.
 
## Retournez à la maison pour continuer l'omelette :

- Utilisez la méthode seDeplacer avec l'objet maison en paramètre.
- Affichez un message.
- Vérifiez chaque ingrédient dans le bol et le coupez seulement s'il est entier avec la méthode couper de la personne.

## Mélangez le contenu du bol avec la méthode melanger. Nommez ce mélange une 'omelette' (à passer en paramètre).

- Affichez un message avec le nouveau mélange.
- Videz le contenu du bol dans la poêle. Il ne doit plus rien avoir dans le bol et il doit y avoir juste l'omelette pas cuite.

- Cuisez l'omelette avec la méthode de la poêle.
- Affichez un message final : "Notre omelette est cuite :"