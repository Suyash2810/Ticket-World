$(document).ready(function(){
    
    var obj = anime({
        targets: '#head_top_left',
        translateX: ['-250px','0px'],
        duration: function(el,i,l){
            return 2000 + (100*i);
        },
        delay: function(el,i,l){
            return 2000*i+2500;
        },
        elasticity: function(el,i,l){
            return 500 + (200*i);
        },
        scale:[0.5,1.0]
    });
//    
//    var timelineHead = anime.timeline();
//    
//    timelineHead
//    .add({
//        targets: '#timeline1',
//        translateX:250,
//        easing:'easeOutExpo'
//    })
//    .add({
//        targets:'#timeline2',
//        translateX:250,
//        easing:'easeOutExpo'
//    })
    
});