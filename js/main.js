
// array iniziale con oggetti
const images = [ 
    { 
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    },

    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    },
    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    },
    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    },
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 
];


// dichiaro variabile contenitore 
const imageContainer = document.querySelector(".items-container");

images.forEach(
    (element) => {

        // creo elementi per item, image e text
        let divItem = createElementWClass("div", "item");
        let divImage = createElementWClass("div", "image");
        let divText = createElementWClass("div", "text");

        // metto immagine in divImage
        divImage.innerHTML = `<img src="${element.image}">`;

        // metto testo in divText
        divText.innerHTML = `<h3>${element.title}</h3> <p>${element.text}</p>`;

        // inserivo divImage e divText dentro item
        divItem.append(divImage, divText);
        // porto item in pagina
        imageContainer.append(divItem);
    }
);



// seleziono elementi item 
const items = document.getElementsByClassName("item");

// aggiungo classe active al primo elemento
let activeItem = 0;
items[activeItem].classList.add("active"); 


// getione click per prossima immagine

// dichiaro variabile bottone
const nextButton = document.getElementById("up");

nextButton.addEventListener("click",
    function() {

        // verifico di non essere all'ultima immagine
        if (activeItem < images.length - 1) {

            // elimino classe active da elemento precedente
            items[activeItem].classList.remove("active"); 

            // incremento valore indice
            activeItem++;

            // aggiungo classe active
            items[activeItem].classList.add("active");

        } else if (activeItem = images.length - 1) { //se arrivo all'ultima immagine carousel comincia da capo

            items[activeItem].classList.remove("active"); 

            //valore indice
            activeItem = 0;

            // aggiungo classe active
            items[activeItem].classList.add("active");
            
        }

    
    }
)


// gestione click per immagine precedente

// dichiaro variabile bottone
const previousButton = document.getElementById("down");

previousButton.addEventListener("click",
    function() {
        

        // verifico di non essere alla prima immagine
        if (activeItem > 0 ) {

            // elimino classe active da elemento precedente
            items[activeItem].classList.remove("active"); 

            // decremento valore indice
            activeItem--;

            // aggiungo classe active
            items[activeItem].classList.add("active");

        } else if (activeItem === 0) {  //partendo dalla prima immagine posso andare sull'ultima

            items[activeItem].classList.remove("active"); 

            // valore indice
            activeItem = images.length - 1;

            // aggiungo classe active
            items[activeItem].classList.add("active");
            
        }

    
    }
)





// FUNZIONI

// funzione per creare elemento html
function createElementWClass (tagName, className) {

    // creo elemento
    const element = document.createElement(tagName);
    // creo classe
    element.classList.add(className);

    return element
}