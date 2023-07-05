/*
    ===== Código de TypeScript =====
*/

// Tipos Básicos (documentación oficial)

// Boolean (booleano)
let estáHecho: boolean = false;
console.log(estáHecho);

// Number (número)
let decimal: number = 6;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;
// let big: bigint = 10n;
const bigintFromNumber = BigInt(10);
console.log(decimal, hexadecimal, binario, octal, bigintFromNumber);

// String (cadena de caracteres)
let color: string = "blue";
color = 'red';
console.log(color);

let nombreCompleto: string = `Tobias Maltby`;
let edad: number = 34;
let oración: string = `Hola, mi nombre es ${nombreCompleto}. Cumpliré ${edad+1} años el próximo año.`;
// Esto equivale a declarar sentence así:
let oración2: string = "Hola, mi nombre es " + nombreCompleto + ".\n" + "Cumpliré " + (edad + 1) + " años el próximo año.";
console.log(oración, oración2);

// Array (arreglos)
let lista: number[] = [1, 2, 3];
// Esto equivale a declarar así:
let lista2: Array<number> = [1, 2, 3]; // Interface
console.log(lista, lista2);

// Tuple (secuencia ordenada y finita de valores)
let x: [string, number]; // Declarar un tipo de tuple
x = ["HELLO", 11]; // Inicializarla
// x = [10, 'hello']; Inicialización incorrecta (error)
console.log(x);

// Al acceder a un elemento con un índice conocido, se recupera el tipo correcto:
console.log (x[0].substring(2, 4));
// substring devuelve la subcadena en la ubicación especificada dentro de un objeto String.
// console.log (x[1].substring(1)); La propiedad 'subcadena' no existe en el tipo 'número' (error)

// Acceder a un elemento fuera del conjunto de índices conocidos falla con un error:
// x[3] = 'world'; El tipo de tuple '[cadena, número]' de longitud '2' no tiene ningún elemento en el índice '3'.
console.log(x[1].toString(16));
// toString devuelve una representación de cadena de un objeto.
// Especifica una base para convertir valores numéricos en cadenas. Solo se usa para números.
// En este caso sería el número 11 representado en base 16 (hexadecimal).

// Enum (enumeración)
// Una enumeración es una forma de dar nombres más amigables a conjuntos de valores numéricos.
enum Color {
  Rojo,
  Verde,
  Azul,
}
let c: Color = Color.Verde;
console.log(c);

// De forma predeterminada, las enumeraciones comienzan a numerar a sus miembros a partir de 0. Se puede cambiar esto
// configurando de forma manual el valor de uno de sus mienmbros:
enum Color {
  Negro = 2,
  Blanco,
  Gris,
}
let c1: Color = Color.Blanco;
console.log(c1);

// O incluso se puede establecer manualmente todos los valores en la enumeración:
enum Color {
  Amarillo = 1,
  Naranja = 3,
  Violeta = 6,
}
let c2: Color = Color.Violeta;
console.log(c2);

// Una característica útil de las enumeraciones es que también se puede pasar de un valor numérico al nombre de
// ese valor en la enumeración. Por ejemplo, si tuviéramos el valor 2 pero no estámos seguros a qué valor se asignó
// en la enumeración, podemos buscar el nombre correspondiente:
enum Color {
  Celeste = 1,
  Rosa,
  Fucsia,
}

let nombreDelColor: string = Color[2];
console.log(nombreDelColor); // 'Rosa'

// Unknown (desconocido)
// Es posible necesitar describir el tipo de variables que no conocemos cuando estamos escribiendo una aplicación.
// Estos valores pueden provenir de contenido dinámico, por ejemplo, del usuario, o podemos querer aceptar
// intencionalmente todos los valores en nuestra API. En estos casos, se quiere proporcionar un tipo que le diga al 
// compilador y a los futuros lectores que esta variable podría ser cualquier cosa, así que le damos el tipo unknown:
let noEstoySeguro: unknown = 4;
noEstoySeguro = "tal vez una cadena en su lugar";
noEstoySeguro = false; // OK, definitivamente un booleano.

