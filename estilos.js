document.addEventListener('DOMContentLoaded', function() {
  let textToShow = document.getElementById("textToShow");

  // Realizar solicitud HTTP GET al archivo 'datos.txt'
  fetch('textoA.txt')
    .then(response => response.text()) // Obtener el contenido del archivo como texto
    .then(data => {
      // Asignar el contenido del archivo al elemento de texto
      textToShow.textContent = data.trim();
    })
    .catch(error => {
      console.error('Error al cargar los datos:', error);
    });
});


document.addEventListener('DOMContentLoaded', function () {
  fetch('textoA.txt').then(response => response.text()).then(data => {
    fetch('textoB.txt').then(response2 => response2.text()).then(data2 => {
      let toggleButton = document.getElementById("toggleButton");
      let textToShow = document.getElementById("textToShow");

      toggleButton.addEventListener("click", function () {
        if (textToShow.textContent === data.trim()) {
          textToShow.textContent = data2.trim();
        } else {
          textToShow.textContent = data.trim();
        }
      })
    })
      .catch(error => {
        console.error('Error al cargar los datos:', error);
      });
  });
});
