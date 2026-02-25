/*
Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

Utiliza bucles para lograrlo e imprime el objeto final por consola.
*/

const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];

const setenta = [];
const ochenta = [];
const noventa = [];
const dosmil = [];
const dosmildiez = [];
const clasificacion = new Map();

for (const peli of starWarsMovies) {
  if (peli.releaseYear > 1970 && peli.releaseYear < 1980) {
    setenta.push(peli);
  } else if (peli.releaseYear >= 1980 && peli.releaseYear < 1990) {
    ochenta.push(peli);
  } else if (peli.releaseYear >= 1990 && peli.releaseYear < 2000) {
    noventa.push(peli);
  } else if (peli.releaseYear >= 2000 && peli.releaseYear < 2010) {
    dosmil.push(peli);
  } else if (peli.releaseYear >= 2010 && peli.releaseYear < 2020) {
    dosmildiez.push(peli);
  }
}
clasificacion.set("1970", setenta);
clasificacion.set("1980", ochenta);
clasificacion.set("1990", noventa);
clasificacion.set("2000", dosmil);
clasificacion.set("2010", dosmildiez);

for (const [decada, peliculas] of clasificacion) {
  console.log(`Década ${decada}`);
  for (const peli of peliculas) {
    console.log(peli.title + "\n");
  }
}
