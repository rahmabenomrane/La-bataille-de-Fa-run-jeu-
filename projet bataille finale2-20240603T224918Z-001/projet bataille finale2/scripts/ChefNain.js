
import { Nain } from '/scripts/Nain.js'; 
 export class ChefNain extends Nain {
    constructor(image) {
      super(image);
      this.type='ChefNain'
      this.cout = 3;
      this.force *= 2; 
      
    }
    takeDamage(degats) {
      degats /= 2; 
      return super.takeDamage(degats);
  }
  }