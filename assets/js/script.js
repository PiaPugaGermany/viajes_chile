
/* Inicializador de Tooltip Bootstrap */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})




/* Configuración cambio de color Navbar */
$(window).scroll(function(){
    $("nav").toggleClass("scrolled",$(this).scrollTop()>50);
});


