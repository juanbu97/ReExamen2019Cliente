/**
 * Script que abre una nueva ventana 
 * @author Juan Antonio Bujalance García
 */
{
    let init = () =>{
        document.getElementById("enlace").addEventListener("click",() =>{
            
        let ventana1 = window.document.open("","","");
        ventana1.document.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Bujalance García Juan Antonio</title>
            <script src="JS/detodounpoco.js"></script>
        </head>
        <body>
            <noscript>Esta página funciona con JS, actívelo para su correcto funcionamiento</noscript>
            <header>
                <h1>Bujalance García Juan Antonio</h1>
            </header>
            <main>
                <button id=botonInformar >Informa</button>
                <button id=botonSalir >Salir</button>
                <p id=elementoPDia></p>
                <p id=elementoPHora></p>
            </main>
        </body>
        </html>`);
        ventana1.document.close();
        });

        document.getElementsByTagName("button")[0].addEventListener("click", () =>{
            window.open("empleadoIndex.html");
        });
    }

    document.addEventListener("DOMContentLoaded", init);
}