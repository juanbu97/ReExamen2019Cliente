/**
 * Script que valida los datos introducidos en el formulario
 * @author Juan Antonio Bujalance García
 */

     
    
    let Validar = {
        validarDni: function(dni){
        const re = /^(\d{8})[ -]?([A-Za-z])$/;
        let arrayDni = re.exec(dni.trim());
        let cadena ="TRWAGMYFPDXBNJZSQVHLCKET";

        if(re.test(dni.trim())){
            if(arrayDni[2].toUpperCase() != cadena[arrayDni[1]%23].toUpperCase()){
                return `El dni ${arrayDni[0]} no es correcto`;
            }else{
                return ``;
            }
        }else{
            return `Formato dni incorrecto`;
        }
        
    }, validarNombre:function(nombre){
        const re = /^[A-Za-zñóáéíúÁÉÍÓÚÑ]+[ ]?[A-Za-zñóáéíúÁÉÍÓÚÑ]+[ ]?[A-Za-zñóáéíúÁÉÍÓÚÑ]+$/;
        if(re.test(nombre.trim())){
            return ``;
        }else{
            return `Nombre incorrecto`;

        }
        
    }, validarFecha:function(fecha){
        const re = /^([0-2][0-9]|3[0-1])[/-](0[0-9]|1[0-2])[/-]\d{4}$/;
        if(re.test(fecha.trim())){
            return spanFecha.innerHTML = ``;
        }else{
            return spanFecha.innerHTML = `Fecha incorecta`;
        }
    }
};