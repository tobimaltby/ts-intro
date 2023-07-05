/*
    ===== Código de TypeScript =====
*/

// Clases Básicas:

// Las clases en TypeScript son muy parecidas a las clases de JavaScript. Una clase se define de la siguiente manera:

class HEROE { // Defino una clase y sus propiedades de manera general sin establecer explícitamente sus niveles de
    // acceso (por defecto son públicas cuando no se establece explícitamente el nivel de acceso)
    alterEgo: string;
    edad: number;
    nombreReal: string;

    imprimirNombre () { // Definición e implementación de un método (función) dentro de la clase, usando sus propiedades
        return this.alterEgo + ' ' + this.nombreReal; 
    }
}

interface PERSONAJE2 {
    alterEgo?: string;
    edad?: number;
    nombreReal?: string; // Defino las propiedades como opcionales para no tener que implementarlas luego cuando defina
    // el objeto de tipo PERSONAJE2

    imprimirNombre?: () => string; // Definición de un método (función) sin implementación dentro de la interfaz, sólo
    // puedo establecer que es una función que va a retornar un string. La defino opcional para no tener que
    // implementarla luego cuando defina el objeto de tipo PERSONAJE2
}

const ironman = new HEROE (); // Creo una instancia de la clase
const superman: PERSONAJE2 = {};

console.log (ironman); 

// Si accedemos al código de JS vemos que se define la clase pero sin sus propiedades ni métodos.
// Una clase luce como interfaz si comparamos ambos códigos de TS. La diferencia se aprecia en código de JS, donde 
// las clases aparecen pero las interfaces no. Las interfaces no existen en JS.

// En TS las clases lucen igual que las interfaces, la diferencia principal es que las clases me sirven para crear
// instancias. Además, en una interfaz yo no puedo definir como quiero que funcione o algún método. En una clase se
// pueden crear métodos (funciones) e implementarlos dentro de la misma clase, utilizando las propiedades que fueron 
// definidas (VER EJEMPLO MOSTRADO ARRIBA). En una interfaz esto último no puedo hacer (por eso se dice que las
// interfaces son clases tontas), a lo sumo puedo definir una función y establecer su tipo de retorno, pero no puedo
// implementarla dentro de la interfaz (solo puedo hacer una definición de los tipos).

// Dentro de cada clase defino sus propiedades, las cuales SI QUISIERA puedo definirlas de acuerdo a los distintos 
// niveles de acceso (esta es una ventaja de las clases).

// La diferencia entre cada uno de los distintos niveles de acceso es el alcance o visibilidad de los mismos:
// Private: la propiedad sólo será visible dentro de la clase en cual fue definida (usando un constructor).
// Public: Por fuera de la clase puedo acceder a la propiedad creando una instancia de la clase.
// Static: Por fuera de la clase puedo acceder a la propiedad sin crear una instancia de la clase.

// Por ejemplo:

/* 
class HEROE {
    private alterEgo: string;
    public edad: number;
    static nombreReal: string;

    constructor () { // Creo un constructor dentro de la clase para acceder a la propiedad private
        this.alterEgo; // private
    }

}

const ironman = new HEROE (); // Creo una instancia de la clase y luego puedo acceder a la propiedad public
ironman.edad; // public

HEROE.nombreReal // static
 */