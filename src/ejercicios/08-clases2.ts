/*
    ===== Código de TypeScript =====
*/

// Constructor de una Clase - Extender una Clase:

class PersonaNormal { // Creamos otra clase para poder exterder 

    constructor (
        public nombre: string,
        public direccion: string
    ) {}

}

class HEROE1 extends PersonaNormal { // Creamos una primera clase y vamos a extender ciertas propiedades de otra (por 
// ejemplo de la definida arriba). Eso de extender una clase no es más que añadir ciertas funcionalidades o propiedades
// de otra clase existente. Para ello se utiliza la palabra reservada "extends" => En nuestro ejemplo HEROE1 extiende de
// PersonaNormal.
  
    constructor (
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
        ) { 
        super (nombreReal, 'New York, USA'); // La llamada al super significa llamar al constructor de PersonaNormal. 
        // Puede ser que el constructor de PersonaNormal haga algún procedimiento, que establezca variables, que 
        // inicialice algún valor, etc.; entonces la idea es que también llamemos al constructor de la otra clase.
        
        console.log ('Hola Tobi');
    }

}

// El constructor es una función que se va a llamar cuando creo una instancia de la clase. El constructor es un punto
// interesante para poder inicializar las propiedades de mi clase. Puedo directamente crear las propiedades de la clase
// en el constructor; las defino como argumentos del constructor estableciendo sus niveles de acceso y tipo.
    
// Al establecer el nivel de acceso de la propiedad como un argumento del constructor, le estoy diciendo a TypeScript
// que cree una propiedad en la clase que se llame por ejemplo "alterEgo" de tipo string y la vez, el primer argumento
// que se envíe cuando se cree una instancia de la clase, se establezca a la propiedad de la clase creada en primer
// lugar.

const ironman1 = new HEROE1 ('Ironman', 45, 'Tony'); // Creo una instancia de la clase. Los parentesis de esta instancia
// hacen referencia a los parentesis del constructor, es decir es aquí cuando se llama a la función constructor definida
// anteriormente. Es por esto que primero se imprime 'Hola Tobi' (o sea primero se ejecuta mi constructor) y luego se
// imprime el heroe, es decir ironman1. 

console.log (ironman1);

// Es muy común que en las clases cada propiedad tenga un nivel de acceso especificado explícitamente. Los niveles de
// acceso son a nivel de TypeScript puesto que en JavaScript tenemos acceso a todas las propiedades de cualquier manera
// (no existen niveles de acceso).

// Cuando no se tiene un nivel de acceso establecido explícitamente, por defecto la propiedad tiene acceso público.

// Las interfaces también se pueden extender.

