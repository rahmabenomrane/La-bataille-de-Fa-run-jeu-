import { Carreau } from  '/scripts/Carreau.js';
export class Plateau {
     
    constructor(){
        this.carreaux = [];
        this.initialiserPlateau();


    }
    initialiserPlateau() {
        for (let i = 0; i < 5; i++) {
            this.carreaux.push(new Carreau());
        }
    }
    async avancement(listeBleu, listeRouge){
        let pasbat =true;
        let gagnant ="";
        let resBat = 0;
        let posBat = 0;
       


        if (listeBleu.length > 0 && this.carreaux[0].guerriersBleu.length === 0){
            this.carreaux[0].guerriersBleu.push(...listeBleu);
            
        }


        if (listeRouge.length > 0 && this.carreaux[4].guerriersRouge.length === 0){
            this.carreaux[4].guerriersRouge.push(...listeRouge);
           
        }


        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


        while (pasbat){


            this.afficherEquipes();
            await delay(1000);


            for (let i=4 ;i>=0; i--){
                if (this.carreaux[i].guerriersBleu.length > 0 && i<4 && this.carreaux[i+1].guerriersBleu.length=== 0){
                this.carreaux[i+1].guerriersBleu.push(...this.carreaux[i].guerriersBleu);
                this.carreaux[i].guerriersBleu = [];
                }
            }


           this.afficherEquipes();
           await delay(1000);


         for (let i = 0; i<5 ;i++){
            
            if (this.carreaux[i].guerriersBleu.length > 0 && this.carreaux[i].guerriersRouge.length > 0){
                posBat = i;
                resBat = this.carreaux[i].bataille();
                pasbat = false;
                
            }
         }
   


        this.afficherEquipes();
        await delay(1000);


        if(!pasbat) break;


        for(let i=0; i<5 ; i++) {
            if(this.carreaux[i].guerriersRouge.length >0 && i>0 && this.carreaux[i - 1].guerriersRouge.length === 0){
                this.carreaux[i-1].guerriersRouge.push(...this.carreaux[i].guerriersRouge);
                this.carreaux[i].guerriersRouge=[];
            }
        }
        this.afficherEquipes();
        await delay(1000);


         
        for (let i = 0; i<5 ;i++){
            console.log(this.carreaux[i].guerriersBleu, this.carreaux[i].guerriersRouge);
            if (this.carreaux[i].guerriersBleu.length > 0 && this.carreaux[i].guerriersRouge.length > 0){
                posBat = i;
                resBat = this.carreaux[i].bataille();
                pasbat = false;
            }
         }


         if( this.carreaux[4].guerriersBleu.length > 0 && this.carreaux[4].guerriersRouge.length == 0){
            gagnant = "bleu";
            break;
         }
         if( this.carreaux[0].guerriersRouge.length > 0 && this.carreaux[0].guerriersBleu.length == 0){
            gagnant = "rouge";
            break;
         }
         this.afficherEquipes();
         await delay(1000);


    }
    if(resBat == 1){
        console.log("le chateau bleu gagne");
        this.carreaux[posBat].guerriersRouge = [];
    }else if (resBat == 2) {
        console.log("le chateau rouge gagne");
        this.carreaux[posBat].guerriersBleu = [];
    }else {
        return gagnant;
    }
    return resBat;
}
    afficherEquipes(){
        const champsDeBataille = document.querySelectorAll(".carreau");


        champsDeBataille.forEach((carreau, i) => {
            carreau.querySelector('.equipe_bleu_fa').innerHTML = "";
            carreau.querySelector('.equipe_rouge_fa').innerHTML ="";


            let equipeBDiv = champsDeBataille[i].querySelector(".equipe_bleu_fa");
            let equipeRDiv = champsDeBataille[i].querySelector(".equipe_rouge_fa");
            const equipeBElement = document.createElement('li');
            const equipeRElement = document.createElement('li');


            for (let j =0; j <this.carreaux[i].guerriersBleu.length; j++ ){
                const imgElement = document.createElement('img');
                imgElement.src = this.carreaux[i].guerriersBleu[j].image;
                imgElement.alt = this.carreaux[i].guerriersBleu[j].type;
                equipeBElement.appendChild(imgElement);
            }
            for (let j=0; j< this.carreaux[i].guerriersRouge.length; j++){
                const imgElement = document.createElement('img');
                imgElement.src = this.carreaux[i].guerriersRouge[j].image;
                imgElement.alt = this.carreaux[i].guerriersRouge[j].type;
                equipeRElement.appendChild(imgElement);
            }
            equipeBDiv.appendChild(equipeBElement);
            equipeRDiv.appendChild(equipeRElement);
        });
    }
}

