$(document).ready(function() {
    let containerA = document.getElementById("circleA")

    let circleA = new ProgressBar.Circle(containerA, {
        color: '#f5f5f5',
        strokeWidth: 8,
        duration: 1400,
        from: {
            color: '#a86a0c',
        },
        to: {
            color: '#e18a09'
        },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value() * 10)

            circle.setText(value)
        }
    })

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {
        color: '#f5f5f5',
        strokeWidth: 8,
        duration: 1400,
        from: {
            color: '#a86a0c',
        },
        to: {
            color: '#e18a09'
        },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value() * 20)

            circle.setText(value)
        }
    })

    let containerC = document.getElementById("circleC")

    let circleC = new ProgressBar.Circle(containerC, {
        color: '#f5f5f5',
        strokeWidth: 8,
        duration: 1400,
        from: {
            color: '#a86a0c',
        },
        to: {
            color: '#e18a09'
        },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value() * 30)

            circle.setText(value)
        }
    })

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {
        color: '#f5f5f5',
        strokeWidth: 8,
        duration: 1400,
        from: {
            color: '#a86a0c',
        },
        to: {
            color: '#e18a09'
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
    }, 500)


    //filtro projetos
    $('.filter-btn').on('click', function() {
        let type = $(this).attr('id')
        let boxes = $('.project-box')
        
        $('.main-btn').removeClass('active')
        $(this).addClass('active')

        if(type == 'dsg-btn'){
            eachBoxes('dsg', boxes)
        } else if (type == 'dev-btn') {
            eachBoxes('dev', boxes)
        } else if (type == 'seo-btn'){
            eachBoxes('seo', boxes)
        } else {
            eachBoxes('all', boxes)
        }
    })

    function eachBoxes(type, boxes){
        if (type == 'all'){
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function(){
                if(!$(this).hasClass(type)){
                    $(this).fadeOut('slow')
                } else {
                    $(this).fadeIn()
                }
            })
        }
    }

}) 