// Si tiene una variable con un tipo desconocido, puede limitarla a algo más específico haciendo comprobaciones de typeof,
// comprobaciones de comparación o protecciones de tipo más avanzadas que se analizarán luego:
const talVez: unknown = 0;
// 'talVez' podría ser una cadena, un objeto, booleano, indefinido u otros tipos.
// const unNúmero: number = talVez;
// El tipo 'desconocido' no se puede asignar al tipo 'número'.
 
if (talVez === true) {
  // TypeScript sabe que "talVez" es un booleano ahora.
  const unBooleano: boolean = talVez;
  // Entonces, no puede ser una cadena.
  // const unString: string = talVez;
  // El tipo 'booleano' no se puede asignar al tipo 'cadena'.
}
 
if (typeof talVez === "string") { // El operador typeof devuelve una cadena que indica el tipo del operando sin evaluarlo.
  // El operando (en este caso "talVez") es la cadena, variable, palabra clave u objeto para el que se devolverá su tipo.
  // TypeScript sabe que "talVez" es una cadena
  const unString: string = talVez;
  // Entonces, no puede ser un booleano
  // const unBooleano: boolean = talVez;
  // El tipo 'cadena' no se puede asignar al tipo 'booleano'.
}

// Any (cualquier)
// En algunas situaciones, no toda la información del tipo está disponible o su declaración requiere una cantidad
// de esfuerzo inapropiada. Esto puede ocurrir para valores de código que se ha escrito sin TypeScript o una biblioteca
// de terceros. En estos casos, es posible que deseemos cancelar la verificación de tipos. Para hacerlo, etiquetamos estos
// valores con el tipo any:
function obtenerValor (key: string): any {
  console.log(key+1);
}
// OK, el valor de retorno de 'obtenerValor' no está marcado:
const str: string = obtenerValor ("Mi cadena ");

// El tipo any es una forma muy poderosa de trabajar con JavaScript existente, lo que le permite habilitar y deshabilitar
// gradualmente la verificación de tipos durante la compilación.
// A diferencia de unknown (desconocido), las variables tipo any permiten acceder a propiedades arbitrarias, incluso a 
// las que no existen. Estas propiedades incluyen funciones y TypeScript no verificará su existencia o tipo:
// let malEscrito: any = 4;
// Ok, podría existir en tiempo de ejecución:
// malEscrito.siExistiera();
// Ok, existe (pero el compilador no verifica):
// malEscrito.Existe();

let estrictamenteEscrito: unknown = 4;
// estrictamenteEscrito.Existe(); ERROR (La propiedad 'Existe' no existe en el tipo 'unknown').

// EL tipo any continuará propagándose a través de sus objetos:
let malEscrito: any = {};
//let d = malEscrito.a.b.c.d; // let d: any
// Después de todo, recuerde que toda comodidad de usar any viene a costa de perder seguridad del tipo. La seguridad de
// tipos es una de las principales motivaciones para usar TypeScript y debe intentar evitar el uso de any cuando no sea
// necesario.

// Void (vacío)
// Es un poco como lo contrario de any: la ausencia de tener cualquier tipo en absoluto. Comúnmente puede ver esto como
// el tipo de devolución de funciones que no devuelven un valor:
function AdvertirAlUsuario(): void {
  console.log("Este es mi mensaje de advertencia");
}
let advertencia: void = AdvertirAlUsuario();

// Declarar variables de tipo void no es útil porque solo puede asignar null o undefined a ellas:
let inutilizable: void = undefined;
// Ok si no se dan controles nulos estrictos:
inutilizable = null;
console.log(inutilizable);

// Null y Undefined (nulo e indefinido)
// En TypeScript, tanto undefined como null en realidad tienen sus tipos llamados undefined y null respectivamente. Al
// igual que void, no son extremadamente útiles por sí solos. No hay mucho más que podamos asignar a estas variables:
let u: undefined = undefined;
let n: null = null;
let m: number = null;

