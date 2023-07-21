const containerA = document.querySelector('#circleA');
const containerB = document.querySelector('#circleB');
const containerC = document.querySelector('#circleC');
const containerD = document.querySelector('#circleD');

  let circleA = new ProgressBar.Circle(containerA, {

    color: '#f2f3f4',
    strokeWidth: 8,
    duration: 1400,
    from: { color: '#aaa'},
    to: { color: '#00447c'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 60);
        circle.setText(value);
  
      }

  });

  let circleB = new ProgressBar.Circle(containerB, {

    color: '#f2f3f4',
    strokeWidth: 8,
    duration: 2000,
    from: { color: '#aaa'},
    to: { color: '#00447c'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 254);
        circle.setText(value);
  
      }

  });

  let circleC = new ProgressBar.Circle(containerC, {

    color: '#f2f3f4',
    strokeWidth: 8,
    duration: 1500,
    from: { color: '#aaa'},
    to: { color: '#00447c'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 190);
        circle.setText(value);
  
      }

  });

  let circleD = new ProgressBar.Circle(containerD, {

    color: '#f2f3f4',
    strokeWidth: 8,
    duration: 1600,
    from: { color: '#aaa'},
    to: { color: '#00447c'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 200);
        circle.setText(value);
  
      }

  });

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
    $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png' })
}, 250)
