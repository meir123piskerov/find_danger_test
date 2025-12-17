export default async function getList() {
  let url = await fetch(`https://spiestestserver-j49p.onrender.com/people`);
  let PEOPLE = await url.json();
  return PEOPLE;
}
