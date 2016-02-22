$( document ).ready(function(){ 
var winHeight = $(window).height(); // hauteur de la fenêtre
console.log('Hauteur de la fenêtre : '+ winHeight);
$('#page').css('min-height', winHeight); // <header> prend la hauteur de la fenêtre
});

$(document).ready(function(){
    $('.bxslider').bxSlider({
      adaptiveHeight: true,
    auto : true,
    });
});
