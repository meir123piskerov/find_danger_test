import fs from "fs";
export default async function getList() {
  const url = await fetch(`https://spiestestserver-j49p.onrender.com/people`);
  const data = await url.json();
  fs.writeFile("PEOPLE.json", JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
}
getList();
