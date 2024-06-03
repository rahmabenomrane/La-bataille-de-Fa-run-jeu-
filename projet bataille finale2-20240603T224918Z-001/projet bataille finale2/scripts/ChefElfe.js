import { Elfe } from '/scripts/Elfe.js'; 

 export class ChefElfe extends Elfe {
    constructor(image) {
      super(image);
      this.type='ChefElfe'
      this.cout = 4;
      this.force *= 2; 
      
    }
  }