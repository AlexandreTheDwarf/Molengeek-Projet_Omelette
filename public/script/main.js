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
        // Ton code ici
    }
    payerArticle(article){

    }
    couper(ingredient, outil){

    }
}

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
    }
}
