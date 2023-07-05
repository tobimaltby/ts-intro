/*
    ===== Código de TypeScript =====
*/

// Encadenamiento Opcional:

// El signo de interrogación es bastante flexible y dependiendo de dónde se use signigica varias cosas (en TypeScript).

// Definimos una interface para luego implementar objetos de este tipo:

interface PASAJERO {
    nombre: string;
    hijos?: string []; // No todos los "Pasajeros" tienen "hijos", por lo tanto esta propiedad es opcional. El signo de
    // interrogación utilizado de esta forma significa que esta propiedad es opcional.
}

// Creamos los Pasajeros (objetos):

const pasajero1: PASAJERO = {
    nombre: 'Tobias', // Este pasajero no tienen "hijos" y como la propiedad es opcional no hay ningún tipo de error.
}

const pasajero2: PASAJERO = {
    nombre: 'Natalia',
    hijos: ['Emilia', 'otroBebé']
}

function imprimeHijos (pasajero: PASAJERO): void {
    const cuantosHijos = pasajero.hijos?.length || 0; // Con esta línea de código obtengo la longuitud de mi arreglo, es
    // decir la cantidad de elementos que tiene (en este caso el número de "hijos"). Cuando no se tiene "hijos", el valor
    // de la variable es undefined y por ello encadenamos el valor 0. Esta línea de código lo que hace es: si existen 
    // "hijos" dime cuántos hay, sino es undefined y por ello gana el 0. En pocas palabras, se evalúa si tenemos algún
    // valor en esa variable opcional y se continúa con lo siguiente, de lo contrario tenemos undefined. 
    console.log (cuantosHijos);
}

imprimeHijos (pasajero2); // Utilizando el "pasajero 2" (que si tiene "hijos") se imprime el número 2.

imprimeHijos (pasajero1); // Al imprimir el "pasajero 1" se debería obtener un 0 pero nos da error porque no se puede 
// leer la propiedad length de una variable indefinida ("pasajero 1" no tiene "hijos", es decir la variable "hijos" en el 
// "pasajero 1" no está definida). Entonces, lo que se hace es poner un signo de interrogación dentro de la función 
// donde se intenta acceder a los "hijos" para evaluar si es que existen o no. Si la variable "hijos" tiene 
// algún valor se hará lo que sigue (length). Como "hijos" no está definida en este caso, arroja undefined. Para lograr
// que aparezca un 0 en el caso de que el "pasajero" no tenga "hijos", encadenamos mediante el operador lógico OR (||)
// el valor 0.


