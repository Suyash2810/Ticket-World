$(document).ready(function () {

    //Animation of the top - left heading
    var obj = anime({
        targets: '#head_top_left',
        translateX: ['-250px', '0px'],
        duration: function (el, i, l) {
            return 2000 + (100 * i);
        },
        delay: function (el, i, l) {
            return 2000 * i + 2500;
        },
        elasticity: function (el, i, l) {
            return 500 + (200 * i);
        },
        scale: [0.5, 1.0]
    });

    //Timeline animation for the two buttons
    var timelineHead = anime.timeline();

    timelineHead
        .add({
            targets: '#submitBtn',
            translateX: ['-850px', '0px'],
            easing: 'easeOutExpo',
            duration: 4000,
            delay: 500
        })
        .add({
            targets: '#clearBtn',
            translateX: ['850px', '0px'],
            easing: 'easeOutExpo',
            duration: 4800,
            offset: 4000
        });

    //Animation for the main panel
    
    setTimeout(function(){
           var obj = anime({
        targets: '#Searching_Events',
        scale: {
            value: [0, 1],
            duration: function (el, i, l) {
                return anime.random(2500, 4000);
            },
            delay: function (el, i, l) {
                return 100 * i;
            },
            easing: 'easeInOutSine'
        }
    }); 
    },200);

    
    
});
