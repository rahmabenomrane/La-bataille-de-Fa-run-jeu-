export class Guerrier {
    constructor(type, force, pointsDeVie, cout,image) {
        this.type = type;
        this.force = force;
        this.pointsDeVie = pointsDeVie;
        this.image = image;
        this.cout = cout;
        
    }

    getDegats() {
        return Math.floor(Math.random() * 3) + 1; 
    }

    attaquer() {
        let damage = 0;
        for (let i = 0; i < this.force; i++) {
            let num = this.getDegats();
            damage += num;
        }
        return damage;
    }

    takeDamage(degats) {
        this.pointsDeVie -= degats;
        console.log(`${this.type}  a subi ${degats} points de dégâts. Points de vie restants : ${this.pointsDeVie}`);
    }

   
    estMort() {
        if (this.pointsDeVie <= 0) {
            console.log(`${this.type} est mort.`);
           // return true;
        } else {
            console.log(`${this.type} est toujours en vie avec ${this.pointsDeVie} points de vie.`);
            //return false;
        }
    }
     
   

   
}
