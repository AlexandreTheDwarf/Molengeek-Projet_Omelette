// Créez un objet personnage avec les propriétés et méthodes suivantes :

class Personnage {
    constructor (nom, lieu, argent, mainDroite, MainGauche){
        this.nom = nom
        this.lieu = lieu
        this.argent = argent
        this.mainDroite = mainDroite
        this.MainGauche = MainGauche
        this.seDeplacer(this.lieu) = () => {

        }
        this.payerArticle(article) = () => {
            
        }
        this.couper(ingredient, outil) = () => {

        }
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

