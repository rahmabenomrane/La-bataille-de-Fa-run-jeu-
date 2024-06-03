import { Nain } from '/scripts/Nain.js'; 
import { ChefNain } from '/scripts/ChefNain.js'; 
import { Elfe } from '/scripts/Elfe.js'; 
import { ChefElfe } from '/scripts/ChefElfe.js';
import { Guerrier } from '/scripts/Guerrier.js';

export class Chateau {
    constructor(image) {
        this.ressources = 3;
        this.guerriers = [];
        this.fileDAttente = [];
        this.image = image;
    }

    ajouterAFile(guerriers) {
        this.fileDAttente = this.fileDAttente.concat(guerriers);
    }

    entrainerGuerriers() {
      let continuer = true;
      while (this.fileDAttente.length > 0 && continuer) {
          let guerrier ;
          switch (this.fileDAttente[0]) {
              case "nain":
                  guerrier = new Nain(this.image.Nain);
                  break;
              case "chefNain":
                  guerrier = new ChefNain(this.image.ChefNain);
                  break;
              case "elfe":
                  guerrier = new Elfe(this.image.Elfe);
                  break;
              case "chefElfe":
                  guerrier = new ChefElfe(this.image.ChefElfe);
                  break;
              default:
                  
                  guerrier = new Guerrier();
                  break;
          }
            if (this.ressources >= guerrier.cout) {
                this.ressources -= guerrier.cout;
                this.guerriers.push(guerrier);
                this.fileDAttente.shift();
                console.log(`Entrainement de guerrier : ${guerrier.type}`);
            } else {
                console.log(`Il manque de ressources pour entraîner ${guerrier.type}.`);
                continuer = false;
            }
        }
    }

     
}
