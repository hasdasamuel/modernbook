//Book-slider
$(document).ready(function(){
    $("#book-items").owlCarousel({
        items:4,
        margin:20,
        nav:true,
        loop:true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
    });
});

// CounterUp
$(document).ready(function(){
   $(".counter").counterUp({
       delay:10,
       time:1000,
   }); 
});
//clients
$(document).ready(function(){
    $(".our-cliemts").owlCarousel({
        items:2,
        loop:true,
       autoplay:true,
        margin:50,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
            
        },
        1000:{
            items:2,
            
            
        }
    }
    
        
        
    });
});
//Smooth Scroll
$(document).ready(function(){
    var scroll = new SmoothScroll('a[href*="#"]');
});

//show hide
$(document).ready(function(){
    showHide();
   $(window).scroll(function(){
       showHide();
   });
    function showHide(){
        if($(window).scrollTop()>50){
            $("nav").addClass("sticky-menu");
            $("#scroll-down").css("display","block");
            //alert("top work");
            $(".navbar-toggler span").css("color","#ff6816");
        }
        else{
            $("nav").removeClass("sticky-menu");
            $("#scroll-down").css("display","none");
            //alert("top not work");
            $(".navbar-toggler span").css("color","#fff");
        }
    }
    
});
$(document).ready(function(){
    $("#open-btn").click(function(){
        $("#mobile-menu").css("right","0");
    });
     $("#close-btn").click(function(){
        $("#mobile-menu").css("right","-400px");
         
    });
      $(".mobile-nav .navbar-nav li a").click(function(){
        $("#mobile-menu").css("right","-400px");
    });
    
});