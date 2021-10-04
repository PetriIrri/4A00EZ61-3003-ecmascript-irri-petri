import fetch from "node-fetch";

function fetchFilm(url) {
  function func(resolve, reject) {
    fetch(url)
      .then((res) => res.json())
      .then((json) => resolve(json.title))
      .catch((msg) => reject(msg));
  }
  const p = new Promise(func);
  return p;
}

async function fetchData(id) {
  const url = `https://swapi.dev/api/people/${id}/`;
  const res = await fetch(url);
  const obj = await res.json();
  const name = obj.name;
  let filmArr = [];
  for (const film of obj.films) {
    filmArr.push(fetchFilm(film));
  }
  const tittles = await Promise.all(filmArr);
  return { name: name, films: tittles };
}

async function fetchAll(idArr) {
  let dataArr = [];
  for (const id of idArr) {
    dataArr.push(fetchData(id));
  }
  const result = await Promise.all(dataArr);
  return result;
}

const cliArgs = process.argv.slice(2);
fetchAll(cliArgs).then((data) => console.log(data));
