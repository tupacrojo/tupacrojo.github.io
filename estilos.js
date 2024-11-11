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


document.addEventListener('DOMContentLoaded', function() {
  const imageContainer = document.querySelector('.image-container');
  const img = imageContainer.querySelector('img');
  const video = imageContainer.querySelector('video');

  imageContainer.addEventListener('mouseover', () => {
    img.style.visibility = 'hidden';
    video.style.visibility = 'visible';
    video.currentTime = 0; // Reinicia el video al inicio
    video.play();
  });

  imageContainer.addEventListener('mouseout', () => {
    video.style.visibility = 'hidden';
    video.pause();
    img.style.visibility = 'visible';
  });
});


document.addEventListener('DOMContentLoaded', function () {

  const smoothScrollLinks = document.querySelectorAll('#toggleButton');

  for (const link of smoothScrollLinks) {
    link.addEventListener('click', smoothScrollToSection);
  }
  
  function smoothScrollToSection(event) {
    event.preventDefault();
  
    const targetId = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
  
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'end', 
    inline: 'nearest'
    });
  }
  


  fetch('textoA.txt').then(response => response.text()).then(data => {
    fetch('textoB.txt').then(response2 => response2.text()).then(data2 => {
      let toggleButton = document.getElementById("toggleButton");
      let textToShow = document.getElementById("textToShow");

      toggleButton.addEventListener("click", function () {
        if (textToShow.textContent === data.trim()) {
          textToShow.textContent = data2.trim();
          toggleButton.textContent = "Version Larga";
        } else {
          textToShow.textContent = data.trim();
          toggleButton.textContent = "Version Corta";
        }
      })
    })
      .catch(error => {
        console.error('Error al cargar los datos:', error);
      });
  });
});
