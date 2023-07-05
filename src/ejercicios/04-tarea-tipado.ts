/*
    ===== Código de TypeScript =====
*/

// Tarea sobre Objetos e Interfaces

// Creamos la interfaz correspondiente al objeto definido:
interface SUPERHEROE {
    nombre: string;
    edad: number;
    direccion: Direccion; // Como la propiedad dirección corresponde a un objeto anidado, se recomienda crear otra
    // interfaz con todas las propiedades del objeto direccion.
    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string;
    numero: number;
    ciudad: string;
    pais: string;

}

// Se pueden crear tantas interfaces como objetos anidados tengamos. Es importante recordar que todo código
// correspondiente a interfaces significa 0 líneas de código en JS. 

// Defino una constante que va a ser igual a un objeto con las siguientes propiedades:
const superHeroe: SUPERHEROE = {
    nombre: 'Spiderman',
    edad: 34,
    direccion: { // Declaro otro objeto anidado dentro del objeto superHeroe.
        calle: 'La Rioja',
        numero: 459,
        ciudad: 'Paraná',
        pais: 'Argentina'

    },
    mostrarDireccion () {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }

}

const direccion = superHeroe.mostrarDireccion ();
console.log (direccion);

// La ventaja de hacer todo esto es que cuando se quiere utilizar el objeto "superHeroe", luego de poner un "punto", TS
// nos facilita todos las funciones y métodos correspondientes a cada tipo de propiedad definida.
