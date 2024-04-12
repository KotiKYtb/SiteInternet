function alertejs() {
    alert("Bonjour ! C'est moi !");
}

function confirmjs() {
    if( confirm('Avez-vous envie d\'avoir peur ?'))
        alert('bouh !!');
    else 
        alert('sage décision');
}

function age() {
    let monAge = prompt('Quel est votre age ?')
    alert(monAge);
}

function prenom() {
    let monprenom = prompt('Quel est votre prénom ?')
    alert(`je m\'appelle "${monprenom}"`);
}

function divid() {
    alert(30/0);
}

function money() {
    let montantSaisie = prompt('Entrer votre montant','');
    let montant = parseFloat(montantSaisie);
    let resultat = montant + '€ représente ';
    
    let tab_billet = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]

    for (let val=0; val < tab_billet.length; val++) {
        let nbrBillet = Math.floor(montant/tab_billet[val]);
        montant -= nbrBillet*tab_billet[val];

        if( nbrBillet>0)
        resultat += `${nbrBillet} x${tab_billet[val]}€ \n`;
    }
    
    alert(resultat);
}

function demandeage() {
    let demande_age = parseInt(prompt("Quel âge avez vous ?"));
    if (demande_age >= 9 && demande_age <= 10) {
        alert("Vous aller jouer en catégorie : Poussin")
    } else if (demande_age >= 11 && demande_age <= 12) {
        alert("Vous aller jouer en catégorie : Benjamin")
    } else if (demande_age >=13 && demande_age <= 14) {
        alert("Vous aller jouer en catégorie : Minime")
    } else if (demande_age >=15 && demande_age <= 17) {
        alert("Vous aller jouer en catégorie : Cadet")
    } else if (demande_age >= 18 && demande_age <= 20) {
        alert("Vous aller jouer en catégorie : Junior")
    } else {
        alert("Vous aller jouer en catégorie : Sénior")
    }
}

function month() {
    let month = prompt("Veuillez entrer le nom ou le numéro d'un mois")
    let day_on_month = 0
    switch(month){
        case 'janvier' && '1' : day_on_month = 31;
        case 'février' && '2' : day_on_month = 28;
        case 'mars' && '3' : day_on_month = 31;
        case 'avril' && '4' : day_on_month = 30;
        case 'mai' && '5' : day_on_month = 31;
        case 'juin' && '6' : day_on_month = 30;
        case 'juillet' && '7' : day_on_month = 31;
        case 'aout' && '8' : day_on_month = 31;
        case 'septembre' && '9' : day_on_month = 30;
        case 'octobre' && '10' : day_on_month = 31;
        case 'novembre' && '11' : day_on_month = 30;
        case 'décembre' && '12' : day_on_month = 31;
    }
    alert(`Le mois de ${month} contient ${day_on_month} jours !`)
}

function printcarre() {
    let number;
    do {
        number = prompt("Veuillez saisir un nombre");
    } while (isNaN(parseInt(number)))
    const calc_number = number * number;
    alert(`Le carré du nombre ${number} est : ${calc_number}`);
}

function search_true_number() {
    const random_number = Math.floor(Math.random()*21);
    let how_many_chance = prompt("Combien de chance voulez vous avoir ?")
    for (let chance=0; chance<parseInt(how_many_chance); chance++) {
        let search_number = prompt("Entrez un nombre en 0 et 20");
        if (parseInt(search_number) == random_number) {
            alert(`Bravo, le nombre à trouver était : ${random_number}\nTu as réussi avec ${chance+1} essai ${chance>0 ?"s":""}`);
            break;
        } else if (parseInt(search_number) > random_number) {
            alert("Votre nombre est plus grand que celui recherché");
        } else if (isNaN(parseInt(search_number))) {
            alert("Je t'ai demandé un nombre !");
        } else {
            alert("Votre nombre est plus petit que celui recherché");
        }
    }
    alert("Fin du jeu !")
    if( confirm('Avez vous envie de rejouer ?'))
        search_true_number();
    else 
        alert("Au revoir !");
}

function sum_moy_min_max() {
    let tab_value = [9, 8, 1, 18, 15, 0, 14, 8, 3, 16, 8, 9, 12, 4, 0, 15];
    let somme = 0;
    let moyenne = 0;
    let max = 0;
    let min = 0;
    for (let val=0; val < tab_value.length; val++) {
        somme += tab_value[val];
        moyenne = somme/tab_value.length;
        max = Math.max(...tab_value);
        min = Math.min(...tab_value);
    }

    alert(`Somme : ${somme}\nMoyenne : ${moyenne}\nMin : ${min}\nMax : ${max}`);
}

function money_all() {
    let montantSaisie = prompt('Entrer votre montant','');
    let deviseSaisie = prompt('Entrer votre devise euro/dollar','');
    let montant = parseFloat(montantSaisie);
    let devise = deviseSaisie.toLowerCase();
    let resultat = montant + '€ représente ';
    let tab_billet = []
    
    if (devise=='euro') {
        tab_billet = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
    } else if (devise=='dollar') {
        tab_billet = [10000, 5000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01, 0.005]
    } else {
        alert("Veuillez entrer le nom d'une des deux devise !\neuro/dollars")
    }

    for (let val=0; val < tab_billet.length; val++) {
        let nbrBillet = Math.floor(montant/tab_billet[val]);
        montant -= nbrBillet*tab_billet[val];

        if( nbrBillet>0)
        resultat += `${nbrBillet} x${tab_billet[val]}${devise=='euro' ?"€":"$"} \n`;
    }
    
    alert(resultat);
}

function sum_moy_min_max_student() {
    let nbr_student_prompt = prompt("Combien d'élèves comptes votre classe ?")
    let tab_value = []
    let somme = 0;
    let moyenne = 0;
    let max = 0;
    let min = 0;

    for (let nbr_student=0; nbr_student<parseInt(nbr_student_prompt); nbr_student++) {
        tab_value.push(Math.floor(Math.random()*21))
    }

    for (let val=0; val < tab_value.length; val++) {
        somme += tab_value[val];
        moyenne = somme/tab_value.length;
        max = Math.max(...tab_value);
        min = Math.min(...tab_value);
    }

    alert(`Liste : ${tab_value}\nSomme : ${somme}\nMoyenne : ${moyenne}\nMin : ${min}\nMax : ${max}`);
}