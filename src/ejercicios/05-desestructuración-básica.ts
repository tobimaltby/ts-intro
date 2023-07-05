/*
    ===== Código de TypeScript =====
*/

// Desestructuración de Objetos:

// El concepto de desestructuración de objetos habilita la extracción de propiedades y métodos de algún objeto de una
// manera muy fácil.

// Primero definimos un objeto con su respectiva interfaz como ejemplo. Es recomendable empezar definiendo la interfaz
// para tener una idea clara de cómo va a lucir nuestro objeto.

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles

}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Otro día más',
    detalles: {
        autor: 'Ke personajes ft La contra',
        anio: 2021
    }
}

// La desestructuración de este objeto lo utilizamos por ejemplo cuando queremos imprimir por consola varias de sus
// propiedades de manera más fácil. Por ejemplo, si no queremos escribir tantas veces "reproductor.propiedad" (siendo
// un código más difícil de leer), utilizamos la desestructuración para extraer directamente las propiedades que nos
// interesan de nuestro objeto. Para ello, voy a crear un grupo de constantes o todo lo que necesito extraer de la
// siguiente manera:

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles; // Hacemos otra desestructuración de los "detalles" para extraer el "autor", puesto que
// "detalles" es un objeto anidado dentro de "reproductor".

// La desestructuración de objetos, nos permite crear constantes basadas en las propiedades que vienen en un objeto.

console.log ('El volumen actual es de: ', volumen); // Utilizando la desestructuración extraemos las propiedades de una
// manera limpia.
console.log ('El volumen actual es de: ', segundo);
console.log ('El volumen actual es de: ', cancion);
console.log ('El volumen actual es de: ', autor);

// console.log ('El volumen actual es de: ', reproductor.volumen);
// console.log ('El volumen actual es de: ', reproductor.segundo);
// console.log ('El volumen actual es de: ', reproductor.cancion);
// console.log ('El volumen actual es de: ', reproductor.detalles.autor);

// Desestructuración de Arreglos:

// La desestructuración de arreglos es literalmente lo mismo que la desestructuración de objetos. Consiste en extraer
// de un arreglo sus diferentes valores y crear variables o constantes basadas en esos valores.

// Defino un arreglo de string: 
const dragonBallZ: string [] = ['Goku', 'Vegeta', 'Gohan'];

// La desestructuración del arreglo lo hago creando variables basadas en cada uno de los valores del arreglo definido.
// Entonces:
const [ p1, p2, p3 ] = dragonBallZ;

// En la desestructuración de arreglos las variables creadas no tienen relación por nombre (como sucede con los
// objetos), sino que la relación es POSICIONAL (la posición de las variables es lo importante). En la desestructuración
// de objetos no importa la posición en que defina las variables, se hace de acuerdo al nombre de cada propiedad del
// objeto.

// Para imprimir por consola los 3 personajes que contiene dragonBallZ utilizando la desestructuración, lo que hago es:
console.log ('El personaje 1 es: ', p1);
console.log ('El personaje 2 es: ', p2);
console.log ('El personaje 3 es: ', p3);

// console.log ('El personaje 1 es: ', dragonBallZ [0]);
// console.log ('El personaje 2 es: ', dragonBallZ [1]);
// console.log ('El personaje 3 es: ', dragonBallZ [2]);

// En caso de necesitar solo un "personaje", por ejemplo el personaje de la posición 3 (no me interesa crear las
// constantes "p1" y "p2"), lo que hago es lo siguiente:
// const [ , , p3 ] = dragonBallZ; (simplemente no debo crear las variables, dejo los espacios vacíos con las comas,
// respetando la cantidad y posición de cada elemento).

// Si tenemos un arreglo dentro de otro arreglo, resulta conveniente hacer otra desestructuración adicional similar
// a como se trabajó anteriormente para un objeto dentro de otro objeto.

// Notar que para desestructurar objetos se usan llaves y para desestructurar arreglos se usan corchetes.
