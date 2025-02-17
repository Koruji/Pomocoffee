//---------------------VARIABLES 
const unite = document.getElementById("choix-unite");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const error = document.getElementById("errorMessage");
let cafe = document.getElementById("cafe");
const startButton = document.getElementById("start");
let timer = document.getElementById("timer"); 
let uniteValue = "";
let compteur = 0; 

// Partie gestion de l'unité de temps 
unite.addEventListener("change", () => {
    uniteValue = unite.value;
    compteur = 0;
    timer.textContent = "00 : 00";
    updateCoffee(compteur);

    if(uniteValue === "") {
        uniteValue = undefined;
    }
});

// Partie quantité liquide tasse 
increase.addEventListener("click", () => {
    if(uniteValue) {
        error.textContent = "";
        timer.textContent = updateTime("+", uniteValue);
        updateCoffee(compteur);
    } else {
        error.textContent = "Veuillez sélectionner une unité de temps pour continuer.";
    }
});

decrease.addEventListener("click", () => {
    if(uniteValue) {
        error.textContent = "";
        timer.textContent = updateTime("-", uniteValue);
        updateCoffee(compteur);
    } else {
        error.textContent = "Veuillez sélectionner une unité de temps pour continuer.";
    }
});

function updateCoffee(compteur) {    
    let newHeight = (compteur * 240) / 60;
    if(newHeight >= 10 && newHeight <= 250) {
        cafe.style.height = `${newHeight}px`;
    } else if (newHeight < 10) {
        cafe.style.height = "10px";
    }
    
    if (newHeight >= 52) {
        cafe.style.height = `${newHeight}px`;
        cafe.style.width = "80%";
    } else if (newHeight <= 52) {
        cafe.style.width = "70%";
    }
    
    console.log(cafe.style.height);
}

// Partie régulation timer 
function updateTime(rhesus, unite) {
    switch(rhesus) {
        case "-" : 
            compteur--;
            break;
        case "+": 
            compteur++;
            break;
    }

    if(compteur < 0 || compteur > 60) {
        compteur = 0;
    }
    
    if(unite === "s") {
        return `00 : ${compteur}`;
    } else {
        return `${compteur} : 00`;
    }
}

// Partie gestion du bouton START 
startButton.addEventListener("click", () => {
    //a implémenter
});

// Partie gestion du bouton CLOSE 
//a implémenter 

// Partie gestion du bouton SHOP
//a implémenter