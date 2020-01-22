/**
 * Script que valida los datos introducidos en el formulario
 * @author Juan Antonio Bujalance García
 */



let Validar = {
    validarDni: function (dni) {
        const re = /^(\d{8})[ -]?([A-Za-z])$/;
        let cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
        dni = dni.trim();

        if (!re.test(dni))
            return `Formato dni incorrecto`;


        let [dniCompleto, numeroDni, letraDNI] = re.exec(dni);

        if (letraDNI.toUpperCase() !== cadena[numeroDni % 23].toUpperCase())
            return `El dni ${dniCompleto} no es correcto`;
        return ``;

    },

    validarNombre: function (nombre) {
        const re = /^[A-Za-zñóáéíúÁÉÍÓÚÑ]+[ ]?[A-Za-zñóáéíúÁÉÍÓÚÑ]+[ ]?[A-Za-zñóáéíúÁÉÍÓÚÑ]+$/;
        nombre = nombre.trim();
        if (!re.test(nombre))
            return `Nombre incorrecto`;
        return ``;


    }, validarFecha: function (fecha) {
        const re = /^(\d{2})([-/])(\d{2})\2(\d{4})$/;
        fecha = fecha.trim();

        if (!re.test(fecha))
            return "Error.La fecha debe tener el siguiente formato: dd/mm/aaaa o dd-mm-aaaa";

        let [, dia, , mes, anno] = re.exec(fecha);
        dia = Number(dia);
        mes = Number(mes);
        anno = Number(anno);
        let date = new Date(`${anno}/${mes}/${dia}`);

        if (date.getFullYear() !== anno || date.getMonth() !== mes - 1 || date.getDate() !== dia)
            return "La fecha introducida no es correcta.";
        return "";

    }
};