document.addEventListener("DOMContentLoaded", function() {
  //declaramos nuestras variables para seleccionar boton e input
  const generateButton = document.querySelector('button');
  const amountInput = document.querySelector('input');

  //luego agregamos un evento que se active cuando se haga click al boton
  generateButton.addEventListener('click', function () {
    //dentro del eventlistener creamos una function q agarre el valor del texto en int
    const amount = parseInt(amountInput.value);

    // nos aseguramos de cubrir edge cases en el input
    if(!isNaN(amount) && amount > 0) {
      generateCards(amount);
    } else {
      alert('Please enter a valid positive number')
    }
  });

  //crear funcion para generar el div con las cartas dependiendo del amount
  function generateCards(amount) {
    // variable cardContainer creara un div
    const cardContainer = document.createElement('div');
    // aqui le agregamos nuestro estilo hecho en CSS
    cardContainer.classList.add('card-container');


  //loopeamos para crear las cartas dentro de este div.
  for(let i = 0 ; i < amount; i++) {
    // cada card es su propio div
    const card = document.createElement('div');
    // agregamos la clase de card hecha en CSS para el styling
    card.classList.add('card');

    //generamos un numero o letra al azar
    const randomNumber = Math.random() < 0.5  // esto genera una chance de 50% de true o false
    ? Math.floor(Math.random() * 10) + 1 // numero random entre 1 y 10
    : ['Q', 'J', 'K', 'A'][Math.floor(Math.random() * 4)]


    // generamos una pinta al azar
    const pinta = ['&hearts;', '&diams;', '&clubs;', '&spades;'];
    const pintaRandom = pinta[Math.floor(Math.random() * 4)];

  const numeroCarta = document.createElement('p')
    numeroCarta.innerHTML = randomNumber
    numeroCarta.classList.add('numeroC')

    const pintaRandom1 = document.createElement('p');
    pintaRandom1.innerHTML = pintaRandom;
    pintaRandom1.classList.add('pinta1')

    const pintaRandom2 = document.createElement('p')
    pintaRandom2.innerHTML = pintaRandom;
    pintaRandom2.classList.add('pinta2')

    card.appendChild(pintaRandom1);
    card.appendChild(numeroCarta);
    card.appendChild(pintaRandom2);
    cardContainer.appendChild(card);
  }

  // le metemos el div del container al body
  document.body.appendChild(cardContainer);

}



});