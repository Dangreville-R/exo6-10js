//on fait une variable factorielle egale a 0
let factorielle = 0;
//on demande un nombre qu'on et dans la variable nbrDemande
let nbrDemande = prompt("entrer un nombre :");
var nbr = 1
for(i=0;i<nbrDemande;i++) {
   factorielle = factorielle + nbr;
   nbr = nbr +1;
   alert(factorielle);
}
factorielle = factorielle - nbrDemande;
alert(factorielle);