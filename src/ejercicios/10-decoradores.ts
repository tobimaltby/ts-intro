/*
    ===== Código de TypeScript =====
*/

// Decoradores de Clases:

// Lo importante de esto no es saber cómo se crean los decoradores, porque hay muchos tipos de ellos. En el material
// adjunto (archivo .html) de la documentación ofiacial sobre decoradores, pueden verse los distintos tipos y como se
// crean cada uno de ellos.

// Los decoradores son características propias de TypeScript, JavaScript no los conoce. Sirven para cambiar las clases
// en el momento que son definidas, es decir, sirven para extender internamente las funcionalidades que implementemos.
// Un decorador no es más que una función.


function classDecorator <T extends { new (...args: any[]): {} }> (constructor: T) {
    return class extends constructor { // Esta función retorna un nuevo constructor que le va a expandir ciertas
      // propiedades:
      nuevaPropiedad = "Nueva Propiedad";
      hola = "anular"
    };
  }

@classDecorator // De esta manera llamamos al decorador en este ejemplo en particular, ya que hay maneras distintas de
// llamar a los decoradores según su tipo.
class MiSuperClase { // Creamos una clase sencilla
    public miPropiedad: string = 'ABC123'; // Esta clase va a tener una propiedad pública de tipo string e inicializada

    imprimir (){ // Esta clase va a tener un método simple
        console.log ('Hola Mundo');
      }
}

console.log (MiSuperClase); // Cuando imprimimos en consola nuestra clase, vemos que se le añaden las nuevas propiedades
// gracias al decorador PERO no vemos "miPropiedad" ni el método "imprimir", esto último es porque todavía no está 
// establecido, aparecen recién cuando se crea una instancia de la clase. El decorador trabaja a un nivel antes que la
// creación de una nueva instancia de la clase.

// Los decoradores sirven para expandir o añadir funcionalidades. Un decorador no es más que una función que expande su
// clase añadiéndole funcionalidades especiales.

const miClase = new MiSuperClase (); // Creo una instancia de la clase

console.log (miClase.miPropiedad);

miClase.imprimir (); 


