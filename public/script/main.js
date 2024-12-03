// Créez un objet personnage avec les propriétés et méthodes suivantes :

class Personnage {
    constructor (nom, lieu, argent, mainDroite, mainGauche){
        this.nom = nom
        this.lieu = lieu
        this.argent = argent
        this.mainDroite = mainDroite
        this.mainGauche = mainGauche
    }
    seDeplacer(lieu) {
        if (lieu.personnes.includes(this.nom)) {
            console.log(`${this.nom} est déjà à la ${this.lieu}.`);
        } else {
            lieu.personnes.push(this.nom);
            this.lieu = lieu.nom; // Met à jour la position actuelle du personnage
            console.log(`${this.nom} est actuellement à la ${lieu.nom}.`);
        }
    }
    prendre(objet){
        if (this.mainDroite.length === 0){
            this.mainDroite.push(objet)
        }
        else{
            console.log("tu tiens déjà quelque chose dans ta main droite")
        }
    }
    payerArticle(article) {
        if (this.argent >= article.prix) {
            this.argent -= article.prix;
            console.log(
                `${this.nom} a payé ${article.prix}€ pour ${article.nom}. Il reste ${this.argent}€.`
            );
        } else {
            console.log(`${this.nom} n'a pas assez d'argent pour acheter ${article.nom}.`);
        }
    }
    couper(ingredient, outil){
        this.mainDroite == couteau
        if (this.mainDroite == outil && ingredient.etats == entier){
            ingredient.etats = "couper"
            console.log(`${ingredient} a été coupé`)
        }
    }
}

let Alexandre = new Personnage ("Alexandre", "maison", 50, [], [])

// Créez un lieu "maison" avec les propriétés :

let maison = {
    nom : "maison",
    personnes : [
        "Mathéna",
        "Alexandre"
    ]
};

// Créez un outil (couteau / mouleur) pour découper les ingrédients achetés avec les propriétés :

let couteau = {
    nom : "Couteau",
    action : "Couper"
}

// Créez des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...) avec les propriétés :

class ingredient {
    constructor (nom, etats, prix){
        this.nom = nom
        this.etats = etats
        this.prix = prix
    }
}

let oignon = new ingredient ("Oignon", ["entier", "frais"], 2.5)
let oeuf =  new ingredient ("Oeuf", ["entier", "frais"], 5)
let origan = new ingredient ("origan", ["moulu"], 1.5)
let fromage = new ingredient ("fromage", ["rapé", "sous vide"], 4.5 )

// Créez un lieu "epicerie" avec les propriétés :

let epicerie = {
    nom: "epicerie",
    personnes: [],
    paniers: [
        { type: "panier", contenu: [] },
        { type: "panier", contenu: [] }
    ],
    ingredients : [
        oignon,
        oeuf,
        origan,
        fromage
    ]
}

// Créez un outil (poêle).

let poêle = {
    nom: "poêle",
    contenu: [], 
    cuire() {
        if (this.contenu.length === 0) {
            console.log("La poêle est vide. Rien à cuire.");
            return;
        }

        console.log("Cuisson en cours...");
        setTimeout(() => {
            let melangeCuit = {
                nom: this.contenu[0].nom,
                etat: "cuit",
                prix: this.contenu[0].prix
            };
            this.contenu = [melangeCuit];
            console.log(`Le mélange est maintenant ${melangeCuit.etat} !`);
        }, 4000);
    }
};

// Créez un objet  bol avec les attribut suivant:

let bol = {
    contenu: [],
    melanger(nomDuMelange){
        this.contenu = [nomDuMelange]
        console.log(`le bol contient maintenant ${nomDuMelange}`)
    }
}


//  Début de l'omelette 
 
//  Pour indiquer que le personnage est à la maison :

Alexandre.seDeplacer(maison)

// Pour aller à l'épicerie acheter les ingrédients pour l'omelette :

Alexandre.seDeplacer(epicerie)
Alexandre.prendre(epicerie.paniers[0])
console.log(`${Alexandre.nom} a pris un ${epicerie.paniers[0].type}.`);

// Créez une boucle qui prend chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en fait une COPIE dans le panier du personnage.

for (let ingredient of epicerie.ingredients) {
    console.log(`${Alexandre.nom} a trouvé ${ingredient.nom} dans l'épicerie.`);
    Alexandre.payerArticle(ingredient);
    epicerie.paniers[0].contenu.push({ ...ingredient }); // Ajouter une copie de l'ingrédient dans le panier
}

console.log(
    `Le panier contient maintenant : ${epicerie.paniers[0].contenu
        .map((item) => item.nom)
        .join(", ")}.`
);
console.log(`Argent restant d'Alexandre : ${Alexandre.argent}€.`);

// Retournez à la maison (pour pouvoir cuisiner) 

Alexandre.seDeplacer(maison)

// Mettez chaque ingrédient dans le bol (1 à 1 avec une boucle) :

while (epicerie.paniers[0].contenu.length > 0) {
    let ingredient = epicerie.paniers[0].contenu.shift(); // Retirer l'ingrédient du panier
    console.log(`${ingredient.nom} a été déposé dans le bol.`);
    bol.contenu.push(ingredient); // Ajouter l'ingrédient directement dans le bol
}

console.log("Tous les ingrédients ont été transférés dans le bol.");

// Retournez à l'épicerie pour rapporter le panier :

Alexandre.seDeplacer(epicerie)

epicerie.paniers.push(Alexandre.mainDroite)
console.log("Le panier a été dépose")

// Retournez à la maison pour continuer l'omelette

Alexandre.seDeplacer(maison);
console.log("Alexandre est revenu à la maison pour continuer l'omelette.");

// Vérifiez chaque ingrédient dans le bol et coupez-les s'ils sont "entier"
bol.contenu.forEach((ingredient) => {
    if (ingredient.etats.includes("entier")) {
        Alexandre.couper(ingredient, couteau);
        console.log(`${ingredient.nom} a été coupé.`);
    } else {
        console.log(`${ingredient.nom} n'a pas besoin d'être coupé.`);
    }
});

// Mélangez le contenu du bol avec la méthode melanger. Nommez ce mélange une 'omelette' (à passer en paramètre).

bol.melanger("omelete")

poêle.contenu = [...bol.contenu];
bol.contenu = []; 

poêle.cuire()