

import { Chateau } from '/scripts/Chateau.js';
import { Menu } from '/scripts/Menu.js'; 
import { Plateau } from '/scripts/Plateau.js'; 
import { Nain } from '/scripts/Nain.js'; 
import { ChefNain } from '/scripts/ChefNain.js'; 
import { Elfe } from '/scripts/Elfe.js'; 
import { ChefElfe } from '/scripts/ChefElfe.js';
const chateauBleu = new Chateau({
    Nain: "./images/NainB.png",
    ChefNain: "./images/ChefNainB.png",
    Elfe: "./images/ElfeB.png",
    ChefElfe: "./images/ChefElfeB.png",

});
const chateauRouge = new Chateau({
    Nain: "./images/NainR.png",
    ChefNain: "./images/ChefNainR.png",
    Elfe: "./images/ElfeR.png",
    ChefElfe: "./images/ChefElfeR.png",

});

const plateau = new Plateau();

const menu = new Menu();
menu.afficherMenuEntrainement(chateauBleu, chateauRouge, plateau);