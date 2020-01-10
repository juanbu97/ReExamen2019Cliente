/**
 * Script que valida los datos introducidos en el formulario
 * @author Juan Antonio Bujalance García
 */



let Validar = {
    validarDni: function (dni) {
        const re = /^(\d{8})[ -]?([A-Za-z])$/;
        let cadena = "TRWAGMYFPDXBNJZSQVHLCKET";

        if (re.test(dni.trim())) {
            let [dniCompleto, numeroDni, letraDNI] = re.exec(dni.trim());
            if (letraDNI.toUpperCase() != cadena[numeroDni % 23].toUpperCase()) {
                return `El dni ${dniCompleto} no es correcto`;
            } else {
                return ``;
            }
        } else {
            return `Formato dni incorrecto`;
        }

    }, validarNombre: function (nombre) {
        const re = /^[A-Za-zñóáéíúÁÉÍÓÚÑ]+[ ]?[A-Za-zñóáéíúÁÉÍÓÚÑ]+[ ]?[A-Za-zñóáéíúÁÉÍÓÚÑ]+$/;
        if (re.test(nombre.trim())) {
            return ``;
        } else {
            return `Nombre incorrecto`;

        }

    }, validarFecha: function (fecha) {
        const re = /^(\d{2})([-/])(\d{2})\2(\d{4})$/;

        if (!re.test(fecha)) {
            return "Error.La fecha debe tener el siguiente formato: dd/mm/aaaa o dd-mm-aaaa";
        }
        else {

            let [, dia, , mes, anno] = re.exec(fecha);
            dia = Number(dia);
            mes = Number(mes);
            agno = Number(anno);
            let date = new Date(`${anno}/${mes}/${dia}`);

            if (date.getFullYear() === agno && date.getMonth() === mes - 1 && date.getDate() === dia) {
                return "";
            }
            else {
                return "La fecha introducida no es correcta.";
            }
        }
    }
};