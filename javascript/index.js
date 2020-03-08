const responsive={
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }

}
$(document).ready(function(){
    $nav=$('.nav-bar')
    $toggle_container=$('.toggle-container')
    $toggle_container.click(function(){
         $nav.toggleClass('collapse')
    })
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        resposive:responsive
        
    });
    
    
})