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
     let spanFecha;
    

    let validarDni = () =>{
        let dni = inputDni.value;
        const re = /^(\d{8})[ -]?([A-Za-z])$/;
        let arrayDni = re.exec(dni.trim());
        let cadena ="TRWAGMYFPDXBNJZSQVHLCKET";

        if(re.test(dni.trim())){
            if(arrayDni[2].toUpperCase() != cadena[arrayDni[1]%23].toUpperCase()){
                spanDni.innerHTML = `El dni ${arrayDni[0]} no es correcto`;
            }else{
                spanDni.innerHTML = ``;
            }
        }else{
            spanDni.innerHTML = `Formato dni incorrecto`;
        }
        
    }

    let validarNombre = () =>{
        let nombre = inputNombre.value;
        const re = /^[A-Za-zñóáéíúÁÉÍÓÚÑ]+[ ]?[A-Za-zñóáéíúÁÉÍÓÚÑ]+[ ]?[A-Za-zñóáéíúÁÉÍÓÚÑ]+$/;
        if(re.test(nombre.trim())){
            spanNombre.innerHTML = ``;
        }else{
            spanNombre.innerHTML = `Nombre incorrecto`;

        }
        
    }

    let validarFecha = () =>{//no he tenido tiempo
        let fecha = inputFecha.value;
        const re = /^([0-2][0-9]|3[0-1])[/-](0[0-9]|1[0-2])[/-]\d{4}$/;
        if(re.test(fecha.trim())){
            spanFecha.innerHTML = ``;
        }else{
            spanFecha.innerHTML = `Fecha incorrecta`;
        }
    }


    let init = () => {
        inputNombre = document.getElementById("inputNombre");
        inputFecha = document.getElementById("inputFecha");
        inputDni = document.getElementById("inputDni");
        spanDni = document.getElementById("spanDni");
        spanNombre = document.getElementById("spanNombre");
        spanFecha = document.getElementById("spanFecha");

        inputDni.addEventListener("blur",validarDni);
        inputNombre.addEventListener("blur", validarNombre);
        inputFecha.addEventListener("blur", validarFecha);
        
    }

    document.addEventListener("DOMContentLoaded" , init);
 }