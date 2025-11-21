
let perso1 = {
    nom: "Héros",
    vie: 100,
    attaque: 20,
    precision: 0.5
};


let perso2 = {
    nom: "Monstre",
    vie: 100,
    attaque: 15,
    precision: 0.6
};


function touche(precision) {
    let hasard = Math.random(); 
    return hasard < precision;  
}


console.log("Début du combat !");


while (perso1.vie > 0 && perso2.vie > 0) {

    
    if (touche(perso1.precision)) {
        perso2.vie -= perso1.attaque;
        console.log(perso1.nom + " touche ! " + perso2.nom + " perd " + perso1.attaque + " PV.");
    } else {
        console.log(perso1.nom + " rate son attaque !");
    }

    
    if (perso2.vie <= 0) break;

    
    if (touche(perso2.precision)) {
        perso1.vie -= perso2.attaque;
        console.log(perso2.nom + " touche ! " + perso1.nom + " perd " + perso2.attaque + " PV.");
    } else {
        console.log(perso2.nom + " rate son attaque !");
    }

    console.log("PV restants : Héros = " + perso1.vie + ", Monstre = " + perso2.vie);
    console.log("--------------------------------");
}


if (perso1.vie > 0) {
    console.log(perso1.nom + " a gagné !");
} else {
    console.log(perso2.nom + " a gagné !");
}