// De forma predeterminada, null y undefined son subtipos de todos los demás tipos. Esto significa que puede asignar 
// null y undefined a algo como number.
// Sin embargo, cuando se usa el indicador strictNullChecks (controles nulos estrictos), null y undefined solo se pueden
// asignar a unknown, any y sus respectivos tipos (la única excepción es que undefined también se puede asignar a void).
// Esto ayuda a evitar muchos errores comunes. En los casos en lo que desee pasar un string, un valor null o undefined,
// puede utilizar el tipo de unión string | null | undefined.

// Never (nunca)
// El tipo never representa el tipo de valores que nunca ocurrer. Por ejemplo, never es el tipo de retorno para una
// expresión de función o una expresión de función de flecha que siempre arroja un excepción o una que nunca regresa. Las
// variables también adquieren el tipo never cuando están limitadas por cualquier protección de tipo que nunca puede ser 
// verdadera.
// El tipo never es un subtipo de, y asignable a, cada tipo; sin embargo, ningún tipo es un subtipo o asignable a never
// (excepto never a sí mismo). Incluso any no es asignable a never.
// Algunos ejemplos de funciones que regresan never:

// La función que retorna never no debe tener un punto final alcanzable:
function error(mensaje: string): never {
  throw new Error (mensaje);
  }
//error("ERROR TOBIAS");

// El tipo de retorno inferido es never:
function fallar(): never {
  return error ("Algo falló");
}
//fallar();

// La función que retorna never no debe tener un punto final alcanzable:
function bucleInfinito(): never {
  while (true) {}
}
//bucleInfinito();

// Object (objeto)
// Object es un tipo que representa el tipo no primitivo, es decir, cualquier cosa que no sea number, string, boolean,
// bigint, symbol, null o undefined.
// Con el tipo object, las API similares object.crear se pueden representar mejor. Por ejemplo:
function crear (o: object | null): void {
  console.log(o);
};
crear ({prop: 0});
crear (null);
crear (undefined); // Con el indicador strictNullChecks habilitado (controles nulos estrictos), undefined no es un
// subtipo de null.

// crear (42); No se puede asignar un argumento de tipo "number" al parámetro de tipo "object".
// crear ("string"); No se puede asignar un argumento de tipo "string" al parámetro de tipo "object".
// crear (false); No se puede asignar un argumento de tipo "boolean" al parámetro de tipo "object".

// Generalmente, no necesitaría usar esto.

// Type assertions (aserciones de tipo)
// A veces terminará en una situación en la que sabrá más sobre un valor que TypeScript. Por lo general, esto sucederá 
// cuando sepa que el tipo de alguna entidad podría ser más específico que su tipo actual.
// Las type assercions (aserciones de tipo) son un forma de decirle al compilador "confía en mí, se lo que estoy
// haciendo". Una aserción de tipo es como una conversión de tipo en otros idiomas, pero no realiza una verificación
// o reestructuración espacial de los datos. No tiene impacto en el tiempo de ejecución y es utilizado únicamente por
// el compilador. TypeScript asume que usted, el programador, ha realizado las comprobaciones especiales que necesita.
// Las aserciones de tipo tienen 2 formas. Una es la sintaxis as:
let algúnValor: unknown = 'esto es un string';
let longitudDeLaCadena: number = (algúnValor as string).length;
console.log(longitudDeLaCadena); // Cantidad de caracteres de la cadena.

// La otra versión es la sintaxis de "paréntesis angular":
let algúnOtroValor: unknown = 'esto es otro string';
let longitudDeLaCadena2: number = (<string>algúnOtroValor).length;
console.log(longitudDeLaCadena2); // Cantidad de caracteres de la cadena.

// Las 2 muestras son equivalentes. Usar una sobre otra es principalmente una elección a preferencia; sim embargo,
// cuando se usa TypeScript con JSX, solo se permiten aserciones de estilo "as".

// Una nota sobre let:
// Es posible que haya notado que, hasta ahora, hemos estado usando la palabra clave let en lugar de la palabra clave
// var de JavaScript. La palabra clave let es en realidad una construcción de JavaScript más nueva que TypeScript pone 
// a disposición. Let y const solucionan muchos de los poblemas con var.


