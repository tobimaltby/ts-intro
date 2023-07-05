/*
    ===== Código de TypeScript =====
*/

// Arreglos:

let habilidades = [1, 'Tobias', true, null, [], {}];
habilidades.push(1); // Push agrega nuevos elementos al final del arreglo y devuelve la longitud del nuevo arreglo.
console.log(habilidades);

let habilidades1 = ['Bash', 'Counter', 'Healing', 100];
// habilidades1.push (true); Esto da ERROR
habilidades1.push(34);
console.log(habilidades1);

let habilidades3: (boolean | string | number) [] = ['Fuerza', 'Destreza', 'Vida', 88, 99, 22];
let a: number = habilidades3.push(false, 2);
console.log(a, habilidades3);

let HABILIDADES: string [] = ['Bash', 'Counter', 'Healing']; // Usualmente vamos a querer que los areglos solo soporten
// un solo tipo de datos. Es buena práctica ponerles el tipo a las variables y arreglos al momento de declararlas.

// Objetos e interfaces:

// Para trabajar con objetos podemos definir lo que son las interfaces. Una interfaz no es más que una serie de llaves
// que aseguran que un objeto luzca como nosotros queremos:
interface PERSONAJE { // Mediante las interfaces puedo ponerle un tipo específico a los objetos.
    nombre: string;
    hp: number;
    habilidades: string [];
    puebloNatal?: string; // Para decir que pueblo natal es opcional usamos el signo de interrogación. Sin el signo de
    // interrogación, puebloNatal está obligado a definirse e inicializarse dentro del objeto personaje y no por fuera.
}

const personaje: PERSONAJE = { // Este personaje va a ser un objeto de tipo PERSONAJE.
    nombre: "Tobias",
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Resistencia'; // Para definir otra propiedad de personaje que necesitemos más adelante y la cual
// no ha sido definida al momento de inicializar personaje. Para que no de error aquí hay que definirla de manera opcional
// dentro de la interface (sino me dirá que puebloNatal no existe en el tipo PERSONAJE).

console.table(personaje); // Mostramos el objeto.

// Si comparamos este código en TS con su equivalente en JS (ver código bundle.js en el navegador web que lo traduce a
// la versión compatible de JS), vemos que no todo el código de TS aparece en la versión de JS (no hay nada en JS que sea
// igual a una interfaz; las interfaces equivalen a 0 líneas de código en JV; no existen en JS puesto que no hay
// tantas restricciones de tipado). 