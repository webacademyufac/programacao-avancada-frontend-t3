$(document).ready(function() {
    let containerA = document.getElementById("circleA")

    let circleA = new ProgressBar.Circle(containerA, {
        color: '#e3f6f5',
        strokeWidth: 8,
        duration: 1400,
        from: {
            color: '#272643',
        },
        to: {
            color: '#2c698d'
        },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value() * 10)

            circle.setText(value)
        }
    })

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {
        color: '#e3f6f5',
        strokeWidth: 8,
        duration: 1400,
        from: {
            color: '#272643',
        },
        to: {
            color: '#2c698d'
        },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value() * 20)

            circle.setText(value)
        }
    })

    let containerC = document.getElementById("circleC")

    let circleC = new ProgressBar.Circle(containerC, {
        color: '#e3f6f5',
        strokeWidth: 8,
        duration: 1400,
        from: {
            color: '#272643',
        },
        to: {
            color: '#2c698d'
        },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value() * 30)

            circle.setText(value)
        }
    })

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {
        color: '#e3f6f5',
        strokeWidth: 8,
        duration: 1400,
        from: {
            color: '#272643',
        },
        to: {
            color: '#2c698d'
        },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color)
            let value = Math.round(circle.value() * 40)

            circle.setText(value)
        }

    })


    // iniciar loading quando user chegar na sessão

    let dataArea = $('#data-area').offset()
    let stop = 0

    $(window).scroll(function(event){
        let scroll = $(window).scrollTop()
        if (scroll > (dataArea.top - 800) && stop == 0){

            circleA.animate(1.0)
            circleB.animate(1.0)
            circleC.animate(1.0)
            circleD.animate(1.0)

            stop = 1

        }
    })


    //parallax 
    setInterval(function(){
        $('#data-area').parallax({imageSrc: './assets/img/cidadeparallax.png'})
        $('#apply-area').parallax({imageSrc: './assets/img/pattern.png'})
    },300)


}) 


