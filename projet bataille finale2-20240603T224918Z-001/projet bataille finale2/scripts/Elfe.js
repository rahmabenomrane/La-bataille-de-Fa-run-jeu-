
import { Guerrier } from '/scripts/Guerrier.js';
 export class Elfe extends Guerrier {
    constructor(image) {
      super("Elfe", 20, 100,2,image); 
    }
  
    getDegats() {
      return super.getDegats() * 2; 
    }
  }