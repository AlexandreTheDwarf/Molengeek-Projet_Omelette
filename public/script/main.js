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

