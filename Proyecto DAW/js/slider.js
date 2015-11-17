jQuery(document).ready(function($) {
    $('#slider').bjqs({
 
         
// PARAMETROS OPCIONALES QUE NOS OFRECE EL PLUGIN
width : 700,
height : 300,
 
// valores de las animaciones
animtype : 'fade', // tipo de animacion, si se desvanece el slider
animduration : 500, // el tiempo que durara la animacion
animspeed : 4000, // cuanto se tardara entre cada diapositiva
automatic : true, // si la transicion sera automatica
 
// configuracion de los controles y del texto de las imagenes
showcontrols : true, // sirve para mnostrar los controles de siguiente y anterior
centercontrols : true, // sirve para poder manipular los controles
nexttext : 'Siguiente', // el texto que tendra el control en este caso es siguiente
prevtext : 'Anterior', // el texto que tendra el control en este caso es anterior
showmarkers : true, // para mostrar el texto individual de cada imagen
centermarkers : true, // para mostrar el texto de forma horizontal
 
// valores de interaccion
keyboardnav : true, // sirve para permitir la navegacion con el teclado
hoverpause : true, // para pausar la transicion de la animacion
 
// opciones de presentacion
usecaptions : true, // mostramos los titulos de cada imagen
responsive : true // para que el slider sean responsivo
    });
});
