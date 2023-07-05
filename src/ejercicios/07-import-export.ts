/*
    ===== Código de TypeScript =====
*/

import { calculaISV, PRODUCTO } from "./06-desestructuración-función";

// Importaciones y exportaciones:

// Defino un arreglo de tipo "PRODUCTO" formado por objetos (que serán de tipo "PRODUCTO" obviamente). Podría volver a
// definirse la interfaz "PRODUCTO" pero esa no es la idea (va en contra de los principios de programación y reutilidad),
// sino poder reutilizarla empleando la importación desde el archivo .ts donde fue definida.

// Para importar la interfaz lo que hay que hacer primero es exportarla desde el archivo .ts donde fue definida,
// utilizando "export" (ver el archivo 06-desestructuración-función.ts). Al utilizar "export", significa que ese 
// archivo va a disponer de esa interfaz internamente para que pueda ser reutilizada.

// Luego de exportarla, para poder utilizar la interfaz, vamos a importartarla. Para ello, se cuenta con una manera muy
// sencilla de hacerlo que no siempre funciona: dejando el cursor sobre la interfaz (en ese caso "PRODUCTO"), hacemos
// ctrl + . y seleccionamos agregar importación desde "ciertoArchivo.ts". Luego se eso se genera una línea de código
// al comienzo de nuestro archivo creando la importación (vamos a importar haciendo la desestructuración de "PRODUCTO"
// desde el archivo seleccionado).

// Hay varias maneras de utilizar las importaciones (por defecto, por nombre, asignando alias, etc.). Esta manera 
// sencilla es la tradicional.

const carritoCompras: PRODUCTO [] = [
    {
        descripcion: 'Telefono 1',
        precio: 100
    },
    {
        descripcion: 'Telefono 2',
        precio: 150
    }

];

const [ total, isv ] = calculaISV (carritoCompras);

console.log ('El total es:', total);
console.log ('El impuesto sobre ventas (ISV) es:', isv);

// Cuando hacemos la exportación de la función "calculaISV", lo que sucede es que aparece 2 veces por consola tanto el
// "total" como el "ISV", y eso es porque cuando se hace la exportación en el archivo que contiene la función y luego se
// importa en este archivo, se ejecuta 2 veces la función (es decir en los 2 archivos). Lo que pasa es que se ejecuta
// todo el código del archivo fuente a partir de donde es creada la función original, y además se ejecuta este archivo
// actual.

// Importante: al mover este archivo y renombrarlo, vamos a tener un error en la línea de código de importación, puesto
// que la ubicación ya no es la definida originalmente. Para enmendarlo, habría que también renombrar la ubicación 
// para poder localizar nuestro archivo fuente (solo se deja escrito: "./nombre del archivo").

