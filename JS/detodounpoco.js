/**
 * Scrpit para la nueva ventana detodounpoco
 * @author Juan Antonio Bujalance García
 */

{
    let botonInformar;
    let botonSalir;
    let elementoPDia;
    let elementoPHora;

    let diaSemana = (dia) => {
        let msg;
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


        elementoPDia.innerHTML = "El día de hoy es "+diaSemana(diaActual.getDay());


        horaActual = diaActual.getHours();

        if(horaActual < 18 & horaActual > 8){
            elementoPHora.innerHTML =`Son las ${diaActual.getHours()}:${diaActual.getMinutes()}. Pronto llegan las vacaciones. Aguanta`;
        }else if(horaActual > 18){
            elementoPHora.innerHTML = `Son las ${diaActual.getHours()}:${diaActual.getMinutes()}. Ya es hora de que dejes de trabajar. Hay que conciliar la vida
                laboral con la familiar`;
        }else if (horaActual < 8) {
            elementoPHora.innerHTML = `Son las ${diaActual.getHours()}:${diaActual.getMinutes()}. Ya es hora de que comiences a trabajar. Hay que levantar el
            país.`;
        }
        



    }


    let init = () => {

        elementoPDia = document.getElementById("elementoPDia");
        elementoPHora = document.getElementById("elementoPHora");
        

        botonInformar = document.getElementById("botonInformar");
        botonInformar.addEventListener("click", informar);

        botonSalir = document.getElementById("botonSalir");
        botonSalir.addEventListener("click", salir);
    }


    document.addEventListener("DOMContentLoaded", init);
}