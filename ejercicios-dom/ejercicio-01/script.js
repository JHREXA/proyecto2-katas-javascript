//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

console.log(document.getElementsByClassName("showme"));

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
console.log(document.querySelector("#pillado"));

// 1.3 Usa querySelector para mostrar por consola todos los p
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

/*
1.4 Usa querySelector para mostrar por consola todos los elementos con
	la clase.pokemon
*/
const elements = document.getElementsByClassName("pokemon");
console.log(elements);

/*
1.5 Usa querySelector para mostrar por consola todos los elementos con
el atributo data-function="testMe".
*/
const testMe = document.querySelectorAll('[data-function="testMe"]');
console.log(testMe);

/*

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
data-function="testMe".
*/

console.log(testMe[2]);
