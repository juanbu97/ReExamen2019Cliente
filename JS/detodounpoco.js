/**
 * Scrpit para la nueva ventana detodounpoco
 * @author Juan Antonio Bujalance García
 */

{
    let elementoPDia;
    let elementoPHora;

    let diaSemana = (dia) => {
        switch (dia) {
            case 1:
                msg = "Lunes";
                break;
            case 2:
                msg = "Martes";
                break;
            case 3:
                msg = "Miércoles";
                break;
            case 4:
                msg = "Jueves";
                break;
            case 5:
                msg = "Viernes";
                break;
            case 6:
                msg = "Sábado";
                break;
            case 7:
                msg = "Domingo";
                break;
            default:
                break;
        }
        return msg;
    }
    let salir = () => {
        window.close();
    }

    let informar = () => {
        let diaActual = new Date();
        let horaActual;
        let minutos;


        elementoPDia.innerHTML = "El día de hoy es "+diaSemana(diaActual.getDay());


        horaActual = diaActual.getHours();
        minutos = diaActual.getMinutes();

        if(minutos < 10){
            minutos = "0"+minutos;
        }

        if(horaActual < 10){
            horaActual = "0"+horaActual;
        }


        if(horaActual < 18 & horaActual > 8){
            elementoPHora.innerHTML =`Son las ${horaActual}:${minutos}. Pronto llegan las vacaciones. Aguanta`;
        }else if(horaActual >= 18){
            elementoPHora.innerHTML = `Son las ${horaActual}:${minutos}. Ya es hora de que dejes de trabajar. Hay que conciliar la vida
                laboral con la familiar`;
        }else if (horaActual <= 8) {
            elementoPHora.innerHTML = `Son las ${horaActual}:${minutos}. Ya es hora de que comiences a trabajar. Hay que levantar el
            país.`;
        }
        



    }


    let init = () => {
        elementoPDia = document.getElementById("elementoPDia");
        elementoPHora = document.getElementById("elementoPHora");

        document.getElementById("botonInformar").addEventListener("click", informar);
        document.getElementById("botonSalir").addEventListener("click", salir);
    }


    document.addEventListener("DOMContentLoaded", init);
}