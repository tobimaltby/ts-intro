/*
    ===== Código de TypeScript =====
*/

// Genéricos:

function queTipoSoy <T> (argumento: T) { // Yo puedo decir, a la hora de implementar esta función, que puede recibir
// algo de tipo T (se usa de manera estándar) para especificar que es un genérico, es decir que puede ser de cualquier
// tipo, del tipo que yo le mande. En pocas palabras, soy del tipo que yo le esté especificando y el argumento va a ser
// de este tipo.
    return argumento;
}

let soyString = queTipoSoy ('Hola Mundo'); // La variable "soyString" es de tipo any cuando no se especifica el tipo de
// variable que retorna la función. Utilizando el concepto de genérico "soyString" es de tipo string porque lo que estoy
// mandando por medio de la función es un string.
let soyNumero = queTipoSoy (100); // Si yo necesito que "soyNumero" sea de tipo number,  debo utilizar el concepto de
// genéricos. La variable "soyNumero" es de tipo number porque lo que estoy mandando por medio de la función es un 
// number.
let soyArreglo = queTipoSoy ( [1, 2, 3, 4, 5] ); 
let soyExplicito = queTipoSoy <number> (100); // La simbología <T> significa que es de tipo genérico y un tipo genérico
// puede ser cualquier tipo de dato que especifiquemos a la hora de llamar la función, ya sea de manera implícita como
// en los ejemplos de arriba, o de manera explícita como en esta línea de código.

// Eventualmente necesitaremos trabajar con datos que pueden variar dependiendo del tipo que yo le voy a especificar
// a la hora de hacer la llamada. Yo podría hacer alguna petición y mutar la respuesta en otra cosa, y esa mutación
// va a cambiar el tipo de dato, pero puede que sea la misma función.

// Hay muchos usos para los genéricos, uno de los principales es poder decir qué tipo de dato o qué información va a 
// retornar alguna función o qué tipo de dato va a obtenerse.

