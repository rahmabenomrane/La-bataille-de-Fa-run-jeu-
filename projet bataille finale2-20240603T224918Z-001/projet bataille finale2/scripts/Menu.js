import { Tour } from './Tour.js';


export class Menu {
    constructor() {
        this.tour = new Tour();
    }


    afficherMenuEntrainement(chateauBleu, chateauRouge, plateau) {
        let equipes = {};


        document.addEventListener('DOMContentLoaded', () => {
            const dialogBleu = document.createElement('dialog');
            dialogBleu.setAttribute('id', "menu_entrainement_bleu");
            dialogBleu.innerHTML = `
            <div id="dialog_container_rouge" >
            <header>
                <h1> La Bataille de Faerun : Équipe Bleu </h1>
            </header>
            <div id="dialogue_body_bleu" class="card-container" >
            <div class="card" >
                <img src="./images/NainB.png" alt="nainb" width="130">
                <span>Nain</span>
                <div class="input_wrapper">
                    <input type="number" class="qte" id="nain_bleu" name="nain_bleu" step="1" min="0">
                </div>
            </div>
            <div class="card">
                <img src="./images/ElfeB.png" alt="elfeb" width="130">
                <span>Elfe</span>
                <div class="input_wrapper">
                    <input type="number" class="qte" id="elfe_bleu" name="elfe_bleu" step="1" min="0">
                </div>
            </div>
            <div class="card">
                <img src="./images/ChefNainB.png" alt="chefNainb" width="130">
                <span>Chef nain</span>
                <div class="input_wrapper">
                    <input type="number" class="qte" id="chefNain_bleu" name="chefNain_bleu" step="1" min="0">
                </div>
            </div>
            <div class="card">
                <img src="./images/ChefElfeB.png" alt="chefelfeb" width="130">
                <span>Chef elfe</span>
                <div class="input_wrapper">
                    <input type="number" class="qte" id="chefElfe_bleu" name="chefElfe_bleu" step="1" min="0">
                </div>
                </div>
            </div>
        </div>
                <footer>
            </footer>


            </div>
            `;


            const dialogRouge = document.createElement('dialog');
            dialogRouge.setAttribute('id', "menu_entrainement_rouge");
            dialogRouge.innerHTML = `
            <div id="dialog_container_rouge">
            <header>
                <h1> La Bataille de Faerun : Équipe Rouge </h1>
            </header>
            <div id="dialogue_body_rouge" class="card-container">
                <div class="card">
                    <label>
                        <img src="./images/NainR.png" alt="nainR">
                        <span>Nain</span>
                    </label>
                    <input type="number" class="qte" id="nain_rouge" name="nain_rouge" step="1" min="0">
                </div>
                <div class="card">
                    <label>
                        <img src="./images/ElfeR.png" alt="elfeR">
                        <span>Elfe</span>
                    </label>
                    <input type="number" class="qte" id="elfe_rouge" name="elfe_rouge" step="1" min="0">
                </div>
                <div class="card">
                    <label>
                        <img src="./images/ChefNainR.png" alt="chefNainR">
                        <span>Chef nain</span>
                    </label>
                    <input type="number" class="qte" id="chefNain_rouge" name="chefNain_rouge" step="1" min="0">
                </div>
                <div class="card">
                    <label>
                        <img src="./images/ChefElfeR.png" alt="chefelfeR">
                        <span>Chef elfe</span>
                    </label>
                    <input type="number" class="qte" id="chefElfe_rouge" name="chefElfe_rouge" step="1" min="0">
                </div>
            </div>
        </div>
            `;


            document.body.appendChild(dialogBleu);
            document.body.appendChild(dialogRouge);


            dialogBleu.showModal();
            dialogRouge.showModal();


            


            const suivantBtn = document.createElement('button');
            suivantBtn.innerText = "Suivant";
            dialogRouge.appendChild(suivantBtn);


            suivantBtn.addEventListener('click', () => {
                const redNain = parseInt(document.getElementById('nain_rouge').value) || 0;
                const redElfe = parseInt(document.getElementById('elfe_rouge').value) || 0;
                const redChefNain = parseInt(document.getElementById('chefNain_rouge').value) || 0;
                const redChefElfe = parseInt(document.getElementById('chefElfe_rouge').value) || 0;
               
                equipes = {
                    ...equipes,
                    nain_rouge: redNain,
                    elfe_rouge: redElfe,
                    chefNain_rouge: redChefNain,
                    chefElfe_rouge: redChefElfe
                };
                let {equipeR,equipeB} = this.convertirEquipes(equipes);
                console.log("Équipe rouge:", equipeR);
                console.log("Équipe bleu:", equipeB);
                dialogRouge.close();
                dialogBleu.showModal();
               // return equipeR;
               
               document.getElementById('nain_rouge').value=0;
               document.getElementById('elfe_rouge').value=0;
               document.getElementById('chefNain_rouge').value=0;
               document.getElementById('chefElfe_rouge').value=0;
            });
         
            const startBtn = document.createElement('button');
            startBtn.innerText = "Jouer";
            dialogBleu.appendChild(startBtn);


            startBtn.addEventListener('click', (event) => {
                event.preventDefault();


                const blueNain = parseInt(document.getElementById('nain_bleu').value) || 0;
                const blueElfe = parseInt(document.getElementById('elfe_bleu').value) || 0;
                const blueChefNain = parseInt(document.getElementById('chefNain_bleu').value) || 0;
                const blueChefElfe = parseInt(document.getElementById('chefElfe_bleu').value) || 0;


               


                equipes = {
                    ...equipes,
                    nain_bleu: blueNain,
                    elfe_bleu: blueElfe,
                    chefNain_bleu: blueChefNain,
                    chefElfe_bleu: blueChefElfe,
                   
                };


                let { equipeR,equipeB} = this.convertirEquipes(equipes);
                dialogBleu.close();


                console.log("Équipe bleu:", equipeB);
                //let equipeR=
                this.tour.tour(chateauBleu, chateauRouge, plateau, equipeB, equipeR)
                    .then((res) => {
                        if (res) {
                            if (res === 1 || res === 2) {
                                alert((res === 1 ? "Le chateau bleu " : "Le chateau rouge ") + "a gagné");
                                dialogBleu.showModal();
                                dialogRouge.showModal();
                            } else {
                                this.afficherMenuGagnant(res);
                            }
                        }
                    })
                    .catch((error) => {
                        console.error("Erreur lors du tour:", error);
                    });
                    document.getElementById('nain_bleu').value=0;
                    document.getElementById('elfe_bleu').value=0;
                    document.getElementById('chefNain_bleu').value=0;
                    document.getElementById('chefElfe_bleu').value=0;
            });
           




            document.addEventListener('DOMContentLoaded', () => {
                const nainBleuInput = document.getElementById('nain_bleu');
                console.log("Input Nain Bleu:", nainBleuInput);


                
            });
        });
    }


