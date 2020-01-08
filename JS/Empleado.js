/**
 * Scrpit que contiene el objeto Empleado
 * @author Juan Antonio Bujalance García
 */

function Empleado(nombre, fecha, dni) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.dni = dni;
}

Empleado.prototype.getNombre = function(){
    return this.nombre;
}

Empleado.prototype.getFecha = function(){
    return this.fecha;
}

Empleado.prototype.getDni = function(){
    return this.dni;
}

Empleado.prototype.crearVentana = function () {
    let ventana = window.open("", "", "");
    ventana.document.write(`<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Bujalance García Juan Antonio</title>
            
        </head>
        <body>
            <noscript>Esta página funciona con JS, actívelo para su correcto funcionamiento</noscript>
            <header>
              <h1>Bujalance García Juan Antonio</h1>
            </header>
            <main>
                <h3>Nombre: ${this.getNombre()}</h3>
                <h3>Dni: ${this.getDni()}</h3>
                <h3>Fecha: ${this.getFecha()}</h3>
            </main>
        </body>
        </html>`
    );
    ventana.document.close();
}