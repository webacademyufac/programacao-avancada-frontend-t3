$(document).ready(function() {
  const containerA = document.querySelector('#circleA');
  const containerB = document.querySelector('#circleB');
  const containerC = document.querySelector('#circleC');
  const containerD = document.querySelector('#circleD');
  
  // Função para criar o ProgressBar
  function createProgressBar(container, duration, maxValue) {
    return new ProgressBar.Circle(container, {
      color: '#f2f3f4',
      strokeWidth: 6,
      duration: duration,
      from: { color: '#aaa' },
      to: { color: '#00447c' },

      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        let value = Math.round(circle.value() * maxValue);
        circle.setText(value);
      }
    });
  }

  let circleA = createProgressBar(containerA, 1400, 60);
  let circleB = createProgressBar(containerB, 1600, 120);
  let circleC = createProgressBar(containerC, 1500, 190);
  let circleD = createProgressBar(containerD, 2200, 20001);
  
  // Iniciando os loaders quando o usuário chegar no elemento
  let dataArea = document.querySelector('#data-area');
  let dataAreaOffset = dataArea.offsetTop;
  // "stop" serve para a animação não carregar mais que uma vez
  let stop = 0;
  
  function handleScroll() {
    let scroll = window.scrollY || window.pageYOffset;
  
    if (scroll > dataAreaOffset - 600 && stop === 0) {
      circleA.animate(1.0);
      circleB.animate(1.0);
      circleC.animate(1.0);
      circleD.animate(1.0);
  
      stop = 1;
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  
  // Parallax
  setTimeout(function() {
      $('#data-area').parallax({imageSrc: 'img/parallax-lights.jpg' })
      $('#pattern-img').parallax({imageSrc: 'img/parallax-dark.jpg' })
  }, 250)
  
  // Portfólio filtro
  $('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'dsg-btn') {
      eachBoxes('dsg', boxes);
    } else if(type == 'dev-btn') {
      eachBoxes('dev', boxes);
    } else if(type == 'seo-btn') {
      eachBoxes('seo', boxes);
    } else {
      eachBoxes('all', boxes);
    }

  });

  function eachBoxes(type, boxes) {

    if(type == 'all') {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }

  let navBtn = $('.nav-item');

  let bannerSection = $('#mainSlider');
  let aboutSection = $('#about-area');
  let servicesSection = $('#services-area');
  let teamSection = $('#team-area');
  let portfolioSection = $('#portfolio-area');
  let contactSection = $('#contact-area');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'about-menu') {
      scrollTo = aboutSection;
    } else if(btnId == 'services-menu') {
      scrollTo = servicesSection;
    } else if(btnId == 'team-menu') {
      scrollTo = teamSection;
    } else if(btnId == 'portfolio-menu') {
      scrollTo = portfolioSection;
    } else if(btnId == 'contact-menu'){
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70,
    }, 300);
  });
});