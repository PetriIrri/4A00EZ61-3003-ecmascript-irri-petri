import fetch from "node-fetch";
import readlineSync from "readline-sync";

function fetchFilm(q) {
  function func(resolve, reject) {
    const url = q;
    fetch(q)
      .then((res) => res.json())
      .then((json) => resolve(json.title))
      .catch((msg) => reject(msg));
  }
  const p = new Promise(func);
  return p;
}

async function fetchData(q) {
  const url = `https://swapi.dev/api/people/${q}/`;
  const res = await fetch(url);
  const obj = await res.json();
  const name = obj.name;
  const tittle = await fetchFilm(obj.films[0]);
  return `name: ${name} \nFirst film: ${tittle}`;
}

const id = readlineSync.question("give character id => ");

fetchData(id)
  .then((title) => console.log(title))
  .catch((msg) => console.log(msg));
