
//Inserisco tutti i prcorsi delle immagini in un array
// console.log('avvio');

const itemsWrapper = document.querySelector('.items-wrapper');
const btnUp = document.querySelector('.btn-up');
const btnDown = document.querySelector('.btn-down');

//nascondo il bottone btnDown di default
btnDown.classList.add('hide')


let counterImg = 0;


const images = [ 
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
]

//creo ciclo delle immagini e ad ogni ciclo aggiungo il tag con l'immagine
for(let i = 0; i < images.length; i++){
    const img = images[i];
   itemsWrapper.innerHTML += `<img class="img hide" src="${img}">`
    
}

//prendo tutti gli elementi con la classe img
const itemsCollection = document.getElementsByClassName('img');

//mi restituisce un html collection ovvero array che come elemento ha un elemento html 
// console.log(itemsCollection);
//se seleziono il primo
// console.log(itemsCollection[0]);


//al primo elemento tolgo la classe hide tramite remuve
itemsCollection[counterImg].classList.remove('hide')



btnDown.addEventListener('click', showNextImage);
btnUp.addEventListener('click', showPrevImage);



//SECONDO ESERCIZIO

// Imposto l'intervallo di scorrimento
const autoplayInterval = 3000; 
let autoplayTimer; // Variabile per memorizzare l'ID dell'intervallo


// Utilizzo la funzione startAutoplay 
startAutoplay();


//FUNZIONI

function startAutoplay() {
    autoplayTimer = setInterval(function () {
        itemsCollection[counterImg].classList.add('hide'); 

        // Incrementa il contatore o resetta a 0 se è l'ultima immagine
        counterImg = (counterImg === images.length - 1) ? 0 : ++counterImg;

        // Mostra la nuova immagine
        itemsCollection[counterImg].classList.remove('hide'); 

        if (counterImg === images.length - 1) {
            btnUp.classList.add('hide');
        } else {
            btnUp.classList.remove('hide');
        }

        btnDown.classList.remove('hide'); 
    }, autoplayInterval);
}


function showNextImage() {
    btnDown.classList.remove('hide')

    //rimetto la classe hide all'elemento con l'indice attuale che si incrementa o si decrementa
    itemsCollection[counterImg++].classList.add('hide')

    //tolgo la classe hide all'elemento a indice contatore che si è incrementato o decrementato
    itemsCollection[counterImg].classList.remove('hide')

    console.log(counterImg);

    if(counterImg === images.length - 1){
    btnUp.classList.add('hide')
    }
}


function showPrevImage() {
    btnUp.classList.remove('hide')

    //rimetto la classe hide all'elemento con l'indice attuale che si incrementa o si decrementa
    itemsCollection[counterImg--].classList.add('hide')
    
    if(counterImg === 0){
        btnDown.classList.add('hide')
    }
    
    //tolgo la classe hide all'elemento a indice contatore che si è incrementato o decrementato
    itemsCollection[counterImg].classList.remove('hide')
    }

  

