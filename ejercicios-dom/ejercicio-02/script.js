// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const nuevoDiv = document.createElement("div");
document.body.appendChild(nuevoDiv);

/*
2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
*/
const parrafo = document.createElement("p");
nuevoDiv.appendChild(parrafo);

/*
2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
	loop con javascript.
*/

const divParrafos = document.createElement("div");
for (let i = 0; i < 6; i++) {
  const nuevoParrafo = document.createElement("p");
  divParrafos.appendChild(nuevoParrafo);
}
document.body.appendChild(divParrafos);

/*
2.4 Inserta dinamicamente con javascript en un html una p con el
	texto 'Soy dinámico!'.
*/
const textoParrafo = document.createTextNode("Soy dinámico");
parrafo.appendChild(textoParrafo);

/*

2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'
*/
const hdos = document.querySelector("h2");
const textoH2 = document.createTextNode("Wubba Lubba dub dub");
hdos.appendChild(textoH2);

/*
2.6 Basandote en el siguiente array crea una lista ul > li con
los textos del array.

*/
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const nuevaLista = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
  const nuevaApp = document.createElement("li");
  const textoApp = document.createTextNode(apps[i]);
  nuevaApp.appendChild(textoApp);
  nuevaLista.appendChild(nuevaApp);
}
document.body.appendChild(nuevaLista);

/*
2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
*/

const nodosEliminar = document.querySelectorAll(".fn-remove-me");
for (const nodo of nodosEliminar) {
  nodo.remove();
}

/*
2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
	Recuerda que no solo puedes insertar elementos con .appendChild.
*/

const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Voy en medio!";

const divs = document.querySelectorAll("div");

document.body.insertBefore(nuevoParrafo, divs[1]);

/*
/*
2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
	.fn-insert-here
*/

const divsClase = document.querySelectorAll(".fn-insert-here");

for (const div of divsClase) {
  const parrafoDentro = document.createElement("p");
  parrafoDentro.textContent = "Voy dentro!";
  div.appendChild(parrafoDentro);
}
