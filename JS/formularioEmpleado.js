/**
 * Scrpit que contiene el objeto Empleado
 * @author Juan Antonio Bujalance García
 */
let inputNombre;
let inputFecha;
let inputDni;

let spanDni;
let spanNombre;
let spanFecha;
let spanErrorFormulario;



let validarDni = () =>{
    return spanDni.innerHTML = Validar.validarDni(inputDni.value);
}

let validarNombre = () => {
    return spanNombre.innerHTML = Validar.validarNombre(inputNombre.value);
}

let validarFecha = () =>{
    return spanFecha.innerHTML = Validar.validarFecha(inputFecha.value);
}

let crearVentana = () => {
    let cadenaError = validarDni() + validarNombre() + validarFecha();
    if(cadenaError.length == 0){
        let empleado = new Empleado(inputNombre.value, inputFecha.value, inputDni.value);
        empleado.crearVentana();
        limpiarFormulario(); //limpiar formulario
    }
    
}

let limpiarFormulario = () => {
    inputDni.value =``;
    inputNombre.value =``;
    inputFecha.value =``;
    spanErrorFormulario.innerHTML =``;

} 



let init = () => {

    inputNombre = document.getElementById("inputNombre");
    inputFecha = document.getElementById("inputFecha");
    inputDni = document.getElementById("inputDni");
    spanDni = document.getElementById("spanDni");
    spanNombre = document.getElementById("spanNombre");
    spanFecha = document.getElementById("spanFecha");
    spanErrorFormulario = document.getElementById("errorFormulario");

    inputDni.addEventListener("blur", validarDni);
    inputNombre.addEventListener("blur", validarNombre);
    inputFecha.addEventListener("blur", validarFecha);

    

    botonNuevoEmpleado = document.getElementById("botonEnviar").addEventListener("click", crearVentana);
    
}

document.addEventListener("DOMContentLoaded", init);

