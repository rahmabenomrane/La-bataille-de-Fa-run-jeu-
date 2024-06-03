
import { Guerrier } from '/scripts/Guerrier.js';

 export class Nain extends Guerrier {
    constructor(image) {
        super("Nain", 10, 100,1,image);
         
    }

    takeDamage(degats) {
        degats /= 2; 
        return super.takeDamage(degats);
    }
}