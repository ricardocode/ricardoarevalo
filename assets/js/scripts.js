$( document ).ready(function() {

    try {
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop(); // Identifico el valor de scroll
            
            if (scroll > 120) { //Si el scroll es superior a 90px el header se hace fijo
                $("nav.menu").addClass("fixedMenu");
                console.log("Fixed");
                
                
            } else {// Al volver al top, el header se normaliza
                $("nav.menu").removeClass("fixedMenu");
                console.log("unFixed");
            }
           
 
        });
        
        } catch (error) {
    
        };
});