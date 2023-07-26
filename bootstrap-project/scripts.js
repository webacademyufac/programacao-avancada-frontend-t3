const skillCircles = document.querySelectorAll('.circle-box #skill circle');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2, // O valor de interseção necessário para acionar a ação
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      skillCircles.forEach((circle) => {
        // Reinicia a animação toda vez que a div #data-area for visível
        circle.style.animation = 'none';
        circle.offsetHeight; // Trigger reflow (necessário para redefinir a animação)
        circle.style.animation = null;
      });
    }
  });
};

const observer = new IntersectionObserver(callback, options);
const dataArea = document.getElementById('data-area');

observer.observe(dataArea);






//--------------------------------- Identificar o clique no menu -----------------------------------//
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) ;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  // window.scroll({
  //   top: to,
  //   behavior: "smooth",
  // });
  smoothScrollTo(0, to);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 30); // 60 fps
};

//-------------------- Filtro para a seção de portfólio -------------------------//
document.addEventListener("DOMContentLoaded", function () {
  // pegue os estados dos botões (qual está selecionado)
  const buttons = document.querySelectorAll("#portifolio-buttons a");
  // pegue os cards
  const projetos = document.querySelectorAll("#portifolio-area img");

  // adicione um evento aos botões
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Adicionar classe ativa ao botão clicado
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");

      const tipoSelecionado = button.getAttribute("href").substring(1);

      // funçao de filtro 
      projetos.forEach((projeto) => {
        const tipoProjeto = projeto.dataset.project;
        // se o filtro está marcado para "todos" e card selecionado é igual tipo de card
        if (tipoSelecionado === "todos" || tipoSelecionado === tipoProjeto) {
          projeto.style.display = "block";
        } else {
          // se o card não corresponde ao filtro esconde
          projeto.style.display = "none";
        }
      });
    });
  });
});