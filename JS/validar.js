/**
 * Script que valida los datos introducidos en el formulario
 * @author Juan Antonio Bujalance García
 */

 {
     let inputNombre;
     let inputFecha;
     let inputDni;
     let spanDni;
     let spanNombre;
     //let dniEsCorrecto = false;
     //let nombreEsCorrecto = false;
     //let botonEnviar;

    let validarDni = () =>{
        let dni = inputDni.value;
        const re = /^(\d{8})[ -]?([A-Za-z])$/;
        let arrayDni = re.exec(dni.trim());
        let cadena ="TRWAGMYFPDXBNJZSQVHLCKET";

        if(re.test(dni.trim())){
            if(arrayDni[2].toUpperCase() == cadena[arrayDni[1]%23].toUpperCase()){
                spanDni.innerHTML = `El dni ${arrayDni[0]} es correcto`;
                dniEsCorrecto = true;
            }else{
                spanDni.innerHTML = `Dni incorrecto`;
            }
        }else{
            spanDni.innerHTML = `Formato dni incorrecto`;
        }
        
    }

    let validarNombre = () =>{
        let nombre = inputNombre.value;
        const re = /^[A-Za-zñóáéíúÁÉÍÓÚÑ]+[ ]?[A-Za-zñóáéíúÁÉÍÓÚÑ]+[ ]?[A-Za-zñóáéíúÁÉÍÓÚÑ]+$/;
        if(re.test(nombre.trim())){
            spanNombre.innerHTML = `Nombre correcto`;
            nombreEsCorrecto = true;
        }else{
            spanNombre.innerHTML = `Nombre incorrecto`;

        }
        
    }

    let validarFecha = () =>{//no he tenido tiempo

    }

    /* let disableButton = () =>{
        if(!dniEsCorrecto & !nombreEsCorrecto){
            botonEnviar.disabled = true;
        }else{
            botonEnviar.disabled = true;
        }
    } */

    let init = () => {
        inputNombre = document.getElementById("inputNombre");
        inputFecha = document.getElementById("inputFecha");
        inputDni = document.getElementById("inputDni");
        spanDni = document.getElementById("spanDni");
        spanNombre = document.getElementById("spanNombre");
        //botonEnviar = document.getElementById("botonEnviar");

        inputDni.addEventListener("blur",validarDni);
        inputNombre.addEventListener("blur", validarNombre);
        inputFecha.addEventListener("blur", validarFecha);
        
    }

    document.addEventListener("DOMContentLoaded" , init);
 }