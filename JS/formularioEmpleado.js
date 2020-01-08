/**
 * Scrpit que contiene el objeto Empleado
 * @author Juan Antonio Bujalance García
 */

let nombre;
let fecha;
let dni;
let botonNuevoEmpleado;

let init = () => {

    nombre = document.getElementById("inputNombre");
    fecha = document.getElementById("inputFecha");
    dni = document.getElementById("inputDni");

    botonNuevoEmpleado = document.getElementById("botonEnviar");
    botonNuevoEmpleado.addEventListener("click", function(){
        let empleado = new Empleado(nombre.value, fecha.value, dni.value);
        empleado.crearVentana(); //limpiar formulario
    });

}

document.addEventListener("DOMContentLoaded", init);

