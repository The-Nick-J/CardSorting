document.addEventListener("DOMContentLoaded", function() {
  //declaramos nuestras variables para seleccionar boton e input
  const generateButton = document.querySelector('button');
  const amount = document.querySelector('input')

  //luego agregamos un evento que se active cuando se haga click al boton
  generateButton.addEventListener('click', function () {
    //dentro del eventlistener creamos una function q agarre el valor del texto en int
    const amount = parseInt(amount.value)

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
    const cardContainer = document.createElement('div')
    // aqui le agregamos nuestro estilo hecho en CSS
    cardContainer.classList.add('card-container')


  //loopeamos para crear las cartas dentro de este div.
  for(let i = 0 ; i < amount; i++) {
    // cada card es su propio div
    const card = document.createElement('div')
    // agregamos la clase de card hecha en CSS para el styling
    card.classList.add('card')
  }
  }



})