/*
    ===== Código de TypeScript =====
*/

// Desestructuración de Argumentos:

export interface PRODUCTO { // "Export" se utiliza porque se exporta esta interface y es reutilizada en otro archivo.ts
    descripcion: string;
    precio: number;
}

// Definimos 2 productos (objetos) de tipo "PRODUCTO":

const telefono: PRODUCTO = {
    descripcion: 'Nokia A1',
    precio: 150
}

const tableta: PRODUCTO = {
    descripcion: 'iPad Air',
    precio: 350
}

// Definimos una función para calcular el impuesto sobre ventas:

export function calculaISV (productos: PRODUCTO []): [number, number] { // El argumento que recibe la función es un arreglo de
// tipo "PRODUCTO". Es decir, es una colección del tipo de dato definido en la interface.
    
    let total = 0; // Defino la variable "total" usando let porque no es una constante, va a cambiar su valor.

    // productos.forEach ( (producto) => {
        // total += producto.precio;
        // })
    
    // Utilizando la desestructuración no necesito poner "total += producto.precio", puedo acceder directamente al
    // precio, es decir extraer la propiedad que me interesa del objeto:
    productos.forEach ( ({ precio }) => { // Puedo desetructurar todo y crear las variables acá, a la hora de utilizar 
    // ese argumento.
        total += precio;
    })

    return [ total, total * 0.15 ];    
}

const articulos = [ telefono, tableta ];

// Puedo aplicar desestructuración al arreglo que retorna la función de la siguiente manera:
const [ total, isv ] = calculaISV (articulos); // TS infiere sobre el tipo del arreglo en base al tipo de dato que
// retorna la función calculaISV => [number, number].

console.log ('El total es:', total);
console.log ('El impuesto sobre ventas (ISV) es:', isv);
