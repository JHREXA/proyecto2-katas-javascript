/*
. Luke Skywalker cumple años:

Modifica el siguiente código JavaScript para actualizar la edad de Luke Skywalker a 25 años.

const jedi = {nombre: "Luke Skywalker", edad: 19};

// Tu código para cambiar la edad aquí... 
*/

const jedi = { nombre: "Luke Skywalker", edad: 19 };
jedi.edad = 25;

/*
2. Presentación al estilo Leia Organa:

Crea tres variables con la siguiente información:
nombre: "Leia"

apellido: "Organa"

edad: 20

Muestra un mensaje por consola que siga la siguiente estructura:
"Soy Leia Organa, tengo 20 años y soy una princesa de Alderaan."

Utiliza la concatenación para ello.
*/
const nombre = "Leia";
const apellido = "Organa";
let edad = 20;

console.log(
  `Soy ${nombre} ${apellido}, tengo ${edad} y soy una princesa de Alderaan.`,
);

/*
3. Calculando el coste total de sables de luz:

Obtén el precio total de dos sables de luz: "Shoto de Yoda" y "sable de Darth Vader".
Imprime el resultado por consola utilizando console.log.
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Tu código para calcular el precio total aquí...
*/

const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };

let precioTotal = sable1.precio + sable2.precio;
console.log(`El precio total es: ${precioTotal}`);