    afficherMenuGagnant(gagnant) {
        console.log(gagnant);
        const dialog = document.createElement('dialog');
        dialog.setAttribute("id", "menu_gagnant");
        dialog.innerHTML = `
        <div id="dialog_container_gagnant">
            <header>
                <h1> Bataille Terminée </h1>
            </header>
            <div id="winner_dialog_body">
                <h1 id="gagnant"> Chateau ${gagnant} a gagné</h1>
            </div>
            <footer>
                <button type="submit" id="continue_btn"> Rejouer </button>
            </footer>
        </div>
        `;


        document.body.appendChild(dialog);
        dialog.showModal();


        const continueBtn = document.getElementById('continue_btn');
        continueBtn.addEventListener('click', (event) => {
            event.preventDefault();
            location.reload();
        });
    }


    convertirEquipes(equipes) {
        let equipeB = [];
        let equipeR = [];
        for (let key in equipes) {
            let count = equipes[key] * 1;
            let char = key.split('_')[0];


            if (key.includes('bleu')) {
                equipeB = equipeB.concat(Array(count).fill(char));
                console.log(equipeB);
            } else if (key.includes('rouge')) {
                equipeR = equipeR.concat(Array(count).fill(char));
                console.log(equipeR);
            }
        }
        return { equipeB, equipeR };
    }
}


