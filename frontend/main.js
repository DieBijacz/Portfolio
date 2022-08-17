const USER = 'dieBijacz'

getData(USER)

async function getData(USER) {
  await fetch(`http://127.0.0.1:5000/dieBijacz`)
    .then(response => response.json())
    .then(data => console.log(data))
}