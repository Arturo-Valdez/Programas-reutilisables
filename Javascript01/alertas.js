function alerta() 
{
var mensaje;
var opcion = prompt("Introduzca su nombre:", "Aner Barrena");
 
if (opcion == null || opcion == "") {
        mensaje = "Has cancelado o introducido el nombre vacío";
        } else {
            mensaje = "Hola " + opcion;
            }
            document.getElementById("ejemplo").innerHTML = mensaje;
}

function ConfirmDemo() {
    //Ingresamos un mensaje a mostrar
    var mensaje = confirm("¿Te gusta Desarrollo Geek?");
    //Detectamos si el usuario acepto el mensaje
    if (mensaje) {
    alert("¡Gracias por aceptar!");
    }
    //Detectamos si el usuario denegó el mensaje
    else {
    alert("¡Haz denegado el mensaje!");
    }
}