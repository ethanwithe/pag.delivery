document.addEventListener('DOMContentLoaded', function() {
  // Validar el formulario de contacto
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      const nombre = document.querySelector('input[name="nombre"]').value;
      const telefono = document.querySelector('input[name="telefono"]').value;
      const email = document.querySelector('input[name="email"]').value;

      // Realizar validaciones (puedes agregar más validaciones según tus necesidades)
      if (!nombre || !telefono || !email) {
          alert('Por favor, complete todos los campos.');
      } else {
          // Enviar formulario (aquí puedes realizar una solicitud AJAX al servidor o hacer lo que desees)
          alert('Formulario enviado correctamente. Gracias por su solicitud.');
          form.reset();
      }
  });

  // Animación de desplazamiento suave para los enlaces internos
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });
});
