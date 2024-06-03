export class Tour {
    tour(chateauBleu, chateauRouge, plateau, listeBlue, listeRouge) {
        let resTour = "";
        while (!resTour) {
            chateauBleu.ajouterAFile(listeBlue || []);
            chateauRouge.ajouterAFile(listeRouge || []);

            chateauBleu.entrainerGuerriers();
            chateauRouge.entrainerGuerriers();

            resTour = plateau.avancement(chateauBleu.guerriers, chateauRouge.guerriers);
            chateauBleu.guerriers = [];
            chateauRouge.guerriers = [];
            chateauBleu.ressources++;
            chateauRouge.ressources++;
        }
        console.log("Resultat final du tour: ", resTour);
        console.log("Ressources finales du chateau bleu : ", chateauBleu.ressources);
        console.log("Ressources finales du chateau rouge : ", chateauRouge.ressources);
        return resTour;
    }
}
