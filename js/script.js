document.addEventListener("DOMContentLoaded", function () {
  // Adiciona um ouvinte de evento a todos os links do menu
  var links = document.querySelectorAll('.sidebar a');

  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Obtém o destino do link
      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      // Calcula a posição do elemento em relação ao topo da página
      var offsetTop = targetElement.offsetTop;

      // Calcula a posição ajustada para centralizar o elemento na janela
      var windowHeight = window.innerHeight;
      var targetHeight = targetElement.offsetHeight;
      var scrollTo = offsetTop - (windowHeight - targetHeight) / 2;

      // Rola suavemente até a posição ajustada
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      });
    });
  });
});