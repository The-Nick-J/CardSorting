document.addEventListener("DOMContentLoaded", function() {

  //declaramos nuestras variables para seleccionar boton e input
  const generateButton = document.querySelector('button');
  const amountInput = document.querySelector('input');
  const sortInput = document.querySelector('#sort-btn');
  const cardsArray = [];

  //luego agregamos un evento que se active cuando se haga click al boton
  generateButton.addEventListener('click', function () {
    //dentro del eventlistener creamos una function q agarre el valor del texto en int
    const amount = parseInt(amountInput.value);

    // nos aseguramos de cubrir edge cases en el input
    if(!isNaN(amount) && amount > 0) {
      generateCards(amount);
      displayCards();
    } else {
      alert('Please enter a valid positive number')
    }
  });

  sortInput.addEventListener('click', sortCards)

  //LOGICA

  //crear funcion para generar el div con las cartas dependiendo del amount
  function generateCards(amount) {
    // variable cardContainer creara un div



    for(let i = 0 ; i < amount; i++) {

      //generamos un numero o letra al azar
      const randomNumber = Math.random() < 0.5  // esto genera una chance de 50% de true o false
      ? Math.floor(Math.random() * 10) + 1 // numero random entre 1 y 10
      : ['Q', 'J', 'K', 'A'][Math.floor(Math.random() * 4)]



      // generamos una pinta al azar
      const pinta = ['&hearts;', '&diams;', '&clubs;', '&spades;'];
      const pintaRandom = pinta[Math.floor(Math.random() * 4)];

      cardsArray.push([randomNumber, pintaRandom])
    }
    return cardsArray
  }

  // DISPLAY

  function displayCards(amount) {

    let array = generateCards(amount);

    const cardContainer = document.createElement('div');

    // aqui le agregamos nuestro estilo hecho en CSS
    cardContainer.classList.add('card-container');

    //loopeamos para crear las cartas dentro de este div.
    for(let i = 0 ; i < array.length; i++) {

      // cada card es su propio div
      const card = document.createElement('div');

      // agregamos la clase de card hecha en CSS para el styling
      card.classList.add('card');

      const numeroCarta = document.createElement('p')
      numeroCarta.innerHTML = array[i][0]
      numeroCarta.classList.add('numeroC')

      const pintaRandom1 = document.createElement('p');
      pintaRandom1.innerHTML = array[i][1]
      pintaRandom1.classList.add('pinta1')

      const pintaRandom2 = document.createElement('p')
      pintaRandom2.innerHTML = array[i][1]
      pintaRandom2.classList.add('pinta2')


      card.appendChild(pintaRandom1);
      card.appendChild(numeroCarta);
      card.appendChild(pintaRandom2);
      cardContainer.appendChild(card);


    }

    function sortCards() {
      let cardsUnsorted = generateCards(amount);

    }


    // le metemos el div del container al body
    document.body.appendChild(cardContainer);
}



});