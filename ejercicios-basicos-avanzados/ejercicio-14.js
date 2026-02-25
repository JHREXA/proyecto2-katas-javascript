/*
Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

Puedes usar este array para probar tu función:
*/
const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];
function repeatCounter(list) {
  let cont = 0;
  const palabrasRepes = new Map();

  for (let i = 0; i < list.length; i++) {
    const palabra = list[i];

    if (palabrasRepes.has(palabra)) {
      palabrasRepes.set(palabra, palabrasRepes.get(palabra) + 1);
    } else {
      palabrasRepes.set(palabra, 1);
    }
  }
  return palabrasRepes;
}

const resultado = repeatCounter(words);

for (const [palabra, veces] of resultado) {
  console.log(`${palabra}: ${veces}`);
}
