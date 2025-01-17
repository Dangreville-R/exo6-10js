
var compteur = 0;
var compteur2 = 0;

var MaDiv = document.getElementById("Methode2");
MaDiv.addEventListener("click", UneProcedureQuiChangeLeText);

MaDiv = document.getElementById("Methode3");
MaDiv.addEventListener("mouseover", UneProcedureQuiSurvole);

MaDiv = document.getElementById("Methode4");
MaDiv.addEventListener("keydown", UneProcedureQuiEcrit);

function UneProcedureQuiEcrit(evenement) {
    evenement.target.innerHTML = "On a appuyé sur : " + evenement.key;
}

function UneProcedureQuiChangeLeText(evenement) {
    var div = evenement.target;
    if (div.className === "divA") {
        div.className = "divD";
    } else {
        div.className = "divA";
    }
}

function UneProcedureQuiSurvole(evenement) {
    var div = evenement.target;
    if (div.className === "divB") {
        div.className = "invisibility";
    } else {
        div.className = "divB";
    }
}
