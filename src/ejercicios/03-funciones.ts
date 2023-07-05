/*
    ===== Código de TypeScript =====
*/

// Funciones Básicas

function sumar (a, b) { // Si no se especifica los tipos de datos, TypeScript infiere en ellos otorgándoles un tipo
    // "any de manera implícita"
    return a + b;
}

const resultado = sumar ('Tobias', ' Maltby'); // Las función sumar no necesariamente es una suma de números, puede ser
// una suma o una concatenación. TypeScript va inferir en los tipos de datos siempre que sea posible, aunque es buena
// práctica especificar cada tipo de variable o resultado a retornar.

console.log (resultado); // Esto es JavaScript tradicional, pero vemos en todo lo que infiere TypeScript cuando
// no se especifican los tipos de datos.

// Bondades de un tipado estricto:
function sumar2 (a: number, b: number): number { 
    return a + b;
    // return (a + b).toString (); De esta manera retorna el valor de la suma pero como un string y no como un número.
    // Si se hace esto último, se debe eliminar el tipo number especificado como retorno al declarar la función.
}

const resultado2 = sumar2 (10, 20); // Ahora TypeScript nos exige asignar un argumento de tipo number. Además,
// automáticamente está infiriendo el tipo de retorno a partir de los argumentos de tipo number.

console.log (resultado2);

// No es un problema especificar el tipado de datos, al contrario, es una BUENA PRÁCTICA.

// Transformando la función utilizada anteriormente en una FUNCIÓN DE FLECHAS:

const sumarFlecha = (a: number, b: number): number => { // Si no se especifica los tipos de los argumentos, la función retorna un resultado
    // de tipo "any" (TypeScript no sabe de qué tipo es a y b). Si se especifica los tipos de los argumentos pero no
    // el tipo de retorno de manera explícita, TypeScript infiere en el tipo de retorno a partir de los argumentos.
    return a + b;
}

function multiplicar (numero: number, otroNumero?: number, base: number = 2): number { // Los argumentos escritos solamente
// con sus nombres son obligatorios. Si yo quiero definir un argumento como opcional, solo basta con agregar el signo
// de interrogación. Siempre se definen PRIMERO los argumentos obligatorios, en SEGUNDO lugar los opcionales y POR
// ÚLTIMO los argumentos que tienen algún valor por defecto. En este caso, si no se envía el valor de la base, por
// defecto será 2.
    return numero * base;
}

const resultado3 = multiplicar (5, 10, 3); // Cuando se "llama" a la función, si no se especifica el valor de cada
// argumento, por defecto son undefined. El orden de los valores es importante porque se corresponden con todos los
// argumentos que se establecieron en la función (sean obligatorios, opcionales o por defecto).
console.log (resultado3);

// Existen argumentos opcionales y obligatorios (según cómo los definimos).
// Siempre es bueno especificar el tipo de cada argumento y el tipo del retorno.

// Funciones con Objetos como Argumentos

// Si yo creo una función y no quiero retornar nada, entonces puedo especificar el tipo void o any. Aunque no se
// escriba explícitamente el return, en JavaScript siempre hay un retorno de undefined (aunque usualmente no hace
// falta especificarlo):
function noDevuelve (): void {
   //return undefined;    
}

console.log (noDevuelve());

interface PersonajeLOR {
    nombre: string;
    puntosDeVida: number;
    mostrarPuntosDeVida: () => void; // De esta manera digo que la propiedad es una función que no retorna nada. Así
    // defino dentro de la interfaz una función como propiedad de cierto objeto.
}

// La siguiente función recibe como argumento a un objeto:
function curar (personaje: PersonajeLOR, cuántoCurar: number): void {

    personaje.puntosDeVida += cuántoCurar; // De esta manera acumulamos. También se podría poner
    // personaje.puntosDeVida = personaje.puntosDeVida + cuántoCurar;
    //console.log (personaje);
}

// Defino nuevoPersonaje como una constante porque nunca va a cambiar su valor. Al ponerlo como constante, para 
// JavaScript es mucho más liviano.
const nuevoPersonaje: PersonajeLOR = { // Este "nuevoPersonaje" va a ser un objeto de tipo PersonajeLOR.
    nombre: 'Tobias',
    puntosDeVida: 50,
    mostrarPuntosDeVida () {
        console.log ('Puntos de Vida:', this.puntosDeVida);
    } // Como se puede ver, también es admisible declarar funciones dentro de un objeto.
}

// Ahora "curemos":
curar (nuevoPersonaje, 20); // Lo voy a curar con 20 puntosDeVida.

nuevoPersonaje.mostrarPuntosDeVida();

// Las interfaces son como clases "tontas", ya que la interfaz no sabe cómo funciona la función para la cual fue
// definida. Lo único que hace la interfaz es asegurarse de que el objeto tenga todas las propiedades necesarias.

// Las interfaces son objetos ligeros (no tienen interpretación en JavaScript), pero me sirven a mí para restringir
// cómo va a funcionar un objeto dentro de una función o de mi programa. Además, ayudan a la documentación y a 
// TypeScript en sus propiedades y métodos.