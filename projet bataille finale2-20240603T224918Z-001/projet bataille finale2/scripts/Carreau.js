export class Carreau {


    constructor(){
        this.guerriersBleu = [];
        this.guerriersRouge = [];
    }
    setGuerriersBleu(guerriers){
        this.guerriersBleu = guerriers;
    }
    setGuerriersRouge(guerriers){
        this.guerriersRouge = guerriers;
    }
    bataille(){
        console.log("bataille entre les bleus", this.guerriersBleu, "et rouges ", this.guerriersRouge);
        while(this.guerriersBleu.length > 0 && this.guerriersRouge.length > 0){
            for(let i=0; i<this.guerriersBleu.length ;i++){
                let degat = this.guerriersBleu[i].attaquer();
                this.guerriersRouge[0]?.takeDamage(degat);
                if(this.guerriersRouge[0]?.pointsDeVie <= 0) {
                    if (this.guerriersRouge.length > 1){
                        this.guerriersRouge[1].takeDamage(-this.guerriersRouge[0]?.pointsDeVie);
                    }
                    this.guerriersRouge.shift();
                }
            }
            
            console.log("guerriersRouge", this.guerriersRouge);


            for (let i=0; i< this.guerriersRouge.length; i++){
                let degat = this.guerriersRouge[i].attaquer();
                this.guerriersBleu[0]?.takeDamage(degat);
                if (this.guerriersBleu[0]?.pointsDeVie <= 0) {
                    if (this.guerriersBleu.length > 1) {
                        this.guerriersBleu[1].takeDamage(-this.guerriersBleu[0]?.pointsDeVie);


                    }
                    this.guerriersBleu.shift();
                }
            }
            
            console.log("guerriersbleu", this.guerriersBleu);

        }
            
        if( this.guerriersBleu.length == 0){
            console.log("bleu gagnant");
            return 2;
        }
        return 1;


    }
}
